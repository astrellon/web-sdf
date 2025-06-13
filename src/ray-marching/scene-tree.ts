import { SceneNode, SceneNodes, ShapeNodeId } from "./scene-entities";

export interface SceneTree
{
    readonly nodes: SceneNodes;
    readonly rootNodeId?: ShapeNodeId;
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