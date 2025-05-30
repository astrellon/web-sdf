import { h, render } from 'preact';
import { SdfOpCodeIntersection, SdfScene } from "../ray-marching/sdf-scene";
import { WebGLApp } from "../components/webgl-app";
import { store } from "../store/store";

const appEl = document.getElementById("app");
function renderApp()
{
    render(<WebGLApp state={store.state()} />, appEl);
}

renderApp();
store.subscribeAny(renderApp);