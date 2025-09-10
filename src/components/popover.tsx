import { h, Component, Fragment, createRef } from 'preact';
import { ButtonHTMLAttributes, createPortal, CSSProperties } from 'preact/compat';
import './popover.scss';

interface Props
{
    readonly buttonProps?: ButtonHTMLAttributes;
    readonly text: string;
}

interface State
{
    readonly show: boolean;
}

export default class Popover extends Component<Props, State>
{
    private buttonRef = createRef<HTMLButtonElement>();

    constructor()
    {
        super();

        this.state = {
            show: false
        }
    }

    public render()
    {
        let modalEl: HTMLElement | null = null;
        const { buttonProps, text, children } = this.props;
        const show = this.state.show;

        let styles: CSSProperties = {};

        if (show)
        {
            modalEl = document.getElementById('modals');
            const bounds = this.buttonRef.current.getBoundingClientRect();
            const top = bounds.top + bounds.height;

            const maxHeight = document.body.clientHeight;
            styles = {
                left: bounds.left + 'px',
                top: top + 'px',
                maxHeight: (maxHeight - top - 10) + 'px'
            }
        }

        return <Fragment>
            <button {...buttonProps} ref={this.buttonRef} onClick={this.toggleMenu}>{text}</button>
            { show && createPortal(<div class='popover-backdrop' onPointerDown={this.closeMenu}>
                <div class='popover outer-panel' style={styles} onPointerDown={this.preventClose}>
                    {children}
                </div>
            </div>, modalEl)}
        </Fragment>
    }

    private preventClose = (e: PointerEvent) =>
    {
        e.stopImmediatePropagation();
    }

    public closeMenu = () =>
    {
        this.setState({ show: false });
    }

    private toggleMenu = () =>
    {
        this.setState({ show: !this.state.show });
    }
}