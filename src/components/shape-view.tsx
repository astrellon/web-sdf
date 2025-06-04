import { h, Component } from 'preact';
import { Shape } from '../ray-marching/sdf-scene';
import VectorView from './vector-view';
import { quat, vec3, vec4 } from '../gl-matrix-ts';

interface Props
{
    readonly shape: Shape;
    readonly onChange: (newShape: Shape) => void;
}
export default class ShapeView extends Component<Props>
{
    public render()
    {
        const shape = this.props.shape;

        return <div>
            <div>
                <strong>Position</strong> <VectorView vector={shape.position} onChange={this.onChangePosition} />
            </div>
            <div>
                <strong>Rotation</strong> <VectorView vector={shape.rotation} onChange={this.onChangeRotation} />
            </div>
            <div>
                <strong>Type</strong> <select value={shape.type ?? 'none'} onChange={this.onChangeType}>
                    <option value='none'>None</option>
                    <option value='box'>Box</option>
                    <option value='sphere'>Sphere</option>
                    <option value='hexPrism'>Hex Prism</option>
                </select>
            </div>
            <div>
                <strong>Shape Params</strong> <VectorView vector={shape.shapeParams} onChange={this.onChangeShapeParams} />
            </div>
            <div>
                <strong>Diffuse Colour</strong> <VectorView vector={shape.diffuseColour} onChange={this.onChangeDiffuseColour} />
            </div>
            <div>
                <strong>Specular Colour</strong> <VectorView vector={shape.specularColour} onChange={this.onChangeSpecularColour} />
            </div>
        </div>
    }

    private onChangePosition = (oldVec: vec3, newVec: vec3) =>
    {
        this.updateField(newVec, 'position');
    }

    private onChangeRotation = (oldQuat: quat, newQuat: quat) =>
    {
        this.updateField(newQuat, 'rotation');
    }

    private onChangeType = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value;
        this.updateField(value, 'type');
    }

    private onChangeShapeParams = (oldVec: vec3, newVec: vec3) =>
    {
        this.updateField(newVec, 'shapeParams');
    }

    private onChangeDiffuseColour = (oldVec: vec4, newVec: vec4) =>
    {
        this.updateField(newVec, 'diffuseColour');
    }

    private onChangeSpecularColour = (oldVec: vec4, newVec: vec4) =>
    {
        this.updateField(newVec, 'specularColour');
    }

    private updateField = (value: any, field: keyof Required<Shape>) =>
    {
        const newShape = {...this.props.shape, [field]: value};
        this.props.onChange(newShape);
    }
}