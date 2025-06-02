(()=>{var Ve=Object.create;var pe=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Xe=Object.getOwnPropertyNames;var Ze=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty;var Qe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Ye=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Xe(e))!je.call(n,i)&&i!==t&&pe(n,i,{get:()=>e[i],enumerable:!(o=Be(e,i))||o.enumerable});return n};var He=(n,e,t)=>(t=n!=null?Ve(Ze(n)):{},Ye(e||!n||!n.__esModule?pe(t,"default",{value:n,enumerable:!0}):t,n));var ke=Qe(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.EmptyModifier=void 0;var ut=()=>null;U.EmptyModifier=ut;var ie=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,i){let a=e(this.currentState),s={selector:new se(e,a,o,i),subscription:t};return this.subscriptions.push(s),()=>{let c=this.subscriptions.indexOf(s);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let i=o.selector.getValue(this.currentState);o.selector.checkIfChanged(i)&&o.subscription(this.currentState,i,e,t)}}};U.default=ie;var se=class{constructor(e,t=void 0,o,i){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=i}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var j,h,be,Je,C,le,he,fe,ve,te,q,ee,$e,k={},ze=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function S(n,e){for(var t in e)n[t]=e[t];return n}function ne(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function y(n,e,t){var o,i,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?i=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?j.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return X(n,s,o,i,null)}function X(n,e,t,o,i){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++be,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(a),a}function _e(){return{current:null}}function A(n){return n.children}function w(n,e){this.props=n,this.context=e}function L(n,e){if(e==null)return n.__?L(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?L(n):null}function we(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return we(n)}}function xe(n){(!n.__d&&(n.__d=!0)&&C.push(n)&&!Z.__r++||le!=h.debounceRendering)&&((le=h.debounceRendering)||he)(Z)}function Z(){for(var n,e,t,o,i,a,s,c=1;C.length;)C.length>c&&C.sort(fe),n=C.shift(),c=C.length,n.__d&&(t=void 0,i=(o=(e=n).__v).__e,a=[],s=[],e.__P&&((t=S({},o)).__v=o.__v+1,h.vnode&&h.vnode(t),oe(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[i]:null,a,i??L(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,ge(a,t,s),t.__e!=i&&we(t)));Z.__r=0}function Se(n,e,t,o,i,a,s,c,m,u,p){var r,x,l,f,z,v,d=o&&o.__k||ze,b=e.length;for(m=qe(t,e,d,m,b),r=0;r<b;r++)(l=t.__k[r])!=null&&(x=l.__i==-1?k:d[l.__i]||k,l.__i=r,v=oe(n,l,x,i,a,s,c,m,u,p),f=l.__e,l.ref&&x.ref!=l.ref&&(x.ref&&re(x.ref,null,l),p.push(l.ref,l.__c||f,l)),z==null&&f!=null&&(z=f),4&l.__u||x.__k===l.__k?m=Me(l,m,n):typeof l.type=="function"&&v!==void 0?m=v:f&&(m=f.nextSibling),l.__u&=-7);return t.__e=z,m}function qe(n,e,t,o,i){var a,s,c,m,u,p=t.length,r=p,x=0;for(n.__k=new Array(i),a=0;a<i;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(m=a+x,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?X(null,s,null,null,null):Q(s)?X(A,{children:s},null,null,null):s.constructor==null&&s.__b>0?X(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,c=null,(u=s.__i=et(s,t,m,r))!=-1&&(r--,(c=t[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(i>p?x--:i<p&&x++),typeof s.type!="function"&&(s.__u|=4)):u!=m&&(u==m-1?x--:u==m+1?x++:(u>m?x--:x++,s.__u|=4))):n.__k[a]=null;if(r)for(a=0;a<p;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=L(c)),Ie(c,c));return o}function Me(n,e,t){var o,i;if(typeof n.type=="function"){for(o=n.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=n,e=Me(o[i],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=L(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function et(n,e,t,o){var i,a,s=n.key,c=n.type,m=e[t];if(m===null&&n.key==null||m&&s==m.key&&c==m.type&&(2&m.__u)==0)return t;if(o>(m!=null&&(2&m.__u)==0?1:0))for(i=t-1,a=t+1;i>=0||a<e.length;){if(i>=0){if((m=e[i])&&(2&m.__u)==0&&s==m.key&&c==m.type)return i;i--}if(a<e.length){if((m=e[a])&&(2&m.__u)==0&&s==m.key&&c==m.type)return a;a++}}return-1}function de(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Ke.test(e)?t:t+"px"}function B(n,e,t,o,i){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||de(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||de(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(ve,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=te,n.addEventListener(e,a?ee:q,a)):n.removeEventListener(e,a?ee:q,a);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function ye(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=te++;else if(e.t<t.u)return;return t(h.event?h.event(e):e)}}}function oe(n,e,t,o,i,a,s,c,m,u){var p,r,x,l,f,z,v,d,b,R,g,G,P,me,V,T,K,_=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[c=e.__e=t.__e]),(p=h.__b)&&p(e);e:if(typeof _=="function")try{if(d=e.props,b="prototype"in _&&_.prototype.render,R=(p=_.contextType)&&o[p.__c],g=p?R?R.props.value:p.__:o,t.__c?v=(r=e.__c=t.__c).__=r.__E:(b?e.__c=r=new _(d,g):(e.__c=r=new w(d,g),r.constructor=_,r.render=nt),R&&R.sub(r),r.props=d,r.state||(r.state={}),r.context=g,r.__n=o,x=r.__d=!0,r.__h=[],r._sb=[]),b&&r.__s==null&&(r.__s=r.state),b&&_.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,_.getDerivedStateFromProps(d,r.__s))),l=r.props,f=r.state,r.__v=e,x)b&&_.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),b&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b&&_.getDerivedStateFromProps==null&&d!==l&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(d,g),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(d,r.__s,g)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(r.props=d,r.state=r.__s,r.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(F){F&&(F.__=e)}),G=0;G<r._sb.length;G++)r.__h.push(r._sb[G]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(d,r.__s,g),b&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(l,f,z)})}if(r.context=g,r.props=d,r.__P=n,r.__e=!1,P=h.__r,me=0,b){for(r.state=r.__s,r.__d=!1,P&&P(e),p=r.render(r.props,r.state,r.context),V=0;V<r._sb.length;V++)r.__h.push(r._sb[V]);r._sb=[]}else do r.__d=!1,P&&P(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++me<25);r.state=r.__s,r.getChildContext!=null&&(o=S(S({},o),r.getChildContext())),b&&!x&&r.getSnapshotBeforeUpdate!=null&&(z=r.getSnapshotBeforeUpdate(l,f)),T=p,p!=null&&p.type===A&&p.key==null&&(T=Ce(p.props.children)),c=Se(n,Q(T)?T:[T],e,t,o,i,a,s,c,m,u),r.base=e.__e,e.__u&=-161,r.__h.length&&s.push(r),v&&(r.__E=r.__=null)}catch(F){if(e.__v=null,m||a!=null)if(F.then){for(e.__u|=m?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(K=a.length;K--;)ne(a[K]);else e.__e=t.__e,e.__k=t.__k;h.__e(F,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=tt(t.__e,e,t,o,i,a,s,m,u);return(p=h.diffed)&&p(e),128&e.__u?void 0:c}function ge(n,e,t){for(var o=0;o<t.length;o++)re(t[o],t[++o],t[++o]);h.__c&&h.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(a){a.call(i)})}catch(a){h.__e(a,i.__v)}})}function Ce(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:Q(n)?n.map(Ce):S({},n)}function tt(n,e,t,o,i,a,s,c,m){var u,p,r,x,l,f,z,v=t.props,d=e.props,b=e.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((l=a[u])&&"setAttribute"in l==!!b&&(b?l.localName==b:l.nodeType==3)){n=l,a[u]=null;break}}if(n==null){if(b==null)return document.createTextNode(d);n=document.createElementNS(i,b,d.is&&d),c&&(h.__m&&h.__m(e,a),c=!1),a=null}if(b==null)v===d||c&&n.data==d||(n.data=d);else{if(a=a&&j.call(n.childNodes),v=t.props||k,!c&&a!=null)for(v={},u=0;u<n.attributes.length;u++)v[(l=n.attributes[u]).name]=l.value;for(u in v)if(l=v[u],u!="children"){if(u=="dangerouslySetInnerHTML")r=l;else if(!(u in d)){if(u=="value"&&"defaultValue"in d||u=="checked"&&"defaultChecked"in d)continue;B(n,u,null,l,i)}}for(u in d)l=d[u],u=="children"?x=l:u=="dangerouslySetInnerHTML"?p=l:u=="value"?f=l:u=="checked"?z=l:c&&typeof l!="function"||v[u]===l||B(n,u,l,v[u],i);if(p)c||r&&(p.__html==r.__html||p.__html==n.innerHTML)||(n.innerHTML=p.__html),e.__k=[];else if(r&&(n.innerHTML=""),Se(e.type=="template"?n.content:n,Q(x)?x:[x],e,t,o,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,s,a?a[0]:t.__k&&L(t,0),c,m),a!=null)for(u=a.length;u--;)ne(a[u]);c||(u="value",b=="progress"&&f==null?n.removeAttribute("value"):f!=null&&(f!==n[u]||b=="progress"&&!f||b=="option"&&f!=v[u])&&B(n,u,f,v[u],i),u="checked",z!=null&&z!=n[u]&&B(n,u,z,v[u],i))}return n}function re(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(i){h.__e(i,t)}}function Ie(n,e,t){var o,i;if(h.unmount&&h.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||re(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){h.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&Ie(o[i],e,t||typeof n.type!="function");t||ne(n.__e),n.__c=n.__=n.__e=void 0}function nt(n,e,t){return this.constructor(n,t)}function Le(n,e,t){var o,i,a,s;e==document&&(e=document.documentElement),h.__&&h.__(n,e),i=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],s=[],oe(e,n=(!o&&t||e).__k=y(A,null,[n]),i||k,k,e.namespaceURI,!o&&t?[t]:i?null:e.firstChild?j.call(e.childNodes):null,a,!o&&t?t:i?i.__e:e.firstChild,o,s),ge(a,n,s)}j=ze.slice,h={__e:function(n,e,t,o){for(var i,a,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(n)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,o||{}),s=i.__d),s)return i.__E=i}catch(c){n=c}throw n}},be=0,Je=function(n){return n!=null&&n.constructor==null},w.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S({},this.state),typeof n=="function"&&(n=n(S({},t),this.props)),n&&S(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),xe(this))},w.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),xe(this))},w.prototype.render=A,C=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fe=function(n,e){return n.__v.__b-e.__v.__b},Z.__r=0,ve=/(PointerCapture)$|Capture$/i,te=0,q=ye(!1),ee=ye(!0),$e=0;var Ae=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Oe=`#version 300 es

precision lowp float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

layout(location = 0) out vec4 fragColour;

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

#include <sdf-functions>

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
            fragColour = vec4(r, 0, 0, 1);
            return;
        }

        fragColour = vec4(0, 0, 0, 0);
    }
    else
    {
        // The closest point on the surface to the eyepoint along the view ray
        vec3 worldPoint = rayOrigin + dist.x * rayDir;

        vec3 diffuse = vec3(0.7, 0.2, 0.2);
        vec3 specular = vec3(1.0, 1.0, 1.0);
        float shininess = 10.0;

        litColour = phongIllumination(dist, diffuse, specular, shininess, worldPoint, rayOrigin);

        fragColour = vec4(litColour.xyz, 1.0);
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);
        fragColour = vec4(r, g, 0, 1);
    }
}`;var De=`const int ShapeTypeNone = -5000;
const int ShapeTypeBox = -6000;
const int ShapeTypeSphere = -7000;
const int ShapeTypeHexPrism = -8000;

const int SdfOpCodeNone = -500;
const int SdfOpCodeUnion = -600;
const int SdfOpCodeIntersection = -700;
const int SdfOpCodeSubtraction = -800;

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
}`;var it=/^#include\s+\<([^\>]+)\>/gmi,E=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(it);for(let i of o){let a=e[i[1]];a===void 0&&(console.error(`Unknown shader include ${i[1]}`),a=""),t=t.replace(i[0],a)}return t}static create(e,t,o,i){function a(){m!=null&&(e.detachShader(m,s),e.detachShader(m,c)),s!=null&&e.deleteShader(s),c!=null&&e.deleteShader(c)}let s=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(s,this.assembleShader(t,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Vertex shader compile error",u),a(),new Error(`Vertex shader compile error ${u}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,i)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",u),a(),new Error(`Fragment shader compile error ${u}`)}let m=e.createProgram();if(e.attachShader(m,s),e.attachShader(m,c),e.linkProgram(m),a(),!e.getProgramParameter(m,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(m);let u=e.getProgramInfoLog(m);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new n(m)}};var O=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let i=t-e;return Math.abs(i)<=o?t:e+Math.sign(i)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function Re(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Pe(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,i=e.y,a=e.z,s=t.w*2,c=t.y*a-t.z*i,m=t.z*o-t.x*a,u=t.x*i-t.y*o,p=(t.y*u-t.z*m)*2,r=(t.z*c-t.x*u)*2,x=(t.x*m-t.y*c)*2;return c*=s,m*=s,u*=s,n.x=o+c+p,n.y=i+m+r,n.z=a+u+x,n}function M(){return{x:0,y:0,z:0}}function Te(){return{x:1,y:1,z:1,w:1}}function Y(){return{x:0,y:0,z:0,w:1}}function Fe(n,e,t,o,i=O.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let s=Math.sin(e),c=Math.cos(e),m=Math.sin(t),u=Math.cos(t),p=Math.sin(o),r=Math.cos(o);switch(i){case"xyz":n.x=s*u*r+c*m*p,n.y=c*m*r-s*u*p,n.z=c*u*p+s*m*r,n.w=c*u*r-s*m*p;break;case"xzy":n.x=s*u*r-c*m*p,n.y=c*m*r-s*u*p,n.z=c*u*p+s*m*r,n.w=c*u*r+s*m*p;break;case"yxz":n.x=s*u*r+c*m*p,n.y=c*m*r-s*u*p,n.z=c*u*p-s*m*r,n.w=c*u*r+s*m*p;break;case"yzx":n.x=s*u*r+c*m*p,n.y=c*m*r+s*u*p,n.z=c*u*p-s*m*r,n.w=c*u*r-s*m*p;break;case"zxy":n.x=s*u*r-c*m*p,n.y=c*m*r+s*u*p,n.z=c*u*p+s*m*r,n.w=c*u*r-s*m*p;break;case"zyx":n.x=s*u*r-c*m*p,n.y=c*m*r+s*u*p,n.z=c*u*p-s*m*r,n.w=c*u*r+s*m*p;break;default:throw new Error("Unknown angle order "+i)}return this}var st=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ae=Y();function ct(n,e){let t=e.x+e.x,o=e.y+e.y,i=e.z+e.z,a=e.x*t,s=e.y*t,c=e.y*o,m=e.z*t,u=e.z*o,p=e.z*i,r=e.w*t,x=e.w*o,l=e.w*i;return n[0]=1-c-p,n[1]=s-l,n[2]=m+x,n[3]=s+l,n[4]=1-a-p,n[5]=u-r,n[6]=m-x,n[7]=u+r,n[8]=1-a-c,n}var N=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=M();cameraTarget=M();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);constructor(e,t,o,i,a,s,c,m,u,p,r,x,l,f){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=i,this.uOperations=a,this.uNumOperations=s,this.uLights=c,this.uNumLights=m,this.uCameraPosition=u,this.uCameraMatrix=p,this.uAspectRatio=r,this.uMaxMarchingSteps=x,this.uEpsilon=l,this.uFlags=f}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){Fe(ae,this.cameraRotationX,this.cameraRotationY,0);let e=Pe(M(),{x:0,y:0,z:1},ae);Re(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),ct(this.cameraMatrixArray,ae)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,i=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=i,this.gl.viewport(0,0,o,i);let a=o/i;this.gl.uniform1f(this.uAspectRatio,a)};render(e){this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights());let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(st),t.STATIC_DRAW);let i={"sdf-functions":De},a=E.create(t,i,Ae,Oe);t.useProgram(a.program);let s=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),m=this.getUniform(t,a,"uCameraPosition"),u=this.getUniform(t,a,"uAspectRatio"),p=this.getUniform(t,a,"uShapes"),r=this.getUniform(t,a,"uOperations"),x=this.getUniform(t,a,"uNumOperations"),l=this.getUniform(t,a,"uLights"),f=this.getUniform(t,a,"uNumLights"),z=this.getUniform(t,a,"uMaxMarchingSteps"),v=this.getUniform(t,a,"uEpsilon"),d=this.getUniform(t,a,"uFlags");return new n(t,a,o,p,r,x,l,f,m,c,u,z,v,d)}static getAttribute(e,t,o){let i=e.getAttribLocation(t.program,o);if(i<0)throw new Error(`Unable to find attribute ${o}`);return i}static getUniform(e,t,o){let i=e.getUniformLocation(t.program,o);if(i==null)throw new Error(`Unable to find uniform ${o}`);return i}};var Ee=He(ke()),mt={renderScale:1,enableRender:!0,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001},ce={options:mt},D=new Ee.default({viewports:[ce]});function ue(n,e){return t=>{let o=t.viewports[n]??ce,i={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=i,{viewports:a}}}var Ne=n=>y("label",{style:{display:"inline-block"}},n.label,y("input",{style:{display:"block"},type:"range",...n.inputProps})),W=class extends w{render(e){let{enableRender:t,renderScale:o,enableShadows:i,enableShowMarching:a,epsilon:s,maxMarchingStep:c}=this.props.options;return y("div",{class:"viewport-options"},y("button",{onClick:this.toggleRender},t?"Stop":"Start"),y("select",{onChange:this.changeRenderScale,value:o},y("option",{value:"1"},"1x"),y("option",{value:"0.5"},"0.5x"),y("option",{value:"0.25"},"0.25x"),y("option",{value:"0.125"},"0.125x")),y("button",{onClick:this.toggleShadows},i?"Hide Shadows":"Show Shadows"),y("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),y(Ne,{label:`Epsilon ${s}`,inputProps:{value:s,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),y(Ne,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};toggleRender=e=>{this.updateOptions({enableRender:!this.props.options.enableRender})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),D.execute(ue(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?D.execute(ue(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var H=class extends w{canvasRef=_e();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=N.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){return y("div",{class:"viewport outer-panel"},y("canvas",{className:"viewport__canvas",ref:this.canvasRef}),y(W,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sdfScene),this.props.options.enableRender&&this.requestRender()};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.props.options.enableRender||this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var pt=8,Ue=-500,lt=-600,xt=-700,dt=-800,yt=-900,We=-5e3,bt=-6e3,ht=-7e3,ft=-8e3,vt={none:Ue,union:lt,intersection:xt,subtraction:dt,xor:yt},zt={none:We,box:bt,sphere:ht,hexPrism:ft};function _t(n){return zt[n]||We}function wt(n){return vt[n]||Ue}var St=16,J=class{lights=[];lightDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...this.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]={...this.createNewShape(),...t}:this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*pt,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateShape(e){let t=e*St,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=_t(o.type),this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=o.diffuseColour.x,this.shapeDataArray[t+13]=o.diffuseColour.y,this.shapeDataArray[t+14]=o.diffuseColour.z,this.shapeDataArray[t+15]=o.diffuseColour.w}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?wt(e):e)}createNewLight(){return{position:M(),radius:10,colour:Te()}}createNewShape(){return{position:M(),rotation:Y(),maxSize:0,type:"none",shapeParams:M(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1}}}};var I=new J,$=class extends w{render(){let{viewports:e}=this.props.state;return y(A,null,y("nav",{class:"navbar outer-panel"},y("button",null,"File")),y("div",{class:"viewports"},y(H,{viewportIndex:0,options:e[0].options,sdfScene:I})))}};function Mt(){I.setShape(0,{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}}),I.setShape(1,{type:"hexPrism",shapeParams:{x:1,y:2,z:0},maxSize:1.5}),I.setShape(2,{type:"box",shapeParams:{x:6,y:1,z:6},position:{x:0,y:-1.5,z:0},diffuseColour:{x:.2,y:.25,z:.3,w:1}}),I.setOperations([0,2,"union",1,"subtraction"]),I.setLight(0,{position:{x:4,y:2,z:3},colour:{x:1,y:.8,z:.6,w:1}}),I.setLight(1,{position:{x:-4,y:2,z:3},colour:{x:.2,y:1,z:.6,w:1}})}Mt();var gt=document.getElementById("app");function Ge(){Le(y($,{state:D.state()}),gt)}Ge();D.subscribeAny(Ge);})();
//# sourceMappingURL=webgl-index.js.map
