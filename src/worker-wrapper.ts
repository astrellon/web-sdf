import Signal from "simple-signals";
import { WorkerRenderRequest, WorkerResponses } from "./states";
import { rmat3, rmat4, rvec3 } from "./gl-matrix-ts";
import { SdfScene } from "./sdf-scene";

export class WorkerWrapper
{
    public width: number;
    public height: number;
    public xPos: number;
    public yPos: number;
    public readonly xIndex: number;
    public readonly yIndex: number;

    private readonly worker: Worker;
    private imageData: ArrayBuffer;

    public readonly onRender: Signal<WorkerWrapper>;

    public constructor(width: number, height: number, xPos: number, yPos: number, xIndex: number, yIndex: number)
    {
        this.width = width;
        this.height = height;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xIndex = xIndex;
        this.yIndex = yIndex;

        this.imageData = new ArrayBuffer(width * height * 4);

        this.worker = new Worker('worker.js');
        this.worker.addEventListener('message', this.handleMessage);

        this.onRender = new Signal();
    }

    public updateCanvasSize = (width: number, height: number, xPos: number, yPos: number) =>
    {
        this.width = width;
        this.height = height;
        this.xPos = xPos;
        this.yPos = yPos;
    }

    public doRender = (totalWidth: number, totalHeight: number, cameraPosition: rvec3, cameraMatrix: rmat3, time: number, sdfScene: SdfScene) =>
    {
        const message: WorkerRenderRequest = {
            type: 'render',
            buffer: this.imageData,
            xPos: this.xPos,
            yPos: this.yPos,
            width: this.width,
            height: this.height,
            numLights: sdfScene.getNumLights(),
            lightData: sdfScene.getLightDataArray(),
            cameraPosition, cameraMatrix, totalHeight, totalWidth, time
        };
        this.worker.postMessage(message, [this.imageData]);
    }

    public getImageData = () =>
    {
        return this.imageData;
    }

    private handleMessage = (e: MessageEvent<WorkerResponses>) =>
    {
        if (e.data.type === 'render')
        {
            this.imageData = e.data.buffer;
            this.onRender.trigger(this);
        }
    }
}