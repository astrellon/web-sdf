import { Editable } from "../common";
import { SceneNode, SceneNodes } from "../ray-marching/scene-entities";
import { SceneTree } from "../ray-marching/scene-tree";
import { boxSphereHexScene } from "./box-sphere-hex";
import { twoSpheres } from "./two-spheres";

export function makeNodeMap(...nodes: SceneNode[]): SceneNodes
{
    const result: Editable<SceneNodes> = {};
    for (const node of nodes)
    {
        result[node.id] = node;
    }
    return result;
}

export interface ExampleInfo
{
    readonly tree: SceneTree,
    readonly title: string;
}

export const examples: ExampleInfo[] = [
    {
        tree: boxSphereHexScene,
        title: 'Box, Sphere and Hex'
    },
    {
        tree: twoSpheres,
        title: 'Two Spheres'
    }
]
