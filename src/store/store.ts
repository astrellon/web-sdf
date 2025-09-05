import DataStore from "simple-data-store";
import { AppState, ViewportOptions, ViewportState } from "./store-state";

export const defaultRenderOptions: ViewportOptions = {
    renderScale: 1.0,
    maxMarchingStep: 512,
    enableShadows: true,
    enableShowMarching: false,
    enableDepth: false,
    enableNormals: false,
    enableToLightNormals: false,
    enableSoftShadows: true,
    epsilon: 0.0001,
    shadowSharpness: 128.0,
    pixelated: false
}
export const defaultViewport: ViewportState = {
    options: defaultRenderOptions
}
export const store = new DataStore<AppState>({
    viewports: [defaultViewport],
    sceneTree: {
        nodes: {}
    },
    reparentModal: {
        show: false
    },
    rawSceneModal: {
        show: false,
    },
    exampleModal: {
        show: false
    },
    currentShader: 'return 100.0;'
});
