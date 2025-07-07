import { h, render } from 'preact';
import { WebGLApp } from '../components/webgl-app';
import { store } from '../store/store';
import { SceneConverter } from '../ray-marching/scene-converter';
import { AppState, setSceneTree } from '../store/store-state';
import { SceneNode, SceneNodes } from '../ray-marching/scene-entities';
import { createNewLightNode, createNewShapeNode, SceneTree, sceneTreeAddChildMutable } from '../ray-marching/scene-tree';
import { Editable } from '../common';
import '../normalize.css';
import './styles.scss';

const sceneConverter = new SceneConverter();
store.subscribe(state => state.sceneTree, updateFromStoreChange);
store.subscribe(state => state.selectedNodeId, updateHighlighted);

function updateFromStoreChange(state: AppState)
{
    sceneConverter.updateShapesFromTree(state.sceneTree);
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

renderApp();
store.subscribeAny(renderApp);

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
        shapeParams: {x: 0.75, y: 2, z: 0},
        maxSize: 1.5,
        diffuseColour: {x: 0.5, y: 0.5, z: 0.5}
    });
    const boxAndSphere = createNewShapeNode('Box & Sphere', undefined, undefined, undefined, 'union');

    sceneTreeAddChildMutable(mainScene, hexPrism);
    sceneTreeAddChildMutable(mainScene, boxAndSphere);

    const box = createNewShapeNode('Box', {
        type: "box",
        shapeParams: { x: 6, y: 1, z: 6 },
        diffuseColour: { x: 0.2, y: 0.25, z: 0.3 },
        lightingModel: 'lambert'
    }, { x: 0, y: -1.5, z: 0 });
    const sphere = createNewShapeNode('Sphere', {
        type: "sphere",
        shapeParams: { x: 1, y: 2, z: 1 },
        maxSize: 2.0,
        diffuseColour: { x: 0.1, y: 0.2, z: 0.9 },
        lightingModel: 'phong'
    })
    sceneTreeAddChildMutable(boxAndSphere, box);
    sceneTreeAddChildMutable(boxAndSphere, sphere);

    const redLight = createNewLightNode('Red Light', {
        colour: {x: 1.0, y: 0.8, z: 0.6, w: 1}
    }, {x: 4, y: 2, z: 3});
    const greenLight = createNewLightNode('Green Light', {
        colour: {x: 0.2, y: 1.0, z: 0.6, w: 1}
    }, {x: -4, y: 2, z: 3});
    sceneTreeAddChildMutable(rootNode, redLight);
    sceneTreeAddChildMutable(rootNode, greenLight);

    const nodes = makeNodeMap(rootNode, mainScene, hexPrism, boxAndSphere, box, sphere, redLight, greenLight);

    const tree: SceneTree = {
        nodes, rootNodeId: rootNode.id
    }

    store.execute(setSceneTree(tree));
}

loadDefaultSdfScene();