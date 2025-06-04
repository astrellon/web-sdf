(()=>{var Ke=Object.create;var he=Object.defineProperty;var qe=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty;var be=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var ot=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of et(e))!nt.call(n,r)&&r!==t&&he(n,r,{get:()=>e[r],enumerable:!(o=qe(e,r))||o.enumerable});return n};var fe=(n,e,t)=>(t=n!=null?Ke(tt(n)):{},ot(e||!n||!n.__esModule?he(t,"default",{value:n,enumerable:!0}):t,n));var Xe=be(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.EmptyModifier=void 0;var bt=()=>null;U.EmptyModifier=bt;var pe=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let a=e(this.currentState),s={selector:new me(e,a,o,r),subscription:t};return this.subscriptions.push(s),()=>{let c=this.subscriptions.indexOf(s);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};U.default=pe;var me=class{constructor(e,t=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var Je=be(($n,je)=>{"use strict";je.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var s=a[r];if(!n(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}});var $,b,we,rt,I,ve,ge,Ce,Me,ae,oe,re,at,V={},Ie=[],it=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function g(n,e){for(var t in e)n[t]=e[t];return n}function ie(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function m(n,e,t){var o,r,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?$.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return H(n,s,o,r,null)}function H(n,e,t,o,r){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++we,__i:-1,__u:0};return r==null&&b.vnode!=null&&b.vnode(a),a}function Le(){return{current:null}}function A(n){return n.children}function z(n,e){this.props=n,this.context=e}function L(n,e){if(e==null)return n.__?L(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?L(n):null}function Ae(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Ae(n)}}function ze(n){(!n.__d&&(n.__d=!0)&&I.push(n)&&!Q.__r++||ve!=b.debounceRendering)&&((ve=b.debounceRendering)||ge)(Q)}function Q(){for(var n,e,t,o,r,a,s,c=1;I.length;)I.length>c&&I.sort(Ce),n=I.shift(),c=I.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,a=[],s=[],e.__P&&((t=g({},o)).__v=o.__v+1,b.vnode&&b.vnode(t),se(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??L(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,Re(a,t,s),t.__e!=r&&Ae(t)));Q.__r=0}function Oe(n,e,t,o,r,a,s,c,p,u,l){var i,x,d,f,S,v,y=o&&o.__k||Ie,h=e.length;for(p=st(t,e,y,p,h),i=0;i<h;i++)(d=t.__k[i])!=null&&(x=d.__i==-1?V:y[d.__i]||V,d.__i=i,v=se(n,d,x,r,a,s,c,p,u,l),f=d.__e,d.ref&&x.ref!=d.ref&&(x.ref&&ce(x.ref,null,d),l.push(d.ref,d.__c||f,d)),S==null&&f!=null&&(S=f),4&d.__u||x.__k===d.__k?p=Pe(d,p,n):typeof d.type=="function"&&v!==void 0?p=v:f&&(p=f.nextSibling),d.__u&=-7);return t.__e=S,p}function st(n,e,t,o,r){var a,s,c,p,u,l=t.length,i=l,x=0;for(n.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(p=a+x,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?H(null,s,null,null,null):K(s)?H(A,{children:s},null,null,null):s.constructor==null&&s.__b>0?H(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,c=null,(u=s.__i=ct(s,t,p,i))!=-1&&(i--,(c=t[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(r>l?x--:r<l&&x++),typeof s.type!="function"&&(s.__u|=4)):u!=p&&(u==p-1?x--:u==p+1?x++:(u>p?x--:x++,s.__u|=4))):n.__k[a]=null;if(i)for(a=0;a<l;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=L(c)),Fe(c,c));return o}function Pe(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=Pe(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=L(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ct(n,e,t,o){var r,a,s=n.key,c=n.type,p=e[t];if(p===null&&n.key==null||p&&s==p.key&&c==p.type&&(2&p.__u)==0)return t;if(o>(p!=null&&(2&p.__u)==0?1:0))for(r=t-1,a=t+1;r>=0||a<e.length;){if(r>=0){if((p=e[r])&&(2&p.__u)==0&&s==p.key&&c==p.type)return r;r--}if(a<e.length){if((p=e[a])&&(2&p.__u)==0&&s==p.key&&c==p.type)return a;a++}}return-1}function Se(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||it.test(e)?t:t+"px"}function Y(n,e,t,o,r){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||Se(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||Se(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Me,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=ae,n.addEventListener(e,a?re:oe,a)):n.removeEventListener(e,a?re:oe,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function _e(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=ae++;else if(e.t<t.u)return;return t(b.event?b.event(e):e)}}}function se(n,e,t,o,r,a,s,c,p,u){var l,i,x,d,f,S,v,y,h,F,M,j,T,ye,J,N,ne,w=e.type;if(e.constructor!=null)return null;128&t.__u&&(p=!!(32&t.__u),a=[c=e.__e=t.__e]),(l=b.__b)&&l(e);e:if(typeof w=="function")try{if(y=e.props,h="prototype"in w&&w.prototype.render,F=(l=w.contextType)&&o[l.__c],M=l?F?F.props.value:l.__:o,t.__c?v=(i=e.__c=t.__c).__=i.__E:(h?e.__c=i=new w(y,M):(e.__c=i=new z(y,M),i.constructor=w,i.render=pt),F&&F.sub(i),i.props=y,i.state||(i.state={}),i.context=M,i.__n=o,x=i.__d=!0,i.__h=[],i._sb=[]),h&&i.__s==null&&(i.__s=i.state),h&&w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=g({},i.__s)),g(i.__s,w.getDerivedStateFromProps(y,i.__s))),d=i.props,f=i.state,i.__v=e,x)h&&w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),h&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(h&&w.getDerivedStateFromProps==null&&y!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,M),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,M)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(i.props=y,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(E){E&&(E.__=e)}),j=0;j<i._sb.length;j++)i.__h.push(i._sb[j]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,M),h&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,f,S)})}if(i.context=M,i.props=y,i.__P=n,i.__e=!1,T=b.__r,ye=0,h){for(i.state=i.__s,i.__d=!1,T&&T(e),l=i.render(i.props,i.state,i.context),J=0;J<i._sb.length;J++)i.__h.push(i._sb[J]);i._sb=[]}else do i.__d=!1,T&&T(e),l=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ye<25);i.state=i.__s,i.getChildContext!=null&&(o=g(g({},o),i.getChildContext())),h&&!x&&i.getSnapshotBeforeUpdate!=null&&(S=i.getSnapshotBeforeUpdate(d,f)),N=l,l!=null&&l.type===A&&l.key==null&&(N=De(l.props.children)),c=Oe(n,K(N)?N:[N],e,t,o,r,a,s,c,p,u),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),v&&(i.__E=i.__=null)}catch(E){if(e.__v=null,p||a!=null)if(E.then){for(e.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(ne=a.length;ne--;)ie(a[ne]);else e.__e=t.__e,e.__k=t.__k;b.__e(E,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=ut(t.__e,e,t,o,r,a,s,p,u);return(l=b.diffed)&&l(e),128&e.__u?void 0:c}function Re(n,e,t){for(var o=0;o<t.length;o++)ce(t[o],t[++o],t[++o]);b.__c&&b.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){b.__e(a,r.__v)}})}function De(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:K(n)?n.map(De):g({},n)}function ut(n,e,t,o,r,a,s,c,p){var u,l,i,x,d,f,S,v=t.props,y=e.props,h=e.type;if(h=="svg"?r="http://www.w3.org/2000/svg":h=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((d=a[u])&&"setAttribute"in d==!!h&&(h?d.localName==h:d.nodeType==3)){n=d,a[u]=null;break}}if(n==null){if(h==null)return document.createTextNode(y);n=document.createElementNS(r,h,y.is&&y),c&&(b.__m&&b.__m(e,a),c=!1),a=null}if(h==null)v===y||c&&n.data==y||(n.data=y);else{if(a=a&&$.call(n.childNodes),v=t.props||V,!c&&a!=null)for(v={},u=0;u<n.attributes.length;u++)v[(d=n.attributes[u]).name]=d.value;for(u in v)if(d=v[u],u!="children"){if(u=="dangerouslySetInnerHTML")i=d;else if(!(u in y)){if(u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y)continue;Y(n,u,null,d,r)}}for(u in y)d=y[u],u=="children"?x=d:u=="dangerouslySetInnerHTML"?l=d:u=="value"?f=d:u=="checked"?S=d:c&&typeof d!="function"||v[u]===d||Y(n,u,d,v[u],r);if(l)c||i&&(l.__html==i.__html||l.__html==n.innerHTML)||(n.innerHTML=l.__html),e.__k=[];else if(i&&(n.innerHTML=""),Oe(e.type=="template"?n.content:n,K(x)?x:[x],e,t,o,h=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&L(t,0),c,p),a!=null)for(u=a.length;u--;)ie(a[u]);c||(u="value",h=="progress"&&f==null?n.removeAttribute("value"):f!=null&&(f!==n[u]||h=="progress"&&!f||h=="option"&&f!=v[u])&&Y(n,u,f,v[u],r),u="checked",S!=null&&S!=n[u]&&Y(n,u,S,v[u],r))}return n}function ce(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){b.__e(r,t)}}function Fe(n,e,t){var o,r;if(b.unmount&&b.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||ce(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){b.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&Fe(o[r],e,t||typeof n.type!="function");t||ie(n.__e),n.__c=n.__=n.__e=void 0}function pt(n,e,t){return this.constructor(n,t)}function Te(n,e,t){var o,r,a,s;e==document&&(e=document.documentElement),b.__&&b.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],s=[],se(e,n=(!o&&t||e).__k=m(A,null,[n]),r||V,V,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?$.call(e.childNodes):null,a,!o&&t?t:r?r.__e:e.firstChild,o,s),Re(a,n,s)}$=Ie.slice,b={__e:function(n,e,t,o){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),s=r.__d),s)return r.__E=r}catch(c){n=c}throw n}},we=0,rt=function(n){return n!=null&&n.constructor==null},z.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=g({},this.state),typeof n=="function"&&(n=n(g({},t),this.props)),n&&g(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ze(this))},z.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ze(this))},z.prototype.render=A,I=[],ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ce=function(n,e){return n.__v.__b-e.__v.__b},Q.__r=0,Me=/(PointerCapture)$|Capture$/i,ae=0,oe=_e(!1),re=_e(!0),at=0;var Ne=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Ee=`#version 300 es

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
}`;var Ve=`const int ShapeTypeNone = -5000;
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
}`;var xt=/^#include\s+\<([^\>]+)\>/gmi,k=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(xt);for(let r of o){let a=e[r[1]];a===void 0&&(console.error(`Unknown shader include ${r[1]}`),a=""),t=t.replace(r[0],a)}return t}static create(e,t,o,r){function a(){p!=null&&(e.detachShader(p,s),e.detachShader(p,c)),s!=null&&e.deleteShader(s),c!=null&&e.deleteShader(c)}let s=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(s,this.assembleShader(t,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Vertex shader compile error",u),a(),new Error(`Vertex shader compile error ${u}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",u),a(),new Error(`Fragment shader compile error ${u}`)}let p=e.createProgram();if(e.attachShader(p,s),e.attachShader(p,c),e.linkProgram(p),a(),!e.getProgramParameter(p,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(p);let u=e.getProgramInfoLog(p);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new n(p)}};var O=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function ke(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Ge(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,a=e.z,s=t.w*2,c=t.y*a-t.z*r,p=t.z*o-t.x*a,u=t.x*r-t.y*o,l=(t.y*u-t.z*p)*2,i=(t.z*c-t.x*u)*2,x=(t.x*p-t.y*c)*2;return c*=s,p*=s,u*=s,n.x=o+c+l,n.y=r+p+i,n.z=a+u+x,n}function _(){return{x:0,y:0,z:0}}function Ue(){return{x:1,y:1,z:1,w:1}}function P(){return{x:0,y:0,z:0,w:1}}function Be(n,e,t,o,r=O.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let s=Math.sin(e),c=Math.cos(e),p=Math.sin(t),u=Math.cos(t),l=Math.sin(o),i=Math.cos(o);switch(r){case"xyz":n.x=s*u*i+c*p*l,n.y=c*p*i-s*u*l,n.z=c*u*l+s*p*i,n.w=c*u*i-s*p*l;break;case"xzy":n.x=s*u*i-c*p*l,n.y=c*p*i-s*u*l,n.z=c*u*l+s*p*i,n.w=c*u*i+s*p*l;break;case"yxz":n.x=s*u*i+c*p*l,n.y=c*p*i-s*u*l,n.z=c*u*l-s*p*i,n.w=c*u*i+s*p*l;break;case"yzx":n.x=s*u*i+c*p*l,n.y=c*p*i+s*u*l,n.z=c*u*l-s*p*i,n.w=c*u*i-s*p*l;break;case"zxy":n.x=s*u*i-c*p*l,n.y=c*p*i+s*u*l,n.z=c*u*l+s*p*i,n.w=c*u*i-s*p*l;break;case"zyx":n.x=s*u*i-c*p*l,n.y=c*p*i+s*u*l,n.z=c*u*l-s*p*i,n.w=c*u*i+s*p*l;break;default:throw new Error("Unknown angle order "+r)}return this}var yt=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ue=P();function ht(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*t,s=e.y*t,c=e.y*o,p=e.z*t,u=e.z*o,l=e.z*r,i=e.w*t,x=e.w*o,d=e.w*r;return n[0]=1-c-l,n[1]=s-d,n[2]=p+x,n[3]=s+d,n[4]=1-a-l,n[5]=u-i,n[6]=p-x,n[7]=u+i,n[8]=1-a-c,n}var G=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=_();cameraTarget=_();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);constructor(e,t,o,r,a,s,c,p,u,l,i,x,d,f){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=s,this.uLights=c,this.uNumLights=p,this.uCameraPosition=u,this.uCameraMatrix=l,this.uAspectRatio=i,this.uMaxMarchingSteps=x,this.uEpsilon=d,this.uFlags=f}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){Be(ue,this.cameraRotationX,this.cameraRotationY,0);let e=Ge(_(),{x:0,y:0,z:1},ue);ke(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),ht(this.cameraMatrixArray,ue)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights());let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(yt),t.STATIC_DRAW);let r={"sdf-functions":Ve},a=k.create(t,r,Ne,Ee);t.useProgram(a.program);let s=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),p=this.getUniform(t,a,"uCameraPosition"),u=this.getUniform(t,a,"uAspectRatio"),l=this.getUniform(t,a,"uShapes"),i=this.getUniform(t,a,"uOperations"),x=this.getUniform(t,a,"uNumOperations"),d=this.getUniform(t,a,"uLights"),f=this.getUniform(t,a,"uNumLights"),S=this.getUniform(t,a,"uMaxMarchingSteps"),v=this.getUniform(t,a,"uEpsilon"),y=this.getUniform(t,a,"uFlags");return new n(t,a,o,l,i,x,d,f,p,c,u,S,v,y)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var We=fe(Xe()),ft={renderScale:1,enableRender:!1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001},le={options:ft},R=new We.default({viewports:[le]});function de(n,e){return t=>{let o=t.viewports[n]??le,r={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=r,{viewports:a}}}var Ze=n=>m("label",{style:{display:"inline-block"}},n.label,m("input",{style:{display:"block"},type:"range",...n.inputProps})),B=class extends z{render(e){let{enableRender:t,renderScale:o,enableShadows:r,enableShowMarching:a,epsilon:s,maxMarchingStep:c}=this.props.options;return m("div",{class:"viewport-options"},m("button",{onClick:this.toggleRender},t?"Stop":"Start"),m("select",{onChange:this.changeRenderScale,value:o},m("option",{value:"1"},"1x"),m("option",{value:"0.5"},"0.5x"),m("option",{value:"0.25"},"0.25x"),m("option",{value:"0.125"},"0.125x")),m("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),m("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),m(Ze,{label:`Epsilon ${s}`,inputProps:{value:s,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),m(Ze,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};toggleRender=e=>{this.updateOptions({enableRender:!this.props.options.enableRender})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),R.execute(de(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?R.execute(de(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var q=class extends z{canvasRef=Le();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=G.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){return m("div",{class:"viewport outer-panel"},m("canvas",{className:"viewport__canvas",ref:this.canvasRef}),m(B,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sdfScene),this.props.options.enableRender&&this.requestRender()};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.props.options.enableRender||this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var Ye=fe(Je());var vt=8,He=-500,zt=-600,St=-700,_t=-800,wt=-900,Qe=-5e3,gt=-6e3,Ct=-7e3,Mt=-8e3,It={none:He,union:zt,intersection:St,subtraction:_t,xor:wt},Lt={none:Qe,box:gt,sphere:Ct,hexPrism:Mt};function At(n){return Lt[n]||Qe}function Ot(n){return It[n]||He}var Pt=16,ee=class n{lights=[];lightDataArray=[];shapes=[];shapeDataArray=[];rootShape={childOpCode:"none"};operations=[];numberOperations=[];getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...this.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}updateShapesFromRootNode(){let{operations:e,shapes:t}=n.createShapesFromNode(this.rootShape);this.operations=e,this.shapes=t,console.log("Shapes",this.shapes),console.log("Operations",this.operations),this.shapeDataArray.length=0;for(let o=0;o<this.shapes.length;o++)this.updateShape(o);this.updateOperationNumbers()}static createShapesFromNode(e){let t=[],o=[];return this.pushToStack(t,o,e),t.reverse(),{operations:t,shapes:o}}static pushToStack(e,t,o){if(o.childOpCode!==void 0&&o.childOpCode!=="none"&&e.push(o.childOpCode),o.shape!==void 0){let r=t.findIndex(a=>(0,Ye.default)(a,o.shape));r<0&&(r=t.length,t.push(o.shape)),e.push(r)}if(o.children!==void 0)for(let r of o.children)this.pushToStack(e,t,r)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]={...this.createNewShape(),...t}:this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*vt,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateShape(e){let t=e*Pt,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=At(o.type),this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=o.diffuseColour.x,this.shapeDataArray[t+13]=o.diffuseColour.y,this.shapeDataArray[t+14]=o.diffuseColour.z,this.shapeDataArray[t+15]=o.diffuseColour.w}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?Ot(e):e)}createNewLight(){return{position:_(),radius:10,colour:Ue()}}createNewShape(){return{position:_(),rotation:P(),maxSize:0,type:"none",shapeParams:_(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1}}}};function Rt(n){return Object.hasOwn(n,"z")}function Dt(n){return Object.hasOwn(n,"w")}var C=class extends z{render(){let e=this.props.vector,t=Rt(e),o=Dt(e);return m("div",null,m("input",{type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x"}),m("input",{type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y"}),t&&m("input",{type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z"}),o&&m("input",{type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w"}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,a=parseFloat(r);if(!isFinite(a)){console.error("Unable to process vector field",t,r);return}this.props.onChange(o,{...o,[t]:a})}};var X=class extends z{render(){let e=this.props.shape;return m("div",null,m("div",null,m("strong",null,"Position")," ",m(C,{vector:e.position,onChange:this.onChangePosition})),m("div",null,m("strong",null,"Rotation")," ",m(C,{vector:e.rotation,onChange:this.onChangeRotation})),m("div",null,m("strong",null,"Type")," ",m("select",{value:e.type??"none",onChange:this.onChangeType},m("option",{value:"none"},"None"),m("option",{value:"box"},"Box"),m("option",{value:"sphere"},"Sphere"),m("option",{value:"hexPrism"},"Hex Prism"))),m("div",null,m("strong",null,"Shape Params")," ",m(C,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),m("div",null,m("strong",null,"Diffuse Colour")," ",m(C,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),m("div",null,m("strong",null,"Specular Colour")," ",m(C,{vector:e.specularColour,onChange:this.onChangeSpecularColour})))}onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var W=class n extends z{render(){let e=this.props.node.childOpCode??"none",t=this.props.node.children||[];return m("div",null,m("div",null,m("strong",null,"Op Code")," ",m("select",{value:e,onChange:this.onChangeOpCode},m("option",{value:"none"},"None"),m("option",{value:"union"},"Union"),m("option",{value:"intersection"},"Intersection"),m("option",{value:"subtraction"},"Subtraction"))),m("div",null,m("strong",null,"Shape")," ",m(X,{shape:this.props.node.shape,onChange:this.onChangeShape})),m("div",null,m("strong",null,"Children")," ",t.map((o,r)=>m(n,{key:r,node:o,onChange:a=>this.onChangeChild(r,a)}))))}onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeChild=(e,t)=>{let o=this.props.node.children!==void 0?[...this.props.node.children]:[];o[e]=t,this.updateField(o,"children")};updateField=(e,t)=>{let o={...this.props.node,[t]:e};this.props.onChange(o)}};var Z=class extends z{render(){return m("div",{class:"scene-graph"},m("div",{class:"scene-graph__contents outer-panel"},m(W,{node:this.props.sdfScene.rootShape,onChange:this.onChangeRootNode})))}onChangeRootNode=e=>{this.props.sdfScene.rootShape=e,this.props.sdfScene.updateShapesFromRootNode()}};var D=new ee,te=class extends z{render(){let{viewports:e}=this.props.state;return m(A,null,m("nav",{class:"navbar outer-panel"},m("button",null,"File")),m("div",{class:"main-view"},m("div",{class:"viewports"},m(q,{viewportIndex:0,options:e[0].options,sdfScene:D})),m(Z,{sdfScene:D})))}};function xe(n){return{position:_(),rotation:P(),maxSize:0,type:"none",shapeParams:_(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1},...n}}function Ft(){D.rootShape.children=[{childOpCode:"subtraction",children:[{shape:xe({type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5})},{childOpCode:"union",children:[{shape:xe({type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}})},{shape:xe({type:"box",shapeParams:{x:6,y:1,z:6},position:{x:0,y:-1.5,z:0},diffuseColour:{x:.2,y:.25,z:.3,w:1}})}]}]}],D.updateShapesFromRootNode(),D.setLight(0,{position:{x:4,y:2,z:3},colour:{x:1,y:.8,z:.6,w:1}}),D.setLight(1,{position:{x:-4,y:2,z:3},colour:{x:.2,y:1,z:.6,w:1}})}Ft();var Tt=document.getElementById("app");function $e(){Te(m(te,{state:R.state()}),Tt)}$e();R.subscribeAny($e);})();
//# sourceMappingURL=webgl-index.js.map
