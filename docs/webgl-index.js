(()=>{var h=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(t){return t*this.DegToRad}equals(t,e){return Math.abs(t-e)<=n.EPSILON*Math.max(1,Math.abs(t),Math.abs(e))}static clamp(t,e,o){return Math.max(Math.min(t,o),e)}static lerp(t,e,o){return t+(e-t)*o}static moveTowards(t,e,o){let r=e-t;return Math.abs(r)<=o?e:t+Math.sign(r)*o}inverseLerp(t,e,o){return t===e?0:(o-t)/(e-t)}};function E(n,t,e,o){return n.x=t.x+e.x*o,n.y=t.y+e.y*o,n.z=t.z+e.z*o,n}function F(n,t,e){if(e.x===0&&e.y===0&&e.z===0&&e.w===1)return n.x=t.x,n.y=t.y,n.z=t.z,n;let o=t.x,r=t.y,x=t.z,s=e.w*2,a=e.y*x-e.z*r,c=e.z*o-e.x*x,m=e.x*r-e.y*o,i=(e.y*m-e.z*c)*2,u=(e.z*a-e.x*m)*2,z=(e.x*c-e.y*a)*2;return a*=s,c*=s,m*=s,n.x=o+a+i,n.y=r+c+u,n.z=x+m+z,n}function d(){return{x:0,y:0,z:0}}function N(){return{x:1,y:1,z:1,w:1}}function w(){return{x:0,y:0,z:0,w:1}}function U(n,t,e,o,r=h.ANGLE_ORDER){let x=Math.PI/360;t*=x,o*=x,e*=x;let s=Math.sin(t),a=Math.cos(t),c=Math.sin(e),m=Math.cos(e),i=Math.sin(o),u=Math.cos(o);switch(r){case"xyz":n.x=s*m*u+a*c*i,n.y=a*c*u-s*m*i,n.z=a*m*i+s*c*u,n.w=a*m*u-s*c*i;break;case"xzy":n.x=s*m*u-a*c*i,n.y=a*c*u-s*m*i,n.z=a*m*i+s*c*u,n.w=a*m*u+s*c*i;break;case"yxz":n.x=s*m*u+a*c*i,n.y=a*c*u-s*m*i,n.z=a*m*i-s*c*u,n.w=a*m*u+s*c*i;break;case"yzx":n.x=s*m*u+a*c*i,n.y=a*c*u+s*m*i,n.z=a*m*i-s*c*u,n.w=a*m*u-s*c*i;break;case"zxy":n.x=s*m*u-a*c*i,n.y=a*c*u+s*m*i,n.z=a*m*i+s*c*u,n.w=a*m*u-s*c*i;break;case"zyx":n.x=s*m*u-a*c*i,n.y=a*c*u+s*m*i,n.z=a*m*i-s*c*u,n.w=a*m*u+s*c*i;break;default:throw new Error("Unknown angle order "+r)}return this}var $=8,G=-500,j=-600,J=-700,K=-800,g=-900,B=-5e3,q=-6e3,tt=-7e3,et=-8e3,nt={none:G,union:j,intersection:J,subtraction:K,xor:g},ot={none:B,box:q,sphere:tt,hexPrism:et};function rt(n){return ot[n]||B}function at(n){return nt[n]||G}var ct=16,M=class{lights=[];lightDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(t){this.operations=t,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(t,e){if(t<0)throw new Error(`Out of bounds light index ${t}`);t>=this.lights.length?this.lights[t]={...this.createNewLight(),...e}:this.lights[t]={...this.lights[t],...e},this.updateLight(t)}setShape(t,e){if(t<0)throw new Error(`Out of bounds shape index ${t}`);t>=this.shapes.length?this.shapes[t]={...this.createNewShape(),...e}:this.shapes[t]={...this.shapes[t],...e},this.updateShape(t)}updateLight(t){let e=t*$,o=this.lights[t];this.lightDataArray[e]=o.position.x,this.lightDataArray[e+1]=o.position.y,this.lightDataArray[e+2]=o.position.z,this.lightDataArray[e+3]=o.radius,this.lightDataArray[e+4]=o.colour.x,this.lightDataArray[e+5]=o.colour.y,this.lightDataArray[e+6]=o.colour.z,this.lightDataArray[e+7]=o.colour.w}updateShape(t){let e=t*ct,o=this.shapes[t];this.shapeDataArray[e]=o.position.x,this.shapeDataArray[e+1]=o.position.y,this.shapeDataArray[e+2]=o.position.z,this.shapeDataArray[e+3]=o.maxSize,this.shapeDataArray[e+4]=o.rotation.x,this.shapeDataArray[e+5]=o.rotation.y,this.shapeDataArray[e+6]=o.rotation.z,this.shapeDataArray[e+7]=o.rotation.w,this.shapeDataArray[e+8]=rt(o.type),this.shapeDataArray[e+9]=o.shapeParams.x,this.shapeDataArray[e+10]=o.shapeParams.y,this.shapeDataArray[e+11]=o.shapeParams.z,this.shapeDataArray[e+12]=o.diffuseColour.x,this.shapeDataArray[e+13]=o.diffuseColour.y,this.shapeDataArray[e+14]=o.diffuseColour.z,this.shapeDataArray[e+15]=o.diffuseColour.w}updateOperationNumbers(){this.numberOperations=this.operations.map(t=>typeof t=="string"?at(t):t)}createNewLight(){return{position:d(),radius:10,colour:N()}}createNewShape(){return{position:d(),rotation:w(),maxSize:0,type:"none",shapeParams:d(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1}}}};var W=`#version 300 es

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
}`;var l=class n{program;constructor(t){this.program=t}static create(t,e,o){function r(){a!=null&&(t.detachShader(a,x),t.detachShader(a,s)),x!=null&&t.deleteShader(x),s!=null&&t.deleteShader(s)}let x=t.createShader(t.VERTEX_SHADER);if(t.shaderSource(x,e),t.compileShader(x),!t.getShaderParameter(x,t.COMPILE_STATUS)){let c=t.getShaderInfoLog(x);throw console.error("Vertex shader compile error",c),r(),new Error(`Vertex shader compile error ${c}`)}let s=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(s,o),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){let c=t.getShaderInfoLog(s);throw console.error("Fragment shader compile error",c),r(),new Error(`Fragment shader compile error ${c}`)}let a=t.createProgram();if(t.attachShader(a,x),t.attachShader(a,s),t.linkProgram(a),r(),!t.getProgramParameter(a,t.LINK_STATUS)){t.useProgram(null),t.deleteProgram(a);let c=t.getProgramInfoLog(a);throw console.error("Shader link error",c),new Error(`Shader link error ${c}`)}return new n(a)}};var it=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],A=w();function ut(n,t){let e=t.x+t.x,o=t.y+t.y,r=t.z+t.z,x=t.x*e,s=t.y*e,a=t.y*o,c=t.z*e,m=t.z*o,i=t.z*r,u=t.w*e,z=t.w*o,b=t.w*r;return n[0]=1-a-i,n[1]=s-b,n[2]=c+z,n[3]=s+b,n[4]=1-x-i,n[5]=m-u,n[6]=c-z,n[7]=m+u,n[8]=1-x-a,n}var v=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=d();cameraTarget=d();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);constructor(t,e,o,r,x,s,a,c,m,i,u,z,b,C){this.gl=t,this.shader=e,this.positionBuffer=o,this.uShapes=r,this.uOperations=x,this.uNumOperations=s,this.uLights=a,this.uNumLights=c,this.uCameraPosition=m,this.uCameraMatrix=i,this.uAspectRatio=u,this.uMaxMarchingSteps=z,this.uEpsilon=b,this.uFlags=C}setupCanvas(){this.resizeCanvas(window.innerWidth,window.innerHeight),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}handleResize(){this.resizeCanvas(window.innerWidth,window.innerHeight)}orbitCamera(t,e){this.cameraRotationX+=t,this.cameraRotationY+=e,this.updateCamera()}updateCamera(){U(A,this.cameraRotationX,this.cameraRotationY,0);let t=F(d(),{x:0,y:0,z:1},A);E(this.cameraPosition,this.cameraTarget,t,this.cameraDistance),ut(this.cameraMatrixArray,A)}resizeCanvas=(t,e)=>{let o=t*this.canvasScale,r=e*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let x=o/r;this.gl.uniform1f(this.uAspectRatio,x)};render(t){this.gl.uniformMatrix2x4fv(this.uLights,!1,t.getLightDataArray()),this.gl.uniform1i(this.uNumLights,t.getNumLights());let e=t.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,e.length),this.gl.uniform1iv(this.uOperations,e),this.gl.uniformMatrix4fv(this.uShapes,!1,t.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,t.getLightDataArray()),this.gl.uniform1i(this.uNumLights,t.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(t){let e=t.getContext("webgl2");if(e==null)throw new Error("Unable to get webgl2 context");let o=e.createBuffer();if(o==null)throw new Error("Unable to create position buffer");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array(it),e.STATIC_DRAW);let r=l.create(e,W,k);e.useProgram(r.program);let x=this.getAttribute(e,r,"aPosition");e.enableVertexAttribArray(x),e.vertexAttribPointer(x,2,e.FLOAT,!1,0,0);let s=this.getUniform(e,r,"uCameraMatrix"),a=this.getUniform(e,r,"uCameraPosition"),c=this.getUniform(e,r,"uAspectRatio"),m=this.getUniform(e,r,"uShapes"),i=this.getUniform(e,r,"uOperations"),u=this.getUniform(e,r,"uNumOperations"),z=this.getUniform(e,r,"uLights"),b=this.getUniform(e,r,"uNumLights"),C=this.getUniform(e,r,"uMaxMarchingSteps"),Z=this.getUniform(e,r,"uEpsilon"),Q=this.getUniform(e,r,"uFlags");return new n(e,r,o,m,i,u,z,b,a,s,c,C,Z,Q)}static getAttribute(t,e,o){let r=t.getAttribLocation(e.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(t,e,o){let r=t.getUniformLocation(e.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var y=new M,p,f=!0,D=0,_=0,P=0,V=document.getElementById("max-marching-steps"),xt=document.getElementById("max-marching-steps_value"),H=document.getElementById("enable-shadows"),X=document.getElementById("enable-show-marching");function pt(){let n=document.getElementById("toggle-render");n.addEventListener("click",()=>{f?(n.innerText="Start",f=!1):(n.innerText="Stop",f=!0,D=Date.now(),requestAnimationFrame(L))}),document.getElementById("select-render-scale").addEventListener("change",e=>{let o=e.target.value,r=Number.parseFloat(o);isFinite(r)?(p.canvasScale=r,p.handleResize()):console.warn("Unable to parse canvas scale",o)}),window.addEventListener("resize",e=>{p.handleResize(),f||L()});let t=document.getElementById("main-canvas");t?(p=v.create(t),p.setupCanvas(),y.setShape(0,{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}}),y.setShape(1,{type:"hexPrism",shapeParams:{x:1,y:2,z:0},maxSize:1.5}),y.setShape(2,{type:"box",shapeParams:{x:6,y:1,z:6},position:{x:0,y:-1.5,z:0},diffuseColour:{x:.2,y:.25,z:.3,w:1}}),y.setOperations([0,2,"union",1,"subtraction"]),y.setLight(0,{position:{x:4,y:2,z:3},colour:{x:1,y:.8,z:.6,w:1}}),y.setLight(1,{position:{x:-4,y:2,z:3},colour:{x:.2,y:1,z:.6,w:1}}),p.cameraDistance=10,p.updateCamera(),window.addEventListener("pointerdown",yt),window.addEventListener("pointermove",dt),window.addEventListener("pointerup",zt),window.addEventListener("wheel",ht),V.addEventListener("input",e=>{p.maxMarchingSteps=Math.round(parseFloat(V.value)),xt.innerText=p.maxMarchingSteps.toString(10),S()}),H.addEventListener("change",e=>{p.enableShadows=H.checked,S()}),X.addEventListener("change",e=>{p.enableShowMarches=X.checked,S()}),D=Date.now(),requestAnimationFrame(L)):console.error("Couldn't find main-canvas")}var I=0,O=0,R=!1;function yt(n){n.target===document.body&&(I=n.clientX,O=n.clientY,R=!0)}function dt(n){if(!R)return;let t=n.clientX-I,e=n.clientY-O;I=n.clientX,O=n.clientY,p.orbitCamera(e,t),S()}function zt(n){R=!1}var T=20,Y=1,bt=80;function ht(n){let t=n.deltaY>0?1:-1,e=T+t;T=Math.max(Math.min(100,e),0),p.cameraDistance=T*.01*(bt-Y)+Y,p.updateCamera(),S()}function S(){f||p.render(y)}function L(){let n=Date.now();_=D-n,D=n,P+=_;let t=Math.cos(P/1e3),e=Math.sin(P/1e3),o=t*7,r=e*7;y.setLight(0,{position:{x:o,z:r,y:1.5}}),y.setShape(1,{position:{x:o/5,y:r/7,z:0}}),p.render(y),f&&requestAnimationFrame(L)}pt();})();
//# sourceMappingURL=webgl-index.js.map
