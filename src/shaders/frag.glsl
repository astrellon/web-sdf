#version 300 es

precision lowp float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

const int UNLIT = 0;
const int LAMBERT = 1;
const int PHONG = 2;
const vec3 HIGHLIGHT_COLOUR = vec3(0.9, 0.8, 0.3);

layout(location = 0) out vec4 fragColour;

in vec2 oPosition;

uniform mat2x4 uLights[8];
uniform int uNumLights;
uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;

uniform mat2x4 uMaterials[32];

uniform mat4 uShapes[128];
uniform int uOperations[128];
uniform ivec2 uHighlight;
uniform int uNumOperations;
uniform int uMaxMarchingSteps;
uniform float uEpsilon;

uniform sampler2D uNoise;

uniform bvec4 uFlags;

#include <sdf-functions>

vec3 quatMul( vec4 q, vec3 v )
{
    return v + 2.0 * cross(cross(v, q.xyz ) + q.w * v, q.xyz);
}

vec2 getDistanceToShape(int index, vec3 samplePoint)
{
    mat4 shape = uShapes[index];

    vec3 point = shape[0].xyz;
    float maxSize = shape[0].w;

    vec3 testPoint = point - samplePoint;
    // if (maxSize > 0.0)
    // {
    //     float testDist = length(testPoint);
    //     if (testDist > maxSize + 3.0)
    //     {
    //         return vec2(testDist - 3.0, -1.0);
    //     }
    // }

    vec4 rotation = shape[1];

    vec3 transPoint = quatMul(rotation, testPoint);

    int type = int(round(shape[2].x));
    vec3 params = shape[2].yzw;

    float dist = getDistToType(type, transPoint, params);
    float material = shape[3].x;

    return vec2(dist, material);
}

vec2 sceneSDF(vec3 point, int stackStart, int stackEnd)
{
    int depthStackIndex = -1;
    vec2 depthStack[32];

    for (int operationsIndex = stackStart; operationsIndex < stackEnd; operationsIndex++)
    {
        int operationOrIndex = uOperations[operationsIndex];

        if (operationOrIndex <= SdfOpCodeNone)
        {
            vec2 lastD2 = depthStack[depthStackIndex--];
            vec2 lastD1 = depthStack[depthStackIndex--];
            vec2 dist = applyOpCode(operationOrIndex, lastD2, lastD1);
            depthStack[++depthStackIndex] = dist;
        }
        else
        {
            vec2 dist = getDistanceToShape(operationOrIndex, point);
            depthStack[++depthStackIndex] = dist;
        }
    }

    return depthStack[0];
}

vec2 sceneSDF(vec3 point)
{
    return sceneSDF(point, 0, uNumOperations);
}

vec3 createRayDirection(float fieldOfView, vec2 fragCoord)
{
    vec2 xy = fragCoord / 2.0;
    float z = 2.0 / tan(radians(fieldOfView));
    return normalize(vec3(xy, -z));
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

// https://github.com/electricsquare/raymarching-workshop?tab=readme-ov-file#diffuse-term
vec3 estimateNormalLambert(vec3 point, vec3 currentDepth)
{
    // Use offset samples to compute gradient / normal
    float d = currentDepth.y;
    vec2 eps_zero = vec2(currentDepth.x * 0.0015, 0.0);
    return normalize(vec3(
        sceneSDF(point + eps_zero.xyy).x - d,
        sceneSDF(point + eps_zero.yxy).x - d,
        sceneSDF(point + eps_zero.yyx).x - d));
}

vec3 estimateNormalTetrahedron(vec3 point, vec3 currentDepth)
{
    float h = 0.0015 * currentDepth.x;
    const vec2 k = vec2(1, -1);

    return normalize(
        k.xyy * sceneSDF(point + k.xyy * h).x +
        k.yyx * sceneSDF(point + k.yyx * h).x +
        k.yxy * sceneSDF(point + k.yxy * h).x +
        k.xxx * sceneSDF(point + k.xxx * h).x );

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
                shadow = softShadow(worldPoint, toLight, 0.005 * currentDepth.x, 100.0);

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

/**
 * Lighting contribution of a single point light source via Lambert illumination.
 *
 * The vec3 returned is the RGB color of the light's contribution.
 *
 * diffuse: Diffuse color
 * worldPoint: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 */
vec3 lambertContribForLight(vec3 currentDepth, vec3 diffuse, vec3 worldPoint, vec3 eye, vec3 normal, vec3 lightPos, vec3 lightIntensity)
{
    vec3 L = normalize(lightPos - worldPoint);
    vec3 V = normalize(eye - worldPoint);
    vec3 R = normalize(reflect(-L, normal));

    float dotLN = dot(L, normal);

    if (dotLN < 0.0)
    {
        // Light not visible from this point on the surface
        return vec3(0.0, 0.0, 0.0);
    }

    return lightIntensity * (diffuse * dotLN);
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
vec4 lambertIllumination(vec3 currentDepth, vec3 diffuse, vec3 worldPoint, vec3 cameraPoint)
{
    vec3 colour = ambientLight;
    float light0Rays;

    if (uNumLights > 0)
    {
        vec3 N = estimateNormalTetrahedron(worldPoint, currentDepth);

        for (int i = 0; i < uNumLights; i++)
        {
            mat2x4 light = uLights[i];
            vec3 lightPos = light[0].xyz;

            vec2 shadow = vec2(1.0, 0.0);
            if (uFlags.x)
            {
                vec3 toLight = normalize(lightPos - worldPoint);
                shadow = softShadow(worldPoint, toLight, 0.005 * currentDepth.x, 100.0);

                if (i == 1)
                {
                    light0Rays = shadow.y;
                }
            }

            vec3 lightContrib = lambertContribForLight(currentDepth, diffuse, worldPoint, cameraPoint, N, lightPos, light[1].xyz);
            colour += lightContrib * shadow.x;
        }
    }

    // colour = pow(colour, vec3(1.0 / 2.2)); // Gamma correction
    return vec4(colour, light0Rays);
}

vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection, float near, float far, int stackStart, int stackEnd)
{
    float depth = near;
    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        vec2 dist = sceneSDF(rayOrigin + depth * rayDirection, stackStart, stackEnd);
        if (dist.x < uEpsilon)
        {
            return vec4(depth, dist.x, float(i), dist.y);
        }

        depth += dist.x;
        if (depth >= far)
        {
            return vec4(far, dist.x, float(i), dist.y);
        }
    }

    return vec4(far, far, float(uMaxMarchingSteps), -1);
}

vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    return rayMarch(rayOrigin, rayDirection, near, far, 0, uNumOperations);
}


