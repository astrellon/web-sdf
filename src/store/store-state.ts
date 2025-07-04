import { Modifier } from "simple-data-store";
import { defaultViewport } from "./store";
import { SceneTree, sceneTreeUpdateNode, } from "../ray-marching/scene-tree";
import { SceneNode, SceneNodeId } from "../ray-marching/scene-entities";

export interface ViewportOptions
{
    readonly enableShadows: boolean;
    readonly enableShowMarching: boolean;
    readonly renderScale: number;
    readonly maxMarchingStep: number;
    readonly epsilon: number;
    readonly pixelated: boolean;
}

export interface ViewportState
{
    readonly options: ViewportOptions;
}

export interface ReparentModalState
{
    readonly show: boolean;
    readonly childNodeId?: SceneNodeId;
}
export interface RawSceneModalState
{
    readonly show: boolean;
}

export interface AppState
{
    readonly viewports: ViewportState[];
    readonly sceneTree: SceneTree;
    readonly selectedNodeId?: SceneNodeId;
    readonly reparentModal: ReparentModalState;
    readonly rawSceneModal: RawSceneModalState;
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

export function setReparentModal(options: ReparentModalState): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const reparentModal = { ...state.reparentModal, ...options };
        return { reparentModal }
    }
}

export function setRawSceneModal(options: RawSceneModalState): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const rawSceneModal = { ...state.rawSceneModal, ...options };
        return { rawSceneModal }
    }
}

export function updateNode(node: SceneNode): Modifier<AppState>
{
    return (state: AppState) =>
    {
        const sceneTree = sceneTreeUpdateNode(state.sceneTree, node);
        return { sceneTree };
    }
}

export function setSceneTree(sceneTree: SceneTree): Modifier<AppState>
{
    return () => { return { sceneTree } }
}

export function setSelectedNode(selectedNodeId?: SceneNodeId): Modifier<AppState>
{
    return (state: AppState) =>
    {
        let selectedParentNodeId: SceneNodeId | undefined = undefined;
        if (selectedNodeId)
        {
            for (const node of Object.values(state.sceneTree.nodes))
            {
                if (node.childrenIds.includes(selectedNodeId))
                {
                    selectedParentNodeId = node.id;
                    break;
                }
            }
        }

        return { selectedNodeId, selectedParentNodeId }
    };
}