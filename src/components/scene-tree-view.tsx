import { h, Component } from 'preact';
import { SceneConverter } from '../ray-marching/scene-converter';
import SceneNodeView from './scene-node-view';
import { store } from '../store/store';
import { setSelectedNode, updateNode } from '../store/store-state';
import SceneNodeTree from './scene-node-tree';
import { SceneTree } from '../ray-marching/scene-tree';
import { SceneNode, ShapeNodeId } from '../ray-marching/scene-entities';
import "./scene-tree-view.scss";

interface Props
{
    readonly sdfTree: SceneTree;
    readonly selectedNodeId?: ShapeNodeId;
    readonly sdfScene: SceneConverter;
}

export default class SceneGraphView extends Component<Props>
{
    public render()
    {
        const { sdfTree, selectedNodeId } = this.props;

        return <div class="scene-tree">
            <div class="scene-tree__contents outer-panel">
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