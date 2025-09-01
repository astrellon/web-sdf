import { h, Component } from 'preact';
import { rvec2, rvec3, rvec4 } from '../math';
import "./vector-view.scss";

type basicVector = rvec2 | rvec3 | rvec4;
type ForceLength = undefined | 2 | 3 | 4;
interface Props
{
    readonly disabled?: boolean;
    readonly vector: basicVector;
    readonly forceLength?: ForceLength;
    readonly onChange: (oldVector: basicVector, newVector: basicVector) => void;
}

function isVec3(x: basicVector, forceLength: ForceLength): x is rvec3
{
    return x.length >= 3 || forceLength >= 3;
}

function isVec4(x: basicVector, forceLength: ForceLength): x is rvec4
{
    return x.length === 4 || forceLength === 4;
}

export default class VectorView extends Component<Props>
{
    public render()
    {
        const { vector: v, disabled, forceLength } = this.props;
        const isV3 = isVec3(v, forceLength);
        const isV4 = isVec4(v, forceLength);

        return <div class='vector control-group'>
            <input class='input' disabled={disabled} type='number' value={v[0]} onChange={this.onChangeX} placeholder='x' step={0.1} />
            <input class='input' disabled={disabled} type='number' value={v[1]} onChange={this.onChangeY} placeholder='y' step={0.1} />

            { (isV3) &&
            <input class='input' disabled={disabled} type='number' value={v[2]} onChange={this.onChangeZ} placeholder='z' step={0.1} />
            }
            { isV4 &&
            <input class='input' disabled={disabled} type='number' value={v[3]} onChange={this.onChangeW} placeholder='w' step={0.1} />
            }
        </div>;
    }

    private onChangeX = (e: Event) =>
    {
        this.updateVector(e, 0);
    }

    private onChangeY = (e: Event) =>
    {
        this.updateVector(e, 1);
    }

    private onChangeZ = (e: Event) =>
    {
        this.updateVector(e, 2);
    }

    private onChangeW = (e: Event) =>
    {
        this.updateVector(e, 3);
    }

    private updateVector = (e: Event, index: number) =>
    {
        const v = this.props.vector;
        const strValue = (e.target as HTMLInputElement).value;
        const value = parseFloat(strValue);
        if (!isFinite(value))
        {
            console.error('Unable to process vector index', index, strValue);
            return;
        }

        console.log('Update vector index', index, value);

        const newVector = [...v];
        newVector[index] = value;
        this.props.onChange(v, newVector);
    }
}