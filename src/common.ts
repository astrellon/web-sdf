import { ReadonlyVec2, ReadonlyVec3, ReadonlyVec4 } from "gl-matrix";
import { rayDirection, rayMarch, sdfSphere } from "./ray-marching";

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

const emptyColour: ReadonlyVec4 = [0, 0, 0, 255];
const redColour: ReadonlyVec4 = [255, 0, 0, 255];

function scene(point: ReadonlyVec3): number
{
    return sdfSphere(point, 1.0);
}

export function exampleRender(view: Uint8ClampedArray, width: number, height: number)
{
    let index = 0;

    const viewSize: ReadonlyVec2 = [width, height];
    const eye: ReadonlyVec3 = [0, 0, 5];

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            const fragCoord: ReadonlyVec2 = [x, y];
            const viewDir = rayDirection(45.0, viewSize, fragCoord);

            const dist = rayMarch(eye, viewDir, 0, 100, scene);

            let colour = redColour;

            if (dist > 99)
            {
                colour = emptyColour;
            }

            // const colour = calculateGradient(x + xPos, y + yPos, totalWidth, totalHeight);
            view[index    ] = colour[0];
            view[index + 1] = colour[1];
            view[index + 2] = colour[2];
            view[index + 3] = colour[3];

            index += 4;
        }
    }
}