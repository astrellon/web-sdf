import { toRadian } from "./common";
import { rvec2, vec2, vec2Length, vec2LengthValues, vec2ScaleAndAdd } from "./gl-matrix-ts";
import { vec3, rvec3, vec3Normalized, vec3Sub, vec3Cross, vec3Normalize, vec3Zero, vec3ScaleBy, vec3ScaleAndAddBy, vec3NormalizedValues, vec3Dot, vec3Negated, vec3Scale, vec3Copy, vec3AddTo, vec3MulTo, vec3Mul, vec3Length } from "./gl-matrix-ts/vec3";

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
export function rayDirection(result: vec3, fieldOfView: number, size: rvec2, fragCoord: rvec2): vec3
{
    const x = fragCoord.x + size.x * -0.5;
    const y = fragCoord.y + size.y * -0.5;
    const z = size.y / Math.tan(toRadian(fieldOfView) * 0.5);

    result.x = x;
    result.y = y;
    result.z = z;
    vec3Normalize(result);
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
export function rayMarch(eye: rvec3, marchingDirection: rvec3, start: number, end: number, scene: RayMarchScene): number
{
    let depth = start;
    const point: vec3 = vec3Zero();
    for (let i = 0; i < MAX_MARCHING_STEPS; i++)
    {
        vec3ScaleAndAddBy(point, eye, marchingDirection, depth);
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
export function estimateNormal(point: rvec3, scene: RayMarchScene): vec3
{
    const p1: vec3 = {x: point.x + EPSILON, y: point.y, z: point.z};
    const p2: vec3 = {x: point.x - EPSILON, y: point.y, z: point.z};

    const x = scene(p1) - scene(p2);

    p1.x = point.x;
    p1.y = point.y + EPSILON;
    p2.x = point.x;
    p2.y = point.y - EPSILON;

    const y = scene(p1) - scene(p2);

    p1.y = point.y;
    p1.z = point.z + EPSILON;
    p2.y = point.y;
    p2.z = point.z - EPSILON;

    const z = scene(p1) - scene(p2);

    return vec3NormalizedValues(x, y, z);
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
export function phongContribForLight(scene: RayMarchScene,
    k_d: rvec3, k_s: rvec3,
    alpha: number, point: rvec3, eye: rvec3,
    lightPos: rvec3, lightIntensity: rvec3): vec3
{
    const N = estimateNormal(point, scene);

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
        r1 = vec3Scale(k_d, dotLN);
    }
    else
    {
        const r2 = vec3Scale(k_d, dotLN);
        const pow = Math.pow(dotRV, alpha);
        vec3Copy(r1, k_s);
        vec3Scale(r1, pow);

        vec3AddTo(r1, r2);
    }

    vec3MulTo(r1, lightIntensity);
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
export function phongIllumination(scene: RayMarchScene, k_a: rvec3, k_d: rvec3, k_s: rvec3, alpha: number, p: rvec3, eye: rvec3): vec3
{
    const ambientLight: rvec3 = {x: 0.5, y: 0.5, z: 0.5};

    const colour: vec3 = vec3Mul(ambientLight, k_a);
    const light1Pos: rvec3 = {x: 4, y: 2, z: 4};
    const light1Intensity: rvec3 = {x: 0.4, y: 0.4, z: 0.4};

    const light2Pos: rvec3 = {x: -2, y: 2, z: 2};
    const light2Intensity: rvec3 = {x: 0.6, y: 0.4, z: 0.2};

    const lightContrib1 = phongContribForLight(scene, k_d, k_s, alpha, p, eye, light1Pos, light1Intensity);
    vec3AddTo(colour, lightContrib1);

    const lightContrib2 = phongContribForLight(scene, k_d, k_s, alpha, p, eye, light2Pos, light2Intensity);
    vec3AddTo(colour, lightContrib2);

    return colour;
}


export function sdfSphere(point: rvec3, radius: number)
{
    return vec3Length(point) - radius;
}

export function sdfTorus(p: rvec3, t: rvec3)
{
  const q: vec2 = {x: vec2LengthValues(p.x, p.z) - t.x, y: p.y};
  return vec2Length(q) - t[1];
}