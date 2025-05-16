import { mat4, quat, vec3, vec3One, vec3Zero } from "./gl-matrix-ts";

interface Light
{
    position: vec3;
    radius: number;
    colour: vec3;
}
export const lightDataSize = 3 + 1 + 3;

export type SdfOpCode = 'none' | 'union' | 'intersection' | 'subtraction' | 'xor';
export type SdfOpCodeInt = 0 | 1 | 2 | 3 | 4;
export type ShapeType = 'none' | 'box' | 'sphere' | 'hexPrism';
export type ShapeTypeInt = 0 | 1 | 2 | 3;
interface Shape
{
    position: vec3;
    rotation: quat;
    transformDirty: boolean;
    type: ShapeType;
    shapeParams: vec3;

    leftOpCode: SdfOpCode;
    left?: Shape;
    rightOpCode: SdfOpCode;
    right?: Shape;
}

type ShapeData =
[
    vec3, number,           // position | max size
    quat,                   // quaternion
    ShapeTypeInt, vec3,     // shapeType | shapeParams
    SdfOpCodeInt, number,   // opCode | left shape index
    SdfOpCodeInt, number    // opCode | right shape index
];
export const shapeDataSize = 4 + 4 + 4 + 2 + 2;

export class SdfScene
{
    private lights: Light[] = [];
    private lightDataArray: number[] = [];

    private shapes: Shape[] = [];
    private shapeDataArray: number[] = [];

    public getLightDataArray()
    {
        return this.lightDataArray;
    }

    public getLights()
    {
        return this.lights;
    }

    public getNumLights()
    {
        return this.lights.length;
    }

    public setLight(index: number, light: Partial<Light>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds light index ${index}`);
        }

        if (index >= this.lights.length)
        {
            this.lights[index] = { ...this.createNewLight(), ...light };
        }
        else
        {
            this.lights[index] = { ...this.lights[index], ...light };
        }

        this.updateLight(index);
    }

    /*
    public setShape(index: number, shape: Partial<Shape>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds shape index ${index}`);
        }

        if (index >= this.shapes.length)
        {
            this.shapes[index] = { ...defaultShape, ...shape };
        }
        else
        {
            this.shapes[index] = { ...this.shapes[index], ...shape };
        }

        this.updateShape(index);
    }
    */

    private updateLight(index: number)
    {
        const dataIndex = index * lightDataSize;
        const light = this.lights[index];

        this.lightDataArray[dataIndex    ] = light.position.x;
        this.lightDataArray[dataIndex + 1] = light.position.y;
        this.lightDataArray[dataIndex + 2] = light.position.z;
        this.lightDataArray[dataIndex + 3] = light.radius;
        this.lightDataArray[dataIndex + 4] = light.colour.x;
        this.lightDataArray[dataIndex + 5] = light.colour.y;
        this.lightDataArray[dataIndex + 6] = light.colour.z;
    }

    private createNewLight(): Light
    {
        return {
            position: vec3Zero(),
            radius: 10,
            colour: vec3One()
        }
    }
}