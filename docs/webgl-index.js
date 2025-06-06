(()=>{var qe=Object.create;var be=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,ot=Object.prototype.hasOwnProperty;var fe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var rt=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of tt(e))!ot.call(n,r)&&r!==t&&be(n,r,{get:()=>e[r],enumerable:!(o=et(e,r))||o.enumerable});return n};var ve=(n,e,t)=>(t=n!=null?qe(nt(n)):{},rt(e||!n||!n.__esModule?be(t,"default",{value:n,enumerable:!0}):t,n));var Ve=fe(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.EmptyModifier=void 0;var dt=()=>null;U.EmptyModifier=dt;var me=class{constructor(e){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=e}execute(e,t=!0){let o=e(this.currentState);o==null||o===this.currentState||(this.currentState=Object.assign({},this.currentState,o),this.triggerSubscriptions(e,t))}subscribe(e,t,o,r){let a=e(this.currentState),s={selector:new pe(e,a,o,r),subscription:t};return this.subscriptions.push(s),()=>{let c=this.subscriptions.indexOf(s);c>=0&&this.subscriptions.splice(c,1)}}subscribeAny(e,t){return this.subscribe(o=>o,e,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(e,t){for(let o of this.subscriptions){let r=o.selector.getValue(this.currentState);o.selector.checkIfChanged(r)&&o.subscription(this.currentState,r,e,t)}}};U.default=me;var pe=class{constructor(e,t=void 0,o,r){this.getValue=a=>this.selector(a),this.selector=e,this.prevValue=t,this.comparer=o,this.name=r}checkIfChanged(e){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,e):t=e!==this.prevValue,this.prevValue=e,t}}});var Ue=fe((kt,Ee)=>{"use strict";Ee.exports=function n(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!n(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var s=a[r];if(!n(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}});var K,b,ge,at,L,ze,Ce,Me,Ie,ie,re,ae,it,E={},Le=[],st=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function C(n,e){for(var t in e)n[t]=e[t];return n}function se(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function p(n,e,t){var o,r,a,s={};for(a in e)a=="key"?o=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?K.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return H(n,s,o,r,null)}function H(n,e,t,o,r){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ge,__i:-1,__u:0};return r==null&&b.vnode!=null&&b.vnode(a),a}function Ae(){return{current:null}}function O(n){return n.children}function z(n,e){this.props=n,this.context=e}function A(n,e){if(e==null)return n.__?A(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?A(n):null}function Oe(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Oe(n)}}function Se(n){(!n.__d&&(n.__d=!0)&&L.push(n)&&!$.__r++||ze!=b.debounceRendering)&&((ze=b.debounceRendering)||Ce)($)}function $(){for(var n,e,t,o,r,a,s,c=1;L.length;)L.length>c&&L.sort(Me),n=L.shift(),c=L.length,n.__d&&(t=void 0,r=(o=(e=n).__v).__e,a=[],s=[],e.__P&&((t=C({},o)).__v=o.__v+1,b.vnode&&b.vnode(t),ce(e.__P,t,o,e.__n,e.__P.namespaceURI,32&o.__u?[r]:null,a,r??A(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,Ne(a,t,s),t.__e!=r&&Oe(t)));$.__r=0}function Re(n,e,t,o,r,a,s,c,m,u,d){var i,x,l,f,S,v,h=o&&o.__k||Le,y=e.length;for(m=ct(t,e,h,m,y),i=0;i<y;i++)(l=t.__k[i])!=null&&(x=l.__i==-1?E:h[l.__i]||E,l.__i=i,v=ce(n,l,x,r,a,s,c,m,u,d),f=l.__e,l.ref&&x.ref!=l.ref&&(x.ref&&ue(x.ref,null,l),d.push(l.ref,l.__c||f,l)),S==null&&f!=null&&(S=f),4&l.__u||x.__k===l.__k?m=De(l,m,n):typeof l.type=="function"&&v!==void 0?m=v:f&&(m=f.nextSibling),l.__u&=-7);return t.__e=S,m}function ct(n,e,t,o,r){var a,s,c,m,u,d=t.length,i=d,x=0;for(n.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(m=a+x,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?H(null,s,null,null,null):q(s)?H(O,{children:s},null,null,null):s.constructor==null&&s.__b>0?H(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,c=null,(u=s.__i=ut(s,t,m,i))!=-1&&(i--,(c=t[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(r>d?x--:r<d&&x++),typeof s.type!="function"&&(s.__u|=4)):u!=m&&(u==m-1?x--:u==m+1?x++:(u>m?x--:x++,s.__u|=4))):n.__k[a]=null;if(i)for(a=0;a<d;a++)(c=t[a])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=A(c)),Pe(c,c));return o}function De(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=De(o[r],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=A(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ut(n,e,t,o){var r,a,s=n.key,c=n.type,m=e[t];if(m===null&&n.key==null||m&&s==m.key&&c==m.type&&(2&m.__u)==0)return t;if(o>(m!=null&&(2&m.__u)==0?1:0))for(r=t-1,a=t+1;r>=0||a<e.length;){if(r>=0){if((m=e[r])&&(2&m.__u)==0&&s==m.key&&c==m.type)return r;r--}if(a<e.length){if((m=e[a])&&(2&m.__u)==0&&s==m.key&&c==m.type)return a;a++}}return-1}function we(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||st.test(e)?t:t+"px"}function Y(n,e,t,o,r){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||we(n.style,e,"");if(t)for(e in t)o&&t[e]==o[e]||we(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Ie,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?o?t.u=o.u:(t.u=ie,n.addEventListener(e,a?ae:re,a)):n.removeEventListener(e,a?ae:re,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function _e(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=ie++;else if(e.t<t.u)return;return t(b.event?b.event(e):e)}}}function ce(n,e,t,o,r,a,s,c,m,u){var d,i,x,l,f,S,v,h,y,F,I,j,P,ye,J,T,oe,g=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[c=e.__e=t.__e]),(d=b.__b)&&d(e);e:if(typeof g=="function")try{if(h=e.props,y="prototype"in g&&g.prototype.render,F=(d=g.contextType)&&o[d.__c],I=d?F?F.props.value:d.__:o,t.__c?v=(i=e.__c=t.__c).__=i.__E:(y?e.__c=i=new g(h,I):(e.__c=i=new z(h,I),i.constructor=g,i.render=pt),F&&F.sub(i),i.props=h,i.state||(i.state={}),i.context=I,i.__n=o,x=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&g.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,g.getDerivedStateFromProps(h,i.__s))),l=i.props,f=i.state,i.__v=e,x)y&&g.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&g.getDerivedStateFromProps==null&&h!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,I),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,I)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(V){V&&(V.__=e)}),j=0;j<i._sb.length;j++)i.__h.push(i._sb[j]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,I),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,f,S)})}if(i.context=I,i.props=h,i.__P=n,i.__e=!1,P=b.__r,ye=0,y){for(i.state=i.__s,i.__d=!1,P&&P(e),d=i.render(i.props,i.state,i.context),J=0;J<i._sb.length;J++)i.__h.push(i._sb[J]);i._sb=[]}else do i.__d=!1,P&&P(e),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ye<25);i.state=i.__s,i.getChildContext!=null&&(o=C(C({},o),i.getChildContext())),y&&!x&&i.getSnapshotBeforeUpdate!=null&&(S=i.getSnapshotBeforeUpdate(l,f)),T=d,d!=null&&d.type===O&&d.key==null&&(T=Fe(d.props.children)),c=Re(n,q(T)?T:[T],e,t,o,r,a,s,c,m,u),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),v&&(i.__E=i.__=null)}catch(V){if(e.__v=null,m||a!=null)if(V.then){for(e.__u|=m?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;a[a.indexOf(c)]=null,e.__e=c}else for(oe=a.length;oe--;)se(a[oe]);else e.__e=t.__e,e.__k=t.__k;b.__e(V,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=mt(t.__e,e,t,o,r,a,s,m,u);return(d=b.diffed)&&d(e),128&e.__u?void 0:c}function Ne(n,e,t){for(var o=0;o<t.length;o++)ue(t[o],t[++o],t[++o]);b.__c&&b.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){b.__e(a,r.__v)}})}function Fe(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:q(n)?n.map(Fe):C({},n)}function mt(n,e,t,o,r,a,s,c,m){var u,d,i,x,l,f,S,v=t.props,h=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((l=a[u])&&"setAttribute"in l==!!y&&(y?l.localName==y:l.nodeType==3)){n=l,a[u]=null;break}}if(n==null){if(y==null)return document.createTextNode(h);n=document.createElementNS(r,y,h.is&&h),c&&(b.__m&&b.__m(e,a),c=!1),a=null}if(y==null)v===h||c&&n.data==h||(n.data=h);else{if(a=a&&K.call(n.childNodes),v=t.props||E,!c&&a!=null)for(v={},u=0;u<n.attributes.length;u++)v[(l=n.attributes[u]).name]=l.value;for(u in v)if(l=v[u],u!="children"){if(u=="dangerouslySetInnerHTML")i=l;else if(!(u in h)){if(u=="value"&&"defaultValue"in h||u=="checked"&&"defaultChecked"in h)continue;Y(n,u,null,l,r)}}for(u in h)l=h[u],u=="children"?x=l:u=="dangerouslySetInnerHTML"?d=l:u=="value"?f=l:u=="checked"?S=l:c&&typeof l!="function"||v[u]===l||Y(n,u,l,v[u],r);if(d)c||i&&(d.__html==i.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),e.__k=[];else if(i&&(n.innerHTML=""),Re(e.type=="template"?n.content:n,q(x)?x:[x],e,t,o,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&A(t,0),c,m),a!=null)for(u=a.length;u--;)se(a[u]);c||(u="value",y=="progress"&&f==null?n.removeAttribute("value"):f!=null&&(f!==n[u]||y=="progress"&&!f||y=="option"&&f!=v[u])&&Y(n,u,f,v[u],r),u="checked",S!=null&&S!=n[u]&&Y(n,u,S,v[u],r))}return n}function ue(n,e,t){try{if(typeof n=="function"){var o=typeof n.__u=="function";o&&n.__u(),o&&e==null||(n.__u=n(e))}else n.current=e}catch(r){b.__e(r,t)}}function Pe(n,e,t){var o,r;if(b.unmount&&b.unmount(n),(o=n.ref)&&(o.current&&o.current!=n.__e||ue(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){b.__e(a,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&Pe(o[r],e,t||typeof n.type!="function");t||se(n.__e),n.__c=n.__=n.__e=void 0}function pt(n,e,t){return this.constructor(n,t)}function Te(n,e,t){var o,r,a,s;e==document&&(e=document.documentElement),b.__&&b.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,a=[],s=[],ce(e,n=(!o&&t||e).__k=p(O,null,[n]),r||E,E,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?K.call(e.childNodes):null,a,!o&&t?t:r?r.__e:e.firstChild,o,s),Ne(a,n,s)}K=Le.slice,b={__e:function(n,e,t,o){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),s=r.__d),s)return r.__E=r}catch(c){n=c}throw n}},ge=0,at=function(n){return n!=null&&n.constructor==null},z.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C({},this.state),typeof n=="function"&&(n=n(C({},t),this.props)),n&&C(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Se(this))},z.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Se(this))},z.prototype.render=O,L=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Me=function(n,e){return n.__v.__b-e.__v.__b},$.__r=0,Ie=/(PointerCapture)$|Capture$/i,ie=0,re=_e(!1),ae=_e(!0),it=0;var je=ve(Ve());var Xe=ve(Ue());var R=class n{static EPSILON=1e-6;static ANGLE_ORDER="zyx";static DegToRad=Math.PI/180;static RadToDeg=180/Math.PI;static toRadian(e){return e*this.DegToRad}equals(e,t){return Math.abs(e-t)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}static clamp(e,t,o){return Math.max(Math.min(e,o),t)}static lerp(e,t,o){return e+(t-e)*o}static moveTowards(e,t,o){let r=t-e;return Math.abs(r)<=o?t:e+Math.sign(r)*o}inverseLerp(e,t,o){return e===t?0:(o-e)/(t-e)}};function ke(n,e,t,o){return n.x=e.x+t.x*o,n.y=e.y+t.y*o,n.z=e.z+t.z*o,n}function Ge(n,e,t){if(t.x===0&&t.y===0&&t.z===0&&t.w===1)return n.x=e.x,n.y=e.y,n.z=e.z,n;let o=e.x,r=e.y,a=e.z,s=t.w*2,c=t.y*a-t.z*r,m=t.z*o-t.x*a,u=t.x*r-t.y*o,d=(t.y*u-t.z*m)*2,i=(t.z*c-t.x*u)*2,x=(t.x*m-t.y*c)*2;return c*=s,m*=s,u*=s,n.x=o+c+d,n.y=r+m+i,n.z=a+u+x,n}function w(){return{x:0,y:0,z:0}}function Be(){return{x:1,y:1,z:1,w:1}}function D(){return{x:0,y:0,z:0,w:1}}function We(n,e,t,o,r=R.ANGLE_ORDER){let a=Math.PI/360;e*=a,o*=a,t*=a;let s=Math.sin(e),c=Math.cos(e),m=Math.sin(t),u=Math.cos(t),d=Math.sin(o),i=Math.cos(o);switch(r){case"xyz":n.x=s*u*i+c*m*d,n.y=c*m*i-s*u*d,n.z=c*u*d+s*m*i,n.w=c*u*i-s*m*d;break;case"xzy":n.x=s*u*i-c*m*d,n.y=c*m*i-s*u*d,n.z=c*u*d+s*m*i,n.w=c*u*i+s*m*d;break;case"yxz":n.x=s*u*i+c*m*d,n.y=c*m*i-s*u*d,n.z=c*u*d-s*m*i,n.w=c*u*i+s*m*d;break;case"yzx":n.x=s*u*i+c*m*d,n.y=c*m*i+s*u*d,n.z=c*u*d-s*m*i,n.w=c*u*i-s*m*d;break;case"zxy":n.x=s*u*i-c*m*d,n.y=c*m*i+s*u*d,n.z=c*u*d+s*m*i,n.w=c*u*i-s*m*d;break;case"zyx":n.x=s*u*i-c*m*d,n.y=c*m*i+s*u*d,n.z=c*u*d-s*m*i,n.w=c*u*i+s*m*d;break;default:throw new Error("Unknown angle order "+r)}return this}var lt=8,Ze=-500,xt=-600,ht=-700,yt=-800,bt=-900,Qe=-5e3,ft=-6e3,vt=-7e3,zt=-8e3,St={none:Ze,union:xt,intersection:ht,subtraction:yt,xor:bt},wt={none:Qe,box:ft,sphere:vt,hexPrism:zt};function _t(n){return wt[n]||Qe}function gt(n){return St[n]||Ze}var Ct=16,N=class n{lights=[];lightDataArray=[];shapes=[];shapeDataArray=[];operations=[];numberOperations=[];getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getShapeDataArray(){return this.shapeDataArray}getShapes(){return this.shapes}getNumTotalShapes(){return this.shapes.length}setOperations(e){this.operations=e,this.updateOperationNumbers()}getOperations(){return this.operations}getOperationNumbers(){return this.numberOperations}setLight(e,t){if(e<0)throw new Error(`Out of bounds light index ${e}`);e>=this.lights.length?this.lights[e]={...n.createNewLight(),...t}:this.lights[e]={...this.lights[e],...t},this.updateLight(e)}updateShapesFromRootNode(e){let{operations:t,shapes:o}=n.createShapesFromNode(e);this.operations=t,this.shapes=o,console.log("Shapes",this.shapes),console.log("Operations",this.operations),this.shapeDataArray.length=0;for(let r=0;r<this.shapes.length;r++)this.updateShape(r);this.updateOperationNumbers()}static createShapesFromNode(e){let t=[],o=[];return this.pushToStack(t,o,e),t.reverse(),{operations:t,shapes:o}}static pushToStack(e,t,o){if(o.childOpCode!==void 0&&o.childOpCode!=="none"&&e.push(o.childOpCode),o.shape!==void 0){let r=t.findIndex(a=>(0,Xe.default)(a,o.shape));r<0&&(r=t.length,t.push(o.shape)),e.push(r)}if(o.children!==void 0)for(let r of o.children)this.pushToStack(e,t,r)}setShape(e,t){if(e<0)throw new Error(`Out of bounds shape index ${e}`);e>=this.shapes.length?this.shapes[e]=n.createNewShape(t):this.shapes[e]={...this.shapes[e],...t},this.updateShape(e)}updateLight(e){let t=e*lt,o=this.lights[e];this.lightDataArray[t]=o.position.x,this.lightDataArray[t+1]=o.position.y,this.lightDataArray[t+2]=o.position.z,this.lightDataArray[t+3]=o.radius,this.lightDataArray[t+4]=o.colour.x,this.lightDataArray[t+5]=o.colour.y,this.lightDataArray[t+6]=o.colour.z,this.lightDataArray[t+7]=o.colour.w}updateShape(e){let t=e*Ct,o=this.shapes[e];this.shapeDataArray[t]=o.position.x,this.shapeDataArray[t+1]=o.position.y,this.shapeDataArray[t+2]=o.position.z,this.shapeDataArray[t+3]=o.maxSize,this.shapeDataArray[t+4]=o.rotation.x,this.shapeDataArray[t+5]=o.rotation.y,this.shapeDataArray[t+6]=o.rotation.z,this.shapeDataArray[t+7]=o.rotation.w,this.shapeDataArray[t+8]=_t(o.type),this.shapeDataArray[t+9]=o.shapeParams.x,this.shapeDataArray[t+10]=o.shapeParams.y,this.shapeDataArray[t+11]=o.shapeParams.z,this.shapeDataArray[t+12]=o.diffuseColour.x,this.shapeDataArray[t+13]=o.diffuseColour.y,this.shapeDataArray[t+14]=o.diffuseColour.z,this.shapeDataArray[t+15]=o.diffuseColour.w}updateOperationNumbers(){this.numberOperations=this.operations.map(e=>typeof e=="string"?gt(e):e)}static createNewLight(){return{name:"Unnamed Light",position:w(),radius:10,colour:Be()}}static createNewShape(e){return{position:w(),rotation:D(),maxSize:0,type:"none",shapeParams:w(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1},...e}}};var Mt={renderScale:1,enableRender:!1,maxMarchingStep:255,enableShadows:!0,enableShowMarching:!1,epsilon:.001},de={options:Mt},_=new je.default({viewports:[de],rootNode:{name:"Root",shape:N.createNewShape({})}});function le(n,e){return t=>{let o=t.viewports[n]??de,r={...o,options:{...o.options,...e}},a=[...t.viewports];return a[n]=r,{viewports:a}}}function ee(n){return()=>({rootNode:n})}var Je=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var Ye=`#version 300 es

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
}`;var He=`const int ShapeTypeNone = -5000;
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
}`;var Ot=/^#include\s+\<([^\>]+)\>/gmi,k=class n{program;constructor(e){this.program=e}static assembleShader(e,t){let o=t.matchAll(Ot);for(let r of o){let a=e[r[1]];a===void 0&&(console.error(`Unknown shader include ${r[1]}`),a=""),t=t.replace(r[0],a)}return t}static create(e,t,o,r){function a(){m!=null&&(e.detachShader(m,s),e.detachShader(m,c)),s!=null&&e.deleteShader(s),c!=null&&e.deleteShader(c)}let s=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(s,this.assembleShader(t,o)),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(s);throw console.error("Vertex shader compile error",u),a(),new Error(`Vertex shader compile error ${u}`)}let c=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(c,this.assembleShader(t,r)),e.compileShader(c),!e.getShaderParameter(c,e.COMPILE_STATUS)){let u=e.getShaderInfoLog(c);throw console.error("Fragment shader compile error",u),a(),new Error(`Fragment shader compile error ${u}`)}let m=e.createProgram();if(e.attachShader(m,s),e.attachShader(m,c),e.linkProgram(m),a(),!e.getProgramParameter(m,e.LINK_STATUS)){e.useProgram(null),e.deleteProgram(m);let u=e.getProgramInfoLog(m);throw console.error("Shader link error",u),new Error(`Shader link error ${u}`)}return new n(m)}};var Rt=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],xe=D();function Dt(n,e){let t=e.x+e.x,o=e.y+e.y,r=e.z+e.z,a=e.x*t,s=e.y*t,c=e.y*o,m=e.z*t,u=e.z*o,d=e.z*r,i=e.w*t,x=e.w*o,l=e.w*r;return n[0]=1-c-d,n[1]=s-l,n[2]=m+x,n[3]=s+l,n[4]=1-a-d,n[5]=u-i,n[6]=m-x,n[7]=u+i,n[8]=1-a-c,n}var G=class n{gl;shader;positionBuffer;uShapes;uOperations;uNumOperations;uLights;uNumLights;uCameraPosition;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;cameraPosition=w();cameraTarget=w();cameraRotationX=0;cameraRotationY=0;cameraDistance=10;maxMarchingSteps=255;epsilon=.001;enableShadows=!0;enableShowMarches=!1;canvasScale=1;cameraMatrixArray=new Float32Array(9);constructor(e,t,o,r,a,s,c,m,u,d,i,x,l,f){this.gl=e,this.shader=t,this.positionBuffer=o,this.uShapes=r,this.uOperations=a,this.uNumOperations=s,this.uLights=c,this.uNumLights=m,this.uCameraPosition=u,this.uCameraMatrix=d,this.uAspectRatio=i,this.uMaxMarchingSteps=x,this.uEpsilon=l,this.uFlags=f}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}orbitCamera(e,t){this.cameraRotationX+=e,this.cameraRotationY+=t,this.updateCamera()}updateCamera(){We(xe,this.cameraRotationX,this.cameraRotationY,0);let e=Ge(w(),{x:0,y:0,z:1},xe);ke(this.cameraPosition,this.cameraTarget,e,this.cameraDistance),Dt(this.cameraMatrixArray,xe)}resizeCanvas=(e,t)=>{let o=e*this.canvasScale,r=t*this.canvasScale;this.gl.canvas.width=o,this.gl.canvas.height=r,this.gl.viewport(0,0,o,r);let a=o/r;this.gl.uniform1f(this.uAspectRatio,a)};render(e){this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights());let t=e.getOperationNumbers();this.gl.uniform1i(this.uNumOperations,t.length),this.gl.uniform1iv(this.uOperations,t),this.gl.uniformMatrix4fv(this.uShapes,!1,e.getShapeDataArray()),this.gl.uniformMatrix2x4fv(this.uLights,!1,e.getLightDataArray()),this.gl.uniform1i(this.uNumLights,e.getNumLights()),this.gl.uniform4i(this.uFlags,this.enableShadows?1:0,this.enableShowMarches?1:0,0,0),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3f(this.uCameraPosition,this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.gl.uniformMatrix3fv(this.uCameraMatrix,!0,this.cameraMatrixArray),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(e){let t=e.getContext("webgl2");if(t==null)throw new Error("Unable to get webgl2 context");let o=t.createBuffer();if(o==null)throw new Error("Unable to create position buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Rt),t.STATIC_DRAW);let r={"sdf-functions":He},a=k.create(t,r,Je,Ye);t.useProgram(a.program);let s=this.getAttribute(t,a,"aPosition");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);let c=this.getUniform(t,a,"uCameraMatrix"),m=this.getUniform(t,a,"uCameraPosition"),u=this.getUniform(t,a,"uAspectRatio"),d=this.getUniform(t,a,"uShapes"),i=this.getUniform(t,a,"uOperations"),x=this.getUniform(t,a,"uNumOperations"),l=this.getUniform(t,a,"uLights"),f=this.getUniform(t,a,"uNumLights"),S=this.getUniform(t,a,"uMaxMarchingSteps"),v=this.getUniform(t,a,"uEpsilon"),h=this.getUniform(t,a,"uFlags");return new n(t,a,o,d,i,x,l,f,m,c,u,S,v,h)}static getAttribute(e,t,o){let r=e.getAttribLocation(t.program,o);if(r<0)throw new Error(`Unable to find attribute ${o}`);return r}static getUniform(e,t,o){let r=e.getUniformLocation(t.program,o);if(r==null)throw new Error(`Unable to find uniform ${o}`);return r}};var $e=n=>p("label",{style:{display:"inline-block"}},n.label,p("input",{style:{display:"block"},type:"range",...n.inputProps})),B=class extends z{render(e){let{enableRender:t,renderScale:o,enableShadows:r,enableShowMarching:a,epsilon:s,maxMarchingStep:c}=this.props.options;return p("div",{class:"viewport-options"},p("button",{onClick:this.toggleRender},t?"Stop":"Start"),p("select",{onChange:this.changeRenderScale,value:o},p("option",{value:"1"},"1x"),p("option",{value:"0.5"},"0.5x"),p("option",{value:"0.25"},"0.25x"),p("option",{value:"0.125"},"0.125x")),p("button",{onClick:this.toggleShadows},r?"Hide Shadows":"Show Shadows"),p("button",{onClick:this.toggleMarching},a?"Hide Marching":"Show Marching"),p($e,{label:`Epsilon ${s}`,inputProps:{value:s,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),p($e,{label:`Marching Steps ${c}`,inputProps:{value:c,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}))}changeEpsilon=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeMarchingSteps=e=>{let t=parseFloat(e.target.value);if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};toggleRender=e=>{this.updateOptions({enableRender:!this.props.options.enableRender})};toggleShadows=e=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=e=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};updateOptions=e=>{console.log("Options",e),_.execute(le(this.props.viewportIndex,e))};changeRenderScale=e=>{let t=e.target.value,o=Number.parseFloat(t);isFinite(o)?_.execute(le(this.props.viewportIndex,{renderScale:o})):console.warn("Unable to parse canvas scale",t)}};var te=class extends z{canvasRef=Ae();renderer;zoom=20;zoomMin=1;zoomMax=80;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let e=this.canvasRef.current;this.renderer=G.create(e),this.renderer.canvasScale=this.props.options.renderScale,this.renderer.cameraDistance=10,this.renderer.updateCamera(),this.updateCanvasSize(),this.renderer.setupCanvas(),window.addEventListener("resize",this.onViewportResize),e.parentElement.addEventListener("pointerdown",this.onPointerDown),e.parentElement.addEventListener("pointermove",this.onPointerMove),e.parentElement.addEventListener("pointerup",this.onPointerUp),e.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let e=this.canvasRef.current;e.parentElement.removeEventListener("pointerdown",this.onPointerDown),e.parentElement.removeEventListener("pointermove",this.onPointerMove),e.parentElement.removeEventListener("pointerup",this.onPointerUp),e.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){return this.requestRender(),p("div",{class:"viewport outer-panel"},p("canvas",{className:"viewport__canvas",ref:this.canvasRef}),p(B,{viewportIndex:this.props.viewportIndex,options:this.props.options}))}updateCanvasSize=()=>{let e=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(e.width,e.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{this.renderFrameCallback=-1;let e=this.props.options;this.renderer.epsilon=e.epsilon,this.renderer.maxMarchingSteps=e.maxMarchingStep,this.renderer.enableShadows=e.enableShadows,this.renderer.enableShowMarches=e.enableShowMarching,this.renderer.canvasScale!==e.renderScale&&(this.renderer.canvasScale=e.renderScale,this.updateCanvasSize()),this.renderer.render(this.props.sdfScene),this.props.options.enableRender&&this.requestRender()};onPointerDown=e=>{e.target===this.canvasRef.current&&(console.log(e),this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.mouseDown=!0)};onPointerMove=e=>{if(!this.mouseDown)return;let t=e.clientX-this.mousePosX,o=e.clientY-this.mousePosY;this.mousePosX=e.clientX,this.mousePosY=e.clientY,this.renderer.orbitCamera(-o,-t),this.manualRenderTrigger()};onPointerUp=e=>{this.mouseDown=!1};onMouseWheel=e=>{let t=e.deltaY>0?1:-1,o=this.zoom+t;this.zoom=Math.max(Math.min(100,o),0),this.renderer.cameraDistance=this.zoom*.01*(this.zoomMax-this.zoomMin)+this.zoomMin,this.renderer.updateCamera(),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.props.options.enableRender||this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};function Nt(n){return Object.hasOwn(n,"z")}function Ft(n){return Object.hasOwn(n,"w")}var M=class extends z{render(){let e=this.props.vector,t=Nt(e),o=Ft(e);return p("div",{class:"vector"},p("input",{type:"number",value:e.x,onChange:this.onChangeX,placeholder:"x",step:.1}),p("input",{type:"number",value:e.y,onChange:this.onChangeY,placeholder:"y",step:.1}),t&&p("input",{type:"number",value:e.z,onChange:this.onChangeZ,placeholder:"z",step:.1}),o&&p("input",{type:"number",value:e.w,onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=e=>{this.updateVector(e,"x")};onChangeY=e=>{this.updateVector(e,"y")};onChangeZ=e=>{this.updateVector(e,"z")};onChangeW=e=>{this.updateVector(e,"w")};updateVector=(e,t)=>{let o=this.props.vector,r=e.target.value,a=parseFloat(r);if(!isFinite(a)){console.error("Unable to process vector field",t,r);return}console.log("Update vector field",t,a),this.props.onChange(o,{...o,[t]:a})}};var W=class extends z{render(){let e=this.props.shape;return e===void 0?p("div",null,"Empty shape"):p("div",null,p("div",null,p("strong",null,"Position")," ",p(M,{vector:e.position,onChange:this.onChangePosition})),p("div",null,p("strong",null,"Rotation")," ",p(M,{vector:e.rotation,onChange:this.onChangeRotation})),p("div",null,p("strong",null,"Type")," ",p("select",{value:e.type??"none",onChange:this.onChangeType},p("option",{value:"none"},"None"),p("option",{value:"box"},"Box"),p("option",{value:"sphere"},"Sphere"),p("option",{value:"hexPrism"},"Hex Prism"))),p("div",null,p("strong",null,"Shape Params")," ",p(M,{vector:e.shapeParams,onChange:this.onChangeShapeParams})),p("div",null,p("strong",null,"Diffuse Colour")," ",p(M,{vector:e.diffuseColour,onChange:this.onChangeDiffuseColour})),p("div",null,p("strong",null,"Specular Colour")," ",p(M,{vector:e.specularColour,onChange:this.onChangeSpecularColour})))}onChangePosition=(e,t)=>{this.updateField(t,"position")};onChangeRotation=(e,t)=>{this.updateField(t,"rotation")};onChangeType=e=>{let t=e.target.value;this.updateField(t,"type")};onChangeShapeParams=(e,t)=>{this.updateField(t,"shapeParams")};onChangeDiffuseColour=(e,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(e,t)=>{this.updateField(t,"specularColour")};updateField=(e,t)=>{console.log("Update shape",t,e);let o={...this.props.shape,[t]:e};this.props.onChange(o)}};var X=class n extends z{constructor(){super(),this.state={show:!1}}render(){let{node:e}=this.props,t=e.childOpCode??"none",o=e.children||[];return p("div",{class:"shape-node-view"},p("div",null,p("strong",null,"Op Code")," ",p("select",{value:t,onChange:this.onChangeOpCode},p("option",{value:"none"},"None"),p("option",{value:"union"},"Union"),p("option",{value:"intersection"},"Intersection"),p("option",{value:"subtraction"},"Subtraction"))),p("div",null,p("strong",null,"Shape")," ",p(W,{shape:e.shape,onChange:this.onChangeShape})),p("div",null,p("strong",null,"Children")," ",o.map((r,a)=>p(n,{key:a,node:r,onChange:s=>this.onChangeChild(a,s)}))))}onChangeOpCode=e=>{let t=e.target.value;this.updateField(t,"childOpCode")};onChangeShape=e=>{this.updateField(e,"shape")};onChangeChild=(e,t)=>{let o=this.props.node.children!==void 0?[...this.props.node.children]:[];o[e]=t,this.updateField(o,"children")};updateField=(e,t)=>{console.log("Update shape node",t,e);let o={...this.props.node,[t]:e};this.props.onChange(o)}};var Z=class extends z{render(){return p("div",{class:"scene-graph"},p("div",{class:"scene-graph__contents outer-panel"},p(X,{node:this.props.rootNode,onChange:this.onChangeRootNode})))}onChangeRootNode=e=>{this.props.sdfScene.updateShapesFromRootNode(e),_.execute(ee(e))}};var Q=new N;_.subscribe(n=>n.rootNode,n=>Q.updateShapesFromRootNode(n.rootNode));var ne=class extends z{render(){let{viewports:e,rootNode:t}=this.props.state;return p(O,null,p("nav",{class:"navbar outer-panel"},p("button",null,"File")),p("div",{class:"main-view"},p("div",{class:"viewports"},p(te,{viewportIndex:0,options:e[0].options,sdfScene:Q})),p(Z,{sdfScene:Q,rootNode:t})))}};function he(n){return{position:w(),rotation:D(),maxSize:0,type:"none",shapeParams:w(),diffuseColour:{x:.7,y:.3,z:.2,w:1},specularColour:{x:1,y:.8,z:.9,w:1},...n}}function Pt(){let n={name:"Root",children:[{name:"Root",childOpCode:"subtraction",children:[{name:"Hex Prism",shape:he({type:"hexPrism",shapeParams:{x:.75,y:2,z:0},maxSize:1.5})},{name:"Box & Sphere",childOpCode:"union",children:[{name:"Sphere",shape:he({type:"sphere",shapeParams:{x:1,y:2,z:1},maxSize:2,diffuseColour:{x:.1,y:.9,z:.2,w:1}})},{name:"Box",shape:he({type:"box",shapeParams:{x:6,y:1,z:6},position:{x:0,y:-1.5,z:0},diffuseColour:{x:.2,y:.25,z:.3,w:1}})}]}]}]};_.execute(ee(n)),Q.setLight(0,{position:{x:4,y:2,z:3},colour:{x:1,y:.8,z:.6,w:1}}),Q.setLight(1,{position:{x:-4,y:2,z:3},colour:{x:.2,y:1,z:.6,w:1}})}Pt();var Tt=document.getElementById("app");function Ke(){Te(p(ne,{state:_.state()}),Tt)}Ke();_.subscribeAny(Ke);})();
//# sourceMappingURL=webgl-index.js.map
