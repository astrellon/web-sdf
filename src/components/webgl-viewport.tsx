import { h, Component, createRef } from 'preact';
import { setMaximiseViewport, ViewportOptions } from '../store/store-state';
import WebGLSdfRenderer from '../webgl/webgl-sdf-renderer';
import WebGLViewportOptions from './webgl-viewport-options';
import { SceneConverter } from '../ray-marching/scene-converter';
import { Camera } from '../ray-marching/camera';
import { store } from '../store/store';
import './webgl-viewport.scss';

interface Props
{
    readonly viewportIndex: number;
    readonly isMaximised?: boolean;
    readonly options: ViewportOptions;
    readonly camera: Camera;
    readonly sceneConverter: SceneConverter;
    readonly currentShader: string;
}

export class WebGLViewport extends Component<Props>
{
    private canvasRef = createRef<HTMLCanvasElement>();
    private renderer?: WebGLSdfRenderer;

    private mousePosX = 0;
    private mousePosY = 0;
    private mouseDown = false;
    private renderFrameCallback: number = -1;

    // public readonly camera = new Camera();

    public componentDidMount(): void
    {
        const canvasEl = this.canvasRef.current;
        this.createNewRenderer(canvasEl);

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

        const { viewportIndex, options, isMaximised } = this.props;

        let canvasClassName = 'viewport__canvas';
        if (options.pixelated)
        {
            canvasClassName += ' is-pixelated';
        }

        return <div class='viewport outer-panel'>
            <canvas class={canvasClassName} ref={this.canvasRef} />
            <WebGLViewportOptions viewportIndex={viewportIndex} options={options} />
            <div class='viewport__buttons'>
                <button onClick={this.toggleMaximise}>{isMaximised ? 'Minimise' : 'Maximise'}</button>
            </div>
        </div>
    }

    private toggleMaximise = () =>
    {
        const { isMaximised, viewportIndex } = this.props;
        store.execute(setMaximiseViewport(isMaximised ? -1 : viewportIndex));
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
        const { options, currentShader, camera, sceneConverter } = this.props;

        this.renderFrameCallback = -1;
        if (this.renderer.prevShaderText !== currentShader)
        {
            console.log('New shader!', this.renderer.prevShaderText, currentShader);
            this.renderer.destroy();
            this.createNewRenderer(this.canvasRef.current);
        }

        this.renderer.epsilon = options.epsilon;
        this.renderer.shadowSharpness = options.shadowSharpness;
        this.renderer.maxMarchingSteps = options.maxMarchingStep;
        this.renderer.enableShadows = options.enableShadows;
        this.renderer.enableShowMarches = options.enableShowMarching;
        this.renderer.enableDepth = options.enableDepth;
        this.renderer.enableNormals = options.enableNormals;
        this.renderer.enableToLightNormals = options.enableToLightNormals;
        this.renderer.enableSoftShadows = options.enableSoftShadows;
        camera.setFov(options.cameraFov);

        if (this.renderer.canvasScale !== options.renderScale)
        {
            this.renderer.canvasScale = options.renderScale;
            this.updateCanvasSize();
        }
        this.renderer.render(sceneConverter, camera);
    }

    private createNewRenderer = (canvasEl: HTMLCanvasElement) =>
    {
        this.renderer = WebGLSdfRenderer.create(canvasEl, this.props.currentShader);
        this.renderer.canvasScale = this.props.options.renderScale;
        this.updateCanvasSize();

        this.renderer.setupCanvas();
    }

    private onPointerDown = (e: PointerEvent) =>
    {
        if (e.target !== this.canvasRef.current)
        {
            return;
        }

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

        const dx = (e.clientX - this.mousePosX) * 0.005;
        const dy = (e.clientY - this.mousePosY) * 0.005;

        this.mousePosX = e.clientX;
        this.mousePosY = e.clientY;

        const { camera } = this.props;

        if (e.ctrlKey)
        {
            camera.panRelative(dx, -dy);
        }
        else if (e.shiftKey)
        {
            camera.orbitTargetAroundPosition(-dx, -dy);
        }
        else
        {
            camera.orbitPositionAroundTarget(-dx, -dy);
        }

        this.manualRenderTrigger();
    }

    private onPointerUp = (e: PointerEvent) =>
    {
        this.mouseDown = false;
    }

    private onMouseWheel = (e: WheelEvent) =>
    {
        const delta = e.deltaY > 0 ? 1 : -1;
        this.props.camera.dolly(delta);

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
