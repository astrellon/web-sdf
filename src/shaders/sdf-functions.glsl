float sdfSphere(vec3 point, float radius)
{
    return length(point) - radius;
}

float sdfHexPrism(vec3 point, vec2 params)
{
    vec3 absPoint = abs(point);
    float d1 = absPoint.z - params.y;
    float d2 = max((absPoint.x * 0.866025 + absPoint.y * 0.5), absPoint.y) - params.x;
    return length(max(vec2(d1, d2), 0.0)) + min(max(d1, d2), 0.0);
}

float sdfBox(vec3 point, vec3 size)
{
    vec3 d = abs(point) - size;
    return min(max(d.x, max(d.y, d.z)), 0.0)   // inside distance
        + length(max(d, 0.0));              // outside distance
}

float sdfTorus(vec3 point, vec2 params)
{
    vec2 q = vec2(length(point.xz) - params.x, point.y);
    return length(q) - params.y;
}

float sdfOctahedron(vec3 point, float s)
{
    point = abs(point);
    return (point.x + point.y + point.z - s) * 0.57735027;
}

float sdfCappedCylinder(vec3 point, float height, float radius)
{
    vec2 d = abs(vec2(length(point.xz), point.y)) - vec2(radius, height);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}

// Taken from https://github.com/fogleman/sdf/blob/d58a6fc63b75fc1cf1ebb71e0b42bf552319c8f1/sdf/d3.py#L314
float sdfIcosahedron(vec3 point, float radius)
{
    vec3 xyz = normalize(vec3((sqrt(5.0) + 3.0) / 2.0, 1.0, 0.0));
    const vec3 w = vec3(sqrt(3.0) / 3.0);

    radius *= 0.8506507174597755;

    point = abs(point / radius);
    float a = dot(point, xyz.xyz);
    float b = dot(point, xyz.zxy);
    float c = dot(point, xyz.yzx);
    float d = dot(point, w) - xyz.x;

    return max(max(max(a, b), c) - xyz.x, d) * radius;
}

vec2 opUnion(vec2 d1, vec2 d2)
{
    return d1.x < d2.x ? d1 : d2;
}

vec2 opSubtraction(vec2 d1, vec2 d2)
{
    return -d1.x > d2.x ? vec2(-d1.x, d1.y) : d2;
}

vec2 opIntersection(vec2 d1, vec2 d2)
{
    return d1.x > d2.x ? d1 : d2;
}
