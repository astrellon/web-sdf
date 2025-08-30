// @ts-ignore These are handled by esbuild
import vertText from "../shaders/vert.glsl";
// @ts-ignore
import sdfFunctionsText from "../shaders/sdf-functions.glsl";
// @ts-ignore
import raymarchMainText from "../shaders/raymarch.glsl";

import Shader from "../shaders/shader";
import { SceneConverter } from "../ray-marching/scene-converter";
import { mat3, quat, vec3 } from "gl-matrix";
import { noiseTexture } from "./noise-texture";

const positions = [
    -1, -1,
    1, -1,
    1, 1,

    -1, -1,
    1, 1,
    -1, 1
];

const tempAxisQuat = quat.create();

function getErrorMessage(error: number, gl: WebGL2RenderingContext)
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

export default class WebGLSdfRenderer
{
    public readonly gl: WebGL2RenderingContext;
    public readonly shader:Shader;
    public readonly positionBuffer: WebGLBuffer;

    public readonly uMaterials: WebGLUniformLocation;
    public readonly uParameters: WebGLUniformLocation;

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

    public cameraPosition: vec3 = vec3.create();
    public cameraTarget: vec3 = vec3.create();
    public cameraRotationX = 0;
    public cameraRotationY = 0;
    public cameraDistance = 10;

    public maxMarchingSteps = 255;
    public epsilon = 0.001;

    public enableShadows = true;
    public enableShowMarches = false;

    public canvasScale = 1;

    private readonly cameraMatrixForSdfArray = mat3.create();

    private prevMaterials: any;
    private prevLights: any;
    private prevParameters: any;

    public prevShaderText: string;

    constructor(gl: WebGL2RenderingContext,
        shader: Shader,
        shaderText: string,
        positionBuffer: WebGLBuffer,
        uLights: WebGLUniformLocation,
        uNumLights: WebGLUniformLocation,
        uMaterials: WebGLUniformLocation,
        uParameters: WebGLUniformLocation,
        uCameraPosition: WebGLUniformLocation,
        uCameraMatrix: WebGLUniformLocation,
        uAspectRatio: WebGLUniformLocation,
        uMaxMarchingSteps: WebGLUniformLocation,
        uEpsilon: WebGLUniformLocation,
        uFlags: WebGLUniformLocation,
        uNoise: WebGLUniformLocation,
        noiseTexture: WebGLTexture,
    )
    {
        this.gl = gl;
        this.shader = shader;
        this.prevShaderText = shaderText;
        this.positionBuffer = positionBuffer;

        this.uMaterials = uMaterials;
        this.uParameters = uParameters;

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
    }

    public destroy()
    {
        this.gl.deleteProgram(this.shader.program);
        this.gl.deleteBuffer(this.positionBuffer);
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
        quat.fromEuler(tempAxisQuat, this.cameraRotationX, this.cameraRotationY, 0);
        const forward = vec3.create();
        vec3.transformQuat(forward, [0, 0, 1], tempAxisQuat);

        vec3.scaleAndAdd(this.cameraPosition, this.cameraTarget, forward, this.cameraDistance);
        mat3.fromQuat(this.cameraMatrixForSdfArray, tempAxisQuat);
        mat3.transpose(this.cameraMatrixForSdfArray, this.cameraMatrixForSdfArray);
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

        //if (this.prevMaterials !== scene.getMaterials())
        //{
            //this.prevMaterials = scene.getMaterials();
            //console.info('Rendering new materials', this.prevMaterials);
            //this.gl.uniformMatrix2x4fv(this.uMaterials, false, scene.getMaterialDataArray());
        //}

        if (this.prevParameters !== scene.getParameters())
        {
            this.prevParameters = scene.getParameters();
            console.info('Rendering new parameters', this.prevParameters);
            this.gl.uniform1fv(this.uParameters, this.prevParameters);
        }

        this.gl.uniform4i(this.uFlags, this.enableShadows ? 1 : 0, this.enableShowMarches ? 1 : 0, 0, 0);
        this.gl.uniform1f(this.uEpsilon, this.epsilon);
        this.gl.uniform1i(this.uMaxMarchingSteps, this.maxMarchingSteps);

        this.gl.uniform3f(
            this.uCameraPosition,
            this.cameraPosition[0],
            this.cameraPosition[1],
            this.cameraPosition[2]
        );
        this.gl.uniformMatrix3fv(this.uCameraMatrix, true, this.cameraMatrixForSdfArray);

        this.gl.bindTexture(this.gl.TEXTURE_2D, this.noiseTexture);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }

    public static create(canvas: HTMLCanvasElement, assembledShaderText: string): WebGLSdfRenderer
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
            'assembled-shader': assembledShaderText,
            'sdf-functions': sdfFunctionsText
        }

        const shader = Shader.create(gl, includeLookup, vertText, raymarchMainText);
        gl.useProgram(shader.program);

        const positionAttributeLoc = this.getAttribute(gl, shader, 'aPosition');
        gl.enableVertexAttribArray(positionAttributeLoc);
        gl.vertexAttribPointer(positionAttributeLoc, 2, gl.FLOAT, false, 0, 0);

        const uCameraMatrix = this.getUniform(gl, shader, 'uCameraMatrix');
        const uCameraPosition = this.getUniform(gl, shader, 'uCameraPosition');
        const uAspectRatio = this.getUniform(gl, shader, 'uAspectRatio');

        const uMaterials = this.getUniform(gl, shader, 'uMaterials');

        const uLights = this.getUniform(gl, shader, 'uLights');
        const uNumLights = this.getUniform(gl, shader, 'uNumLights');
        const uParameters = this.getUniform(gl, shader, 'uParams');

        const uMaxMarchingSteps = this.getUniform(gl, shader, 'uMaxMarchingSteps');
        const uEpsilon = this.getUniform(gl, shader, 'uEpsilon');
        const uFlags = this.getUniform(gl, shader, 'uFlags');
        const uNoise = this.getUniform(gl, shader, 'uNoise');

        const glNoiseTexture = gl.createTexture();
        const noiseCanvas = noiseTexture;
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, glNoiseTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 256, 0, gl.RGBA, gl.UNSIGNED_BYTE, noiseCanvas.canvas);
        this.checkError(gl);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.uniform1i(uNoise, 0);
        this.checkError(gl);

        return new WebGLSdfRenderer(gl, shader, assembledShaderText, positionBuffer,
            uLights, uNumLights,
            uMaterials,
            uParameters,
            uCameraPosition, uCameraMatrix, uAspectRatio,
            uMaxMarchingSteps, uEpsilon, uFlags, uNoise, glNoiseTexture);
    }

    private static checkError(gl: WebGL2RenderingContext)
    {
        const error = gl.getError();
        if (error == gl.NO_ERROR)
        {
            return;
        }

        console.error(`GL Error: ${getErrorMessage(error, gl)}`);
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
