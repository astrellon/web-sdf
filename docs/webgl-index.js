(()=>{var Zn=Object.create;var gr=Object.defineProperty;var Qn=Object.getOwnPropertyDescriptor;var Yn=Object.getOwnPropertyNames;var Jn=Object.getPrototypeOf,Hn=Object.prototype.hasOwnProperty;var Hr=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),de=(e,r)=>{for(var t in r)gr(e,t,{get:r[t],enumerable:!0})},jn=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Yn(r))!Hn.call(e,i)&&i!==t&&gr(e,i,{get:()=>r[i],enumerable:!(n=Qn(r,i))||n.enumerable});return e};var jr=(e,r,t)=>(t=e!=null?Zn(Jn(e)):{},jn(r||!e||!e.__esModule?gr(t,"default",{value:e,enumerable:!0}):t,e));var ht=Hr(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.EmptyModifier=void 0;var ii=()=>null;ge.EmptyModifier=ii;var Cr=class{constructor(r){this.subscriptions=[],this.state=()=>this.currentState,this.currentState=r}execute(r,t=!0){let n=r(this.currentState);n==null||n===this.currentState||(this.currentState=Object.assign({},this.currentState,n),this.triggerSubscriptions(r,t))}subscribe(r,t,n,i){let o=r(this.currentState),a={selector:new Mr(r,o,n,i),subscription:t};return this.subscriptions.push(a),()=>{let s=this.subscriptions.indexOf(a);s>=0&&this.subscriptions.splice(s,1)}}subscribeAny(r,t){return this.subscribe(n=>n,r,void 0,t)}unsubscribeAll(){this.subscriptions=[]}triggerSubscriptions(r,t){for(let n of this.subscriptions){let i=n.selector.getValue(this.currentState);n.selector.checkIfChanged(i)&&n.subscription(this.currentState,i,r,t)}}};ge.default=Cr;var Mr=class{constructor(r,t=void 0,n,i){this.getValue=o=>this.selector(o),this.selector=r,this.prevValue=t,this.comparer=n,this.name=i}checkIfChanged(r){let t=!1;return this.comparer!==void 0?t=!this.comparer(this.prevValue,r):t=r!==this.prevValue,this.prevValue=r,t}}});var Un=Hr((ih,Dn)=>{"use strict";Dn.exports=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var n,i,o;if(Array.isArray(r)){if(n=r.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!e(r[i],t[i]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(o=Object.keys(r),n=o.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=n;i--!==0;){var a=o[i];if(!e(r[a],t[a]))return!1}return!0}return r!==r&&t!==t}});var We,O,rt,qn,re,qr,tt,nt,it,br,vr,xr,Kn,he={},ot=[],$n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function J(e,r){for(var t in r)e[t]=r[t];return e}function yr(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function h(e,r,t){var n,i,o,a={};for(o in r)o=="key"?n=r[o]:o=="ref"?i=r[o]:a[o]=r[o];if(arguments.length>2&&(a.children=arguments.length>3?We.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return De(e,a,n,i,null)}function De(e,r,t,n,i){var o={type:e,props:r,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++rt,__i:-1,__u:0};return i==null&&O.vnode!=null&&O.vnode(o),o}function Q(){return{current:null}}function G(e){return e.children}function S(e,r){this.props=e,this.context=r}function oe(e,r){if(r==null)return e.__?oe(e.__,e.__i+1):null;for(var t;r<e.__k.length;r++)if((t=e.__k[r])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?oe(e):null}function at(e){var r,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,r=0;r<e.__k.length;r++)if((t=e.__k[r])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return at(e)}}function Kr(e){(!e.__d&&(e.__d=!0)&&re.push(e)&&!Ue.__r++||qr!=O.debounceRendering)&&((qr=O.debounceRendering)||tt)(Ue)}function Ue(){for(var e,r,t,n,i,o,a,s=1;re.length;)re.length>s&&re.sort(nt),e=re.shift(),s=re.length,e.__d&&(t=void 0,i=(n=(r=e).__v).__e,o=[],a=[],r.__P&&((t=J({},n)).__v=n.__v+1,O.vnode&&O.vnode(t),_r(r.__P,t,n,r.__n,r.__P.namespaceURI,32&n.__u?[i]:null,o,i??oe(n),!!(32&n.__u),a),t.__v=n.__v,t.__.__k[t.__i]=t,ct(o,t,a),t.__e!=i&&at(t)));Ue.__r=0}function st(e,r,t,n,i,o,a,s,l,c,d){var p,m,f,g,v,u,x=n&&n.__k||ot,b=r.length;for(l=ei(t,r,x,l,b),p=0;p<b;p++)(f=t.__k[p])!=null&&(m=f.__i==-1?he:x[f.__i]||he,f.__i=p,u=_r(e,f,m,i,o,a,s,l,c,d),g=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&Ir(m.ref,null,f),d.push(f.ref,f.__c||g,f)),v==null&&g!=null&&(v=g),4&f.__u||m.__k===f.__k?l=lt(f,l,e):typeof f.type=="function"&&u!==void 0?l=u:g&&(l=g.nextSibling),f.__u&=-7);return t.__e=v,l}function ei(e,r,t,n,i){var o,a,s,l,c,d=t.length,p=d,m=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=r[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=o+m,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?De(null,a,null,null,null):fe(a)?De(G,{children:a},null,null,null):a.constructor==null&&a.__b>0?De(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,s=null,(c=a.__i=ri(a,t,l,p))!=-1&&(p--,(s=t[c])&&(s.__u|=2)),s==null||s.__v==null?(c==-1&&(i>d?m--:i<d&&m++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?m--:c==l+1?m++:(c>l?m--:m++,a.__u|=4))):e.__k[o]=null;if(p)for(o=0;o<d;o++)(s=t[o])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=oe(s)),dt(s,s));return n}function lt(e,r,t){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,r=lt(n[i],r,t));return r}e.__e!=r&&(r&&e.type&&!t.contains(r)&&(r=oe(e)),t.insertBefore(e.__e,r||null),r=e.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function me(e,r){return r=r||[],e==null||typeof e=="boolean"||(fe(e)?e.some(function(t){me(t,r)}):r.push(e)),r}function ri(e,r,t,n){var i,o,a=e.key,s=e.type,l=r[t];if(l===null&&e.key==null||l&&a==l.key&&s==l.type&&(2&l.__u)==0)return t;if(n>(l!=null&&(2&l.__u)==0?1:0))for(i=t-1,o=t+1;i>=0||o<r.length;){if(i>=0){if((l=r[i])&&(2&l.__u)==0&&a==l.key&&s==l.type)return i;i--}if(o<r.length){if((l=r[o])&&(2&l.__u)==0&&a==l.key&&s==l.type)return o;o++}}return-1}function $r(e,r,t){r[0]=="-"?e.setProperty(r,t??""):e[r]=t==null?"":typeof t!="number"||$n.test(r)?t:t+"px"}function ke(e,r,t,n,i){var o,a;e:if(r=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(r in n)t&&r in t||$r(e.style,r,"");if(t)for(r in t)n&&t[r]==n[r]||$r(e.style,r,t[r])}else if(r[0]=="o"&&r[1]=="n")o=r!=(r=r.replace(it,"$1")),a=r.toLowerCase(),r=a in e||r=="onFocusOut"||r=="onFocusIn"?a.slice(2):r.slice(2),e.l||(e.l={}),e.l[r+o]=t,t?n?t.u=n.u:(t.u=br,e.addEventListener(r,o?xr:vr,o)):e.removeEventListener(r,o?xr:vr,o);else{if(i=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in e)try{e[r]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&r[4]!="-"?e.removeAttribute(r):e.setAttribute(r,r=="popover"&&t==1?"":t))}}function et(e){return function(r){if(this.l){var t=this.l[r.type+e];if(r.t==null)r.t=br++;else if(r.t<t.u)return;return t(O.event?O.event(r):r)}}}function _r(e,r,t,n,i,o,a,s,l,c){var d,p,m,f,g,v,u,x,b,_,y,C,I,T,N,R,M,E=r.type;if(r.constructor!=null)return null;128&t.__u&&(l=!!(32&t.__u),o=[s=r.__e=t.__e]),(d=O.__b)&&d(r);e:if(typeof E=="function")try{if(x=r.props,b="prototype"in E&&E.prototype.render,_=(d=E.contextType)&&n[d.__c],y=d?_?_.props.value:d.__:n,t.__c?u=(p=r.__c=t.__c).__=p.__E:(b?r.__c=p=new E(x,y):(r.__c=p=new S(x,y),p.constructor=E,p.render=ni),_&&_.sub(p),p.props=x,p.state||(p.state={}),p.context=y,p.__n=n,m=p.__d=!0,p.__h=[],p._sb=[]),b&&p.__s==null&&(p.__s=p.state),b&&E.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=J({},p.__s)),J(p.__s,E.getDerivedStateFromProps(x,p.__s))),f=p.props,g=p.state,p.__v=r,m)b&&E.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),b&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(b&&E.getDerivedStateFromProps==null&&x!==f&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,y),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,y)===!1||r.__v==t.__v){for(r.__v!=t.__v&&(p.props=x,p.state=p.__s,p.__d=!1),r.__e=t.__e,r.__k=t.__k,r.__k.some(function(P){P&&(P.__=r)}),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&a.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,y),b&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(f,g,v)})}if(p.context=y,p.props=x,p.__P=e,p.__e=!1,I=O.__r,T=0,b){for(p.state=p.__s,p.__d=!1,I&&I(r),d=p.render(p.props,p.state,p.context),N=0;N<p._sb.length;N++)p.__h.push(p._sb[N]);p._sb=[]}else do p.__d=!1,I&&I(r),d=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++T<25);p.state=p.__s,p.getChildContext!=null&&(n=J(J({},n),p.getChildContext())),b&&!m&&p.getSnapshotBeforeUpdate!=null&&(v=p.getSnapshotBeforeUpdate(f,g)),R=d,d!=null&&d.type===G&&d.key==null&&(R=pt(d.props.children)),s=st(e,fe(R)?R:[R],r,t,n,i,o,a,s,l,c),p.base=r.__e,r.__u&=-161,p.__h.length&&a.push(p),u&&(p.__E=p.__=null)}catch(P){if(r.__v=null,l||o!=null)if(P.then){for(r.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,r.__e=s}else for(M=o.length;M--;)yr(o[M]);else r.__e=t.__e,r.__k=t.__k;O.__e(P,r,t)}else o==null&&r.__v==t.__v?(r.__k=t.__k,r.__e=t.__e):s=r.__e=ti(t.__e,r,t,n,i,o,a,l,c);return(d=O.diffed)&&d(r),128&r.__u?void 0:s}function ct(e,r,t){for(var n=0;n<t.length;n++)Ir(t[n],t[++n],t[++n]);O.__c&&O.__c(r,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){O.__e(o,i.__v)}})}function pt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:fe(e)?e.map(pt):J({},e)}function ti(e,r,t,n,i,o,a,s,l){var c,d,p,m,f,g,v,u=t.props,x=r.props,b=r.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){e=f,o[c]=null;break}}if(e==null){if(b==null)return document.createTextNode(x);e=document.createElementNS(i,b,x.is&&x),s&&(O.__m&&O.__m(r,o),s=!1),o=null}if(b==null)u===x||s&&e.data==x||(e.data=x);else{if(o=o&&We.call(e.childNodes),u=t.props||he,!s&&o!=null)for(u={},c=0;c<e.attributes.length;c++)u[(f=e.attributes[c]).name]=f.value;for(c in u)if(f=u[c],c!="children"){if(c=="dangerouslySetInnerHTML")p=f;else if(!(c in x)){if(c=="value"&&"defaultValue"in x||c=="checked"&&"defaultChecked"in x)continue;ke(e,c,null,f,i)}}for(c in x)f=x[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?d=f:c=="value"?g=f:c=="checked"?v=f:s&&typeof f!="function"||u[c]===f||ke(e,c,f,u[c],i);if(d)s||p&&(d.__html==p.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),r.__k=[];else if(p&&(e.innerHTML=""),st(r.type=="template"?e.content:e,fe(m)?m:[m],r,t,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:t.__k&&oe(t,0),s,l),o!=null)for(c=o.length;c--;)yr(o[c]);s||(c="value",b=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[c]||b=="progress"&&!g||b=="option"&&g!=u[c])&&ke(e,c,g,u[c],i),c="checked",v!=null&&v!=e[c]&&ke(e,c,v,u[c],i))}return e}function Ir(e,r,t){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&r==null||(e.__u=e(r))}else e.current=r}catch(i){O.__e(i,t)}}function dt(e,r,t){var n,i;if(O.unmount&&O.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Ir(n,null,r)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){O.__e(o,r)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&dt(n[i],r,t||typeof e.type!="function");t||yr(e.__e),e.__c=e.__=e.__e=void 0}function ni(e,r,t){return this.constructor(e,t)}function ue(e,r,t){var n,i,o,a;r==document&&(r=document.documentElement),O.__&&O.__(e,r),i=(n=typeof t=="function")?null:t&&t.__k||r.__k,o=[],a=[],_r(r,e=(!n&&t||r).__k=h(G,null,[e]),i||he,he,r.namespaceURI,!n&&t?[t]:i?null:r.firstChild?We.call(r.childNodes):null,o,!n&&t?t:i?i.__e:r.firstChild,n,a),ct(o,e,a)}We=ot.slice,O={__e:function(e,r,t,n){for(var i,o,a;r=r.__;)if((i=r.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),a=i.__d),a)return i.__E=i}catch(s){e=s}throw e}},rt=0,qn=function(e){return e!=null&&e.constructor==null},S.prototype.setState=function(e,r){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=J({},this.state),typeof e=="function"&&(e=e(J({},t),this.props)),e&&J(t,e),e!=null&&this.__v&&(r&&this._sb.push(r),Kr(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Kr(this))},S.prototype.render=G,re=[],tt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nt=function(e,r){return e.__v.__b-r.__v.__b},Ue.__r=0,it=/(PointerCapture)$|Capture$/i,br=0,vr=et(!1),xr=et(!0),Kn=0;var Kt=jr(ht());var j={};de(j,{ANGLE_ORDER:()=>Sr,ARRAY_TYPE:()=>V,EPSILON:()=>w,RANDOM:()=>H,equals:()=>pi,round:()=>ae,setMatrixArrayType:()=>oi,toDegree:()=>ci,toRadian:()=>li});var w=1e-6,V=typeof Float32Array<"u"?Float32Array:Array,H=Math.random,Sr="zyx";function ae(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}function oi(e){V=e}var ai=Math.PI/180,si=180/Math.PI;function li(e){return e*ai}function ci(e){return e*si}function pi(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:w;return Math.abs(e-r)<=t*Math.max(1,Math.abs(e),Math.abs(r))}var se={};de(se,{add:()=>Ei,adjoint:()=>bi,clone:()=>hi,copy:()=>fi,create:()=>Ar,determinant:()=>yi,equals:()=>Vi,exactEquals:()=>Fi,frob:()=>Ti,fromMat2d:()=>wi,fromMat4:()=>di,fromQuat:()=>Ni,fromRotation:()=>Si,fromScaling:()=>Ai,fromTranslation:()=>Mi,fromValues:()=>mi,identity:()=>gi,invert:()=>xi,mul:()=>Gi,multiply:()=>ft,multiplyScalar:()=>Pi,multiplyScalarAndAdd:()=>zi,normalFromMat4:()=>Li,projection:()=>Oi,rotate:()=>Ii,scale:()=>Ci,set:()=>ui,str:()=>Ri,sub:()=>Xi,subtract:()=>mt,translate:()=>_i,transpose:()=>vi});function Ar(){var e=new V(9);return V!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function di(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[4],e[4]=r[5],e[5]=r[6],e[6]=r[8],e[7]=r[9],e[8]=r[10],e}function hi(e){var r=new V(9);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function fi(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e}function mi(e,r,t,n,i,o,a,s,l){var c=new V(9);return c[0]=e,c[1]=r,c[2]=t,c[3]=n,c[4]=i,c[5]=o,c[6]=a,c[7]=s,c[8]=l,c}function ui(e,r,t,n,i,o,a,s,l,c){return e[0]=r,e[1]=t,e[2]=n,e[3]=i,e[4]=o,e[5]=a,e[6]=s,e[7]=l,e[8]=c,e}function gi(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function vi(e,r){if(e===r){var t=r[1],n=r[2],i=r[5];e[1]=r[3],e[2]=r[6],e[3]=t,e[5]=r[7],e[6]=n,e[7]=i}else e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8];return e}function xi(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],s=r[5],l=r[6],c=r[7],d=r[8],p=d*a-s*c,m=-d*o+s*l,f=c*o-a*l,g=t*p+n*m+i*f;return g?(g=1/g,e[0]=p*g,e[1]=(-d*n+i*c)*g,e[2]=(s*n-i*a)*g,e[3]=m*g,e[4]=(d*t-i*l)*g,e[5]=(-s*t+i*o)*g,e[6]=f*g,e[7]=(-c*t+n*l)*g,e[8]=(a*t-n*o)*g,e):null}function bi(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],s=r[5],l=r[6],c=r[7],d=r[8];return e[0]=a*d-s*c,e[1]=i*c-n*d,e[2]=n*s-i*a,e[3]=s*l-o*d,e[4]=t*d-i*l,e[5]=i*o-t*s,e[6]=o*c-a*l,e[7]=n*l-t*c,e[8]=t*a-n*o,e}function yi(e){var r=e[0],t=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],c=e[8];return r*(c*o-a*l)+t*(-c*i+a*s)+n*(l*i-o*s)}function ft(e,r,t){var n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],l=r[5],c=r[6],d=r[7],p=r[8],m=t[0],f=t[1],g=t[2],v=t[3],u=t[4],x=t[5],b=t[6],_=t[7],y=t[8];return e[0]=m*n+f*a+g*c,e[1]=m*i+f*s+g*d,e[2]=m*o+f*l+g*p,e[3]=v*n+u*a+x*c,e[4]=v*i+u*s+x*d,e[5]=v*o+u*l+x*p,e[6]=b*n+_*a+y*c,e[7]=b*i+_*s+y*d,e[8]=b*o+_*l+y*p,e}function _i(e,r,t){var n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],l=r[5],c=r[6],d=r[7],p=r[8],m=t[0],f=t[1];return e[0]=n,e[1]=i,e[2]=o,e[3]=a,e[4]=s,e[5]=l,e[6]=m*n+f*a+c,e[7]=m*i+f*s+d,e[8]=m*o+f*l+p,e}function Ii(e,r,t){var n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],l=r[5],c=r[6],d=r[7],p=r[8],m=Math.sin(t),f=Math.cos(t);return e[0]=f*n+m*a,e[1]=f*i+m*s,e[2]=f*o+m*l,e[3]=f*a-m*n,e[4]=f*s-m*i,e[5]=f*l-m*o,e[6]=c,e[7]=d,e[8]=p,e}function Ci(e,r,t){var n=t[0],i=t[1];return e[0]=n*r[0],e[1]=n*r[1],e[2]=n*r[2],e[3]=i*r[3],e[4]=i*r[4],e[5]=i*r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e}function Mi(e,r){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=r[0],e[7]=r[1],e[8]=1,e}function Si(e,r){var t=Math.sin(r),n=Math.cos(r);return e[0]=n,e[1]=t,e[2]=0,e[3]=-t,e[4]=n,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Ai(e,r){return e[0]=r[0],e[1]=0,e[2]=0,e[3]=0,e[4]=r[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function wi(e,r){return e[0]=r[0],e[1]=r[1],e[2]=0,e[3]=r[2],e[4]=r[3],e[5]=0,e[6]=r[4],e[7]=r[5],e[8]=1,e}function Ni(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=t+t,s=n+n,l=i+i,c=t*a,d=n*a,p=n*s,m=i*a,f=i*s,g=i*l,v=o*a,u=o*s,x=o*l;return e[0]=1-p-g,e[3]=d-x,e[6]=m+u,e[1]=d+x,e[4]=1-c-g,e[7]=f-v,e[2]=m-u,e[5]=f+v,e[8]=1-c-p,e}function Li(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],s=r[5],l=r[6],c=r[7],d=r[8],p=r[9],m=r[10],f=r[11],g=r[12],v=r[13],u=r[14],x=r[15],b=t*s-n*a,_=t*l-i*a,y=t*c-o*a,C=n*l-i*s,I=n*c-o*s,T=i*c-o*l,N=d*v-p*g,R=d*u-m*g,M=d*x-f*g,E=p*u-m*v,P=p*x-f*v,F=m*x-f*u,A=b*F-_*P+y*E+C*M-I*R+T*N;return A?(A=1/A,e[0]=(s*F-l*P+c*E)*A,e[1]=(l*M-a*F-c*R)*A,e[2]=(a*P-s*M+c*N)*A,e[3]=(i*P-n*F-o*E)*A,e[4]=(t*F-i*M+o*R)*A,e[5]=(n*M-t*P-o*N)*A,e[6]=(v*T-u*I+x*C)*A,e[7]=(u*y-g*T-x*_)*A,e[8]=(g*I-v*y+x*b)*A,e):null}function Oi(e,r,t){return e[0]=2/r,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/t,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function Ri(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function Ti(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8])}function Ei(e,r,t){return e[0]=r[0]+t[0],e[1]=r[1]+t[1],e[2]=r[2]+t[2],e[3]=r[3]+t[3],e[4]=r[4]+t[4],e[5]=r[5]+t[5],e[6]=r[6]+t[6],e[7]=r[7]+t[7],e[8]=r[8]+t[8],e}function mt(e,r,t){return e[0]=r[0]-t[0],e[1]=r[1]-t[1],e[2]=r[2]-t[2],e[3]=r[3]-t[3],e[4]=r[4]-t[4],e[5]=r[5]-t[5],e[6]=r[6]-t[6],e[7]=r[7]-t[7],e[8]=r[8]-t[8],e}function Pi(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e[3]=r[3]*t,e[4]=r[4]*t,e[5]=r[5]*t,e[6]=r[6]*t,e[7]=r[7]*t,e[8]=r[8]*t,e}function zi(e,r,t,n){return e[0]=r[0]+t[0]*n,e[1]=r[1]+t[1]*n,e[2]=r[2]+t[2]*n,e[3]=r[3]+t[3]*n,e[4]=r[4]+t[4]*n,e[5]=r[5]+t[5]*n,e[6]=r[6]+t[6]*n,e[7]=r[7]+t[7]*n,e[8]=r[8]+t[8]*n,e}function Fi(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]&&e[4]===r[4]&&e[5]===r[5]&&e[6]===r[6]&&e[7]===r[7]&&e[8]===r[8]}function Vi(e,r){var t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],d=e[8],p=r[0],m=r[1],f=r[2],g=r[3],v=r[4],u=r[5],x=r[6],b=r[7],_=r[8];return Math.abs(t-p)<=w*Math.max(1,Math.abs(t),Math.abs(p))&&Math.abs(n-m)<=w*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(i-f)<=w*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(o-g)<=w*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(a-v)<=w*Math.max(1,Math.abs(a),Math.abs(v))&&Math.abs(s-u)<=w*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(l-x)<=w*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(c-b)<=w*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(d-_)<=w*Math.max(1,Math.abs(d),Math.abs(_))}var Gi=ft,Xi=mt;var ve={};de(ve,{add:()=>So,adjoint:()=>Yi,clone:()=>ki,copy:()=>Di,create:()=>Bi,decompose:()=>po,determinant:()=>Ji,equals:()=>Lo,exactEquals:()=>No,frob:()=>Mo,fromQuat:()=>mo,fromQuat2:()=>so,fromRotation:()=>no,fromRotationTranslation:()=>vt,fromRotationTranslationScale:()=>ho,fromRotationTranslationScaleOrigin:()=>fo,fromScaling:()=>to,fromTranslation:()=>ro,fromValues:()=>Ui,fromXRotation:()=>io,fromYRotation:()=>oo,fromZRotation:()=>ao,frustum:()=>uo,getRotation:()=>co,getScaling:()=>xt,getTranslation:()=>lo,identity:()=>ut,invert:()=>Qi,lookAt:()=>_o,mul:()=>Oo,multiply:()=>gt,multiplyScalar:()=>Ao,multiplyScalarAndAdd:()=>wo,ortho:()=>bo,orthoNO:()=>yt,orthoZO:()=>yo,perspective:()=>go,perspectiveFromFieldOfView:()=>xo,perspectiveNO:()=>bt,perspectiveZO:()=>vo,rotate:()=>qi,rotateX:()=>Ki,rotateY:()=>$i,rotateZ:()=>eo,scale:()=>ji,set:()=>Wi,str:()=>Co,sub:()=>Ro,subtract:()=>_t,targetTo:()=>Io,translate:()=>Hi,transpose:()=>Zi});function Bi(){var e=new V(16);return V!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function ki(e){var r=new V(16);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function Di(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function Ui(e,r,t,n,i,o,a,s,l,c,d,p,m,f,g,v){var u=new V(16);return u[0]=e,u[1]=r,u[2]=t,u[3]=n,u[4]=i,u[5]=o,u[6]=a,u[7]=s,u[8]=l,u[9]=c,u[10]=d,u[11]=p,u[12]=m,u[13]=f,u[14]=g,u[15]=v,u}function Wi(e,r,t,n,i,o,a,s,l,c,d,p,m,f,g,v,u){return e[0]=r,e[1]=t,e[2]=n,e[3]=i,e[4]=o,e[5]=a,e[6]=s,e[7]=l,e[8]=c,e[9]=d,e[10]=p,e[11]=m,e[12]=f,e[13]=g,e[14]=v,e[15]=u,e}function ut(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Zi(e,r){if(e===r){var t=r[1],n=r[2],i=r[3],o=r[6],a=r[7],s=r[11];e[1]=r[4],e[2]=r[8],e[3]=r[12],e[4]=t,e[6]=r[9],e[7]=r[13],e[8]=n,e[9]=o,e[11]=r[14],e[12]=i,e[13]=a,e[14]=s}else e[0]=r[0],e[1]=r[4],e[2]=r[8],e[3]=r[12],e[4]=r[1],e[5]=r[5],e[6]=r[9],e[7]=r[13],e[8]=r[2],e[9]=r[6],e[10]=r[10],e[11]=r[14],e[12]=r[3],e[13]=r[7],e[14]=r[11],e[15]=r[15];return e}function Qi(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],s=r[5],l=r[6],c=r[7],d=r[8],p=r[9],m=r[10],f=r[11],g=r[12],v=r[13],u=r[14],x=r[15],b=t*s-n*a,_=t*l-i*a,y=t*c-o*a,C=n*l-i*s,I=n*c-o*s,T=i*c-o*l,N=d*v-p*g,R=d*u-m*g,M=d*x-f*g,E=p*u-m*v,P=p*x-f*v,F=m*x-f*u,A=b*F-_*P+y*E+C*M-I*R+T*N;return A?(A=1/A,e[0]=(s*F-l*P+c*E)*A,e[1]=(i*P-n*F-o*E)*A,e[2]=(v*T-u*I+x*C)*A,e[3]=(m*I-p*T-f*C)*A,e[4]=(l*M-a*F-c*R)*A,e[5]=(t*F-i*M+o*R)*A,e[6]=(u*y-g*T-x*_)*A,e[7]=(d*T-m*y+f*_)*A,e[8]=(a*P-s*M+c*N)*A,e[9]=(n*M-t*P-o*N)*A,e[10]=(g*I-v*y+x*b)*A,e[11]=(p*y-d*I-f*b)*A,e[12]=(s*R-a*E-l*N)*A,e[13]=(t*E-n*R+i*N)*A,e[14]=(v*_-g*C-u*b)*A,e[15]=(d*C-p*_+m*b)*A,e):null}function Yi(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],s=r[5],l=r[6],c=r[7],d=r[8],p=r[9],m=r[10],f=r[11],g=r[12],v=r[13],u=r[14],x=r[15],b=t*s-n*a,_=t*l-i*a,y=t*c-o*a,C=n*l-i*s,I=n*c-o*s,T=i*c-o*l,N=d*v-p*g,R=d*u-m*g,M=d*x-f*g,E=p*u-m*v,P=p*x-f*v,F=m*x-f*u;return e[0]=s*F-l*P+c*E,e[1]=i*P-n*F-o*E,e[2]=v*T-u*I+x*C,e[3]=m*I-p*T-f*C,e[4]=l*M-a*F-c*R,e[5]=t*F-i*M+o*R,e[6]=u*y-g*T-x*_,e[7]=d*T-m*y+f*_,e[8]=a*P-s*M+c*N,e[9]=n*M-t*P-o*N,e[10]=g*I-v*y+x*b,e[11]=p*y-d*I-f*b,e[12]=s*R-a*E-l*N,e[13]=t*E-n*R+i*N,e[14]=v*_-g*C-u*b,e[15]=d*C-p*_+m*b,e}function Ji(e){var r=e[0],t=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],c=e[8],d=e[9],p=e[10],m=e[11],f=e[12],g=e[13],v=e[14],u=e[15],x=r*a-t*o,b=r*s-n*o,_=t*s-n*a,y=c*g-d*f,C=c*v-p*f,I=d*v-p*g,T=r*I-t*C+n*y,N=o*I-a*C+s*y,R=c*_-d*b+p*x,M=f*_-g*b+v*x;return l*T-i*N+u*R-m*M}function gt(e,r,t){var n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],l=r[5],c=r[6],d=r[7],p=r[8],m=r[9],f=r[10],g=r[11],v=r[12],u=r[13],x=r[14],b=r[15],_=t[0],y=t[1],C=t[2],I=t[3];return e[0]=_*n+y*s+C*p+I*v,e[1]=_*i+y*l+C*m+I*u,e[2]=_*o+y*c+C*f+I*x,e[3]=_*a+y*d+C*g+I*b,_=t[4],y=t[5],C=t[6],I=t[7],e[4]=_*n+y*s+C*p+I*v,e[5]=_*i+y*l+C*m+I*u,e[6]=_*o+y*c+C*f+I*x,e[7]=_*a+y*d+C*g+I*b,_=t[8],y=t[9],C=t[10],I=t[11],e[8]=_*n+y*s+C*p+I*v,e[9]=_*i+y*l+C*m+I*u,e[10]=_*o+y*c+C*f+I*x,e[11]=_*a+y*d+C*g+I*b,_=t[12],y=t[13],C=t[14],I=t[15],e[12]=_*n+y*s+C*p+I*v,e[13]=_*i+y*l+C*m+I*u,e[14]=_*o+y*c+C*f+I*x,e[15]=_*a+y*d+C*g+I*b,e}function Hi(e,r,t){var n=t[0],i=t[1],o=t[2],a,s,l,c,d,p,m,f,g,v,u,x;return r===e?(e[12]=r[0]*n+r[4]*i+r[8]*o+r[12],e[13]=r[1]*n+r[5]*i+r[9]*o+r[13],e[14]=r[2]*n+r[6]*i+r[10]*o+r[14],e[15]=r[3]*n+r[7]*i+r[11]*o+r[15]):(a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],p=r[5],m=r[6],f=r[7],g=r[8],v=r[9],u=r[10],x=r[11],e[0]=a,e[1]=s,e[2]=l,e[3]=c,e[4]=d,e[5]=p,e[6]=m,e[7]=f,e[8]=g,e[9]=v,e[10]=u,e[11]=x,e[12]=a*n+d*i+g*o+r[12],e[13]=s*n+p*i+v*o+r[13],e[14]=l*n+m*i+u*o+r[14],e[15]=c*n+f*i+x*o+r[15]),e}function ji(e,r,t){var n=t[0],i=t[1],o=t[2];return e[0]=r[0]*n,e[1]=r[1]*n,e[2]=r[2]*n,e[3]=r[3]*n,e[4]=r[4]*i,e[5]=r[5]*i,e[6]=r[6]*i,e[7]=r[7]*i,e[8]=r[8]*o,e[9]=r[9]*o,e[10]=r[10]*o,e[11]=r[11]*o,e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function qi(e,r,t,n){var i=n[0],o=n[1],a=n[2],s=Math.sqrt(i*i+o*o+a*a),l,c,d,p,m,f,g,v,u,x,b,_,y,C,I,T,N,R,M,E,P,F,A,W;return s<w?null:(s=1/s,i*=s,o*=s,a*=s,l=Math.sin(t),c=Math.cos(t),d=1-c,p=r[0],m=r[1],f=r[2],g=r[3],v=r[4],u=r[5],x=r[6],b=r[7],_=r[8],y=r[9],C=r[10],I=r[11],T=i*i*d+c,N=o*i*d+a*l,R=a*i*d-o*l,M=i*o*d-a*l,E=o*o*d+c,P=a*o*d+i*l,F=i*a*d+o*l,A=o*a*d-i*l,W=a*a*d+c,e[0]=p*T+v*N+_*R,e[1]=m*T+u*N+y*R,e[2]=f*T+x*N+C*R,e[3]=g*T+b*N+I*R,e[4]=p*M+v*E+_*P,e[5]=m*M+u*E+y*P,e[6]=f*M+x*E+C*P,e[7]=g*M+b*E+I*P,e[8]=p*F+v*A+_*W,e[9]=m*F+u*A+y*W,e[10]=f*F+x*A+C*W,e[11]=g*F+b*A+I*W,r!==e&&(e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e)}function Ki(e,r,t){var n=Math.sin(t),i=Math.cos(t),o=r[4],a=r[5],s=r[6],l=r[7],c=r[8],d=r[9],p=r[10],m=r[11];return r!==e&&(e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e[4]=o*i+c*n,e[5]=a*i+d*n,e[6]=s*i+p*n,e[7]=l*i+m*n,e[8]=c*i-o*n,e[9]=d*i-a*n,e[10]=p*i-s*n,e[11]=m*i-l*n,e}function $i(e,r,t){var n=Math.sin(t),i=Math.cos(t),o=r[0],a=r[1],s=r[2],l=r[3],c=r[8],d=r[9],p=r[10],m=r[11];return r!==e&&(e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e[0]=o*i-c*n,e[1]=a*i-d*n,e[2]=s*i-p*n,e[3]=l*i-m*n,e[8]=o*n+c*i,e[9]=a*n+d*i,e[10]=s*n+p*i,e[11]=l*n+m*i,e}function eo(e,r,t){var n=Math.sin(t),i=Math.cos(t),o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],d=r[5],p=r[6],m=r[7];return r!==e&&(e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e[0]=o*i+c*n,e[1]=a*i+d*n,e[2]=s*i+p*n,e[3]=l*i+m*n,e[4]=c*i-o*n,e[5]=d*i-a*n,e[6]=p*i-s*n,e[7]=m*i-l*n,e}function ro(e,r){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function to(e,r){return e[0]=r[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=r[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function no(e,r,t){var n=t[0],i=t[1],o=t[2],a=Math.sqrt(n*n+i*i+o*o),s,l,c;return a<w?null:(a=1/a,n*=a,i*=a,o*=a,s=Math.sin(r),l=Math.cos(r),c=1-l,e[0]=n*n*c+l,e[1]=i*n*c+o*s,e[2]=o*n*c-i*s,e[3]=0,e[4]=n*i*c-o*s,e[5]=i*i*c+l,e[6]=o*i*c+n*s,e[7]=0,e[8]=n*o*c+i*s,e[9]=i*o*c-n*s,e[10]=o*o*c+l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function io(e,r){var t=Math.sin(r),n=Math.cos(r);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=t,e[7]=0,e[8]=0,e[9]=-t,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function oo(e,r){var t=Math.sin(r),n=Math.cos(r);return e[0]=n,e[1]=0,e[2]=-t,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=t,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ao(e,r){var t=Math.sin(r),n=Math.cos(r);return e[0]=n,e[1]=t,e[2]=0,e[3]=0,e[4]=-t,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function vt(e,r,t){var n=r[0],i=r[1],o=r[2],a=r[3],s=n+n,l=i+i,c=o+o,d=n*s,p=n*l,m=n*c,f=i*l,g=i*c,v=o*c,u=a*s,x=a*l,b=a*c;return e[0]=1-(f+v),e[1]=p+b,e[2]=m-x,e[3]=0,e[4]=p-b,e[5]=1-(d+v),e[6]=g+u,e[7]=0,e[8]=m+x,e[9]=g-u,e[10]=1-(d+f),e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function so(e,r){var t=new V(3),n=-r[0],i=-r[1],o=-r[2],a=r[3],s=r[4],l=r[5],c=r[6],d=r[7],p=n*n+i*i+o*o+a*a;return p>0?(t[0]=(s*a+d*n+l*o-c*i)*2/p,t[1]=(l*a+d*i+c*n-s*o)*2/p,t[2]=(c*a+d*o+s*i-l*n)*2/p):(t[0]=(s*a+d*n+l*o-c*i)*2,t[1]=(l*a+d*i+c*n-s*o)*2,t[2]=(c*a+d*o+s*i-l*n)*2),vt(e,r,t),e}function lo(e,r){return e[0]=r[12],e[1]=r[13],e[2]=r[14],e}function xt(e,r){var t=r[0],n=r[1],i=r[2],o=r[4],a=r[5],s=r[6],l=r[8],c=r[9],d=r[10];return e[0]=Math.sqrt(t*t+n*n+i*i),e[1]=Math.sqrt(o*o+a*a+s*s),e[2]=Math.sqrt(l*l+c*c+d*d),e}function co(e,r){var t=new V(3);xt(t,r);var n=1/t[0],i=1/t[1],o=1/t[2],a=r[0]*n,s=r[1]*i,l=r[2]*o,c=r[4]*n,d=r[5]*i,p=r[6]*o,m=r[8]*n,f=r[9]*i,g=r[10]*o,v=a+d+g,u=0;return v>0?(u=Math.sqrt(v+1)*2,e[3]=.25*u,e[0]=(p-f)/u,e[1]=(m-l)/u,e[2]=(s-c)/u):a>d&&a>g?(u=Math.sqrt(1+a-d-g)*2,e[3]=(p-f)/u,e[0]=.25*u,e[1]=(s+c)/u,e[2]=(m+l)/u):d>g?(u=Math.sqrt(1+d-a-g)*2,e[3]=(m-l)/u,e[0]=(s+c)/u,e[1]=.25*u,e[2]=(p+f)/u):(u=Math.sqrt(1+g-a-d)*2,e[3]=(s-c)/u,e[0]=(m+l)/u,e[1]=(p+f)/u,e[2]=.25*u),e}function po(e,r,t,n){r[0]=n[12],r[1]=n[13],r[2]=n[14];var i=n[0],o=n[1],a=n[2],s=n[4],l=n[5],c=n[6],d=n[8],p=n[9],m=n[10];t[0]=Math.sqrt(i*i+o*o+a*a),t[1]=Math.sqrt(s*s+l*l+c*c),t[2]=Math.sqrt(d*d+p*p+m*m);var f=1/t[0],g=1/t[1],v=1/t[2],u=i*f,x=o*g,b=a*v,_=s*f,y=l*g,C=c*v,I=d*f,T=p*g,N=m*v,R=u+y+N,M=0;return R>0?(M=Math.sqrt(R+1)*2,e[3]=.25*M,e[0]=(C-T)/M,e[1]=(I-b)/M,e[2]=(x-_)/M):u>y&&u>N?(M=Math.sqrt(1+u-y-N)*2,e[3]=(C-T)/M,e[0]=.25*M,e[1]=(x+_)/M,e[2]=(I+b)/M):y>N?(M=Math.sqrt(1+y-u-N)*2,e[3]=(I-b)/M,e[0]=(x+_)/M,e[1]=.25*M,e[2]=(C+T)/M):(M=Math.sqrt(1+N-u-y)*2,e[3]=(x-_)/M,e[0]=(I+b)/M,e[1]=(C+T)/M,e[2]=.25*M),e}function ho(e,r,t,n){var i=r[0],o=r[1],a=r[2],s=r[3],l=i+i,c=o+o,d=a+a,p=i*l,m=i*c,f=i*d,g=o*c,v=o*d,u=a*d,x=s*l,b=s*c,_=s*d,y=n[0],C=n[1],I=n[2];return e[0]=(1-(g+u))*y,e[1]=(m+_)*y,e[2]=(f-b)*y,e[3]=0,e[4]=(m-_)*C,e[5]=(1-(p+u))*C,e[6]=(v+x)*C,e[7]=0,e[8]=(f+b)*I,e[9]=(v-x)*I,e[10]=(1-(p+g))*I,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function fo(e,r,t,n,i){var o=r[0],a=r[1],s=r[2],l=r[3],c=o+o,d=a+a,p=s+s,m=o*c,f=o*d,g=o*p,v=a*d,u=a*p,x=s*p,b=l*c,_=l*d,y=l*p,C=n[0],I=n[1],T=n[2],N=i[0],R=i[1],M=i[2],E=(1-(v+x))*C,P=(f+y)*C,F=(g-_)*C,A=(f-y)*I,W=(1-(m+x))*I,ce=(u+b)*I,pe=(g+_)*T,Yr=(u-b)*T,Jr=(1-(m+v))*T;return e[0]=E,e[1]=P,e[2]=F,e[3]=0,e[4]=A,e[5]=W,e[6]=ce,e[7]=0,e[8]=pe,e[9]=Yr,e[10]=Jr,e[11]=0,e[12]=t[0]+N-(E*N+A*R+pe*M),e[13]=t[1]+R-(P*N+W*R+Yr*M),e[14]=t[2]+M-(F*N+ce*R+Jr*M),e[15]=1,e}function mo(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=t+t,s=n+n,l=i+i,c=t*a,d=n*a,p=n*s,m=i*a,f=i*s,g=i*l,v=o*a,u=o*s,x=o*l;return e[0]=1-p-g,e[1]=d+x,e[2]=m-u,e[3]=0,e[4]=d-x,e[5]=1-c-g,e[6]=f+v,e[7]=0,e[8]=m+u,e[9]=f-v,e[10]=1-c-p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function uo(e,r,t,n,i,o,a){var s=1/(t-r),l=1/(i-n),c=1/(o-a);return e[0]=o*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o*2*l,e[6]=0,e[7]=0,e[8]=(t+r)*s,e[9]=(i+n)*l,e[10]=(a+o)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=a*o*2*c,e[15]=0,e}function bt(e,r,t,n,i){var o=1/Math.tan(r/2);if(e[0]=o/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var a=1/(n-i);e[10]=(i+n)*a,e[14]=2*i*n*a}else e[10]=-1,e[14]=-2*n;return e}var go=bt;function vo(e,r,t,n,i){var o=1/Math.tan(r/2);if(e[0]=o/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var a=1/(n-i);e[10]=i*a,e[14]=i*n*a}else e[10]=-1,e[14]=-n;return e}function xo(e,r,t,n){var i=Math.tan(r.upDegrees*Math.PI/180),o=Math.tan(r.downDegrees*Math.PI/180),a=Math.tan(r.leftDegrees*Math.PI/180),s=Math.tan(r.rightDegrees*Math.PI/180),l=2/(a+s),c=2/(i+o);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-((a-s)*l*.5),e[9]=(i-o)*c*.5,e[10]=n/(t-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*t/(t-n),e[15]=0,e}function yt(e,r,t,n,i,o,a){var s=1/(r-t),l=1/(n-i),c=1/(o-a);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(r+t)*s,e[13]=(i+n)*l,e[14]=(a+o)*c,e[15]=1,e}var bo=yt;function yo(e,r,t,n,i,o,a){var s=1/(r-t),l=1/(n-i),c=1/(o-a);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(r+t)*s,e[13]=(i+n)*l,e[14]=o*c,e[15]=1,e}function _o(e,r,t,n){var i,o,a,s,l,c,d,p,m,f,g=r[0],v=r[1],u=r[2],x=n[0],b=n[1],_=n[2],y=t[0],C=t[1],I=t[2];return Math.abs(g-y)<w&&Math.abs(v-C)<w&&Math.abs(u-I)<w?ut(e):(d=g-y,p=v-C,m=u-I,f=1/Math.sqrt(d*d+p*p+m*m),d*=f,p*=f,m*=f,i=b*m-_*p,o=_*d-x*m,a=x*p-b*d,f=Math.sqrt(i*i+o*o+a*a),f?(f=1/f,i*=f,o*=f,a*=f):(i=0,o=0,a=0),s=p*a-m*o,l=m*i-d*a,c=d*o-p*i,f=Math.sqrt(s*s+l*l+c*c),f?(f=1/f,s*=f,l*=f,c*=f):(s=0,l=0,c=0),e[0]=i,e[1]=s,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=p,e[7]=0,e[8]=a,e[9]=c,e[10]=m,e[11]=0,e[12]=-(i*g+o*v+a*u),e[13]=-(s*g+l*v+c*u),e[14]=-(d*g+p*v+m*u),e[15]=1,e)}function Io(e,r,t,n){var i=r[0],o=r[1],a=r[2],s=n[0],l=n[1],c=n[2],d=i-t[0],p=o-t[1],m=a-t[2],f=d*d+p*p+m*m;f>0&&(f=1/Math.sqrt(f),d*=f,p*=f,m*=f);var g=l*m-c*p,v=c*d-s*m,u=s*p-l*d;return f=g*g+v*v+u*u,f>0&&(f=1/Math.sqrt(f),g*=f,v*=f,u*=f),e[0]=g,e[1]=v,e[2]=u,e[3]=0,e[4]=p*u-m*v,e[5]=m*g-d*u,e[6]=d*v-p*g,e[7]=0,e[8]=d,e[9]=p,e[10]=m,e[11]=0,e[12]=i,e[13]=o,e[14]=a,e[15]=1,e}function Co(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function Mo(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])}function So(e,r,t){return e[0]=r[0]+t[0],e[1]=r[1]+t[1],e[2]=r[2]+t[2],e[3]=r[3]+t[3],e[4]=r[4]+t[4],e[5]=r[5]+t[5],e[6]=r[6]+t[6],e[7]=r[7]+t[7],e[8]=r[8]+t[8],e[9]=r[9]+t[9],e[10]=r[10]+t[10],e[11]=r[11]+t[11],e[12]=r[12]+t[12],e[13]=r[13]+t[13],e[14]=r[14]+t[14],e[15]=r[15]+t[15],e}function _t(e,r,t){return e[0]=r[0]-t[0],e[1]=r[1]-t[1],e[2]=r[2]-t[2],e[3]=r[3]-t[3],e[4]=r[4]-t[4],e[5]=r[5]-t[5],e[6]=r[6]-t[6],e[7]=r[7]-t[7],e[8]=r[8]-t[8],e[9]=r[9]-t[9],e[10]=r[10]-t[10],e[11]=r[11]-t[11],e[12]=r[12]-t[12],e[13]=r[13]-t[13],e[14]=r[14]-t[14],e[15]=r[15]-t[15],e}function Ao(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e[3]=r[3]*t,e[4]=r[4]*t,e[5]=r[5]*t,e[6]=r[6]*t,e[7]=r[7]*t,e[8]=r[8]*t,e[9]=r[9]*t,e[10]=r[10]*t,e[11]=r[11]*t,e[12]=r[12]*t,e[13]=r[13]*t,e[14]=r[14]*t,e[15]=r[15]*t,e}function wo(e,r,t,n){return e[0]=r[0]+t[0]*n,e[1]=r[1]+t[1]*n,e[2]=r[2]+t[2]*n,e[3]=r[3]+t[3]*n,e[4]=r[4]+t[4]*n,e[5]=r[5]+t[5]*n,e[6]=r[6]+t[6]*n,e[7]=r[7]+t[7]*n,e[8]=r[8]+t[8]*n,e[9]=r[9]+t[9]*n,e[10]=r[10]+t[10]*n,e[11]=r[11]+t[11]*n,e[12]=r[12]+t[12]*n,e[13]=r[13]+t[13]*n,e[14]=r[14]+t[14]*n,e[15]=r[15]+t[15]*n,e}function No(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]&&e[4]===r[4]&&e[5]===r[5]&&e[6]===r[6]&&e[7]===r[7]&&e[8]===r[8]&&e[9]===r[9]&&e[10]===r[10]&&e[11]===r[11]&&e[12]===r[12]&&e[13]===r[13]&&e[14]===r[14]&&e[15]===r[15]}function Lo(e,r){var t=e[0],n=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],d=e[8],p=e[9],m=e[10],f=e[11],g=e[12],v=e[13],u=e[14],x=e[15],b=r[0],_=r[1],y=r[2],C=r[3],I=r[4],T=r[5],N=r[6],R=r[7],M=r[8],E=r[9],P=r[10],F=r[11],A=r[12],W=r[13],ce=r[14],pe=r[15];return Math.abs(t-b)<=w*Math.max(1,Math.abs(t),Math.abs(b))&&Math.abs(n-_)<=w*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(i-y)<=w*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(o-C)<=w*Math.max(1,Math.abs(o),Math.abs(C))&&Math.abs(a-I)<=w*Math.max(1,Math.abs(a),Math.abs(I))&&Math.abs(s-T)<=w*Math.max(1,Math.abs(s),Math.abs(T))&&Math.abs(l-N)<=w*Math.max(1,Math.abs(l),Math.abs(N))&&Math.abs(c-R)<=w*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(d-M)<=w*Math.max(1,Math.abs(d),Math.abs(M))&&Math.abs(p-E)<=w*Math.max(1,Math.abs(p),Math.abs(E))&&Math.abs(m-P)<=w*Math.max(1,Math.abs(m),Math.abs(P))&&Math.abs(f-F)<=w*Math.max(1,Math.abs(f),Math.abs(F))&&Math.abs(g-A)<=w*Math.max(1,Math.abs(g),Math.abs(A))&&Math.abs(v-W)<=w*Math.max(1,Math.abs(v),Math.abs(W))&&Math.abs(u-ce)<=w*Math.max(1,Math.abs(u),Math.abs(ce))&&Math.abs(x-pe)<=w*Math.max(1,Math.abs(x),Math.abs(pe))}var Oo=gt,Ro=_t;var k={};de(k,{add:()=>Ta,calculateW:()=>_a,clone:()=>Na,conjugate:()=>Sa,copy:()=>Oa,create:()=>Or,dot:()=>Yt,equals:()=>Ga,exactEquals:()=>Va,exp:()=>Ut,fromEuler:()=>Aa,fromMat3:()=>Zt,fromValues:()=>La,getAngle:()=>va,getAxisAngle:()=>ga,identity:()=>ua,invert:()=>Ma,len:()=>za,length:()=>Jt,lerp:()=>Pa,ln:()=>Wt,mul:()=>Ea,multiply:()=>Dt,normalize:()=>Rr,pow:()=>Ia,random:()=>Ca,rotateX:()=>xa,rotateY:()=>ba,rotateZ:()=>ya,rotationTo:()=>Xa,scale:()=>Qt,set:()=>Ra,setAxes:()=>ka,setAxisAngle:()=>kt,slerp:()=>Ye,sqlerp:()=>Ba,sqrLen:()=>Fa,squaredLength:()=>Ht,str:()=>wa});var L={};de(L,{add:()=>zo,angle:()=>ta,bezier:()=>Jo,ceil:()=>Fo,clone:()=>To,copy:()=>Eo,create:()=>Ze,cross:()=>be,dist:()=>pa,distance:()=>At,div:()=>ca,divide:()=>St,dot:()=>xe,equals:()=>aa,exactEquals:()=>oa,floor:()=>Vo,forEach:()=>fa,fromValues:()=>Qe,hermite:()=>Yo,inverse:()=>Wo,len:()=>Nr,length:()=>It,lerp:()=>Zo,max:()=>Xo,min:()=>Go,mul:()=>la,multiply:()=>Mt,negate:()=>Uo,normalize:()=>wr,random:()=>Ho,rotateX:()=>$o,rotateY:()=>ea,rotateZ:()=>ra,round:()=>Bo,scale:()=>ko,scaleAndAdd:()=>Do,set:()=>Po,slerp:()=>Qo,sqrDist:()=>da,sqrLen:()=>ha,squaredDistance:()=>wt,squaredLength:()=>Nt,str:()=>ia,sub:()=>sa,subtract:()=>Ct,transformMat3:()=>qo,transformMat4:()=>jo,transformQuat:()=>Ko,zero:()=>na});function Ze(){var e=new V(3);return V!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function To(e){var r=new V(3);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r}function It(e){var r=e[0],t=e[1],n=e[2];return Math.sqrt(r*r+t*t+n*n)}function Qe(e,r,t){var n=new V(3);return n[0]=e,n[1]=r,n[2]=t,n}function Eo(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e}function Po(e,r,t,n){return e[0]=r,e[1]=t,e[2]=n,e}function zo(e,r,t){return e[0]=r[0]+t[0],e[1]=r[1]+t[1],e[2]=r[2]+t[2],e}function Ct(e,r,t){return e[0]=r[0]-t[0],e[1]=r[1]-t[1],e[2]=r[2]-t[2],e}function Mt(e,r,t){return e[0]=r[0]*t[0],e[1]=r[1]*t[1],e[2]=r[2]*t[2],e}function St(e,r,t){return e[0]=r[0]/t[0],e[1]=r[1]/t[1],e[2]=r[2]/t[2],e}function Fo(e,r){return e[0]=Math.ceil(r[0]),e[1]=Math.ceil(r[1]),e[2]=Math.ceil(r[2]),e}function Vo(e,r){return e[0]=Math.floor(r[0]),e[1]=Math.floor(r[1]),e[2]=Math.floor(r[2]),e}function Go(e,r,t){return e[0]=Math.min(r[0],t[0]),e[1]=Math.min(r[1],t[1]),e[2]=Math.min(r[2],t[2]),e}function Xo(e,r,t){return e[0]=Math.max(r[0],t[0]),e[1]=Math.max(r[1],t[1]),e[2]=Math.max(r[2],t[2]),e}function Bo(e,r){return e[0]=ae(r[0]),e[1]=ae(r[1]),e[2]=ae(r[2]),e}function ko(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e}function Do(e,r,t,n){return e[0]=r[0]+t[0]*n,e[1]=r[1]+t[1]*n,e[2]=r[2]+t[2]*n,e}function At(e,r){var t=r[0]-e[0],n=r[1]-e[1],i=r[2]-e[2];return Math.sqrt(t*t+n*n+i*i)}function wt(e,r){var t=r[0]-e[0],n=r[1]-e[1],i=r[2]-e[2];return t*t+n*n+i*i}function Nt(e){var r=e[0],t=e[1],n=e[2];return r*r+t*t+n*n}function Uo(e,r){return e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e}function Wo(e,r){return e[0]=1/r[0],e[1]=1/r[1],e[2]=1/r[2],e}function wr(e,r){var t=r[0],n=r[1],i=r[2],o=t*t+n*n+i*i;return o>0&&(o=1/Math.sqrt(o)),e[0]=r[0]*o,e[1]=r[1]*o,e[2]=r[2]*o,e}function xe(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]}function be(e,r,t){var n=r[0],i=r[1],o=r[2],a=t[0],s=t[1],l=t[2];return e[0]=i*l-o*s,e[1]=o*a-n*l,e[2]=n*s-i*a,e}function Zo(e,r,t,n){var i=r[0],o=r[1],a=r[2];return e[0]=i+n*(t[0]-i),e[1]=o+n*(t[1]-o),e[2]=a+n*(t[2]-a),e}function Qo(e,r,t,n){var i=Math.acos(Math.min(Math.max(xe(r,t),-1),1)),o=Math.sin(i),a=Math.sin((1-n)*i)/o,s=Math.sin(n*i)/o;return e[0]=a*r[0]+s*t[0],e[1]=a*r[1]+s*t[1],e[2]=a*r[2]+s*t[2],e}function Yo(e,r,t,n,i,o){var a=o*o,s=a*(2*o-3)+1,l=a*(o-2)+o,c=a*(o-1),d=a*(3-2*o);return e[0]=r[0]*s+t[0]*l+n[0]*c+i[0]*d,e[1]=r[1]*s+t[1]*l+n[1]*c+i[1]*d,e[2]=r[2]*s+t[2]*l+n[2]*c+i[2]*d,e}function Jo(e,r,t,n,i,o){var a=1-o,s=a*a,l=o*o,c=s*a,d=3*o*s,p=3*l*a,m=l*o;return e[0]=r[0]*c+t[0]*d+n[0]*p+i[0]*m,e[1]=r[1]*c+t[1]*d+n[1]*p+i[1]*m,e[2]=r[2]*c+t[2]*d+n[2]*p+i[2]*m,e}function Ho(e,r){r=r===void 0?1:r;var t=H()*2*Math.PI,n=H()*2-1,i=Math.sqrt(1-n*n)*r;return e[0]=Math.cos(t)*i,e[1]=Math.sin(t)*i,e[2]=n*r,e}function jo(e,r,t){var n=r[0],i=r[1],o=r[2],a=t[3]*n+t[7]*i+t[11]*o+t[15];return a=a||1,e[0]=(t[0]*n+t[4]*i+t[8]*o+t[12])/a,e[1]=(t[1]*n+t[5]*i+t[9]*o+t[13])/a,e[2]=(t[2]*n+t[6]*i+t[10]*o+t[14])/a,e}function qo(e,r,t){var n=r[0],i=r[1],o=r[2];return e[0]=n*t[0]+i*t[3]+o*t[6],e[1]=n*t[1]+i*t[4]+o*t[7],e[2]=n*t[2]+i*t[5]+o*t[8],e}function Ko(e,r,t){var n=t[0],i=t[1],o=t[2],a=t[3],s=r[0],l=r[1],c=r[2],d=i*c-o*l,p=o*s-n*c,m=n*l-i*s;return d=d+d,p=p+p,m=m+m,e[0]=s+a*d+i*m-o*p,e[1]=l+a*p+o*d-n*m,e[2]=c+a*m+n*p-i*d,e}function $o(e,r,t,n){var i=[],o=[];return i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2],o[0]=i[0],o[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),o[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=o[0]+t[0],e[1]=o[1]+t[1],e[2]=o[2]+t[2],e}function ea(e,r,t,n){var i=[],o=[];return i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2],o[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),o[1]=i[1],o[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=o[0]+t[0],e[1]=o[1]+t[1],e[2]=o[2]+t[2],e}function ra(e,r,t,n){var i=[],o=[];return i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2],o[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),o[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),o[2]=i[2],e[0]=o[0]+t[0],e[1]=o[1]+t[1],e[2]=o[2]+t[2],e}function ta(e,r){var t=e[0],n=e[1],i=e[2],o=r[0],a=r[1],s=r[2],l=Math.sqrt((t*t+n*n+i*i)*(o*o+a*a+s*s)),c=l&&xe(e,r)/l;return Math.acos(Math.min(Math.max(c,-1),1))}function na(e){return e[0]=0,e[1]=0,e[2]=0,e}function ia(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function oa(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]}function aa(e,r){var t=e[0],n=e[1],i=e[2],o=r[0],a=r[1],s=r[2];return Math.abs(t-o)<=w*Math.max(1,Math.abs(t),Math.abs(o))&&Math.abs(n-a)<=w*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-s)<=w*Math.max(1,Math.abs(i),Math.abs(s))}var sa=Ct,la=Mt,ca=St,pa=At,da=wt,Nr=It,ha=Nt,fa=function(){var e=Ze();return function(r,t,n,i,o,a){var s,l;for(t||(t=3),n||(n=0),i?l=Math.min(i*t+n,r.length):l=r.length,s=n;s<l;s+=t)e[0]=r[s],e[1]=r[s+1],e[2]=r[s+2],o(e,e,a),r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2];return r}}();function ma(){var e=new V(4);return V!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Lt(e){var r=new V(4);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r}function Ot(e,r,t,n){var i=new V(4);return i[0]=e,i[1]=r,i[2]=t,i[3]=n,i}function Rt(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e}function Tt(e,r,t,n,i){return e[0]=r,e[1]=t,e[2]=n,e[3]=i,e}function Et(e,r,t){return e[0]=r[0]+t[0],e[1]=r[1]+t[1],e[2]=r[2]+t[2],e[3]=r[3]+t[3],e}function Pt(e,r,t){return e[0]=r[0]*t,e[1]=r[1]*t,e[2]=r[2]*t,e[3]=r[3]*t,e}function zt(e){var r=e[0],t=e[1],n=e[2],i=e[3];return Math.sqrt(r*r+t*t+n*n+i*i)}function Ft(e){var r=e[0],t=e[1],n=e[2],i=e[3];return r*r+t*t+n*n+i*i}function Vt(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=t*t+n*n+i*i+o*o;return a>0&&(a=1/Math.sqrt(a)),e[0]=t*a,e[1]=n*a,e[2]=i*a,e[3]=o*a,e}function Lr(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]}function Gt(e,r,t,n){var i=r[0],o=r[1],a=r[2],s=r[3];return e[0]=i+n*(t[0]-i),e[1]=o+n*(t[1]-o),e[2]=a+n*(t[2]-a),e[3]=s+n*(t[3]-s),e}function Xt(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]}var Bs=function(){var e=ma();return function(r,t,n,i,o,a){var s,l;for(t||(t=4),n||(n=0),i?l=Math.min(i*t+n,r.length):l=r.length,s=n;s<l;s+=t)e[0]=r[s],e[1]=r[s+1],e[2]=r[s+2],e[3]=r[s+3],o(e,e,a),r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2],r[s+3]=e[3];return r}}();function Or(){var e=new V(4);return V!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function ua(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function kt(e,r,t){t=t*.5;var n=Math.sin(t);return e[0]=n*r[0],e[1]=n*r[1],e[2]=n*r[2],e[3]=Math.cos(t),e}function ga(e,r){var t=Math.acos(r[3])*2,n=Math.sin(t/2);return n>w?(e[0]=r[0]/n,e[1]=r[1]/n,e[2]=r[2]/n):(e[0]=1,e[1]=0,e[2]=0),t}function va(e,r){var t=Yt(e,r);return Math.acos(2*t*t-1)}function Dt(e,r,t){var n=r[0],i=r[1],o=r[2],a=r[3],s=t[0],l=t[1],c=t[2],d=t[3];return e[0]=n*d+a*s+i*c-o*l,e[1]=i*d+a*l+o*s-n*c,e[2]=o*d+a*c+n*l-i*s,e[3]=a*d-n*s-i*l-o*c,e}function xa(e,r,t){t*=.5;var n=r[0],i=r[1],o=r[2],a=r[3],s=Math.sin(t),l=Math.cos(t);return e[0]=n*l+a*s,e[1]=i*l+o*s,e[2]=o*l-i*s,e[3]=a*l-n*s,e}function ba(e,r,t){t*=.5;var n=r[0],i=r[1],o=r[2],a=r[3],s=Math.sin(t),l=Math.cos(t);return e[0]=n*l-o*s,e[1]=i*l+a*s,e[2]=o*l+n*s,e[3]=a*l-i*s,e}function ya(e,r,t){t*=.5;var n=r[0],i=r[1],o=r[2],a=r[3],s=Math.sin(t),l=Math.cos(t);return e[0]=n*l+i*s,e[1]=i*l-n*s,e[2]=o*l+a*s,e[3]=a*l-o*s,e}function _a(e,r){var t=r[0],n=r[1],i=r[2];return e[0]=t,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-t*t-n*n-i*i)),e}function Ut(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=Math.sqrt(t*t+n*n+i*i),s=Math.exp(o),l=a>0?s*Math.sin(a)/a:0;return e[0]=t*l,e[1]=n*l,e[2]=i*l,e[3]=s*Math.cos(a),e}function Wt(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=Math.sqrt(t*t+n*n+i*i),s=a>0?Math.atan2(a,o)/a:0;return e[0]=t*s,e[1]=n*s,e[2]=i*s,e[3]=.5*Math.log(t*t+n*n+i*i+o*o),e}function Ia(e,r,t){return Wt(e,r),Qt(e,e,t),Ut(e,e),e}function Ye(e,r,t,n){var i=r[0],o=r[1],a=r[2],s=r[3],l=t[0],c=t[1],d=t[2],p=t[3],m,f,g,v,u;return f=i*l+o*c+a*d+s*p,f<0&&(f=-f,l=-l,c=-c,d=-d,p=-p),1-f>w?(m=Math.acos(f),g=Math.sin(m),v=Math.sin((1-n)*m)/g,u=Math.sin(n*m)/g):(v=1-n,u=n),e[0]=v*i+u*l,e[1]=v*o+u*c,e[2]=v*a+u*d,e[3]=v*s+u*p,e}function Ca(e){var r=H(),t=H(),n=H(),i=Math.sqrt(1-r),o=Math.sqrt(r);return e[0]=i*Math.sin(2*Math.PI*t),e[1]=i*Math.cos(2*Math.PI*t),e[2]=o*Math.sin(2*Math.PI*n),e[3]=o*Math.cos(2*Math.PI*n),e}function Ma(e,r){var t=r[0],n=r[1],i=r[2],o=r[3],a=t*t+n*n+i*i+o*o,s=a?1/a:0;return e[0]=-t*s,e[1]=-n*s,e[2]=-i*s,e[3]=o*s,e}function Sa(e,r){return e[0]=-r[0],e[1]=-r[1],e[2]=-r[2],e[3]=r[3],e}function Zt(e,r){var t=r[0]+r[4]+r[8],n;if(t>0)n=Math.sqrt(t+1),e[3]=.5*n,n=.5/n,e[0]=(r[5]-r[7])*n,e[1]=(r[6]-r[2])*n,e[2]=(r[1]-r[3])*n;else{var i=0;r[4]>r[0]&&(i=1),r[8]>r[i*3+i]&&(i=2);var o=(i+1)%3,a=(i+2)%3;n=Math.sqrt(r[i*3+i]-r[o*3+o]-r[a*3+a]+1),e[i]=.5*n,n=.5/n,e[3]=(r[o*3+a]-r[a*3+o])*n,e[o]=(r[o*3+i]+r[i*3+o])*n,e[a]=(r[a*3+i]+r[i*3+a])*n}return e}function Aa(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:Sr,o=Math.PI/360;r*=o,n*=o,t*=o;var a=Math.sin(r),s=Math.cos(r),l=Math.sin(t),c=Math.cos(t),d=Math.sin(n),p=Math.cos(n);switch(i){case"xyz":e[0]=a*c*p+s*l*d,e[1]=s*l*p-a*c*d,e[2]=s*c*d+a*l*p,e[3]=s*c*p-a*l*d;break;case"xzy":e[0]=a*c*p-s*l*d,e[1]=s*l*p-a*c*d,e[2]=s*c*d+a*l*p,e[3]=s*c*p+a*l*d;break;case"yxz":e[0]=a*c*p+s*l*d,e[1]=s*l*p-a*c*d,e[2]=s*c*d-a*l*p,e[3]=s*c*p+a*l*d;break;case"yzx":e[0]=a*c*p+s*l*d,e[1]=s*l*p+a*c*d,e[2]=s*c*d-a*l*p,e[3]=s*c*p-a*l*d;break;case"zxy":e[0]=a*c*p-s*l*d,e[1]=s*l*p+a*c*d,e[2]=s*c*d+a*l*p,e[3]=s*c*p-a*l*d;break;case"zyx":e[0]=a*c*p-s*l*d,e[1]=s*l*p+a*c*d,e[2]=s*c*d-a*l*p,e[3]=s*c*p+a*l*d;break;default:throw new Error("Unknown angle order "+i)}return e}function wa(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var Na=Lt,La=Ot,Oa=Rt,Ra=Tt,Ta=Et,Ea=Dt,Qt=Pt,Yt=Lr,Pa=Gt,Jt=zt,za=Jt,Ht=Ft,Fa=Ht,Rr=Vt,Va=Xt;function Ga(e,r){return Math.abs(Lr(e,r))>=1-w}var Xa=function(){var e=Ze(),r=Qe(1,0,0),t=Qe(0,1,0);return function(n,i,o){var a=xe(i,o);return a<-.999999?(be(e,r,i),Nr(e)<1e-6&&be(e,t,i),wr(e,e),kt(n,e,Math.PI),n):a>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(be(e,i,o),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+a,Rr(n,n))}}(),Ba=function(){var e=Or(),r=Or();return function(t,n,i,o,a,s){return Ye(e,n,a,s),Ye(r,i,o,s),Ye(t,e,r,2*s*(1-s)),t}}(),ka=function(){var e=Ar();return function(r,t,n,i){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-t[0],e[5]=-t[1],e[8]=-t[2],Rr(r,Zt(r,e))}}();var Je=j.ARRAY_TYPE;function Tr(){let e=new Je(3);return e[0]=1,e[1]=1,e[2]=1,e}function X(e,r,t){let n=new Je(3);return n[0]=e,n[1]=r,n[2]=t,n}function He(){let e=new Je(4);return e[0]=1,e[1]=1,e[2]=1,e[3]=1,e}function ye(e,r,t,n){let i=new Je(4);return i[0]=e,i[1]=r,i[2]=t,i[3]=n,i}var jt=X(1,0,0),Er=X(0,1,0),qt=X(0,0,1),je=class e{position=X(0,0,5);target=L.create();fov=45;fovZ=1;forward=L.clone(qt);right=L.clone(jt);up=L.clone(Er);cameraRotationMatrix=se.create();cameraRotationQuat=k.create();static tempMat4=ve.create();static tempQuat=k.create();static tempVec3=L.create();setFov(r){this.fov=r,this.fovZ=2/Math.tan(r*Math.PI/180)}getCameraRotation(){return this.cameraRotationMatrix}orbitPositionAroundTarget(r,t){let n=e.tempVec3;L.sub(n,this.position,this.target),L.rotateY(n,n,this.target,r),k.setAxisAngle(e.tempQuat,this.right,t),L.transformQuat(n,n,e.tempQuat),L.add(this.position,this.target,n),this.updateCameraMatrix()}orbitTargetAroundPosition(r,t){let n=e.tempVec3;L.sub(n,this.target,this.position),L.rotateY(n,n,this.position,r),k.setAxisAngle(e.tempQuat,this.right,t),L.transformQuat(n,n,e.tempQuat),L.add(this.target,this.position,n),this.updateCameraMatrix()}dolly(r){let t=e.tempVec3;L.sub(t,this.position,this.target);let n=L.len(t);L.scale(t,t,1/n);let i=Math.max(1,Math.min(100,n+r));L.scaleAndAdd(this.position,this.target,t,i)}panRelative(r,t){let n=e.tempVec3;L.scale(n,this.right,r),L.scaleAndAdd(n,n,this.up,t),L.add(this.position,this.position,n),L.add(this.target,this.target,n)}updateCameraMatrix(){ve.targetTo(e.tempMat4,this.position,this.target,Er),se.fromMat4(this.cameraRotationMatrix,e.tempMat4),k.fromMat3(this.cameraRotationQuat,this.cameraRotationMatrix),L.transformMat3(this.up,Er,this.cameraRotationMatrix),L.transformMat3(this.right,jt,this.cameraRotationMatrix),L.transformMat3(this.forward,qt,this.cameraRotationMatrix)}};var Ua={renderScale:1,maxMarchingStep:512,enableShadows:!0,enableShowMarching:!1,enableDepth:!1,enableNormals:!1,enableToLightNormals:!1,enableSoftShadows:!0,epsilon:1e-4,shadowSharpness:128,pixelated:!1,cameraFov:45},Pr={options:Ua},z=new Kt.default({viewports:[Pr],maximiseViewport:-1,sceneTree:{nodes:{}},reparentModal:{show:!1},rawSceneModal:{show:!1},exampleModal:{show:!1},currentShader:"return 100.0;"}),zr=[new je];var Fr=0,Vr=1,$t=2;function _e(){return crypto.randomUUID()}function en(e,r){let t={...e.nodes,[r.id]:r};return{...e,nodes:t}}function rn(e){let r=e.nodes[e.rootNodeId];if(!r)return[];let t=new Array(Object.keys(e.nodes).length);return ln(r,e.nodes,0,0,t),t}function qe(e){return{colour:He(),radius:10,...e}}function tn(e,r){return{name:e,type:"none",id:_e(),position:L.create(),rotation:L.create(),childrenIds:[],selfOperation:$e,childOperation:er,shape:Ke,light:qe({}),...r}}function Ie(e,r,t,n){return{name:e,type:"light",id:_e(),position:t??L.create(),rotation:n??L.create(),childrenIds:[],selfOperation:$e,childOperation:er,shape:Ke,light:r!=null?qe(r):void 0}}function te(e,r,t,n){return{name:e,type:"shape",id:_e(),position:t??L.create(),rotation:n??L.create(),shape:r!=null?nn(r):Ke,light:qe({}),childrenIds:[],selfOperation:$e,childOperation:er}}function le(e,r){return{name:e,type:"operation",id:_e(),position:L.create(),rotation:L.create(),shape:nn({}),light:qe({}),childrenIds:[],selfOperation:$e,childOperation:Wa({type:r})}}var Ke={maxSize:0,type:"none",params:{},diffuseColour:[.7,.3,.2],specularColour:[1,.8,.9],lightingModel:"lambert",shininess:10},$e={params:{},type:"none"},er={params:{},type:"none"};function nn(e){return{...Ke,...e}}function Wa(e){return{...er,...e}}function U(e,r){e.childrenIds.push(r.id),r.parentId=e.id}function on(e,r,t){r={...r,childrenIds:[...r.childrenIds,t.id]},t={...t,parentId:r.id};let n={...e.nodes,[r.id]:r,[t.id]:t};return{...e,nodes:n}}function an(e,r){if(r.parentId===void 0)return e;let t=e.nodes[r.parentId],n=t.childrenIds.findIndex(i=>i===r.id);if(n>=0){let i=[...t.childrenIds];i.splice(n,1),t={...t,childrenIds:i};let o={...e.nodes,[t.id]:t};return delete o[r.id],{...e,nodes:o}}return e}function sn(e,r,t){if(t.parentId==null)return e;let n=e.nodes[t.parentId],i=n.childrenIds.findIndex(a=>a===t.id);if(i>=0){let a=[...n.childrenIds];a.splice(i,1),n={...n,childrenIds:a}}r.childrenIds.includes(t.id)||(r={...r,childrenIds:[...r.childrenIds,t.id]}),t={...t,parentId:r.id};let o={...e.nodes,[n.id]:n,[r.id]:r,[t.id]:t};return{...e,nodes:o}}function ln(e,r,t,n,i){if(i[n]={node:e,depth:t},e.childrenIds!=null)for(let o of e.childrenIds){let a=r[o];a&&(n=ln(a,r,t+1,n+1,i))}return n}function Gr(e,r){return t=>{let n=t.viewports[e]??Pr,i={...n,options:{...n.options,...r}},o=[...t.viewports];return o[e]=i,{viewports:o}}}function cn(e=-1){return()=>({maximiseViewport:e})}function rr(e){return r=>({reparentModal:{...r.reparentModal,...e}})}function tr(e){return r=>({rawSceneModal:{...r.rawSceneModal,...e}})}function nr(e){return r=>({exampleModal:{...r.exampleModal,...e}})}function pn(e){return r=>({sceneTree:en(r.sceneTree,e)})}function Z(e){return()=>({sceneTree:e})}function dn(e){return()=>({currentShader:e})}function hn(e){return r=>{let t;if(e){for(let n of Object.values(r.sceneTree.nodes))if(n.childrenIds.includes(e)){t=n.id;break}}return{selectedNodeId:e,selectedParentNodeId:t}}}var fn=`#version 300 es

in vec2 aPosition;
out vec2 oPosition;

uniform float uAspectRatio;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);

    oPosition = aPosition * vec2(uAspectRatio, 1.0);
}`;var mn=`float sdfSphere(vec3 point, float radius)
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
}`;var un=`vec4 rayMarch(vec3 rayOrigin, vec3 rayDirection)
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
`;var gn=`#version 300 es

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
`;var Ha=/#include\s+\<([^\>]+)\>/gmi,Ce=class e{program;constructor(r){this.program=r}static assembleShader(r,t){let n=t.matchAll(Ha);for(let i of n){let o=r[i[1]];o===void 0&&(console.error(`Unknown shader include ${i[1]}`),o=""),t=t.replace(i[0],o)}return t}static create(r,t,n,i){let o=null,a=null,s=null;function l(){o!=null&&(r.detachShader(o,a),r.detachShader(o,s)),a!=null&&r.deleteShader(a),s!=null&&r.deleteShader(s)}if(a=r.createShader(r.VERTEX_SHADER),r.shaderSource(a,this.assembleShader(t,n)),r.compileShader(a),!r.getShaderParameter(a,r.COMPILE_STATUS)){let d=r.getShaderInfoLog(a);throw console.error("Vertex shader compile error",d),l(),new Error(`Vertex shader compile error ${d}`)}s=r.createShader(r.FRAGMENT_SHADER);let c=this.assembleShader(t,i);{let d=c.split(`
`),p=new Array(d.length);for(let m=0;m<d.length;m++)p[m]=m+1+": "+d[m];console.info("Assembled shader",p.join(`
`))}if(r.shaderSource(s,c),r.compileShader(s),!r.getShaderParameter(s,r.COMPILE_STATUS)){let d=r.getShaderInfoLog(s);throw console.error("Fragment shader compile error",d),l(),new Error(`Fragment shader compile error ${d}`)}if(o=r.createProgram(),r.attachShader(o,a),r.attachShader(o,s),r.linkProgram(o),l(),!r.getProgramParameter(o,r.LINK_STATUS)){r.useProgram(null),r.deleteProgram(o);let d=r.getProgramInfoLog(o);throw console.error("Shader link error",d),new Error(`Shader link error ${d}`)}return new e(o)}};function ja(){let e=document.createElement("canvas");e.width=256,e.height=256;let r=e.getContext("2d");r.fillRect(0,0,255,255);let t=new Uint8ClampedArray(256*4);for(let n=0;n<256;n++){for(let o=0;o<256*4;o++)t[o]=Math.floor(Math.random()*256);let i=new ImageData(t,256,1);r.putImageData(i,0,n)}return r}var vn=ja();var qa=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Al=k.create();function Ka(e,r){return e===r.INVALID_ENUM?"Invalid enum":e===r.INVALID_VALUE?"Invalid value":e===r.INVALID_OPERATION?"Invalid operation":e===r.INVALID_FRAMEBUFFER_OPERATION?"Invalid framebuffer operation":e===r.OUT_OF_MEMORY?"Out of memory":e===r.CONTEXT_LOST_WEBGL?"Context lost WebGL":e===r.NO_ERROR?"No error":`Unknown error ${e}`}var $a=1,es=2,rs=4,ts=8,ns=16;function Me(e,r){return e?r:0}var Se=class e{gl;shader;positionBuffer;uMaterials;uParameters;uLights;uNumLights;uCameraPosition;uCameraFov;uCameraMatrix;uAspectRatio;uMaxMarchingSteps;uEpsilon;uFlags;uShadowSharpness;uNoise;noiseTexture;maxMarchingSteps=255;epsilon=.001;shadowSharpness=128;enableShadows=!0;enableShowMarches=!1;enableDepth=!1;enableNormals=!1;enableToLightNormals=!1;enableSoftShadows=!0;canvasScale=1;prevMaterials;prevLights;prevParameters;prevShaderText;constructor(r,t,n,i,o,a,s,l,c,d,p,m,f,g,v,u,x,b){this.gl=r,this.shader=t,this.prevShaderText=n,this.positionBuffer=i,this.uMaterials=s,this.uParameters=l,this.uLights=o,this.uNumLights=a,this.uCameraPosition=c,this.uCameraFov=d,this.uCameraMatrix=p,this.uAspectRatio=m,this.uMaxMarchingSteps=f,this.uEpsilon=g,this.uFlags=v,this.uShadowSharpness=u,this.uNoise=x,this.noiseTexture=b}destroy(){this.gl.deleteProgram(this.shader.program)}setupCanvas(){this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)}resizeCanvas=(r,t)=>{let n=r*this.canvasScale,i=t*this.canvasScale;this.gl.canvas.width=n,this.gl.canvas.height=i,this.gl.viewport(0,0,n,i);let o=n/i;this.gl.uniform1f(this.uAspectRatio,o)};render(r,t){this.gl.useProgram(this.shader.program),this.prevLights!==r.getLights()&&(console.info("Rendering new lights"),this.gl.uniformMatrix2x4fv(this.uLights,!1,r.getLightDataArray()),this.gl.uniform1i(this.uNumLights,r.getNumLights()),this.prevLights=r.getLights()),this.prevMaterials!==r.getMaterials()&&(this.prevMaterials=r.getMaterials(),console.info("Rendering new materials",this.prevMaterials),this.gl.uniformMatrix2x4fv(this.uMaterials,!1,r.getMaterialDataArray())),this.prevParameters!==r.getParameters()&&(this.prevParameters=r.getParameters(),console.info("Rendering new parameters",this.prevParameters),this.gl.uniform1fv(this.uParameters,this.prevParameters));let n=0;n|=Me(this.enableShadows,$a),n|=Me(this.enableDepth,rs),n|=Me(this.enableNormals,ts),n|=Me(this.enableShowMarches,es),n|=Me(this.enableToLightNormals,ns),this.gl.uniform1i(this.uFlags,n),this.gl.uniform1f(this.uShadowSharpness,this.shadowSharpness),this.gl.uniform1f(this.uEpsilon,this.epsilon),this.gl.uniform1i(this.uMaxMarchingSteps,this.maxMarchingSteps),this.gl.uniform3fv(this.uCameraPosition,t.position),this.gl.uniform1f(this.uCameraFov,t.fovZ),this.gl.uniformMatrix3fv(this.uCameraMatrix,!1,t.getCameraRotation()),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noiseTexture),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}static create(r,t){let n=r.getContext("webgl2");if(n==null)throw new Error("Unable to get webgl2 context");let i=n.createBuffer();if(i==null)throw new Error("Unable to create position buffer");n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(qa),n.STATIC_DRAW);let o={"assembled-shader":t,"sdf-functions":mn,"raymarch-functions":un},a=Ce.create(n,o,fn,gn);n.useProgram(a.program);let s=this.getAttribute(n,a,"aPosition");n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let l=this.getUniform(n,a,"uCameraMatrix"),c=this.getUniform(n,a,"uCameraPosition"),d=this.getUniform(n,a,"uCameraFov"),p=this.getUniform(n,a,"uAspectRatio"),m=this.getUniform(n,a,"uMaterials"),f=this.getUniform(n,a,"uLights"),g=this.getUniform(n,a,"uNumLights"),v=this.getUniform(n,a,"uParams"),u=this.getUniform(n,a,"uMaxMarchingSteps"),x=this.getUniform(n,a,"uEpsilon"),b=this.getUniform(n,a,"uFlags"),_=this.getUniform(n,a,"uShadowSharpness"),y=this.getUniform(n,a,"uNoise"),C=n.createTexture(),I=vn;return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,C),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,256,256,0,n.RGBA,n.UNSIGNED_BYTE,I.canvas),this.checkError(n),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.uniform1i(y,0),this.checkError(n),new e(n,a,t,i,f,g,m,v,c,d,l,p,u,x,b,_,y,C)}static checkError(r){let t=r.getError();t!=r.NO_ERROR&&console.error(`GL Error: ${Ka(t,r)}`)}static getAttribute(r,t,n){let i=r.getAttribLocation(t.program,n);if(i<0)throw new Error(`Unable to find attribute ${n}`);return i}static getUniform(r,t,n){let i=r.getUniformLocation(t.program,n);return i==null,i}};var xn,Y,Xr,bn;var wn=[],B=O,yn=B.__b,_n=B.__r,In=B.diffed,Cn=B.__c,Mn=B.unmount,Sn=B.__;function is(){for(var e;e=wn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ir),e.__H.__h.forEach(Br),e.__H.__h=[]}catch(r){e.__H.__h=[],B.__e(r,e.__v)}}B.__b=function(e){Y=null,yn&&yn(e)},B.__=function(e,r){e&&r.__k&&r.__k.__m&&(e.__m=r.__k.__m),Sn&&Sn(e,r)},B.__r=function(e){_n&&_n(e),xn=0;var r=(Y=e.__c).__H;r&&(Xr===Y?(r.__h=[],Y.__h=[],r.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(r.__h.forEach(ir),r.__h.forEach(Br),r.__h=[],xn=0)),Xr=Y},B.diffed=function(e){In&&In(e);var r=e.__c;r&&r.__H&&(r.__H.__h.length&&(wn.push(r)!==1&&bn===B.requestAnimationFrame||((bn=B.requestAnimationFrame)||os)(is)),r.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Xr=Y=null},B.__c=function(e,r){r.some(function(t){try{t.__h.forEach(ir),t.__h=t.__h.filter(function(n){return!n.__||Br(n)})}catch(n){r.some(function(i){i.__h&&(i.__h=[])}),r=[],B.__e(n,t.__v)}}),Cn&&Cn(e,r)},B.unmount=function(e){Mn&&Mn(e);var r,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{ir(n)}catch(i){r=i}}),t.__H=void 0,r&&B.__e(r,t.__v))};var An=typeof requestAnimationFrame=="function";function os(e){var r,t=function(){clearTimeout(n),An&&cancelAnimationFrame(r),setTimeout(e)},n=setTimeout(t,35);An&&(r=requestAnimationFrame(t))}function ir(e){var r=Y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),Y=r}function Br(e){var r=Y;e.__c=e.__(),Y=r}function ss(e,r){for(var t in r)e[t]=r[t];return e}function Nn(e,r){for(var t in e)if(t!=="__source"&&!(t in r))return!0;for(var n in r)if(n!=="__source"&&e[n]!==r[n])return!0;return!1}function Ln(e,r){this.props=e,this.context=r}(Ln.prototype=new S).isPureReactComponent=!0,Ln.prototype.shouldComponentUpdate=function(e,r){return Nn(this.props,e)||Nn(this.state,r)};var On=O.__b;O.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),On&&On(e)};var Zl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var ls=O.__e;O.__e=function(e,r,t,n){if(e.then){for(var i,o=r;o=o.__;)if((i=o.__c)&&i.__c)return r.__e==null&&(r.__e=t.__e,r.__k=t.__k),i.__c(e,r)}ls(e,r,t,n)};var Rn=O.unmount;function Vn(e,r,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=ss({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=r),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Vn(n,r,t)})),e}function Gn(e,r,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Gn(n,r,t)}),e.__c&&e.__c.__P===r&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function kr(){this.__u=0,this.o=null,this.__b=null}function Xn(e){var r=e.__.__c;return r&&r.__a&&r.__a(e)}function or(){this.i=null,this.l=null}O.unmount=function(e){var r=e.__c;r&&r.__R&&r.__R(),r&&32&e.__u&&(e.type=null),Rn&&Rn(e)},(kr.prototype=new S).__c=function(e,r){var t=r.__c,n=this;n.o==null&&(n.o=[]),n.o.push(t);var i=Xn(n.__v),o=!1,a=function(){o||(o=!0,t.__R=null,i?i(s):s())};t.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=Gn(l,l.__c.__P,l.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.o.pop();)c.forceUpdate()}};n.__u++||32&r.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},kr.prototype.componentWillUnmount=function(){this.o=[]},kr.prototype.render=function(e,r){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Vn(this.__b,t,n.__O=n.__P)}this.__b=null}var i=r.__a&&h(G,null,e.fallback);return i&&(i.__u&=-33),[h(G,null,r.__a?null:e.children),i]};var Tn=function(e,r,t){if(++t[1]===t[0]&&e.l.delete(r),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(t=e.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.i=t=t[2]}};function cs(e){return this.getChildContext=function(){return e.context},e.children}function ps(e){var r=this,t=e.h;if(r.componentWillUnmount=function(){ue(null,r.v),r.v=null,r.h=null},r.h&&r.h!==t&&r.componentWillUnmount(),!r.v){for(var n=r.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;r.h=t,r.v={nodeType:1,parentNode:t,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(i,o){this.childNodes.push(i),r.h.insertBefore(i,o)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),r.h.removeChild(i)}}}ue(h(cs,{context:r.context},e.__v),r.v)}function ar(e,r){var t=h(ps,{__v:e,h:r});return t.containerInfo=r,t}(or.prototype=new S).__a=function(e){var r=this,t=Xn(r.__v),n=r.l.get(e);return n[0]++,function(i){var o=function(){r.props.revealOrder?(n.push(i),Tn(r,e,n)):i()};t?t(o):o()}},or.prototype.render=function(e){this.i=null,this.l=new Map;var r=me(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&r.reverse();for(var t=r.length;t--;)this.l.set(r[t],this.i=[1,0,this.i]);return e.children},or.prototype.componentDidUpdate=or.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(r,t){Tn(e,t,r)})};var ds=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,hs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,fs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ms=/[A-Z0-9]/g,us=typeof document<"u",gs=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};S.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(S.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var En=O.event;function vs(){}function xs(){return this.cancelBubble}function bs(){return this.defaultPrevented}O.event=function(e){return En&&(e=En(e)),e.persist=vs,e.isPropagationStopped=xs,e.isDefaultPrevented=bs,e.nativeEvent=e};var Bn,ys={enumerable:!1,configurable:!0,get:function(){return this.class}},Pn=O.vnode;O.vnode=function(e){typeof e.type=="string"&&function(r){var t=r.props,n=r.type,i={},o=n.indexOf("-")===-1;for(var a in t){var s=t[a];if(!(a==="value"&&"defaultValue"in t&&s==null||us&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||gs(t.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":fs.test(a)&&(a=l):l=a="oninput":o&&hs.test(a)?a=a.replace(ms,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&i[a=l]&&(a="oninputCapture"),i[a]=s}}n=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=me(t.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),n=="select"&&i.defaultValue!=null&&(i.value=me(t.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",ys)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),r.props=i}(e),e.$$typeof=ds,Pn&&Pn(e)};var zn=O.__r;O.__r=function(e){zn&&zn(e),Bn=e.__c};var Fn=O.diffed;O.diffed=function(e){Fn&&Fn(e);var r=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in r&&r.value!==t.value&&(t.value=r.value==null?"":r.value),Bn=null};var Ae=class extends S{buttonRef=Q();constructor(){super(),this.state={show:!1}}render(){let r=null,{buttonProps:t,text:n,children:i}=this.props,o=this.state.show,a={};if(o){r=document.getElementById("modals");let s=this.buttonRef.current.getBoundingClientRect();a={left:s.left+"px",top:s.top+s.height+"px"}}return h(G,null,h("button",{...t,ref:this.buttonRef,onClick:this.toggleMenu},n),o&&ar(h("div",{class:"popover-backdrop",onPointerDown:this.closeMenu},h("div",{class:"popover outer-panel",style:a,onPointerDown:this.preventClose},i)),r))}preventClose=r=>{r.stopImmediatePropagation()};closeMenu=()=>{this.setState({show:!1})};toggleMenu=()=>{this.setState({show:!this.state.show})}};var ne=e=>h("label",{style:{display:"inline-block"}},e.label,h("input",{style:{display:"block"},type:"range",...e.inputProps}));var we=class extends S{render(r){let{pixelated:t,renderScale:n,enableShadows:i,enableShowMarching:o,enableDepth:a,enableNormals:s,enableToLightNormals:l,epsilon:c,shadowSharpness:d,maxMarchingStep:p,cameraFov:m}=this.props.options;return h("div",{class:"viewport-options"},h(Ae,{text:"Menu"},h("div",{class:"control-group-vertical"},h("button",{onClick:this.togglePixelated},t?"Smooth":"Pixelated"),h("select",{onChange:this.changeRenderScale,value:n},h("option",{value:"2"},"2x"),h("option",{value:"1.5"},"1.5x"),h("option",{value:"1"},"1x"),h("option",{value:"0.5"},"0.5x"),h("option",{value:"0.25"},"0.25x"),h("option",{value:"0.125"},"0.125x")),h("button",{onClick:this.toggleShadows},i?"Hide Shadows":"Show Shadows"),h("button",{onClick:this.toggleMarching},o?"Hide Marching":"Show Marching"),h("button",{onClick:this.toggleDepth},a?"Hide Depth":"Show Depth"),h("button",{onClick:this.toggleNormals},s?"Hide Normals":"Show Normals"),h("button",{onClick:this.toggleToLightNormals},l?"Hide To Light":"Show To Light"),h("button",{onClick:this.showExamples},"Show Examples"),h("button",{onClick:this.showRawScene},"JSON Scene")),h(ne,{label:`Epsilon ${c}`,inputProps:{value:c,min:0,max:.1,step:1e-6,onInput:this.changeEpsilon}}),h(ne,{label:`Marching Steps ${p}`,inputProps:{value:p,min:0,max:1e3,step:1,onInput:this.changeMarchingSteps}}),h(ne,{label:`Shadows ${d}`,inputProps:{value:d,min:0,max:256,step:.1,onInput:this.changeShadowSharpness}}),h(ne,{label:`Camera FOV ${m}`,inputProps:{value:m,min:1,max:90,step:.1,onInput:this.changeCameraFov}})))}showRawScene=()=>{z.execute(tr({show:!0}))};showExamples=()=>{z.execute(nr({show:!0}))};changeEpsilon=r=>{let t=r.target.valueAsNumber;if(!isFinite(t)){console.warn("Epsilon parse failed");return}this.updateOptions({epsilon:t})};changeShadowSharpness=r=>{let t=r.target.valueAsNumber;if(!isFinite(t)){console.warn("Shadow sharpness parse failed");return}this.updateOptions({shadowSharpness:t})};changeMarchingSteps=r=>{let t=r.target.valueAsNumber;if(!isFinite(t)){console.warn("Marching steps parse failed");return}this.updateOptions({maxMarchingStep:Math.round(t)})};changeCameraFov=r=>{let t=r.target.valueAsNumber;if(!isFinite(t)){console.warn("Marching steps parse camera fov");return}this.updateOptions({cameraFov:t})};togglePixelated=r=>{this.updateOptions({pixelated:!this.props.options.pixelated})};toggleShadows=r=>{this.updateOptions({enableShadows:!this.props.options.enableShadows})};toggleMarching=r=>{this.updateOptions({enableShowMarching:!this.props.options.enableShowMarching})};toggleDepth=r=>{this.updateOptions({enableDepth:!this.props.options.enableDepth})};toggleNormals=r=>{this.updateOptions({enableNormals:!this.props.options.enableNormals})};toggleToLightNormals=r=>{this.updateOptions({enableToLightNormals:!this.props.options.enableToLightNormals})};updateOptions=r=>{console.log("Options",r),z.execute(Gr(this.props.viewportIndex,r))};changeRenderScale=r=>{let t=r.target.value,n=Number.parseFloat(t);isFinite(n)?z.execute(Gr(this.props.viewportIndex,{renderScale:n})):console.warn("Unable to parse canvas scale",t)}};var Ne=class extends S{canvasRef=Q();renderer;mousePosX=0;mousePosY=0;mouseDown=!1;renderFrameCallback=-1;componentDidMount(){let r=this.canvasRef.current;this.createNewRenderer(r),window.addEventListener("resize",this.onViewportResize),r.parentElement.addEventListener("pointerdown",this.onPointerDown),r.parentElement.addEventListener("pointermove",this.onPointerMove),r.parentElement.addEventListener("pointerup",this.onPointerUp),r.parentElement.addEventListener("wheel",this.onMouseWheel),this.requestRender()}componentWillUnmount(){window.removeEventListener("resize",this.onViewportResize);let r=this.canvasRef.current;r.parentElement.removeEventListener("pointerdown",this.onPointerDown),r.parentElement.removeEventListener("pointermove",this.onPointerMove),r.parentElement.removeEventListener("pointerup",this.onPointerUp),r.parentElement.removeEventListener("wheel",this.onMouseWheel)}render(){this.requestRender();let{viewportIndex:r,options:t,isMaximised:n}=this.props,i="viewport__canvas";return t.pixelated&&(i+=" is-pixelated"),h("div",{class:"viewport outer-panel"},h("canvas",{class:i,ref:this.canvasRef}),h(we,{viewportIndex:r,options:t}),h("div",{class:"viewport__buttons"},h("button",{onClick:this.toggleMaximise},n?"Minimise":"Maximise")))}toggleMaximise=()=>{let{isMaximised:r,viewportIndex:t}=this.props;z.execute(cn(r?-1:t))};updateCanvasSize=()=>{let r=this.canvasRef.current.getBoundingClientRect();this.renderer.resizeCanvas(r.width,r.height)};onViewportResize=()=>{this.updateCanvasSize(),this.manualRenderTrigger()};renderScene=()=>{let{options:r,currentShader:t,camera:n,sceneConverter:i}=this.props;this.renderFrameCallback=-1,this.renderer.prevShaderText!==t&&(console.log("New shader!",this.renderer.prevShaderText,t),this.renderer.destroy(),this.createNewRenderer(this.canvasRef.current)),this.renderer.epsilon=r.epsilon,this.renderer.shadowSharpness=r.shadowSharpness,this.renderer.maxMarchingSteps=r.maxMarchingStep,this.renderer.enableShadows=r.enableShadows,this.renderer.enableShowMarches=r.enableShowMarching,this.renderer.enableDepth=r.enableDepth,this.renderer.enableNormals=r.enableNormals,this.renderer.enableToLightNormals=r.enableToLightNormals,this.renderer.enableSoftShadows=r.enableSoftShadows,n.setFov(r.cameraFov),this.renderer.canvasScale!==r.renderScale&&(this.renderer.canvasScale=r.renderScale,this.updateCanvasSize()),this.renderer.render(i,n)};createNewRenderer=r=>{this.renderer=Se.create(r,this.props.currentShader),this.renderer.canvasScale=this.props.options.renderScale,this.updateCanvasSize(),this.renderer.setupCanvas()};onPointerDown=r=>{r.target===this.canvasRef.current&&(this.mousePosX=r.clientX,this.mousePosY=r.clientY,this.mouseDown=!0)};onPointerMove=r=>{if(!this.mouseDown)return;let t=(r.clientX-this.mousePosX)*.005,n=(r.clientY-this.mousePosY)*.005;this.mousePosX=r.clientX,this.mousePosY=r.clientY;let{camera:i}=this.props;r.ctrlKey?i.panRelative(t,-n):r.shiftKey?i.orbitTargetAroundPosition(-t,-n):i.orbitPositionAroundTarget(-t,-n),this.manualRenderTrigger()};onPointerUp=r=>{this.mouseDown=!1};onMouseWheel=r=>{let t=r.deltaY>0?1:-1;this.props.camera.dolly(t),this.manualRenderTrigger()};manualRenderTrigger=()=>{this.requestRender()};requestRender=()=>{this.renderFrameCallback<0&&(this.renderFrameCallback=requestAnimationFrame(this.renderScene))}};var $=class extends S{inputRef=Q();addedOnChange=!1;componentDidMount(){this.addedOnChange||this.inputRef.current.addEventListener("change",this.onChange)}componentWillUnmount(){this.addedOnChange&&this.inputRef.current.removeEventListener("change",this.onChange)}render(){let{value:r,placeholder:t,disabled:n,step:i}=this.props,o=100*(i||1),a=Math.round(r*o)/o;return h("input",{disabled:n,step:i,placeholder:t,type:"number",class:this.props.class,value:a,ref:this.inputRef})}onChange=r=>{let t=r.target,n=100*(this.props.step||1),i=Math.round(t.valueAsNumber*n)/n;this.props.onChange(this.props.value,i)}};function _s(e,r){return e.length>=3||r>=3}function Is(e,r){return e.length===4||r===4}var D=class extends S{render(){let{value:r,disabled:t,forceLength:n}=this.props,i=_s(r,n),o=Is(r,n);return h("div",{class:"vector control-group"},h($,{class:"input",disabled:t,value:r[0],onChange:this.onChangeX,placeholder:"x",step:.1}),h($,{class:"input",disabled:t,value:r[1],onChange:this.onChangeY,placeholder:"y",step:.1}),i&&h($,{class:"input",disabled:t,value:r[2],onChange:this.onChangeZ,placeholder:"z",step:.1}),o&&h($,{class:"input",disabled:t,value:r[3],onChange:this.onChangeW,placeholder:"w",step:.1}))}onChangeX=(r,t)=>{this.updateVector(t,0)};onChangeY=(r,t)=>{this.updateVector(t,1)};onChangeZ=(r,t)=>{this.updateVector(t,2)};onChangeW=(r,t)=>{this.updateVector(t,3)};updateVector=(r,t)=>{let n=this.props.value;console.log("Update vector index",t,r);let i=L.clone(n);i[t]=r,this.props.onChange(n,i)}};function Dr(e,r,t){return(t==null||t===!0)&&(e+=" "+r),e}function ee(e,r){let t={};for(let n of e){let i=r(n);t[i]=n}return t}var Ur=[{id:"sphere",name:"Sphere",funcName:"sdfSphere",params:[{name:"Radius",type:"input"}]},{id:"box",name:"Box",funcName:"sdfBox",params:[{name:"X",type:"input"},{name:"Y",type:"input"},{name:"Z",type:"input"}]},{id:"hexPrism",name:"Hex Prism",funcName:"sdfHexPrism",params:[{name:"Radius",type:"input"},{name:"Depth",type:"input"}]},{id:"torus",name:"Torus",funcName:"sdfTorus",params:[{name:"Major Radius",type:"input"},{name:"Minor Radius",type:"input"}]},{id:"octahedron",name:"Octahedron",funcName:"sdfOctahedron",params:[{name:"Size",type:"input"}]},{id:"cylinder",name:"Cylinder",funcName:"sdfCappedCylinder",params:[{name:"Radius",type:"input"},{name:"Height",type:"input"}]},{id:"icosahedron",name:"Icosahedron",funcName:"sdfIcosahedron",params:[{name:"Radius",type:"input"}]},{id:"mandelbulb",name:"Mandelbulb",funcName:"sdfMandelbulb",params:[{name:"Iterations",type:"input",default:4,min:0,max:5,step:1},{name:"Scale",type:"input"}]}],sr=ee(Ur,e=>e.id);var q=class extends S{render(){let{parameters:r,paramInfo:t}=this.props,n=r[t.name],i=(isFinite(n)?n:t.default)??1,o=`${t.name}: ${i}`,a=t.min??0,s=t.max??10,l=t.step??.1;return h(ne,{label:o,inputProps:{value:i,min:a,max:s,step:l,onInput:this.onInput}})}onInput=r=>{let{paramInfo:t,onChange:n}=this.props,i=r.target.valueAsNumber;if(!isFinite(i)){console.log("Unable to parse param:",t.name,r.target.value);return}n(i,t)}};var Cs=Ur.map(e=>h("option",{key:e.id,value:e.id},e.name)),Le=class extends S{render(){let r=this.props.shape,t=r.lightingModel==="phong";return h("div",null,h("div",null,h("strong",null,"Type")," ",h("select",{value:r.type??"none",onChange:this.onChangeType},h("option",{value:"none"},"None"),Cs)),h("div",null,this.renderCurrentParams()),h("div",null,h("strong",null,"Lighting Model")," ",h("select",{value:r.lightingModel,onChange:this.onChangeLightingModel},h("option",{value:"unlit"},"Unlit"),h("option",{value:"lambert"},"Lambert"),h("option",{value:"phong"},"Phong"))),h("div",null,h("strong",null,"Diffuse Colour")," ",h(D,{value:r.diffuseColour,onChange:this.onChangeDiffuseColour})),h("div",null,h("strong",null,"Specular Colour")," ",h(D,{disabled:!t,value:r.specularColour,onChange:this.onChangeSpecularColour})),h("div",null,h("strong",null,"Shininess")," ",h("input",{class:"input",disabled:!t,type:"number",min:0,max:100,step:.1,value:r.shininess,placeholder:"Shininess",onChange:this.onChangeShininess})))}renderCurrentParams=()=>{let r=[],{shape:t}=this.props,n=sr[t.type];if(!n)return r;for(let i of n.params)r.push(h(q,{key:i.name,parameters:t.params,paramInfo:i,onChange:this.updateParam}));return r};updateParam=(r,t)=>{let i={...this.props.shape.params,[t.name]:r};this.updateField(i,"params")};onChangeType=r=>{let t=r.target.value;this.updateField(t,"type")};onChangeLightingModel=r=>{let t=r.target.value;this.updateField(t,"lightingModel")};onChangeShininess=r=>{let t=parseFloat(r.target.value);isFinite(t)&&this.updateField(t,"shininess")};onChangeDiffuseColour=(r,t)=>{this.updateField(t,"diffuseColour")};onChangeSpecularColour=(r,t)=>{this.updateField(t,"specularColour")};updateField=(r,t)=>{console.log("Update shape",t,r);let n={...this.props.shape,[t]:r};this.props.onChange(n)}};var Oe=class extends S{render(){let r=this.props.light;return r===void 0?h("div",null,"Empty Light"):h("div",null,h("div",null,h("strong",null,"Colour")," ",h(D,{forceLength:3,value:r.colour,onChange:this.onChangeColour})))}onChangeColour=(r,t)=>{this.updateField(t,"colour")};updateField=(r,t)=>{console.log("Update light",t,r);let n={...this.props.light,[t]:r};this.props.onChange(n)}};var Wr=[{id:"union",name:"Union",funcName:"opUnion",params:[]},{id:"subtraction",name:"Subtraction",funcName:"opSubtraction",params:[]},{id:"intersection",name:"Intersection",funcName:"opIntersection",params:[]},{id:"xor",name:"Xor",funcName:"opXor",params:[]},{id:"smoothUnion",name:"Smooth Union",funcName:"opSmoothUnion",params:[{name:"Blend",type:"input"}]},{id:"smoothSubtraction",name:"Smooth Subtraction",funcName:"opSmoothSubtraction",params:[{name:"Blend",type:"input"}]},{id:"smoothIntersection",name:"Smooth Intersection",funcName:"opSmoothIntersection",params:[{name:"Blend",type:"input"}]}],lr=ee(Wr,e=>e.id);var Ms=Wr.map(e=>h("option",{key:e.id,value:e.id},e.name)),Re=class extends S{render(){let{node:r,sceneTree:t}=this.props,n=r.childOperation.type??"none",i=r.parentId!=null?t.nodes[r.parentId]:void 0;return h("div",null,h("div",null,h("strong",null,"Child Op Code")," ",h("select",{value:n,onChange:this.onChangeChildOpCode},h("option",{value:"none"},"None"),Ms)),h("div",null,this.renderOperationParams()),h("div",null,h("strong",null,"Children")),h("div",{class:"control-group"},h("button",{onClick:this.addChild},"Add"),i!=null&&h(G,null,h("button",{onClick:this.deleteSelf},"Delete"),h("button",{onClick:this.reparent},"Re-parent"))))}renderOperationParams=()=>{let r=[],{childOperation:t}=this.props.node,n=lr[t.type];if(!n)return r;for(let i of n.params)r.push(h(q,{key:i.name,parameters:t.params,paramInfo:i,onChange:this.updateParam}));return r};addChild=()=>{let r=on(this.props.sceneTree,this.props.node,tn("New Child",{}));z.execute(Z(r))};deleteSelf=()=>{let r=an(this.props.sceneTree,this.props.node);z.execute(Z(r))};reparent=()=>{let{node:r,sceneTree:t}=this.props;if((r.parentId!=null?t.nodes[r.parentId]:void 0)==null){console.warn("Cannot reparent root node");return}z.execute(rr({show:!0,childNodeId:this.props.node.id}))};updateParam=(r,t)=>{let{node:n,onChange:i}=this.props,a={...n.childOperation.params,[t.name]:r};i({...n.childOperation,params:a})};onChangeChildOpCode=r=>{let{node:t,onChange:n}=this.props,i=r.target.value;n({...t.childOperation,type:i})}};var Zr=[{id:"twistXY",name:"Twist XY",funcName:"opTwistXY",params:[{name:"Amount",type:"input",default:.5,min:-10,max:10}]},{id:"repeatDomain",name:"Repeat Domain",funcName:"opRepeatDomain",params:[{name:"X",type:"input",default:8,max:50},{name:"Y",type:"input",default:8,max:50},{name:"Z",type:"input",default:8,max:50}]},{id:"rotationRepeatSimple",name:"Rotation Repeat Simple",funcName:"opRotationSimple",params:[{name:"Amount",type:"input",default:6,max:32}]}],cr=ee(Zr,e=>e.id);var Ss=Zr.map(e=>h("option",{key:e.id,value:e.id},e.name)),Te=class extends S{render(){let{selfOperation:r}=this.props,t=r.type??"none";return h("div",null,h("div",null,h("strong",null,"Self Op Code")," ",h("select",{value:t,onChange:this.onChangeSelfOpCode},h("option",{value:"none"},"None"),Ss)),h("div",null,this.renderOperationParams()))}renderOperationParams=()=>{let r=[],{selfOperation:t}=this.props,n=cr[t.type];if(!n)return r;for(let i of n.params)r.push(h(q,{key:i.name,parameters:t.params,paramInfo:i,onChange:this.updateParam}));return r};updateParam=(r,t)=>{let{selfOperation:n,onChange:i}=this.props,a={...n.params,[t.name]:r};i({...n,params:a})};onChangeSelfOpCode=r=>{let{selfOperation:t,onChange:n}=this.props,i=r.target.value;n({...t,type:i})}};var Ee=class extends S{constructor(){super(),this.state={show:!1}}render(){let{node:r,sceneTree:t}=this.props;return r==null?h("div",{class:"scene-node-view"},"No node selected"):h("div",{class:"scene-node-view"},h("div",null,h("strong",null,"Name")," ",h("input",{class:"input",type:"text",placeholder:"Name",value:r.name,onChange:this.onChangeName})),h("div",null,h("strong",null,"Type"),h("select",{value:r.type,onChange:this.onChangeType},h("option",{value:"none"},"None"),h("option",{value:"shape"},"Shape"),h("option",{value:"light"},"Light"),h("option",{value:"operation"},"Operation"))),r.type==="shape"&&h(G,null,h("div",null,h("strong",null,"Position")," ",h(D,{value:r.position,onChange:this.onChangePosition})),h("div",null,h("strong",null,"Rotation")," ",h(D,{value:r.rotation,onChange:this.onChangeRotation})),h(Te,{selfOperation:r.selfOperation,onChange:this.onChangeSelfOperation}),h("div",null,h("strong",null,"Shape"),h(Le,{shape:r.shape,onChange:this.onChangeShape}))),r.type==="light"&&h(G,null,h("div",null,h("strong",null,"Position")," ",h(D,{value:r.position,onChange:this.onChangePosition})),h("div",null,h("strong",null,"Rotation")," ",h(D,{value:r.rotation,onChange:this.onChangeRotation})),h("div",null,h("strong",null,"Light"),h(Oe,{light:r.light,onChange:this.onChangeLight}))),r.type==="operation"&&h("div",null,h("strong",null,"Operation"),h(Re,{node:r,sceneTree:t,onChange:this.onChangeChildOperation})))}onChangeName=r=>{let t=r.target.value;this.updateField(t,"name")};onChangePosition=(r,t)=>{this.updateField(t,"position")};onChangeRotation=(r,t)=>{this.updateField(t,"rotation")};onChangeType=r=>{let t=r.target.value;this.updateField(t,"type")};onChangeShape=r=>{this.updateField(r,"shape")};onChangeLight=r=>{this.updateField(r,"light")};onChangeSelfOperation=r=>{this.updateField(r,"selfOperation")};onChangeChildOperation=r=>{this.updateField(r,"childOperation")};updateField=(r,t)=>{console.log("Update shape node",t,r);let n={...this.props.node,[t]:r};this.props.onChange(n,this.props.node)}};var Pe=class extends S{render(){let{depth:r,node:t,isSelected:n,disable:i}=this.props,o=Dr(Dr("scene-node-tree-item","is-selected",n),"is-disabled",i===!0);return h("div",{class:o,style:{paddingLeft:(r+1)*.5+"rem"},onClick:this.onClick},"+ ",t.name)}onClick=()=>{this.props.disable||this.props.onClicked(this.props.node)}};var ie=class extends S{render(){return h("div",{class:"scene-node-tree"},this.renderNodeTree())}renderNodeTree=()=>{let{sceneTree:r,selectedNodeId:t,onItemClicked:n}=this.props,i=r.nodes[r.rootNodeId],o=[];if(i==null)return o;let a=rn(r);for(let s of a){let l=s.node.id===t;o.push(h(Pe,{isSelected:l,depth:s.depth,key:s.node.id,node:s.node,onClicked:n}))}return o}};var ze=class extends S{render(){let{sceneTree:r,selectedNodeId:t}=this.props,n=r.nodes[t];return h("div",{class:"scene-tree"},h("div",{class:"scene-tree__contents outer-panel"},h("div",{class:"inner-panel"},h(ie,{sceneTree:r,selectedNodeId:t,onItemClicked:this.onNodeClicked})),h("div",{class:"inner-panel scene-tree__nodes"},h(Ee,{sceneTree:r,node:n,onChange:this.onChangeSelectedNode})," ")))}onNodeClicked=r=>{z.execute(hn(r.id))};onChangeSelectedNode=(r,t)=>{z.execute(pn(r))}};var K=class extends S{render(){let{show:r,onRequestClose:t}=this.props;if(r===!1)return null;let n=this.props.portalContainer??"modals",i=document.getElementById(n),o="modal-body outer-panel ",a=this.props.class!=null?o+this.props.class:o;return ar(h("div",{class:"modal-backdrop",onPointerDown:t},h("div",{class:a,onPointerDown:this.preventClose},this.props.children)),i)}preventClose=r=>{r.stopImmediatePropagation()}};var Fe=class extends S{render(){let{show:r,sceneTree:t,disabledNodeIds:n,onRequestClose:i}=this.props;return h(K,{show:r,onRequestClose:i},h(ie,{sceneTree:t,disabledNodeId:n,onItemClicked:this.onItemClicked}))}onItemClicked=r=>{this.props.onItemClicked(r)}};var Ve=class extends S{render(){let{show:r}=this.props.state,t=this.getDisabledNodeIds();return h(Fe,{show:r,disabledNodeIds:t,sceneTree:this.props.sceneTree,onRequestClose:this.onCloseModal,onItemClicked:this.onReparentSelected})}onCloseModal=()=>{z.execute(rr({show:!1}))};getDisabledNodeIds=()=>{let{show:r,childNodeId:t}=this.props.state;if(!r)return[];let{sceneTree:n}=this.props,i=n.nodes[t];return[i.id,i.parentId]};onReparentSelected=r=>{if(this.props.state.childNodeId==null)return;let t=this.props.sceneTree.nodes[this.props.state.childNodeId],n=sn(this.props.sceneTree,r,t);z.execute(Z(n))}};var Ge=class extends S{prevSceneTree=void 0;preRef=Q();render(){let{show:r}=this.props.state,{sceneTree:t}=this.props,n="";return r&&this.prevSceneTree!==t&&(n=JSON.stringify(t,null,2)),h(K,{show:r,onRequestClose:this.onCloseModal,class:"raw-scene-modal",portalContainer:"raw-json-modal"},h("div",{ref:this.preRef,class:"raw-scene-modal__text",contenteditable:!0},h("pre",null,n)),h("span",{class:"control-group"},h("button",{onClick:this.loadFromHtml},"Load From Json"),h("label",{class:"button"},"Load From File",h("input",{type:"file",onChange:this.loadFromFile})),h("button",{onClick:this.downloadText},"Download Json")))}onCloseModal=()=>{z.execute(tr({show:!1}))};downloadText=()=>{let r=new Blob([this.preRef.current.innerText],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(r),t.download="scene.json",t.click(),URL.revokeObjectURL(t.href)};loadFromFile=r=>{if(r.target.files[0]==null)return;let n=new FileReader;n.onload=this.onFileReaderLoad};onFileReaderLoad=r=>{let t=r.target;typeof t.result=="string"?this.loadFromText(t.result):console.log("Expected string to load file from")};loadFromHtml=()=>{let r=this.preRef.current.innerText;this.loadFromText(r)};loadFromText=r=>{let t=JSON.parse(r);t!=null&&z.execute(Z(t))}};function As(){let e=le("Root","union"),r=le("Main","subtraction");U(e,r);let t=te("Hex Prism",{type:"hexPrism",params:{Radius:.75,Depth:2},maxSize:1.5,diffuseColour:X(.5,.5,.5)}),n=le("Box & Sphere","union");U(r,t),U(r,n);let i=te("Box",{type:"box",params:{X:6,Y:1,Z:6},diffuseColour:X(1,1,1),lightingModel:"lambert"},X(0,-1.5,0)),o=te("Sphere",{type:"sphere",params:{Radius:1.25},maxSize:2,diffuseColour:X(.1,.2,.9),lightingModel:"phong"});U(n,i),U(n,o);let a=Ie("Red Light",{colour:ye(1,.8,.6,1)},X(4,2,3)),s=Ie("Green Light",{colour:ye(.2,1,.6,1)},X(0,0,0));return U(e,a),U(e,s),{nodes:dr(e,r,t,n,i,o,a,s),rootNodeId:e.id}}var pr=As();function ws(){let e=le("Root","union"),r=te("Sphere Small",{type:"sphere",params:{Radius:1.25},diffuseColour:X(.1,.2,.9),lightingModel:"phong"}),t=te("Sphere Large",{type:"sphere",params:{Radius:10},diffuseColour:X(.9,.2,.1),lightingModel:"phong"},X(0,-11,0));U(e,r),U(e,t);let n=Ie("Red Light",{colour:ye(1,.8,.6,1)},X(4,2,3));return U(e,n),{nodes:dr(e,r,t,n),rootNodeId:e.id}}var kn=ws();function dr(...e){return ee(e,r=>r.id)}var hr=[{tree:pr,title:"Box, Sphere and Hex"},{tree:kn,title:"Two Spheres"}];var Ns=e=>{let{title:r,tree:t}=e.example;return h("div",null,h("button",{onClick:()=>z.execute(Z(t))},"Load")," ",r)},Xe=class extends S{render(){let{show:r}=this.props.state;return h(K,{show:r,onRequestClose:this.onCloseModal,class:"example-modal",portalContainer:"raw-json-modal"},hr.map((t,n)=>h(Ns,{key:n,example:t})))}onCloseModal=()=>{z.execute(nr({show:!1}))}};var fr=class extends S{constructor(){super()}render(){let r=this.props.sceneConverter,{viewports:t,maximiseViewport:n,sceneTree:i,selectedNodeId:o,reparentModal:a,rawSceneModal:s,exampleModal:l,currentShader:c}=this.props.state;return h(G,null,h("div",{class:"main-view"},n>=0?h(Ne,{isMaximised:!0,camera:zr[n],viewportIndex:n,options:t[n].options,sceneConverter:r,currentShader:c}):h(G,null,h("div",{class:"viewports"},h(Ne,{viewportIndex:0,camera:zr[0],options:t[0].options,sceneConverter:r,currentShader:c})),h(ze,{sceneTree:i,selectedNodeId:o}))),h(Ve,{state:a,sceneTree:i}),h(Ge,{state:s,sceneTree:i}),h(Xe,{state:l}))}};var mr=jr(Un());function Ls(e){let r=e.toString();return r.indexOf(".")<0&&(r+=".0"),r}var Be=class{result="";firstItem=!0;startFunction(r){this.writeValue(r+"("),this.firstItem=!0}endFunction(){this.result+=")"}writeRaw(r){this.result+=r}writeValue(r){this.firstItem||(this.result+=", "),typeof r=="number"?this.result+=Ls(r):this.result+=r,this.firstItem=!1}writeParameter(r){this.writeValue("uParams["+r+"]")}getFinal(){return`return ${this.result};`}};var Os=8,Rs=8,Ts={unlit:Fr,lambert:Vr,phong:$t};function Es(e){return Ts[e]||Fr}var ur=class e{lights=[];lightDataArray=[];materials=[];materialDataArray=[];parameters=[];shader="";previousTree;getTree(){return this.previousTree}getLightDataArray(){return this.lightDataArray}getLights(){return this.lights}getNumLights(){return this.lights.length}getMaterials(){return this.materials}getMaterialDataArray(){return this.materialDataArray}getNumMaterials(){return this.materials.length}getParameters(){return this.parameters}getShader(){return this.shader}setLight(r,t){if(r<0)throw new Error(`Out of bounds light index ${r}`);r>=this.lights.length?this.lights[r]={...e.createNewLight(),...t}:this.lights[r]={...this.lights[r],...t},this.updateLight(r)}setMaterial(r,t){if(r<0)throw new Error(`Out of bounds material index ${r}`);r>=this.materials.length?this.materials[r]={...e.createNewMaterial(),...t}:this.materials[r]={...this.materials[r],...t},this.updateMaterial(r)}updateShapesFromTree(r){if(this.previousTree===r||(this.previousTree=r,!r.nodes[r.rootNodeId]))return!1;let{lights:n,materials:i,parameters:o,assembler:a}=e.createShapesFromNode(r);if(!(0,mr.default)(this.lights,n)){this.lights=n,console.log("Lights",this.lights),this.lightDataArray.length=0;for(let s=0;s<this.lights.length;s++)this.updateLight(s)}if(!(0,mr.default)(this.materials,i)){this.materials=i,console.log("Materials",this.materials),this.materialDataArray.length=0;for(let s=0;s<this.materials.length;s++)this.updateMaterial(s)}return(0,mr.default)(this.parameters,o)||(this.parameters=o,console.log("Parameters",this.parameters)),this.shader=a.getFinal(),!0}static createShapesFromNode(r){let t=r.nodes[r.rootNodeId];if(!t)return;let n=[],i=[],o=[],a=new Be;return this.processNode(n,i,o,t,r.nodes,a),{lights:n,materials:i,parameters:o,assembler:a}}static nodeHasValidShape(r){return!(r.type!=="shape"||r.shape==null||r.shape.type==="none")}static processNode(r,t,n,i,o,a){let s=!1,l=0,c=0;if(i.type==="operation"&&i.childOperation.type!=="none"){for(let p of i.childrenIds){let m=o[p];(this.nodeHasValidShape(m)||m.childOperation.type!=="none")&&c++}c>1&&(s=!0,this.processOperation(i.childOperation,a,n),l++)}if(this.nodeHasValidShape(i)&&(s=!0,this.processShape(i,i.shape,t,n,a)),i.type==="light"){let p=e.convertToLight(i);p!=null&&r.push(p)}let d=0;for(let p of i.childrenIds)this.processNode(r,t,n,o[p],o,a)&&(d++,c>2&&d+1<c&&(l++,this.processOperation(i.childOperation,a,n)));for(let p=0;p<l;p++)a.endFunction();return s}static processOperation(r,t,n){let i=lr[r.type];if(i==null){console.error("Unsupported operation type",r.type,r);return}t.startFunction(i.funcName);for(let o of i.params){let a=r.params[o.name]??o.default??1;this.pushParameter(n,a,t)}}static pushParameter(r,t,n){n.writeParameter(r.length),r.push(t)}static writeSamplePoint(r,t,n){let i=r.position,o;r.selfOperation.type!=="none"&&(o=cr[r.selfOperation.type],o&&n.startFunction(o.funcName));let a=k.create();if(k.fromEuler(a,r.rotation[0],r.rotation[1],r.rotation[2]),n.startFunction("quatMul"),n.startFunction("vec4"),this.pushParameter(t,a[0],n),this.pushParameter(t,a[1],n),this.pushParameter(t,a[2],n),this.pushParameter(t,a[3],n),n.endFunction(),n.startFunction("vec3"),this.pushParameter(t,-i[0],n),this.pushParameter(t,-i[1],n),this.pushParameter(t,-i[2],n),n.endFunction(),n.writeRaw(" + point"),n.endFunction(),o){for(let s of o.params){let l=r.selfOperation.params[s.name]??s.default??1;this.pushParameter(t,l,n)}n.endFunction()}}static processShape(r,t,n,i,o){let a=sr[t.type];if(a==null){console.error("Unsupported shape type",t.type,t);return}o.startFunction("vec2");let s={diffuseColour:t.diffuseColour,lightingModel:Es(t.lightingModel),specularColour:t.specularColour,shininess:t.shininess},l=n.length;n.push(s),o.startFunction(a.funcName),this.writeSamplePoint(r,i,o);for(let c of a.params){let d=t.params[c.name]??c.default??1;this.pushParameter(i,d,o)}o.endFunction(),o.writeValue(l),o.endFunction()}updateLight(r){let t=r*Os,n=this.lights[r];this.lightDataArray[t]=n.position[0],this.lightDataArray[t+1]=n.position[1],this.lightDataArray[t+2]=n.position[2],this.lightDataArray[t+3]=n.radius,this.lightDataArray[t+4]=n.colour[0],this.lightDataArray[t+5]=n.colour[1],this.lightDataArray[t+6]=n.colour[2],this.lightDataArray[t+7]=n.colour[3]}updateMaterial(r){let t=r*Rs,n=this.materials[r];this.materialDataArray[t]=n.diffuseColour[0],this.materialDataArray[t+1]=n.diffuseColour[1],this.materialDataArray[t+2]=n.diffuseColour[2],this.materialDataArray[t+3]=n.lightingModel,this.materialDataArray[t+4]=n.specularColour[0],this.materialDataArray[t+5]=n.specularColour[1],this.materialDataArray[t+6]=n.specularColour[2],this.materialDataArray[t+7]=n.shininess}static convertToLight(r){let t=r.light;return t==null?null:{colour:t.colour,position:r.position,radius:t.radius}}static createNewMaterial(){return{diffuseColour:Tr(),lightingModel:Vr,specularColour:Tr(),shininess:10}}static createNewLight(){return{position:L.create(),radius:10,colour:He()}}};var Qr=new ur;z.subscribe(e=>e.sceneTree,Ps);function Ps(e){Qr.updateShapesFromTree(e.sceneTree)&&z.execute(dn(Qr.getShader()))}var zs=document.getElementById("app");function Wn(){ue(h(fr,{state:z.state(),sceneConverter:Qr}),zs)}function Fs(){hr[0]&&z.execute(Z(pr))}Fs();Wn();z.subscribeAny(Wn);})();
//# sourceMappingURL=webgl-index.js.map
