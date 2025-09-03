import { h, Component, Attributes } from 'preact';

interface LabelledRangeProps
{
    readonly label: string;
    readonly inputProps: any;
}

export const LabelledRange = (props: LabelledRangeProps) =>
{
    return <label style={{'display': 'inline-block'}}>
        {props.label}
        <input style={{'display': 'block'}} type='range' {...props.inputProps} />
    </label>
}
