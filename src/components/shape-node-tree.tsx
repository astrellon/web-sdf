import { h, Component } from 'preact';
import { ShapeNode, ShapeNodeId } from '../ray-marching/sdf-scene';
import { SdfTree } from '../ray-marching/sdf-tree';
import ShapeNodeTreeItem from './shape-node-tree-item';
import './shape-node-tree.scss';

interface Props
{
    readonly sdfTree: SdfTree;
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
        const { sdfTree, selectedNodeId, onItemClicked } = this.props;
        const rootNode = sdfTree.nodes[sdfTree.rootNodeId];
        const result: h.JSX.Element[] = [];
        if (rootNode == undefined)
        {
            return result;
        }

        const stack = [{node: sdfTree.nodes[sdfTree.rootNodeId], depth: 0}];

        while (stack.length > 0)
        {
            const { node, depth } = stack[0];
            stack.splice(0, 1);

            result.push(<ShapeNodeTreeItem isSelected={node.id === selectedNodeId} depth={depth} key={node.id} node={node} onClicked={onItemClicked} />);
            if (node.childrenIds != null)
            {
                for (const childId of node.childrenIds)
                {
                    stack.push({node: sdfTree.nodes[childId], depth: depth + 1});
                }
            }
        }

        return result;
    }
}