// @ts-ignore These are handled by esbuild
import vertText from "../shaders/gizmos_vert.glsl";
// @ts-ignore
import fragText from "../shaders/gizmos_frag.glsl";

import Shader from "../shaders/shader";
import WebGLSdfRenderer from "./webgl-sdf-renderer";
import {mat4Identity, mat4SetLookAt} from "../gl-matrix-ts";

const positions =[
    0, 0, 0,
    1, 0, 0,
    1, 0.5, 0
];

export default class WebGLGizmos
{
    private readonly parent: WebGLSdfRenderer;
    private readonly shader: Shader;
    private readonly positionBuffer: WebGLBuffer;
    private readonly uModel: WebGLUniformLocation;
    private readonly uProjection: WebGLUniformLocation;

    private readonly cameraMatrixForWebGlArray = new Float32Array(16);
    private readonly cameraMatrixForWebGl = mat4Identity();

    constructor(parent: WebGLSdfRenderer, 
        shader: Shader,
        positionBuffer: WebGLBuffer,
        uModel: WebGLUniformLocation,
        uProjection: WebGLUniformLocation)
    {
        this.parent = parent;
        this.shader = shader;
        this.positionBuffer = positionBuffer;
        this.uModel = uModel;
        this.uProjection = uProjection;
    }

    public render()
    {
        const { gl, cameraTarget, cameraPosition } = this.parent;
        gl.useProgram(this.shader.program);

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        
        mat4SetLookAt(this.cameraMatrixForWebGl, cameraPosition, cameraTarget, {x: 0, y: 1, z: 0});

        gl.uniform4f(this.uProjection, false, this.cameraMatrixForWebGlArray);
    }

    public static create(gl: WebGL2RenderingContext)
    {
        const shader = Shader.create(gl, {}, vertText, fragText);
        gl.useProgram(shader);

        const positionAttributeLoc = this.getAttribute(gl, shader, 'aPosition');
        gl.enableVertexAttribArray(positionAttributeLoc);
        gl.vertexAttribPointer(positionAttributeLoc, 4, gl.FLOAT, false, 0, 0);
        
        const uModel = this.getUniform(gl, shader, 'uModel');
        const uProjection = this.getUniform(gl, shader, 'uProjection');
        
        const positionBuffer = gl.createBuffer();
        if (positionBuffer == null)
        {
            throw new Error('Unable to create position buffer');
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    }
}
