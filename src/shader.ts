export default class Shader
{
    public readonly program: WebGLProgram;

    constructor(program: WebGLProgram)
    {
        this.program = program;
    }

    public static create(gl: WebGL2RenderingContext, vertText: string, fragText: string): Shader | null
    {
        const vert = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vert, vertText);
        gl.compileShader(vert);

        if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS))
        {
            const error = gl.getShaderInfoLog(vert);
            console.error('Vertex shader compile error', error);
        }

        const frag = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(frag, fragText);
        gl.compileShader(frag);
        if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS))
        {
            const error = gl.getShaderInfoLog(frag);
            console.error('Fragment shader compile error', error);
        }

        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);

        gl.detachShader(program, vert);
        gl.detachShader(program, frag);
        gl.deleteShader(vert);
        gl.deleteShader(frag);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        {
            gl.useProgram(null);
            gl.deleteProgram(program);
            const error = gl.getProgramInfoLog(program);
            console.error('Shader link error', error);

            return null;
        }

        return new Shader(program);
    }
}