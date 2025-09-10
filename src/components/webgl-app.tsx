import { h, Component, Fragment } from 'preact';
import { AppState } from '../store/store-state';
import { WebGLViewport } from './webgl-viewport';
import SceneGraph from './scene-tree-view';
import { SceneConverter } from '../ray-marching/scene-converter';
import ReparentModal from './reparent-modal';
import RawSceneModal from './raw-scene-modal';
import ExampleModal from './example-modal';
import InfoModal from './info-modal';
import { cameras } from '../store/store';
import './webgl-app.scss'

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
        const { viewports, maximiseViewport, sceneTree, selectedNodeId, reparentModal, rawSceneModal, exampleModal, infoModal } = this.props.state;

        return <Fragment>
            <div class="main-view">
                { maximiseViewport >= 0 ?
                    <WebGLViewport isMaximised camera={cameras[maximiseViewport]} viewportIndex={maximiseViewport} viewportState={viewports[maximiseViewport]} sceneConverter={sceneConverter} />
                    :
                    <Fragment>
                        <div class="viewports">
                            <WebGLViewport viewportIndex={0} camera={cameras[0]} viewportState={viewports[0]} sceneConverter={sceneConverter} />
                        </div>
                        <SceneGraph sceneTree={sceneTree} selectedNodeId={selectedNodeId} />
                    </Fragment> }
            </div>

            <ReparentModal state={reparentModal} sceneTree={sceneTree} />
            <RawSceneModal state={rawSceneModal} sceneTree={sceneTree} />
            <ExampleModal state={exampleModal} />
            <InfoModal state={infoModal} viewportShader={viewports[0].shader} />

        </Fragment>
    }
}