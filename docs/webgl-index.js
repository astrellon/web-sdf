(()=>{var xn=Object.create;var $e=Object.defineProperty;var bn=Object.getOwnPropertyDescriptor;var gn=Object.getOwnPropertyNames;var vn=Object.getPrototypeOf,_n=Object.prototype.hasOwnProperty;var qe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var In=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of gn(e))!_n.call(n,r)&&r!==t&&$e(n,r,{get:()=>e[r],enumerable:!(o=bn(e,r))||o.enumerable});return n};var et=(n,e,t)=>(t=n!=null?xn(vn(n)):{},In(e||!n||!n.__esModule?$e(t,"default",{value:n,enumerable:!0}):t,n));var It=qe(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.EmptyModifier=void 0;var Bn=()=>null;q.EmptyModifier=Bn;var Be=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let i=e(this.currentState),a={selector:new Ee(e,i,o,r),subscription:t};return this.subscriptions.push(a),()=>{let u=this.subscriptions.indexOf(a);u>=0&&this.subscriptions.splice(u,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};q.default=Be;var Ee=class{constructor(e,t=void 0,o,r){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var fn=qe((Ya,hn)=>{"use strict";hn.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,i;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=o;r--!==0;){var a=i[r];if(!n(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}});var he,h,it,Cn,B,tt,at,st,ct,Ne,Me,Le,Sn,H={},ut=[],zn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function O(n,e){for(var t in e)n[t]=e[t];return n}function Oe(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function s(n,e,t){var o,r,i,a={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?he.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return de(n,a,o,r,null)}function de(n,e,t,o,r){var i={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++it,__i:-1,__u:0};return r==null&&h.vnode!=null&&h.vnode(i),i}function R(){return{current:null}}function S(n){return n.children}function f(n,e){this.props=n,this.context=e}function V(n,e){if(e==null)return n.__?V(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?V(n):null}function pt(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return pt(n)}}function nt(n){(!n.__d&&(n.__d=!0)&&B.push(n)&&!me.__r++||tt!=h.debounceRendering)&&((tt=h.debounceRendering)||at)(me)}function me(){for(var n,e,t,o,r,i,a,u=1;B.length;)B.length>u&&B.sort(st),n=B.shift(),u=B.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,i=[],a=[],e.__P&&((t=O({},o)).__v=o.__v+1,h.vnode&&h.vnode(t),Te(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,i,r??V(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,mt(i,t,a),t.__e!=r&&pt(t)));me.__r=0}function lt(n,e,t,o,r,i,a,u,p,l,d){var c,y,m,v,C,_,x=o&&o.__k||ut,b=e.length;for(p=wn(t,e,x,p,b),c=0;c<b;c++)(m=t.__k[c])!=null&&(y=m.__i==-1?H:x[m.__i]||H,m.__i=c,_=Te(n,m,y,r,i,a,u,p,l,d),v=m.__e,m.ref&&y.ref!=m.ref&&(y.ref&&Re(y.ref,null,m),d.push(m.ref,m.__c||v,m)),C==null&&v!=null&&(C=v),4&m.__u||y.__k===m.__k?p=dt(m,p,n):typeof m.type=="function"&&_!==void 0?p=_:v&&(p=v.nextSibling),m.__u&=-7);return t.__e=C,p}function wn(n,e,t,o,r){var i,a,u,p,l,d=t.length,c=d,y=0;for(n.__k=new Array(r),i=0;i<r;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(p=i+y,(a=n.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?de(null,a,null,null,null):J(a)?de(S,{children:a},null,null,null):a.constructor==null&&a.__b>0?de(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=n,a.__b=n.__b+1,u=null,(l=a.__i=An(a,t,p,c))!=-1&&(c--,(u=t[l])&&(u.__u|=2)),u==null||u.__v==null?(l==-1&&(r>d?y--:r<d&&y++),typeof a.type!="function"&&(a.__u|=4)):l!=p&&(l==p-1?y--:l==p+1?y++:(l>p?y--:y++,a.__u|=4))):n.__k[i]=null;if(c)for(i=0;i<d;i++)(u=t[i])!=null&&(2&u.__u)==0&&(u.__e==o&&(o=V(u)),ft(u,u));return o}function dt(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=dt(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=V(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function j(n,e){return e=e||[],n==null||typeof n=="boolean"||(J(n)?n.some(function(t){j(t,e)}):e.push(n)),e}function An(n,e,t,o){var r,i,a=n.key,u=n.type,p=e[t];if(p===null&&n.key==null||p&&a==p.key&&u==p.type&&(2&p.__u)==0)return t;if(o>(p!=null&&(2&p.__u)==0?1:0))for(r=t-1,i=t+1;r>=0||i<e.length;){if(r>=0){if((p=e[r])&&(2&p.__u)==0&&a==p.key&&u==p.type)return r;r--}if(i<e.length){if((p=e[i])&&(2&p.__u)==0&&a==p.key&&u==p.type)return i;i++}}return-1}function ot(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||zn.test(e)?t:t+"px"}function le(n,e,t,o,r){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||ot(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||ot(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(ct,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?o?t.u=o.u:(t.u=Ne,n.addEventListener(e,i?Le:Me,i)):n.removeEventListener(e,i?Le:Me,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function rt(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Ne++;else if(e.t<t.u)return;return t(h.event?h.event(e):e)}}}function Te(n,e,t,o,r,i,a,u,p,l){var d,c,y,m,v,C,_,x,b,N,A,F,G,Ke,pe,Z,Ae,M=e.type;if(e.constructor!=null)return null;128&t.__u&&(p=!!(32&t.__u),i=[u=e.__e=t.__e]),(d=h.__b)&&d(e);e:if(typeof M=="function")try{if(x=e.props,b="prototype"in M&&M.prototype.render,N=(d=M.contextType)&&o[d.__c],A=d?N?N.props.value:d.__:o,t.__c?_=(c=e.__c=t.__c).__=c.__E:(b?e.__c=c=new M(x,A):(e.__c=c=new f(x,A),c.constructor=M,c.render=Ln),N&&N.sub(c),c.props=x,c.state||(c.state={}),c.context=A,c.__n=o,y=c.__d=!0,c.__h=[],c._sb=[]),b&&c.__s==null&&(c.__s=c.state),b&&M.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=O({},c.__s)),O(c.__s,M.getDerivedStateFromProps(x,c.__s))),m=c.props,v=c.state,c.__v=e,y)b&&M.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),b&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b&&M.getDerivedStateFromProps==null&&x!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,A),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,A)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(c.props=x,c.state=c.__s,c.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(Q){Q&&(Q.__=e)}),F=0;F<c._sb.length;F++)c.__h.push(c._sb[F]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,A),b&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,v,C)})}if(c.context=A,c.props=x,c.__P=n,c.__e=!1,G=h.__r,Ke=0,b){for(c.state=c.__s,c.__d=!1,G&&G(e),d=c.render(c.props,c.state,c.context),pe=0;pe<c._sb.length;pe++)c.__h.push(c._sb[pe]);c._sb=[]}else do c.__d=!1,G&&G(e),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Ke<25);c.state=c.__s,c.getChildContext!=null&&(o=O(O({},o),c.getChildContext())),b&&!y&&c.getSnapshotBeforeUpdate!=null&&(C=c.getSnapshotBeforeUpdate(m,v)),Z=d,d!=null&&d.type===S&&d.key==null&&(Z=ht(d.props.children)),u=lt(n,J(Z)?Z:[Z],e,t,o,r,i,a,u,p,l),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),_&&(c.__E=c.__=null)}catch(Q){if(e.__v=null,p||i!=null)if(Q.then){for(e.__u|=p?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;i[i.indexOf(u)]=null,e.__e=u}else for(Ae=i.length;Ae--;)Oe(i[Ae]);else e.__e=t.__e,e.__k=t.__k;h.__e(Q,e,t)}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=Mn(t.__e,e,t,o,r,i,a,p,l);return(d=h.diffed)&&d(e),128&e.__u?void 0:u}function mt(n,e,t){for(var o=0;o<t.length;o++)Re(t[o],t[++o],t[++o]);h.__c&&h.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(i){i.call(r)})}catch(i){h.__e(i,r.__v)}})}function ht(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:J(n)?n.map(ht):O({},n)}function Mn(n,e,t,o,r,i,a,u,p){var l,d,c,y,m,v,C,_=t.props,x=e.props,b=e.type;if(b=="svg"?r="http://www.w3.org/2000/svg":b=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((m=i[l])&&"setAttribute"in m==!!b&&(b?m.localName==b:m.nodeType==3)){n=m,i[l]=null;break}}if(n==null){if(b==null)return document.createTextNode(x);n=document.createElementNS(r,b,x.is&&x),u&&(h.__m&&h.__m(e,i),u=!1),i=null}if(b==null)_===x||u&&n.data==x||(n.data=x);else{if(i=i&&he.call(n.childNodes),_=t.props||H,!u&&i!=null)for(_={},l=0;l<n.attributes.length;l++)_[(m=n.attributes[l]).name]=m.value;for(l in _)if(m=_[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=m;else if(!(l in x)){if(l=="value"&&"defaultValue"in x||l=="checked"&&"defaultChecked"in x)continue;le(n,l,null,m,r)}}for(l in x)m=x[l],l=="children"?y=m:l=="dangerouslySetInnerHTML"?d=m:l=="value"?v=m:l=="checked"?C=m:u&&typeof m!="function"||_[l]===m||le(n,l,m,_[l],r);if(d)u||c&&(d.__html==c.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(c&&(n.innerHTML=""),lt(e.type=="template"?n.content:n,J(y)?y:[y],e,t,o,b=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:t.__k&&V(t,0),u,p),i!=null)for(l=i.length;l--;)Oe(i[l]);u||(l="value",b=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[l]||b=="progress"&&!v||b=="option"&&v!=_[l])&&le(n,l,v,_[l],r),l="checked",C!=null&&C!=n[l]&&le(n,l,C,_[l],r))}return n}function Re(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){h.__e(r,t)}}function ft(n,e,t){var o,r;if(h.unmount&&h.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||Re(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){h.__e(i,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&ft(o[r],e,t||typeof n.type!="function");t||Oe(n.__e),n.__c=n.__=n.__e=void 0}function Ln(n,e,t){return this.constructor(n,t)}function Y(n,e,t){var o,r,i,a;e==document&&(e=document.documentElement),h.__&&h.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,i=[],a=[],Te(e,n=(!o&&t||e).__k=s(S,null,[n]),r||H,H,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?he.call(e.childNodes):null,i,!o&&t?t:r?r.__e:e.firstChild,o,a),mt(i,n,a)}he=ut.slice,h={__e:function(n,e,t,o){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),a=r.__d),a)return r.__E=r}catch(u){n=u}throw n}},it=0,Cn=function(n){return n!=null&&n.constructor==null},f.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=O({},this.state),typeof n=="function"&&(n=n(O({},t),this.props)),n&&O(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),nt(this))},f.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),nt(this))},f.prototype.render=S,B=[],at=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,st=function(n,e){return n.__v.__b-e.__v.__b},me.__r=0,ct=/(PointerCapture)$|Capture$/i,Ne=0,Me=rt(!1),Le=rt(!0),Sn=0;var yt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var xt=`#version 300 es

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
`;var bt=`const int ShapeTypeNone = -5000;
const int ShapeTypeBox = -5010;
const int ShapeTypeSphere = -5020;
const int ShapeTypeHexPrism = -5030;
const int ShapeTypeTorus = -5040;
const int ShapeTypeOctahedron = -5050;

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

vec2 opUnion(vec2 d1, vec2 d2)
{
    return d1.x < d2.x ? d1 : d2;
    // return min(d1, d2);
}

vec2 opSubtraction(vec2 d1, vec2 d2)
{
    return -d1.x > d2.x ? vec2(-d1.x, d1.y) : d2;
    // return max(-d1, d2);
}

vec2 opIntersection(vec2 d1, vec2 d2)
{
    return d1.x > d2.x ? d1 : d2;
    // return max(d1, d2);
}

vec2 applyOpCode(int opCode, vec2 dist1, vec2 dist2)
{
    switch (opCode)
    {
        case SdfOpCodeUnion: return opUnion(dist1, dist2);
        case SdfOpCodeIntersection: return opIntersection(dist1, dist2);
        case SdfOpCodeSubtraction: return opSubtraction(dist1, dist2);
    }

    return vec2(100.0, -1);
}

float getDistToType(int type, vec3 point, vec3 params)
{
    switch (type)
    {
        case ShapeTypeBox: return sdfBox(point, params);
        case ShapeTypeSphere: return sdfSphere(point, params.x);
        case ShapeTypeHexPrism: return sdfHexPrism(point, params.xy);
        case ShapeTypeTorus: return sdfTorus(point, params.xy);
        case ShapeTypeOctahedron: return sdfOctahedron(point, params.x);
    }

    return 100.0;
}`;var Rn=/^#include\s+\<([^\>]+)\>/gmi,K=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Rn);for(let r of o){let i=e[r[1]];i===void 0&&(console.error(`Unknown shader include ${r[1]}`),i=""),t=t.replace(r[0],i)}return t}static create(e,t,o,r){function i(){p!=null&&(e.detachShader(p,a),e.detachShader(p,u)),a!=null&&e.deleteShader(a),u!=null&&e.deleteShader(u)}let a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,this.assembleShader(t,o)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",l),i(),new Error(`Vertex shader compile error ${l}`)}let u=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(u,this.assembleShader(t,r)),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(u);throw console.error("Fragment shader compile error",l),i(),new Error(`Fragment shader compile error ${l}`)}let p=e.createProgram();if(e.attachShader(p,a),e.attachShader(p,u),e.linkProgram(p),i(),!e.getProgramParameter(p,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(p);let l=e.getProgramInfoLog(p);throw console.error("Shader link error",l),new Error(`Shader link error ${l}`)}return new n(p)}};var P=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function gt(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Dn(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z;return Math.sqrt(t**2+o**2+r**2)}function vt(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,i=e.z,a=t.w*2,u=t.y*i-t.z*r,p=t.z*o-t.x*i,l=t.x*r-t.y*o,d=(t.y*l-t.z*p)*2,c=(t.z*u-t.x*l)*2,y=(t.x*p-t.y*u)*2;return u*=a,p*=a,l*=a,n.x=o+u+d,n.y=r+p+c,n.z=i+l+y,n}function z(){return{x:0,y:0,z:0}}function De(){return{x:1,y:1,z:1}}function Fe(n,e,t=1e-4){return Dn(n,e)<t}function fe(){return{x:1,y:1,z:1,w:1}}function D(){return{x:0,y:0,z:0,w:1}}function _t(n,e,t,o,r=P.ANGLE_ORDER){let i=Math.PI/360;e*=i,o*=i,t*=i;let a=Math.sin(e),u=Math.cos(e),p=Math.sin(t),l=Math.cos(t),d=Math.sin(o),c=Math.cos(o);switch(r){case"xyz":n.x=a*l*c+u*p*d,n.y=u*p*c-a*l*d,n.z=u*l*d+a*p*c,n.w=u*l*c-a*p*d;break;case"xzy":n.x=a*l*c-u*p*d,n.y=u*p*c-a*l*d,n.z=u*l*d+a*p*c,n.w=u*l*c+a*p*d;break;case"yxz":n.x=a*l*c+u*p*d,n.y=u*p*c-a*l*d,n.z=u*l*d-a*p*c,n.w=u*l*c+a*p*d;break;case"yzx":n.x=a*l*c+u*p*d,n.y=u*p*c+a*l*d,n.z=u*l*d-a*p*c,n.w=u*l*c-a*p*d;break;case"zxy":n.x=a*l*c-u*p*d,n.y=u*p*c+a*l*d,n.z=u*l*d+a*p*c,n.w=u*l*c-a*p*d;break;case"zyx":n.x=a*l*c-u*p*d,n.y=u*p*c+a*l*d,n.z=u*l*d-a*p*c,n.w=u*l*c+a*p*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Fn=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Ge=D();function Gn(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,i=e.x*t,a=e.y*t,u=e.y*o,p=e.z*t,l=e.z*o,d=e.z*r,c=e.w*t,y=e.w*o,m=e.w*r;return n[0]=1-u-d,n[1]=a-m,n[2]=p+y,n[3]=a+m,n[4]=1-i-d,n[5]=l-c,n[6]=p-y,n[7]=l+c,n[8]=1-i-u,n}var $=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uHighlight;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uNoise;noiseTexture;gizmos;cameraPosition=z();cameraTarget=z();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixForSdfArray=new Float32Array(9);prevShapes;prevOperations;prevHighlights;prevMaterials;prevLights;constructor(e,t,o,r,i,a,u,p,l,d,c,y,m,v,C,_,x,b,N){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=i,this.uNumOperations=a,this.uHighlight=u,this.uMaterials=d,this.uLights=p,this.uNumLights=l,this.uCameraPosition=c,this.uCameraMatrix=y,this.uAspectRatio=m,this.uMaxMarchingSteps=v,this.uEpsilon=C,this.uFlags=_,this.uNoise=x,this.noiseTexture=b,this.gizmos=N}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){_t(Ge,this.cameraRotationX,this.cameraRotationY,0);let e=vt(z(),{x:0,y:0,z:1},Ge);gt(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Gn(this.cameraMatrixForSdfArray,Ge)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let i=o/r;this.gl.uniform1f(this.uAspectRatio,i)};render(e){if(this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){console.info("Rendering new operations");let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.prevOperations=e.getOperations()}if(this.prevHighlights!==e.getHighlights()){let t=e.getHighlights();console.info("Rendering new highlight",t,"ops",this.prevOperations),this.gl.uniform2iv(this.uHighlight,t),this.prevHighlights=t}this.prevShapes!==e.getShapes()&&(console.info("Rendering new shapes"),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Fn),t.STATIC_DRAW);let r={"sdf-functions":bt},i=K.create(t,r,yt,xt);t.useProgram(i.program);let a=this.getAttribute(t,i,"aPosition");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let u=this.getUniform(t,i,"uCameraMatrix"),p=this.getUniform(t,i,"uCameraPosition"),l=this.getUniform(t,i,"uAspectRatio"),d=this.getUniform(t,i,"uShapes"),c=this.getUniform(t,i,"uOperations"),y=this.getUniform(t,i,"uNumOperations"),m=this.getUniform(t,i,"uHighlight"),v=this.getUniform(t,i,"uMaterials"),C=this.getUniform(t,i,"uLights"),_=this.getUniform(t,i,"uNumLights"),x=this.getUniform(t,i,"uMaxMarchingSteps"),b=this.getUniform(t,i,"uEpsilon"),N=this.getUniform(t,i,"uFlags"),A=this.getUniform(t,i,"uNoise"),F=t.createTexture(),G=this.createNoiseCanvas();return t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,F),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,256,256,0,t.RGBA,t.UNSIGNED_BYTE,G.canvas),this.checkError(t),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.uniform1i(A,0),this.checkError(t),new n(t,i,o,d,c,y,m,C,_,v,p,u,l,x,b,N,A,F,null)}static checkError(e){let t=e.getError();t!=e.NO_ERROR&&console.error(`GL Error: ${this.getErrorMessage(t,e)}`)}static getErrorMessage(e,t){return e===t.INVALID_ENUM?"Invalid enum":e===t.INVALID_VALUE?"Invalid value":e===t.INVALID_OPERATION?"Invalid operation":e===t.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":e===t.OUT_OF_MEMORY?"Out of memory":e===t.CONTEXT_LOST_WEBGL?"Context lost WebGL":e===t.NO_ERROR?"No error":`Unknown error ${e}`}static createNoiseCanvas(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillRect(0,0,255,255);let o=new Uint8ClampedArray(256*4);for(let r=0;r<256;r++){for(let a=0;a<256*4;a++)o[a]=Math.floor(Math.random()*256);let i=new ImageData(o,256,1);t.putImageData(i,0,r)}return t}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);return r==null,r}};var Ct=et(It()),En={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,epsilon:1e-4,pixelated:!1},Ue={options:En},g=new Ct.default({viewports:[Ue],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1}});var Xe=-500,St=-600,zt=-700,wt=-800,At=-900,ye=-5e3,Mt=-5010,Lt=-5020,Nt=-5030,Ot=-5040,Tt=-5050,ke=0,Ve=1,Rt=2;function xe(){return crypto.randomUUID()}function Dt(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Ft(n){let e=n.nodes[n.rootNodeId];if(!e)return[];let t=new Array(Object.keys(n.nodes).length);return Xt(e,n.nodes,0,0,t),t}function Pe(n){return{colour:fe(),radius:10,...n}}function Gt(n,e){return{name:n,id:xe(),position:z(),rotation:D(),childrenIds:[],childOpCode:"none",shape:Ze({}),hasShape:!1,light:Pe({}),hasLight:!1,...e}}function We(n,e,t,o){return{name:n,id:xe(),position:t??z(),rotation:o??D(),childrenIds:[],childOpCode:"none",shape:Ze({}),hasShape:!1,light:e!=null?Pe(e):void 0,hasLight:e!=null}}function W(n,e,t,o,r){return{name:n,id:xe(),position:t??z(),rotation:o??D(),shape:e!=null?Ze(e):void 0,hasShape:e!=null,light:Pe({}),hasLight:!1,childrenIds:[],childOpCode:r??"none"}}function Ze(n){return{maxSize:0,type:"none",shapeParams:z(),diffuseColour:{x:.7,y:.3,z:.2},specularColour:{x:1,y:.8,z:.9},lightingModel:"lambert",shininess:10,...n}}function E(n,e){n.childrenIds.push(e.id),e.parentId=n.id}function Bt(n,e,t){e={...e,childrenIds:[...e.childrenIds,t.id]},t={...t,parentId:e.id};let o={...n.nodes,[e.id]:e,[t.id]:t};return{...n,nodes:o}}function Et(n,e){if(e.parentId===void 0)return n;let t=n.nodes[e.parentId],o=t.childrenIds.findIndex(r=>r===e.id);if(o>=0){let r=[...t.childrenIds];r.splice(o,1),t={...t,childrenIds:r};let i={...n.nodes,[t.id]:t};return delete i[e.id],{...n,nodes:i}}return n}function Ut(n,e,t){if(t.parentId==null)return n;let o=n.nodes[t.parentId],r=o.childrenIds.findIndex(a=>a===t.id);if(r>=0){let a=[...o.childrenIds];a.splice(r,1),o={...o,childrenIds:a}}e.childrenIds.includes(t.id)||(e={...e,childrenIds:[...e.childrenIds,t.id]}),t={...t,parentId:e.id};let i={...n.nodes,[o.id]:o,[e.id]:e,[t.id]:t};return{...n,nodes:i}}function Xt(n,e,t,o,r){if(r[o]={node:n,depth:t},n.childrenIds!=null)for(let i of n.childrenIds){let a=e[i];a&&(o=Xt(a,e,t+1,o+1,r))}return o}function Qe(n,e){return t=>{let o=t.viewports[n]??Ue,r={...o,options:{...o.options,...e}},i=[...t.viewports];return i[n]=r,{viewports:i}}}function be(n){return e=>({reparentModal:{...e.reparentModal,...n}})}function ge(n){return e=>({rawSceneModal:{...e.rawSceneModal,...n}})}function kt(n){return e=>({sceneTree:Dt(e.sceneTree,n)})}function T(n){return()=>({sceneTree:n})}function Vt(n){return e=>{let t;if(n){for(let o of Object.values(e.sceneTree.nodes))if(o.childrenIds.includes(n)){t=o.id;break}}return{selectedNodeId:n,selectedParentNodeId:t}}}var Pt,L,He,Wt;var $t=[],I=h,Zt=I.__b,Qt=I.__r,Ht=I.diffed,Jt=I.__c,jt=I.unmount,Yt=I.__;function Un(){for(var n;n=$t.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(ve),n.__H.__h.forEach(Je),n.__H.__h=[]}catch(e){n.__H.__h=[],I.__e(e,n.__v)}}I.__b=function(n){L=null,Zt&&Zt(n)},I.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Yt&&Yt(n,e)},I.__r=function(n){Qt&&Qt(n),Pt=0;var e=(L=n.__c).__H;e&&(He===L?(e.__h=[],L.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(ve),e.__h.forEach(Je),e.__h=[],Pt=0)),He=L},I.diffed=function(n){Ht&&Ht(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&($t.push(e)!==1&&Wt===I.requestAnimationFrame||((Wt=I.requestAnimationFrame)||Xn)(Un)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),He=L=null},I.__c=function(n,e){e.some(function(t){try{t.__h.forEach(ve),t.__h=t.__h.filter(function(o){return!o.__||Je(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],I.__e(o,t.__v)}}),Jt&&Jt(n,e)},I.unmount=function(n){jt&&jt(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{ve(o)}catch(r){e=r}}),t.__H=void 0,e&&I.__e(e,t.__v))};var Kt=typeof requestAnimationFrame=="function";function Xn(n){var e,t=function(){clearTimeout(o),Kt&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,35);Kt&&(e=requestAnimationFrame(t))}function ve(n){var e=L,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),L=e}function Je(n){var e=L;n.__c=n.__(),L=e}function Vn(n,e){for(var t in e)n[t]=e[t];return n}function qt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function en(n,e){this.props=n,this.context=e}(en.prototype=new f).isPureReactComponent=!0,en.prototype.shouldComponentUpdate=function(n,e){return qt(this.props,n)||qt(this.state,e)};var tn=h.__b;h.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),tn&&tn(n)};var Hr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Pn=h.__e;h.__e=function(n,e,t,o){if(n.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Pn(n,e,t,o)};var nn=h.unmount;function un(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=Vn({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return un(o,e,t)})),n}function pn(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return pn(o,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function je(){this.__u=0,this.o=null,this.__b=null}function ln(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function _e(){this.i=null,this.l=null}h.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),nn&&nn(n)},(je.prototype=new f).__c=function(n,e){var t=e.__c,o=this;o.o==null&&(o.o=[]),o.o.push(t);var r=ln(o.__v),i=!1,a=function(){i||(i=!0,t.__R=null,r?r(u):u())};t.__R=a;var u=function(){if(!--o.__u){if(o.state.__a){var p=o.state.__a;o.__v.__k[0]=pn(p,p.__c.__P,p.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.o.pop();)l.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(a,a)},je.prototype.componentWillUnmount=function(){this.o=[]},je.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=un(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__a&&s(S,null,n.fallback);return r&&(r.__u&=-33),[s(S,null,e.__a?null:n.children),r]};var on=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};function Wn(n){return this.getChildContext=function(){return n.context},n.children}function Zn(n){var e=this,t=n.h;if(e.componentWillUnmount=function(){Y(null,e.v),e.v=null,e.h=null},e.h&&e.h!==t&&e.componentWillUnmount(),!e.v){for(var o=e.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;e.h=t,e.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},insertBefore:function(r,i){this.childNodes.push(r),e.h.insertBefore(r,i)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.h.removeChild(r)}}}Y(s(Wn,{context:e.context},n.__v),e.v)}function Ie(n,e){var t=s(Zn,{__v:n,h:e});return t.containerInfo=e,t}(_e.prototype=new f).__a=function(n){var e=this,t=ln(e.__v),o=e.l.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),on(e,n,o)):r()};t?t(i):i()}},_e.prototype.render=function(n){this.i=null,this.l=new Map;var e=j(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},_e.prototype.componentDidUpdate=_e.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){on(n,t,e)})};var Qn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Hn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Jn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,jn=/[A-Z0-9]/g,Yn=typeof document<"u",Kn=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(f.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var rn=h.event;function $n(){}function qn(){return this.cancelBubble}function eo(){return this.defaultPrevented}h.event=function(n){return rn&&(n=rn(n)),n.persist=$n,n.isPropagationStopped=qn,n.isDefaultPrevented=eo,n.nativeEvent=n};var dn,to={enumerable:!1,configurable:!0,get:function(){return this.class}},an=h.vnode;h.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,o=e.type,r={},i=o.indexOf("-")===-1;for(var a in t){var u=t[a];if(!(a==="value"&&"defaultValue"in t&&u==null||Yn&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var p=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&u===!0?u="":p==="translate"&&u==="no"?u=!1:p[0]==="o"&&p[1]==="n"?p==="ondoubleclick"?a="ondblclick":p!=="onchange"||o!=="input"&&o!=="textarea"||Kn(t.type)?p==="onfocus"?a="onfocusin":p==="onblur"?a="onfocusout":Jn.test(a)&&(a=p):p=a="oninput":i&&Hn.test(a)?a=a.replace(jn,"-$&").toLowerCase():u===null&&(u=void 0),p==="oninput"&&r[a=p]&&(a="oninputCapture"),r[a]=u}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=j(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=j(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",to)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(n),n.$$typeof=Qn,an&&an(n)};var sn=h.__r;h.__r=function(n){sn&&sn(n),dn=n.__c};var cn=h.diffed;h.diffed=function(n){cn&&cn(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),dn=null};var ee=class extends f{buttonRef=R();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:t,text:o,children:r}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let u=this.buttonRef.current.getBoundingClientRect();a={left:u.left+"px",top:u.top+u.height+"px"}}return s(S,null,s("button",{...t,ref:this.buttonRef,onClick:this.toggleMenu},o),i&&Ie(s("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},s("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},r)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var mn=n=>s("label",{style:{display:"inline-block"}},n.label,s("input",{style:{display:"block"},type:"range",...n.inputProps})),te=class extends f{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:i,epsilon:a,maxMarchingStep:u}=this.props.options;return s("div",{class:"viewport-options"},s(ee,{text:"Menu"},s("div",{class:"control-group-vertical"},s("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),s("select",{onChange:this.changeRenderScale,value:o},s("option",{value:"2"},"2x"),s("option",{value:"1.5"},"1.5x"),s("option",{value:"1"},"1x"),s("option",{value:"0.5"},"0.5x"),s("option",{value:"0.25"},"0.25x"),s("option",{value:"0.125"},"0.125x")),s("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),s("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),s("button",{onClick:this.showRawScene},"JSON Scene")),s(mn,{label:`Epsilon ${a}`,inputProps:{value:a,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),s(mn,{label:`Marching Steps ${u}`,inputProps:{value:u,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}})))}showRawScene=()=>{g.execute(ge({show:!0}))};changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),g.execute(Qe(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?g.execute(Qe(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var Ce=class extends f{canvasRef=R();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=$.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),s("div",{class:"viewport outer-panel"},s("canvas",{className:e,ref:this.canvasRef}),s(te,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function no(n){return Object.hasOwn(n,"z")}function oo(n){return Object.hasOwn(n,"w")}var w=class extends f{render(){let e=this.props.vector,t=this.props.disabled,o=no(e),r=oo(e);return s("div",{class:"vector control-group"},s("input",{class:"input",disabled:t,type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),s("input",{class:"input",disabled:t,type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),o&&s("input",{class:"input",disabled:t,type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),r&&s("input",{class:"input",disabled:t,type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,i=parseFloat(r);if(!isFinite(i)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,i),this.props.onChange(o,{...o,[t]:i})}};var ne=class extends f{render(){let e=this.props.shape,t=e.lightingModel==="phong";return s("div",null,s("div",null,s("strong",null,"Type")," ",s("select",{value:e.type??"none",onChange:this.onChangeType},s("option",{value:"none"},"None"),s("option",{value:"box"},"Box"),s("option",{value:"sphere"},"Sphere"),s("option",{value:"hexPrism"},"Hex Prism"),s("option",{value:"torus"},"Torus"),s("option",{value:"octahedron"},"Octahedron"))),s("div",null,s("strong",null,"Shape Params")," ",s(w,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),s("div",null,s("strong",null,"Lighting Model")," ",s("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},s("option",{value:"unlit"},"Unlit"),s("option",{value:"lambert"},"Lambert"),s("option",{value:"phong"},"Phong"))),s("div",null,s("strong",null,"Diffuse Colour")," ",s(w,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),s("div",null,s("strong",null,"Specular Colour")," ",s(w,{disabled:!t,vector:e.specularColour,onChange:this.onChangeSpecularColour})),s("div",null,s("strong",null,"Shininess")," ",s("input",{class:"input",disabled:!t,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeLightingModel=e=>{let t=e.target.value;this.updateField(t,"lightingModel")};onChangeShininess=e=>{let t=parseFloat(e.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var oe=class extends f{render(){let e=this.props.light;return e===void 0?s("div",null,"Empty Light"):s("div",null,s("div",null,s("strong",null,"Colour")," ",s(w,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var re=class extends f{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:t}=this.props;if(e==null)return s("div",{class:"scene-node-view"},"No node selected");let o=e.parentId!=null?t.nodes[e.parentId]:void 0,r=e.childOpCode??"none";return s("div",{class:"scene-node-view"},s("div",null,s("strong",null,"Name")," ",s("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),s("div",null,s("strong",null,"Position")," ",s(w,{vector:e.position,onChange:this.onChangePosition})),s("div",null,s("strong",null,"Rotation")," ",s(w,{vector:e.rotation,onChange:this.onChangeRotation})),s("div",null,s("strong",null,"Op Code")," ",s("select",{value:r,onChange:this.onChangeOpCode},s("option",{value:"none"},"None"),s("option",{value:"union"},"Union"),s("option",{value:"intersection"},"Intersection"),s("option",{value:"subtraction"},"Subtraction"))),s("div",null,s("strong",null,"Shape")," ",s("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&s(ne,{shape:e.shape,onChange:this.onChangeShape})),s("div",null,s("strong",null,"Light")," ",s("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&s(oe,{light:e.light,onChange:this.onChangeLight})),s("div",null,s("strong",null,"Children")),s("div",{class:"control-group"},s("button",{onClick:this.addChild},"Add"),o!=null&&s(S,null,s("button",{onClick:this.deleteSelf},"Delete"),s("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Bt(this.props.sceneTree,this.props.node,Gt("New Child",{}));g.execute(T(e))};deleteSelf=()=>{let e=Et(this.props.sceneTree,this.props.node);g.execute(T(e))};reparent=()=>{let{node:e,sceneTree:t}=this.props;if((e.parentId!=null?t.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}g.execute(be({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};function Ye(n,e,t){return(t==null||t===!0)&&(n+=" "+e),n}var ie=class extends f{render(){let{depth:e,node:t,isSelected:o,disable:r}=this.props,i=Ye(Ye("scene-node-tree-item","is-selected",o),"is-disabled",r===!0);return s("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var U=class extends f{render(){return s("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],i=[];if(r==null)return i;let a=Ft(e);for(let u of a){let p=u.node.id===t;i.push(s(ie,{isSelected:p,depth:u.depth,key:u.node.id,node:u.node,onClicked:o}))}return i}};var ae=class extends f{render(){let{sceneTree:e,selectedNodeId:t}=this.props,o=e.nodes[t];return s("div",{class:"scene-tree"},s("div",{class:"scene-tree__contents outer-panel"},s("div",{class:"inner-panel"},s(U,{sceneTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),s("div",{class:"inner-panel scene-tree__nodes"},s(re,{sceneTree:e,node:o,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{g.execute(Vt(e.id))};onChangeSelectedNode=(e,t)=>{g.execute(kt(e))}};var X=class extends f{render(){let{show:e,onRequestClose:t}=this.props;if(e===!1)return null;let o=this.props.portalContainer??"modals",r=document.getElementById(o),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return Ie(s("div",{class:"modal-backdrop",onPointerDown:t},s("div",{class:a,onPointerDown:this.preventClose},this.props.children)),r)}preventClose=e=>{e.stopImmediatePropagation()}};var se=class extends f{render(){let{show:e,sceneTree:t,disabledNodeIds:o,onRequestClose:r}=this.props;return s(X,{show:e,onRequestClose:r},s(U,{sceneTree:t,disabledNodeId:o,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var ce=class extends f{render(){let{show:e}=this.props.state,t=this.getDisabledNodeIds();return s(se,{show:e,disabledNodeIds:t,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{g.execute(be({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:t}=this.props.state;if(!e)return[];let{sceneTree:o}=this.props,r=o.nodes[t];return[r.id,r.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let t=this.props.sceneTree.nodes[this.props.state.childNodeId],o=Ut(this.props.sceneTree,e,t);g.execute(T(o))}};var ue=class extends f{prevSceneTree=void 0;preRef=R();render(){let{show:e}=this.props.state,{sceneTree:t}=this.props,o="";return e&&this.prevSceneTree!==t&&(o=JSON.stringify(t,null,2)),s(X,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},s("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},s("pre",null,o)),s("span",{class:"control-group"},s("button",{onClick:this.loadFromHtml},"Load From Json"),s("label",{class:"button"},"Load From File",s("input",{type:"file",onChange:this.loadFromFile})),s("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{g.execute(ge({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="scene.json",t.click(),URL.revokeObjectURL(t.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let o=new FileReader;o.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let t=e.target;typeof t.result=="string"?this.loadFromText(t.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let t=JSON.parse(e);t!=null&&g.execute(T(t))}};var Se=class extends f{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:t,sceneTree:o,selectedNodeId:r,reparentModal:i,rawSceneModal:a}=this.props.state;return console.log("App render",this.props.state),s(S,null,s("div",{class:"main-view"},s("div",{class:"viewports"},s(Ce,{viewportIndex:0,options:t[0].options,sceneConverter:e})),s(ae,{sceneTree:o,selectedNodeId:r})),s(ce,{state:i,sceneTree:o}),s(ue,{state:a,sceneTree:o}))}};var k=et(fn());var ro=8,io=16,ao=8,so={none:Xe,union:St,intersection:zt,subtraction:wt,xor:At},co={none:ye,box:Mt,sphere:Lt,hexPrism:Nt,torus:Ot,octahedron:Tt},uo={unlit:ke,lambert:Ve,phong:Rt};function po(n){return co[n]||ye}function lo(n){return so[n]||Xe}function mo(n){return uo[n]||ke}var ze=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];highlight=[];operations=[];numberOperations=[];highlightedId=void 0;previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setHighlight(e){this.highlightedId=e}getHighlights(){return this.highlight}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,shapes:r,lights:i,materials:a,highlight:u}=n.createShapesFromNode(e,this.highlightedId);if((0,k.default)(this.highlight,u)||(this.highlight=u,console.log("Highlight",this.highlight),this.updateHighlighted()),(0,k.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),!(0,k.default)(this.shapes,r)){console.log("Shapes",this.shapes),this.shapes=r,this.shapeDataArray.length=0;for(let p=0;p<this.shapes.length;p++)this.updateShape(p)}if(!(0,k.default)(this.lights,i)){this.lights=i,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let p=0;p<this.lights.length;p++)this.updateLight(p)}if(!(0,k.default)(this.materials,a)){this.materials=a,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let p=0;p<this.materials.length;p++)this.updateMaterial(p)}}static createShapesFromNode(e,t){let o=e.nodes[e.rootNodeId];if(!o)return;let r=[],i=[],a=[],u=[],p=[];if(this.pushToStack(r,i,a,u,p,t,o,e.nodes),r.reverse(),p.length>0){let l=p[1]-p[0];p[0]=r.length-p[0]-1,p[1]=p[0]+l}return{operations:r,shapes:i,lights:a,materials:u,highlight:p}}static pushToStack(e,t,o,r,i,a,u,p){if(u.childOpCode!=="none"){let l=!0;for(let d=0;d<u.childrenIds.length;d++){let c=p[u.childrenIds[d]];(c.hasShape||c.childOpCode!=="none")&&(l?l=!1:e.push(u.childOpCode))}}if(u.hasShape){let l=t.findIndex(d=>(0,k.default)(d,u.shape));if(l<0){l=t.length;let d=n.convertToShape(u,r);d!=null&&t.push(d)}u.id===a&&i.push(e.length,e.length+1),e.push(l)}if(u.hasLight){let l=n.convertToLight(u);l!=null&&o.push(l)}for(let l of u.childrenIds)this.pushToStack(e,t,o,r,i,a,p[l],p)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*ro,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*ao,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.lightingModel,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.shininess}updateShape(e){let t=e*io,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateHighlighted(){this.highlight.length<2&&(this.highlight=[-1,0])}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?lo(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r={diffuseColour:o.diffuseColour,lightingModel:mo(o.lightingModel),specularColour:o.specularColour,shininess:o.shininess},i=this.findApproxMaterial(r,t);return i<0&&(i=t.length,t.push(r)),{material:i,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:po(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:De(),lightingModel:Ve,specularColour:De(),shininess:10}}static createNewLight(){return{position:z(),radius:10,colour:fe()}}static createNewShape(e){return{position:z(),rotation:D(),maxSize:0,shapeType:ye,shapeParams:z(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(!(r.lightingModel!==e.lightingModel||Math.abs(r.shininess-e.shininess)<1e-4)&&Fe(r.diffuseColour,e.diffuseColour)&&Fe(r.specularColour,e.specularColour))return o}return-1}};var we=new ze;g.subscribe(n=>n.sceneTree,ho);g.subscribe(n=>n.selectedNodeId,fo);function ho(n){we.updateShapesFromTree(n.sceneTree)}function fo(n){we.setHighlight(n.selectedNodeId),we.updateShapesFromTree(n.sceneTree)}var yo=document.getElementById("app");function yn(){Y(s(Se,{state:g.state(),sceneConverter:we}),yo)}yn();g.subscribeAny(yn);function xo(...n){let e={};for(let t of n)e[t.id]=t;return e}function bo(){let n=W("Root",null,void 0,void 0,"subtraction"),e=W("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5,diffuseColour:{x:.5,y:.5,z:.5}}),t=W("Box & Sphere",void 0,void 0,void 0,"union");E(n,e),E(n,t);let o=W("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3},lightingModel:"lambert"},{x:0,y:-1.5,z:0}),r=W("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.2,z:.9},lightingModel:"phong"});E(t,o),E(t,r);let i=We("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),a=We("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});E(n,i),E(n,a);let p={nodes:xo(n,e,t,o,r,i,a),rootNodeId:n.id};g.execute(T(p))}bo();})();
//# sourceMappingURL=webgl-index.js.map
