import { h, Component } from 'preact';
import { ReparentModalState, setReparentModal, setSceneTree } from '../store/store-state';
import { sceneTreeMoveChild, SceneTree } from '../ray-marching/scene-tree';
import { store } from '../store/store';
import { SceneNode } from '../ray-marching/scene-entities';
import SceneNodeTreeModal from './scene-node-tree-modal';

interface Props
{
    readonly state: ReparentModalState;
    readonly sceneTree: SceneTree;
}

export default class ReparentModal extends Component<Props>
{
    public render()
    {
        const { show } = this.props.state;
        const disabledNodeIds = this.getDisabledNodeIds();

        return <SceneNodeTreeModal show={show} disabledNodeIds={disabledNodeIds}
            sceneTree={this.props.sceneTree} onRequestClose={this.onCloseModal} onItemClicked={this.onReparentSelected} />
    }

    private onCloseModal = () =>
    {
        store.execute(setReparentModal({show: false}));
    }

    private getDisabledNodeIds = () =>
    {
        const { show, childNodeId } = this.props.state;
        if (!show)
        {
            return [];
        }

        const { sceneTree } = this.props;

        const child = sceneTree.nodes[childNodeId];
        return [child.id, child.parentId];
    }

    private onReparentSelected = (newParent: SceneNode) =>
    {
        if (this.props.state.childNodeId == undefined)
        {
            return;
        }

        const child = this.props.sceneTree.nodes[this.props.state.childNodeId];
        const newTree = sceneTreeMoveChild(this.props.sceneTree, newParent, child);
        store.execute(setSceneTree(newTree));
    }
}