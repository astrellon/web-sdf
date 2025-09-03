import * as glMatrix from "gl-matrix";

const glArrayType = glMatrix.glMatrix.ARRAY_TYPE;

export type rvec2 = glMatrix.ReadonlyVec2;
export type rvec3 = glMatrix.ReadonlyVec3;
export type rvec4 = glMatrix.ReadonlyVec4;
export type rquat = glMatrix.ReadonlyQuat;

export function vec3One(): glMatrix.vec3
{
    const out = new glArrayType(3);
    out[0] = 1;
    out[1] = 1;
    out[2] = 1;
    return out;
}
export function vec3New(x: number, y: number, z: number)
{
    const out = new glArrayType(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}

export function vec3ApproxEquals(left: rvec3, right: rvec3, delta: number = 0.0001)
{
    return glMatrix.vec3.distance(left, right) < delta;
}
export function vec4One(): glMatrix.vec4
{
    const out = new glArrayType(4);
    out[0] = 1;
    out[1] = 1;
    out[2] = 1;
    out[3] = 1;
    return out;
}
export function vec4New(x: number, y: number, z: number, w: number): glMatrix.vec4
{
    const out = new glArrayType(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
export function vec4ApproxEquals(left: rvec4, right: rvec4, delta: number = 0.0001)
{
    return glMatrix.vec4.distance(left, right) < delta;
}