import { vec3New, vec4New } from "../math";
import { createNewLightNode, createNewOperationNode, createNewShapeNode, SceneTree, sceneTreeAddChildMutable } from "../ray-marching/scene-tree";
import { makeNodeMap } from "./examples";

function createScene()
{
    const rootNode = createNewOperationNode('Root', 'union');
    const mainScene = createNewOperationNode('Main', 'subtraction');
    sceneTreeAddChildMutable(rootNode, mainScene);

    const hexPrism = createNewShapeNode('Hex Prism', {
        type: 'hexPrism',
        params: {
            'Radius': 0.75,
            'Depth': 2.0
        },
        maxSize: 1.5,
        diffuseColour: vec3New(0.5, 0.5, 0.5)
    });
    const boxAndSphere = createNewOperationNode('Box & Sphere', 'union');

    sceneTreeAddChildMutable(mainScene, hexPrism);
    sceneTreeAddChildMutable(mainScene, boxAndSphere);

    const box = createNewShapeNode('Box', {
        type: "box",
        params: {
            'X': 6,
            'Y': 1,
            'Z': 6
        },
        diffuseColour: vec3New(1.0, 1.0, 1.0),
        lightingModel: 'lambert'
    }, vec3New(0, -1.5, 0));
    const sphere = createNewShapeNode('Sphere', {
        type: "sphere",
        params: {
            'Radius': 1.25
        },
        maxSize: 2.0,
        diffuseColour: vec3New(0.1, 0.2, 0.9),
        lightingModel: 'phong'
    })
    sceneTreeAddChildMutable(boxAndSphere, box);
    sceneTreeAddChildMutable(boxAndSphere, sphere);

    const redLight = createNewLightNode('Red Light', {
        colour: vec4New(1.0, 0.8, 0.6, 1)
    }, vec3New(4, 2, 3));
    const greenLight = createNewLightNode('Green Light', {
        colour: vec4New(0.2, 1.0, 0.6, 1)
    }, vec3New(0, 0, 0));
    sceneTreeAddChildMutable(rootNode, redLight);
    sceneTreeAddChildMutable(rootNode, greenLight);

    const nodes = makeNodeMap(rootNode, mainScene, hexPrism, boxAndSphere, box, sphere, redLight, greenLight);

    const tree: SceneTree = {
        nodes, rootNodeId: rootNode.id
    }

    return tree;
}

export const boxSphereHexScene = createScene();