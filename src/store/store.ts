import DataStore, { Modifier } from "simple-data-store";
import { AppState, RendererOptions } from "./store-state";

export const store = new DataStore<AppState>({
    rendererOptions: {
        renderScale: 1.0,
        renderEnabled: true,
        maxMarchingStep: 255,
        enableShadows: true,
        enableShowMarching: false
    }
});

export function updateRendererOptions(options: Partial<RendererOptions>): Modifier<AppState>
{
    return (state: AppState) =>
    {
        return {
            rendererOptions:
            {
                ...state.rendererOptions,
                ...options
            }
        }
    }
}