import equal from 'fast-deep-equal';
import { SceneTree } from './scene-tree';
import { LightingModelInt, LightingModelLambert, LightingModelPhong, LightingModelType, LightingModelUnlit, SceneNode, SceneNodes, SdfOpCode, Shape } from './scene-entities';
import { rvec3, rvec4, vec3One, vec4One } from '../math';
import { quat, vec3 } from 'gl-matrix';
import ShaderAssembler from './shader-assembler';
import { sdfShapesMap } from './sdf-shapes';

interface ShaderLight
{
    readonly position: rvec3;
    readonly radius: number;
    readonly colour: rvec4;
}
export const lightDataSize = 3 + 1 + 4;

interface ShaderMaterial
{
    readonly diffuseColour: rvec3;
    readonly lightingModel: LightingModelInt;
    readonly specularColour: rvec3;
    readonly shininess: number;
}
export const materialDataSize = 4 + 4;

export type ShapeOperation = number | SdfOpCode;

const LightingModelMap: { readonly [key: string]: LightingModelInt} =
{
    'unlit': LightingModelUnlit,
    'lambert': LightingModelLambert,
    'phong': LightingModelPhong
}
function toLightingModelInt(type: LightingModelType): LightingModelInt
{
    return LightingModelMap[type] || LightingModelUnlit;
}

export class SceneConverter
{
    private lights: ShaderLight[] = [];
    private lightDataArray: number[] = [];

    private materials: ShaderMaterial[] = [];
    private materialDataArray: number[] = [];

    private parameters: number[] = [];
    private shader: string = '';

    private previousTree?: SceneTree;

    public getTree()
    {
        return this.previousTree;
    }

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

    public getParameters()
    {
        return this.parameters;
    }

