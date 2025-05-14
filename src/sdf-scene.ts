import { vec3, vec3One, vec3Zero } from "./gl-matrix-ts";

interface Light
{
    position: vec3;
    radius: number;
    colour: vec3;
}
export const lightDataSize = 3 + 1 + 3;
const defaultLight: Light = {
    position: vec3Zero(),
    radius: 10,
    colour: vec3One()
}

export class SdfScene
{
    private lights: Light[] = [];
    private lightDataArray: number[] = [];

    public getLightDataArray()
    {
        return this.lightDataArray;
    }

    public getLights()
    {
        return this.lights;
    }

    public getNumLights()
    {
        return this.lights.length;
    }

    public setLight(index: number, light: Partial<Light>)
    {
        if (index < 0)
        {
            throw new Error("Out of bounds light index " + index);
        }

        if (index >= this.lights.length)
        {
            this.lights[index] = {...defaultLight, ...light};
        }
        else
        {
            this.lights[index] = {...this.lights[index], ...light};
        }

        this.updateLight(index);
    }

    private updateLight(index: number)
    {
        const dataIndex = index * lightDataSize;
        const light = this.lights[index];

        this.lightDataArray[dataIndex    ] = light.position.x;
        this.lightDataArray[dataIndex + 1] = light.position.y;
        this.lightDataArray[dataIndex + 2] = light.position.z;
        this.lightDataArray[dataIndex + 3] = light.radius;
        this.lightDataArray[dataIndex + 4] = light.colour.x;
        this.lightDataArray[dataIndex + 5] = light.colour.y;
        this.lightDataArray[dataIndex + 6] = light.colour.z;
    }
}