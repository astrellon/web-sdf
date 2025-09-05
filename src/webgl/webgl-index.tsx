import { h, render } from 'preact';
import { WebGLApp } from '../components/webgl-app';
import { store } from '../store/store';
import { SceneConverter } from '../ray-marching/scene-converter';
import { AppState, setCurrentShader, setSceneTree } from '../store/store-state';
import { boxSphereHexScene } from '../examples/box-sphere-hex';
import { examples } from '../examples/examples';
import '../normalize.css';
import './styles.scss';

const sceneConverter = new SceneConverter();
store.subscribe(state => state.sceneTree, updateFromStoreChange);

function updateFromStoreChange(state: AppState)
{
    if (sceneConverter.updateShapesFromTree(state.sceneTree))
    {
        store.execute(setCurrentShader(sceneConverter.getShader()));
    }
}

const appEl = document.getElementById("app");
function renderApp()
{
    render(<WebGLApp state={store.state()} sceneConverter={sceneConverter} />, appEl);
}

function loadDefaultSdfScene()
{
    const firstExample = examples[0];

    if (firstExample)
    {
    store.execute(setSceneTree(boxSphereHexScene));
    }
}

loadDefaultSdfScene();

renderApp();
store.subscribeAny(renderApp);
