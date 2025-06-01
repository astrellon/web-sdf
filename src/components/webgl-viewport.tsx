import { h, Component, createRef } from "preact";
import { ViewportOptions } from "../store/store-state";
import WebGLSdfRenderer from "../webgl/webgl-sdf-renderer";
import "./webgl-viewport.scss";

interface Props
{
    readonly viewportIndex: number;
    readonly options: ViewportOptions;
}

export class WebGLViewport extends Component<Props>
{
    private canvasRef = createRef<HTMLCanvasElement>();
    private renderer?: WebGLSdfRenderer;

    public componentDidMount(): void
    {
        this.renderer = WebGLSdfRenderer.create(this.canvasRef.current);
        this.renderer.canvasScale = this.props.options.renderScale;
    }

    public render()
    {
        return <canvas className="viewport__canvas" ref={this.canvasRef} />;
    }
}