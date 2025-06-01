import { h, Component } from "preact";
import { AppState } from "../store/store-state";
import { WebGLViewport } from "./webgl-viewport";
import WebGLViewportOptions from "./webgl-viewport-options";

interface Props
{
    readonly state: AppState;
}

export class WebGLApp extends Component<Props>
{
    public render()
    {
        const { viewports } = this.props.state;

        return <div>
            <h1>WebGL SDF</h1>
            <div>
                <WebGLViewport viewportIndex={0} options={viewports[0].options} />
                <WebGLViewportOptions viewportIndex={0} options={viewports[0].options} />
            </div>
        </div>
    }
}