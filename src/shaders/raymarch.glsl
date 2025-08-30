#version 300 es

precision lowp float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

layout(location = 0) out vec4 fragColour;

in vec2 oPosition;

uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;
uniform int uMaxMarchingSteps;
uniform float uEpsilon;
uniform bvec4 uFlags;
uniform sampler2D uNoise;
uniform mat2x4 uLights[8];
uniform int uNumLights;
uniform float uParams[128];

#include <sdf-functions>

vec2 sceneSDF(vec3 point) {
    #include <assembled-shader>
}

const float shadowSharpness = 128.0;
vec2 softShadow(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = near;
    float result = 1.0;
    int i = 0;

    for (; i < uMaxMarchingSteps; i++)
    {
        float dist = sceneSDF(rayOrigin + depth * rayDirection).x;
        if (dist < uEpsilon)
        {
            return vec2(0.0, float(i));
        }

        result = min(result, shadowSharpness * dist / depth);
        depth += dist;
        if (depth >= far)
        {
            return vec2(result, float(i));
        }
    }

    return vec2(result, float(i));
}

vec3 estimateNormalPhong(vec3 point, vec3 currentDepth)
{
    vec2 eps_zero = vec2(currentDepth.x * 0.0015, 0.0);
    return normalize(vec3(
        sceneSDF(point + eps_zero.xyy).x - sceneSDF(point - eps_zero.xyy).x,
        sceneSDF(point + eps_zero.yxy).x - sceneSDF(point - eps_zero.yxy).x,
        sceneSDF(point + eps_zero.yyx).x - sceneSDF(point - eps_zero.yyx).x
    ));
}

const vec3 ambientLight = 0.5 * 0.2 * vec3(1.0, 1.0, 1.0);

/**
 * Lighting contribution of a single point light source via Phong illumination.
 *
 * The vec3 returned is the RGB color of the light's contribution.
 *
 * diffuse: Diffuse color
 * specular: Specular color
 * shininess: Shininess coefficient
 * worldPoint: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongContribForLight(vec3 currentDepth, vec3 diffuse, vec3 specular, float shininess, vec3 worldPoint, vec3 eye, vec3 normal, vec3 lightPos, vec3 lightIntensity)
{
    vec3 L = normalize(lightPos - worldPoint);
    vec3 V = normalize(eye - worldPoint);
    vec3 R = normalize(reflect(-L, normal));

    float dotLN = dot(L, normal);
    float dotRV = dot(R, V);

    if (dotLN < 0.0) {
        // Light not visible from this point on the surface
        return vec3(0.0, 0.0, 0.0);
    }

    if (dotRV < 0.0) {
        // Light reflection in opposite direction as viewer, apply only diffuse
        // component
        return lightIntensity * (diffuse * dotLN);
    }
    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, shininess));
}


/**
 * Lighting via Phong illumination.
 *
 * The vec3 returned is the RGB color of that point after lighting is applied.
 * diffuse: Diffuse color
 * specular: Specular color
 * alpha: Shininess coefficient
 * worldPoint: position of point being lit
 * eye: the position of the camera
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec4 phongIllumination(vec3 currentDepth, vec3 diffuse, vec3 specular, float shininess, vec3 worldPoint, vec3 cameraPoint)
{
    vec3 colour = ambientLight;
    float light0Rays;

    if (uNumLights > 0)
    {
        vec3 normal = estimateNormalPhong(worldPoint, currentDepth);

        for (int i = 0; i < uNumLights; i++)
        {
            mat2x4 light = uLights[i];
            vec3 lightPos = light[0].xyz;

            vec2 shadow = vec2(1.0, 0.0);
            if (uFlags.x)
            {
                vec3 toLight = normalize(lightPos - worldPoint);
                shadow = softShadow(worldPoint + toLight * 0.05, toLight, MIN_DIST, MAX_DIST);

                if (i == 1)
                {
                    light0Rays = shadow.y;
                }
            }

            vec3 lightContrib = phongContribForLight(currentDepth, diffuse, specular, shininess, worldPoint, cameraPoint, normal, lightPos, light[1].xyz);
            colour += lightContrib * shadow.x;
        }
    }

    // colour = pow(colour, vec3(1.0 / 2.2)); // Gamma correction
    return vec4(colour, light0Rays);
}

vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
{
    float depth = MIN_DIST;
    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        vec2 dist = sceneSDF(rayOrigin + depth * rayDirection);
        if (dist.x < uEpsilon)
        {
            return vec4(depth, dist.x, float(i), dist.y);
        }

        depth += dist.x;
        if (depth >= MAX_DIST)
        {
            return vec4(MAX_DIST, dist.x, float(i), dist.y);
        }
    }

    return vec4(MAX_DIST, MAX_DIST, float(uMaxMarchingSteps), -1);
}

vec3 createRayDirection(float fieldOfView, vec2 fragCoord)
{
    vec2 xy = fragCoord / 2.0;
    float z = 2.0 / tan(radians(fieldOfView));
    return normalize(vec3(xy, -z));
}

void main()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(45.0, oPosition);
    vec3 rayOrigin = uCameraPosition;

    vec4 dist = rayMarch(rayOrigin, rayDir);

    if (dist.x > MAX_DIST - uEpsilon)
    {
        discard;
    }

    vec3 worldPoint = rayOrigin + dist.x * rayDir;

    // vec4 litColour = vec4(1.0, 0.0, 0.0, 1.0);

    vec3 diffuse = vec3(0.7, 0.2, 0.2);
    vec3 specular = vec3(1.0, 1.0, 1.0);
    float shininess = 10.0;

    vec4 litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);

    fragColour = vec4(litColour.xyz, 1.0);
}
