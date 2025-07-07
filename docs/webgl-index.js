(()=>{var bn=Object.create;var $e=Object.defineProperty;var gn=Object.getOwnPropertyDescriptor;var vn=Object.getOwnPropertyNames;var _n=Object.getPrototypeOf,Cn=Object.prototype.hasOwnProperty;var qe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var In=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of vn(e))!Cn.call(n,r)&&r!==t&&$e(n,r,{get:()=>e[r],enumerable:!(o=gn(e,r))||o.enumerable});return n};var et=(n,e,t)=>(t=n!=null?bn(_n(n)):{},In(e||!n||!n.__esModule?$e(t,"default",{value:n,enumerable:!0}):t,n));var Ct=qe(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.EmptyModifier=void 0;var Bn=()=>null;te.EmptyModifier=Bn;var Be=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let i=e(this.currentState),a={selector:new Ee(e,i,o,r),subscription:t};return this.subscriptions.push(a),()=>{let p=this.subscriptions.indexOf(a);p>=0&&this.subscriptions.splice(p,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};te.default=Be;var Ee=class{constructor(e,t=void 0,o,r){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var fn=qe((Ya,hn)=>{"use strict";hn.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,i;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),o=i.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=o;r--!==0;){var a=i[r];if(!n(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}});var fe,f,it,Sn,E,tt,at,st,ct,Ne,Le,Oe,zn,j={},ut=[],wn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function N(n,e){for(var t in e)n[t]=e[t];return n}function Te(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function s(n,e,t){var o,r,i,a={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?fe.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return me(n,a,o,r,null)}function me(n,e,t,o,r){var i={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++it,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(i),i}function F(){return{current:null}}function S(n){return n.children}function y(n,e){this.props=n,this.context=e}function W(n,e){if(e==null)return n.__?W(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?W(n):null}function pt(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return pt(n)}}function nt(n){(!n.__d&&(n.__d=!0)&&E.push(n)&&!he.__r++||tt!=f.debounceRendering)&&((tt=f.debounceRendering)||at)(he)}function he(){for(var n,e,t,o,r,i,a,p=1;E.length;)E.length>p&&E.sort(st),n=E.shift(),p=E.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,i=[],a=[],e.__P&&((t=N({},o)).__v=o.__v+1,f.vnode&&f.vnode(t),Re(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,i,r??W(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,mt(i,t,a),t.__e!=r&&pt(t)));he.__r=0}function lt(n,e,t,o,r,i,a,p,l,u,d){var c,h,m,v,I,_,x=o&&o.__k||ut,b=e.length;for(l=An(t,e,x,l,b),c=0;c<b;c++)(m=t.__k[c])!=null&&(h=m.__i==-1?j:x[m.__i]||j,m.__i=c,_=Re(n,m,h,r,i,a,p,l,u,d),v=m.__e,m.ref&&h.ref!=m.ref&&(h.ref&&De(h.ref,null,m),d.push(m.ref,m.__c||v,m)),I==null&&v!=null&&(I=v),4&m.__u||h.__k===m.__k?l=dt(m,l,n):typeof m.type=="function"&&_!==void 0?l=_:v&&(l=v.nextSibling),m.__u&=-7);return t.__e=I,l}function An(n,e,t,o,r){var i,a,p,l,u,d=t.length,c=d,h=0;for(n.__k=new Array(r),i=0;i<r;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=i+h,(a=n.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?me(null,a,null,null,null):Y(a)?me(S,{children:a},null,null,null):a.constructor==null&&a.__b>0?me(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=n,a.__b=n.__b+1,p=null,(u=a.__i=Mn(a,t,l,c))!=-1&&(c--,(p=t[u])&&(p.__u|=2)),p==null||p.__v==null?(u==-1&&(r>d?h--:r<d&&h++),typeof a.type!="function"&&(a.__u|=4)):u!=l&&(u==l-1?h--:u==l+1?h++:(u>l?h--:h++,a.__u|=4))):n.__k[i]=null;if(c)for(i=0;i<d;i++)(p=t[i])!=null&&(2&p.__u)==0&&(p.__e==o&&(o=W(p)),ft(p,p));return o}function dt(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=dt(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=W(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function K(n,e){return e=e||[],n==null||typeof n=="boolean"||(Y(n)?n.some(function(t){K(t,e)}):e.push(n)),e}function Mn(n,e,t,o){var r,i,a=n.key,p=n.type,l=e[t];if(l===null&&n.key==null||l&&a==l.key&&p==l.type&&(2&l.__u)==0)return t;if(o>(l!=null&&(2&l.__u)==0?1:0))for(r=t-1,i=t+1;r>=0||i<e.length;){if(r>=0){if((l=e[r])&&(2&l.__u)==0&&a==l.key&&p==l.type)return r;r--}if(i<e.length){if((l=e[i])&&(2&l.__u)==0&&a==l.key&&p==l.type)return i;i++}}return-1}function ot(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||wn.test(e)?t:t+"px"}function de(n,e,t,o,r){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||ot(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||ot(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(ct,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?o?t.u=o.u:(t.u=Ne,n.addEventListener(e,i?Oe:Le,i)):n.removeEventListener(e,i?Oe:Le,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function rt(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Ne++;else if(e.t<t.u)return;return t(f.event?f.event(e):e)}}}function Re(n,e,t,o,r,i,a,p,l,u){var d,c,h,m,v,I,_,x,b,O,w,R,D,Q,P,H,Me,M=e.type;if(e.constructor!=null)return null;128&t.__u&&(l=!!(32&t.__u),i=[p=e.__e=t.__e]),(d=f.__b)&&d(e);e:if(typeof M=="function")try{if(x=e.props,b="prototype"in M&&M.prototype.render,O=(d=M.contextType)&&o[d.__c],w=d?O?O.props.value:d.__:o,t.__c?_=(c=e.__c=t.__c).__=c.__E:(b?e.__c=c=new M(x,w):(e.__c=c=new y(x,w),c.constructor=M,c.render=On),O&&O.sub(c),c.props=x,c.state||(c.state={}),c.context=w,c.__n=o,h=c.__d=!0,c.__h=[],c._sb=[]),b&&c.__s==null&&(c.__s=c.state),b&&M.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=N({},c.__s)),N(c.__s,M.getDerivedStateFromProps(x,c.__s))),m=c.props,v=c.state,c.__v=e,h)b&&M.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),b&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b&&M.getDerivedStateFromProps==null&&x!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,w),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,w)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(c.props=x,c.state=c.__s,c.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(J){J&&(J.__=e)}),R=0;R<c._sb.length;R++)c.__h.push(c._sb[R]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,w),b&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,v,I)})}if(c.context=w,c.props=x,c.__P=n,c.__e=!1,D=f.__r,Q=0,b){for(c.state=c.__s,c.__d=!1,D&&D(e),d=c.render(c.props,c.state,c.context),P=0;P<c._sb.length;P++)c.__h.push(c._sb[P]);c._sb=[]}else do c.__d=!1,D&&D(e),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Q<25);c.state=c.__s,c.getChildContext!=null&&(o=N(N({},o),c.getChildContext())),b&&!h&&c.getSnapshotBeforeUpdate!=null&&(I=c.getSnapshotBeforeUpdate(m,v)),H=d,d!=null&&d.type===S&&d.key==null&&(H=ht(d.props.children)),p=lt(n,Y(H)?H:[H],e,t,o,r,i,a,p,l,u),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),_&&(c.__E=c.__=null)}catch(J){if(e.__v=null,l||i!=null)if(J.then){for(e.__u|=l?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;i[i.indexOf(p)]=null,e.__e=p}else for(Me=i.length;Me--;)Te(i[Me]);else e.__e=t.__e,e.__k=t.__k;f.__e(J,e,t)}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):p=e.__e=Ln(t.__e,e,t,o,r,i,a,l,u);return(d=f.diffed)&&d(e),128&e.__u?void 0:p}function mt(n,e,t){for(var o=0;o<t.length;o++)De(t[o],t[++o],t[++o]);f.__c&&f.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(i){i.call(r)})}catch(i){f.__e(i,r.__v)}})}function ht(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:Y(n)?n.map(ht):N({},n)}function Ln(n,e,t,o,r,i,a,p,l){var u,d,c,h,m,v,I,_=t.props,x=e.props,b=e.type;if(b=="svg"?r="http://www.w3.org/2000/svg":b=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((m=i[u])&&"setAttribute"in m==!!b&&(b?m.localName==b:m.nodeType==3)){n=m,i[u]=null;break}}if(n==null){if(b==null)return document.createTextNode(x);n=document.createElementNS(r,b,x.is&&x),p&&(f.__m&&f.__m(e,i),p=!1),i=null}if(b==null)_===x||p&&n.data==x||(n.data=x);else{if(i=i&&fe.call(n.childNodes),_=t.props||j,!p&&i!=null)for(_={},u=0;u<n.attributes.length;u++)_[(m=n.attributes[u]).name]=m.value;for(u in _)if(m=_[u],u!="children"){if(u=="dangerouslySetInnerHTML")c=m;else if(!(u in x)){if(u=="value"&&"defaultValue"in x||u=="checked"&&"defaultChecked"in x)continue;de(n,u,null,m,r)}}for(u in x)m=x[u],u=="children"?h=m:u=="dangerouslySetInnerHTML"?d=m:u=="value"?v=m:u=="checked"?I=m:p&&typeof m!="function"||_[u]===m||de(n,u,m,_[u],r);if(d)p||c&&(d.__html==c.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(c&&(n.innerHTML=""),lt(e.type=="template"?n.content:n,Y(h)?h:[h],e,t,o,b=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:t.__k&&W(t,0),p,l),i!=null)for(u=i.length;u--;)Te(i[u]);p||(u="value",b=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[u]||b=="progress"&&!v||b=="option"&&v!=_[u])&&de(n,u,v,_[u],r),u="checked",I!=null&&I!=n[u]&&de(n,u,I,_[u],r))}return n}function De(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){f.__e(r,t)}}function ft(n,e,t){var o,r;if(f.unmount&&f.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||De(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){f.__e(i,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&ft(o[r],e,t||typeof n.type!="function");t||Te(n.__e),n.__c=n.__=n.__e=void 0}function On(n,e,t){return this.constructor(n,t)}function $(n,e,t){var o,r,i,a;e==document&&(e=document.documentElement),f.__&&f.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,i=[],a=[],Re(e,n=(!o&&t||e).__k=s(S,null,[n]),r||j,j,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?fe.call(e.childNodes):null,i,!o&&t?t:r?r.__e:e.firstChild,o,a),mt(i,n,a)}fe=ut.slice,f={__e:function(n,e,t,o){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),a=r.__d),a)return r.__E=r}catch(p){n=p}throw n}},it=0,Sn=function(n){return n!=null&&n.constructor==null},y.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N({},this.state),typeof n=="function"&&(n=n(N({},t),this.props)),n&&N(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),nt(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),nt(this))},y.prototype.render=S,E=[],at=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,st=function(n,e){return n.__v.__b-e.__v.__b},he.__r=0,ct=/(PointerCapture)$|Capture$/i,Ne=0,Le=rt(!1),Oe=rt(!0),zn=0;var yt=`#version 300 es

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
uniform int uCloudOperations[128];
uniform ivec2 uHighlight;
uniform int uNumOperations;
uniform int uNumCloudOperations;
uniform int uMaxMarchingSteps;
uniform float uEpsilon;

uniform sampler2D uNoise;

uniform bvec4 uFlags;

// #include <sdf-functions>
const int ShapeTypeNone = -5000;
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
}

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

vec2 sceneSDF(vec3 point, int stackStart, int stackEnd, int operations[128])
{
    if (stackEnd == 0)
    {
        return vec2(100, 0);
    }

    int depthStackIndex = -1;
    vec2 depthStack[32];

    for (int operationsIndex = stackStart; operationsIndex < stackEnd; operationsIndex++)
    {
        int operationOrIndex = operations[operationsIndex];

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
    return sceneSDF(point, 0, uNumOperations, uOperations);
}

vec2 cloudSDF(vec3 point)
{
    return sceneSDF(point, 0, uNumCloudOperations, uCloudOperations);
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
        vec2 dist = sceneSDF(rayOrigin + depth * rayDirection, stackStart, stackEnd, uOperations);
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
    // if (uHighlight < 0)
    // {
        return 0.0;
    // }

    // vec4 dist = rayMarch(rayOrigin, rayDirection, near, far, uHighlight, uHighlight + 1);
    // float r = dist.z / (float(uMaxMarchingSteps) * 0.15);
    // return smoothstep(0.75, 0.85, r);
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

const float MARCH_SIZE = 0.05;
vec2 cloudScene(vec3 p)
{
    // float distance = sdfTorus(p, vec2(1.0, 0.25));
    float distance = cloudSDF(p).x;
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
    float noise = texture(uNoise, oPosition).r * 0.05;
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
            depth += MARCH_SIZE + noise;

            if (density.y > 0.0)
            {
                vec4 color = vec4(mix(vec3(1.0,1.0,1.0), vec3(0.0, 0.0, 0.0), density.y), density.y );
                vec3 totalLightColour = ambientLight;

                for (int i = 0; i < uNumLights; i++)
                {
                    mat2x4 light = uLights[i];
                    vec3 lightPos = light[0].xyz;
                    vec3 lightColour = light[1].xyz;

                    vec3 toLight = normalize(p - lightPos);
                    float diffuse = clamp((density.y - cloudScene(p + 0.3 * toLight).y) / 0.3, 0.0, 1.0 );
                    totalLightColour += lightColour * diffuse;
                }
                color.rgb *= totalLightColour;
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
    vec4 cloudColour = cloudRaymarch(rayOrigin, rayDir, MIN_DIST, dist.x);
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
        fragColour.xyz += cloudColour.xyz * cloudColour.a;
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

        fragColour += cloudColour;
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
}`;var Dn=/^#include\s+\<([^\>]+)\>/gmi,q=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Dn);for(let r of o){let i=e[r[1]];i===void 0&&(console.error(`Unknown shader include ${r[1]}`),i=""),t=t.replace(r[0],i)}return t}static create(e,t,o,r){function i(){l!=null&&(e.detachShader(l,a),e.detachShader(l,p)),a!=null&&e.deleteShader(a),p!=null&&e.deleteShader(p)}let a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,this.assembleShader(t,o)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",u),i(),new Error(`Vertex shader compile error ${u}`)}let p=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(p,this.assembleShader(t,r)),e.compileShader(p),!e.getShaderParameter(p,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(p);throw console.error("Fragment shader compile error",u),i(),new Error(`Fragment shader compile error ${u}`)}let l=e.createProgram();if(e.attachShader(l,a),e.attachShader(l,p),e.linkProgram(l),i(),!e.getProgramParameter(l,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(l);let u=e.getProgramInfoLog(l);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new n(l)}};var Z=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function gt(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Fn(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z;return Math.sqrt(t**2+o**2+r**2)}function vt(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,i=e.z,a=t.w*2,p=t.y*i-t.z*r,l=t.z*o-t.x*i,u=t.x*r-t.y*o,d=(t.y*u-t.z*l)*2,c=(t.z*p-t.x*u)*2,h=(t.x*l-t.y*p)*2;return p*=a,l*=a,u*=a,n.x=o+p+d,n.y=r+l+c,n.z=i+u+h,n}function z(){return{x:0,y:0,z:0}}function Fe(){return{x:1,y:1,z:1}}function Ge(n,e,t=1e-4){return Fn(n,e)<t}function ye(){return{x:1,y:1,z:1,w:1}}function G(){return{x:0,y:0,z:0,w:1}}function _t(n,e,t,o,r=Z.ANGLE_ORDER){let i=Math.PI/360;e*=i,o*=i,t*=i;let a=Math.sin(e),p=Math.cos(e),l=Math.sin(t),u=Math.cos(t),d=Math.sin(o),c=Math.cos(o);switch(r){case"xyz":n.x=a*u*c+p*l*d,n.y=p*l*c-a*u*d,n.z=p*u*d+a*l*c,n.w=p*u*c-a*l*d;break;case"xzy":n.x=a*u*c-p*l*d,n.y=p*l*c-a*u*d,n.z=p*u*d+a*l*c,n.w=p*u*c+a*l*d;break;case"yxz":n.x=a*u*c+p*l*d,n.y=p*l*c-a*u*d,n.z=p*u*d-a*l*c,n.w=p*u*c+a*l*d;break;case"yzx":n.x=a*u*c+p*l*d,n.y=p*l*c+a*u*d,n.z=p*u*d-a*l*c,n.w=p*u*c-a*l*d;break;case"zxy":n.x=a*u*c-p*l*d,n.y=p*l*c+a*u*d,n.z=p*u*d+a*l*c,n.w=p*u*c-a*l*d;break;case"zyx":n.x=a*u*c-p*l*d,n.y=p*l*c+a*u*d,n.z=p*u*d-a*l*c,n.w=p*u*c+a*l*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Gn=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Ue=G();function Un(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,i=e.x*t,a=e.y*t,p=e.y*o,l=e.z*t,u=e.z*o,d=e.z*r,c=e.w*t,h=e.w*o,m=e.w*r;return n[0]=1-p-d,n[1]=a-m,n[2]=l+h,n[3]=a+m,n[4]=1-i-d,n[5]=u-c,n[6]=l-h,n[7]=u+c,n[8]=1-i-p,n}var ee=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uHighlight;uCloudOperations;uNumCloudOperations;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uNoise;noiseTexture;gizmos;cameraPosition=z();cameraTarget=z();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixForSdfArray=new Float32Array(9);prevShapes;prevOperations;prevCloudOperations;prevHighlights;prevMaterials;prevLights;constructor(e,t,o,r,i,a,p,l,u,d,c,h,m,v,I,_,x,b,O,w,R){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=i,this.uNumOperations=a,this.uHighlight=p,this.uCloudOperations=l,this.uNumCloudOperations=u,this.uMaterials=h,this.uLights=d,this.uNumLights=c,this.uCameraPosition=m,this.uCameraMatrix=v,this.uAspectRatio=I,this.uMaxMarchingSteps=_,this.uEpsilon=x,this.uFlags=b,this.uNoise=O,this.noiseTexture=w,this.gizmos=R}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){_t(Ue,this.cameraRotationX,this.cameraRotationY,0);let e=vt(z(),{x:0,y:0,z:1},Ue);gt(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Un(this.cameraMatrixForSdfArray,Ue)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let i=o/r;this.gl.uniform1f(this.uAspectRatio,i)};render(e){if(this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.prevOperations=e.getOperations(),console.info("Rendering new operations",this.prevOperations)}if(this.prevCloudOperations!==e.getCloudOperations()){let t=e.getCloudOperationNumbers();this.gl.uniform1i(this.uNumCloudOperations,t.length),this.gl.uniform1iv(this.uCloudOperations,t),this.prevCloudOperations=e.getCloudOperations(),console.info("Rendering new cloud operations",this.prevCloudOperations)}if(this.prevHighlights!==e.getHighlights()){let t=e.getHighlights();console.info("Rendering new highlight",t,"ops",this.prevOperations),this.gl.uniform2iv(this.uHighlight,t),this.prevHighlights=t}this.prevShapes!==e.getShapes()&&(this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes(),console.info("Rendering new shapes",this.prevShapes)),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Gn),t.STATIC_DRAW);let r={"sdf-functions":bt},i=q.create(t,r,yt,xt);t.useProgram(i.program);let a=this.getAttribute(t,i,"aPosition");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let p=this.getUniform(t,i,"uCameraMatrix"),l=this.getUniform(t,i,"uCameraPosition"),u=this.getUniform(t,i,"uAspectRatio"),d=this.getUniform(t,i,"uShapes"),c=this.getUniform(t,i,"uOperations"),h=this.getUniform(t,i,"uNumOperations"),m=this.getUniform(t,i,"uCloudOperations"),v=this.getUniform(t,i,"uNumCloudOperations"),I=this.getUniform(t,i,"uHighlight"),_=this.getUniform(t,i,"uMaterials"),x=this.getUniform(t,i,"uLights"),b=this.getUniform(t,i,"uNumLights"),O=this.getUniform(t,i,"uMaxMarchingSteps"),w=this.getUniform(t,i,"uEpsilon"),R=this.getUniform(t,i,"uFlags"),D=this.getUniform(t,i,"uNoise"),Q=t.createTexture(),P=this.createNoiseCanvas();return t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Q),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,256,256,0,t.RGBA,t.UNSIGNED_BYTE,P.canvas),this.checkError(t),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.uniform1i(D,0),this.checkError(t),new n(t,i,o,d,c,h,I,m,v,x,b,_,l,p,u,O,w,R,D,Q,null)}static checkError(e){let t=e.getError();t!=e.NO_ERROR&&console.error(`GL Error: ${this.getErrorMessage(t,e)}`)}static getErrorMessage(e,t){return e===t.INVALID_ENUM?"Invalid enum":e===t.INVALID_VALUE?"Invalid value":e===t.INVALID_OPERATION?"Invalid operation":e===t.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":e===t.OUT_OF_MEMORY?"Out of memory":e===t.CONTEXT_LOST_WEBGL?"Context lost WebGL":e===t.NO_ERROR?"No error":`Unknown error ${e}`}static createNoiseCanvas(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillRect(0,0,255,255);let o=new Uint8ClampedArray(256*4);for(let r=0;r<256;r++){for(let a=0;a<256*4;a++)o[a]=Math.floor(Math.random()*256);let i=new ImageData(o,256,1);t.putImageData(i,0,r)}return t}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);return r==null,r}};var It=et(Ct()),En={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,epsilon:1e-4,pixelated:!1},ke={options:En},g=new It.default({viewports:[ke],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1}});var Xe=-500,St=-600,zt=-700,wt=-800,At=-900,xe=-5e3,Mt=-5010,Lt=-5020,Ot=-5030,Nt=-5040,Tt=-5050,Ve=0,Pe=1,Rt=2;function be(){return crypto.randomUUID()}function Dt(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Ft(n){let e=n.nodes[n.rootNodeId];if(!e)return[];let t=new Array(Object.keys(n.nodes).length);return kt(e,n.nodes,0,0,t),t}function We(n){return{colour:ye(),radius:10,...n}}function Gt(n,e){return{name:n,id:be(),position:z(),rotation:G(),childrenIds:[],childOpCode:"none",shape:Qe({}),hasShape:!1,light:We({}),hasLight:!1,...e}}function Ze(n,e,t,o){return{name:n,id:be(),position:t??z(),rotation:o??G(),childrenIds:[],childOpCode:"none",shape:Qe({}),hasShape:!1,light:e!=null?We(e):void 0,hasLight:e!=null}}function k(n,e,t,o,r){return{name:n,id:be(),position:t??z(),rotation:o??G(),shape:e!=null?Qe(e):void 0,hasShape:e!=null,light:We({}),hasLight:!1,childrenIds:[],childOpCode:r??"none"}}function Qe(n){return{maxSize:0,type:"none",shapeParams:z(),diffuseColour:{x:.7,y:.3,z:.2},specularColour:{x:1,y:.8,z:.9},lightingModel:"lambert",shininess:10,cloud:!1,...n}}function U(n,e){n.childrenIds.push(e.id),e.parentId=n.id}function Ut(n,e,t){e={...e,childrenIds:[...e.childrenIds,t.id]},t={...t,parentId:e.id};let o={...n.nodes,[e.id]:e,[t.id]:t};return{...n,nodes:o}}function Bt(n,e){if(e.parentId===void 0)return n;let t=n.nodes[e.parentId],o=t.childrenIds.findIndex(r=>r===e.id);if(o>=0){let r=[...t.childrenIds];r.splice(o,1),t={...t,childrenIds:r};let i={...n.nodes,[t.id]:t};return delete i[e.id],{...n,nodes:i}}return n}function Et(n,e,t){if(t.parentId==null)return n;let o=n.nodes[t.parentId],r=o.childrenIds.findIndex(a=>a===t.id);if(r>=0){let a=[...o.childrenIds];a.splice(r,1),o={...o,childrenIds:a}}e.childrenIds.includes(t.id)||(e={...e,childrenIds:[...e.childrenIds,t.id]}),t={...t,parentId:e.id};let i={...n.nodes,[o.id]:o,[e.id]:e,[t.id]:t};return{...n,nodes:i}}function kt(n,e,t,o,r){if(r[o]={node:n,depth:t},n.childrenIds!=null)for(let i of n.childrenIds){let a=e[i];a&&(o=kt(a,e,t+1,o+1,r))}return o}function He(n,e){return t=>{let o=t.viewports[n]??ke,r={...o,options:{...o.options,...e}},i=[...t.viewports];return i[n]=r,{viewports:i}}}function ge(n){return e=>({reparentModal:{...e.reparentModal,...n}})}function ve(n){return e=>({rawSceneModal:{...e.rawSceneModal,...n}})}function Xt(n){return e=>({sceneTree:Dt(e.sceneTree,n)})}function T(n){return()=>({sceneTree:n})}function Vt(n){return e=>{let t;if(n){for(let o of Object.values(e.sceneTree.nodes))if(o.childrenIds.includes(n)){t=o.id;break}}return{selectedNodeId:n,selectedParentNodeId:t}}}var Pt,L,Je,Wt;var $t=[],C=f,Zt=C.__b,Qt=C.__r,Ht=C.diffed,Jt=C.__c,jt=C.unmount,Yt=C.__;function kn(){for(var n;n=$t.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(_e),n.__H.__h.forEach(je),n.__H.__h=[]}catch(e){n.__H.__h=[],C.__e(e,n.__v)}}C.__b=function(n){L=null,Zt&&Zt(n)},C.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Yt&&Yt(n,e)},C.__r=function(n){Qt&&Qt(n),Pt=0;var e=(L=n.__c).__H;e&&(Je===L?(e.__h=[],L.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(_e),e.__h.forEach(je),e.__h=[],Pt=0)),Je=L},C.diffed=function(n){Ht&&Ht(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&($t.push(e)!==1&&Wt===C.requestAnimationFrame||((Wt=C.requestAnimationFrame)||Xn)(kn)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Je=L=null},C.__c=function(n,e){e.some(function(t){try{t.__h.forEach(_e),t.__h=t.__h.filter(function(o){return!o.__||je(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],C.__e(o,t.__v)}}),Jt&&Jt(n,e)},C.unmount=function(n){jt&&jt(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{_e(o)}catch(r){e=r}}),t.__H=void 0,e&&C.__e(e,t.__v))};var Kt=typeof requestAnimationFrame=="function";function Xn(n){var e,t=function(){clearTimeout(o),Kt&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,35);Kt&&(e=requestAnimationFrame(t))}function _e(n){var e=L,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),L=e}function je(n){var e=L;n.__c=n.__(),L=e}function Pn(n,e){for(var t in e)n[t]=e[t];return n}function qt(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function en(n,e){this.props=n,this.context=e}(en.prototype=new y).isPureReactComponent=!0,en.prototype.shouldComponentUpdate=function(n,e){return qt(this.props,n)||qt(this.state,e)};var tn=f.__b;f.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),tn&&tn(n)};var Hr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Wn=f.__e;f.__e=function(n,e,t,o){if(n.then){for(var r,i=e;i=i.__;)if((r=i.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Wn(n,e,t,o)};var nn=f.unmount;function un(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=Pn({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return un(o,e,t)})),n}function pn(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return pn(o,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function Ye(){this.__u=0,this.o=null,this.__b=null}function ln(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function Ce(){this.i=null,this.l=null}f.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),nn&&nn(n)},(Ye.prototype=new y).__c=function(n,e){var t=e.__c,o=this;o.o==null&&(o.o=[]),o.o.push(t);var r=ln(o.__v),i=!1,a=function(){i||(i=!0,t.__R=null,r?r(p):p())};t.__R=a;var p=function(){if(!--o.__u){if(o.state.__a){var l=o.state.__a;o.__v.__k[0]=pn(l,l.__c.__P,l.__c.__O)}var u;for(o.setState({__a:o.__b=null});u=o.o.pop();)u.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(a,a)},Ye.prototype.componentWillUnmount=function(){this.o=[]},Ye.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=un(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__a&&s(S,null,n.fallback);return r&&(r.__u&=-33),[s(S,null,e.__a?null:n.children),r]};var on=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};function Zn(n){return this.getChildContext=function(){return n.context},n.children}function Qn(n){var e=this,t=n.h;if(e.componentWillUnmount=function(){$(null,e.v),e.v=null,e.h=null},e.h&&e.h!==t&&e.componentWillUnmount(),!e.v){for(var o=e.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;e.h=t,e.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},insertBefore:function(r,i){this.childNodes.push(r),e.h.insertBefore(r,i)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.h.removeChild(r)}}}$(s(Zn,{context:e.context},n.__v),e.v)}function Ie(n,e){var t=s(Qn,{__v:n,h:e});return t.containerInfo=e,t}(Ce.prototype=new y).__a=function(n){var e=this,t=ln(e.__v),o=e.l.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),on(e,n,o)):r()};t?t(i):i()}},Ce.prototype.render=function(n){this.i=null,this.l=new Map;var e=K(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},Ce.prototype.componentDidUpdate=Ce.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){on(n,t,e)})};var Hn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Jn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Yn=/[A-Z0-9]/g,Kn=typeof document<"u",$n=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};y.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(y.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var rn=f.event;function qn(){}function eo(){return this.cancelBubble}function to(){return this.defaultPrevented}f.event=function(n){return rn&&(n=rn(n)),n.persist=qn,n.isPropagationStopped=eo,n.isDefaultPrevented=to,n.nativeEvent=n};var dn,no={enumerable:!1,configurable:!0,get:function(){return this.class}},an=f.vnode;f.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,o=e.type,r={},i=o.indexOf("-")===-1;for(var a in t){var p=t[a];if(!(a==="value"&&"defaultValue"in t&&p==null||Kn&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&p===!0?p="":l==="translate"&&p==="no"?p=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||o!=="input"&&o!=="textarea"||$n(t.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":jn.test(a)&&(a=l):l=a="oninput":i&&Jn.test(a)?a=a.replace(Yn,"-$&").toLowerCase():p===null&&(p=void 0),l==="oninput"&&r[a=l]&&(a="oninputCapture"),r[a]=p}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=K(t.children).forEach(function(u){u.props.selected=r.value.indexOf(u.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=K(t.children).forEach(function(u){u.props.selected=r.multiple?r.defaultValue.indexOf(u.props.value)!=-1:r.defaultValue==u.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",no)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(n),n.$$typeof=Hn,an&&an(n)};var sn=f.__r;f.__r=function(n){sn&&sn(n),dn=n.__c};var cn=f.diffed;f.diffed=function(n){cn&&cn(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),dn=null};var ne=class extends y{buttonRef=F();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:t,text:o,children:r}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let p=this.buttonRef.current.getBoundingClientRect();a={left:p.left+"px",top:p.top+p.height+"px"}}return s(S,null,s("button",{...t,ref:this.buttonRef,onClick:this.toggleMenu},o),i&&Ie(s("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},s("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},r)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var mn=n=>s("label",{style:{display:"inline-block"}},n.label,s("input",{style:{display:"block"},type:"range",...n.inputProps})),oe=class extends y{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:i,epsilon:a,maxMarchingStep:p}=this.props.options;return s("div",{class:"viewport-options"},s(ne,{text:"Menu"},s("div",{class:"control-group-vertical"},s("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),s("select",{onChange:this.changeRenderScale,value:o},s("option",{value:"2"},"2x"),s("option",{value:"1.5"},"1.5x"),s("option",{value:"1"},"1x"),s("option",{value:"0.5"},"0.5x"),s("option",{value:"0.25"},"0.25x"),s("option",{value:"0.125"},"0.125x")),s("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),s("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),s("button",{onClick:this.showRawScene},"JSON Scene")),s(mn,{label:`Epsilon ${a}`,inputProps:{value:a,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),s(mn,{label:`Marching Steps ${p}`,inputProps:{value:p,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}})))}showRawScene=()=>{g.execute(ve({show:!0}))};changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),g.execute(He(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?g.execute(He(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var Se=class extends y{canvasRef=F();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=ee.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),s("div",{class:"viewport outer-panel"},s("canvas",{className:e,ref:this.canvasRef}),s(oe,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function oo(n){return Object.hasOwn(n,"z")}function ro(n){return Object.hasOwn(n,"w")}var A=class extends y{render(){let e=this.props.vector,t=this.props.disabled,o=oo(e),r=ro(e);return s("div",{class:"vector control-group"},s("input",{class:"input",disabled:t,type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),s("input",{class:"input",disabled:t,type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),o&&s("input",{class:"input",disabled:t,type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),r&&s("input",{class:"input",disabled:t,type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,i=parseFloat(r);if(!isFinite(i)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,i),this.props.onChange(o,{...o,[t]:i})}};var re=class extends y{render(){let e=this.props.shape,t=e.lightingModel==="phong";return s("div",null,s("div",null,s("strong",null,"Type")," ",s("select",{value:e.type??"none",onChange:this.onChangeType},s("option",{value:"none"},"None"),s("option",{value:"box"},"Box"),s("option",{value:"sphere"},"Sphere"),s("option",{value:"hexPrism"},"Hex Prism"),s("option",{value:"torus"},"Torus"),s("option",{value:"octahedron"},"Octahedron"))),s("div",null,s("strong",null,"Shape Params")," ",s(A,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),s("div",null,s("strong",null,"Lighting Model")," ",s("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},s("option",{value:"unlit"},"Unlit"),s("option",{value:"lambert"},"Lambert"),s("option",{value:"phong"},"Phong"))),s("div",null,s("strong",null,"Cloud")," ",s("input",{type:"checkbox",checked:e.cloud,onChange:this.onChangeCloud})),s("div",null,s("strong",null,"Diffuse Colour")," ",s(A,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),s("div",null,s("strong",null,"Specular Colour")," ",s(A,{disabled:!t,vector:e.specularColour,onChange:this.onChangeSpecularColour})),s("div",null,s("strong",null,"Shininess")," ",s("input",{class:"input",disabled:!t,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeCloud=e=>{let t=e.target.checked;this.updateField(t,"cloud")};onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeLightingModel=e=>{let t=e.target.value;this.updateField(t,"lightingModel")};onChangeShininess=e=>{let t=parseFloat(e.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var ie=class extends y{render(){let e=this.props.light;return e===void 0?s("div",null,"Empty Light"):s("div",null,s("div",null,s("strong",null,"Colour")," ",s(A,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var ae=class extends y{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:t}=this.props;if(e==null)return s("div",{class:"scene-node-view"},"No node selected");let o=e.parentId!=null?t.nodes[e.parentId]:void 0,r=e.childOpCode??"none";return s("div",{class:"scene-node-view"},s("div",null,s("strong",null,"Name")," ",s("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),s("div",null,s("strong",null,"Position")," ",s(A,{vector:e.position,onChange:this.onChangePosition})),s("div",null,s("strong",null,"Rotation")," ",s(A,{vector:e.rotation,onChange:this.onChangeRotation})),s("div",null,s("strong",null,"Op Code")," ",s("select",{value:r,onChange:this.onChangeOpCode},s("option",{value:"none"},"None"),s("option",{value:"union"},"Union"),s("option",{value:"intersection"},"Intersection"),s("option",{value:"subtraction"},"Subtraction"))),s("div",null,s("strong",null,"Shape")," ",s("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&s(re,{shape:e.shape,onChange:this.onChangeShape})),s("div",null,s("strong",null,"Light")," ",s("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&s(ie,{light:e.light,onChange:this.onChangeLight})),s("div",null,s("strong",null,"Children")),s("div",{class:"control-group"},s("button",{onClick:this.addChild},"Add"),o!=null&&s(S,null,s("button",{onClick:this.deleteSelf},"Delete"),s("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Ut(this.props.sceneTree,this.props.node,Gt("New Child",{}));g.execute(T(e))};deleteSelf=()=>{let e=Bt(this.props.sceneTree,this.props.node);g.execute(T(e))};reparent=()=>{let{node:e,sceneTree:t}=this.props;if((e.parentId!=null?t.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}g.execute(ge({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};function Ke(n,e,t){return(t==null||t===!0)&&(n+=" "+e),n}var se=class extends y{render(){let{depth:e,node:t,isSelected:o,disable:r}=this.props,i=Ke(Ke("scene-node-tree-item","is-selected",o),"is-disabled",r===!0);return s("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var X=class extends y{render(){return s("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],i=[];if(r==null)return i;let a=Ft(e);for(let p of a){let l=p.node.id===t;i.push(s(se,{isSelected:l,depth:p.depth,key:p.node.id,node:p.node,onClicked:o}))}return i}};var ce=class extends y{render(){let{sceneTree:e,selectedNodeId:t}=this.props,o=e.nodes[t];return s("div",{class:"scene-tree"},s("div",{class:"scene-tree__contents outer-panel"},s("div",{class:"inner-panel"},s(X,{sceneTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),s("div",{class:"inner-panel scene-tree__nodes"},s(ae,{sceneTree:e,node:o,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{g.execute(Vt(e.id))};onChangeSelectedNode=(e,t)=>{g.execute(Xt(e))}};var V=class extends y{render(){let{show:e,onRequestClose:t}=this.props;if(e===!1)return null;let o=this.props.portalContainer??"modals",r=document.getElementById(o),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return Ie(s("div",{class:"modal-backdrop",onPointerDown:t},s("div",{class:a,onPointerDown:this.preventClose},this.props.children)),r)}preventClose=e=>{e.stopImmediatePropagation()}};var ue=class extends y{render(){let{show:e,sceneTree:t,disabledNodeIds:o,onRequestClose:r}=this.props;return s(V,{show:e,onRequestClose:r},s(X,{sceneTree:t,disabledNodeId:o,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var pe=class extends y{render(){let{show:e}=this.props.state,t=this.getDisabledNodeIds();return s(ue,{show:e,disabledNodeIds:t,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{g.execute(ge({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:t}=this.props.state;if(!e)return[];let{sceneTree:o}=this.props,r=o.nodes[t];return[r.id,r.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let t=this.props.sceneTree.nodes[this.props.state.childNodeId],o=Et(this.props.sceneTree,e,t);g.execute(T(o))}};var le=class extends y{prevSceneTree=void 0;preRef=F();render(){let{show:e}=this.props.state,{sceneTree:t}=this.props,o="";return e&&this.prevSceneTree!==t&&(o=JSON.stringify(t,null,2)),s(V,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},s("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},s("pre",null,o)),s("span",{class:"control-group"},s("button",{onClick:this.loadFromHtml},"Load From Json"),s("label",{class:"button"},"Load From File",s("input",{type:"file",onChange:this.loadFromFile})),s("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{g.execute(ve({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="scene.json",t.click(),URL.revokeObjectURL(t.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let o=new FileReader;o.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let t=e.target;typeof t.result=="string"?this.loadFromText(t.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let t=JSON.parse(e);t!=null&&g.execute(T(t))}};var ze=class extends y{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:t,sceneTree:o,selectedNodeId:r,reparentModal:i,rawSceneModal:a}=this.props.state;return console.log("App render",this.props.state),s(S,null,s("div",{class:"main-view"},s("div",{class:"viewports"},s(Se,{viewportIndex:0,options:t[0].options,sceneConverter:e})),s(ce,{sceneTree:o,selectedNodeId:r})),s(pe,{state:i,sceneTree:o}),s(le,{state:a,sceneTree:o}))}};var B=et(fn());var io=8,ao=16,so=8,co={none:Xe,union:St,intersection:zt,subtraction:wt,xor:At},uo={none:xe,box:Mt,sphere:Lt,hexPrism:Ot,torus:Nt,octahedron:Tt},po={unlit:Ve,lambert:Pe,phong:Rt};function lo(n){return uo[n]||xe}function yn(n){return co[n]||Xe}function mo(n){return po[n]||Ve}var we=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];highlight=[];operations=[];numberOperations=[];cloudOperations=[];numberCloudOperations=[];highlightedId=void 0;previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setCloudOperations(e){this.cloudOperations=e,this.updateCloudOperationNumbers()}getCloudOperations(){return this.cloudOperations}getCloudOperationNumbers(){return this.numberCloudOperations}setHighlight(e){this.highlightedId=e}getHighlights(){return this.highlight}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,cloudOperations:r,shapes:i,lights:a,materials:p,highlight:l}=n.createShapesFromNode(e,this.highlightedId);if((0,B.default)(this.highlight,l)||(this.highlight=l,console.log("Highlight",this.highlight),this.updateHighlighted()),(0,B.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),(0,B.default)(this.cloudOperations,r)||(this.cloudOperations=r,console.log("Cloud Operations",this.cloudOperations),this.updateCloudOperationNumbers()),!(0,B.default)(this.shapes,i)){console.log("Shapes",this.shapes),this.shapes=i,this.shapeDataArray.length=0;for(let u=0;u<this.shapes.length;u++)this.updateShape(u)}if(!(0,B.default)(this.lights,a)){this.lights=a,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let u=0;u<this.lights.length;u++)this.updateLight(u)}if(!(0,B.default)(this.materials,p)){this.materials=p,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let u=0;u<this.materials.length;u++)this.updateMaterial(u)}}static createShapesFromNode(e,t){let o=e.nodes[e.rootNodeId];if(!o)return;let r=[],i=[],a=[],p=[],l=[],u=[];if(this.pushToStack(r,i,!1,a,p,l,u,t,o,e.nodes),r.reverse(),u.length>0){let d=u[1]-u[0];u[0]=r.length-u[0]-1,u[1]=u[0]+d}return{operations:r,shapes:a,cloudOperations:i,lights:p,materials:l,highlight:u}}static pushToStack(e,t,o,r,i,a,p,l,u,d){if(u.childOpCode!=="none"){let c=!0;for(let h=0;h<u.childrenIds.length;h++){let m=d[u.childrenIds[h]];(m.hasShape||m.childOpCode!=="none")&&(c?c=!1:o?t.push(u.childOpCode):e.push(u.childOpCode))}}if(u.hasShape){let c=r.findIndex(h=>(0,B.default)(h,u.shape));if(c<0){c=r.length;let h=n.convertToShape(u,a);h!=null&&r.push(h)}u.id===l&&p.push(e.length,e.length+1),o=u.shape.cloud,o?t.push(c):e.push(c)}if(u.hasLight){let c=n.convertToLight(u);c!=null&&i.push(c)}for(let c of u.childrenIds)this.pushToStack(e,t,o,r,i,a,p,l,d[c],d)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*io,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*so,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.lightingModel,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.shininess}updateShape(e){let t=e*ao,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateHighlighted(){this.highlight.length<2&&(this.highlight=[-1,0])}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?yn(e):e)}updateCloudOperationNumbers(){this.numberCloudOperations=this.cloudOperations.map(e=>typeof e=="string"?yn(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r={diffuseColour:o.diffuseColour,lightingModel:mo(o.lightingModel),specularColour:o.specularColour,shininess:o.shininess},i=this.findApproxMaterial(r,t);return i<0&&(i=t.length,t.push(r)),{material:i,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:lo(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:Fe(),lightingModel:Pe,specularColour:Fe(),shininess:10}}static createNewLight(){return{position:z(),radius:10,colour:ye()}}static createNewShape(e){return{position:z(),rotation:G(),maxSize:0,shapeType:xe,shapeParams:z(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(!(r.lightingModel!==e.lightingModel||Math.abs(r.shininess-e.shininess)<1e-4)&&Ge(r.diffuseColour,e.diffuseColour)&&Ge(r.specularColour,e.specularColour))return o}return-1}};var Ae=new we;g.subscribe(n=>n.sceneTree,ho);g.subscribe(n=>n.selectedNodeId,fo);function ho(n){Ae.updateShapesFromTree(n.sceneTree)}function fo(n){Ae.setHighlight(n.selectedNodeId),Ae.updateShapesFromTree(n.sceneTree)}var yo=document.getElementById("app");function xn(){$(s(ze,{state:g.state(),sceneConverter:Ae}),yo)}xn();g.subscribeAny(xn);function xo(...n){let e={};for(let t of n)e[t.id]=t;return e}function bo(){let n=k("Root",null,void 0,void 0,"union"),e=k("Main",null,void 0,void 0,"subtraction");U(n,e);let t=k("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5,diffuseColour:{x:.5,y:.5,z:.5}}),o=k("Box & Sphere",void 0,void 0,void 0,"union");U(e,t),U(e,o);let r=k("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3},lightingModel:"lambert"},{x:0,y:-1.5,z:0}),i=k("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.2,z:.9},lightingModel:"phong"});U(o,r),U(o,i);let a=Ze("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),p=Ze("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});U(n,a),U(n,p);let u={nodes:xo(n,e,t,o,r,i,a,p),rootNodeId:n.id};g.execute(T(u))}bo();})();
//# sourceMappingURL=webgl-index.js.map
