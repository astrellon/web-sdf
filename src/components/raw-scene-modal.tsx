import { h, Component, Ref, createRef } from 'preact';
import { RawSceneModalState, setRawSceneModal, setSceneTree } from '../store/store-state';
import { SceneTree } from '../ray-marching/scene-tree';
import Modal from './modal';
import { store } from '../store/store';
import { ChangeEvent } from 'preact/compat';
import './raw-scene-modal.scss';

interface Props
{
    readonly state: RawSceneModalState;
    readonly sceneTree: SceneTree;
}

export default class RawSceneModal extends Component<Props>
{
    private prevSceneTree: SceneTree | undefined = undefined;
    private preRef = createRef<HTMLDivElement>();

    public render()
    {
        const { show } = this.props.state;
        const { sceneTree } = this.props;
        let sceneText = '';
        if (show && this.prevSceneTree !== sceneTree)
        {
            sceneText = JSON.stringify(sceneTree, null, 2);
        }

        return <Modal show={show} onRequestClose={this.onCloseModal}>
            <div ref={this.preRef} class='raw-scene-modal__text' contenteditable>
                <pre>{sceneText}</pre>
            </div>
            <button onClick={this.loadFromText}>Load From Json</button>
        </Modal>;
    }

    private onCloseModal = () =>
    {
        store.execute(setRawSceneModal({show: false}));
    }

    private loadFromText = () =>
    {
        const json = this.preRef.current.innerText;
        const parse = JSON.parse(json);
        if (parse != null)
        {
            store.execute(setSceneTree(parse));
        }
    }
}