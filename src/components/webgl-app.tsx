import { h, Component, Fragment } from "preact";
import { AppState } from "../store/store-state";
import { WebGLViewport } from "./webgl-viewport";
import "./webgl-app.scss"

interface Props
{
    readonly state: AppState;
}

export class WebGLApp extends Component<Props>
{
    public render()
    {
        const { viewports } = this.props.state;

        return <Fragment>
            <h1>WebGL SDF</h1>
            <div class="viewports">
                <WebGLViewport viewportIndex={0} options={viewports[0].options} />
            </div>
        </Fragment>
    }
}