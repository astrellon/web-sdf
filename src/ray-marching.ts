import { toRadian } from "./common";
import { mat3, rvec2, vec2, vec2Length, vec2LengthValues, vec3, rvec3, vec3Normalized, vec3Sub, vec3Cross, vec3Normalize, vec3Zero, vec3ScaleAndAddBy, vec3NormalizedValues, vec3Dot, vec3Negated, vec3Scale, vec3AddTo, vec3MulTo, vec3Mul, vec3Length, vec3Abs, vec3SubFrom, vec3Max, vec3CrossBy, vec2Dot, vec3ScaleBy, rvec4, vec4Zero, vec4One, vec3NormalizeValues } from "./gl-matrix-ts";
import mathf from "./gl-matrix-ts/mathf";
import { lightDataSize } from "./sdf-scene";

// Many functions were ported from GLSL from this page:
// https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/

export const MAX_MARCHING_STEPS = 255;
export const EPSILON = 0.0001;

export interface RayWithMaterial
{
    distance: number,
    diffuseColour: rvec4,
    // specularColour: rvec4
}

export type RayMarchSceneDist = (point: vec3) => number;
export type RayMarchSceneMaterial = (point: vec3) => RayWithMaterial;

/**
 * Return a transform matrix that will transform a ray from view space
 * to world coordinates, given the eye point, the camera target, and an up vector.
 *
 * This assumes that the center of the camera is aligned with the negative z axis in
 * view space when calculating the ray marching direction. See rayDirection.
 */
let f: vec3 = vec3Zero();
let s: vec3 = vec3Zero();
let u: vec3 = vec3Zero();
export function createViewMatrix(out: mat3, eye: rvec3, center: rvec3, up: rvec3)
{
    vec3SubFrom(f, center, eye);
    vec3Normalize(f, f);

    vec3CrossBy(s, f, up);
    vec3Normalize(s, s)

    vec3CrossBy(u, s, f);

    out.m00 =  s.x; out.m01 =  s.y; out.m02 =  s.z;
    out.m10 =  u.x; out.m11 =  u.y; out.m12 =  u.z;
    out.m20 = -f.x; out.m21 = -f.y; out.m22 = -f.z;
}

/**
 * Return the normalized direction to march in from the eye point for a single pixel.
 *
 * fieldOfView: vertical field of view in degrees
 * size: resolution of the output image
 * fragCoord: the x,y coordinate of the pixel in the output image
 */
export function rayDirection(result: vec3, z: number, size: rvec2, fragCoord: rvec2): vec3
{
    const x = fragCoord.x + size.x * -0.5;
    const y = fragCoord.y + size.y * -0.5;

    result.x = x;
    result.y = y;
    result.z = -z;
    vec3Normalize(result, result);
    return result;
}

/**
 * Return the shortest distance from the eyepoint to the scene surface along
 * the marching direction. If no part of the surface is found between start and end,
 * return end.
 *
 * @param rayOrigin the eye point, acting as the origin of the ray
 * @param rayDirection the normalized direction to march in
 * @param near the starting distance away from the eye
 * @param far the max distance away from the ey to march before giving up
 * @returns the shortest distance found, if nothing is found then end is returned
 */
const rayMarchPoint = vec3Zero();
export function rayMarchDist(rayOrigin: rvec3, rayDirection: rvec3, near: number, far: number, scene: RayMarchSceneDist): number
{
    rayMarchPoint.x = rayMarchPoint.y = rayMarchPoint.z = 0;
    let depth = near;

    for (let i = 0; i < MAX_MARCHING_STEPS; i++)
    {
        vec3ScaleAndAddBy(rayMarchPoint, rayOrigin, rayDirection, depth);
        const dist = scene(rayMarchPoint);
        if (dist <= EPSILON)
        {
            return depth;
        }

        depth += dist;
        if (depth >= far)
        {
            return far;
        }
    }

    return far;
}

export const zeroColour = vec4Zero();
export function rayMarchMaterial(rayOrigin: rvec3, rayDirection: rvec3, near: number, far: number, scene: RayMarchSceneMaterial): RayWithMaterial
{
    rayMarchPoint.x = rayMarchPoint.y = rayMarchPoint.z = 0;
    let depth = near;

    for (let i = 0; i < MAX_MARCHING_STEPS; i++)
    {
        vec3ScaleAndAddBy(rayMarchPoint, rayOrigin, rayDirection, depth);
        const dist = scene(rayMarchPoint);
        if (dist.distance <= EPSILON)
        {
            return { distance: depth, diffuseColour: dist.diffuseColour };
        }

        depth += dist.distance;
        if (depth >= far)
        {
            break;
        }
    }

    return { distance: far, diffuseColour: zeroColour };
}

