import DataStore from "simple-data-store";
import { AppState, ViewportOptions, ViewportState } from "./store-state";

export const defaultRenderOptions: ViewportOptions = {
    renderScale: 1.0,
    maxMarchingStep: 255,
    enableShadows: true,
    enableShowMarching: false,
    epsilon: 0.001,
    pixelated: false
}
export const defaultViewport: ViewportState = {
    options: defaultRenderOptions
}
export const store = new DataStore<AppState>({
    viewports: [defaultViewport],
    sceneTree: {
        nodes: {}
    }
});