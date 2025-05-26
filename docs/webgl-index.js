(()=>{var f=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(t){return t*this.DegToRad}equals(t,e){return Math.abs(t-e)<=n.EPSILON*Math.max(1,Math.abs(t),Math.abs(e))}static clamp(t,e,o){return Math.max(Math.min(t,o),e)}static lerp(t,e,o){return t+(e-t)*o}static moveTowards(t,e,o){let s=e-t;return Math.abs(s)<=o?e:t+Math.sign(s)*o}inverseLerp(t,e,o){return t===e?0:(o-t)/(e-t)}};function N(n,t,e,o){return n.x=t.x+e.x*o,n.y=t.y+e.y*o,n.z=t.z+e.z*o,n}function F(n,t,e){if(e.x===0&&e.y===0&&e.z===0&&e.w===1)return n.x=t.x,n.y=t.y,n.z=t.z,n;let o=t.x,s=t.y,x=t.z,c=e.w*2,r=e.y*x-e.z*s,a=e.z*o-e.x*x,m=e.x*s-e.y*o,u=(e.y*m-e.z*a)*2,i=(e.z*r-e.x*m)*2,d=(e.x*a-e.y*r)*2;return r*=c,a*=c,m*=c,n.x=o+r+u,n.y=s+a+i,n.z=x+m+d,n}function z(){return{x:0,y:0,z:0}}function E(){return{x:1,y:1,z:1,w:1}}function w(){return{x:0,y:0,z:0,w:1}}function U(n,t,e,o,s=f.ANGLE_ORDER){let x=Math.PI/360;t*=x,o*=x,e*=x;let c=Math.sin(t),r=Math.cos(t),a=Math.sin(e),m=Math.cos(e),u=Math.sin(o),i=Math.cos(o);switch(s){case"xyz":n.x=c*m*i+r*a*u,n.y=r*a*i-c*m*u,n.z=r*m*u+c*a*i,n.w=r*m*i-c*a*u;break;case"xzy":n.x=c*m*i-r*a*u,n.y=r*a*i-c*m*u,n.z=r*m*u+c*a*i,n.w=r*m*i+c*a*u;break;case"yxz":n.x=c*m*i+r*a*u,n.y=r*a*i-c*m*u,n.z=r*m*u-c*a*i,n.w=r*m*i+c*a*u;break;case"yzx":n.x=c*m*i+r*a*u,n.y=r*a*i+c*m*u,n.z=r*m*u-c*a*i,n.w=r*m*i-c*a*u;break;case"zxy":n.x=c*m*i-r*a*u,n.y=r*a*i+c*m*u,n.z=r*m*u+c*a*i,n.w=r*m*i-c*a*u;break;case"zyx":n.x=c*m*i-r*a*u,n.y=r*a*i+c*m*u,n.z=r*m*u-c*a*i,n.w=r*m*i+c*a*u;break;default:throw new Error("Unknown angle order "+s)}return this}var $=8,G=-500,j=-600,J=-700,K=-800,g=-900,B=-5e3,q=-6e3,tt=-7e3,et=-8e3,nt={none:G,union:j,intersection:J,subtraction:K,xor:g},ot={none:B,box:q,sphere:tt,hexPrism:et};function rt(n){return ot[n]||B}function at(n){return nt[n]||G}var ct=16,M=class{lights=[];lightDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(t){this.operations=t,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(t,e){if(t<0)throw new Error(`Out of bounds light index ${t}`);t>=this.lights.length?this.lights[t]={...this.createNewLight(),...e}:this.lights[t]={...this.lights[t],...e},this.updateLight(t)}setShape(t,e){if(t<0)throw new Error(`Out of bounds shape index ${t}`);t>=this.shapes.length?this.shapes[t]={...this.createNewShape(),...e}:this.shapes[t]={...this.shapes[t],...e},this.updateShape(t)}updateLight(t){let e=t*$,o=this.lights[t];this.lightDataArray[e]=o.position.x,this.lightDataArray[e+1]=o.position.y,this.lightDataArray[e+2]=o.position.z,this.lightDataArray[e+3]=o.radius,this.lightDataArray[e+4]=o.colour.x,this.lightDataArray[e+5]=o.colour.y,this.lightDataArray[e+6]=o.colour.z,this.lightDataArray[e+7]=o.colour.w}updateShape(t){let e=t*ct,o=this.shapes[t];this.shapeDataArray[e]=o.position.x,this.shapeDataArray[e+1]=o.position.y,this.shapeDataArray[e+2]=o.position.z,this.shapeDataArray[e+3]=o.maxSize,this.shapeDataArray[e+4]=o.rotation.x,this.shapeDataArray[e+5]=o.rotation.y,this.shapeDataArray[e+6]=o.rotation.z,this.shapeDataArray[e+7]=o.rotation.w,this.shapeDataArray[e+8]=rt(o.type),this.shapeDataArray[e+9]=o.shapeParams.x,this.shapeDataArray[e+10]=o.shapeParams.y,this.shapeDataArray[e+11]=o.shapeParams.z,this.shapeDataArray[e+12]=o.diffuseColour.x,this.shapeDataArray[e+13]=o.diffuseColour.y,this.shapeDataArray[e+14]=o.diffuseColour.z,this.shapeDataArray[e+15]=o.diffuseColour.w}updateOperationNumbers(){this.numberOperations=this.operations.map(t=>typeof t=="string"?at(t):t)}createNewLight(){return{position:z(),radius:10,colour:E()}}createNewShape(){return{position:z(),rotation:w(),maxSize:0,type:"none",shapeParams:z(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1}}}};var W=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var k=`#version 300 es

precision lowp float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

const int ShapeTypeNone = -5000;
const int ShapeTypeBox = -6000;
const int ShapeTypeSphere = -7000;
const int ShapeTypeHexPrism = -8000;

const int SdfOpCodeNone = -500;
const int SdfOpCodeUnion = -600;
const int SdfOpCodeIntersection = -700;
const int SdfOpCodeSubtraction = -800;

layout(location = 0) out vec4 color;

in vec2 oPosition;

uniform mat2x4 uLights[8];
uniform int uNumLights;
uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;

uniform mat4 uShapes[128];
uniform int uOperations[128];
uniform int uNumOperations;
uniform int uMaxMarchingSteps;
uniform float uEpsilon;

uniform bvec4 uFlags;

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

float opUnion(float d1, float d2)
{
    return min(d1, d2);
}

float opSubtraction(float d1, float d2)
{
    return max(-d1, d2);
}

float opIntersection(float d1, float d2)
{
    return max(d1, d2);
}

float applyOpCode(int opCode, float dist1, float dist2)
{
    switch (opCode)
    {
        case SdfOpCodeUnion: return opUnion(dist1, dist2);
        case SdfOpCodeIntersection: return opIntersection(dist1, dist2);
        case SdfOpCodeSubtraction: return opSubtraction(dist1, dist2);
    }

    return 100.0;
}

float getDistToType(int type, vec3 point, vec3 params)
{
    switch (type)
    {
        case ShapeTypeBox: return sdfBox(point, params);
        case ShapeTypeSphere: return sdfSphere(point, params.x);
        case ShapeTypeHexPrism: return sdfHexPrism(point, params.xy);
    }

    return 100.0;
}

float getDistanceToShape(int index, vec3 samplePoint)
{
    mat4 shape = uShapes[index];

    vec3 point = shape[0].xyz;
    vec3 testPoint = point - samplePoint;
    // return sphereSDF(samplePoint);

    // quat rotation = shape[1];

    int type = int(round(shape[2].x));
    vec3 params = shape[2].yzw;

    return getDistToType(type, testPoint, params);
}

float sceneSDF(vec3 point)
{
    int depthStackIndex = -1;
    float depthStack[32];

    for (int operationsIndex = 0; operationsIndex < uNumOperations; operationsIndex++)
    {
        int operation = uOperations[operationsIndex];

        if (operation <= SdfOpCodeNone)
        {
            float lastD2 = depthStack[depthStackIndex--];
            float lastD1 = depthStack[depthStackIndex--];
            float dist = applyOpCode(operation, lastD2, lastD1);
            depthStack[++depthStackIndex] = dist;
        }
        else
        {
            float dist = getDistanceToShape(operation, point);
            depthStack[++depthStackIndex] = dist;
        }
    }

    return depthStack[0];
}

vec3 createRayDirection(float fieldOfView, vec2 fragCoord)
{
    vec2 xy = fragCoord / 2.0;
    float z = 2.0 / tan(radians(fieldOfView));
    return normalize(vec3(xy, -z));
}

vec3 estimateNormal(vec3 point, float currentDepth)
{
    vec2 eps_zero = vec2(currentDepth * 0.0015, 0.0);
    return normalize(vec3(
        sceneSDF(point + eps_zero.xyy) - sceneSDF(point - eps_zero.xyy),
        sceneSDF(point + eps_zero.yxy) - sceneSDF(point - eps_zero.yxy),
        sceneSDF(point + eps_zero.yyx) - sceneSDF(point - eps_zero.yyx)
    ));
}

// https://github.com/electricsquare/raymarching-workshop?tab=readme-ov-file#diffuse-term
vec3 estimateNormalLambert(vec3 point, vec3 currentDepth)
{
    // Use offset samples to compute gradient / normal
    // float d = sceneSDF(point);
    float d = currentDepth.y;
    vec2 eps_zero = vec2(currentDepth.x * 0.0015, 0.0);
    return normalize(vec3(
        sceneSDF(point + eps_zero.xyy) - d,
        sceneSDF(point + eps_zero.yxy) - d,
        sceneSDF(point + eps_zero.yyx) - d));
}

const float shadowSharpness = 32.0;
vec2 softShadow(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = near;
    float result = 1.0;
    int i = 0;

    for (; i < uMaxMarchingSteps; i++)
    {
        float dist = sceneSDF(rayOrigin + depth * rayDirection);
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

/**
 * Lighting contribution of a single point light source via Phong illumination.
 *
 * The vec3 returned is the RGB color of the light's contribution.
 *
 * diffuse: Diffuse color
 * specular: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongContribForLight(vec3 currentDepth, vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity)
{
    vec3 N = estimateNormalLambert(p, currentDepth);

    vec3 L = normalize(lightPos - p);
    vec3 V = normalize(eye - p);
    vec3 R = normalize(reflect(-L, N));

    float dotLN = dot(L, N);
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
    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, alpha));
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
const vec3 ambientLight = 0.5 * 0.2 * vec3(1.0, 1.0, 1.0);
vec4 phongIllumination(vec3 currentDepth, vec3 diffuse, vec3 specular, float shininess, vec3 worldPoint, vec3 cameraPoint)
{
    vec3 colour = ambientLight;
    float light0Rays;

    for (int i = 0; i < uNumLights; i++)
    {
        mat2x4 light = uLights[i];
        vec3 lightPos = light[0].xyz;

        vec2 shadow = vec2(1.0, 0.0);
        if (uFlags.x)
        {
            vec3 toLight = normalize(lightPos - worldPoint);
            shadow = softShadow(worldPoint, toLight, 0.1, 100.0);

            if (i == 1)
            {
                light0Rays = shadow.y;
            }
        }

        vec3 lightContrib = phongContribForLight(currentDepth, diffuse, specular, shininess, worldPoint, cameraPoint, lightPos, light[1].xyz);
        colour += lightContrib * shadow.x;
    }

    // colour = pow(colour, vec3(1.0 / 2.2)); // Gamma correction
    return vec4(colour, light0Rays);
}

vec3 rayMarch(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = near;
    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        float dist = sceneSDF(rayOrigin + depth * rayDirection);
        if (dist < uEpsilon)
        {
            return vec3(depth, dist, float(i));
        }

        depth += dist;
        if (depth >= far)
        {
            return vec3(far, dist, float(i));
        }
    }

    return vec3(far, far, float(uMaxMarchingSteps));
}

void main()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(45.0, oPosition);
    vec3 rayOrigin = uCameraPosition;

    vec3 dist = rayMarch(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
    vec4 litColour;

    if (dist.x > MAX_DIST - uEpsilon)
    {
        if (uFlags.y)
        {
            float r = dist.z / float(uMaxMarchingSteps);
            color = vec4(r, 0, 0, 1);
            return;
        }

        color = vec4(0, 0, 0, 0);
    }
    else
    {
        // The closest point on the surface to the eyepoint along the view ray
        vec3 worldPoint = rayOrigin + dist.x * rayDir;

        vec3 diffuse = vec3(0.7, 0.2, 0.2);
        vec3 specular = vec3(1.0, 1.0, 1.0);
        float shininess = 10.0;

        litColour = phongIllumination(dist, diffuse, specular, shininess, worldPoint, rayOrigin);

        color = vec4(litColour.xyz, 1.0);
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);
        color = vec4(r, g, 0, 1);
    }
}`;var h=class n{program;constructor(t){this.program=t}static create(t,e,o){function s(){r!=null&&(t.detachShader(r,x),t.detachShader(r,c)),x!=null&&t.deleteShader(x),c!=null&&t.deleteShader(c)}let x=t.createShader(t.VERTEX_SHADER);if(t.shaderSource(x,e),t.compileShader(x),!t.getShaderParameter(x,t.COMPILE_STATUS)){let a=t.getShaderInfoLog(x);throw console.error("Vertex shader compile error",a),s(),new Error(`Vertex shader compile error ${a}`)}let c=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(c,o),t.compileShader(c),!t.getShaderParameter(c,t.COMPILE_STATUS)){let a=t.getShaderInfoLog(c);throw console.error("Fragment shader compile error",a),s(),new Error(`Fragment shader compile error ${a}`)}let r=t.createProgram();if(t.attachShader(r,x),t.attachShader(r,c),t.linkProgram(r),s(),!t.getProgramParameter(r,t.LINK_STATUS)){t.useProgram(null),t.deleteProgram(r);let a=t.getProgramInfoLog(r);throw console.error("Shader link error",a),new Error(`Shader link error ${a}`)}return new n(r)}};var ut=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],C=w();function it(n,t){let e=t.x+t.x,o=t.y+t.y,s=t.z+t.z,x=t.x*e,c=t.y*e,r=t.y*o,a=t.z*e,m=t.z*o,u=t.z*s,i=t.w*e,d=t.w*o,b=t.w*s;return n[0]=1-r-u,n[1]=c-b,n[2]=a+d,n[3]=c+b,n[4]=1-x-u,n[5]=m-i,n[6]=a-d,n[7]=m+i,n[8]=1-x-r,n}var l=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=z();cameraTarget=z();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;cameraMatrixArray=new Float32Array(9);constructor(t,e,o,s,x,c,r,a,m,u,i,d,b,D){this.gl=t,this.shader=e,this.positionBuffer=o,this.uShapes=s,this.uOperations=x,this.uNumOperations=c,this.uLights=r,this.uNumLights=a,this.uCameraPosition=m,this.uCameraMatrix=u,this.uAspectRatio=i,this.uMaxMarchingSteps=d,this.uEpsilon=b,this.uFlags=D}setupCanvas(){this.resizeCanvas(window.innerWidth,window.innerHeight),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(t,e){this.cameraRotationX+=t,this.cameraRotationY+=e,this.updateCamera()}updateCamera(){U(C,this.cameraRotationX,this.cameraRotationY,0);let t=F(z(),{x:0,y:0,z:1},C);N(this.cameraPosition,this.cameraTarget,t,this.cameraDistance),it(this.cameraMatrixArray,C)}resizeCanvas=(t,e)=>{this.gl.canvas.width=t,this.gl.canvas.height=e,this.gl.viewport(0,0,t,e);let o=t/e;console.log("Aspect",o),this.gl.uniform1f(this.uAspectRatio,o)};render(t){this.gl.uniformMatrix2x4fv(this.uLights,!1,t.getLightDataArray()),this.gl.uniform1i(this.uNumLights,t.getNumLights());let e=t.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,e.length),this.gl.uniform1iv(this.uOperations,e),this.gl.uniformMatrix4fv(this.uShapes,!1,t.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,t.getLightDataArray()),this.gl.uniform1i(this.uNumLights,t.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(t){let e=t.getContext("webgl2");if(e==null)throw new Error("Unable to get webgl2 context");let o=e.createBuffer();if(o==null)throw new Error("Unable to create position buffer");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array(ut),e.STATIC_DRAW);let s=h.create(e,W,k);e.useProgram(s.program);let x=this.getAttribute(e,s,"aPosition");e.enableVertexAttribArray(x),e.vertexAttribPointer(x,2,e.FLOAT,!1,0,0);let c=this.getUniform(e,s,"uCameraMatrix"),r=this.getUniform(e,s,"uCameraPosition"),a=this.getUniform(e,s,"uAspectRatio"),m=this.getUniform(e,s,"uShapes"),u=this.getUniform(e,s,"uOperations"),i=this.getUniform(e,s,"uNumOperations"),d=this.getUniform(e,s,"uLights"),b=this.getUniform(e,s,"uNumLights"),D=this.getUniform(e,s,"uMaxMarchingSteps"),Z=this.getUniform(e,s,"uEpsilon"),Q=this.getUniform(e,s,"uFlags");return new n(e,s,o,m,u,i,d,b,r,c,a,D,Z,Q)}static getAttribute(t,e,o){let s=t.getAttribLocation(e.program,o);if(s<0)throw new Error(`Unable to find attribute ${o}`);return s}static getUniform(t,e,o){let s=t.getUniformLocation(e.program,o);if(s==null)throw new Error(`Unable to find uniform ${o}`);return s}};var y=new M,p,v=!0,L=0,_=0,A=0,V=document.getElementById("max-marching-steps"),xt=document.getElementById("max-marching-steps_value"),H=document.getElementById("enable-shadows"),X=document.getElementById("enable-show-marching");function pt(){let n=document.getElementById("toggle-render");n.addEventListener("click",()=>{v?(n.innerText="Start",v=!1):(n.innerText="Stop",v=!0,L=Date.now(),requestAnimationFrame(O))});let t=document.getElementById("main-canvas");t?(p=l.create(t),p.setupCanvas(),y.setShape(0,{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}}),y.setShape(1,{type:"hexPrism",shapeParams:{x:1,y:2,z:0},maxSize:1.5}),y.setShape(2,{type:"box",shapeParams:{x:6,y:1,z:6},position:{x:0,y:-1.5,z:0},diffuseColour:{x:.2,y:.25,z:.3,w:1}}),y.setOperations([0,2,"union",1,"subtraction"]),y.setLight(0,{position:{x:4,y:2,z:3},colour:{x:1,y:.8,z:.6,w:1}}),y.setLight(1,{position:{x:-4,y:2,z:3},colour:{x:.2,y:1,z:.6,w:1}}),p.cameraDistance=10,p.updateCamera(),window.addEventListener("pointerdown",yt),window.addEventListener("pointermove",zt),window.addEventListener("pointerup",dt),window.addEventListener("wheel",ft),V.addEventListener("input",e=>{p.maxMarchingSteps=Math.round(parseFloat(V.value)),xt.innerText=p.maxMarchingSteps.toString(10),S()}),H.addEventListener("change",e=>{p.enableShadows=H.checked,S()}),X.addEventListener("change",e=>{p.enableShowMarches=X.checked,S()}),L=Date.now(),requestAnimationFrame(O)):console.error("Couldn't find main-canvas")}var T=0,I=0,R=!1;function yt(n){n.target===document.body&&(T=n.clientX,I=n.clientY,R=!0)}function zt(n){if(!R)return;let t=n.clientX-T,e=n.clientY-I;T=n.clientX,I=n.clientY,p.orbitCamera(e,t),S()}function dt(n){R=!1}var P=20,Y=1,bt=80;function ft(n){let t=n.deltaY>0?1:-1,e=P+t;P=Math.max(Math.min(100,e),0),p.cameraDistance=P*.01*(bt-Y)+Y,p.updateCamera(),S()}function S(){v||p.render(y)}function O(){let n=Date.now();_=L-n,L=n,A+=_;let t=Math.cos(A/1e3),e=Math.sin(A/1e3),o=t*7,s=e*7;y.setLight(0,{position:{x:o,z:s,y:1.5}}),y.setShape(1,{position:{x:o/5,y:s/7,z:0}}),p.render(y),v&&requestAnimationFrame(O)}pt();})();
//# sourceMappingURL=webgl-index.js.map
