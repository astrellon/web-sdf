import { mat3, mat4, quat, vec3 } from "gl-matrix";
import { vec3New } from "../math";

const rightVector = vec3New(1, 0, 0);
const upVector = vec3New(0, 1, 0);
const forwardVector = vec3New(0, 0, 1);

export class Camera
{
    public position = vec3New(0, 0, 5);
    public target = vec3.create();
    public fov = 45;
    public fovZ = 1.0;

    private forward = vec3.clone(forwardVector);
    private right = vec3.clone(rightVector);
    private up = vec3.clone(upVector);
    private readonly cameraRotationMatrix = mat3.create();
    private readonly cameraRotationQuat = quat.create();

    private static readonly tempMat4 = mat4.create();
    private static readonly tempQuat = quat.create();
    private static readonly tempVec3 = vec3.create();

    public setFov(fieldOfViewDegrees: number)
    {
        this.fov = fieldOfViewDegrees;
        this.fovZ = 2.0 / Math.tan(fieldOfViewDegrees * Math.PI / 180.0);
    }

    public getCameraRotation()
    {
        return this.cameraRotationMatrix;
    }

    public orbitPositionAroundTarget(horizontal: number, vertical: number)
    {
        const toTarget = Camera.tempVec3;
        vec3.sub(toTarget, this.position, this.target);

        vec3.rotateY(toTarget, toTarget, this.target, horizontal);
        quat.setAxisAngle(Camera.tempQuat, this.right, vertical);
        vec3.transformQuat(toTarget, toTarget, Camera.tempQuat);

        vec3.add(this.position, this.target, toTarget);

        this.updateCameraMatrix();
    }

    public orbitTargetAroundPosition(horizontal: number, vertical: number)
    {
        const toPosition = Camera.tempVec3;
        vec3.sub(toPosition, this.target, this.position);

        vec3.rotateY(toPosition, toPosition, this.position, horizontal);
        quat.setAxisAngle(Camera.tempQuat, this.right, vertical);
        vec3.transformQuat(toPosition, toPosition, Camera.tempQuat);

        vec3.add(this.target, this.position, toPosition);

        this.updateCameraMatrix();
    }

    public dolly(amount: number)
    {
        const toTarget = Camera.tempVec3;
        vec3.sub(toTarget, this.position, this.target);

        const dist = vec3.len(toTarget);
        vec3.scale(toTarget, toTarget, 1.0 / dist);

        const newDist = Math.max(1.0, Math.min(100.0, dist + amount));
        vec3.scaleAndAdd(this.position, this.target, toTarget, newDist);
    }

    public panRelative(horizontal: number, vertical: number)
    {
        const move = Camera.tempVec3;
        vec3.scale(move, this.right, horizontal);
        vec3.scaleAndAdd(move, move, this.up, vertical);
        vec3.add(this.position, this.position, move);
        vec3.add(this.target, this.target, move);
    }

    public updateCameraMatrix()
    {
        mat4.targetTo(Camera.tempMat4, this.position, this.target, upVector);
        mat3.fromMat4(this.cameraRotationMatrix, Camera.tempMat4);
        quat.fromMat3(this.cameraRotationQuat, this.cameraRotationMatrix);

        vec3.transformMat3(this.up, upVector, this.cameraRotationMatrix);
        vec3.transformMat3(this.right, rightVector, this.cameraRotationMatrix);
        vec3.transformMat3(this.forward, forwardVector, this.cameraRotationMatrix);
    }
}