import { h, Component } from 'preact';
import { ShapeNode } from '../ray-marching/sdf-scene';
import './shape-node-tree-item.scss';

interface Props
{
    readonly node: ShapeNode;
    readonly depth: number;
    readonly isSelected: boolean;
    readonly onClicked: (node: ShapeNode) => void;
}

export default class ShapeNodeTreeItem extends Component<Props>
{
    public render()
    {
        const { depth, node, isSelected } = this.props;

        const className = 'shape-node-tree-item' + (isSelected ? ' is-selected' : '');
        return <div class={className} style={{'paddingLeft': (depth + 1) * 0.5 + 'rem'}} onClick={this.onClick}>
            + {node.name}
        </div>
    }

    private onClick = () =>
    {
        this.props.onClicked(this.props.node);
    }
}