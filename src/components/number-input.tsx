import { h, Component, createRef } from 'preact';

interface Props
{
    readonly value: number;
    readonly class: string;
    readonly disabled?: boolean;
    readonly placeholder?: string;
    readonly step?: number;
    readonly onChange: (oldValue: number, newValue: number) => void;
}

export default class NumberInput extends Component<Props>
{
    private inputRef = createRef<HTMLInputElement>();
    private addedOnChange = false;

    public componentDidMount(): void
    {
        if (!this.addedOnChange)
        {
            this.inputRef.current.addEventListener('change', this.onChange);
        }
    }

    public componentWillUnmount(): void
    {
        if (this.addedOnChange)
        {
            this.inputRef.current.removeEventListener('change', this.onChange);
        }
    }

    public render()
    {
        return <input disabled={this.props.disabled} step={this.props.step} placeholder={this.props.placeholder} type='number' class={this.props.class} value={this.props.value} ref={this.inputRef} />;
    }

    private onChange = (e: InputEvent) =>
    {
        const target = (e.target as HTMLInputElement);
        this.props.onChange(this.props.value, target.valueAsNumber);
    }
}