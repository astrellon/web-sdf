import equal from "fast-deep-equal";
import { quatIdentity, rquat, rvec3, rvec4, vec3ApproxEquals, vec3One, vec3Zero, vec4One } from "../gl-matrix-ts";
import { SceneTree } from "./scene-tree";
import { LightingModelInt, LightingModelLambert, LightingModelPhong, LightingModelType, LightingModelUnlit, SceneNode, SceneNodeId, SceneNodes, SdfOpCode, SdfOpCodeInt, SdfOpCodeIntersection, SdfOpCodeNone, SdfOpCodeSubtraction, SdfOpCodeUnion, SdfOpCodeXor, ShapeType, ShapeTypeBox, ShapeTypeHexPrism, ShapeTypeInt, ShapeTypeNone, ShapeTypeOctahedron, ShapeTypeSphere, ShapeTypeTorus } from "./scene-entities";

interface ShaderLight
{
    readonly position: rvec3;
    readonly radius: number;
    readonly colour: rvec4;
}
export const lightDataSize = 3 + 1 + 4;

interface ShaderMaterialIndex
{
    readonly index: number;
    readonly weight: number;
}
interface ShaderShape
{
    readonly position: rvec3;
    readonly maxSize: number;
    readonly rotation: rquat;
    readonly shapeType: ShapeTypeInt;
    readonly shapeParams: rvec3;
    readonly material: number;
}
export const shapeDataSize = 4 + 4 + 4 + 4;

interface ShaderMaterial
{
    readonly diffuseColour: rvec3;
    readonly lightingModel: LightingModelInt;
    readonly specularColour: rvec3;
    readonly shininess: number;
}
export const materialDataSize = 4 + 4;

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
    'torus': ShapeTypeTorus,
    'octahedron': ShapeTypeOctahedron,
}
const LightingModelMap: { readonly [key: string]: LightingModelInt} =
{
    'unlit': LightingModelUnlit,
    'lambert': LightingModelLambert,
    'phong': LightingModelPhong
}

function toShapeTypeInt(type: ShapeType): ShapeTypeInt
{
    return ShapeTypeMap[type] || ShapeTypeNone;
}
function toOpCodeInt(type: SdfOpCode): SdfOpCodeInt
{
    return SdfOpCodeMap[type] || SdfOpCodeNone;
}
function toLightingModelInt(type: LightingModelType): LightingModelInt
{
    return LightingModelMap[type] || LightingModelUnlit;
}

export type ShapeOperation = number | SdfOpCode;

export class SceneConverter
{
    private lights: ShaderLight[] = [];
    private lightDataArray: number[] = [];

    private materials: ShaderMaterial[] = [];
    private materialDataArray: number[] = [];

    private shapes: ShaderShape[] = [];
    private shapeDataArray: number[] = [];

    private highlight: number[] = [];
    private operations: ShapeOperation[] = [];
    private numberOperations: number[] = [];
    private cloudOperations: ShapeOperation[] = [];
    private numberCloudOperations: number[] = [];

    private highlightedId: SceneNodeId | undefined = undefined;

    private previousTree?: SceneTree;

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

    public getMaterials()
    {
        return this.materials;
    }

    public getMaterialDataArray()
    {
        return this.materialDataArray;
    }

