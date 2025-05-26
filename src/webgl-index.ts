import { SdfScene } from "./sdf-scene";

import Shader from "./shader";
import WebGLSdfRenderer from "./webgl-sdf-renderer";

const sdfScene = new SdfScene();
let sdfRenderer: WebGLSdfRenderer;

function startup()
{
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

        sdfRenderer.cameraPosition.z = 10;

        requestAnimationFrame(render);
    }
}

function render()
{
    sdfRenderer.render(sdfScene);
    requestAnimationFrame(render);
}

startup();