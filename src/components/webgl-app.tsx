import { h, Component, Fragment } from "preact";
import { AppState } from "../store/store-state";
import { WebGLViewport } from "./webgl-viewport";
import SceneGraph from "./scene-tree-view";
import { SceneConverter } from "../ray-marching/scene-converter";
import ReparentModal from "./reparent-modal";
import "./webgl-app.scss"
import RawSceneModal from "./raw-scene-modal";
import ExampleModal from "./example-modal";

interface Props
{
    readonly state: AppState;
    readonly sceneConverter: SceneConverter;
}

export class WebGLApp extends Component<Props>
{
    constructor()
    {
        super();
    }

    public render()
    {
        const sceneConverter = this.props.sceneConverter;
        const { viewports, sceneTree, selectedNodeId, reparentModal, rawSceneModal, exampleModal, currentShader } = this.props.state;
        console.log('App render', this.props.state);

        return <Fragment>
            <div class="main-view">
                <div class="viewports">
                    <WebGLViewport viewportIndex={0} options={viewports[0].options} sceneConverter={sceneConverter} currentShader={currentShader} />
                </div>
                <SceneGraph sceneTree={sceneTree} selectedNodeId={selectedNodeId} />
            </div>

            <ReparentModal state={reparentModal} sceneTree={sceneTree} />
            <RawSceneModal state={rawSceneModal} sceneTree={sceneTree} />
            <ExampleModal state={exampleModal} />

        </Fragment>
    }
}