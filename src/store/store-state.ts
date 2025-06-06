import { Modifier } from "simple-data-store";
import { defaultRenderOptions, defaultViewport } from "./store";

export interface ViewportOptions
{
    readonly renderScale: number;
    readonly renderEnabled: boolean;
    readonly maxMarchingStep: number;
    readonly enableShadows: boolean;
    readonly enableShowMarching: boolean;
}

export interface ViewportState
{
    readonly options: ViewportOptions;
}

export interface AppState
{
    readonly viewports: ViewportState[];
}

export function setViewportOptions(index: number, options: Partial<ViewportOptions>): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const viewport = state.viewports[index] ?? defaultViewport;
        const newViewport = {
            ...viewport,
            options: { ...viewport.options, ...options }
        };

        const viewports = [ ...state.viewports ];
        viewports[index] = newViewport;

        return { viewports }
    }
}