import { vec3New, vec4New } from "../math";
import { createNewLightNode, createNewShapeNode, SceneTree, sceneTreeAddChildMutable } from "../ray-marching/scene-tree";
import { makeNodeMap } from "./examples";

function createScene()
{
    const rootNode = createNewShapeNode('Root', null, undefined, undefined, 'union');
    const sphereSmall = createNewShapeNode('Sphere Small', {
        type: "sphere",
        shapeParams: vec3New(1.25, 2, 1),
        diffuseColour: vec3New(0.1, 0.2, 0.9),
        lightingModel: 'phong'
    })
    const sphereLarge = createNewShapeNode('Sphere Large', {
        type: "sphere",
        shapeParams: vec3New(10, 0, 0),
        diffuseColour: vec3New(0.9, 0.2, 0.1),
        lightingModel: 'phong'
    }, vec3New(0, -11, 0))
    sceneTreeAddChildMutable(rootNode, sphereSmall);
    sceneTreeAddChildMutable(rootNode, sphereLarge);

    const redLight = createNewLightNode('Red Light', {
        colour: vec4New(1.0, 0.8, 0.6, 1)
    }, vec3New(4, 2, 3));
    sceneTreeAddChildMutable(rootNode, redLight);

    const nodes = makeNodeMap(rootNode, sphereSmall, sphereLarge, redLight);

    const tree: SceneTree = {
        nodes, rootNodeId: rootNode.id
    }

    return tree;
}

export const twoSpheres = createScene();