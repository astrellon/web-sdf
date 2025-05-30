import { WorkerRenderRequest } from "./states";
import { sdfSphere, rayDirection, phongIllumination, sdfBox, sdfOpSub, sdfHexPrim, sdfOpIntersection, sdfOpUnion, sdfOpXor, RayWithMaterial, zeroColour, rayMarchMaterial, phongIlluminationMaterial, rayMarchDist } from "./ray-marching";
import { mat4GetTranslation, mat4Identity, quatIdentity, quatSetAxisAngle, rvec2, rvec3, rvec4, vec2Zero, vec3Length, vec3ScaleAndAddBy, vec3SubFrom, vec3TransformMat3, vec3TransformQuat, vec3Zero } from "../gl-matrix-ts";
import { SdfOpCodeInt, SdfOpCodeIntersection, SdfOpCodeNone, SdfOpCodeSubtraction, SdfOpCodeUnion, SdfOpCodeXor, shapeDataSize, ShapeTypeBox, ShapeTypeHexPrism, ShapeTypeInt, ShapeTypeNone, ShapeTypeSphere } from "../ray-marching/sdf-scene";
import mathf from "../gl-matrix-ts/mathf";

const maxSize = 1.5;
const transform = mat4Identity();
const transPoint = vec3Zero();
const rotation = quatIdentity();

const depthStack: number[] = [];
const depthMaterialStack: RayWithMaterial[] = [];

const testPoint = vec3Zero();

function calculateDist(index: number, point: rvec3, shapeData: number[])
{
    const i = index * shapeDataSize;

    testPoint.x = shapeData[i];
    testPoint.y = shapeData[i + 1];
    testPoint.z = shapeData[i + 2];

    const radius = shapeData[i + 3];
    vec3SubFrom(testPoint, testPoint, point);

    if (radius > 0)
    {
        const diff = vec3Length(testPoint);
        if (diff > radius + 3)
        {
            return diff - 3;
        }
    }

    rotation.x = shapeData[i + 4];
    rotation.y = shapeData[i + 5];
    rotation.z = shapeData[i + 6];
    rotation.w = shapeData[i + 7];

    vec3TransformQuat(transPoint, testPoint, rotation);

    const type = shapeData[i + 8] as ShapeTypeInt;
    const params: rvec3 = {
        x: shapeData[i + 9],
        y: shapeData[i + 10],
        z: shapeData[i + 11],
    };

    return getDistToType(type, transPoint, params);
}

function calculateDistMaterial(index: number, point: rvec3, shapeData: number[]): RayWithMaterial
{
    const i = index * shapeDataSize;

    testPoint.x = shapeData[i];
    testPoint.y = shapeData[i + 1];
    testPoint.z = shapeData[i + 2];

    const radius = shapeData[i + 3];
    vec3SubFrom(testPoint, testPoint, point);

    if (radius > 0)
    {
        const diff = vec3Length(testPoint);
        if (diff > radius + 3)
        {
            return { distance: diff - 3, diffuseColour: zeroColour };
        }
    }

    rotation.x = shapeData[i + 4];
    rotation.y = shapeData[i + 5];
    rotation.z = shapeData[i + 6];
    rotation.w = shapeData[i + 7];

    vec3TransformQuat(transPoint, testPoint, rotation);

    const type = shapeData[i + 8] as ShapeTypeInt;
    const params: rvec3 = {
        x: shapeData[i + 9],
        y: shapeData[i + 10],
        z: shapeData[i + 11],
    };

    const distance = getDistToType(type, transPoint, params);

    const diffuseColour = {
        x: shapeData[i + 12],
        y: shapeData[i + 13],
        z: shapeData[i + 14],
        w: shapeData[i + 15],
    }
    // const specularColour = {
    //     x: shapeData[i + 16],
    //     y: shapeData[i + 17],
    //     z: shapeData[i + 18],
    //     w: shapeData[i + 19],
    // }

    return { distance, diffuseColour };
}

function sceneFromDataNoRecursive(point: rvec3, shapeData: number[], operations: number[]): number
{
    let operationsIndex = 0;
    let depthStackIndex = -1;

    while (operationsIndex < operations.length)
    {
        const operation = operations[operationsIndex++];

        if (operation <= SdfOpCodeNone)
        {
            const lastD2 = depthStack[depthStackIndex--];
            const lastD1 = depthStack[depthStackIndex--];
            const dist = applyOpCode(operation as SdfOpCodeInt, lastD2, lastD1);
            depthStack[++depthStackIndex] = dist;
        }
        else
        {
            // Calculate dist of object at index
            const dist = calculateDist(operation, point, shapeData);
            depthStack[++depthStackIndex] = dist;
        }
    }

    return depthStack[0];
}

