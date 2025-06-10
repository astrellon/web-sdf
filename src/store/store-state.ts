import { Modifier } from "simple-data-store";
import { defaultRenderOptions, defaultViewport } from "./store";
import { ShapeNode, ShapeNodeId, ShapeNodes } from "../ray-marching/sdf-scene";
import { SdfTree, sdfTreeUpdateNode, sdfTreeSetRootNodeId, sdfTreeSetNodes } from "../ray-marching/sdf-tree";

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
    readonly sdfTree: SdfTree;
    readonly selectedNodeId?: ShapeNodeId;
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

export function updateNode(node: ShapeNode): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const sdfTree = sdfTreeUpdateNode(state.sdfTree, node);
        return { sdfTree };
    }
}

export function setNodes(nodes: ShapeNodes): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const sdfTree = sdfTreeSetNodes(state.sdfTree, nodes);
        return { sdfTree }
    }
}

export function setRootNode(rootNodeId?: ShapeNodeId): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const sdfTree = sdfTreeSetRootNodeId(state.sdfTree, rootNodeId);
        return { sdfTree };
    };
}

export function setSelectedNode(selectedNodeId?: ShapeNodeId): Modifier<AppState>
{
    return () => { return { selectedNodeId } };
}