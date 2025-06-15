import { h, Component } from 'preact';
import { SceneConverter } from '../ray-marching/scene-converter';
import SceneNodeView from './scene-node-view';
import { store } from '../store/store';
import { setSelectedNode, updateNode } from '../store/store-state';
import SceneNodeTree from './scene-node-tree';
import { SceneTree } from '../ray-marching/scene-tree';
import { SceneNode, SceneNodeId } from '../ray-marching/scene-entities';
import "./scene-tree-view.scss";

interface Props
{
    readonly sceneTree: SceneTree;
    readonly selectedNodeId?: SceneNodeId;
}

export default class SceneTreeView extends Component<Props>
{
    public render()
    {
        const { sceneTree, selectedNodeId } = this.props;

        return <div class="scene-tree">
            <div class="scene-tree__contents outer-panel">
                <div class="inner-panel">
                    <SceneNodeTree sceneTree={sceneTree} selectedNodeId={selectedNodeId} onItemClicked={this.onNodeClicked} />
                </div>
                <div class="inner-panel scene-tree__nodes">
                    <SceneNodeView sceneTree={sceneTree} node={sceneTree.nodes[selectedNodeId]} onChange={this.onChangeSelectedNode} />
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