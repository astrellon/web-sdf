import { h, Component } from 'preact';
import { SdfOpCode, Shape, ShapeNode } from '../ray-marching/sdf-scene';
import ShapeView from './shape-view';
import "./shape-node-view.scss";

interface Props
{
    readonly node: ShapeNode;
    readonly onChange: (newShapeNode: ShapeNode) => void;
}

interface State
{
    readonly show: boolean;
}

export default class ShapeNodeView extends Component<Props, State>
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
        const selectedOpCode = node.childOpCode ?? 'none';
        const children = node.children || [];

        return <div class="shape-node-view">
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
                <strong>Children</strong> {
                    children.map((child, i) => <ShapeNodeView key={i} node={child} onChange={(n) => this.onChangeChild(i, n)}/>)
                }
            </div>
        </div>
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

    private onChangeChild = (index: number, child: ShapeNode) =>
    {
        const children = this.props.node.children !== undefined ? [...this.props.node.children] : [];
        children[index] = child;

        this.updateField(children, 'children');
    }

    private updateField = (value: any, field: keyof ShapeNode) =>
    {
        console.log('Update shape node', field, value);
        const newNode = {...this.props.node, [field]: value};
        this.props.onChange(newNode);
    }
}