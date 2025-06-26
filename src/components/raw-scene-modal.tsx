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

        return <Modal show={show} onRequestClose={this.onCloseModal} class='raw-scene-modal'>
            <div ref={this.preRef} class='raw-scene-modal__text' contenteditable>
                <pre>{sceneText}</pre>
            </div>
            <button onClick={this.loadFromHtml}>Load From Json</button>
            <label>
                Load From File
                <input type='file' onChange={this.loadFromFile} />
            </label>
            <button onClick={this.downloadText}>Download Json</button>
        </Modal>;
    }

    private onCloseModal = () =>
    {
        store.execute(setRawSceneModal({show: false}));
    }

    private downloadText = () =>
    {
        const blob = new Blob([this.preRef.current.innerText], { type: 'application/json'});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'scene.json';

        link.click();

        URL.revokeObjectURL(link.href);
    }

    private loadFromFile = (e: ChangeEvent<HTMLInputElement>) =>
    {
        const file = (e.target as HTMLInputElement).files[0];
        if (file == undefined)
        {
            return;
        }

        const reader = new FileReader();
        reader.onload = this.onFileReaderLoad;
    }

    private onFileReaderLoad = (ev: ProgressEvent<FileReader>): any =>
    {
        const reader = ev.target;
        if (typeof(reader.result) === 'string')
        {
            this.loadFromText(reader.result);
        }
        else
        {
            console.log('Expected string to load file from');
        }
    }

    private loadFromHtml = () =>
    {
        const json = this.preRef.current.innerText;
        this.loadFromText(json);
    }

    private loadFromText = (json: string) =>
    {
        const parse = JSON.parse(json);
        if (parse != null)
        {
            store.execute(setSceneTree(parse));
        }
    }
}