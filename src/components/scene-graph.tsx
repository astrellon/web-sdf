import { h, Component } from 'preact';
import { SdfScene } from '../ray-marching/sdf-scene';
import SceneNodeView from './scene-node-view';
import { store } from '../store/store';
import { setSelectedNode, updateNode } from '../store/store-state';
import SceneNodeTree from './scene-node-tree';
import { SdfTree } from '../ray-marching/sdf-tree';
import { SceneNode, ShapeNodeId } from '../ray-marching/sdf-entities';
import "./scene-graph.scss";

interface Props
{
    readonly sdfTree: SdfTree;
    readonly selectedNodeId?: ShapeNodeId;
    readonly sdfScene: SdfScene;
}

export default class SceneGraph extends Component<Props>
{
    public render()
    {
        const { sdfTree, selectedNodeId } = this.props;

        return <div class="scene-graph">
            <div class="scene-graph__contents outer-panel">
                <div class="inner-panel">
                    <SceneNodeTree sdfTree={sdfTree} selectedNodeId={selectedNodeId} onItemClicked={this.onNodeClicked} />
                </div>
                <div class="inner-panel">
                    <SceneNodeView node={sdfTree.nodes[selectedNodeId]} onChange={this.onChangeSelectedNode} />
                </div>
            </div>
        </div>
    }

    private onNodeClicked = (node: SceneNode) =>
    {
        store.execute(setSelectedNode(node.id));
    }

    private onChangeSelectedNode = (newNode: SceneNode, oldNode: SceneNode) =>
    {
        store.execute(updateNode(newNode));
    }
}