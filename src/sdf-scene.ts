import { mat4, quat, quatIdentity, vec3, vec3One, vec3Zero } from "./gl-matrix-ts";

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
    maxSize: number;
    type: ShapeType;
    shapeParams: vec3;

    leftOpCode: SdfOpCode;
    leftIndex: number;
    rightOpCode: SdfOpCode;
    rightIndex: number;
}

const SdfOpCodeMap: { readonly [key: string]: SdfOpCodeInt } =
{
    'none': 0,
    'union': 1,
    'intersection': 2,
    'subtraction': 3,
    'xor': 4,
}
const ShapeTypeMap: { readonly [key: string]: ShapeTypeInt } =
{
    'none': 0,
    'box': 1,
    'sphere': 2,
    'hexPrism': 3,
}

function toShapeTypeInt(type: ShapeType): ShapeTypeInt
{
    return ShapeTypeMap[type] || 0;
}
function toOpCodeInt(type: SdfOpCode): SdfOpCodeInt
{
    return SdfOpCodeMap[type] || 0;
}

type ShapeDataArray =
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

    public getShapeDataArray()
    {
        return this.shapeDataArray;
    }

    public getShapes()
    {
        return this.shapes;
    }

    public getNumShapes()
    {
        return this.shapes.length;
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

    public setShape(index: number, shape: Partial<Shape>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds shape index ${index}`);
        }

        if (index >= this.shapes.length)
        {
            this.shapes[index] = { ...this.createNewShape(), ...shape };
        }
        else
        {
            this.shapes[index] = { ...this.shapes[index], ...shape };
        }

        this.updateShape(index);
    }

    private updateLight(index: number)
    {
        const dataIndex = index * lightDataSize;
        const light = this.lights[index];

        this.lightDataArray[dataIndex    ] = light.position.x;
        this.lightDataArray[dataIndex + 1] = light.position.y;
        this.lightDataArray[dataIndex + 2] = light.position.z;
        this.lightDataArray[dataIndex + 2] = light.position.z;
        this.lightDataArray[dataIndex + 3] = light.radius;
        this.lightDataArray[dataIndex + 4] = light.colour.x;
        this.lightDataArray[dataIndex + 5] = light.colour.y;
        this.lightDataArray[dataIndex + 6] = light.colour.z;
    }

    private updateShape(index: number)
    {
        const dataIndex = index * shapeDataSize;
        const shape = this.shapes[index];

        this.shapeDataArray[dataIndex     ] = shape.position.x;
        this.shapeDataArray[dataIndex +  1] = shape.position.y;
        this.shapeDataArray[dataIndex +  2] = shape.position.z;
        this.shapeDataArray[dataIndex +  3] = shape.maxSize;

        this.shapeDataArray[dataIndex +  4] = shape.rotation.x;
        this.shapeDataArray[dataIndex +  5] = shape.rotation.y;
        this.shapeDataArray[dataIndex +  6] = shape.rotation.z;
        this.shapeDataArray[dataIndex +  7] = shape.rotation.w;

        this.shapeDataArray[dataIndex +  8] = toShapeTypeInt(shape.type);
        this.shapeDataArray[dataIndex +  9] = shape.shapeParams.x;
        this.shapeDataArray[dataIndex + 10] = shape.shapeParams.y;
        this.shapeDataArray[dataIndex + 11] = shape.shapeParams.z;

        this.shapeDataArray[dataIndex + 12] = toOpCodeInt(shape.leftOpCode);
        this.shapeDataArray[dataIndex + 13] = shape.leftIndex;
        this.shapeDataArray[dataIndex + 14] = toOpCodeInt(shape.rightOpCode);
        this.shapeDataArray[dataIndex + 15] = shape.rightIndex;
    }

    private createNewLight(): Light
    {
        return {
            position: vec3Zero(),
            radius: 10,
            colour: vec3One()
        }
    }

    private createNewShape(): Shape
    {
        return {
            position: vec3Zero(),
            rotation: quatIdentity(),
            maxSize: 1,
            type: "none",
            shapeParams: vec3Zero(),
            leftOpCode: "none",
            leftIndex: -1,
            rightOpCode: "none",
            rightIndex: -1,
        }
    }
}