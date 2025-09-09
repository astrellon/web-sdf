import { makeMap } from "../common";
import { SdfParameter } from "./sdf-parameters";

export interface SdfSelfOperationInfo
{
    readonly id: string;
    readonly name: string;
    readonly funcName: string;
    readonly params: SdfParameter[];
}

export const sdfSelfOperations: ReadonlyArray<SdfSelfOperationInfo> = [
    {
        id: 'twistXY',
        name: 'Twist XY',
        funcName: 'opTwistXY',
        params: [
            { name: 'Amount', type: 'input', default: 0.5, min: -10, max: 10 }
        ]
    },
    {
        id: 'repeatDomain',
        name: 'Repeat Domain',
        funcName: 'opRepeatDomain',
        params: [
            { name: 'X', type: 'input', default: 8, max: 50 },
            { name: 'Y', type: 'input', default: 8, max: 50 },
            { name: 'Z', type: 'input', default: 8, max: 50 },
        ]
    },
    {
        id: 'rotationRepeatSimple',
        name: 'Rotation Repeat Simple',
        funcName: 'opRotationSimple',
        params: [
            { name: 'Amount', type: 'input', default: 6, max: 32 }
        ]
    }
]

export const sdfSelfOperationsMap: { readonly [key: string]: SdfSelfOperationInfo } = makeMap(sdfSelfOperations, (i) => i.id);