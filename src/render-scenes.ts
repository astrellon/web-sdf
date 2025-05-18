import { WorkerRenderRequest } from "./states";
import { sdfSphere, rayMarch, rayDirection, phongIllumination, sdfBox, sdfOpSub, sdfHexPrim, sdfOpIntersection, sdfOpUnion, sdfOpXor } from "./ray-marching";
import { mat4GetTranslation, mat4Identity, quatIdentity, quatSetAxisAngle, rvec2, rvec3, rvec4, vec2Zero, vec3Length, vec3ScaleAndAddBy, vec3SubFrom, vec3TransformMat3, vec3TransformQuat, vec3Zero } from "./gl-matrix-ts";
import { SdfOpCodeInt, SdfOpCodeIntersection, SdfOpCodeNone, SdfOpCodeSubtraction, SdfOpCodeUnion, SdfOpCodeXor, shapeDataSize, ShapeTypeBox, ShapeTypeHexPrism, ShapeTypeInt, ShapeTypeNone, ShapeTypeSphere } from "./sdf-scene";
import mathf from "./gl-matrix-ts/mathf";

const maxSize = 1.5;
const transform = mat4Identity();
const transPoint = vec3Zero();
const rotation = quatIdentity();

const processingStack: number[] = [];
let processingStackIndex = 0;
const operations: SdfOpCodeInt[] = [];
let operationsStackIndex = 0;
const depthStack: number[] = [];
let depthStackIndex = 0;

const testPoint = vec3Zero();
function sceneFromDataNoRecursive(point: rvec3, data: number[], index: number): number
{
    processingStackIndex = -1;
    operationsStackIndex = -1;
    depthStackIndex = -1;

    processingStack[++processingStackIndex] = index;

    while (processingStackIndex >= 0)
    {
        const i = processingStack[processingStackIndex--];

        testPoint.x = data[i];
        testPoint.y = data[i + 1];
        testPoint.z = data[i + 2];

        const radius = data[i + 3];
        vec3SubFrom(testPoint, testPoint, point);

        if (radius > 0)
        {
            const diff = vec3Length(testPoint);
            if (diff > radius + 3)
            {
                depthStack[++depthStackIndex] = diff - 3;
                continue;
            }
        }

        rotation.x = data[i + 4];
        rotation.y = data[i + 5];
        rotation.z = data[i + 6];
        rotation.w = data[i + 7];

        vec3TransformQuat(transPoint, testPoint, rotation);

        const type = data[i + 8] as ShapeTypeInt;
        const params: rvec3 = {
            x: data[i + 9],
            y: data[i + 10],
            z: data[i + 11]
        }

        if (type !== ShapeTypeNone)
        {
            let dist = getDistToType(type, transPoint, params);
            depthStack[++depthStackIndex] = dist;
        }

        const leftOp = data[i + 12] as SdfOpCodeInt;
        const leftIndex = data[i + 13];
        const rightOp = data[i + 14] as SdfOpCodeInt;
        const rightIndex = data[i + 15];

        if (leftIndex > 0)
        {
            processingStack[++processingStackIndex] = leftIndex * shapeDataSize;
            if (leftOp !== SdfOpCodeNone)
            {
                operations[++operationsStackIndex] = leftOp;
            }
        }

        if (rightIndex > 0)
        {
            processingStack[++processingStackIndex] = rightIndex * shapeDataSize;
            if (rightOp !== SdfOpCodeNone)
            {
                operations[++operationsStackIndex] = rightOp;
            }
        }
    }

    if (depthStackIndex < 0)
    {
        return 100;
    }
    while (operationsStackIndex >= 0 && depthStackIndex >= 1)
    {
        const lastOp = operations[operationsStackIndex--];
        const lastD2 = depthStack[depthStackIndex--];
        const lastD1 = depthStack[depthStackIndex--]
        const dist = applyOpCode(lastOp, lastD2, lastD1);
        depthStack[++depthStackIndex] = dist;
    }
    return depthStack[0];

}
function sceneFromData(point: rvec3, data: number[], index: number): number
{
    testPoint.x = data[index];
    testPoint.y = data[index + 1];
    testPoint.z = data[index + 2];

    const radius = data[index + 3];
    vec3SubFrom(testPoint, testPoint, point);

    if (radius > 0)
    {
        const diff = vec3Length(testPoint);
        if (diff > radius + 3)
        {
            return diff - 3;
        }
    }

    rotation.x = data[index + 4];
    rotation.y = data[index + 5];
    rotation.z = data[index + 6];
    rotation.w = data[index + 7];

    vec3TransformQuat(transPoint, testPoint, rotation);

    const type = data[index + 8] as ShapeTypeInt;
    const params: rvec3 = {
        x: data[index + 9],
        y: data[index + 10],
        z: data[index + 11]
    }

    let dist = getDistToType(type, transPoint, params);

    const leftOp = data[index + 12] as SdfOpCodeInt;
    const leftIndex = data[index + 13];

    if (leftIndex > 0 && type === 0)
    {
        dist = sceneFromData(point, data, leftIndex * shapeDataSize);
    }
    else if (leftOp !== 0 && leftIndex > 0)
    {
        const left = sceneFromData(point, data, leftIndex * shapeDataSize);
        dist = applyOpCode(leftOp, left, dist);
    }

    const rightOp = data[index + 14] as SdfOpCodeInt;
    const rightIndex = data[index + 15];

    if (rightOp !== 0 && rightIndex > 0)
    {
        const right = sceneFromData(point, data, rightIndex * shapeDataSize);
        dist = applyOpCode(rightOp, right, dist);
    }

    return dist;
}

