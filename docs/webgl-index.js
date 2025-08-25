(()=>{var mn=Object.create;var We=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var bn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,_n=Object.prototype.hasOwnProperty;var Ct=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ie=(t,e)=>{for(var r in e)We(t,r,{get:e[r],enumerable:!0})},yn=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of bn(e))!_n.call(t,o)&&o!==r&&We(t,o,{get:()=>e[o],enumerable:!(n=vn(e,o))||n.enumerable});return t};var It=(t,e,r)=>(r=t!=null?mn(xn(t)):{},yn(e||!t||!t.__esModule?We(r,"default",{value:t,enumerable:!0}):r,t));var br=Ct(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.EmptyModifier=void 0;var wi=()=>null;ue.EmptyModifier=wi;var it=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,r=!0){let n=e(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(e,r))}subscribe(e,r,n,o){let i=e(this.currentState),a={selector:new at(e,i,n,o),subscription:r};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(e,r){return this.subscribe(n=>n,e,void 0,r)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,r){for(let n of this.subscriptions){let o=n.selector.getValue(this.currentState);n.selector.checkIfChanged(o)&&n.subscription(this.currentState,o,e,r)}}};ue.default=it;var at=class{constructor(e,r=void 0,n,o){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=r,this.comparer=n,this.name=o}checkIfChanged(e){let r=!1;return this.comparer!==void 0?r=!this.comparer(this.prevValue,e):r=e!==this.prevValue,this.prevValue=e,r}}});var hn=Ct((pl,un)=>{"use strict";un.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}});var we,b,Ot,Cn,j,St,Lt,Nt,Tt,He,Ze,Qe,In,oe={},Rt=[],Sn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ie=Array.isArray;function k(t,e){for(var r in e)t[r]=e[r];return t}function Ye(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function d(t,e,r){var n,o,i,a={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?we.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Ae(t,a,n,o,null)}function Ae(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ot,__i:-1,__u:0};return o==null&&b.vnode!=null&&b.vnode(i),i}function Q(){return{current:null}}function N(t){return t.children}function x(t,e){this.props=t,this.context=e}function ee(t,e){if(e==null)return t.__?ee(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ee(t):null}function Dt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Dt(t)}}function At(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!Me.__r++||St!=b.debounceRendering)&&((St=b.debounceRendering)||Lt)(Me)}function Me(){for(var t,e,r,n,o,i,a,s=1;j.length;)j.length>s&&j.sort(Nt),t=j.shift(),s=j.length,t.__d&&(r=void 0,o=(n=(e=t).__v).__e,i=[],a=[],e.__P&&((r=k({},n)).__v=n.__v+1,b.vnode&&b.vnode(r),Je(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[o]:null,i,o??ee(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Gt(i,r,a),r.__e!=o&&Dt(r)));Me.__r=0}function zt(t,e,r,n,o,i,a,s,l,c,u){var p,f,h,g,y,v,m=n&&n.__k||Rt,_=e.length;for(l=An(r,e,m,l,_),p=0;p<_;p++)(h=r.__k[p])!=null&&(f=h.__i==-1?oe:m[h.__i]||oe,h.__i=p,v=Je(t,h,f,o,i,a,s,l,c,u),g=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&je(f.ref,null,h),u.push(h.ref,h.__c||g,h)),y==null&&g!=null&&(y=g),4&h.__u||f.__k===h.__k?l=Et(h,l,t):typeof h.type=="function"&&v!==void 0?l=v:g&&(l=g.nextSibling),h.__u&=-7);return r.__e=y,l}function An(t,e,r,n,o){var i,a,s,l,c,u=r.length,p=u,f=0;for(t.__k=new Array(o),i=0;i<o;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=i+f,(a=t.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Ae(null,a,null,null,null):ie(a)?Ae(N,{children:a},null,null,null):a.constructor==null&&a.__b>0?Ae(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=t,a.__b=t.__b+1,s=null,(c=a.__i=Mn(a,r,l,p))!=-1&&(p--,(s=r[c])&&(s.__u|=2)),s==null||s.__v==null?(c==-1&&(o>u?f--:o<u&&f++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?f--:c==l+1?f++:(c>l?f--:f++,a.__u|=4))):t.__k[i]=null;if(p)for(i=0;i<u;i++)(s=r[i])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=ee(s)),Ut(s,s));return n}function Et(t,e,r){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=Et(n[o],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=ee(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ae(t,e){return e=e||[],t==null||typeof t=="boolean"||(ie(t)?t.some(function(r){ae(r,e)}):e.push(t)),e}function Mn(t,e,r,n){var o,i,a=t.key,s=t.type,l=e[r];if(l===null&&t.key==null||l&&a==l.key&&s==l.type&&(2&l.__u)==0)return r;if(n>(l!=null&&(2&l.__u)==0?1:0))for(o=r-1,i=r+1;o>=0||i<e.length;){if(o>=0){if((l=e[o])&&(2&l.__u)==0&&a==l.key&&s==l.type)return o;o--}if(i<e.length){if((l=e[i])&&(2&l.__u)==0&&a==l.key&&s==l.type)return i;i++}}return-1}function Mt(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Sn.test(e)?r:r+"px"}function Se(t,e,r,n,o){var i,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Mt(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||Mt(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Tt,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n?r.u=n.u:(r.u=He,t.addEventListener(e,i?Qe:Ze,i)):t.removeEventListener(e,i?Qe:Ze,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function wt(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=He++;else if(e.t<r.u)return;return r(b.event?b.event(e):e)}}}function Je(t,e,r,n,o,i,a,s,l,c){var u,p,f,h,g,y,v,m,_,w,S,P,T,V,G,X,B,L=e.type;if(e.constructor!=null)return null;128&r.__u&&(l=!!(32&r.__u),i=[s=e.__e=r.__e]),(u=b.__b)&&u(e);e:if(typeof L=="function")try{if(m=e.props,_="prototype"in L&&L.prototype.render,w=(u=L.contextType)&&n[u.__c],S=u?w?w.props.value:u.__:n,r.__c?v=(p=e.__c=r.__c).__=p.__E:(_?e.__c=p=new L(m,S):(e.__c=p=new x(m,S),p.constructor=L,p.render=On),w&&w.sub(p),p.props=m,p.state||(p.state={}),p.context=S,p.__n=n,f=p.__d=!0,p.__h=[],p._sb=[]),_&&p.__s==null&&(p.__s=p.state),_&&L.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=k({},p.__s)),k(p.__s,L.getDerivedStateFromProps(m,p.__s))),h=p.props,g=p.state,p.__v=e,f)_&&L.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),_&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(_&&L.getDerivedStateFromProps==null&&m!==h&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(m,S),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(m,p.__s,S)===!1||e.__v==r.__v){for(e.__v!=r.__v&&(p.props=m,p.state=p.__s,p.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(z){z&&(z.__=e)}),P=0;P<p._sb.length;P++)p.__h.push(p._sb[P]);p._sb=[],p.__h.length&&a.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(m,p.__s,S),_&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(h,g,y)})}if(p.context=S,p.props=m,p.__P=t,p.__e=!1,T=b.__r,V=0,_){for(p.state=p.__s,p.__d=!1,T&&T(e),u=p.render(p.props,p.state,p.context),G=0;G<p._sb.length;G++)p.__h.push(p._sb[G]);p._sb=[]}else do p.__d=!1,T&&T(e),u=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++V<25);p.state=p.__s,p.getChildContext!=null&&(n=k(k({},n),p.getChildContext())),_&&!f&&p.getSnapshotBeforeUpdate!=null&&(y=p.getSnapshotBeforeUpdate(h,g)),X=u,u!=null&&u.type===N&&u.key==null&&(X=Ft(u.props.children)),s=zt(t,ie(X)?X:[X],e,r,n,o,i,a,s,l,c),p.base=e.__e,e.__u&=-161,p.__h.length&&a.push(p),v&&(p.__E=p.__=null)}catch(z){if(e.__v=null,l||i!=null)if(z.then){for(e.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else for(B=i.length;B--;)Ye(i[B]);else e.__e=r.__e,e.__k=r.__k;b.__e(z,e,r)}else i==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):s=e.__e=wn(r.__e,e,r,n,o,i,a,l,c);return(u=b.diffed)&&u(e),128&e.__u?void 0:s}function Gt(t,e,r){for(var n=0;n<r.length;n++)je(r[n],r[++n],r[++n]);b.__c&&b.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){b.__e(i,o.__v)}})}function Ft(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:ie(t)?t.map(Ft):k({},t)}function wn(t,e,r,n,o,i,a,s,l){var c,u,p,f,h,g,y,v=r.props,m=e.props,_=e.type;if(_=="svg"?o="http://www.w3.org/2000/svg":_=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((h=i[c])&&"setAttribute"in h==!!_&&(_?h.localName==_:h.nodeType==3)){t=h,i[c]=null;break}}if(t==null){if(_==null)return document.createTextNode(m);t=document.createElementNS(o,_,m.is&&m),s&&(b.__m&&b.__m(e,i),s=!1),i=null}if(_==null)v===m||s&&t.data==m||(t.data=m);else{if(i=i&&we.call(t.childNodes),v=r.props||oe,!s&&i!=null)for(v={},c=0;c<t.attributes.length;c++)v[(h=t.attributes[c]).name]=h.value;for(c in v)if(h=v[c],c!="children"){if(c=="dangerouslySetInnerHTML")p=h;else if(!(c in m)){if(c=="value"&&"defaultValue"in m||c=="checked"&&"defaultChecked"in m)continue;Se(t,c,null,h,o)}}for(c in m)h=m[c],c=="children"?f=h:c=="dangerouslySetInnerHTML"?u=h:c=="value"?g=h:c=="checked"?y=h:s&&typeof h!="function"||v[c]===h||Se(t,c,h,v[c],o);if(u)s||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),zt(e.type=="template"?t.content:t,ie(f)?f:[f],e,r,n,_=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:r.__k&&ee(r,0),s,l),i!=null)for(c=i.length;c--;)Ye(i[c]);s||(c="value",_=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[c]||_=="progress"&&!g||_=="option"&&g!=v[c])&&Se(t,c,g,v[c],o),c="checked",y!=null&&y!=t[c]&&Se(t,c,y,v[c],o))}return t}function je(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){b.__e(o,r)}}function Ut(t,e,r){var n,o;if(b.unmount&&b.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||je(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){b.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Ut(n[o],e,r||typeof t.type!="function");r||Ye(t.__e),t.__c=t.__=t.__e=void 0}function On(t,e,r){return this.constructor(t,r)}function se(t,e,r){var n,o,i,a;e==document&&(e=document.documentElement),b.__&&b.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],a=[],Je(e,t=(!n&&r||e).__k=d(N,null,[t]),o||oe,oe,e.namespaceURI,!n&&r?[r]:o?null:e.firstChild?we.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n,a),Gt(i,t,a)}we=Rt.slice,b={__e:function(t,e,r,n){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(s){t=s}throw t}},Ot=0,Cn=function(t){return t!=null&&t.constructor==null},x.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},r),this.props)),t&&k(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),At(this))},x.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),At(this))},x.prototype.render=N,j=[],Lt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Nt=function(t,e){return t.__v.__b-e.__v.__b},Me.__r=0,Tt=/(PointerCapture)$|Capture$/i,He=0,Ze=wt(!1),Qe=wt(!0),In=0;var Pt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Vt=`#version 300 es

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
const int ShapeTypeCylinder = -5060;
const int ShapeTypeIcosahedron = -5070;

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

float sdfCappedCylinder(vec3 point, float height, float radius)
{
    vec2 d = abs(vec2(length(point.xz), point.y)) - vec2(radius, height);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}

// Taken from https://github.com/fogleman/sdf/blob/d58a6fc63b75fc1cf1ebb71e0b42bf552319c8f1/sdf/d3.py#L314
float sdfIsosahedron(vec3 point, float radius)
{
    const vec3 xyz = normalize(vec3((sqrt(5.0) + 3.0) / 2.0, 1.0, 0.0));
    const vec3 w = vec3(sqrt(3.0) / 3.0);

    radius *= 0.8506507174597755;

    point = abs(point / radius);
    float a = dot(point, xyz.xyz);
    float b = dot(point, xyz.zxy);
    float c = dot(point, xyz.yzx);
    float d = dot(point, w) - xyz.x;

    return max(max(max(a, b), c) - xyz.x, d) * radius;
}

// float repeatWrong( vec3 p )
// {
//     // naive domain repetition
//     const int   n = 8;
//     const float b = 6.283185/float(n);
//     float a = atan(p.y,p.x);
//     float i = round(a/b);

//     float c = b*i;
//     p = mat2(cos(c),-sin(c),sin(c),cos(c))*p;

//     // evaluate a single SDF
//     return sdf(p);
// }

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
        case ShapeTypeCylinder: return sdfCappedCylinder(point, params.y, params.x);
        case ShapeTypeIcosahedron: return sdfIsosahedron(point, params.x);
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
`;var Xt=`const int ShapeTypeNone = -5000;
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
}`;var Rn=/^#include\s+\<([^\>]+)\>/gmi,ce=class t{program;constructor(e){this.program=e}static assembleShader(e,r){let n=r.matchAll(Rn);for(let o of n){let i=e[o[1]];i===void 0&&(console.error(`Unknown shader include ${o[1]}`),i=""),r=r.replace(o[0],i)}return r}static create(e,r,n,o){function i(){l!=null&&(e.detachShader(l,a),e.detachShader(l,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}let a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,this.assembleShader(r,n)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let c=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",c),i(),new Error(`Vertex shader compile error ${c}`)}let s=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(s,this.assembleShader(r,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let c=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",c),i(),new Error(`Fragment shader compile error ${c}`)}let l=e.createProgram();if(e.attachShader(l,a),e.attachShader(l,s),e.linkProgram(l),i(),!e.getProgramParameter(l,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(l);let c=e.getProgramInfoLog(l);throw console.error("Shader link error",c),new Error(`Shader link error ${c}`)}return new t(l)}};var H={};Ie(H,{ANGLE_ORDER:()=>qe,ARRAY_TYPE:()=>A,EPSILON:()=>I,RANDOM:()=>W,equals:()=>Un,round:()=>te,setMatrixArrayType:()=>Dn,toDegree:()=>Fn,toRadian:()=>Gn});var I=1e-6,A=typeof Float32Array<"u"?Float32Array:Array,W=Math.random,qe="zyx";function te(t){return t>=0?Math.round(t):t%.5===0?Math.floor(t):Math.round(t)}function Dn(t){A=t}var zn=Math.PI/180,En=180/Math.PI;function Gn(t){return t*zn}function Fn(t){return t*En}function Un(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:I;return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))}var re={};Ie(re,{add:()=>so,adjoint:()=>Hn,clone:()=>Vn,copy:()=>Xn,create:()=>Ke,determinant:()=>Yn,equals:()=>uo,exactEquals:()=>po,frob:()=>ao,fromMat2d:()=>to,fromMat4:()=>Pn,fromQuat:()=>ro,fromRotation:()=>$n,fromScaling:()=>eo,fromTranslation:()=>Kn,fromValues:()=>Bn,identity:()=>Wn,invert:()=>Qn,mul:()=>ho,multiply:()=>Bt,multiplyScalar:()=>co,multiplyScalarAndAdd:()=>lo,normalFromMat4:()=>no,projection:()=>oo,rotate:()=>jn,scale:()=>qn,set:()=>kn,str:()=>io,sub:()=>fo,subtract:()=>kt,translate:()=>Jn,transpose:()=>Zn});function Ke(){var t=new A(9);return A!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function Pn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Vn(t){var e=new A(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Xn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Bn(t,e,r,n,o,i,a,s,l){var c=new A(9);return c[0]=t,c[1]=e,c[2]=r,c[3]=n,c[4]=o,c[5]=i,c[6]=a,c[7]=s,c[8]=l,c}function kn(t,e,r,n,o,i,a,s,l,c){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=i,t[5]=a,t[6]=s,t[7]=l,t[8]=c,t}function Wn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Zn(t,e){if(t===e){var r=e[1],n=e[2],o=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=o}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function Qn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],p=u*a-s*c,f=-u*i+s*l,h=c*i-a*l,g=r*p+n*f+o*h;return g?(g=1/g,t[0]=p*g,t[1]=(-u*n+o*c)*g,t[2]=(s*n-o*a)*g,t[3]=f*g,t[4]=(u*r-o*l)*g,t[5]=(-s*r+o*i)*g,t[6]=h*g,t[7]=(-c*r+n*l)*g,t[8]=(a*r-n*i)*g,t):null}function Hn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t[0]=a*u-s*c,t[1]=o*c-n*u,t[2]=n*s-o*a,t[3]=s*l-i*u,t[4]=r*u-o*l,t[5]=o*i-r*s,t[6]=i*c-a*l,t[7]=n*l-r*c,t[8]=r*a-n*i,t}function Yn(t){var e=t[0],r=t[1],n=t[2],o=t[3],i=t[4],a=t[5],s=t[6],l=t[7],c=t[8];return e*(c*i-a*l)+r*(-c*o+a*s)+n*(l*o-i*s)}function Bt(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],c=e[6],u=e[7],p=e[8],f=r[0],h=r[1],g=r[2],y=r[3],v=r[4],m=r[5],_=r[6],w=r[7],S=r[8];return t[0]=f*n+h*a+g*c,t[1]=f*o+h*s+g*u,t[2]=f*i+h*l+g*p,t[3]=y*n+v*a+m*c,t[4]=y*o+v*s+m*u,t[5]=y*i+v*l+m*p,t[6]=_*n+w*a+S*c,t[7]=_*o+w*s+S*u,t[8]=_*i+w*l+S*p,t}function Jn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],c=e[6],u=e[7],p=e[8],f=r[0],h=r[1];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t[4]=s,t[5]=l,t[6]=f*n+h*a+c,t[7]=f*o+h*s+u,t[8]=f*i+h*l+p,t}function jn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],c=e[6],u=e[7],p=e[8],f=Math.sin(r),h=Math.cos(r);return t[0]=h*n+f*a,t[1]=h*o+f*s,t[2]=h*i+f*l,t[3]=h*a-f*n,t[4]=h*s-f*o,t[5]=h*l-f*i,t[6]=c,t[7]=u,t[8]=p,t}function qn(t,e,r){var n=r[0],o=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=o*e[3],t[4]=o*e[4],t[5]=o*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Kn(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function $n(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function eo(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function to(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function ro(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r+r,s=n+n,l=o+o,c=r*a,u=n*a,p=n*s,f=o*a,h=o*s,g=o*l,y=i*a,v=i*s,m=i*l;return t[0]=1-p-g,t[3]=u-m,t[6]=f+v,t[1]=u+m,t[4]=1-c-g,t[7]=h-y,t[2]=f-v,t[5]=h+y,t[8]=1-c-p,t}function no(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],p=e[9],f=e[10],h=e[11],g=e[12],y=e[13],v=e[14],m=e[15],_=r*s-n*a,w=r*l-o*a,S=r*c-i*a,P=n*l-o*s,T=n*c-i*s,V=o*c-i*l,G=u*y-p*g,X=u*v-f*g,B=u*m-h*g,L=p*v-f*y,z=p*m-h*y,ne=f*m-h*v,R=_*ne-w*z+S*L+P*B-T*X+V*G;return R?(R=1/R,t[0]=(s*ne-l*z+c*L)*R,t[1]=(l*B-a*ne-c*X)*R,t[2]=(a*z-s*B+c*G)*R,t[3]=(o*z-n*ne-i*L)*R,t[4]=(r*ne-o*B+i*X)*R,t[5]=(n*B-r*z-i*G)*R,t[6]=(y*V-v*T+m*P)*R,t[7]=(v*S-g*V-m*w)*R,t[8]=(g*T-y*S+m*_)*R,t):null}function oo(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function io(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function ao(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8])}function so(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function kt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function co(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function lo(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t}function po(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function uo(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],p=e[0],f=e[1],h=e[2],g=e[3],y=e[4],v=e[5],m=e[6],_=e[7],w=e[8];return Math.abs(r-p)<=I*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(n-f)<=I*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(o-h)<=I*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(i-g)<=I*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(a-y)<=I*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(s-v)<=I*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(l-m)<=I*Math.max(1,Math.abs(l),Math.abs(m))&&Math.abs(c-_)<=I*Math.max(1,Math.abs(c),Math.abs(_))&&Math.abs(u-w)<=I*Math.max(1,Math.abs(u),Math.abs(w))}var ho=Bt,fo=kt;var E={};Ie(E,{add:()=>gi,calculateW:()=>oi,clone:()=>di,conjugate:()=>ci,copy:()=>hi,create:()=>rt,dot:()=>gr,equals:()=>yi,exactEquals:()=>_i,exp:()=>dr,fromEuler:()=>li,fromMat3:()=>hr,fromValues:()=>ui,getAngle:()=>ei,getAxisAngle:()=>$o,identity:()=>Ko,invert:()=>si,len:()=>bi,length:()=>mr,lerp:()=>vi,ln:()=>ur,mul:()=>mi,multiply:()=>pr,normalize:()=>nt,pow:()=>ii,random:()=>ai,rotateX:()=>ti,rotateY:()=>ri,rotateZ:()=>ni,rotationTo:()=>Ci,scale:()=>fr,set:()=>fi,setAxes:()=>Si,setAxisAngle:()=>lr,slerp:()=>Ne,sqlerp:()=>Ii,sqrLen:()=>xi,squaredLength:()=>vr,str:()=>pi});var M={};Ie(M,{add:()=>bo,angle:()=>Po,bezier:()=>To,ceil:()=>xo,clone:()=>go,copy:()=>mo,create:()=>Oe,cross:()=>pe,dist:()=>Ho,distance:()=>Yt,div:()=>Qo,divide:()=>Ht,dot:()=>le,equals:()=>ko,exactEquals:()=>Bo,floor:()=>_o,forEach:()=>jo,fromValues:()=>Le,hermite:()=>No,inverse:()=>wo,len:()=>et,length:()=>Wt,lerp:()=>Oo,max:()=>Co,min:()=>yo,mul:()=>Zo,multiply:()=>Qt,negate:()=>Mo,normalize:()=>$e,random:()=>Ro,rotateX:()=>Go,rotateY:()=>Fo,rotateZ:()=>Uo,round:()=>Io,scale:()=>So,scaleAndAdd:()=>Ao,set:()=>vo,slerp:()=>Lo,sqrDist:()=>Yo,sqrLen:()=>Jo,squaredDistance:()=>Jt,squaredLength:()=>jt,str:()=>Xo,sub:()=>Wo,subtract:()=>Zt,transformMat3:()=>zo,transformMat4:()=>Do,transformQuat:()=>Eo,zero:()=>Vo});function Oe(){var t=new A(3);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function go(t){var e=new A(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Wt(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function Le(t,e,r){var n=new A(3);return n[0]=t,n[1]=e,n[2]=r,n}function mo(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function vo(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function bo(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Zt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function Qt(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function Ht(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function xo(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function _o(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function yo(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function Co(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function Io(t,e){return t[0]=te(e[0]),t[1]=te(e[1]),t[2]=te(e[2]),t}function So(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function Ao(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function Yt(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(r*r+n*n+o*o)}function Jt(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return r*r+n*n+o*o}function jt(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function Mo(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function wo(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function $e(t,e){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function le(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function pe(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[0],s=r[1],l=r[2];return t[0]=o*l-i*s,t[1]=i*a-n*l,t[2]=n*s-o*a,t}function Oo(t,e,r,n){var o=e[0],i=e[1],a=e[2];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t}function Lo(t,e,r,n){var o=Math.acos(Math.min(Math.max(le(e,r),-1),1)),i=Math.sin(o),a=Math.sin((1-n)*o)/i,s=Math.sin(n*o)/i;return t[0]=a*e[0]+s*r[0],t[1]=a*e[1]+s*r[1],t[2]=a*e[2]+s*r[2],t}function No(t,e,r,n,o,i){var a=i*i,s=a*(2*i-3)+1,l=a*(i-2)+i,c=a*(i-1),u=a*(3-2*i);return t[0]=e[0]*s+r[0]*l+n[0]*c+o[0]*u,t[1]=e[1]*s+r[1]*l+n[1]*c+o[1]*u,t[2]=e[2]*s+r[2]*l+n[2]*c+o[2]*u,t}function To(t,e,r,n,o,i){var a=1-i,s=a*a,l=i*i,c=s*a,u=3*i*s,p=3*l*a,f=l*i;return t[0]=e[0]*c+r[0]*u+n[0]*p+o[0]*f,t[1]=e[1]*c+r[1]*u+n[1]*p+o[1]*f,t[2]=e[2]*c+r[2]*u+n[2]*p+o[2]*f,t}function Ro(t,e){e=e===void 0?1:e;var r=W()*2*Math.PI,n=W()*2-1,o=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=n*e,t}function Do(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[3]*n+r[7]*o+r[11]*i+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*o+r[8]*i+r[12])/a,t[1]=(r[1]*n+r[5]*o+r[9]*i+r[13])/a,t[2]=(r[2]*n+r[6]*o+r[10]*i+r[14])/a,t}function zo(t,e,r){var n=e[0],o=e[1],i=e[2];return t[0]=n*r[0]+o*r[3]+i*r[6],t[1]=n*r[1]+o*r[4]+i*r[7],t[2]=n*r[2]+o*r[5]+i*r[8],t}function Eo(t,e,r){var n=r[0],o=r[1],i=r[2],a=r[3],s=e[0],l=e[1],c=e[2],u=o*c-i*l,p=i*s-n*c,f=n*l-o*s;return u=u+u,p=p+p,f=f+f,t[0]=s+a*u+o*f-i*p,t[1]=l+a*p+i*u-n*f,t[2]=c+a*f+n*p-o*u,t}function Go(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0],i[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),i[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Fo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),i[1]=o[1],i[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Uo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),i[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),i[2]=o[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Po(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2],l=Math.sqrt((r*r+n*n+o*o)*(i*i+a*a+s*s)),c=l&&le(t,e)/l;return Math.acos(Math.min(Math.max(c,-1),1))}function Vo(t){return t[0]=0,t[1]=0,t[2]=0,t}function Xo(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Bo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function ko(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2];return Math.abs(r-i)<=I*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-a)<=I*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-s)<=I*Math.max(1,Math.abs(o),Math.abs(s))}var Wo=Zt,Zo=Qt,Qo=Ht,Ho=Yt,Yo=Jt,et=Wt,Jo=jt,jo=function(){var t=Oe();return function(e,r,n,o,i,a){var s,l;for(r||(r=3),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}();function qo(){var t=new A(4);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function qt(t){var e=new A(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Kt(t,e,r,n){var o=new A(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function $t(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function er(t,e,r,n,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}function tr(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function rr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function nr(t){var e=t[0],r=t[1],n=t[2],o=t[3];return Math.sqrt(e*e+r*r+n*n+o*o)}function or(t){var e=t[0],r=t[1],n=t[2],o=t[3];return e*e+r*r+n*n+o*o}function ir(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=o*a,t[3]=i*a,t}function tt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function ar(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t[3]=s+n*(r[3]-s),t}function sr(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}var ha=function(){var t=qo();return function(e,r,n,o,i,a){var s,l;for(r||(r=4),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();function rt(){var t=new A(4);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ko(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function lr(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function $o(t,e){var r=Math.acos(e[3])*2,n=Math.sin(r/2);return n>I?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function ei(t,e){var r=gr(t,e);return Math.acos(2*r*r-1)}function pr(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=r[0],l=r[1],c=r[2],u=r[3];return t[0]=n*u+a*s+o*c-i*l,t[1]=o*u+a*l+i*s-n*c,t[2]=i*u+a*c+n*l-o*s,t[3]=a*u-n*s-o*l-i*c,t}function ti(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*s,t[1]=o*l+i*s,t[2]=i*l-o*s,t[3]=a*l-n*s,t}function ri(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l-i*s,t[1]=o*l+a*s,t[2]=i*l+n*s,t[3]=a*l-o*s,t}function ni(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+o*s,t[1]=o*l-n*s,t[2]=i*l+a*s,t[3]=a*l-i*s,t}function oi(t,e){var r=e[0],n=e[1],o=e[2];return t[0]=r,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),t}function dr(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=Math.exp(i),l=a>0?s*Math.sin(a)/a:0;return t[0]=r*l,t[1]=n*l,t[2]=o*l,t[3]=s*Math.cos(a),t}function ur(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=a>0?Math.atan2(a,i)/a:0;return t[0]=r*s,t[1]=n*s,t[2]=o*s,t[3]=.5*Math.log(r*r+n*n+o*o+i*i),t}function ii(t,e,r){return ur(t,e),fr(t,t,r),dr(t,t),t}function Ne(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3],l=r[0],c=r[1],u=r[2],p=r[3],f,h,g,y,v;return h=o*l+i*c+a*u+s*p,h<0&&(h=-h,l=-l,c=-c,u=-u,p=-p),1-h>I?(f=Math.acos(h),g=Math.sin(f),y=Math.sin((1-n)*f)/g,v=Math.sin(n*f)/g):(y=1-n,v=n),t[0]=y*o+v*l,t[1]=y*i+v*c,t[2]=y*a+v*u,t[3]=y*s+v*p,t}function ai(t){var e=W(),r=W(),n=W(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t}function si(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i,s=a?1/a:0;return t[0]=-r*s,t[1]=-n*s,t[2]=-o*s,t[3]=i*s,t}function ci(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function hr(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(e[o*3+o]-e[i*3+i]-e[a*3+a]+1),t[o]=.5*n,n=.5/n,t[3]=(e[i*3+a]-e[a*3+i])*n,t[i]=(e[i*3+o]+e[o*3+i])*n,t[a]=(e[a*3+o]+e[o*3+a])*n}return t}function li(t,e,r,n){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:qe,i=Math.PI/360;e*=i,n*=i,r*=i;var a=Math.sin(e),s=Math.cos(e),l=Math.sin(r),c=Math.cos(r),u=Math.sin(n),p=Math.cos(n);switch(o){case"xyz":t[0]=a*c*p+s*l*u,t[1]=s*l*p-a*c*u,t[2]=s*c*u+a*l*p,t[3]=s*c*p-a*l*u;break;case"xzy":t[0]=a*c*p-s*l*u,t[1]=s*l*p-a*c*u,t[2]=s*c*u+a*l*p,t[3]=s*c*p+a*l*u;break;case"yxz":t[0]=a*c*p+s*l*u,t[1]=s*l*p-a*c*u,t[2]=s*c*u-a*l*p,t[3]=s*c*p+a*l*u;break;case"yzx":t[0]=a*c*p+s*l*u,t[1]=s*l*p+a*c*u,t[2]=s*c*u-a*l*p,t[3]=s*c*p-a*l*u;break;case"zxy":t[0]=a*c*p-s*l*u,t[1]=s*l*p+a*c*u,t[2]=s*c*u+a*l*p,t[3]=s*c*p-a*l*u;break;case"zyx":t[0]=a*c*p-s*l*u,t[1]=s*l*p+a*c*u,t[2]=s*c*u-a*l*p,t[3]=s*c*p+a*l*u;break;default:throw new Error("Unknown angle order "+o)}return t}function pi(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var di=qt,ui=Kt,hi=$t,fi=er,gi=tr,mi=pr,fr=rr,gr=tt,vi=ar,mr=nr,bi=mr,vr=or,xi=vr,nt=ir,_i=sr;function yi(t,e){return Math.abs(tt(t,e))>=1-I}var Ci=function(){var t=Oe(),e=Le(1,0,0),r=Le(0,1,0);return function(n,o,i){var a=le(o,i);return a<-.999999?(pe(t,e,o),et(t)<1e-6&&pe(t,r,o),$e(t,t),lr(n,t,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(pe(t,o,i),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+a,nt(n,n))}}(),Ii=function(){var t=rt(),e=rt();return function(r,n,o,i,a,s){return Ne(t,n,a,s),Ne(e,o,i,s),Ne(r,t,e,2*s*(1-s)),r}}(),Si=function(){var t=Ke();return function(e,r,n,o){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],nt(e,hr(e,t))}}();var Mi=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ot=E.create(),de=class t{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uHighlight;uCloudOperations;uNumCloudOperations;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uNoise;noiseTexture;cameraPosition=M.create();cameraTarget=M.create();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixForSdfArray=re.create();prevShapes;prevOperations;prevCloudOperations;prevHighlights;prevMaterials;prevLights;constructor(e,r,n,o,i,a,s,l,c,u,p,f,h,g,y,v,m,_,w,S){this.gl=e,this.shader=r,this.positionBuffer=n,this.uShapes=o,this.uOperations=i,this.uNumOperations=a,this.uHighlight=s,this.uCloudOperations=l,this.uNumCloudOperations=c,this.uMaterials=f,this.uLights=u,this.uNumLights=p,this.uCameraPosition=h,this.uCameraMatrix=g,this.uAspectRatio=y,this.uMaxMarchingSteps=v,this.uEpsilon=m,this.uFlags=_,this.uNoise=w,this.noiseTexture=S}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,r){this.cameraRotationX+=e,this.cameraRotationY+=r,this.updateCamera()}updateCamera(){E.fromEuler(ot,this.cameraRotationX,-this.cameraRotationY,0);let e=M.create();M.transformQuat(e,[0,0,1],ot),M.scaleAndAdd(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),re.fromQuat(this.cameraMatrixForSdfArray,ot)}resizeCanvas=(e,r)=>{let n=e*this.canvasScale,o=r*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=o,this.gl.viewport(0,0,n,o);let i=n/o;this.gl.uniform1f(this.uAspectRatio,i)};render(e){if(this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){let r=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,r.length),this.gl.uniform1iv(this.uOperations,r),this.prevOperations=e.getOperations(),console.info("Rendering new operations",this.prevOperations)}if(this.prevCloudOperations!==e.getCloudOperations()){let r=e.getCloudOperationNumbers();this.gl.uniform1i(this.uNumCloudOperations,r.length),this.gl.uniform1iv(this.uCloudOperations,r),this.prevCloudOperations=e.getCloudOperations(),console.info("Rendering new cloud operations",this.prevCloudOperations)}if(this.prevHighlights!==e.getHighlights()){let r=e.getHighlights();console.info("Rendering new highlight",r,"ops",this.prevOperations),this.gl.uniform2iv(this.uHighlight,r),this.prevHighlights=r}this.prevShapes!==e.getShapes()&&(this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes(),console.info("Rendering new shapes",this.prevShapes)),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition[0],this.cameraPosition[1],this.cameraPosition[2]),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let r=e.getContext("webgl2");if(r==null)throw new Error("Unable to get webgl2 context");let n=r.createBuffer();if(n==null)throw new Error("Unable to create position buffer");r.bindBuffer(r.ARRAY_BUFFER,n),r.bufferData(r.ARRAY_BUFFER,new Float32Array(Mi),r.STATIC_DRAW);let o={"sdf-functions":Xt},i=ce.create(r,o,Pt,Vt);r.useProgram(i.program);let a=this.getAttribute(r,i,"aPosition");r.enableVertexAttribArray(a),r.vertexAttribPointer(a,2,r.FLOAT,!1,0,0);let s=this.getUniform(r,i,"uCameraMatrix"),l=this.getUniform(r,i,"uCameraPosition"),c=this.getUniform(r,i,"uAspectRatio"),u=this.getUniform(r,i,"uShapes"),p=this.getUniform(r,i,"uOperations"),f=this.getUniform(r,i,"uNumOperations"),h=this.getUniform(r,i,"uCloudOperations"),g=this.getUniform(r,i,"uNumCloudOperations"),y=this.getUniform(r,i,"uHighlight"),v=this.getUniform(r,i,"uMaterials"),m=this.getUniform(r,i,"uLights"),_=this.getUniform(r,i,"uNumLights"),w=this.getUniform(r,i,"uMaxMarchingSteps"),S=this.getUniform(r,i,"uEpsilon"),P=this.getUniform(r,i,"uFlags"),T=this.getUniform(r,i,"uNoise"),V=r.createTexture(),G=this.createNoiseCanvas();return r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,V),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,256,256,0,r.RGBA,r.UNSIGNED_BYTE,G.canvas),this.checkError(r),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT),r.uniform1i(T,0),this.checkError(r),new t(r,i,n,u,p,f,y,h,g,m,_,v,l,s,c,w,S,P,T,V)}static checkError(e){let r=e.getError();r!=e.NO_ERROR&&console.error(`GL Error: ${this.getErrorMessage(r,e)}`)}static getErrorMessage(e,r){return e===r.INVALID_ENUM?"Invalid enum":e===r.INVALID_VALUE?"Invalid value":e===r.INVALID_OPERATION?"Invalid operation":e===r.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":e===r.OUT_OF_MEMORY?"Out of memory":e===r.CONTEXT_LOST_WEBGL?"Context lost WebGL":e===r.NO_ERROR?"No error":`Unknown error ${e}`}static createNoiseCanvas(){let e=document.createElement("canvas");e.width=256,e.height=256;let r=e.getContext("2d");r.fillRect(0,0,255,255);let n=new Uint8ClampedArray(256*4);for(let o=0;o<256;o++){for(let a=0;a<256*4;a++)n[a]=Math.floor(Math.random()*256);let i=new ImageData(n,256,1);r.putImageData(i,0,o)}return r}static getAttribute(e,r,n){let o=e.getAttribLocation(r.program,n);if(o<0)throw new Error(`Unable to find attribute ${n}`);return o}static getUniform(e,r,n){let o=e.getUniformLocation(r.program,n);return o==null,o}};var xr=It(br()),Oi={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,epsilon:1e-4,pixelated:!1},st={options:Oi},C=new xr.default({viewports:[st],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1}});var ct=-500,_r=-600,yr=-700,Cr=-800,Ir=-900,Te=-5e3,Sr=-5010,Ar=-5020,Mr=-5030,wr=-5040,Or=-5050,Lr=-5060,Nr=-5070,lt=0,pt=1,Tr=2;function Re(){return crypto.randomUUID()}var De=H.ARRAY_TYPE;function dt(){let t=new De(3);return t[0]=1,t[1]=1,t[2]=1,t}function F(t,e,r){let n=new De(3);return n[0]=t,n[1]=e,n[2]=r,n}function ut(t,e,r=1e-4){return M.distance(t,e)<r}function ze(){let t=new De(4);return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t}function ht(t,e,r,n){let o=new De(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function Rr(t,e){let r={...t.nodes,[e.id]:e};return{...t,nodes:r}}function Dr(t){let e=t.nodes[t.rootNodeId];if(!e)return[];let r=new Array(Object.keys(t.nodes).length);return Ur(e,t.nodes,0,0,r),r}function ft(t){return{colour:ze(),radius:10,...t}}function zr(t,e){return{name:t,id:Re(),position:M.create(),rotation:E.create(),childrenIds:[],childOpCode:"none",shape:mt({}),hasShape:!1,light:ft({}),hasLight:!1,...e}}function gt(t,e,r,n){return{name:t,id:Re(),position:r??M.create(),rotation:n??E.create(),childrenIds:[],childOpCode:"none",shape:mt({}),hasShape:!1,light:e!=null?ft(e):void 0,hasLight:e!=null}}function q(t,e,r,n,o){return{name:t,id:Re(),position:r??M.create(),rotation:n??E.create(),shape:e!=null?mt(e):void 0,hasShape:e!=null,light:ft({}),hasLight:!1,childrenIds:[],childOpCode:o??"none"}}function mt(t){return{maxSize:0,type:"none",shapeParams:M.create(),diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10,cloud:!1,...t}}function Y(t,e){t.childrenIds.push(e.id),e.parentId=t.id}function Er(t,e,r){e={...e,childrenIds:[...e.childrenIds,r.id]},r={...r,parentId:e.id};let n={...t.nodes,[e.id]:e,[r.id]:r};return{...t,nodes:n}}function Gr(t,e){if(e.parentId===void 0)return t;let r=t.nodes[e.parentId],n=r.childrenIds.findIndex(o=>o===e.id);if(n>=0){let o=[...r.childrenIds];o.splice(n,1),r={...r,childrenIds:o};let i={...t.nodes,[r.id]:r};return delete i[e.id],{...t,nodes:i}}return t}function Fr(t,e,r){if(r.parentId==null)return t;let n=t.nodes[r.parentId],o=n.childrenIds.findIndex(a=>a===r.id);if(o>=0){let a=[...n.childrenIds];a.splice(o,1),n={...n,childrenIds:a}}e.childrenIds.includes(r.id)||(e={...e,childrenIds:[...e.childrenIds,r.id]}),r={...r,parentId:e.id};let i={...t.nodes,[n.id]:n,[e.id]:e,[r.id]:r};return{...t,nodes:i}}function Ur(t,e,r,n,o){if(o[n]={node:t,depth:r},t.childrenIds!=null)for(let i of t.childrenIds){let a=e[i];a&&(n=Ur(a,e,r+1,n+1,o))}return n}function vt(t,e){return r=>{let n=r.viewports[t]??st,o={...n,options:{...n.options,...e}},i=[...r.viewports];return i[t]=o,{viewports:i}}}function Ee(t){return e=>({reparentModal:{...e.reparentModal,...t}})}function Ge(t){return e=>({rawSceneModal:{...e.rawSceneModal,...t}})}function Pr(t){return e=>({sceneTree:Rr(e.sceneTree,t)})}function Z(t){return()=>({sceneTree:t})}function Vr(t){return e=>{let r;if(t){for(let n of Object.values(e.sceneTree.nodes))if(n.childrenIds.includes(t)){r=n.id;break}}return{selectedNodeId:t,selectedParentNodeId:r}}}var Xr,U,bt,Br;var jr=[],O=b,kr=O.__b,Wr=O.__r,Zr=O.diffed,Qr=O.__c,Hr=O.unmount,Yr=O.__;function Li(){for(var t;t=jr.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Fe),t.__H.__h.forEach(xt),t.__H.__h=[]}catch(e){t.__H.__h=[],O.__e(e,t.__v)}}O.__b=function(t){U=null,kr&&kr(t)},O.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Yr&&Yr(t,e)},O.__r=function(t){Wr&&Wr(t),Xr=0;var e=(U=t.__c).__H;e&&(bt===U?(e.__h=[],U.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(Fe),e.__h.forEach(xt),e.__h=[],Xr=0)),bt=U},O.diffed=function(t){Zr&&Zr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(jr.push(e)!==1&&Br===O.requestAnimationFrame||((Br=O.requestAnimationFrame)||Ni)(Li)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),bt=U=null},O.__c=function(t,e){e.some(function(r){try{r.__h.forEach(Fe),r.__h=r.__h.filter(function(n){return!n.__||xt(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],O.__e(n,r.__v)}}),Qr&&Qr(t,e)},O.unmount=function(t){Hr&&Hr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Fe(n)}catch(o){e=o}}),r.__H=void 0,e&&O.__e(e,r.__v))};var Jr=typeof requestAnimationFrame=="function";function Ni(t){var e,r=function(){clearTimeout(n),Jr&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);Jr&&(e=requestAnimationFrame(r))}function Fe(t){var e=U,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),U=e}function xt(t){var e=U;t.__c=t.__(),U=e}function Ri(t,e){for(var r in e)t[r]=e[r];return t}function qr(t,e){for(var r in t)if(r!=="__source"&&!(r in e))return!0;for(var n in e)if(n!=="__source"&&t[n]!==e[n])return!0;return!1}function Kr(t,e){this.props=t,this.context=e}(Kr.prototype=new x).isPureReactComponent=!0,Kr.prototype.shouldComponentUpdate=function(t,e){return qr(this.props,t)||qr(this.state,e)};var $r=b.__b;b.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),$r&&$r(t)};var ss=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Di=b.__e;b.__e=function(t,e,r,n){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e)}Di(t,e,r,n)};var en=b.unmount;function sn(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),t.__c.__H=null),(t=Ri({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(n){return sn(n,e,r)})),t}function cn(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(n){return cn(n,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function _t(){this.__u=0,this.o=null,this.__b=null}function ln(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Ue(){this.i=null,this.l=null}b.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),en&&en(t)},(_t.prototype=new x).__c=function(t,e){var r=e.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=ln(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=cn(l,l.__c.__P,l.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.o.pop();)c.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(a,a)},_t.prototype.componentWillUnmount=function(){this.o=[]},_t.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=sn(this.__b,r,n.__O=n.__P)}this.__b=null}var o=e.__a&&d(N,null,t.fallback);return o&&(o.__u&=-33),[d(N,null,e.__a?null:t.children),o]};var tn=function(t,e,r){if(++r[1]===r[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(r=t.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.i=r=r[2]}};function zi(t){return this.getChildContext=function(){return t.context},t.children}function Ei(t){var e=this,r=t.h;if(e.componentWillUnmount=function(){se(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var n=e.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(o,i){this.childNodes.push(o),e.h.insertBefore(o,i)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.h.removeChild(o)}}}se(d(zi,{context:e.context},t.__v),e.v)}function Pe(t,e){var r=d(Ei,{__v:t,h:e});return r.containerInfo=e,r}(Ue.prototype=new x).__a=function(t){var e=this,r=ln(e.__v),n=e.l.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),tn(e,t,n)):o()};r?r(i):i()}},Ue.prototype.render=function(t){this.i=null,this.l=new Map;var e=ae(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var r=e.length;r--;)this.l.set(e[r],this.i=[1,0,this.i]);return t.children},Ue.prototype.componentDidUpdate=Ue.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,r){tn(t,r,e)})};var Gi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Fi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ui=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Pi=/[A-Z0-9]/g,Vi=typeof document<"u",Xi=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var rn=b.event;function Bi(){}function ki(){return this.cancelBubble}function Wi(){return this.defaultPrevented}b.event=function(t){return rn&&(t=rn(t)),t.persist=Bi,t.isPropagationStopped=ki,t.isDefaultPrevented=Wi,t.nativeEvent=t};var pn,Zi={enumerable:!1,configurable:!0,get:function(){return this.class}},nn=b.vnode;b.vnode=function(t){typeof t.type=="string"&&function(e){var r=e.props,n=e.type,o={},i=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||Vi&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||Xi(r.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":Ui.test(a)&&(a=l):l=a="oninput":i&&Fi.test(a)?a=a.replace(Pi,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&o[a=l]&&(a="oninputCapture"),o[a]=s}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=ae(r.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=ae(r.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",Zi)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),e.props=o}(t),t.$$typeof=Gi,nn&&nn(t)};var on=b.__r;b.__r=function(t){on&&on(t),pn=t.__c};var an=b.diffed;b.diffed=function(t){an&&an(t);var e=t.props,r=t.__e;r!=null&&t.type==="textarea"&&"value"in e&&e.value!==r.value&&(r.value=e.value==null?"":e.value),pn=null};var he=class extends x{buttonRef=Q();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:r,text:n,children:o}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect();a={left:s.left+"px",top:s.top+s.height+"px"}}return d(N,null,d("button",{...r,ref:this.buttonRef,onClick:this.toggleMenu},n),i&&Pe(d("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},d("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},o)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var dn=t=>d("label",{style:{display:"inline-block"}},t.label,d("input",{style:{display:"block"},type:"range",...t.inputProps})),fe=class extends x{render(e){let{pixelated:r,renderScale:n,enableShadows:o,enableShowMarching:i,epsilon:a,maxMarchingStep:s}=this.props.options;return d("div",{class:"viewport-options"},d(he,{text:"Menu"},d("div",{class:"control-group-vertical"},d("button",{onClick:this.togglePixelated},r?"Smooth":"Pixelated"),d("select",{onChange:this.changeRenderScale,value:n},d("option",{value:"2"},"2x"),d("option",{value:"1.5"},"1.5x"),d("option",{value:"1"},"1x"),d("option",{value:"0.5"},"0.5x"),d("option",{value:"0.25"},"0.25x"),d("option",{value:"0.125"},"0.125x")),d("button",{onClick:this.toggleShadows},o?"Hide Shadows":"Show Shadows"),d("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),d("button",{onClick:this.showRawScene},"JSON Scene")),d(dn,{label:`Epsilon ${a}`,inputProps:{value:a,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),d(dn,{label:`Marching Steps ${s}`,inputProps:{value:s,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}})))}showRawScene=()=>{C.execute(Ge({show:!0}))};changeEpsilon=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:r})};changeMarchingSteps=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(r)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),C.execute(vt(this.props.viewportIndex,e))};changeRenderScale=e=>{let r=e.target.value,n=Number.parseFloat(r);isFinite(n)?C.execute(vt(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",r)}};var Ve=class extends x{canvasRef=Q();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=de.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),d("div",{class:"viewport outer-panel"},d("canvas",{className:e,ref:this.canvasRef}),d(fe,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let r=e.clientX-this.mousePosX,n=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-n,-r),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let r=e.deltaY>0?1:-1,n=this.zoom+r;this.zoom=Math.max(Math.min(100,n),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function Qi(t){return t.length===3}function Hi(t){return t.length===4}var D=class extends x{render(){let e=this.props.vector,r=this.props.disabled,n=Qi(e),o=Hi(e);return d("div",{class:"vector control-group"},d("input",{class:"input",disabled:r,type:"number",value:e[0],onChange:this.onChangeX,placeholder:"x",step:.1}),d("input",{class:"input",disabled:r,type:"number",value:e[1],onChange:this.onChangeY,placeholder:"y",step:.1}),n&&d("input",{class:"input",disabled:r,type:"number",value:e[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),o&&d("input",{class:"input",disabled:r,type:"number",value:e[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,0)};onChangeY=e=>{this.updateVector(e,1)};onChangeZ=e=>{this.updateVector(e,2)};onChangeW=e=>{this.updateVector(e,3)};updateVector=(e,r)=>{let n=this.props.vector,o=e.target.value,i=parseFloat(o);if(!isFinite(i)){console.error("Unable to process vector index",r,o);return}console.log("Update vector index",r,i);let a=[...n];a[r]=i,this.props.onChange(n,a)}};var ge=class extends x{render(){let e=this.props.shape,r=e.lightingModel==="phong";return d("div",null,d("div",null,d("strong",null,"Type")," ",d("select",{value:e.type??"none",onChange:this.onChangeType},d("option",{value:"none"},"None"),d("option",{value:"box"},"Box"),d("option",{value:"sphere"},"Sphere"),d("option",{value:"hexPrism"},"Hex Prism"),d("option",{value:"torus"},"Torus"),d("option",{value:"octahedron"},"Octahedron"),d("option",{value:"cylinder"},"Cylinder"),d("option",{value:"icosahedron"},"Icosahedron"))),d("div",null,d("strong",null,"Shape Params")," ",d(D,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),d("div",null,d("strong",null,"Lighting Model")," ",d("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},d("option",{value:"unlit"},"Unlit"),d("option",{value:"lambert"},"Lambert"),d("option",{value:"phong"},"Phong"))),d("div",null,d("strong",null,"Cloud")," ",d("input",{type:"checkbox",checked:e.cloud,onChange:this.onChangeCloud})),d("div",null,d("strong",null,"Diffuse Colour")," ",d(D,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),d("div",null,d("strong",null,"Specular Colour")," ",d(D,{disabled:!r,vector:e.specularColour,onChange:this.onChangeSpecularColour})),d("div",null,d("strong",null,"Shininess")," ",d("input",{class:"input",disabled:!r,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeCloud=e=>{let r=e.target.checked;this.updateField(r,"cloud")};onChangeType=e=>{let r=e.target.value;this.updateField(r,"type")};onChangeLightingModel=e=>{let r=e.target.value;this.updateField(r,"lightingModel")};onChangeShininess=e=>{let r=parseFloat(e.target.value);isFinite(r)&&this.updateField(r,"shininess")};onChangeShapeParams=(e,r)=>{this.updateField(r,"shapeParams")};onChangeDiffuseColour=(e,r)=>{this.updateField(r,"diffuseColour")};onChangeSpecularColour=(e,r)=>{this.updateField(r,"specularColour")};updateField=(e,r)=>{console.log("Update shape",r,e);let n={...this.props.shape,[r]:e};this.props.onChange(n)}};var me=class extends x{render(){let e=this.props.light;return e===void 0?d("div",null,"Empty Light"):d("div",null,d("div",null,d("strong",null,"Colour")," ",d(D,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,r)=>{this.updateField(r,"colour")};updateField=(e,r)=>{console.log("Update light",r,e);let n={...this.props.light,[r]:e};this.props.onChange(n)}};var ve=class extends x{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:r}=this.props;if(e==null)return d("div",{class:"scene-node-view"},"No node selected");let n=e.parentId!=null?r.nodes[e.parentId]:void 0,o=e.childOpCode??"none";return d("div",{class:"scene-node-view"},d("div",null,d("strong",null,"Name")," ",d("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),d("div",null,d("strong",null,"Position")," ",d(D,{vector:e.position,onChange:this.onChangePosition})),d("div",null,d("strong",null,"Rotation")," ",d(D,{vector:e.rotation,onChange:this.onChangeRotation})),d("div",null,d("strong",null,"Op Code")," ",d("select",{value:o,onChange:this.onChangeOpCode},d("option",{value:"none"},"None"),d("option",{value:"union"},"Union"),d("option",{value:"intersection"},"Intersection"),d("option",{value:"subtraction"},"Subtraction"))),d("div",null,d("strong",null,"Shape")," ",d("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&d(ge,{shape:e.shape,onChange:this.onChangeShape})),d("div",null,d("strong",null,"Light")," ",d("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&d(me,{light:e.light,onChange:this.onChangeLight})),d("div",null,d("strong",null,"Children")),d("div",{class:"control-group"},d("button",{onClick:this.addChild},"Add"),n!=null&&d(N,null,d("button",{onClick:this.deleteSelf},"Delete"),d("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Er(this.props.sceneTree,this.props.node,zr("New Child",{}));C.execute(Z(e))};deleteSelf=()=>{let e=Gr(this.props.sceneTree,this.props.node);C.execute(Z(e))};reparent=()=>{let{node:e,sceneTree:r}=this.props;if((e.parentId!=null?r.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}C.execute(Ee({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let r=e.target.value;this.updateField(r,"name")};onChangePosition=(e,r)=>{this.updateField(r,"position")};onChangeRotation=(e,r)=>{this.updateField(r,"rotation")};onChangeOpCode=e=>{let r=e.target.value;this.updateField(r,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,r)=>{console.log("Update shape node",r,e);let n={...this.props.node,[r]:e};this.props.onChange(n,this.props.node)}};function yt(t,e,r){return(r==null||r===!0)&&(t+=" "+e),t}var be=class extends x{render(){let{depth:e,node:r,isSelected:n,disable:o}=this.props,i=yt(yt("scene-node-tree-item","is-selected",n),"is-disabled",o===!0);return d("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",r.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var K=class extends x{render(){return d("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:r,onItemClicked:n}=this.props,o=e.nodes[e.rootNodeId],i=[];if(o==null)return i;let a=Dr(e);for(let s of a){let l=s.node.id===r;i.push(d(be,{isSelected:l,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return i}};var xe=class extends x{render(){let{sceneTree:e,selectedNodeId:r}=this.props,n=e.nodes[r];return d("div",{class:"scene-tree"},d("div",{class:"scene-tree__contents outer-panel"},d("div",{class:"inner-panel"},d(K,{sceneTree:e,selectedNodeId:r,onItemClicked:this.onNodeClicked})),d("div",{class:"inner-panel scene-tree__nodes"},d(ve,{sceneTree:e,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{C.execute(Vr(e.id))};onChangeSelectedNode=(e,r)=>{C.execute(Pr(e))}};var $=class extends x{render(){let{show:e,onRequestClose:r}=this.props;if(e===!1)return null;let n=this.props.portalContainer??"modals",o=document.getElementById(n),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return Pe(d("div",{class:"modal-backdrop",onPointerDown:r},d("div",{class:a,onPointerDown:this.preventClose},this.props.children)),o)}preventClose=e=>{e.stopImmediatePropagation()}};var _e=class extends x{render(){let{show:e,sceneTree:r,disabledNodeIds:n,onRequestClose:o}=this.props;return d($,{show:e,onRequestClose:o},d(K,{sceneTree:r,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var ye=class extends x{render(){let{show:e}=this.props.state,r=this.getDisabledNodeIds();return d(_e,{show:e,disabledNodeIds:r,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{C.execute(Ee({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:r}=this.props.state;if(!e)return[];let{sceneTree:n}=this.props,o=n.nodes[r];return[o.id,o.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let r=this.props.sceneTree.nodes[this.props.state.childNodeId],n=Fr(this.props.sceneTree,e,r);C.execute(Z(n))}};var Ce=class extends x{prevSceneTree=void 0;preRef=Q();render(){let{show:e}=this.props.state,{sceneTree:r}=this.props,n="";return e&&this.prevSceneTree!==r&&(n=JSON.stringify(r,null,2)),d($,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},d("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},d("pre",null,n)),d("span",{class:"control-group"},d("button",{onClick:this.loadFromHtml},"Load From Json"),d("label",{class:"button"},"Load From File",d("input",{type:"file",onChange:this.loadFromFile})),d("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{C.execute(Ge({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="scene.json",r.click(),URL.revokeObjectURL(r.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let r=e.target;typeof r.result=="string"?this.loadFromText(r.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let r=JSON.parse(e);r!=null&&C.execute(Z(r))}};var Xe=class extends x{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:r,sceneTree:n,selectedNodeId:o,reparentModal:i,rawSceneModal:a}=this.props.state;return console.log("App render",this.props.state),d(N,null,d("div",{class:"main-view"},d("div",{class:"viewports"},d(Ve,{viewportIndex:0,options:r[0].options,sceneConverter:e})),d(xe,{sceneTree:n,selectedNodeId:o})),d(ye,{state:i,sceneTree:n}),d(Ce,{state:a,sceneTree:n}))}};var J=It(hn());var Yi=8,Ji=16,ji=8,qi={none:ct,union:_r,intersection:yr,subtraction:Cr,xor:Ir},Ki={none:Te,box:Sr,sphere:Ar,hexPrism:Mr,torus:wr,octahedron:Or,cylinder:Lr,icosahedron:Nr},$i={unlit:lt,lambert:pt,phong:Tr};function ea(t){return Ki[t]||Te}function fn(t){return qi[t]||ct}function ta(t){return $i[t]||lt}var Be=class t{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];highlight=[];operations=[];numberOperations=[];cloudOperations=[];numberCloudOperations=[];highlightedId=void 0;previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setCloudOperations(e){this.cloudOperations=e,this.updateCloudOperationNumbers()}getCloudOperations(){return this.cloudOperations}getCloudOperationNumbers(){return this.numberCloudOperations}setHighlight(e){this.highlightedId=e}getHighlights(){return this.highlight}setLight(e,r){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...t.createNewLight(),...r}:this.lights[e]={...this.lights[e],...r},this.updateLight(e)}setMaterial(e,r){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...t.createNewMaterial(),...r}:this.materials[e]={...this.materials[e],...r},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:n,cloudOperations:o,shapes:i,lights:a,materials:s,highlight:l}=t.createShapesFromNode(e,this.highlightedId);if((0,J.default)(this.highlight,l)||(this.highlight=l,console.log("Highlight",this.highlight),this.updateHighlighted()),(0,J.default)(this.operations,n)||(this.operations=n,console.log("Operations",this.operations),this.updateOperationNumbers()),(0,J.default)(this.cloudOperations,o)||(this.cloudOperations=o,console.log("Cloud Operations",this.cloudOperations),this.updateCloudOperationNumbers()),!(0,J.default)(this.shapes,i)){console.log("Shapes",this.shapes),this.shapes=i,this.shapeDataArray.length=0;for(let c=0;c<this.shapes.length;c++)this.updateShape(c)}if(!(0,J.default)(this.lights,a)){this.lights=a,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let c=0;c<this.lights.length;c++)this.updateLight(c)}if(!(0,J.default)(this.materials,s)){this.materials=s,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let c=0;c<this.materials.length;c++)this.updateMaterial(c)}}static createShapesFromNode(e,r){let n=e.nodes[e.rootNodeId];if(!n)return;let o=[],i=[],a=[],s=[],l=[],c=[];if(this.pushToStack(o,i,!1,a,s,l,c,r,n,e.nodes),o.reverse(),c.length>0){let u=c[1]-c[0];c[0]=o.length-c[0]-1,c[1]=c[0]+u}return{operations:o,shapes:a,cloudOperations:i,lights:s,materials:l,highlight:c}}static pushToStack(e,r,n,o,i,a,s,l,c,u){if(c.childOpCode!=="none"){let p=!0;for(let f=0;f<c.childrenIds.length;f++){let h=u[c.childrenIds[f]];(h.hasShape||h.childOpCode!=="none")&&(p?p=!1:n?r.push(c.childOpCode):e.push(c.childOpCode))}}if(c.hasShape){let p=o.findIndex(f=>(0,J.default)(f,c.shape));if(p<0){p=o.length;let f=t.convertToShape(c,a);f!=null&&o.push(f)}c.id===l&&s.push(e.length,e.length+1),n=c.shape.cloud,n?r.push(p):e.push(p)}if(c.hasLight){let p=t.convertToLight(c);p!=null&&i.push(p)}for(let p of c.childrenIds)this.pushToStack(e,r,n,o,i,a,s,l,u[p],u)}setShape(e,r){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=t.createNewShape(r):this.shapes[e]={...this.shapes[e],...r},this.updateShape(e)}updateLight(e){let r=e*Yi,n=this.lights[e];this.lightDataArray[r]=n.position[0],this.lightDataArray[r+1]=n.position[1],this.lightDataArray[r+2]=n.position[2],this.lightDataArray[r+3]=n.radius,this.lightDataArray[r+4]=n.colour[0],this.lightDataArray[r+5]=n.colour[1],this.lightDataArray[r+6]=n.colour[2],this.lightDataArray[r+7]=n.colour[3]}updateMaterial(e){let r=e*ji,n=this.materials[e];this.materialDataArray[r]=n.diffuseColour[0],this.materialDataArray[r+1]=n.diffuseColour[1],this.materialDataArray[r+2]=n.diffuseColour[2],this.materialDataArray[r+3]=n.lightingModel,this.materialDataArray[r+4]=n.specularColour[0],this.materialDataArray[r+5]=n.specularColour[1],this.materialDataArray[r+6]=n.specularColour[2],this.materialDataArray[r+7]=n.shininess}updateShape(e){let r=e*Ji,n=this.shapes[e];this.shapeDataArray[r]=n.position[0],this.shapeDataArray[r+1]=n.position[1],this.shapeDataArray[r+2]=n.position[2],this.shapeDataArray[r+3]=n.maxSize,this.shapeDataArray[r+4]=n.rotation[0],this.shapeDataArray[r+5]=n.rotation[1],this.shapeDataArray[r+6]=n.rotation[2],this.shapeDataArray[r+7]=n.rotation[3],this.shapeDataArray[r+8]=n.shapeType,this.shapeDataArray[r+9]=n.shapeParams[0],this.shapeDataArray[r+10]=n.shapeParams[1],this.shapeDataArray[r+11]=n.shapeParams[2],this.shapeDataArray[r+12]=Math.round(n.material),this.shapeDataArray[r+13]=0,this.shapeDataArray[r+14]=0,this.shapeDataArray[r+15]=0}updateHighlighted(){this.highlight.length<2&&(this.highlight=[-1,0])}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?fn(e):e)}updateCloudOperationNumbers(){this.numberCloudOperations=this.cloudOperations.map(e=>typeof e=="string"?fn(e):e)}static convertToShape(e,r){let n=e.shape;if(n==null)return null;let o={diffuseColour:n.diffuseColour,lightingModel:ta(n.lightingModel),specularColour:n.specularColour,shininess:n.shininess},i=this.findApproxMaterial(o,r);return i<0&&(i=r.length,r.push(o)),{material:i,maxSize:n.maxSize,position:e.position,rotation:e.rotation,shapeParams:n.shapeParams,shapeType:ea(n.type)}}static convertToLight(e){let r=e.light;return r==null?null:{colour:r.colour,position:e.position,radius:r.radius}}static createNewMaterial(){return{diffuseColour:dt(),lightingModel:pt,specularColour:dt(),shininess:10}}static createNewLight(){return{position:M.create(),radius:10,colour:ze()}}static createNewShape(e){return{position:M.create(),rotation:E.create(),maxSize:0,shapeType:Te,shapeParams:M.create(),material:0,...e}}static findApproxMaterial(e,r){for(let n=0;n<r.length;n++){let o=r[n];if(!(o.lightingModel!==e.lightingModel||Math.abs(o.shininess-e.shininess)<1e-4)&&ut(o.diffuseColour,e.diffuseColour)&&ut(o.specularColour,e.specularColour))return n}return-1}};var ke=new Be;C.subscribe(t=>t.sceneTree,ra);C.subscribe(t=>t.selectedNodeId,na);function ra(t){ke.updateShapesFromTree(t.sceneTree)}function na(t){ke.setHighlight(t.selectedNodeId),ke.updateShapesFromTree(t.sceneTree)}var oa=document.getElementById("app");function gn(){se(d(Xe,{state:C.state(),sceneConverter:ke}),oa)}gn();C.subscribeAny(gn);function ia(...t){let e={};for(let r of t)e[r.id]=r;return e}function aa(){let t=q("Root",null,void 0,void 0,"union"),e=q("Main",null,void 0,void 0,"subtraction");Y(t,e);let r=q("Hex Prism",{type:"hexPrism",shapeParams:F(.75,2,0),maxSize:1.5,diffuseColour:F(.5,.5,.5)}),n=q("Box & Sphere",void 0,void 0,void 0,"union");Y(e,r),Y(e,n);let o=q("Box",{type:"box",shapeParams:F(6,1,6),diffuseColour:F(.2,.25,.3),lightingModel:"lambert"},F(0,-1.5,0)),i=q("Sphere",{type:"sphere",shapeParams:F(1,2,1),maxSize:2,diffuseColour:F(.1,.2,.9),lightingModel:"phong"});Y(n,o),Y(n,i);let a=gt("Red Light",{colour:ht(1,.8,.6,1)},F(4,2,3)),s=gt("Green Light",{colour:ht(.2,1,.6,1)},F(-4,2,3));Y(t,a),Y(t,s);let c={nodes:ia(t,e,r,n,o,i,a,s),rootNodeId:t.id};C.execute(Z(c))}aa();})();
//# sourceMappingURL=webgl-index.js.map