/**
 * Using the gradient of the SDF, estimate the normal on the surface at point p.
 */
let debugCount = 100;
export function estimateNormal(point: rvec3, currentDepth: number, scene: RayMarchSceneDist): vec3
{
    const eps = currentDepth * 0.0015;
    const p1: vec3 = {x: point.x + eps, y: point.y, z: point.z};
    const p2: vec3 = {x: point.x - eps, y: point.y, z: point.z};

    const d1 = scene(p1);
    const d2 = scene(p2);
    const x = d1 - d2;

    p1.x = point.x;
    p1.y = point.y + eps;
    p2.x = point.x;
    p2.y = point.y - eps;

    const d3 = scene(p1);
    const d4 = scene(p2);
    const y = d3 - d4;

    p1.y = point.y;
    p1.z = point.z + eps;
    p2.y = point.y;
    p2.z = point.z - eps;

    const d5 = scene(p1);
    const d6 = scene(p2);
    const z = d5 - d6;

    return vec3NormalizedValues(x, y, z);
}

export function estimateNormalMaterial(point: rvec3, currentDepth: number, scene: RayMarchSceneMaterial): vec3
{
    const eps = currentDepth * 0.0015;
    const p1: vec3 = {x: point.x + eps, y: point.y, z: point.z};
    const p2: vec3 = {x: point.x - eps, y: point.y, z: point.z};

    const d1 = scene(p1);
    const d2 = scene(p2);
    const x = d1.distance - d2.distance;

    p1.x = point.x;
    p1.y = point.y + eps;
    p2.x = point.x;
    p2.y = point.y - eps;

    const d3 = scene(p1);
    const d4 = scene(p2);
    const y = d3.distance - d4.distance;

    p1.y = point.y;
    p1.z = point.z + eps;
    p2.y = point.y;
    p2.z = point.z - eps;

    const d5 = scene(p1);
    const d6 = scene(p2);
    const z = d5.distance - d6.distance;

    return vec3NormalizedValues(x, y, z);
}

// Lambert
// vec3 calcNormal(vec3 pos)
// {
//     // Center sample
//     float c = sdf(pos);
//     // Use offset samples to compute gradient / normal
//     vec2 eps_zero = vec2(0.001, 0.0);
    // return normalize(vec3(
    //     sdf(pos + eps_zero.xyy),
    //     sdf(pos + eps_zero.yxy),
    //     sdf(pos + eps_zero.yyx)
    // ) - c);
// }
export function estimateNormalMaterialLambert(point: rvec3, currentDepth: number, scene: RayMarchSceneMaterial): vec3
{
    const eps = currentDepth * 0.0015;

    const testPoint: vec3 = {x: point.x + eps, y: point.y, z: point.z};
    const x = scene(testPoint).distance;

    testPoint.x = point.x;
    testPoint.y = point.y + eps;
    const y = scene(testPoint).distance;

    testPoint.y = point.y;
    testPoint.z = point.z + eps;
    const z = scene(testPoint).distance;

    return vec3NormalizeValues(testPoint, x - currentDepth, y - currentDepth, z - currentDepth);
}

// https://asawicki.info/news_1301_reflect_and_refract_functions.html
export function reflect(out: vec3, incidentVec: rvec3, normal: rvec3)
{
    const dot = vec3Dot(incidentVec, normal);
    vec3ScaleAndAddBy(out, incidentVec, normal, -2 * dot);
    return out;
}

