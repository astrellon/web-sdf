(()=>{var dn=Object.create;var Je=Object.defineProperty;var mn=Object.getOwnPropertyDescriptor;var hn=Object.getOwnPropertyNames;var fn=Object.getPrototypeOf,yn=Object.prototype.hasOwnProperty;var je=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var xn=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of hn(e))!yn.call(n,r)&&r!==t&&Je(n,r,{get:()=>e[r],enumerable:!(o=mn(e,r))||o.enumerable});return n};var Qe=(n,e,t)=>(t=n!=null?dn(fn(n)):{},xn(e||!n||!n.__esModule?Je(t,"default",{value:n,enumerable:!0}):t,n));var xt=je($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.EmptyModifier=void 0;var Tn=()=>null;$.EmptyModifier=Tn;var Te=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let i=e(this.currentState),a={selector:new De(e,i,o,r),subscription:t};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};$.default=Te;var De=class{constructor(e,t=void 0,o,r){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var un=je((Ia,cn)=>{"use strict";cn.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,i;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=o;r--!==0;){var a=i[r];if(!n(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}});var le,h,et,bn,D,Ye,tt,nt,ot,Ie,ze,Ce,vn,W={},rt=[],_n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H=Array.isArray;function A(n,e){for(var t in e)n[t]=e[t];return n}function we(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function u(n,e,t){var o,r,i,a={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?le.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return ue(n,a,o,r,null)}function ue(n,e,t,o,r){var i={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++et,__i:-1,__u:0};return r==null&&h.vnode!=null&&h.vnode(i),i}function de(){return{current:null}}function I(n){return n.children}function f(n,e){this.props=n,this.context=e}function E(n,e){if(e==null)return n.__?E(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?E(n):null}function it(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return it(n)}}function $e(n){(!n.__d&&(n.__d=!0)&&D.push(n)&&!pe.__r++||Ye!=h.debounceRendering)&&((Ye=h.debounceRendering)||tt)(pe)}function pe(){for(var n,e,t,o,r,i,a,s=1;D.length;)D.length>s&&D.sort(nt),n=D.shift(),s=D.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,i=[],a=[],e.__P&&((t=A({},o)).__v=o.__v+1,h.vnode&&h.vnode(t),Me(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,i,r??E(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,ct(i,t,a),t.__e!=r&&it(t)));pe.__r=0}function at(n,e,t,o,r,i,a,s,p,l,d){var c,y,m,v,z,_,x=o&&o.__k||rt,b=e.length;for(p=gn(t,e,x,p,b),c=0;c<b;c++)(m=t.__k[c])!=null&&(y=m.__i==-1?W:x[m.__i]||W,m.__i=c,_=Me(n,m,y,r,i,a,s,p,l,d),v=m.__e,m.ref&&y.ref!=m.ref&&(y.ref&&Le(y.ref,null,m),d.push(m.ref,m.__c||v,m)),z==null&&v!=null&&(z=v),4&m.__u||y.__k===m.__k?p=st(m,p,n):typeof m.type=="function"&&_!==void 0?p=_:v&&(p=v.nextSibling),m.__u&=-7);return t.__e=z,p}function gn(n,e,t,o,r){var i,a,s,p,l,d=t.length,c=d,y=0;for(n.__k=new Array(r),i=0;i<r;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(p=i+y,(a=n.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?ue(null,a,null,null,null):H(a)?ue(I,{children:a},null,null,null):a.constructor==null&&a.__b>0?ue(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=n,a.__b=n.__b+1,s=null,(l=a.__i=Sn(a,t,p,c))!=-1&&(c--,(s=t[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(r>d?y--:r<d&&y++),typeof a.type!="function"&&(a.__u|=4)):l!=p&&(l==p-1?y--:l==p+1?y++:(l>p?y--:y++,a.__u|=4))):n.__k[i]=null;if(c)for(i=0;i<d;i++)(s=t[i])!=null&&(2&s.__u)==0&&(s.__e==o&&(o=E(s)),pt(s,s));return o}function st(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=st(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=E(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function J(n,e){return e=e||[],n==null||typeof n=="boolean"||(H(n)?n.some(function(t){J(t,e)}):e.push(n)),e}function Sn(n,e,t,o){var r,i,a=n.key,s=n.type,p=e[t];if(p===null&&n.key==null||p&&a==p.key&&s==p.type&&(2&p.__u)==0)return t;if(o>(p!=null&&(2&p.__u)==0?1:0))for(r=t-1,i=t+1;r>=0||i<e.length;){if(r>=0){if((p=e[r])&&(2&p.__u)==0&&a==p.key&&s==p.type)return r;r--}if(i<e.length){if((p=e[i])&&(2&p.__u)==0&&a==p.key&&s==p.type)return i;i++}}return-1}function Ke(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||_n.test(e)?t:t+"px"}function ce(n,e,t,o,r){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||Ke(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||Ke(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(ot,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?o?t.u=o.u:(t.u=Ie,n.addEventListener(e,i?Ce:ze,i)):n.removeEventListener(e,i?Ce:ze,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function qe(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Ie++;else if(e.t<t.u)return;return t(h.event?h.event(e):e)}}}function Me(n,e,t,o,r,i,a,s,p,l){var d,c,y,m,v,z,_,x,b,T,N,ae,B,He,se,X,Se,M=e.type;if(e.constructor!=null)return null;128&t.__u&&(p=!!(32&t.__u),i=[s=e.__e=t.__e]),(d=h.__b)&&d(e);e:if(typeof M=="function")try{if(x=e.props,b="prototype"in M&&M.prototype.render,T=(d=M.contextType)&&o[d.__c],N=d?T?T.props.value:d.__:o,t.__c?_=(c=e.__c=t.__c).__=c.__E:(b?e.__c=c=new M(x,N):(e.__c=c=new f(x,N),c.constructor=M,c.render=Cn),T&&T.sub(c),c.props=x,c.state||(c.state={}),c.context=N,c.__n=o,y=c.__d=!0,c.__h=[],c._sb=[]),b&&c.__s==null&&(c.__s=c.state),b&&M.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=A({},c.__s)),A(c.__s,M.getDerivedStateFromProps(x,c.__s))),m=c.props,v=c.state,c.__v=e,y)b&&M.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),b&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b&&M.getDerivedStateFromProps==null&&x!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,N),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,N)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(c.props=x,c.state=c.__s,c.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(Z){Z&&(Z.__=e)}),ae=0;ae<c._sb.length;ae++)c.__h.push(c._sb[ae]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,N),b&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,v,z)})}if(c.context=N,c.props=x,c.__P=n,c.__e=!1,B=h.__r,He=0,b){for(c.state=c.__s,c.__d=!1,B&&B(e),d=c.render(c.props,c.state,c.context),se=0;se<c._sb.length;se++)c.__h.push(c._sb[se]);c._sb=[]}else do c.__d=!1,B&&B(e),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++He<25);c.state=c.__s,c.getChildContext!=null&&(o=A(A({},o),c.getChildContext())),b&&!y&&c.getSnapshotBeforeUpdate!=null&&(z=c.getSnapshotBeforeUpdate(m,v)),X=d,d!=null&&d.type===I&&d.key==null&&(X=ut(d.props.children)),s=at(n,H(X)?X:[X],e,t,o,r,i,a,s,p,l),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),_&&(c.__E=c.__=null)}catch(Z){if(e.__v=null,p||i!=null)if(Z.then){for(e.__u|=p?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else for(Se=i.length;Se--;)we(i[Se]);else e.__e=t.__e,e.__k=t.__k;h.__e(Z,e,t)}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):s=e.__e=zn(t.__e,e,t,o,r,i,a,p,l);return(d=h.diffed)&&d(e),128&e.__u?void 0:s}function ct(n,e,t){for(var o=0;o<t.length;o++)Le(t[o],t[++o],t[++o]);h.__c&&h.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(i){i.call(r)})}catch(i){h.__e(i,r.__v)}})}function ut(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:H(n)?n.map(ut):A({},n)}function zn(n,e,t,o,r,i,a,s,p){var l,d,c,y,m,v,z,_=t.props,x=e.props,b=e.type;if(b=="svg"?r="http://www.w3.org/2000/svg":b=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((m=i[l])&&"setAttribute"in m==!!b&&(b?m.localName==b:m.nodeType==3)){n=m,i[l]=null;break}}if(n==null){if(b==null)return document.createTextNode(x);n=document.createElementNS(r,b,x.is&&x),s&&(h.__m&&h.__m(e,i),s=!1),i=null}if(b==null)_===x||s&&n.data==x||(n.data=x);else{if(i=i&&le.call(n.childNodes),_=t.props||W,!s&&i!=null)for(_={},l=0;l<n.attributes.length;l++)_[(m=n.attributes[l]).name]=m.value;for(l in _)if(m=_[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=m;else if(!(l in x)){if(l=="value"&&"defaultValue"in x||l=="checked"&&"defaultChecked"in x)continue;ce(n,l,null,m,r)}}for(l in x)m=x[l],l=="children"?y=m:l=="dangerouslySetInnerHTML"?d=m:l=="value"?v=m:l=="checked"?z=m:s&&typeof m!="function"||_[l]===m||ce(n,l,m,_[l],r);if(d)s||c&&(d.__html==c.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(c&&(n.innerHTML=""),at(e.type=="template"?n.content:n,H(y)?y:[y],e,t,o,b=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:t.__k&&E(t,0),s,p),i!=null)for(l=i.length;l--;)we(i[l]);s||(l="value",b=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[l]||b=="progress"&&!v||b=="option"&&v!=_[l])&&ce(n,l,v,_[l],r),l="checked",z!=null&&z!=n[l]&&ce(n,l,z,_[l],r))}return n}function Le(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){h.__e(r,t)}}function pt(n,e,t){var o,r;if(h.unmount&&h.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||Le(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){h.__e(i,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&pt(o[r],e,t||typeof n.type!="function");t||we(n.__e),n.__c=n.__=n.__e=void 0}function Cn(n,e,t){return this.constructor(n,t)}function j(n,e,t){var o,r,i,a;e==document&&(e=document.documentElement),h.__&&h.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,i=[],a=[],Me(e,n=(!o&&t||e).__k=u(I,null,[n]),r||W,W,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?le.call(e.childNodes):null,i,!o&&t?t:r?r.__e:e.firstChild,o,a),ct(i,n,a)}le=rt.slice,h={__e:function(n,e,t,o){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),a=r.__d),a)return r.__E=r}catch(s){n=s}throw n}},et=0,bn=function(n){return n!=null&&n.constructor==null},f.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=A({},this.state),typeof n=="function"&&(n=n(A({},t),this.props)),n&&A(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),$e(this))},f.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),$e(this))},f.prototype.render=I,D=[],tt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nt=function(n,e){return n.__v.__b-e.__v.__b},pe.__r=0,ot=/(PointerCapture)$|Capture$/i,Ie=0,ze=qe(!1),Ce=qe(!0),vn=0;var lt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var dt=`#version 300 es

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
 * p: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongContribForLight(vec3 currentDepth, vec3 diffuse, vec3 specular, float shininess, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity)
{
    vec3 N = estimateNormalPhong(p, currentDepth);

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

        vec3 lightContrib = phongContribForLight(currentDepth, diffuse, specular, shininess, worldPoint, cameraPoint, lightPos, light[1].xyz);
        colour += lightContrib * shadow.x;
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
 * p: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 */
vec3 lambertContribForLight(vec3 currentDepth, vec3 diffuse, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity)
{
    vec3 N = estimateNormalTetrahedron(p, currentDepth);

    vec3 L = normalize(lightPos - p);
    vec3 V = normalize(eye - p);
    vec3 R = normalize(reflect(-L, N));

    float dotLN = dot(L, N);

    if (dotLN < 0.0) {
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

        vec3 lightContrib = lambertContribForLight(currentDepth, diffuse, worldPoint, cameraPoint, lightPos, light[1].xyz);
        colour += lightContrib * shadow.x;
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
    float r = dist.z / float(uMaxMarchingSteps);
    return smoothstep(0.75, 0.85, r);
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
        fragColour = vec4(0, 0, highlightDist, highlightDist);
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

        fragColour = vec4(litColour.xyz, 1.0);
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);

        float highlightDist = getHighlightDist(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
        fragColour = vec4(r, g, highlightDist, 1);
    }
}`;var mt=`const int ShapeTypeNone = -5000;
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
    }

    return 100.0;
}`;var Ln=/^#include\s+\<([^\>]+)\>/gmi,Q=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Ln);for(let r of o){let i=e[r[1]];i===void 0&&(console.error(`Unknown shader include ${r[1]}`),i=""),t=t.replace(r[0],i)}return t}static create(e,t,o,r){function i(){p!=null&&(e.detachShader(p,a),e.detachShader(p,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}let a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,this.assembleShader(t,o)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",l),i(),new Error(`Vertex shader compile error ${l}`)}let s=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(s,this.assembleShader(t,r)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",l),i(),new Error(`Fragment shader compile error ${l}`)}let p=e.createProgram();if(e.attachShader(p,a),e.attachShader(p,s),e.linkProgram(p),i(),!e.getProgramParameter(p,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(p);let l=e.getProgramInfoLog(p);throw console.error("Shader link error",l),new Error(`Shader link error ${l}`)}return new n(p)}};var V=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function ht(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function An(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z;return Math.sqrt(t**2+o**2+r**2)}function ft(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,i=e.z,a=t.w*2,s=t.y*i-t.z*r,p=t.z*o-t.x*i,l=t.x*r-t.y*o,d=(t.y*l-t.z*p)*2,c=(t.z*s-t.x*l)*2,y=(t.x*p-t.y*s)*2;return s*=a,p*=a,l*=a,n.x=o+s+d,n.y=r+p+c,n.z=i+l+y,n}function C(){return{x:0,y:0,z:0}}function Ae(){return{x:1,y:1,z:1}}function Ne(n,e,t=1e-4){return An(n,e)<t}function me(){return{x:1,y:1,z:1,w:1}}function O(){return{x:0,y:0,z:0,w:1}}function yt(n,e,t,o,r=V.ANGLE_ORDER){let i=Math.PI/360;e*=i,o*=i,t*=i;let a=Math.sin(e),s=Math.cos(e),p=Math.sin(t),l=Math.cos(t),d=Math.sin(o),c=Math.cos(o);switch(r){case"xyz":n.x=a*l*c+s*p*d,n.y=s*p*c-a*l*d,n.z=s*l*d+a*p*c,n.w=s*l*c-a*p*d;break;case"xzy":n.x=a*l*c-s*p*d,n.y=s*p*c-a*l*d,n.z=s*l*d+a*p*c,n.w=s*l*c+a*p*d;break;case"yxz":n.x=a*l*c+s*p*d,n.y=s*p*c-a*l*d,n.z=s*l*d-a*p*c,n.w=s*l*c+a*p*d;break;case"yzx":n.x=a*l*c+s*p*d,n.y=s*p*c+a*l*d,n.z=s*l*d-a*p*c,n.w=s*l*c-a*p*d;break;case"zxy":n.x=a*l*c-s*p*d,n.y=s*p*c+a*l*d,n.z=s*l*d+a*p*c,n.w=s*l*c-a*p*d;break;case"zyx":n.x=a*l*c-s*p*d,n.y=s*p*c+a*l*d,n.z=s*l*d-a*p*c,n.w=s*l*c+a*p*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Nn=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Oe=O();function On(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,i=e.x*t,a=e.y*t,s=e.y*o,p=e.z*t,l=e.z*o,d=e.z*r,c=e.w*t,y=e.w*o,m=e.w*r;return n[0]=1-s-d,n[1]=a-m,n[2]=p+y,n[3]=a+m,n[4]=1-i-d,n[5]=l-c,n[6]=p-y,n[7]=l+c,n[8]=1-i-s,n}var Y=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uHighlight;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=C();cameraTarget=C();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);prevShapes;prevOperations;prevMaterials;prevLights;constructor(e,t,o,r,i,a,s,p,l,d,c,y,m,v,z,_){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=i,this.uNumOperations=a,this.uHighlight=s,this.uMaterials=d,this.uLights=p,this.uNumLights=l,this.uCameraPosition=c,this.uCameraMatrix=y,this.uAspectRatio=m,this.uMaxMarchingSteps=v,this.uEpsilon=z,this.uFlags=_}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){yt(Oe,this.cameraRotationX,this.cameraRotationY,0);let e=ft(C(),{x:0,y:0,z:1},Oe);ht(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),On(this.cameraMatrixArray,Oe)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let i=o/r;this.gl.uniform1f(this.uAspectRatio,i)};render(e){if(this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){console.info("Rendering new operations");let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniform2iv(this.uHighlight,[0,1]),this.prevOperations=e.getOperations()}this.prevShapes!==e.getShapes()&&(console.info("Rendering new shapes"),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Nn),t.STATIC_DRAW);let r={"sdf-functions":mt},i=Q.create(t,r,lt,dt);t.useProgram(i.program);let a=this.getAttribute(t,i,"aPosition");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let s=this.getUniform(t,i,"uCameraMatrix"),p=this.getUniform(t,i,"uCameraPosition"),l=this.getUniform(t,i,"uAspectRatio"),d=this.getUniform(t,i,"uShapes"),c=this.getUniform(t,i,"uOperations"),y=this.getUniform(t,i,"uNumOperations"),m=this.getUniform(t,i,"uHighlight"),v=this.getUniform(t,i,"uMaterials"),z=this.getUniform(t,i,"uLights"),_=this.getUniform(t,i,"uNumLights"),x=this.getUniform(t,i,"uMaxMarchingSteps"),b=this.getUniform(t,i,"uEpsilon"),T=this.getUniform(t,i,"uFlags");return new n(t,i,o,d,c,y,m,z,_,v,p,s,l,x,b,T)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var bt=Qe(xt()),Dn={renderScale:1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001,pixelated:!1},Re={options:Dn},g=new bt.default({viewports:[Re],sceneTree:{nodes:{}},reparentModal:{show:!1}});var Fe=-500,vt=-600,_t=-700,gt=-800,St=-900,he=-5e3,zt=-6e3,Ct=-7e3,It=-8e3,ke=0,Pe=1,wt=2;function fe(){return crypto.randomUUID()}function Mt(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Lt(n){let e=n.nodes[n.rootNodeId];if(!e)return[];let t=new Array(Object.keys(n.nodes).length);return Dt(e,n.nodes,0,0,t),t}function Ee(n){return{colour:me(),radius:10,...n}}function At(n,e){return{name:n,id:fe(),position:C(),rotation:O(),childrenIds:[],childOpCode:"none",shape:Ge({}),hasShape:!1,light:Ee({}),hasLight:!1,...e}}function Ve(n,e,t,o){return{name:n,id:fe(),position:t??C(),rotation:o??O(),childrenIds:[],childOpCode:"none",shape:Ge({}),hasShape:!1,light:e!=null?Ee(e):void 0,hasLight:e!=null}}function G(n,e,t,o,r){return{name:n,id:fe(),position:t??C(),rotation:o??O(),shape:e!=null?Ge(e):void 0,hasShape:e!=null,light:Ee({}),hasLight:!1,childrenIds:[],childOpCode:r??"none"}}function Ge(n){return{maxSize:0,type:"none",shapeParams:C(),diffuseColour:{x:.7,y:.3,z:.2},specularColour:{x:1,y:.8,z:.9},lightingModel:"lambert",shininess:10,...n}}function R(n,e){n.childrenIds.push(e.id),e.parentId=n.id}function Nt(n,e,t){e={...e,childrenIds:[...e.childrenIds,t.id]},t={...t,parentId:e.id};let o={...n.nodes,[e.id]:e,[t.id]:t};return{...n,nodes:o}}function Ot(n,e){if(e.parentId===void 0)return n;let t=n.nodes[e.parentId],o=t.childrenIds.findIndex(r=>r===e.id);if(o>=0){let r=[...t.childrenIds];r.splice(o,1),t={...t,childrenIds:r};let i={...n.nodes,[t.id]:t};return delete i[e.id],{...n,nodes:i}}return n}function Tt(n,e,t){if(t.parentId==null)return n;let o=n.nodes[t.parentId],r=o.childrenIds.findIndex(a=>a===t.id);if(r>=0){let a=[...o.childrenIds];a.splice(r,1),o={...o,childrenIds:a}}e.childrenIds.includes(t.id)||(e={...e,childrenIds:[...e.childrenIds,t.id]});let i={...n.nodes,[o.id]:o,[e.id]:e};return{...n,nodes:i}}function Dt(n,e,t,o,r){if(r[o]={node:n,depth:t},n.childrenIds!=null)for(let i of n.childrenIds){let a=e[i];a&&(o=Dt(a,e,t+1,o+1,r))}return o}function Ue(n,e){return t=>{let o=t.viewports[n]??Re,r={...o,options:{...o.options,...e}},i=[...t.viewports];return i[n]=r,{viewports:i}}}function ye(n){return e=>({reparentModal:{...e.reparentModal,...n}})}function Rt(n){return e=>({sceneTree:Mt(e.sceneTree,n)})}function F(n){return()=>({sceneTree:n})}function Ft(n){return e=>{let t;if(n){for(let o of Object.values(e.sceneTree.nodes))if(o.childrenIds.includes(n)){t=o.id;break}}return{selectedNodeId:n,selectedParentNodeId:t}}}var kt=n=>u("label",{style:{display:"inline-block"}},n.label,u("input",{style:{display:"block"},type:"range",...n.inputProps})),K=class extends f{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:i,epsilon:a,maxMarchingStep:s}=this.props.options;return u("div",{class:"viewport-options"},u("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),u("select",{onChange:this.changeRenderScale,value:o},u("option",{value:"2"},"2x"),u("option",{value:"1.5"},"1.5x"),u("option",{value:"1"},"1x"),u("option",{value:"0.5"},"0.5x"),u("option",{value:"0.25"},"0.25x"),u("option",{value:"0.125"},"0.125x")),u("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),u("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),u(kt,{label:`Epsilon ${a}`,inputProps:{value:a,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),u(kt,{label:`Marching Steps ${s}`,inputProps:{value:s,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),g.execute(Ue(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?g.execute(Ue(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var xe=class extends f{canvasRef=de();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=Y.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),u("div",{class:"viewport outer-panel"},u("canvas",{className:e,ref:this.canvasRef}),u(K,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function Rn(n){return Object.hasOwn(n,"z")}function Fn(n){return Object.hasOwn(n,"w")}var w=class extends f{render(){let e=this.props.vector,t=this.props.disabled,o=Rn(e),r=Fn(e);return u("div",{class:"vector"},u("input",{disabled:t,type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),u("input",{disabled:t,type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),o&&u("input",{disabled:t,type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),r&&u("input",{disabled:t,type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,i=parseFloat(r);if(!isFinite(i)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,i),this.props.onChange(o,{...o,[t]:i})}};var q=class extends f{render(){let e=this.props.shape,t=e.lightingModel==="phong";return u("div",null,u("div",null,u("strong",null,"Type")," ",u("select",{value:e.type??"none",onChange:this.onChangeType},u("option",{value:"none"},"None"),u("option",{value:"box"},"Box"),u("option",{value:"sphere"},"Sphere"),u("option",{value:"hexPrism"},"Hex Prism"))),u("div",null,u("strong",null,"Shape Params")," ",u(w,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),u("div",null,u("strong",null,"Lighting Model")," ",u("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},u("option",{value:"unlit"},"Unlit"),u("option",{value:"lambert"},"Lambert"),u("option",{value:"phong"},"Phong"))),u("div",null,u("strong",null,"Diffuse Colour")," ",u(w,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),u("div",null,u("strong",null,"Specular Colour")," ",u(w,{disabled:!t,vector:e.specularColour,onChange:this.onChangeSpecularColour})),u("div",null,u("strong",null,"Shininess")," ",u("input",{disabled:!t,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeLightingModel=e=>{let t=e.target.value;this.updateField(t,"lightingModel")};onChangeShininess=e=>{let t=parseFloat(e.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var ee=class extends f{render(){let e=this.props.light;return e===void 0?u("div",null,"Empty Light"):u("div",null,u("div",null,u("strong",null,"Colour")," ",u(w,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var te=class extends f{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:t}=this.props;if(e==null)return u("div",{class:"scene-node-view"},"No node selected");let o=e.parentId!=null?t.nodes[e.parentId]:void 0,r=e.childOpCode??"none";return u("div",{class:"scene-node-view"},u("div",null,u("strong",null,"Name")," ",u("input",{type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),u("div",null,u("strong",null,"Position")," ",u(w,{vector:e.position,onChange:this.onChangePosition})),u("div",null,u("strong",null,"Rotation")," ",u(w,{vector:e.rotation,onChange:this.onChangeRotation})),u("div",null,u("strong",null,"Op Code")," ",u("select",{value:r,onChange:this.onChangeOpCode},u("option",{value:"none"},"None"),u("option",{value:"union"},"Union"),u("option",{value:"intersection"},"Intersection"),u("option",{value:"subtraction"},"Subtraction"))),u("div",null,u("strong",null,"Shape")," ",u("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&u(q,{shape:e.shape,onChange:this.onChangeShape})),u("div",null,u("strong",null,"Light")," ",u("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&u(ee,{light:e.light,onChange:this.onChangeLight})),u("div",null,u("button",{onClick:this.addChild},"Add Child"),o!=null&&u(I,null,u("button",{onClick:this.reparent},"Re-parent"),u("button",{onClick:this.deleteSelf},"Delete Self"))))}addChild=()=>{let e=Nt(this.props.sceneTree,this.props.node,At("New Child",{}));g.execute(F(e))};deleteSelf=()=>{let e=Ot(this.props.sceneTree,this.props.node);g.execute(F(e))};reparent=()=>{let{node:e,sceneTree:t}=this.props;if((e.parentId!=null?t.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}g.execute(ye({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};function Be(n,e,t){return(t==null||t===!0)&&(n+=" "+e),n}var ne=class extends f{render(){let{depth:e,node:t,isSelected:o,disable:r}=this.props,i=Be(Be("scene-node-tree-item","is-selected",o),"is-disabled",r===!0);return u("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var k=class extends f{render(){return u("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],i=[];if(r==null)return i;let a=Lt(e);for(let s of a){let p=s.node.id===t;i.push(u(ne,{isSelected:p,depth:s.depth,key:s.node.id,node:s.node,onClicked:o}))}return i}};var oe=class extends f{render(){let{sceneTree:e,selectedNodeId:t}=this.props,o=e.nodes[t];return u("div",{class:"scene-tree"},u("div",{class:"scene-tree__contents outer-panel"},u("div",{class:"inner-panel"},u(k,{sceneTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),u("div",{class:"inner-panel scene-tree__nodes"},u(te,{sceneTree:e,node:o,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{g.execute(Ft(e.id))};onChangeSelectedNode=(e,t)=>{g.execute(Rt(e))}};var Pt,L,Xe,Et;var Ht=[],S=h,Vt=S.__b,Gt=S.__r,Ut=S.diffed,Bt=S.__c,Xt=S.unmount,Zt=S.__;function kn(){for(var n;n=Ht.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(be),n.__H.__h.forEach(Ze),n.__H.__h=[]}catch(e){n.__H.__h=[],S.__e(e,n.__v)}}S.__b=function(n){L=null,Vt&&Vt(n)},S.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Zt&&Zt(n,e)},S.__r=function(n){Gt&&Gt(n),Pt=0;var e=(L=n.__c).__H;e&&(Xe===L?(e.__h=[],L.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(be),e.__h.forEach(Ze),e.__h=[],Pt=0)),Xe=L},S.diffed=function(n){Ut&&Ut(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ht.push(e)!==1&&Et===S.requestAnimationFrame||((Et=S.requestAnimationFrame)||Pn)(kn)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Xe=L=null},S.__c=function(n,e){e.some(function(t){try{t.__h.forEach(be),t.__h=t.__h.filter(function(o){return!o.__||Ze(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],S.__e(o,t.__v)}}),Bt&&Bt(n,e)},S.unmount=function(n){Xt&&Xt(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{be(o)}catch(r){e=r}}),t.__H=void 0,e&&S.__e(e,t.__v))};var Wt=typeof requestAnimationFrame=="function";function Pn(n){var e,t=function(){clearTimeout(o),Wt&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,35);Wt&&(e=requestAnimationFrame(t))}function be(n){var e=L,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),L=e}function Ze(n){var e=L;n.__c=n.__(),L=e}function Vn(n,e){for(var t in e)n[t]=e[t];return n}function Jt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function jt(n,e){this.props=n,this.context=e}(jt.prototype=new f).isPureReactComponent=!0,jt.prototype.shouldComponentUpdate=function(n,e){return Jt(this.props,n)||Jt(this.state,e)};var Qt=h.__b;h.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Qt&&Qt(n)};var ji=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Gn=h.__e;h.__e=function(n,e,t,o){if(n.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Gn(n,e,t,o)};var Yt=h.unmount;function nn(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=Vn({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return nn(o,e,t)})),n}function on(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return on(o,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function We(){this.__u=0,this.o=null,this.__b=null}function rn(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function ve(){this.i=null,this.l=null}h.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),Yt&&Yt(n)},(We.prototype=new f).__c=function(n,e){var t=e.__c,o=this;o.o==null&&(o.o=[]),o.o.push(t);var r=rn(o.__v),i=!1,a=function(){i||(i=!0,t.__R=null,r?r(s):s())};t.__R=a;var s=function(){if(!--o.__u){if(o.state.__a){var p=o.state.__a;o.__v.__k[0]=on(p,p.__c.__P,p.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.o.pop();)l.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(a,a)},We.prototype.componentWillUnmount=function(){this.o=[]},We.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=nn(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__a&&u(I,null,n.fallback);return r&&(r.__u&=-33),[u(I,null,e.__a?null:n.children),r]};var $t=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};function Un(n){return this.getChildContext=function(){return n.context},n.children}function Bn(n){var e=this,t=n.h;if(e.componentWillUnmount=function(){j(null,e.v),e.v=null,e.h=null},e.h&&e.h!==t&&e.componentWillUnmount(),!e.v){for(var o=e.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;e.h=t,e.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},insertBefore:function(r,i){this.childNodes.push(r),e.h.insertBefore(r,i)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.h.removeChild(r)}}}j(u(Un,{context:e.context},n.__v),e.v)}function an(n,e){var t=u(Bn,{__v:n,h:e});return t.containerInfo=e,t}(ve.prototype=new f).__a=function(n){var e=this,t=rn(e.__v),o=e.l.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),$t(e,n,o)):r()};t?t(i):i()}},ve.prototype.render=function(n){this.i=null,this.l=new Map;var e=J(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},ve.prototype.componentDidUpdate=ve.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){$t(n,t,e)})};var Xn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Zn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Wn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Hn=/[A-Z0-9]/g,Jn=typeof document<"u",jn=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(f.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var Kt=h.event;function Qn(){}function Yn(){return this.cancelBubble}function $n(){return this.defaultPrevented}h.event=function(n){return Kt&&(n=Kt(n)),n.persist=Qn,n.isPropagationStopped=Yn,n.isDefaultPrevented=$n,n.nativeEvent=n};var sn,Kn={enumerable:!1,configurable:!0,get:function(){return this.class}},qt=h.vnode;h.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,o=e.type,r={},i=o.indexOf("-")===-1;for(var a in t){var s=t[a];if(!(a==="value"&&"defaultValue"in t&&s==null||Jn&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var p=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&s===!0?s="":p==="translate"&&s==="no"?s=!1:p[0]==="o"&&p[1]==="n"?p==="ondoubleclick"?a="ondblclick":p!=="onchange"||o!=="input"&&o!=="textarea"||jn(t.type)?p==="onfocus"?a="onfocusin":p==="onblur"?a="onfocusout":Wn.test(a)&&(a=p):p=a="oninput":i&&Zn.test(a)?a=a.replace(Hn,"-$&").toLowerCase():s===null&&(s=void 0),p==="oninput"&&r[a=p]&&(a="oninputCapture"),r[a]=s}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=J(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=J(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",Kn)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(n),n.$$typeof=Xn,qt&&qt(n)};var en=h.__r;h.__r=function(n){en&&en(n),sn=n.__c};var tn=h.diffed;h.diffed=function(n){tn&&tn(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),sn=null};var P=class n extends f{static currentNumModals={};static prevNumModals={};render(){let{show:e,onRequestClose:t}=this.props;if(e===!1)return null;let o=this.props.portalContainer??"modals",r=n.getModalEl(o);return an(u("div",{class:"modal-backdrop",onClick:t},u("div",{class:"modal-body outer-panel"},this.props.children)),r)}static afterRender(){let e,t;for(let o in this.currentNumModals){let r=this.currentNumModals[o],i=this.prevNumModals[o]||0;r===0&&i>0?(e===void 0&&(e=[]),e.push(o)):r>0&&i===0&&(t===void 0&&(t=[]),t.push(o))}for(let o in this.prevNumModals)this.currentNumModals.hasOwnProperty(o)||(e===void 0&&(e=[]),e.push(o));if(this.prevNumModals=this.currentNumModals,this.currentNumModals={},e!=null)for(let o of e){let r=document.getElementById(o);r.style.display="none"}if(t!=null)for(let o of t){let r=document.getElementById(o);r.style.display="block"}}static getModalEl(e){let t=document.getElementById(e),o=this.currentNumModals[e]||0;return this.currentNumModals[e]=o+1,t}};var re=class extends f{render(){let{show:e,sceneTree:t,disabledNodeIds:o,onRequestClose:r}=this.props;return u(P,{show:e,onRequestClose:r},u(k,{sceneTree:t,disabledNodeId:o,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var ie=class extends f{render(){let{show:e}=this.props.state,t=this.getDisabledNodeIds();return u(re,{show:e,disabledNodeIds:t,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{g.execute(ye({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:t}=this.props.state;if(!e)return[];let{sceneTree:o}=this.props,r=o.nodes[t];return[r.id,r.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let t=this.props.sceneTree.nodes[this.props.state.childNodeId],o=Tt(this.props.sceneTree,e,t);g.execute(F(o))}};var _e=class extends f{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:t,sceneTree:o,selectedNodeId:r,reparentModal:i}=this.props.state;return console.log("App render",this.props.state),u(I,null,u("div",{class:"main-view"},u("div",{class:"viewports"},u(xe,{viewportIndex:0,options:t[0].options,sceneConverter:e})),u(oe,{sceneTree:o,selectedNodeId:r})),u(ie,{state:i,sceneTree:o}))}};var U=Qe(un());var qn=8,eo=16,to=8,no={none:Fe,union:vt,intersection:_t,subtraction:gt,xor:St},oo={none:he,box:zt,sphere:Ct,hexPrism:It},ro={unlit:ke,lambert:Pe,phong:wt};function io(n){return oo[n]||he}function ao(n){return no[n]||Fe}function so(n){return ro[n]||ke}var ge=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,shapes:r,lights:i,materials:a}=n.createShapesFromNode(e);if((0,U.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),!(0,U.default)(this.shapes,r)){console.log("Shapes",this.shapes),this.shapes=r,this.shapeDataArray.length=0;for(let s=0;s<this.shapes.length;s++)this.updateShape(s)}if(!(0,U.default)(this.lights,i)){this.lights=i,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,U.default)(this.materials,a)){this.materials=a,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}}static createShapesFromNode(e){let t=e.nodes[e.rootNodeId];if(!t)return;let o=[],r=[],i=[],a=[];return this.pushToStack(o,r,i,a,t,e.nodes),o.reverse(),{operations:o,shapes:r,lights:i,materials:a}}static pushToStack(e,t,o,r,i,a){if(i.childOpCode!=="none"){let s=!0;for(let p=0;p<i.childrenIds.length;p++){let l=a[i.childrenIds[p]];(l.hasShape||l.childOpCode!=="none")&&(s?s=!1:e.push(i.childOpCode))}}if(i.hasShape){let s=t.findIndex(p=>(0,U.default)(p,i.shape));if(s<0){s=t.length;let p=n.convertToShape(i,r);p!=null&&t.push(p)}e.push(s)}if(i.hasLight){let s=n.convertToLight(i);s!=null&&o.push(s)}for(let s of i.childrenIds)this.pushToStack(e,t,o,r,a[s],a)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*qn,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*to,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.lightingModel,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.shininess}updateShape(e){let t=e*eo,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?ao(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r={diffuseColour:o.diffuseColour,lightingModel:so(o.lightingModel),specularColour:o.specularColour,shininess:o.shininess},i=this.findApproxMaterial(r,t);return i<0&&(i=t.length,t.push(r)),{material:i,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:io(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:Ae(),lightingModel:Pe,specularColour:Ae(),shininess:10}}static createNewLight(){return{position:C(),radius:10,colour:me()}}static createNewShape(e){return{position:C(),rotation:O(),maxSize:0,shapeType:he,shapeParams:C(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(!(r.lightingModel!==e.lightingModel||Math.abs(r.shininess-e.shininess)<1e-4)&&Ne(r.diffuseColour,e.diffuseColour)&&Ne(r.specularColour,e.specularColour))return o}return-1}};var pn=new ge;g.subscribe(n=>n.sceneTree,co);function co(n){pn.updateShapesFromTree(n.sceneTree)}var uo=document.getElementById("app");function ln(){j(u(_e,{state:g.state(),sceneConverter:pn}),uo),P.afterRender()}ln();g.subscribeAny(ln);function po(...n){let e={};for(let t of n)e[t.id]=t;return e}function lo(){let n=G("Root",null,void 0,void 0,"subtraction"),e=G("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5,diffuseColour:{x:.5,y:.5,z:.5}}),t=G("Box & Sphere",void 0,void 0,void 0,"union");R(n,e),R(n,t);let o=G("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3},lightingModel:"lambert"},{x:0,y:-1.5,z:0}),r=G("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.2,z:.9},lightingModel:"phong"});R(t,o),R(t,r);let i=Ve("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),a=Ve("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});R(n,i),R(n,a);let p={nodes:po(n,e,t,o,r,i,a),rootNodeId:n.id};g.execute(F(p))}lo();})();
//# sourceMappingURL=webgl-index.js.map