function getDistToType(opCode: ShapeTypeInt, point: rvec3, params: rvec3)
{
    switch (opCode)
    {
        case ShapeTypeBox: return sdfBox(point, params);
        case ShapeTypeSphere: return sdfSphere(point, params.x);
        case ShapeTypeHexPrism: return sdfHexPrim(point, params);
    }
    return 100;
}

function applyOpCode(opCode: SdfOpCodeInt, dist1: number, dist2: number)
{
    switch (opCode)
    {
        case SdfOpCodeUnion: return sdfOpUnion(dist1, dist2);
        case SdfOpCodeIntersection: return sdfOpIntersection(dist1, dist2);
        case SdfOpCodeSubtraction: return sdfOpSub(dist1, dist2);
        case SdfOpCodeXor: return sdfOpXor(dist1, dist2);
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
        lightData,
        numShapes,
        shapeData
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

    quatSetAxisAngle(rotation, {x: 0, y: 1, z: 0}, time);

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            fragCoord.x = x + xPos;
            fragCoord.y = totalHeight - (y + yPos);

            const viewDir = rayDirection(rayDir, 45.0, viewSize, fragCoord);
            vec3TransformMat3(viewDir, viewDir, cameraMatrix);

            let dist = 100;
            let hitIndex = -1;
            for (let i = 0; i < numShapes; i++)
            {
                const newDist = rayMarch(cameraPosition, viewDir, 0, 100, (p) => sceneFromDataNoRecursive(p, shapeData, i * shapeDataSize));
                if (newDist < dist)
                {
                    dist = newDist;
                    hitIndex = i;
                }
            }

            let colour = redColour;

            if (dist > 99)
            {
                colour = emptyColour;
            }
            else if (hitIndex >= 0)
            {
                // The closest point on the surface to the eyepoint along the view ray
                vec3ScaleAndAddBy(closestPoint, cameraPosition, viewDir, dist);

                const colouredLight = phongIllumination((p) => sceneFromDataNoRecursive(p, shapeData, hitIndex * shapeDataSize), dist, K_a, K_d, K_s, shininess, closestPoint, cameraPosition, numLights, lightData);
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