function sceneFromDataNoRecursiveMaterial(point: rvec3, shapeData: number[], operations: number[]): RayWithMaterial
{
    let operationsIndex = 0;
    let depthStackIndex = -1;

    while (operationsIndex < operations.length)
    {
        const operation = operations[operationsIndex++];

        if (operation <= SdfOpCodeNone)
        {
            const lastD2 = depthMaterialStack[depthStackIndex--];
            const lastD1 = depthMaterialStack[depthStackIndex--];
            const dist = applyOpCodeMaterial(operation as SdfOpCodeInt, lastD2, lastD1);
            depthMaterialStack[++depthStackIndex] = dist;
        }
        else
        {
            // Calculate dist of object at index
            const dist = calculateDistMaterial(operation, point, shapeData);
            depthMaterialStack[++depthStackIndex] = dist;
        }
    }

    return depthMaterialStack[0];
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

function applyOpCodeMaterial(opCode: SdfOpCodeInt, dist1: RayWithMaterial, dist2: RayWithMaterial): RayWithMaterial
{
    switch (opCode)
    {
        case SdfOpCodeUnion:
            return dist1.distance < dist2.distance ? dist1 : dist2;
        case SdfOpCodeIntersection:
            return dist1.distance > dist2.distance ? dist1 : dist2;
        case SdfOpCodeSubtraction:
            return -dist1.distance > dist2.distance ? {
                distance: -dist1.distance,
                diffuseColour: dist1.diffuseColour,
            } : dist2;
        case SdfOpCodeXor:
            return {
                distance: sdfOpXor(dist1.distance, dist2.distance),
                diffuseColour: dist1.diffuseColour,
            };
    }

    return {
        distance: 100,
        diffuseColour: zeroColour,
    }
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
        cameraZDir,
        time,
        numLights,
        lightData,
        operations,
        shapeData
    } = request;
    const view = new Uint8ClampedArray(buffer);

    lerpTime = Math.sin(time) * 0.5 + 0.5;

    const viewSize: rvec2 = {x: totalWidth, y: totalHeight};
    const rayDir = vec3Zero();
    const closestPoint = vec3Zero();
    const fragCoord = vec2Zero();

    const K_d: rvec4 = {x: 0.7, y: 0.2, z: 0.2, w: 1};
    const K_s: rvec3 = {x: 1.0, y: 1.0, z: 1.0};
    const shininess = 10.0;

    quatSetAxisAngle(rotation, {x: 0, y: 1, z: 0}, time);

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            fragCoord.x = x + xPos;
            fragCoord.y = totalHeight - (y + yPos);

            const viewDir = rayDirection(rayDir, cameraZDir, viewSize, fragCoord);
            vec3TransformMat3(viewDir, viewDir, cameraMatrix);

            let dist = 100;
            const newDist = rayMarchDist(cameraPosition, viewDir, 0, 100, (p) => sceneFromDataNoRecursive(p, shapeData, operations));
            if (newDist < dist)
            {
                dist = newDist;
            }

            let colour = redColour;

            if (dist > 99)
            {
                colour = emptyColour;
            }
            else
            {
                // The closest point on the surface to the eyepoint along the view ray
                vec3ScaleAndAddBy(closestPoint, cameraPosition, viewDir, dist);

                const colouredLight = phongIllumination((p) => sceneFromDataNoRecursive(p, shapeData, operations), dist, K_d, K_s, closestPoint, cameraPosition, numLights, lightData);
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

export function renderScene2(request: WorkerRenderRequest)
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
        cameraZDir,
        time,
        numLights,
        lightData,
        operations,
        shapeData
    } = request;
    const view = new Uint8ClampedArray(buffer);

    lerpTime = Math.sin(time) * 0.5 + 0.5;

    const viewSize: rvec2 = {x: totalWidth, y: totalHeight};
    const rayDir = vec3Zero();
    const closestPoint = vec3Zero();
    const fragCoord = vec2Zero();

    quatSetAxisAngle(rotation, {x: 0, y: 1, z: 0}, time);

    for (let y = 0; y < height; y++)
    {
        for (let x = 0; x < width; x++)
        {
            fragCoord.x = x + xPos;
            fragCoord.y = totalHeight - (y + yPos);

            const viewDir = rayDirection(rayDir, cameraZDir, viewSize, fragCoord);
            vec3TransformMat3(viewDir, viewDir, cameraMatrix);

            let dist: RayWithMaterial = { distance: 100, diffuseColour: zeroColour };
            const newDist = rayMarchMaterial(cameraPosition, viewDir, 0, 100, (p) => sceneFromDataNoRecursiveMaterial(p, shapeData, operations));
            if (newDist.distance < dist.distance)
            {
                dist = newDist;
            }

            let colour = redColour;

            if (dist.distance > 99)
            {
                colour = emptyColour;
            }
            else
            {
                // The closest point on the surface to the eyepoint along the view ray
                vec3ScaleAndAddBy(closestPoint, cameraPosition, viewDir, dist.distance);

                const sceneCalc = (p: rvec3) => sceneFromDataNoRecursiveMaterial(p, shapeData, operations);
                const colouredLight = phongIlluminationMaterial(sceneCalc, dist, closestPoint, cameraPosition, numLights, lightData);
                colour = {
                    // x: Math.pow(colouredLight.x, 0.4545) * 255,
                    // y: Math.pow(colouredLight.y, 0.4545) * 255, // Gamma correction is colour ^ (1 / 2.2)
                    // z: Math.pow(colouredLight.z, 0.4545) * 255,
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