import { SceneNode, SceneNodes, ShapeNodeId } from "./sdf-entities";

export interface SdfTree
{
    readonly nodes: SceneNodes;
    readonly rootNodeId?: ShapeNodeId;
}

export function sdfTreeUpdateNode(tree: SdfTree, node: SceneNode): SdfTree
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

export function sdfTreeSetRootNodeId(tree: SdfTree, rootNodeId: ShapeNodeId): SdfTree
{
    return { ...tree, rootNodeId }
}

export function sdfTreeSetNodes(tree: SdfTree, nodes: SceneNodes): SdfTree
{
    return { ...tree, nodes }
}