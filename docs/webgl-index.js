(()=>{var st=Object.create;var ve=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var ut=Object.getOwnPropertyNames;var pt=Object.getPrototypeOf,mt=Object.prototype.hasOwnProperty;var ze=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var dt=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ut(e))!mt.call(n,r)&&r!==t&&ve(n,r,{get:()=>e[r],enumerable:!(o=ct(e,r))||o.enumerable});return n};var Se=(n,e,t)=>(t=n!=null?st(pt(n)):{},dt(e||!n||!n.__esModule?ve(t,"default",{value:n,enumerable:!0}):t,n));var ke=ze(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.EmptyModifier=void 0;var zt=()=>null;G.EmptyModifier=zt;var le=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let a=e(this.currentState),s={selector:new xe(e,a,o,r),subscription:t};return this.subscriptions.push(s),()=>{let c=this.subscriptions.indexOf(s);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};G.default=le;var xe=class{constructor(e,t=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var et=ze((co,qe)=>{"use strict";qe.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var s=a[r];if(!n(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}});var ee,b,Ce,lt,A,ge,Me,Ae,Le,ue,se,ce,xt,T={},Ne=[],ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function I(n,e){for(var t in e)n[t]=e[t];return n}function pe(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function m(n,e,t){var o,r,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?ee.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return K(n,s,o,r,null)}function K(n,e,t,o,r){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Ce,__i:-1,__u:0};return r==null&&b.vnode!=null&&b.vnode(a),a}function Oe(){return{current:null}}function N(n){return n.children}function v(n,e){this.props=n,this.context=e}function L(n,e){if(e==null)return n.__?L(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?L(n):null}function Fe(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Fe(n)}}function we(n){(!n.__d&&(n.__d=!0)&&A.push(n)&&!q.__r++||ge!=b.debounceRendering)&&((ge=b.debounceRendering)||Me)(q)}function q(){for(var n,e,t,o,r,a,s,c=1;A.length;)A.length>c&&A.sort(Ae),n=A.shift(),c=A.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,a=[],s=[],e.__P&&((t=I({},o)).__v=o.__v+1,b.vnode&&b.vnode(t),me(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??L(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,Ve(a,t,s),t.__e!=r&&Fe(t)));q.__r=0}function De(n,e,t,o,r,a,s,c,p,u,d){var i,x,l,f,g,z,h=o&&o.__k||Ne,y=e.length;for(p=yt(t,e,h,p,y),i=0;i<y;i++)(l=t.__k[i])!=null&&(x=l.__i==-1?T:h[l.__i]||T,l.__i=i,z=me(n,l,x,r,a,s,c,p,u,d),f=l.__e,l.ref&&x.ref!=l.ref&&(x.ref&&de(x.ref,null,l),d.push(l.ref,l.__c||f,l)),g==null&&f!=null&&(g=f),4&l.__u||x.__k===l.__k?p=Re(l,p,n):typeof l.type=="function"&&z!==void 0?p=z:f&&(p=f.nextSibling),l.__u&=-7);return t.__e=g,p}function yt(n,e,t,o,r){var a,s,c,p,u,d=t.length,i=d,x=0;for(n.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(p=a+x,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?K(null,s,null,null,null):te(s)?K(N,{children:s},null,null,null):s.constructor==null&&s.__b>0?K(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,c=null,(u=s.__i=bt(s,t,p,i))!=-1&&(i--,(c=t[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(r>d?x--:r<d&&x++),typeof s.type!="function"&&(s.__u|=4)):u!=p&&(u==p-1?x--:u==p+1?x++:(u>p?x--:x++,s.__u|=4))):n.__k[a]=null;if(i)for(a=0;a<d;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=L(c)),Te(c,c));return o}function Re(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=Re(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=L(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function bt(n,e,t,o){var r,a,s=n.key,c=n.type,p=e[t];if(p===null&&n.key==null||p&&s==p.key&&c==p.type&&(2&p.__u)==0)return t;if(o>(p!=null&&(2&p.__u)==0?1:0))for(r=t-1,a=t+1;r>=0||a<e.length;){if(r>=0){if((p=e[r])&&(2&p.__u)==0&&s==p.key&&c==p.type)return r;r--}if(a<e.length){if((p=e[a])&&(2&p.__u)==0&&s==p.key&&c==p.type)return a;a++}}return-1}function _e(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||ht.test(e)?t:t+"px"}function $(n,e,t,o,r){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||_e(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||_e(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Le,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=ue,n.addEventListener(e,a?ce:se,a)):n.removeEventListener(e,a?ce:se,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ie(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=ue++;else if(e.t<t.u)return;return t(b.event?b.event(e):e)}}}function me(n,e,t,o,r,a,s,c,p,u){var d,i,x,l,f,g,z,h,y,D,M,Q,R,fe,H,V,ie,_=e.type;if(e.constructor!=null)return null;128&t.__u&&(p=!!(32&t.__u),a=[c=e.__e=t.__e]),(d=b.__b)&&d(e);e:if(typeof _=="function")try{if(h=e.props,y="prototype"in _&&_.prototype.render,D=(d=_.contextType)&&o[d.__c],M=d?D?D.props.value:d.__:o,t.__c?z=(i=e.__c=t.__c).__=i.__E:(y?e.__c=i=new _(h,M):(e.__c=i=new v(h,M),i.constructor=_,i.render=vt),D&&D.sub(i),i.props=h,i.state||(i.state={}),i.context=M,i.__n=o,x=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&_.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=I({},i.__s)),I(i.__s,_.getDerivedStateFromProps(h,i.__s))),l=i.props,f=i.state,i.__v=e,x)y&&_.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&_.getDerivedStateFromProps==null&&h!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,M),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,M)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(P){P&&(P.__=e)}),Q=0;Q<i._sb.length;Q++)i.__h.push(i._sb[Q]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,M),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,f,g)})}if(i.context=M,i.props=h,i.__P=n,i.__e=!1,R=b.__r,fe=0,y){for(i.state=i.__s,i.__d=!1,R&&R(e),d=i.render(i.props,i.state,i.context),H=0;H<i._sb.length;H++)i.__h.push(i._sb[H]);i._sb=[]}else do i.__d=!1,R&&R(e),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++fe<25);i.state=i.__s,i.getChildContext!=null&&(o=I(I({},o),i.getChildContext())),y&&!x&&i.getSnapshotBeforeUpdate!=null&&(g=i.getSnapshotBeforeUpdate(l,f)),V=d,d!=null&&d.type===N&&d.key==null&&(V=Pe(d.props.children)),c=De(n,te(V)?V:[V],e,t,o,r,a,s,c,p,u),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),z&&(i.__E=i.__=null)}catch(P){if(e.__v=null,p||a!=null)if(P.then){for(e.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(ie=a.length;ie--;)pe(a[ie]);else e.__e=t.__e,e.__k=t.__k;b.__e(P,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=ft(t.__e,e,t,o,r,a,s,p,u);return(d=b.diffed)&&d(e),128&e.__u?void 0:c}function Ve(n,e,t){for(var o=0;o<t.length;o++)de(t[o],t[++o],t[++o]);b.__c&&b.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){b.__e(a,r.__v)}})}function Pe(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:te(n)?n.map(Pe):I({},n)}function ft(n,e,t,o,r,a,s,c,p){var u,d,i,x,l,f,g,z=t.props,h=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((l=a[u])&&"setAttribute"in l==!!y&&(y?l.localName==y:l.nodeType==3)){n=l,a[u]=null;break}}if(n==null){if(y==null)return document.createTextNode(h);n=document.createElementNS(r,y,h.is&&h),c&&(b.__m&&b.__m(e,a),c=!1),a=null}if(y==null)z===h||c&&n.data==h||(n.data=h);else{if(a=a&&ee.call(n.childNodes),z=t.props||T,!c&&a!=null)for(z={},u=0;u<n.attributes.length;u++)z[(l=n.attributes[u]).name]=l.value;for(u in z)if(l=z[u],u!="children"){if(u=="dangerouslySetInnerHTML")i=l;else if(!(u in h)){if(u=="value"&&"defaultValue"in h||u=="checked"&&"defaultChecked"in h)continue;$(n,u,null,l,r)}}for(u in h)l=h[u],u=="children"?x=l:u=="dangerouslySetInnerHTML"?d=l:u=="value"?f=l:u=="checked"?g=l:c&&typeof l!="function"||z[u]===l||$(n,u,l,z[u],r);if(d)c||i&&(d.__html==i.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(i&&(n.innerHTML=""),De(e.type=="template"?n.content:n,te(x)?x:[x],e,t,o,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&L(t,0),c,p),a!=null)for(u=a.length;u--;)pe(a[u]);c||(u="value",y=="progress"&&f==null?n.removeAttribute("value"):f!=null&&(f!==n[u]||y=="progress"&&!f||y=="option"&&f!=z[u])&&$(n,u,f,z[u],r),u="checked",g!=null&&g!=n[u]&&$(n,u,g,z[u],r))}return n}function de(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){b.__e(r,t)}}function Te(n,e,t){var o,r;if(b.unmount&&b.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||de(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){b.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&Te(o[r],e,t||typeof n.type!="function");t||pe(n.__e),n.__c=n.__=n.__e=void 0}function vt(n,e,t){return this.constructor(n,t)}function Ge(n,e,t){var o,r,a,s;e==document&&(e=document.documentElement),b.__&&b.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],s=[],me(e,n=(!o&&t||e).__k=m(N,null,[n]),r||T,T,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?ee.call(e.childNodes):null,a,!o&&t?t:r?r.__e:e.firstChild,o,s),Ve(a,n,s)}ee=Ne.slice,b={__e:function(n,e,t,o){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),s=r.__d),s)return r.__E=r}catch(c){n=c}throw n}},Ce=0,lt=function(n){return n!=null&&n.constructor==null},v.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I({},this.state),typeof n=="function"&&(n=n(I({},t),this.props)),n&&I(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),we(this))},v.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),we(this))},v.prototype.render=N,A=[],Me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ae=function(n,e){return n.__v.__b-e.__v.__b},q.__r=0,Le=/(PointerCapture)$|Capture$/i,ue=0,se=Ie(!1),ce=Ie(!0),xt=0;var Xe=Se(ke()),St={renderScale:1,enableRender:!1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001},he={options:St},S=new Xe.default({viewports:[he],nodes:{}});function ye(n,e){return t=>{let o=t.viewports[n]??he,r={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=r,{viewports:a}}}function Be(n){return e=>({nodes:{...e.nodes,[n.id]:n}})}function Ue(n){return()=>({nodes:n})}function Ee(n){return()=>({rootNodeId:n})}function Ze(n){return()=>({selectedNodeId:n})}var We=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Je=`#version 300 es

precision lowp float;

const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;

layout(location = 0) out vec4 fragColour;

in vec2 oPosition;

uniform mat2x4 uLights[8];
uniform int uNumLights;
uniform mat3 uCameraMatrix;
uniform vec3 uCameraPosition;

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

float getDistanceToShape(int index, vec3 samplePoint)
{
    mat4 shape = uShapes[index];

    vec3 point = shape[0].xyz;
    vec3 testPoint = point - samplePoint;
    // return sphereSDF(samplePoint);

    vec4 rotation = shape[1];

    vec3 transPoint = quatMul(rotation, testPoint);

    int type = int(round(shape[2].x));
    vec3 params = shape[2].yzw;

    return getDistToType(type, transPoint, params);
}

float sceneSDF(vec3 point)
{
    int depthStackIndex = -1;
    float depthStack[32];

    for (int operationsIndex = 0; operationsIndex < uNumOperations; operationsIndex++)
    {
        int operation = uOperations[operationsIndex];

        if (operation <= SdfOpCodeNone)
        {
            float lastD2 = depthStack[depthStackIndex--];
            float lastD1 = depthStack[depthStackIndex--];
            float dist = applyOpCode(operation, lastD2, lastD1);
            depthStack[++depthStackIndex] = dist;
        }
        else
        {
            float dist = getDistanceToShape(operation, point);
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
        sceneSDF(point + eps_zero.xyy) - sceneSDF(point - eps_zero.xyy),
        sceneSDF(point + eps_zero.yxy) - sceneSDF(point - eps_zero.yxy),
        sceneSDF(point + eps_zero.yyx) - sceneSDF(point - eps_zero.yyx)
    ));
}

// https://github.com/electricsquare/raymarching-workshop?tab=readme-ov-file#diffuse-term
vec3 estimateNormalLambert(vec3 point, vec3 currentDepth)
{
    // Use offset samples to compute gradient / normal
    // float d = sceneSDF(point);
    float d = currentDepth.y;
    vec2 eps_zero = vec2(currentDepth.x * 0.0015, 0.0);
    return normalize(vec3(
        sceneSDF(point + eps_zero.xyy) - d,
        sceneSDF(point + eps_zero.yxy) - d,
        sceneSDF(point + eps_zero.yyx) - d));
}

const float shadowSharpness = 32.0;
vec2 softShadow(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = near;
    float result = 1.0;
    int i = 0;

    for (; i < uMaxMarchingSteps; i++)
    {
        float dist = sceneSDF(rayOrigin + depth * rayDirection);
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
            shadow = softShadow(worldPoint, toLight, 0.1, 100.0);

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

vec3 rayMarch(vec3 rayOrigin, vec3 rayDirection, float near, float far)
{
    float depth = near;
    for (int i = 0; i < uMaxMarchingSteps; i++)
    {
        float dist = sceneSDF(rayOrigin + depth * rayDirection);
        if (dist < uEpsilon)
        {
            return vec3(depth, dist, float(i));
        }

        depth += dist;
        if (depth >= far)
        {
            return vec3(far, dist, float(i));
        }
    }

    return vec3(far, far, float(uMaxMarchingSteps));
}

void main()
{
    vec3 rayDir = uCameraMatrix * createRayDirection(45.0, oPosition);
    vec3 rayOrigin = uCameraPosition;

    vec3 dist = rayMarch(rayOrigin, rayDir, MIN_DIST, MAX_DIST);
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

        litColour = phongIllumination(dist, diffuse, specular, shininess, worldPoint, rayOrigin);

        fragColour = vec4(litColour.xyz, 1.0);
    }

    if (uFlags.y)
    {
        float r = dist.z / float(uMaxMarchingSteps);
        float g = litColour.w / float(uMaxMarchingSteps);
        fragColour = vec4(r, g, 0, 1);
    }
}`;var Ye=`const int ShapeTypeNone = -5000;
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

float opUnion(float d1, float d2)
{
    return min(d1, d2);
}

float opSubtraction(float d1, float d2)
{
    return max(-d1, d2);
}

float opIntersection(float d1, float d2)
{
    return max(d1, d2);
}

float applyOpCode(int opCode, float dist1, float dist2)
{
    switch (opCode)
    {
        case SdfOpCodeUnion: return opUnion(dist1, dist2);
        case SdfOpCodeIntersection: return opIntersection(dist1, dist2);
        case SdfOpCodeSubtraction: return opSubtraction(dist1, dist2);
    }

    return 100.0;
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
}`;var It=/^#include\s+\<([^\>]+)\>/gmi,k=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(It);for(let r of o){let a=e[r[1]];a===void 0&&(console.error(`Unknown shader include ${r[1]}`),a=""),t=t.replace(r[0],a)}return t}static create(e,t,o,r){function a(){p!=null&&(e.detachShader(p,s),e.detachShader(p,c)),s!=null&&e.deleteShader(s),c!=null&&e.deleteShader(c)}let s=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(s,this.assembleShader(t,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Vertex shader compile error",u),a(),new Error(`Vertex shader compile error ${u}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",u),a(),new Error(`Fragment shader compile error ${u}`)}let p=e.createProgram();if(e.attachShader(p,s),e.attachShader(p,c),e.linkProgram(p),a(),!e.getProgramParameter(p,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(p);let u=e.getProgramInfoLog(p);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new n(p)}};var O=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function je(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Qe(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,a=e.z,s=t.w*2,c=t.y*a-t.z*r,p=t.z*o-t.x*a,u=t.x*r-t.y*o,d=(t.y*u-t.z*p)*2,i=(t.z*c-t.x*u)*2,x=(t.x*p-t.y*c)*2;return c*=s,p*=s,u*=s,n.x=o+c+d,n.y=r+p+i,n.z=a+u+x,n}function w(){return{x:0,y:0,z:0}}function He(){return{x:1,y:1,z:1,w:1}}function F(){return{x:0,y:0,z:0,w:1}}function $e(n,e,t,o,r=O.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let s=Math.sin(e),c=Math.cos(e),p=Math.sin(t),u=Math.cos(t),d=Math.sin(o),i=Math.cos(o);switch(r){case"xyz":n.x=s*u*i+c*p*d,n.y=c*p*i-s*u*d,n.z=c*u*d+s*p*i,n.w=c*u*i-s*p*d;break;case"xzy":n.x=s*u*i-c*p*d,n.y=c*p*i-s*u*d,n.z=c*u*d+s*p*i,n.w=c*u*i+s*p*d;break;case"yxz":n.x=s*u*i+c*p*d,n.y=c*p*i-s*u*d,n.z=c*u*d-s*p*i,n.w=c*u*i+s*p*d;break;case"yzx":n.x=s*u*i+c*p*d,n.y=c*p*i+s*u*d,n.z=c*u*d-s*p*i,n.w=c*u*i-s*p*d;break;case"zxy":n.x=s*u*i-c*p*d,n.y=c*p*i+s*u*d,n.z=c*u*d+s*p*i,n.w=c*u*i-s*p*d;break;case"zyx":n.x=s*u*i-c*p*d,n.y=c*p*i+s*u*d,n.z=c*u*d-s*p*i,n.w=c*u*i+s*p*d;break;default:throw new Error("Unknown angle order "+r)}return this}var Ct=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],be=F();function Mt(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*t,s=e.y*t,c=e.y*o,p=e.z*t,u=e.z*o,d=e.z*r,i=e.w*t,x=e.w*o,l=e.w*r;return n[0]=1-c-d,n[1]=s-l,n[2]=p+x,n[3]=s+l,n[4]=1-a-d,n[5]=u-i,n[6]=p-x,n[7]=u+i,n[8]=1-a-c,n}var X=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=w();cameraTarget=w();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);constructor(e,t,o,r,a,s,c,p,u,d,i,x,l,f){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=s,this.uLights=c,this.uNumLights=p,this.uCameraPosition=u,this.uCameraMatrix=d,this.uAspectRatio=i,this.uMaxMarchingSteps=x,this.uEpsilon=l,this.uFlags=f}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){$e(be,this.cameraRotationX,this.cameraRotationY,0);let e=Qe(w(),{x:0,y:0,z:1},be);je(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Mt(this.cameraMatrixArray,be)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights());let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Ct),t.STATIC_DRAW);let r={"sdf-functions":Ye},a=k.create(t,r,We,Je);t.useProgram(a.program);let s=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),p=this.getUniform(t,a,"uCameraPosition"),u=this.getUniform(t,a,"uAspectRatio"),d=this.getUniform(t,a,"uShapes"),i=this.getUniform(t,a,"uOperations"),x=this.getUniform(t,a,"uNumOperations"),l=this.getUniform(t,a,"uLights"),f=this.getUniform(t,a,"uNumLights"),g=this.getUniform(t,a,"uMaxMarchingSteps"),z=this.getUniform(t,a,"uEpsilon"),h=this.getUniform(t,a,"uFlags");return new n(t,a,o,d,i,x,l,f,p,c,u,g,z,h)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var Ke=n=>m("label",{style:{display:"inline-block"}},n.label,m("input",{style:{display:"block"},type:"range",...n.inputProps})),B=class extends v{render(e){let{enableRender:t,renderScale:o,enableShadows:r,enableShowMarching:a,epsilon:s,maxMarchingStep:c}=this.props.options;return m("div",{class:"viewport-options"},m("button",{onClick:this.toggleRender},t?"Stop":"Start"),m("select",{onChange:this.changeRenderScale,value:o},m("option",{value:"1"},"1x"),m("option",{value:"0.5"},"0.5x"),m("option",{value:"0.25"},"0.25x"),m("option",{value:"0.125"},"0.125x")),m("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),m("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),m(Ke,{label:`Epsilon ${s}`,inputProps:{value:s,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),m(Ke,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};toggleRender=e=>{this.updateOptions({enableRender:!this.props.options.enableRender})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),S.execute(ye(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?S.execute(ye(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var ne=class extends v{canvasRef=Oe();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=X.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){return this.requestRender(),m("div",{class:"viewport outer-panel"},m("canvas",{className:"viewport__canvas",ref:this.canvasRef}),m(B,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sdfScene),this.props.options.enableRender&&this.requestRender()};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.props.options.enableRender||this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var tt=Se(et());var At=8,nt=-500,Lt=-600,Nt=-700,Ot=-800,Ft=-900,ot=-5e3,Dt=-6e3,Rt=-7e3,Vt=-8e3;function rt(){return crypto.randomUUID()}var Pt={none:nt,union:Lt,intersection:Nt,subtraction:Ot,xor:Ft},Tt={none:ot,box:Dt,sphere:Rt,hexPrism:Vt};function Gt(n){return Tt[n]||ot}function kt(n){return Pt[n]||nt}var Xt=16,oe=class n{lights=[];lightDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}updateShapesFromRootNode(e,t){if(!t[e])return;let{operations:r,shapes:a}=n.createShapesFromNode(t[e],t);this.operations=r,this.shapes=a,console.log("Shapes",this.shapes),console.log("Operations",this.operations),this.shapeDataArray.length=0;for(let s=0;s<this.shapes.length;s++)this.updateShape(s);this.updateOperationNumbers()}static createShapesFromNode(e,t){let o=[],r=[];return this.pushToStack(o,r,e,t),o.reverse(),{operations:o,shapes:r}}static pushToStack(e,t,o,r){if(o.childOpCode!==void 0&&o.childOpCode!=="none"&&e.push(o.childOpCode),o.shape!==void 0){let a=t.findIndex(s=>(0,tt.default)(s,o.shape));a<0&&(a=t.length,t.push(o.shape)),e.push(a)}if(o.childrenIds!==void 0)for(let a of o.childrenIds)this.pushToStack(e,t,r[a],r)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*At,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateShape(e){let t=e*Xt,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=Gt(o.type),this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=o.diffuseColour.x,this.shapeDataArray[t+13]=o.diffuseColour.y,this.shapeDataArray[t+14]=o.diffuseColour.z,this.shapeDataArray[t+15]=o.diffuseColour.w}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?kt(e):e)}static createNewLight(){return{name:"Unnamed Light",position:w(),radius:10,colour:He()}}static createNewShape(e){return{position:w(),rotation:F(),maxSize:0,type:"none",shapeParams:w(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1},...e}}};function Bt(n){return Object.hasOwn(n,"z")}function Ut(n){return Object.hasOwn(n,"w")}var C=class extends v{render(){let e=this.props.vector,t=Bt(e),o=Ut(e);return m("div",{class:"vector"},m("input",{type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),m("input",{type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),t&&m("input",{type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),o&&m("input",{type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,a=parseFloat(r);if(!isFinite(a)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,a),this.props.onChange(o,{...o,[t]:a})}};var U=class extends v{render(){let e=this.props.shape;return e===void 0?m("div",null,"Empty shape"):m("div",null,m("div",null,m("strong",null,"Position")," ",m(C,{vector:e.position,onChange:this.onChangePosition})),m("div",null,m("strong",null,"Rotation")," ",m(C,{vector:e.rotation,onChange:this.onChangeRotation})),m("div",null,m("strong",null,"Type")," ",m("select",{value:e.type??"none",onChange:this.onChangeType},m("option",{value:"none"},"None"),m("option",{value:"box"},"Box"),m("option",{value:"sphere"},"Sphere"),m("option",{value:"hexPrism"},"Hex Prism"))),m("div",null,m("strong",null,"Shape Params")," ",m(C,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),m("div",null,m("strong",null,"Diffuse Colour")," ",m(C,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),m("div",null,m("strong",null,"Specular Colour")," ",m(C,{vector:e.specularColour,onChange:this.onChangeSpecularColour})))}onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var E=class extends v{constructor(){super(),this.state={show:!1}}render(){let{node:e}=this.props;if(e==null)return m("div",{class:"shape-node-view"},"No node selected");let t=e.childOpCode??"none";return m("div",{class:"shape-node-view"},m("div",null,m("strong",null,"Name")," ",m("input",{type:"text",placeholder:"Name",value:e.name,onChange:this.onChangeName})),m("div",null,m("strong",null,"Op Code")," ",m("select",{value:t,onChange:this.onChangeOpCode},m("option",{value:"none"},"None"),m("option",{value:"union"},"Union"),m("option",{value:"intersection"},"Intersection"),m("option",{value:"subtraction"},"Subtraction"))),m("div",null,m("strong",null,"Shape")," ",m(U,{shape:e.shape,onChange:this.onChangeShape})))}onChangeName=e=>{let t=e.target.value;this.updateField(t,"name")};onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o,this.props.node)}};var Z=class extends v{render(){let{depth:e,node:t,isSelected:o}=this.props,r="shape-node-tree-item"+(o?" is-selected":"");return m("div",{class:r,style:{paddingLeft:(e+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.onClicked(this.props.node)}};var W=class extends v{render(){return m("div",{class:"shape-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{nodes:e,currentNodeId:t,selectedNodeId:o,onItemClicked:r}=this.props,a=[{node:e[t],depth:0}],s=[];for(;a.length>0;){let{node:c,depth:p}=a[0];if(a.splice(0,1),s.push(m(Z,{isSelected:c.id===o,depth:p,key:c.id,node:c,onClicked:r})),c.childrenIds!=null)for(let u of c.childrenIds)a.push({node:e[u],depth:p+1})}return s}};var J=class extends v{render(){let{nodes:e,selectedNodeId:t,rootNodeId:o}=this.props;return m("div",{class:"scene-graph"},m("div",{class:"scene-graph__contents outer-panel"},m("div",{class:"inner-panel"},m(W,{currentNodeId:o,nodes:e,selectedNodeId:t,onItemClicked:this.onNodeClicked})),m("div",{class:"inner-panel"},m(E,{node:e[t],onChange:this.onChangeSelectedNode}))))}onNodeClicked=e=>{S.execute(Ze(e.id))};onChangeSelectedNode=(e,t)=>{S.execute(Be(e)),this.props.sdfScene.updateShapesFromRootNode(this.props.rootNodeId,this.props.nodes)}};var j=new oe;S.subscribe(n=>n.nodes,at);S.subscribe(n=>n.rootNodeId,at);function at(n){j.updateShapesFromRootNode(n.rootNodeId,n.nodes)}var ae=class extends v{render(){let{viewports:e,rootNodeId:t,selectedNodeId:o,nodes:r}=this.props.state;return console.log("App render",this.props.state),m(N,null,m("div",{class:"main-view"},m("div",{class:"viewports"},m(ne,{viewportIndex:0,options:e[0].options,sdfScene:j})),m(J,{sdfScene:j,rootNodeId:t,selectedNodeId:o,nodes:r})))}};function Et(n){return{position:w(),rotation:F(),maxSize:0,type:"none",shapeParams:w(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1},...n}}function Y(n,e,t){return{name:n,id:rt(),shape:e!=null?Et(e):void 0,childOpCode:t}}function re(n,e){n.childrenIds==null&&(n.childrenIds=[]),n.childrenIds.push(e.id)}function Zt(...n){let e={};for(let t of n)e[t.id]=t;return e}function Wt(){let n=Y("Root",null,"subtraction"),e=Y("Hex Prism",{type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5}),t=Y("Box & Sphere",null,"union");re(n,e),re(n,t);let o=Y("Box",{type:"box",shapeParams:{x:6,y:1,z:6},position:{x:0,y:-1.5,z:0},diffuseColour:{x:.2,y:.25,z:.3,w:1}}),r=Y("Sphere",{type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}});re(t,o),re(t,r);let a=Zt(n,e,t,o,r);S.execute(Ee(n.id)),S.execute(Ue(a)),j.setLight(0,{position:{x:4,y:2,z:3},colour:{x:1,y:.8,z:.6,w:1}}),j.setLight(1,{position:{x:-4,y:2,z:3},colour:{x:.2,y:1,z:.6,w:1}})}Wt();var Jt=document.getElementById("app");function it(){Ge(m(ae,{state:S.state()}),Jt)}it();S.subscribeAny(it);})();
//# sourceMappingURL=webgl-index.js.map
