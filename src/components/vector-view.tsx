import { h, Component } from 'preact';
import { rvec2, rvec3, rvec4 } from '../gl-matrix-ts';
import "./vector-view.scss";

type basicVector = rvec2 | rvec3 | rvec4;
interface Props
{
    readonly vector: basicVector;
    readonly onChange: (oldVector: basicVector, newVector: basicVector) => void;
}

function isVec3(x: basicVector): x is rvec3
{
    return Object.hasOwn(x, 'z');
}

function isVec4(x: basicVector): x is rvec4
{
    return Object.hasOwn(x, 'w');
}

export default class VectorView extends Component<Props>
{
    public render()
    {
        const v = this.props.vector;
        const isV3 = isVec3(v);
        const isV4 = isVec4(v);

        return <div class="vector">
            <input type='number' value={v.x} onChange={this.onChangeX} placeholder='x' />
            <input type='number' value={v.y} onChange={this.onChangeY} placeholder='y' />

            { isV3 &&
            <input type='number' value={v.z} onChange={this.onChangeZ} placeholder='z' />
            }
            { isV4 &&
            <input type='number' value={v.w} onChange={this.onChangeW} placeholder='w' />
            }
        </div>;
    }

    private onChangeX = (e: Event) =>
    {
        this.updateVector(e, 'x');
    }

    private onChangeY = (e: Event) =>
    {
        this.updateVector(e, 'y');
    }

    private onChangeZ = (e: Event) =>
    {
        this.updateVector(e, 'z');
    }

    private onChangeW = (e: Event) =>
    {
        this.updateVector(e, 'w');
    }

    private updateVector = (e: Event, field: string) =>
    {
        const v = this.props.vector;
        const strValue = (e.target as HTMLInputElement).value;
        const value = parseFloat(strValue);
        if (!isFinite(value))
        {
            console.error('Unable to process vector field', field, strValue);
            return;
        }

        console.log('Update vector field', field, value);

        this.props.onChange(v, {...v, [field]: value});
    }
}