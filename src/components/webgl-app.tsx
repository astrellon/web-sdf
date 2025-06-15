import { h, Component, Fragment } from "preact";
import { AppState } from "../store/store-state";
import { WebGLViewport } from "./webgl-viewport";
import SceneGraph from "./scene-tree-view";
import { SceneConverter } from "../ray-marching/scene-converter";
import "./webgl-app.scss"

interface Props
{
    readonly state: AppState;
    readonly sceneConverter: SceneConverter;
}

export class WebGLApp extends Component<Props>
{
    public render()
    {
        const sceneConverter = this.props.sceneConverter;
        const { viewports, sceneTree: sdfTree, selectedNodeId } = this.props.state;
        console.log('App render', this.props.state);

        return <Fragment>
            {/* <nav class="navbar outer-panel">
                <button>File</button>
            </nav> */}

            <div class="main-view">
                <div class="viewports">
                    <WebGLViewport viewportIndex={0} options={viewports[0].options} sceneConverter={sceneConverter} />
                </div>
                <SceneGraph sceneTree={sdfTree} selectedNodeId={selectedNodeId} />
            </div>
        </Fragment>
    }
}