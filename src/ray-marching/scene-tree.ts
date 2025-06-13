import { SceneNode, SceneNodes, ShapeNodeId } from "./scene-entities";

export interface SceneTree
{
    readonly nodes: SceneNodes;
    readonly rootNodeId?: ShapeNodeId;
}
interface SceneNodeAtDepth
{
    readonly node: SceneNode;
    readonly depth: number;
}

export function sdfTreeUpdateNode(tree: SceneTree, node: SceneNode): SceneTree
{
    const newNodes = {
        ...tree.nodes,
        [node.id]: node
    };

    return {
        ...tree,
        nodes: newNodes
    }
}

export function sdfTreeSetRootNodeId(tree: SceneTree, rootNodeId: ShapeNodeId): SceneTree
{
    return { ...tree, rootNodeId }
}

export function sdfTreeSetNodes(tree: SceneTree, nodes: SceneNodes): SceneTree
{
    return { ...tree, nodes }
}

export function sdfTreeFlatten(tree: SceneTree): SceneNodeAtDepth[]
{
    const rootNode = tree.nodes[tree.rootNodeId];
    if (!rootNode)
    {
        return [];
    }

    const result = new Array<SceneNodeAtDepth>(Object.keys(tree.nodes).length);
    addToTree(rootNode, tree.nodes, 0, 0, result);
    return result;
}

function addToTree(node: SceneNode, nodes: SceneNodes, depth: number, index: number, result: SceneNodeAtDepth[])
{
    result[index] = {node, depth};
    if (node.childrenIds != null)
    {
        for (const childId of node.childrenIds)
        {
            const child = nodes[childId];
            if (child)
            {
                index = addToTree(child, nodes, depth + 1, index + 1, result);
            }
        }
    }
    return index;
}