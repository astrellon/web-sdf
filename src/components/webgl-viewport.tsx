import { h, Component, createRef } from "preact";
import { RendererOptions } from "../store/store-state";
import WebGLSdfRenderer from "../webgl/webgl-sdf-renderer";

interface Props
{
    readonly renderOptions: RendererOptions;
}

export class WebGLViewport extends Component<Props>
{
    private canvasRef = createRef<HTMLCanvasElement>();
    private renderer?: WebGLSdfRenderer;

    public componentDidMount(): void
    {
        this.renderer = WebGLSdfRenderer.create(this.canvasRef.current);
        this.renderer.canvasScale = this.props.renderOptions.renderScale;
    }

    public render()
    {
        return <canvas ref={this.canvasRef} />;
    }
}