export type Opaque<T, K> = T & { readonly _tag : K };

export function toRadian(degrees: number): number
{
    return degrees * Math.PI / 180.0;
}