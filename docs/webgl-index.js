(()=>{var fn=Object.create;var Ke=Object.defineProperty;var xn=Object.getOwnPropertyDescriptor;var yn=Object.getOwnPropertyNames;var bn=Object.getPrototypeOf,gn=Object.prototype.hasOwnProperty;var $e=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var vn=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of yn(e))!gn.call(n,r)&&r!==t&&Ke(n,r,{get:()=>e[r],enumerable:!(o=xn(e,r))||o.enumerable});return n};var qe=(n,e,t)=>(t=n!=null?fn(bn(n)):{},vn(e||!n||!n.__esModule?Ke(t,"default",{value:n,enumerable:!0}):t,n));var _t=$e($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.EmptyModifier=void 0;var Fn=()=>null;$.EmptyModifier=Fn;var Ge=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let i=e(this.currentState),a={selector:new Be(e,i,o,r),subscription:t};return this.subscriptions.push(a),()=>{let c=this.subscriptions.indexOf(a);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};$.default=Ge;var Be=class{constructor(e,t=void 0,o,r){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var dn=$e((Ja,ln)=>{"use strict";ln.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,i;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=o;r--!==0;){var a=i[r];if(!n(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}});var he,h,rt,_n,F,et,it,at,st,Le,Ae,Me,In,Q={},ct=[],Cn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function L(n,e){for(var t in e)n[t]=e[t];return n}function Ne(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function s(n,e,t){var o,r,i,a={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?he.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return de(n,a,o,r,null)}function de(n,e,t,o,r){var i={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++rt,__i:-1,__u:0};return r==null&&h.vnode!=null&&h.vnode(i),i}function T(){return{current:null}}function S(n){return n.children}function f(n,e){this.props=n,this.context=e}function V(n,e){if(e==null)return n.__?V(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?V(n):null}function ut(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return ut(n)}}function tt(n){(!n.__d&&(n.__d=!0)&&F.push(n)&&!me.__r++||et!=h.debounceRendering)&&((et=h.debounceRendering)||it)(me)}function me(){for(var n,e,t,o,r,i,a,c=1;F.length;)F.length>c&&F.sort(at),n=F.shift(),c=F.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,i=[],a=[],e.__P&&((t=L({},o)).__v=o.__v+1,h.vnode&&h.vnode(t),Oe(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,i,r??V(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,dt(i,t,a),t.__e!=r&&ut(t)));me.__r=0}function pt(n,e,t,o,r,i,a,c,p,l,d){var u,x,m,g,C,v,y=o&&o.__k||ct,b=e.length;for(p=Sn(t,e,y,p,b),u=0;u<b;u++)(m=t.__k[u])!=null&&(x=m.__i==-1?Q:y[m.__i]||Q,m.__i=u,v=Oe(n,m,x,r,i,a,c,p,l,d),g=m.__e,m.ref&&x.ref!=m.ref&&(x.ref&&Te(x.ref,null,m),d.push(m.ref,m.__c||g,m)),C==null&&g!=null&&(C=g),4&m.__u||x.__k===m.__k?p=lt(m,p,n):typeof m.type=="function"&&v!==void 0?p=v:g&&(p=g.nextSibling),m.__u&=-7);return t.__e=C,p}function Sn(n,e,t,o,r){var i,a,c,p,l,d=t.length,u=d,x=0;for(n.__k=new Array(r),i=0;i<r;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(p=i+x,(a=n.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?de(null,a,null,null,null):J(a)?de(S,{children:a},null,null,null):a.constructor==null&&a.__b>0?de(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=n,a.__b=n.__b+1,c=null,(l=a.__i=zn(a,t,p,u))!=-1&&(u--,(c=t[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>d?x--:r<d&&x++),typeof a.type!="function"&&(a.__u|=4)):l!=p&&(l==p-1?x--:l==p+1?x++:(l>p?x--:x++,a.__u|=4))):n.__k[i]=null;if(u)for(i=0;i<d;i++)(c=t[i])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=V(c)),ht(c,c));return o}function lt(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=lt(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=V(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function H(n,e){return e=e||[],n==null||typeof n=="boolean"||(J(n)?n.some(function(t){H(t,e)}):e.push(n)),e}function zn(n,e,t,o){var r,i,a=n.key,c=n.type,p=e[t];if(p===null&&n.key==null||p&&a==p.key&&c==p.type&&(2&p.__u)==0)return t;if(o>(p!=null&&(2&p.__u)==0?1:0))for(r=t-1,i=t+1;r>=0||i<e.length;){if(r>=0){if((p=e[r])&&(2&p.__u)==0&&a==p.key&&c==p.type)return r;r--}if(i<e.length){if((p=e[i])&&(2&p.__u)==0&&a==p.key&&c==p.type)return i;i++}}return-1}function nt(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Cn.test(e)?t:t+"px"}function le(n,e,t,o,r){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||nt(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||nt(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(st,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?o?t.u=o.u:(t.u=Le,n.addEventListener(e,i?Me:Ae,i)):n.removeEventListener(e,i?Me:Ae,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function ot(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Le++;else if(e.t<t.u)return;return t(h.event?h.event(e):e)}}}function Oe(n,e,t,o,r,i,a,c,p,l){var d,u,x,m,g,C,v,y,b,D,O,ue,Z,Ye,pe,P,we,A=e.type;if(e.constructor!=null)return null;128&t.__u&&(p=!!(32&t.__u),i=[c=e.__e=t.__e]),(d=h.__b)&&d(e);e:if(typeof A=="function")try{if(y=e.props,b="prototype"in A&&A.prototype.render,D=(d=A.contextType)&&o[d.__c],O=d?D?D.props.value:d.__:o,t.__c?v=(u=e.__c=t.__c).__=u.__E:(b?e.__c=u=new A(y,O):(e.__c=u=new f(y,O),u.constructor=A,u.render=An),D&&D.sub(u),u.props=y,u.state||(u.state={}),u.context=O,u.__n=o,x=u.__d=!0,u.__h=[],u._sb=[]),b&&u.__s==null&&(u.__s=u.state),b&&A.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=L({},u.__s)),L(u.__s,A.getDerivedStateFromProps(y,u.__s))),m=u.props,g=u.state,u.__v=e,x)b&&A.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),b&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b&&A.getDerivedStateFromProps==null&&y!==m&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(y,O),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(y,u.__s,O)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(u.props=y,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(E){E&&(E.__=e)}),ue=0;ue<u._sb.length;ue++)u.__h.push(u._sb[ue]);u._sb=[],u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(y,u.__s,O),b&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(m,g,C)})}if(u.context=O,u.props=y,u.__P=n,u.__e=!1,Z=h.__r,Ye=0,b){for(u.state=u.__s,u.__d=!1,Z&&Z(e),d=u.render(u.props,u.state,u.context),pe=0;pe<u._sb.length;pe++)u.__h.push(u._sb[pe]);u._sb=[]}else do u.__d=!1,Z&&Z(e),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++Ye<25);u.state=u.__s,u.getChildContext!=null&&(o=L(L({},o),u.getChildContext())),b&&!x&&u.getSnapshotBeforeUpdate!=null&&(C=u.getSnapshotBeforeUpdate(m,g)),P=d,d!=null&&d.type===S&&d.key==null&&(P=mt(d.props.children)),c=pt(n,J(P)?P:[P],e,t,o,r,i,a,c,p,l),u.base=e.__e,e.__u&=-161,u.__h.length&&a.push(u),v&&(u.__E=u.__=null)}catch(E){if(e.__v=null,p||i!=null)if(E.then){for(e.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,e.__e=c}else for(we=i.length;we--;)Ne(i[we]);else e.__e=t.__e,e.__k=t.__k;h.__e(E,e,t)}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=wn(t.__e,e,t,o,r,i,a,p,l);return(d=h.diffed)&&d(e),128&e.__u?void 0:c}function dt(n,e,t){for(var o=0;o<t.length;o++)Te(t[o],t[++o],t[++o]);h.__c&&h.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(i){i.call(r)})}catch(i){h.__e(i,r.__v)}})}function mt(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:J(n)?n.map(mt):L({},n)}function wn(n,e,t,o,r,i,a,c,p){var l,d,u,x,m,g,C,v=t.props,y=e.props,b=e.type;if(b=="svg"?r="http://www.w3.org/2000/svg":b=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((m=i[l])&&"setAttribute"in m==!!b&&(b?m.localName==b:m.nodeType==3)){n=m,i[l]=null;break}}if(n==null){if(b==null)return document.createTextNode(y);n=document.createElementNS(r,b,y.is&&y),c&&(h.__m&&h.__m(e,i),c=!1),i=null}if(b==null)v===y||c&&n.data==y||(n.data=y);else{if(i=i&&he.call(n.childNodes),v=t.props||Q,!c&&i!=null)for(v={},l=0;l<n.attributes.length;l++)v[(m=n.attributes[l]).name]=m.value;for(l in v)if(m=v[l],l!="children"){if(l=="dangerouslySetInnerHTML")u=m;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;le(n,l,null,m,r)}}for(l in y)m=y[l],l=="children"?x=m:l=="dangerouslySetInnerHTML"?d=m:l=="value"?g=m:l=="checked"?C=m:c&&typeof m!="function"||v[l]===m||le(n,l,m,v[l],r);if(d)c||u&&(d.__html==u.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(u&&(n.innerHTML=""),pt(e.type=="template"?n.content:n,J(x)?x:[x],e,t,o,b=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:t.__k&&V(t,0),c,p),i!=null)for(l=i.length;l--;)Ne(i[l]);c||(l="value",b=="progress"&&g==null?n.removeAttribute("value"):g!=null&&(g!==n[l]||b=="progress"&&!g||b=="option"&&g!=v[l])&&le(n,l,g,v[l],r),l="checked",C!=null&&C!=n[l]&&le(n,l,C,v[l],r))}return n}function Te(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){h.__e(r,t)}}function ht(n,e,t){var o,r;if(h.unmount&&h.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||Te(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){h.__e(i,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&ht(o[r],e,t||typeof n.type!="function");t||Ne(n.__e),n.__c=n.__=n.__e=void 0}function An(n,e,t){return this.constructor(n,t)}function j(n,e,t){var o,r,i,a;e==document&&(e=document.documentElement),h.__&&h.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,i=[],a=[],Oe(e,n=(!o&&t||e).__k=s(S,null,[n]),r||Q,Q,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?he.call(e.childNodes):null,i,!o&&t?t:r?r.__e:e.firstChild,o,a),dt(i,n,a)}he=ct.slice,h={__e:function(n,e,t,o){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),a=r.__d),a)return r.__E=r}catch(c){n=c}throw n}},rt=0,_n=function(n){return n!=null&&n.constructor==null},f.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=L({},this.state),typeof n=="function"&&(n=n(L({},t),this.props)),n&&L(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),tt(this))},f.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),tt(this))},f.prototype.render=S,F=[],it=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,at=function(n,e){return n.__v.__b-e.__v.__b},me.__r=0,st=/(PointerCapture)$|Capture$/i,Le=0,Ae=ot(!1),Me=ot(!0),In=0;var ft=`#version 300 es

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
}`;var yt=`const int ShapeTypeNone = -5000;
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
}`;var On=/^#include\s+\<([^\>]+)\>/gmi,Y=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(On);for(let r of o){let i=e[r[1]];i===void 0&&(console.error(`Unknown shader include ${r[1]}`),i=""),t=t.replace(r[0],i)}return t}static create(e,t,o,r){function i(){p!=null&&(e.detachShader(p,a),e.detachShader(p,c)),a!=null&&e.deleteShader(a),c!=null&&e.deleteShader(c)}let a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,this.assembleShader(t,o)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",l),i(),new Error(`Vertex shader compile error ${l}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",l),i(),new Error(`Fragment shader compile error ${l}`)}let p=e.createProgram();if(e.attachShader(p,a),e.attachShader(p,c),e.linkProgram(p),i(),!e.getProgramParameter(p,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(p);let l=e.getProgramInfoLog(p);throw console.error("Shader link error",l),new Error(`Shader link error ${l}`)}return new n(p)}};var X=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function bt(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Tn(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z;return Math.sqrt(t**2+o**2+r**2)}function gt(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,i=e.z,a=t.w*2,c=t.y*i-t.z*r,p=t.z*o-t.x*i,l=t.x*r-t.y*o,d=(t.y*l-t.z*p)*2,u=(t.z*c-t.x*l)*2,x=(t.x*p-t.y*c)*2;return c*=a,p*=a,l*=a,n.x=o+c+d,n.y=r+p+u,n.z=i+l+x,n}function z(){return{x:0,y:0,z:0}}function Re(){return{x:1,y:1,z:1}}function De(n,e,t=1e-4){return Tn(n,e)<t}function fe(){return{x:1,y:1,z:1,w:1}}function R(){return{x:0,y:0,z:0,w:1}}function vt(n,e,t,o,r=X.ANGLE_ORDER){let i=Math.PI/360;e*=i,o*=i,t*=i;let a=Math.sin(e),c=Math.cos(e),p=Math.sin(t),l=Math.cos(t),d=Math.sin(o),u=Math.cos(o);switch(r){case"xyz":n.x=a*l*u+c*p*d,n.y=c*p*u-a*l*d,n.z=c*l*d+a*p*u,n.w=c*l*u-a*p*d;break;case"xzy":n.x=a*l*u-c*p*d,n.y=c*p*u-a*l*d,n.z=c*l*d+a*p*u,n.w=c*l*u+a*p*d;break;case"yxz":n.x=a*l*u+c*p*d,n.y=c*p*u-a*l*d,n.z=c*l*d-a*p*u,n.w=c*l*u+a*p*d;break;case"yzx":n.x=a*l*u+c*p*d,n.y=c*p*u+a*l*d,n.z=c*l*d-a*p*u,n.w=c*l*u-a*p*d;break;case"zxy":n.x=a*l*u-c*p*d,n.y=c*p*u+a*l*d,n.z=c*l*d+a*p*u,n.w=c*l*u-a*p*d;break;case"zyx":n.x=a*l*u-c*p*d,n.y=c*p*u+a*l*d,n.z=c*l*d-a*p*u,n.w=c*l*u+a*p*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Rn=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Fe=R();function Dn(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,i=e.x*t,a=e.y*t,c=e.y*o,p=e.z*t,l=e.z*o,d=e.z*r,u=e.w*t,x=e.w*o,m=e.w*r;return n[0]=1-c-d,n[1]=a-m,n[2]=p+x,n[3]=a+m,n[4]=1-i-d,n[5]=l-u,n[6]=p-x,n[7]=l+u,n[8]=1-i-c,n}var K=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uHighlight;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=z();cameraTarget=z();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);prevShapes;prevOperations;prevMaterials;prevLights;constructor(e,t,o,r,i,a,c,p,l,d,u,x,m,g,C,v){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=i,this.uNumOperations=a,this.uHighlight=c,this.uMaterials=d,this.uLights=p,this.uNumLights=l,this.uCameraPosition=u,this.uCameraMatrix=x,this.uAspectRatio=m,this.uMaxMarchingSteps=g,this.uEpsilon=C,this.uFlags=v}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){vt(Fe,this.cameraRotationX,this.cameraRotationY,0);let e=gt(z(),{x:0,y:0,z:1},Fe);bt(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Dn(this.cameraMatrixArray,Fe)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let i=o/r;this.gl.uniform1f(this.uAspectRatio,i)};render(e){if(this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){console.info("Rendering new operations");let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniform2iv(this.uHighlight,[0,1]),this.prevOperations=e.getOperations()}this.prevShapes!==e.getShapes()&&(console.info("Rendering new shapes"),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Rn),t.STATIC_DRAW);let r={"sdf-functions":yt},i=Y.create(t,r,ft,xt);t.useProgram(i.program);let a=this.getAttribute(t,i,"aPosition");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,i,"uCameraMatrix"),p=this.getUniform(t,i,"uCameraPosition"),l=this.getUniform(t,i,"uAspectRatio"),d=this.getUniform(t,i,"uShapes"),u=this.getUniform(t,i,"uOperations"),x=this.getUniform(t,i,"uNumOperations"),m=this.getUniform(t,i,"uHighlight"),g=this.getUniform(t,i,"uMaterials"),C=this.getUniform(t,i,"uLights"),v=this.getUniform(t,i,"uNumLights"),y=this.getUniform(t,i,"uMaxMarchingSteps"),b=this.getUniform(t,i,"uEpsilon"),D=this.getUniform(t,i,"uFlags");return new n(t,i,o,d,u,x,m,C,v,g,p,c,l,y,b,D)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var It=qe(_t()),Gn={renderScale:1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001,pixelated:!1},ke={options:Gn},_=new It.default({viewports:[ke],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1}});var Ve=-500,Ct=-600,St=-700,zt=-800,wt=-900,xe=-5e3,At=-6e3,Mt=-7e3,Lt=-8e3,Xe=0,Ue=1,Nt=2;function ye(){return crypto.randomUUID()}function Ot(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Tt(n){let e=n.nodes[n.rootNodeId];if(!e)return[];let t=new Array(Object.keys(n.nodes).length);return Bt(e,n.nodes,0,0,t),t}function We(n){return{colour:fe(),radius:10,...n}}function Rt(n,e){return{name:n,id:ye(),position:z(),rotation:R(),childrenIds:[],childOpCode:"none",shape:Pe({}),hasShape:!1,light:We({}),hasLight:!1,...e}}function Ze(n,e,t,o){return{name:n,id:ye(),position:t??z(),rotation:o??R(),childrenIds:[],childOpCode:"none",shape:Pe({}),hasShape:!1,light:e!=null?We(e):void 0,hasLight:e!=null}}function U(n,e,t,o,r){return{name:n,id:ye(),position:t??z(),rotation:o??R(),shape:e!=null?Pe(e):void 0,hasShape:e!=null,light:We({}),hasLight:!1,childrenIds:[],childOpCode:r??"none"}}function Pe(n){return{maxSize:0,type:"none",shapeParams:z(),diffuseColour:{x:.7,y:.3,z:.2},specularColour:{x:1,y:.8,z:.9},lightingModel:"lambert",shininess:10,...n}}function G(n,e){n.childrenIds.push(e.id),e.parentId=n.id}function Dt(n,e,t){e={...e,childrenIds:[...e.childrenIds,t.id]},t={...t,parentId:e.id};let o={...n.nodes,[e.id]:e,[t.id]:t};return{...n,nodes:o}}function Ft(n,e){if(e.parentId===void 0)return n;let t=n.nodes[e.parentId],o=t.childrenIds.findIndex(r=>r===e.id);if(o>=0){let r=[...t.childrenIds];r.splice(o,1),t={...t,childrenIds:r};let i={...n.nodes,[t.id]:t};return delete i[e.id],{...n,nodes:i}}return n}function Gt(n,e,t){if(t.parentId==null)return n;let o=n.nodes[t.parentId],r=o.childrenIds.findIndex(a=>a===t.id);if(r>=0){let a=[...o.childrenIds];a.splice(r,1),o={...o,childrenIds:a}}e.childrenIds.includes(t.id)||(e={...e,childrenIds:[...e.childrenIds,t.id]}),t={...t,parentId:e.id};let i={...n.nodes,[o.id]:o,[e.id]:e,[t.id]:t};return{...n,nodes:i}}function Bt(n,e,t,o,r){if(r[o]={node:n,depth:t},n.childrenIds!=null)for(let i of n.childrenIds){let a=e[i];a&&(o=Bt(a,e,t+1,o+1,r))}return o}function Ee(n,e){return t=>{let o=t.viewports[n]??ke,r={...o,options:{...o.options,...e}},i=[...t.viewports];return i[n]=r,{viewports:i}}}function be(n){return e=>({reparentModal:{...e.reparentModal,...n}})}function ge(n){return e=>({rawSceneModal:{...e.rawSceneModal,...n}})}function kt(n){return e=>({sceneTree:Ot(e.sceneTree,n)})}function N(n){return()=>({sceneTree:n})}function Vt(n){return e=>{let t;if(n){for(let o of Object.values(e.sceneTree.nodes))if(o.childrenIds.includes(n)){t=o.id;break}}return{selectedNodeId:n,selectedParentNodeId:t}}}var Xt,M,Qe,Ut;var jt=[],I=h,Wt=I.__b,Zt=I.__r,Pt=I.diffed,Et=I.__c,Qt=I.unmount,Jt=I.__;function Bn(){for(var n;n=jt.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(ve),n.__H.__h.forEach(Je),n.__H.__h=[]}catch(e){n.__H.__h=[],I.__e(e,n.__v)}}I.__b=function(n){M=null,Wt&&Wt(n)},I.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Jt&&Jt(n,e)},I.__r=function(n){Zt&&Zt(n),Xt=0;var e=(M=n.__c).__H;e&&(Qe===M?(e.__h=[],M.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(ve),e.__h.forEach(Je),e.__h=[],Xt=0)),Qe=M},I.diffed=function(n){Pt&&Pt(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(jt.push(e)!==1&&Ut===I.requestAnimationFrame||((Ut=I.requestAnimationFrame)||kn)(Bn)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Qe=M=null},I.__c=function(n,e){e.some(function(t){try{t.__h.forEach(ve),t.__h=t.__h.filter(function(o){return!o.__||Je(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],I.__e(o,t.__v)}}),Et&&Et(n,e)},I.unmount=function(n){Qt&&Qt(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{ve(o)}catch(r){e=r}}),t.__H=void 0,e&&I.__e(e,t.__v))};var Ht=typeof requestAnimationFrame=="function";function kn(n){var e,t=function(){clearTimeout(o),Ht&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,35);Ht&&(e=requestAnimationFrame(t))}function ve(n){var e=M,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),M=e}function Je(n){var e=M;n.__c=n.__(),M=e}function Xn(n,e){for(var t in e)n[t]=e[t];return n}function Yt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function Kt(n,e){this.props=n,this.context=e}(Kt.prototype=new f).isPureReactComponent=!0,Kt.prototype.shouldComponentUpdate=function(n,e){return Yt(this.props,n)||Yt(this.state,e)};var $t=h.__b;h.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),$t&&$t(n)};var Pr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Un=h.__e;h.__e=function(n,e,t,o){if(n.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Un(n,e,t,o)};var qt=h.unmount;function an(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=Xn({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return an(o,e,t)})),n}function sn(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return sn(o,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function He(){this.__u=0,this.o=null,this.__b=null}function cn(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function _e(){this.i=null,this.l=null}h.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),qt&&qt(n)},(He.prototype=new f).__c=function(n,e){var t=e.__c,o=this;o.o==null&&(o.o=[]),o.o.push(t);var r=cn(o.__v),i=!1,a=function(){i||(i=!0,t.__R=null,r?r(c):c())};t.__R=a;var c=function(){if(!--o.__u){if(o.state.__a){var p=o.state.__a;o.__v.__k[0]=sn(p,p.__c.__P,p.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.o.pop();)l.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(a,a)},He.prototype.componentWillUnmount=function(){this.o=[]},He.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=an(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__a&&s(S,null,n.fallback);return r&&(r.__u&=-33),[s(S,null,e.__a?null:n.children),r]};var en=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};function Wn(n){return this.getChildContext=function(){return n.context},n.children}function Zn(n){var e=this,t=n.h;if(e.componentWillUnmount=function(){j(null,e.v),e.v=null,e.h=null},e.h&&e.h!==t&&e.componentWillUnmount(),!e.v){for(var o=e.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;e.h=t,e.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},insertBefore:function(r,i){this.childNodes.push(r),e.h.insertBefore(r,i)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.h.removeChild(r)}}}j(s(Wn,{context:e.context},n.__v),e.v)}function Ie(n,e){var t=s(Zn,{__v:n,h:e});return t.containerInfo=e,t}(_e.prototype=new f).__a=function(n){var e=this,t=cn(e.__v),o=e.l.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),en(e,n,o)):r()};t?t(i):i()}},_e.prototype.render=function(n){this.i=null,this.l=new Map;var e=H(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},_e.prototype.componentDidUpdate=_e.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){en(n,t,e)})};var Pn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,En=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Qn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Jn=/[A-Z0-9]/g,Hn=typeof document<"u",jn=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(f.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var tn=h.event;function Yn(){}function Kn(){return this.cancelBubble}function $n(){return this.defaultPrevented}h.event=function(n){return tn&&(n=tn(n)),n.persist=Yn,n.isPropagationStopped=Kn,n.isDefaultPrevented=$n,n.nativeEvent=n};var un,qn={enumerable:!1,configurable:!0,get:function(){return this.class}},nn=h.vnode;h.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,o=e.type,r={},i=o.indexOf("-")===-1;for(var a in t){var c=t[a];if(!(a==="value"&&"defaultValue"in t&&c==null||Hn&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var p=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&c===!0?c="":p==="translate"&&c==="no"?c=!1:p[0]==="o"&&p[1]==="n"?p==="ondoubleclick"?a="ondblclick":p!=="onchange"||o!=="input"&&o!=="textarea"||jn(t.type)?p==="onfocus"?a="onfocusin":p==="onblur"?a="onfocusout":Qn.test(a)&&(a=p):p=a="oninput":i&&En.test(a)?a=a.replace(Jn,"-$&").toLowerCase():c===null&&(c=void 0),p==="oninput"&&r[a=p]&&(a="oninputCapture"),r[a]=c}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=H(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=H(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",qn)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(n),n.$$typeof=Pn,nn&&nn(n)};var on=h.__r;h.__r=function(n){on&&on(n),un=n.__c};var rn=h.diffed;h.diffed=function(n){rn&&rn(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),un=null};var q=class extends f{buttonRef=T();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:t,text:o,children:r}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let c=this.buttonRef.current.getBoundingClientRect();a={left:c.left+"px",top:c.top+c.height+"px"}}return s(S,null,s("button",{...t,ref:this.buttonRef,onClick:this.toggleMenu},o),i&&Ie(s("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},s("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},r)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var pn=n=>s("label",{style:{display:"inline-block"}},n.label,s("input",{style:{display:"block"},type:"range",...n.inputProps})),ee=class extends f{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:i,epsilon:a,maxMarchingStep:c}=this.props.options;return s("div",{class:"viewport-options"},s(q,{text:"Menu"},s("div",{class:"control-group-vertical"},s("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),s("select",{onChange:this.changeRenderScale,value:o},s("option",{value:"2"},"2x"),s("option",{value:"1.5"},"1.5x"),s("option",{value:"1"},"1x"),s("option",{value:"0.5"},"0.5x"),s("option",{value:"0.25"},"0.25x"),s("option",{value:"0.125"},"0.125x")),s("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),s("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),s("button",{onClick:this.showRawScene},"JSON Scene")),s(pn,{label:`Epsilon ${a}`,inputProps:{value:a,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),s(pn,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}})))}showRawScene=()=>{_.execute(ge({show:!0}))};changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),_.execute(Ee(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?_.execute(Ee(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var Ce=class extends f{canvasRef=T();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=K.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),s("div",{class:"viewport outer-panel"},s("canvas",{className:e,ref:this.canvasRef}),s(ee,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function eo(n){return Object.hasOwn(n,"z")}function to(n){return Object.hasOwn(n,"w")}var w=class extends f{render(){let e=this.props.vector,t=this.props.disabled,o=eo(e),r=to(e);return s("div",{class:"vector control-group"},s("input",{class:"input",disabled:t,type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),s("input",{class:"input",disabled:t,type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),o&&s("input",{class:"input",disabled:t,type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),r&&s("input",{class:"input",disabled:t,type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,i=parseFloat(r);if(!isFinite(i)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,i),this.props.onChange(o,{...o,[t]:i})}};var te=class extends f{render(){let e=this.props.shape,t=e.lightingModel==="phong";return s("div",null,s("div",null,s("strong",null,"Type")," ",s("select",{value:e.type??"none",onChange:this.onChangeType},s("option",{value:"none"},"None"),s("option",{value:"box"},"Box"),s("option",{value:"sphere"},"Sphere"),s("option",{value:"hexPrism"},"Hex Prism"))),s("div",null,s("strong",null,"Shape Params")," ",s(w,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),s("div",null,s("strong",null,"Lighting Model")," ",s("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},s("option",{value:"unlit"},"Unlit"),s("option",{value:"lambert"},"Lambert"),s("option",{value:"phong"},"Phong"))),s("div",null,s("strong",null,"Diffuse Colour")," ",s(w,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),s("div",null,s("strong",null,"Specular Colour")," ",s(w,{disabled:!t,vector:e.specularColour,onChange:this.onChangeSpecularColour})),s("div",null,s("strong",null,"Shininess")," ",s("input",{class:"input",disabled:!t,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeLightingModel=e=>{let t=e.target.value;this.updateField(t,"lightingModel")};onChangeShininess=e=>{let t=parseFloat(e.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var ne=class extends f{render(){let e=this.props.light;return e===void 0?s("div",null,"Empty Light"):s("div",null,s("div",null,s("strong",null,"Colour")," ",s(w,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var oe=class extends f{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:t}=this.props;if(e==null)return s("div",{class:"scene-node-view"},"No node selected");let o=e.parentId!=null?t.nodes[e.parentId]:void 0,r=e.childOpCode??"none";return s("div",{class:"scene-node-view"},s("div",null,s("strong",null,"Name")," ",s("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),s("div",null,s("strong",null,"Position")," ",s(w,{vector:e.position,onChange:this.onChangePosition})),s("div",null,s("strong",null,"Rotation")," ",s(w,{vector:e.rotation,onChange:this.onChangeRotation})),s("div",null,s("strong",null,"Op Code")," ",s("select",{value:r,onChange:this.onChangeOpCode},s("option",{value:"none"},"None"),s("option",{value:"union"},"Union"),s("option",{value:"intersection"},"Intersection"),s("option",{value:"subtraction"},"Subtraction"))),s("div",null,s("strong",null,"Shape")," ",s("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&s(te,{shape:e.shape,onChange:this.onChangeShape})),s("div",null,s("strong",null,"Light")," ",s("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&s(ne,{light:e.light,onChange:this.onChangeLight})),s("div",null,s("strong",null,"Children")),s("div",{class:"control-group"},s("button",{onClick:this.addChild},"Add"),o!=null&&s(S,null,s("button",{onClick:this.deleteSelf},"Delete"),s("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Dt(this.props.sceneTree,this.props.node,Rt("New Child",{}));_.execute(N(e))};deleteSelf=()=>{let e=Ft(this.props.sceneTree,this.props.node);_.execute(N(e))};reparent=()=>{let{node:e,sceneTree:t}=this.props;if((e.parentId!=null?t.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}_.execute(be({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};function je(n,e,t){return(t==null||t===!0)&&(n+=" "+e),n}var re=class extends f{render(){let{depth:e,node:t,isSelected:o,disable:r}=this.props,i=je(je("scene-node-tree-item","is-selected",o),"is-disabled",r===!0);return s("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var B=class extends f{render(){return s("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],i=[];if(r==null)return i;let a=Tt(e);for(let c of a){let p=c.node.id===t;i.push(s(re,{isSelected:p,depth:c.depth,key:c.node.id,node:c.node,onClicked:o}))}return i}};var ie=class extends f{render(){let{sceneTree:e,selectedNodeId:t}=this.props,o=e.nodes[t];return s("div",{class:"scene-tree"},s("div",{class:"scene-tree__contents outer-panel"},s("div",{class:"inner-panel"},s(B,{sceneTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),s("div",{class:"inner-panel scene-tree__nodes"},s(oe,{sceneTree:e,node:o,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{_.execute(Vt(e.id))};onChangeSelectedNode=(e,t)=>{_.execute(kt(e))}};var k=class extends f{render(){let{show:e,onRequestClose:t}=this.props;if(e===!1)return null;let o=this.props.portalContainer??"modals",r=document.getElementById(o),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return Ie(s("div",{class:"modal-backdrop",onPointerDown:t},s("div",{class:a,onPointerDown:this.preventClose},this.props.children)),r)}preventClose=e=>{e.stopImmediatePropagation()}};var ae=class extends f{render(){let{show:e,sceneTree:t,disabledNodeIds:o,onRequestClose:r}=this.props;return s(k,{show:e,onRequestClose:r},s(B,{sceneTree:t,disabledNodeId:o,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var se=class extends f{render(){let{show:e}=this.props.state,t=this.getDisabledNodeIds();return s(ae,{show:e,disabledNodeIds:t,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{_.execute(be({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:t}=this.props.state;if(!e)return[];let{sceneTree:o}=this.props,r=o.nodes[t];return[r.id,r.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let t=this.props.sceneTree.nodes[this.props.state.childNodeId],o=Gt(this.props.sceneTree,e,t);_.execute(N(o))}};var ce=class extends f{prevSceneTree=void 0;preRef=T();render(){let{show:e}=this.props.state,{sceneTree:t}=this.props,o="";return e&&this.prevSceneTree!==t&&(o=JSON.stringify(t,null,2)),s(k,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},s("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},s("pre",null,o)),s("span",{class:"control-group"},s("button",{onClick:this.loadFromHtml},"Load From Json"),s("label",{class:"button"},"Load From File",s("input",{type:"file",onChange:this.loadFromFile})),s("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{_.execute(ge({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="scene.json",t.click(),URL.revokeObjectURL(t.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let o=new FileReader;o.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let t=e.target;typeof t.result=="string"?this.loadFromText(t.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let t=JSON.parse(e);t!=null&&_.execute(N(t))}};var Se=class extends f{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:t,sceneTree:o,selectedNodeId:r,reparentModal:i,rawSceneModal:a}=this.props.state;return console.log("App render",this.props.state),s(S,null,s("div",{class:"main-view"},s("div",{class:"viewports"},s(Ce,{viewportIndex:0,options:t[0].options,sceneConverter:e})),s(ie,{sceneTree:o,selectedNodeId:r})),s(se,{state:i,sceneTree:o}),s(ce,{state:a,sceneTree:o}))}};var W=qe(dn());var no=8,oo=16,ro=8,io={none:Ve,union:Ct,intersection:St,subtraction:zt,xor:wt},ao={none:xe,box:At,sphere:Mt,hexPrism:Lt},so={unlit:Xe,lambert:Ue,phong:Nt};function co(n){return ao[n]||xe}function uo(n){return io[n]||Ve}function po(n){return so[n]||Xe}var ze=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,shapes:r,lights:i,materials:a}=n.createShapesFromNode(e);if((0,W.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),!(0,W.default)(this.shapes,r)){console.log("Shapes",this.shapes),this.shapes=r,this.shapeDataArray.length=0;for(let c=0;c<this.shapes.length;c++)this.updateShape(c)}if(!(0,W.default)(this.lights,i)){this.lights=i,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let c=0;c<this.lights.length;c++)this.updateLight(c)}if(!(0,W.default)(this.materials,a)){this.materials=a,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let c=0;c<this.materials.length;c++)this.updateMaterial(c)}}static createShapesFromNode(e){let t=e.nodes[e.rootNodeId];if(!t)return;let o=[],r=[],i=[],a=[];return this.pushToStack(o,r,i,a,t,e.nodes),o.reverse(),{operations:o,shapes:r,lights:i,materials:a}}static pushToStack(e,t,o,r,i,a){if(i.childOpCode!=="none"){let c=!0;for(let p=0;p<i.childrenIds.length;p++){let l=a[i.childrenIds[p]];(l.hasShape||l.childOpCode!=="none")&&(c?c=!1:e.push(i.childOpCode))}}if(i.hasShape){let c=t.findIndex(p=>(0,W.default)(p,i.shape));if(c<0){c=t.length;let p=n.convertToShape(i,r);p!=null&&t.push(p)}e.push(c)}if(i.hasLight){let c=n.convertToLight(i);c!=null&&o.push(c)}for(let c of i.childrenIds)this.pushToStack(e,t,o,r,a[c],a)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*no,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*ro,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.lightingModel,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.shininess}updateShape(e){let t=e*oo,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?uo(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r={diffuseColour:o.diffuseColour,lightingModel:po(o.lightingModel),specularColour:o.specularColour,shininess:o.shininess},i=this.findApproxMaterial(r,t);return i<0&&(i=t.length,t.push(r)),{material:i,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:co(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:Re(),lightingModel:Ue,specularColour:Re(),shininess:10}}static createNewLight(){return{position:z(),radius:10,colour:fe()}}static createNewShape(e){return{position:z(),rotation:R(),maxSize:0,shapeType:xe,shapeParams:z(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(!(r.lightingModel!==e.lightingModel||Math.abs(r.shininess-e.shininess)<1e-4)&&De(r.diffuseColour,e.diffuseColour)&&De(r.specularColour,e.specularColour))return o}return-1}};var mn=new ze;_.subscribe(n=>n.sceneTree,lo);function lo(n){mn.updateShapesFromTree(n.sceneTree)}var mo=document.getElementById("app");function hn(){j(s(Se,{state:_.state(),sceneConverter:mn}),mo)}hn();_.subscribeAny(hn);function ho(...n){let e={};for(let t of n)e[t.id]=t;return e}function fo(){let n=U("Root",null,void 0,void 0,"subtraction"),e=U("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5,diffuseColour:{x:.5,y:.5,z:.5}}),t=U("Box & Sphere",void 0,void 0,void 0,"union");G(n,e),G(n,t);let o=U("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3},lightingModel:"lambert"},{x:0,y:-1.5,z:0}),r=U("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.2,z:.9},lightingModel:"phong"});G(t,o),G(t,r);let i=Ze("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),a=Ze("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});G(n,i),G(n,a);let p={nodes:ho(n,e,t,o,r,i,a),rootNodeId:n.id};_.execute(N(p))}fo();})();
//# sourceMappingURL=webgl-index.js.map
