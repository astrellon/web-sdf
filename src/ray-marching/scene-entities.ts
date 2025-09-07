import { vec3 } from 'gl-matrix';
import { Opaque } from '../common';
import { rquat, rvec3, rvec4 } from '../math';

export type SdfOpCode = 'none' | 'union' | 'intersection' | 'subtraction' | 'xor' |
    'smoothUnion' | 'smoothSubtraction' | 'smoothIntersection';
export type SelfSdfOpCode = 'none' | 'repeatDomain';

export type ShapeType = 'none' | 'box' | 'sphere' | 'hexPrism';

export type LightingModelInt = Opaque<number, 'lightingModel'>;
export const LightingModelUnlit = 0 as LightingModelInt;
export const LightingModelLambert = 1 as LightingModelInt;
export const LightingModelPhong = 2 as LightingModelInt;

export type SceneNodeType = 'none' | 'shape' | 'operation' | 'light';
export type SceneNodeId = Opaque<string, 'SceneNodeId'>;
export interface SceneNode
{
    readonly id: SceneNodeId;
    readonly name: string;
    readonly type: SceneNodeType;

    readonly position: rvec3;
    readonly rotation: rvec3;

    readonly shape: Shape;
    // readonly hasShape: boolean;
    readonly selfOpCode: SelfSdfOpCode;
    readonly childOpCode: SdfOpCode;
    readonly operationParams: number;
    readonly childrenIds: ReadonlyArray<SceneNodeId>;
    readonly parentId?: SceneNodeId;
    readonly light: Light;
    // readonly hasLight: boolean;
}

export interface Light
{
    readonly radius: number;
    readonly colour: rvec4;
}

export type LightingModelType = 'unlit' | 'lambert' | 'phong';
export interface ShapeParamMap
{
    readonly [key: string]: number;
}
export interface Shape
{
    readonly maxSize: number;
    readonly type: ShapeType;
    readonly params: ShapeParamMap;
    readonly diffuseColour: vec3;
    readonly specularColour: vec3;
    readonly shininess: number;
    readonly lightingModel: LightingModelType;
}

export interface SceneNodes
{
    readonly [shapeNodeId: string /* ShapeNodeId */]: SceneNode
}

export function makeShapeNodeId(): SceneNodeId
{
    return crypto.randomUUID() as SceneNodeId;
}
