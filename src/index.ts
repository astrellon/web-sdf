import { WorkerWrapper } from "./worker-wrapper";
import { mat3Identity, rvec3, vec3Zero } from "./gl-matrix-ts";
import { quatIdentity, quatNormalize } from "./gl-matrix-ts/quat";
import { renderScene1 } from "./render-scenes";
import { WorkerRenderRequest } from "./states";
import { createViewMatrix } from "./ray-marching";
import { SdfScene } from "./sdf-scene";

const workers: WorkerWrapper[] = [];
const blocksX = 1;
const blocksY = navigator.hardwareConcurrency;

let context: CanvasRenderingContext2D;
let waitingToFinish = 0;
let renderEnabled = true;

let mainThreadBuffer: ArrayBuffer;
let imageDataArray: Uint8ClampedArray;
let canvasScale = 1.0;

const sdfScene = new SdfScene();

function startup()
{
    const toggleRenderButton = document.getElementById('toggle-render');
    toggleRenderButton.addEventListener('click', () =>
    {
        if (renderEnabled)
        {
            toggleRenderButton.innerText = 'Start';
            renderEnabled = false;
        }
        else
        {
            toggleRenderButton.innerText = 'Stop';
            renderEnabled = true;

            doRender();
        }
    });

    document.getElementById('select-render-scale').addEventListener('change', (e: Event) =>
    {
        const selectedValue = (e.target as HTMLSelectElement).value;
        const value = Number.parseFloat(selectedValue);
        if (isFinite(value))
        {
            canvasScale = value;
            updateCanvasSize();
        }
        else
        {
            console.warn('Unable to parse canvas scale', selectedValue);
        }
    })

    window.addEventListener('resize', (e) =>
    {
        updateCanvasSize();
        doRender();
    });

    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;
    if (!canvas)
    {
        console.error("Couldn't find main-canvas");
    }
    else
    {
        setupCanvas(canvas);

        setupWorkers();
        // mainThreadBuffer = new ArrayBuffer(window.innerWidth * window.innerHeight * 4);
        // imageDataArray = new Uint8ClampedArray(mainThreadBuffer);
        doRender();
    }
}

function doRender()
{
    updateLights();
    // renderMainThread();
    renderWorkers();
}

function updateLights()
{
    const t = (Date.now() / 1000) * 3;
    const x = Math.sin(t) * 7;
    const z = Math.cos(t) * 3;
    sdfScene.setLight(0, {position: {x, z, y: 1}});
}

function setupCanvas(canvas: HTMLCanvasElement)
{
    context = canvas.getContext('2d');
    resizeCanvas(window.innerWidth, window.innerHeight);

    // Firefox doesn't like having the canvas rendered to until something has happened, like a fillRect
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function resizeCanvas(width: number, height: number)
{
    context.canvas.width = width;
    context.canvas.height = height;
}

function updateCanvasSize()
{
    const width = window.innerWidth * canvasScale;
    const height = window.innerHeight * canvasScale;
    console.log('Updating canvas size to', width, height, canvasScale);

    resizeCanvas(width, height);
}

function setupWorkers()
{
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;

    const floorWidth = Math.floor(canvasWidth / blocksX);
    const floorHeight = Math.floor(canvasHeight / blocksY);

    const remainingWidth = canvasWidth - floorWidth * (blocksX - 1);
    const remainingHeight = canvasHeight - floorHeight * (blocksY - 1);

    let xPos = 0;
    let yPos = 0;

    for (let y = 0; y < blocksY; y++)
    {
        const height = y > 0 && y === blocksY - 1 ? remainingHeight : floorHeight;

        for (let x = 0; x < blocksX; x++)
        {
            const width = x > 0 && x === blocksX - 1 ? remainingWidth : floorWidth;

            const worker = new WorkerWrapper(width, height, xPos, yPos, x, y);
            worker.onRender.add(onWorkerRendered);
            workers.push(worker);

            xPos += width;
        }

        xPos = 0;
        yPos += height;
    }

    const q = quatIdentity();
    quatNormalize(q);
}

function renderMainThread()
{
    console.time('Main thread render');

    // const camZ = Math.sin(Date.now() / 1000) + 6;
    // const cameraPosition: ReadonlyVec3 = [0, 0, camZ];
    // const t = Date.now() / 1000;
    const t= 0;
    const x = Math.sin(t) * 20;
    const z = Math.cos(t) * 20;
    cameraPosition.x = x;
    cameraPosition.y = 3;
    cameraPosition.z = z;
    createViewMatrix(cameraMatrix, cameraPosition, cameraTarget, cameraUp);

    const request: WorkerRenderRequest = {
        type: 'render',
        numLights: sdfScene.getNumLights(),
        lightData: sdfScene.getLightDataArray(),
        width: window.innerWidth,
        height: window.innerHeight,
        totalWidth: window.innerWidth,
        totalHeight: window.innerHeight,
        buffer: mainThreadBuffer,
        xPos: 0,
        yPos: 0,
        cameraMatrix, cameraPosition, time: t
    }
    renderScene1(request);

    const imageData = new ImageData(imageDataArray, window.innerWidth, window.innerHeight);
    context.putImageData(imageData, 0, 0);
    console.timeEnd('Main thread render');
}

const cameraMatrix = mat3Identity();
const cameraPosition = vec3Zero();
const cameraTarget = vec3Zero();
const cameraUp: rvec3 = {x: 0, y: 1, z: 0};
function renderWorkers()
{
    if (!renderEnabled)
    {
        return;
    }

    console.time('Render');
    const { width, height } = context.canvas;

    // const t = Date.now() / 1000;
    const t = 0;
    const x = Math.sin(t) * 20;
    const z = Math.cos(t) * 20;
    cameraPosition.x = x;
    cameraPosition.y = 5;
    cameraPosition.z = z;
    createViewMatrix(cameraMatrix, cameraPosition, cameraTarget, cameraUp);

    for (const worker of workers)
    {
        waitingToFinish++;
        worker.doRender(width, height, cameraPosition, cameraMatrix, t, sdfScene);
    }
}

function onWorkerRendered(worker: WorkerWrapper)
{
    waitingToFinish--;

    // console.log("Rendered at", worker.xIndex, worker.yIndex, " still waiting for ", waitingToFinish);

    if (waitingToFinish === 0)
    {
        console.timeEnd('Render');
        applyWorkerRenders();
    }
}

function applyWorkerRenders()
{
    console.log('Applying worker renders');
    for (const worker of workers)
    {
        const imageDataArray = new Uint8ClampedArray(worker.getImageData());
        const imageData = new ImageData(imageDataArray, worker.width, worker.height);
        context.putImageData(imageData, worker.xPos, worker.yPos);
    }

    requestAnimationFrame(renderWorkers);
}

startup();