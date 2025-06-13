import { h, Component } from 'preact';
import { SceneNode } from '../ray-marching/scene-entities';
import './scene-node-tree-item.scss';

interface Props
{
    readonly node: SceneNode;
    readonly depth: number;
    readonly isSelected: boolean;
    readonly onClicked: (node: SceneNode) => void;
}

export default class ShapeNodeTreeItem extends Component<Props>
{
    public render()
    {
        const { depth, node, isSelected } = this.props;

        const className = 'scene-node-tree-item' + (isSelected ? ' is-selected' : '');
        return <div class={className} style={{'paddingLeft': (depth + 1) * 0.5 + 'rem'}} onClick={this.onClick}>
            + {node.name}
        </div>
    }

    private onClick = () =>
    {
        this.props.onClicked(this.props.node);
    }
}