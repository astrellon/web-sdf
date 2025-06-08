import { h, Component } from 'preact';
import { SdfScene, ShapeNode, ShapeNodeId, ShapeNodes } from '../ray-marching/sdf-scene';
import ShapeNodeView from './shape-node-view';
import { store } from '../store/store';
import { updateNode } from '../store/store-state';
import "./scene-graph.scss";
import ShapeNodeTree from './shape-node-tree';

interface Props
{
    readonly nodes: ShapeNodes;
    readonly rootNodeId?: ShapeNodeId;
    readonly selectedNodeId?: ShapeNodeId;
    readonly sdfScene: SdfScene;
}

export default class SceneGraph extends Component<Props>
{
    public render()
    {
        const { nodes, selectedNodeId, rootNodeId } = this.props;

        return <div class="scene-graph">
            <div class="scene-graph__contents outer-panel">
                <ShapeNodeTree currentNodeId={rootNodeId} depth={0} nodes={nodes} selectedNodeId={selectedNodeId} />
                <ShapeNodeView node={nodes[selectedNodeId]} onChange={this.onChangeSelectedNode} />
            </div>
        </div>
    }

    // private onChangeRootNode = (node: ShapeNode) =>
    // {
    //     this.props.sdfScene.updateShapesFromRootNode(node);
    //     store.execute(setRootNode(node));
    // }

    private onChangeSelectedNode = (newNode: ShapeNode, oldNode: ShapeNode) =>
    {
        store.execute(updateNode(newNode));
        this.props.sdfScene.updateShapesFromRootNode(this.props.rootNodeId, this.props.nodes);
    }
}