    public getShader()
    {
        return this.shader;
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

    public updateShapesFromTree(sceneTree: SceneTree): boolean
    {
        if (this.previousTree === sceneTree)
        {
            return false;
        }

        this.previousTree = sceneTree;

        const rootNode = sceneTree.nodes[sceneTree.rootNodeId];
        if (!rootNode)
        {
            return false;
        }

        const { lights, materials, parameters, assembler } = SceneConverter.createShapesFromNode(sceneTree);

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

        if (!equal(this.parameters, parameters))
        {
            this.parameters = parameters;
            console.log('Parameters', this.parameters);
        }

        this.shader = assembler.getFinal();

        return true;
    }

    public static createShapesFromNode(sceneTree: SceneTree)
    {
        const rootNode = sceneTree.nodes[sceneTree.rootNodeId];
        if (!rootNode)
        {
            return;
        }

        const lights: ShaderLight[] = [];
        const materials: ShaderMaterial[] = [];
        const parameters: number[] = [];
        const assembler = new ShaderAssembler();

        this.processNode(lights, materials, parameters, rootNode, sceneTree.nodes, assembler);

        return {
            lights, materials, parameters, assembler
        };
    }

    private static nodeHasValidShape(node: SceneNode)
    {
        if (!node.hasShape || node.shape == undefined)
        {
            return false;
        }

        if (node.shape.type === 'none')
        {
            return false;
        }

        return true;
    }

    private static processNode(lights: ShaderLight[], materials: ShaderMaterial[], parameters: number[], node: SceneNode, nodes: SceneNodes, assembler: ShaderAssembler)
    {
        let addedFunc = false;
        let startedOperations = 0;
        let numChildren = 0;
        if (node.childOpCode !== 'none')
        {
            for (const childId of node.childrenIds)
            {
                const child = nodes[childId];
                if (this.nodeHasValidShape(child) || child.childOpCode !== 'none')
                {
                    numChildren++;
                }
            }

            if (numChildren > 1)
            {
                addedFunc = true;
                this.processOperation(node.childOpCode, assembler, parameters, node.operationParams);
                startedOperations++;
            }
        }

        if (this.nodeHasValidShape(node))
        {
            addedFunc = true;
            this.processShape(node, node.shape, materials, parameters, assembler);
        }

        if (node.hasLight)
        {
            const converted = SceneConverter.convertToLight(node);
            if (converted != null)
            {
                lights.push(converted);
            }
        }

        let shapeIndex = 0;
        for (const childId of node.childrenIds)
        {
            if (this.processNode(lights, materials, parameters, nodes[childId], nodes, assembler))
            {
                shapeIndex++;

                if (numChildren > 2 && shapeIndex + 1 < numChildren)
                {
                    startedOperations++;
                    this.processOperation(node.childOpCode, assembler, parameters, node.operationParams);
                }
            }
        }

        for (let i = 0; i < startedOperations; i++)
        {
            assembler.endFunction();
        }

        return addedFunc;
    }

    private static processOperation(opCode: SdfOpCode, assembler: ShaderAssembler, parameters: number[], operationParam: number)
    {
        if (opCode === 'union')
        {
            assembler.startFunction('opUnion');
        }
        else if (opCode === 'intersection')
        {
            assembler.startFunction('opIntersection');
        }
        else if (opCode === 'subtraction')
        {
            assembler.startFunction('opSubtraction');
        }
        else if (opCode === 'xor')
        {
            assembler.startFunction('opXor');
        }
        else if (opCode === 'smoothUnion')
        {
            assembler.startFunction('opSmoothUnion');
            this.pushParameter(parameters, operationParam, assembler)
        }
        else if (opCode === 'smoothSubtraction')
        {
            assembler.startFunction('opSmoothSubtraction');
            this.pushParameter(parameters, operationParam, assembler)
        }
        else if (opCode === 'smoothIntersection')
        {
            assembler.startFunction('opSmoothIntersection');
            this.pushParameter(parameters, operationParam, assembler)
        }
        else
        {
            console.error('Unknown operation', opCode);
        }
    }

    private static pushParameter(parameters: number[], value: number, assembler: ShaderAssembler)
    {
        assembler.writeParameter(parameters.length);
        parameters.push(value);
    }

    private static writeSamplePoint(node: SceneNode, parameters: number[], assembler: ShaderAssembler)
    {
        const p = node.position;
        if (node.selfOpCode === 'repeatDomain')
        {
            assembler.startFunction('repeatDomain');
        }

        const rotation = quat.create();
        quat.fromEuler(rotation, node.rotation[0], node.rotation[1], node.rotation[2]);
        assembler.startFunction('quatMul');
        assembler.startFunction('vec4');
        this.pushParameter(parameters, rotation[0], assembler);
        this.pushParameter(parameters, rotation[1], assembler);
        this.pushParameter(parameters, rotation[2], assembler);
        this.pushParameter(parameters, rotation[3], assembler);
        assembler.endFunction();

        assembler.startFunction('vec3');
        this.pushParameter(parameters, -p[0], assembler);
        this.pushParameter(parameters, -p[1], assembler);
        this.pushParameter(parameters, -p[2], assembler);
        assembler.endFunction();
        assembler.writeRaw(' + point');

        assembler.endFunction();

        if (node.selfOpCode === 'repeatDomain')
        {
            this.pushParameter(parameters, node.operationParams, assembler);
            assembler.endFunction();
        }
    }

    private static processShape(node: SceneNode, shape: Shape, materials: ShaderMaterial[], parameters: number[], assembler: ShaderAssembler)
    {
        const shapeInfo = sdfShapesMap[shape.type];
        if (shapeInfo == undefined)
        {
            console.error('Unsupported shape type');
            return;
        }

        assembler.startFunction('vec2');
        const material: ShaderMaterial = {
            diffuseColour: shape.diffuseColour,
            lightingModel: toLightingModelInt(shape.lightingModel),
            specularColour: shape.specularColour,
            shininess: shape.shininess
        }
        const materialIndex = materials.length;
        materials.push(material);

        assembler.startFunction(shapeInfo.funcName);
        this.writeSamplePoint(node, parameters, assembler);

        for (const paramInfo of shapeInfo.params)
        {
            const value = (shape.params[paramInfo.name] ?? paramInfo.default) ?? 1.0;
            this.pushParameter(parameters, value, assembler);
        }

        assembler.endFunction();

        assembler.writeValue(materialIndex);
        assembler.endFunction();
    }

    private updateLight(index: number)
    {
        const dataIndex = index * lightDataSize;
        const light = this.lights[index];

        this.lightDataArray[dataIndex    ] = light.position[0];
        this.lightDataArray[dataIndex + 1] = light.position[1];
        this.lightDataArray[dataIndex + 2] = light.position[2];
        this.lightDataArray[dataIndex + 3] = light.radius;
        this.lightDataArray[dataIndex + 4] = light.colour[0];
        this.lightDataArray[dataIndex + 5] = light.colour[1];
        this.lightDataArray[dataIndex + 6] = light.colour[2];
        this.lightDataArray[dataIndex + 7] = light.colour[3];
    }

    private updateMaterial(index: number)
    {
        const dataIndex = index * materialDataSize;
        const material = this.materials[index];

        this.materialDataArray[dataIndex    ] = material.diffuseColour[0];
        this.materialDataArray[dataIndex + 1] = material.diffuseColour[1];
        this.materialDataArray[dataIndex + 2] = material.diffuseColour[2];
        this.materialDataArray[dataIndex + 3] = material.lightingModel;
        this.materialDataArray[dataIndex + 4] = material.specularColour[0];
        this.materialDataArray[dataIndex + 5] = material.specularColour[1];
        this.materialDataArray[dataIndex + 6] = material.specularColour[2];
        this.materialDataArray[dataIndex + 7] = material.shininess;
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
            position: vec3.create(),
            radius: 10,
            colour: vec4One()
        }
    }
}
