export type Opaque<T, K> = T & { readonly _tag : K };

export type Editable<T> =
{
    -readonly [P in keyof T]: T[P];
};

export function toRadian(degrees: number): number
{
    return degrees * Math.PI / 180.0;
}

export function addClass(target: string, className: string, addIfTrue?: boolean): string
{
    if (addIfTrue == undefined || addIfTrue === true)
    {
        target += ' ' + className;
    }
    return target;
}