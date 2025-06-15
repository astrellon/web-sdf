import { Editable } from "../common";
import { quatIdentity, rquat, rvec3, vec3Zero, vec4One } from "../gl-matrix-ts";
import { Light, makeShapeNodeId, SceneNode, SceneNodes, SdfOpCode, Shape, SceneNodeId } from "./scene-entities";

export interface SceneTree
{
    readonly nodes: SceneNodes;
    readonly rootNodeId?: SceneNodeId;
}
interface SceneNodeAtDepth
{
    readonly node: SceneNode;
    readonly depth: number;
}

export function sceneTreeUpdateNode(tree: SceneTree, node: SceneNode): SceneTree
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

export function sceneTreeSetRootNodeId(tree: SceneTree, rootNodeId: SceneNodeId): SceneTree
{
    return { ...tree, rootNodeId }
}

export function sceneTreeSetNodes(tree: SceneTree, nodes: SceneNodes): SceneTree
{
    return { ...tree, nodes }
}

export function sceneTreeFlatten(tree: SceneTree): SceneNodeAtDepth[]
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

export function sceneTreeCreate(): SceneTree
{
    return { nodes: {} }
}

function createNewLight(light: Partial<Light>): Light
{
    return {
        colour: vec4One(),
        radius: 10,

        ...light
    }
}

export function createNewLightNode(name: string, light?: Partial<Light>, position?: rvec3, rotation?: rquat): SceneNode
{
    return {
        name,
        position: position ?? vec3Zero(),
        rotation: rotation ?? quatIdentity(),
        id: makeShapeNodeId(),
        light: light != undefined ? createNewLight(light) : undefined
    }
}

export function createNewShapeNode(name: string, shape?: Partial<Shape>, position?: rvec3, rotation?: rquat, childOpCode?: SdfOpCode): SceneNode
{
    return {
        name,
        position: position ?? vec3Zero(),
        rotation: rotation ?? quatIdentity(),
        id: makeShapeNodeId(),
        shape: shape != undefined ? createNewShape(shape) : undefined,
        childOpCode
    }
}

export function createNewShape(shape: Partial<Shape>): Shape
{
    return {
        maxSize: 0,
        type: "none",
        shapeParams: vec3Zero(),
        diffuseColour: { x: 0.7, y: 0.3, z: 0.2 },
        specularColour: { x: 1.0, y: 0.8, z: 0.9 },
        lightingModel: 'lambert',
        shininess: 10,

        ...shape
    };
}

// Build time functions
export function sceneTreeAddChildMutable(parent: Editable<SceneNode>, child: SceneNode)
{
    if (parent.childrenIds == undefined)
    {
        parent.childrenIds = [child.id];
    }
    else
    {
        (parent.childrenIds as SceneNodeId[]).push(child.id);
    }
}

export function sceneTreeAddChild(tree: SceneTree, parent: SceneNode, child: SceneNode)
{
    if (parent.childrenIds == undefined)
    {
        parent = {
            ...parent,
            childrenIds: [child.id]
        }
    }
    else
    {
        parent = {
            ...parent,
            childrenIds: [...parent.childrenIds, child.id]
        }
    }

    const nodes = {
        ...tree.nodes,
        [parent.id]: parent
    }

    return { ...tree, nodes };
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