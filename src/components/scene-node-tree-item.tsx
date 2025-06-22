import { h, Component } from 'preact';
import { SceneNode } from '../ray-marching/scene-entities';
import { addClass } from '../common';
import './scene-node-tree-item.scss';

interface Props
{
    readonly node: SceneNode;
    readonly depth: number;
    readonly disable?: boolean;
    readonly isSelected: boolean;
    readonly onClicked: (node: SceneNode) => void;
}

export default class ShapeNodeTreeItem extends Component<Props>
{
    public render()
    {
        const { depth, node, isSelected, disable } = this.props;

        const className = addClass(addClass('scene-node-tree-item', 'is-selected', isSelected), 'is-disabled', disable === true);
        return <div class={className} style={{'paddingLeft': (depth + 1) * 0.5 + 'rem'}} onClick={this.onClick}>
            + {node.name}
        </div>
    }

    private onClick = () =>
    {
        if (this.props.disable)
        {
            return;
        }
        this.props.onClicked(this.props.node);
    }
}