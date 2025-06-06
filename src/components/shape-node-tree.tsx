import { h, Component } from 'preact';
import { ShapeNode } from '../ray-marching/sdf-scene';

interface Props
{
    readonly node: ShapeNode;
}

export default class ShapeNodeTree extends Component<Props>
{
    public render()
    {
        const { node } = this.props;
        const children = node.children || [];
        return <div class="shape-node-tree">
            <strong>{node.name}</strong>
            <div>
                { children.map((child, index) => <ShapeNodeTree key={index} node={child} />) }
            </div>
        </div>
    }
}