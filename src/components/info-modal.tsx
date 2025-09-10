import { h, Component, } from 'preact';
import Modal from './modal';
import { store } from '../store/store';
import { InfoModalState, setInfoModal } from '../store/store-state';
import './info-modal.scss';
import { WebGLInfo } from '../webgl/webgl-info';
import { CompiledShaderInfo } from '../webgl/webgl-sdf-renderer';

interface Props
{
    readonly state: InfoModalState;
    readonly viewportShader: CompiledShaderInfo;
}

export default class InfoModal extends Component<Props>
{
    public render()
    {
        const { state, viewportShader } = this.props;
        const { show } = state;
        const glInfo = WebGLInfo.getParameters();

        return <Modal show={show} onRequestClose={this.onCloseModal} class='info-modal' portalContainer='raw-json-modal'>
            <div>
                <div>
                    <strong>GL Parameters</strong>
                </div>
                <pre>
                { JSON.stringify(glInfo, null, 2) }
                </pre>
            </div>
            <div>
                <div>
                    <strong>Last compiled shader</strong>
                    <pre class='info-modal__shader'>
                        { viewportShader.text }
                    </pre>
                </div>
            </div>
            <div>
                <strong>Made by: </strong> Alan Lawrey 2025
            </div>
        </Modal>;
    }

    private onCloseModal = () =>
    {
        store.execute(setInfoModal({show: false}));
    }
}