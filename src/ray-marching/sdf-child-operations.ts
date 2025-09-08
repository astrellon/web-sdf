import { makeMap } from "../common";
import { SdfParameter } from "./sdf-parameters";

export interface SdfChildOperationInfo
{
    readonly id: string;
    readonly name: string;
    readonly funcName: string;
    readonly params: SdfParameter[];
}

export const sdfChildOperations: ReadonlyArray<SdfChildOperationInfo> = [
    {
        id: 'union',
        name: 'Union',
        funcName: 'opUnion',
        params: []
    },
    {
        id: 'subtraction',
        name: 'Subtraction',
        funcName: 'opSubtraction',
        params: []
    },
    {
        id: 'intersection',
        name: 'Intersection',
        funcName: 'opIntersection',
        params: []
    },
    {
        id: 'xor',
        name: 'Xor',
        funcName: 'opXor',
        params: []
    },
    {
        id: 'smoothUnion',
        name: 'Smooth Union',
        funcName: 'opSmoothUnion',
        params: [ { name: 'Blend', type: 'input' } ]
    },
    {
        id: 'smoothSubtraction',
        name: 'Smooth Subtraction',
        funcName: 'opSmoothSubtraction',
        params: [ { name: 'Blend', type: 'input' } ]
    },
    {
        id: 'smoothIntersection',
        name: 'Smooth Intersection',
        funcName: 'opSmoothIntersection',
        params: [ { name: 'Blend', type: 'input' } ]
    },
]

export const sdfChildOperationsMap: { readonly [key: string]: SdfChildOperationInfo } = makeMap(sdfChildOperations, (i) => i.id);