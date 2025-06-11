import equal from "fast-deep-equal";
import { quatIdentity, rquat, rvec3, rvec4, vec3Zero, vec4One } from "../gl-matrix-ts";
import { SdfTree } from "./sdf-tree";
import { SceneNode, SceneNodes, SdfOpCode, SdfOpCodeInt, SdfOpCodeIntersection, SdfOpCodeNone, SdfOpCodeSubtraction, SdfOpCodeUnion, SdfOpCodeXor, ShapeType, ShapeTypeBox, ShapeTypeHexPrism, ShapeTypeInt, ShapeTypeNone, ShapeTypeSphere } from "./sdf-entities";

interface ShaderLight
{
    readonly position: rvec3;
    readonly radius: number;
    readonly colour: rvec4;
}
export const lightDataSize = 3 + 1 + 4;

interface ShaderShape
{
    readonly position: rvec3;
    readonly maxSize: number;
    readonly rotation: rquat;
    readonly shapeType: ShapeTypeInt;
    readonly shapeParams: rvec3;
    readonly diffuseColour: rvec4;
}
export const shapeDataSize = 4 + 4 + 4 + 4;


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

export type ShapeOperation = number | SdfOpCode;

export class SdfScene
{
    private lights: ShaderLight[] = [];
    private lightDataArray: number[] = [];

    private shapes: ShaderShape[] = [];
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

    public setLight(index: number, light: Partial<ShaderLight>)
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

    public updateShapesFromRootNode(sdfTree: SdfTree)
    {
        const rootNode = sdfTree.nodes[sdfTree.rootNodeId];
        if (!rootNode)
        {
            return;
        }

        const { operations, shapes, lights } = SdfScene.createShapesFromNode(sdfTree);
        this.operations = operations;
        this.shapes = shapes;
        this.lights = lights;

        console.log('Shapes', this.shapes);
        console.log('Operations', this.operations);
        console.log('Lights', this.lights);

        this.shapeDataArray.length = 0;
        for (let i = 0; i < this.shapes.length; i++)
        {
            this.updateShape(i);
        }

        this.lightDataArray.length = 0;
        for (let i = 0; i < this.lights.length; i++)
        {
            this.updateLight(i);
        }

        this.updateOperationNumbers();
    }

    public static createShapesFromNode(sdfTree: SdfTree)
    {
        const rootNode = sdfTree.nodes[sdfTree.rootNodeId];
        if (!rootNode)
        {
            return;
        }

        const opsStack: ShapeOperation[] = [];
        const shapeStack: ShaderShape[] = [];
        const lights: ShaderLight[] = [];
        this.pushToStack(opsStack, shapeStack, lights, rootNode, sdfTree.nodes);

        opsStack.reverse();

        return {
            operations: opsStack,
            shapes: shapeStack,
            lights
        };
    }

    private static pushToStack(opsStack: ShapeOperation[], shapeStack: ShaderShape[], lights: ShaderLight[], node: SceneNode, nodes: SceneNodes)
    {
        if (node.childOpCode !== undefined && node.childOpCode !== 'none')
        {
            opsStack.push(node.childOpCode);
        }

        if (node.shape != undefined)
        {
            let index = shapeStack.findIndex(s => equal(s, node.shape));
            if (index < 0)
            {
                index = shapeStack.length;
                const converted = SdfScene.convertToShape(node);
                if (converted != null)
                {
                    shapeStack.push(converted);
                }
            }

            opsStack.push(index);
        }

        if (node.light != undefined)
        {
            const converted = SdfScene.convertToLight(node);
            if (converted != null)
            {
                lights.push(converted);
            }
        }

        if (node.childrenIds !== undefined)
        {
            for (const childId of node.childrenIds)
            {
                this.pushToStack(opsStack, shapeStack, lights, nodes[childId], nodes);
            }
        }
    }

    public setShape(index: number, shape: Partial<ShaderShape>)
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

        this.shapeDataArray[dataIndex +  8] = shape.shapeType;
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

    public static convertToShape(sceneNode: SceneNode): ShaderShape | null
    {
        const shape = sceneNode.shape;
        if (shape == null)
        {
            return null;
        }

        return {
            diffuseColour: shape.diffuseColour,
            maxSize: shape.maxSize,
            position: sceneNode.position,
            rotation: sceneNode.rotation,
            shapeParams: shape.shapeParams,
            shapeType: toShapeTypeInt(shape.type)
        }
    }

    public static convertToLight(sceneNode: SceneNode): ShaderLight | null
    {
        const light = sceneNode.light;
        if (light == null)
        {
            return null;
        }

        return {
            colour: light.colour,
            position: sceneNode.position,
            radius: light.radius
        }
    }

    public static createNewLight(): ShaderLight
    {
        return {
            position: vec3Zero(),
            radius: 10,
            colour: vec4One()
        }
    }

    public static createNewShape(partial: Partial<ShaderShape>): ShaderShape
    {
        return {
            position: vec3Zero(),
            rotation: quatIdentity(),
            maxSize: 0,
            shapeType: ShapeTypeNone,
            shapeParams: vec3Zero(),
            diffuseColour: {x: 0.7, y: 0.3, z: 0.2, w: 1.0},
            // specularColour: {x: 1.0, y: 0.8, z: 0.9, w: 1.0},

            ...partial
        }
    }
}