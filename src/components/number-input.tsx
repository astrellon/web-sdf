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
        const { value, placeholder, disabled, step } = this.props;
        const rounding = 100.0 * (step || 1.0);
        const rounded = Math.round(value * rounding) / rounding;
        return <input disabled={disabled} step={step} placeholder={placeholder} type='number' class={this.props.class} value={rounded} ref={this.inputRef} />;
    }

    private onChange = (e: InputEvent) =>
    {
        const target = (e.target as HTMLInputElement);
        const rounding = 100.0 * (this.props.step || 1.0);
        const value = Math.round(target.valueAsNumber * rounding) / rounding;
        this.props.onChange(this.props.value, value);
    }
}