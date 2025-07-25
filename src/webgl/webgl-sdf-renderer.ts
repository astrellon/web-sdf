// @ts-ignore These are handled by esbuild
import vertText from "../shaders/vert.glsl";
// @ts-ignore
import fragText from "../shaders/frag.glsl";
// @ts-ignore
import sdfFunctionsText from "../shaders/sdf-functions.glsl";

import Shader from "../shaders/shader";
import { SceneConverter } from "../ray-marching/scene-converter";
import { quatFromEuler, quatIdentity, rquat, vec3, vec3ScaleAndAddBy, vec3TransformQuat, vec3Zero } from "../gl-matrix-ts";
import WebGLGizmos from "./webgl-gizmos";

const positions = [
    -1, -1,
    1, -1,
    1, 1,

    -1, -1,
    1, 1,
    -1, 1
];

const tempAxisQuat = quatIdentity();
function mat3ArraySetFromQuat(m: Float32Array, q: rquat)
{
    const x2 = q.x + q.x;
    const y2 = q.y + q.y;
    const z2 = q.z + q.z;

    const xx = q.x * x2;
    const yx = q.y * x2;
    const yy = q.y * y2;
    const zx = q.z * x2;
    const zy = q.z * y2;
    const zz = q.z * z2;
    const wx = q.w * x2;
    const wy = q.w * y2;
    const wz = q.w * z2;

    m[0] = 1 - yy - zz;
    m[1] = yx - wz;
    m[2] = zx + wy;

    m[3] = yx + wz;
    m[4] = 1 - xx - zz;
    m[5] = zy - wx;

    m[6] = zx - wy;
    m[7] = zy + wx;
    m[8] = 1 - xx - yy;

    return m;
}

export default class WebGLSdfRenderer
{
    public readonly gl: WebGL2RenderingContext;
    public readonly shader:Shader;
    public readonly positionBuffer: WebGLBuffer;

    public readonly uShapes: WebGLUniformLocation;
    public readonly uOperations: WebGLUniformLocation;
    public readonly uNumOperations: WebGLUniformLocation;
    public readonly uHighlight: WebGLUniformLocation;

    public readonly uMaterials: WebGLUniformLocation;

    public readonly uLights: WebGLUniformLocation;
    public readonly uNumLights: WebGLUniformLocation;

    public readonly uCameraPosition: WebGLUniformLocation;
    public readonly uCameraMatrix: WebGLUniformLocation;

    public readonly uAspectRatio: WebGLUniformLocation;

    public readonly uMaxMarchingSteps: WebGLUniformLocation;
    public readonly uEpsilon: WebGLUniformLocation;
    public readonly uFlags: WebGLUniformLocation;
    public readonly uNoise: WebGLUniformLocation;
    public readonly noiseTexture: WebGLTexture;
    public readonly gizmos: WebGLGizmos;

    public cameraPosition: vec3 = vec3Zero();
    public cameraTarget: vec3 = vec3Zero();
    public cameraRotationX = 0;
    public cameraRotationY = 0;
    public cameraDistance = 10;

    public maxMarchingSteps = 255;
    public epsilon = 0.001;

    public enableShadows = true;
    public enableShowMarches = false;

    public canvasScale = 1;

    private readonly cameraMatrixForSdfArray = new Float32Array(9);

    private prevShapes: any;
    private prevOperations: any;
    private prevHighlights: any;
    private prevMaterials: any;
    private prevLights: any;

    constructor(gl: WebGL2RenderingContext,
        shader: Shader,
        positionBuffer: WebGLBuffer,
        uShapes: WebGLUniformLocation,
        uOperations: WebGLUniformLocation,
        uNumOperations: WebGLUniformLocation,
        uHighlight: WebGLUniformLocation,
        uLights: WebGLUniformLocation,
        uNumLights: WebGLUniformLocation,
        uMaterials: WebGLUniformLocation,
        uCameraPosition: WebGLUniformLocation,
        uCameraMatrix: WebGLUniformLocation,
        uAspectRatio: WebGLUniformLocation,
        uMaxMarchingSteps: WebGLUniformLocation,
        uEpsilon: WebGLUniformLocation,
        uFlags: WebGLUniformLocation,
        uNoise: WebGLUniformLocation,
        noiseTexture: WebGLTexture,

        gizmos: WebGLGizmos
    )
    {
        this.gl = gl;
        this.shader = shader;
        this.positionBuffer = positionBuffer;

        this.uShapes = uShapes;

        this.uOperations = uOperations;
        this.uNumOperations = uNumOperations;
        this.uHighlight = uHighlight;

        this.uMaterials = uMaterials;

        this.uLights = uLights;
        this.uNumLights = uNumLights;

        this.uCameraPosition = uCameraPosition;
        this.uCameraMatrix = uCameraMatrix;
        this.uAspectRatio = uAspectRatio;

        this.uMaxMarchingSteps = uMaxMarchingSteps;
        this.uEpsilon = uEpsilon;
        this.uFlags = uFlags;
        this.uNoise = uNoise;
        this.noiseTexture = noiseTexture;

        this.gizmos = gizmos;
    }

