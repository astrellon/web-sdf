import { h, Component } from 'preact';
import { Shape } from '../ray-marching/scene-entities';
import { SdfShapeParameter } from '../ray-marching/sdf-shapes';
import { LabelledRange } from './labelled-range';

interface Props
{
    readonly shape: Shape;
    readonly paramInfo: SdfShapeParameter;
    readonly onChange: (value: number, paramInfo: SdfShapeParameter) => void;
}

export default class ShapeParamEdit extends Component<Props>
{
    public render()
    {
        const { shape, paramInfo } = this.props;

        const param = shape.params[paramInfo.name];
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
            console.log('Unable to parse shape param:', paramInfo.name, (e.target as HTMLInputElement).value);
            return;
        }

        onChange(value, paramInfo);
    }
}