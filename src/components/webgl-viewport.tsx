import { h, Component, createRef } from "preact";
import { ViewportOptions } from "../store/store-state";
import WebGLSdfRenderer from "../webgl/webgl-sdf-renderer";
import WebGLViewportOptions from "./webgl-viewport-options";
import { SceneConverter } from "../ray-marching/scene-converter";
import "./webgl-viewport.scss";

interface Props
{
    readonly viewportIndex: number;
    readonly options: ViewportOptions;
    readonly sceneConverter: SceneConverter;
}

export class WebGLViewport extends Component<Props>
{
    private canvasRef = createRef<HTMLCanvasElement>();
    private renderer?: WebGLSdfRenderer;

    private zoom = 20;
    private zoomMin = 1;
    private zoomMax = 80;

    private mousePosX = 0;
    private mousePosY = 0;
    private mouseDown = false;
    private renderFrameCallback: number = -1;

    public componentDidMount(): void
    {
        const canvasEl = this.canvasRef.current;
        this.renderer = WebGLSdfRenderer.create(canvasEl);
        this.renderer.canvasScale = this.props.options.renderScale;
        this.renderer.cameraDistance = 10.0;
        this.renderer.updateCamera();
        this.updateCanvasSize();

        this.renderer.setupCanvas();

        window.addEventListener('resize', this.onViewportResize);

        canvasEl.parentElement.addEventListener('pointerdown', this.onPointerDown);
        canvasEl.parentElement.addEventListener('pointermove', this.onPointerMove);
        canvasEl.parentElement.addEventListener('pointerup', this.onPointerUp);
        canvasEl.parentElement.addEventListener('wheel', this.onMouseWheel);

        this.requestRender();
    }

    public componentWillUnmount(): void
    {
        window.removeEventListener('resize', this.onViewportResize);

        const canvasEl = this.canvasRef.current;
        canvasEl.parentElement.removeEventListener('pointerdown', this.onPointerDown);
        canvasEl.parentElement.removeEventListener('pointermove', this.onPointerMove);
        canvasEl.parentElement.removeEventListener('pointerup', this.onPointerUp);
        canvasEl.parentElement.removeEventListener('wheel', this.onMouseWheel);
    }

    public render()
    {
        this.requestRender();

        let canvasClassName = 'viewport__canvas';
        if (this.props.options.pixelated)
        {
            canvasClassName += ' is-pixelated';
        }

        return <div class='viewport outer-panel'>
            <canvas className={canvasClassName} ref={this.canvasRef} />
            <WebGLViewportOptions viewportIndex={this.props.viewportIndex} options={this.props.options} />
        </div>
    }

    private updateCanvasSize = () =>
    {
        const size = this.canvasRef.current.getBoundingClientRect();
        this.renderer.resizeCanvas(size.width, size.height);
    }

    private onViewportResize = () =>
    {
        this.updateCanvasSize();
        this.manualRenderTrigger();
    }

    private renderScene = () =>
    {
        this.renderFrameCallback = -1;
        const options = this.props.options;
        this.renderer.epsilon = options.epsilon;
        this.renderer.maxMarchingSteps = options.maxMarchingStep;
        this.renderer.enableShadows = options.enableShadows;
        this.renderer.enableShowMarches = options.enableShowMarching;
        if (this.renderer.canvasScale !== options.renderScale)
        {
            this.renderer.canvasScale = options.renderScale;
            this.updateCanvasSize();
        }
        this.renderer.render(this.props.sceneConverter);
    }

    private onPointerDown = (e: PointerEvent) =>
    {
        if (e.target !== this.canvasRef.current)
        {
            return;
        }
        console.log(e);

        this.mousePosX = e.clientX;
        this.mousePosY = e.clientY;
        this.mouseDown = true;
    }

    private onPointerMove = (e: PointerEvent) =>
    {
        if (!this.mouseDown)
        {
            return;
        }

        const dx = e.clientX - this.mousePosX;
        const dy = e.clientY - this.mousePosY;

        this.mousePosX = e.clientX;
        this.mousePosY = e.clientY;

        this.renderer.orbitCamera(-dy, -dx);

        this.manualRenderTrigger();
    }

    private onPointerUp = (e: PointerEvent) =>
    {
        this.mouseDown = false;
    }

    private onMouseWheel = (e: WheelEvent) =>
    {
        const delta = e.deltaY > 0 ? 1 : -1;
        const newZoom = this.zoom + delta;
        this.zoom = Math.max(Math.min(100, newZoom), 0);
        this.renderer.cameraDistance = (this.zoom * 0.01) * (this.zoomMax - this.zoomMin) + this.zoomMin;
        this.renderer.updateCamera();

        this.manualRenderTrigger();
    }

    private manualRenderTrigger = () =>
    {
        this.requestRender();
    }

    private requestRender = () =>
    {
        if (this.renderFrameCallback < 0)
        {
            this.renderFrameCallback = requestAnimationFrame(this.renderScene);
        }
    }
}