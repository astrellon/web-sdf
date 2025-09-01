(()=>{var an=Object.create;var We=Object.defineProperty;var sn=Object.getOwnPropertyDescriptor;var cn=Object.getOwnPropertyNames;var ln=Object.getPrototypeOf,dn=Object.prototype.hasOwnProperty;var It=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Se=(t,e)=>{for(var r in e)We(t,r,{get:e[r],enumerable:!0})},pn=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of cn(e))!dn.call(t,o)&&o!==r&&We(t,o,{get:()=>e[o],enumerable:!(n=sn(e,o))||n.enumerable});return t};var Ct=(t,e,r)=>(r=t!=null?an(ln(t)):{},pn(e||!t||!t.__esModule?We(r,"default",{value:t,enumerable:!0}):r,t));var br=It(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.EmptyModifier=void 0;var Mi=()=>null;ue.EmptyModifier=Mi;var it=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,r=!0){let n=e(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(e,r))}subscribe(e,r,n,o){let i=e(this.currentState),a={selector:new at(e,i,n,o),subscription:r};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(e,r){return this.subscribe(n=>n,e,void 0,r)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,r){for(let n of this.subscriptions){let o=n.selector.getValue(this.currentState);n.selector.checkIfChanged(o)&&n.subscription(this.currentState,o,e,r)}}};ue.default=it;var at=class{constructor(e,r=void 0,n,o){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=r,this.comparer=n,this.name=o}checkIfChanged(e){let r=!1;return this.comparer!==void 0?r=!this.comparer(this.prevValue,e):r=e!==this.prevValue,this.prevValue=e,r}}});var nn=It((ll,rn)=>{"use strict";rn.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}});var Le,_,wt,un,J,yt,Lt,Nt,Rt,Ye,Ze,Qe,hn,oe={},Ot=[],fn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ie=Array.isArray;function D(t,e){for(var r in e)t[r]=e[r];return t}function Je(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,r){var n,o,i,a={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Le.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Me(t,a,n,o,null)}function Me(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++wt,__i:-1,__u:0};return o==null&&_.vnode!=null&&_.vnode(i),i}function W(){return{current:null}}function R(t){return t.children}function b(t,e){this.props=t,this.context=e}function ee(t,e){if(e==null)return t.__?ee(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ee(t):null}function Tt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Tt(t)}}function St(t){(!t.__d&&(t.__d=!0)&&J.push(t)&&!we.__r++||yt!=_.debounceRendering)&&((yt=_.debounceRendering)||Lt)(we)}function we(){for(var t,e,r,n,o,i,a,s=1;J.length;)J.length>s&&J.sort(Nt),t=J.shift(),s=J.length,t.__d&&(r=void 0,o=(n=(e=t).__v).__e,i=[],a=[],e.__P&&((r=D({},n)).__v=n.__v+1,_.vnode&&_.vnode(r),He(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[o]:null,i,o??ee(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Pt(i,r,a),r.__e!=o&&Tt(r)));we.__r=0}function Et(t,e,r,n,o,i,a,s,c,d,u){var l,h,f,g,I,m,v=n&&n.__k||Ot,x=e.length;for(c=gn(r,e,v,c,x),l=0;l<x;l++)(f=r.__k[l])!=null&&(h=f.__i==-1?oe:v[f.__i]||oe,f.__i=l,m=He(t,f,h,o,i,a,s,c,d,u),g=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&je(h.ref,null,f),u.push(f.ref,f.__c||g,f)),I==null&&g!=null&&(I=g),4&f.__u||h.__k===f.__k?c=Ft(f,c,t):typeof f.type=="function"&&m!==void 0?c=m:g&&(c=g.nextSibling),f.__u&=-7);return r.__e=I,c}function gn(t,e,r,n,o){var i,a,s,c,d,u=r.length,l=u,h=0;for(t.__k=new Array(o),i=0;i<o;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(c=i+h,(a=t.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Me(null,a,null,null,null):ie(a)?Me(R,{children:a},null,null,null):a.constructor==null&&a.__b>0?Me(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=t,a.__b=t.__b+1,s=null,(d=a.__i=mn(a,r,c,l))!=-1&&(l--,(s=r[d])&&(s.__u|=2)),s==null||s.__v==null?(d==-1&&(o>u?h--:o<u&&h++),typeof a.type!="function"&&(a.__u|=4)):d!=c&&(d==c-1?h--:d==c+1?h++:(d>c?h--:h++,a.__u|=4))):t.__k[i]=null;if(l)for(i=0;i<u;i++)(s=r[i])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=ee(s)),zt(s,s));return n}function Ft(t,e,r){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=Ft(n[o],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=ee(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ae(t,e){return e=e||[],t==null||typeof t=="boolean"||(ie(t)?t.some(function(r){ae(r,e)}):e.push(t)),e}function mn(t,e,r,n){var o,i,a=t.key,s=t.type,c=e[r];if(c===null&&t.key==null||c&&a==c.key&&s==c.type&&(2&c.__u)==0)return r;if(n>(c!=null&&(2&c.__u)==0?1:0))for(o=r-1,i=r+1;o>=0||i<e.length;){if(o>=0){if((c=e[o])&&(2&c.__u)==0&&a==c.key&&s==c.type)return o;o--}if(i<e.length){if((c=e[i])&&(2&c.__u)==0&&a==c.key&&s==c.type)return i;i++}}return-1}function At(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||fn.test(e)?r:r+"px"}function Ae(t,e,r,n,o){var i,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||At(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||At(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Rt,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n?r.u=n.u:(r.u=Ye,t.addEventListener(e,i?Qe:Ze,i)):t.removeEventListener(e,i?Qe:Ze,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Mt(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=Ye++;else if(e.t<r.u)return;return r(_.event?_.event(e):e)}}}function He(t,e,r,n,o,i,a,s,c,d){var u,l,h,f,g,I,m,v,x,A,M,Y,G,$,k,z,B,N=e.type;if(e.constructor!=null)return null;128&r.__u&&(c=!!(32&r.__u),i=[s=e.__e=r.__e]),(u=_.__b)&&u(e);e:if(typeof N=="function")try{if(v=e.props,x="prototype"in N&&N.prototype.render,A=(u=N.contextType)&&n[u.__c],M=u?A?A.props.value:u.__:n,r.__c?m=(l=e.__c=r.__c).__=l.__E:(x?e.__c=l=new N(v,M):(e.__c=l=new b(v,M),l.constructor=N,l.render=_n),A&&A.sub(l),l.props=v,l.state||(l.state={}),l.context=M,l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),x&&l.__s==null&&(l.__s=l.state),x&&N.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=D({},l.__s)),D(l.__s,N.getDerivedStateFromProps(v,l.__s))),f=l.props,g=l.state,l.__v=e,h)x&&N.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),x&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(x&&N.getDerivedStateFromProps==null&&v!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,M),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,M)===!1||e.__v==r.__v){for(e.__v!=r.__v&&(l.props=v,l.state=l.__s,l.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(E){E&&(E.__=e)}),Y=0;Y<l._sb.length;Y++)l.__h.push(l._sb[Y]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,M),x&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,g,I)})}if(l.context=M,l.props=v,l.__P=t,l.__e=!1,G=_.__r,$=0,x){for(l.state=l.__s,l.__d=!1,G&&G(e),u=l.render(l.props,l.state,l.context),k=0;k<l._sb.length;k++)l.__h.push(l._sb[k]);l._sb=[]}else do l.__d=!1,G&&G(e),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++$<25);l.state=l.__s,l.getChildContext!=null&&(n=D(D({},n),l.getChildContext())),x&&!h&&l.getSnapshotBeforeUpdate!=null&&(I=l.getSnapshotBeforeUpdate(f,g)),z=u,u!=null&&u.type===R&&u.key==null&&(z=Gt(u.props.children)),s=Et(t,ie(z)?z:[z],e,r,n,o,i,a,s,c,d),l.base=e.__e,e.__u&=-161,l.__h.length&&a.push(l),m&&(l.__E=l.__=null)}catch(E){if(e.__v=null,c||i!=null)if(E.then){for(e.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else for(B=i.length;B--;)Je(i[B]);else e.__e=r.__e,e.__k=r.__k;_.__e(E,e,r)}else i==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):s=e.__e=vn(r.__e,e,r,n,o,i,a,c,d);return(u=_.diffed)&&u(e),128&e.__u?void 0:s}function Pt(t,e,r){for(var n=0;n<r.length;n++)je(r[n],r[++n],r[++n]);_.__c&&_.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){_.__e(i,o.__v)}})}function Gt(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:ie(t)?t.map(Gt):D({},t)}function vn(t,e,r,n,o,i,a,s,c){var d,u,l,h,f,g,I,m=r.props,v=e.props,x=e.type;if(x=="svg"?o="http://www.w3.org/2000/svg":x=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!x&&(x?f.localName==x:f.nodeType==3)){t=f,i[d]=null;break}}if(t==null){if(x==null)return document.createTextNode(v);t=document.createElementNS(o,x,v.is&&v),s&&(_.__m&&_.__m(e,i),s=!1),i=null}if(x==null)m===v||s&&t.data==v||(t.data=v);else{if(i=i&&Le.call(t.childNodes),m=r.props||oe,!s&&i!=null)for(m={},d=0;d<t.attributes.length;d++)m[(f=t.attributes[d]).name]=f.value;for(d in m)if(f=m[d],d!="children"){if(d=="dangerouslySetInnerHTML")l=f;else if(!(d in v)){if(d=="value"&&"defaultValue"in v||d=="checked"&&"defaultChecked"in v)continue;Ae(t,d,null,f,o)}}for(d in v)f=v[d],d=="children"?h=f:d=="dangerouslySetInnerHTML"?u=f:d=="value"?g=f:d=="checked"?I=f:s&&typeof f!="function"||m[d]===f||Ae(t,d,f,m[d],o);if(u)s||l&&(u.__html==l.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(l&&(t.innerHTML=""),Et(e.type=="template"?t.content:t,ie(h)?h:[h],e,r,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:r.__k&&ee(r,0),s,c),i!=null)for(d=i.length;d--;)Je(i[d]);s||(d="value",x=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[d]||x=="progress"&&!g||x=="option"&&g!=m[d])&&Ae(t,d,g,m[d],o),d="checked",I!=null&&I!=t[d]&&Ae(t,d,I,m[d],o))}return t}function je(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){_.__e(o,r)}}function zt(t,e,r){var n,o;if(_.unmount&&_.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||je(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){_.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&zt(n[o],e,r||typeof t.type!="function");r||Je(t.__e),t.__c=t.__=t.__e=void 0}function _n(t,e,r){return this.constructor(t,r)}function se(t,e,r){var n,o,i,a;e==document&&(e=document.documentElement),_.__&&_.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],a=[],He(e,t=(!n&&r||e).__k=p(R,null,[t]),o||oe,oe,e.namespaceURI,!n&&r?[r]:o?null:e.firstChild?Le.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n,a),Pt(i,t,a)}Le=Ot.slice,_={__e:function(t,e,r,n){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(s){t=s}throw t}},wt=0,un=function(t){return t!=null&&t.constructor==null},b.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=D({},this.state),typeof t=="function"&&(t=t(D({},r),this.props)),t&&D(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),St(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),St(this))},b.prototype.render=R,J=[],Lt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Nt=function(t,e){return t.__v.__b-e.__v.__b},we.__r=0,Rt=/(PointerCapture)$|Capture$/i,Ye=0,Ze=Mt(!1),Qe=Mt(!0),hn=0;var Bt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Dt=`float sdfSphere(vec3 point, float radius)
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
float sdfIcosahedron(vec3 point, float radius)
{
    vec3 xyz = normalize(vec3((sqrt(5.0) + 3.0) / 2.0, 1.0, 0.0));
    const vec3 w = vec3(sqrt(3.0) / 3.0);

    radius *= 0.8506507174597755;

    point = abs(point / radius);
    float a = dot(point, xyz.xyz);
    float b = dot(point, xyz.zxy);
    float c = dot(point, xyz.yzx);
    float d = dot(point, w) - xyz.x;

    return max(max(max(a, b), c) - xyz.x, d) * radius;
}

vec2 opUnion(vec2 d1, vec2 d2)
{
    return d1.x < d2.x ? d1 : d2;
}

vec2 opSubtraction(vec2 d1, vec2 d2)
{
    return -d1.x > d2.x ? vec2(-d1.x, d1.y) : d2;
}

vec2 opIntersection(vec2 d1, vec2 d2)
{
    return d1.x > d2.x ? d1 : d2;
}
`;var Vt=`vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
{
    float depth = MIN_DIST;
    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        vec2 dist = sceneSDF(rayOrigin + depth * rayDirection);
        if (dist.x < uEpsilon)
        {
            return vec4(depth, dist.x, float(i), dist.y);
        }

        depth += dist.x;
        if (depth >= MAX_DIST)
        {
            return vec4(MAX_DIST, dist.x, float(i), dist.y);
        }
    }

    return vec4(MAX_DIST, MAX_DIST, float(uMaxMarchingSteps), -1);
}

const float shadowSharpness = 128.0;
vec2 softShadow(vec3 rayOrigin, vec3 lightPos)
{
    vec3 toLight = lightPos - rayOrigin;
    float lightDist = length(toLight);
    vec3 toLightRay = normalize(toLight);

    float depth = 0.05;
    float result = 1.0;
    int i = 0;

    for (; i < uMaxMarchingSteps && depth < MAX_DIST; i++)
    {
        float dist = sceneSDF(rayOrigin + depth * toLightRay).x;
        if (dist < uEpsilon)
        {
            return vec2(0.0, float(i));
        }

        result = min(result, shadowSharpness * dist / depth);
        depth += dist;
    }

    return vec2(clamp(result, 0.0, 1.0), float(i));
}

vec2 hardShadow(vec3 rayOrigin, vec3 lightPos)
{
    vec3 toLight = lightPos - rayOrigin;
    float lightDist = length(toLight);
    vec3 toLightRay = normalize(toLight);

    vec4 dist = rayMarch(rayOrigin, toLightRay);

    if (dist.x > lightDist)
    {
        return vec2(1.0, dist.z);
    }

    return vec2(0.0, dist.z);
}

vec2 softShadowIQ( in vec3 ro, in vec3 rd, float mint, float maxt, float w )
{
    float res = 1.0;
    float t = mint;
    int i = 0;
    for(; i < uMaxMarchingSteps && t < maxt; i++)
    {
        float h = sceneSDF(ro + t*rd).x;
        res = min( res, h/(w*t) );
        t += clamp(h, 0.005, 0.50);
        if( res<-1.0 || t>maxt ) break;
    }
    res = max(res,-1.0);

    return vec2(0.25*(1.0+res)*(1.0+res)*(2.0-res), float(i));
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

    if (dotLN < 0.0)
    {
        // Light not visible from this point on the surface
        return vec3(0.0, 0.0, 0.0);
    }

    if (dotRV < 0.0)
    {
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
    bool shadowsEnabled = checkFlag(ENABLE_SHADOWS);
    bool useSoftShadows = checkFlag(ENABLE_SOFT_SHADOWS);

    if (uNumLights > 0)
    {
        vec3 normal = estimateNormalPhong(worldPoint, currentDepth);

        for (int i = 0; i < uNumLights; i++)
        {
            mat2x4 light = uLights[i];
            vec3 lightPos = light[0].xyz;

            vec2 shadow = vec2(1.0, 0.0);
            if (shadowsEnabled)
            {
                vec3 shortOffset = worldPoint + normal * 0.01;
                shadow = useSoftShadows ?
                    softShadow(shortOffset, lightPos) :
                    hardShadow(shortOffset, lightPos);


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
 */
vec4 lambertIllumination(vec3 currentDepth, vec3 diffuse, vec3 worldPoint, vec3 cameraPoint)
{
    vec3 colour = ambientLight;
    float light0Rays;
    bool shadowsEnabled = checkFlag(ENABLE_SHADOWS);
    bool useSoftShadows = checkFlag(ENABLE_SOFT_SHADOWS);

    if (uNumLights > 0)
    {
        vec3 normal = estimateNormalTetrahedron(worldPoint, currentDepth);

        for (int i = 0; i < uNumLights; i++)
        {
            mat2x4 light = uLights[i];
            vec3 lightPos = light[0].xyz;

            vec2 shadow = vec2(1.0, 0.0);
            if (shadowsEnabled)
            {
                vec3 shortOffset = worldPoint + normal * 0.01;
                shadow = useSoftShadows ?
                    softShadow(shortOffset, lightPos) :
                    hardShadow(shortOffset, lightPos);

                if (i == 1)
                {
                    light0Rays = shadow.y;
                }
            }

            vec3 lightContrib = lambertContribForLight(currentDepth, diffuse, worldPoint, cameraPoint, normal, lightPos, light[1].xyz);
            colour += lightContrib * shadow.x;
        }
    }

    // colour = pow(colour, vec3(1.0 / 2.2)); // Gamma correction
    return vec4(colour, light0Rays);
}

vec4 toLightNormal(int lightIndex, vec3 worldPoint)
{
    if (lightIndex < uNumLights)
    {
        mat2x4 light = uLights[lightIndex];
        vec3 lightPos = light[0].xyz;

        vec3 toLight = normalize(lightPos - worldPoint);
        return vec4(toLight, 1.0);
    }

    return vec4(0.0);
}

vec3 createRayDirection(float fieldOfView, vec2 fragCoord)
{
    vec2 xy = fragCoord / 2.0;
    float z = 2.0 / tan(radians(fieldOfView));
    return normalize(vec3(xy, -z));
}
`;var Xt=`#version 300 es

precision mediump float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

const int UNLIT = 0;
const int LAMBERT = 1;
const int PHONG = 2;

const int ENABLE_SHADOWS = 0x01;
const int ENABLE_NUM_MARCHING = 0x02;
const int ENABLE_DEPTH = 0x04;
const int ENABLE_NORMALS = 0x08;
const int ENABLE_TO_LIGHT_NORMALS = 0x10;
const int ENABLE_SOFT_SHADOWS = 0x20;

layout(location = 0) out vec4 fragColour;

in vec2 oPosition;

uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;
uniform int uMaxMarchingSteps;
uniform float uEpsilon;
uniform int uFlags;
uniform sampler2D uNoise;
uniform mat2x4 uLights[8];
uniform int uNumLights;
uniform float uParams[128];
uniform mat2x4 uMaterials[32];

#define checkFlag(flag) ((uFlags & flag) > 0)

#include <sdf-functions>

vec2 sceneSDF(vec3 point)
{
    #include <assembled-shader>
}

#include <raymarch-functions>

void main()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(45.0, oPosition);
    vec3 rayOrigin = uCameraPosition;

    vec4 dist = rayMarch(rayOrigin, rayDir);

    if (dist.x > MAX_DIST - uEpsilon)
    {
        discard;
    }

    if (checkFlag(ENABLE_DEPTH)) // Depth view
    {
        fragColour = vec4(vec3(dist.x / MAX_DIST), 1.0);
    }
    else if (checkFlag(ENABLE_NUM_MARCHING)) // Num marching
    {
        float r = dist.z / float(uMaxMarchingSteps);

        fragColour = vec4(r, 0.0, 0.0, 1);
    }
    else if (checkFlag(ENABLE_NORMALS)) // Show normals
    {
        vec3 worldPoint = rayOrigin + dist.x * rayDir;
        vec3 normal = estimateNormalPhong(worldPoint, dist.xyz);

        fragColour = vec4(normal, 1.0);
    }
    else if (checkFlag(ENABLE_TO_LIGHT_NORMALS)) // Show normals from world position to a specific light
    {
        vec3 worldPoint = rayOrigin + dist.x * rayDir;
        fragColour = toLightNormal(0, worldPoint);
    }
    else
    {
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

        vec4 litColour = vec4(diffuse, 1.0);
        if (lightingModel == LAMBERT)
        {
            litColour = lambertIllumination(dist.xyz, diffuse, worldPoint, rayOrigin);
        }
        else if (lightingModel == PHONG)
        {
            litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);
        }

        // vec4 litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);

        fragColour = vec4(litColour.xyz, 1.0);
    }
}
`;var yn=/#include\s+\<([^\>]+)\>/gmi,ce=class t{program;constructor(e){this.program=e}static assembleShader(e,r){let n=r.matchAll(yn);for(let o of n){let i=e[o[1]];i===void 0&&(console.error(`Unknown shader include ${o[1]}`),i=""),r=r.replace(o[0],i)}return r}static create(e,r,n,o){let i=null,a=null,s=null;function c(){i!=null&&(e.detachShader(i,a),e.detachShader(i,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}if(a=e.createShader(e.VERTEX_SHADER),e.shaderSource(a,this.assembleShader(r,n)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",u),c(),new Error(`Vertex shader compile error ${u}`)}s=e.createShader(e.FRAGMENT_SHADER);let d=this.assembleShader(r,o);{let u=d.split(`
`),l=new Array(u.length);for(let h=0;h<u.length;h++)l[h]=h+1+": "+u[h];console.info("Assembled shader",l.join(`
`))}if(e.shaderSource(s,d),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",u),c(),new Error(`Fragment shader compile error ${u}`)}if(i=e.createProgram(),e.attachShader(i,a),e.attachShader(i,s),e.linkProgram(i),c(),!e.getProgramParameter(i,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(i);let u=e.getProgramInfoLog(i);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new t(i)}};var Z={};Se(Z,{ANGLE_ORDER:()=>qe,ARRAY_TYPE:()=>S,EPSILON:()=>y,RANDOM:()=>V,equals:()=>Nn,round:()=>te,setMatrixArrayType:()=>Sn,toDegree:()=>Ln,toRadian:()=>wn});var y=1e-6,S=typeof Float32Array<"u"?Float32Array:Array,V=Math.random,qe="zyx";function te(t){return t>=0?Math.round(t):t%.5===0?Math.floor(t):Math.round(t)}function Sn(t){S=t}var An=Math.PI/180,Mn=180/Math.PI;function wn(t){return t*An}function Ln(t){return t*Mn}function Nn(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))}var H={};Se(H,{add:()=>Kn,adjoint:()=>Bn,clone:()=>On,copy:()=>Tn,create:()=>Ke,determinant:()=>Dn,equals:()=>ro,exactEquals:()=>to,frob:()=>qn,fromMat2d:()=>Qn,fromMat4:()=>Rn,fromQuat:()=>Yn,fromRotation:()=>Wn,fromScaling:()=>Zn,fromTranslation:()=>kn,fromValues:()=>En,identity:()=>Pn,invert:()=>zn,mul:()=>no,multiply:()=>Ut,multiplyScalar:()=>$n,multiplyScalarAndAdd:()=>eo,normalFromMat4:()=>Jn,projection:()=>Hn,rotate:()=>Xn,scale:()=>Un,set:()=>Fn,str:()=>jn,sub:()=>oo,subtract:()=>kt,translate:()=>Vn,transpose:()=>Gn});function Ke(){var t=new S(9);return S!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function Rn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function On(t){var e=new S(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Tn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function En(t,e,r,n,o,i,a,s,c){var d=new S(9);return d[0]=t,d[1]=e,d[2]=r,d[3]=n,d[4]=o,d[5]=i,d[6]=a,d[7]=s,d[8]=c,d}function Fn(t,e,r,n,o,i,a,s,c,d){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=i,t[5]=a,t[6]=s,t[7]=c,t[8]=d,t}function Pn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Gn(t,e){if(t===e){var r=e[1],n=e[2],o=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=o}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function zn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],c=e[6],d=e[7],u=e[8],l=u*a-s*d,h=-u*i+s*c,f=d*i-a*c,g=r*l+n*h+o*f;return g?(g=1/g,t[0]=l*g,t[1]=(-u*n+o*d)*g,t[2]=(s*n-o*a)*g,t[3]=h*g,t[4]=(u*r-o*c)*g,t[5]=(-s*r+o*i)*g,t[6]=f*g,t[7]=(-d*r+n*c)*g,t[8]=(a*r-n*i)*g,t):null}function Bn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],c=e[6],d=e[7],u=e[8];return t[0]=a*u-s*d,t[1]=o*d-n*u,t[2]=n*s-o*a,t[3]=s*c-i*u,t[4]=r*u-o*c,t[5]=o*i-r*s,t[6]=i*d-a*c,t[7]=n*c-r*d,t[8]=r*a-n*i,t}function Dn(t){var e=t[0],r=t[1],n=t[2],o=t[3],i=t[4],a=t[5],s=t[6],c=t[7],d=t[8];return e*(d*i-a*c)+r*(-d*o+a*s)+n*(c*o-i*s)}function Ut(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],c=e[5],d=e[6],u=e[7],l=e[8],h=r[0],f=r[1],g=r[2],I=r[3],m=r[4],v=r[5],x=r[6],A=r[7],M=r[8];return t[0]=h*n+f*a+g*d,t[1]=h*o+f*s+g*u,t[2]=h*i+f*c+g*l,t[3]=I*n+m*a+v*d,t[4]=I*o+m*s+v*u,t[5]=I*i+m*c+v*l,t[6]=x*n+A*a+M*d,t[7]=x*o+A*s+M*u,t[8]=x*i+A*c+M*l,t}function Vn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],c=e[5],d=e[6],u=e[7],l=e[8],h=r[0],f=r[1];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=h*n+f*a+d,t[7]=h*o+f*s+u,t[8]=h*i+f*c+l,t}function Xn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],c=e[5],d=e[6],u=e[7],l=e[8],h=Math.sin(r),f=Math.cos(r);return t[0]=f*n+h*a,t[1]=f*o+h*s,t[2]=f*i+h*c,t[3]=f*a-h*n,t[4]=f*s-h*o,t[5]=f*c-h*i,t[6]=d,t[7]=u,t[8]=l,t}function Un(t,e,r){var n=r[0],o=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=o*e[3],t[4]=o*e[4],t[5]=o*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function kn(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function Wn(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Zn(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Qn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function Yn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r+r,s=n+n,c=o+o,d=r*a,u=n*a,l=n*s,h=o*a,f=o*s,g=o*c,I=i*a,m=i*s,v=i*c;return t[0]=1-l-g,t[3]=u-v,t[6]=h+m,t[1]=u+v,t[4]=1-d-g,t[7]=f-I,t[2]=h-m,t[5]=f+I,t[8]=1-d-l,t}function Jn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],c=e[6],d=e[7],u=e[8],l=e[9],h=e[10],f=e[11],g=e[12],I=e[13],m=e[14],v=e[15],x=r*s-n*a,A=r*c-o*a,M=r*d-i*a,Y=n*c-o*s,G=n*d-i*s,$=o*d-i*c,k=u*I-l*g,z=u*m-h*g,B=u*v-f*g,N=l*m-h*I,E=l*v-f*I,ne=h*v-f*m,O=x*ne-A*E+M*N+Y*B-G*z+$*k;return O?(O=1/O,t[0]=(s*ne-c*E+d*N)*O,t[1]=(c*B-a*ne-d*z)*O,t[2]=(a*E-s*B+d*k)*O,t[3]=(o*E-n*ne-i*N)*O,t[4]=(r*ne-o*B+i*z)*O,t[5]=(n*B-r*E-i*k)*O,t[6]=(I*$-m*G+v*Y)*O,t[7]=(m*M-g*$-v*A)*O,t[8]=(g*G-I*M+v*x)*O,t):null}function Hn(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function jn(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function qn(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8])}function Kn(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function kt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function $n(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function eo(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t}function to(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function ro(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],s=t[5],c=t[6],d=t[7],u=t[8],l=e[0],h=e[1],f=e[2],g=e[3],I=e[4],m=e[5],v=e[6],x=e[7],A=e[8];return Math.abs(r-l)<=y*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(n-h)<=y*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(o-f)<=y*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-g)<=y*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(a-I)<=y*Math.max(1,Math.abs(a),Math.abs(I))&&Math.abs(s-m)<=y*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-v)<=y*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(d-x)<=y*Math.max(1,Math.abs(d),Math.abs(x))&&Math.abs(u-A)<=y*Math.max(1,Math.abs(u),Math.abs(A))}var no=Ut,oo=kt;var X={};Se(X,{add:()=>ai,calculateW:()=>Ho,clone:()=>ri,conjugate:()=>$o,copy:()=>oi,create:()=>rt,dot:()=>gr,equals:()=>ui,exactEquals:()=>pi,exp:()=>pr,fromEuler:()=>ei,fromMat3:()=>hr,fromValues:()=>ni,getAngle:()=>Zo,getAxisAngle:()=>Wo,identity:()=>ko,invert:()=>Ko,len:()=>li,length:()=>mr,lerp:()=>ci,ln:()=>ur,mul:()=>si,multiply:()=>dr,normalize:()=>nt,pow:()=>jo,random:()=>qo,rotateX:()=>Qo,rotateY:()=>Yo,rotateZ:()=>Jo,rotationTo:()=>hi,scale:()=>fr,set:()=>ii,setAxes:()=>gi,setAxisAngle:()=>lr,slerp:()=>Oe,sqlerp:()=>fi,sqrLen:()=>di,squaredLength:()=>vr,str:()=>ti});var w={};Se(w,{add:()=>co,angle:()=>Ro,bezier:()=>Co,ceil:()=>lo,clone:()=>io,copy:()=>ao,create:()=>Ne,cross:()=>de,dist:()=>Bo,distance:()=>Jt,div:()=>zo,divide:()=>Yt,dot:()=>le,equals:()=>Fo,exactEquals:()=>Eo,floor:()=>po,forEach:()=>Xo,fromValues:()=>Re,hermite:()=>Io,inverse:()=>_o,len:()=>et,length:()=>Wt,lerp:()=>bo,max:()=>ho,min:()=>uo,mul:()=>Go,multiply:()=>Qt,negate:()=>vo,normalize:()=>$e,random:()=>yo,rotateX:()=>wo,rotateY:()=>Lo,rotateZ:()=>No,round:()=>fo,scale:()=>go,scaleAndAdd:()=>mo,set:()=>so,slerp:()=>xo,sqrDist:()=>Do,sqrLen:()=>Vo,squaredDistance:()=>Ht,squaredLength:()=>jt,str:()=>To,sub:()=>Po,subtract:()=>Zt,transformMat3:()=>Ao,transformMat4:()=>So,transformQuat:()=>Mo,zero:()=>Oo});function Ne(){var t=new S(3);return S!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function io(t){var e=new S(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Wt(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function Re(t,e,r){var n=new S(3);return n[0]=t,n[1]=e,n[2]=r,n}function ao(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function so(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function co(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Zt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function Qt(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function Yt(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function lo(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function po(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function uo(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function ho(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function fo(t,e){return t[0]=te(e[0]),t[1]=te(e[1]),t[2]=te(e[2]),t}function go(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function mo(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function Jt(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(r*r+n*n+o*o)}function Ht(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return r*r+n*n+o*o}function jt(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function vo(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function _o(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function $e(t,e){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function le(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function de(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[0],s=r[1],c=r[2];return t[0]=o*c-i*s,t[1]=i*a-n*c,t[2]=n*s-o*a,t}function bo(t,e,r,n){var o=e[0],i=e[1],a=e[2];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t}function xo(t,e,r,n){var o=Math.acos(Math.min(Math.max(le(e,r),-1),1)),i=Math.sin(o),a=Math.sin((1-n)*o)/i,s=Math.sin(n*o)/i;return t[0]=a*e[0]+s*r[0],t[1]=a*e[1]+s*r[1],t[2]=a*e[2]+s*r[2],t}function Io(t,e,r,n,o,i){var a=i*i,s=a*(2*i-3)+1,c=a*(i-2)+i,d=a*(i-1),u=a*(3-2*i);return t[0]=e[0]*s+r[0]*c+n[0]*d+o[0]*u,t[1]=e[1]*s+r[1]*c+n[1]*d+o[1]*u,t[2]=e[2]*s+r[2]*c+n[2]*d+o[2]*u,t}function Co(t,e,r,n,o,i){var a=1-i,s=a*a,c=i*i,d=s*a,u=3*i*s,l=3*c*a,h=c*i;return t[0]=e[0]*d+r[0]*u+n[0]*l+o[0]*h,t[1]=e[1]*d+r[1]*u+n[1]*l+o[1]*h,t[2]=e[2]*d+r[2]*u+n[2]*l+o[2]*h,t}function yo(t,e){e=e===void 0?1:e;var r=V()*2*Math.PI,n=V()*2-1,o=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=n*e,t}function So(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[3]*n+r[7]*o+r[11]*i+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*o+r[8]*i+r[12])/a,t[1]=(r[1]*n+r[5]*o+r[9]*i+r[13])/a,t[2]=(r[2]*n+r[6]*o+r[10]*i+r[14])/a,t}function Ao(t,e,r){var n=e[0],o=e[1],i=e[2];return t[0]=n*r[0]+o*r[3]+i*r[6],t[1]=n*r[1]+o*r[4]+i*r[7],t[2]=n*r[2]+o*r[5]+i*r[8],t}function Mo(t,e,r){var n=r[0],o=r[1],i=r[2],a=r[3],s=e[0],c=e[1],d=e[2],u=o*d-i*c,l=i*s-n*d,h=n*c-o*s;return u=u+u,l=l+l,h=h+h,t[0]=s+a*u+o*h-i*l,t[1]=c+a*l+i*u-n*h,t[2]=d+a*h+n*l-o*u,t}function wo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0],i[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),i[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Lo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),i[1]=o[1],i[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function No(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),i[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),i[2]=o[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Ro(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2],c=Math.sqrt((r*r+n*n+o*o)*(i*i+a*a+s*s)),d=c&&le(t,e)/c;return Math.acos(Math.min(Math.max(d,-1),1))}function Oo(t){return t[0]=0,t[1]=0,t[2]=0,t}function To(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Eo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function Fo(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2];return Math.abs(r-i)<=y*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-a)<=y*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-s)<=y*Math.max(1,Math.abs(o),Math.abs(s))}var Po=Zt,Go=Qt,zo=Yt,Bo=Jt,Do=Ht,et=Wt,Vo=jt,Xo=function(){var t=Ne();return function(e,r,n,o,i,a){var s,c;for(r||(r=3),n||(n=0),o?c=Math.min(o*r+n,e.length):c=e.length,s=n;s<c;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}();function Uo(){var t=new S(4);return S!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function qt(t){var e=new S(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Kt(t,e,r,n){var o=new S(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function $t(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function er(t,e,r,n,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}function tr(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function rr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function nr(t){var e=t[0],r=t[1],n=t[2],o=t[3];return Math.sqrt(e*e+r*r+n*n+o*o)}function or(t){var e=t[0],r=t[1],n=t[2],o=t[3];return e*e+r*r+n*n+o*o}function ir(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=o*a,t[3]=i*a,t}function tt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function ar(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t[3]=s+n*(r[3]-s),t}function sr(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}var da=function(){var t=Uo();return function(e,r,n,o,i,a){var s,c;for(r||(r=4),n||(n=0),o?c=Math.min(o*r+n,e.length):c=e.length,s=n;s<c;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();function rt(){var t=new S(4);return S!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function ko(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function lr(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function Wo(t,e){var r=Math.acos(e[3])*2,n=Math.sin(r/2);return n>y?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function Zo(t,e){var r=gr(t,e);return Math.acos(2*r*r-1)}function dr(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=r[0],c=r[1],d=r[2],u=r[3];return t[0]=n*u+a*s+o*d-i*c,t[1]=o*u+a*c+i*s-n*d,t[2]=i*u+a*d+n*c-o*s,t[3]=a*u-n*s-o*c-i*d,t}function Qo(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),c=Math.cos(r);return t[0]=n*c+a*s,t[1]=o*c+i*s,t[2]=i*c-o*s,t[3]=a*c-n*s,t}function Yo(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),c=Math.cos(r);return t[0]=n*c-i*s,t[1]=o*c+a*s,t[2]=i*c+n*s,t[3]=a*c-o*s,t}function Jo(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),c=Math.cos(r);return t[0]=n*c+o*s,t[1]=o*c-n*s,t[2]=i*c+a*s,t[3]=a*c-i*s,t}function Ho(t,e){var r=e[0],n=e[1],o=e[2];return t[0]=r,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),t}function pr(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=Math.exp(i),c=a>0?s*Math.sin(a)/a:0;return t[0]=r*c,t[1]=n*c,t[2]=o*c,t[3]=s*Math.cos(a),t}function ur(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=a>0?Math.atan2(a,i)/a:0;return t[0]=r*s,t[1]=n*s,t[2]=o*s,t[3]=.5*Math.log(r*r+n*n+o*o+i*i),t}function jo(t,e,r){return ur(t,e),fr(t,t,r),pr(t,t),t}function Oe(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3],c=r[0],d=r[1],u=r[2],l=r[3],h,f,g,I,m;return f=o*c+i*d+a*u+s*l,f<0&&(f=-f,c=-c,d=-d,u=-u,l=-l),1-f>y?(h=Math.acos(f),g=Math.sin(h),I=Math.sin((1-n)*h)/g,m=Math.sin(n*h)/g):(I=1-n,m=n),t[0]=I*o+m*c,t[1]=I*i+m*d,t[2]=I*a+m*u,t[3]=I*s+m*l,t}function qo(t){var e=V(),r=V(),n=V(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t}function Ko(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i,s=a?1/a:0;return t[0]=-r*s,t[1]=-n*s,t[2]=-o*s,t[3]=i*s,t}function $o(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function hr(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(e[o*3+o]-e[i*3+i]-e[a*3+a]+1),t[o]=.5*n,n=.5/n,t[3]=(e[i*3+a]-e[a*3+i])*n,t[i]=(e[i*3+o]+e[o*3+i])*n,t[a]=(e[a*3+o]+e[o*3+a])*n}return t}function ei(t,e,r,n){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:qe,i=Math.PI/360;e*=i,n*=i,r*=i;var a=Math.sin(e),s=Math.cos(e),c=Math.sin(r),d=Math.cos(r),u=Math.sin(n),l=Math.cos(n);switch(o){case"xyz":t[0]=a*d*l+s*c*u,t[1]=s*c*l-a*d*u,t[2]=s*d*u+a*c*l,t[3]=s*d*l-a*c*u;break;case"xzy":t[0]=a*d*l-s*c*u,t[1]=s*c*l-a*d*u,t[2]=s*d*u+a*c*l,t[3]=s*d*l+a*c*u;break;case"yxz":t[0]=a*d*l+s*c*u,t[1]=s*c*l-a*d*u,t[2]=s*d*u-a*c*l,t[3]=s*d*l+a*c*u;break;case"yzx":t[0]=a*d*l+s*c*u,t[1]=s*c*l+a*d*u,t[2]=s*d*u-a*c*l,t[3]=s*d*l-a*c*u;break;case"zxy":t[0]=a*d*l-s*c*u,t[1]=s*c*l+a*d*u,t[2]=s*d*u+a*c*l,t[3]=s*d*l-a*c*u;break;case"zyx":t[0]=a*d*l-s*c*u,t[1]=s*c*l+a*d*u,t[2]=s*d*u-a*c*l,t[3]=s*d*l+a*c*u;break;default:throw new Error("Unknown angle order "+o)}return t}function ti(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var ri=qt,ni=Kt,oi=$t,ii=er,ai=tr,si=dr,fr=rr,gr=tt,ci=ar,mr=nr,li=mr,vr=or,di=vr,nt=ir,pi=sr;function ui(t,e){return Math.abs(tt(t,e))>=1-y}var hi=function(){var t=Ne(),e=Re(1,0,0),r=Re(0,1,0);return function(n,o,i){var a=le(o,i);return a<-.999999?(de(t,e,o),et(t)<1e-6&&de(t,r,o),$e(t,t),lr(n,t,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(de(t,o,i),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+a,nt(n,n))}}(),fi=function(){var t=rt(),e=rt();return function(r,n,o,i,a,s){return Oe(t,n,a,s),Oe(e,o,i,s),Oe(r,t,e,2*s*(1-s)),r}}(),gi=function(){var t=Ke();return function(e,r,n,o){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],nt(e,hr(e,t))}}();function vi(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillRect(0,0,255,255);let r=new Uint8ClampedArray(256*4);for(let n=0;n<256;n++){for(let i=0;i<256*4;i++)r[i]=Math.floor(Math.random()*256);let o=new ImageData(r,256,1);e.putImageData(o,0,n)}return e}var _r=vi();var _i=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ot=X.create();function bi(t,e){return t===e.INVALID_ENUM?"Invalid enum":t===e.INVALID_VALUE?"Invalid value":t===e.INVALID_OPERATION?"Invalid operation":t===e.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":t===e.OUT_OF_MEMORY?"Out of memory":t===e.CONTEXT_LOST_WEBGL?"Context lost WebGL":t===e.NO_ERROR?"No error":`Unknown error ${t}`}var xi=1,Ii=2,Ci=4,yi=8,Si=16,Ai=32;function re(t,e){return t?e:0}var pe=class t{gl;shader;positionBuffer;uMaterials;uParameters;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uNoise;noiseTexture;cameraPosition=w.create();cameraTarget=w.create();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;enableDepth=!1;enableNormals=!1;enableToLightNormals=!1;enableSoftShadows=!0;canvasScale=1;cameraMatrixForSdfArray=H.create();prevMaterials;prevLights;prevParameters;prevShaderText;constructor(e,r,n,o,i,a,s,c,d,u,l,h,f,g,I,m){this.gl=e,this.shader=r,this.prevShaderText=n,this.positionBuffer=o,this.uMaterials=s,this.uParameters=c,this.uLights=i,this.uNumLights=a,this.uCameraPosition=d,this.uCameraMatrix=u,this.uAspectRatio=l,this.uMaxMarchingSteps=h,this.uEpsilon=f,this.uFlags=g,this.uNoise=I,this.noiseTexture=m}destroy(){this.gl.deleteProgram(this.shader.program)}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,r){this.cameraRotationX+=e,this.cameraRotationY+=r,this.updateCamera()}updateCamera(){X.fromEuler(ot,this.cameraRotationX,this.cameraRotationY,0);let e=w.create();w.transformQuat(e,[0,0,1],ot),w.scaleAndAdd(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),H.fromQuat(this.cameraMatrixForSdfArray,ot),H.transpose(this.cameraMatrixForSdfArray,this.cameraMatrixForSdfArray)}resizeCanvas=(e,r)=>{let n=e*this.canvasScale,o=r*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=o,this.gl.viewport(0,0,n,o);let i=n/o;this.gl.uniform1f(this.uAspectRatio,i)};render(e){this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.prevParameters!==e.getParameters()&&(this.prevParameters=e.getParameters(),console.info("Rendering new parameters",this.prevParameters),this.gl.uniform1fv(this.uParameters,this.prevParameters));let r=0;r|=re(this.enableShadows,xi),r|=re(this.enableDepth,Ci),r|=re(this.enableNormals,yi),r|=re(this.enableShowMarches,Ii),r|=re(this.enableToLightNormals,Si),r|=re(this.enableSoftShadows,Ai),this.gl.uniform1i(this.uFlags,r),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition[0],this.cameraPosition[1],this.cameraPosition[2]),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e,r){let n=e.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let o=n.createBuffer();if(o==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(_i),n.STATIC_DRAW);let i={"assembled-shader":r,"sdf-functions":Dt,"raymarch-functions":Vt},a=ce.create(n,i,Bt,Xt);n.useProgram(a.program);let s=this.getAttribute(n,a,"aPosition");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let c=this.getUniform(n,a,"uCameraMatrix"),d=this.getUniform(n,a,"uCameraPosition"),u=this.getUniform(n,a,"uAspectRatio"),l=this.getUniform(n,a,"uMaterials"),h=this.getUniform(n,a,"uLights"),f=this.getUniform(n,a,"uNumLights"),g=this.getUniform(n,a,"uParams"),I=this.getUniform(n,a,"uMaxMarchingSteps"),m=this.getUniform(n,a,"uEpsilon"),v=this.getUniform(n,a,"uFlags"),x=this.getUniform(n,a,"uNoise"),A=n.createTexture(),M=_r;return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,A),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,256,256,0,n.RGBA,n.UNSIGNED_BYTE,M.canvas),this.checkError(n),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.uniform1i(x,0),this.checkError(n),new t(n,a,r,o,h,f,l,g,d,c,u,I,m,v,x,A)}static checkError(e){let r=e.getError();r!=e.NO_ERROR&&console.error(`GL Error: ${bi(r,e)}`)}static getAttribute(e,r,n){let o=e.getAttribLocation(r.program,n);if(o<0)throw new Error(`Unable to find attribute ${n}`);return o}static getUniform(e,r,n){let o=e.getUniformLocation(r.program,n);return o==null,o}};var xr=Ct(br()),wi={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,enableDepth:!1,enableNormals:!1,enableToLightNormals:!1,enableSoftShadows:!0,epsilon:1e-4,pixelated:!1},st={options:wi},C=new xr.default({viewports:[st],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1},currentShader:"return 100.0;"});var ct=0,lt=1,Ir=2;function Te(){return crypto.randomUUID()}var Ee=Z.ARRAY_TYPE;function dt(){let t=new Ee(3);return t[0]=1,t[1]=1,t[2]=1,t}function F(t,e,r){let n=new Ee(3);return n[0]=t,n[1]=e,n[2]=r,n}function Fe(){let t=new Ee(4);return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t}function pt(t,e,r,n){let o=new Ee(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function Cr(t,e){let r={...t.nodes,[e.id]:e};return{...t,nodes:r}}function yr(t){let e=t.nodes[t.rootNodeId];if(!e)return[];let r=new Array(Object.keys(t.nodes).length);return Lr(e,t.nodes,0,0,r),r}function ut(t){return{colour:Fe(),radius:10,...t}}function Sr(t,e){return{name:t,id:Te(),position:w.create(),rotation:X.create(),childrenIds:[],childOpCode:"none",shape:ft({}),hasShape:!1,light:ut({}),hasLight:!1,...e}}function ht(t,e,r,n){return{name:t,id:Te(),position:r??w.create(),rotation:n??X.create(),childrenIds:[],childOpCode:"none",shape:ft({}),hasShape:!1,light:e!=null?ut(e):void 0,hasLight:e!=null}}function j(t,e,r,n,o){return{name:t,id:Te(),position:r??w.create(),rotation:n??X.create(),shape:e!=null?ft(e):void 0,hasShape:e!=null,light:ut({}),hasLight:!1,childrenIds:[],childOpCode:o??"none"}}function ft(t){return{maxSize:0,type:"none",shapeParams:w.create(),diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10,cloud:!1,...t}}function Q(t,e){t.childrenIds.push(e.id),e.parentId=t.id}function Ar(t,e,r){e={...e,childrenIds:[...e.childrenIds,r.id]},r={...r,parentId:e.id};let n={...t.nodes,[e.id]:e,[r.id]:r};return{...t,nodes:n}}function Mr(t,e){if(e.parentId===void 0)return t;let r=t.nodes[e.parentId],n=r.childrenIds.findIndex(o=>o===e.id);if(n>=0){let o=[...r.childrenIds];o.splice(n,1),r={...r,childrenIds:o};let i={...t.nodes,[r.id]:r};return delete i[e.id],{...t,nodes:i}}return t}function wr(t,e,r){if(r.parentId==null)return t;let n=t.nodes[r.parentId],o=n.childrenIds.findIndex(a=>a===r.id);if(o>=0){let a=[...n.childrenIds];a.splice(o,1),n={...n,childrenIds:a}}e.childrenIds.includes(r.id)||(e={...e,childrenIds:[...e.childrenIds,r.id]}),r={...r,parentId:e.id};let i={...t.nodes,[n.id]:n,[e.id]:e,[r.id]:r};return{...t,nodes:i}}function Lr(t,e,r,n,o){if(o[n]={node:t,depth:r},t.childrenIds!=null)for(let i of t.childrenIds){let a=e[i];a&&(n=Lr(a,e,r+1,n+1,o))}return n}function gt(t,e){return r=>{let n=r.viewports[t]??st,o={...n,options:{...n.options,...e}},i=[...r.viewports];return i[t]=o,{viewports:i}}}function Pe(t){return e=>({reparentModal:{...e.reparentModal,...t}})}function Ge(t){return e=>({rawSceneModal:{...e.rawSceneModal,...t}})}function Nr(t){return e=>({sceneTree:Cr(e.sceneTree,t)})}function U(t){return()=>({sceneTree:t})}function Rr(t){return()=>({currentShader:t})}function Or(t){return e=>{let r;if(t){for(let n of Object.values(e.sceneTree.nodes))if(n.childrenIds.includes(t)){r=n.id;break}}return{selectedNodeId:t,selectedParentNodeId:r}}}var Tr,P,mt,Er;var Xr=[],L=_,Fr=L.__b,Pr=L.__r,Gr=L.diffed,zr=L.__c,Br=L.unmount,Dr=L.__;function Li(){for(var t;t=Xr.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ze),t.__H.__h.forEach(vt),t.__H.__h=[]}catch(e){t.__H.__h=[],L.__e(e,t.__v)}}L.__b=function(t){P=null,Fr&&Fr(t)},L.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Dr&&Dr(t,e)},L.__r=function(t){Pr&&Pr(t),Tr=0;var e=(P=t.__c).__H;e&&(mt===P?(e.__h=[],P.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(ze),e.__h.forEach(vt),e.__h=[],Tr=0)),mt=P},L.diffed=function(t){Gr&&Gr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Xr.push(e)!==1&&Er===L.requestAnimationFrame||((Er=L.requestAnimationFrame)||Ni)(Li)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),mt=P=null},L.__c=function(t,e){e.some(function(r){try{r.__h.forEach(ze),r.__h=r.__h.filter(function(n){return!n.__||vt(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],L.__e(n,r.__v)}}),zr&&zr(t,e)},L.unmount=function(t){Br&&Br(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ze(n)}catch(o){e=o}}),r.__H=void 0,e&&L.__e(e,r.__v))};var Vr=typeof requestAnimationFrame=="function";function Ni(t){var e,r=function(){clearTimeout(n),Vr&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);Vr&&(e=requestAnimationFrame(r))}function ze(t){var e=P,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),P=e}function vt(t){var e=P;t.__c=t.__(),P=e}function Oi(t,e){for(var r in e)t[r]=e[r];return t}function Ur(t,e){for(var r in t)if(r!=="__source"&&!(r in e))return!0;for(var n in e)if(n!=="__source"&&t[n]!==e[n])return!0;return!1}function kr(t,e){this.props=t,this.context=e}(kr.prototype=new b).isPureReactComponent=!0,kr.prototype.shouldComponentUpdate=function(t,e){return Ur(this.props,t)||Ur(this.state,e)};var Wr=_.__b;_.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Wr&&Wr(t)};var as=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Ti=_.__e;_.__e=function(t,e,r,n){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e)}Ti(t,e,r,n)};var Zr=_.unmount;function qr(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),t.__c.__H=null),(t=Oi({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(n){return qr(n,e,r)})),t}function Kr(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(n){return Kr(n,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function _t(){this.__u=0,this.o=null,this.__b=null}function $r(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Be(){this.i=null,this.l=null}_.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Zr&&Zr(t)},(_t.prototype=new b).__c=function(t,e){var r=e.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=$r(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=Kr(c,c.__c.__P,c.__c.__O)}var d;for(n.setState({__a:n.__b=null});d=n.o.pop();)d.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(a,a)},_t.prototype.componentWillUnmount=function(){this.o=[]},_t.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=qr(this.__b,r,n.__O=n.__P)}this.__b=null}var o=e.__a&&p(R,null,t.fallback);return o&&(o.__u&=-33),[p(R,null,e.__a?null:t.children),o]};var Qr=function(t,e,r){if(++r[1]===r[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(r=t.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.i=r=r[2]}};function Ei(t){return this.getChildContext=function(){return t.context},t.children}function Fi(t){var e=this,r=t.h;if(e.componentWillUnmount=function(){se(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var n=e.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(o,i){this.childNodes.push(o),e.h.insertBefore(o,i)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.h.removeChild(o)}}}se(p(Ei,{context:e.context},t.__v),e.v)}function De(t,e){var r=p(Fi,{__v:t,h:e});return r.containerInfo=e,r}(Be.prototype=new b).__a=function(t){var e=this,r=$r(e.__v),n=e.l.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),Qr(e,t,n)):o()};r?r(i):i()}},Be.prototype.render=function(t){this.i=null,this.l=new Map;var e=ae(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var r=e.length;r--;)this.l.set(e[r],this.i=[1,0,this.i]);return t.children},Be.prototype.componentDidUpdate=Be.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,r){Qr(t,r,e)})};var Pi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Gi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,zi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Bi=/[A-Z0-9]/g,Di=typeof document<"u",Vi=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Yr=_.event;function Xi(){}function Ui(){return this.cancelBubble}function ki(){return this.defaultPrevented}_.event=function(t){return Yr&&(t=Yr(t)),t.persist=Xi,t.isPropagationStopped=Ui,t.isDefaultPrevented=ki,t.nativeEvent=t};var en,Wi={enumerable:!1,configurable:!0,get:function(){return this.class}},Jr=_.vnode;_.vnode=function(t){typeof t.type=="string"&&function(e){var r=e.props,n=e.type,o={},i=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||Di&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var c=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":c==="translate"&&s==="no"?s=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?a="ondblclick":c!=="onchange"||n!=="input"&&n!=="textarea"||Vi(r.type)?c==="onfocus"?a="onfocusin":c==="onblur"?a="onfocusout":zi.test(a)&&(a=c):c=a="oninput":i&&Gi.test(a)?a=a.replace(Bi,"-$&").toLowerCase():s===null&&(s=void 0),c==="oninput"&&o[a=c]&&(a="oninputCapture"),o[a]=s}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=ae(r.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=ae(r.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",Wi)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),e.props=o}(t),t.$$typeof=Pi,Jr&&Jr(t)};var Hr=_.__r;_.__r=function(t){Hr&&Hr(t),en=t.__c};var jr=_.diffed;_.diffed=function(t){jr&&jr(t);var e=t.props,r=t.__e;r!=null&&t.type==="textarea"&&"value"in e&&e.value!==r.value&&(r.value=e.value==null?"":e.value),en=null};var he=class extends b{buttonRef=W();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:r,text:n,children:o}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect();a={left:s.left+"px",top:s.top+s.height+"px"}}return p(R,null,p("button",{...r,ref:this.buttonRef,onClick:this.toggleMenu},n),i&&De(p("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},p("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},o)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var tn=t=>p("label",{style:{display:"inline-block"}},t.label,p("input",{style:{display:"block"},type:"range",...t.inputProps})),fe=class extends b{render(e){let{pixelated:r,renderScale:n,enableShadows:o,enableShowMarching:i,enableDepth:a,enableNormals:s,enableToLightNormals:c,enableSoftShadows:d,epsilon:u,maxMarchingStep:l}=this.props.options;return p("div",{class:"viewport-options"},p(he,{text:"Menu"},p("div",{class:"control-group-vertical"},p("button",{onClick:this.togglePixelated},r?"Smooth":"Pixelated"),p("select",{onChange:this.changeRenderScale,value:n},p("option",{value:"2"},"2x"),p("option",{value:"1.5"},"1.5x"),p("option",{value:"1"},"1x"),p("option",{value:"0.5"},"0.5x"),p("option",{value:"0.25"},"0.25x"),p("option",{value:"0.125"},"0.125x")),p("button",{onClick:this.toggleShadows},o?"Hide Shadows":"Show Shadows"),p("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),p("button",{onClick:this.toggleDepth},a?"Hide Depth":"Show Depth"),p("button",{onClick:this.toggleNormals},s?"Hide Normals":"Show Normals"),p("button",{onClick:this.toggleToLightNormals},c?"Hide To Light":"Show To Light"),p("button",{onClick:this.toggleSoftShadows},d?"Soft Shadows":"Hard Shadows"),p("button",{onClick:this.showRawScene},"JSON Scene")),p(tn,{label:`Epsilon ${u}`,inputProps:{value:u,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),p(tn,{label:`Marching Steps ${l}`,inputProps:{value:l,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}})))}showRawScene=()=>{C.execute(Ge({show:!0}))};changeEpsilon=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:r})};changeMarchingSteps=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(r)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};toggleDepth=e=>{this.updateOptions({enableDepth:!this.props.options.enableDepth})};toggleNormals=e=>{this.updateOptions({enableNormals:!this.props.options.enableNormals})};toggleToLightNormals=e=>{this.updateOptions({enableToLightNormals:!this.props.options.enableToLightNormals})};toggleSoftShadows=e=>{this.updateOptions({enableSoftShadows:!this.props.options.enableSoftShadows})};updateOptions=e=>{console.log("Options",e),C.execute(gt(this.props.viewportIndex,e))};changeRenderScale=e=>{let r=e.target.value,n=Number.parseFloat(r);isFinite(n)?C.execute(gt(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",r)}};var Ve=class extends b{canvasRef=W();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.createNewRenderer(e),this.renderer.updateCamera(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),p("div",{class:"viewport outer-panel"},p("canvas",{className:e,ref:this.canvasRef}),p(fe,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{if(this.renderFrameCallback=-1,this.renderer.prevShaderText!==this.props.currentShader){console.log("New shader!",this.renderer.prevShaderText,this.props.currentShader);let r=this.renderer.cameraRotationX,n=this.renderer.cameraRotationY,o=this.renderer.cameraDistance;this.renderer.destroy(),this.createNewRenderer(this.canvasRef.current),this.renderer.cameraRotationX=r,this.renderer.cameraRotationY=n,this.renderer.cameraDistance=o,this.renderer.updateCamera()}let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.enableDepth=e.enableDepth,this.renderer.enableNormals=e.enableNormals,this.renderer.enableToLightNormals=e.enableToLightNormals,this.renderer.enableSoftShadows=e.enableSoftShadows,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};createNewRenderer=e=>{this.renderer=pe.create(e,this.props.currentShader),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.updateCanvasSize(),this.renderer.setupCanvas()};onPointerDown=e=>{e.target===this.canvasRef.current&&(this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let r=e.clientX-this.mousePosX,n=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-n,-r),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let r=e.deltaY>0?1:-1,n=this.zoom+r;this.zoom=Math.max(Math.min(100,n),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function Zi(t,e){return t.length>=3||e>=3}function Qi(t,e){return t.length===4||e===4}var T=class extends b{render(){let{vector:e,disabled:r,forceLength:n}=this.props,o=Zi(e,n),i=Qi(e,n);return p("div",{class:"vector control-group"},p("input",{class:"input",disabled:r,type:"number",value:e[0],onChange:this.onChangeX,placeholder:"x",step:.1}),p("input",{class:"input",disabled:r,type:"number",value:e[1],onChange:this.onChangeY,placeholder:"y",step:.1}),o&&p("input",{class:"input",disabled:r,type:"number",value:e[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),i&&p("input",{class:"input",disabled:r,type:"number",value:e[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,0)};onChangeY=e=>{this.updateVector(e,1)};onChangeZ=e=>{this.updateVector(e,2)};onChangeW=e=>{this.updateVector(e,3)};updateVector=(e,r)=>{let n=this.props.vector,o=e.target.value,i=parseFloat(o);if(!isFinite(i)){console.error("Unable to process vector index",r,o);return}console.log("Update vector index",r,i);let a=[...n];a[r]=i,this.props.onChange(n,a)}};var ge=class extends b{render(){let e=this.props.shape,r=e.lightingModel==="phong";return p("div",null,p("div",null,p("strong",null,"Type")," ",p("select",{value:e.type??"none",onChange:this.onChangeType},p("option",{value:"none"},"None"),p("option",{value:"box"},"Box"),p("option",{value:"sphere"},"Sphere"),p("option",{value:"hexPrism"},"Hex Prism"),p("option",{value:"torus"},"Torus"),p("option",{value:"octahedron"},"Octahedron"),p("option",{value:"cylinder"},"Cylinder"),p("option",{value:"icosahedron"},"Icosahedron"))),p("div",null,p("strong",null,"Shape Params")," ",p(T,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),p("div",null,p("strong",null,"Lighting Model")," ",p("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},p("option",{value:"unlit"},"Unlit"),p("option",{value:"lambert"},"Lambert"),p("option",{value:"phong"},"Phong"))),p("div",null,p("strong",null,"Cloud")," ",p("input",{type:"checkbox",checked:e.cloud,onChange:this.onChangeCloud})),p("div",null,p("strong",null,"Diffuse Colour")," ",p(T,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),p("div",null,p("strong",null,"Specular Colour")," ",p(T,{disabled:!r,vector:e.specularColour,onChange:this.onChangeSpecularColour})),p("div",null,p("strong",null,"Shininess")," ",p("input",{class:"input",disabled:!r,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeCloud=e=>{let r=e.target.checked;this.updateField(r,"cloud")};onChangeType=e=>{let r=e.target.value;this.updateField(r,"type")};onChangeLightingModel=e=>{let r=e.target.value;this.updateField(r,"lightingModel")};onChangeShininess=e=>{let r=parseFloat(e.target.value);isFinite(r)&&this.updateField(r,"shininess")};onChangeShapeParams=(e,r)=>{this.updateField(r,"shapeParams")};onChangeDiffuseColour=(e,r)=>{this.updateField(r,"diffuseColour")};onChangeSpecularColour=(e,r)=>{this.updateField(r,"specularColour")};updateField=(e,r)=>{console.log("Update shape",r,e);let n={...this.props.shape,[r]:e};this.props.onChange(n)}};var me=class extends b{render(){let e=this.props.light;return e===void 0?p("div",null,"Empty Light"):p("div",null,p("div",null,p("strong",null,"Colour")," ",p(T,{forceLength:3,vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,r)=>{this.updateField(r,"colour")};updateField=(e,r)=>{console.log("Update light",r,e);let n={...this.props.light,[r]:e};this.props.onChange(n)}};var ve=class extends b{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:r}=this.props;if(e==null)return p("div",{class:"scene-node-view"},"No node selected");let n=e.parentId!=null?r.nodes[e.parentId]:void 0,o=e.childOpCode??"none";return p("div",{class:"scene-node-view"},p("div",null,p("strong",null,"Name")," ",p("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),p("div",null,p("strong",null,"Position")," ",p(T,{vector:e.position,onChange:this.onChangePosition})),p("div",null,p("strong",null,"Rotation")," ",p(T,{vector:e.rotation,onChange:this.onChangeRotation})),p("div",null,p("strong",null,"Op Code")," ",p("select",{value:o,onChange:this.onChangeOpCode},p("option",{value:"none"},"None"),p("option",{value:"union"},"Union"),p("option",{value:"intersection"},"Intersection"),p("option",{value:"subtraction"},"Subtraction"))),p("div",null,p("strong",null,"Shape")," ",p("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&p(ge,{shape:e.shape,onChange:this.onChangeShape})),p("div",null,p("strong",null,"Light")," ",p("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&p(me,{light:e.light,onChange:this.onChangeLight})),p("div",null,p("strong",null,"Children")),p("div",{class:"control-group"},p("button",{onClick:this.addChild},"Add"),n!=null&&p(R,null,p("button",{onClick:this.deleteSelf},"Delete"),p("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Ar(this.props.sceneTree,this.props.node,Sr("New Child",{}));C.execute(U(e))};deleteSelf=()=>{let e=Mr(this.props.sceneTree,this.props.node);C.execute(U(e))};reparent=()=>{let{node:e,sceneTree:r}=this.props;if((e.parentId!=null?r.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}C.execute(Pe({show:!0,childNodeId:this.props.node.id}))};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let r=e.target.value;this.updateField(r,"name")};onChangePosition=(e,r)=>{this.updateField(r,"position")};onChangeRotation=(e,r)=>{this.updateField(r,"rotation")};onChangeOpCode=e=>{let r=e.target.value;this.updateField(r,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,r)=>{console.log("Update shape node",r,e);let n={...this.props.node,[r]:e};this.props.onChange(n,this.props.node)}};function bt(t,e,r){return(r==null||r===!0)&&(t+=" "+e),t}var _e=class extends b{render(){let{depth:e,node:r,isSelected:n,disable:o}=this.props,i=bt(bt("scene-node-tree-item","is-selected",n),"is-disabled",o===!0);return p("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",r.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var q=class extends b{render(){return p("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:r,onItemClicked:n}=this.props,o=e.nodes[e.rootNodeId],i=[];if(o==null)return i;let a=yr(e);for(let s of a){let c=s.node.id===r;i.push(p(_e,{isSelected:c,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return i}};var be=class extends b{render(){let{sceneTree:e,selectedNodeId:r}=this.props,n=e.nodes[r];return p("div",{class:"scene-tree"},p("div",{class:"scene-tree__contents outer-panel"},p("div",{class:"inner-panel"},p(q,{sceneTree:e,selectedNodeId:r,onItemClicked:this.onNodeClicked})),p("div",{class:"inner-panel scene-tree__nodes"},p(ve,{sceneTree:e,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{C.execute(Or(e.id))};onChangeSelectedNode=(e,r)=>{C.execute(Nr(e))}};var K=class extends b{render(){let{show:e,onRequestClose:r}=this.props;if(e===!1)return null;let n=this.props.portalContainer??"modals",o=document.getElementById(n),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return De(p("div",{class:"modal-backdrop",onPointerDown:r},p("div",{class:a,onPointerDown:this.preventClose},this.props.children)),o)}preventClose=e=>{e.stopImmediatePropagation()}};var xe=class extends b{render(){let{show:e,sceneTree:r,disabledNodeIds:n,onRequestClose:o}=this.props;return p(K,{show:e,onRequestClose:o},p(q,{sceneTree:r,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var Ie=class extends b{render(){let{show:e}=this.props.state,r=this.getDisabledNodeIds();return p(xe,{show:e,disabledNodeIds:r,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{C.execute(Pe({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:r}=this.props.state;if(!e)return[];let{sceneTree:n}=this.props,o=n.nodes[r];return[o.id,o.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let r=this.props.sceneTree.nodes[this.props.state.childNodeId],n=wr(this.props.sceneTree,e,r);C.execute(U(n))}};var Ce=class extends b{prevSceneTree=void 0;preRef=W();render(){let{show:e}=this.props.state,{sceneTree:r}=this.props,n="";return e&&this.prevSceneTree!==r&&(n=JSON.stringify(r,null,2)),p(K,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},p("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},p("pre",null,n)),p("span",{class:"control-group"},p("button",{onClick:this.loadFromHtml},"Load From Json"),p("label",{class:"button"},"Load From File",p("input",{type:"file",onChange:this.loadFromFile})),p("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{C.execute(Ge({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="scene.json",r.click(),URL.revokeObjectURL(r.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let r=e.target;typeof r.result=="string"?this.loadFromText(r.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let r=JSON.parse(e);r!=null&&C.execute(U(r))}};var Xe=class extends b{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:r,sceneTree:n,selectedNodeId:o,reparentModal:i,rawSceneModal:a,currentShader:s}=this.props.state;return console.log("App render",this.props.state),p(R,null,p("div",{class:"main-view"},p("div",{class:"viewports"},p(Ve,{viewportIndex:0,options:r[0].options,sceneConverter:e,currentShader:s})),p(be,{sceneTree:n,selectedNodeId:o})),p(Ie,{state:i,sceneTree:n}),p(Ce,{state:a,sceneTree:n}))}};var Ue=Ct(nn());function Yi(t){let e=t.toString();return e.indexOf(".")<0&&(e+=".0"),e}var ye=class{result="";firstItem=!0;startFunction(e){this.writeValue(e+"("),this.firstItem=!0}endFunction(){this.result+=")"}writeRaw(e){this.result+=e}writeValue(e){this.firstItem||(this.result+=", "),typeof e=="number"?this.result+=Yi(e):this.result+=e,this.firstItem=!1}writeParameter(e){this.writeValue("uParams["+e+"]")}getFinal(){return`return ${this.result};`}};var Ji=8,Hi=8,ji={unlit:ct,lambert:lt,phong:Ir};function qi(t){return ji[t]||ct}var Ki={box:{funcName:"sdfBox",numParams:3},sphere:{funcName:"sdfSphere",numParams:1},hexPrism:{funcName:"sdfHexPrism",numParams:2},torus:{funcName:"sdfTorus",numParams:2},octahedron:{funcName:"sdfOctahedron",numParams:1},icosahedron:{funcName:"sdfIcosahedron",numParams:1}},ke=class t{lights=[];lightDataArray=[];materials=[];materialDataArray=[];parameters=[];shader="";previousTree;getTree(){return this.previousTree}getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getParameters(){return this.parameters}getShader(){return this.shader}setLight(e,r){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...t.createNewLight(),...r}:this.lights[e]={...this.lights[e],...r},this.updateLight(e)}setMaterial(e,r){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...t.createNewMaterial(),...r}:this.materials[e]={...this.materials[e],...r},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||(this.previousTree=e,!e.nodes[e.rootNodeId]))return!1;let{lights:n,materials:o,parameters:i,assembler:a}=t.createShapesFromNode(e);if(!(0,Ue.default)(this.lights,n)){this.lights=n,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,Ue.default)(this.materials,o)){this.materials=o,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}return(0,Ue.default)(this.parameters,i)||(this.parameters=i,console.log("Parameters",this.parameters)),this.shader=a.getFinal(),!0}static createShapesFromNode(e){let r=e.nodes[e.rootNodeId];if(!r)return;let n=[],o=[],i=[],a=new ye;return this.processNode(n,o,i,r,e.nodes,a),{lights:n,materials:o,parameters:i,assembler:a}}static nodeHasValidShape(e){return!(!e.hasShape||e.shape==null||e.shape.type==="none")}static processNode(e,r,n,o,i,a){let s=!1,c=0,d=0;if(o.childOpCode!=="none"){for(let l of o.childrenIds){let h=i[l];(this.nodeHasValidShape(h)||h.childOpCode!=="none")&&d++}d>1&&(s=!0,this.processOperation(o.childOpCode,a),c++)}if(this.nodeHasValidShape(o)&&(s=!0,this.processShape(o,o.shape,r,n,a)),o.hasLight){let l=t.convertToLight(o);l!=null&&e.push(l)}let u=0;for(let l of o.childrenIds)this.processNode(e,r,n,i[l],i,a)&&(u++,d>2&&u+1<d&&(c++,this.processOperation(o.childOpCode,a)));for(let l=0;l<c;l++)a.endFunction();return s}static processOperation(e,r){e==="union"?r.startFunction("opUnion"):e==="intersection"?r.startFunction("opIntersection"):e==="subtraction"?r.startFunction("opSubtraction"):console.error("Unknown operation",e)}static pushParameter(e,r,n){n.writeParameter(e.length),e.push(r)}static writeSamplePoint(e,r,n){let o=e.position;n.startFunction("vec3"),this.pushParameter(r,-o[0],n),this.pushParameter(r,-o[1],n),this.pushParameter(r,-o[2],n),n.endFunction(),n.writeRaw(" + point")}static processShape(e,r,n,o,i){let a=Ki[r.type];if(a==null){console.error("Unsupported shape type");return}i.startFunction("vec2");let s={diffuseColour:r.diffuseColour,lightingModel:qi(r.lightingModel),specularColour:r.specularColour,shininess:r.shininess},c=n.length;n.push(s),i.startFunction(a.funcName),this.writeSamplePoint(e,o,i);let d=!1;a.numParams>=2&&a.numParams<=4&&(d=!0,i.startFunction("vec"+a.numParams));for(let u=0;u<a.numParams;u++)this.pushParameter(o,r.shapeParams[u],i);d&&i.endFunction(),i.endFunction(),i.writeValue(c),i.endFunction()}updateLight(e){let r=e*Ji,n=this.lights[e];this.lightDataArray[r]=n.position[0],this.lightDataArray[r+1]=n.position[1],this.lightDataArray[r+2]=n.position[2],this.lightDataArray[r+3]=n.radius,this.lightDataArray[r+4]=n.colour[0],this.lightDataArray[r+5]=n.colour[1],this.lightDataArray[r+6]=n.colour[2],this.lightDataArray[r+7]=n.colour[3]}updateMaterial(e){let r=e*Hi,n=this.materials[e];this.materialDataArray[r]=n.diffuseColour[0],this.materialDataArray[r+1]=n.diffuseColour[1],this.materialDataArray[r+2]=n.diffuseColour[2],this.materialDataArray[r+3]=n.lightingModel,this.materialDataArray[r+4]=n.specularColour[0],this.materialDataArray[r+5]=n.specularColour[1],this.materialDataArray[r+6]=n.specularColour[2],this.materialDataArray[r+7]=n.shininess}static convertToLight(e){let r=e.light;return r==null?null:{colour:r.colour,position:e.position,radius:r.radius}}static createNewMaterial(){return{diffuseColour:dt(),lightingModel:lt,specularColour:dt(),shininess:10}}static createNewLight(){return{position:w.create(),radius:10,colour:Fe()}}};var xt=new ke;C.subscribe(t=>t.sceneTree,$i);function $i(t){xt.updateShapesFromTree(t.sceneTree)&&C.execute(Rr(xt.getShader()))}var ea=document.getElementById("app");function on(){se(p(Xe,{state:C.state(),sceneConverter:xt}),ea)}function ta(...t){let e={};for(let r of t)e[r.id]=r;return e}function ra(){let t=j("Root",null,void 0,void 0,"union"),e=j("Main",null,void 0,void 0,"subtraction");Q(t,e);let r=j("Hex Prism",{type:"hexPrism",shapeParams:F(.75,2,0),maxSize:1.5,diffuseColour:F(.5,.5,.5)}),n=j("Box & Sphere",void 0,void 0,void 0,"union");Q(e,r),Q(e,n);let o=j("Box",{type:"box",shapeParams:F(6,1,6),diffuseColour:F(1,1,1),lightingModel:"lambert"},F(0,-1.5,0)),i=j("Sphere",{type:"sphere",shapeParams:F(1.25,2,1),maxSize:2,diffuseColour:F(.1,.2,.9),lightingModel:"phong"});Q(n,o),Q(n,i);let a=ht("Red Light",{colour:pt(1,.8,.6,1)},F(4,2,3)),s=ht("Green Light",{colour:pt(.2,1,.6,1)},F(0,0,0));Q(t,a),Q(t,s);let d={nodes:ta(t,e,r,n,o,i,a,s),rootNodeId:t.id};C.execute(U(d))}ra();on();C.subscribeAny(on);})();
//# sourceMappingURL=webgl-index.js.map
