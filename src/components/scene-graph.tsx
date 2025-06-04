import { h, Component } from 'preact';
import "./scene-graph.scss";
import { SdfScene, Shape, ShapeNode } from '../ray-marching/sdf-scene';

interface Props
{
    readonly sdfScene: SdfScene;
}

const ShapeView = (props: {shape: Shape}) =>
{
    return <div>
    </div>
}


const ShapeNodeView = (props: {node: ShapeNode}) =>
{
    return <div>
        <div>
            <strong>Op Code</strong> {props.node.childOpCode ?? 'none'}
        </div>
        <div>
            <strong>Shape</strong> <ShapeView shape={props.node.shape} />
        </div>
        <div>
            <strong>Children</strong> { (props.node.children || []).map(child => <ShapeNodeView node={child} />) } />
        </div>
    </div>
}

export default class SceneGraph extends Component<Props>
{
    public render(props: Props)
    {
        return <div class="scene-graph">
            <div class="scene-graph__contents outer-panel">
            </div>
        </div>
    }
}