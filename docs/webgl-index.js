(()=>{var vt=Object.create;var _e=Object.defineProperty;var St=Object.getOwnPropertyDescriptor;var zt=Object.getOwnPropertyNames;var gt=Object.getPrototypeOf,wt=Object.prototype.hasOwnProperty;var Me=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Ct=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of zt(e))!wt.call(n,r)&&r!==t&&_e(n,r,{get:()=>e[r],enumerable:!(o=St(e,r))||o.enumerable});return n};var Ae=(n,e,t)=>(t=n!=null?vt(gt(n)):{},Ct(e||!n||!n.__esModule?_e(t,"default",{value:n,enumerable:!0}):t,n));var Je=Me(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.EmptyModifier=void 0;var Tt=()=>null;B.EmptyModifier=Tt;var ye=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let a=e(this.currentState),s={selector:new fe(e,a,o,r),subscription:t};return this.subscriptions.push(s),()=>{let c=this.subscriptions.indexOf(s);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};B.default=ye;var fe=class{constructor(e,t=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var ut=Me((rr,ct)=>{"use strict";ct.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var s=a[r];if(!n(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}});var oe,f,De,It,A,Le,Fe,Ve,Pe,de,pe,me,_t,k={},Re=[],Mt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,re=Array.isArray;function _(n,e){for(var t in e)n[t]=e[t];return n}function le(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function p(n,e,t){var o,r,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?oe.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return te(n,s,o,r,null)}function te(n,e,t,o,r){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++De,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(a),a}function Ge(){return{current:null}}function O(n){return n.children}function b(n,e){this.props=n,this.context=e}function N(n,e){if(e==null)return n.__?N(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?N(n):null}function Ue(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Ue(n)}}function Ne(n){(!n.__d&&(n.__d=!0)&&A.push(n)&&!ne.__r++||Le!=f.debounceRendering)&&((Le=f.debounceRendering)||Fe)(ne)}function ne(){for(var n,e,t,o,r,a,s,c=1;A.length;)A.length>c&&A.sort(Ve),n=A.shift(),c=A.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,a=[],s=[],e.__P&&((t=_({},o)).__v=o.__v+1,f.vnode&&f.vnode(t),xe(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??N(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,Ee(a,t,s),t.__e!=r&&Ue(t)));ne.__r=0}function ke(n,e,t,o,r,a,s,c,m,u,d){var i,x,l,v,z,S,h=o&&o.__k||Re,y=e.length;for(m=At(t,e,h,m,y),i=0;i<y;i++)(l=t.__k[i])!=null&&(x=l.__i==-1?k:h[l.__i]||k,l.__i=i,S=xe(n,l,x,r,a,s,c,m,u,d),v=l.__e,l.ref&&x.ref!=l.ref&&(x.ref&&he(x.ref,null,l),d.push(l.ref,l.__c||v,l)),z==null&&v!=null&&(z=v),4&l.__u||x.__k===l.__k?m=Be(l,m,n):typeof l.type=="function"&&S!==void 0?m=S:v&&(m=v.nextSibling),l.__u&=-7);return t.__e=z,m}function At(n,e,t,o,r){var a,s,c,m,u,d=t.length,i=d,x=0;for(n.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(m=a+x,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?te(null,s,null,null,null):re(s)?te(O,{children:s},null,null,null):s.constructor==null&&s.__b>0?te(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,c=null,(u=s.__i=Lt(s,t,m,i))!=-1&&(i--,(c=t[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(r>d?x--:r<d&&x++),typeof s.type!="function"&&(s.__u|=4)):u!=m&&(u==m-1?x--:u==m+1?x++:(u>m?x--:x++,s.__u|=4))):n.__k[a]=null;if(i)for(a=0;a<d;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=N(c)),Ze(c,c));return o}function Be(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=Be(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=N(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Lt(n,e,t,o){var r,a,s=n.key,c=n.type,m=e[t];if(m===null&&n.key==null||m&&s==m.key&&c==m.type&&(2&m.__u)==0)return t;if(o>(m!=null&&(2&m.__u)==0?1:0))for(r=t-1,a=t+1;r>=0||a<e.length;){if(r>=0){if((m=e[r])&&(2&m.__u)==0&&s==m.key&&c==m.type)return r;r--}if(a<e.length){if((m=e[a])&&(2&m.__u)==0&&s==m.key&&c==m.type)return a;a++}}return-1}function Oe(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Mt.test(e)?t:t+"px"}function ee(n,e,t,o,r){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||Oe(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||Oe(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Pe,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=de,n.addEventListener(e,a?me:pe,a)):n.removeEventListener(e,a?me:pe,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Te(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=de++;else if(e.t<t.u)return;return t(f.event?f.event(e):e)}}}function xe(n,e,t,o,r,a,s,c,m,u){var d,i,x,l,v,z,S,h,y,P,M,K,R,Ie,q,G,ue,I=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[c=e.__e=t.__e]),(d=f.__b)&&d(e);e:if(typeof I=="function")try{if(h=e.props,y="prototype"in I&&I.prototype.render,P=(d=I.contextType)&&o[d.__c],M=d?P?P.props.value:d.__:o,t.__c?S=(i=e.__c=t.__c).__=i.__E:(y?e.__c=i=new I(h,M):(e.__c=i=new b(h,M),i.constructor=I,i.render=Ot),P&&P.sub(i),i.props=h,i.state||(i.state={}),i.context=M,i.__n=o,x=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&I.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=_({},i.__s)),_(i.__s,I.getDerivedStateFromProps(h,i.__s))),l=i.props,v=i.state,i.__v=e,x)y&&I.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&I.getDerivedStateFromProps==null&&h!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,M),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,M)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(U){U&&(U.__=e)}),K=0;K<i._sb.length;K++)i.__h.push(i._sb[K]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,M),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,v,z)})}if(i.context=M,i.props=h,i.__P=n,i.__e=!1,R=f.__r,Ie=0,y){for(i.state=i.__s,i.__d=!1,R&&R(e),d=i.render(i.props,i.state,i.context),q=0;q<i._sb.length;q++)i.__h.push(i._sb[q]);i._sb=[]}else do i.__d=!1,R&&R(e),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Ie<25);i.state=i.__s,i.getChildContext!=null&&(o=_(_({},o),i.getChildContext())),y&&!x&&i.getSnapshotBeforeUpdate!=null&&(z=i.getSnapshotBeforeUpdate(l,v)),G=d,d!=null&&d.type===O&&d.key==null&&(G=Xe(d.props.children)),c=ke(n,re(G)?G:[G],e,t,o,r,a,s,c,m,u),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),S&&(i.__E=i.__=null)}catch(U){if(e.__v=null,m||a!=null)if(U.then){for(e.__u|=m?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(ue=a.length;ue--;)le(a[ue]);else e.__e=t.__e,e.__k=t.__k;f.__e(U,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=Nt(t.__e,e,t,o,r,a,s,m,u);return(d=f.diffed)&&d(e),128&e.__u?void 0:c}function Ee(n,e,t){for(var o=0;o<t.length;o++)he(t[o],t[++o],t[++o]);f.__c&&f.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){f.__e(a,r.__v)}})}function Xe(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:re(n)?n.map(Xe):_({},n)}function Nt(n,e,t,o,r,a,s,c,m){var u,d,i,x,l,v,z,S=t.props,h=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((l=a[u])&&"setAttribute"in l==!!y&&(y?l.localName==y:l.nodeType==3)){n=l,a[u]=null;break}}if(n==null){if(y==null)return document.createTextNode(h);n=document.createElementNS(r,y,h.is&&h),c&&(f.__m&&f.__m(e,a),c=!1),a=null}if(y==null)S===h||c&&n.data==h||(n.data=h);else{if(a=a&&oe.call(n.childNodes),S=t.props||k,!c&&a!=null)for(S={},u=0;u<n.attributes.length;u++)S[(l=n.attributes[u]).name]=l.value;for(u in S)if(l=S[u],u!="children"){if(u=="dangerouslySetInnerHTML")i=l;else if(!(u in h)){if(u=="value"&&"defaultValue"in h||u=="checked"&&"defaultChecked"in h)continue;ee(n,u,null,l,r)}}for(u in h)l=h[u],u=="children"?x=l:u=="dangerouslySetInnerHTML"?d=l:u=="value"?v=l:u=="checked"?z=l:c&&typeof l!="function"||S[u]===l||ee(n,u,l,S[u],r);if(d)c||i&&(d.__html==i.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(i&&(n.innerHTML=""),ke(e.type=="template"?n.content:n,re(x)?x:[x],e,t,o,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&N(t,0),c,m),a!=null)for(u=a.length;u--;)le(a[u]);c||(u="value",y=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[u]||y=="progress"&&!v||y=="option"&&v!=S[u])&&ee(n,u,v,S[u],r),u="checked",z!=null&&z!=n[u]&&ee(n,u,z,S[u],r))}return n}function he(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){f.__e(r,t)}}function Ze(n,e,t){var o,r;if(f.unmount&&f.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||he(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){f.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&Ze(o[r],e,t||typeof n.type!="function");t||le(n.__e),n.__c=n.__=n.__e=void 0}function Ot(n,e,t){return this.constructor(n,t)}function We(n,e,t){var o,r,a,s;e==document&&(e=document.documentElement),f.__&&f.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],s=[],xe(e,n=(!o&&t||e).__k=p(O,null,[n]),r||k,k,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?oe.call(e.childNodes):null,a,!o&&t?t:r?r.__e:e.firstChild,o,s),Ee(a,n,s)}oe=Re.slice,f={__e:function(n,e,t,o){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),s=r.__d),s)return r.__E=r}catch(c){n=c}throw n}},De=0,It=function(n){return n!=null&&n.constructor==null},b.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=_({},this.state),typeof n=="function"&&(n=n(_({},t),this.props)),n&&_(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Ne(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Ne(this))},b.prototype.render=O,A=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ve=function(n,e){return n.__v.__b-e.__v.__b},ne.__r=0,Pe=/(PointerCapture)$|Capture$/i,de=0,pe=Te(!1),me=Te(!0),_t=0;var je=Ae(Je()),Dt={renderScale:1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001,pixelated:!1},be={options:Dt},g=new je.default({viewports:[be],sdfTree:{nodes:{}}});function Ye(n,e){let t={...n.nodes,[e.id]:e};return{...n,nodes:t}}function Qe(n,e){return{...n,rootNodeId:e}}function He(n,e){return{...n,nodes:e}}function ve(n,e){return t=>{let o=t.viewports[n]??be,r={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=r,{viewports:a}}}function $e(n){return e=>({sdfTree:Ye(e.sdfTree,n)})}function Ke(n){return e=>({sdfTree:He(e.sdfTree,n)})}function qe(n){return e=>({sdfTree:Qe(e.sdfTree,n)})}function et(n){return()=>({selectedNodeId:n})}var tt=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var nt=`#version 300 es

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
    vec3 testPoint = point - samplePoint;
    // return sphereSDF(samplePoint);

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

vec3 estimateNormal(vec3 point, float currentDepth)
{
    vec2 eps_zero = vec2(currentDepth * 0.0015, 0.0);
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

/**
 * Lighting contribution of a single point light source via Phong illumination.
 *
 * The vec3 returned is the RGB color of the light's contribution.
 *
 * diffuse: Diffuse color
 * specular: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongContribForLight(vec3 currentDepth, vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity)
{
    vec3 N = estimateNormalLambert(p, currentDepth);

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
    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, alpha));
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
const vec3 ambientLight = 0.5 * 0.2 * vec3(1.0, 1.0, 1.0);
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

        vec3 diffuse = vec3(0.7, 0.2, 0.2);
        vec3 specular = vec3(1.0, 1.0, 1.0);
        float shininess = 10.0;
        if (dist.w >= 0.0)
        {
            mat2x4 material = uMaterials[int(dist.w)];
            diffuse = material[0].xyz;
            specular = material[1].xyz;
        }

        litColour = phongIllumination(dist.xyz, diffuse, specular, shininess, worldPoint, rayOrigin);

        fragColour = vec4(litColour.xyz, 1.0);
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);
        fragColour = vec4(r, g, 0, 1);
    }
}`;var ot=`const int ShapeTypeNone = -5000;
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
}`;var Rt=/^#include\s+\<([^\>]+)\>/gmi,E=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Rt);for(let r of o){let a=e[r[1]];a===void 0&&(console.error(`Unknown shader include ${r[1]}`),a=""),t=t.replace(r[0],a)}return t}static create(e,t,o,r){function a(){m!=null&&(e.detachShader(m,s),e.detachShader(m,c)),s!=null&&e.deleteShader(s),c!=null&&e.deleteShader(c)}let s=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(s,this.assembleShader(t,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Vertex shader compile error",u),a(),new Error(`Vertex shader compile error ${u}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",u),a(),new Error(`Fragment shader compile error ${u}`)}let m=e.createProgram();if(e.attachShader(m,s),e.attachShader(m,c),e.linkProgram(m),a(),!e.getProgramParameter(m,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(m);let u=e.getProgramInfoLog(m);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new n(m)}};var T=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function rt(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function at(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,a=e.z,s=t.w*2,c=t.y*a-t.z*r,m=t.z*o-t.x*a,u=t.x*r-t.y*o,d=(t.y*u-t.z*m)*2,i=(t.z*c-t.x*u)*2,x=(t.x*m-t.y*c)*2;return c*=s,m*=s,u*=s,n.x=o+c+d,n.y=r+m+i,n.z=a+u+x,n}function w(){return{x:0,y:0,z:0}}function Gt(n,e){let t=n.x-e.x,o=n.y-e.y,r=n.z-e.z,a=n.w-e.w;return Math.sqrt(t**2+o**2+r**2+a**2)}function D(){return{x:1,y:1,z:1,w:1}}function Se(n,e,t=1e-4){return Gt(n,e)<t}function L(){return{x:0,y:0,z:0,w:1}}function it(n,e,t,o,r=T.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let s=Math.sin(e),c=Math.cos(e),m=Math.sin(t),u=Math.cos(t),d=Math.sin(o),i=Math.cos(o);switch(r){case"xyz":n.x=s*u*i+c*m*d,n.y=c*m*i-s*u*d,n.z=c*u*d+s*m*i,n.w=c*u*i-s*m*d;break;case"xzy":n.x=s*u*i-c*m*d,n.y=c*m*i-s*u*d,n.z=c*u*d+s*m*i,n.w=c*u*i+s*m*d;break;case"yxz":n.x=s*u*i+c*m*d,n.y=c*m*i-s*u*d,n.z=c*u*d-s*m*i,n.w=c*u*i+s*m*d;break;case"yzx":n.x=s*u*i+c*m*d,n.y=c*m*i+s*u*d,n.z=c*u*d-s*m*i,n.w=c*u*i-s*m*d;break;case"zxy":n.x=s*u*i-c*m*d,n.y=c*m*i+s*u*d,n.z=c*u*d+s*m*i,n.w=c*u*i-s*m*d;break;case"zyx":n.x=s*u*i-c*m*d,n.y=c*m*i+s*u*d,n.z=c*u*d-s*m*i,n.w=c*u*i+s*m*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Ut=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],ze=L();function kt(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*t,s=e.y*t,c=e.y*o,m=e.z*t,u=e.z*o,d=e.z*r,i=e.w*t,x=e.w*o,l=e.w*r;return n[0]=1-c-d,n[1]=s-l,n[2]=m+x,n[3]=s+l,n[4]=1-a-d,n[5]=u-i,n[6]=m-x,n[7]=u+i,n[8]=1-a-c,n}var X=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uMaterials;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=w();cameraTarget=w();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);prevShapes;prevOperations;prevMaterials;prevLights;constructor(e,t,o,r,a,s,c,m,u,d,i,x,l,v,z){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=s,this.uMaterials=u,this.uLights=c,this.uNumLights=m,this.uCameraPosition=d,this.uCameraMatrix=i,this.uAspectRatio=x,this.uMaxMarchingSteps=l,this.uEpsilon=v,this.uFlags=z}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){it(ze,this.cameraRotationX,this.cameraRotationY,0);let e=at(w(),{x:0,y:0,z:1},ze);rt(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),kt(this.cameraMatrixArray,ze)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){if(this.prevLights!==e.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.prevLights=e.getLights()),this.prevOperations!==e.getOperations()){console.info("Rendering new operations");let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.prevOperations=e.getOperations()}this.prevShapes!==e.getShapes()&&(console.info("Rendering new shapes"),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.prevShapes=e.getShapes()),this.prevMaterials!==e.getMaterials()&&(console.info("Rendering new materials"),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,e.getMaterialDataArray()),this.prevMaterials=e.getMaterials()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Ut),t.STATIC_DRAW);let r={"sdf-functions":ot},a=E.create(t,r,tt,nt);t.useProgram(a.program);let s=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),m=this.getUniform(t,a,"uCameraPosition"),u=this.getUniform(t,a,"uAspectRatio"),d=this.getUniform(t,a,"uShapes"),i=this.getUniform(t,a,"uOperations"),x=this.getUniform(t,a,"uNumOperations"),l=this.getUniform(t,a,"uMaterials"),v=this.getUniform(t,a,"uLights"),z=this.getUniform(t,a,"uNumLights"),S=this.getUniform(t,a,"uMaxMarchingSteps"),h=this.getUniform(t,a,"uEpsilon"),y=this.getUniform(t,a,"uFlags");return new n(t,a,o,d,i,x,v,z,l,m,c,u,S,h,y)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var st=n=>p("label",{style:{display:"inline-block"}},n.label,p("input",{style:{display:"block"},type:"range",...n.inputProps})),Z=class extends b{render(e){let{pixelated:t,renderScale:o,enableShadows:r,enableShowMarching:a,epsilon:s,maxMarchingStep:c}=this.props.options;return p("div",{class:"viewport-options"},p("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),p("select",{onChange:this.changeRenderScale,value:o},p("option",{value:"2"},"2x"),p("option",{value:"1.5"},"1.5x"),p("option",{value:"1"},"1x"),p("option",{value:"0.5"},"0.5x"),p("option",{value:"0.25"},"0.25x"),p("option",{value:"0.125"},"0.125x")),p("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),p("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),p(st,{label:`Epsilon ${s}`,inputProps:{value:s,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),p(st,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};togglePixelated=e=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),g.execute(ve(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?g.execute(ve(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var ae=class extends b{canvasRef=Ge();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=X.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let e="viewport__canvas";return this.props.options.pixelated&&(e+=" is-pixelated"),p("div",{class:"viewport outer-panel"},p("canvas",{className:e,ref:this.canvasRef}),p(Z,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sdfScene)};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function Bt(n){return Object.hasOwn(n,"z")}function Et(n){return Object.hasOwn(n,"w")}var C=class extends b{render(){let e=this.props.vector,t=Bt(e),o=Et(e);return p("div",{class:"vector"},p("input",{type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),p("input",{type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),t&&p("input",{type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),o&&p("input",{type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,a=parseFloat(r);if(!isFinite(a)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,a),this.props.onChange(o,{...o,[t]:a})}};var W=class extends b{render(){let e=this.props.shape;return e===void 0?p("div",null,"Empty shape"):p("div",null,p("div",null,p("strong",null,"Type")," ",p("select",{value:e.type??"none",onChange:this.onChangeType},p("option",{value:"none"},"None"),p("option",{value:"box"},"Box"),p("option",{value:"sphere"},"Sphere"),p("option",{value:"hexPrism"},"Hex Prism"))),p("div",null,p("strong",null,"Shape Params")," ",p(C,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),p("div",null,p("strong",null,"Diffuse Colour")," ",p(C,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),p("div",null,p("strong",null,"Specular Colour")," ",p(C,{vector:e.specularColour,onChange:this.onChangeSpecularColour})))}onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var J=class extends b{render(){let e=this.props.light;return e===void 0?p("div",null,"Empty Light"):p("div",null,p("div",null,p("strong",null,"Colour")," ",p(C,{vector:e.colour,onChange:this.onChangeColour})))}onChangeColour=(e,t)=>{this.updateField(t,"colour")};updateField=(e,t)=>{console.log("Update light",t,e);let o={...this.props.light,[t]:e};this.props.onChange(o)}};var j=class extends b{constructor(){super(),this.state={show:!1}}render(){let{node:e}=this.props;if(e==null)return p("div",{class:"scene-node-view"},"No node selected");let t=e.childOpCode??"none";return p("div",{class:"scene-node-view"},p("div",null,p("strong",null,"Name")," ",p("input",{type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),p("div",null,p("strong",null,"Position")," ",p(C,{vector:e.position,onChange:this.onChangePosition})),p("div",null,p("strong",null,"Rotation")," ",p(C,{vector:e.rotation,onChange:this.onChangeRotation})),p("div",null,p("strong",null,"Op Code")," ",p("select",{value:t,onChange:this.onChangeOpCode},p("option",{value:"none"},"None"),p("option",{value:"union"},"Union"),p("option",{value:"intersection"},"Intersection"),p("option",{value:"subtraction"},"Subtraction"))),p("div",null,p("strong",null,"Shape")," ",p(W,{shape:e.shape,onChange:this.onChangeShape})),p("div",null,p("strong",null,"Light")," ",p(J,{light:e.light,onChange:this.onChangeLight})))}onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeLight=e=>{this.updateField(e,"light")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};var Y=class extends b{render(){let{depth:e,node:t,isSelected:o}=this.props,r="scene-node-tree-item"+(o?" is-selected":"");return p("div",{class:r,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.onClicked(this.props.node)}};var Q=class extends b{render(){return p("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sdfTree:e,selectedNodeId:t,onItemClicked:o}=this.props,r=e.nodes[e.rootNodeId],a=[];if(r==null)return a;let s=[{node:e.nodes[e.rootNodeId],depth:0}];for(;s.length>0;){let{node:c,depth:m}=s[0];if(s.splice(0,1),a.push(p(Y,{isSelected:c.id===t,depth:m,key:c.id,node:c,onClicked:o})),c.childrenIds!=null)for(let u of c.childrenIds)s.push({node:e.nodes[u],depth:m+1})}return a}};var H=class extends b{render(){let{sdfTree:e,selectedNodeId:t}=this.props;return p("div",{class:"scene-tree"},p("div",{class:"scene-tree__contents outer-panel"},p("div",{class:"inner-panel"},p(Q,{sdfTree:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),p("div",{class:"inner-panel"},p(j,{node:e.nodes[t],onChange:this.onChangeSelectedNode}))))}onNodeClicked=e=>{g.execute(et(e.id))};onChangeSelectedNode=(e,t)=>{g.execute($e(e))}};var F=Ae(ut());var ge=-500,pt=-600,mt=-700,dt=-800,lt=-900,ie=-5e3,xt=-6e3,ht=-7e3,yt=-8e3;function we(){return crypto.randomUUID()}var Xt=8,Zt=16,Wt=8,Jt={none:ge,union:pt,intersection:mt,subtraction:dt,xor:lt},jt={none:ie,box:xt,sphere:ht,hexPrism:yt};function Yt(n){return jt[n]||ie}function Qt(n){return Jt[n]||ge}var se=class n{lights=[];lightDataArray=[];materials=[];materialDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];previousTree;getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}setMaterial(e,t){if(e<0)throw new Error(`Out of bounds material index ${e}`);e>=this.materials.length?this.materials[e]={...n.createNewMaterial(),...t}:this.materials[e]={...this.materials[e],...t},this.updateMaterial(e)}updateShapesFromTree(e){if(this.previousTree===e||!e.nodes[e.rootNodeId])return;let{operations:o,shapes:r,lights:a,materials:s}=n.createShapesFromNode(e);if((0,F.default)(this.operations,o)||(this.operations=o,console.log("Operations",this.operations),this.updateOperationNumbers()),!(0,F.default)(this.shapes,r)){console.log("Shapes",this.shapes),this.shapes=r,this.shapeDataArray.length=0;for(let c=0;c<this.shapes.length;c++)this.updateShape(c)}if(!(0,F.default)(this.lights,a)){this.lights=a,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let c=0;c<this.lights.length;c++)this.updateLight(c)}if(!(0,F.default)(this.materials,s)){this.materials=s,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let c=0;c<this.materials.length;c++)this.updateMaterial(c)}}static createShapesFromNode(e){let t=e.nodes[e.rootNodeId];if(!t)return;let o=[],r=[],a=[],s=[];return this.pushToStack(o,r,a,s,t,e.nodes),o.reverse(),{operations:o,shapes:r,lights:a,materials:s}}static pushToStack(e,t,o,r,a,s){if(a.childOpCode!==void 0&&a.childOpCode!=="none"&&e.push(a.childOpCode),a.shape!=null){let c=t.findIndex(m=>(0,F.default)(m,a.shape));if(c<0){c=t.length;let m=n.convertToShape(a,r);m!=null&&t.push(m)}e.push(c)}if(a.light!=null){let c=n.convertToLight(a);c!=null&&o.push(c)}if(a.childrenIds!==void 0)for(let c of a.childrenIds)this.pushToStack(e,t,o,r,s[c],s)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*Xt,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateMaterial(e){let t=e*Wt,o=this.materials[e];this.materialDataArray[t]=o.diffuseColour.x,this.materialDataArray[t+1]=o.diffuseColour.y,this.materialDataArray[t+2]=o.diffuseColour.z,this.materialDataArray[t+3]=o.diffuseColour.w,this.materialDataArray[t+4]=o.specularColour.x,this.materialDataArray[t+5]=o.specularColour.y,this.materialDataArray[t+6]=o.specularColour.z,this.materialDataArray[t+7]=o.specularColour.w}updateShape(e){let t=e*Zt,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=o.shapeType,this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=Math.round(o.material),this.shapeDataArray[t+13]=0,this.shapeDataArray[t+14]=0,this.shapeDataArray[t+15]=0}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?Qt(e):e)}static convertToShape(e,t){let o=e.shape;if(o==null)return null;let r=this.findApproxMaterial(o,t);return r<0&&(r=t.length,t.push({diffuseColour:o.diffuseColour,specularColour:o.specularColour})),{material:r,maxSize:o.maxSize,position:e.position,rotation:e.rotation,shapeParams:o.shapeParams,shapeType:Yt(o.type)}}static convertToLight(e){let t=e.light;return t==null?null:{colour:t.colour,position:e.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:D(),specularColour:D()}}static createNewLight(){return{position:w(),radius:10,colour:D()}}static createNewShape(e){return{position:w(),rotation:L(),maxSize:0,shapeType:ie,shapeParams:w(),material:0,...e}}static findApproxMaterial(e,t){for(let o=0;o<t.length;o++){let r=t[o];if(Se(r.diffuseColour,e.diffuseColour)&&Se(r.specularColour,e.specularColour))return o}return-1}};var Ce=new se;g.subscribe(n=>n.sdfTree,Ht);function Ht(n){Ce.updateShapesFromTree(n.sdfTree)}var ce=class extends b{render(){let{viewports:e,sdfTree:t,selectedNodeId:o}=this.props.state;return console.log("App render",this.props.state),p(O,null,p("div",{class:"main-view"},p("div",{class:"viewports"},p(ae,{viewportIndex:0,options:e[0].options,sdfScene:Ce})),p(H,{sdfScene:Ce,sdfTree:t,selectedNodeId:o})))}};function $t(n){return{maxSize:0,type:"none",shapeParams:w(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1},...n}}function Kt(n){return{colour:D(),radius:10,...n}}function ft(n,e,t,o){return{name:n,position:t??w(),rotation:o??L(),id:we(),light:e!=null?Kt(e):void 0}}function $(n,e,t,o,r){return{name:n,position:t??w(),rotation:o??L(),id:we(),shape:e!=null?$t(e):void 0,childOpCode:r}}function V(n,e){n.childrenIds==null&&(n.childrenIds=[]),n.childrenIds.push(e.id)}function qt(...n){let e={};for(let t of n)e[t.id]=t;return e}function en(){let n=$("Root",null,void 0,void 0,"subtraction"),e=$("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5}),t=$("Box & Sphere",void 0,void 0,void 0,"union");V(n,e),V(n,t);let o=$("Box",{type:"box",shapeParams:{x:6,y:1,z:6},diffuseColour:{x:.2,y:.25,z:.3,w:1}},{x:0,y:-1.5,z:0}),r=$("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}});V(t,o),V(t,r);let a=ft("Red Light",{colour:{x:1,y:.8,z:.6,w:1}},{x:4,y:2,z:3}),s=ft("Green Light",{colour:{x:.2,y:1,z:.6,w:1}},{x:-4,y:2,z:3});V(n,a),V(n,s);let c=qt(n,e,t,o,r,a,s);g.execute(qe(n.id)),g.execute(Ke(c))}en();var tn=document.getElementById("app");function bt(){We(p(ce,{state:g.state()}),tn)}bt();g.subscribeAny(bt);})();
//# sourceMappingURL=webgl-index.js.map
