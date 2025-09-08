export type SdfParameterType = 'range' | 'input';
export interface SdfParameter
{
    readonly name: string;
    readonly type: SdfParameterType;
    readonly default?: number;
    readonly min?: number;
    readonly max?: number;
    readonly step?: number;
}