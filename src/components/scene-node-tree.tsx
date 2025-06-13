import { h, Component } from 'preact';
import { SceneTree, sdfTreeFlatten } from '../ray-marching/scene-tree';
import ShapeNodeTreeItem from './scene-node-tree-item';
import { SceneNode, ShapeNodeId } from '../ray-marching/scene-entities';
import './scene-node-tree.scss';

interface Props
{
    readonly sdfTree: SceneTree;
    readonly selectedNodeId?: ShapeNodeId;
    readonly onItemClicked: (node: SceneNode) => void;
}

export default class SceneNodeTree extends Component<Props>
{
    public render()
    {
        return <div class='scene-node-tree'>
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

        const flattenedTree = sdfTreeFlatten(sdfTree);
        for (const entry of flattenedTree)
        {
            const isSelected = entry.node.id === selectedNodeId;
            result.push(<ShapeNodeTreeItem isSelected={isSelected} depth={entry.depth} key={entry.node.id} node={entry.node} onClicked={onItemClicked} />);
        }

        return result;
    }
}