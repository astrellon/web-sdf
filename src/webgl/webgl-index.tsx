import { h, render } from 'preact';
import { WebGLApp } from '../components/webgl-app';
import { store } from '../store/store';
import { SceneConverter } from '../ray-marching/scene-converter';
import { AppState, setCurrentShader, setSceneTree } from '../store/store-state';
import { SceneNode, SceneNodes } from '../ray-marching/scene-entities';
import { createNewLightNode, createNewShapeNode, SceneTree, sceneTreeAddChildMutable } from '../ray-marching/scene-tree';
import { Editable } from '../common';
import { vec3New, vec4New } from '../math';
import '../normalize.css';
import './styles.scss';
import { createShader } from '../ray-marching/shader-assembler';

const sceneConverter = new SceneConverter();
store.subscribe(state => state.sceneTree, updateFromStoreChange);
store.subscribe(state => state.selectedNodeId, updateHighlighted);

function updateFromStoreChange(state: AppState)
{
    if (sceneConverter.updateShapesFromTree(state.sceneTree))
    {
        const shader = createShader(state.sceneTree);
        store.execute(setCurrentShader(shader));
    }
}

function updateHighlighted(state: AppState)
{
    sceneConverter.setHighlight(state.selectedNodeId);
    sceneConverter.updateShapesFromTree(state.sceneTree);
}

const appEl = document.getElementById("app");
function renderApp()
{
    render(<WebGLApp state={store.state()} sceneConverter={sceneConverter} />, appEl);
}

function makeNodeMap(...nodes: SceneNode[]): SceneNodes
{
    const result: Editable<SceneNodes> = {};
    for (const node of nodes)
    {
        result[node.id] = node;
    }
    return result;
}

function loadDefaultSdfScene()
{
    const rootNode = createNewShapeNode('Root', null, undefined, undefined, 'union');
    const mainScene = createNewShapeNode('Main', null, undefined, undefined, 'subtraction');
    sceneTreeAddChildMutable(rootNode, mainScene);

    const hexPrism = createNewShapeNode('Hex Prism', {
        type: 'hexPrism',
        shapeParams: vec3New(0.75, 2, 0),
        maxSize: 1.5,
        diffuseColour: vec3New(0.5, 0.5, 0.5)
    });
    const boxAndSphere = createNewShapeNode('Box & Sphere', undefined, undefined, undefined, 'union');

    sceneTreeAddChildMutable(mainScene, hexPrism);
    sceneTreeAddChildMutable(mainScene, boxAndSphere);

    const box = createNewShapeNode('Box', {
        type: "box",
        shapeParams: vec3New(6, 1, 6),
        diffuseColour: vec3New(0.2, 0.25, 0.3),
        lightingModel: 'lambert'
    }, vec3New(0, -1.5, 0));
    const sphere = createNewShapeNode('Sphere', {
        type: "sphere",
        shapeParams: vec3New(2, 2, 1),
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
    }, vec3New(-4, 2, 3));
    sceneTreeAddChildMutable(rootNode, redLight);
    sceneTreeAddChildMutable(rootNode, greenLight);

    const nodes = makeNodeMap(rootNode, mainScene, hexPrism, boxAndSphere, box, sphere, redLight, greenLight);

    const tree: SceneTree = {
        nodes, rootNodeId: rootNode.id
    }

    store.execute(setSceneTree(tree));

    const shader = createShader(tree);
    store.execute(setCurrentShader(shader));
}

loadDefaultSdfScene();

renderApp();
store.subscribeAny(renderApp);