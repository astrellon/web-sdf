(()=>{var an=Object.create;var Ze=Object.defineProperty;var sn=Object.getOwnPropertyDescriptor;var ln=Object.getOwnPropertyNames;var cn=Object.getPrototypeOf,dn=Object.prototype.hasOwnProperty;var Ct=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ae=(t,e)=>{for(var r in e)Ze(t,r,{get:e[r],enumerable:!0})},pn=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ln(e))!dn.call(t,o)&&o!==r&&Ze(t,o,{get:()=>e[o],enumerable:!(n=sn(e,o))||n.enumerable});return t};var yt=(t,e,r)=>(r=t!=null?an(cn(t)):{},pn(e||!t||!t.__esModule?Ze(r,"default",{value:t,enumerable:!0}):r,t));var xr=Ct(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.EmptyModifier=void 0;var Ai=()=>null;he.EmptyModifier=Ai;var at=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,r=!0){let n=e(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(e,r))}subscribe(e,r,n,o){let i=e(this.currentState),a={selector:new st(e,i,n,o),subscription:r};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(e,r){return this.subscribe(n=>n,e,void 0,r)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,r){for(let n of this.subscriptions){let o=n.selector.getValue(this.currentState);n.selector.checkIfChanged(o)&&n.subscription(this.currentState,o,e,r)}}};he.default=at;var st=class{constructor(e,r=void 0,n,o){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=r,this.comparer=n,this.name=o}checkIfChanged(e){let r=!1;return this.comparer!==void 0?r=!this.comparer(this.prevValue,e):r=e!==this.prevValue,this.prevValue=e,r}}});var nn=Ct((hc,rn)=>{"use strict";rn.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}});var Ne,b,Lt,un,J,St,Nt,Rt,Ot,Je,Qe,Ye,hn,oe={},Tt=[],fn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ie=Array.isArray;function B(t,e){for(var r in e)t[r]=e[r];return t}function He(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,r){var n,o,i,a={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Ne.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return we(t,a,n,o,null)}function we(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Lt,__i:-1,__u:0};return o==null&&b.vnode!=null&&b.vnode(i),i}function Z(){return{current:null}}function R(t){return t.children}function _(t,e){this.props=t,this.context=e}function ee(t,e){if(e==null)return t.__?ee(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ee(t):null}function Et(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Et(t)}}function At(t){(!t.__d&&(t.__d=!0)&&J.push(t)&&!Le.__r++||St!=b.debounceRendering)&&((St=b.debounceRendering)||Nt)(Le)}function Le(){for(var t,e,r,n,o,i,a,s=1;J.length;)J.length>s&&J.sort(Rt),t=J.shift(),s=J.length,t.__d&&(r=void 0,o=(n=(e=t).__v).__e,i=[],a=[],e.__P&&((r=B({},n)).__v=n.__v+1,b.vnode&&b.vnode(r),je(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[o]:null,i,o??ee(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Gt(i,r,a),r.__e!=o&&Et(r)));Le.__r=0}function Ft(t,e,r,n,o,i,a,s,l,d,u){var c,h,f,g,x,v,m=n&&n.__k||Tt,I=e.length;for(l=gn(r,e,m,l,I),c=0;c<I;c++)(f=r.__k[c])!=null&&(h=f.__i==-1?oe:m[f.__i]||oe,f.__i=c,v=je(t,f,h,o,i,a,s,l,d,u),g=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&qe(h.ref,null,f),u.push(f.ref,f.__c||g,f)),x==null&&g!=null&&(x=g),4&f.__u||h.__k===f.__k?l=Pt(f,l,t):typeof f.type=="function"&&v!==void 0?l=v:g&&(l=g.nextSibling),f.__u&=-7);return r.__e=x,l}function gn(t,e,r,n,o){var i,a,s,l,d,u=r.length,c=u,h=0;for(t.__k=new Array(o),i=0;i<o;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=i+h,(a=t.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?we(null,a,null,null,null):ie(a)?we(R,{children:a},null,null,null):a.constructor==null&&a.__b>0?we(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=t,a.__b=t.__b+1,s=null,(d=a.__i=mn(a,r,l,c))!=-1&&(c--,(s=r[d])&&(s.__u|=2)),s==null||s.__v==null?(d==-1&&(o>u?h--:o<u&&h++),typeof a.type!="function"&&(a.__u|=4)):d!=l&&(d==l-1?h--:d==l+1?h++:(d>l?h--:h++,a.__u|=4))):t.__k[i]=null;if(c)for(i=0;i<u;i++)(s=r[i])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=ee(s)),Vt(s,s));return n}function Pt(t,e,r){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=Pt(n[o],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=ee(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ae(t,e){return e=e||[],t==null||typeof t=="boolean"||(ie(t)?t.some(function(r){ae(r,e)}):e.push(t)),e}function mn(t,e,r,n){var o,i,a=t.key,s=t.type,l=e[r];if(l===null&&t.key==null||l&&a==l.key&&s==l.type&&(2&l.__u)==0)return r;if(n>(l!=null&&(2&l.__u)==0?1:0))for(o=r-1,i=r+1;o>=0||i<e.length;){if(o>=0){if((l=e[o])&&(2&l.__u)==0&&a==l.key&&s==l.type)return o;o--}if(i<e.length){if((l=e[i])&&(2&l.__u)==0&&a==l.key&&s==l.type)return i;i++}}return-1}function Mt(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||fn.test(e)?r:r+"px"}function Me(t,e,r,n,o){var i,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Mt(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||Mt(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Ot,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n?r.u=n.u:(r.u=Je,t.addEventListener(e,i?Ye:Qe,i)):t.removeEventListener(e,i?Ye:Qe,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function wt(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=Je++;else if(e.t<r.u)return;return r(b.event?b.event(e):e)}}}function je(t,e,r,n,o,i,a,s,l,d){var u,c,h,f,g,x,v,m,I,M,A,G,z,$,W,V,D,N=e.type;if(e.constructor!=null)return null;128&r.__u&&(l=!!(32&r.__u),i=[s=e.__e=r.__e]),(u=b.__b)&&u(e);e:if(typeof N=="function")try{if(m=e.props,I="prototype"in N&&N.prototype.render,M=(u=N.contextType)&&n[u.__c],A=u?M?M.props.value:u.__:n,r.__c?v=(c=e.__c=r.__c).__=c.__E:(I?e.__c=c=new N(m,A):(e.__c=c=new _(m,A),c.constructor=N,c.render=bn),M&&M.sub(c),c.props=m,c.state||(c.state={}),c.context=A,c.__n=n,h=c.__d=!0,c.__h=[],c._sb=[]),I&&c.__s==null&&(c.__s=c.state),I&&N.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=B({},c.__s)),B(c.__s,N.getDerivedStateFromProps(m,c.__s))),f=c.props,g=c.state,c.__v=e,h)I&&N.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),I&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(I&&N.getDerivedStateFromProps==null&&m!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(m,A),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(m,c.__s,A)===!1||e.__v==r.__v){for(e.__v!=r.__v&&(c.props=m,c.state=c.__s,c.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(E){E&&(E.__=e)}),G=0;G<c._sb.length;G++)c.__h.push(c._sb[G]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(m,c.__s,A),I&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,g,x)})}if(c.context=A,c.props=m,c.__P=t,c.__e=!1,z=b.__r,$=0,I){for(c.state=c.__s,c.__d=!1,z&&z(e),u=c.render(c.props,c.state,c.context),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[]}else do c.__d=!1,z&&z(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++$<25);c.state=c.__s,c.getChildContext!=null&&(n=B(B({},n),c.getChildContext())),I&&!h&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(f,g)),V=u,u!=null&&u.type===R&&u.key==null&&(V=zt(u.props.children)),s=Ft(t,ie(V)?V:[V],e,r,n,o,i,a,s,l,d),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),v&&(c.__E=c.__=null)}catch(E){if(e.__v=null,l||i!=null)if(E.then){for(e.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else for(D=i.length;D--;)He(i[D]);else e.__e=r.__e,e.__k=r.__k;b.__e(E,e,r)}else i==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):s=e.__e=vn(r.__e,e,r,n,o,i,a,l,d);return(u=b.diffed)&&u(e),128&e.__u?void 0:s}function Gt(t,e,r){for(var n=0;n<r.length;n++)qe(r[n],r[++n],r[++n]);b.__c&&b.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){b.__e(i,o.__v)}})}function zt(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:ie(t)?t.map(zt):B({},t)}function vn(t,e,r,n,o,i,a,s,l){var d,u,c,h,f,g,x,v=r.props,m=e.props,I=e.type;if(I=="svg"?o="http://www.w3.org/2000/svg":I=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!I&&(I?f.localName==I:f.nodeType==3)){t=f,i[d]=null;break}}if(t==null){if(I==null)return document.createTextNode(m);t=document.createElementNS(o,I,m.is&&m),s&&(b.__m&&b.__m(e,i),s=!1),i=null}if(I==null)v===m||s&&t.data==m||(t.data=m);else{if(i=i&&Ne.call(t.childNodes),v=r.props||oe,!s&&i!=null)for(v={},d=0;d<t.attributes.length;d++)v[(f=t.attributes[d]).name]=f.value;for(d in v)if(f=v[d],d!="children"){if(d=="dangerouslySetInnerHTML")c=f;else if(!(d in m)){if(d=="value"&&"defaultValue"in m||d=="checked"&&"defaultChecked"in m)continue;Me(t,d,null,f,o)}}for(d in m)f=m[d],d=="children"?h=f:d=="dangerouslySetInnerHTML"?u=f:d=="value"?g=f:d=="checked"?x=f:s&&typeof f!="function"||v[d]===f||Me(t,d,f,v[d],o);if(u)s||c&&(u.__html==c.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(c&&(t.innerHTML=""),Ft(e.type=="template"?t.content:t,ie(h)?h:[h],e,r,n,I=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:r.__k&&ee(r,0),s,l),i!=null)for(d=i.length;d--;)He(i[d]);s||(d="value",I=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[d]||I=="progress"&&!g||I=="option"&&g!=v[d])&&Me(t,d,g,v[d],o),d="checked",x!=null&&x!=t[d]&&Me(t,d,x,v[d],o))}return t}function qe(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){b.__e(o,r)}}function Vt(t,e,r){var n,o;if(b.unmount&&b.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||qe(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){b.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Vt(n[o],e,r||typeof t.type!="function");r||He(t.__e),t.__c=t.__=t.__e=void 0}function bn(t,e,r){return this.constructor(t,r)}function se(t,e,r){var n,o,i,a;e==document&&(e=document.documentElement),b.__&&b.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],a=[],je(e,t=(!n&&r||e).__k=p(R,null,[t]),o||oe,oe,e.namespaceURI,!n&&r?[r]:o?null:e.firstChild?Ne.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n,a),Gt(i,t,a)}Ne=Tt.slice,b={__e:function(t,e,r,n){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(s){t=s}throw t}},Lt=0,un=function(t){return t!=null&&t.constructor==null},_.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B({},this.state),typeof t=="function"&&(t=t(B({},r),this.props)),t&&B(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),At(this))},_.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),At(this))},_.prototype.render=R,J=[],Nt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Rt=function(t,e){return t.__v.__b-e.__v.__b},Le.__r=0,Ot=/(PointerCapture)$|Capture$/i,Je=0,Qe=wt(!1),Ye=wt(!0),hn=0;var Dt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Bt=`float sdfSphere(vec3 point, float radius)
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
    return min(max(d.x, max(d.y, d.z)), 0.0) // inside distance
        + length(max(d, 0.0));               // outside distance
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

float sdfCappedCylinder(vec3 point, vec2 params)
{
    float height = params.x;
    float radius = params.y;
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

vec2 opXor(vec2 d1, vec2 d2)
{
    vec2 unionResult = opUnion(d1, d2);
    vec2 intersectionResult = opIntersection(d1, d2);
    intersectionResult.x = -intersectionResult.x;

    return opIntersection(unionResult, intersectionResult);
}

vec2 opSmoothUnion(float k, vec2 d1, vec2 d2)
{
    float h = saturate(0.5 + 0.5 * (d2.x - d1.x) / k);
    float result = mix(d2.x, d1.x, h) - k * h * (1.0 - h);
    return vec2(result, h > 0.5 ? d1.y : d2.y);
}

vec2 opSmoothSubtraction(float k, vec2 d1, vec2 d2)
{
    float h = saturate(0.5 - 0.5 * (d2.x + d1.x) / k);
    float result = mix(d2.x, -d1.x, h) + k * h * (1.0 - h);
    return vec2(result, h > 0.5 ? d1.y : d2.y);
}

vec2 opSmoothIntersection(float k, vec2 d1, vec2 d2)
{
    float h = saturate(0.5 - 0.5 * (d2.x - d1.x) / k);
    float result = mix(d2.x, d1.x, h) + k * h * (1.0 - h);
    return vec2(result, h > 0.5 ? d1.y : d2.y);
}

vec3 repeatDomain(vec3 point, float size)
{
    return point - size * round(point / size);
}`;var Xt=`vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
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

vec2 softShadow(vec3 rayOrigin, vec3 lightPos, float shadowSharpness)
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

        if (depth > lightDist)
        {
            return vec2(result, float(i));
        }
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
                shadow = softShadow(shortOffset, lightPos, uShadowSharpness);


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
                shadow = softShadow(shortOffset, lightPos, uShadowSharpness);

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
`;var Ut=`#version 300 es

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
uniform float uShadowSharpness;

#define checkFlag(flag) ((uFlags & flag) > 0)
#define saturate(x) clamp(x, 0.0, 1.0)

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
`;var yn=/#include\s+\<([^\>]+)\>/gmi,le=class t{program;constructor(e){this.program=e}static assembleShader(e,r){let n=r.matchAll(yn);for(let o of n){let i=e[o[1]];i===void 0&&(console.error(`Unknown shader include ${o[1]}`),i=""),r=r.replace(o[0],i)}return r}static create(e,r,n,o){let i=null,a=null,s=null;function l(){i!=null&&(e.detachShader(i,a),e.detachShader(i,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}if(a=e.createShader(e.VERTEX_SHADER),e.shaderSource(a,this.assembleShader(r,n)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",u),l(),new Error(`Vertex shader compile error ${u}`)}s=e.createShader(e.FRAGMENT_SHADER);let d=this.assembleShader(r,o);{let u=d.split(`
`),c=new Array(u.length);for(let h=0;h<u.length;h++)c[h]=h+1+": "+u[h];console.info("Assembled shader",c.join(`
`))}if(e.shaderSource(s,d),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",u),l(),new Error(`Fragment shader compile error ${u}`)}if(i=e.createProgram(),e.attachShader(i,a),e.attachShader(i,s),e.linkProgram(i),l(),!e.getProgramParameter(i,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(i);let u=e.getProgramInfoLog(i);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new t(i)}};var Q={};Ae(Q,{ANGLE_ORDER:()=>Ke,ARRAY_TYPE:()=>S,EPSILON:()=>y,RANDOM:()=>X,equals:()=>Nn,round:()=>te,setMatrixArrayType:()=>Sn,toDegree:()=>Ln,toRadian:()=>wn});var y=1e-6,S=typeof Float32Array<"u"?Float32Array:Array,X=Math.random,Ke="zyx";function te(t){return t>=0?Math.round(t):t%.5===0?Math.floor(t):Math.round(t)}function Sn(t){S=t}var An=Math.PI/180,Mn=180/Math.PI;function wn(t){return t*An}function Ln(t){return t*Mn}function Nn(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))}var H={};Ae(H,{add:()=>Kn,adjoint:()=>Vn,clone:()=>On,copy:()=>Tn,create:()=>$e,determinant:()=>Dn,equals:()=>ro,exactEquals:()=>to,frob:()=>qn,fromMat2d:()=>Qn,fromMat4:()=>Rn,fromQuat:()=>Yn,fromRotation:()=>Wn,fromScaling:()=>Zn,fromTranslation:()=>kn,fromValues:()=>En,identity:()=>Pn,invert:()=>zn,mul:()=>no,multiply:()=>kt,multiplyScalar:()=>$n,multiplyScalarAndAdd:()=>eo,normalFromMat4:()=>Jn,projection:()=>Hn,rotate:()=>Xn,scale:()=>Un,set:()=>Fn,str:()=>jn,sub:()=>oo,subtract:()=>Wt,translate:()=>Bn,transpose:()=>Gn});function $e(){var t=new S(9);return S!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function Rn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function On(t){var e=new S(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Tn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function En(t,e,r,n,o,i,a,s,l){var d=new S(9);return d[0]=t,d[1]=e,d[2]=r,d[3]=n,d[4]=o,d[5]=i,d[6]=a,d[7]=s,d[8]=l,d}function Fn(t,e,r,n,o,i,a,s,l,d){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=i,t[5]=a,t[6]=s,t[7]=l,t[8]=d,t}function Pn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Gn(t,e){if(t===e){var r=e[1],n=e[2],o=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=o}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function zn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],u=e[8],c=u*a-s*d,h=-u*i+s*l,f=d*i-a*l,g=r*c+n*h+o*f;return g?(g=1/g,t[0]=c*g,t[1]=(-u*n+o*d)*g,t[2]=(s*n-o*a)*g,t[3]=h*g,t[4]=(u*r-o*l)*g,t[5]=(-s*r+o*i)*g,t[6]=f*g,t[7]=(-d*r+n*l)*g,t[8]=(a*r-n*i)*g,t):null}function Vn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],u=e[8];return t[0]=a*u-s*d,t[1]=o*d-n*u,t[2]=n*s-o*a,t[3]=s*l-i*u,t[4]=r*u-o*l,t[5]=o*i-r*s,t[6]=i*d-a*l,t[7]=n*l-r*d,t[8]=r*a-n*i,t}function Dn(t){var e=t[0],r=t[1],n=t[2],o=t[3],i=t[4],a=t[5],s=t[6],l=t[7],d=t[8];return e*(d*i-a*l)+r*(-d*o+a*s)+n*(l*o-i*s)}function kt(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],d=e[6],u=e[7],c=e[8],h=r[0],f=r[1],g=r[2],x=r[3],v=r[4],m=r[5],I=r[6],M=r[7],A=r[8];return t[0]=h*n+f*a+g*d,t[1]=h*o+f*s+g*u,t[2]=h*i+f*l+g*c,t[3]=x*n+v*a+m*d,t[4]=x*o+v*s+m*u,t[5]=x*i+v*l+m*c,t[6]=I*n+M*a+A*d,t[7]=I*o+M*s+A*u,t[8]=I*i+M*l+A*c,t}function Bn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],d=e[6],u=e[7],c=e[8],h=r[0],f=r[1];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t[4]=s,t[5]=l,t[6]=h*n+f*a+d,t[7]=h*o+f*s+u,t[8]=h*i+f*l+c,t}function Xn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],d=e[6],u=e[7],c=e[8],h=Math.sin(r),f=Math.cos(r);return t[0]=f*n+h*a,t[1]=f*o+h*s,t[2]=f*i+h*l,t[3]=f*a-h*n,t[4]=f*s-h*o,t[5]=f*l-h*i,t[6]=d,t[7]=u,t[8]=c,t}function Un(t,e,r){var n=r[0],o=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=o*e[3],t[4]=o*e[4],t[5]=o*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function kn(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function Wn(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Zn(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Qn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function Yn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r+r,s=n+n,l=o+o,d=r*a,u=n*a,c=n*s,h=o*a,f=o*s,g=o*l,x=i*a,v=i*s,m=i*l;return t[0]=1-c-g,t[3]=u-m,t[6]=h+v,t[1]=u+m,t[4]=1-d-g,t[7]=f-x,t[2]=h-v,t[5]=f+x,t[8]=1-d-c,t}function Jn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],u=e[8],c=e[9],h=e[10],f=e[11],g=e[12],x=e[13],v=e[14],m=e[15],I=r*s-n*a,M=r*l-o*a,A=r*d-i*a,G=n*l-o*s,z=n*d-i*s,$=o*d-i*l,W=u*x-c*g,V=u*v-h*g,D=u*m-f*g,N=c*v-h*x,E=c*m-f*x,ne=h*m-f*v,O=I*ne-M*E+A*N+G*D-z*V+$*W;return O?(O=1/O,t[0]=(s*ne-l*E+d*N)*O,t[1]=(l*D-a*ne-d*V)*O,t[2]=(a*E-s*D+d*W)*O,t[3]=(o*E-n*ne-i*N)*O,t[4]=(r*ne-o*D+i*V)*O,t[5]=(n*D-r*E-i*W)*O,t[6]=(x*$-v*z+m*G)*O,t[7]=(v*A-g*$-m*M)*O,t[8]=(g*z-x*A+m*I)*O,t):null}function Hn(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function jn(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function qn(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8])}function Kn(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function Wt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function $n(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function eo(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t}function to(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function ro(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],s=t[5],l=t[6],d=t[7],u=t[8],c=e[0],h=e[1],f=e[2],g=e[3],x=e[4],v=e[5],m=e[6],I=e[7],M=e[8];return Math.abs(r-c)<=y*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(n-h)<=y*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(o-f)<=y*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-g)<=y*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(a-x)<=y*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(s-v)<=y*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(l-m)<=y*Math.max(1,Math.abs(l),Math.abs(m))&&Math.abs(d-I)<=y*Math.max(1,Math.abs(d),Math.abs(I))&&Math.abs(u-M)<=y*Math.max(1,Math.abs(u),Math.abs(M))}var no=kt,oo=Wt;var U={};Ae(U,{add:()=>ai,calculateW:()=>Ho,clone:()=>ri,conjugate:()=>$o,copy:()=>oi,create:()=>nt,dot:()=>mr,equals:()=>ui,exactEquals:()=>pi,exp:()=>ur,fromEuler:()=>ei,fromMat3:()=>fr,fromValues:()=>ni,getAngle:()=>Zo,getAxisAngle:()=>Wo,identity:()=>ko,invert:()=>Ko,len:()=>ci,length:()=>vr,lerp:()=>li,ln:()=>hr,mul:()=>si,multiply:()=>pr,normalize:()=>ot,pow:()=>jo,random:()=>qo,rotateX:()=>Qo,rotateY:()=>Yo,rotateZ:()=>Jo,rotationTo:()=>hi,scale:()=>gr,set:()=>ii,setAxes:()=>gi,setAxisAngle:()=>dr,slerp:()=>Te,sqlerp:()=>fi,sqrLen:()=>di,squaredLength:()=>br,str:()=>ti});var w={};Ae(w,{add:()=>lo,angle:()=>Ro,bezier:()=>Co,ceil:()=>co,clone:()=>io,copy:()=>ao,create:()=>Re,cross:()=>de,dist:()=>Vo,distance:()=>Ht,div:()=>zo,divide:()=>Jt,dot:()=>ce,equals:()=>Fo,exactEquals:()=>Eo,floor:()=>po,forEach:()=>Xo,fromValues:()=>Oe,hermite:()=>Io,inverse:()=>bo,len:()=>tt,length:()=>Zt,lerp:()=>_o,max:()=>ho,min:()=>uo,mul:()=>Go,multiply:()=>Yt,negate:()=>vo,normalize:()=>et,random:()=>yo,rotateX:()=>wo,rotateY:()=>Lo,rotateZ:()=>No,round:()=>fo,scale:()=>go,scaleAndAdd:()=>mo,set:()=>so,slerp:()=>xo,sqrDist:()=>Do,sqrLen:()=>Bo,squaredDistance:()=>jt,squaredLength:()=>qt,str:()=>To,sub:()=>Po,subtract:()=>Qt,transformMat3:()=>Ao,transformMat4:()=>So,transformQuat:()=>Mo,zero:()=>Oo});function Re(){var t=new S(3);return S!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function io(t){var e=new S(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Zt(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function Oe(t,e,r){var n=new S(3);return n[0]=t,n[1]=e,n[2]=r,n}function ao(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function so(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function lo(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Qt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function Yt(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function Jt(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function co(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function po(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function uo(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function ho(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function fo(t,e){return t[0]=te(e[0]),t[1]=te(e[1]),t[2]=te(e[2]),t}function go(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function mo(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function Ht(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(r*r+n*n+o*o)}function jt(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return r*r+n*n+o*o}function qt(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function vo(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function bo(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function et(t,e){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function ce(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function de(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[0],s=r[1],l=r[2];return t[0]=o*l-i*s,t[1]=i*a-n*l,t[2]=n*s-o*a,t}function _o(t,e,r,n){var o=e[0],i=e[1],a=e[2];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t}function xo(t,e,r,n){var o=Math.acos(Math.min(Math.max(ce(e,r),-1),1)),i=Math.sin(o),a=Math.sin((1-n)*o)/i,s=Math.sin(n*o)/i;return t[0]=a*e[0]+s*r[0],t[1]=a*e[1]+s*r[1],t[2]=a*e[2]+s*r[2],t}function Io(t,e,r,n,o,i){var a=i*i,s=a*(2*i-3)+1,l=a*(i-2)+i,d=a*(i-1),u=a*(3-2*i);return t[0]=e[0]*s+r[0]*l+n[0]*d+o[0]*u,t[1]=e[1]*s+r[1]*l+n[1]*d+o[1]*u,t[2]=e[2]*s+r[2]*l+n[2]*d+o[2]*u,t}function Co(t,e,r,n,o,i){var a=1-i,s=a*a,l=i*i,d=s*a,u=3*i*s,c=3*l*a,h=l*i;return t[0]=e[0]*d+r[0]*u+n[0]*c+o[0]*h,t[1]=e[1]*d+r[1]*u+n[1]*c+o[1]*h,t[2]=e[2]*d+r[2]*u+n[2]*c+o[2]*h,t}function yo(t,e){e=e===void 0?1:e;var r=X()*2*Math.PI,n=X()*2-1,o=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=n*e,t}function So(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[3]*n+r[7]*o+r[11]*i+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*o+r[8]*i+r[12])/a,t[1]=(r[1]*n+r[5]*o+r[9]*i+r[13])/a,t[2]=(r[2]*n+r[6]*o+r[10]*i+r[14])/a,t}function Ao(t,e,r){var n=e[0],o=e[1],i=e[2];return t[0]=n*r[0]+o*r[3]+i*r[6],t[1]=n*r[1]+o*r[4]+i*r[7],t[2]=n*r[2]+o*r[5]+i*r[8],t}function Mo(t,e,r){var n=r[0],o=r[1],i=r[2],a=r[3],s=e[0],l=e[1],d=e[2],u=o*d-i*l,c=i*s-n*d,h=n*l-o*s;return u=u+u,c=c+c,h=h+h,t[0]=s+a*u+o*h-i*c,t[1]=l+a*c+i*u-n*h,t[2]=d+a*h+n*c-o*u,t}function wo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0],i[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),i[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Lo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),i[1]=o[1],i[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function No(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),i[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),i[2]=o[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Ro(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2],l=Math.sqrt((r*r+n*n+o*o)*(i*i+a*a+s*s)),d=l&&ce(t,e)/l;return Math.acos(Math.min(Math.max(d,-1),1))}function Oo(t){return t[0]=0,t[1]=0,t[2]=0,t}function To(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Eo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function Fo(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2];return Math.abs(r-i)<=y*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-a)<=y*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-s)<=y*Math.max(1,Math.abs(o),Math.abs(s))}var Po=Qt,Go=Yt,zo=Jt,Vo=Ht,Do=jt,tt=Zt,Bo=qt,Xo=function(){var t=Re();return function(e,r,n,o,i,a){var s,l;for(r||(r=3),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}();function Uo(){var t=new S(4);return S!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Kt(t){var e=new S(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function $t(t,e,r,n){var o=new S(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function er(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function tr(t,e,r,n,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}function rr(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function nr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function or(t){var e=t[0],r=t[1],n=t[2],o=t[3];return Math.sqrt(e*e+r*r+n*n+o*o)}function ir(t){var e=t[0],r=t[1],n=t[2],o=t[3];return e*e+r*r+n*n+o*o}function ar(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=o*a,t[3]=i*a,t}function rt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function sr(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t[3]=s+n*(r[3]-s),t}function lr(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}var ca=function(){var t=Uo();return function(e,r,n,o,i,a){var s,l;for(r||(r=4),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();function nt(){var t=new S(4);return S!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function ko(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function dr(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function Wo(t,e){var r=Math.acos(e[3])*2,n=Math.sin(r/2);return n>y?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function Zo(t,e){var r=mr(t,e);return Math.acos(2*r*r-1)}function pr(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=r[0],l=r[1],d=r[2],u=r[3];return t[0]=n*u+a*s+o*d-i*l,t[1]=o*u+a*l+i*s-n*d,t[2]=i*u+a*d+n*l-o*s,t[3]=a*u-n*s-o*l-i*d,t}function Qo(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*s,t[1]=o*l+i*s,t[2]=i*l-o*s,t[3]=a*l-n*s,t}function Yo(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l-i*s,t[1]=o*l+a*s,t[2]=i*l+n*s,t[3]=a*l-o*s,t}function Jo(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+o*s,t[1]=o*l-n*s,t[2]=i*l+a*s,t[3]=a*l-i*s,t}function Ho(t,e){var r=e[0],n=e[1],o=e[2];return t[0]=r,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),t}function ur(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=Math.exp(i),l=a>0?s*Math.sin(a)/a:0;return t[0]=r*l,t[1]=n*l,t[2]=o*l,t[3]=s*Math.cos(a),t}function hr(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=a>0?Math.atan2(a,i)/a:0;return t[0]=r*s,t[1]=n*s,t[2]=o*s,t[3]=.5*Math.log(r*r+n*n+o*o+i*i),t}function jo(t,e,r){return hr(t,e),gr(t,t,r),ur(t,t),t}function Te(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3],l=r[0],d=r[1],u=r[2],c=r[3],h,f,g,x,v;return f=o*l+i*d+a*u+s*c,f<0&&(f=-f,l=-l,d=-d,u=-u,c=-c),1-f>y?(h=Math.acos(f),g=Math.sin(h),x=Math.sin((1-n)*h)/g,v=Math.sin(n*h)/g):(x=1-n,v=n),t[0]=x*o+v*l,t[1]=x*i+v*d,t[2]=x*a+v*u,t[3]=x*s+v*c,t}function qo(t){var e=X(),r=X(),n=X(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t}function Ko(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i,s=a?1/a:0;return t[0]=-r*s,t[1]=-n*s,t[2]=-o*s,t[3]=i*s,t}function $o(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function fr(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(e[o*3+o]-e[i*3+i]-e[a*3+a]+1),t[o]=.5*n,n=.5/n,t[3]=(e[i*3+a]-e[a*3+i])*n,t[i]=(e[i*3+o]+e[o*3+i])*n,t[a]=(e[a*3+o]+e[o*3+a])*n}return t}function ei(t,e,r,n){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:Ke,i=Math.PI/360;e*=i,n*=i,r*=i;var a=Math.sin(e),s=Math.cos(e),l=Math.sin(r),d=Math.cos(r),u=Math.sin(n),c=Math.cos(n);switch(o){case"xyz":t[0]=a*d*c+s*l*u,t[1]=s*l*c-a*d*u,t[2]=s*d*u+a*l*c,t[3]=s*d*c-a*l*u;break;case"xzy":t[0]=a*d*c-s*l*u,t[1]=s*l*c-a*d*u,t[2]=s*d*u+a*l*c,t[3]=s*d*c+a*l*u;break;case"yxz":t[0]=a*d*c+s*l*u,t[1]=s*l*c-a*d*u,t[2]=s*d*u-a*l*c,t[3]=s*d*c+a*l*u;break;case"yzx":t[0]=a*d*c+s*l*u,t[1]=s*l*c+a*d*u,t[2]=s*d*u-a*l*c,t[3]=s*d*c-a*l*u;break;case"zxy":t[0]=a*d*c-s*l*u,t[1]=s*l*c+a*d*u,t[2]=s*d*u+a*l*c,t[3]=s*d*c-a*l*u;break;case"zyx":t[0]=a*d*c-s*l*u,t[1]=s*l*c+a*d*u,t[2]=s*d*u-a*l*c,t[3]=s*d*c+a*l*u;break;default:throw new Error("Unknown angle order "+o)}return t}function ti(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var ri=Kt,ni=$t,oi=er,ii=tr,ai=rr,si=pr,gr=nr,mr=rt,li=sr,vr=or,ci=vr,br=ir,di=br,ot=ar,pi=lr;function ui(t,e){return Math.abs(rt(t,e))>=1-y}var hi=function(){var t=Re(),e=Oe(1,0,0),r=Oe(0,1,0);return function(n,o,i){var a=ce(o,i);return a<-.999999?(de(t,e,o),tt(t)<1e-6&&de(t,r,o),et(t,t),dr(n,t,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(de(t,o,i),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+a,ot(n,n))}}(),fi=function(){var t=nt(),e=nt();return function(r,n,o,i,a,s){return Te(t,n,a,s),Te(e,o,i,s),Te(r,t,e,2*s*(1-s)),r}}(),gi=function(){var t=$e();return function(e,r,n,o){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],ot(e,fr(e,t))}}();function vi(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillRect(0,0,255,255);let r=new Uint8ClampedArray(256*4);for(let n=0;n<256;n++){for(let i=0;i<256*4;i++)r[i]=Math.floor(Math.random()*256);let o=new ImageData(r,256,1);e.putImageData(o,0,n)}return e}var _r=vi();var bi=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],it=U.create();function _i(t,e){return t===e.INVALID_ENUM?"Invalid enum":t===e.INVALID_VALUE?"Invalid value":t===e.INVALID_OPERATION?"Invalid operation":t===e.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":t===e.OUT_OF_MEMORY?"Out of memory":t===e.CONTEXT_LOST_WEBGL?"Context lost WebGL":t===e.NO_ERROR?"No error":`Unknown error ${t}`}var xi=1,Ii=2,Ci=4,yi=8,Si=16;function pe(t,e){return t?e:0}var ue=class t{gl;shader;positionBuffer;uMaterials;uParameters;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uShadowSharpness;uNoise;noiseTexture;cameraPosition=w.create();cameraTarget=w.create();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;shadowSharpness=128;enableShadows=!0;enableShowMarches=!1;enableDepth=!1;enableNormals=!1;enableToLightNormals=!1;enableSoftShadows=!0;canvasScale=1;cameraMatrixForSdfArray=H.create();prevMaterials;prevLights;prevParameters;prevShaderText;constructor(e,r,n,o,i,a,s,l,d,u,c,h,f,g,x,v,m){this.gl=e,this.shader=r,this.prevShaderText=n,this.positionBuffer=o,this.uMaterials=s,this.uParameters=l,this.uLights=i,this.uNumLights=a,this.uCameraPosition=d,this.uCameraMatrix=u,this.uAspectRatio=c,this.uMaxMarchingSteps=h,this.uEpsilon=f,this.uFlags=g,this.uShadowSharpness=x,this.uNoise=v,this.noiseTexture=m}destroy(){this.gl.deleteProgram(this.shader.program)}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,r){this.cameraRotationX+=e,this.cameraRotationY+=r,this.updateCamera()}updateCamera(){U.fromEuler(it,this.cameraRotationX,this.cameraRotationY,0);let e=w.create();w.transformQuat(e,[0,0,1],it),w.scaleAndAdd(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),H.fromQuat(this.cameraMatrixForSdfArray,it),H.transpose(this.cameraMatrixForSdfArray,this.cameraMatrixForSdfArray)}resizeCanvas=(e,r)=>{let n=e*this.canvasScale,o=r*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=o,this.gl.viewport(0,0,n,o);let i=n/o;this.gl.uniform1f(this.uAspectRatio,i)};render(e){this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.prevParameters!==e.getParameters()&&(this.prevParameters=e.getParameters(),console.info("Rendering new parameters",this.prevParameters),this.gl.uniform1fv(this.uParameters,this.prevParameters));let r=0;r|=pe(this.enableShadows,xi),r|=pe(this.enableDepth,Ci),r|=pe(this.enableNormals,yi),r|=pe(this.enableShowMarches,Ii),r|=pe(this.enableToLightNormals,Si),this.gl.uniform1i(this.uFlags,r),this.gl.uniform1f(this.uShadowSharpness,this.shadowSharpness),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition[0],this.cameraPosition[1],this.cameraPosition[2]),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e,r){let n=e.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let o=n.createBuffer();if(o==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(bi),n.STATIC_DRAW);let i={"assembled-shader":r,"sdf-functions":Bt,"raymarch-functions":Xt},a=le.create(n,i,Dt,Ut);n.useProgram(a.program);let s=this.getAttribute(n,a,"aPosition");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let l=this.getUniform(n,a,"uCameraMatrix"),d=this.getUniform(n,a,"uCameraPosition"),u=this.getUniform(n,a,"uAspectRatio"),c=this.getUniform(n,a,"uMaterials"),h=this.getUniform(n,a,"uLights"),f=this.getUniform(n,a,"uNumLights"),g=this.getUniform(n,a,"uParams"),x=this.getUniform(n,a,"uMaxMarchingSteps"),v=this.getUniform(n,a,"uEpsilon"),m=this.getUniform(n,a,"uFlags"),I=this.getUniform(n,a,"uShadowSharpness"),M=this.getUniform(n,a,"uNoise"),A=n.createTexture(),G=_r;return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,A),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,256,256,0,n.RGBA,n.UNSIGNED_BYTE,G.canvas),this.checkError(n),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.uniform1i(M,0),this.checkError(n),new t(n,a,r,o,h,f,c,g,d,l,u,x,v,m,I,M,A)}static checkError(e){let r=e.getError();r!=e.NO_ERROR&&console.error(`GL Error: ${_i(r,e)}`)}static getAttribute(e,r,n){let o=e.getAttribLocation(r.program,n);if(o<0)throw new Error(`Unable to find attribute ${n}`);return o}static getUniform(e,r,n){let o=e.getUniformLocation(r.program,n);return o==null,o}};var Ir=yt(xr()),Mi={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,enableDepth:!1,enableNormals:!1,enableToLightNormals:!1,enableSoftShadows:!0,epsilon:1e-4,shadowSharpness:128,pixelated:!1},lt={options:Mi},C=new Ir.default({viewports:[lt],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1},currentShader:"return 100.0;"});var ct=0,dt=1,Cr=2;function Ee(){return crypto.randomUUID()}var Fe=Q.ARRAY_TYPE;function pt(){let t=new Fe(3);return t[0]=1,t[1]=1,t[2]=1,t}function F(t,e,r){let n=new Fe(3);return n[0]=t,n[1]=e,n[2]=r,n}function Pe(){let t=new Fe(4);return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t}function ut(t,e,r,n){let o=new Fe(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function yr(t,e){let r={...t.nodes,[e.id]:e};return{...t,nodes:r}}function Sr(t){let e=t.nodes[t.rootNodeId];if(!e)return[];let r=new Array(Object.keys(t.nodes).length);return Nr(e,t.nodes,0,0,r),r}function ht(t){return{colour:Pe(),radius:10,...t}}function Ar(t,e){return{name:t,id:Ee(),position:w.create(),rotation:U.create(),childrenIds:[],childOpCode:"none",selfOpCode:"none",operationParams:.5,shape:gt({}),hasShape:!1,light:ht({}),hasLight:!1,...e}}function ft(t,e,r,n){return{name:t,id:Ee(),position:r??w.create(),rotation:n??U.create(),childrenIds:[],childOpCode:"none",selfOpCode:"none",operationParams:.5,shape:gt({}),hasShape:!1,light:e!=null?ht(e):void 0,hasLight:e!=null}}function j(t,e,r,n,o){return{name:t,id:Ee(),position:r??w.create(),rotation:n??U.create(),shape:e!=null?gt(e):void 0,hasShape:e!=null,light:ht({}),hasLight:!1,childrenIds:[],selfOpCode:"none",childOpCode:o??"none",operationParams:.5}}function gt(t){return{maxSize:0,type:"none",shapeParams:w.create(),diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10,cloud:!1,...t}}function Y(t,e){t.childrenIds.push(e.id),e.parentId=t.id}function Mr(t,e,r){e={...e,childrenIds:[...e.childrenIds,r.id]},r={...r,parentId:e.id};let n={...t.nodes,[e.id]:e,[r.id]:r};return{...t,nodes:n}}function wr(t,e){if(e.parentId===void 0)return t;let r=t.nodes[e.parentId],n=r.childrenIds.findIndex(o=>o===e.id);if(n>=0){let o=[...r.childrenIds];o.splice(n,1),r={...r,childrenIds:o};let i={...t.nodes,[r.id]:r};return delete i[e.id],{...t,nodes:i}}return t}function Lr(t,e,r){if(r.parentId==null)return t;let n=t.nodes[r.parentId],o=n.childrenIds.findIndex(a=>a===r.id);if(o>=0){let a=[...n.childrenIds];a.splice(o,1),n={...n,childrenIds:a}}e.childrenIds.includes(r.id)||(e={...e,childrenIds:[...e.childrenIds,r.id]}),r={...r,parentId:e.id};let i={...t.nodes,[n.id]:n,[e.id]:e,[r.id]:r};return{...t,nodes:i}}function Nr(t,e,r,n,o){if(o[n]={node:t,depth:r},t.childrenIds!=null)for(let i of t.childrenIds){let a=e[i];a&&(n=Nr(a,e,r+1,n+1,o))}return n}function mt(t,e){return r=>{let n=r.viewports[t]??lt,o={...n,options:{...n.options,...e}},i=[...r.viewports];return i[t]=o,{viewports:i}}}function Ge(t){return e=>({reparentModal:{...e.reparentModal,...t}})}function ze(t){return e=>({rawSceneModal:{...e.rawSceneModal,...t}})}function Rr(t){return e=>({sceneTree:yr(e.sceneTree,t)})}function k(t){return()=>({sceneTree:t})}function Or(t){return()=>({currentShader:t})}function Tr(t){return e=>{let r;if(t){for(let n of Object.values(e.sceneTree.nodes))if(n.childrenIds.includes(t)){r=n.id;break}}return{selectedNodeId:t,selectedParentNodeId:r}}}var Er,P,vt,Fr;var Ur=[],L=b,Pr=L.__b,Gr=L.__r,zr=L.diffed,Vr=L.__c,Dr=L.unmount,Br=L.__;function wi(){for(var t;t=Ur.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ve),t.__H.__h.forEach(bt),t.__H.__h=[]}catch(e){t.__H.__h=[],L.__e(e,t.__v)}}L.__b=function(t){P=null,Pr&&Pr(t)},L.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Br&&Br(t,e)},L.__r=function(t){Gr&&Gr(t),Er=0;var e=(P=t.__c).__H;e&&(vt===P?(e.__h=[],P.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(Ve),e.__h.forEach(bt),e.__h=[],Er=0)),vt=P},L.diffed=function(t){zr&&zr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ur.push(e)!==1&&Fr===L.requestAnimationFrame||((Fr=L.requestAnimationFrame)||Li)(wi)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),vt=P=null},L.__c=function(t,e){e.some(function(r){try{r.__h.forEach(Ve),r.__h=r.__h.filter(function(n){return!n.__||bt(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],L.__e(n,r.__v)}}),Vr&&Vr(t,e)},L.unmount=function(t){Dr&&Dr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Ve(n)}catch(o){e=o}}),r.__H=void 0,e&&L.__e(e,r.__v))};var Xr=typeof requestAnimationFrame=="function";function Li(t){var e,r=function(){clearTimeout(n),Xr&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);Xr&&(e=requestAnimationFrame(r))}function Ve(t){var e=P,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),P=e}function bt(t){var e=P;t.__c=t.__(),P=e}function Ri(t,e){for(var r in e)t[r]=e[r];return t}function kr(t,e){for(var r in t)if(r!=="__source"&&!(r in e))return!0;for(var n in e)if(n!=="__source"&&t[n]!==e[n])return!0;return!1}function Wr(t,e){this.props=t,this.context=e}(Wr.prototype=new _).isPureReactComponent=!0,Wr.prototype.shouldComponentUpdate=function(t,e){return kr(this.props,t)||kr(this.state,e)};var Zr=b.__b;b.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Zr&&Zr(t)};var ns=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Oi=b.__e;b.__e=function(t,e,r,n){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e)}Oi(t,e,r,n)};var Qr=b.unmount;function Kr(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),t.__c.__H=null),(t=Ri({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(n){return Kr(n,e,r)})),t}function $r(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(n){return $r(n,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function _t(){this.__u=0,this.o=null,this.__b=null}function en(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function De(){this.i=null,this.l=null}b.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Qr&&Qr(t)},(_t.prototype=new _).__c=function(t,e){var r=e.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=en(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=$r(l,l.__c.__P,l.__c.__O)}var d;for(n.setState({__a:n.__b=null});d=n.o.pop();)d.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(a,a)},_t.prototype.componentWillUnmount=function(){this.o=[]},_t.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Kr(this.__b,r,n.__O=n.__P)}this.__b=null}var o=e.__a&&p(R,null,t.fallback);return o&&(o.__u&=-33),[p(R,null,e.__a?null:t.children),o]};var Yr=function(t,e,r){if(++r[1]===r[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(r=t.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.i=r=r[2]}};function Ti(t){return this.getChildContext=function(){return t.context},t.children}function Ei(t){var e=this,r=t.h;if(e.componentWillUnmount=function(){se(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var n=e.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(o,i){this.childNodes.push(o),e.h.insertBefore(o,i)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.h.removeChild(o)}}}se(p(Ti,{context:e.context},t.__v),e.v)}function Be(t,e){var r=p(Ei,{__v:t,h:e});return r.containerInfo=e,r}(De.prototype=new _).__a=function(t){var e=this,r=en(e.__v),n=e.l.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),Yr(e,t,n)):o()};r?r(i):i()}},De.prototype.render=function(t){this.i=null,this.l=new Map;var e=ae(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var r=e.length;r--;)this.l.set(e[r],this.i=[1,0,this.i]);return t.children},De.prototype.componentDidUpdate=De.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,r){Yr(t,r,e)})};var Fi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Pi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Gi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,zi=/[A-Z0-9]/g,Vi=typeof document<"u",Di=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};_.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(_.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Jr=b.event;function Bi(){}function Xi(){return this.cancelBubble}function Ui(){return this.defaultPrevented}b.event=function(t){return Jr&&(t=Jr(t)),t.persist=Bi,t.isPropagationStopped=Xi,t.isDefaultPrevented=Ui,t.nativeEvent=t};var tn,ki={enumerable:!1,configurable:!0,get:function(){return this.class}},Hr=b.vnode;b.vnode=function(t){typeof t.type=="string"&&function(e){var r=e.props,n=e.type,o={},i=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||Vi&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||Di(r.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":Gi.test(a)&&(a=l):l=a="oninput":i&&Pi.test(a)?a=a.replace(zi,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&o[a=l]&&(a="oninputCapture"),o[a]=s}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=ae(r.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=ae(r.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",ki)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),e.props=o}(t),t.$$typeof=Fi,Hr&&Hr(t)};var jr=b.__r;b.__r=function(t){jr&&jr(t),tn=t.__c};var qr=b.diffed;b.diffed=function(t){qr&&qr(t);var e=t.props,r=t.__e;r!=null&&t.type==="textarea"&&"value"in e&&e.value!==r.value&&(r.value=e.value==null?"":e.value),tn=null};var fe=class extends _{buttonRef=Z();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:r,text:n,children:o}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect();a={left:s.left+"px",top:s.top+s.height+"px"}}return p(R,null,p("button",{...r,ref:this.buttonRef,onClick:this.toggleMenu},n),i&&Be(p("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},p("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},o)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var re=t=>p("label",{style:{display:"inline-block"}},t.label,p("input",{style:{display:"block"},type:"range",...t.inputProps}));var ge=class extends _{render(e){let{pixelated:r,renderScale:n,enableShadows:o,enableShowMarching:i,enableDepth:a,enableNormals:s,enableToLightNormals:l,epsilon:d,shadowSharpness:u,maxMarchingStep:c}=this.props.options;return p("div",{class:"viewport-options"},p(fe,{text:"Menu"},p("div",{class:"control-group-vertical"},p("button",{onClick:this.togglePixelated},r?"Smooth":"Pixelated"),p("select",{onChange:this.changeRenderScale,value:n},p("option",{value:"2"},"2x"),p("option",{value:"1.5"},"1.5x"),p("option",{value:"1"},"1x"),p("option",{value:"0.5"},"0.5x"),p("option",{value:"0.25"},"0.25x"),p("option",{value:"0.125"},"0.125x")),p("button",{onClick:this.toggleShadows},o?"Hide Shadows":"Show Shadows"),p("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),p("button",{onClick:this.toggleDepth},a?"Hide Depth":"Show Depth"),p("button",{onClick:this.toggleNormals},s?"Hide Normals":"Show Normals"),p("button",{onClick:this.toggleToLightNormals},l?"Hide To Light":"Show To Light"),p("button",{onClick:this.showRawScene},"JSON Scene")),p(re,{label:`Epsilon ${d}`,inputProps:{value:d,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),p(re,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}),p(re,{label:`Shadows ${u}`,inputProps:{value:u,min:0,max:256,step:.1,onInput:this.changeShadowSharpness}})))}showRawScene=()=>{C.execute(ze({show:!0}))};changeEpsilon=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:r})};changeShadowSharpness=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Shadow sharpness parse failed");return}this.updateOptions({shadowSharpness:r})};changeMarchingSteps=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(r)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};toggleDepth=e=>{this.updateOptions({enableDepth:!this.props.options.enableDepth})};toggleNormals=e=>{this.updateOptions({enableNormals:!this.props.options.enableNormals})};toggleToLightNormals=e=>{this.updateOptions({enableToLightNormals:!this.props.options.enableToLightNormals})};updateOptions=e=>{console.log("Options",e),C.execute(mt(this.props.viewportIndex,e))};changeRenderScale=e=>{let r=e.target.value,n=Number.parseFloat(r);isFinite(n)?C.execute(mt(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",r)}};var Xe=class extends _{canvasRef=Z();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.createNewRenderer(e),this.renderer.updateCamera(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),p("div",{class:"viewport outer-panel"},p("canvas",{className:e,ref:this.canvasRef}),p(ge,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{if(this.renderFrameCallback=-1,this.renderer.prevShaderText!==this.props.currentShader){console.log("New shader!",this.renderer.prevShaderText,this.props.currentShader);let r=this.renderer.cameraRotationX,n=this.renderer.cameraRotationY,o=this.renderer.cameraDistance;this.renderer.destroy(),this.createNewRenderer(this.canvasRef.current),this.renderer.cameraRotationX=r,this.renderer.cameraRotationY=n,this.renderer.cameraDistance=o,this.renderer.updateCamera()}let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.shadowSharpness=e.shadowSharpness,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.enableDepth=e.enableDepth,this.renderer.enableNormals=e.enableNormals,this.renderer.enableToLightNormals=e.enableToLightNormals,this.renderer.enableSoftShadows=e.enableSoftShadows,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};createNewRenderer=e=>{this.renderer=ue.create(e,this.props.currentShader),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.updateCanvasSize(),this.renderer.setupCanvas()};onPointerDown=e=>{e.target===this.canvasRef.current&&(this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let r=e.clientX-this.mousePosX,n=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-n,-r),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let r=e.deltaY>0?1:-1,n=this.zoom+r;this.zoom=Math.max(Math.min(100,n),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function Wi(t,e){return t.length>=3||e>=3}function Zi(t,e){return t.length===4||e===4}var T=class extends _{render(){let{vector:e,disabled:r,forceLength:n}=this.props,o=Wi(e,n),i=Zi(e,n);return p("div",{class:"vector control-group"},p("input",{class:"input",disabled:r,type:"number",value:e[0],onChange:this.onChangeX,placeholder:"x",step:.1}),p("input",{class:"input",disabled:r,type:"number",value:e[1],onChange:this.onChangeY,placeholder:"y",step:.1}),o&&p("input",{class:"input",disabled:r,type:"number",value:e[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),i&&p("input",{class:"input",disabled:r,type:"number",value:e[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,0)};onChangeY=e=>{this.updateVector(e,1)};onChangeZ=e=>{this.updateVector(e,2)};onChangeW=e=>{this.updateVector(e,3)};updateVector=(e,r)=>{let n=this.props.vector,o=e.target.value,i=parseFloat(o);if(!isFinite(i)){console.error("Unable to process vector index",r,o);return}console.log("Update vector index",r,i);let a=[...n];a[r]=i,this.props.onChange(n,a)}};var me=class extends _{render(){let e=this.props.shape,r=e.lightingModel==="phong";return p("div",null,p("div",null,p("strong",null,"Type")," ",p("select",{value:e.type??"none",onChange:this.onChangeType},p("option",{value:"none"},"None"),p("option",{value:"box"},"Box"),p("option",{value:"sphere"},"Sphere"),p("option",{value:"hexPrism"},"Hex Prism"),p("option",{value:"torus"},"Torus"),p("option",{value:"octahedron"},"Octahedron"),p("option",{value:"cylinder"},"Cylinder"),p("option",{value:"icosahedron"},"Icosahedron"))),p("div",null,p("strong",null,"Shape Params")," ",p(T,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),p("div",null,p("strong",null,"Lighting Model")," ",p("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},p("option",{value:"unlit"},"Unlit"),p("option",{value:"lambert"},"Lambert"),p("option",{value:"phong"},"Phong"))),p("div",null,p("strong",null,"Cloud")," ",p("input",{type:"checkbox",checked:e.cloud,onChange:this.onChangeCloud})),p("div",null,p("strong",null,"Diffuse Colour")," ",p(T,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),p("div",null,p("strong",null,"Specular Colour")," ",p(T,{disabled:!r,vector:e.specularColour,onChange:this.onChangeSpecularColour})),p("div",null,p("strong",null,"Shininess")," ",p("input",{class:"input",disabled:!r,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeCloud=e=>{let r=e.target.checked;this.updateField(r,"cloud")};onChangeType=e=>{let r=e.target.value;this.updateField(r,"type")};onChangeLightingModel=e=>{let r=e.target.value;this.updateField(r,"lightingModel")};onChangeShininess=e=>{let r=parseFloat(e.target.value);isFinite(r)&&this.updateField(r,"shininess")};onChangeShapeParams=(e,r)=>{this.updateField(r,"shapeParams")};onChangeDiffuseColour=(e,r)=>{this.updateField(r,"diffuseColour")};onChangeSpecularColour=(e,r)=>{this.updateField(r,"specularColour")};updateField=(e,r)=>{console.log("Update shape",r,e);let n={...this.props.shape,[r]:e};this.props.onChange(n)}};var ve=class extends _{render(){let e=this.props.light;return e===void 0?p("div",null,"Empty Light"):p("div",null,p("div",null,p("strong",null,"Colour")," ",p(T,{forceLength:3,vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,r)=>{this.updateField(r,"colour")};updateField=(e,r)=>{console.log("Update light",r,e);let n={...this.props.light,[r]:e};this.props.onChange(n)}};var be=class extends _{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:r}=this.props;if(e==null)return p("div",{class:"scene-node-view"},"No node selected");let n=e.parentId!=null?r.nodes[e.parentId]:void 0,o=e.selfOpCode??"none",i=e.childOpCode??"none",a=e.operationParams;return p("div",{class:"scene-node-view"},p("div",null,p("strong",null,"Name")," ",p("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),p("div",null,p("strong",null,"Position")," ",p(T,{vector:e.position,onChange:this.onChangePosition})),p("div",null,p("strong",null,"Rotation")," ",p(T,{vector:e.rotation,onChange:this.onChangeRotation})),p("div",null,p("strong",null,"Self Op Code")," ",p("select",{value:o,onChange:this.onChangeSelfOpCode},p("option",{value:"none"},"None"),p("option",{value:"repeatDomain"},"Repeat"))),p("div",null,p("strong",null,"Child Op Code")," ",p("select",{value:i,onChange:this.onChangeChildOpCode},p("option",{value:"none"},"None"),p("option",{value:"union"},"Union"),p("option",{value:"intersection"},"Intersection"),p("option",{value:"subtraction"},"Subtraction"),p("option",{value:"xor"},"Xor"),p("option",{value:"smoothUnion"},"Smooth Union"),p("option",{value:"smoothIntersection"},"Smooth Intersection"),p("option",{value:"smoothSubtraction"},"Smooth Subtraction"))),p("div",null,p(re,{label:`Operation Param ${a}`,inputProps:{value:a,min:0,max:10,step:.1,onInput:this.changeOperationParam}})),p("div",null,p("strong",null,"Shape")," ",p("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&p(me,{shape:e.shape,onChange:this.onChangeShape})),p("div",null,p("strong",null,"Light")," ",p("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&p(ve,{light:e.light,onChange:this.onChangeLight})),p("div",null,p("strong",null,"Children")),p("div",{class:"control-group"},p("button",{onClick:this.addChild},"Add"),n!=null&&p(R,null,p("button",{onClick:this.deleteSelf},"Delete"),p("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Mr(this.props.sceneTree,this.props.node,Ar("New Child",{}));C.execute(k(e))};deleteSelf=()=>{let e=wr(this.props.sceneTree,this.props.node);C.execute(k(e))};reparent=()=>{let{node:e,sceneTree:r}=this.props;if((e.parentId!=null?r.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}C.execute(Ge({show:!0,childNodeId:this.props.node.id}))};changeOperationParam=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Operation param parse failed");return}this.updateField(r,"operationParams")};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let r=e.target.value;this.updateField(r,"name")};onChangePosition=(e,r)=>{this.updateField(r,"position")};onChangeRotation=(e,r)=>{this.updateField(r,"rotation")};onChangeSelfOpCode=e=>{let r=e.target.value;this.updateField(r,"selfOpCode")};onChangeChildOpCode=e=>{let r=e.target.value;this.updateField(r,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,r)=>{console.log("Update shape node",r,e);let n={...this.props.node,[r]:e};this.props.onChange(n,this.props.node)}};function xt(t,e,r){return(r==null||r===!0)&&(t+=" "+e),t}var _e=class extends _{render(){let{depth:e,node:r,isSelected:n,disable:o}=this.props,i=xt(xt("scene-node-tree-item","is-selected",n),"is-disabled",o===!0);return p("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",r.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var q=class extends _{render(){return p("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:r,onItemClicked:n}=this.props,o=e.nodes[e.rootNodeId],i=[];if(o==null)return i;let a=Sr(e);for(let s of a){let l=s.node.id===r;i.push(p(_e,{isSelected:l,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return i}};var xe=class extends _{render(){let{sceneTree:e,selectedNodeId:r}=this.props,n=e.nodes[r];return p("div",{class:"scene-tree"},p("div",{class:"scene-tree__contents outer-panel"},p("div",{class:"inner-panel"},p(q,{sceneTree:e,selectedNodeId:r,onItemClicked:this.onNodeClicked})),p("div",{class:"inner-panel scene-tree__nodes"},p(be,{sceneTree:e,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{C.execute(Tr(e.id))};onChangeSelectedNode=(e,r)=>{C.execute(Rr(e))}};var K=class extends _{render(){let{show:e,onRequestClose:r}=this.props;if(e===!1)return null;let n=this.props.portalContainer??"modals",o=document.getElementById(n),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return Be(p("div",{class:"modal-backdrop",onPointerDown:r},p("div",{class:a,onPointerDown:this.preventClose},this.props.children)),o)}preventClose=e=>{e.stopImmediatePropagation()}};var Ie=class extends _{render(){let{show:e,sceneTree:r,disabledNodeIds:n,onRequestClose:o}=this.props;return p(K,{show:e,onRequestClose:o},p(q,{sceneTree:r,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var Ce=class extends _{render(){let{show:e}=this.props.state,r=this.getDisabledNodeIds();return p(Ie,{show:e,disabledNodeIds:r,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{C.execute(Ge({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:r}=this.props.state;if(!e)return[];let{sceneTree:n}=this.props,o=n.nodes[r];return[o.id,o.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let r=this.props.sceneTree.nodes[this.props.state.childNodeId],n=Lr(this.props.sceneTree,e,r);C.execute(k(n))}};var ye=class extends _{prevSceneTree=void 0;preRef=Z();render(){let{show:e}=this.props.state,{sceneTree:r}=this.props,n="";return e&&this.prevSceneTree!==r&&(n=JSON.stringify(r,null,2)),p(K,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal"},p("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},p("pre",null,n)),p("span",{class:"control-group"},p("button",{onClick:this.loadFromHtml},"Load From Json"),p("label",{class:"button"},"Load From File",p("input",{type:"file",onChange:this.loadFromFile})),p("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{C.execute(ze({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="scene.json",r.click(),URL.revokeObjectURL(r.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let r=e.target;typeof r.result=="string"?this.loadFromText(r.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let r=JSON.parse(e);r!=null&&C.execute(k(r))}};var Ue=class extends _{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:r,sceneTree:n,selectedNodeId:o,reparentModal:i,rawSceneModal:a,currentShader:s}=this.props.state;return console.log("App render",this.props.state),p(R,null,p("div",{class:"main-view"},p("div",{class:"viewports"},p(Xe,{viewportIndex:0,options:r[0].options,sceneConverter:e,currentShader:s})),p(xe,{sceneTree:n,selectedNodeId:o})),p(Ce,{state:i,sceneTree:n}),p(ye,{state:a,sceneTree:n}))}};var ke=yt(nn());function Qi(t){let e=t.toString();return e.indexOf(".")<0&&(e+=".0"),e}var Se=class{result="";firstItem=!0;startFunction(e){this.writeValue(e+"("),this.firstItem=!0}endFunction(){this.result+=")"}writeRaw(e){this.result+=e}writeValue(e){this.firstItem||(this.result+=", "),typeof e=="number"?this.result+=Qi(e):this.result+=e,this.firstItem=!1}writeParameter(e){this.writeValue("uParams["+e+"]")}getFinal(){return`return ${this.result};`}};var Yi=8,Ji=8,Hi={unlit:ct,lambert:dt,phong:Cr};function ji(t){return Hi[t]||ct}var qi={box:{funcName:"sdfBox",numParams:3},sphere:{funcName:"sdfSphere",numParams:1},hexPrism:{funcName:"sdfHexPrism",numParams:2},torus:{funcName:"sdfTorus",numParams:2},octahedron:{funcName:"sdfOctahedron",numParams:1},cylinder:{funcName:"sdfCappedCylinder",numParams:2},icosahedron:{funcName:"sdfIcosahedron",numParams:1}},We=class t{lights=[];lightDataArray=[];materials=[];materialDataArray=[];parameters=[];shader="";previousTree;getTree(){return this.previousTree}getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getParameters(){return this.parameters}getShader(){return this.shader}setLight(e,r){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...t.createNewLight(),...r}:this.lights[e]={...this.lights[e],...r},this.updateLight(e)}setMaterial(e,r){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...t.createNewMaterial(),...r}:this.materials[e]={...this.materials[e],...r},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||(this.previousTree=e,!e.nodes[e.rootNodeId]))return!1;let{lights:n,materials:o,parameters:i,assembler:a}=t.createShapesFromNode(e);if(!(0,ke.default)(this.lights,n)){this.lights=n,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,ke.default)(this.materials,o)){this.materials=o,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}return(0,ke.default)(this.parameters,i)||(this.parameters=i,console.log("Parameters",this.parameters)),this.shader=a.getFinal(),!0}static createShapesFromNode(e){let r=e.nodes[e.rootNodeId];if(!r)return;let n=[],o=[],i=[],a=new Se;return this.processNode(n,o,i,r,e.nodes,a),{lights:n,materials:o,parameters:i,assembler:a}}static nodeHasValidShape(e){return!(!e.hasShape||e.shape==null||e.shape.type==="none")}static processNode(e,r,n,o,i,a){let s=!1,l=0,d=0;if(o.childOpCode!=="none"){for(let c of o.childrenIds){let h=i[c];(this.nodeHasValidShape(h)||h.childOpCode!=="none")&&d++}d>1&&(s=!0,this.processOperation(o.childOpCode,a,n,o.operationParams),l++)}if(this.nodeHasValidShape(o)&&(s=!0,this.processShape(o,o.shape,r,n,a)),o.hasLight){let c=t.convertToLight(o);c!=null&&e.push(c)}let u=0;for(let c of o.childrenIds)this.processNode(e,r,n,i[c],i,a)&&(u++,d>2&&u+1<d&&(l++,this.processOperation(o.childOpCode,a,n,o.operationParams)));for(let c=0;c<l;c++)a.endFunction();return s}static processOperation(e,r,n,o){e==="union"?r.startFunction("opUnion"):e==="intersection"?r.startFunction("opIntersection"):e==="subtraction"?r.startFunction("opSubtraction"):e==="xor"?r.startFunction("opXor"):e==="smoothUnion"?(r.startFunction("opSmoothUnion"),this.pushParameter(n,o,r)):e==="smoothSubtraction"?(r.startFunction("opSmoothSubtraction"),this.pushParameter(n,o,r)):e==="smoothIntersection"?(r.startFunction("opSmoothIntersection"),this.pushParameter(n,o,r)):console.error("Unknown operation",e)}static pushParameter(e,r,n){n.writeParameter(e.length),e.push(r)}static writeSamplePoint(e,r,n){let o=e.position;e.selfOpCode==="repeatDomain"&&(console.log("repeat"),n.startFunction("repeatDomain")),n.startFunction("vec3"),this.pushParameter(r,-o[0],n),this.pushParameter(r,-o[1],n),this.pushParameter(r,-o[2],n),n.endFunction(),n.writeRaw(" + point"),e.selfOpCode==="repeatDomain"&&(this.pushParameter(r,e.operationParams,n),n.endFunction())}static processShape(e,r,n,o,i){let a=qi[r.type];if(a==null){console.error("Unsupported shape type");return}i.startFunction("vec2");let s={diffuseColour:r.diffuseColour,lightingModel:ji(r.lightingModel),specularColour:r.specularColour,shininess:r.shininess},l=n.length;n.push(s),i.startFunction(a.funcName),this.writeSamplePoint(e,o,i);let d=!1;a.numParams>=2&&a.numParams<=4&&(d=!0,i.startFunction("vec"+a.numParams));for(let u=0;u<a.numParams;u++)this.pushParameter(o,r.shapeParams[u],i);d&&i.endFunction(),i.endFunction(),i.writeValue(l),i.endFunction()}updateLight(e){let r=e*Yi,n=this.lights[e];this.lightDataArray[r]=n.position[0],this.lightDataArray[r+1]=n.position[1],this.lightDataArray[r+2]=n.position[2],this.lightDataArray[r+3]=n.radius,this.lightDataArray[r+4]=n.colour[0],this.lightDataArray[r+5]=n.colour[1],this.lightDataArray[r+6]=n.colour[2],this.lightDataArray[r+7]=n.colour[3]}updateMaterial(e){let r=e*Ji,n=this.materials[e];this.materialDataArray[r]=n.diffuseColour[0],this.materialDataArray[r+1]=n.diffuseColour[1],this.materialDataArray[r+2]=n.diffuseColour[2],this.materialDataArray[r+3]=n.lightingModel,this.materialDataArray[r+4]=n.specularColour[0],this.materialDataArray[r+5]=n.specularColour[1],this.materialDataArray[r+6]=n.specularColour[2],this.materialDataArray[r+7]=n.shininess}static convertToLight(e){let r=e.light;return r==null?null:{colour:r.colour,position:e.position,radius:r.radius}}static createNewMaterial(){return{diffuseColour:pt(),lightingModel:dt,specularColour:pt(),shininess:10}}static createNewLight(){return{position:w.create(),radius:10,colour:Pe()}}};var It=new We;C.subscribe(t=>t.sceneTree,Ki);function Ki(t){It.updateShapesFromTree(t.sceneTree)&&C.execute(Or(It.getShader()))}var $i=document.getElementById("app");function on(){se(p(Ue,{state:C.state(),sceneConverter:It}),$i)}function ea(...t){let e={};for(let r of t)e[r.id]=r;return e}function ta(){let t=j("Root",null,void 0,void 0,"union"),e=j("Main",null,void 0,void 0,"subtraction");Y(t,e);let r=j("Hex Prism",{type:"hexPrism",shapeParams:F(.75,2,0),maxSize:1.5,diffuseColour:F(.5,.5,.5)}),n=j("Box & Sphere",void 0,void 0,void 0,"union");Y(e,r),Y(e,n);let o=j("Box",{type:"box",shapeParams:F(6,1,6),diffuseColour:F(1,1,1),lightingModel:"lambert"},F(0,-1.5,0)),i=j("Sphere",{type:"sphere",shapeParams:F(1.25,2,1),maxSize:2,diffuseColour:F(.1,.2,.9),lightingModel:"phong"});Y(n,o),Y(n,i);let a=ft("Red Light",{colour:ut(1,.8,.6,1)},F(4,2,3)),s=ft("Green Light",{colour:ut(.2,1,.6,1)},F(0,0,0));Y(t,a),Y(t,s);let d={nodes:ea(t,e,r,n,o,i,a,s),rootNodeId:t.id};C.execute(k(d))}ta();on();C.subscribeAny(on);})();
//# sourceMappingURL=webgl-index.js.map
