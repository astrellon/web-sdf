import { h, Component, ErrorInfo } from 'preact';
import { createPortal } from 'preact/compat';
import './modal.scss';

interface Props
{
    readonly show: boolean;
    readonly portalContainer?: string;
    readonly onRequestClose: () => void;
}

interface ModalCountMap
{
    [key: string]: number;
}

export default class Modal extends Component<Props>
{
    private static currentNumModals: ModalCountMap = {};
    private static prevNumModals: ModalCountMap = {};

    public render()
    {
        const { show, onRequestClose } = this.props;

        if (show === false)
        {
            return null;
        }

        const portalContainer = this.props.portalContainer ?? 'modals';
        const modalEl = Modal.getModalEl(portalContainer);

        return createPortal(<div class='modal-backdrop' onClick={onRequestClose}>
                <div class='modal-body outer-panel'>
                    { this.props.children }
                </div>
            </div>, modalEl);
    }

    public static afterRender()
    {
        let toHide: string[] | undefined = undefined;
        let toShow: string[] | undefined = undefined;

        for (const elName in this.currentNumModals)
        {
            const count = this.currentNumModals[elName];
            const prevCount = this.prevNumModals[elName] || 0;
            if (count === 0 && prevCount > 0)
            {
                if (toHide === undefined)
                {
                    toHide = [];
                }
                toHide.push(elName);
            }
            else if (count > 0 && prevCount === 0)
            {
                if (toShow === undefined)
                {
                    toShow = [];
                }
                toShow.push(elName);
            }
        }

        for (const elName in this.prevNumModals)
        {
            if (!this.currentNumModals.hasOwnProperty(elName))
            {
                if (toHide === undefined)
                {
                    toHide = [];
                }
                toHide.push(elName);
            }
        }

        this.prevNumModals = this.currentNumModals;
        this.currentNumModals = {};

        if (toHide != undefined)
        {
            for (const elName of toHide)
            {
                const el = document.getElementById(elName);
                el.style.display = "none";
            }
        }
        if (toShow != undefined)
        {
            for (const elName of toShow)
            {
                const el = document.getElementById(elName);
                el.style.display = 'block';
            }
        }
    }

    private static getModalEl(container: string)
    {
        const el = document.getElementById(container);
        const current = this.currentNumModals[container] || 0;
        this.currentNumModals[container] = current + 1;

        return el;
    }
}