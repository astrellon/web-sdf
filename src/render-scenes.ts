import { WorkerRenderRequest } from "./states";
import { sdfSphere, rayMarch, rayDirection, phongIllumination, sdfTorus, sdfBox, sdfOpSub, sdfHexPrim, sdfOpIntersection, sdfOpUnion, sdfOpXor } from "./ray-marching";
import { mat4GetTranslation, mat4Identity, mat4Mul, mat4Set, mat4SetFromRotation, mat4SetFromRotationTranslation, quat, quatIdentity, quatSetAxisAngle, rvec2, rvec3, rvec4, vec2Zero, vec3, vec3Length, vec3ScaleAndAddBy, vec3SubFrom, vec3TransformMat3, vec3TransformMat4, vec3TransformQuat, vec3Zero } from "./gl-matrix-ts";
import mathf from "./gl-matrix-ts/mathf";
import { SdfOpCodeInt, SdfScene, shapeDataSize, ShapeTypeInt } from "./sdf-scene";

// const maxSize = Math.max(1.5, 2, 1.5, 1);
const maxSize = 1.5;
const transform = mat4Identity();
const transPoint = vec3Zero();
const rotation = quatIdentity();

const shapeStack: number[] = [];
const shapeStackIndex = 0;

const testPoint = vec3Zero();
function sceneFromData(point: rvec3, data: number[], index: number): number
{
    testPoint.x = data[index];
    testPoint.y = data[index + 1];
    testPoint.z = data[index + 2];

    const radius = data[index + 3];
    const diff = vec3Length(vec3SubFrom(testPoint, testPoint, point));
    if (diff > radius + 3)
    {
        return diff - 3;
    }

    rotation.x = data[index + 4];
    rotation.y = data[index + 5];
    rotation.z = data[index + 6];
    rotation.w = data[index + 7];

    vec3TransformQuat(transPoint, point, rotation);

    const type = data[index + 8] as ShapeTypeInt;
    const params: rvec3 = {
        x: data[index + 9],
        y: data[index + 10],
        z: data[index + 11]
    }

    let dist = type !== 0 ? getDistToType(type, testPoint, params) : diff;

    const leftOp = data[index + 12] as SdfOpCodeInt;
    const leftIndex = data[index + 13];

    if (leftOp !== 0)
    {
        const left = sceneFromData(testPoint, data, leftIndex * shapeDataSize);
        dist = applyOpCode(leftOp, dist, left);
    }

    const rightOp = data[index + 14] as SdfOpCodeInt;
    const rightIndex = data[index + 15];

    if (rightOp !== 0)
    {
        const right = sceneFromData(testPoint, data, rightIndex * shapeDataSize);
        dist = applyOpCode(rightOp, dist, right);
    }
}

function getDistToType(opCode: ShapeTypeInt, point: rvec3, params: rvec3)
{
    switch (opCode)
    {
        case 1: return sdfBox(point, params);
        case 2: return sdfSphere(point, params.x);
        case 3: return sdfHexPrim(point, params);
    }
    return 100;
}

function applyOpCode(opCode: SdfOpCodeInt, dist1: number, dist2: number)
{
    switch (opCode)
    {
        case 1: sdfOpUnion(dist1, dist2);
        case 2: sdfOpIntersection(dist1, dist2);
        case 3: sdfOpSub(dist1, dist2);
        case 4: sdfOpXor(dist1, dist2);
    }
    return 100;
}

function scene(point: rvec3): number
{
    mat4GetTranslation(transform, transPoint);
    const diff = vec3Length(transPoint);
    if (diff > maxSize + 3)
    {
        return diff - 3;
    }

    // vec3TransformMat4(transPoint, point, transform);
    vec3TransformQuat(transPoint, point, rotation);

    const sphere = sdfSphere(transPoint, 1.5);
    // const sphere = sdfSphere(point, 1.2);
    // sdfTorus(point, {x: 1, y: 0.5});
    const hex = sdfHexPrim(transPoint, {x: 2, y: 1.5});
    const box = sdfBox(transPoint, {x: 2, y: 1.5, z: 1});

    // const sphere = sdfSphere(point, 1.5);
    // const sphere = diff - 1.5;
    // return sphere;
    // const torus = sdfTorus(point, {x: 2, y: 1.5});
    // // const op = sdfOpSub(sphere, box);
    return sdfOpSub(mathf.lerp(sphere, hex, lerpTime), box);
    // return mathf.lerp(sphere, hex, lerpTime);
}

const emptyColour: rvec4 = {x: 0, y: 0, z: 0, w: 255};
const redColour: rvec4 = {x: 255, y: 0, z: 0, w: 255};
let lerpTime = 0;

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
        cameraMatrix,
        cameraPosition,
        time,
        numLights,
        lightData
    } = request;
    const view = new Uint8ClampedArray(buffer);

    lerpTime = Math.sin(time) * 0.5 + 0.5;

    const viewSize: rvec2 = {x: totalWidth, y: totalHeight};
    const rayDir = vec3Zero();
    const closestPoint = vec3Zero();
    const fragCoord = vec2Zero();

    const K_a: rvec3 = {x: 0.2, y: 0.2, z: 0.2};
    const K_d: rvec3 = {x: 0.7, y: 0.2, z: 0.2};
    const K_s: rvec3 = {x: 1.0, y: 1.0, z: 1.0};
    const shininess = 10.0;

    // const q = quatIdentity();
    quatSetAxisAngle(rotation, {x: 0, y: 1, z: 0}, time);
    // mat4SetFromRotationTranslation(transform, q, {x: 0, y: 0, z: Math.sin(time * 0.5) * 2});

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            fragCoord.x = x + xPos;
            fragCoord.y = totalHeight - (y + yPos);

            const viewDir = rayDirection(rayDir, 45.0, viewSize, fragCoord);
            vec3TransformMat3(viewDir, viewDir, cameraMatrix);

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

                const colouredLight = phongIllumination(scene, dist, K_a, K_d, K_s, shininess, closestPoint, cameraPosition, numLights, lightData);
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