float getHighlightDist(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    if (uHighlight.x < 0)
    {
        return 0.0;
    }

    vec4 dist = rayMarch(rayOrigin, rayDirection, near, far, uHighlight.x, uHighlight.y);
    float r = dist.z / (float(uMaxMarchingSteps) * 0.15);
    return smoothstep(0.75, 0.85, r);
}

float noise3D(vec3 p)
{
    p.z = fract(p.z)*256.0;
    float iz = floor(p.z);
    float fz = fract(p.z);
    vec2 a_off = vec2(23.0, 29.0)*(iz)/256.0;
    vec2 b_off = vec2(23.0, 29.0)*(iz+1.0)/256.0;
    float a = texture(uNoise, p.xy + a_off, -999.0).r;
    float b = texture(uNoise, p.xy + b_off, -999.0).r;
    return mix(a, b, fz);
}
float perlinNoise3D(vec3 p)
{
    float x = 0.0;
    for (float i = 0.0; i < 6.0; i += 1.0)
        x += noise3D(p * pow(2.0, i)) * pow(0.5, i);
    return x;
}

const float MARCH_SIZE = 0.08;
vec2 cloudScene(vec3 p)
{
    float distance = sdfTorus(p, vec2(1.0, 0.25));
    if (distance > 2.0)
    {
        return vec2(distance, 0.0);
    }

    float f = perlinNoise3D(p * 0.01) * 0.5;

    return vec2(distance, -distance + f);
}

vec4 cloudRaymarch(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = 0.0;
    vec3 p = rayOrigin + depth * rayDirection;

    vec4 res = vec4(0.0);

    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        if (depth > far)
        {
            break;
        }

        vec2 density = cloudScene(p);

        // We only draw the density if it's greater than 0
        if (density.x < 2.0)
        {
            depth += MARCH_SIZE;

            if (density.y > 0.0)
            {
                vec4 color = vec4(mix(vec3(1.0,1.0,1.0), vec3(0.0, 0.0, 0.0), density.y), density.y );
                color.rgb *= color.a;
                res += color*(1.0-res.a);
            }
        }
        else
        {
            depth += density.x;
        }

        p = rayOrigin + depth * rayDirection;
    }

    return res;
}

void mainCloud()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(45.0, oPosition);
    vec3 rayOrigin = uCameraPosition;

    vec4 res = cloudRaymarch(rayOrigin, rayDir, MIN_DIST, MAX_DIST);

    fragColour = vec4(res.rgb, 1.0);
}

void main()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(45.0, oPosition);
    vec3 rayOrigin = uCameraPosition;

    vec4 dist = rayMarch(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
    vec4 litColour;

    if (dist.x > MAX_DIST - uEpsilon)
    {
        if (uFlags.y)
        {
            float r = dist.z / float(uMaxMarchingSteps);
            fragColour = vec4(r, 0, getHighlightDist(rayOrigin, rayDir, MIN_DIST, MAX_DIST), 1);
            return;
        }

        float highlightDist = getHighlightDist(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
        fragColour = vec4(mix(vec3(0.0), HIGHLIGHT_COLOUR, highlightDist), 0.0);
    }
    else
    {
        // The closest point on the surface to the eyepoint along the view ray
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

        switch (lightingModel)
        {
            default:
            case UNLIT:
                litColour = vec4(diffuse, 1.0);
                break;
            case LAMBERT:
                litColour = lambertIllumination(dist.xyz, diffuse, worldPoint, rayOrigin);
                break;
            case PHONG:
                litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);
                break;
        }

        float highlightDist = getHighlightDist(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
        if (highlightDist > 0.0)
        {
            fragColour = vec4(mix(litColour.xyz, HIGHLIGHT_COLOUR, highlightDist), 1.0);
        }
        else
        {
            fragColour = vec4(litColour.xyz, 1.0);
        }
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);

        float highlightDist = getHighlightDist(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
        fragColour = vec4(r, g, highlightDist, 1);
    }
}
