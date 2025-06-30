#version 300 es

in vec3 aPosition;
uniform mat4 uModel;
uniform mat4 uProjection;

void main()
{
    gl_Position = uModel * uProjection * vec4(aPosition, 1.0);
}
