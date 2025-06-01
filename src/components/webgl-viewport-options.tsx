import { h, Component } from 'preact';
import { setViewportOptions, ViewportOptions } from '../store/store-state';
import { store } from '../store/store';
import "./webgl-viewport-options.scss";

interface Props
{
    readonly viewportIndex: number;
    readonly options: ViewportOptions;
}

export default class WebGLViewportOptions extends Component<Props>
{
    public render(props: Props)
    {
        const { renderEnabled, renderScale } = this.props.options;

        return <div class="viewport-options">
            <button onClick={this.onToggleRender}>{ renderEnabled ? 'Stop' : 'Start' }</button>
            <select onChange={this.onChangeRenderScale} value={renderScale}>
                <option value="1">1x</option>
                <option value="0.5">0.5x</option>
                <option value="0.25">0.25x</option>
                <option value="0.125">0.125x</option>
            </select>
        </div>;
    }

    private onToggleRender = (e: Event) =>
    {
        store.execute(setViewportOptions(this.props.viewportIndex, {
            renderEnabled: !this.props.options.renderEnabled
        }));
    }

    private onChangeRenderScale = (e: Event) =>
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