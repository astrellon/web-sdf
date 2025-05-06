import { ReadonlyVec2, ReadonlyVec3, ReadonlyVec4, vec3 } from "gl-matrix";
import { WorkerRequests } from "./states";
import { sdfSphere, rayMarch, createViewMatrix, rayDirection, phongIllumination, sdfTorus } from "./ray-marching";

function scene(point: ReadonlyVec3): number
{
    return sdfTorus(point, [1.0, 0.5]);
}

const emptyColour: ReadonlyVec4 = [0, 0, 0, 255];
const redColour: ReadonlyVec4 = [255, 0, 0, 255];

self.addEventListener('message', (e: MessageEvent<WorkerRequests>) =>
{
    if (e.data.type === 'render')
    {
        let index = 0;

        // const viewMatrix = createViewMatrix([0, 0, -10], [0, 0, 0], [0, 1, 0]);

        const { buffer, width, height, totalHeight, totalWidth, xPos, yPos, cameraPosition } = e.data;
        const view = new Uint8ClampedArray(buffer);

        const viewSize: ReadonlyVec2 = [totalWidth, totalHeight];

        for (let y = 0; y < height; y++)
        {
            for (let x = 0; x < width; x++)
            {
                const fragCoord: ReadonlyVec2 = [x + xPos, y + yPos];
                const viewDir = rayDirection(45.0, viewSize, fragCoord);

                const dist = rayMarch(cameraPosition, viewDir, 0, 100, scene);

                let colour = redColour;

                if (dist > 99)
                {
                    colour = emptyColour;
                }
                else
                {
                    // The closest point on the surface to the eyepoint along the view ray
                    const p: vec3 = [0, 0, 0];
                    vec3.scaleAndAdd(p, cameraPosition, viewDir, dist);
                    // vec3 p = eye + dist * dir;

                    const K_a: vec3 = [0.2, 0.2, 0.2];
                    const K_d: vec3 = [0.7, 0.2, 0.2];
                    const K_s: vec3 = [1.0, 1.0, 1.0];
                    const shininess = 10.0;

                    const colouredLight = phongIllumination(scene, K_a, K_d, K_s, shininess, p, cameraPosition);
                    colour = [colouredLight[0] * 255, colouredLight[1] * 255, colouredLight[1] * 255, 255];
                }

                view[index    ] = colour[0];
                view[index + 1] = colour[1];
                view[index + 2] = colour[2];
                view[index + 3] = colour[3];

                index += 4;
            }
        }

        self.postMessage({'type': 'render', 'buffer': buffer}, [buffer]);
    }
});