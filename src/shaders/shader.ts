interface ShaderLookup
{
    readonly [name: string]: string
}

const includePragma = /^#include\s+\<([^\>]+)\>/gmi;

export default class Shader
{
    public readonly program: WebGLProgram;

    constructor(program: WebGLProgram)
    {
        this.program = program;
    }

    public static assembleShader(includes: ShaderLookup, text: string)
    {
        const matches = text.matchAll(includePragma);
        for (const match of matches)
        {
            let toInclude = includes[match[1]];
            if (toInclude === undefined)
            {
                console.error(`Unknown shader include ${match[1]}`);
                toInclude = '';
            }

            text = text.replace(match[0], toInclude);
        }

        return text;
    }

    public static create(gl: WebGL2RenderingContext, includes: ShaderLookup, vertText: string, fragText: string): Shader
    {
        function cleanup()
        {
            if (program != null)
            {
                gl.detachShader(program, vert);
                gl.detachShader(program, frag);
            }

            if (vert != null)
            {
                gl.deleteShader(vert);
            }

            if (frag != null)
            {
                gl.deleteShader(frag);
            }
        }

        const vert = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vert, this.assembleShader(includes, vertText));
        gl.compileShader(vert);

        if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS))
        {
            const error = gl.getShaderInfoLog(vert);
            console.error('Vertex shader compile error', error);

            cleanup();
            throw new Error(`Vertex shader compile error ${error}`);
        }

        const frag = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(frag, this.assembleShader(includes, fragText));
        gl.compileShader(frag);
        if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS))
        {
            const error = gl.getShaderInfoLog(frag);
            console.error('Fragment shader compile error', error);

            cleanup();
            throw new Error(`Fragment shader compile error ${error}`);
        }

        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);

        cleanup();

        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        {
            gl.useProgram(null);
            gl.deleteProgram(program);

            const error = gl.getProgramInfoLog(program);
            console.error('Shader link error', error);

            throw new Error(`Shader link error ${error}`);
        }

        return new Shader(program);
    }
}