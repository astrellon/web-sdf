import equal from "fast-deep-equal";
import { Opaque } from "../common";
import { quat, quatIdentity, vec3, vec3Zero, vec4, vec4One } from "../gl-matrix-ts";

interface Light
{
    name: string;
    position: vec3;
    radius: number;
    colour: vec4;
}
export const lightDataSize = 3 + 1 + 4;

export interface Camera
{
    position: vec3;
    rotation: quat;
    fieldOfView: number;
}

export type SdfOpCode = 'none' | 'union' | 'intersection' | 'subtraction' | 'xor';
export type SdfOpCodeInt = Opaque<number, "sdfOpCode">;
export const SdfOpCodeNone = -5e2 as SdfOpCodeInt;
export const SdfOpCodeUnion = -6e2 as SdfOpCodeInt;
export const SdfOpCodeIntersection = -7e2 as SdfOpCodeInt;
export const SdfOpCodeSubtraction = -8e2 as SdfOpCodeInt;
export const SdfOpCodeXor = -9e2 as SdfOpCodeInt;

export type ShapeType = 'none' | 'box' | 'sphere' | 'hexPrism';
export type ShapeTypeInt = Opaque<number, "shapeType">;
export const ShapeTypeNone = -5e3 as ShapeTypeInt;
export const ShapeTypeBox = -6e3 as ShapeTypeInt;
export const ShapeTypeSphere = -7e3 as ShapeTypeInt;
export const ShapeTypeHexPrism = -8e3 as ShapeTypeInt;
export interface Shape
{
    position: vec3;
    rotation: quat;
    maxSize: number;
    type: ShapeType;
    shapeParams: vec3;
    diffuseColour: vec4;
    specularColour: vec4;
}

export type ShapeNodeId = Opaque<string, 'ShapeNodeId'>;
export function makeShapeNodeId(): ShapeNodeId
{
    return crypto.randomUUID() as ShapeNodeId;
}

export interface ShapeNode
{
    id: ShapeNodeId;
    name: string;
    shape?: Shape;
    childOpCode?: SdfOpCode;
    parentId?: ShapeNodeId;
    childrenIds?: ShapeNodeId[];
}
export interface ShapeNodes
{
    [shapeNodeId: string]: ShapeNode
}

const SdfOpCodeMap: { readonly [key: string]: SdfOpCodeInt } =
{
    'none': SdfOpCodeNone,
    'union': SdfOpCodeUnion,
    'intersection': SdfOpCodeIntersection,
    'subtraction': SdfOpCodeSubtraction,
    'xor': SdfOpCodeXor,
}
const ShapeTypeMap: { readonly [key: string]: ShapeTypeInt } =
{
    'none': ShapeTypeNone,
    'box': ShapeTypeBox,
    'sphere': ShapeTypeSphere,
    'hexPrism': ShapeTypeHexPrism,
}

function toShapeTypeInt(type: ShapeType): ShapeTypeInt
{
    return ShapeTypeMap[type] || ShapeTypeNone;
}
function toOpCodeInt(type: SdfOpCode): SdfOpCodeInt
{
    return SdfOpCodeMap[type] || SdfOpCodeNone;
}

export const shapeDataSize = 4 + 4 + 4 + 4;

export type ShapeOperation = number | SdfOpCode;

export class SdfScene
{
    private lights: Light[] = [];
    private lightDataArray: number[] = [];

    private shapes: Shape[] = [];
    private shapeDataArray: number[] = [];

    private operations: ShapeOperation[] = [];
    private numberOperations: number[] = [];

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

    public getNumTotalShapes()
    {
        return this.shapes.length;
    }

    public setOperations(operations: ShapeOperation[])
    {
        this.operations = operations;
        this.updateOperationNumbers();
    }

    public getOperations()
    {
        return this.operations;
    }

    public getOperationNumbers()
    {
        return this.numberOperations;
    }