    public setupCanvas()
    {
        // Firefox doesn't like having the canvas rendered to until something has happened, like a fillRect
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public orbitCamera(horizontal: number, vertical: number)
    {
        this.cameraRotationX += horizontal;
        this.cameraRotationY += vertical;

        this.updateCamera();
    }

    public updateCamera()
    {
        quatFromEuler(tempAxisQuat, this.cameraRotationX, this.cameraRotationY, 0);
        const forward = vec3TransformQuat(vec3Zero(), {x: 0, y: 0, z: 1}, tempAxisQuat);

        vec3ScaleAndAddBy(this.cameraPosition, this.cameraTarget, forward, this.cameraDistance);
        mat3ArraySetFromQuat(this.cameraMatrixForSdfArray, tempAxisQuat);
    }

    public resizeCanvas = (width: number, height: number) =>
    {
        const scaledWidth = width * this.canvasScale;
        const scaledHeight = height * this.canvasScale;
        this.gl.canvas.width = scaledWidth;
        this.gl.canvas.height = scaledHeight;

        this.gl.viewport(0, 0, scaledWidth, scaledHeight);

        const aspectRatio = scaledWidth / scaledHeight;
        this.gl.uniform1f(this.uAspectRatio, aspectRatio);
    }

    public render(scene: SceneConverter)
    {
        this.gl.useProgram(this.shader.program);

        if (this.prevLights !== scene.getLights())
        {
            console.info('Rendering new lights');
            this.gl.uniformMatrix2x4fv(this.uLights, false, scene.getLightDataArray());
            this.gl.uniform1i(this.uNumLights, scene.getNumLights());
            this.prevLights = scene.getLights();
        }

        if (this.prevOperations !== scene.getOperations())
        {
            console.info('Rendering new operations');
            const ops = scene.getOperationNumbers();
            this.gl.uniform1i(this.uNumOperations, ops.length);
            this.gl.uniform1iv(this.uOperations, ops);
            this.prevOperations = scene.getOperations();
        }

        if (this.prevHighlights !== scene.getHighlights())
        {
            const ops = scene.getHighlights();
            console.info('Rendering new highlight', ops, 'ops', this.prevOperations);

            this.gl.uniform2iv(this.uHighlight, ops);
            this.prevHighlights = ops;
        }

        if (this.prevShapes !== scene.getShapes())
        {
            console.info('Rendering new shapes');
            this.gl.uniformMatrix4fv(this.uShapes, false, scene.getShapeDataArray());
            this.prevShapes = scene.getShapes();
        }

        if (this.prevMaterials !== scene.getMaterials())
        {
            this.prevMaterials = scene.getMaterials();
            console.info('Rendering new materials', this.prevMaterials);
            this.gl.uniformMatrix2x4fv(this.uMaterials, false, scene.getMaterialDataArray());
        }

        this.gl.uniform4i(this.uFlags, this.enableShadows ? 1 : 0, this.enableShowMarches ? 1 : 0, 0, 0);
        this.gl.uniform1f(this.uEpsilon, this.epsilon);
        this.gl.uniform1i(this.uMaxMarchingSteps, this.maxMarchingSteps);

        this.gl.uniform3f(
            this.uCameraPosition,
            this.cameraPosition.x,
            this.cameraPosition.y,
            this.cameraPosition.z
        );
        this.gl.uniformMatrix3fv(this.uCameraMatrix, true, this.cameraMatrixForSdfArray);

        this.gl.bindTexture(this.gl.TEXTURE_2D, this.noiseTexture);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }

    public static create(canvas: HTMLCanvasElement): WebGLSdfRenderer
    {
        const gl = canvas.getContext('webgl2');
        if (gl == null)
        {
            throw new Error('Unable to get webgl2 context');
        }

        const positionBuffer = gl.createBuffer();
        if (positionBuffer == null)
        {
            throw new Error('Unable to create position buffer');
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        const includeLookup = {
            'sdf-functions': sdfFunctionsText
        }

        const shader = Shader.create(gl, includeLookup, vertText, fragText);
        gl.useProgram(shader.program);

        const positionAttributeLoc = this.getAttribute(gl, shader, 'aPosition');
        gl.enableVertexAttribArray(positionAttributeLoc);
        gl.vertexAttribPointer(positionAttributeLoc, 2, gl.FLOAT, false, 0, 0);

        const uCameraMatrix = this.getUniform(gl, shader, 'uCameraMatrix');
        const uCameraPosition = this.getUniform(gl, shader, 'uCameraPosition');
        const uAspectRatio = this.getUniform(gl, shader, 'uAspectRatio');

        const uShapes = this.getUniform(gl, shader, 'uShapes');
        const uOperations = this.getUniform(gl, shader, 'uOperations');
        const uNumOperations = this.getUniform(gl, shader, 'uNumOperations');
        const uHighlight = this.getUniform(gl, shader, 'uHighlight');

        const uMaterials = this.getUniform(gl, shader, 'uMaterials');

        const uLights = this.getUniform(gl, shader, 'uLights');
        const uNumLights = this.getUniform(gl, shader, 'uNumLights');

        const uMaxMarchingSteps = this.getUniform(gl, shader, 'uMaxMarchingSteps');
        const uEpsilon = this.getUniform(gl, shader, 'uEpsilon');
        const uFlags = this.getUniform(gl, shader, 'uFlags');
        const uNoise = this.getUniform(gl, shader, 'uNoise');

        const noiseTexture = gl.createTexture();
        const noiseCanvas = this.createNoiseCanvas();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, noiseTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 256, 0, gl.RGBA, gl.UNSIGNED_BYTE, noiseCanvas.canvas);
        this.checkError(gl);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.uniform1i(uNoise, 0);
        this.checkError(gl);

        return new WebGLSdfRenderer(gl, shader, positionBuffer,
            uShapes, uOperations, uNumOperations, uHighlight,
            uLights, uNumLights,
            uMaterials,
            uCameraPosition, uCameraMatrix, uAspectRatio,
            uMaxMarchingSteps, uEpsilon, uFlags, uNoise, noiseTexture, null);
    }

    private static checkError(gl: WebGL2RenderingContext)
    {
        const error = gl.getError();
        if (error == gl.NO_ERROR)
        {
            return;
        }

        console.error(`GL Error: ${this.getErrorMessage(error, gl)}`);
    }

    private static getErrorMessage(error: number, gl: WebGL2RenderingContext)
    {
        if (error === gl.INVALID_ENUM) return 'Invalid enum';
        if (error === gl.INVALID_VALUE) return 'Invalid value';
        if (error === gl.INVALID_OPERATION) return 'Invalid operation';
        if (error === gl.INVALID_FRAMEBUFFER_OPERATION) return 'Invalid framebuffer operation';
        if (error === gl.OUT_OF_MEMORY) return 'Out of memory';
        if (error === gl.CONTEXT_LOST_WEBGL) return 'Context lost WebGL';
        if (error === gl.NO_ERROR) return 'No error';
        return `Unknown error ${error}`;
    }

    private static createNoiseCanvas()
    {
        const canvasEl = document.createElement('canvas');
        canvasEl.width = 256;
        canvasEl.height = 256;

        const context = canvasEl.getContext('2d');
        context.fillRect(0, 0, 255, 255);

        const buff = new Uint8ClampedArray(256 * 4);

        for (let y = 0; y < 256; y++)
        {
            for (let x = 0; x < 256 * 4; x++)
            {
                buff[x] = Math.floor(Math.random() * 256);
            }

            const imageData = new ImageData(buff, 256, 1);
            context.putImageData(imageData, 0, y);
        }

        return context;
    }

    private static getAttribute(gl: WebGL2RenderingContext, shader: Shader, name: string)
    {
        const attribute = gl.getAttribLocation(shader.program, name);
        if (attribute < 0)
        {
            throw new Error(`Unable to find attribute ${name}`);
        }
        return attribute;
    }

    private static getUniform(gl: WebGL2RenderingContext, shader: Shader, name: string)
    {
        const location = gl.getUniformLocation(shader.program, name);
        if (location == null)
        {
            // throw new Error(`Unable to find uniform ${name}`);
        }
        return location;
    }
}
