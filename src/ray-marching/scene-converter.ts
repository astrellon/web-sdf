import equal from "fast-deep-equal";
import { SceneTree } from "./scene-tree";
import { LightingModelInt, LightingModelLambert, SceneNode, SceneNodes, SdfOpCode } from "./scene-entities";
import { rvec3, rvec4, vec3One, vec4One } from "../math";
import { vec3 } from "gl-matrix";

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

export class SceneConverter
{
    private lights: ShaderLight[] = [];
    private lightDataArray: number[] = [];

    private materials: ShaderMaterial[] = [];
    private materialDataArray: number[] = [];

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

        const { lights, materials } = SceneConverter.createShapesFromNode(sceneTree);

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
        this.pushToStack(lights, materials, rootNode, sceneTree.nodes);

        return {
            lights, materials
        };
    }

    private static pushToStack(lights: ShaderLight[], materials: ShaderMaterial[], node: SceneNode, nodes: SceneNodes)
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
                }
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
            this.pushToStack(lights, materials, nodes[childId], nodes);
        }
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