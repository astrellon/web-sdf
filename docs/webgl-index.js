(()=>{var hn=Object.create;var $e=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var mn=Object.getOwnPropertyNames;var gn=Object.getPrototypeOf,vn=Object.prototype.hasOwnProperty;var Lt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ne=(t,e)=>{for(var r in e)$e(t,r,{get:e[r],enumerable:!0})},bn=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of mn(e))!vn.call(t,o)&&o!==r&&$e(t,o,{get:()=>e[o],enumerable:!(n=fn(e,o))||n.enumerable});return t};var Nt=(t,e,r)=>(r=t!=null?hn(gn(t)):{},bn(e||!t||!t.__esModule?$e(r,"default",{value:t,enumerable:!0}):r,t));var Mr=Lt(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.EmptyModifier=void 0;var Ei=()=>null;fe.EmptyModifier=Ei;var ft=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,r=!0){let n=e(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(e,r))}subscribe(e,r,n,o){let i=e(this.currentState),a={selector:new mt(e,i,n,o),subscription:r};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(e,r){return this.subscribe(n=>n,e,void 0,r)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,r){for(let n of this.subscriptions){let o=n.selector.getValue(this.currentState);n.selector.checkIfChanged(o)&&n.subscription(this.currentState,o,e,r)}}};fe.default=ft;var mt=class{constructor(e,r=void 0,n,o){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=r,this.comparer=n,this.name=o}checkIfChanged(e){let r=!1;return this.comparer!==void 0?r=!this.comparer(this.prevValue,e):r=e!==this.prevValue,this.prevValue=e,r}}});var pn=Lt((Yc,dn)=>{"use strict";dn.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}});var Te,_,Ft,_n,q,Rt,Pt,zt,Gt,rt,et,tt,xn,ie={},Vt=[],In=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function W(t,e){for(var r in e)t[r]=e[r];return t}function nt(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function d(t,e,r){var n,o,i,a={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?Te.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Oe(t,a,n,o,null)}function Oe(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ft,__i:-1,__u:0};return o==null&&_.vnode!=null&&_.vnode(i),i}function V(){return{current:null}}function O(t){return t.children}function b(t,e){this.props=t,this.context=e}function te(t,e){if(e==null)return t.__?te(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?te(t):null}function Dt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Dt(t)}}function Ot(t){(!t.__d&&(t.__d=!0)&&q.push(t)&&!Ee.__r++||Rt!=_.debounceRendering)&&((Rt=_.debounceRendering)||Pt)(Ee)}function Ee(){for(var t,e,r,n,o,i,a,s=1;q.length;)q.length>s&&q.sort(zt),t=q.shift(),s=q.length,t.__d&&(r=void 0,o=(n=(e=t).__v).__e,i=[],a=[],e.__P&&((r=W({},n)).__v=n.__v+1,_.vnode&&_.vnode(r),ot(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[o]:null,i,o??te(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,kt(i,r,a),r.__e!=o&&Dt(r)));Ee.__r=0}function Bt(t,e,r,n,o,i,a,s,l,p,u){var c,h,f,m,x,v,g=n&&n.__k||Vt,I=e.length;for(l=Cn(r,e,g,l,I),c=0;c<I;c++)(f=r.__k[c])!=null&&(h=f.__i==-1?ie:g[f.__i]||ie,f.__i=c,v=ot(t,f,h,o,i,a,s,l,p,u),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&it(h.ref,null,f),u.push(f.ref,f.__c||m,f)),x==null&&m!=null&&(x=m),4&f.__u||h.__k===f.__k?l=Xt(f,l,t):typeof f.type=="function"&&v!==void 0?l=v:m&&(l=m.nextSibling),f.__u&=-7);return r.__e=x,l}function Cn(t,e,r,n,o){var i,a,s,l,p,u=r.length,c=u,h=0;for(t.__k=new Array(o),i=0;i<o;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=i+h,(a=t.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Oe(null,a,null,null,null):ae(a)?Oe(O,{children:a},null,null,null):a.constructor==null&&a.__b>0?Oe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=t,a.__b=t.__b+1,s=null,(p=a.__i=yn(a,r,l,c))!=-1&&(c--,(s=r[p])&&(s.__u|=2)),s==null||s.__v==null?(p==-1&&(o>u?h--:o<u&&h++),typeof a.type!="function"&&(a.__u|=4)):p!=l&&(p==l-1?h--:p==l+1?h++:(p>l?h--:h++,a.__u|=4))):t.__k[i]=null;if(c)for(i=0;i<u;i++)(s=r[i])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=te(s)),Wt(s,s));return n}function Xt(t,e,r){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=Xt(n[o],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=te(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function se(t,e){return e=e||[],t==null||typeof t=="boolean"||(ae(t)?t.some(function(r){se(r,e)}):e.push(t)),e}function yn(t,e,r,n){var o,i,a=t.key,s=t.type,l=e[r];if(l===null&&t.key==null||l&&a==l.key&&s==l.type&&(2&l.__u)==0)return r;if(n>(l!=null&&(2&l.__u)==0?1:0))for(o=r-1,i=r+1;o>=0||i<e.length;){if(o>=0){if((l=e[o])&&(2&l.__u)==0&&a==l.key&&s==l.type)return o;o--}if(i<e.length){if((l=e[i])&&(2&l.__u)==0&&a==l.key&&s==l.type)return i;i++}}return-1}function Et(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||In.test(e)?r:r+"px"}function Re(t,e,r,n,o){var i,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Et(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||Et(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Gt,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n?r.u=n.u:(r.u=rt,t.addEventListener(e,i?tt:et,i)):t.removeEventListener(e,i?tt:et,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Tt(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=rt++;else if(e.t<r.u)return;return r(_.event?_.event(e):e)}}}function ot(t,e,r,n,o,i,a,s,l,p){var u,c,h,f,m,x,v,g,I,w,M,B,X,ee,Y,k,U,R=e.type;if(e.constructor!=null)return null;128&r.__u&&(l=!!(32&r.__u),i=[s=e.__e=r.__e]),(u=_.__b)&&u(e);e:if(typeof R=="function")try{if(g=e.props,I="prototype"in R&&R.prototype.render,w=(u=R.contextType)&&n[u.__c],M=u?w?w.props.value:u.__:n,r.__c?v=(c=e.__c=r.__c).__=c.__E:(I?e.__c=c=new R(g,M):(e.__c=c=new b(g,M),c.constructor=R,c.render=An),w&&w.sub(c),c.props=g,c.state||(c.state={}),c.context=M,c.__n=n,h=c.__d=!0,c.__h=[],c._sb=[]),I&&c.__s==null&&(c.__s=c.state),I&&R.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=W({},c.__s)),W(c.__s,R.getDerivedStateFromProps(g,c.__s))),f=c.props,m=c.state,c.__v=e,h)I&&R.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),I&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(I&&R.getDerivedStateFromProps==null&&g!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,M),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,M)===!1||e.__v==r.__v){for(e.__v!=r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(P){P&&(P.__=e)}),B=0;B<c._sb.length;B++)c.__h.push(c._sb[B]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,M),I&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,m,x)})}if(c.context=M,c.props=g,c.__P=t,c.__e=!1,X=_.__r,ee=0,I){for(c.state=c.__s,c.__d=!1,X&&X(e),u=c.render(c.props,c.state,c.context),Y=0;Y<c._sb.length;Y++)c.__h.push(c._sb[Y]);c._sb=[]}else do c.__d=!1,X&&X(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++ee<25);c.state=c.__s,c.getChildContext!=null&&(n=W(W({},n),c.getChildContext())),I&&!h&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(f,m)),k=u,u!=null&&u.type===O&&u.key==null&&(k=Ut(u.props.children)),s=Bt(t,ae(k)?k:[k],e,r,n,o,i,a,s,l,p),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),v&&(c.__E=c.__=null)}catch(P){if(e.__v=null,l||i!=null)if(P.then){for(e.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else for(U=i.length;U--;)nt(i[U]);else e.__e=r.__e,e.__k=r.__k;_.__e(P,e,r)}else i==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):s=e.__e=Sn(r.__e,e,r,n,o,i,a,l,p);return(u=_.diffed)&&u(e),128&e.__u?void 0:s}function kt(t,e,r){for(var n=0;n<r.length;n++)it(r[n],r[++n],r[++n]);_.__c&&_.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){_.__e(i,o.__v)}})}function Ut(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:ae(t)?t.map(Ut):W({},t)}function Sn(t,e,r,n,o,i,a,s,l){var p,u,c,h,f,m,x,v=r.props,g=e.props,I=e.type;if(I=="svg"?o="http://www.w3.org/2000/svg":I=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(p=0;p<i.length;p++)if((f=i[p])&&"setAttribute"in f==!!I&&(I?f.localName==I:f.nodeType==3)){t=f,i[p]=null;break}}if(t==null){if(I==null)return document.createTextNode(g);t=document.createElementNS(o,I,g.is&&g),s&&(_.__m&&_.__m(e,i),s=!1),i=null}if(I==null)v===g||s&&t.data==g||(t.data=g);else{if(i=i&&Te.call(t.childNodes),v=r.props||ie,!s&&i!=null)for(v={},p=0;p<t.attributes.length;p++)v[(f=t.attributes[p]).name]=f.value;for(p in v)if(f=v[p],p!="children"){if(p=="dangerouslySetInnerHTML")c=f;else if(!(p in g)){if(p=="value"&&"defaultValue"in g||p=="checked"&&"defaultChecked"in g)continue;Re(t,p,null,f,o)}}for(p in g)f=g[p],p=="children"?h=f:p=="dangerouslySetInnerHTML"?u=f:p=="value"?m=f:p=="checked"?x=f:s&&typeof f!="function"||v[p]===f||Re(t,p,f,v[p],o);if(u)s||c&&(u.__html==c.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(c&&(t.innerHTML=""),Bt(e.type=="template"?t.content:t,ae(h)?h:[h],e,r,n,I=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:r.__k&&te(r,0),s,l),i!=null)for(p=i.length;p--;)nt(i[p]);s||(p="value",I=="progress"&&m==null?t.removeAttribute("value"):m!=null&&(m!==t[p]||I=="progress"&&!m||I=="option"&&m!=v[p])&&Re(t,p,m,v[p],o),p="checked",x!=null&&x!=t[p]&&Re(t,p,x,v[p],o))}return t}function it(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){_.__e(o,r)}}function Wt(t,e,r){var n,o;if(_.unmount&&_.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||it(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){_.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Wt(n[o],e,r||typeof t.type!="function");r||nt(t.__e),t.__c=t.__=t.__e=void 0}function An(t,e,r){return this.constructor(t,r)}function le(t,e,r){var n,o,i,a;e==document&&(e=document.documentElement),_.__&&_.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],a=[],ot(e,t=(!n&&r||e).__k=d(O,null,[t]),o||ie,ie,e.namespaceURI,!n&&r?[r]:o?null:e.firstChild?Te.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n,a),kt(i,t,a)}Te=Vt.slice,_={__e:function(t,e,r,n){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(s){t=s}throw t}},Ft=0,_n=function(t){return t!=null&&t.constructor==null},b.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=W({},this.state),typeof t=="function"&&(t=t(W({},r),this.props)),t&&W(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ot(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ot(this))},b.prototype.render=O,q=[],Pt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,zt=function(t,e){return t.__v.__b-e.__v.__b},Ee.__r=0,Gt=/(PointerCapture)$|Capture$/i,rt=0,et=Tt(!1),tt=Tt(!0),xn=0;var Zt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Qt=`float sdfSphere(vec3 point, float radius)
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

// https://iquilezles.org/articles/mandelbulb
float sdfMandelbulb(vec3 point, vec2 params)
{
    point = point * params.y;
    vec3 w = point;
    float m = dot(w, w);

    int p1 = int(params.x); // default 4;

    // vec4 trap = vec4(abs(w),m);
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

        // trap = min( trap, vec4(abs(w),m) );

        m = dot(w, w);
        if (m > 256.0)
        {
            break;
        }
    }

    // resColor = vec4(m,trap.yzw);

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

vec3 repeatDomain(vec3 point, float size)
{
    return point - size * round(point / size);
}

vec3 quatMul( vec4 q, vec3 v )
{
    return v + 2.0 * cross(cross(v, q.xyz ) + q.w * v, q.xyz);
}`;var Yt=`vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
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
`;var Jt=`#version 300 es

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
`;var Rn=/#include\s+\<([^\>]+)\>/gmi,ce=class t{program;constructor(e){this.program=e}static assembleShader(e,r){let n=r.matchAll(Rn);for(let o of n){let i=e[o[1]];i===void 0&&(console.error(`Unknown shader include ${o[1]}`),i=""),r=r.replace(o[0],i)}return r}static create(e,r,n,o){let i=null,a=null,s=null;function l(){i!=null&&(e.detachShader(i,a),e.detachShader(i,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}if(a=e.createShader(e.VERTEX_SHADER),e.shaderSource(a,this.assembleShader(r,n)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",u),l(),new Error(`Vertex shader compile error ${u}`)}s=e.createShader(e.FRAGMENT_SHADER);let p=this.assembleShader(r,o);{let u=p.split(`
`),c=new Array(u.length);for(let h=0;h<u.length;h++)c[h]=h+1+": "+u[h];console.info("Assembled shader",c.join(`
`))}if(e.shaderSource(s,p),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",u),l(),new Error(`Fragment shader compile error ${u}`)}if(i=e.createProgram(),e.attachShader(i,a),e.attachShader(i,s),e.linkProgram(i),l(),!e.getProgramParameter(i,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(i);let u=e.getProgramInfoLog(i);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new t(i)}};var J={};Ne(J,{ANGLE_ORDER:()=>at,ARRAY_TYPE:()=>A,EPSILON:()=>S,RANDOM:()=>Z,equals:()=>zn,round:()=>re,setMatrixArrayType:()=>On,toDegree:()=>Pn,toRadian:()=>Fn});var S=1e-6,A=typeof Float32Array<"u"?Float32Array:Array,Z=Math.random,at="zyx";function re(t){return t>=0?Math.round(t):t%.5===0?Math.floor(t):Math.round(t)}function On(t){A=t}var En=Math.PI/180,Tn=180/Math.PI;function Fn(t){return t*En}function Pn(t){return t*Tn}function zn(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:S;return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))}var K={};Ne(K,{add:()=>io,adjoint:()=>Zn,clone:()=>Vn,copy:()=>Dn,create:()=>st,determinant:()=>Qn,equals:()=>co,exactEquals:()=>lo,frob:()=>oo,fromMat2d:()=>$n,fromMat4:()=>Gn,fromQuat:()=>eo,fromRotation:()=>qn,fromScaling:()=>Kn,fromTranslation:()=>jn,fromValues:()=>Bn,identity:()=>kn,invert:()=>Wn,mul:()=>po,multiply:()=>Ht,multiplyScalar:()=>ao,multiplyScalarAndAdd:()=>so,normalFromMat4:()=>to,projection:()=>ro,rotate:()=>Jn,scale:()=>Hn,set:()=>Xn,str:()=>no,sub:()=>uo,subtract:()=>jt,translate:()=>Yn,transpose:()=>Un});function st(){var t=new A(9);return A!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function Gn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Vn(t){var e=new A(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Dn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Bn(t,e,r,n,o,i,a,s,l){var p=new A(9);return p[0]=t,p[1]=e,p[2]=r,p[3]=n,p[4]=o,p[5]=i,p[6]=a,p[7]=s,p[8]=l,p}function Xn(t,e,r,n,o,i,a,s,l,p){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=i,t[5]=a,t[6]=s,t[7]=l,t[8]=p,t}function kn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Un(t,e){if(t===e){var r=e[1],n=e[2],o=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=o}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function Wn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],p=e[7],u=e[8],c=u*a-s*p,h=-u*i+s*l,f=p*i-a*l,m=r*c+n*h+o*f;return m?(m=1/m,t[0]=c*m,t[1]=(-u*n+o*p)*m,t[2]=(s*n-o*a)*m,t[3]=h*m,t[4]=(u*r-o*l)*m,t[5]=(-s*r+o*i)*m,t[6]=f*m,t[7]=(-p*r+n*l)*m,t[8]=(a*r-n*i)*m,t):null}function Zn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],p=e[7],u=e[8];return t[0]=a*u-s*p,t[1]=o*p-n*u,t[2]=n*s-o*a,t[3]=s*l-i*u,t[4]=r*u-o*l,t[5]=o*i-r*s,t[6]=i*p-a*l,t[7]=n*l-r*p,t[8]=r*a-n*i,t}function Qn(t){var e=t[0],r=t[1],n=t[2],o=t[3],i=t[4],a=t[5],s=t[6],l=t[7],p=t[8];return e*(p*i-a*l)+r*(-p*o+a*s)+n*(l*o-i*s)}function Ht(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],p=e[6],u=e[7],c=e[8],h=r[0],f=r[1],m=r[2],x=r[3],v=r[4],g=r[5],I=r[6],w=r[7],M=r[8];return t[0]=h*n+f*a+m*p,t[1]=h*o+f*s+m*u,t[2]=h*i+f*l+m*c,t[3]=x*n+v*a+g*p,t[4]=x*o+v*s+g*u,t[5]=x*i+v*l+g*c,t[6]=I*n+w*a+M*p,t[7]=I*o+w*s+M*u,t[8]=I*i+w*l+M*c,t}function Yn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],p=e[6],u=e[7],c=e[8],h=r[0],f=r[1];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t[4]=s,t[5]=l,t[6]=h*n+f*a+p,t[7]=h*o+f*s+u,t[8]=h*i+f*l+c,t}function Jn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],p=e[6],u=e[7],c=e[8],h=Math.sin(r),f=Math.cos(r);return t[0]=f*n+h*a,t[1]=f*o+h*s,t[2]=f*i+h*l,t[3]=f*a-h*n,t[4]=f*s-h*o,t[5]=f*l-h*i,t[6]=p,t[7]=u,t[8]=c,t}function Hn(t,e,r){var n=r[0],o=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=o*e[3],t[4]=o*e[4],t[5]=o*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function jn(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function qn(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Kn(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function $n(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function eo(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r+r,s=n+n,l=o+o,p=r*a,u=n*a,c=n*s,h=o*a,f=o*s,m=o*l,x=i*a,v=i*s,g=i*l;return t[0]=1-c-m,t[3]=u-g,t[6]=h+v,t[1]=u+g,t[4]=1-p-m,t[7]=f-x,t[2]=h-v,t[5]=f+x,t[8]=1-p-c,t}function to(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],p=e[7],u=e[8],c=e[9],h=e[10],f=e[11],m=e[12],x=e[13],v=e[14],g=e[15],I=r*s-n*a,w=r*l-o*a,M=r*p-i*a,B=n*l-o*s,X=n*p-i*s,ee=o*p-i*l,Y=u*x-c*m,k=u*v-h*m,U=u*g-f*m,R=c*v-h*x,P=c*g-f*x,oe=h*g-f*v,E=I*oe-w*P+M*R+B*U-X*k+ee*Y;return E?(E=1/E,t[0]=(s*oe-l*P+p*R)*E,t[1]=(l*U-a*oe-p*k)*E,t[2]=(a*P-s*U+p*Y)*E,t[3]=(o*P-n*oe-i*R)*E,t[4]=(r*oe-o*U+i*k)*E,t[5]=(n*U-r*P-i*Y)*E,t[6]=(x*ee-v*X+g*B)*E,t[7]=(v*M-m*ee-g*w)*E,t[8]=(m*X-x*M+g*I)*E,t):null}function ro(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function no(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function oo(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8])}function io(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function jt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function ao(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function so(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t}function lo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function co(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],s=t[5],l=t[6],p=t[7],u=t[8],c=e[0],h=e[1],f=e[2],m=e[3],x=e[4],v=e[5],g=e[6],I=e[7],w=e[8];return Math.abs(r-c)<=S*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(n-h)<=S*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(o-f)<=S*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-m)<=S*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(a-x)<=S*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(s-v)<=S*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(l-g)<=S*Math.max(1,Math.abs(l),Math.abs(g))&&Math.abs(p-I)<=S*Math.max(1,Math.abs(p),Math.abs(I))&&Math.abs(u-w)<=S*Math.max(1,Math.abs(u),Math.abs(w))}var po=Ht,uo=jt;var H={};Ne(H,{add:()=>hi,calculateW:()=>ri,clone:()=>ci,conjugate:()=>ai,copy:()=>pi,create:()=>pt,dot:()=>Cr,equals:()=>_i,exactEquals:()=>bi,exp:()=>br,fromEuler:()=>si,fromMat3:()=>xr,fromValues:()=>di,getAngle:()=>Ko,getAxisAngle:()=>qo,identity:()=>jo,invert:()=>ii,len:()=>gi,length:()=>yr,lerp:()=>mi,ln:()=>_r,mul:()=>fi,multiply:()=>vr,normalize:()=>ut,pow:()=>ni,random:()=>oi,rotateX:()=>$o,rotateY:()=>ei,rotateZ:()=>ti,rotationTo:()=>xi,scale:()=>Ir,set:()=>ui,setAxes:()=>Ci,setAxisAngle:()=>gr,slerp:()=>ze,sqlerp:()=>Ii,sqrLen:()=>vi,squaredLength:()=>Sr,str:()=>li});var y={};Ne(y,{add:()=>go,angle:()=>Go,bezier:()=>No,ceil:()=>vo,clone:()=>ho,copy:()=>fo,create:()=>Fe,cross:()=>pe,dist:()=>Zo,distance:()=>tr,div:()=>Wo,divide:()=>er,dot:()=>de,equals:()=>Xo,exactEquals:()=>Bo,floor:()=>bo,forEach:()=>Jo,fromValues:()=>Pe,hermite:()=>Lo,inverse:()=>Ao,len:()=>ct,length:()=>qt,lerp:()=>Mo,max:()=>xo,min:()=>_o,mul:()=>Uo,multiply:()=>$t,negate:()=>So,normalize:()=>lt,random:()=>Ro,rotateX:()=>Fo,rotateY:()=>Po,rotateZ:()=>zo,round:()=>Io,scale:()=>Co,scaleAndAdd:()=>yo,set:()=>mo,slerp:()=>wo,sqrDist:()=>Qo,sqrLen:()=>Yo,squaredDistance:()=>rr,squaredLength:()=>nr,str:()=>Do,sub:()=>ko,subtract:()=>Kt,transformMat3:()=>Eo,transformMat4:()=>Oo,transformQuat:()=>To,zero:()=>Vo});function Fe(){var t=new A(3);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function ho(t){var e=new A(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function qt(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function Pe(t,e,r){var n=new A(3);return n[0]=t,n[1]=e,n[2]=r,n}function fo(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function mo(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function go(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function Kt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function $t(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function er(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function vo(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function bo(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function _o(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function xo(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function Io(t,e){return t[0]=re(e[0]),t[1]=re(e[1]),t[2]=re(e[2]),t}function Co(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function yo(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function tr(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(r*r+n*n+o*o)}function rr(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return r*r+n*n+o*o}function nr(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function So(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Ao(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function lt(t,e){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function de(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function pe(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[0],s=r[1],l=r[2];return t[0]=o*l-i*s,t[1]=i*a-n*l,t[2]=n*s-o*a,t}function Mo(t,e,r,n){var o=e[0],i=e[1],a=e[2];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t}function wo(t,e,r,n){var o=Math.acos(Math.min(Math.max(de(e,r),-1),1)),i=Math.sin(o),a=Math.sin((1-n)*o)/i,s=Math.sin(n*o)/i;return t[0]=a*e[0]+s*r[0],t[1]=a*e[1]+s*r[1],t[2]=a*e[2]+s*r[2],t}function Lo(t,e,r,n,o,i){var a=i*i,s=a*(2*i-3)+1,l=a*(i-2)+i,p=a*(i-1),u=a*(3-2*i);return t[0]=e[0]*s+r[0]*l+n[0]*p+o[0]*u,t[1]=e[1]*s+r[1]*l+n[1]*p+o[1]*u,t[2]=e[2]*s+r[2]*l+n[2]*p+o[2]*u,t}function No(t,e,r,n,o,i){var a=1-i,s=a*a,l=i*i,p=s*a,u=3*i*s,c=3*l*a,h=l*i;return t[0]=e[0]*p+r[0]*u+n[0]*c+o[0]*h,t[1]=e[1]*p+r[1]*u+n[1]*c+o[1]*h,t[2]=e[2]*p+r[2]*u+n[2]*c+o[2]*h,t}function Ro(t,e){e=e===void 0?1:e;var r=Z()*2*Math.PI,n=Z()*2-1,o=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=n*e,t}function Oo(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[3]*n+r[7]*o+r[11]*i+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*o+r[8]*i+r[12])/a,t[1]=(r[1]*n+r[5]*o+r[9]*i+r[13])/a,t[2]=(r[2]*n+r[6]*o+r[10]*i+r[14])/a,t}function Eo(t,e,r){var n=e[0],o=e[1],i=e[2];return t[0]=n*r[0]+o*r[3]+i*r[6],t[1]=n*r[1]+o*r[4]+i*r[7],t[2]=n*r[2]+o*r[5]+i*r[8],t}function To(t,e,r){var n=r[0],o=r[1],i=r[2],a=r[3],s=e[0],l=e[1],p=e[2],u=o*p-i*l,c=i*s-n*p,h=n*l-o*s;return u=u+u,c=c+c,h=h+h,t[0]=s+a*u+o*h-i*c,t[1]=l+a*c+i*u-n*h,t[2]=p+a*h+n*c-o*u,t}function Fo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0],i[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),i[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Po(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),i[1]=o[1],i[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function zo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),i[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),i[2]=o[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Go(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2],l=Math.sqrt((r*r+n*n+o*o)*(i*i+a*a+s*s)),p=l&&de(t,e)/l;return Math.acos(Math.min(Math.max(p,-1),1))}function Vo(t){return t[0]=0,t[1]=0,t[2]=0,t}function Do(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Bo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function Xo(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2];return Math.abs(r-i)<=S*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-a)<=S*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-s)<=S*Math.max(1,Math.abs(o),Math.abs(s))}var ko=Kt,Uo=$t,Wo=er,Zo=tr,Qo=rr,ct=qt,Yo=nr,Jo=function(){var t=Fe();return function(e,r,n,o,i,a){var s,l;for(r||(r=3),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}();function Ho(){var t=new A(4);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function or(t){var e=new A(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function ir(t,e,r,n){var o=new A(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function ar(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function sr(t,e,r,n,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}function lr(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function cr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function dr(t){var e=t[0],r=t[1],n=t[2],o=t[3];return Math.sqrt(e*e+r*r+n*n+o*o)}function pr(t){var e=t[0],r=t[1],n=t[2],o=t[3];return e*e+r*r+n*n+o*o}function ur(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=o*a,t[3]=i*a,t}function dt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function hr(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t[3]=s+n*(r[3]-s),t}function fr(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}var ba=function(){var t=Ho();return function(e,r,n,o,i,a){var s,l;for(r||(r=4),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();function pt(){var t=new A(4);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function jo(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function gr(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function qo(t,e){var r=Math.acos(e[3])*2,n=Math.sin(r/2);return n>S?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function Ko(t,e){var r=Cr(t,e);return Math.acos(2*r*r-1)}function vr(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=r[0],l=r[1],p=r[2],u=r[3];return t[0]=n*u+a*s+o*p-i*l,t[1]=o*u+a*l+i*s-n*p,t[2]=i*u+a*p+n*l-o*s,t[3]=a*u-n*s-o*l-i*p,t}function $o(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*s,t[1]=o*l+i*s,t[2]=i*l-o*s,t[3]=a*l-n*s,t}function ei(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l-i*s,t[1]=o*l+a*s,t[2]=i*l+n*s,t[3]=a*l-o*s,t}function ti(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+o*s,t[1]=o*l-n*s,t[2]=i*l+a*s,t[3]=a*l-i*s,t}function ri(t,e){var r=e[0],n=e[1],o=e[2];return t[0]=r,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),t}function br(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=Math.exp(i),l=a>0?s*Math.sin(a)/a:0;return t[0]=r*l,t[1]=n*l,t[2]=o*l,t[3]=s*Math.cos(a),t}function _r(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=a>0?Math.atan2(a,i)/a:0;return t[0]=r*s,t[1]=n*s,t[2]=o*s,t[3]=.5*Math.log(r*r+n*n+o*o+i*i),t}function ni(t,e,r){return _r(t,e),Ir(t,t,r),br(t,t),t}function ze(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3],l=r[0],p=r[1],u=r[2],c=r[3],h,f,m,x,v;return f=o*l+i*p+a*u+s*c,f<0&&(f=-f,l=-l,p=-p,u=-u,c=-c),1-f>S?(h=Math.acos(f),m=Math.sin(h),x=Math.sin((1-n)*h)/m,v=Math.sin(n*h)/m):(x=1-n,v=n),t[0]=x*o+v*l,t[1]=x*i+v*p,t[2]=x*a+v*u,t[3]=x*s+v*c,t}function oi(t){var e=Z(),r=Z(),n=Z(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t}function ii(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i,s=a?1/a:0;return t[0]=-r*s,t[1]=-n*s,t[2]=-o*s,t[3]=i*s,t}function ai(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function xr(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(e[o*3+o]-e[i*3+i]-e[a*3+a]+1),t[o]=.5*n,n=.5/n,t[3]=(e[i*3+a]-e[a*3+i])*n,t[i]=(e[i*3+o]+e[o*3+i])*n,t[a]=(e[a*3+o]+e[o*3+a])*n}return t}function si(t,e,r,n){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:at,i=Math.PI/360;e*=i,n*=i,r*=i;var a=Math.sin(e),s=Math.cos(e),l=Math.sin(r),p=Math.cos(r),u=Math.sin(n),c=Math.cos(n);switch(o){case"xyz":t[0]=a*p*c+s*l*u,t[1]=s*l*c-a*p*u,t[2]=s*p*u+a*l*c,t[3]=s*p*c-a*l*u;break;case"xzy":t[0]=a*p*c-s*l*u,t[1]=s*l*c-a*p*u,t[2]=s*p*u+a*l*c,t[3]=s*p*c+a*l*u;break;case"yxz":t[0]=a*p*c+s*l*u,t[1]=s*l*c-a*p*u,t[2]=s*p*u-a*l*c,t[3]=s*p*c+a*l*u;break;case"yzx":t[0]=a*p*c+s*l*u,t[1]=s*l*c+a*p*u,t[2]=s*p*u-a*l*c,t[3]=s*p*c-a*l*u;break;case"zxy":t[0]=a*p*c-s*l*u,t[1]=s*l*c+a*p*u,t[2]=s*p*u+a*l*c,t[3]=s*p*c-a*l*u;break;case"zyx":t[0]=a*p*c-s*l*u,t[1]=s*l*c+a*p*u,t[2]=s*p*u-a*l*c,t[3]=s*p*c+a*l*u;break;default:throw new Error("Unknown angle order "+o)}return t}function li(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var ci=or,di=ir,pi=ar,ui=sr,hi=lr,fi=vr,Ir=cr,Cr=dt,mi=hr,yr=dr,gi=yr,Sr=pr,vi=Sr,ut=ur,bi=fr;function _i(t,e){return Math.abs(dt(t,e))>=1-S}var xi=function(){var t=Fe(),e=Pe(1,0,0),r=Pe(0,1,0);return function(n,o,i){var a=de(o,i);return a<-.999999?(pe(t,e,o),ct(t)<1e-6&&pe(t,r,o),lt(t,t),gr(n,t,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(pe(t,o,i),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+a,ut(n,n))}}(),Ii=function(){var t=pt(),e=pt();return function(r,n,o,i,a,s){return ze(t,n,a,s),ze(e,o,i,s),ze(r,t,e,2*s*(1-s)),r}}(),Ci=function(){var t=st();return function(e,r,n,o){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],ut(e,xr(e,t))}}();function Si(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillRect(0,0,255,255);let r=new Uint8ClampedArray(256*4);for(let n=0;n<256;n++){for(let i=0;i<256*4;i++)r[i]=Math.floor(Math.random()*256);let o=new ImageData(r,256,1);e.putImageData(o,0,n)}return e}var Ar=Si();var Ai=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ht=H.create();function Mi(t,e){return t===e.INVALID_ENUM?"Invalid enum":t===e.INVALID_VALUE?"Invalid value":t===e.INVALID_OPERATION?"Invalid operation":t===e.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":t===e.OUT_OF_MEMORY?"Out of memory":t===e.CONTEXT_LOST_WEBGL?"Context lost WebGL":t===e.NO_ERROR?"No error":`Unknown error ${t}`}var wi=1,Li=2,Ni=4,Ri=8,Oi=16;function ue(t,e){return t?e:0}var he=class t{gl;shader;positionBuffer;uMaterials;uParameters;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uShadowSharpness;uNoise;noiseTexture;cameraPosition=y.create();cameraTarget=y.create();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;shadowSharpness=128;enableShadows=!0;enableShowMarches=!1;enableDepth=!1;enableNormals=!1;enableToLightNormals=!1;enableSoftShadows=!0;canvasScale=1;cameraMatrixForSdfArray=K.create();prevMaterials;prevLights;prevParameters;prevShaderText;constructor(e,r,n,o,i,a,s,l,p,u,c,h,f,m,x,v,g){this.gl=e,this.shader=r,this.prevShaderText=n,this.positionBuffer=o,this.uMaterials=s,this.uParameters=l,this.uLights=i,this.uNumLights=a,this.uCameraPosition=p,this.uCameraMatrix=u,this.uAspectRatio=c,this.uMaxMarchingSteps=h,this.uEpsilon=f,this.uFlags=m,this.uShadowSharpness=x,this.uNoise=v,this.noiseTexture=g}destroy(){this.gl.deleteProgram(this.shader.program)}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,r){this.cameraRotationX+=e,this.cameraRotationY+=r,this.updateCamera()}updateCamera(){H.fromEuler(ht,this.cameraRotationX,this.cameraRotationY,0);let e=y.create();y.transformQuat(e,[0,0,1],ht),y.scaleAndAdd(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),K.fromQuat(this.cameraMatrixForSdfArray,ht),K.transpose(this.cameraMatrixForSdfArray,this.cameraMatrixForSdfArray)}resizeCanvas=(e,r)=>{let n=e*this.canvasScale,o=r*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=o,this.gl.viewport(0,0,n,o);let i=n/o;this.gl.uniform1f(this.uAspectRatio,i)};render(e){this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.prevParameters!==e.getParameters()&&(this.prevParameters=e.getParameters(),console.info("Rendering new parameters",this.prevParameters),this.gl.uniform1fv(this.uParameters,this.prevParameters));let r=0;r|=ue(this.enableShadows,wi),r|=ue(this.enableDepth,Ni),r|=ue(this.enableNormals,Ri),r|=ue(this.enableShowMarches,Li),r|=ue(this.enableToLightNormals,Oi),this.gl.uniform1i(this.uFlags,r),this.gl.uniform1f(this.uShadowSharpness,this.shadowSharpness),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition[0],this.cameraPosition[1],this.cameraPosition[2]),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e,r){let n=e.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let o=n.createBuffer();if(o==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(Ai),n.STATIC_DRAW);let i={"assembled-shader":r,"sdf-functions":Qt,"raymarch-functions":Yt},a=ce.create(n,i,Zt,Jt);n.useProgram(a.program);let s=this.getAttribute(n,a,"aPosition");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let l=this.getUniform(n,a,"uCameraMatrix"),p=this.getUniform(n,a,"uCameraPosition"),u=this.getUniform(n,a,"uAspectRatio"),c=this.getUniform(n,a,"uMaterials"),h=this.getUniform(n,a,"uLights"),f=this.getUniform(n,a,"uNumLights"),m=this.getUniform(n,a,"uParams"),x=this.getUniform(n,a,"uMaxMarchingSteps"),v=this.getUniform(n,a,"uEpsilon"),g=this.getUniform(n,a,"uFlags"),I=this.getUniform(n,a,"uShadowSharpness"),w=this.getUniform(n,a,"uNoise"),M=n.createTexture(),B=Ar;return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,M),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,256,256,0,n.RGBA,n.UNSIGNED_BYTE,B.canvas),this.checkError(n),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.uniform1i(w,0),this.checkError(n),new t(n,a,r,o,h,f,c,m,p,l,u,x,v,g,I,w,M)}static checkError(e){let r=e.getError();r!=e.NO_ERROR&&console.error(`GL Error: ${Mi(r,e)}`)}static getAttribute(e,r,n){let o=e.getAttribLocation(r.program,n);if(o<0)throw new Error(`Unable to find attribute ${n}`);return o}static getUniform(e,r,n){let o=e.getUniformLocation(r.program,n);return o==null,o}};var wr=Nt(Mr()),Ti={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,enableDepth:!1,enableNormals:!1,enableToLightNormals:!1,enableSoftShadows:!0,epsilon:1e-4,shadowSharpness:128,pixelated:!1},gt={options:Ti},C=new wr.default({viewports:[gt],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1},exampleModal:{show:!1},currentShader:"return 100.0;"});var vt=0,bt=1,Lr=2;function Ge(){return crypto.randomUUID()}var Ve=J.ARRAY_TYPE;function _t(){let t=new Ve(3);return t[0]=1,t[1]=1,t[2]=1,t}function L(t,e,r){let n=new Ve(3);return n[0]=t,n[1]=e,n[2]=r,n}function De(){let t=new Ve(4);return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t}function me(t,e,r,n){let o=new Ve(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function Nr(t,e){let r={...t.nodes,[e.id]:e};return{...t,nodes:r}}function Rr(t){let e=t.nodes[t.rootNodeId];if(!e)return[];let r=new Array(Object.keys(t.nodes).length);return Pr(e,t.nodes,0,0,r),r}function xt(t){return{colour:De(),radius:10,...t}}function Or(t,e){return{name:t,id:Ge(),position:y.create(),rotation:y.create(),childrenIds:[],selfOpCode:"none",childOpCode:"none",operationParams:.5,shape:It({}),hasShape:!1,light:xt({}),hasLight:!1,...e}}function ge(t,e,r,n){return{name:t,id:Ge(),position:r??y.create(),rotation:n??y.create(),childrenIds:[],selfOpCode:"none",childOpCode:"none",operationParams:.5,shape:It({}),hasShape:!1,light:e!=null?xt(e):void 0,hasLight:e!=null}}function z(t,e,r,n,o){return{name:t,id:Ge(),position:r??y.create(),rotation:n??y.create(),shape:e!=null?It(e):void 0,hasShape:e!=null,light:xt({}),hasLight:!1,childrenIds:[],selfOpCode:"none",childOpCode:o??"none",operationParams:.5}}function It(t){return{maxSize:0,type:"none",shapeParams:y.create(),diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10,cloud:!1,...t}}function T(t,e){t.childrenIds.push(e.id),e.parentId=t.id}function Er(t,e,r){e={...e,childrenIds:[...e.childrenIds,r.id]},r={...r,parentId:e.id};let n={...t.nodes,[e.id]:e,[r.id]:r};return{...t,nodes:n}}function Tr(t,e){if(e.parentId===void 0)return t;let r=t.nodes[e.parentId],n=r.childrenIds.findIndex(o=>o===e.id);if(n>=0){let o=[...r.childrenIds];o.splice(n,1),r={...r,childrenIds:o};let i={...t.nodes,[r.id]:r};return delete i[e.id],{...t,nodes:i}}return t}function Fr(t,e,r){if(r.parentId==null)return t;let n=t.nodes[r.parentId],o=n.childrenIds.findIndex(a=>a===r.id);if(o>=0){let a=[...n.childrenIds];a.splice(o,1),n={...n,childrenIds:a}}e.childrenIds.includes(r.id)||(e={...e,childrenIds:[...e.childrenIds,r.id]}),r={...r,parentId:e.id};let i={...t.nodes,[n.id]:n,[e.id]:e,[r.id]:r};return{...t,nodes:i}}function Pr(t,e,r,n,o){if(o[n]={node:t,depth:r},t.childrenIds!=null)for(let i of t.childrenIds){let a=e[i];a&&(n=Pr(a,e,r+1,n+1,o))}return n}function Ct(t,e){return r=>{let n=r.viewports[t]??gt,o={...n,options:{...n.options,...e}},i=[...r.viewports];return i[t]=o,{viewports:i}}}function Be(t){return e=>({reparentModal:{...e.reparentModal,...t}})}function Xe(t){return e=>({rawSceneModal:{...e.rawSceneModal,...t}})}function ke(t){return e=>({exampleModal:{...e.exampleModal,...t}})}function zr(t){return e=>({sceneTree:Nr(e.sceneTree,t)})}function G(t){return()=>({sceneTree:t})}function Gr(t){return()=>({currentShader:t})}function Vr(t){return e=>{let r;if(t){for(let n of Object.values(e.sceneTree.nodes))if(n.childrenIds.includes(t)){r=n.id;break}}return{selectedNodeId:t,selectedParentNodeId:r}}}var Dr,D,yt,Br;var Jr=[],N=_,Xr=N.__b,kr=N.__r,Ur=N.diffed,Wr=N.__c,Zr=N.unmount,Qr=N.__;function Fi(){for(var t;t=Jr.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ue),t.__H.__h.forEach(St),t.__H.__h=[]}catch(e){t.__H.__h=[],N.__e(e,t.__v)}}N.__b=function(t){D=null,Xr&&Xr(t)},N.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Qr&&Qr(t,e)},N.__r=function(t){kr&&kr(t),Dr=0;var e=(D=t.__c).__H;e&&(yt===D?(e.__h=[],D.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(Ue),e.__h.forEach(St),e.__h=[],Dr=0)),yt=D},N.diffed=function(t){Ur&&Ur(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Jr.push(e)!==1&&Br===N.requestAnimationFrame||((Br=N.requestAnimationFrame)||Pi)(Fi)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),yt=D=null},N.__c=function(t,e){e.some(function(r){try{r.__h.forEach(Ue),r.__h=r.__h.filter(function(n){return!n.__||St(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],N.__e(n,r.__v)}}),Wr&&Wr(t,e)},N.unmount=function(t){Zr&&Zr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Ue(n)}catch(o){e=o}}),r.__H=void 0,e&&N.__e(e,r.__v))};var Yr=typeof requestAnimationFrame=="function";function Pi(t){var e,r=function(){clearTimeout(n),Yr&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);Yr&&(e=requestAnimationFrame(r))}function Ue(t){var e=D,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),D=e}function St(t){var e=D;t.__c=t.__(),D=e}function Gi(t,e){for(var r in e)t[r]=e[r];return t}function Hr(t,e){for(var r in t)if(r!=="__source"&&!(r in e))return!0;for(var n in e)if(n!=="__source"&&t[n]!==e[n])return!0;return!1}function jr(t,e){this.props=t,this.context=e}(jr.prototype=new b).isPureReactComponent=!0,jr.prototype.shouldComponentUpdate=function(t,e){return Hr(this.props,t)||Hr(this.state,e)};var qr=_.__b;_.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),qr&&qr(t)};var ds=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Vi=_.__e;_.__e=function(t,e,r,n){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e)}Vi(t,e,r,n)};var Kr=_.unmount;function on(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),t.__c.__H=null),(t=Gi({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(n){return on(n,e,r)})),t}function an(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(n){return an(n,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function At(){this.__u=0,this.o=null,this.__b=null}function sn(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function We(){this.i=null,this.l=null}_.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Kr&&Kr(t)},(At.prototype=new b).__c=function(t,e){var r=e.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=sn(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=an(l,l.__c.__P,l.__c.__O)}var p;for(n.setState({__a:n.__b=null});p=n.o.pop();)p.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(a,a)},At.prototype.componentWillUnmount=function(){this.o=[]},At.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=on(this.__b,r,n.__O=n.__P)}this.__b=null}var o=e.__a&&d(O,null,t.fallback);return o&&(o.__u&=-33),[d(O,null,e.__a?null:t.children),o]};var $r=function(t,e,r){if(++r[1]===r[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(r=t.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.i=r=r[2]}};function Di(t){return this.getChildContext=function(){return t.context},t.children}function Bi(t){var e=this,r=t.h;if(e.componentWillUnmount=function(){le(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var n=e.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(o,i){this.childNodes.push(o),e.h.insertBefore(o,i)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.h.removeChild(o)}}}le(d(Di,{context:e.context},t.__v),e.v)}function Ze(t,e){var r=d(Bi,{__v:t,h:e});return r.containerInfo=e,r}(We.prototype=new b).__a=function(t){var e=this,r=sn(e.__v),n=e.l.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),$r(e,t,n)):o()};r?r(i):i()}},We.prototype.render=function(t){this.i=null,this.l=new Map;var e=se(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var r=e.length;r--;)this.l.set(e[r],this.i=[1,0,this.i]);return t.children},We.prototype.componentDidUpdate=We.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,r){$r(t,r,e)})};var Xi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ki=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ui=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Wi=/[A-Z0-9]/g,Zi=typeof document<"u",Qi=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var en=_.event;function Yi(){}function Ji(){return this.cancelBubble}function Hi(){return this.defaultPrevented}_.event=function(t){return en&&(t=en(t)),t.persist=Yi,t.isPropagationStopped=Ji,t.isDefaultPrevented=Hi,t.nativeEvent=t};var ln,ji={enumerable:!1,configurable:!0,get:function(){return this.class}},tn=_.vnode;_.vnode=function(t){typeof t.type=="string"&&function(e){var r=e.props,n=e.type,o={},i=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||Zi&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||Qi(r.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":Ui.test(a)&&(a=l):l=a="oninput":i&&ki.test(a)?a=a.replace(Wi,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&o[a=l]&&(a="oninputCapture"),o[a]=s}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=se(r.children).forEach(function(p){p.props.selected=o.value.indexOf(p.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=se(r.children).forEach(function(p){p.props.selected=o.multiple?o.defaultValue.indexOf(p.props.value)!=-1:o.defaultValue==p.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",ji)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),e.props=o}(t),t.$$typeof=Xi,tn&&tn(t)};var rn=_.__r;_.__r=function(t){rn&&rn(t),ln=t.__c};var nn=_.diffed;_.diffed=function(t){nn&&nn(t);var e=t.props,r=t.__e;r!=null&&t.type==="textarea"&&"value"in e&&e.value!==r.value&&(r.value=e.value==null?"":e.value),ln=null};var ve=class extends b{buttonRef=V();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:r,text:n,children:o}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect();a={left:s.left+"px",top:s.top+s.height+"px"}}return d(O,null,d("button",{...r,ref:this.buttonRef,onClick:this.toggleMenu},n),i&&Ze(d("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},d("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},o)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var ne=t=>d("label",{style:{display:"inline-block"}},t.label,d("input",{style:{display:"block"},type:"range",...t.inputProps}));var be=class extends b{render(e){let{pixelated:r,renderScale:n,enableShadows:o,enableShowMarching:i,enableDepth:a,enableNormals:s,enableToLightNormals:l,epsilon:p,shadowSharpness:u,maxMarchingStep:c}=this.props.options;return d("div",{class:"viewport-options"},d(ve,{text:"Menu"},d("div",{class:"control-group-vertical"},d("button",{onClick:this.togglePixelated},r?"Smooth":"Pixelated"),d("select",{onChange:this.changeRenderScale,value:n},d("option",{value:"2"},"2x"),d("option",{value:"1.5"},"1.5x"),d("option",{value:"1"},"1x"),d("option",{value:"0.5"},"0.5x"),d("option",{value:"0.25"},"0.25x"),d("option",{value:"0.125"},"0.125x")),d("button",{onClick:this.toggleShadows},o?"Hide Shadows":"Show Shadows"),d("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),d("button",{onClick:this.toggleDepth},a?"Hide Depth":"Show Depth"),d("button",{onClick:this.toggleNormals},s?"Hide Normals":"Show Normals"),d("button",{onClick:this.toggleToLightNormals},l?"Hide To Light":"Show To Light"),d("button",{onClick:this.showExamples},"Show Examples"),d("button",{onClick:this.showRawScene},"JSON Scene")),d(ne,{label:`Epsilon ${p}`,inputProps:{value:p,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),d(ne,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}),d(ne,{label:`Shadows ${u}`,inputProps:{value:u,min:0,max:256,step:.1,onInput:this.changeShadowSharpness}})))}showRawScene=()=>{C.execute(Xe({show:!0}))};showExamples=()=>{C.execute(ke({show:!0}))};changeEpsilon=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:r})};changeShadowSharpness=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Shadow sharpness parse failed");return}this.updateOptions({shadowSharpness:r})};changeMarchingSteps=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(r)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};toggleDepth=e=>{this.updateOptions({enableDepth:!this.props.options.enableDepth})};toggleNormals=e=>{this.updateOptions({enableNormals:!this.props.options.enableNormals})};toggleToLightNormals=e=>{this.updateOptions({enableToLightNormals:!this.props.options.enableToLightNormals})};updateOptions=e=>{console.log("Options",e),C.execute(Ct(this.props.viewportIndex,e))};changeRenderScale=e=>{let r=e.target.value,n=Number.parseFloat(r);isFinite(n)?C.execute(Ct(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",r)}};var Qe=class extends b{canvasRef=V();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.createNewRenderer(e),this.renderer.updateCamera(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),d("div",{class:"viewport outer-panel"},d("canvas",{className:e,ref:this.canvasRef}),d(be,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{if(this.renderFrameCallback=-1,this.renderer.prevShaderText!==this.props.currentShader){console.log("New shader!",this.renderer.prevShaderText,this.props.currentShader);let r=this.renderer.cameraRotationX,n=this.renderer.cameraRotationY,o=this.renderer.cameraDistance;this.renderer.destroy(),this.createNewRenderer(this.canvasRef.current),this.renderer.cameraRotationX=r,this.renderer.cameraRotationY=n,this.renderer.cameraDistance=o,this.renderer.updateCamera()}let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.shadowSharpness=e.shadowSharpness,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.enableDepth=e.enableDepth,this.renderer.enableNormals=e.enableNormals,this.renderer.enableToLightNormals=e.enableToLightNormals,this.renderer.enableSoftShadows=e.enableSoftShadows,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};createNewRenderer=e=>{this.renderer=he.create(e,this.props.currentShader),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.updateCanvasSize(),this.renderer.setupCanvas()};onPointerDown=e=>{e.target===this.canvasRef.current&&(this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let r=e.clientX-this.mousePosX,n=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-n,-r),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let r=e.deltaY>0?1:-1,n=this.zoom+r;this.zoom=Math.max(Math.min(100,n),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var j=class extends b{inputRef=V();addedOnChange=!1;componentDidMount(){this.addedOnChange||this.inputRef.current.addEventListener("change",this.onChange)}componentWillUnmount(){this.addedOnChange&&this.inputRef.current.removeEventListener("change",this.onChange)}render(){let{value:e,placeholder:r,disabled:n,step:o}=this.props,i=100*(o||1),a=Math.round(e*i)/i;return d("input",{disabled:n,step:o,placeholder:r,type:"number",class:this.props.class,value:a,ref:this.inputRef})}onChange=e=>{let r=e.target,n=100*(this.props.step||1),o=Math.round(r.valueAsNumber*n)/n;this.props.onChange(this.props.value,o)}};function qi(t,e){return t.length>=3||e>=3}function Ki(t,e){return t.length===4||e===4}var F=class extends b{render(){let{value:e,disabled:r,forceLength:n}=this.props,o=qi(e,n),i=Ki(e,n);return d("div",{class:"vector control-group"},d(j,{class:"input",disabled:r,value:e[0],onChange:this.onChangeX,placeholder:"x",step:.1}),d(j,{class:"input",disabled:r,value:e[1],onChange:this.onChangeY,placeholder:"y",step:.1}),o&&d(j,{class:"input",disabled:r,value:e[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),i&&d(j,{class:"input",disabled:r,value:e[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=(e,r)=>{this.updateVector(r,0)};onChangeY=(e,r)=>{this.updateVector(r,1)};onChangeZ=(e,r)=>{this.updateVector(r,2)};onChangeW=(e,r)=>{this.updateVector(r,3)};updateVector=(e,r)=>{let n=this.props.value;console.log("Update vector index",r,e);let o=y.clone(n);o[r]=e,this.props.onChange(n,o)}};var _e=class extends b{render(){let e=this.props.shape,r=e.lightingModel==="phong";return d("div",null,d("div",null,d("strong",null,"Type")," ",d("select",{value:e.type??"none",onChange:this.onChangeType},d("option",{value:"none"},"None"),d("option",{value:"box"},"Box"),d("option",{value:"sphere"},"Sphere"),d("option",{value:"hexPrism"},"Hex Prism"),d("option",{value:"torus"},"Torus"),d("option",{value:"octahedron"},"Octahedron"),d("option",{value:"cylinder"},"Cylinder"),d("option",{value:"icosahedron"},"Icosahedron"),d("option",{value:"mandelbulb"},"Mandelbulb"))),d("div",null,d("strong",null,"Shape Params")," ",d(F,{value:e.shapeParams,onChange:this.onChangeShapeParams})),d("div",null,d("strong",null,"Lighting Model")," ",d("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},d("option",{value:"unlit"},"Unlit"),d("option",{value:"lambert"},"Lambert"),d("option",{value:"phong"},"Phong"))),d("div",null,d("strong",null,"Cloud")," ",d("input",{type:"checkbox",checked:e.cloud,onChange:this.onChangeCloud})),d("div",null,d("strong",null,"Diffuse Colour")," ",d(F,{value:e.diffuseColour,onChange:this.onChangeDiffuseColour})),d("div",null,d("strong",null,"Specular Colour")," ",d(F,{disabled:!r,value:e.specularColour,onChange:this.onChangeSpecularColour})),d("div",null,d("strong",null,"Shininess")," ",d("input",{class:"input",disabled:!r,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeCloud=e=>{let r=e.target.checked;this.updateField(r,"cloud")};onChangeType=e=>{let r=e.target.value;this.updateField(r,"type")};onChangeLightingModel=e=>{let r=e.target.value;this.updateField(r,"lightingModel")};onChangeShininess=e=>{let r=parseFloat(e.target.value);isFinite(r)&&this.updateField(r,"shininess")};onChangeShapeParams=(e,r)=>{this.updateField(r,"shapeParams")};onChangeDiffuseColour=(e,r)=>{this.updateField(r,"diffuseColour")};onChangeSpecularColour=(e,r)=>{this.updateField(r,"specularColour")};updateField=(e,r)=>{console.log("Update shape",r,e);let n={...this.props.shape,[r]:e};this.props.onChange(n)}};var xe=class extends b{render(){let e=this.props.light;return e===void 0?d("div",null,"Empty Light"):d("div",null,d("div",null,d("strong",null,"Colour")," ",d(F,{forceLength:3,value:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,r)=>{this.updateField(r,"colour")};updateField=(e,r)=>{console.log("Update light",r,e);let n={...this.props.light,[r]:e};this.props.onChange(n)}};var Ie=class extends b{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:r}=this.props;if(e==null)return d("div",{class:"scene-node-view"},"No node selected");let n=e.parentId!=null?r.nodes[e.parentId]:void 0,o=e.childOpCode??"none",i=e.selfOpCode??"none",a=e.operationParams;return d("div",{class:"scene-node-view"},d("div",null,d("strong",null,"Name")," ",d("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),d("div",null,d("strong",null,"Position")," ",d(F,{value:e.position,onChange:this.onChangePosition})),d("div",null,d("strong",null,"Rotation")," ",d(F,{value:e.rotation,onChange:this.onChangeRotation})),d("div",null,d("strong",null,"Self Op Code")," ",d("select",{value:i,onChange:this.onChangeSelfOpCode},d("option",{value:"none"},"None"),d("option",{value:"repeatDomain"},"Repeat Domain"))),d("div",null,d("strong",null,"Child Op Code")," ",d("select",{value:o,onChange:this.onChangeChildOpCode},d("option",{value:"none"},"None"),d("option",{value:"union"},"Union"),d("option",{value:"intersection"},"Intersection"),d("option",{value:"subtraction"},"Subtraction"),d("option",{value:"xor"},"Xor"),d("option",{value:"smoothUnion"},"Smooth Union"),d("option",{value:"smoothIntersection"},"Smooth Intersection"),d("option",{value:"smoothSubtraction"},"Smooth Subtraction"))),d("div",null,d(ne,{label:`Operation Param ${a}`,inputProps:{value:a,min:0,max:10,step:.1,onInput:this.changeOperationParam}})),d("div",null,d("strong",null,"Shape")," ",d("button",{onClick:this.toggleShape},e.hasShape?"Hide":"Show"),e.hasShape&&d(_e,{shape:e.shape,onChange:this.onChangeShape})),d("div",null,d("strong",null,"Light")," ",d("button",{onClick:this.toggleLight},e.hasLight?"Hide":"Show"),e.hasLight&&d(xe,{light:e.light,onChange:this.onChangeLight})),d("div",null,d("strong",null,"Children")),d("div",{class:"control-group"},d("button",{onClick:this.addChild},"Add"),n!=null&&d(O,null,d("button",{onClick:this.deleteSelf},"Delete"),d("button",{onClick:this.reparent},"Re-parent"))))}addChild=()=>{let e=Er(this.props.sceneTree,this.props.node,Or("New Child",{}));C.execute(G(e))};deleteSelf=()=>{let e=Tr(this.props.sceneTree,this.props.node);C.execute(G(e))};reparent=()=>{let{node:e,sceneTree:r}=this.props;if((e.parentId!=null?r.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}C.execute(Be({show:!0,childNodeId:this.props.node.id}))};changeOperationParam=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Operation param parse failed");return}this.updateField(r,"operationParams")};toggleShape=()=>{let e=this.props.node.hasShape;this.updateField(!e,"hasShape")};toggleLight=()=>{let e=this.props.node.hasLight;this.updateField(!e,"hasLight")};onChangeName=e=>{let r=e.target.value;this.updateField(r,"name")};onChangePosition=(e,r)=>{this.updateField(r,"position")};onChangeRotation=(e,r)=>{this.updateField(r,"rotation")};onChangeSelfOpCode=e=>{let r=e.target.value;this.updateField(r,"selfOpCode")};onChangeChildOpCode=e=>{let r=e.target.value;this.updateField(r,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,r)=>{console.log("Update shape node",r,e);let n={...this.props.node,[r]:e};this.props.onChange(n,this.props.node)}};function Mt(t,e,r){return(r==null||r===!0)&&(t+=" "+e),t}var Ce=class extends b{render(){let{depth:e,node:r,isSelected:n,disable:o}=this.props,i=Mt(Mt("scene-node-tree-item","is-selected",n),"is-disabled",o===!0);return d("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",r.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var $=class extends b{render(){return d("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:r,onItemClicked:n}=this.props,o=e.nodes[e.rootNodeId],i=[];if(o==null)return i;let a=Rr(e);for(let s of a){let l=s.node.id===r;i.push(d(Ce,{isSelected:l,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return i}};var ye=class extends b{render(){let{sceneTree:e,selectedNodeId:r}=this.props,n=e.nodes[r];return d("div",{class:"scene-tree"},d("div",{class:"scene-tree__contents outer-panel"},d("div",{class:"inner-panel"},d($,{sceneTree:e,selectedNodeId:r,onItemClicked:this.onNodeClicked})),d("div",{class:"inner-panel scene-tree__nodes"},d(Ie,{sceneTree:e,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{C.execute(Vr(e.id))};onChangeSelectedNode=(e,r)=>{C.execute(zr(e))}};var Q=class extends b{render(){let{show:e,onRequestClose:r}=this.props;if(e===!1)return null;let n=this.props.portalContainer??"modals",o=document.getElementById(n),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return Ze(d("div",{class:"modal-backdrop",onPointerDown:r},d("div",{class:a,onPointerDown:this.preventClose},this.props.children)),o)}preventClose=e=>{e.stopImmediatePropagation()}};var Se=class extends b{render(){let{show:e,sceneTree:r,disabledNodeIds:n,onRequestClose:o}=this.props;return d(Q,{show:e,onRequestClose:o},d($,{sceneTree:r,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var Ae=class extends b{render(){let{show:e}=this.props.state,r=this.getDisabledNodeIds();return d(Se,{show:e,disabledNodeIds:r,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{C.execute(Be({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:r}=this.props.state;if(!e)return[];let{sceneTree:n}=this.props,o=n.nodes[r];return[o.id,o.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let r=this.props.sceneTree.nodes[this.props.state.childNodeId],n=Fr(this.props.sceneTree,e,r);C.execute(G(n))}};var Me=class extends b{prevSceneTree=void 0;preRef=V();render(){let{show:e}=this.props.state,{sceneTree:r}=this.props,n="";return e&&this.prevSceneTree!==r&&(n=JSON.stringify(r,null,2)),d(Q,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal",portalContainer:"raw-json-modal"},d("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},d("pre",null,n)),d("span",{class:"control-group"},d("button",{onClick:this.loadFromHtml},"Load From Json"),d("label",{class:"button"},"Load From File",d("input",{type:"file",onChange:this.loadFromFile})),d("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{C.execute(Xe({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="scene.json",r.click(),URL.revokeObjectURL(r.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let r=e.target;typeof r.result=="string"?this.loadFromText(r.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let r=JSON.parse(e);r!=null&&C.execute(G(r))}};function $i(){let t=z("Root",null,void 0,void 0,"union"),e=z("Main",null,void 0,void 0,"subtraction");T(t,e);let r=z("Hex Prism",{type:"hexPrism",shapeParams:L(.75,2,0),maxSize:1.5,diffuseColour:L(.5,.5,.5)}),n=z("Box & Sphere",void 0,void 0,void 0,"union");T(e,r),T(e,n);let o=z("Box",{type:"box",shapeParams:L(6,1,6),diffuseColour:L(1,1,1),lightingModel:"lambert"},L(0,-1.5,0)),i=z("Sphere",{type:"sphere",shapeParams:L(1.25,2,1),maxSize:2,diffuseColour:L(.1,.2,.9),lightingModel:"phong"});T(n,o),T(n,i);let a=ge("Red Light",{colour:me(1,.8,.6,1)},L(4,2,3)),s=ge("Green Light",{colour:me(.2,1,.6,1)},L(0,0,0));return T(t,a),T(t,s),{nodes:Je(t,e,r,n,o,i,a,s),rootNodeId:t.id}}var Ye=$i();function ea(){let t=z("Root",null,void 0,void 0,"union"),e=z("Sphere Small",{type:"sphere",shapeParams:L(1.25,2,1),diffuseColour:L(.1,.2,.9),lightingModel:"phong"}),r=z("Sphere Large",{type:"sphere",shapeParams:L(10,0,0),diffuseColour:L(.9,.2,.1),lightingModel:"phong"},L(0,-11,0));T(t,e),T(t,r);let n=ge("Red Light",{colour:me(1,.8,.6,1)},L(4,2,3));return T(t,n),{nodes:Je(t,e,r,n),rootNodeId:t.id}}var cn=ea();function Je(...t){let e={};for(let r of t)e[r.id]=r;return e}var He=[{tree:Ye,title:"Box, Sphere and Hex"},{tree:cn,title:"Two Spheres"}];var ta=t=>{let{title:e,tree:r}=t.example;return d("div",null,d("div",null,e),d("div",null,d("button",{onClick:()=>C.execute(G(r))},"Load")))},we=class extends b{render(){let{show:e}=this.props.state;return d(Q,{show:e,onRequestClose:this.onCloseModal,class:"example-modal",portalContainer:"raw-json-modal"},He.map((r,n)=>d(ta,{key:n,example:r})))}onCloseModal=()=>{C.execute(ke({show:!1}))}};var je=class extends b{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:r,sceneTree:n,selectedNodeId:o,reparentModal:i,rawSceneModal:a,exampleModal:s,currentShader:l}=this.props.state;return console.log("App render",this.props.state),d(O,null,d("div",{class:"main-view"},d("div",{class:"viewports"},d(Qe,{viewportIndex:0,options:r[0].options,sceneConverter:e,currentShader:l})),d(ye,{sceneTree:n,selectedNodeId:o})),d(Ae,{state:i,sceneTree:n}),d(Me,{state:a,sceneTree:n}),d(we,{state:s}))}};var qe=Nt(pn());function ra(t){let e=t.toString();return e.indexOf(".")<0&&(e+=".0"),e}var Le=class{result="";firstItem=!0;startFunction(e){this.writeValue(e+"("),this.firstItem=!0}endFunction(){this.result+=")"}writeRaw(e){this.result+=e}writeValue(e){this.firstItem||(this.result+=", "),typeof e=="number"?this.result+=ra(e):this.result+=e,this.firstItem=!1}writeParameter(e){this.writeValue("uParams["+e+"]")}getFinal(){return`return ${this.result};`}};var na=8,oa=8,ia={unlit:vt,lambert:bt,phong:Lr};function aa(t){return ia[t]||vt}var sa={box:{funcName:"sdfBox",numParams:3},sphere:{funcName:"sdfSphere",numParams:1},hexPrism:{funcName:"sdfHexPrism",numParams:2},torus:{funcName:"sdfTorus",numParams:2},octahedron:{funcName:"sdfOctahedron",numParams:1},cylinder:{funcName:"sdfCappedCylinder",numParams:2},icosahedron:{funcName:"sdfIcosahedron",numParams:1},mandelbulb:{funcName:"sdfMandelbulb",numParams:2}},Ke=class t{lights=[];lightDataArray=[];materials=[];materialDataArray=[];parameters=[];shader="";previousTree;getTree(){return this.previousTree}getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getParameters(){return this.parameters}getShader(){return this.shader}setLight(e,r){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...t.createNewLight(),...r}:this.lights[e]={...this.lights[e],...r},this.updateLight(e)}setMaterial(e,r){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...t.createNewMaterial(),...r}:this.materials[e]={...this.materials[e],...r},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||(this.previousTree=e,!e.nodes[e.rootNodeId]))return!1;let{lights:n,materials:o,parameters:i,assembler:a}=t.createShapesFromNode(e);if(!(0,qe.default)(this.lights,n)){this.lights=n,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,qe.default)(this.materials,o)){this.materials=o,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}return(0,qe.default)(this.parameters,i)||(this.parameters=i,console.log("Parameters",this.parameters)),this.shader=a.getFinal(),!0}static createShapesFromNode(e){let r=e.nodes[e.rootNodeId];if(!r)return;let n=[],o=[],i=[],a=new Le;return this.processNode(n,o,i,r,e.nodes,a),{lights:n,materials:o,parameters:i,assembler:a}}static nodeHasValidShape(e){return!(!e.hasShape||e.shape==null||e.shape.type==="none")}static processNode(e,r,n,o,i,a){let s=!1,l=0,p=0;if(o.childOpCode!=="none"){for(let c of o.childrenIds){let h=i[c];(this.nodeHasValidShape(h)||h.childOpCode!=="none")&&p++}p>1&&(s=!0,this.processOperation(o.childOpCode,a,n,o.operationParams),l++)}if(this.nodeHasValidShape(o)&&(s=!0,this.processShape(o,o.shape,r,n,a)),o.hasLight){let c=t.convertToLight(o);c!=null&&e.push(c)}let u=0;for(let c of o.childrenIds)this.processNode(e,r,n,i[c],i,a)&&(u++,p>2&&u+1<p&&(l++,this.processOperation(o.childOpCode,a,n,o.operationParams)));for(let c=0;c<l;c++)a.endFunction();return s}static processOperation(e,r,n,o){e==="union"?r.startFunction("opUnion"):e==="intersection"?r.startFunction("opIntersection"):e==="subtraction"?r.startFunction("opSubtraction"):e==="xor"?r.startFunction("opXor"):e==="smoothUnion"?(r.startFunction("opSmoothUnion"),this.pushParameter(n,o,r)):e==="smoothSubtraction"?(r.startFunction("opSmoothSubtraction"),this.pushParameter(n,o,r)):e==="smoothIntersection"?(r.startFunction("opSmoothIntersection"),this.pushParameter(n,o,r)):console.error("Unknown operation",e)}static pushParameter(e,r,n){n.writeParameter(e.length),e.push(r)}static writeSamplePoint(e,r,n){let o=e.position;e.selfOpCode==="repeatDomain"&&n.startFunction("repeatDomain");let i=H.create();H.fromEuler(i,e.rotation[0],e.rotation[1],e.rotation[2]),n.startFunction("quatMul"),n.startFunction("vec4"),this.pushParameter(r,i[0],n),this.pushParameter(r,i[1],n),this.pushParameter(r,i[2],n),this.pushParameter(r,i[3],n),n.endFunction(),n.startFunction("vec3"),this.pushParameter(r,-o[0],n),this.pushParameter(r,-o[1],n),this.pushParameter(r,-o[2],n),n.endFunction(),n.writeRaw(" + point"),n.endFunction(),e.selfOpCode==="repeatDomain"&&(this.pushParameter(r,e.operationParams,n),n.endFunction())}static processShape(e,r,n,o,i){let a=sa[r.type];if(a==null){console.error("Unsupported shape type");return}i.startFunction("vec2");let s={diffuseColour:r.diffuseColour,lightingModel:aa(r.lightingModel),specularColour:r.specularColour,shininess:r.shininess},l=n.length;n.push(s),i.startFunction(a.funcName),this.writeSamplePoint(e,o,i);let p=!1;a.numParams>=2&&a.numParams<=4&&(p=!0,i.startFunction("vec"+a.numParams));for(let u=0;u<a.numParams;u++)this.pushParameter(o,r.shapeParams[u],i);p&&i.endFunction(),i.endFunction(),i.writeValue(l),i.endFunction()}updateLight(e){let r=e*na,n=this.lights[e];this.lightDataArray[r]=n.position[0],this.lightDataArray[r+1]=n.position[1],this.lightDataArray[r+2]=n.position[2],this.lightDataArray[r+3]=n.radius,this.lightDataArray[r+4]=n.colour[0],this.lightDataArray[r+5]=n.colour[1],this.lightDataArray[r+6]=n.colour[2],this.lightDataArray[r+7]=n.colour[3]}updateMaterial(e){let r=e*oa,n=this.materials[e];this.materialDataArray[r]=n.diffuseColour[0],this.materialDataArray[r+1]=n.diffuseColour[1],this.materialDataArray[r+2]=n.diffuseColour[2],this.materialDataArray[r+3]=n.lightingModel,this.materialDataArray[r+4]=n.specularColour[0],this.materialDataArray[r+5]=n.specularColour[1],this.materialDataArray[r+6]=n.specularColour[2],this.materialDataArray[r+7]=n.shininess}static convertToLight(e){let r=e.light;return r==null?null:{colour:r.colour,position:e.position,radius:r.radius}}static createNewMaterial(){return{diffuseColour:_t(),lightingModel:bt,specularColour:_t(),shininess:10}}static createNewLight(){return{position:y.create(),radius:10,colour:De()}}};var wt=new Ke;C.subscribe(t=>t.sceneTree,la);function la(t){wt.updateShapesFromTree(t.sceneTree)&&C.execute(Gr(wt.getShader()))}var ca=document.getElementById("app");function un(){le(d(je,{state:C.state(),sceneConverter:wt}),ca)}function da(){He[0]&&C.execute(G(Ye))}da();un();C.subscribeAny(un);})();
//# sourceMappingURL=webgl-index.js.map
