import { mat3, mat4, quat, vec3 } from "gl-matrix";
import { vec3New } from "../math";

const rightVector = vec3New(1, 0, 0);
const upVector = vec3New(0, 1, 0);
const forwardVector = vec3New(0, 0, 1);

export class Camera
{
    public position = vec3New(0, 0, 5);
    public target = vec3.create();

    private forward = forwardVector;
    private right = rightVector;
    private up = upVector;
    private cameraMatrixDirty = true;
    private readonly cameraRotationMatrix = mat3.create();
    private readonly cameraRotationQuat = quat.create();

    private static readonly tempMat4 = mat4.create();
    private static readonly tempQuat = quat.create();

    public getCameraRotation()
    {
        this.updateCameraMatrix();
        return this.cameraRotationMatrix;
    }

    public orbitPositionAroundTarget(horizontal: number, vertical: number)
    {
        this.updateCameraMatrix();

        const toTarget = vec3.create();
        vec3.sub(toTarget, this.position, this.target);

        quat.setAxisAngle(Camera.tempQuat, upVector, horizontal);
        vec3.transformQuat(toTarget, toTarget, Camera.tempQuat);
        quat.setAxisAngle(Camera.tempQuat, this.right, vertical);
        vec3.transformQuat(toTarget, toTarget, Camera.tempQuat);

        vec3.add(this.position, this.target, toTarget);

        this.cameraMatrixDirty = true;
    }

    public orbitTargetAroundPosition(horizontal: number, vertical: number)
    {
        this.updateCameraMatrix();
        vec3.rotateY(this.target, this.target, this.position, horizontal);
        vec3.rotateX(this.target, this.target, this.position, vertical);
        this.cameraMatrixDirty = true;
    }

    public dolly(amount: number)
    {
        const toTarget = vec3.create();
        vec3.sub(toTarget, this.position, this.target);

        const dist = vec3.len(toTarget);
        vec3.scale(toTarget, toTarget, 1.0 / dist);

        const newDist = Math.max(1.0, Math.min(100.0, dist + amount));
        vec3.scaleAndAdd(this.position, this.target, toTarget, -newDist);
    }

    public setDistance(distance: number)
    {
        const toTarget = vec3.create();
        vec3.sub(toTarget, this.position, this.target);
        vec3.normalize(toTarget, toTarget);

        vec3.scaleAndAdd(this.position, this.target, toTarget, -distance);
    }

    public panRelative(horizontal: number, vertical: number)
    {
        this.updateCameraMatrix();

        vec3.scaleAndAdd(this.position, this.position, this.right, horizontal);
        vec3.scaleAndAdd(this.position, this.position, this.up, vertical);
    }

    public updateCameraMatrix()
    {
        if (!this.cameraMatrixDirty)
        {
            return;
        }

        mat4.lookAt(Camera.tempMat4, this.position, this.target, upVector);
        mat3.fromMat4(this.cameraRotationMatrix, Camera.tempMat4);
        quat.fromMat3(this.cameraRotationQuat, this.cameraRotationMatrix);

        vec3.transformMat3(this.up, upVector, this.cameraRotationMatrix);
        vec3.transformMat3(this.right, rightVector, this.cameraRotationMatrix);
        vec3.transformMat3(this.forward, forwardVector, this.cameraRotationMatrix);
        this.cameraMatrixDirty = false;
    }
}