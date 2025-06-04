import { h, Component } from 'preact';
import { SdfScene, ShapeNode } from '../ray-marching/sdf-scene';
import ShapeNodeView from './shape-node-view';
import "./scene-graph.scss";

interface Props
{
    readonly sdfScene: SdfScene;
}

export default class SceneGraph extends Component<Props>
{
    public render()
    {
        return <div class="scene-graph">
            <div class="scene-graph__contents outer-panel">
                <ShapeNodeView node={this.props.sdfScene.rootShape} onChange={this.onChangeRootNode} />
            </div>
        </div>
    }

    private onChangeRootNode = (node: ShapeNode) =>
    {
        this.props.sdfScene.rootShape = node;
        this.props.sdfScene.updateShapesFromRootNode();
    }
}