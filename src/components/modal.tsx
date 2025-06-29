import { h, Component } from 'preact';
import { createPortal } from 'preact/compat';
import './modal.scss';

interface Props
{
    readonly show: boolean;
    readonly class?: string;
    readonly portalContainer?: string;
    readonly onRequestClose: () => void;
}

export default class Modal extends Component<Props>
{
    public render()
    {
        const { show, onRequestClose } = this.props;

        if (show === false)
        {
            return null;
        }

        const portalContainer = this.props.portalContainer ?? 'modals';
        const modalEl = document.getElementById(portalContainer);
        const baseClassName = 'modal-body outer-panel ';
        const className = this.props.class != undefined ? baseClassName + this.props.class : baseClassName;

        return createPortal(<div class='modal-backdrop' onPointerDown={onRequestClose}>
                <div class={className} onPointerDown={this.preventClose}>
                    { this.props.children }
                </div>
            </div>, modalEl);
    }

    private preventClose = (e: PointerEvent) =>
    {
        e.stopImmediatePropagation();
    }
}