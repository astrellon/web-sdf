import { rmat3, rvec3 } from "./gl-matrix-ts";

export interface WorkerRequest
{
    readonly type: string;
}
export interface WorkerRenderRequest extends WorkerRequest
{
    readonly type: 'render';
    readonly xPos: number;
    readonly yPos: number;
    readonly width: number;
    readonly height: number;
    readonly totalWidth: number;
    readonly totalHeight: number;
    readonly cameraPosition: rvec3;
    readonly cameraMatrix: rmat3;
    readonly cameraZDir: number;
    readonly lightData: number[];
    readonly numLights: number;
    readonly shapeData: number[];
    readonly operations: number[];
    readonly buffer: ArrayBuffer;
    readonly time: number;
}
export type WorkerRequests = WorkerRenderRequest;

export interface WorkerResponse
{
    readonly type: string;
}
export interface WorkerRenderResponse extends WorkerResponse
{
    readonly type: 'render';
    readonly buffer: ArrayBuffer;
}

export type WorkerResponses = WorkerRenderResponse;