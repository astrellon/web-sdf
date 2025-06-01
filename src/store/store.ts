import DataStore, { Modifier } from "simple-data-store";
import { AppState, ViewportOptions, ViewportState } from "./store-state";

export const defaultRenderOptions: ViewportOptions = {
    renderScale: 1.0,
    renderEnabled: true,
    maxMarchingStep: 255,
    enableShadows: true,
    enableShowMarching: false
}
export const defaultViewport: ViewportState = {
    options: defaultRenderOptions
}
export const store = new DataStore<AppState>({
    viewports: [defaultViewport]
});