    public getNumMaterials()
    {
        return this.materials.length;
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

    public setCloudOperations(operations: ShapeOperation[])
    {
        this.cloudOperations = operations;
        this.updateCloudOperationNumbers();
    }

    public getCloudOperations()
    {
        return this.cloudOperations;
    }

    public getCloudOperationNumbers()
    {
        return this.numberCloudOperations;
    }

    public setHighlight(nodeId: SceneNodeId | undefined)
    {
        this.highlightedId = nodeId;
    }

    public getHighlights()
    {
        return this.highlight;
    }

    public setLight(index: number, light: Partial<ShaderLight>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds light index ${index}`);
        }

        if (index >= this.lights.length)
        {
            this.lights[index] = { ...SceneConverter.createNewLight(), ...light };
        }
        else
        {
            this.lights[index] = { ...this.lights[index], ...light };
        }

        this.updateLight(index);
    }

    public setMaterial(index: number, material: Partial<ShaderMaterial>)
    {
        if (index < 0)
        {
            throw new Error(`Out of bounds material index ${index}`);
        }

        if (index >= this.materials.length)
        {
            this.materials[index] = { ...SceneConverter.createNewMaterial(), ...material };
        }
        else
        {
            this.materials[index] = { ...this.materials[index], ...material };
        }

        this.updateMaterial(index);
    }

    public updateShapesFromTree(sceneTree: SceneTree)
    {
        if (this.previousTree === sceneTree)
        {
            return;
        }

        const rootNode = sceneTree.nodes[sceneTree.rootNodeId];
        if (!rootNode)
        {
            return;
        }

        const { operations, cloudOperations, shapes, lights, materials, highlight } = SceneConverter.createShapesFromNode(sceneTree, this.highlightedId);
        if (!equal(this.highlight, highlight))
        {
            this.highlight = highlight;
            console.log('Highlight', this.highlight);
            this.updateHighlighted();
        }
        if (!equal(this.operations, operations))
        {
            this.operations = operations;
            console.log('Operations', this.operations);

            this.updateOperationNumbers();
        }
        if (!equal(this.cloudOperations, cloudOperations))
        {
            this.cloudOperations = cloudOperations;
            console.log('Cloud Operations', this.cloudOperations);

            this.updateCloudOperationNumbers();
        }

        if (!equal(this.shapes, shapes))
        {
            console.log('Shapes', this.shapes);
            this.shapes = shapes;
            this.shapeDataArray.length = 0;
            for (let i = 0; i < this.shapes.length; i++)
            {
                this.updateShape(i);
            }
        }

        if (!equal(this.lights, lights))
        {
            this.lights = lights;
            console.log('Lights', this.lights);
            this.lightDataArray.length = 0;
            for (let i = 0; i < this.lights.length; i++)
            {
                this.updateLight(i);
            }
        }

        if (!equal(this.materials, materials))
        {
            this.materials = materials;
            console.log('Materials', this.materials);
            this.materialDataArray.length = 0;
            for (let i = 0; i < this.materials.length; i++)
            {
                this.updateMaterial(i);
            }
        }
    }

    public static createShapesFromNode(sceneTree: SceneTree, highlightedId: SceneNodeId | undefined)
    {
        const rootNode = sceneTree.nodes[sceneTree.rootNodeId];
        if (!rootNode)
        {
            return;
        }

        const opsStack: ShapeOperation[] = [];
        const cloudOpsStack: ShapeOperation[] = [];
        const shapeStack: ShaderShape[] = [];
        const lights: ShaderLight[] = [];
        const materials: ShaderMaterial[] = [];
        const highlight: number[] = [];
        this.pushToStack(opsStack, cloudOpsStack, false, shapeStack, lights, materials, highlight, highlightedId, rootNode, sceneTree.nodes);

        opsStack.reverse();
        if (highlight.length > 0)
        {
            const diff = highlight[1] - highlight[0];
            highlight[0] = opsStack.length - highlight[0] - 1;
            highlight[1] = highlight[0] + diff;
        }

        return {
            operations: opsStack,
            shapes: shapeStack,
            cloudOperations: cloudOpsStack,
            lights, materials, highlight
        };
    }

    private static pushToStack(opsStack: ShapeOperation[], cloudOpsStack: ShapeOperation[], isCurrentlyCloud: boolean, shapeStack: ShaderShape[], lights: ShaderLight[], materials: ShaderMaterial[], highlight: number[], highlightedId: SceneNodeId | undefined, node: SceneNode, nodes: SceneNodes)
    {
        if (node.childOpCode !== 'none')
        {
            let firstChild = true;
            for (let i = 0; i < node.childrenIds.length; i++)
            {
                const child = nodes[node.childrenIds[i]];
                if (child.hasShape || child.childOpCode !== 'none')
                {
                    if (firstChild)
                    {
                        firstChild = false;
                    }
                    else
                    {
                        if (isCurrentlyCloud)
                        {
                            cloudOpsStack.push(node.childOpCode);
                        }
                        else
                        {
                            opsStack.push(node.childOpCode);
                        }
                    }
                }
            }
        }

        if (node.hasShape)
        {
            let index = shapeStack.findIndex(s => equal(s, node.shape));
            if (index < 0)
            {
                index = shapeStack.length;
                const converted = SceneConverter.convertToShape(node, materials);
                if (converted != null)
                {
                    shapeStack.push(converted);
                }
            }

            if (node.id === highlightedId)
            {
                highlight.push(opsStack.length, opsStack.length + 1);
            }

            isCurrentlyCloud = node.shape.cloud;

            if (isCurrentlyCloud)
            {
                cloudOpsStack.push(index);
            }
            else
            {
                opsStack.push(index);
            }
        }

        if (node.hasLight)
        {
            const converted = SceneConverter.convertToLight(node);
            if (converted != null)
            {
                lights.push(converted);
            }
        }

        for (const childId of node.childrenIds)
        {
            this.pushToStack(opsStack, cloudOpsStack, isCurrentlyCloud, shapeStack, lights, materials, highlight, highlightedId, nodes[childId], nodes);
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
            this.shapes[index] = SceneConverter.createNewShape(shape);
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

    private updateMaterial(index: number)
    {
        const dataIndex = index * materialDataSize;
        const material = this.materials[index];

        this.materialDataArray[dataIndex    ] = material.diffuseColour.x;
        this.materialDataArray[dataIndex + 1] = material.diffuseColour.y;
        this.materialDataArray[dataIndex + 2] = material.diffuseColour.z;
        this.materialDataArray[dataIndex + 3] = material.lightingModel;
        this.materialDataArray[dataIndex + 4] = material.specularColour.x;
        this.materialDataArray[dataIndex + 5] = material.specularColour.y;
        this.materialDataArray[dataIndex + 6] = material.specularColour.z;
        this.materialDataArray[dataIndex + 7] = material.shininess;
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

        this.shapeDataArray[dataIndex + 12] = Math.round(shape.material);
        this.shapeDataArray[dataIndex + 13] = 0; // Unused, but needed for padding
        this.shapeDataArray[dataIndex + 14] = 0;
        this.shapeDataArray[dataIndex + 15] = 0;
    }

    private updateHighlighted()
    {
        if (this.highlight.length < 2)
        {
            this.highlight = [-1, 0];
        }
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
    private updateCloudOperationNumbers()
    {
        this.numberCloudOperations = this.cloudOperations.map(i =>
        {
            if (typeof(i) === 'string')
            {
                return toOpCodeInt(i);
            }
            return i;
        });
    }

    public static convertToShape(sceneNode: SceneNode, materials: ShaderMaterial[]): ShaderShape | null
    {
        const shape = sceneNode.shape;
        if (shape == null)
        {
            return null;
        }

        const material: ShaderMaterial = {
            diffuseColour: shape.diffuseColour,
            lightingModel: toLightingModelInt(shape.lightingModel),
            specularColour: shape.specularColour,
            shininess: shape.shininess
        }
        let materialIndex = this.findApproxMaterial(material, materials);
        if (materialIndex < 0)
        {
            materialIndex = materials.length;
            materials.push(material);
        }

        return {
            material: materialIndex,
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

    public static createNewMaterial(): ShaderMaterial
    {
        return {
            diffuseColour: vec3One(),
            lightingModel: LightingModelLambert,
            specularColour: vec3One(),
            shininess: 10
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
            material: 0,

            ...partial
        }
    }

    private static findApproxMaterial(material: ShaderMaterial, materials: ShaderMaterial[])
    {
        for (let i = 0; i < materials.length; i++)
        {
            const current = materials[i];
            if (current.lightingModel !== material.lightingModel ||
                Math.abs(current.shininess - material.shininess) < 0.0001)
            {
                continue;
            }
            if (!vec3ApproxEquals(current.diffuseColour, material.diffuseColour))
            {
                continue;
            }
            if (!vec3ApproxEquals(current.specularColour, material.specularColour))
            {
                continue;
            }

            return i;
        }

        return -1;
    }
}