import { h, Component } from 'preact';
import VectorView from './vector-view';
import { vec4 } from '../gl-matrix-ts';
import { Light } from '../ray-marching/sdf-entities';

interface Props
{
    readonly light: Light;
    readonly onChange: (newLight: Light) => void;
}
export default class LightView extends Component<Props>
{
    public render()
    {
        const light = this.props.light;

        if (light === undefined)
        {
            return <div>Empty Light</div>;
        }

        return <div>
            <div>
                <strong>Colour</strong> <VectorView vector={light.colour} onChange={this.onChangeColour} />
            </div>
        </div>
    }

    private onChangeColour = (oldVec: vec4, newVec: vec4) =>
    {
        this.updateField(newVec, 'colour');
    }

    private updateField = (value: any, field: keyof Required<Light>) =>
    {
        console.log('Update light', field, value);
        const newShape = {...this.props.light, [field]: value};
        this.props.onChange(newShape);
    }
}