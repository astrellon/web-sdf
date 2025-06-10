import { ShapeNode, ShapeNodeId, ShapeNodes } from "./sdf-scene";

export interface SdfTree
{
    readonly nodes: ShapeNodes;
    readonly rootNodeId?: ShapeNodeId;
}

export function sdfTreeUpdateNode(tree: SdfTree, node: ShapeNode): SdfTree
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

export function sdfTreeSetNodes(tree: SdfTree, nodes: ShapeNodes): SdfTree
{
    return { ...tree, nodes }
}