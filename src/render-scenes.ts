import { WorkerRenderRequest } from "./states";
import { sdfSphere, rayMarch, rayDirection, phongIllumination, sdfTorus } from "./ray-marching";
import { rvec2, rvec3, rvec4, vec2Zero, vec3ScaleAndAddBy, vec3Zero } from "./gl-matrix-ts";

function scene(point: rvec3): number
{
    return sdfSphere(point, 1);
}

const emptyColour: rvec4 = {x: 0, y: 0, z: 0, w: 255};
const redColour: rvec4 = {x: 255, y: 0, z: 0, w: 255};

export function renderScene1(request: WorkerRenderRequest)
{
    let index = 0;

    const {
        buffer,
        width,
        height,
        totalHeight,
        totalWidth,
        xPos,
        yPos,
        cameraPosition,
    } = request;
    const view = new Uint8ClampedArray(buffer);

    const viewSize: rvec2 = {x: totalWidth, y: totalHeight};
    const rayDir = vec3Zero();
    const closestPoint = vec3Zero();
    const fragCoord = vec2Zero();

    const K_a: rvec3 = {x: 0.2, y: 0.2, z: 0.2};
    const K_d: rvec3 = {x: 0.7, y: 0.2, z: 0.2};
    const K_s: rvec3 = {x: 1.0, y: 1.0, z: 1.0};
    const shininess = 10.0;

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            fragCoord.x = x + xPos;
            fragCoord.y = y + yPos;
            const viewDir = rayDirection(rayDir, 45.0, viewSize, fragCoord);
            const dist = rayMarch(cameraPosition, viewDir, 0, 100, scene);

            let colour = redColour;

            if (dist > 99)
            {
                colour = emptyColour;
            }
            else
            {
                // The closest point on the surface to the eyepoint along the view ray
                vec3ScaleAndAddBy(closestPoint, cameraPosition, viewDir, dist);

                const colouredLight = phongIllumination(scene, K_a, K_d, K_s, shininess, closestPoint, cameraPosition);
                colour = {
                    x: colouredLight.x * 255,
                    y: colouredLight.y * 255,
                    z: colouredLight.z * 255,
                    w: 255,
                };
            }

            view[index] = colour.x;
            view[index + 1] = colour.y;
            view[index + 2] = colour.z;
            view[index + 3] = colour.w;

            index += 4;
        }
    }
}