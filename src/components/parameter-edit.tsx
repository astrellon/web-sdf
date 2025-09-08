import { h, Component } from 'preact';
import { ParameterMap, Shape } from '../ray-marching/scene-entities';
import { LabelledRange } from './labelled-range';
import { SdfParameter } from '../ray-marching/sdf-parameters';

interface Props
{
    readonly parameters: ParameterMap;
    readonly paramInfo: SdfParameter;
    readonly onChange: (value: number, paramInfo: SdfParameter) => void;
}

export default class ParameterEdit extends Component<Props>
{
    public render()
    {
        const { parameters, paramInfo } = this.props;

        const param = parameters[paramInfo.name];
        const currentValue = (isFinite(param) ? param : paramInfo.default) ?? 1.0;
        const label = `${paramInfo.name}: ${currentValue}`;
        const min = paramInfo.min ?? 0.0;
        const max = paramInfo.max ?? 10.0;
        const step = paramInfo.step ?? 0.1;

        return <LabelledRange label={label} inputProps={{value: currentValue, min, max, step, onInput: this.onInput }} />
    }

    private onInput = (e: Event) =>
    {
        const { paramInfo, onChange } = this.props;

        const value = (e.target as HTMLInputElement).valueAsNumber;
        if (!isFinite(value))
        {
            console.log('Unable to parse param:', paramInfo.name, (e.target as HTMLInputElement).value);
            return;
        }

        onChange(value, paramInfo);
    }
}