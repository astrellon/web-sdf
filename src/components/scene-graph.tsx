import { h, Component } from 'preact';
import { SdfScene, ShapeNode, ShapeNodeId, ShapeNodes } from '../ray-marching/sdf-scene';
import ShapeNodeView from './shape-node-view';
import { store } from '../store/store';
import { setSelectedNode, updateNode } from '../store/store-state';
import ShapeNodeTree from './shape-node-tree';
import "./scene-graph.scss";

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
                <div class="inner-panel">
                    <ShapeNodeTree currentNodeId={rootNodeId} nodes={nodes} selectedNodeId={selectedNodeId} onItemClicked={this.onNodeClicked} />
                </div>
                <div class="inner-panel">
                    <ShapeNodeView node={nodes[selectedNodeId]} onChange={this.onChangeSelectedNode} />
                </div>
            </div>
        </div>
    }

    private onNodeClicked = (node: ShapeNode) =>
    {
        store.execute(setSelectedNode(node.id));
    }

    private onChangeSelectedNode = (newNode: ShapeNode, oldNode: ShapeNode) =>
    {
        store.execute(updateNode(newNode));
        this.props.sdfScene.updateShapesFromRootNode(this.props.rootNodeId, this.props.nodes);
    }
}