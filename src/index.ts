import { WorkerWrapper } from "./worker-wrapper";
import { WorkerRenderRequest } from "./states";
import { renderScene1 } from "./render-scenes";

const workers: WorkerWrapper[] = [];
const blocksX = 2;
const blocksY = 12;

let context: CanvasRenderingContext2D;
let waitingToFinish = 0;
let renderEnabled = true;

(self as any).stopRender = () =>
{
    console.log("Stopping render");
    renderEnabled = false;
}
(self as any).renderAgain = () =>
{
    console.log("Rendering again");
    renderMainThread();
}

let mainThreadBuffer: ArrayBuffer;
let imageDataArray: Uint8ClampedArray;

function startup()
{
    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;
    if (!canvas)
    {
        console.error("Couldn't find main-canvas");
    }
    else
    {
        setupCanvas(canvas);

        // setupWorkers();
        // renderWorkers();
        mainThreadBuffer = new ArrayBuffer(window.innerWidth * window.innerHeight * 4);
        imageDataArray = new Uint8ClampedArray(mainThreadBuffer);
        renderMainThread();
    }
}

function setupCanvas(canvas: HTMLCanvasElement)
{
    context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    // Firefox doesn't like having the canvas rendered to until something has happened, like a fillRect
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function setupWorkers()
{
    const floorWidth = Math.floor(window.innerWidth / blocksX);
    const floorHeight = Math.floor(window.innerHeight / blocksY);

    const remainingWidth = window.innerWidth - floorWidth * (blocksX - 1);
    const remainingHeight = window.innerHeight - floorHeight * (blocksY - 1);

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
}

function renderMainThread()
{
    console.time('Main thread render');

    // const camZ = Math.sin(Date.now() / 1000) + 6;
    // const cameraPosition: ReadonlyVec3 = [0, 0, camZ];

    const request: WorkerRenderRequest = {
        type: 'render',
        buffer: mainThreadBuffer,
        width: window.innerWidth,
        height: window.innerHeight,
        totalWidth: window.innerWidth,
        totalHeight: window.innerHeight,
        xPos: 0,
        yPos: 0,
        cameraPosition: [0, 0, 5]
    }
    renderScene1(request);

    const imageData = new ImageData(imageDataArray, window.innerWidth, window.innerHeight);
    context.putImageData(imageData, 0, 0);
    console.timeEnd('Main thread render');
}

function renderWorkers()
{
    if (!renderEnabled)
    {
        return;
    }

    console.time('Render');
    const { width, height } = context.canvas;

    const camZ = Math.sin(Date.now() / 1000) + 6;
    const cameraPosition: ReadonlyVec3 = [0, 0, camZ];
    for (const worker of workers)
    {
        waitingToFinish++;
        worker.doRender(width, height, cameraPosition);
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