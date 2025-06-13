(()=>{var It=Object.create;var Le=Object.defineProperty;var _t=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var At=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty;var Ne=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Nt=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Mt(e))!Lt.call(n,r)&&r!==t&&Le(n,r,{get:()=>e[r],enumerable:!(o=_t(e,r))||o.enumerable});return n};var Oe=(n,e,t)=>(t=n!=null?It(At(n)):{},Nt(e||!n||!n.__esModule?Le(t,"default",{value:n,enumerable:!0}):t,n));var Ye=Ne(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.EmptyModifier=void 0;var Vt=()=>null;G.EmptyModifier=Vt;var ye=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let a=e(this.currentState),s={selector:new fe(e,a,o,r),subscription:t};return this.subscriptions.push(s),()=>{let c=this.subscriptions.indexOf(s);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};G.default=ye;var fe=class{constructor(e,t=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var ht=Ne((hr,lt)=>{"use strict";lt.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var s=a[r];if(!n(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}});var ne,f,Re,Ot,A,Te,ke,Ve,Ue,de,pe,me,Tt,U={},Ge=[],Dt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,oe=Array.isArray;function _(n,e){for(var t in e)n[t]=e[t];return n}function le(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function u(n,e,t){var o,r,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?ne.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return ee(n,s,o,r,null)}function ee(n,e,t,o,r){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Re,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(a),a}function Xe(){return{current:null}}function O(n){return n.children}function b(n,e){this.props=n,this.context=e}function N(n,e){if(e==null)return n.__?N(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?N(n):null}function We(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return We(n)}}function De(n){(!n.__d&&(n.__d=!0)&&A.push(n)&&!te.__r++||Te!=f.debounceRendering)&&((Te=f.debounceRendering)||ke)(te)}function te(){for(var n,e,t,o,r,a,s,c=1;A.length;)A.length>c&&A.sort(Ve),n=A.shift(),c=A.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,a=[],s=[],e.__P&&((t=_({},o)).__v=o.__v+1,f.vnode&&f.vnode(t),he(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??N(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,Ee(a,t,s),t.__e!=r&&We(t)));te.__r=0}function Ze(n,e,t,o,r,a,s,c,m,p,d){var i,h,l,v,S,g,x=o&&o.__k||Ge,y=e.length;for(m=Ft(t,e,x,m,y),i=0;i<y;i++)(l=t.__k[i])!=null&&(h=l.__i==-1?U:x[l.__i]||U,l.__i=i,g=he(n,l,h,r,a,s,c,m,p,d),v=l.__e,l.ref&&h.ref!=l.ref&&(h.ref&&xe(h.ref,null,l),d.push(l.ref,l.__c||v,l)),S==null&&v!=null&&(S=v),4&l.__u||h.__k===l.__k?m=Be(l,m,n):typeof l.type=="function"&&g!==void 0?m=g:v&&(m=v.nextSibling),l.__u&=-7);return t.__e=S,m}function Ft(n,e,t,o,r){var a,s,c,m,p,d=t.length,i=d,h=0;for(n.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(m=a+h,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?ee(null,s,null,null,null):oe(s)?ee(O,{children:s},null,null,null):s.constructor==null&&s.__b>0?ee(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,c=null,(p=s.__i=Pt(s,t,m,i))!=-1&&(i--,(c=t[p])&&(c.__u|=2)),c==null||c.__v==null?(p==-1&&(r>d?h--:r<d&&h++),typeof s.type!="function"&&(s.__u|=4)):p!=m&&(p==m-1?h--:p==m+1?h++:(p>m?h--:h++,s.__u|=4))):n.__k[a]=null;if(i)for(a=0;a<d;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=N(c)),je(c,c));return o}function Be(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=Be(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=N(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Pt(n,e,t,o){var r,a,s=n.key,c=n.type,m=e[t];if(m===null&&n.key==null||m&&s==m.key&&c==m.type&&(2&m.__u)==0)return t;if(o>(m!=null&&(2&m.__u)==0?1:0))for(r=t-1,a=t+1;r>=0||a<e.length;){if(r>=0){if((m=e[r])&&(2&m.__u)==0&&s==m.key&&c==m.type)return r;r--}if(a<e.length){if((m=e[a])&&(2&m.__u)==0&&s==m.key&&c==m.type)return a;a++}}return-1}function Fe(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Dt.test(e)?t:t+"px"}function q(n,e,t,o,r){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||Fe(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||Fe(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Ue,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=de,n.addEventListener(e,a?me:pe,a)):n.removeEventListener(e,a?me:pe,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Pe(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=de++;else if(e.t<t.u)return;return t(f.event?f.event(e):e)}}}function he(n,e,t,o,r,a,s,c,m,p){var d,i,h,l,v,S,g,x,y,P,M,$,R,Ae,K,k,ue,I=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[c=e.__e=t.__e]),(d=f.__b)&&d(e);e:if(typeof I=="function")try{if(x=e.props,y="prototype"in I&&I.prototype.render,P=(d=I.contextType)&&o[d.__c],M=d?P?P.props.value:d.__:o,t.__c?g=(i=e.__c=t.__c).__=i.__E:(y?e.__c=i=new I(x,M):(e.__c=i=new b(x,M),i.constructor=I,i.render=kt),P&&P.sub(i),i.props=x,i.state||(i.state={}),i.context=M,i.__n=o,h=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&I.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=_({},i.__s)),_(i.__s,I.getDerivedStateFromProps(x,i.__s))),l=i.props,v=i.state,i.__v=e,h)y&&I.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&I.getDerivedStateFromProps==null&&x!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(x,M),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(x,i.__s,M)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(i.props=x,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(V){V&&(V.__=e)}),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(x,i.__s,M),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,v,S)})}if(i.context=M,i.props=x,i.__P=n,i.__e=!1,R=f.__r,Ae=0,y){for(i.state=i.__s,i.__d=!1,R&&R(e),d=i.render(i.props,i.state,i.context),K=0;K<i._sb.length;K++)i.__h.push(i._sb[K]);i._sb=[]}else do i.__d=!1,R&&R(e),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Ae<25);i.state=i.__s,i.getChildContext!=null&&(o=_(_({},o),i.getChildContext())),y&&!h&&i.getSnapshotBeforeUpdate!=null&&(S=i.getSnapshotBeforeUpdate(l,v)),k=d,d!=null&&d.type===O&&d.key==null&&(k=Qe(d.props.children)),c=Ze(n,oe(k)?k:[k],e,t,o,r,a,s,c,m,p),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),g&&(i.__E=i.__=null)}catch(V){if(e.__v=null,m||a!=null)if(V.then){for(e.__u|=m?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(ue=a.length;ue--;)le(a[ue]);else e.__e=t.__e,e.__k=t.__k;f.__e(V,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=Rt(t.__e,e,t,o,r,a,s,m,p);return(d=f.diffed)&&d(e),128&e.__u?void 0:c}function Ee(n,e,t){for(var o=0;o<t.length;o++)xe(t[o],t[++o],t[++o]);f.__c&&f.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){f.__e(a,r.__v)}})}function Qe(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:oe(n)?n.map(Qe):_({},n)}function Rt(n,e,t,o,r,a,s,c,m){var p,d,i,h,l,v,S,g=t.props,x=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(p=0;p<a.length;p++)if((l=a[p])&&"setAttribute"in l==!!y&&(y?l.localName==y:l.nodeType==3)){n=l,a[p]=null;break}}if(n==null){if(y==null)return document.createTextNode(x);n=document.createElementNS(r,y,x.is&&x),c&&(f.__m&&f.__m(e,a),c=!1),a=null}if(y==null)g===x||c&&n.data==x||(n.data=x);else{if(a=a&&ne.call(n.childNodes),g=t.props||U,!c&&a!=null)for(g={},p=0;p<n.attributes.length;p++)g[(l=n.attributes[p]).name]=l.value;for(p in g)if(l=g[p],p!="children"){if(p=="dangerouslySetInnerHTML")i=l;else if(!(p in x)){if(p=="value"&&"defaultValue"in x||p=="checked"&&"defaultChecked"in x)continue;q(n,p,null,l,r)}}for(p in x)l=x[p],p=="children"?h=l:p=="dangerouslySetInnerHTML"?d=l:p=="value"?v=l:p=="checked"?S=l:c&&typeof l!="function"||g[p]===l||q(n,p,l,g[p],r);if(d)c||i&&(d.__html==i.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(i&&(n.innerHTML=""),Ze(e.type=="template"?n.content:n,oe(h)?h:[h],e,t,o,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&N(t,0),c,m),a!=null)for(p=a.length;p--;)le(a[p]);c||(p="value",y=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[p]||y=="progress"&&!v||y=="option"&&v!=g[p])&&q(n,p,v,g[p],r),p="checked",S!=null&&S!=n[p]&&q(n,p,S,g[p],r))}return n}function xe(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){f.__e(r,t)}}function je(n,e,t){var o,r;if(f.unmount&&f.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||xe(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){f.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&je(o[r],e,t||typeof n.type!="function");t||le(n.__e),n.__c=n.__=n.__e=void 0}function kt(n,e,t){return this.constructor(n,t)}function Je(n,e,t){var o,r,a,s;e==document&&(e=document.documentElement),f.__&&f.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],s=[],he(e,n=(!o&&t||e).__k=u(O,null,[n]),r||U,U,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?ne.call(e.childNodes):null,a,!o&&t?t:r?r.__e:e.firstChild,o,s),Ee(a,n,s)}ne=Ge.slice,f={__e:function(n,e,t,o){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),s=r.__d),s)return r.__E=r}catch(c){n=c}throw n}},Re=0,Ot=function(n){return n!=null&&n.constructor==null},b.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=_({},this.state),typeof n=="function"&&(n=n(_({},t),this.props)),n&&_(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),De(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),De(this))},b.prototype.render=O,A=[],ke=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ve=function(n,e){return n.__v.__b-e.__v.__b},te.__r=0,Ue=/(PointerCapture)$|Capture$/i,de=0,pe=Pe(!1),me=Pe(!0),Tt=0;var He=Oe(Ye()),Ut={renderScale:1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001,pixelated:!1},be={options:Ut},z=new He.default({viewports:[be],sdfTree:{nodes:{}}});function $e(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Ke(n,e){return{...n,rootNodeId:e}}function qe(n,e){return{...n,nodes:e}}function et(n){let e=n.nodes[n.rootNodeId];if(!e)return[];let t=new Array(Object.keys(n.nodes).length);return tt(e,n.nodes,0,0,t),t}function tt(n,e,t,o,r){if(r[o]={node:n,depth:t},n.childrenIds!=null)for(let a of n.childrenIds){let s=e[a];s&&(o=tt(s,e,t+1,o+1,r))}return o}function ve(n,e){return t=>{let o=t.viewports[n]??be,r={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=r,{viewports:a}}}function nt(n){return e=>({sdfTree:$e(e.sdfTree,n)})}function ot(n){return e=>({sdfTree:qe(e.sdfTree,n)})}function rt(n){return e=>({sdfTree:Ke(e.sdfTree,n)})}function at(n){return()=>({selectedNodeId:n})}var it=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var st=`#version 300 es

precision lowp float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

layout(location = 0) out vec4 fragColour;

in vec2 oPosition;

uniform mat2x4 uLights[8];
uniform int uNumLights;
uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;

uniform mat2x4 uMaterials[32];

uniform mat4 uShapes[128];
uniform int uOperations[128];
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

vec2 sceneSDF(vec3 point)
{
    int depthStackIndex = -1;
    vec2 depthStack[32];

    for (int operationsIndex = 0; operationsIndex < uNumOperations; operationsIndex++)
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

vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = near;
    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        vec2 dist = sceneSDF(rayOrigin + depth * rayDirection);
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
            fragColour = vec4(r, 0, 0, 1);
            return;
        }

        fragColour = vec4(0, 0, 0, 0);
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

        if (lightingModel == 0)
        {
            litColour = vec4(diffuse, 1.0);
        }
        else if (lightingModel == 1)
        {
            litColour = lambertIllumination(dist.xyz, diffuse, worldPoint, rayOrigin);
        }
        else if (lightingModel == 2)
        {
            litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);
        }

        fragColour = vec4(litColour.xyz, 1.0);
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);
        fragColour = vec4(r, g, 0, 1);
    }
}`;var ct=`const int ShapeTypeNone = -5000;
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
}`;var Zt=/^#include\s+\<([^\>]+)\>/gmi,X=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Zt);for(let r of o){let a=e[r[1]];a===void 0&&(console.error(`Unknown shader include ${r[1]}`),a=""),t=t.replace(r[0],a)}return t}static create(e,t,o,r){function a(){m!=null&&(e.detachShader(m,s),e.detachShader(m,c)),s!=null&&e.deleteShader(s),c!=null&&e.deleteShader(c)}let s=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(s,this.assembleShader(t,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let p=e.getShaderInfoLog(s);throw console.error("Vertex shader compile error",p),a(),new Error(`Vertex shader compile error ${p}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let p=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",p),a(),new Error(`Fragment shader compile error ${p}`)}let m=e.createProgram();if(e.attachShader(m,s),e.attachShader(m,c),e.linkProgram(m),a(),!e.getProgramParameter(m,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(m);let p=e.getProgramInfoLog(m);throw console.error("Shader link error",p),new Error(`Shader link error ${p}`)}return new n(m)}};var T=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function ut(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Bt(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z;return Math.sqrt(t**2+o**2+r**2)}function pt(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,a=e.z,s=t.w*2,c=t.y*a-t.z*r,m=t.z*o-t.x*a,p=t.x*r-t.y*o,d=(t.y*p-t.z*m)*2,i=(t.z*c-t.x*p)*2,h=(t.x*m-t.y*c)*2;return c*=s,m*=s,p*=s,n.x=o+c+d,n.y=r+m+i,n.z=a+p+h,n}function w(){return{x:0,y:0,z:0}}function ge(){return{x:1,y:1,z:1}}function Se(n,e,t=1e-4){return Bt(n,e)<t}function re(){return{x:1,y:1,z:1,w:1}}function L(){return{x:0,y:0,z:0,w:1}}function mt(n,e,t,o,r=T.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let s=Math.sin(e),c=Math.cos(e),m=Math.sin(t),p=Math.cos(t),d=Math.sin(o),i=Math.cos(o);switch(r){case"xyz":n.x=s*p*i+c*m*d,n.y=c*m*i-s*p*d,n.z=c*p*d+s*m*i,n.w=c*p*i-s*m*d;break;case"xzy":n.x=s*p*i-c*m*d,n.y=c*m*i-s*p*d,n.z=c*p*d+s*m*i,n.w=c*p*i+s*m*d;break;case"yxz":n.x=s*p*i+c*m*d,n.y=c*m*i-s*p*d,n.z=c*p*d-s*m*i,n.w=c*p*i+s*m*d;break;case"yzx":n.x=s*p*i+c*m*d,n.y=c*m*i+s*p*d,n.z=c*p*d-s*m*i,n.w=c*p*i-s*m*d;break;case"zxy":n.x=s*p*i-c*m*d,n.y=c*m*i+s*p*d,n.z=c*p*d+s*m*i,n.w=c*p*i-s*m*d;break;case"zyx":n.x=s*p*i-c*m*d,n.y=c*m*i+s*p*d,n.z=c*p*d-s*m*i,n.w=c*p*i+s*m*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Et=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ze=L();function Qt(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*t,s=e.y*t,c=e.y*o,m=e.z*t,p=e.z*o,d=e.z*r,i=e.w*t,h=e.w*o,l=e.w*r;return n[0]=1-c-d,n[1]=s-l,n[2]=m+h,n[3]=s+l,n[4]=1-a-d,n[5]=p-i,n[6]=m-h,n[7]=p+i,n[8]=1-a-c,n}var W=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=w();cameraTarget=w();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);prevShapes;prevOperations;prevMaterials;prevLights;constructor(e,t,o,r,a,s,c,m,p,d,i,h,l,v,S){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=s,this.uMaterials=p,this.uLights=c,this.uNumLights=m,this.uCameraPosition=d,this.uCameraMatrix=i,this.uAspectRatio=h,this.uMaxMarchingSteps=l,this.uEpsilon=v,this.uFlags=S}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){mt(ze,this.cameraRotationX,this.cameraRotationY,0);let e=pt(w(),{x:0,y:0,z:1},ze);ut(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Qt(this.cameraMatrixArray,ze)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){if(this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){console.info("Rendering new operations");let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.prevOperations=e.getOperations()}this.prevShapes!==e.getShapes()&&(console.info("Rendering new shapes"),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes()),this.prevMaterials!==e.getMaterials()&&(this.prevMaterials=e.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray())),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Et),t.STATIC_DRAW);let r={"sdf-functions":ct},a=X.create(t,r,it,st);t.useProgram(a.program);let s=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),m=this.getUniform(t,a,"uCameraPosition"),p=this.getUniform(t,a,"uAspectRatio"),d=this.getUniform(t,a,"uShapes"),i=this.getUniform(t,a,"uOperations"),h=this.getUniform(t,a,"uNumOperations"),l=this.getUniform(t,a,"uMaterials"),v=this.getUniform(t,a,"uLights"),S=this.getUniform(t,a,"uNumLights"),g=this.getUniform(t,a,"uMaxMarchingSteps"),x=this.getUniform(t,a,"uEpsilon"),y=this.getUniform(t,a,"uFlags");return new n(t,a,o,d,i,h,v,S,l,m,c,p,g,x,y)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var dt=n=>u("label",{style:{display:"inline-block"}},n.label,u("input",{style:{display:"block"},type:"range",...n.inputProps})),Z=class extends b{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:a,epsilon:s,maxMarchingStep:c}=this.props.options;return u("div",{class:"viewport-options"},u("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),u("select",{onChange:this.changeRenderScale,value:o},u("option",{value:"2"},"2x"),u("option",{value:"1.5"},"1.5x"),u("option",{value:"1"},"1x"),u("option",{value:"0.5"},"0.5x"),u("option",{value:"0.25"},"0.25x"),u("option",{value:"0.125"},"0.125x")),u("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),u("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),u(dt,{label:`Epsilon ${s}`,inputProps:{value:s,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),u(dt,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),z.execute(ve(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?z.execute(ve(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var ae=class extends b{canvasRef=Xe();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=W.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),u("div",{class:"viewport outer-panel"},u("canvas",{className:e,ref:this.canvasRef}),u(Z,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sdfScene)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function jt(n){return Object.hasOwn(n,"z")}function Jt(n){return Object.hasOwn(n,"w")}var C=class extends b{render(){let e=this.props.vector,t=this.props.disabled,o=jt(e),r=Jt(e);return u("div",{class:"vector"},u("input",{disabled:t,type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),u("input",{disabled:t,type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),o&&u("input",{disabled:t,type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),r&&u("input",{disabled:t,type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,a=parseFloat(r);if(!isFinite(a)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,a),this.props.onChange(o,{...o,[t]:a})}};var B=class extends b{render(){let e=this.props.shape;if(e===void 0)return u("div",null,"Empty shape");let t=e.lightingModel==="phong";return u("div",null,u("div",null,u("strong",null,"Type")," ",u("select",{value:e.type??"none",onChange:this.onChangeType},u("option",{value:"none"},"None"),u("option",{value:"box"},"Box"),u("option",{value:"sphere"},"Sphere"),u("option",{value:"hexPrism"},"Hex Prism"))),u("div",null,u("strong",null,"Shape Params")," ",u(C,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),u("div",null,u("strong",null,"Lighting Model")," ",u("select",{value:e.lightingModel,onChange:this.onChangeLightingModel},u("option",{value:"unlit"},"Unlit"),u("option",{value:"lambert"},"Lambert"),u("option",{value:"phong"},"Phong"))),u("div",null,u("strong",null,"Diffuse Colour")," ",u(C,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),u("div",null,u("strong",null,"Specular Colour")," ",u(C,{disabled:!t,vector:e.specularColour,onChange:this.onChangeSpecularColour})),u("div",null,u("strong",null,"Shininess")," ",u("input",{disabled:!t,type:"number",min:0,max:100,step:.1,value:e.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeLightingModel=e=>{let t=e.target.value;this.updateField(t,"lightingModel")};onChangeShininess=e=>{let t=parseFloat(e.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var E=class extends b{render(){let e=this.props.light;return e===void 0?u("div",null,"Empty Light"):u("div",null,u("div",null,u("strong",null,"Colour")," ",u(C,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var Q=class extends b{constructor(){super(),this.state={show:!1}}render(){let{node:e}=this.props;if(e==null)return u("div",{class:"scene-node-view"},"No node selected");let t=e.childOpCode??"none";return u("div",{class:"scene-node-view"},u("div",null,u("strong",null,"Name")," ",u("input",{type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),u("div",null,u("strong",null,"Position")," ",u(C,{vector:e.position,onChange:this.onChangePosition})),u("div",null,u("strong",null,"Rotation")," ",u(C,{vector:e.rotation,onChange:this.onChangeRotation})),u("div",null,u("strong",null,"Op Code")," ",u("select",{value:t,onChange:this.onChangeOpCode},u("option",{value:"none"},"None"),u("option",{value:"union"},"Union"),u("option",{value:"intersection"},"Intersection"),u("option",{value:"subtraction"},"Subtraction"))),u("div",null,u("strong",null,"Shape")," ",u(B,{shape:e.shape,onChange:this.onChangeShape})),u("div",null,u("strong",null,"Light")," ",u(E,{light:e.light,onChange:this.onChangeLight})))}onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};var j=class extends b{render(){let{depth:e,node:t,isSelected:o}=this.props,r="scene-node-tree-item"+(o?" is-selected":"");return u("div",{class:r,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.onClicked(this.props.node)}};var J=class extends b{render(){return u("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sdfTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],a=[];if(r==null)return a;let s=et(e);console.log(s);for(let c of s){let m=c.node.id===t;a.push(u(j,{isSelected:m,depth:c.depth,key:c.node.id,node:c.node,onClicked:o}))}return a}};var Y=class extends b{render(){let{sdfTree:e,selectedNodeId:t}=this.props;return u("div",{class:"scene-tree"},u("div",{class:"scene-tree__contents outer-panel"},u("div",{class:"inner-panel"},u(J,{sdfTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),u("div",{class:"inner-panel"},u(Q,{node:e.nodes[t],onChange:this.onChangeSelectedNode}))))}onNodeClicked=e=>{z.execute(at(e.id))};onChangeSelectedNode=(e,t)=>{z.execute(nt(e))}};var D=Oe(ht());var we=-500,xt=-600,yt=-700,ft=-800,bt=-900,ie=-5e3,vt=-6e3,gt=-7e3,St=-8e3,Ce=0,Ie=1,zt=2;function _e(){return crypto.randomUUID()}var Yt=8,Ht=16,$t=8,Kt={none:we,union:xt,intersection:yt,subtraction:ft,xor:bt},qt={none:ie,box:vt,sphere:gt,hexPrism:St},en={unlit:Ce,lambert:Ie,phong:zt};function tn(n){return qt[n]||ie}function nn(n){return Kt[n]||we}function on(n){return en[n]||Ce}var se=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,shapes:r,lights:a,materials:s}=n.createShapesFromNode(e);if((0,D.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),!(0,D.default)(this.shapes,r)){console.log("Shapes",this.shapes),this.shapes=r,this.shapeDataArray.length=0;for(let c=0;c<this.shapes.length;c++)this.updateShape(c)}if(!(0,D.default)(this.lights,a)){this.lights=a,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let c=0;c<this.lights.length;c++)this.updateLight(c)}if(!(0,D.default)(this.materials,s)){this.materials=s,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let c=0;c<this.materials.length;c++)this.updateMaterial(c)}}static createShapesFromNode(e){let t=e.nodes[e.rootNodeId];if(!t)return;let o=[],r=[],a=[],s=[];return this.pushToStack(o,r,a,s,t,e.nodes),o.reverse(),{operations:o,shapes:r,lights:a,materials:s}}static pushToStack(e,t,o,r,a,s){if(a.childOpCode!==void 0&&a.childOpCode!=="none"&&e.push(a.childOpCode),a.shape!=null){let c=t.findIndex(m=>(0,D.default)(m,a.shape));if(c<0){c=t.length;let m=n.convertToShape(a,r);m!=null&&t.push(m)}e.push(c)}if(a.light!=null){let c=n.convertToLight(a);c!=null&&o.push(c)}if(a.childrenIds!==void 0)for(let c of a.childrenIds)this.pushToStack(e,t,o,r,s[c],s)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*Yt,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*$t,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.lightingModel,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.shininess}updateShape(e){let t=e*Ht,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?nn(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r={diffuseColour:o.diffuseColour,lightingModel:on(o.lightingModel),specularColour:o.specularColour,shininess:o.shininess},a=this.findApproxMaterial(r,t);return a<0&&(a=t.length,t.push(r)),{material:a,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:tn(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:ge(),lightingModel:Ie,specularColour:ge(),shininess:10}}static createNewLight(){return{position:w(),radius:10,colour:re()}}static createNewShape(e){return{position:w(),rotation:L(),maxSize:0,shapeType:ie,shapeParams:w(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(!(r.lightingModel!==e.lightingModel||Math.abs(r.shininess-e.shininess)<1e-4)&&Se(r.diffuseColour,e.diffuseColour)&&Se(r.specularColour,e.specularColour))return o}return-1}};var Me=new se;z.subscribe(n=>n.sdfTree,rn);function rn(n){Me.updateShapesFromTree(n.sdfTree)}var ce=class extends b{render(){let{viewports:e,sdfTree:t,selectedNodeId:o}=this.props.state;return console.log("App render",this.props.state),u(O,null,u("div",{class:"main-view"},u("div",{class:"viewports"},u(ae,{viewportIndex:0,options:e[0].options,sdfScene:Me})),u(Y,{sdfScene:Me,sdfTree:t,selectedNodeId:o})))}};function an(n){return{maxSize:0,type:"none",shapeParams:w(),diffuseColour:{x:.7,y:.3,z:.2},specularColour:{x:1,y:.8,z:.9},lightingModel:"lambert",shininess:10,...n}}function sn(n){return{colour:re(),radius:10,...n}}function wt(n,e,t,o){return{name:n,position:t??w(),rotation:o??L(),id:_e(),light:e!=null?sn(e):void 0}}function H(n,e,t,o,r){return{name:n,position:t??w(),rotation:o??L(),id:_e(),shape:e!=null?an(e):void 0,childOpCode:r}}function F(n,e){n.childrenIds==null&&(n.childrenIds=[]),n.childrenIds.push(e.id)}function cn(...n){let e={};for(let t of n)e[t.id]=t;return e}function un(){let n=H("Root",null,void 0,void 0,"subtraction"),e=H("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5}),t=H("Box & Sphere",void 0,void 0,void 0,"union");F(n,e),F(n,t);let o=H("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3},lightingModel:"lambert"},{x:0,y:-1.5,z:0}),r=H("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2},lightingModel:"phong"});F(t,o),F(t,r);let a=wt("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),s=wt("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});F(n,a),F(n,s);let c=cn(n,e,t,o,r,a,s);z.execute(rt(n.id)),z.execute(ot(c))}un();var pn=document.getElementById("app");function Ct(){Je(u(ce,{state:z.state()}),pn)}Ct();z.subscribeAny(Ct);})();
//# sourceMappingURL=webgl-index.js.map
