import Signal from "simple-signals";
import { WorkerRenderRequest, WorkerResponses } from "./states";
import { ReadonlyVec3 } from "gl-matrix";
import { rvec3 } from "./gl-matrix-ts";

export class WorkerWrapper
{
    public readonly width: number;
    public readonly height: number;
    public readonly xPos: number;
    public readonly yPos: number;
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

    public doRender = (totalWidth: number, totalHeight: number, cameraPosition: rvec3   ) =>
    {
        const message: WorkerRenderRequest = {
            type: 'render',
            buffer: this.imageData,
            xPos: this.xPos,
            yPos: this.yPos,
            width: this.width,
            height: this.height,
            cameraPosition, totalHeight, totalWidth
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