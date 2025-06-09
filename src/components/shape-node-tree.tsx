import { h, Component } from 'preact';
import { ShapeNode, ShapeNodeId, ShapeNodes } from '../ray-marching/sdf-scene';
import ShapeNodeTreeItem from './shape-node-tree-item';
import './shape-node-tree.scss';

interface Props
{
    readonly nodes: ShapeNodes;
    readonly currentNodeId: ShapeNodeId;
    readonly selectedNodeId?: ShapeNodeId;
    readonly onItemClicked: (node: ShapeNode) => void;
}

export default class ShapeNodeTree extends Component<Props>
{
    public render()
    {
        return <div class='shape-node-tree'>
            { this.renderNodeTree() }
        </div>
    }

    private renderNodeTree = () =>
    {
        const { nodes, currentNodeId, selectedNodeId, onItemClicked } = this.props;
        const stack = [{node: nodes[currentNodeId], depth: 0}];
        const result: h.JSX.Element[] = [];

        while (stack.length > 0)
        {
            const { node, depth } = stack[0];
            stack.splice(0, 1);

            result.push(<ShapeNodeTreeItem isSelected={node.id === selectedNodeId} depth={depth} key={node.id} node={node} onClicked={onItemClicked} />);
            if (node.childrenIds != null)
            {
                for (const childId of node.childrenIds)
                {
                    stack.push({node: nodes[childId], depth: depth + 1});
                }
            }
        }

        return result;
    }
}