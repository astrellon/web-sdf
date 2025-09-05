import { h, Component } from 'preact';
import VectorView from './vector-view';
import { Shape } from '../ray-marching/scene-entities';
import { vec3, vec4 } from 'gl-matrix';

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
        const isPhong = shape.lightingModel === 'phong';

        return <div>
            <div>
                <strong>Type</strong> <select value={shape.type ?? 'none'} onChange={this.onChangeType}>
                    <option value='none'>None</option>
                    <option value='box'>Box</option>
                    <option value='sphere'>Sphere</option>
                    <option value='hexPrism'>Hex Prism</option>
                    <option value='torus'>Torus</option>
                    <option value='octahedron'>Octahedron</option>
                    <option value='cylinder'>Cylinder</option>
                    <option value='icosahedron'>Icosahedron</option>
                    <option value='mandelbulb'>Mandelbulb</option>
                </select>
            </div>
            <div>
                <strong>Shape Params</strong> <VectorView value={shape.shapeParams} onChange={this.onChangeShapeParams} />
            </div>
            <div>
                <strong>Lighting Model</strong> <select value={shape.lightingModel} onChange={this.onChangeLightingModel}>
                    <option value='unlit'>Unlit</option>
                    <option value='lambert'>Lambert</option>
                    <option value='phong'>Phong</option>
                </select>
            </div>
            <div>
                <strong>Cloud</strong> <input type='checkbox' checked={shape.cloud} onChange={this.onChangeCloud} />
            </div>
            <div>
                <strong>Diffuse Colour</strong> <VectorView value={shape.diffuseColour} onChange={this.onChangeDiffuseColour} />
            </div>
            <div>
                <strong>Specular Colour</strong> <VectorView disabled={!isPhong} value={shape.specularColour} onChange={this.onChangeSpecularColour} />
            </div>
            <div>
                <strong>Shininess</strong> <input class='input' disabled={!isPhong} type='number' min={0} max={100} step={0.1} value={shape.shininess} placeholder='Shininess' onChange={this.onChangeShininess} />
            </div>
        </div>
    }

    private onChangeCloud = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).checked;
        this.updateField(value, 'cloud');
    }

    private onChangeType = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value;
        this.updateField(value, 'type');
    }

    private onChangeLightingModel = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value;
        this.updateField(value, 'lightingModel');
    }

    private onChangeShininess = (e: Event) =>
    {
        const value = parseFloat((e.target as HTMLInputElement).value);
        if (isFinite(value))
        {
            this.updateField(value, 'shininess');
        }
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
        console.log('Update shape', field, value);
        const newShape = {...this.props.shape, [field]: value};
        this.props.onChange(newShape);
    }
}