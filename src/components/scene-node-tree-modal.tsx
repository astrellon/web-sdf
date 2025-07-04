import { h, Component } from 'preact';
import { SceneTree } from '../ray-marching/scene-tree';
import Modal from './modal';
import { SceneNode, SceneNodeId } from '../ray-marching/scene-entities';
import SceneNodeTree from './scene-node-tree';

interface Props
{
    readonly show: boolean;
    readonly disabledNodeIds: ReadonlyArray<SceneNodeId>;
    readonly sceneTree: SceneTree;
    readonly onRequestClose: () => void;
    readonly onItemClicked: (node: SceneNode) => void;
}

export default class SceneNodeTreeModal extends Component<Props>
{
    public render()
    {
        const { show, sceneTree, disabledNodeIds, onRequestClose } = this.props;

        return <Modal show={show} onRequestClose={onRequestClose}>
            <SceneNodeTree sceneTree={sceneTree} disabledNodeId={disabledNodeIds} onItemClicked={this.onItemClicked} />
        </Modal>
    }

    private onItemClicked = (node: SceneNode) =>
    {
        this.props.onItemClicked(node);
    }
}