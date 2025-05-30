import { h, Component } from "preact";
import { AppState } from "../store/store-state";

interface Props
{
    readonly state: AppState;
}

export class WebGLApp extends Component<Props>
{
    public render()
    {
        return <div>
            <h1>WebGL SDF</h1>
            <button onClick={this.onToggleRender}>Stop</button>
            <select onChange={this.onChangeRenderScale}>
                <option value="1">1x</option>
                <option value="0.5">0.5x</option>
                <option value="0.25">0.25x</option>
                <option value="0.125">0.125x</option>
            </select>
        </div>
    }

    private onToggleRender = (e: Event) =>
    {
        console.log('Toggle render', e);
    }

    private onChangeRenderScale = (e: Event) =>
    {
        console.log('Changed render scale', e);
    }
}