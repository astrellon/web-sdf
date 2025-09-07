import { h, Component, JSX } from 'preact';
import VectorView from './vector-view';
import { Shape } from '../ray-marching/scene-entities';
import { vec3, vec4 } from 'gl-matrix';
import { SdfShapeParameter, sdfShapes, sdfShapesMap } from '../ray-marching/sdf-shapes';
import { LabelledRange } from './labelled-range';
import ShapeParamEdit from './shape-param-edit';

interface Props
{
    readonly shape: Shape;
    readonly onChange: (newShape: Shape) => void;
}

const shapeSelectOptions = sdfShapes.map(s =>
    <option key={s.id} value={s.id}>{s.name}</option>
);

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
                    { shapeSelectOptions }
                </select>
            </div>
            <div>
                { this.renderCurrentParams() }
            </div>
            <div>
                <strong>Lighting Model</strong> <select value={shape.lightingModel} onChange={this.onChangeLightingModel}>
                    <option value='unlit'>Unlit</option>
                    <option value='lambert'>Lambert</option>
                    <option value='phong'>Phong</option>
                </select>
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

    private renderCurrentParams = () =>
    {
        const result: JSX.Element[] = [];
        const { shape } = this.props;
        const currentShapeInfo = sdfShapesMap[shape.type];

        for (const paramInfo of currentShapeInfo.params)
        {
            result.push(<ShapeParamEdit key={paramInfo.name} shape={shape} paramInfo={paramInfo} onChange={this.updateParam} />);
        }

        return result;
    }

    private updateParam = (value: number, paramInfo: SdfShapeParameter) =>
    {
        const currentParams = this.props.shape.params;
        const newParams = { ...currentParams, [paramInfo.name]: value };
        this.updateField(newParams, 'params');
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