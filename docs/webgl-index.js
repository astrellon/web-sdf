(()=>{var bn=Object.create;var it=Object.defineProperty;var _n=Object.getOwnPropertyDescriptor;var xn=Object.getOwnPropertyNames;var yn=Object.getPrototypeOf,In=Object.prototype.hasOwnProperty;var Et=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Te=(t,e)=>{for(var r in e)it(t,r,{get:e[r],enumerable:!0})},Cn=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of xn(e))!In.call(t,o)&&o!==r&&it(t,o,{get:()=>e[o],enumerable:!(n=_n(e,o))||n.enumerable});return t};var Ft=(t,e,r)=>(r=t!=null?bn(yn(t)):{},Cn(e||!t||!t.__esModule?it(r,"default",{value:t,enumerable:!0}):r,t));var Or=Et(me=>{"use strict";Object.defineProperty(me,"__esModule",{value:!0});me.EmptyModifier=void 0;var Gi=()=>null;me.EmptyModifier=Gi;var xt=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,r=!0){let n=e(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(e,r))}subscribe(e,r,n,o){let i=e(this.currentState),a={selector:new yt(e,i,n,o),subscription:r};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(e,r){return this.subscribe(n=>n,e,void 0,r)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,r){for(let n of this.subscriptions){let o=n.selector.getValue(this.currentState);n.selector.checkIfChanged(o)&&n.subscription(this.currentState,o,e,r)}}};me.default=xt;var yt=class{constructor(e,r=void 0,n,o){this.getValue=i=>this.selector(i),this.selector=e,this.prevValue=r,this.comparer=n,this.name=o}checkIfChanged(e){let r=!1;return this.comparer!==void 0?r=!this.comparer(this.prevValue,e):r=e!==this.prevValue,this.prevValue=e,r}}});var gn=Et((lp,mn)=>{"use strict";mn.exports=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}});var ze,_,Dt,Sn,q,Pt,Xt,Bt,kt,lt,at,st,An,ae={},Ut=[],Mn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,se=Array.isArray;function U(t,e){for(var r in e)t[r]=e[r];return t}function ct(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function c(t,e,r){var n,o,i,a={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?ze.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Fe(t,a,n,o,null)}function Fe(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Dt,__i:-1,__u:0};return o==null&&_.vnode!=null&&_.vnode(i),i}function G(){return{current:null}}function N(t){return t.children}function v(t,e){this.props=t,this.context=e}function re(t,e){if(e==null)return t.__?re(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?re(t):null}function Wt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Wt(t)}}function zt(t){(!t.__d&&(t.__d=!0)&&q.push(t)&&!Pe.__r++||Pt!=_.debounceRendering)&&((Pt=_.debounceRendering)||Xt)(Pe)}function Pe(){for(var t,e,r,n,o,i,a,s=1;q.length;)q.length>s&&q.sort(Bt),t=q.shift(),s=q.length,t.__d&&(r=void 0,o=(n=(e=t).__v).__e,i=[],a=[],e.__P&&((r=U({},n)).__v=n.__v+1,_.vnode&&_.vnode(r),pt(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[o]:null,i,o??re(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Yt(i,r,a),r.__e!=o&&Wt(r)));Pe.__r=0}function Zt(t,e,r,n,o,i,a,s,l,d,u){var p,h,f,m,x,b,g=n&&n.__k||Ut,y=e.length;for(l=wn(r,e,g,l,y),p=0;p<y;p++)(f=r.__k[p])!=null&&(h=f.__i==-1?ae:g[f.__i]||ae,f.__i=p,b=pt(t,f,h,o,i,a,s,l,d,u),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&dt(h.ref,null,f),u.push(f.ref,f.__c||m,f)),x==null&&m!=null&&(x=m),4&f.__u||h.__k===f.__k?l=Qt(f,l,t):typeof f.type=="function"&&b!==void 0?l=b:m&&(l=m.nextSibling),f.__u&=-7);return r.__e=x,l}function wn(t,e,r,n,o){var i,a,s,l,d,u=r.length,p=u,h=0;for(t.__k=new Array(o),i=0;i<o;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=i+h,(a=t.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Fe(null,a,null,null,null):se(a)?Fe(N,{children:a},null,null,null):a.constructor==null&&a.__b>0?Fe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=t,a.__b=t.__b+1,s=null,(d=a.__i=Nn(a,r,l,p))!=-1&&(p--,(s=r[d])&&(s.__u|=2)),s==null||s.__v==null?(d==-1&&(o>u?h--:o<u&&h++),typeof a.type!="function"&&(a.__u|=4)):d!=l&&(d==l-1?h--:d==l+1?h++:(d>l?h--:h++,a.__u|=4))):t.__k[i]=null;if(p)for(i=0;i<u;i++)(s=r[i])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=re(s)),Ht(s,s));return n}function Qt(t,e,r){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=Qt(n[o],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=re(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function le(t,e){return e=e||[],t==null||typeof t=="boolean"||(se(t)?t.some(function(r){le(r,e)}):e.push(t)),e}function Nn(t,e,r,n){var o,i,a=t.key,s=t.type,l=e[r];if(l===null&&t.key==null||l&&a==l.key&&s==l.type&&(2&l.__u)==0)return r;if(n>(l!=null&&(2&l.__u)==0?1:0))for(o=r-1,i=r+1;o>=0||i<e.length;){if(o>=0){if((l=e[o])&&(2&l.__u)==0&&a==l.key&&s==l.type)return o;o--}if(i<e.length){if((l=e[i])&&(2&l.__u)==0&&a==l.key&&s==l.type)return i;i++}}return-1}function Gt(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Mn.test(e)?r:r+"px"}function Ee(t,e,r,n,o){var i,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Gt(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||Gt(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(kt,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n?r.u=n.u:(r.u=lt,t.addEventListener(e,i?st:at,i)):t.removeEventListener(e,i?st:at,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Vt(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=lt++;else if(e.t<r.u)return;return r(_.event?_.event(e):e)}}}function pt(t,e,r,n,o,i,a,s,l,d){var u,p,h,f,m,x,b,g,y,w,M,D,X,te,Y,B,k,R=e.type;if(e.constructor!=null)return null;128&r.__u&&(l=!!(32&r.__u),i=[s=e.__e=r.__e]),(u=_.__b)&&u(e);e:if(typeof R=="function")try{if(g=e.props,y="prototype"in R&&R.prototype.render,w=(u=R.contextType)&&n[u.__c],M=u?w?w.props.value:u.__:n,r.__c?b=(p=e.__c=r.__c).__=p.__E:(y?e.__c=p=new R(g,M):(e.__c=p=new v(g,M),p.constructor=R,p.render=Rn),w&&w.sub(p),p.props=g,p.state||(p.state={}),p.context=M,p.__n=n,h=p.__d=!0,p.__h=[],p._sb=[]),y&&p.__s==null&&(p.__s=p.state),y&&R.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=U({},p.__s)),U(p.__s,R.getDerivedStateFromProps(g,p.__s))),f=p.props,m=p.state,p.__v=e,h)y&&R.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),y&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(y&&R.getDerivedStateFromProps==null&&g!==f&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(g,M),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(g,p.__s,M)===!1||e.__v==r.__v){for(e.__v!=r.__v&&(p.props=g,p.state=p.__s,p.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(P){P&&(P.__=e)}),D=0;D<p._sb.length;D++)p.__h.push(p._sb[D]);p._sb=[],p.__h.length&&a.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(g,p.__s,M),y&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(f,m,x)})}if(p.context=M,p.props=g,p.__P=t,p.__e=!1,X=_.__r,te=0,y){for(p.state=p.__s,p.__d=!1,X&&X(e),u=p.render(p.props,p.state,p.context),Y=0;Y<p._sb.length;Y++)p.__h.push(p._sb[Y]);p._sb=[]}else do p.__d=!1,X&&X(e),u=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++te<25);p.state=p.__s,p.getChildContext!=null&&(n=U(U({},n),p.getChildContext())),y&&!h&&p.getSnapshotBeforeUpdate!=null&&(x=p.getSnapshotBeforeUpdate(f,m)),B=u,u!=null&&u.type===N&&u.key==null&&(B=Jt(u.props.children)),s=Zt(t,se(B)?B:[B],e,r,n,o,i,a,s,l,d),p.base=e.__e,e.__u&=-161,p.__h.length&&a.push(p),b&&(p.__E=p.__=null)}catch(P){if(e.__v=null,l||i!=null)if(P.then){for(e.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,e.__e=s}else for(k=i.length;k--;)ct(i[k]);else e.__e=r.__e,e.__k=r.__k;_.__e(P,e,r)}else i==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):s=e.__e=Ln(r.__e,e,r,n,o,i,a,l,d);return(u=_.diffed)&&u(e),128&e.__u?void 0:s}function Yt(t,e,r){for(var n=0;n<r.length;n++)dt(r[n],r[++n],r[++n]);_.__c&&_.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){_.__e(i,o.__v)}})}function Jt(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:se(t)?t.map(Jt):U({},t)}function Ln(t,e,r,n,o,i,a,s,l){var d,u,p,h,f,m,x,b=r.props,g=e.props,y=e.type;if(y=="svg"?o="http://www.w3.org/2000/svg":y=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){t=f,i[d]=null;break}}if(t==null){if(y==null)return document.createTextNode(g);t=document.createElementNS(o,y,g.is&&g),s&&(_.__m&&_.__m(e,i),s=!1),i=null}if(y==null)b===g||s&&t.data==g||(t.data=g);else{if(i=i&&ze.call(t.childNodes),b=r.props||ae,!s&&i!=null)for(b={},d=0;d<t.attributes.length;d++)b[(f=t.attributes[d]).name]=f.value;for(d in b)if(f=b[d],d!="children"){if(d=="dangerouslySetInnerHTML")p=f;else if(!(d in g)){if(d=="value"&&"defaultValue"in g||d=="checked"&&"defaultChecked"in g)continue;Ee(t,d,null,f,o)}}for(d in g)f=g[d],d=="children"?h=f:d=="dangerouslySetInnerHTML"?u=f:d=="value"?m=f:d=="checked"?x=f:s&&typeof f!="function"||b[d]===f||Ee(t,d,f,b[d],o);if(u)s||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),Zt(e.type=="template"?t.content:t,se(h)?h:[h],e,r,n,y=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:r.__k&&re(r,0),s,l),i!=null)for(d=i.length;d--;)ct(i[d]);s||(d="value",y=="progress"&&m==null?t.removeAttribute("value"):m!=null&&(m!==t[d]||y=="progress"&&!m||y=="option"&&m!=b[d])&&Ee(t,d,m,b[d],o),d="checked",x!=null&&x!=t[d]&&Ee(t,d,x,b[d],o))}return t}function dt(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){_.__e(o,r)}}function Ht(t,e,r){var n,o;if(_.unmount&&_.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||dt(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){_.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Ht(n[o],e,r||typeof t.type!="function");r||ct(t.__e),t.__c=t.__=t.__e=void 0}function Rn(t,e,r){return this.constructor(t,r)}function ce(t,e,r){var n,o,i,a;e==document&&(e=document.documentElement),_.__&&_.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],a=[],pt(e,t=(!n&&r||e).__k=c(N,null,[t]),o||ae,ae,e.namespaceURI,!n&&r?[r]:o?null:e.firstChild?ze.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n,a),Yt(i,t,a)}ze=Ut.slice,_={__e:function(t,e,r,n){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(s){t=s}throw t}},Dt=0,Sn=function(t){return t!=null&&t.constructor==null},v.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U({},this.state),typeof t=="function"&&(t=t(U({},r),this.props)),t&&U(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),zt(this))},v.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),zt(this))},v.prototype.render=N,q=[],Xt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bt=function(t,e){return t.__v.__b-e.__v.__b},Pe.__r=0,kt=/(PointerCapture)$|Capture$/i,lt=0,at=Vt(!1),st=Vt(!0),An=0;var jt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var qt=`float sdfSphere(vec3 point, float radius)
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

vec3 repeatDomain(vec3 point, float size)
{
    return point - size * round(point / size);
}

vec3 quatMul( vec4 q, vec3 v )
{
    return v + 2.0 * cross(cross(v, q.xyz ) + q.w * v, q.xyz);
}`;var $t=`vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
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
`;var Kt=`#version 300 es

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
`;var Pn=/#include\s+\<([^\>]+)\>/gmi,pe=class t{program;constructor(e){this.program=e}static assembleShader(e,r){let n=r.matchAll(Pn);for(let o of n){let i=e[o[1]];i===void 0&&(console.error(`Unknown shader include ${o[1]}`),i=""),r=r.replace(o[0],i)}return r}static create(e,r,n,o){let i=null,a=null,s=null;function l(){i!=null&&(e.detachShader(i,a),e.detachShader(i,s)),a!=null&&e.deleteShader(a),s!=null&&e.deleteShader(s)}if(a=e.createShader(e.VERTEX_SHADER),e.shaderSource(a,this.assembleShader(r,n)),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(a);throw console.error("Vertex shader compile error",u),l(),new Error(`Vertex shader compile error ${u}`)}s=e.createShader(e.FRAGMENT_SHADER);let d=this.assembleShader(r,o);{let u=d.split(`
`),p=new Array(u.length);for(let h=0;h<u.length;h++)p[h]=h+1+": "+u[h];console.info("Assembled shader",p.join(`
`))}if(e.shaderSource(s,d),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Fragment shader compile error",u),l(),new Error(`Fragment shader compile error ${u}`)}if(i=e.createProgram(),e.attachShader(i,a),e.attachShader(i,s),e.linkProgram(i),l(),!e.getProgramParameter(i,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(i);let u=e.getProgramInfoLog(i);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new t(i)}};var J={};Te(J,{ANGLE_ORDER:()=>ut,ARRAY_TYPE:()=>A,EPSILON:()=>S,RANDOM:()=>W,equals:()=>Bn,round:()=>ne,setMatrixArrayType:()=>zn,toDegree:()=>Xn,toRadian:()=>Dn});var S=1e-6,A=typeof Float32Array<"u"?Float32Array:Array,W=Math.random,ut="zyx";function ne(t){return t>=0?Math.round(t):t%.5===0?Math.floor(t):Math.round(t)}function zn(t){A=t}var Gn=Math.PI/180,Vn=180/Math.PI;function Dn(t){return t*Gn}function Xn(t){return t*Vn}function Bn(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:S;return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e))}var $={};Te($,{add:()=>po,adjoint:()=>jn,clone:()=>Un,copy:()=>Wn,create:()=>ht,determinant:()=>qn,equals:()=>mo,exactEquals:()=>fo,frob:()=>co,fromMat2d:()=>oo,fromMat4:()=>kn,fromQuat:()=>io,fromRotation:()=>ro,fromScaling:()=>no,fromTranslation:()=>to,fromValues:()=>Zn,identity:()=>Yn,invert:()=>Hn,mul:()=>go,multiply:()=>er,multiplyScalar:()=>uo,multiplyScalarAndAdd:()=>ho,normalFromMat4:()=>ao,projection:()=>so,rotate:()=>Kn,scale:()=>eo,set:()=>Qn,str:()=>lo,sub:()=>vo,subtract:()=>tr,translate:()=>$n,transpose:()=>Jn});function ht(){var t=new A(9);return A!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function kn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Un(t){var e=new A(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Wn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Zn(t,e,r,n,o,i,a,s,l){var d=new A(9);return d[0]=t,d[1]=e,d[2]=r,d[3]=n,d[4]=o,d[5]=i,d[6]=a,d[7]=s,d[8]=l,d}function Qn(t,e,r,n,o,i,a,s,l,d){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=i,t[5]=a,t[6]=s,t[7]=l,t[8]=d,t}function Yn(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Jn(t,e){if(t===e){var r=e[1],n=e[2],o=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=o}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function Hn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],u=e[8],p=u*a-s*d,h=-u*i+s*l,f=d*i-a*l,m=r*p+n*h+o*f;return m?(m=1/m,t[0]=p*m,t[1]=(-u*n+o*d)*m,t[2]=(s*n-o*a)*m,t[3]=h*m,t[4]=(u*r-o*l)*m,t[5]=(-s*r+o*i)*m,t[6]=f*m,t[7]=(-d*r+n*l)*m,t[8]=(a*r-n*i)*m,t):null}function jn(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],u=e[8];return t[0]=a*u-s*d,t[1]=o*d-n*u,t[2]=n*s-o*a,t[3]=s*l-i*u,t[4]=r*u-o*l,t[5]=o*i-r*s,t[6]=i*d-a*l,t[7]=n*l-r*d,t[8]=r*a-n*i,t}function qn(t){var e=t[0],r=t[1],n=t[2],o=t[3],i=t[4],a=t[5],s=t[6],l=t[7],d=t[8];return e*(d*i-a*l)+r*(-d*o+a*s)+n*(l*o-i*s)}function er(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],d=e[6],u=e[7],p=e[8],h=r[0],f=r[1],m=r[2],x=r[3],b=r[4],g=r[5],y=r[6],w=r[7],M=r[8];return t[0]=h*n+f*a+m*d,t[1]=h*o+f*s+m*u,t[2]=h*i+f*l+m*p,t[3]=x*n+b*a+g*d,t[4]=x*o+b*s+g*u,t[5]=x*i+b*l+g*p,t[6]=y*n+w*a+M*d,t[7]=y*o+w*s+M*u,t[8]=y*i+w*l+M*p,t}function $n(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],d=e[6],u=e[7],p=e[8],h=r[0],f=r[1];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t[4]=s,t[5]=l,t[6]=h*n+f*a+d,t[7]=h*o+f*s+u,t[8]=h*i+f*l+p,t}function Kn(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],l=e[5],d=e[6],u=e[7],p=e[8],h=Math.sin(r),f=Math.cos(r);return t[0]=f*n+h*a,t[1]=f*o+h*s,t[2]=f*i+h*l,t[3]=f*a-h*n,t[4]=f*s-h*o,t[5]=f*l-h*i,t[6]=d,t[7]=u,t[8]=p,t}function eo(t,e,r){var n=r[0],o=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=o*e[3],t[4]=o*e[4],t[5]=o*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function to(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function ro(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function no(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function oo(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function io(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r+r,s=n+n,l=o+o,d=r*a,u=n*a,p=n*s,h=o*a,f=o*s,m=o*l,x=i*a,b=i*s,g=i*l;return t[0]=1-p-m,t[3]=u-g,t[6]=h+b,t[1]=u+g,t[4]=1-d-m,t[7]=f-x,t[2]=h-b,t[5]=f+x,t[8]=1-d-p,t}function ao(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],l=e[6],d=e[7],u=e[8],p=e[9],h=e[10],f=e[11],m=e[12],x=e[13],b=e[14],g=e[15],y=r*s-n*a,w=r*l-o*a,M=r*d-i*a,D=n*l-o*s,X=n*d-i*s,te=o*d-i*l,Y=u*x-p*m,B=u*b-h*m,k=u*g-f*m,R=p*b-h*x,P=p*g-f*x,ie=h*g-f*b,T=y*ie-w*P+M*R+D*k-X*B+te*Y;return T?(T=1/T,t[0]=(s*ie-l*P+d*R)*T,t[1]=(l*k-a*ie-d*B)*T,t[2]=(a*P-s*k+d*Y)*T,t[3]=(o*P-n*ie-i*R)*T,t[4]=(r*ie-o*k+i*B)*T,t[5]=(n*k-r*P-i*Y)*T,t[6]=(x*te-b*X+g*D)*T,t[7]=(b*M-m*te-g*w)*T,t[8]=(m*X-x*M+g*y)*T,t):null}function so(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function lo(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function co(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8])}function po(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function tr(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function uo(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function ho(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t}function fo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function mo(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],s=t[5],l=t[6],d=t[7],u=t[8],p=e[0],h=e[1],f=e[2],m=e[3],x=e[4],b=e[5],g=e[6],y=e[7],w=e[8];return Math.abs(r-p)<=S*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(n-h)<=S*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(o-f)<=S*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-m)<=S*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(a-x)<=S*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(s-b)<=S*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(l-g)<=S*Math.max(1,Math.abs(l),Math.abs(g))&&Math.abs(d-y)<=S*Math.max(1,Math.abs(d),Math.abs(y))&&Math.abs(u-w)<=S*Math.max(1,Math.abs(u),Math.abs(w))}var go=er,vo=tr;var H={};Te(H,{add:()=>bi,calculateW:()=>si,clone:()=>fi,conjugate:()=>di,copy:()=>gi,create:()=>vt,dot:()=>wr,equals:()=>Si,exactEquals:()=>Ci,exp:()=>Cr,fromEuler:()=>ui,fromMat3:()=>Ar,fromValues:()=>mi,getAngle:()=>ni,getAxisAngle:()=>ri,identity:()=>ti,invert:()=>pi,len:()=>yi,length:()=>Nr,lerp:()=>xi,ln:()=>Sr,mul:()=>_i,multiply:()=>Ir,normalize:()=>bt,pow:()=>li,random:()=>ci,rotateX:()=>oi,rotateY:()=>ii,rotateZ:()=>ai,rotationTo:()=>Ai,scale:()=>Mr,set:()=>vi,setAxes:()=>wi,setAxisAngle:()=>yr,slerp:()=>De,sqlerp:()=>Mi,sqrLen:()=>Ii,squaredLength:()=>Lr,str:()=>hi});var C={};Te(C,{add:()=>yo,angle:()=>ko,bezier:()=>Fo,ceil:()=>Io,clone:()=>bo,copy:()=>_o,create:()=>Ge,cross:()=>ue,dist:()=>jo,distance:()=>ar,div:()=>Ho,divide:()=>ir,dot:()=>de,equals:()=>Qo,exactEquals:()=>Zo,floor:()=>Co,forEach:()=>Ko,fromValues:()=>Ve,hermite:()=>Eo,inverse:()=>Ro,len:()=>mt,length:()=>rr,lerp:()=>Oo,max:()=>Ao,min:()=>So,mul:()=>Jo,multiply:()=>or,negate:()=>Lo,normalize:()=>ft,random:()=>Po,rotateX:()=>Do,rotateY:()=>Xo,rotateZ:()=>Bo,round:()=>Mo,scale:()=>wo,scaleAndAdd:()=>No,set:()=>xo,slerp:()=>To,sqrDist:()=>qo,sqrLen:()=>$o,squaredDistance:()=>sr,squaredLength:()=>lr,str:()=>Wo,sub:()=>Yo,subtract:()=>nr,transformMat3:()=>Go,transformMat4:()=>zo,transformQuat:()=>Vo,zero:()=>Uo});function Ge(){var t=new A(3);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function bo(t){var e=new A(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function rr(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function Ve(t,e,r){var n=new A(3);return n[0]=t,n[1]=e,n[2]=r,n}function _o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function xo(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function yo(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function nr(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function or(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function ir(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function Io(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function Co(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function So(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function Ao(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function Mo(t,e){return t[0]=ne(e[0]),t[1]=ne(e[1]),t[2]=ne(e[2]),t}function wo(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function No(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function ar(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(r*r+n*n+o*o)}function sr(t,e){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return r*r+n*n+o*o}function lr(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function Lo(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Ro(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function ft(t,e){var r=e[0],n=e[1],o=e[2],i=r*r+n*n+o*o;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function de(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ue(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[0],s=r[1],l=r[2];return t[0]=o*l-i*s,t[1]=i*a-n*l,t[2]=n*s-o*a,t}function Oo(t,e,r,n){var o=e[0],i=e[1],a=e[2];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t}function To(t,e,r,n){var o=Math.acos(Math.min(Math.max(de(e,r),-1),1)),i=Math.sin(o),a=Math.sin((1-n)*o)/i,s=Math.sin(n*o)/i;return t[0]=a*e[0]+s*r[0],t[1]=a*e[1]+s*r[1],t[2]=a*e[2]+s*r[2],t}function Eo(t,e,r,n,o,i){var a=i*i,s=a*(2*i-3)+1,l=a*(i-2)+i,d=a*(i-1),u=a*(3-2*i);return t[0]=e[0]*s+r[0]*l+n[0]*d+o[0]*u,t[1]=e[1]*s+r[1]*l+n[1]*d+o[1]*u,t[2]=e[2]*s+r[2]*l+n[2]*d+o[2]*u,t}function Fo(t,e,r,n,o,i){var a=1-i,s=a*a,l=i*i,d=s*a,u=3*i*s,p=3*l*a,h=l*i;return t[0]=e[0]*d+r[0]*u+n[0]*p+o[0]*h,t[1]=e[1]*d+r[1]*u+n[1]*p+o[1]*h,t[2]=e[2]*d+r[2]*u+n[2]*p+o[2]*h,t}function Po(t,e){e=e===void 0?1:e;var r=W()*2*Math.PI,n=W()*2-1,o=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*o,t[1]=Math.sin(r)*o,t[2]=n*e,t}function zo(t,e,r){var n=e[0],o=e[1],i=e[2],a=r[3]*n+r[7]*o+r[11]*i+r[15];return a=a||1,t[0]=(r[0]*n+r[4]*o+r[8]*i+r[12])/a,t[1]=(r[1]*n+r[5]*o+r[9]*i+r[13])/a,t[2]=(r[2]*n+r[6]*o+r[10]*i+r[14])/a,t}function Go(t,e,r){var n=e[0],o=e[1],i=e[2];return t[0]=n*r[0]+o*r[3]+i*r[6],t[1]=n*r[1]+o*r[4]+i*r[7],t[2]=n*r[2]+o*r[5]+i*r[8],t}function Vo(t,e,r){var n=r[0],o=r[1],i=r[2],a=r[3],s=e[0],l=e[1],d=e[2],u=o*d-i*l,p=i*s-n*d,h=n*l-o*s;return u=u+u,p=p+p,h=h+h,t[0]=s+a*u+o*h-i*p,t[1]=l+a*p+i*u-n*h,t[2]=d+a*h+n*p-o*u,t}function Do(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0],i[1]=o[1]*Math.cos(n)-o[2]*Math.sin(n),i[2]=o[1]*Math.sin(n)+o[2]*Math.cos(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Xo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[2]*Math.sin(n)+o[0]*Math.cos(n),i[1]=o[1],i[2]=o[2]*Math.cos(n)-o[0]*Math.sin(n),t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function Bo(t,e,r,n){var o=[],i=[];return o[0]=e[0]-r[0],o[1]=e[1]-r[1],o[2]=e[2]-r[2],i[0]=o[0]*Math.cos(n)-o[1]*Math.sin(n),i[1]=o[0]*Math.sin(n)+o[1]*Math.cos(n),i[2]=o[2],t[0]=i[0]+r[0],t[1]=i[1]+r[1],t[2]=i[2]+r[2],t}function ko(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2],l=Math.sqrt((r*r+n*n+o*o)*(i*i+a*a+s*s)),d=l&&de(t,e)/l;return Math.acos(Math.min(Math.max(d,-1),1))}function Uo(t){return t[0]=0,t[1]=0,t[2]=0,t}function Wo(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Zo(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function Qo(t,e){var r=t[0],n=t[1],o=t[2],i=e[0],a=e[1],s=e[2];return Math.abs(r-i)<=S*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-a)<=S*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(o-s)<=S*Math.max(1,Math.abs(o),Math.abs(s))}var Yo=nr,Jo=or,Ho=ir,jo=ar,qo=sr,mt=rr,$o=lr,Ko=function(){var t=Ge();return function(e,r,n,o,i,a){var s,l;for(r||(r=3),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}();function ei(){var t=new A(4);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function cr(t){var e=new A(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function pr(t,e,r,n){var o=new A(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function dr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function ur(t,e,r,n,o){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t}function hr(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function fr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function mr(t){var e=t[0],r=t[1],n=t[2],o=t[3];return Math.sqrt(e*e+r*r+n*n+o*o)}function gr(t){var e=t[0],r=t[1],n=t[2],o=t[3];return e*e+r*r+n*n+o*o}function vr(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=o*a,t[3]=i*a,t}function gt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function br(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3];return t[0]=o+n*(r[0]-o),t[1]=i+n*(r[1]-i),t[2]=a+n*(r[2]-a),t[3]=s+n*(r[3]-s),t}function _r(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}var Ca=function(){var t=ei();return function(e,r,n,o,i,a){var s,l;for(r||(r=4),n||(n=0),o?l=Math.min(o*r+n,e.length):l=e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();function vt(){var t=new A(4);return A!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function ti(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function yr(t,e,r){r=r*.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function ri(t,e){var r=Math.acos(e[3])*2,n=Math.sin(r/2);return n>S?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function ni(t,e){var r=wr(t,e);return Math.acos(2*r*r-1)}function Ir(t,e,r){var n=e[0],o=e[1],i=e[2],a=e[3],s=r[0],l=r[1],d=r[2],u=r[3];return t[0]=n*u+a*s+o*d-i*l,t[1]=o*u+a*l+i*s-n*d,t[2]=i*u+a*d+n*l-o*s,t[3]=a*u-n*s-o*l-i*d,t}function oi(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*s,t[1]=o*l+i*s,t[2]=i*l-o*s,t[3]=a*l-n*s,t}function ii(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l-i*s,t[1]=o*l+a*s,t[2]=i*l+n*s,t[3]=a*l-o*s,t}function ai(t,e,r){r*=.5;var n=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+o*s,t[1]=o*l-n*s,t[2]=i*l+a*s,t[3]=a*l-i*s,t}function si(t,e){var r=e[0],n=e[1],o=e[2];return t[0]=r,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),t}function Cr(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=Math.exp(i),l=a>0?s*Math.sin(a)/a:0;return t[0]=r*l,t[1]=n*l,t[2]=o*l,t[3]=s*Math.cos(a),t}function Sr(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=Math.sqrt(r*r+n*n+o*o),s=a>0?Math.atan2(a,i)/a:0;return t[0]=r*s,t[1]=n*s,t[2]=o*s,t[3]=.5*Math.log(r*r+n*n+o*o+i*i),t}function li(t,e,r){return Sr(t,e),Mr(t,t,r),Cr(t,t),t}function De(t,e,r,n){var o=e[0],i=e[1],a=e[2],s=e[3],l=r[0],d=r[1],u=r[2],p=r[3],h,f,m,x,b;return f=o*l+i*d+a*u+s*p,f<0&&(f=-f,l=-l,d=-d,u=-u,p=-p),1-f>S?(h=Math.acos(f),m=Math.sin(h),x=Math.sin((1-n)*h)/m,b=Math.sin(n*h)/m):(x=1-n,b=n),t[0]=x*o+b*l,t[1]=x*i+b*d,t[2]=x*a+b*u,t[3]=x*s+b*p,t}function ci(t){var e=W(),r=W(),n=W(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t}function pi(t,e){var r=e[0],n=e[1],o=e[2],i=e[3],a=r*r+n*n+o*o+i*i,s=a?1/a:0;return t[0]=-r*s,t[1]=-n*s,t[2]=-o*s,t[3]=i*s,t}function di(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Ar(t,e){var r=e[0]+e[4]+e[8],n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);var i=(o+1)%3,a=(o+2)%3;n=Math.sqrt(e[o*3+o]-e[i*3+i]-e[a*3+a]+1),t[o]=.5*n,n=.5/n,t[3]=(e[i*3+a]-e[a*3+i])*n,t[i]=(e[i*3+o]+e[o*3+i])*n,t[a]=(e[a*3+o]+e[o*3+a])*n}return t}function ui(t,e,r,n){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:ut,i=Math.PI/360;e*=i,n*=i,r*=i;var a=Math.sin(e),s=Math.cos(e),l=Math.sin(r),d=Math.cos(r),u=Math.sin(n),p=Math.cos(n);switch(o){case"xyz":t[0]=a*d*p+s*l*u,t[1]=s*l*p-a*d*u,t[2]=s*d*u+a*l*p,t[3]=s*d*p-a*l*u;break;case"xzy":t[0]=a*d*p-s*l*u,t[1]=s*l*p-a*d*u,t[2]=s*d*u+a*l*p,t[3]=s*d*p+a*l*u;break;case"yxz":t[0]=a*d*p+s*l*u,t[1]=s*l*p-a*d*u,t[2]=s*d*u-a*l*p,t[3]=s*d*p+a*l*u;break;case"yzx":t[0]=a*d*p+s*l*u,t[1]=s*l*p+a*d*u,t[2]=s*d*u-a*l*p,t[3]=s*d*p-a*l*u;break;case"zxy":t[0]=a*d*p-s*l*u,t[1]=s*l*p+a*d*u,t[2]=s*d*u+a*l*p,t[3]=s*d*p-a*l*u;break;case"zyx":t[0]=a*d*p-s*l*u,t[1]=s*l*p+a*d*u,t[2]=s*d*u-a*l*p,t[3]=s*d*p+a*l*u;break;default:throw new Error("Unknown angle order "+o)}return t}function hi(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var fi=cr,mi=pr,gi=dr,vi=ur,bi=hr,_i=Ir,Mr=fr,wr=gt,xi=br,Nr=mr,yi=Nr,Lr=gr,Ii=Lr,bt=vr,Ci=_r;function Si(t,e){return Math.abs(gt(t,e))>=1-S}var Ai=function(){var t=Ge(),e=Ve(1,0,0),r=Ve(0,1,0);return function(n,o,i){var a=de(o,i);return a<-.999999?(ue(t,e,o),mt(t)<1e-6&&ue(t,r,o),ft(t,t),yr(n,t,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(ue(t,o,i),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+a,bt(n,n))}}(),Mi=function(){var t=vt(),e=vt();return function(r,n,o,i,a,s){return De(t,n,a,s),De(e,o,i,s),De(r,t,e,2*s*(1-s)),r}}(),wi=function(){var t=ht();return function(e,r,n,o){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],bt(e,Ar(e,t))}}();function Li(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillRect(0,0,255,255);let r=new Uint8ClampedArray(256*4);for(let n=0;n<256;n++){for(let i=0;i<256*4;i++)r[i]=Math.floor(Math.random()*256);let o=new ImageData(r,256,1);e.putImageData(o,0,n)}return e}var Rr=Li();var Ri=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],_t=H.create();function Oi(t,e){return t===e.INVALID_ENUM?"Invalid enum":t===e.INVALID_VALUE?"Invalid value":t===e.INVALID_OPERATION?"Invalid operation":t===e.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":t===e.OUT_OF_MEMORY?"Out of memory":t===e.CONTEXT_LOST_WEBGL?"Context lost WebGL":t===e.NO_ERROR?"No error":`Unknown error ${t}`}var Ti=1,Ei=2,Fi=4,Pi=8,zi=16;function he(t,e){return t?e:0}var fe=class t{gl;shader;positionBuffer;uMaterials;uParameters;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uShadowSharpness;uNoise;noiseTexture;cameraPosition=C.create();cameraTarget=C.create();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;shadowSharpness=128;enableShadows=!0;enableShowMarches=!1;enableDepth=!1;enableNormals=!1;enableToLightNormals=!1;enableSoftShadows=!0;canvasScale=1;cameraMatrixForSdfArray=$.create();prevMaterials;prevLights;prevParameters;prevShaderText;constructor(e,r,n,o,i,a,s,l,d,u,p,h,f,m,x,b,g){this.gl=e,this.shader=r,this.prevShaderText=n,this.positionBuffer=o,this.uMaterials=s,this.uParameters=l,this.uLights=i,this.uNumLights=a,this.uCameraPosition=d,this.uCameraMatrix=u,this.uAspectRatio=p,this.uMaxMarchingSteps=h,this.uEpsilon=f,this.uFlags=m,this.uShadowSharpness=x,this.uNoise=b,this.noiseTexture=g}destroy(){this.gl.deleteProgram(this.shader.program)}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,r){this.cameraRotationX+=e,this.cameraRotationY+=r,this.updateCamera()}updateCamera(){H.fromEuler(_t,this.cameraRotationX,this.cameraRotationY,0);let e=C.create();C.transformQuat(e,[0,0,1],_t),C.scaleAndAdd(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),$.fromQuat(this.cameraMatrixForSdfArray,_t),$.transpose(this.cameraMatrixForSdfArray,this.cameraMatrixForSdfArray)}resizeCanvas=(e,r)=>{let n=e*this.canvasScale,o=r*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=o,this.gl.viewport(0,0,n,o);let i=n/o;this.gl.uniform1f(this.uAspectRatio,i)};render(e){this.gl.useProgram(this.shader.program),this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.prevParameters!==e.getParameters()&&(this.prevParameters=e.getParameters(),console.info("Rendering new parameters",this.prevParameters),this.gl.uniform1fv(this.uParameters,this.prevParameters));let r=0;r|=he(this.enableShadows,Ti),r|=he(this.enableDepth,Fi),r|=he(this.enableNormals,Pi),r|=he(this.enableShowMarches,Ei),r|=he(this.enableToLightNormals,zi),this.gl.uniform1i(this.uFlags,r),this.gl.uniform1f(this.uShadowSharpness,this.shadowSharpness),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition[0],this.cameraPosition[1],this.cameraPosition[2]),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixForSdfArray),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e,r){let n=e.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let o=n.createBuffer();if(o==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(Ri),n.STATIC_DRAW);let i={"assembled-shader":r,"sdf-functions":qt,"raymarch-functions":$t},a=pe.create(n,i,jt,Kt);n.useProgram(a.program);let s=this.getAttribute(n,a,"aPosition");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let l=this.getUniform(n,a,"uCameraMatrix"),d=this.getUniform(n,a,"uCameraPosition"),u=this.getUniform(n,a,"uAspectRatio"),p=this.getUniform(n,a,"uMaterials"),h=this.getUniform(n,a,"uLights"),f=this.getUniform(n,a,"uNumLights"),m=this.getUniform(n,a,"uParams"),x=this.getUniform(n,a,"uMaxMarchingSteps"),b=this.getUniform(n,a,"uEpsilon"),g=this.getUniform(n,a,"uFlags"),y=this.getUniform(n,a,"uShadowSharpness"),w=this.getUniform(n,a,"uNoise"),M=n.createTexture(),D=Rr;return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,M),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,256,256,0,n.RGBA,n.UNSIGNED_BYTE,D.canvas),this.checkError(n),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.uniform1i(w,0),this.checkError(n),new t(n,a,r,o,h,f,p,m,d,l,u,x,b,g,y,w,M)}static checkError(e){let r=e.getError();r!=e.NO_ERROR&&console.error(`GL Error: ${Oi(r,e)}`)}static getAttribute(e,r,n){let o=e.getAttribLocation(r.program,n);if(o<0)throw new Error(`Unable to find attribute ${n}`);return o}static getUniform(e,r,n){let o=e.getUniformLocation(r.program,n);return o==null,o}};var Tr=Ft(Or()),Vi={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,enableDepth:!1,enableNormals:!1,enableToLightNormals:!1,enableSoftShadows:!0,epsilon:1e-4,shadowSharpness:128,pixelated:!1},It={options:Vi},I=new Tr.default({viewports:[It],sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1},exampleModal:{show:!1},currentShader:"return 100.0;"});var Ct=0,St=1,Er=2;function ge(){return crypto.randomUUID()}var Xe=J.ARRAY_TYPE;function At(){let t=new Xe(3);return t[0]=1,t[1]=1,t[2]=1,t}function E(t,e,r){let n=new Xe(3);return n[0]=t,n[1]=e,n[2]=r,n}function Be(){let t=new Xe(4);return t[0]=1,t[1]=1,t[2]=1,t[3]=1,t}function ve(t,e,r,n){let o=new Xe(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=n,o}function Fr(t,e){let r={...t.nodes,[e.id]:e};return{...t,nodes:r}}function Pr(t){let e=t.nodes[t.rootNodeId];if(!e)return[];let r=new Array(Object.keys(t.nodes).length);return Xr(e,t.nodes,0,0,r),r}function ke(t){return{colour:Be(),radius:10,...t}}function zr(t,e){return{name:t,type:"none",id:ge(),position:C.create(),rotation:C.create(),childrenIds:[],selfOpCode:"none",childOpCode:"none",operationParams:.5,shape:Ue({}),light:ke({}),...e}}function be(t,e,r,n){return{name:t,type:"light",id:ge(),position:r??C.create(),rotation:n??C.create(),childrenIds:[],selfOpCode:"none",childOpCode:"none",operationParams:.5,shape:Ue({}),light:e!=null?ke(e):void 0}}function K(t,e,r,n){return{name:t,type:"shape",id:ge(),position:r??C.create(),rotation:n??C.create(),shape:e!=null?Ue(e):void 0,light:ke({}),childrenIds:[],selfOpCode:"none",childOpCode:"none",operationParams:.5}}function oe(t,e){return{name:t,type:"operation",id:ge(),position:C.create(),rotation:C.create(),shape:Ue({}),light:ke({}),childrenIds:[],selfOpCode:"none",childOpCode:e,operationParams:.5}}function Ue(t){return{maxSize:0,type:"none",params:{},diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10,...t}}function F(t,e){t.childrenIds.push(e.id),e.parentId=t.id}function Gr(t,e,r){e={...e,childrenIds:[...e.childrenIds,r.id]},r={...r,parentId:e.id};let n={...t.nodes,[e.id]:e,[r.id]:r};return{...t,nodes:n}}function Vr(t,e){if(e.parentId===void 0)return t;let r=t.nodes[e.parentId],n=r.childrenIds.findIndex(o=>o===e.id);if(n>=0){let o=[...r.childrenIds];o.splice(n,1),r={...r,childrenIds:o};let i={...t.nodes,[r.id]:r};return delete i[e.id],{...t,nodes:i}}return t}function Dr(t,e,r){if(r.parentId==null)return t;let n=t.nodes[r.parentId],o=n.childrenIds.findIndex(a=>a===r.id);if(o>=0){let a=[...n.childrenIds];a.splice(o,1),n={...n,childrenIds:a}}e.childrenIds.includes(r.id)||(e={...e,childrenIds:[...e.childrenIds,r.id]}),r={...r,parentId:e.id};let i={...t.nodes,[n.id]:n,[e.id]:e,[r.id]:r};return{...t,nodes:i}}function Xr(t,e,r,n,o){if(o[n]={node:t,depth:r},t.childrenIds!=null)for(let i of t.childrenIds){let a=e[i];a&&(n=Xr(a,e,r+1,n+1,o))}return n}function Mt(t,e){return r=>{let n=r.viewports[t]??It,o={...n,options:{...n.options,...e}},i=[...r.viewports];return i[t]=o,{viewports:i}}}function We(t){return e=>({reparentModal:{...e.reparentModal,...t}})}function Ze(t){return e=>({rawSceneModal:{...e.rawSceneModal,...t}})}function Qe(t){return e=>({exampleModal:{...e.exampleModal,...t}})}function Br(t){return e=>({sceneTree:Fr(e.sceneTree,t)})}function z(t){return()=>({sceneTree:t})}function kr(t){return()=>({currentShader:t})}function Ur(t){return e=>{let r;if(t){for(let n of Object.values(e.sceneTree.nodes))if(n.childrenIds.includes(t)){r=n.id;break}}return{selectedNodeId:t,selectedParentNodeId:r}}}var Wr,V,wt,Zr;var Kr=[],L=_,Qr=L.__b,Yr=L.__r,Jr=L.diffed,Hr=L.__c,jr=L.unmount,qr=L.__;function Di(){for(var t;t=Kr.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ye),t.__H.__h.forEach(Nt),t.__H.__h=[]}catch(e){t.__H.__h=[],L.__e(e,t.__v)}}L.__b=function(t){V=null,Qr&&Qr(t)},L.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),qr&&qr(t,e)},L.__r=function(t){Yr&&Yr(t),Wr=0;var e=(V=t.__c).__H;e&&(wt===V?(e.__h=[],V.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(Ye),e.__h.forEach(Nt),e.__h=[],Wr=0)),wt=V},L.diffed=function(t){Jr&&Jr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Kr.push(e)!==1&&Zr===L.requestAnimationFrame||((Zr=L.requestAnimationFrame)||Xi)(Di)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),wt=V=null},L.__c=function(t,e){e.some(function(r){try{r.__h.forEach(Ye),r.__h=r.__h.filter(function(n){return!n.__||Nt(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],L.__e(n,r.__v)}}),Hr&&Hr(t,e)},L.unmount=function(t){jr&&jr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Ye(n)}catch(o){e=o}}),r.__H=void 0,e&&L.__e(e,r.__v))};var $r=typeof requestAnimationFrame=="function";function Xi(t){var e,r=function(){clearTimeout(n),$r&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);$r&&(e=requestAnimationFrame(r))}function Ye(t){var e=V,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),V=e}function Nt(t){var e=V;t.__c=t.__(),V=e}function ki(t,e){for(var r in e)t[r]=e[r];return t}function en(t,e){for(var r in t)if(r!=="__source"&&!(r in e))return!0;for(var n in e)if(n!=="__source"&&t[n]!==e[n])return!0;return!1}function tn(t,e){this.props=t,this.context=e}(tn.prototype=new v).isPureReactComponent=!0,tn.prototype.shouldComponentUpdate=function(t,e){return en(this.props,t)||en(this.state,e)};var rn=_.__b;_.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),rn&&rn(t)};var ms=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Ui=_.__e;_.__e=function(t,e,r,n){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e)}Ui(t,e,r,n)};var nn=_.unmount;function pn(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),t.__c.__H=null),(t=ki({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(n){return pn(n,e,r)})),t}function dn(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(n){return dn(n,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function Lt(){this.__u=0,this.o=null,this.__b=null}function un(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Je(){this.i=null,this.l=null}_.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),nn&&nn(t)},(Lt.prototype=new v).__c=function(t,e){var r=e.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=un(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=dn(l,l.__c.__P,l.__c.__O)}var d;for(n.setState({__a:n.__b=null});d=n.o.pop();)d.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(a,a)},Lt.prototype.componentWillUnmount=function(){this.o=[]},Lt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=pn(this.__b,r,n.__O=n.__P)}this.__b=null}var o=e.__a&&c(N,null,t.fallback);return o&&(o.__u&=-33),[c(N,null,e.__a?null:t.children),o]};var on=function(t,e,r){if(++r[1]===r[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(r=t.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.i=r=r[2]}};function Wi(t){return this.getChildContext=function(){return t.context},t.children}function Zi(t){var e=this,r=t.h;if(e.componentWillUnmount=function(){ce(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var n=e.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(o,i){this.childNodes.push(o),e.h.insertBefore(o,i)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.h.removeChild(o)}}}ce(c(Wi,{context:e.context},t.__v),e.v)}function He(t,e){var r=c(Zi,{__v:t,h:e});return r.containerInfo=e,r}(Je.prototype=new v).__a=function(t){var e=this,r=un(e.__v),n=e.l.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),on(e,t,n)):o()};r?r(i):i()}},Je.prototype.render=function(t){this.i=null,this.l=new Map;var e=le(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var r=e.length;r--;)this.l.set(e[r],this.i=[1,0,this.i]);return t.children},Je.prototype.componentDidUpdate=Je.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,r){on(t,r,e)})};var Qi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Yi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ji=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Hi=/[A-Z0-9]/g,ji=typeof document<"u",qi=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};v.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(v.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var an=_.event;function $i(){}function Ki(){return this.cancelBubble}function ea(){return this.defaultPrevented}_.event=function(t){return an&&(t=an(t)),t.persist=$i,t.isPropagationStopped=Ki,t.isDefaultPrevented=ea,t.nativeEvent=t};var hn,ta={enumerable:!1,configurable:!0,get:function(){return this.class}},sn=_.vnode;_.vnode=function(t){typeof t.type=="string"&&function(e){var r=e.props,n=e.type,o={},i=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||ji&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||qi(r.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":Ji.test(a)&&(a=l):l=a="oninput":i&&Yi.test(a)?a=a.replace(Hi,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&o[a=l]&&(a="oninputCapture"),o[a]=s}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=le(r.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=le(r.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",ta)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),e.props=o}(t),t.$$typeof=Qi,sn&&sn(t)};var ln=_.__r;_.__r=function(t){ln&&ln(t),hn=t.__c};var cn=_.diffed;_.diffed=function(t){cn&&cn(t);var e=t.props,r=t.__e;r!=null&&t.type==="textarea"&&"value"in e&&e.value!==r.value&&(r.value=e.value==null?"":e.value),hn=null};var _e=class extends v{buttonRef=G();constructor(){super(),this.state={show:!1}}render(){let e=null,{buttonProps:r,text:n,children:o}=this.props,i=this.state.show,a={};if(i){e=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect();a={left:s.left+"px",top:s.top+s.height+"px"}}return c(N,null,c("button",{...r,ref:this.buttonRef,onClick:this.toggleMenu},n),i&&He(c("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},c("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},o)),e))}preventClose=e=>{e.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var Z=t=>c("label",{style:{display:"inline-block"}},t.label,c("input",{style:{display:"block"},type:"range",...t.inputProps}));var xe=class extends v{render(e){let{pixelated:r,renderScale:n,enableShadows:o,enableShowMarching:i,enableDepth:a,enableNormals:s,enableToLightNormals:l,epsilon:d,shadowSharpness:u,maxMarchingStep:p}=this.props.options;return c("div",{class:"viewport-options"},c(_e,{text:"Menu"},c("div",{class:"control-group-vertical"},c("button",{onClick:this.togglePixelated},r?"Smooth":"Pixelated"),c("select",{onChange:this.changeRenderScale,value:n},c("option",{value:"2"},"2x"),c("option",{value:"1.5"},"1.5x"),c("option",{value:"1"},"1x"),c("option",{value:"0.5"},"0.5x"),c("option",{value:"0.25"},"0.25x"),c("option",{value:"0.125"},"0.125x")),c("button",{onClick:this.toggleShadows},o?"Hide Shadows":"Show Shadows"),c("button",{onClick:this.toggleMarching},i?"Hide Marching":"Show Marching"),c("button",{onClick:this.toggleDepth},a?"Hide Depth":"Show Depth"),c("button",{onClick:this.toggleNormals},s?"Hide Normals":"Show Normals"),c("button",{onClick:this.toggleToLightNormals},l?"Hide To Light":"Show To Light"),c("button",{onClick:this.showExamples},"Show Examples"),c("button",{onClick:this.showRawScene},"JSON Scene")),c(Z,{label:`Epsilon ${d}`,inputProps:{value:d,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),c(Z,{label:`Marching Steps ${p}`,inputProps:{value:p,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}),c(Z,{label:`Shadows ${u}`,inputProps:{value:u,min:0,max:256,step:.1,onInput:this.changeShadowSharpness}})))}showRawScene=()=>{I.execute(Ze({show:!0}))};showExamples=()=>{I.execute(Qe({show:!0}))};changeEpsilon=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:r})};changeShadowSharpness=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Shadow sharpness parse failed");return}this.updateOptions({shadowSharpness:r})};changeMarchingSteps=e=>{let r=parseFloat(e.target.value);if(!isFinite(r)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(r)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};toggleDepth=e=>{this.updateOptions({enableDepth:!this.props.options.enableDepth})};toggleNormals=e=>{this.updateOptions({enableNormals:!this.props.options.enableNormals})};toggleToLightNormals=e=>{this.updateOptions({enableToLightNormals:!this.props.options.enableToLightNormals})};updateOptions=e=>{console.log("Options",e),I.execute(Mt(this.props.viewportIndex,e))};changeRenderScale=e=>{let r=e.target.value,n=Number.parseFloat(r);isFinite(n)?I.execute(Mt(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",r)}};var je=class extends v{canvasRef=G();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.createNewRenderer(e),this.renderer.updateCamera(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),c("div",{class:"viewport outer-panel"},c("canvas",{className:e,ref:this.canvasRef}),c(xe,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{if(this.renderFrameCallback=-1,this.renderer.prevShaderText!==this.props.currentShader){console.log("New shader!",this.renderer.prevShaderText,this.props.currentShader);let r=this.renderer.cameraRotationX,n=this.renderer.cameraRotationY,o=this.renderer.cameraDistance;this.renderer.destroy(),this.createNewRenderer(this.canvasRef.current),this.renderer.cameraRotationX=r,this.renderer.cameraRotationY=n,this.renderer.cameraDistance=o,this.renderer.updateCamera()}let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.shadowSharpness=e.shadowSharpness,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.enableDepth=e.enableDepth,this.renderer.enableNormals=e.enableNormals,this.renderer.enableToLightNormals=e.enableToLightNormals,this.renderer.enableSoftShadows=e.enableSoftShadows,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sceneConverter)};createNewRenderer=e=>{this.renderer=fe.create(e,this.props.currentShader),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.updateCanvasSize(),this.renderer.setupCanvas()};onPointerDown=e=>{e.target===this.canvasRef.current&&(this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let r=e.clientX-this.mousePosX,n=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-n,-r),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let r=e.deltaY>0?1:-1,n=this.zoom+r;this.zoom=Math.max(Math.min(100,n),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var j=class extends v{inputRef=G();addedOnChange=!1;componentDidMount(){this.addedOnChange||this.inputRef.current.addEventListener("change",this.onChange)}componentWillUnmount(){this.addedOnChange&&this.inputRef.current.removeEventListener("change",this.onChange)}render(){let{value:e,placeholder:r,disabled:n,step:o}=this.props,i=100*(o||1),a=Math.round(e*i)/i;return c("input",{disabled:n,step:o,placeholder:r,type:"number",class:this.props.class,value:a,ref:this.inputRef})}onChange=e=>{let r=e.target,n=100*(this.props.step||1),o=Math.round(r.valueAsNumber*n)/n;this.props.onChange(this.props.value,o)}};function ra(t,e){return t.length>=3||e>=3}function na(t,e){return t.length===4||e===4}var O=class extends v{render(){let{value:e,disabled:r,forceLength:n}=this.props,o=ra(e,n),i=na(e,n);return c("div",{class:"vector control-group"},c(j,{class:"input",disabled:r,value:e[0],onChange:this.onChangeX,placeholder:"x",step:.1}),c(j,{class:"input",disabled:r,value:e[1],onChange:this.onChangeY,placeholder:"y",step:.1}),o&&c(j,{class:"input",disabled:r,value:e[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),i&&c(j,{class:"input",disabled:r,value:e[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=(e,r)=>{this.updateVector(r,0)};onChangeY=(e,r)=>{this.updateVector(r,1)};onChangeZ=(e,r)=>{this.updateVector(r,2)};onChangeW=(e,r)=>{this.updateVector(r,3)};updateVector=(e,r)=>{let n=this.props.value;console.log("Update vector index",r,e);let o=C.clone(n);o[r]=e,this.props.onChange(n,o)}};function Rt(t,e,r){return(r==null||r===!0)&&(t+=" "+e),t}function qe(t,e){let r={};for(let n of t){let o=e(n);r[o]=n}return r}var Ot=[{id:"sphere",name:"Sphere",funcName:"sdfSphere",params:[{name:"Radius",type:"input"}]},{id:"box",name:"Box",funcName:"sdfBox",params:[{name:"X",type:"input"},{name:"Y",type:"input"},{name:"Z",type:"input"}]},{id:"hexPrism",name:"Hex Prism",funcName:"sdfHexPrism",params:[{name:"Radius",type:"input"},{name:"Depth",type:"input"}]},{id:"torus",name:"Torus",funcName:"sdfTorus",params:[{name:"Major Radius",type:"input"},{name:"Minor Radius",type:"input"}]},{id:"octahedron",name:"Octahedron",funcName:"sdfOctahedron",params:[{name:"Size",type:"input"}]},{id:"cylinder",name:"Cylinder",funcName:"sdfCappedCylinder",params:[{name:"Radius",type:"input"},{name:"Height",type:"input"}]},{id:"icosahedron",name:"Icosahedron",funcName:"sdfIcosahedron",params:[{name:"Radius",type:"input"}]},{id:"mandelbulb",name:"Mandelbulb",funcName:"sdfMandelbulb",params:[{name:"Iterations",type:"input",min:0,max:5,step:1},{name:"Scale",type:"input"}]}],$e=qe(Ot,t=>t.id);var ye=class extends v{render(){let{shape:e,paramInfo:r}=this.props,n=e.params[r.name],o=(isFinite(n)?n:r.default)??1,i=`${r.name}: ${o}`,a=r.min??0,s=r.max??10,l=r.step??.1;return c(Z,{label:i,inputProps:{value:o,min:a,max:s,step:l,onInput:this.onInput}})}onInput=e=>{let{paramInfo:r,onChange:n}=this.props,o=e.target.valueAsNumber;if(!isFinite(o)){console.log("Unable to parse shape param:",r.name,e.target.value);return}n(o,r)}};var oa=Ot.map(t=>c("option",{key:t.id,value:t.id},t.name)),Ie=class extends v{render(){let e=this.props.shape,r=e.lightingModel==="phong";return c("div",null,c("div",null,c("strong",null,"Type")," ",c("select",{value:e.type??"none",onChange:this.onChangeType},c("option",{value:"none"},"None"),oa)),c("div",null,this.renderCurrentParams()),c("div",null,c("strong",null,"Lighting Model")," ",c("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},c("option",{value:"unlit"},"Unlit"),c("option",{value:"lambert"},"Lambert"),c("option",{value:"phong"},"Phong"))),c("div",null,c("strong",null,"Diffuse Colour")," ",c(O,{value:e.diffuseColour,onChange:this.onChangeDiffuseColour})),c("div",null,c("strong",null,"Specular Colour")," ",c(O,{disabled:!r,value:e.specularColour,onChange:this.onChangeSpecularColour})),c("div",null,c("strong",null,"Shininess")," ",c("input",{class:"input",disabled:!r,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}renderCurrentParams=()=>{let e=[],{shape:r}=this.props,n=$e[r.type];for(let o of n.params)e.push(c(ye,{key:o.name,shape:r,paramInfo:o,onChange:this.updateParam}));return e};updateParam=(e,r)=>{let o={...this.props.shape.params,[r.name]:e};this.updateField(o,"params")};onChangeType=e=>{let r=e.target.value;this.updateField(r,"type")};onChangeLightingModel=e=>{let r=e.target.value;this.updateField(r,"lightingModel")};onChangeShininess=e=>{let r=parseFloat(e.target.value);isFinite(r)&&this.updateField(r,"shininess")};onChangeDiffuseColour=(e,r)=>{this.updateField(r,"diffuseColour")};onChangeSpecularColour=(e,r)=>{this.updateField(r,"specularColour")};updateField=(e,r)=>{console.log("Update shape",r,e);let n={...this.props.shape,[r]:e};this.props.onChange(n)}};var Ce=class extends v{render(){let e=this.props.light;return e===void 0?c("div",null,"Empty Light"):c("div",null,c("div",null,c("strong",null,"Colour")," ",c(O,{forceLength:3,value:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,r)=>{this.updateField(r,"colour")};updateField=(e,r)=>{console.log("Update light",r,e);let n={...this.props.light,[r]:e};this.props.onChange(n)}};var Se=class extends v{constructor(){super(),this.state={show:!1}}render(){let{node:e,sceneTree:r}=this.props;if(e==null)return c("div",{class:"scene-node-view"},"No node selected");let n=e.parentId!=null?r.nodes[e.parentId]:void 0,o=e.childOpCode??"none",i=e.selfOpCode??"none",a=e.operationParams;return c("div",{class:"scene-node-view"},c("div",null,c("strong",null,"Name")," ",c("input",{class:"input",type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),c("div",null,c("strong",null,"Type"),c("select",{value:e.type,onChange:this.onChangeType},c("option",{value:"none"},"None"),c("option",{value:"shape"},"Shape"),c("option",{value:"light"},"Light"),c("option",{value:"operation"},"Operation"))),e.type==="shape"&&c(N,null,c("div",null,c("strong",null,"Position")," ",c(O,{value:e.position,onChange:this.onChangePosition})),c("div",null,c("strong",null,"Rotation")," ",c(O,{value:e.rotation,onChange:this.onChangeRotation})),c("div",null,c("strong",null,"Self Op Code")," ",c("select",{value:i,onChange:this.onChangeSelfOpCode},c("option",{value:"none"},"None"),c("option",{value:"repeatDomain"},"Repeat Domain"))),c("div",null,c(Z,{label:`Operation Param ${a}`,inputProps:{value:a,min:0,max:10,step:.1,onInput:this.changeOperationParam}})),c("div",null,c("strong",null,"Shape"),c(Ie,{shape:e.shape,onChange:this.onChangeShape}))),e.type==="light"&&c(N,null,c("div",null,c("strong",null,"Position")," ",c(O,{value:e.position,onChange:this.onChangePosition})),c("div",null,c("strong",null,"Rotation")," ",c(O,{value:e.rotation,onChange:this.onChangeRotation})),c("div",null,c("strong",null,"Light"),c(Ce,{light:e.light,onChange:this.onChangeLight}))),e.type==="operation"&&c(N,null,c("div",null,c("strong",null,"Child Op Code")," ",c("select",{value:o,onChange:this.onChangeChildOpCode},c("option",{value:"none"},"None"),c("option",{value:"union"},"Union"),c("option",{value:"intersection"},"Intersection"),c("option",{value:"subtraction"},"Subtraction"),c("option",{value:"xor"},"Xor"),c("option",{value:"smoothUnion"},"Smooth Union"),c("option",{value:"smoothIntersection"},"Smooth Intersection"),c("option",{value:"smoothSubtraction"},"Smooth Subtraction"))),c("div",null,c(Z,{label:`Operation Param ${a}`,inputProps:{value:a,min:0,max:10,step:.1,onInput:this.changeOperationParam}})),c("div",null,c("strong",null,"Children")),c("div",{class:"control-group"},c("button",{onClick:this.addChild},"Add"),n!=null&&c(N,null,c("button",{onClick:this.deleteSelf},"Delete"),c("button",{onClick:this.reparent},"Re-parent")))))}addChild=()=>{let e=Gr(this.props.sceneTree,this.props.node,zr("New Child",{}));I.execute(z(e))};deleteSelf=()=>{let e=Vr(this.props.sceneTree,this.props.node);I.execute(z(e))};reparent=()=>{let{node:e,sceneTree:r}=this.props;if((e.parentId!=null?r.nodes[e.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}I.execute(We({show:!0,childNodeId:this.props.node.id}))};changeOperationParam=e=>{let r=e.target.valueAsNumber;if(!isFinite(r)){console.warn("Operation param parse failed");return}this.updateField(r,"operationParams")};onChangeName=e=>{let r=e.target.value;this.updateField(r,"name")};onChangePosition=(e,r)=>{this.updateField(r,"position")};onChangeRotation=(e,r)=>{this.updateField(r,"rotation")};onChangeType=e=>{let r=e.target.value;this.updateField(r,"type")};onChangeSelfOpCode=e=>{let r=e.target.value;this.updateField(r,"selfOpCode")};onChangeChildOpCode=e=>{let r=e.target.value;this.updateField(r,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,r)=>{console.log("Update shape node",r,e);let n={...this.props.node,[r]:e};this.props.onChange(n,this.props.node)}};var Ae=class extends v{render(){let{depth:e,node:r,isSelected:n,disable:o}=this.props,i=Rt(Rt("scene-node-tree-item","is-selected",n),"is-disabled",o===!0);return c("div",{class:i,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",r.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var ee=class extends v{render(){return c("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:e,selectedNodeId:r,onItemClicked:n}=this.props,o=e.nodes[e.rootNodeId],i=[];if(o==null)return i;let a=Pr(e);for(let s of a){let l=s.node.id===r;i.push(c(Ae,{isSelected:l,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return i}};var Me=class extends v{render(){let{sceneTree:e,selectedNodeId:r}=this.props,n=e.nodes[r];return c("div",{class:"scene-tree"},c("div",{class:"scene-tree__contents outer-panel"},c("div",{class:"inner-panel"},c(ee,{sceneTree:e,selectedNodeId:r,onItemClicked:this.onNodeClicked})),c("div",{class:"inner-panel scene-tree__nodes"},c(Se,{sceneTree:e,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=e=>{I.execute(Ur(e.id))};onChangeSelectedNode=(e,r)=>{I.execute(Br(e))}};var Q=class extends v{render(){let{show:e,onRequestClose:r}=this.props;if(e===!1)return null;let n=this.props.portalContainer??"modals",o=document.getElementById(n),i="modal-body outer-panel ",a=this.props.class!=null?i+this.props.class:i;return He(c("div",{class:"modal-backdrop",onPointerDown:r},c("div",{class:a,onPointerDown:this.preventClose},this.props.children)),o)}preventClose=e=>{e.stopImmediatePropagation()}};var we=class extends v{render(){let{show:e,sceneTree:r,disabledNodeIds:n,onRequestClose:o}=this.props;return c(Q,{show:e,onRequestClose:o},c(ee,{sceneTree:r,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=e=>{this.props.onItemClicked(e)}};var Ne=class extends v{render(){let{show:e}=this.props.state,r=this.getDisabledNodeIds();return c(we,{show:e,disabledNodeIds:r,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{I.execute(We({show:!1}))};getDisabledNodeIds=()=>{let{show:e,childNodeId:r}=this.props.state;if(!e)return[];let{sceneTree:n}=this.props,o=n.nodes[r];return[o.id,o.parentId]};onReparentSelected=e=>{if(this.props.state.childNodeId==null)return;let r=this.props.sceneTree.nodes[this.props.state.childNodeId],n=Dr(this.props.sceneTree,e,r);I.execute(z(n))}};var Le=class extends v{prevSceneTree=void 0;preRef=G();render(){let{show:e}=this.props.state,{sceneTree:r}=this.props,n="";return e&&this.prevSceneTree!==r&&(n=JSON.stringify(r,null,2)),c(Q,{show:e,onRequestClose:this.onCloseModal,class:"raw-scene-modal",portalContainer:"raw-json-modal"},c("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},c("pre",null,n)),c("span",{class:"control-group"},c("button",{onClick:this.loadFromHtml},"Load From Json"),c("label",{class:"button"},"Load From File",c("input",{type:"file",onChange:this.loadFromFile})),c("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{I.execute(Ze({show:!1}))};downloadText=()=>{let e=new Blob([this.preRef.current.innerText],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="scene.json",r.click(),URL.revokeObjectURL(r.href)};loadFromFile=e=>{if(e.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=e=>{let r=e.target;typeof r.result=="string"?this.loadFromText(r.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let e=this.preRef.current.innerText;this.loadFromText(e)};loadFromText=e=>{let r=JSON.parse(e);r!=null&&I.execute(z(r))}};function ia(){let t=oe("Root","union"),e=oe("Main","subtraction");F(t,e);let r=K("Hex Prism",{type:"hexPrism",params:{Radius:.75,Depth:2},maxSize:1.5,diffuseColour:E(.5,.5,.5)}),n=oe("Box & Sphere","union");F(e,r),F(e,n);let o=K("Box",{type:"box",params:{X:6,Y:1,Z:6},diffuseColour:E(1,1,1),lightingModel:"lambert"},E(0,-1.5,0)),i=K("Sphere",{type:"sphere",params:{Radius:1.25},maxSize:2,diffuseColour:E(.1,.2,.9),lightingModel:"phong"});F(n,o),F(n,i);let a=be("Red Light",{colour:ve(1,.8,.6,1)},E(4,2,3)),s=be("Green Light",{colour:ve(.2,1,.6,1)},E(0,0,0));return F(t,a),F(t,s),{nodes:et(t,e,r,n,o,i,a,s),rootNodeId:t.id}}var Ke=ia();function aa(){let t=oe("Root","union"),e=K("Sphere Small",{type:"sphere",params:{Radius:1.25},diffuseColour:E(.1,.2,.9),lightingModel:"phong"}),r=K("Sphere Large",{type:"sphere",params:{Radius:10},diffuseColour:E(.9,.2,.1),lightingModel:"phong"},E(0,-11,0));F(t,e),F(t,r);let n=be("Red Light",{colour:ve(1,.8,.6,1)},E(4,2,3));return F(t,n),{nodes:et(t,e,r,n),rootNodeId:t.id}}var fn=aa();function et(...t){return qe(t,e=>e.id)}var tt=[{tree:Ke,title:"Box, Sphere and Hex"},{tree:fn,title:"Two Spheres"}];var sa=t=>{let{title:e,tree:r}=t.example;return c("div",null,c("div",null,e),c("div",null,c("button",{onClick:()=>I.execute(z(r))},"Load")))},Re=class extends v{render(){let{show:e}=this.props.state;return c(Q,{show:e,onRequestClose:this.onCloseModal,class:"example-modal",portalContainer:"raw-json-modal"},tt.map((r,n)=>c(sa,{key:n,example:r})))}onCloseModal=()=>{I.execute(Qe({show:!1}))}};var rt=class extends v{constructor(){super()}render(){let e=this.props.sceneConverter,{viewports:r,sceneTree:n,selectedNodeId:o,reparentModal:i,rawSceneModal:a,exampleModal:s,currentShader:l}=this.props.state;return console.log("App render",this.props.state),c(N,null,c("div",{class:"main-view"},c("div",{class:"viewports"},c(je,{viewportIndex:0,options:r[0].options,sceneConverter:e,currentShader:l})),c(Me,{sceneTree:n,selectedNodeId:o})),c(Ne,{state:i,sceneTree:n}),c(Le,{state:a,sceneTree:n}),c(Re,{state:s}))}};var nt=Ft(gn());function la(t){let e=t.toString();return e.indexOf(".")<0&&(e+=".0"),e}var Oe=class{result="";firstItem=!0;startFunction(e){this.writeValue(e+"("),this.firstItem=!0}endFunction(){this.result+=")"}writeRaw(e){this.result+=e}writeValue(e){this.firstItem||(this.result+=", "),typeof e=="number"?this.result+=la(e):this.result+=e,this.firstItem=!1}writeParameter(e){this.writeValue("uParams["+e+"]")}getFinal(){return`return ${this.result};`}};var ca=8,pa=8,da={unlit:Ct,lambert:St,phong:Er};function ua(t){return da[t]||Ct}var ot=class t{lights=[];lightDataArray=[];materials=[];materialDataArray=[];parameters=[];shader="";previousTree;getTree(){return this.previousTree}getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getParameters(){return this.parameters}getShader(){return this.shader}setLight(e,r){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...t.createNewLight(),...r}:this.lights[e]={...this.lights[e],...r},this.updateLight(e)}setMaterial(e,r){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...t.createNewMaterial(),...r}:this.materials[e]={...this.materials[e],...r},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||(this.previousTree=e,!e.nodes[e.rootNodeId]))return!1;let{lights:n,materials:o,parameters:i,assembler:a}=t.createShapesFromNode(e);if(!(0,nt.default)(this.lights,n)){this.lights=n,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,nt.default)(this.materials,o)){this.materials=o,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}return(0,nt.default)(this.parameters,i)||(this.parameters=i,console.log("Parameters",this.parameters)),this.shader=a.getFinal(),!0}static createShapesFromNode(e){let r=e.nodes[e.rootNodeId];if(!r)return;let n=[],o=[],i=[],a=new Oe;return this.processNode(n,o,i,r,e.nodes,a),{lights:n,materials:o,parameters:i,assembler:a}}static nodeHasValidShape(e){return!(e.type!=="shape"||e.shape==null||e.shape.type==="none")}static processNode(e,r,n,o,i,a){let s=!1,l=0,d=0;if(o.childOpCode!=="none"){for(let p of o.childrenIds){let h=i[p];(this.nodeHasValidShape(h)||h.childOpCode!=="none")&&d++}d>1&&(s=!0,this.processOperation(o.childOpCode,a,n,o.operationParams),l++)}if(this.nodeHasValidShape(o)&&(s=!0,this.processShape(o,o.shape,r,n,a)),o.type==="light"){let p=t.convertToLight(o);p!=null&&e.push(p)}let u=0;for(let p of o.childrenIds)this.processNode(e,r,n,i[p],i,a)&&(u++,d>2&&u+1<d&&(l++,this.processOperation(o.childOpCode,a,n,o.operationParams)));for(let p=0;p<l;p++)a.endFunction();return s}static processOperation(e,r,n,o){e==="union"?r.startFunction("opUnion"):e==="intersection"?r.startFunction("opIntersection"):e==="subtraction"?r.startFunction("opSubtraction"):e==="xor"?r.startFunction("opXor"):e==="smoothUnion"?(r.startFunction("opSmoothUnion"),this.pushParameter(n,o,r)):e==="smoothSubtraction"?(r.startFunction("opSmoothSubtraction"),this.pushParameter(n,o,r)):e==="smoothIntersection"?(r.startFunction("opSmoothIntersection"),this.pushParameter(n,o,r)):console.error("Unknown operation",e)}static pushParameter(e,r,n){n.writeParameter(e.length),e.push(r)}static writeSamplePoint(e,r,n){let o=e.position;e.selfOpCode==="repeatDomain"&&n.startFunction("repeatDomain");let i=H.create();H.fromEuler(i,e.rotation[0],e.rotation[1],e.rotation[2]),n.startFunction("quatMul"),n.startFunction("vec4"),this.pushParameter(r,i[0],n),this.pushParameter(r,i[1],n),this.pushParameter(r,i[2],n),this.pushParameter(r,i[3],n),n.endFunction(),n.startFunction("vec3"),this.pushParameter(r,-o[0],n),this.pushParameter(r,-o[1],n),this.pushParameter(r,-o[2],n),n.endFunction(),n.writeRaw(" + point"),n.endFunction(),e.selfOpCode==="repeatDomain"&&(this.pushParameter(r,e.operationParams,n),n.endFunction())}static processShape(e,r,n,o,i){let a=$e[r.type];if(a==null){console.error("Unsupported shape type");return}i.startFunction("vec2");let s={diffuseColour:r.diffuseColour,lightingModel:ua(r.lightingModel),specularColour:r.specularColour,shininess:r.shininess},l=n.length;n.push(s),i.startFunction(a.funcName),this.writeSamplePoint(e,o,i);for(let d of a.params){let u=r.params[d.name]??d.default??1;this.pushParameter(o,u,i)}i.endFunction(),i.writeValue(l),i.endFunction()}updateLight(e){let r=e*ca,n=this.lights[e];this.lightDataArray[r]=n.position[0],this.lightDataArray[r+1]=n.position[1],this.lightDataArray[r+2]=n.position[2],this.lightDataArray[r+3]=n.radius,this.lightDataArray[r+4]=n.colour[0],this.lightDataArray[r+5]=n.colour[1],this.lightDataArray[r+6]=n.colour[2],this.lightDataArray[r+7]=n.colour[3]}updateMaterial(e){let r=e*pa,n=this.materials[e];this.materialDataArray[r]=n.diffuseColour[0],this.materialDataArray[r+1]=n.diffuseColour[1],this.materialDataArray[r+2]=n.diffuseColour[2],this.materialDataArray[r+3]=n.lightingModel,this.materialDataArray[r+4]=n.specularColour[0],this.materialDataArray[r+5]=n.specularColour[1],this.materialDataArray[r+6]=n.specularColour[2],this.materialDataArray[r+7]=n.shininess}static convertToLight(e){let r=e.light;return r==null?null:{colour:r.colour,position:e.position,radius:r.radius}}static createNewMaterial(){return{diffuseColour:At(),lightingModel:St,specularColour:At(),shininess:10}}static createNewLight(){return{position:C.create(),radius:10,colour:Be()}}};var Tt=new ot;I.subscribe(t=>t.sceneTree,ha);function ha(t){Tt.updateShapesFromTree(t.sceneTree)&&I.execute(kr(Tt.getShader()))}var fa=document.getElementById("app");function vn(){ce(c(rt,{state:I.state(),sceneConverter:Tt}),fa)}function ma(){tt[0]&&I.execute(z(Ke))}ma();vn();I.subscribeAny(vn);})();
//# sourceMappingURL=webgl-index.js.map
