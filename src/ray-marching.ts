import { toRadian } from "./common";
import { vec3, rvec3, vec3Normalized, vec3Sub, vec3Cross } from "./gl-matrix-ts/vec3";

// Many functions were ported from GLSL from this page:
// https://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/

export const MAX_MARCHING_STEPS = 16;
export const EPSILON = 0.0001;

export type RayMarchScene = (point: vec3) => number;

/**
 * Return a transform matrix that will transform a ray from view space
 * to world coordinates, given the eye point, the camera target, and an up vector.
 *
 * This assumes that the center of the camera is aligned with the negative z axis in
 * view space when calculating the ray marching direction. See rayDirection.
 */
// export function createViewMatrix(eye: rvec3, center: rvec3, up: rvec3)
// {
//     const f = vec3Normalized(vec3Sub(center, eye));
//     const s = vec3Normalized(vec3Cross(f, up));
//     const u = vec3Cross(s, f);

//     return mat4.fromValues(
//         s[0], s[1], s[2], 0,
//         u[0], u[1], u[2], 0,
//         -f[0], -f[1], -f[2], 0,
//         0, 0, 0, 0
//     );
// }

/**
 * Return the normalized direction to march in from the eye point for a single pixel.
 *
 * fieldOfView: vertical field of view in degrees
 * size: resolution of the output image
 * fragCoord: the x,y coordinate of the pixel in the output image
 */
export function rayDirection(fieldOfView: number, size: ReadonlyVec2, fragCoord: ReadonlyVec2): vec3
{
    const xy: vec2 = [0, 0];
    vec2.scaleAndAdd(xy, fragCoord, size, -0.5);
    const z = size[1] / Math.tan(toRadian(fieldOfView) / 2.0);

    const result: vec3 = [xy[0], xy[1], -z];
    vec3.normalize(result, result);
    return result;
}

/**
 * Return the shortest distance from the eyepoint to the scene surface along
 * the marching direction. If no part of the surface is found between start and end,
 * return end.
 *
 * @param eye the eye point, acting as the origin of the ray
 * @param marchingDirection the normalized direction to march in
 * @param start the starting distance away from the eye
 * @param end the max distance away from the ey to march before giving up
 * @returns the shortest distance found, if nothing is found then end is returned
 */
export function rayMarch(eye: ReadonlyVec3, marchingDirection: ReadonlyVec3, start: number, end: number, scene: RayMarchScene): number
{
    let depth = start;
    const point: vec3 = [0, 0, 0];
    for (let i = 0; i < MAX_MARCHING_STEPS; i++)
    {
        vec3.scaleAndAdd(point, eye, marchingDirection, depth);
        const dist = scene(point);
        if (dist <= EPSILON)
        {
            return depth;
        }

        depth += dist;
        if (depth >= end)
        {
            return end;
        }
    }

    return end;
}

/**
 * Using the gradient of the SDF, estimate the normal on the surface at point p.
 */
export function estimateNormal(point: ReadonlyVec3, scene: RayMarchScene): vec3
{
    const p1: vec3 = [point[0] + EPSILON, point[1], point[2]];
    const p2: vec3 = [point[0] - EPSILON, point[1], point[2]];

    const x = scene(p1) - scene(p2);

    p1[0] = point[0];
    p1[1] = point[1] + EPSILON;
    p2[0] = point[0];
    p2[1] = point[1] - EPSILON;

    const y = scene(p1) - scene(p2);

    p1[1] = point[1];
    p1[2] = point[2] + EPSILON;
    p2[1] = point[1];
    p2[2] = point[2] - EPSILON;

    const z = scene(p1) - scene(p2);

    const result: vec3 = [x, y, z];
    vec3.normalize(result, result);

    return result;
}

// https://asawicki.info/news_1301_reflect_and_refract_functions.html
export function reflect(out: vec3, incidentVec: ReadonlyVec3, normal: ReadonlyVec3)
{
    const dot = vec3.dot(incidentVec, normal);
    out[0] = incidentVec[0] - 2 * dot * normal[0];
    out[1] = incidentVec[1] - 2 * dot * normal[1];
    out[2] = incidentVec[2] - 2 * dot * normal[2];
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
export function phongContribForLight(scene: RayMarchScene,
    k_d: ReadonlyVec3, k_s: ReadonlyVec3,
    alpha: number, point: ReadonlyVec3, eye: ReadonlyVec3,
    lightPos: ReadonlyVec3, lightIntensity: ReadonlyVec3): vec3
{
    const N = estimateNormal(point, scene);

    const L: vec3 = [0, 0, 0];
    const nL: vec3 = [0, 0, 0];
    vec3.sub(L, lightPos, point);
    vec3.normalize(L, L);

    vec3.scale(nL, L, -1);

    const V: vec3 = [0, 0, 0];
    vec3.sub(V, eye, point);
    vec3.normalize(V, V);

    const R: vec3 = [0, 0, 0];
    reflect(R, nL, N);
    vec3.normalize(R, R);

    const dotLN = vec3.dot(L, N);
    const dotRV = vec3.dot(R, V);

    if (dotLN < 0.0)
    {
        // Light not visible from this point on the surface
        return [0, 0, 0];
    }

    const r1: vec3 = [0, 0 ,0];

    if (dotRV < 0.0)
    {
        // Light reflection in opposite direction as viewer, apply only diffuse component
        vec3.scale(r1, k_d, dotLN);
    }
    else
    {
        const r2: vec3 = [0, 0, 0];
        vec3.scale(r2, k_d, dotLN);

        const pow = Math.pow(dotRV, alpha);
        vec3.scale(r1, k_s, pow);

        vec3.add(r1, r1, r2);

        // return lightIntensity * (k_d * dotLN + k_s * pow(dotRV, alpha));
    }

    vec3.multiply(r1, r1, lightIntensity);
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
export function phongIllumination(scene: RayMarchScene, k_a: ReadonlyVec3, k_d: ReadonlyVec3, k_s: ReadonlyVec3, alpha: number, p: ReadonlyVec3, eye: ReadonlyVec3): vec3
{
    const ambientLight: ReadonlyVec3 = [0.5, 0.5, 0.5];

    const colour: vec3 = [0, 0 ,0];
    vec3.mul(colour, ambientLight, k_a);

    const light1Pos: ReadonlyVec3 = [4, 2, 4];
    const light1Intensity: ReadonlyVec3 = [0.4, 0.4, 0.4];

    const light2Pos: ReadonlyVec3 = [-2, 2, 2];
    const light2Intensity: ReadonlyVec3 = [0.6, 0.4, 0.2];

    const lightContrib1 = phongContribForLight(scene, k_d, k_s, alpha, p, eye, light1Pos, light1Intensity);
    vec3.add(colour, colour, lightContrib1);

    const lightContrib2 = phongContribForLight(scene, k_d, k_s, alpha, p, eye, light2Pos, light2Intensity);
    vec3.add(colour, colour, lightContrib2);

    return colour;
}


export function sdfSphere(point: ReadonlyVec3, radius: number)
{
    return vec3.length(point) - radius;
}

export function sdfTorus(p: ReadonlyVec3, t: ReadonlyVec2)
{
  const q: vec2 = [vec2.length([p[0], p[2]]) - t[0], p[1]];
  return vec2.length(q) - t[1];
}