    public setLight(index: number, light: Partial<Light>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds light index ${index}`);
        }

        if (index >= this.lights.length)
        {
            this.lights[index] = { ...SdfScene.createNewLight(), ...light };
        }
        else
        {
            this.lights[index] = { ...this.lights[index], ...light };
        }

        this.updateLight(index);
    }

    public updateShapesFromRootNode(rootNode: ShapeNode, nodes: ShapeNodes)
    {
        const { operations, shapes } = SdfScene.createShapesFromNode(rootNode, nodes);
        this.operations = operations;
        this.shapes = shapes;

        console.log('Shapes', this.shapes);
        console.log('Operations', this.operations);

        this.shapeDataArray.length = 0;
        for (let i = 0; i < this.shapes.length; i++)
        {
            this.updateShape(i);
        }
        this.updateOperationNumbers();
    }

    public static createShapesFromNode(rootNode: ShapeNode, nodes: ShapeNodes)
    {
        const opsStack: ShapeOperation[] = [];
        const shapeStack: Shape[] = [];
        this.pushToStack(opsStack, shapeStack, rootNode, nodes);

        opsStack.reverse();

        return {
            operations: opsStack,
            shapes: shapeStack
        };
    }

    private static pushToStack(opsStack: ShapeOperation[], shapeStack: Shape[], node: ShapeNode, nodes: ShapeNodes)
    {
        if (node.childOpCode !== undefined && node.childOpCode !== 'none')
        {
            opsStack.push(node.childOpCode);
        }

        if (node.shape !== undefined)
        {
            let index = shapeStack.findIndex(s => equal(s, node.shape));
            if (index < 0)
            {
                index = shapeStack.length;
                shapeStack.push(node.shape);
            }

            opsStack.push(index);
        }

        if (node.childrenIds !== undefined)
        {
            for (const childIndex of node.childrenIds)
            {
                this.pushToStack(opsStack, shapeStack, nodes[childIndex], nodes);
            }
        }
    }

    public setShape(index: number, shape: Partial<Shape>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds shape index ${index}`);
        }

        if (index >= this.shapes.length)
        {
            this.shapes[index] = SdfScene.createNewShape(shape);
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
        this.lightDataArray[dataIndex + 3] = light.radius;
        this.lightDataArray[dataIndex + 4] = light.colour.x;
        this.lightDataArray[dataIndex + 5] = light.colour.y;
        this.lightDataArray[dataIndex + 6] = light.colour.z;
        this.lightDataArray[dataIndex + 7] = light.colour.w;
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

        this.shapeDataArray[dataIndex + 12] = shape.diffuseColour.x;
        this.shapeDataArray[dataIndex + 13] = shape.diffuseColour.y;
        this.shapeDataArray[dataIndex + 14] = shape.diffuseColour.z;
        this.shapeDataArray[dataIndex + 15] = shape.diffuseColour.w;

        // this.shapeDataArray[dataIndex + 16] = shape.specularColour.x;
        // this.shapeDataArray[dataIndex + 17] = shape.specularColour.y;
        // this.shapeDataArray[dataIndex + 18] = shape.specularColour.z;
        // this.shapeDataArray[dataIndex + 19] = shape.specularColour.w;
    }

    private updateOperationNumbers()
    {
        this.numberOperations = this.operations.map(i =>
        {
            if (typeof(i) === 'string')
            {
                return toOpCodeInt(i);
            }
            return i;
        });
    }

    public static createNewLight(): Light
    {
        return {
            name: 'Unnamed Light',
            position: vec3Zero(),
            radius: 10,
            colour: vec4One()
        }
    }

    public static createNewShape(partial: Partial<Shape>): Shape
    {
        return {
            position: vec3Zero(),
            rotation: quatIdentity(),
            maxSize: 0,
            type: "none",
            shapeParams: vec3Zero(),
            diffuseColour: {x: 0.7, y: 0.3, z: 0.2, w: 1.0},
            specularColour: {x: 1.0, y: 0.8, z: 0.9, w: 1.0},

            ...partial
        }
    }
}