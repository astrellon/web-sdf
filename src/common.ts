export type Opaque<T, K> = T & { readonly _tag : K };

export type Editable<T> =
{
    -readonly [P in keyof T]: T[P];
};

export function toRadian(degrees: number): number
{
    return degrees * Math.PI / 180.0;
}