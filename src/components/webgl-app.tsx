import { h, Component, Fragment } from "preact";
import { AppState } from "../store/store-state";
import { WebGLViewport } from "./webgl-viewport";
import "./webgl-app.scss"
import { SdfScene } from "../ray-marching/sdf-scene";

interface Props
{
    readonly state: AppState;
}

const sdfScene = new SdfScene();

export class WebGLApp extends Component<Props>
{
    public render()
    {
        const { viewports } = this.props.state;

        return <Fragment>
            <nav class="navbar outer-panel">
                <button>File</button>
            </nav>
            <div class="viewports">
                <WebGLViewport viewportIndex={0} options={viewports[0].options} sdfScene={sdfScene} />
            </div>
        </Fragment>
    }
}

function loadDefaultSdfScene()
{
    sdfScene.setShape(0, {
        type: 'sphere',
        shapeParams: {x: 1, y: 2, z: 1},
        maxSize: 2.0,
        diffuseColour: {x: 0.1, y: 0.9, z: 0.2, w: 1.0}
    });
    sdfScene.setShape(1, {
        type: 'hexPrism',
        shapeParams: {x: 1.0, y: 2, z: 0},
        maxSize: 1.5
    });
    sdfScene.setShape(2, {
        type: 'box',
        shapeParams: {x: 6, y: 1, z: 6},
        position: {x: 0, y: -1.5, z: 0},
        diffuseColour: {x: 0.2, y: 0.25, z: 0.3, w: 1.0}
    });
    sdfScene.setOperations([0, 2, 'union', 1, 'subtraction']);

    sdfScene.setLight(0, {
        position: {x: 4, y: 2, z: 3},
        colour: {x: 1.0, y: 0.8, z: 0.6, w: 1}
    });
    sdfScene.setLight(1, {
        position: {x: -4, y: 2, z: 3},
        colour: {x: 0.2, y: 1.0, z: 0.6, w: 1}
    });
}

loadDefaultSdfScene();