/**
 * Lighting contribution of a single point light source via Phong illumination.
 *
 * The vec3 returned is the RGB color of the light's contribution.
 *
 * k_a: Ambient color
 * k_d: Diffuse color
 * k_s: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
export function phongContribForLight(scene: RayMarchSceneDist,
    currentDepth: number,
    diffuseColour: rvec4, specularColour: rvec3,
    point: rvec3, eye: rvec3,
    lightPos: rvec3, lightIntensity: rvec3): vec3
{
    const N = estimateNormal(point, currentDepth, scene);

    const L = vec3Normalized(vec3Sub(lightPos, point));
    const nL = vec3Negated(L);

    const V = vec3Normalized(vec3Sub(eye, point));
    const R = vec3Normalized(reflect(vec3Zero(), nL, N));

    const dotLN = vec3Dot(L, N);
    const dotRV = vec3Dot(R, V);

    if (dotLN < 0.0)
    {
        // Light not visible from this point on the surface
        return vec3Zero();
    }

    let r1: vec3;

    if (dotRV < 0.0)
    {
        // Light reflection in opposite direction as viewer, apply only diffuse component
        r1 = vec3Scale(diffuseColour, dotLN);
    }
    else
    {
        const r2 = vec3Scale(diffuseColour, dotLN);
        const pow = Math.pow(dotRV, diffuseColour.w);
        r1 = vec3Scale(specularColour, pow);

        vec3AddTo(r1, r1, r2);
    }

    vec3MulTo(r1, r1, lightIntensity);
    return r1;
}

export function phongContribForLightMaterial(scene: RayMarchSceneMaterial,
    currentDepth: number,
    diffuseColour: rvec4, specularColour: rvec3,
    point: rvec3, eye: rvec3,
    lightPos: rvec3, lightIntensity: rvec3): vec3
{
    const N = estimateNormalMaterial(point, currentDepth, scene);

    const L = vec3Normalized(vec3Sub(lightPos, point));
    const nL = vec3Negated(L);

    const V = vec3Normalized(vec3Sub(eye, point));
    const R = vec3Normalized(reflect(vec3Zero(), nL, N));

    const dotLN = vec3Dot(L, N);
    const dotRV = vec3Dot(R, V);

    if (dotLN < 0.0)
    {
        // Light not visible from this point on the surface
        return vec3Zero();
    }

    let r1: vec3;

    if (dotRV < 0.0)
    {
        // Light reflection in opposite direction as viewer, apply only diffuse component
        r1 = vec3Scale(diffuseColour, dotLN);
    }
    else
    {
        const r2 = vec3Scale(diffuseColour, dotLN);
        const pow = Math.pow(dotRV, diffuseColour.w);
        r1 = vec3Scale(specularColour, pow);

        vec3AddTo(r1, r1, r2);
    }

    vec3MulTo(r1, r1, lightIntensity);
    return r1;
}

/**
 * Lighting via Phong illumination.
 *
 * The vec3 returned is the RGB color of that point after lighting is applied.
 * k_a: Ambient color
 * k_d: Diffuse color
 * k_s: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */

const fixedAmbientLight: rvec3 = {x: 0.1, y: 0.1, z: 0.1};
export function phongIllumination(scene: RayMarchSceneDist, currentDepth: number, diffuseColour: rvec4, specularColour: rvec3, point: rvec3, rayOrigin: rvec3, numLights: number, lightData: number[]): vec3
{
    const colour: vec3 = { x: fixedAmbientLight.x, y: fixedAmbientLight.y, z: fixedAmbientLight.z };

    for (let i = 0; i < numLights; i++)
    {
        const lightIndex = i * lightDataSize;
        const lightPos = {
            x: lightData[lightIndex    ],
            y: lightData[lightIndex + 1],
            z: lightData[lightIndex + 2]
        }
        const lightRadius = lightData[lightIndex + 3];
        const lightColour = {
            x: lightData[lightIndex + 4],
            y: lightData[lightIndex + 5],
            z: lightData[lightIndex + 6]
        }

        const toLight = vec3Normalized(vec3Sub(lightPos, point));
        const shadow = softShadow(scene, point, toLight, 0.1, 100);
        const lightContrib = phongContribForLight(scene, currentDepth, diffuseColour, specularColour, point, rayOrigin, lightPos, lightColour);
        vec3AddTo(colour, colour, vec3ScaleBy(lightContrib, lightContrib, shadow));
    }

    return colour;
}

