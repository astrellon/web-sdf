import { h, Component } from 'preact';
import { SdfScene, ShapeNode } from '../ray-marching/sdf-scene';
import ShapeNodeView from './shape-node-view';
import { store } from '../store/store';
import { setRootNode } from '../store/store-state';
import "./scene-graph.scss";
import ShapeNodeTree from './shape-node-tree';

interface Props
{
    readonly rootNode: ShapeNode;
    readonly selectedNode?: ShapeNode;
    readonly sdfScene: SdfScene;
}

export default class SceneGraph extends Component<Props>
{
    public render()
    {
        const { rootNode, selectedNode } = this.props;

        return <div class="scene-graph">
            <div class="scene-graph__contents outer-panel">
                {/* <ShapeNodeView node={this.props.rootNode} onChange={this.onChangeRootNode} /> */}
                <ShapeNodeTree node={rootNode} depth={0} selectedNode={selectedNode} />
            </div>
        </div>
    }

    private onChangeRootNode = (node: ShapeNode) =>
    {
        this.props.sdfScene.updateShapesFromRootNode(node);
        store.execute(setRootNode(node));
    }
}