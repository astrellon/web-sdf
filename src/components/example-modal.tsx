import { h, Component, } from 'preact';
import { ExampleModalState, setExampleModal, setSceneTree } from '../store/store-state';
import Modal from './modal';
import { store } from '../store/store';
import { ExampleInfo, examples } from '../examples/examples';
import './example-modal.scss';

interface Props
{
    readonly state: ExampleModalState;
}

interface ExamplePanelProps
{
    readonly example: ExampleInfo;
}

const ExamplePanel = (props: ExamplePanelProps) =>
{
    const { title, tree } = props.example;
    return <div>
        <button onClick={() => store.execute(setSceneTree(tree))}>Load</button> { title }
    </div>
}

export default class ExampleModal extends Component<Props>
{
    public render()
    {
        const { show } = this.props.state;

        return <Modal show={show} onRequestClose={this.onCloseModal} class='example-modal' portalContainer='raw-json-modal'>
            { examples.map((example, index) => <ExamplePanel key={index} example={example} /> )}
        </Modal>;
    }

    private onCloseModal = () =>
    {
        store.execute(setExampleModal({show: false}));
    }
}