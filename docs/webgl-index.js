(()=>{var hn=Object.create;var Ye=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var yn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,bn=Object.prototype.hasOwnProperty;var je=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var vn=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of yn(e))!bn.call(n,r)&&r!==t&&Ye(n,r,{get:()=>e[r],enumerable:!(o=fn(e,r))||o.enumerable});return n};var $e=(n,e,t)=>(t=n!=null?hn(xn(n)):{},vn(e||!n||!n.__esModule?Ye(t,"default",{value:n,enumerable:!0}):t,n));var vt=je(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.EmptyModifier=void 0;var Dn=()=>null;K.EmptyModifier=Dn;var De=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let a=e(this.currentState),i={selector:new Fe(e,a,o,r),subscription:t};return this.subscriptions.push(i),()=>{let c=this.subscriptions.indexOf(i);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};K.default=De;var Fe=class{constructor(e,t=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var ln=je((Vi,pn)=>{"use strict";pn.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var i=a[r];if(!n(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}});var me,h,nt,gn,F,Ke,ot,rt,at,Me,ze,we,_n,Q={},it=[],Sn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H=Array.isArray;function N(n,e){for(var t in e)n[t]=e[t];return n}function Ae(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function s(n,e,t){var o,r,a,i={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:i[a]=e[a];if(arguments.length>2&&(i.children=arguments.length>3?me.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)i[a]===void 0&&(i[a]=n.defaultProps[a]);return le(n,i,o,r,null)}function le(n,e,t,o,r){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++nt,__i:-1,__u:0};return r==null&&h.vnode!=null&&h.vnode(a),a}function E(){return{current:null}}function z(n){return n.children}function f(n,e){this.props=n,this.context=e}function G(n,e){if(e==null)return n.__?G(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?G(n):null}function st(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return st(n)}}function qe(n){(!n.__d&&(n.__d=!0)&&F.push(n)&&!de.__r++||Ke!=h.debounceRendering)&&((Ke=h.debounceRendering)||ot)(de)}function de(){for(var n,e,t,o,r,a,i,c=1;F.length;)F.length>c&&F.sort(rt),n=F.shift(),c=F.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,a=[],i=[],e.__P&&((t=N({},o)).__v=o.__v+1,h.vnode&&h.vnode(t),Ne(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??G(o),!!(32&o.__u),i),t.__v=o.__v,t.__.__k[t.__i]=t,pt(a,t,i),t.__e!=r&&st(t)));de.__r=0}function ct(n,e,t,o,r,a,i,c,p,l,d){var u,y,m,v,C,g,x=o&&o.__k||it,b=e.length;for(p=Cn(t,e,x,p,b),u=0;u<b;u++)(m=t.__k[u])!=null&&(y=m.__i==-1?Q:x[m.__i]||Q,m.__i=u,g=Ne(n,m,y,r,a,i,c,p,l,d),v=m.__e,m.ref&&y.ref!=m.ref&&(y.ref&&Le(y.ref,null,m),d.push(m.ref,m.__c||v,m)),C==null&&v!=null&&(C=v),4&m.__u||y.__k===m.__k?p=ut(m,p,n):typeof m.type=="function"&&g!==void 0?p=g:v&&(p=v.nextSibling),m.__u&=-7);return t.__e=C,p}function Cn(n,e,t,o,r){var a,i,c,p,l,d=t.length,u=d,y=0;for(n.__k=new Array(r),a=0;a<r;a++)(i=e[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(p=a+y,(i=n.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?le(null,i,null,null,null):H(i)?le(z,{children:i},null,null,null):i.constructor==null&&i.__b>0?le(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,c=null,(l=i.__i=In(i,t,p,u))!=-1&&(u--,(c=t[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>d?y--:r<d&&y++),typeof i.type!="function"&&(i.__u|=4)):l!=p&&(l==p-1?y--:l==p+1?y++:(l>p?y--:y++,i.__u|=4))):n.__k[a]=null;if(u)for(a=0;a<d;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=G(c)),dt(c,c));return o}function ut(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=ut(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=G(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function J(n,e){return e=e||[],n==null||typeof n=="boolean"||(H(n)?n.some(function(t){J(t,e)}):e.push(n)),e}function In(n,e,t,o){var r,a,i=n.key,c=n.type,p=e[t];if(p===null&&n.key==null||p&&i==p.key&&c==p.type&&(2&p.__u)==0)return t;if(o>(p!=null&&(2&p.__u)==0?1:0))for(r=t-1,a=t+1;r>=0||a<e.length;){if(r>=0){if((p=e[r])&&(2&p.__u)==0&&i==p.key&&c==p.type)return r;r--}if(a<e.length){if((p=e[a])&&(2&p.__u)==0&&i==p.key&&c==p.type)return a;a++}}return-1}function et(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Sn.test(e)?t:t+"px"}function pe(n,e,t,o,r){var a,i;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||et(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||et(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(at,"$1")),i=e.toLowerCase(),e=i in n||e=="onFocusOut"||e=="onFocusIn"?i.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=Me,n.addEventListener(e,a?we:ze,a)):n.removeEventListener(e,a?we:ze,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function tt(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Me++;else if(e.t<t.u)return;return t(h.event?h.event(e):e)}}}function Ne(n,e,t,o,r,a,i,c,p,l){var d,u,y,m,v,C,g,x,b,D,T,ce,X,Je,ue,W,Ie,M=e.type;if(e.constructor!=null)return null;128&t.__u&&(p=!!(32&t.__u),a=[c=e.__e=t.__e]),(d=h.__b)&&d(e);e:if(typeof M=="function")try{if(x=e.props,b="prototype"in M&&M.prototype.render,D=(d=M.contextType)&&o[d.__c],T=d?D?D.props.value:d.__:o,t.__c?g=(u=e.__c=t.__c).__=u.__E:(b?e.__c=u=new M(x,T):(e.__c=u=new f(x,T),u.constructor=M,u.render=wn),D&&D.sub(u),u.props=x,u.state||(u.state={}),u.context=T,u.__n=o,y=u.__d=!0,u.__h=[],u._sb=[]),b&&u.__s==null&&(u.__s=u.state),b&&M.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=N({},u.__s)),N(u.__s,M.getDerivedStateFromProps(x,u.__s))),m=u.props,v=u.state,u.__v=e,y)b&&M.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),b&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b&&M.getDerivedStateFromProps==null&&x!==m&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(x,T),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(x,u.__s,T)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(u.props=x,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(Z){Z&&(Z.__=e)}),ce=0;ce<u._sb.length;ce++)u.__h.push(u._sb[ce]);u._sb=[],u.__h.length&&i.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(x,u.__s,T),b&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(m,v,C)})}if(u.context=T,u.props=x,u.__P=n,u.__e=!1,X=h.__r,Je=0,b){for(u.state=u.__s,u.__d=!1,X&&X(e),d=u.render(u.props,u.state,u.context),ue=0;ue<u._sb.length;ue++)u.__h.push(u._sb[ue]);u._sb=[]}else do u.__d=!1,X&&X(e),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++Je<25);u.state=u.__s,u.getChildContext!=null&&(o=N(N({},o),u.getChildContext())),b&&!y&&u.getSnapshotBeforeUpdate!=null&&(C=u.getSnapshotBeforeUpdate(m,v)),W=d,d!=null&&d.type===z&&d.key==null&&(W=lt(d.props.children)),c=ct(n,H(W)?W:[W],e,t,o,r,a,i,c,p,l),u.base=e.__e,e.__u&=-161,u.__h.length&&i.push(u),g&&(u.__E=u.__=null)}catch(Z){if(e.__v=null,p||a!=null)if(Z.then){for(e.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(Ie=a.length;Ie--;)Ae(a[Ie]);else e.__e=t.__e,e.__k=t.__k;h.__e(Z,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=zn(t.__e,e,t,o,r,a,i,p,l);return(d=h.diffed)&&d(e),128&e.__u?void 0:c}function pt(n,e,t){for(var o=0;o<t.length;o++)Le(t[o],t[++o],t[++o]);h.__c&&h.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){h.__e(a,r.__v)}})}function lt(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:H(n)?n.map(lt):N({},n)}function zn(n,e,t,o,r,a,i,c,p){var l,d,u,y,m,v,C,g=t.props,x=e.props,b=e.type;if(b=="svg"?r="http://www.w3.org/2000/svg":b=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(l=0;l<a.length;l++)if((m=a[l])&&"setAttribute"in m==!!b&&(b?m.localName==b:m.nodeType==3)){n=m,a[l]=null;break}}if(n==null){if(b==null)return document.createTextNode(x);n=document.createElementNS(r,b,x.is&&x),c&&(h.__m&&h.__m(e,a),c=!1),a=null}if(b==null)g===x||c&&n.data==x||(n.data=x);else{if(a=a&&me.call(n.childNodes),g=t.props||Q,!c&&a!=null)for(g={},l=0;l<n.attributes.length;l++)g[(m=n.attributes[l]).name]=m.value;for(l in g)if(m=g[l],l!="children"){if(l=="dangerouslySetInnerHTML")u=m;else if(!(l in x)){if(l=="value"&&"defaultValue"in x||l=="checked"&&"defaultChecked"in x)continue;pe(n,l,null,m,r)}}for(l in x)m=x[l],l=="children"?y=m:l=="dangerouslySetInnerHTML"?d=m:l=="value"?v=m:l=="checked"?C=m:c&&typeof m!="function"||g[l]===m||pe(n,l,m,g[l],r);if(d)c||u&&(d.__html==u.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(u&&(n.innerHTML=""),ct(e.type=="template"?n.content:n,H(y)?y:[y],e,t,o,b=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,i,a?a[0]:t.__k&&G(t,0),c,p),a!=null)for(l=a.length;l--;)Ae(a[l]);c||(l="value",b=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[l]||b=="progress"&&!v||b=="option"&&v!=g[l])&&pe(n,l,v,g[l],r),l="checked",C!=null&&C!=n[l]&&pe(n,l,C,g[l],r))}return n}function Le(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){h.__e(r,t)}}function dt(n,e,t){var o,r;if(h.unmount&&h.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||Le(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){h.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&dt(o[r],e,t||typeof n.type!="function");t||Ae(n.__e),n.__c=n.__=n.__e=void 0}function wn(n,e,t){return this.constructor(n,t)}function Y(n,e,t){var o,r,a,i;e==document&&(e=document.documentElement),h.__&&h.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],i=[],Ne(e,n=(!o&&t||e).__k=s(z,null,[n]),r||Q,Q,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?me.call(e.childNodes):null,a,!o&&t?t:r?r.__e:e.firstChild,o,i),pt(a,n,i)}me=it.slice,h={__e:function(n,e,t,o){for(var r,a,i;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),i=r.__d),i)return r.__E=r}catch(c){n=c}throw n}},nt=0,gn=function(n){return n!=null&&n.constructor==null},f.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N({},this.state),typeof n=="function"&&(n=n(N({},t),this.props)),n&&N(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),qe(this))},f.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),qe(this))},f.prototype.render=z,F=[],ot=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,rt=function(n,e){return n.__v.__b-e.__v.__b},de.__r=0,at=/(PointerCapture)$|Capture$/i,Me=0,ze=tt(!1),we=tt(!0),_n=0;var mt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var ht=`#version 300 es

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
}`;var ft=`const int ShapeTypeNone = -5000;
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
}`;var Ln=/^#include\s+\<([^\>]+)\>/gmi,j=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Ln);for(let r of o){let a=e[r[1]];a===void 0&&(console.error(`Unknown shader include ${r[1]}`),a=""),t=t.replace(r[0],a)}return t}static create(e,t,o,r){function a(){p!=null&&(e.detachShader(p,i),e.detachShader(p,c)),i!=null&&e.deleteShader(i),c!=null&&e.deleteShader(c)}let i=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(i,this.assembleShader(t,o)),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(i);throw console.error("Vertex shader compile error",l),a(),new Error(`Vertex shader compile error ${l}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let l=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",l),a(),new Error(`Fragment shader compile error ${l}`)}let p=e.createProgram();if(e.attachShader(p,i),e.attachShader(p,c),e.linkProgram(p),a(),!e.getProgramParameter(p,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(p);let l=e.getProgramInfoLog(p);throw console.error("Shader link error",l),new Error(`Shader link error ${l}`)}return new n(p)}};var P=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function yt(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function On(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z;return Math.sqrt(t**2+o**2+r**2)}function xt(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,a=e.z,i=t.w*2,c=t.y*a-t.z*r,p=t.z*o-t.x*a,l=t.x*r-t.y*o,d=(t.y*l-t.z*p)*2,u=(t.z*c-t.x*l)*2,y=(t.x*p-t.y*c)*2;return c*=i,p*=i,l*=i,n.x=o+c+d,n.y=r+p+u,n.z=a+l+y,n}function I(){return{x:0,y:0,z:0}}function Oe(){return{x:1,y:1,z:1}}function Te(n,e,t=1e-4){return On(n,e)<t}function he(){return{x:1,y:1,z:1,w:1}}function R(){return{x:0,y:0,z:0,w:1}}function bt(n,e,t,o,r=P.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let i=Math.sin(e),c=Math.cos(e),p=Math.sin(t),l=Math.cos(t),d=Math.sin(o),u=Math.cos(o);switch(r){case"xyz":n.x=i*l*u+c*p*d,n.y=c*p*u-i*l*d,n.z=c*l*d+i*p*u,n.w=c*l*u-i*p*d;break;case"xzy":n.x=i*l*u-c*p*d,n.y=c*p*u-i*l*d,n.z=c*l*d+i*p*u,n.w=c*l*u+i*p*d;break;case"yxz":n.x=i*l*u+c*p*d,n.y=c*p*u-i*l*d,n.z=c*l*d-i*p*u,n.w=c*l*u+i*p*d;break;case"yzx":n.x=i*l*u+c*p*d,n.y=c*p*u+i*l*d,n.z=c*l*d-i*p*u,n.w=c*l*u-i*p*d;break;case"zxy":n.x=i*l*u-c*p*d,n.y=c*p*u+i*l*d,n.z=c*l*d+i*p*u,n.w=c*l*u-i*p*d;break;case"zyx":n.x=i*l*u-c*p*d,n.y=c*p*u+i*l*d,n.z=c*l*d-i*p*u,n.w=c*l*u+i*p*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Tn=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Re=R();function Rn(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*t,i=e.y*t,c=e.y*o,p=e.z*t,l=e.z*o,d=e.z*r,u=e.w*t,y=e.w*o,m=e.w*r;return n[0]=1-c-d,n[1]=i-m,n[2]=p+y,n[3]=i+m,n[4]=1-a-d,n[5]=l-u,n[6]=p-y,n[7]=l+u,n[8]=1-a-c,n}var $=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uHighlight;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=I();cameraTarget=I();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);prevShapes;prevOperations;prevMaterials;prevLights;constructor(e,t,o,r,a,i,c,p,l,d,u,y,m,v,C,g){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=i,this.uHighlight=c,this.uMaterials=d,this.uLights=p,this.uNumLights=l,this.uCameraPosition=u,this.uCameraMatrix=y,this.uAspectRatio=m,this.uMaxMarchingSteps=v,this.uEpsilon=C,this.uFlags=g}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){bt(Re,this.cameraRotationX,this.cameraRotationY,0);let e=xt(I(),{x:0,y:0,z:1},Re);yt(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Rn(this.cameraMatrixArray,Re)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){if(this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){console.info("Rendering new operations");let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniform2iv(this.uHighlight,[0,1]),this.prevOperations=e.getOperations()}this.prevShapes!==e.getShapes()&&(console.info("Rendering new shapes"),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Tn),t.STATIC_DRAW);let r={"sdf-functions":ft},a=j.create(t,r,mt,ht);t.useProgram(a.program);let i=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),p=this.getUniform(t,a,"uCameraPosition"),l=this.getUniform(t,a,"uAspectRatio"),d=this.getUniform(t,a,"uShapes"),u=this.getUniform(t,a,"uOperations"),y=this.getUniform(t,a,"uNumOperations"),m=this.getUniform(t,a,"uHighlight"),v=this.getUniform(t,a,"uMaterials"),C=this.getUniform(t,a,"uLights"),g=this.getUniform(t,a,"uNumLights"),x=this.getUniform(t,a,"uMaxMarchingSteps"),b=this.getUniform(t,a,"uEpsilon"),D=this.getUniform(t,a,"uFlags");return new n(t,a,o,d,u,y,m,C,g,v,p,c,l,x,b,D)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var gt=$e(vt()),Fn={renderScale:1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001,pixelated:!1},ke={options:Fn},_=new gt.default({viewports:[ke],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1}});var Ve=-500,_t=-600,St=-700,Ct=-800,It=-900,fe=-5e3,zt=-6e3,wt=-7e3,Mt=-8e3,Ge=0,Ee=1,At=2;function ye(){return crypto.randomUUID()}function Nt(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Lt(n){let e=n.nodes[n.rootNodeId];if(!e)return[];let t=new Array(Object.keys(n.nodes).length);return Ft(e,n.nodes,0,0,t),t}function Pe(n){return{colour:he(),radius:10,...n}}function Ot(n,e){return{name:n,id:ye(),position:I(),rotation:R(),childrenIds:[],childOpCode:"none",shape:Be({}),hasShape:!1,light:Pe({}),hasLight:!1,...e}}function Ue(n,e,t,o){return{name:n,id:ye(),position:t??I(),rotation:o??R(),childrenIds:[],childOpCode:"none",shape:Be({}),hasShape:!1,light:e!=null?Pe(e):void 0,hasLight:e!=null}}function U(n,e,t,o,r){return{name:n,id:ye(),position:t??I(),rotation:o??R(),shape:e!=null?Be(e):void 0,hasShape:e!=null,light:Pe({}),hasLight:!1,childrenIds:[],childOpCode:r??"none"}}function Be(n){return{maxSize:0,type:"none",shapeParams:I(),diffuseColour:{x:.7,y:.3,z:.2},specularColour:{x:1,y:.8,z:.9},lightingModel:"lambert",shininess:10,...n}}function k(n,e){n.childrenIds.push(e.id),e.parentId=n.id}function Tt(n,e,t){e={...e,childrenIds:[...e.childrenIds,t.id]},t={...t,parentId:e.id};let o={...n.nodes,[e.id]:e,[t.id]:t};return{...n,nodes:o}}function Rt(n,e){if(e.parentId===void 0)return n;let t=n.nodes[e.parentId],o=t.childrenIds.findIndex(r=>r===e.id);if(o>=0){let r=[...t.childrenIds];r.splice(o,1),t={...t,childrenIds:r};let a={...n.nodes,[t.id]:t};return delete a[e.id],{...n,nodes:a}}return n}function Dt(n,e,t){if(t.parentId==null)return n;let o=n.nodes[t.parentId],r=o.childrenIds.findIndex(i=>i===t.id);if(r>=0){let i=[...o.childrenIds];i.splice(r,1),o={...o,childrenIds:i}}e.childrenIds.includes(t.id)||(e={...e,childrenIds:[...e.childrenIds,t.id]}),t={...t,parentId:e.id};let a={...n.nodes,[o.id]:o,[e.id]:e,[t.id]:t};return{...n,nodes:a}}function Ft(n,e,t,o,r){if(r[o]={node:n,depth:t},n.childrenIds!=null)for(let a of n.childrenIds){let i=e[a];i&&(o=Ft(i,e,t+1,o+1,r))}return o}function Xe(n,e){return t=>{let o=t.viewports[n]??ke,r={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=r,{viewports:a}}}function xe(n){return e=>({reparentModal:{...e.reparentModal,...n}})}function be(n){return e=>({rawSceneModal:{...e.rawSceneModal,...n}})}function kt(n){return e=>({sceneTree:Nt(e.sceneTree,n)})}function L(n){return()=>({sceneTree:n})}function Vt(n){return e=>{let t;if(n){for(let o of Object.values(e.sceneTree.nodes))if(o.childrenIds.includes(n)){t=o.id;break}}return{selectedNodeId:n,selectedParentNodeId:t}}}var Gt=n=>s("label",{style:{display:"inline-block"}},n.label,s("input",{style:{display:"block"},type:"range",...n.inputProps})),q=class extends f{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:a,epsilon:i,maxMarchingStep:c}=this.props.options;return s("div",{class:"viewport-options"},s("span",{class:"control-group"},s("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),s("select",{onChange:this.changeRenderScale,value:o},s("option",{value:"2"},"2x"),s("option",{value:"1.5"},"1.5x"),s("option",{value:"1"},"1x"),s("option",{value:"0.5"},"0.5x"),s("option",{value:"0.25"},"0.25x"),s("option",{value:"0.125"},"0.125x")),s("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),s("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),s("button",{onClick:this.showRawScene},"JSON Scene")),s(Gt,{label:`Epsilon ${i}`,inputProps:{value:i,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),s(Gt,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}showRawScene=()=>{_.execute(be({show:!0}))};changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),_.execute(Xe(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?_.execute(Xe(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var ve=class extends f{canvasRef=E();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=$.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),s("div",{class:"viewport outer-panel"},s("canvas",{className:e,ref:this.canvasRef}),s(q,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function kn(n){return Object.hasOwn(n,"z")}function Vn(n){return Object.hasOwn(n,"w")}var w=class extends f{render(){let e=this.props.vector,t=this.props.disabled,o=kn(e),r=Vn(e);return s("div",{class:"vector control-group"},s("input",{class:"input",disabled:t,type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),s("input",{class:"input",disabled:t,type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),o&&s("input",{class:"input",disabled:t,type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),r&&s("input",{class:"input",disabled:t,type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,a=parseFloat(r);if(!isFinite(a)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,a),this.props.onChange(o,{...o,[t]:a})}};var ee=class extends f{render(){let e=this.props.shape,t=e.lightingModel==="phong";return s("div",null,s("div",null,s("strong",null,"Type")," ",s("select",{value:e.type??"none",onChange:this.onChangeType},s("option",{value:"none"},"None"),s("option",{value:"box"},"Box"),s("option",{value:"sphere"},"Sphere"),s("option",{value:"hexPrism"},"Hex Prism"))),s("div",null,s("strong",null,"Shape Params")," ",s(w,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),s("div",null,s("strong",null,"Lighting Model")," ",s("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},s("option",{value:"unlit"},"Unlit"),s("option",{value:"lambert"},"Lambert"),s("option",{value:"phong"},"Phong"))),s("div",null,s("strong",null,"Diffuse Colour")," ",s(w,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),s("div",null,s("strong",null,"Specular Colour")," ",s(w,{disabled:!t,vector:e.specularColour,onChange:this.onChangeSpecularColour})),s("div",null,s("strong",null,"Shininess")," ",s("input",{class:"input",disabled:!t,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeLightingModel=e=>{let t=e.target.value;this.updateField(t,"lightingModel")};onChangeShininess=e=>{let t=parseFloat(e.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var te=class extends f{render(){let e=this.props.light;return e===void 0?s("div",null,"Empty Light"):s("div",null,s("div",null,s("strong",null,"Colour")," ",s(w,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var ne=class extends f{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:t}=this.props;if(e==null)return s("div",{class:"scene-node-view"},"No node selected");let o=e.parentId!=null?t.nodes[e.parentId]:void 0,r=e.childOpCode??"none";return s("div",{class:"scene-node-view"},s("div",null,s("strong",null,"Name")," ",s("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),s("div",null,s("strong",null,"Position")," ",s(w,{vector:e.position,onChange:this.onChangePosition})),s("div",null,s("strong",null,"Rotation")," ",s(w,{vector:e.rotation,onChange:this.onChangeRotation})),s("div",null,s("strong",null,"Op Code")," ",s("select",{value:r,onChange:this.onChangeOpCode},s("option",{value:"none"},"None"),s("option",{value:"union"},"Union"),s("option",{value:"intersection"},"Intersection"),s("option",{value:"subtraction"},"Subtraction"))),s("div",null,s("strong",null,"Shape")," ",s("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&s(ee,{shape:e.shape,onChange:this.onChangeShape})),s("div",null,s("strong",null,"Light")," ",s("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&s(te,{light:e.light,onChange:this.onChangeLight})),s("div",null,s("strong",null,"Children")),s("div",{class:"control-group"},s("button",{onClick:this.addChild},"Add"),o!=null&&s(z,null,s("button",{onClick:this.deleteSelf},"Delete"),s("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Tt(this.props.sceneTree,this.props.node,Ot("New Child",{}));_.execute(L(e))};deleteSelf=()=>{let e=Rt(this.props.sceneTree,this.props.node);_.execute(L(e))};reparent=()=>{let{node:e,sceneTree:t}=this.props;if((e.parentId!=null?t.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}_.execute(xe({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};function We(n,e,t){return(t==null||t===!0)&&(n+=" "+e),n}var oe=class extends f{render(){let{depth:e,node:t,isSelected:o,disable:r}=this.props,a=We(We("scene-node-tree-item","is-selected",o),"is-disabled",r===!0);return s("div",{class:a,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var V=class extends f{render(){return s("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],a=[];if(r==null)return a;let i=Lt(e);for(let c of i){let p=c.node.id===t;a.push(s(oe,{isSelected:p,depth:c.depth,key:c.node.id,node:c.node,onClicked:o}))}return a}};var re=class extends f{render(){let{sceneTree:e,selectedNodeId:t}=this.props,o=e.nodes[t];return s("div",{class:"scene-tree"},s("div",{class:"scene-tree__contents outer-panel"},s("div",{class:"inner-panel"},s(V,{sceneTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),s("div",{class:"inner-panel scene-tree__nodes"},s(ne,{sceneTree:e,node:o,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{_.execute(Vt(e.id))};onChangeSelectedNode=(e,t)=>{_.execute(kt(e))}};var Et,A,Ze,Pt;var Jt=[],S=h,Ut=S.__b,Bt=S.__r,Xt=S.diffed,Wt=S.__c,Zt=S.unmount,Qt=S.__;function Gn(){for(var n;n=Jt.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(ge),n.__H.__h.forEach(Qe),n.__H.__h=[]}catch(e){n.__H.__h=[],S.__e(e,n.__v)}}S.__b=function(n){A=null,Ut&&Ut(n)},S.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Qt&&Qt(n,e)},S.__r=function(n){Bt&&Bt(n),Et=0;var e=(A=n.__c).__H;e&&(Ze===A?(e.__h=[],A.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(ge),e.__h.forEach(Qe),e.__h=[],Et=0)),Ze=A},S.diffed=function(n){Xt&&Xt(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Jt.push(e)!==1&&Pt===S.requestAnimationFrame||((Pt=S.requestAnimationFrame)||En)(Gn)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Ze=A=null},S.__c=function(n,e){e.some(function(t){try{t.__h.forEach(ge),t.__h=t.__h.filter(function(o){return!o.__||Qe(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],S.__e(o,t.__v)}}),Wt&&Wt(n,e)},S.unmount=function(n){Zt&&Zt(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{ge(o)}catch(r){e=r}}),t.__H=void 0,e&&S.__e(e,t.__v))};var Ht=typeof requestAnimationFrame=="function";function En(n){var e,t=function(){clearTimeout(o),Ht&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,35);Ht&&(e=requestAnimationFrame(t))}function ge(n){var e=A,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),A=e}function Qe(n){var e=A;n.__c=n.__(),A=e}function Un(n,e){for(var t in e)n[t]=e[t];return n}function Yt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function jt(n,e){this.props=n,this.context=e}(jt.prototype=new f).isPureReactComponent=!0,jt.prototype.shouldComponentUpdate=function(n,e){return Yt(this.props,n)||Yt(this.state,e)};var $t=h.__b;h.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),$t&&$t(n)};var ja=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Bn=h.__e;h.__e=function(n,e,t,o){if(n.then){for(var r,a=e;a=a.__;)if((r=a.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Bn(n,e,t,o)};var Kt=h.unmount;function rn(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=Un({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return rn(o,e,t)})),n}function an(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return an(o,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function He(){this.__u=0,this.o=null,this.__b=null}function sn(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function _e(){this.i=null,this.l=null}h.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),Kt&&Kt(n)},(He.prototype=new f).__c=function(n,e){var t=e.__c,o=this;o.o==null&&(o.o=[]),o.o.push(t);var r=sn(o.__v),a=!1,i=function(){a||(a=!0,t.__R=null,r?r(c):c())};t.__R=i;var c=function(){if(!--o.__u){if(o.state.__a){var p=o.state.__a;o.__v.__k[0]=an(p,p.__c.__P,p.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.o.pop();)l.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(i,i)},He.prototype.componentWillUnmount=function(){this.o=[]},He.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=rn(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__a&&s(z,null,n.fallback);return r&&(r.__u&=-33),[s(z,null,e.__a?null:n.children),r]};var qt=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};function Xn(n){return this.getChildContext=function(){return n.context},n.children}function Wn(n){var e=this,t=n.h;if(e.componentWillUnmount=function(){Y(null,e.v),e.v=null,e.h=null},e.h&&e.h!==t&&e.componentWillUnmount(),!e.v){for(var o=e.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;e.h=t,e.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},insertBefore:function(r,a){this.childNodes.push(r),e.h.insertBefore(r,a)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.h.removeChild(r)}}}Y(s(Xn,{context:e.context},n.__v),e.v)}function cn(n,e){var t=s(Wn,{__v:n,h:e});return t.containerInfo=e,t}(_e.prototype=new f).__a=function(n){var e=this,t=sn(e.__v),o=e.l.get(n);return o[0]++,function(r){var a=function(){e.props.revealOrder?(o.push(r),qt(e,n,o)):r()};t?t(a):a()}},_e.prototype.render=function(n){this.i=null,this.l=new Map;var e=J(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},_e.prototype.componentDidUpdate=_e.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){qt(n,t,e)})};var Zn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Hn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Jn=/[A-Z0-9]/g,Yn=typeof document<"u",jn=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(f.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var en=h.event;function $n(){}function Kn(){return this.cancelBubble}function qn(){return this.defaultPrevented}h.event=function(n){return en&&(n=en(n)),n.persist=$n,n.isPropagationStopped=Kn,n.isDefaultPrevented=qn,n.nativeEvent=n};var un,eo={enumerable:!1,configurable:!0,get:function(){return this.class}},tn=h.vnode;h.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,o=e.type,r={},a=o.indexOf("-")===-1;for(var i in t){var c=t[i];if(!(i==="value"&&"defaultValue"in t&&c==null||Yn&&i==="children"&&o==="noscript"||i==="class"||i==="className")){var p=i.toLowerCase();i==="defaultValue"&&"value"in t&&t.value==null?i="value":i==="download"&&c===!0?c="":p==="translate"&&c==="no"?c=!1:p[0]==="o"&&p[1]==="n"?p==="ondoubleclick"?i="ondblclick":p!=="onchange"||o!=="input"&&o!=="textarea"||jn(t.type)?p==="onfocus"?i="onfocusin":p==="onblur"?i="onfocusout":Hn.test(i)&&(i=p):p=i="oninput":a&&Qn.test(i)?i=i.replace(Jn,"-$&").toLowerCase():c===null&&(c=void 0),p==="oninput"&&r[i=p]&&(i="oninputCapture"),r[i]=c}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=J(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=J(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",eo)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(n),n.$$typeof=Zn,tn&&tn(n)};var nn=h.__r;h.__r=function(n){nn&&nn(n),un=n.__c};var on=h.diffed;h.diffed=function(n){on&&on(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),un=null};var O=class n extends f{static currentNumModals={};static prevNumModals={};render(){let{show:e,onRequestClose:t}=this.props;if(e===!1)return null;let o=this.props.portalContainer??"modals",r=n.getModalEl(o),a="modal-body outer-panel ",i=this.props.class!=null?a+this.props.class:a;return cn(s("div",{class:"modal-backdrop",onPointerDown:t},s("div",{class:i,onPointerDown:this.preventClose},this.props.children)),r)}preventClose=e=>{e.stopImmediatePropagation()};static afterRender(){let e,t;for(let o in this.currentNumModals){let r=this.currentNumModals[o],a=this.prevNumModals[o]||0;r===0&&a>0?(e===void 0&&(e=[]),e.push(o)):r>0&&a===0&&(t===void 0&&(t=[]),t.push(o))}for(let o in this.prevNumModals)this.currentNumModals.hasOwnProperty(o)||(e===void 0&&(e=[]),e.push(o));if(this.prevNumModals=this.currentNumModals,this.currentNumModals={},e!=null)for(let o of e){let r=document.getElementById(o);r.style.display="none"}if(t!=null)for(let o of t){let r=document.getElementById(o);r.style.display="block"}}static getModalEl(e){let t=document.getElementById(e),o=this.currentNumModals[e]||0;return this.currentNumModals[e]=o+1,t}};var ae=class extends f{render(){let{show:e,sceneTree:t,disabledNodeIds:o,onRequestClose:r}=this.props;return s(O,{show:e,onRequestClose:r},s(V,{sceneTree:t,disabledNodeId:o,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var ie=class extends f{render(){let{show:e}=this.props.state,t=this.getDisabledNodeIds();return s(ae,{show:e,disabledNodeIds:t,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{_.execute(xe({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:t}=this.props.state;if(!e)return[];let{sceneTree:o}=this.props,r=o.nodes[t];return[r.id,r.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let t=this.props.sceneTree.nodes[this.props.state.childNodeId],o=Dt(this.props.sceneTree,e,t);_.execute(L(o))}};var se=class extends f{prevSceneTree=void 0;preRef=E();render(){let{show:e}=this.props.state,{sceneTree:t}=this.props,o="";return e&&this.prevSceneTree!==t&&(o=JSON.stringify(t,null,2)),s(O,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},s("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},s("pre",null,o)),s("span",{class:"control-group"},s("button",{onClick:this.loadFromHtml},"Load From Json"),s("label",{class:"button"},"Load From File",s("input",{type:"file",onChange:this.loadFromFile})),s("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{_.execute(be({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="scene.json",t.click(),URL.revokeObjectURL(t.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let o=new FileReader;o.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let t=e.target;typeof t.result=="string"?this.loadFromText(t.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let t=JSON.parse(e);t!=null&&_.execute(L(t))}};var Se=class extends f{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:t,sceneTree:o,selectedNodeId:r,reparentModal:a,rawSceneModal:i}=this.props.state;return console.log("App render",this.props.state),s(z,null,s("div",{class:"main-view"},s("div",{class:"viewports"},s(ve,{viewportIndex:0,options:t[0].options,sceneConverter:e})),s(re,{sceneTree:o,selectedNodeId:r})),s(ie,{state:a,sceneTree:o}),s(se,{state:i,sceneTree:o}))}};var B=$e(ln());var to=8,no=16,oo=8,ro={none:Ve,union:_t,intersection:St,subtraction:Ct,xor:It},ao={none:fe,box:zt,sphere:wt,hexPrism:Mt},io={unlit:Ge,lambert:Ee,phong:At};function so(n){return ao[n]||fe}function co(n){return ro[n]||Ve}function uo(n){return io[n]||Ge}var Ce=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,shapes:r,lights:a,materials:i}=n.createShapesFromNode(e);if((0,B.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),!(0,B.default)(this.shapes,r)){console.log("Shapes",this.shapes),this.shapes=r,this.shapeDataArray.length=0;for(let c=0;c<this.shapes.length;c++)this.updateShape(c)}if(!(0,B.default)(this.lights,a)){this.lights=a,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let c=0;c<this.lights.length;c++)this.updateLight(c)}if(!(0,B.default)(this.materials,i)){this.materials=i,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let c=0;c<this.materials.length;c++)this.updateMaterial(c)}}static createShapesFromNode(e){let t=e.nodes[e.rootNodeId];if(!t)return;let o=[],r=[],a=[],i=[];return this.pushToStack(o,r,a,i,t,e.nodes),o.reverse(),{operations:o,shapes:r,lights:a,materials:i}}static pushToStack(e,t,o,r,a,i){if(a.childOpCode!=="none"){let c=!0;for(let p=0;p<a.childrenIds.length;p++){let l=i[a.childrenIds[p]];(l.hasShape||l.childOpCode!=="none")&&(c?c=!1:e.push(a.childOpCode))}}if(a.hasShape){let c=t.findIndex(p=>(0,B.default)(p,a.shape));if(c<0){c=t.length;let p=n.convertToShape(a,r);p!=null&&t.push(p)}e.push(c)}if(a.hasLight){let c=n.convertToLight(a);c!=null&&o.push(c)}for(let c of a.childrenIds)this.pushToStack(e,t,o,r,i[c],i)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*to,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*oo,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.lightingModel,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.shininess}updateShape(e){let t=e*no,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?co(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r={diffuseColour:o.diffuseColour,lightingModel:uo(o.lightingModel),specularColour:o.specularColour,shininess:o.shininess},a=this.findApproxMaterial(r,t);return a<0&&(a=t.length,t.push(r)),{material:a,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:so(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:Oe(),lightingModel:Ee,specularColour:Oe(),shininess:10}}static createNewLight(){return{position:I(),radius:10,colour:he()}}static createNewShape(e){return{position:I(),rotation:R(),maxSize:0,shapeType:fe,shapeParams:I(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(!(r.lightingModel!==e.lightingModel||Math.abs(r.shininess-e.shininess)<1e-4)&&Te(r.diffuseColour,e.diffuseColour)&&Te(r.specularColour,e.specularColour))return o}return-1}};var dn=new Ce;_.subscribe(n=>n.sceneTree,po);function po(n){dn.updateShapesFromTree(n.sceneTree)}var lo=document.getElementById("app");function mn(){Y(s(Se,{state:_.state(),sceneConverter:dn}),lo),O.afterRender()}mn();_.subscribeAny(mn);function mo(...n){let e={};for(let t of n)e[t.id]=t;return e}function ho(){let n=U("Root",null,void 0,void 0,"subtraction"),e=U("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5,diffuseColour:{x:.5,y:.5,z:.5}}),t=U("Box & Sphere",void 0,void 0,void 0,"union");k(n,e),k(n,t);let o=U("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3},lightingModel:"lambert"},{x:0,y:-1.5,z:0}),r=U("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.2,z:.9},lightingModel:"phong"});k(t,o),k(t,r);let a=Ue("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),i=Ue("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});k(n,a),k(n,i);let p={nodes:mo(n,e,t,o,r,a,i),rootNodeId:n.id};_.execute(L(p))}ho();})();
//# sourceMappingURL=webgl-index.js.map
