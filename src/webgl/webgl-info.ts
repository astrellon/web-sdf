import { Editable } from "../common";

export interface GlParameters
{
    readonly [key: string]: any;
}

export class WebGLInfo
{
    private static glParameters: GlParameters = {};
    private static glInfoLoaded = false;

    public static getParameters()
    {
        return this.glParameters;
    }

    public static updateParameters(gl: WebGL2RenderingContext)
    {
        if (this.glInfoLoaded)
        {
            return;
        }

        const loadedParameters: Editable<GlParameters> = {}

        loadedParameters['VERSION'] = gl.getParameter(gl.VERSION);
        loadedParameters['VENDOR'] = gl.getParameter(gl.VENDOR);
        loadedParameters['RENDERER'] = gl.getParameter(gl.RENDERER);
        loadedParameters['MAX_TEXTURE_SIZE'] = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        loadedParameters['MAX_VERTEX_UNIFORM_COMPONENTS'] = gl.getParameter(gl.MAX_VERTEX_UNIFORM_COMPONENTS);
        loadedParameters['MAX_VERTEX_UNIFORM_VECTORS'] = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);

        this.glParameters = loadedParameters;
        this.glInfoLoaded = true;
    }
}