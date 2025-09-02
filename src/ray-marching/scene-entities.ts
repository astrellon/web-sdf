import { vec3 } from 'gl-matrix';
import { Opaque } from '../common';
import { rquat, rvec3, rvec4 } from '../math';

export type SdfOpCode = 'none' | 'union' | 'intersection' | 'subtraction' | 'xor' |
    'smoothUnion' | 'smoothSubtraction' | 'smoothIntersection';
export type SdfOpCodeInt = Opaque<number, 'sdfOpCode'>;
export const SdfOpCodeNone = -5e2 as SdfOpCodeInt;
export const SdfOpCodeUnion = -6e2 as SdfOpCodeInt;
export const SdfOpCodeIntersection = -7e2 as SdfOpCodeInt;
export const SdfOpCodeSubtraction = -8e2 as SdfOpCodeInt;
export const SdfOpCodeXor = -9e2 as SdfOpCodeInt;

export type ShapeType = 'none' | 'box' | 'sphere' | 'hexPrism';
export type ShapeTypeInt = Opaque<number, 'shapeType'>;
export const ShapeTypeNone = -5000 as ShapeTypeInt;
export const ShapeTypeBox = -5010 as ShapeTypeInt;
export const ShapeTypeSphere = -5020 as ShapeTypeInt;
export const ShapeTypeHexPrism = -5030 as ShapeTypeInt;
export const ShapeTypeTorus = -5040 as ShapeTypeInt;
export const ShapeTypeOctahedron = -5050 as ShapeTypeInt;
export const ShapeTypeCylinder = -5060 as ShapeTypeInt;
export const ShapeTypeIcosahedron = -5070 as ShapeTypeInt;

export type LightingModelInt = Opaque<number, 'lightingModel'>;
export const LightingModelUnlit = 0 as LightingModelInt;
export const LightingModelLambert = 1 as LightingModelInt;
export const LightingModelPhong = 2 as LightingModelInt;

export type SceneNodeId = Opaque<string, 'SceneNodeId'>;
export interface SceneNode
{
    readonly id: SceneNodeId;
    readonly name: string;

    readonly position: rvec3;
    readonly rotation: rquat;

    readonly shape: Shape;
    readonly hasShape: boolean;
    readonly childOpCode: SdfOpCode;
    readonly operationParams: number;
    readonly childrenIds: ReadonlyArray<SceneNodeId>;
    readonly parentId?: SceneNodeId;
    readonly light: Light;
    readonly hasLight: boolean;
}

export interface Light
{
    readonly radius: number;
    readonly colour: rvec4;
}

export type LightingModelType = 'unlit' | 'lambert' | 'phong';
export interface Shape
{
    readonly maxSize: number;
    readonly type: ShapeType;
    readonly shapeParams: vec3;
    readonly diffuseColour: vec3;
    readonly specularColour: vec3;
    readonly shininess: number;
    readonly cloud: boolean;
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
