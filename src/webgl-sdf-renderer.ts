// @ts-ignore These are handled by esbuild
import vertText from "./vert.glsl";
// @ts-ignore
import fragText from "./frag.glsl";
import Shader from "./shader";
import { SdfScene } from "./sdf-scene";
import { mat3Identity, quat, quatIdentity, vec3, vec3Zero } from "./gl-matrix-ts";

const positions = [
    -1, -1,
    1, -1,
    1, 1,

    -1, -1,
    1, 1,
    -1, 1
];

export default class WebGLSdfRenderer
{
    public readonly gl: WebGL2RenderingContext;
    public readonly shader:Shader;
    public readonly positionBuffer: WebGLBuffer;

    public readonly uShapes: WebGLUniformLocation;
    public readonly uOperations: WebGLUniformLocation;
    public readonly uNumOperations: WebGLUniformLocation;

    public readonly uLights: WebGLUniformLocation;
    public readonly uNumLights: WebGLUniformLocation;

    public readonly uCameraPosition: WebGLUniformLocation;
    public readonly uCameraMatrix: WebGLUniformLocation;

    public readonly uAspectRatio: WebGLUniformLocation;

    public cameraPosition: vec3 = vec3Zero();
    public cameraRotation: quat = quatIdentity();

    constructor(gl: WebGL2RenderingContext,
        shader: Shader,
        positionBuffer: WebGLBuffer,
        uShapes: WebGLUniformLocation,
        uOperations: WebGLUniformLocation,
        uNumOperations: WebGLUniformLocation,
        uLights: WebGLUniformLocation,
        uNumLights: WebGLUniformLocation,
        uCameraPosition: WebGLUniformLocation,
        uCameraMatrix: WebGLUniformLocation,
        uAspectRatio: WebGLUniformLocation)
    {
        this.gl = gl;
        this.shader = shader;
        this.positionBuffer = positionBuffer;

        this.uShapes = uShapes;

        this.uOperations = uOperations;
        this.uNumOperations = uNumOperations;

        this.uLights = uLights;
        this.uNumLights = uNumLights;

        this.uCameraPosition = uCameraPosition;
        this.uCameraMatrix = uCameraMatrix;
        this.uAspectRatio = uAspectRatio;
    }

    public setupCanvas()
    {
        this.resizeCanvas(window.innerWidth, window.innerHeight);

        // Firefox doesn't like having the canvas rendered to until something has happened, like a fillRect
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public resizeCanvas = (width: number, height: number) =>
    {
        this.gl.canvas.width = width;
        this.gl.canvas.height = height;

        this.gl.viewport(0, 0, width, height);

        const aspectRatio = width / height;
        console.log('Aspect', aspectRatio);
        this.gl.uniform1f(this.uAspectRatio, aspectRatio);
    }

    public render(scene: SdfScene)
    {
        const t = Date.now() / 1000;
        const tx = Math.cos(t);
        const ty = Math.sin(t);
        const x = tx * 7;
        const z = ty * 7;
        scene.setLight(0, { position: { x, z, y: 1.5 } });

        scene.setShape(1, {
            position: { x: x / 5, y: z / 7, z: 0 },
        });

        this.gl.uniformMatrix2x4fv(this.uLights, false, scene.getLightDataArray());
        this.gl.uniform1i(this.uNumLights, scene.getNumLights());

        const ops = scene.getOperationNumbers();
        this.gl.uniform1i(this.uNumOperations, ops.length);
        this.gl.uniform1iv(this.uOperations, ops);

        this.gl.uniformMatrix4fv(this.uShapes, false, scene.getShapeDataArray());
        this.gl.uniformMatrix2x4fv(this.uLights, false, scene.getLightDataArray());
        this.gl.uniform1i(this.uNumLights, scene.getNumLights());

        this.gl.uniform3f(
            this.uCameraPosition,
            this.cameraPosition.x,
            this.cameraPosition.y,
            this.cameraPosition.z
        );

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

        const shader = Shader.create(gl, vertText, fragText);
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

        const uLights = this.getUniform(gl, shader, 'uLights');
        const uNumLights = this.getUniform(gl, shader, 'uNumLights');

        gl.uniformMatrix3fv(uCameraMatrix, false, [1, 0, 0,  0, 1, 0,  0, 0, 1]);

        return new WebGLSdfRenderer(gl, shader, positionBuffer,
            uShapes, uOperations, uNumOperations,
            uLights, uNumLights,
            uCameraPosition, uCameraMatrix, uAspectRatio);
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
            throw new Error(`Unable to find uniform ${name}`);
        }
        return location;
    }
}