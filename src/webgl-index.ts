import { SdfOpCodeIntersection, SdfScene } from "./sdf-scene";

import WebGLSdfRenderer from "./webgl-sdf-renderer";

const sdfScene = new SdfScene();
let sdfRenderer: WebGLSdfRenderer;

let renderEnabled = true;

let time = 0;
let deltaTime = 0;

let timeSinceStart = 0;

let elMaxMarchingStep = document.getElementById('max-marching-steps') as HTMLInputElement;
let elMaxMarchingStepValue = document.getElementById('max-marching-steps_value') as HTMLInputElement;
let elEnableShadows = document.getElementById('enable-shadows') as HTMLInputElement;
let elEnableShowMarching = document.getElementById('enable-show-marching') as HTMLInputElement;

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

            time = Date.now();
            requestAnimationFrame(render);
        }
    });

    document.getElementById('select-render-scale').addEventListener('change', (e: Event) =>
    {
        const selectedValue = (e.target as HTMLSelectElement).value;
        const value = Number.parseFloat(selectedValue);
        if (isFinite(value))
        {
            // canvasScale = value;
            sdfRenderer.canvasScale = value;
            sdfRenderer.handleResize();
        }
        else
        {
            console.warn('Unable to parse canvas scale', selectedValue);
        }
    })

    window.addEventListener('resize', (e) =>
    {
        sdfRenderer.handleResize();
        if (!renderEnabled)
        {
            render();
        }
    });

    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;
    if (!canvas)
    {
        console.error("Couldn't find main-canvas");
    }
    else
    {
        sdfRenderer = WebGLSdfRenderer.create(canvas);
        sdfRenderer.setupCanvas();

        sdfScene.setShape(0, {
            type: 'sphere',
            shapeParams: {x: 1, y: 2, z: 1},
            maxSize: 2.0,
            diffuseColour: {x: 0.1, y: 0.9, z: 0.2, w: 1.0}
        });
        sdfScene.setShape(1, {
            type: 'hexPrism',
            shapeParams: {x: 1.0, y: 2, z: 0},
            maxSize: 1.5
        });
        sdfScene.setShape(2, {
            type: 'box',
            shapeParams: {x: 6, y: 1, z: 6},
            position: {x: 0, y: -1.5, z: 0},
            diffuseColour: {x: 0.2, y: 0.25, z: 0.3, w: 1.0}
        });
        sdfScene.setOperations([0, 2, 'union', 1, 'subtraction']);

        sdfScene.setLight(0, {
            position: {x: 4, y: 2, z: 3},
            colour: {x: 1.0, y: 0.8, z: 0.6, w: 1}
        });
        sdfScene.setLight(1, {
            position: {x: -4, y: 2, z: 3},
            colour: {x: 0.2, y: 1.0, z: 0.6, w: 1}
        });

        sdfRenderer.cameraDistance = 10.0;
        sdfRenderer.updateCamera();
        window.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('wheel', onMouseWheel);

        elMaxMarchingStep.addEventListener('input', (e: InputEvent) =>
        {
            sdfRenderer.maxMarchingSteps = Math.round(parseFloat(elMaxMarchingStep.value));
            elMaxMarchingStepValue.innerText = sdfRenderer.maxMarchingSteps.toString(10);
            manualRenderTrigger();
        });
        elEnableShadows.addEventListener('change', (e: InputEvent) =>
        {
            sdfRenderer.enableShadows = elEnableShadows.checked;
            manualRenderTrigger();
        });
        elEnableShowMarching.addEventListener('change', (e: InputEvent) =>
        {
            sdfRenderer.enableShowMarches = elEnableShowMarching.checked;
            manualRenderTrigger();
        });

        time = Date.now();
        requestAnimationFrame(render);
    }
}

let mousePosX = 0;
let mousePosY = 0;
let mouseDown = false;
function onPointerDown(e: PointerEvent)
{
    if (e.target !== document.body)
    {
        return;
    }

    mousePosX = e.clientX;
    mousePosY = e.clientY;
    mouseDown = true;
}

function onPointerMove(e: PointerEvent)
{
    if (!mouseDown)
    {
        return;
    }

    const dx = e.clientX - mousePosX;
    const dy = e.clientY - mousePosY;

    mousePosX = e.clientX;
    mousePosY = e.clientY;

    sdfRenderer.orbitCamera(dy, dx);

    manualRenderTrigger();
}

function onPointerUp(e: PointerEvent)
{
    mouseDown = false;
}

let zoom = 20;
const zoomMin = 1;
const zoomMax = 80;
function onMouseWheel(e: WheelEvent)
{
    const delta = e.deltaY > 0 ? 1 : -1;
    const newZoom = zoom + delta;
    zoom = Math.max(Math.min(100, newZoom), 0);
    sdfRenderer.cameraDistance = (zoom * 0.01) * (zoomMax - zoomMin) + zoomMin;
    sdfRenderer.updateCamera();

    manualRenderTrigger();
}

function manualRenderTrigger()
{
    // If the renderer is not enabled, then we'll manually call a render
    if (!renderEnabled)
    {
        sdfRenderer.render(sdfScene);
    }
}

function render()
{
    let now = Date.now();
    deltaTime = time - now;
    time = now;

    timeSinceStart += deltaTime;

    const tx = Math.cos(timeSinceStart / 1000);
    const ty = Math.sin(timeSinceStart / 1000);
    const x = tx * 7;
    const z = ty * 7;
    sdfScene.setLight(0, { position: { x, z, y: 1.5 } });

    sdfScene.setShape(1, {
        position: { x: x / 5, y: z / 7, z: 0 },
    });

    sdfRenderer.render(sdfScene);

    if (renderEnabled)
    {
        requestAnimationFrame(render);
    }
}

startup();