#version 300 es

precision lowp float;

uniform vec4 uColour;
layout(location = 0) out vec4 fragColour;

void main()
{
    fragColour = uColour;
}
