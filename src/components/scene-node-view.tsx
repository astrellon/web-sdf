import { h, Component } from 'preact';
import ShapeView from './shape-view';
import { Light, SceneNode, SdfOpCode, Shape } from '../ray-marching/sdf-entities';
import VectorView from './vector-view';
import { quat, vec3 } from '../gl-matrix-ts';
import LightView from './light-view';
import "./scene-node-view.scss";

interface Props
{
    readonly node: SceneNode;
    readonly onChange: (newShapeNode: SceneNode, oldShapeNode: SceneNode) => void;
}

interface State
{
    readonly show: boolean;
}

export default class SceneNodeView extends Component<Props, State>
{
    constructor()
    {
        super();
        this.state = {
            show: false
        }
    }

    public render()
    {
        const { node } = this.props;
        if (node == undefined)
        {
            return <div class="scene-node-view">
                No node selected
            </div>
        }

        const selectedOpCode = node.childOpCode ?? 'none';

        return <div class="scene-node-view">
            <div>
                <strong>Name</strong> <input type='text' placeholder='Name' value={node.name} onChange={this.onChangeName} />
            </div>
            <div>
                <strong>Position</strong> <VectorView vector={node.position} onChange={this.onChangePosition} />
            </div>
            <div>
                <strong>Rotation</strong> <VectorView vector={node.rotation} onChange={this.onChangeRotation} />
            </div>
            <div>
                <strong>Op Code</strong> <select value={selectedOpCode} onChange={this.onChangeOpCode}>
                    <option value='none'>None</option>
                    <option value='union'>Union</option>
                    <option value='intersection'>Intersection</option>
                    <option value='subtraction'>Subtraction</option>
                </select>
            </div>
            <div>
                <strong>Shape</strong> <ShapeView shape={node.shape} onChange={this.onChangeShape} />
            </div>
            <div>
                <strong>Light</strong> <LightView light={node.light} onChange={this.onChangeLight} />
            </div>
            {/* <div>
                <strong>Children</strong> {
                    children.map((child, i) => <ShapeNodeView key={i} node={child} onChange={(n) => this.onChangeChild(i, n)}/>)
                }
            </div> */}
        </div>
    }

    private onChangeName = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).value;
        this.updateField(value, 'name');
    }

    private onChangePosition = (oldVec: vec3, newVec: vec3) =>
    {
        this.updateField(newVec, 'position');
    }

    private onChangeRotation = (oldQuat: quat, newQuat: quat) =>
    {
        this.updateField(newQuat, 'rotation');
    }


    private onChangeOpCode = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value as SdfOpCode;
        this.updateField(value, 'childOpCode');
    }

    private onChangeShape = (shape: Shape) =>
    {
        this.updateField(shape, 'shape');
    }

    private onChangeLight = (light: Light) =>
    {
        this.updateField(light, 'light');
    }

    // private onChangeChild = (index: number, child: SceneNode) =>
    // {
    //     const children = this.props.node.children !== undefined ? [...this.props.node.children] : [];
    //     children[index] = child;

    //     this.updateField(children, 'children');
    // }

    private updateField = (value: any, field: keyof SceneNode) =>
    {
        console.log('Update shape node', field, value);
        const newNode = {...this.props.node, [field]: value};
        this.props.onChange(newNode, this.props.node);
    }
}