const whiteColour = vec4One();
export function phongIlluminationMaterial(scene: RayMarchSceneMaterial, currentPoint: RayWithMaterial, point: rvec3, rayOrigin: rvec3, numLights: number, lightData: number[]): vec3
{
    const colour: vec3 = { x: fixedAmbientLight.x, y: fixedAmbientLight.y, z: fixedAmbientLight.z };

    for (let i = 0; i < numLights; i++)
    {
        const lightIndex = i * lightDataSize;
        const lightPos = {
            x: lightData[lightIndex    ],
            y: lightData[lightIndex + 1],
            z: lightData[lightIndex + 2]
        }
        const lightRadius = lightData[lightIndex + 3];
        const lightColour = {
            x: lightData[lightIndex + 4],
            y: lightData[lightIndex + 5],
            z: lightData[lightIndex + 6]
        }

        const toLight = vec3Normalized(vec3Sub(lightPos, point));
        const shadow = softShadowMaterial(scene, point, toLight, 0.1, 100);
        const lightContrib = phongContribForLightMaterial(scene, currentPoint.distance, currentPoint.diffuseColour, whiteColour, point, rayOrigin, lightPos, lightColour);
        vec3AddTo(colour, colour, vec3ScaleBy(lightContrib, lightContrib, shadow));
    }

    return colour;
}

const shadowSharpness = 32;
const shadowPoint = vec3Zero();
export function softShadow(scene: RayMarchSceneDist, rayOrigin: rvec3, rayDirection: rvec3, near: number, far: number)
{
    let result = 1.0;
    shadowPoint.x = shadowPoint.y = shadowPoint.z = 0;

    let t = near;
    for (let i = 0; i < MAX_MARCHING_STEPS && t < far; i++)
    {
        vec3ScaleAndAddBy(shadowPoint, rayOrigin, rayDirection, t);
        const dist = scene(shadowPoint);
        if (dist < EPSILON)
        {
            return 0.0;
        }

        result = Math.min(result, shadowSharpness * dist / t);
        t += dist;
    }

    return result;
}
export function softShadowMaterial(scene: RayMarchSceneMaterial, rayOrigin: rvec3, rayDirection: rvec3, near: number, far: number)
{
    let result = 1.0;
    shadowPoint.x = shadowPoint.y = shadowPoint.z = 0;

    let t = near;
    for (let i = 0; i < MAX_MARCHING_STEPS && t < far; i++)
    {
        vec3ScaleAndAddBy(shadowPoint, rayOrigin, rayDirection, t);
        const dist = scene(shadowPoint);
        if (dist.distance < EPSILON)
        {
            return dist.distance;
        }

        result = Math.min(result, shadowSharpness * dist.distance / t);
        t += dist.distance;
    }

    return result;
}


export function sdfSphere(point: rvec3, radius: number)
{
    return vec3Length(point) - radius;
}

export function sdfTorus(p: rvec3, t: rvec2)
{
  const q: vec2 = {x: vec2LengthValues(p.x, p.z) - t.x, y: p.y};
  return vec2Length(q) - t.y;
}

export function sdfBox(p: rvec3, size: rvec3)
{
    const d = vec3Sub(vec3Abs(p), size);
    const outsideDistance = vec3Length(vec3Max(d, 0.0));
    const insideDistance = Math.min(Math.max(d.x, Math.max(d.y, d.z)), 0);
    return outsideDistance + insideDistance;
}

const hexConsts: rvec3 = {x: -0.8660254, y: 0.5, z: 0.57735};
export function sdfHexPrim(p: rvec3, h: rvec2)
{
    const absP = vec3Abs(p);
    const dot = 2.0 * Math.min(vec2Dot(hexConsts, absP), 0);
    absP.x -= dot * hexConsts.x;
    absP.y -= dot * hexConsts.y;

    const clamped = mathf.clamp(absP.x, -hexConsts.z * h.x, hexConsts.z * h.x);
    const dx = vec2LengthValues(absP.x - clamped, absP.y - h.x) * Math.sign(absP.y - h.x);
    const dy = absP.z - h.y;
    const maxDx = Math.max(dx, 0);
    const maxDy = Math.max(dy, 0);

    return Math.min(Math.max(dx, dy), 0) + vec2LengthValues(maxDx, maxDy);
}

export function sdfOpUnion(d1: number, d2: number)
{
    return Math.min(d1, d2);
}

export function sdfOpSub(d1: number, d2: number)
{
    return Math.max(-d1, d2);
}

export function sdfOpIntersection(d1: number, d2: number)
{
    return Math.max(d1, d2);
}

export function sdfOpXor(d1: number, d2: number)
{
    return Math.max(Math.min(d1, d2), -Math.max(d1, d2));
}