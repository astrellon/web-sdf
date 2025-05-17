export type Opaque<T, K> = T & { readonly _tag : K };

export function calculateGradient(xPos: number, yPos: number, totalWidth: number, totalHeight: number)
{
    let r = (xPos / totalWidth) * 255;
    let g = (yPos / totalHeight) * 255;

    return [r, g, 0, 255];
}

export function toRadian(degrees: number): number
{
    return degrees * Math.PI / 180.0;
}