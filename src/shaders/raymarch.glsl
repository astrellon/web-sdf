#version 300 es

precision mediump float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

const int UNLIT = 0;
const int LAMBERT = 1;
const int PHONG = 2;

const int NUM_LIGHTS = #include <num-lights>;

layout(location = 0) out vec4 fragColour;

in vec2 oPosition;

uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;
uniform float uCameraFov;
uniform int uMaxMarchingSteps;
uniform float uEpsilon;
uniform bvec4 uFlags;
uniform sampler2D uNoise;
uniform mat2x4 uLights[#include <num-lights>];
uniform float uParams[#include <num-parameters>];
uniform mat2x4 uMaterials[#include <num-materials>];
uniform float uShadowSharpness;

#define checkEnableShadows() uFlags[0] == true
#define checkShowMarching() uFlags[1] == true
#define checkShowDepth() uFlags[2] == true
#define checkShowNormals() uFlags[3] == true
#define saturate(x) clamp(x, 0.0, 1.0)

#include <sdf-functions>

vec2 sceneSDF(vec3 point)
{
    #include <assembled-shader>
}

#include <raymarch-functions>

void main()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(uCameraFov, oPosition);
    vec3 rayOrigin = uCameraPosition.xyz;

    vec4 dist = rayMarch(rayOrigin, rayDir);

    if (dist.x > MAX_DIST - uEpsilon)
    {
        discard;
    }

    if (checkShowDepth())
    {
        fragColour = vec4(vec3(dist.x / MAX_DIST), 1.0);
    }
    else if (checkShowMarching())
    {
        float r = dist.z / float(uMaxMarchingSteps);

        fragColour = vec4(r, 0.0, 0.0, 1);
    }
    else if (checkShowNormals())
    {
        vec3 worldPoint = rayOrigin + dist.x * rayDir;
        vec3 normal = estimateNormalPhong(worldPoint, dist.xyz);

        fragColour = vec4(normal, 1.0);
    }
    else
    {
        vec3 worldPoint = rayOrigin + dist.x * rayDir;

        int lightingModel = 0;
        vec3 diffuse = vec3(0.7, 0.2, 0.2);
        vec3 specular = vec3(1.0, 1.0, 1.0);
        float shininess = 10.0;
        if (dist.w >= 0.0)
        {
            mat2x4 material = uMaterials[int(dist.w)];
            diffuse = material[0].xyz;
            lightingModel = int(round(material[0].w));

            specular = material[1].xyz;
            shininess = material[1].w;
        }

        vec4 litColour = vec4(diffuse, 1.0);
        if (lightingModel == LAMBERT)
        {
            litColour = lambertIllumination(dist.xyz, diffuse, worldPoint, rayOrigin);
        }
        else if (lightingModel == PHONG)
        {
            litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);
        }

        // vec4 litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);

        fragColour = vec4(litColour.xyz, 1.0);
    }
}
