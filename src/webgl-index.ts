import { SdfScene } from "./sdf-scene";

// @ts-ignore These are handled by esbuild
import vertText from "./vert.glsl";
// @ts-ignore
import fragText from "./frag.glsl";

import Shader from "./shader";

let gl: WebGL2RenderingContext;
let shader: Shader;
const sdfScene = new SdfScene();

const positions = [
    -1, -1,
    1, -1,
    1, 1,

    -1, -1,
    1, 1,
    -1, 1
];
let positionBuffer: WebGLBuffer;

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

        positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        shader = Shader.create(gl, vertText, fragText);
        if (shader == null)
        {
            throw new Error('Unable to create shader');
        }

        gl.useProgram(shader.program);

        const positionAttributeLoc = gl.getAttribLocation(shader.program, "aPosition");
        gl.enableVertexAttribArray(positionAttributeLoc);
        gl.vertexAttribPointer(positionAttributeLoc, 2, gl.FLOAT, false, 0, 0);

        const uColour = gl.getUniformLocation(shader.program, 'uColour');
        const uAspectRatio = gl.getUniformLocation(shader.program, 'uAspectRatio');

        const aspectRatio = gl.canvas.width / gl.canvas.height;
        console.log('Aspect', aspectRatio);
        gl.uniform1f(uAspectRatio, aspectRatio);

        function testRender()
        {
            const t = Math.sin(Date.now() / 1000);
            const x = Math.sin(t) * 7;
            const z = Math.cos(t) * 7;
            sdfScene.setLight(0, {position: {x, z, y: 1.5}});

            gl.uniformMatrix2x4fv(uLights, false, sdfScene.getLightDataArray());
            gl.uniform1i(uNumLights, sdfScene.getNumLights());

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(testRender);
        }

        sdfScene.setShape(0, {
            type: 'sphere',
            shapeParams: {x: 2, y: 2, z: 1},
            maxSize: 2.0,
            diffuseColour: {x: 0.1, y: 0.9, z: 0.2, w: 1.0}
        });
        sdfScene.setShape(1, {
            type: 'sphere',
            shapeParams: {x: 1.5, y: 2, z: 0},
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
            position: {x: -4, y: -2, z: 3},
            colour: {x: 0.2, y: 1.0, z: 0.6, w: 1}
        });

        const uLights = gl.getUniformLocation(shader.program, 'uLights');
        const uNumLights = gl.getUniformLocation(shader.program, 'uNumLights');
        gl.uniformMatrix2x4fv(uLights, false, sdfScene.getLightDataArray());
        gl.uniform1i(uNumLights, sdfScene.getNumLights());

        requestAnimationFrame(testRender);
    }
}

function setupCanvas(canvas: HTMLCanvasElement)
{
    gl = canvas.getContext('webgl2');
    if (gl == null)
    {
        throw new Error('Unable to get gl context');
    }
    resizeCanvas(window.innerWidth, window.innerHeight);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    // Firefox doesn't like having the canvas rendered to until something has happened, like a fillRect
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function resizeCanvas(width: number, height: number)
{
    gl.canvas.width = width;
    gl.canvas.height = height;
}

startup();