import { h, Component } from 'preact';
import { CameraMove, setExampleModal, setMaximiseViewport, setRawSceneModal, setViewportOptions, ViewportOptions } from '../store/store-state';
import { store } from '../store/store';
import Popover from './popover';
import { LabelledRange } from './labelled-range';
import './webgl-viewport-options.scss';

interface Props
{
    readonly viewportIndex: number;
    readonly options: ViewportOptions;
    readonly isMaximised?: boolean;
}

export default class WebGLViewportOptions extends Component<Props>
{
    public render(props: Props)
    {
        const { options, isMaximised } = this.props;
        const { pixelated, renderScale,
            enableShadows, enableShowMarching, enableDepth,
            enableNormals, enableToLightNormals,
            epsilon, shadowSharpness, maxMarchingStep,
            cameraFov, cameraMove } = options;

        return <div class='viewport-options'>
                <Popover text='Menu'>
                    <div class='control-group-vertical'>
                        <button onClick={this.togglePixelated}>{ pixelated ? 'Smooth' : 'Pixelated' }</button>
                        <select onChange={this.changeRenderScale} value={renderScale}>
                            <option value='2'>2x</option>
                            <option value='1.5'>1.5x</option>
                            <option value='1'>1x</option>
                            <option value='0.5'>0.5x</option>
                            <option value='0.25'>0.25x</option>
                            <option value='0.125'>0.125x</option>
                        </select>
                        <select onChange={this.changeCameraMove} value={cameraMove}>
                            <option value='orbit'>Orbit</option>
                            <option value='look'>Look</option>
                            <option value='pan'>Pan</option>
                            <option value='dolly'>Dolly</option>
                        </select>
                        <button onClick={this.toggleMaximise}>{isMaximised ? 'Minimise' : 'Maximise'}</button>
                        <button onClick={this.toggleShadows}>{ enableShadows ? 'Hide Shadows' : 'Show Shadows' }</button>
                        <button onClick={this.toggleMarching}>{ enableShowMarching ? 'Hide Marching' : 'Show Marching' }</button>
                        <button onClick={this.toggleDepth}>{ enableDepth ? 'Hide Depth' : 'Show Depth' }</button>
                        <button onClick={this.toggleNormals}>{ enableNormals ? 'Hide Normals' : 'Show Normals' }</button>
                        <button onClick={this.toggleToLightNormals}>{ enableToLightNormals ? 'Hide To Light' : 'Show To Light' }</button>
                        <button onClick={this.showExamples}>Show Examples</button>
                        <button onClick={this.showRawScene}>JSON Scene</button>
                    </div>
                    <LabelledRange label={`Epsilon ${epsilon}`} inputProps={{value: epsilon, min: 0, max: 0.1, step: 0.000001, onInput: this.changeEpsilon}} />
                    <LabelledRange label={`Marching Steps ${maxMarchingStep}`} inputProps={{value: maxMarchingStep, min: 0, max: 1000, step: 1, onInput: this.changeMarchingSteps}} />
                    <LabelledRange label={`Shadows ${shadowSharpness}`} inputProps={{value: shadowSharpness, min: 0.0, max: 256, step: 0.1, onInput: this.changeShadowSharpness}} />
                    <LabelledRange label={`Camera FOV ${cameraFov}`} inputProps={{value: cameraFov, min: 1.0, max: 90, step: 0.1, onInput: this.changeCameraFov}} />
                </Popover>
        </div>;
    }

    private toggleMaximise = () =>
    {
        const { isMaximised, viewportIndex } = this.props;
        store.execute(setMaximiseViewport(isMaximised ? -1 : viewportIndex));
    }

    private showRawScene = () =>
    {
        store.execute(setRawSceneModal({show: true}));
    }

    private showExamples = () =>
    {
        store.execute(setExampleModal({show: true}));
    }

    private changeEpsilon = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).valueAsNumber;
        if (!isFinite(value))
        {
            console.warn(`Epsilon parse failed`);
            return;
        }

        this.updateOptions({ epsilon: value });
    }

    private changeShadowSharpness = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).valueAsNumber;
        if (!isFinite(value))
        {
            console.warn(`Shadow sharpness parse failed`);
            return;
        }

        this.updateOptions({ shadowSharpness: value });
    }

    private changeMarchingSteps = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).valueAsNumber;
        if (!isFinite(value))
        {
            console.warn(`Marching steps parse failed`);
            return;
        }

        this.updateOptions({ maxMarchingStep: Math.round(value) });
    }

    private changeCameraFov = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).valueAsNumber;
        if (!isFinite(value))
        {
            console.warn(`Marching steps parse camera fov`);
            return;
        }

        this.updateOptions({ cameraFov: value });
    }

    private togglePixelated = (e: Event) =>
    {
        this.updateOptions({ pixelated: !this.props.options.pixelated });
    }

    private toggleShadows = (e: Event) =>
    {
        this.updateOptions({ enableShadows: !this.props.options.enableShadows });
    }

    private toggleMarching = (e: Event) =>
    {
        this.updateOptions({ enableShowMarching: !this.props.options.enableShowMarching });
    }

    private toggleDepth = (e: Event) =>
    {
        this.updateOptions({ enableDepth: !this.props.options.enableDepth });
    }

    private toggleNormals = (e: Event) =>
    {
        this.updateOptions({ enableNormals: !this.props.options.enableNormals });
    }

    private toggleToLightNormals = (e: Event) =>
    {
        this.updateOptions({ enableToLightNormals: !this.props.options.enableToLightNormals });
    }

    private updateOptions = (options: Partial<ViewportOptions>) =>
    {
        console.log('Options', options);
        store.execute(setViewportOptions(this.props.viewportIndex, options));
    }

    private changeCameraMove = (e: Event) =>
    {
        const selectedValue = (e.target as HTMLSelectElement).value as CameraMove;
        store.execute(setViewportOptions(this.props.viewportIndex, { cameraMove: selectedValue, }));
    }

    private changeRenderScale = (e: Event) =>
    {
        const selectedValue = (e.target as HTMLSelectElement).value;
        const value = Number.parseFloat(selectedValue);
        if (isFinite(value))
        {
            store.execute(setViewportOptions(this.props.viewportIndex, { renderScale: value }));
        }
        else
        {
            console.warn('Unable to parse canvas scale', selectedValue);
        }
    }
}
