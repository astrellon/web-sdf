(()=>{var Ne=Object.create;var ie=Object.defineProperty;var Ue=Object.getOwnPropertyDescriptor;var Ve=Object.getOwnPropertyNames;var ke=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty;var Ge=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var We=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ve(e))!Ee.call(t,r)&&r!==n&&ie(t,r,{get:()=>e[r],enumerable:!(o=Ue(e,r))||o.enumerable});return t};var Be=(t,e,n)=>(n=t!=null?Ne(ke(t)):{},We(e||!t||!t.__esModule?ie(n,"default",{value:t,enumerable:!0}):n,t));var Te=Ge(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.EmptyModifier=void 0;var et=()=>null;k.EmptyModifier=et;var oe=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,n=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,n))}subscribe(e,n,o,r){let a=e(this.currentState),s={selector:new re(e,a,o,r),subscription:n};return this.subscriptions.push(s),()=>{let i=this.subscriptions.indexOf(s);i>=0&&this.subscriptions.splice(i,1)}}subscribeAny(e,n){return this.subscribe(o=>o,e,void 0,n)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,n){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,n)}}};k.default=oe;var re=class{constructor(e,n=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=n,this.comparer=o,this.name=r}checkIfChanged(e){let n=!1;return this.comparer!==void 0?n=!this.comparer(this.prevValue,e):n=e!==this.prevValue,this.prevValue=e,n}}});var X,b,ye,ge,L,me,le,de,be,K,Q,$,Ze,O={},fe=[],Xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function S(t,e){for(var n in e)t[n]=e[n];return t}function q(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function z(t,e,n){var o,r,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?X.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)s[a]===void 0&&(s[a]=t.defaultProps[a]);return g(t,s,o,r,null)}function g(t,e,n,o,r){var a={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ye,__i:-1,__u:0};return r==null&&b.vnode!=null&&b.vnode(a),a}function _e(){return{current:null}}function I(t){return t.children}function w(t,e){this.props=t,this.context=e}function C(t,e){if(e==null)return t.__?C(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?C(t):null}function ze(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ze(t)}}function ue(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!Z.__r++||me!=b.debounceRendering)&&((me=b.debounceRendering)||le)(Z)}function Z(){for(var t,e,n,o,r,a,s,i=1;L.length;)L.length>i&&L.sort(de),t=L.shift(),i=L.length,t.__d&&(n=void 0,r=(o=(e=t).__v).__e,a=[],s=[],e.__P&&((n=S({},o)).__v=o.__v+1,b.vnode&&b.vnode(n),ee(e.__P,n,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??C(o),!!(32&o.__u),s),n.__v=o.__v,n.__.__k[n.__i]=n,we(a,n,s),n.__e!=r&&ze(n)));Z.__r=0}function ve(t,e,n,o,r,a,s,i,u,m,p){var c,y,x,f,v,_,l=o&&o.__k||fe,d=e.length;for(u=Je(n,e,l,u,d),c=0;c<d;c++)(x=n.__k[c])!=null&&(y=x.__i==-1?O:l[x.__i]||O,x.__i=c,_=ee(t,x,y,r,a,s,i,u,m,p),f=x.__e,x.ref&&y.ref!=x.ref&&(y.ref&&te(y.ref,null,x),p.push(x.ref,x.__c||f,x)),v==null&&f!=null&&(v=f),4&x.__u||y.__k===x.__k?u=he(x,u,t):typeof x.type=="function"&&_!==void 0?u=_:f&&(u=f.nextSibling),x.__u&=-7);return n.__e=v,u}function Je(t,e,n,o,r){var a,s,i,u,m,p=n.length,c=p,y=0;for(t.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(u=a+y,(s=t.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?g(null,s,null,null,null):J(s)?g(I,{children:s},null,null,null):s.constructor==null&&s.__b>0?g(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,i=null,(m=s.__i=je(s,n,u,c))!=-1&&(c--,(i=n[m])&&(i.__u|=2)),i==null||i.__v==null?(m==-1&&(r>p?y--:r<p&&y++),typeof s.type!="function"&&(s.__u|=4)):m!=u&&(m==u-1?y--:m==u+1?y++:(m>u?y--:y++,s.__u|=4))):t.__k[a]=null;if(c)for(a=0;a<p;a++)(i=n[a])!=null&&(2&i.__u)==0&&(i.__e==o&&(o=C(i)),Me(i,i));return o}function he(t,e,n){var o,r;if(typeof t.type=="function"){for(o=t.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=t,e=he(o[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=C(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function je(t,e,n,o){var r,a,s=t.key,i=t.type,u=e[n];if(u===null&&t.key==null||u&&s==u.key&&i==u.type&&(2&u.__u)==0)return n;if(o>(u!=null&&(2&u.__u)==0?1:0))for(r=n-1,a=n+1;r>=0||a<e.length;){if(r>=0){if((u=e[r])&&(2&u.__u)==0&&s==u.key&&i==u.type)return r;r--}if(a<e.length){if((u=e[a])&&(2&u.__u)==0&&s==u.key&&i==u.type)return a;a++}}return-1}function pe(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Xe.test(e)?n:n+"px"}function B(t,e,n,o,r){var a,s;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||pe(t.style,e,"");if(n)for(e in n)o&&n[e]==o[e]||pe(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(be,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?o?n.u=o.u:(n.u=K,t.addEventListener(e,a?$:Q,a)):t.removeEventListener(e,a?$:Q,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function xe(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=K++;else if(e.t<n.u)return;return n(b.event?b.event(e):e)}}}function ee(t,e,n,o,r,a,s,i,u,m){var p,c,y,x,f,v,_,l,d,D,M,G,R,se,W,T,H,h=e.type;if(e.constructor!=null)return null;128&n.__u&&(u=!!(32&n.__u),a=[i=e.__e=n.__e]),(p=b.__b)&&p(e);e:if(typeof h=="function")try{if(l=e.props,d="prototype"in h&&h.prototype.render,D=(p=h.contextType)&&o[p.__c],M=p?D?D.props.value:p.__:o,n.__c?_=(c=e.__c=n.__c).__=c.__E:(d?e.__c=c=new h(l,M):(e.__c=c=new w(l,M),c.constructor=h,c.render=He),D&&D.sub(c),c.props=l,c.state||(c.state={}),c.context=M,c.__n=o,y=c.__d=!0,c.__h=[],c._sb=[]),d&&c.__s==null&&(c.__s=c.state),d&&h.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=S({},c.__s)),S(c.__s,h.getDerivedStateFromProps(l,c.__s))),x=c.props,f=c.state,c.__v=e,y)d&&h.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),d&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(d&&h.getDerivedStateFromProps==null&&l!==x&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(l,M),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(l,c.__s,M)===!1||e.__v==n.__v){for(e.__v!=n.__v&&(c.props=l,c.state=c.__s,c.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(F){F&&(F.__=e)}),G=0;G<c._sb.length;G++)c.__h.push(c._sb[G]);c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(l,c.__s,M),d&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(x,f,v)})}if(c.context=M,c.props=l,c.__P=t,c.__e=!1,R=b.__r,se=0,d){for(c.state=c.__s,c.__d=!1,R&&R(e),p=c.render(c.props,c.state,c.context),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[]}else do c.__d=!1,R&&R(e),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++se<25);c.state=c.__s,c.getChildContext!=null&&(o=S(S({},o),c.getChildContext())),d&&!y&&c.getSnapshotBeforeUpdate!=null&&(v=c.getSnapshotBeforeUpdate(x,f)),T=p,p!=null&&p.type===I&&p.key==null&&(T=Se(p.props.children)),i=ve(t,J(T)?T:[T],e,n,o,r,a,s,i,u,m),c.base=e.__e,e.__u&=-161,c.__h.length&&s.push(c),_&&(c.__E=c.__=null)}catch(F){if(e.__v=null,u||a!=null)if(F.then){for(e.__u|=u?160:128;i&&i.nodeType==8&&i.nextSibling;)i=i.nextSibling;a[a.indexOf(i)]=null,e.__e=i}else for(H=a.length;H--;)q(a[H]);else e.__e=n.__e,e.__k=n.__k;b.__e(F,e,n)}else a==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):i=e.__e=Ye(n.__e,e,n,o,r,a,s,u,m);return(p=b.diffed)&&p(e),128&e.__u?void 0:i}function we(t,e,n){for(var o=0;o<n.length;o++)te(n[o],n[++o],n[++o]);b.__c&&b.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(a){a.call(r)})}catch(a){b.__e(a,r.__v)}})}function Se(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:J(t)?t.map(Se):S({},t)}function Ye(t,e,n,o,r,a,s,i,u){var m,p,c,y,x,f,v,_=n.props,l=e.props,d=e.type;if(d=="svg"?r="http://www.w3.org/2000/svg":d=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(m=0;m<a.length;m++)if((x=a[m])&&"setAttribute"in x==!!d&&(d?x.localName==d:x.nodeType==3)){t=x,a[m]=null;break}}if(t==null){if(d==null)return document.createTextNode(l);t=document.createElementNS(r,d,l.is&&l),i&&(b.__m&&b.__m(e,a),i=!1),a=null}if(d==null)_===l||i&&t.data==l||(t.data=l);else{if(a=a&&X.call(t.childNodes),_=n.props||O,!i&&a!=null)for(_={},m=0;m<t.attributes.length;m++)_[(x=t.attributes[m]).name]=x.value;for(m in _)if(x=_[m],m!="children"){if(m=="dangerouslySetInnerHTML")c=x;else if(!(m in l)){if(m=="value"&&"defaultValue"in l||m=="checked"&&"defaultChecked"in l)continue;B(t,m,null,x,r)}}for(m in l)x=l[m],m=="children"?y=x:m=="dangerouslySetInnerHTML"?p=x:m=="value"?f=x:m=="checked"?v=x:i&&typeof x!="function"||_[m]===x||B(t,m,x,_[m],r);if(p)i||c&&(p.__html==c.__html||p.__html==t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(c&&(t.innerHTML=""),ve(e.type=="template"?t.content:t,J(y)?y:[y],e,n,o,d=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:n.__k&&C(n,0),i,u),a!=null)for(m=a.length;m--;)q(a[m]);i||(m="value",d=="progress"&&f==null?t.removeAttribute("value"):f!=null&&(f!==t[m]||d=="progress"&&!f||d=="option"&&f!=_[m])&&B(t,m,f,_[m],r),m="checked",v!=null&&v!=t[m]&&B(t,m,v,_[m],r))}return t}function te(t,e,n){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(r){b.__e(r,n)}}function Me(t,e,n){var o,r;if(b.unmount&&b.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||te(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){b.__e(a,e)}o.base=o.__P=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&Me(o[r],e,n||typeof t.type!="function");n||q(t.__e),t.__c=t.__=t.__e=void 0}function He(t,e,n){return this.constructor(t,n)}function Le(t,e,n){var o,r,a,s;e==document&&(e=document.documentElement),b.__&&b.__(t,e),r=(o=typeof n=="function")?null:n&&n.__k||e.__k,a=[],s=[],ee(e,t=(!o&&n||e).__k=z(I,null,[t]),r||O,O,e.namespaceURI,!o&&n?[n]:r?null:e.firstChild?X.call(e.childNodes):null,a,!o&&n?n:r?r.__e:e.firstChild,o,s),we(a,t,s)}X=fe.slice,b={__e:function(t,e,n,o){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,o||{}),s=r.__d),s)return r.__E=r}catch(i){t=i}throw t}},ye=0,ge=function(t){return t!=null&&t.constructor==null},w.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},n),this.props)),t&&S(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ue(this))},w.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ue(this))},w.prototype.render=I,L=[],le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,de=function(t,e){return t.__v.__b-e.__v.__b},Z.__r=0,be=/(PointerCapture)$|Capture$/i,K=0,Q=xe(!1),$=xe(!0),Ze=0;var Ce=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Ie=`#version 300 es

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
}`;var N=class t{program;constructor(e){this.program=e}static create(e,n,o){function r(){i!=null&&(e.detachShader(i,a),e.detachShader(i,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}let a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,n),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",u),r(),new Error(`Vertex shader compile error ${u}`)}let s=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(s,o),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",u),r(),new Error(`Fragment shader compile error ${u}`)}let i=e.createProgram();if(e.attachShader(i,a),e.attachShader(i,s),e.linkProgram(i),r(),!e.getProgramParameter(i,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(i);let u=e.getProgramInfoLog(i);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new t(i)}};var P=class t{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,n){return Math.abs(e-n)<=t.EPSILON*Math.max(1,Math.abs(e),Math.abs(n))}static clamp(e,n,o){return Math.max(Math.min(e,o),n)}static lerp(e,n,o){return e+(n-e)*o}static moveTowards(e,n,o){let r=n-e;return Math.abs(r)<=o?n:e+Math.sign(r)*o}inverseLerp(e,n,o){return e===n?0:(o-e)/(n-e)}};function Pe(t,e,n,o){return t.x=e.x+n.x*o,t.y=e.y+n.y*o,t.z=e.z+n.z*o,t}function Ae(t,e,n){if(n.x===0&&n.y===0&&n.z===0&&n.w===1)return t.x=e.x,t.y=e.y,t.z=e.z,t;let o=e.x,r=e.y,a=e.z,s=n.w*2,i=n.y*a-n.z*r,u=n.z*o-n.x*a,m=n.x*r-n.y*o,p=(n.y*m-n.z*u)*2,c=(n.z*i-n.x*m)*2,y=(n.x*u-n.y*i)*2;return i*=s,u*=s,m*=s,t.x=o+i+p,t.y=r+u+c,t.z=a+m+y,t}function U(){return{x:0,y:0,z:0}}function De(){return{x:0,y:0,z:0,w:1}}function Re(t,e,n,o,r=P.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,n*=a;let s=Math.sin(e),i=Math.cos(e),u=Math.sin(n),m=Math.cos(n),p=Math.sin(o),c=Math.cos(o);switch(r){case"xyz":t.x=s*m*c+i*u*p,t.y=i*u*c-s*m*p,t.z=i*m*p+s*u*c,t.w=i*m*c-s*u*p;break;case"xzy":t.x=s*m*c-i*u*p,t.y=i*u*c-s*m*p,t.z=i*m*p+s*u*c,t.w=i*m*c+s*u*p;break;case"yxz":t.x=s*m*c+i*u*p,t.y=i*u*c-s*m*p,t.z=i*m*p-s*u*c,t.w=i*m*c+s*u*p;break;case"yzx":t.x=s*m*c+i*u*p,t.y=i*u*c+s*m*p,t.z=i*m*p-s*u*c,t.w=i*m*c-s*u*p;break;case"zxy":t.x=s*m*c-i*u*p,t.y=i*u*c+s*m*p,t.z=i*m*p+s*u*c,t.w=i*m*c-s*u*p;break;case"zyx":t.x=s*m*c-i*u*p,t.y=i*u*c+s*m*p,t.z=i*m*p-s*u*c,t.w=i*m*c+s*u*p;break;default:throw new Error("Unknown angle order "+r)}return this}var Ke=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ne=De();function qe(t,e){let n=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*n,s=e.y*n,i=e.y*o,u=e.z*n,m=e.z*o,p=e.z*r,c=e.w*n,y=e.w*o,x=e.w*r;return t[0]=1-i-p,t[1]=s-x,t[2]=u+y,t[3]=s+x,t[4]=1-a-p,t[5]=m-c,t[6]=u-y,t[7]=m+c,t[8]=1-a-i,t}var V=class t{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=U();cameraTarget=U();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);constructor(e,n,o,r,a,s,i,u,m,p,c,y,x,f){this.gl=e,this.shader=n,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=s,this.uLights=i,this.uNumLights=u,this.uCameraPosition=m,this.uCameraMatrix=p,this.uAspectRatio=c,this.uMaxMarchingSteps=y,this.uEpsilon=x,this.uFlags=f}setupCanvas(){this.resizeCanvas(window.innerWidth,window.innerHeight),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}handleResize(){this.resizeCanvas(window.innerWidth,window.innerHeight)}orbitCamera(e,n){this.cameraRotationX+=e,this.cameraRotationY+=n,this.updateCamera()}updateCamera(){Re(ne,this.cameraRotationX,this.cameraRotationY,0);let e=Ae(U(),{x:0,y:0,z:1},ne);Pe(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),qe(this.cameraMatrixArray,ne)}resizeCanvas=(e,n)=>{let o=e*this.canvasScale,r=n*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights());let n=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,n.length),this.gl.uniform1iv(this.uOperations,n),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let n=e.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let o=n.createBuffer();if(o==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(Ke),n.STATIC_DRAW);let r=N.create(n,Ce,Ie);n.useProgram(r.program);let a=this.getAttribute(n,r,"aPosition");n.enableVertexAttribArray(a),n.vertexAttribPointer(a,2,n.FLOAT,!1,0,0);let s=this.getUniform(n,r,"uCameraMatrix"),i=this.getUniform(n,r,"uCameraPosition"),u=this.getUniform(n,r,"uAspectRatio"),m=this.getUniform(n,r,"uShapes"),p=this.getUniform(n,r,"uOperations"),c=this.getUniform(n,r,"uNumOperations"),y=this.getUniform(n,r,"uLights"),x=this.getUniform(n,r,"uNumLights"),f=this.getUniform(n,r,"uMaxMarchingSteps"),v=this.getUniform(n,r,"uEpsilon"),_=this.getUniform(n,r,"uFlags");return new t(n,r,o,m,p,c,y,x,i,s,u,f,v,_)}static getAttribute(e,n,o){let r=e.getAttribLocation(n.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,n,o){let r=e.getUniformLocation(n.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var Fe=Be(Te()),tt={renderScale:1,renderEnabled:!0,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1},ce={options:tt},A=new Fe.default({viewports:[ce]});function ae(t,e){return n=>{let o=n.viewports[t]??ce,r={...o,options:{...o.options,...e}},a=[...n.viewports];return a[t]=r,{viewports:a}}}var E=class extends w{render(e){let{renderEnabled:n,renderScale:o}=this.props.options;return z("div",{class:"viewport-options"},z("button",{onClick:this.onToggleRender},n?"Stop":"Start"),z("select",{onChange:this.onChangeRenderScale,value:o},z("option",{value:"1"},"1x"),z("option",{value:"0.5"},"0.5x"),z("option",{value:"0.25"},"0.25x"),z("option",{value:"0.125"},"0.125x")))}onToggleRender=e=>{A.execute(ae(this.props.viewportIndex,{renderEnabled:!this.props.options.renderEnabled}))};onChangeRenderScale=e=>{let n=e.target.value,o=Number.parseFloat(n);isFinite(o)?A.execute(ae(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",n)}};var j=class extends w{canvasRef=_e();renderer;componentDidMount(){this.renderer=V.create(this.canvasRef.current),this.renderer.canvasScale=this.props.options.renderScale}render(){return z("div",{class:"viewport"},z(E,{viewportIndex:this.props.viewportIndex,options:this.props.options}),z("canvas",{className:"viewport__canvas",ref:this.canvasRef}))}};var Y=class extends w{render(){let{viewports:e}=this.props.state;return z(I,null,z("h1",null,"WebGL SDF"),z("div",{class:"viewports"},z(j,{viewportIndex:0,options:e[0].options})))}};var nt=document.getElementById("app");function Oe(){Le(z(Y,{state:A.state()}),nt)}Oe();A.subscribeAny(Oe);})();
//# sourceMappingURL=webgl-index.js.map
