import { h, Component, Attributes } from 'preact';
import { setRawSceneModal, setViewportOptions, ViewportOptions } from '../store/store-state';
import { store } from '../store/store';
import "./webgl-viewport-options.scss";
import Popover from './popover';

interface Props
{
    readonly viewportIndex: number;
    readonly options: ViewportOptions;
}

interface LabeledRangeProps
{
    readonly label: string;
    readonly inputProps: any;
}

const LabeledRange = (props: LabeledRangeProps) =>
{
    return <label style={{'display': 'inline-block'}}>
        {props.label}
        <input style={{'display': 'block'}} type='range' {...props.inputProps} />
    </label>
}

export default class WebGLViewportOptions extends Component<Props>
{
    public render(props: Props)
    {
        const { pixelated, renderScale, enableShadows, enableShowMarching, epsilon, maxMarchingStep } = this.props.options;

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
                        <button onClick={this.toggleShadows}>{ enableShadows ? 'Hide Shadows' : 'Show Shadows' }</button>
                        <button onClick={this.toggleMarching}>{ enableShowMarching ? 'Hide Marching' : 'Show Marching' }</button>
                        <button onClick={this.showRawScene}>JSON Scene</button>
                    </div>
                    <LabeledRange label={`Epsilon ${epsilon}`} inputProps={{value: epsilon, min: 0, max: 0.1, step: 0.000001, onInput: this.changeEpsilon}} />
                    <LabeledRange label={`Marching Steps ${maxMarchingStep}`} inputProps={{value: maxMarchingStep, min: 0, max: 1000, step: 1, onInput: this.changeMarchingSteps}} />
                </Popover>
        </div>;
    }

    private showRawScene = () =>
    {
        store.execute(setRawSceneModal({show: true}));
    }

    private changeEpsilon = (e: Event) =>
    {
        const value = parseFloat((e.target as HTMLInputElement).value);
        if (!isFinite(value))
        {
            console.warn(`Epsilon parse failed`);
            return;
        }

        this.updateOptions({ epsilon: value });
    }

    private changeMarchingSteps = (e: Event) =>
    {
        const value = parseFloat((e.target as HTMLInputElement).value);
        if (!isFinite(value))
        {
            console.warn(`Marching steps parse failed`);
            return;
        }

        this.updateOptions({ maxMarchingStep: Math.round(value) });
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

    private updateOptions = (options: Partial<ViewportOptions>) =>
    {
        console.log('Options', options);
        store.execute(setViewportOptions(this.props.viewportIndex, options));
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