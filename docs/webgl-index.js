(()=>{var Zn=Object.create;var vt=Object.defineProperty;var Qn=Object.getOwnPropertyDescriptor;var Yn=Object.getOwnPropertyNames;var Jn=Object.getPrototypeOf,Hn=Object.prototype.hasOwnProperty;var Ht=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),de=(e,t)=>{for(var r in t)vt(e,r,{get:t[r],enumerable:!0})},jn=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Yn(t))!Hn.call(e,i)&&i!==r&&vt(e,i,{get:()=>t[i],enumerable:!(n=Qn(t,i))||n.enumerable});return e};var jt=(e,t,r)=>(r=e!=null?Zn(Jn(e)):{},jn(t||!e||!e.__esModule?vt(r,"default",{value:e,enumerable:!0}):r,e));var en=Ht(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});Ie.EmptyModifier=void 0;var ts=()=>null;Ie.EmptyModifier=ts;var Rt=class{constructor(t){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=t}execute(t,r=!0){let n=t(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(t,r))}subscribe(t,r,n,i){let o=t(this.currentState),a={selector:new Et(t,o,n,i),subscription:r};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(t,r){return this.subscribe(n=>n,t,void 0,r)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(t,r){for(let n of this.subscriptions){let i=n.selector.getValue(this.currentState);n.selector.checkIfChanged(i)&&n.subscription(this.currentState,i,t,r)}}};Ie.default=Rt;var Et=class{constructor(t,r=void 0,n,i){this.getValue=o=>this.selector(o),this.selector=t,this.prevValue=r,this.comparer=n,this.name=i}checkIfChanged(t){let r=!1;return this.comparer!==void 0?r=!this.comparer(this.prevValue,t):r=t!==this.prevValue,this.prevValue=t,r}}});var Dn=Ht((rh,Un)=>{"use strict";Un.exports=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,i,o;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(i=n;i--!==0;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(r).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;i--!==0;){var a=o[i];if(!e(t[a],r[a]))return!1}return!0}return t!==t&&r!==r}});var We,O,tr,qn,te,qt,rr,nr,ir,yt,xt,bt,Kn,he={},or=[],$n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function J(e,t){for(var r in t)e[r]=t[r];return e}function _t(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function h(e,t,r){var n,i,o,a={};for(o in t)o=="key"?n=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?We.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Ue(e,a,n,i,null)}function Ue(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++tr,__i:-1,__u:0};return i==null&&O.vnode!=null&&O.vnode(o),o}function Q(){return{current:null}}function G(e){return e.children}function S(e,t){this.props=e,this.context=t}function oe(e,t){if(t==null)return e.__?oe(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?oe(e):null}function ar(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return ar(e)}}function Kt(e){(!e.__d&&(e.__d=!0)&&te.push(e)&&!De.__r++||qt!=O.debounceRendering)&&((qt=O.debounceRendering)||rr)(De)}function De(){for(var e,t,r,n,i,o,a,s=1;te.length;)te.length>s&&te.sort(nr),e=te.shift(),s=te.length,e.__d&&(r=void 0,i=(n=(t=e).__v).__e,o=[],a=[],t.__P&&((r=J({},n)).__v=n.__v+1,O.vnode&&O.vnode(r),It(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,o,i??oe(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,cr(o,r,a),r.__e!=i&&ar(r)));De.__r=0}function sr(e,t,r,n,i,o,a,s,l,c,d){var p,m,f,g,v,u,x=n&&n.__k||or,b=t.length;for(l=ei(r,t,x,l,b),p=0;p<b;p++)(f=r.__k[p])!=null&&(m=f.__i==-1?he:x[f.__i]||he,f.__i=p,u=It(e,f,m,i,o,a,s,l,c,d),g=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&Ct(m.ref,null,f),d.push(f.ref,f.__c||g,f)),v==null&&g!=null&&(v=g),4&f.__u||m.__k===f.__k?l=lr(f,l,e):typeof f.type=="function"&&u!==void 0?l=u:g&&(l=g.nextSibling),f.__u&=-7);return r.__e=v,l}function ei(e,t,r,n,i){var o,a,s,l,c,d=r.length,p=d,m=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=o+m,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Ue(null,a,null,null,null):fe(a)?Ue(G,{children:a},null,null,null):a.constructor==null&&a.__b>0?Ue(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,s=null,(c=a.__i=ti(a,r,l,p))!=-1&&(p--,(s=r[c])&&(s.__u|=2)),s==null||s.__v==null?(c==-1&&(i>d?m--:i<d&&m++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?m--:c==l+1?m++:(c>l?m--:m++,a.__u|=4))):e.__k[o]=null;if(p)for(o=0;o<d;o++)(s=r[o])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=oe(s)),dr(s,s));return n}function lr(e,t,r){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,t=lr(n[i],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=oe(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function me(e,t){return t=t||[],e==null||typeof e=="boolean"||(fe(e)?e.some(function(r){me(r,t)}):t.push(e)),t}function ti(e,t,r,n){var i,o,a=e.key,s=e.type,l=t[r];if(l===null&&e.key==null||l&&a==l.key&&s==l.type&&(2&l.__u)==0)return r;if(n>(l!=null&&(2&l.__u)==0?1:0))for(i=r-1,o=r+1;i>=0||o<t.length;){if(i>=0){if((l=t[i])&&(2&l.__u)==0&&a==l.key&&s==l.type)return i;i--}if(o<t.length){if((l=t[o])&&(2&l.__u)==0&&a==l.key&&s==l.type)return o;o++}}return-1}function $t(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||$n.test(t)?r:r+"px"}function Be(e,t,r,n,i){var o,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||$t(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||$t(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(ir,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n?r.u=n.u:(r.u=yt,e.addEventListener(t,o?bt:xt,o)):e.removeEventListener(t,o?bt:xt,o);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function er(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=yt++;else if(t.t<r.u)return;return r(O.event?O.event(t):t)}}}function It(e,t,r,n,i,o,a,s,l,c){var d,p,m,f,g,v,u,x,b,_,y,C,I,E,N,R,M,T=t.type;if(t.constructor!=null)return null;128&r.__u&&(l=!!(32&r.__u),o=[s=t.__e=r.__e]),(d=O.__b)&&d(t);e:if(typeof T=="function")try{if(x=t.props,b="prototype"in T&&T.prototype.render,_=(d=T.contextType)&&n[d.__c],y=d?_?_.props.value:d.__:n,r.__c?u=(p=t.__c=r.__c).__=p.__E:(b?t.__c=p=new T(x,y):(t.__c=p=new S(x,y),p.constructor=T,p.render=ni),_&&_.sub(p),p.props=x,p.state||(p.state={}),p.context=y,p.__n=n,m=p.__d=!0,p.__h=[],p._sb=[]),b&&p.__s==null&&(p.__s=p.state),b&&T.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=J({},p.__s)),J(p.__s,T.getDerivedStateFromProps(x,p.__s))),f=p.props,g=p.state,p.__v=t,m)b&&T.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),b&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(b&&T.getDerivedStateFromProps==null&&x!==f&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,y),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,y)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(p.props=x,p.state=p.__s,p.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(P){P&&(P.__=t)}),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&a.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,y),b&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(f,g,v)})}if(p.context=y,p.props=x,p.__P=e,p.__e=!1,I=O.__r,E=0,b){for(p.state=p.__s,p.__d=!1,I&&I(t),d=p.render(p.props,p.state,p.context),N=0;N<p._sb.length;N++)p.__h.push(p._sb[N]);p._sb=[]}else do p.__d=!1,I&&I(t),d=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++E<25);p.state=p.__s,p.getChildContext!=null&&(n=J(J({},n),p.getChildContext())),b&&!m&&p.getSnapshotBeforeUpdate!=null&&(v=p.getSnapshotBeforeUpdate(f,g)),R=d,d!=null&&d.type===G&&d.key==null&&(R=pr(d.props.children)),s=sr(e,fe(R)?R:[R],t,r,n,i,o,a,s,l,c),p.base=t.__e,t.__u&=-161,p.__h.length&&a.push(p),u&&(p.__E=p.__=null)}catch(P){if(t.__v=null,l||o!=null)if(P.then){for(t.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,t.__e=s}else for(M=o.length;M--;)_t(o[M]);else t.__e=r.__e,t.__k=r.__k;O.__e(P,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):s=t.__e=ri(r.__e,t,r,n,i,o,a,l,c);return(d=O.diffed)&&d(t),128&t.__u?void 0:s}function cr(e,t,r){for(var n=0;n<r.length;n++)Ct(r[n],r[++n],r[++n]);O.__c&&O.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){O.__e(o,i.__v)}})}function pr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:fe(e)?e.map(pr):J({},e)}function ri(e,t,r,n,i,o,a,s,l){var c,d,p,m,f,g,v,u=r.props,x=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){e=f,o[c]=null;break}}if(e==null){if(b==null)return document.createTextNode(x);e=document.createElementNS(i,b,x.is&&x),s&&(O.__m&&O.__m(t,o),s=!1),o=null}if(b==null)u===x||s&&e.data==x||(e.data=x);else{if(o=o&&We.call(e.childNodes),u=r.props||he,!s&&o!=null)for(u={},c=0;c<e.attributes.length;c++)u[(f=e.attributes[c]).name]=f.value;for(c in u)if(f=u[c],c!="children"){if(c=="dangerouslySetInnerHTML")p=f;else if(!(c in x)){if(c=="value"&&"defaultValue"in x||c=="checked"&&"defaultChecked"in x)continue;Be(e,c,null,f,i)}}for(c in x)f=x[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?d=f:c=="value"?g=f:c=="checked"?v=f:s&&typeof f!="function"||u[c]===f||Be(e,c,f,u[c],i);if(d)s||p&&(d.__html==p.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(p&&(e.innerHTML=""),sr(t.type=="template"?e.content:e,fe(m)?m:[m],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:r.__k&&oe(r,0),s,l),o!=null)for(c=o.length;c--;)_t(o[c]);s||(c="value",b=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[c]||b=="progress"&&!g||b=="option"&&g!=u[c])&&Be(e,c,g,u[c],i),c="checked",v!=null&&v!=e[c]&&Be(e,c,v,u[c],i))}return e}function Ct(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(i){O.__e(i,r)}}function dr(e,t,r){var n,i;if(O.unmount&&O.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Ct(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){O.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&dr(n[i],t,r||typeof e.type!="function");r||_t(e.__e),e.__c=e.__=e.__e=void 0}function ni(e,t,r){return this.constructor(e,r)}function ue(e,t,r){var n,i,o,a;t==document&&(t=document.documentElement),O.__&&O.__(e,t),i=(n=typeof r=="function")?null:r&&r.__k||t.__k,o=[],a=[],It(t,e=(!n&&r||t).__k=h(G,null,[e]),i||he,he,t.namespaceURI,!n&&r?[r]:i?null:t.firstChild?We.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n,a),cr(o,e,a)}We=or.slice,O={__e:function(e,t,r,n){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),a=i.__d),a)return i.__E=i}catch(s){e=s}throw e}},tr=0,qn=function(e){return e!=null&&e.constructor==null},S.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=J({},this.state),typeof e=="function"&&(e=e(J({},r),this.props)),e&&J(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Kt(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Kt(this))},S.prototype.render=G,te=[],rr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nr=function(e,t){return e.__v.__b-t.__v.__b},De.__r=0,ir=/(PointerCapture)$|Capture$/i,yt=0,xt=er(!1),bt=er(!0),Kn=0;var hr=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var fr=`float sdfSphere(vec3 point, float radius)
{
    return length(point) - radius;
}

float sdfHexPrism(vec3 point, float radius, float depth)
{
    vec3 absPoint = abs(point);
    float d1 = absPoint.z - depth;
    float d2 = max((absPoint.x * 0.866025 + absPoint.y * 0.5), absPoint.y) - radius;
    return length(max(vec2(d1, d2), 0.0)) + min(max(d1, d2), 0.0);
}

float sdfBox(vec3 point, float x, float y, float z)
{
    vec3 d = abs(point) - vec3(x, y, z);
    return min(max(d.x, max(d.y, d.z)), 0.0) // inside distance
        + length(max(d, 0.0));               // outside distance
}

float sdfTorus(vec3 point, float majorRadius, float minorRadius)
{
    vec2 q = vec2(length(point.xz) - majorRadius, point.y);
    return length(q) - minorRadius;
}

float sdfOctahedron(vec3 point, float s)
{
    point = abs(point);
    return (point.x + point.y + point.z - s) * 0.57735027;
}

float sdfCappedCylinder(vec3 point, float radius, float height)
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

// https://iquilezles.org/articles/mandelbulb
float sdfMandelbulb(vec3 point, float iterations, float scale)
{
    point = point / scale;
    vec3 w = point;
    float m = dot(w, w);

    int p1 = int(iterations); // default 4;

    float dz = 1.0;

    for(int i = 0; i < p1; i++)
    {
        // dz = 8*z^7*dz
        dz = 8.0 * pow(m, 3.5) * dz + 1.0;

        // z = z^8+c
        float r = length(w);
        float b = 8.0 * acos(w.y / r);
        float a = 8.0 * atan(w.x, w.z);
        w = point + pow(r, 8.0) * vec3(sin(b) * sin(a), cos(b), sin(b) * cos(a));

        m = dot(w, w);
        if (m > 256.0)
        {
            break;
        }
    }

    // distance estimation (through the Hubbard-Douady potential)
    return 0.25 * log(m) * sqrt(m) / dz;
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

vec3 opRepeatDomain(vec3 point, float x, float y, float z)
{
    vec3 size = vec3(x, y, z);
    return point - size * round(point / size);
}

vec3 opTwistXY(vec3 point, float amount)
{
    float c = cos(amount * point.z);
    float s = sin(amount * point.z);
    mat2 m = mat2(c, -s, s, c);
    return vec3(m * point.xy, point.z);
}

vec3 opRotationSimple(vec3 point, float n)
{
    // naive domain repetition
    float b = 6.283185 / n;
    float a = atan(point.z, point.x);
    float i = round(a / b);

    float c = b * i;
    mat2 rotation = mat2(cos(c), -sin(c), sin(c), cos(c));
    vec2 xz = rotation * point.xz;

    return vec3(xz.x, point.y, xz.y);
}
vec3 quatMul( vec4 q, vec3 v )
{
    return v + 2.0 * cross(cross(v, q.xyz ) + q.w * v, q.xyz);
}`;var mr=`vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
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

// float z = 2.0 / tan(radius(fieldOfView))
vec3 createRayDirection(float z, vec2 fragCoord)
{
    vec2 xy = fragCoord / 2.0;
    return normalize(vec3(xy, -z));
}
`;var ur=`#version 300 es

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
uniform float uCameraFov;
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
    vec3 rayDir = uCameraMatrix * createRayDirection(uCameraFov, oPosition);
    vec3 rayOrigin = uCameraPosition.xyz;

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
`;var li=/#include\s+\<([^\>]+)\>/gmi,ge=class e{program;constructor(t){this.program=t}static assembleShader(t,r){let n=r.matchAll(li);for(let i of n){let o=t[i[1]];o===void 0&&(console.error(`Unknown shader include ${i[1]}`),o=""),r=r.replace(i[0],o)}return r}static create(t,r,n,i){let o=null,a=null,s=null;function l(){o!=null&&(t.detachShader(o,a),t.detachShader(o,s)),a!=null&&t.deleteShader(a),s!=null&&t.deleteShader(s)}if(a=t.createShader(t.VERTEX_SHADER),t.shaderSource(a,this.assembleShader(r,n)),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){let d=t.getShaderInfoLog(a);throw console.error("Vertex shader compile error",d),l(),new Error(`Vertex shader compile error ${d}`)}s=t.createShader(t.FRAGMENT_SHADER);let c=this.assembleShader(r,i);{let d=c.split(`
`),p=new Array(d.length);for(let m=0;m<d.length;m++)p[m]=m+1+": "+d[m];console.info("Assembled shader",p.join(`
`))}if(t.shaderSource(s,c),t.compileShader(s),!t.getShaderParameter(s,t.COMPILE_STATUS)){let d=t.getShaderInfoLog(s);throw console.error("Fragment shader compile error",d),l(),new Error(`Fragment shader compile error ${d}`)}if(o=t.createProgram(),t.attachShader(o,a),t.attachShader(o,s),t.linkProgram(o),l(),!t.getProgramParameter(o,t.LINK_STATUS)){t.useProgram(null),t.deleteProgram(o);let d=t.getProgramInfoLog(o);throw console.error("Shader link error",d),new Error(`Shader link error ${d}`)}return new e(o)}};var j={};de(j,{ANGLE_ORDER:()=>Mt,ARRAY_TYPE:()=>V,EPSILON:()=>w,RANDOM:()=>H,equals:()=>mi,round:()=>ae,setMatrixArrayType:()=>ci,toDegree:()=>fi,toRadian:()=>hi});var w=1e-6,V=typeof Float32Array<"u"?Float32Array:Array,H=Math.random,Mt="zyx";function ae(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}function ci(e){V=e}var pi=Math.PI/180,di=180/Math.PI;function hi(e){return e*pi}function fi(e){return e*di}function mi(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:w;return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))}var se={};de(se,{add:()=>Vi,adjoint:()=>Ci,clone:()=>gi,copy:()=>vi,create:()=>St,determinant:()=>Mi,equals:()=>Bi,exactEquals:()=>Xi,frob:()=>Fi,fromMat2d:()=>Ri,fromMat4:()=>ui,fromQuat:()=>Ei,fromRotation:()=>Li,fromScaling:()=>Oi,fromTranslation:()=>Ni,fromValues:()=>xi,identity:()=>yi,invert:()=>Ii,mul:()=>Ui,multiply:()=>gr,multiplyScalar:()=>Gi,multiplyScalarAndAdd:()=>ki,normalFromMat4:()=>Ti,projection:()=>Pi,rotate:()=>Ai,scale:()=>wi,set:()=>bi,str:()=>zi,sub:()=>Di,subtract:()=>vr,translate:()=>Si,transpose:()=>_i});function St(){var e=new V(9);return V!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function ui(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function gi(e){var t=new V(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function vi(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function xi(e,t,r,n,i,o,a,s,l){var c=new V(9);return c[0]=e,c[1]=t,c[2]=r,c[3]=n,c[4]=i,c[5]=o,c[6]=a,c[7]=s,c[8]=l,c}function bi(e,t,r,n,i,o,a,s,l,c){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e[4]=o,e[5]=a,e[6]=s,e[7]=l,e[8]=c,e}function yi(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function _i(e,t){if(e===t){var r=t[1],n=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function Ii(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8],p=d*a-s*c,m=-d*o+s*l,f=c*o-a*l,g=r*p+n*m+i*f;return g?(g=1/g,e[0]=p*g,e[1]=(-d*n+i*c)*g,e[2]=(s*n-i*a)*g,e[3]=m*g,e[4]=(d*r-i*l)*g,e[5]=(-s*r+i*o)*g,e[6]=f*g,e[7]=(-c*r+n*l)*g,e[8]=(a*r-n*o)*g,e):null}function Ci(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8];return e[0]=a*d-s*c,e[1]=i*c-n*d,e[2]=n*s-i*a,e[3]=s*l-o*d,e[4]=r*d-i*l,e[5]=i*o-r*s,e[6]=o*c-a*l,e[7]=n*l-r*c,e[8]=r*a-n*o,e}function Mi(e){var t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],c=e[8];return t*(c*o-a*l)+r*(-c*i+a*s)+n*(l*i-o*s)}function gr(e,t,r){var n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],l=t[5],c=t[6],d=t[7],p=t[8],m=r[0],f=r[1],g=r[2],v=r[3],u=r[4],x=r[5],b=r[6],_=r[7],y=r[8];return e[0]=m*n+f*a+g*c,e[1]=m*i+f*s+g*d,e[2]=m*o+f*l+g*p,e[3]=v*n+u*a+x*c,e[4]=v*i+u*s+x*d,e[5]=v*o+u*l+x*p,e[6]=b*n+_*a+y*c,e[7]=b*i+_*s+y*d,e[8]=b*o+_*l+y*p,e}function Si(e,t,r){var n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],l=t[5],c=t[6],d=t[7],p=t[8],m=r[0],f=r[1];return e[0]=n,e[1]=i,e[2]=o,e[3]=a,e[4]=s,e[5]=l,e[6]=m*n+f*a+c,e[7]=m*i+f*s+d,e[8]=m*o+f*l+p,e}function Ai(e,t,r){var n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],l=t[5],c=t[6],d=t[7],p=t[8],m=Math.sin(r),f=Math.cos(r);return e[0]=f*n+m*a,e[1]=f*i+m*s,e[2]=f*o+m*l,e[3]=f*a-m*n,e[4]=f*s-m*i,e[5]=f*l-m*o,e[6]=c,e[7]=d,e[8]=p,e}function wi(e,t,r){var n=r[0],i=r[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Ni(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e}function Li(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=-r,e[4]=n,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Oi(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Ri(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e}function Ei(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=r+r,s=n+n,l=i+i,c=r*a,d=n*a,p=n*s,m=i*a,f=i*s,g=i*l,v=o*a,u=o*s,x=o*l;return e[0]=1-p-g,e[3]=d-x,e[6]=m+u,e[1]=d+x,e[4]=1-c-g,e[7]=f-v,e[2]=m-u,e[5]=f+v,e[8]=1-c-p,e}function Ti(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8],p=t[9],m=t[10],f=t[11],g=t[12],v=t[13],u=t[14],x=t[15],b=r*s-n*a,_=r*l-i*a,y=r*c-o*a,C=n*l-i*s,I=n*c-o*s,E=i*c-o*l,N=d*v-p*g,R=d*u-m*g,M=d*x-f*g,T=p*u-m*v,P=p*x-f*v,F=m*x-f*u,A=b*F-_*P+y*T+C*M-I*R+E*N;return A?(A=1/A,e[0]=(s*F-l*P+c*T)*A,e[1]=(l*M-a*F-c*R)*A,e[2]=(a*P-s*M+c*N)*A,e[3]=(i*P-n*F-o*T)*A,e[4]=(r*F-i*M+o*R)*A,e[5]=(n*M-r*P-o*N)*A,e[6]=(v*E-u*I+x*C)*A,e[7]=(u*y-g*E-x*_)*A,e[8]=(g*I-v*y+x*b)*A,e):null}function Pi(e,t,r){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/r,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function zi(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function Fi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8])}function Vi(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e}function vr(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e}function Gi(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e}function ki(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e}function Xi(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]}function Bi(e,t){var r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],d=e[8],p=t[0],m=t[1],f=t[2],g=t[3],v=t[4],u=t[5],x=t[6],b=t[7],_=t[8];return Math.abs(r-p)<=w*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(n-m)<=w*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(i-f)<=w*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(o-g)<=w*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(a-v)<=w*Math.max(1,Math.abs(a),Math.abs(v))&&Math.abs(s-u)<=w*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(l-x)<=w*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(c-b)<=w*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(d-_)<=w*Math.max(1,Math.abs(d),Math.abs(_))}var Ui=gr,Di=vr;var ve={};de(ve,{add:()=>Lo,adjoint:()=>qi,clone:()=>Zi,copy:()=>Qi,create:()=>Wi,decompose:()=>uo,determinant:()=>Ki,equals:()=>To,exactEquals:()=>Eo,frob:()=>No,fromQuat:()=>xo,fromQuat2:()=>ho,fromRotation:()=>so,fromRotationTranslation:()=>yr,fromRotationTranslationScale:()=>go,fromRotationTranslationScaleOrigin:()=>vo,fromScaling:()=>ao,fromTranslation:()=>oo,fromValues:()=>Yi,fromXRotation:()=>lo,fromYRotation:()=>co,fromZRotation:()=>po,frustum:()=>bo,getRotation:()=>mo,getScaling:()=>_r,getTranslation:()=>fo,identity:()=>xr,invert:()=>ji,lookAt:()=>So,mul:()=>Po,multiply:()=>br,multiplyScalar:()=>Oo,multiplyScalarAndAdd:()=>Ro,ortho:()=>Co,orthoNO:()=>Cr,orthoZO:()=>Mo,perspective:()=>yo,perspectiveFromFieldOfView:()=>Io,perspectiveNO:()=>Ir,perspectiveZO:()=>_o,rotate:()=>to,rotateX:()=>ro,rotateY:()=>no,rotateZ:()=>io,scale:()=>eo,set:()=>Ji,str:()=>wo,sub:()=>zo,subtract:()=>Mr,targetTo:()=>Ao,translate:()=>$i,transpose:()=>Hi});function Wi(){var e=new V(16);return V!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Zi(e){var t=new V(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Qi(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Yi(e,t,r,n,i,o,a,s,l,c,d,p,m,f,g,v){var u=new V(16);return u[0]=e,u[1]=t,u[2]=r,u[3]=n,u[4]=i,u[5]=o,u[6]=a,u[7]=s,u[8]=l,u[9]=c,u[10]=d,u[11]=p,u[12]=m,u[13]=f,u[14]=g,u[15]=v,u}function Ji(e,t,r,n,i,o,a,s,l,c,d,p,m,f,g,v,u){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e[4]=o,e[5]=a,e[6]=s,e[7]=l,e[8]=c,e[9]=d,e[10]=p,e[11]=m,e[12]=f,e[13]=g,e[14]=v,e[15]=u,e}function xr(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Hi(e,t){if(e===t){var r=t[1],n=t[2],i=t[3],o=t[6],a=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=o,e[11]=t[14],e[12]=i,e[13]=a,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function ji(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8],p=t[9],m=t[10],f=t[11],g=t[12],v=t[13],u=t[14],x=t[15],b=r*s-n*a,_=r*l-i*a,y=r*c-o*a,C=n*l-i*s,I=n*c-o*s,E=i*c-o*l,N=d*v-p*g,R=d*u-m*g,M=d*x-f*g,T=p*u-m*v,P=p*x-f*v,F=m*x-f*u,A=b*F-_*P+y*T+C*M-I*R+E*N;return A?(A=1/A,e[0]=(s*F-l*P+c*T)*A,e[1]=(i*P-n*F-o*T)*A,e[2]=(v*E-u*I+x*C)*A,e[3]=(m*I-p*E-f*C)*A,e[4]=(l*M-a*F-c*R)*A,e[5]=(r*F-i*M+o*R)*A,e[6]=(u*y-g*E-x*_)*A,e[7]=(d*E-m*y+f*_)*A,e[8]=(a*P-s*M+c*N)*A,e[9]=(n*M-r*P-o*N)*A,e[10]=(g*I-v*y+x*b)*A,e[11]=(p*y-d*I-f*b)*A,e[12]=(s*R-a*T-l*N)*A,e[13]=(r*T-n*R+i*N)*A,e[14]=(v*_-g*C-u*b)*A,e[15]=(d*C-p*_+m*b)*A,e):null}function qi(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8],p=t[9],m=t[10],f=t[11],g=t[12],v=t[13],u=t[14],x=t[15],b=r*s-n*a,_=r*l-i*a,y=r*c-o*a,C=n*l-i*s,I=n*c-o*s,E=i*c-o*l,N=d*v-p*g,R=d*u-m*g,M=d*x-f*g,T=p*u-m*v,P=p*x-f*v,F=m*x-f*u;return e[0]=s*F-l*P+c*T,e[1]=i*P-n*F-o*T,e[2]=v*E-u*I+x*C,e[3]=m*I-p*E-f*C,e[4]=l*M-a*F-c*R,e[5]=r*F-i*M+o*R,e[6]=u*y-g*E-x*_,e[7]=d*E-m*y+f*_,e[8]=a*P-s*M+c*N,e[9]=n*M-r*P-o*N,e[10]=g*I-v*y+x*b,e[11]=p*y-d*I-f*b,e[12]=s*R-a*T-l*N,e[13]=r*T-n*R+i*N,e[14]=v*_-g*C-u*b,e[15]=d*C-p*_+m*b,e}function Ki(e){var t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],c=e[8],d=e[9],p=e[10],m=e[11],f=e[12],g=e[13],v=e[14],u=e[15],x=t*a-r*o,b=t*s-n*o,_=r*s-n*a,y=c*g-d*f,C=c*v-p*f,I=d*v-p*g,E=t*I-r*C+n*y,N=o*I-a*C+s*y,R=c*_-d*b+p*x,M=f*_-g*b+v*x;return l*E-i*N+u*R-m*M}function br(e,t,r){var n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],l=t[5],c=t[6],d=t[7],p=t[8],m=t[9],f=t[10],g=t[11],v=t[12],u=t[13],x=t[14],b=t[15],_=r[0],y=r[1],C=r[2],I=r[3];return e[0]=_*n+y*s+C*p+I*v,e[1]=_*i+y*l+C*m+I*u,e[2]=_*o+y*c+C*f+I*x,e[3]=_*a+y*d+C*g+I*b,_=r[4],y=r[5],C=r[6],I=r[7],e[4]=_*n+y*s+C*p+I*v,e[5]=_*i+y*l+C*m+I*u,e[6]=_*o+y*c+C*f+I*x,e[7]=_*a+y*d+C*g+I*b,_=r[8],y=r[9],C=r[10],I=r[11],e[8]=_*n+y*s+C*p+I*v,e[9]=_*i+y*l+C*m+I*u,e[10]=_*o+y*c+C*f+I*x,e[11]=_*a+y*d+C*g+I*b,_=r[12],y=r[13],C=r[14],I=r[15],e[12]=_*n+y*s+C*p+I*v,e[13]=_*i+y*l+C*m+I*u,e[14]=_*o+y*c+C*f+I*x,e[15]=_*a+y*d+C*g+I*b,e}function $i(e,t,r){var n=r[0],i=r[1],o=r[2],a,s,l,c,d,p,m,f,g,v,u,x;return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*o+t[12],e[13]=t[1]*n+t[5]*i+t[9]*o+t[13],e[14]=t[2]*n+t[6]*i+t[10]*o+t[14],e[15]=t[3]*n+t[7]*i+t[11]*o+t[15]):(a=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],f=t[7],g=t[8],v=t[9],u=t[10],x=t[11],e[0]=a,e[1]=s,e[2]=l,e[3]=c,e[4]=d,e[5]=p,e[6]=m,e[7]=f,e[8]=g,e[9]=v,e[10]=u,e[11]=x,e[12]=a*n+d*i+g*o+t[12],e[13]=s*n+p*i+v*o+t[13],e[14]=l*n+m*i+u*o+t[14],e[15]=c*n+f*i+x*o+t[15]),e}function eo(e,t,r){var n=r[0],i=r[1],o=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*o,e[9]=t[9]*o,e[10]=t[10]*o,e[11]=t[11]*o,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function to(e,t,r,n){var i=n[0],o=n[1],a=n[2],s=Math.sqrt(i*i+o*o+a*a),l,c,d,p,m,f,g,v,u,x,b,_,y,C,I,E,N,R,M,T,P,F,A,W;return s<w?null:(s=1/s,i*=s,o*=s,a*=s,l=Math.sin(r),c=Math.cos(r),d=1-c,p=t[0],m=t[1],f=t[2],g=t[3],v=t[4],u=t[5],x=t[6],b=t[7],_=t[8],y=t[9],C=t[10],I=t[11],E=i*i*d+c,N=o*i*d+a*l,R=a*i*d-o*l,M=i*o*d-a*l,T=o*o*d+c,P=a*o*d+i*l,F=i*a*d+o*l,A=o*a*d-i*l,W=a*a*d+c,e[0]=p*E+v*N+_*R,e[1]=m*E+u*N+y*R,e[2]=f*E+x*N+C*R,e[3]=g*E+b*N+I*R,e[4]=p*M+v*T+_*P,e[5]=m*M+u*T+y*P,e[6]=f*M+x*T+C*P,e[7]=g*M+b*T+I*P,e[8]=p*F+v*A+_*W,e[9]=m*F+u*A+y*W,e[10]=f*F+x*A+C*W,e[11]=g*F+b*A+I*W,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function ro(e,t,r){var n=Math.sin(r),i=Math.cos(r),o=t[4],a=t[5],s=t[6],l=t[7],c=t[8],d=t[9],p=t[10],m=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=o*i+c*n,e[5]=a*i+d*n,e[6]=s*i+p*n,e[7]=l*i+m*n,e[8]=c*i-o*n,e[9]=d*i-a*n,e[10]=p*i-s*n,e[11]=m*i-l*n,e}function no(e,t,r){var n=Math.sin(r),i=Math.cos(r),o=t[0],a=t[1],s=t[2],l=t[3],c=t[8],d=t[9],p=t[10],m=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=o*i-c*n,e[1]=a*i-d*n,e[2]=s*i-p*n,e[3]=l*i-m*n,e[8]=o*n+c*i,e[9]=a*n+d*i,e[10]=s*n+p*i,e[11]=l*n+m*i,e}function io(e,t,r){var n=Math.sin(r),i=Math.cos(r),o=t[0],a=t[1],s=t[2],l=t[3],c=t[4],d=t[5],p=t[6],m=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=o*i+c*n,e[1]=a*i+d*n,e[2]=s*i+p*n,e[3]=l*i+m*n,e[4]=c*i-o*n,e[5]=d*i-a*n,e[6]=p*i-s*n,e[7]=m*i-l*n,e}function oo(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function ao(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function so(e,t,r){var n=r[0],i=r[1],o=r[2],a=Math.sqrt(n*n+i*i+o*o),s,l,c;return a<w?null:(a=1/a,n*=a,i*=a,o*=a,s=Math.sin(t),l=Math.cos(t),c=1-l,e[0]=n*n*c+l,e[1]=i*n*c+o*s,e[2]=o*n*c-i*s,e[3]=0,e[4]=n*i*c-o*s,e[5]=i*i*c+l,e[6]=o*i*c+n*s,e[7]=0,e[8]=n*o*c+i*s,e[9]=i*o*c-n*s,e[10]=o*o*c+l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function lo(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function co(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function po(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function yr(e,t,r){var n=t[0],i=t[1],o=t[2],a=t[3],s=n+n,l=i+i,c=o+o,d=n*s,p=n*l,m=n*c,f=i*l,g=i*c,v=o*c,u=a*s,x=a*l,b=a*c;return e[0]=1-(f+v),e[1]=p+b,e[2]=m-x,e[3]=0,e[4]=p-b,e[5]=1-(d+v),e[6]=g+u,e[7]=0,e[8]=m+x,e[9]=g-u,e[10]=1-(d+f),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function ho(e,t){var r=new V(3),n=-t[0],i=-t[1],o=-t[2],a=t[3],s=t[4],l=t[5],c=t[6],d=t[7],p=n*n+i*i+o*o+a*a;return p>0?(r[0]=(s*a+d*n+l*o-c*i)*2/p,r[1]=(l*a+d*i+c*n-s*o)*2/p,r[2]=(c*a+d*o+s*i-l*n)*2/p):(r[0]=(s*a+d*n+l*o-c*i)*2,r[1]=(l*a+d*i+c*n-s*o)*2,r[2]=(c*a+d*o+s*i-l*n)*2),yr(e,t,r),e}function fo(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function _r(e,t){var r=t[0],n=t[1],i=t[2],o=t[4],a=t[5],s=t[6],l=t[8],c=t[9],d=t[10];return e[0]=Math.sqrt(r*r+n*n+i*i),e[1]=Math.sqrt(o*o+a*a+s*s),e[2]=Math.sqrt(l*l+c*c+d*d),e}function mo(e,t){var r=new V(3);_r(r,t);var n=1/r[0],i=1/r[1],o=1/r[2],a=t[0]*n,s=t[1]*i,l=t[2]*o,c=t[4]*n,d=t[5]*i,p=t[6]*o,m=t[8]*n,f=t[9]*i,g=t[10]*o,v=a+d+g,u=0;return v>0?(u=Math.sqrt(v+1)*2,e[3]=.25*u,e[0]=(p-f)/u,e[1]=(m-l)/u,e[2]=(s-c)/u):a>d&&a>g?(u=Math.sqrt(1+a-d-g)*2,e[3]=(p-f)/u,e[0]=.25*u,e[1]=(s+c)/u,e[2]=(m+l)/u):d>g?(u=Math.sqrt(1+d-a-g)*2,e[3]=(m-l)/u,e[0]=(s+c)/u,e[1]=.25*u,e[2]=(p+f)/u):(u=Math.sqrt(1+g-a-d)*2,e[3]=(s-c)/u,e[0]=(m+l)/u,e[1]=(p+f)/u,e[2]=.25*u),e}function uo(e,t,r,n){t[0]=n[12],t[1]=n[13],t[2]=n[14];var i=n[0],o=n[1],a=n[2],s=n[4],l=n[5],c=n[6],d=n[8],p=n[9],m=n[10];r[0]=Math.sqrt(i*i+o*o+a*a),r[1]=Math.sqrt(s*s+l*l+c*c),r[2]=Math.sqrt(d*d+p*p+m*m);var f=1/r[0],g=1/r[1],v=1/r[2],u=i*f,x=o*g,b=a*v,_=s*f,y=l*g,C=c*v,I=d*f,E=p*g,N=m*v,R=u+y+N,M=0;return R>0?(M=Math.sqrt(R+1)*2,e[3]=.25*M,e[0]=(C-E)/M,e[1]=(I-b)/M,e[2]=(x-_)/M):u>y&&u>N?(M=Math.sqrt(1+u-y-N)*2,e[3]=(C-E)/M,e[0]=.25*M,e[1]=(x+_)/M,e[2]=(I+b)/M):y>N?(M=Math.sqrt(1+y-u-N)*2,e[3]=(I-b)/M,e[0]=(x+_)/M,e[1]=.25*M,e[2]=(C+E)/M):(M=Math.sqrt(1+N-u-y)*2,e[3]=(x-_)/M,e[0]=(I+b)/M,e[1]=(C+E)/M,e[2]=.25*M),e}function go(e,t,r,n){var i=t[0],o=t[1],a=t[2],s=t[3],l=i+i,c=o+o,d=a+a,p=i*l,m=i*c,f=i*d,g=o*c,v=o*d,u=a*d,x=s*l,b=s*c,_=s*d,y=n[0],C=n[1],I=n[2];return e[0]=(1-(g+u))*y,e[1]=(m+_)*y,e[2]=(f-b)*y,e[3]=0,e[4]=(m-_)*C,e[5]=(1-(p+u))*C,e[6]=(v+x)*C,e[7]=0,e[8]=(f+b)*I,e[9]=(v-x)*I,e[10]=(1-(p+g))*I,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function vo(e,t,r,n,i){var o=t[0],a=t[1],s=t[2],l=t[3],c=o+o,d=a+a,p=s+s,m=o*c,f=o*d,g=o*p,v=a*d,u=a*p,x=s*p,b=l*c,_=l*d,y=l*p,C=n[0],I=n[1],E=n[2],N=i[0],R=i[1],M=i[2],T=(1-(v+x))*C,P=(f+y)*C,F=(g-_)*C,A=(f-y)*I,W=(1-(m+x))*I,ce=(u+b)*I,pe=(g+_)*E,Yt=(u-b)*E,Jt=(1-(m+v))*E;return e[0]=T,e[1]=P,e[2]=F,e[3]=0,e[4]=A,e[5]=W,e[6]=ce,e[7]=0,e[8]=pe,e[9]=Yt,e[10]=Jt,e[11]=0,e[12]=r[0]+N-(T*N+A*R+pe*M),e[13]=r[1]+R-(P*N+W*R+Yt*M),e[14]=r[2]+M-(F*N+ce*R+Jt*M),e[15]=1,e}function xo(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=r+r,s=n+n,l=i+i,c=r*a,d=n*a,p=n*s,m=i*a,f=i*s,g=i*l,v=o*a,u=o*s,x=o*l;return e[0]=1-p-g,e[1]=d+x,e[2]=m-u,e[3]=0,e[4]=d-x,e[5]=1-c-g,e[6]=f+v,e[7]=0,e[8]=m+u,e[9]=f-v,e[10]=1-c-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function bo(e,t,r,n,i,o,a){var s=1/(r-t),l=1/(i-n),c=1/(o-a);return e[0]=o*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(i+n)*l,e[10]=(a+o)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=a*o*2*c,e[15]=0,e}function Ir(e,t,r,n,i){var o=1/Math.tan(t/2);if(e[0]=o/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var a=1/(n-i);e[10]=(i+n)*a,e[14]=2*i*n*a}else e[10]=-1,e[14]=-2*n;return e}var yo=Ir;function _o(e,t,r,n,i){var o=1/Math.tan(t/2);if(e[0]=o/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var a=1/(n-i);e[10]=i*a,e[14]=i*n*a}else e[10]=-1,e[14]=-n;return e}function Io(e,t,r,n){var i=Math.tan(t.upDegrees*Math.PI/180),o=Math.tan(t.downDegrees*Math.PI/180),a=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),l=2/(a+s),c=2/(i+o);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-((a-s)*l*.5),e[9]=(i-o)*c*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}function Cr(e,t,r,n,i,o,a){var s=1/(t-r),l=1/(n-i),c=1/(o-a);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+r)*s,e[13]=(i+n)*l,e[14]=(a+o)*c,e[15]=1,e}var Co=Cr;function Mo(e,t,r,n,i,o,a){var s=1/(t-r),l=1/(n-i),c=1/(o-a);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(t+r)*s,e[13]=(i+n)*l,e[14]=o*c,e[15]=1,e}function So(e,t,r,n){var i,o,a,s,l,c,d,p,m,f,g=t[0],v=t[1],u=t[2],x=n[0],b=n[1],_=n[2],y=r[0],C=r[1],I=r[2];return Math.abs(g-y)<w&&Math.abs(v-C)<w&&Math.abs(u-I)<w?xr(e):(d=g-y,p=v-C,m=u-I,f=1/Math.sqrt(d*d+p*p+m*m),d*=f,p*=f,m*=f,i=b*m-_*p,o=_*d-x*m,a=x*p-b*d,f=Math.sqrt(i*i+o*o+a*a),f?(f=1/f,i*=f,o*=f,a*=f):(i=0,o=0,a=0),s=p*a-m*o,l=m*i-d*a,c=d*o-p*i,f=Math.sqrt(s*s+l*l+c*c),f?(f=1/f,s*=f,l*=f,c*=f):(s=0,l=0,c=0),e[0]=i,e[1]=s,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=p,e[7]=0,e[8]=a,e[9]=c,e[10]=m,e[11]=0,e[12]=-(i*g+o*v+a*u),e[13]=-(s*g+l*v+c*u),e[14]=-(d*g+p*v+m*u),e[15]=1,e)}function Ao(e,t,r,n){var i=t[0],o=t[1],a=t[2],s=n[0],l=n[1],c=n[2],d=i-r[0],p=o-r[1],m=a-r[2],f=d*d+p*p+m*m;f>0&&(f=1/Math.sqrt(f),d*=f,p*=f,m*=f);var g=l*m-c*p,v=c*d-s*m,u=s*p-l*d;return f=g*g+v*v+u*u,f>0&&(f=1/Math.sqrt(f),g*=f,v*=f,u*=f),e[0]=g,e[1]=v,e[2]=u,e[3]=0,e[4]=p*u-m*v,e[5]=m*g-d*u,e[6]=d*v-p*g,e[7]=0,e[8]=d,e[9]=p,e[10]=m,e[11]=0,e[12]=i,e[13]=o,e[14]=a,e[15]=1,e}function wo(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function No(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])}function Lo(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e}function Mr(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}function Oo(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e}function Ro(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e[9]=t[9]+r[9]*n,e[10]=t[10]+r[10]*n,e[11]=t[11]+r[11]*n,e[12]=t[12]+r[12]*n,e[13]=t[13]+r[13]*n,e[14]=t[14]+r[14]*n,e[15]=t[15]+r[15]*n,e}function Eo(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function To(e,t){var r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],d=e[8],p=e[9],m=e[10],f=e[11],g=e[12],v=e[13],u=e[14],x=e[15],b=t[0],_=t[1],y=t[2],C=t[3],I=t[4],E=t[5],N=t[6],R=t[7],M=t[8],T=t[9],P=t[10],F=t[11],A=t[12],W=t[13],ce=t[14],pe=t[15];return Math.abs(r-b)<=w*Math.max(1,Math.abs(r),Math.abs(b))&&Math.abs(n-_)<=w*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(i-y)<=w*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(o-C)<=w*Math.max(1,Math.abs(o),Math.abs(C))&&Math.abs(a-I)<=w*Math.max(1,Math.abs(a),Math.abs(I))&&Math.abs(s-E)<=w*Math.max(1,Math.abs(s),Math.abs(E))&&Math.abs(l-N)<=w*Math.max(1,Math.abs(l),Math.abs(N))&&Math.abs(c-R)<=w*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(d-M)<=w*Math.max(1,Math.abs(d),Math.abs(M))&&Math.abs(p-T)<=w*Math.max(1,Math.abs(p),Math.abs(T))&&Math.abs(m-P)<=w*Math.max(1,Math.abs(m),Math.abs(P))&&Math.abs(f-F)<=w*Math.max(1,Math.abs(f),Math.abs(F))&&Math.abs(g-A)<=w*Math.max(1,Math.abs(g),Math.abs(A))&&Math.abs(v-W)<=w*Math.max(1,Math.abs(v),Math.abs(W))&&Math.abs(u-ce)<=w*Math.max(1,Math.abs(u),Math.abs(ce))&&Math.abs(x-pe)<=w*Math.max(1,Math.abs(x),Math.abs(pe))}var Po=br,zo=Mr;var B={};de(B,{add:()=>Fa,calculateW:()=>Sa,clone:()=>Ea,conjugate:()=>La,copy:()=>Pa,create:()=>Lt,dot:()=>jr,equals:()=>Ua,exactEquals:()=>Ba,exp:()=>Qr,fromEuler:()=>Oa,fromMat3:()=>Jr,fromValues:()=>Ta,getAngle:()=>_a,getAxisAngle:()=>ya,identity:()=>ba,invert:()=>Na,len:()=>ka,length:()=>qr,lerp:()=>Ga,ln:()=>Yr,mul:()=>Va,multiply:()=>Zr,normalize:()=>Ot,pow:()=>Aa,random:()=>wa,rotateX:()=>Ia,rotateY:()=>Ca,rotateZ:()=>Ma,rotationTo:()=>Da,scale:()=>Hr,set:()=>za,setAxes:()=>Za,setAxisAngle:()=>Wr,slerp:()=>Ye,sqlerp:()=>Wa,sqrLen:()=>Xa,squaredLength:()=>Kr,str:()=>Ra});var L={};de(L,{add:()=>ko,angle:()=>aa,bezier:()=>Ko,ceil:()=>Xo,clone:()=>Fo,copy:()=>Vo,create:()=>Ze,cross:()=>be,dist:()=>ma,distance:()=>Lr,div:()=>fa,divide:()=>Nr,dot:()=>xe,equals:()=>pa,exactEquals:()=>ca,floor:()=>Bo,forEach:()=>va,fromValues:()=>Qe,hermite:()=>qo,inverse:()=>Jo,len:()=>wt,length:()=>Sr,lerp:()=>Ho,max:()=>Do,min:()=>Uo,mul:()=>ha,multiply:()=>wr,negate:()=>Yo,normalize:()=>At,random:()=>$o,rotateX:()=>na,rotateY:()=>ia,rotateZ:()=>oa,round:()=>Wo,scale:()=>Zo,scaleAndAdd:()=>Qo,set:()=>Go,slerp:()=>jo,sqrDist:()=>ua,sqrLen:()=>ga,squaredDistance:()=>Or,squaredLength:()=>Rr,str:()=>la,sub:()=>da,subtract:()=>Ar,transformMat3:()=>ta,transformMat4:()=>ea,transformQuat:()=>ra,zero:()=>sa});function Ze(){var e=new V(3);return V!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Fo(e){var t=new V(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Sr(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)}function Qe(e,t,r){var n=new V(3);return n[0]=e,n[1]=t,n[2]=r,n}function Vo(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Go(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function ko(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function Ar(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function wr(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function Nr(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function Xo(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function Bo(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function Uo(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function Do(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function Wo(e,t){return e[0]=ae(t[0]),e[1]=ae(t[1]),e[2]=ae(t[2]),e}function Zo(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function Qo(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function Lr(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(r*r+n*n+i*i)}function Or(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return r*r+n*n+i*i}function Rr(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}function Yo(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function Jo(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function At(e,t){var r=t[0],n=t[1],i=t[2],o=r*r+n*n+i*i;return o>0&&(o=1/Math.sqrt(o)),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}function xe(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function be(e,t,r){var n=t[0],i=t[1],o=t[2],a=r[0],s=r[1],l=r[2];return e[0]=i*l-o*s,e[1]=o*a-n*l,e[2]=n*s-i*a,e}function Ho(e,t,r,n){var i=t[0],o=t[1],a=t[2];return e[0]=i+n*(r[0]-i),e[1]=o+n*(r[1]-o),e[2]=a+n*(r[2]-a),e}function jo(e,t,r,n){var i=Math.acos(Math.min(Math.max(xe(t,r),-1),1)),o=Math.sin(i),a=Math.sin((1-n)*i)/o,s=Math.sin(n*i)/o;return e[0]=a*t[0]+s*r[0],e[1]=a*t[1]+s*r[1],e[2]=a*t[2]+s*r[2],e}function qo(e,t,r,n,i,o){var a=o*o,s=a*(2*o-3)+1,l=a*(o-2)+o,c=a*(o-1),d=a*(3-2*o);return e[0]=t[0]*s+r[0]*l+n[0]*c+i[0]*d,e[1]=t[1]*s+r[1]*l+n[1]*c+i[1]*d,e[2]=t[2]*s+r[2]*l+n[2]*c+i[2]*d,e}function Ko(e,t,r,n,i,o){var a=1-o,s=a*a,l=o*o,c=s*a,d=3*o*s,p=3*l*a,m=l*o;return e[0]=t[0]*c+r[0]*d+n[0]*p+i[0]*m,e[1]=t[1]*c+r[1]*d+n[1]*p+i[1]*m,e[2]=t[2]*c+r[2]*d+n[2]*p+i[2]*m,e}function $o(e,t){t=t===void 0?1:t;var r=H()*2*Math.PI,n=H()*2-1,i=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*i,e[1]=Math.sin(r)*i,e[2]=n*t,e}function ea(e,t,r){var n=t[0],i=t[1],o=t[2],a=r[3]*n+r[7]*i+r[11]*o+r[15];return a=a||1,e[0]=(r[0]*n+r[4]*i+r[8]*o+r[12])/a,e[1]=(r[1]*n+r[5]*i+r[9]*o+r[13])/a,e[2]=(r[2]*n+r[6]*i+r[10]*o+r[14])/a,e}function ta(e,t,r){var n=t[0],i=t[1],o=t[2];return e[0]=n*r[0]+i*r[3]+o*r[6],e[1]=n*r[1]+i*r[4]+o*r[7],e[2]=n*r[2]+i*r[5]+o*r[8],e}function ra(e,t,r){var n=r[0],i=r[1],o=r[2],a=r[3],s=t[0],l=t[1],c=t[2],d=i*c-o*l,p=o*s-n*c,m=n*l-i*s;return d=d+d,p=p+p,m=m+m,e[0]=s+a*d+i*m-o*p,e[1]=l+a*p+o*d-n*m,e[2]=c+a*m+n*p-i*d,e}function na(e,t,r,n){var i=[],o=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],o[0]=i[0],o[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),o[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function ia(e,t,r,n){var i=[],o=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],o[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),o[1]=i[1],o[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function oa(e,t,r,n){var i=[],o=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],o[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),o[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),o[2]=i[2],e[0]=o[0]+r[0],e[1]=o[1]+r[1],e[2]=o[2]+r[2],e}function aa(e,t){var r=e[0],n=e[1],i=e[2],o=t[0],a=t[1],s=t[2],l=Math.sqrt((r*r+n*n+i*i)*(o*o+a*a+s*s)),c=l&&xe(e,t)/l;return Math.acos(Math.min(Math.max(c,-1),1))}function sa(e){return e[0]=0,e[1]=0,e[2]=0,e}function la(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function ca(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function pa(e,t){var r=e[0],n=e[1],i=e[2],o=t[0],a=t[1],s=t[2];return Math.abs(r-o)<=w*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(n-a)<=w*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-s)<=w*Math.max(1,Math.abs(i),Math.abs(s))}var da=Ar,ha=wr,fa=Nr,ma=Lr,ua=Or,wt=Sr,ga=Rr,va=function(){var e=Ze();return function(t,r,n,i,o,a){var s,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],o(e,e,a),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();function xa(){var e=new V(4);return V!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Er(e){var t=new V(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Tr(e,t,r,n){var i=new V(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function Pr(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function zr(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function Fr(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function Vr(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function Gr(e){var t=e[0],r=e[1],n=e[2],i=e[3];return Math.sqrt(t*t+r*r+n*n+i*i)}function kr(e){var t=e[0],r=e[1],n=e[2],i=e[3];return t*t+r*r+n*n+i*i}function Xr(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=r*r+n*n+i*i+o*o;return a>0&&(a=1/Math.sqrt(a)),e[0]=r*a,e[1]=n*a,e[2]=i*a,e[3]=o*a,e}function Nt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Br(e,t,r,n){var i=t[0],o=t[1],a=t[2],s=t[3];return e[0]=i+n*(r[0]-i),e[1]=o+n*(r[1]-o),e[2]=a+n*(r[2]-a),e[3]=s+n*(r[3]-s),e}function Ur(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}var Ws=function(){var e=xa();return function(t,r,n,i,o,a){var s,l;for(r||(r=4),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],o(e,e,a),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();function Lt(){var e=new V(4);return V!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function ba(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Wr(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function ya(e,t){var r=Math.acos(t[3])*2,n=Math.sin(r/2);return n>w?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function _a(e,t){var r=jr(e,t);return Math.acos(2*r*r-1)}function Zr(e,t,r){var n=t[0],i=t[1],o=t[2],a=t[3],s=r[0],l=r[1],c=r[2],d=r[3];return e[0]=n*d+a*s+i*c-o*l,e[1]=i*d+a*l+o*s-n*c,e[2]=o*d+a*c+n*l-i*s,e[3]=a*d-n*s-i*l-o*c,e}function Ia(e,t,r){r*=.5;var n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+a*s,e[1]=i*l+o*s,e[2]=o*l-i*s,e[3]=a*l-n*s,e}function Ca(e,t,r){r*=.5;var n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l-o*s,e[1]=i*l+a*s,e[2]=o*l+n*s,e[3]=a*l-i*s,e}function Ma(e,t,r){r*=.5;var n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+i*s,e[1]=i*l-n*s,e[2]=o*l+a*s,e[3]=a*l-o*s,e}function Sa(e,t){var r=t[0],n=t[1],i=t[2];return e[0]=r,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),e}function Qr(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=Math.sqrt(r*r+n*n+i*i),s=Math.exp(o),l=a>0?s*Math.sin(a)/a:0;return e[0]=r*l,e[1]=n*l,e[2]=i*l,e[3]=s*Math.cos(a),e}function Yr(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=Math.sqrt(r*r+n*n+i*i),s=a>0?Math.atan2(a,o)/a:0;return e[0]=r*s,e[1]=n*s,e[2]=i*s,e[3]=.5*Math.log(r*r+n*n+i*i+o*o),e}function Aa(e,t,r){return Yr(e,t),Hr(e,e,r),Qr(e,e),e}function Ye(e,t,r,n){var i=t[0],o=t[1],a=t[2],s=t[3],l=r[0],c=r[1],d=r[2],p=r[3],m,f,g,v,u;return f=i*l+o*c+a*d+s*p,f<0&&(f=-f,l=-l,c=-c,d=-d,p=-p),1-f>w?(m=Math.acos(f),g=Math.sin(m),v=Math.sin((1-n)*m)/g,u=Math.sin(n*m)/g):(v=1-n,u=n),e[0]=v*i+u*l,e[1]=v*o+u*c,e[2]=v*a+u*d,e[3]=v*s+u*p,e}function wa(e){var t=H(),r=H(),n=H(),i=Math.sqrt(1-t),o=Math.sqrt(t);return e[0]=i*Math.sin(2*Math.PI*r),e[1]=i*Math.cos(2*Math.PI*r),e[2]=o*Math.sin(2*Math.PI*n),e[3]=o*Math.cos(2*Math.PI*n),e}function Na(e,t){var r=t[0],n=t[1],i=t[2],o=t[3],a=r*r+n*n+i*i+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-n*s,e[2]=-i*s,e[3]=o*s,e}function La(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Jr(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var o=(i+1)%3,a=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[o*3+o]-t[a*3+a]+1),e[i]=.5*n,n=.5/n,e[3]=(t[o*3+a]-t[a*3+o])*n,e[o]=(t[o*3+i]+t[i*3+o])*n,e[a]=(t[a*3+i]+t[i*3+a])*n}return e}function Oa(e,t,r,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:Mt,o=Math.PI/360;t*=o,n*=o,r*=o;var a=Math.sin(t),s=Math.cos(t),l=Math.sin(r),c=Math.cos(r),d=Math.sin(n),p=Math.cos(n);switch(i){case"xyz":e[0]=a*c*p+s*l*d,e[1]=s*l*p-a*c*d,e[2]=s*c*d+a*l*p,e[3]=s*c*p-a*l*d;break;case"xzy":e[0]=a*c*p-s*l*d,e[1]=s*l*p-a*c*d,e[2]=s*c*d+a*l*p,e[3]=s*c*p+a*l*d;break;case"yxz":e[0]=a*c*p+s*l*d,e[1]=s*l*p-a*c*d,e[2]=s*c*d-a*l*p,e[3]=s*c*p+a*l*d;break;case"yzx":e[0]=a*c*p+s*l*d,e[1]=s*l*p+a*c*d,e[2]=s*c*d-a*l*p,e[3]=s*c*p-a*l*d;break;case"zxy":e[0]=a*c*p-s*l*d,e[1]=s*l*p+a*c*d,e[2]=s*c*d+a*l*p,e[3]=s*c*p-a*l*d;break;case"zyx":e[0]=a*c*p-s*l*d,e[1]=s*l*p+a*c*d,e[2]=s*c*d-a*l*p,e[3]=s*c*p+a*l*d;break;default:throw new Error("Unknown angle order "+i)}return e}function Ra(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var Ea=Er,Ta=Tr,Pa=Pr,za=zr,Fa=Fr,Va=Zr,Hr=Vr,jr=Nt,Ga=Br,qr=Gr,ka=qr,Kr=kr,Xa=Kr,Ot=Xr,Ba=Ur;function Ua(e,t){return Math.abs(Nt(e,t))>=1-w}var Da=function(){var e=Ze(),t=Qe(1,0,0),r=Qe(0,1,0);return function(n,i,o){var a=xe(i,o);return a<-.999999?(be(e,t,i),wt(e)<1e-6&&be(e,r,i),At(e,e),Wr(n,e,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(be(e,i,o),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+a,Ot(n,n))}}(),Wa=function(){var e=Lt(),t=Lt();return function(r,n,i,o,a,s){return Ye(e,n,a,s),Ye(t,i,o,s),Ye(r,e,t,2*s*(1-s)),r}}(),Za=function(){var e=St();return function(t,r,n,i){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],Ot(t,Jr(t,e))}}();function Ya(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillRect(0,0,255,255);let r=new Uint8ClampedArray(256*4);for(let n=0;n<256;n++){for(let o=0;o<256*4;o++)r[o]=Math.floor(Math.random()*256);let i=new ImageData(r,256,1);t.putImageData(i,0,n)}return t}var $r=Ya();var Ja=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],tl=B.create();function Ha(e,t){return e===t.INVALID_ENUM?"Invalid enum":e===t.INVALID_VALUE?"Invalid value":e===t.INVALID_OPERATION?"Invalid operation":e===t.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":e===t.OUT_OF_MEMORY?"Out of memory":e===t.CONTEXT_LOST_WEBGL?"Context lost WebGL":e===t.NO_ERROR?"No error":`Unknown error ${e}`}var ja=1,qa=2,Ka=4,$a=8,es=16;function ye(e,t){return e?t:0}var _e=class e{gl;shader;positionBuffer;uMaterials;uParameters;uLights;uNumLights;uCameraPosition;uCameraFov;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uShadowSharpness;uNoise;noiseTexture;maxMarchingSteps=255;epsilon=.001;shadowSharpness=128;enableShadows=!0;enableShowMarches=!1;enableDepth=!1;enableNormals=!1;enableToLightNormals=!1;enableSoftShadows=!0;canvasScale=1;prevMaterials;prevLights;prevParameters;prevShaderText;constructor(t,r,n,i,o,a,s,l,c,d,p,m,f,g,v,u,x,b){this.gl=t,this.shader=r,this.prevShaderText=n,this.positionBuffer=i,this.uMaterials=s,this.uParameters=l,this.uLights=o,this.uNumLights=a,this.uCameraPosition=c,this.uCameraFov=d,this.uCameraMatrix=p,this.uAspectRatio=m,this.uMaxMarchingSteps=f,this.uEpsilon=g,this.uFlags=v,this.uShadowSharpness=u,this.uNoise=x,this.noiseTexture=b}destroy(){this.gl.deleteProgram(this.shader.program)}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}resizeCanvas=(t,r)=>{let n=t*this.canvasScale,i=r*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=i,this.gl.viewport(0,0,n,i);let o=n/i;this.gl.uniform1f(this.uAspectRatio,o)};render(t,r){this.gl.useProgram(this.shader.program),this.prevLights!==t.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,t.getLightDataArray()),this.gl.uniform1i(this.uNumLights,t.getNumLights()),this.prevLights=t.getLights()),this.prevMaterials!==t.getMaterials()&&(this.prevMaterials=t.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,t.getMaterialDataArray())),this.prevParameters!==t.getParameters()&&(this.prevParameters=t.getParameters(),console.info("Rendering new parameters",this.prevParameters),this.gl.uniform1fv(this.uParameters,this.prevParameters));let n=0;n|=ye(this.enableShadows,ja),n|=ye(this.enableDepth,Ka),n|=ye(this.enableNormals,$a),n|=ye(this.enableShowMarches,qa),n|=ye(this.enableToLightNormals,es),this.gl.uniform1i(this.uFlags,n),this.gl.uniform1f(this.uShadowSharpness,this.shadowSharpness),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3fv(this.uCameraPosition,r.position),this.gl.uniform1f(this.uCameraFov,r.fovZ),this.gl.uniformMatrix3fv(this.uCameraMatrix,!1,r.getCameraRotation()),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(t,r){let n=t.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let i=n.createBuffer();if(i==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(Ja),n.STATIC_DRAW);let o={"assembled-shader":r,"sdf-functions":fr,"raymarch-functions":mr},a=ge.create(n,o,hr,ur);n.useProgram(a.program);let s=this.getAttribute(n,a,"aPosition");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let l=this.getUniform(n,a,"uCameraMatrix"),c=this.getUniform(n,a,"uCameraPosition"),d=this.getUniform(n,a,"uCameraFov"),p=this.getUniform(n,a,"uAspectRatio"),m=this.getUniform(n,a,"uMaterials"),f=this.getUniform(n,a,"uLights"),g=this.getUniform(n,a,"uNumLights"),v=this.getUniform(n,a,"uParams"),u=this.getUniform(n,a,"uMaxMarchingSteps"),x=this.getUniform(n,a,"uEpsilon"),b=this.getUniform(n,a,"uFlags"),_=this.getUniform(n,a,"uShadowSharpness"),y=this.getUniform(n,a,"uNoise"),C=n.createTexture(),I=$r;return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,C),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,256,256,0,n.RGBA,n.UNSIGNED_BYTE,I.canvas),this.checkError(n),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.uniform1i(y,0),this.checkError(n),new e(n,a,r,i,f,g,m,v,c,d,l,p,u,x,b,_,y,C)}static checkError(t){let r=t.getError();r!=t.NO_ERROR&&console.error(`GL Error: ${Ha(r,t)}`)}static getAttribute(t,r,n){let i=t.getAttribLocation(r.program,n);if(i<0)throw new Error(`Unable to find attribute ${n}`);return i}static getUniform(t,r,n){let i=t.getUniformLocation(r.program,n);return i==null,i}};var nn=jt(en());var Je=j.ARRAY_TYPE;function Tt(){let e=new Je(3);return e[0]=1,e[1]=1,e[2]=1,e}function k(e,t,r){let n=new Je(3);return n[0]=e,n[1]=t,n[2]=r,n}function He(){let e=new Je(4);return e[0]=1,e[1]=1,e[2]=1,e[3]=1,e}function Ce(e,t,r,n){let i=new Je(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}var tn=k(1,0,0),Pt=k(0,1,0),rn=k(0,0,1),je=class e{position=k(0,0,5);target=L.create();fov=45;fovZ=1;forward=L.clone(rn);right=L.clone(tn);up=L.clone(Pt);cameraRotationMatrix=se.create();cameraRotationQuat=B.create();static tempMat4=ve.create();static tempQuat=B.create();static tempVec3=L.create();setFov(t){this.fov=t,this.fovZ=2/Math.tan(t*Math.PI/180)}getCameraRotation(){return this.cameraRotationMatrix}orbitPositionAroundTarget(t,r){let n=e.tempVec3;L.sub(n,this.position,this.target),L.rotateY(n,n,this.target,t),B.setAxisAngle(e.tempQuat,this.right,r),L.transformQuat(n,n,e.tempQuat),L.add(this.position,this.target,n),this.updateCameraMatrix()}orbitTargetAroundPosition(t,r){let n=e.tempVec3;L.sub(n,this.target,this.position),L.rotateY(n,n,this.position,t),B.setAxisAngle(e.tempQuat,this.right,r),L.transformQuat(n,n,e.tempQuat),L.add(this.target,this.position,n),this.updateCameraMatrix()}dolly(t){let r=e.tempVec3;L.sub(r,this.position,this.target);let n=L.len(r);L.scale(r,r,1/n);let i=Math.max(1,Math.min(100,n+t));L.scaleAndAdd(this.position,this.target,r,i)}panRelative(t,r){let n=e.tempVec3;L.scale(n,this.right,t),L.scaleAndAdd(n,n,this.up,r),L.add(this.position,this.position,n),L.add(this.target,this.target,n)}updateCameraMatrix(){ve.targetTo(e.tempMat4,this.position,this.target,Pt),se.fromMat4(this.cameraRotationMatrix,e.tempMat4),B.fromMat3(this.cameraRotationQuat,this.cameraRotationMatrix),L.transformMat3(this.up,Pt,this.cameraRotationMatrix),L.transformMat3(this.right,tn,this.cameraRotationMatrix),L.transformMat3(this.forward,rn,this.cameraRotationMatrix)}};var rs={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,enableDepth:!1,enableNormals:!1,enableToLightNormals:!1,enableSoftShadows:!0,epsilon:1e-4,shadowSharpness:128,pixelated:!1,cameraFov:45,cameraMove:"orbit"},zt={options:rs},z=new nn.default({viewports:[zt],maximiseViewport:-1,sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1},exampleModal:{show:!1},currentShader:"return 100.0;"}),Ft=[new je];var Vt=0,Gt=1,on=2;function Me(){return crypto.randomUUID()}function an(e,t){let r={...e.nodes,[t.id]:t};return{...e,nodes:r}}function sn(e){let t=e.nodes[e.rootNodeId];if(!t)return[];let r=new Array(Object.keys(e.nodes).length);return fn(t,e.nodes,0,0,r),r}function qe(e){return{colour:He(),radius:10,...e}}function ln(e,t){return{name:e,type:"none",id:Me(),position:L.create(),rotation:L.create(),childrenIds:[],selfOperation:$e,childOperation:et,shape:Ke,light:qe({}),...t}}function Se(e,t,r,n){return{name:e,type:"light",id:Me(),position:r??L.create(),rotation:n??L.create(),childrenIds:[],selfOperation:$e,childOperation:et,shape:Ke,light:t!=null?qe(t):void 0}}function re(e,t,r,n){return{name:e,type:"shape",id:Me(),position:r??L.create(),rotation:n??L.create(),shape:t!=null?cn(t):Ke,light:qe({}),childrenIds:[],selfOperation:$e,childOperation:et}}function le(e,t){return{name:e,type:"operation",id:Me(),position:L.create(),rotation:L.create(),shape:cn({}),light:qe({}),childrenIds:[],selfOperation:$e,childOperation:ns({type:t})}}var Ke={maxSize:0,type:"none",params:{},diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10},$e={params:{},type:"none"},et={params:{},type:"none"};function cn(e){return{...Ke,...e}}function ns(e){return{...et,...e}}function D(e,t){e.childrenIds.push(t.id),t.parentId=e.id}function pn(e,t,r){t={...t,childrenIds:[...t.childrenIds,r.id]},r={...r,parentId:t.id};let n={...e.nodes,[t.id]:t,[r.id]:r};return{...e,nodes:n}}function dn(e,t){if(t.parentId===void 0)return e;let r=e.nodes[t.parentId],n=r.childrenIds.findIndex(i=>i===t.id);if(n>=0){let i=[...r.childrenIds];i.splice(n,1),r={...r,childrenIds:i};let o={...e.nodes,[r.id]:r};return delete o[t.id],{...e,nodes:o}}return e}function hn(e,t,r){if(r.parentId==null)return e;let n=e.nodes[r.parentId],i=n.childrenIds.findIndex(a=>a===r.id);if(i>=0){let a=[...n.childrenIds];a.splice(i,1),n={...n,childrenIds:a}}t.childrenIds.includes(r.id)||(t={...t,childrenIds:[...t.childrenIds,r.id]}),r={...r,parentId:t.id};let o={...e.nodes,[n.id]:n,[t.id]:t,[r.id]:r};return{...e,nodes:o}}function fn(e,t,r,n,i){if(i[n]={node:e,depth:r},e.childrenIds!=null)for(let o of e.childrenIds){let a=t[o];a&&(n=fn(a,t,r+1,n+1,i))}return n}function tt(e,t){return r=>{let n=r.viewports[e]??zt,i={...n,options:{...n.options,...t}},o=[...r.viewports];return o[e]=i,{viewports:o}}}function mn(e=-1){return()=>({maximiseViewport:e})}function rt(e){return t=>({reparentModal:{...t.reparentModal,...e}})}function nt(e){return t=>({rawSceneModal:{...t.rawSceneModal,...e}})}function it(e){return t=>({exampleModal:{...t.exampleModal,...e}})}function un(e){return t=>({sceneTree:an(t.sceneTree,e)})}function Z(e){return()=>({sceneTree:e})}function gn(e){return()=>({currentShader:e})}function vn(e){return t=>{let r;if(e){for(let n of Object.values(t.sceneTree.nodes))if(n.childrenIds.includes(e)){r=n.id;break}}return{selectedNodeId:e,selectedParentNodeId:r}}}var xn,Y,kt,bn;var wn=[],X=O,yn=X.__b,_n=X.__r,In=X.diffed,Cn=X.__c,Mn=X.unmount,Sn=X.__;function is(){for(var e;e=wn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ot),e.__H.__h.forEach(Xt),e.__H.__h=[]}catch(t){e.__H.__h=[],X.__e(t,e.__v)}}X.__b=function(e){Y=null,yn&&yn(e)},X.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Sn&&Sn(e,t)},X.__r=function(e){_n&&_n(e),xn=0;var t=(Y=e.__c).__H;t&&(kt===Y?(t.__h=[],Y.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ot),t.__h.forEach(Xt),t.__h=[],xn=0)),kt=Y},X.diffed=function(e){In&&In(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(wn.push(t)!==1&&bn===X.requestAnimationFrame||((bn=X.requestAnimationFrame)||os)(is)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),kt=Y=null},X.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ot),r.__h=r.__h.filter(function(n){return!n.__||Xt(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],X.__e(n,r.__v)}}),Cn&&Cn(e,t)},X.unmount=function(e){Mn&&Mn(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ot(n)}catch(i){t=i}}),r.__H=void 0,t&&X.__e(t,r.__v))};var An=typeof requestAnimationFrame=="function";function os(e){var t,r=function(){clearTimeout(n),An&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);An&&(t=requestAnimationFrame(r))}function ot(e){var t=Y,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),Y=t}function Xt(e){var t=Y;e.__c=e.__(),Y=t}function ss(e,t){for(var r in t)e[r]=t[r];return e}function Nn(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function Ln(e,t){this.props=e,this.context=t}(Ln.prototype=new S).isPureReactComponent=!0,Ln.prototype.shouldComponentUpdate=function(e,t){return Nn(this.props,e)||Nn(this.state,t)};var On=O.__b;O.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),On&&On(e)};var Zl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var ls=O.__e;O.__e=function(e,t,r,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),i.__c(e,t)}ls(e,t,r,n)};var Rn=O.unmount;function Vn(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=ss({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Vn(n,t,r)})),e}function Gn(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Gn(n,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function Bt(){this.__u=0,this.o=null,this.__b=null}function kn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function at(){this.i=null,this.l=null}O.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Rn&&Rn(e)},(Bt.prototype=new S).__c=function(e,t){var r=t.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var i=kn(n.__v),o=!1,a=function(){o||(o=!0,r.__R=null,i?i(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=Gn(l,l.__c.__P,l.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.o.pop();)c.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},Bt.prototype.componentWillUnmount=function(){this.o=[]},Bt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Vn(this.__b,r,n.__O=n.__P)}this.__b=null}var i=t.__a&&h(G,null,e.fallback);return i&&(i.__u&=-33),[h(G,null,t.__a?null:e.children),i]};var En=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function cs(e){return this.getChildContext=function(){return e.context},e.children}function ps(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){ue(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var n=t.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(i,o){this.childNodes.push(i),t.h.insertBefore(i,o)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),t.h.removeChild(i)}}}ue(h(cs,{context:t.context},e.__v),t.v)}function st(e,t){var r=h(ps,{__v:e,h:t});return r.containerInfo=t,r}(at.prototype=new S).__a=function(e){var t=this,r=kn(t.__v),n=t.l.get(e);return n[0]++,function(i){var o=function(){t.props.revealOrder?(n.push(i),En(t,e,n)):i()};r?r(o):o()}},at.prototype.render=function(e){this.i=null,this.l=new Map;var t=me(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},at.prototype.componentDidUpdate=at.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){En(e,r,t)})};var ds=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,hs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,fs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ms=/[A-Z0-9]/g,us=typeof document<"u",gs=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};S.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(S.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Tn=O.event;function vs(){}function xs(){return this.cancelBubble}function bs(){return this.defaultPrevented}O.event=function(e){return Tn&&(e=Tn(e)),e.persist=vs,e.isPropagationStopped=xs,e.isDefaultPrevented=bs,e.nativeEvent=e};var Xn,ys={enumerable:!1,configurable:!0,get:function(){return this.class}},Pn=O.vnode;O.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,n=t.type,i={},o=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||us&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||gs(r.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":fs.test(a)&&(a=l):l=a="oninput":o&&hs.test(a)?a=a.replace(ms,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&i[a=l]&&(a="oninputCapture"),i[a]=s}}n=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=me(r.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),n=="select"&&i.defaultValue!=null&&(i.value=me(r.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),r.class&&!r.className?(i.class=r.class,Object.defineProperty(i,"className",ys)):(r.className&&!r.class||r.class&&r.className)&&(i.class=i.className=r.className),t.props=i}(e),e.$$typeof=ds,Pn&&Pn(e)};var zn=O.__r;O.__r=function(e){zn&&zn(e),Xn=e.__c};var Fn=O.diffed;O.diffed=function(e){Fn&&Fn(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value),Xn=null};var Ae=class extends S{buttonRef=Q();constructor(){super(),this.state={show:!1}}render(){let t=null,{buttonProps:r,text:n,children:i}=this.props,o=this.state.show,a={};if(o){t=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect(),l=s.top+s.height,c=document.body.clientHeight;a={left:s.left+"px",top:l+"px",maxHeight:c-l-10+"px"}}return h(G,null,h("button",{...r,ref:this.buttonRef,onClick:this.toggleMenu},n),o&&st(h("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},h("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},i)),t))}preventClose=t=>{t.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var ne=e=>h("label",{style:{display:"inline-block"}},e.label,h("input",{style:{display:"block"},type:"range",...e.inputProps}));var we=class extends S{render(t){let{options:r,isMaximised:n}=this.props,{pixelated:i,renderScale:o,enableShadows:a,enableShowMarching:s,enableDepth:l,enableNormals:c,enableToLightNormals:d,epsilon:p,shadowSharpness:m,maxMarchingStep:f,cameraFov:g,cameraMove:v}=r;return h("div",{class:"viewport-options"},h(Ae,{text:"Menu"},h("div",{class:"control-group-vertical"},h("button",{onClick:this.togglePixelated},i?"Smooth":"Pixelated"),h("select",{onChange:this.changeRenderScale,value:o},h("option",{value:"2"},"2x"),h("option",{value:"1.5"},"1.5x"),h("option",{value:"1"},"1x"),h("option",{value:"0.5"},"0.5x"),h("option",{value:"0.25"},"0.25x"),h("option",{value:"0.125"},"0.125x")),h("select",{onChange:this.changeCameraMove,value:v},h("option",{value:"orbit"},"Orbit"),h("option",{value:"look"},"Look"),h("option",{value:"pan"},"Pan"),h("option",{value:"dolly"},"Dolly")),h("button",{onClick:this.toggleMaximise},n?"Minimise":"Maximise"),h("button",{onClick:this.toggleShadows},a?"Hide Shadows":"Show Shadows"),h("button",{onClick:this.toggleMarching},s?"Hide Marching":"Show Marching"),h("button",{onClick:this.toggleDepth},l?"Hide Depth":"Show Depth"),h("button",{onClick:this.toggleNormals},c?"Hide Normals":"Show Normals"),h("button",{onClick:this.toggleToLightNormals},d?"Hide To Light":"Show To Light"),h("button",{onClick:this.showExamples},"Show Examples"),h("button",{onClick:this.showRawScene},"JSON Scene")),h(ne,{label:`Epsilon ${p}`,inputProps:{value:p,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),h(ne,{label:`Marching Steps ${f}`,inputProps:{value:f,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}),h(ne,{label:`Shadows ${m}`,inputProps:{value:m,min:0,max:256,step:.1,onInput:this.changeShadowSharpness}}),h(ne,{label:`Camera FOV ${g}`,inputProps:{value:g,min:1,max:90,step:.1,onInput:this.changeCameraFov}})))}toggleMaximise=()=>{let{isMaximised:t,viewportIndex:r}=this.props;z.execute(mn(t?-1:r))};showRawScene=()=>{z.execute(nt({show:!0}))};showExamples=()=>{z.execute(it({show:!0}))};changeEpsilon=t=>{let r=t.target.valueAsNumber;if(!isFinite(r)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:r})};changeShadowSharpness=t=>{let r=t.target.valueAsNumber;if(!isFinite(r)){console.warn("Shadow sharpness parse failed");return}this.updateOptions({shadowSharpness:r})};changeMarchingSteps=t=>{let r=t.target.valueAsNumber;if(!isFinite(r)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(r)})};changeCameraFov=t=>{let r=t.target.valueAsNumber;if(!isFinite(r)){console.warn("Marching steps parse camera fov");return}this.updateOptions({cameraFov:r})};togglePixelated=t=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=t=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=t=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};toggleDepth=t=>{this.updateOptions({enableDepth:!this.props.options.enableDepth})};toggleNormals=t=>{this.updateOptions({enableNormals:!this.props.options.enableNormals})};toggleToLightNormals=t=>{this.updateOptions({enableToLightNormals:!this.props.options.enableToLightNormals})};updateOptions=t=>{console.log("Options",t),z.execute(tt(this.props.viewportIndex,t))};changeCameraMove=t=>{let r=t.target.value;z.execute(tt(this.props.viewportIndex,{cameraMove:r}))};changeRenderScale=t=>{let r=t.target.value,n=Number.parseFloat(r);isFinite(n)?z.execute(tt(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",r)}};var Ne=class extends S{canvasRef=Q();renderer;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let t=this.canvasRef.current;this.createNewRenderer(t),window.addEventListener("resize",this.onViewportResize),t.parentElement.addEventListener("pointerdown",this.onPointerDown),t.parentElement.addEventListener("pointermove",this.onPointerMove),t.parentElement.addEventListener("pointerup",this.onPointerUp),t.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let t=this.canvasRef.current;t.parentElement.removeEventListener("pointerdown",this.onPointerDown),t.parentElement.removeEventListener("pointermove",this.onPointerMove),t.parentElement.removeEventListener("pointerup",this.onPointerUp),t.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let{viewportIndex:t,options:r,isMaximised:n}=this.props,i="viewport__canvas";return r.pixelated&&(i+=" is-pixelated"),h("div",{class:"viewport outer-panel"},h("canvas",{class:i,ref:this.canvasRef}),h(we,{isMaximised:n,viewportIndex:t,options:r}))}updateCanvasSize=()=>{let t=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(t.width,t.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{let{options:t,currentShader:r,camera:n,sceneConverter:i}=this.props;this.renderFrameCallback=-1,this.renderer.prevShaderText!==r&&(console.log("New shader!",this.renderer.prevShaderText,r),this.renderer.destroy(),this.createNewRenderer(this.canvasRef.current)),this.renderer.epsilon=t.epsilon,this.renderer.shadowSharpness=t.shadowSharpness,this.renderer.maxMarchingSteps=t.maxMarchingStep,this.renderer.enableShadows=t.enableShadows,this.renderer.enableShowMarches=t.enableShowMarching,this.renderer.enableDepth=t.enableDepth,this.renderer.enableNormals=t.enableNormals,this.renderer.enableToLightNormals=t.enableToLightNormals,this.renderer.enableSoftShadows=t.enableSoftShadows,n.setFov(t.cameraFov),this.renderer.canvasScale!==t.renderScale&&(this.renderer.canvasScale=t.renderScale,this.updateCanvasSize()),this.renderer.render(i,n)};createNewRenderer=t=>{this.renderer=_e.create(t,this.props.currentShader),this.renderer.canvasScale=this.props.options.renderScale,this.updateCanvasSize(),this.renderer.setupCanvas()};onPointerDown=t=>{t.target===this.canvasRef.current&&(this.mousePosX=t.clientX,this.mousePosY=t.clientY,this.mouseDown=!0)};onPointerMove=t=>{if(!this.mouseDown)return;let r=(t.clientX-this.mousePosX)*.005,n=(t.clientY-this.mousePosY)*.005;this.mousePosX=t.clientX,this.mousePosY=t.clientY;let{camera:i}=this.props;if(t.ctrlKey)i.panRelative(r,-n);else if(t.shiftKey)i.orbitTargetAroundPosition(-r,-n);else{let{cameraMove:o}=this.props.options;o==="orbit"?i.orbitPositionAroundTarget(-r,-n):o==="dolly"?i.dolly(n):o==="look"?i.orbitTargetAroundPosition(-r,-n):o==="pan"&&i.panRelative(r,-n)}this.manualRenderTrigger()};onPointerUp=t=>{this.mouseDown=!1};onMouseWheel=t=>{let r=t.deltaY>0?1:-1;this.props.camera.dolly(r),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var $=class extends S{inputRef=Q();addedOnChange=!1;componentDidMount(){this.addedOnChange||this.inputRef.current.addEventListener("change",this.onChange)}componentWillUnmount(){this.addedOnChange&&this.inputRef.current.removeEventListener("change",this.onChange)}render(){let{value:t,placeholder:r,disabled:n,step:i}=this.props,o=100*(i||1),a=Math.round(t*o)/o;return h("input",{disabled:n,step:i,placeholder:r,type:"number",class:this.props.class,value:a,ref:this.inputRef})}onChange=t=>{let r=t.target,n=100*(this.props.step||1),i=Math.round(r.valueAsNumber*n)/n;this.props.onChange(this.props.value,i)}};function _s(e,t){return e.length>=3||t>=3}function Is(e,t){return e.length===4||t===4}var U=class extends S{render(){let{value:t,disabled:r,forceLength:n}=this.props,i=_s(t,n),o=Is(t,n);return h("div",{class:"vector control-group"},h($,{class:"input",disabled:r,value:t[0],onChange:this.onChangeX,placeholder:"x",step:.1}),h($,{class:"input",disabled:r,value:t[1],onChange:this.onChangeY,placeholder:"y",step:.1}),i&&h($,{class:"input",disabled:r,value:t[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),o&&h($,{class:"input",disabled:r,value:t[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=(t,r)=>{this.updateVector(r,0)};onChangeY=(t,r)=>{this.updateVector(r,1)};onChangeZ=(t,r)=>{this.updateVector(r,2)};onChangeW=(t,r)=>{this.updateVector(r,3)};updateVector=(t,r)=>{let n=this.props.value;console.log("Update vector index",r,t);let i=L.clone(n);i[r]=t,this.props.onChange(n,i)}};function Ut(e,t,r){return(r==null||r===!0)&&(e+=" "+t),e}function ee(e,t){let r={};for(let n of e){let i=t(n);r[i]=n}return r}var Dt=[{id:"sphere",name:"Sphere",funcName:"sdfSphere",params:[{name:"Radius",type:"input"}]},{id:"box",name:"Box",funcName:"sdfBox",params:[{name:"X",type:"input"},{name:"Y",type:"input"},{name:"Z",type:"input"}]},{id:"hexPrism",name:"Hex Prism",funcName:"sdfHexPrism",params:[{name:"Radius",type:"input"},{name:"Depth",type:"input"}]},{id:"torus",name:"Torus",funcName:"sdfTorus",params:[{name:"Major Radius",type:"input"},{name:"Minor Radius",type:"input"}]},{id:"octahedron",name:"Octahedron",funcName:"sdfOctahedron",params:[{name:"Size",type:"input"}]},{id:"cylinder",name:"Cylinder",funcName:"sdfCappedCylinder",params:[{name:"Radius",type:"input"},{name:"Height",type:"input"}]},{id:"icosahedron",name:"Icosahedron",funcName:"sdfIcosahedron",params:[{name:"Radius",type:"input"}]},{id:"mandelbulb",name:"Mandelbulb",funcName:"sdfMandelbulb",params:[{name:"Iterations",type:"input",default:4,min:0,max:5,step:1},{name:"Scale",type:"input"}]}],lt=ee(Dt,e=>e.id);var q=class extends S{render(){let{parameters:t,paramInfo:r}=this.props,n=t[r.name],i=(isFinite(n)?n:r.default)??1,o=`${r.name}: ${i}`,a=r.min??0,s=r.max??10,l=r.step??.1;return h(ne,{label:o,inputProps:{value:i,min:a,max:s,step:l,onInput:this.onInput}})}onInput=t=>{let{paramInfo:r,onChange:n}=this.props,i=t.target.valueAsNumber;if(!isFinite(i)){console.log("Unable to parse param:",r.name,t.target.value);return}n(i,r)}};var Cs=Dt.map(e=>h("option",{key:e.id,value:e.id},e.name)),Le=class extends S{render(){let t=this.props.shape,r=t.lightingModel==="phong";return h("div",null,h("div",null,h("strong",null,"Type")," ",h("select",{value:t.type??"none",onChange:this.onChangeType},h("option",{value:"none"},"None"),Cs)),h("div",null,this.renderCurrentParams()),h("div",null,h("strong",null,"Lighting Model")," ",h("select",{value:t.lightingModel,onChange:this.onChangeLightingModel},h("option",{value:"unlit"},"Unlit"),h("option",{value:"lambert"},"Lambert"),h("option",{value:"phong"},"Phong"))),h("div",null,h("strong",null,"Diffuse Colour")," ",h(U,{value:t.diffuseColour,onChange:this.onChangeDiffuseColour})),h("div",null,h("strong",null,"Specular Colour")," ",h(U,{disabled:!r,value:t.specularColour,onChange:this.onChangeSpecularColour})),h("div",null,h("strong",null,"Shininess")," ",h("input",{class:"input",disabled:!r,type:"number",min:0,max:100,step:.1,value:t.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}renderCurrentParams=()=>{let t=[],{shape:r}=this.props,n=lt[r.type];if(!n)return t;for(let i of n.params)t.push(h(q,{key:i.name,parameters:r.params,paramInfo:i,onChange:this.updateParam}));return t};updateParam=(t,r)=>{let i={...this.props.shape.params,[r.name]:t};this.updateField(i,"params")};onChangeType=t=>{let r=t.target.value;this.updateField(r,"type")};onChangeLightingModel=t=>{let r=t.target.value;this.updateField(r,"lightingModel")};onChangeShininess=t=>{let r=parseFloat(t.target.value);isFinite(r)&&this.updateField(r,"shininess")};onChangeDiffuseColour=(t,r)=>{this.updateField(r,"diffuseColour")};onChangeSpecularColour=(t,r)=>{this.updateField(r,"specularColour")};updateField=(t,r)=>{console.log("Update shape",r,t);let n={...this.props.shape,[r]:t};this.props.onChange(n)}};var Oe=class extends S{render(){let t=this.props.light;return t===void 0?h("div",null,"Empty Light"):h("div",null,h("div",null,h("strong",null,"Colour")," ",h(U,{forceLength:3,value:t.colour,onChange:this.onChangeColour})))}onChangeColour=(t,r)=>{this.updateField(r,"colour")};updateField=(t,r)=>{console.log("Update light",r,t);let n={...this.props.light,[r]:t};this.props.onChange(n)}};var Wt=[{id:"union",name:"Union",funcName:"opUnion",params:[]},{id:"subtraction",name:"Subtraction",funcName:"opSubtraction",params:[]},{id:"intersection",name:"Intersection",funcName:"opIntersection",params:[]},{id:"xor",name:"Xor",funcName:"opXor",params:[]},{id:"smoothUnion",name:"Smooth Union",funcName:"opSmoothUnion",params:[{name:"Blend",type:"input"}]},{id:"smoothSubtraction",name:"Smooth Subtraction",funcName:"opSmoothSubtraction",params:[{name:"Blend",type:"input"}]},{id:"smoothIntersection",name:"Smooth Intersection",funcName:"opSmoothIntersection",params:[{name:"Blend",type:"input"}]}],ct=ee(Wt,e=>e.id);var Ms=Wt.map(e=>h("option",{key:e.id,value:e.id},e.name)),Re=class extends S{render(){let{node:t,sceneTree:r}=this.props,n=t.childOperation.type??"none",i=t.parentId!=null?r.nodes[t.parentId]:void 0;return h("div",null,h("div",null,h("strong",null,"Child Op Code")," ",h("select",{value:n,onChange:this.onChangeChildOpCode},h("option",{value:"none"},"None"),Ms)),h("div",null,this.renderOperationParams()),h("div",null,h("strong",null,"Children")),h("div",{class:"control-group"},h("button",{onClick:this.addChild},"Add"),i!=null&&h(G,null,h("button",{onClick:this.deleteSelf},"Delete"),h("button",{onClick:this.reparent},"Re-parent"))))}renderOperationParams=()=>{let t=[],{childOperation:r}=this.props.node,n=ct[r.type];if(!n)return t;for(let i of n.params)t.push(h(q,{key:i.name,parameters:r.params,paramInfo:i,onChange:this.updateParam}));return t};addChild=()=>{let t=pn(this.props.sceneTree,this.props.node,ln("New Child",{}));z.execute(Z(t))};deleteSelf=()=>{let t=dn(this.props.sceneTree,this.props.node);z.execute(Z(t))};reparent=()=>{let{node:t,sceneTree:r}=this.props;if((t.parentId!=null?r.nodes[t.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}z.execute(rt({show:!0,childNodeId:this.props.node.id}))};updateParam=(t,r)=>{let{node:n,onChange:i}=this.props,a={...n.childOperation.params,[r.name]:t};i({...n.childOperation,params:a})};onChangeChildOpCode=t=>{let{node:r,onChange:n}=this.props,i=t.target.value;n({...r.childOperation,type:i})}};var Zt=[{id:"twistXY",name:"Twist XY",funcName:"opTwistXY",params:[{name:"Amount",type:"input",default:.5,min:-10,max:10}]},{id:"repeatDomain",name:"Repeat Domain",funcName:"opRepeatDomain",params:[{name:"X",type:"input",default:8,max:50},{name:"Y",type:"input",default:8,max:50},{name:"Z",type:"input",default:8,max:50}]},{id:"rotationRepeatSimple",name:"Rotation Repeat Simple",funcName:"opRotationSimple",params:[{name:"Amount",type:"input",default:6,max:32}]}],pt=ee(Zt,e=>e.id);var Ss=Zt.map(e=>h("option",{key:e.id,value:e.id},e.name)),Ee=class extends S{render(){let{selfOperation:t}=this.props,r=t.type??"none";return h("div",null,h("div",null,h("strong",null,"Self Op Code")," ",h("select",{value:r,onChange:this.onChangeSelfOpCode},h("option",{value:"none"},"None"),Ss)),h("div",null,this.renderOperationParams()))}renderOperationParams=()=>{let t=[],{selfOperation:r}=this.props,n=pt[r.type];if(!n)return t;for(let i of n.params)t.push(h(q,{key:i.name,parameters:r.params,paramInfo:i,onChange:this.updateParam}));return t};updateParam=(t,r)=>{let{selfOperation:n,onChange:i}=this.props,a={...n.params,[r.name]:t};i({...n,params:a})};onChangeSelfOpCode=t=>{let{selfOperation:r,onChange:n}=this.props,i=t.target.value;n({...r,type:i})}};var Te=class extends S{constructor(){super(),this.state={show:!1}}render(){let{node:t,sceneTree:r}=this.props;return t==null?h("div",{class:"scene-node-view"},"No node selected"):h("div",{class:"scene-node-view"},h("div",null,h("strong",null,"Name")," ",h("input",{class:"input",type:"text",placeholder:"Name",value:t.name,onChange:this.onChangeName})),h("div",null,h("strong",null,"Type"),h("select",{value:t.type,onChange:this.onChangeType},h("option",{value:"none"},"None"),h("option",{value:"shape"},"Shape"),h("option",{value:"light"},"Light"),h("option",{value:"operation"},"Operation"))),t.type==="shape"&&h(G,null,h("div",null,h("strong",null,"Position")," ",h(U,{value:t.position,onChange:this.onChangePosition})),h("div",null,h("strong",null,"Rotation")," ",h(U,{value:t.rotation,onChange:this.onChangeRotation})),h(Ee,{selfOperation:t.selfOperation,onChange:this.onChangeSelfOperation}),h("div",null,h("strong",null,"Shape"),h(Le,{shape:t.shape,onChange:this.onChangeShape}))),t.type==="light"&&h(G,null,h("div",null,h("strong",null,"Position")," ",h(U,{value:t.position,onChange:this.onChangePosition})),h("div",null,h("strong",null,"Rotation")," ",h(U,{value:t.rotation,onChange:this.onChangeRotation})),h("div",null,h("strong",null,"Light"),h(Oe,{light:t.light,onChange:this.onChangeLight}))),t.type==="operation"&&h("div",null,h("strong",null,"Operation"),h(Re,{node:t,sceneTree:r,onChange:this.onChangeChildOperation})))}onChangeName=t=>{let r=t.target.value;this.updateField(r,"name")};onChangePosition=(t,r)=>{this.updateField(r,"position")};onChangeRotation=(t,r)=>{this.updateField(r,"rotation")};onChangeType=t=>{let r=t.target.value;this.updateField(r,"type")};onChangeShape=t=>{this.updateField(t,"shape")};onChangeLight=t=>{this.updateField(t,"light")};onChangeSelfOperation=t=>{this.updateField(t,"selfOperation")};onChangeChildOperation=t=>{this.updateField(t,"childOperation")};updateField=(t,r)=>{console.log("Update shape node",r,t);let n={...this.props.node,[r]:t};this.props.onChange(n,this.props.node)}};var Pe=class extends S{render(){let{depth:t,node:r,isSelected:n,disable:i}=this.props,o=Ut(Ut("scene-node-tree-item","is-selected",n),"is-disabled",i===!0);return h("div",{class:o,style:{paddingLeft:(t+1)*.5+"rem"},onClick:this.onClick},"+ ",r.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var ie=class extends S{render(){return h("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:t,selectedNodeId:r,onItemClicked:n}=this.props,i=t.nodes[t.rootNodeId],o=[];if(i==null)return o;let a=sn(t);for(let s of a){let l=s.node.id===r;o.push(h(Pe,{isSelected:l,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return o}};var ze=class extends S{render(){let{sceneTree:t,selectedNodeId:r}=this.props,n=t.nodes[r];return h("div",{class:"scene-tree"},h("div",{class:"scene-tree__contents outer-panel"},h("div",{class:"inner-panel"},h(ie,{sceneTree:t,selectedNodeId:r,onItemClicked:this.onNodeClicked})),h("div",{class:"inner-panel scene-tree__nodes"},h(Te,{sceneTree:t,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=t=>{z.execute(vn(t.id))};onChangeSelectedNode=(t,r)=>{z.execute(un(t))}};var K=class extends S{render(){let{show:t,onRequestClose:r}=this.props;if(t===!1)return null;let n=this.props.portalContainer??"modals",i=document.getElementById(n),o="modal-body outer-panel ",a=this.props.class!=null?o+this.props.class:o;return st(h("div",{class:"modal-backdrop",onPointerDown:r},h("div",{class:a,onPointerDown:this.preventClose},this.props.children)),i)}preventClose=t=>{t.stopImmediatePropagation()}};var Fe=class extends S{render(){let{show:t,sceneTree:r,disabledNodeIds:n,onRequestClose:i}=this.props;return h(K,{show:t,onRequestClose:i},h(ie,{sceneTree:r,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=t=>{this.props.onItemClicked(t)}};var Ve=class extends S{render(){let{show:t}=this.props.state,r=this.getDisabledNodeIds();return h(Fe,{show:t,disabledNodeIds:r,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{z.execute(rt({show:!1}))};getDisabledNodeIds=()=>{let{show:t,childNodeId:r}=this.props.state;if(!t)return[];let{sceneTree:n}=this.props,i=n.nodes[r];return[i.id,i.parentId]};onReparentSelected=t=>{if(this.props.state.childNodeId==null)return;let r=this.props.sceneTree.nodes[this.props.state.childNodeId],n=hn(this.props.sceneTree,t,r);z.execute(Z(n))}};var Ge=class extends S{prevSceneTree=void 0;preRef=Q();render(){let{show:t}=this.props.state,{sceneTree:r}=this.props,n="";return t&&this.prevSceneTree!==r&&(n=JSON.stringify(r,null,2)),h(K,{show:t,onRequestClose:this.onCloseModal,class:"raw-scene-modal",portalContainer:"raw-json-modal"},h("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},h("pre",null,n)),h("span",{class:"control-group"},h("button",{onClick:this.loadFromHtml},"Load From Json"),h("label",{class:"button"},"Load From File",h("input",{type:"file",onChange:this.loadFromFile})),h("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{z.execute(nt({show:!1}))};downloadText=()=>{let t=new Blob([this.preRef.current.innerText],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(t),r.download="scene.json",r.click(),URL.revokeObjectURL(r.href)};loadFromFile=t=>{if(t.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=t=>{let r=t.target;typeof r.result=="string"?this.loadFromText(r.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let t=this.preRef.current.innerText;this.loadFromText(t)};loadFromText=t=>{let r=JSON.parse(t);r!=null&&z.execute(Z(r))}};function As(){let e=le("Root","union"),t=le("Main","subtraction");D(e,t);let r=re("Hex Prism",{type:"hexPrism",params:{Radius:.75,Depth:2},maxSize:1.5,diffuseColour:k(.5,.5,.5)}),n=le("Box & Sphere","union");D(t,r),D(t,n);let i=re("Box",{type:"box",params:{X:6,Y:1,Z:6},diffuseColour:k(1,1,1),lightingModel:"lambert"},k(0,-1.5,0)),o=re("Sphere",{type:"sphere",params:{Radius:1.25},maxSize:2,diffuseColour:k(.1,.2,.9),lightingModel:"phong"});D(n,i),D(n,o);let a=Se("Red Light",{colour:Ce(1,.8,.6,1)},k(4,2,3)),s=Se("Green Light",{colour:Ce(.2,1,.6,1)},k(0,0,0));return D(e,a),D(e,s),{nodes:ht(e,t,r,n,i,o,a,s),rootNodeId:e.id}}var dt=As();function ws(){let e=le("Root","union"),t=re("Sphere Small",{type:"sphere",params:{Radius:1.25},diffuseColour:k(.1,.2,.9),lightingModel:"phong"}),r=re("Sphere Large",{type:"sphere",params:{Radius:10},diffuseColour:k(.9,.2,.1),lightingModel:"phong"},k(0,-11,0));D(e,t),D(e,r);let n=Se("Red Light",{colour:Ce(1,.8,.6,1)},k(4,2,3));return D(e,n),{nodes:ht(e,t,r,n),rootNodeId:e.id}}var Bn=ws();function ht(...e){return ee(e,t=>t.id)}var ft=[{tree:dt,title:"Box, Sphere and Hex"},{tree:Bn,title:"Two Spheres"}];var Ns=e=>{let{title:t,tree:r}=e.example;return h("div",null,h("button",{onClick:()=>z.execute(Z(r))},"Load")," ",t)},ke=class extends S{render(){let{show:t}=this.props.state;return h(K,{show:t,onRequestClose:this.onCloseModal,class:"example-modal",portalContainer:"raw-json-modal"},ft.map((r,n)=>h(Ns,{key:n,example:r})))}onCloseModal=()=>{z.execute(it({show:!1}))}};var mt=class extends S{constructor(){super()}render(){let t=this.props.sceneConverter,{viewports:r,maximiseViewport:n,sceneTree:i,selectedNodeId:o,reparentModal:a,rawSceneModal:s,exampleModal:l,currentShader:c}=this.props.state;return h(G,null,h("div",{class:"main-view"},n>=0?h(Ne,{isMaximised:!0,camera:Ft[n],viewportIndex:n,options:r[n].options,sceneConverter:t,currentShader:c}):h(G,null,h("div",{class:"viewports"},h(Ne,{viewportIndex:0,camera:Ft[0],options:r[0].options,sceneConverter:t,currentShader:c})),h(ze,{sceneTree:i,selectedNodeId:o}))),h(Ve,{state:a,sceneTree:i}),h(Ge,{state:s,sceneTree:i}),h(ke,{state:l}))}};var ut=jt(Dn());function Ls(e){let t=e.toString();return t.indexOf(".")<0&&(t+=".0"),t}var Xe=class{result="";firstItem=!0;startFunction(t){this.writeValue(t+"("),this.firstItem=!0}endFunction(){this.result+=")"}writeRaw(t){this.result+=t}writeValue(t){this.firstItem||(this.result+=", "),typeof t=="number"?this.result+=Ls(t):this.result+=t,this.firstItem=!1}writeParameter(t){this.writeValue("uParams["+t+"]")}getFinal(){return`return ${this.result};`}};var Os=8,Rs=8,Es={unlit:Vt,lambert:Gt,phong:on};function Ts(e){return Es[e]||Vt}var gt=class e{lights=[];lightDataArray=[];materials=[];materialDataArray=[];parameters=[];shader="";previousTree;getTree(){return this.previousTree}getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getParameters(){return this.parameters}getShader(){return this.shader}setLight(t,r){if(t<0)throw new Error(`Out of bounds light index ${t}`);t>=this.lights.length?this.lights[t]={...e.createNewLight(),...r}:this.lights[t]={...this.lights[t],...r},this.updateLight(t)}setMaterial(t,r){if(t<0)throw new Error(`Out of bounds material index ${t}`);t>=this.materials.length?this.materials[t]={...e.createNewMaterial(),...r}:this.materials[t]={...this.materials[t],...r},this.updateMaterial(t)}updateShapesFromTree(t){if(this.previousTree===t||(this.previousTree=t,!t.nodes[t.rootNodeId]))return!1;let{lights:n,materials:i,parameters:o,assembler:a}=e.createShapesFromNode(t);if(!(0,ut.default)(this.lights,n)){this.lights=n,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,ut.default)(this.materials,i)){this.materials=i,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}return(0,ut.default)(this.parameters,o)||(this.parameters=o,console.log("Parameters",this.parameters)),this.shader=a.getFinal(),!0}static createShapesFromNode(t){let r=t.nodes[t.rootNodeId];if(!r)return;let n=[],i=[],o=[],a=new Xe;return this.processNode(n,i,o,r,t.nodes,a),{lights:n,materials:i,parameters:o,assembler:a}}static nodeHasValidShape(t){return!(t.type!=="shape"||t.shape==null||t.shape.type==="none")}static processNode(t,r,n,i,o,a){let s=!1,l=0,c=0;if(i.type==="operation"&&i.childOperation.type!=="none"){for(let p of i.childrenIds){let m=o[p];(this.nodeHasValidShape(m)||m.childOperation.type!=="none")&&c++}c>1&&(s=!0,this.processOperation(i.childOperation,a,n),l++)}if(this.nodeHasValidShape(i)&&(s=!0,this.processShape(i,i.shape,r,n,a)),i.type==="light"){let p=e.convertToLight(i);p!=null&&t.push(p)}let d=0;for(let p of i.childrenIds)this.processNode(t,r,n,o[p],o,a)&&(d++,c>2&&d+1<c&&(l++,this.processOperation(i.childOperation,a,n)));for(let p=0;p<l;p++)a.endFunction();return s}static processOperation(t,r,n){let i=ct[t.type];if(i==null){console.error("Unsupported operation type",t.type,t);return}r.startFunction(i.funcName);for(let o of i.params){let a=t.params[o.name]??o.default??1;this.pushParameter(n,a,r)}}static pushParameter(t,r,n){n.writeParameter(t.length),t.push(r)}static writeSamplePoint(t,r,n){let i=t.position,o;t.selfOperation.type!=="none"&&(o=pt[t.selfOperation.type],o&&n.startFunction(o.funcName));let a=B.create();if(B.fromEuler(a,t.rotation[0],t.rotation[1],t.rotation[2]),n.startFunction("quatMul"),n.startFunction("vec4"),this.pushParameter(r,a[0],n),this.pushParameter(r,a[1],n),this.pushParameter(r,a[2],n),this.pushParameter(r,a[3],n),n.endFunction(),n.startFunction("vec3"),this.pushParameter(r,-i[0],n),this.pushParameter(r,-i[1],n),this.pushParameter(r,-i[2],n),n.endFunction(),n.writeRaw(" + point"),n.endFunction(),o){for(let s of o.params){let l=t.selfOperation.params[s.name]??s.default??1;this.pushParameter(r,l,n)}n.endFunction()}}static processShape(t,r,n,i,o){let a=lt[r.type];if(a==null){console.error("Unsupported shape type",r.type,r);return}o.startFunction("vec2");let s={diffuseColour:r.diffuseColour,lightingModel:Ts(r.lightingModel),specularColour:r.specularColour,shininess:r.shininess},l=n.length;n.push(s),o.startFunction(a.funcName),this.writeSamplePoint(t,i,o);for(let c of a.params){let d=r.params[c.name]??c.default??1;this.pushParameter(i,d,o)}o.endFunction(),o.writeValue(l),o.endFunction()}updateLight(t){let r=t*Os,n=this.lights[t];this.lightDataArray[r]=n.position[0],this.lightDataArray[r+1]=n.position[1],this.lightDataArray[r+2]=n.position[2],this.lightDataArray[r+3]=n.radius,this.lightDataArray[r+4]=n.colour[0],this.lightDataArray[r+5]=n.colour[1],this.lightDataArray[r+6]=n.colour[2],this.lightDataArray[r+7]=n.colour[3]}updateMaterial(t){let r=t*Rs,n=this.materials[t];this.materialDataArray[r]=n.diffuseColour[0],this.materialDataArray[r+1]=n.diffuseColour[1],this.materialDataArray[r+2]=n.diffuseColour[2],this.materialDataArray[r+3]=n.lightingModel,this.materialDataArray[r+4]=n.specularColour[0],this.materialDataArray[r+5]=n.specularColour[1],this.materialDataArray[r+6]=n.specularColour[2],this.materialDataArray[r+7]=n.shininess}static convertToLight(t){let r=t.light;return r==null?null:{colour:r.colour,position:t.position,radius:r.radius}}static createNewMaterial(){return{diffuseColour:Tt(),lightingModel:Gt,specularColour:Tt(),shininess:10}}static createNewLight(){return{position:L.create(),radius:10,colour:He()}}};var Qt=new gt;z.subscribe(e=>e.sceneTree,Ps);function Ps(e){Qt.updateShapesFromTree(e.sceneTree)&&z.execute(gn(Qt.getShader()))}var zs=document.getElementById("app");function Wn(){ue(h(mt,{state:z.state(),sceneConverter:Qt}),zs)}function Fs(){ft[0]&&z.execute(Z(dt))}Fs();Wn();z.subscribeAny(Wn);})();
//# sourceMappingURL=webgl-index.js.map
