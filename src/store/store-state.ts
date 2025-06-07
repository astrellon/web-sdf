import { Modifier } from "simple-data-store";
import { defaultRenderOptions, defaultViewport } from "./store";
import { ShapeNode } from "../ray-marching/sdf-scene";

export interface ViewportOptions
{
    readonly enableRender: boolean;
    readonly enableShadows: boolean;
    readonly enableShowMarching: boolean;
    readonly renderScale: number;
    readonly maxMarchingStep: number;
    readonly epsilon: number;
}

export interface ViewportState
{
    readonly options: ViewportOptions;
}

export interface AppState
{
    readonly viewports: ViewportState[];
    readonly rootNode: ShapeNode;
    readonly selectedNode?: ShapeNode;
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

export function setRootNode(rootNode: ShapeNode): Modifier<AppState>
{
    return () => { return { rootNode } };
}

export function setSelectedNode(selectedNode?: ShapeNode): Modifier<AppState>
{
    return () => { return { selectedNode } };
}