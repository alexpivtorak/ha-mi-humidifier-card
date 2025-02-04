var qt=Object.defineProperty,Ft=Object.defineProperties;var Zt=Object.getOwnPropertyDescriptors;var _t=Object.getOwnPropertySymbols;var Kt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var wt=(l,p,u)=>p in l?qt(l,p,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[p]=u,V=(l,p)=>{for(var u in p||(p={}))Kt.call(p,u)&&wt(l,u,p[u]);if(_t)for(var u of _t(p))Jt.call(p,u)&&wt(l,u,p[u]);return l},it=(l,p)=>Ft(l,Zt(p));var H=(l,p,u)=>new Promise((P,k)=>{var W=m=>{try{M(u.next(m))}catch(x){k(x)}},J=m=>{try{M(u.throw(m))}catch(x){k(x)}},M=m=>m.done?P(m.value):Promise.resolve(m.value).then(W,J);M((u=u.apply(l,p)).next())});(function(l){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft,mt,yt,$t,vt,bt;const p=globalThis,u=p.ShadowRoot&&(p.ShadyCSS===void 0||p.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),k=new WeakMap;let W=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(u&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=k.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&k.set(e,t))}return t}toString(){return this.cssText}};const J=s=>new W(typeof s=="string"?s:s+"",void 0,P),M=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new W(e,s,P)},m=(s,t)=>{if(u)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=p.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},x=u?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return J(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:xt,getOwnPropertyDescriptor:Ct,getOwnPropertyNames:Et,getOwnPropertySymbols:St,getPrototypeOf:Tt}=Object,$=globalThis,rt=$.trustedTypes,Ht=rt?rt.emptyScript:"",G=$.reactiveElementPolyfillSupport,U=(s,t)=>s,q={toAttribute(s,t){switch(t){case Boolean:s=s?Ht:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch(i){e=null}}return e}},Q=(s,t)=>!At(s,t),st={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Q};(ft=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(mt=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&xt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){var o;const{get:r,set:n}=(o=Ct(this.prototype,t))!=null?o:{get(){return this[e]},set(c){this[e]=c}};return{get(){return r==null?void 0:r.call(this)},set(c){const a=r==null?void 0:r.call(this);n.call(this,c),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:st}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[...Et(e),...St(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(x(r))}else t!==void 0&&e.push(x(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;const t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return m(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:q).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:q;this._$Em=r,this[r]=c.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){var r;if(t!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(t)),!((r=i.hasChanged)!=null?r:Q)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){var r;this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$ET(){return H(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,c]of n)c.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],c)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[U("elementProperties")]=new Map,C[U("finalized")]=new Map,G==null||G({ReactiveElement:C}),((yt=$.reactiveElementVersions)!=null?yt:$.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,F=O.trustedTypes,ot=F?F.createPolicy("lit-html",{createHTML:s=>s}):void 0,nt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+v,Pt=`<${at}>`,_=document,N=()=>_.createComment(""),L=s=>s===null||typeof s!="object"&&typeof s!="function",X=Array.isArray,kt=s=>X(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ht=/>/g,w=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,pt=/^(?:script|style|textarea|title)$/i,Mt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),z=Mt(1),E=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ut=new WeakMap,A=_.createTreeWalker(_,129);function gt(s,t){if(!X(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Ut=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=R;for(let c=0;c<e;c++){const a=s[c];let f,d,h=-1,y=0;for(;y<a.length&&(o.lastIndex=y,d=o.exec(a),d!==null);)y=o.lastIndex,o===R?d[1]==="!--"?o=ct:d[1]!==void 0?o=ht:d[2]!==void 0?(pt.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=w):d[3]!==void 0&&(o=w):o===w?d[0]===">"?(o=r!=null?r:R,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,f=d[1],o=d[3]===void 0?w:d[3]==='"'?dt:lt):o===dt||o===lt?o=w:o===ct||o===ht?o=R:(o=w,r=void 0);const b=o===w&&s[c+1].startsWith("/>")?" ":"";n+=o===R?a+Pt:h>=0?(i.push(f),a.slice(0,h)+nt+a.slice(h)+v+b):a+v+(h===-2?c:b)}return[gt(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class j{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const c=t.length-1,a=this.parts,[f,d]=Ut(t,e);if(this.el=j.createElement(f,i),A.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=A.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(nt)){const y=d[o++],b=r.getAttribute(h).split(v),K=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:K[2],strings:b,ctor:K[1]==="."?Nt:K[1]==="?"?Lt:K[1]==="@"?Rt:Z}),r.removeAttribute(h)}else h.startsWith(v)&&(a.push({type:6,index:n}),r.removeAttribute(h));if(pt.test(r.tagName)){const h=r.textContent.split(v),y=h.length-1;if(y>0){r.textContent=F?F.emptyScript:"";for(let b=0;b<y;b++)r.append(h[b],N()),A.nextNode(),a.push({type:2,index:++n});r.append(h[y],N())}}}else if(r.nodeType===8)if(r.data===at)a.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(v,h+1))!==-1;)a.push({type:7,index:n}),h+=v.length-1}n++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function S(s,t,e=s,i){var o,c,a;if(t===E)return t;let r=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=L(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=S(s,r._$AS(s,t.values),r,i)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var f;const{el:{content:e},parts:i}=this._$AD,r=((f=t==null?void 0:t.creationScope)!=null?f:_).importNode(e,!0);A.currentNode=r;let n=A.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new D(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new zt(n,this,t)),this._$AV.push(d),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=A.nextNode(),o++)}return A.currentNode=_,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,r){var n;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),L(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(gt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new Ot(r,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new j(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new D(this.O(N()),this.O(N()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!L(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const c=t;let a,f;for(t=n[0],a=0;a<n.length-1;a++)f=S(this,c[i+a],e,a),f===E&&(f=this._$AH[a]),o||(o=!L(f)||f!==this._$AH[a]),f===g?t=g:t!==g&&(t+=(f!=null?f:"")+n[a+1]),this._$AH[a]=f}o&&!r&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Nt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Lt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Rt extends Z{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=S(this,t,e,0))!=null?o:g)===E)return;const i=this._$AH,r=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class zt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const tt=O.litHtmlPolyfillSupport;tt==null||tt(j,D),(($t=O.litHtmlVersions)!=null?$t:O.litHtmlVersions=[]).push("3.2.1");const jt=(s,t,e)=>{var n,o;const i=(n=e==null?void 0:e.renderBefore)!=null?n:t;let r=i._$litPart$;if(r===void 0){const c=(o=e==null?void 0:e.renderBefore)!=null?o:null;i._$litPart$=r=new D(t.insertBefore(N(),c),c,void 0,e!=null?e:{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let I=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return(i=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}};I._$litElement$=!0,I.finalized=!0,(vt=globalThis.litElementHydrateSupport)==null||vt.call(globalThis,{LitElement:I});const et=globalThis.litElementPolyfillSupport;et==null||et({LitElement:I}),((bt=globalThis.litElementVersions)!=null?bt:globalThis.litElementVersions=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Q},Bt=(s=It,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,s)},init(c){return c!==void 0&&this.P(o,void 0,s),c}}}if(i==="setter"){const{name:o}=e;return function(c){const a=this[o];t.call(this,c),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function B(s){return(t,e)=>typeof e=="object"?Bt(s,t,e):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?it(V({},i),{wrapped:!0}):i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,t,e)}var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,T=(s,t,e,i)=>{for(var r=i>1?void 0:i?Wt(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Vt(t,e,r),r};customElements.get("ha-mi-humidifier-card")||console.info("%c MI-HUMIDIFIER-CARD %c Version 1.0.0 ","color: white; background: #4527a0; font-weight: 700;","color: #4527a0; background: white; font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"custom:ha-mi-humidifier-card",name:"Mi Humidifier Card",description:"A custom card for Mi Humidifier",preview:!0}),l.MiHumidifierCard=class extends I{constructor(){super(...arguments),this.isLoading=!1,this.isTargetLoading=!1,this.pendingTargetHumidity=null,this.debounceTimeout=null,this.targetDebounceTimeout=null}static getStubConfig(){return{type:"custom:ha-mi-humidifier-card",entity:"humidifier.mi_humidifier",show_image:!0}}getCardSize(){return 3}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this.config=V({show_image:!0},t)}handlePowerClick(){return H(this,null,function*(){!this.config.entity||this.isLoading||(this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(()=>H(this,null,function*(){try{this.isLoading=!0;const e=this.hass.states[this.config.entity].state==="on"?"off":"on",i=e==="on"?"turn_on":"turn_off",r=V({},this.hass.states[this.config.entity]);this.hass.states[this.config.entity]=it(V({},r),{state:e}),this.requestUpdate(),yield this.hass.callService("humidifier",i,{entity_id:this.config.entity})}catch(t){console.error("Failed to toggle power:",t)}finally{this.isLoading=!1,this.debounceTimeout=null}}),100))})}handleTargetChange(t){return H(this,null,function*(){!this.config.entity||this.isTargetLoading||(this.targetDebounceTimeout&&clearTimeout(this.targetDebounceTimeout),this.targetDebounceTimeout=setTimeout(()=>H(this,null,function*(){try{this.isTargetLoading=!0;const e=this.hass.states[this.config.entity],i=this.pendingTargetHumidity!==null?this.pendingTargetHumidity:e.attributes.target_humidity||50,r=Math.min(80,Math.max(40,i+t));r!==i&&(this.pendingTargetHumidity=r,this.requestUpdate(),yield this.hass.callService("humidifier","set_humidity",{entity_id:this.config.entity,humidity:r}))}catch(e){console.error("Failed to change target humidity:",e),this.pendingTargetHumidity=null,this.requestUpdate()}finally{this.isTargetLoading=!1,this.targetDebounceTimeout=null}}),100))})}static get styles(){return M`
      ha-card {
        height: 100%;
        background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
        border-radius: var(--ha-card-border-radius, 12px);
        padding: 16px;
        box-sizing: border-box;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .title {
        font-size: 1.1em;
        font-weight: 500;
        color: var(--primary-text-color, #fff);
        opacity: 0.9;
      }
      .status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .humidity-display {
        display: flex;
        align-items: baseline;
        gap: 4px;
      }
      .humidity-value {
        font-size: 2em;
        font-weight: 500;
        color: var(--primary-text-color, #fff);
        line-height: 1;
      }
      .humidity-unit {
        font-size: 1.2em;
        color: var(--primary-text-color, #fff);
        opacity: 0.8;
      }
      .current-humidity {
        font-size: 1.1em;
        color: var(--primary-text-color, #fff);
        opacity: 0.6;
      }
      .state-text {
        font-size: 1.1em;
        color: var(--primary-text-color, #fff);
        opacity: 0.9;
        padding: 4px 12px;
        border-radius: 12px;
        background: var(--primary-color, #0984ff);
      }
      .state-text[inactive] {
        background: var(--disabled-color, #666);
      }
      .slider-container {
        width: 100%;
        margin: 16px 0;
      }
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: var(--primary-color, #0984ff);
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;
      }
      .slider:hover {
        opacity: 1;
      }
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color, #0984ff);
        cursor: pointer;
        border: 2px solid var(--card-background-color, #1c1c1c);
        box-shadow: 0 0 0 1px var(--primary-color, #0984ff);
      }
      .slider::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color, #0984ff);
        cursor: pointer;
        border: 2px solid var(--card-background-color, #1c1c1c);
        box-shadow: 0 0 0 1px var(--primary-color, #0984ff);
      }
      .slider:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
      .controls {
        display: flex;
        gap: 20px;
        margin-top: 8px;
        justify-content: center;
      }
      .control-button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid var(--primary-color, #0984ff);
        background: transparent;
        color: var(--primary-color, #0984ff);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        transition: all 0.2s ease;
        padding: 0;
        line-height: 1;
      }
      .control-button:hover {
        background: var(--primary-color, #0984ff);
        color: var(--card-background-color, #1c1c1c);
      }
      .control-button[disabled] {
        opacity: 0.3;
        cursor: not-allowed;
      }
      .power-button {
        width: 100%;
        padding: 14px;
        border: none;
        border-radius: 8px;
        background: var(--primary-color, #0984ff);
        color: var(--primary-color-text, #fff);
        cursor: pointer;
        margin-top: 24px;
        transition: all 0.2s ease;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .power-button:hover {
        opacity: 0.9;
        transform: scale(0.99);
      }
      .power-button[inactive] {
        background: var(--disabled-color, #666);
      }
      .power-button[loading] {
        pointer-events: none;
        opacity: 0.7;
        position: relative;
        overflow: hidden;
      }
      .power-button[loading]::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: var(--primary-color-text, #fff);
        bottom: 0;
        left: -100%;
        animation: loading 1s infinite linear;
      }
      @keyframes loading {
        from { left: -100%; }
        to { left: 100%; }
      }
      .device-image {
        width: 100%;
        max-width: 200px;
        height: 200px;
        margin: 0 auto 16px;
        display: block;
        background: url("./humidifier-1.png") no-repeat center;
        background-size: contain;
      }
      .controls-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        padding: 8px;
        background: rgba(var(--rgb-primary-color, 9, 132, 255), 0.1);
        border-radius: 8px;
      }
      
      .control-label {
        font-size: 0.9em;
        color: var(--primary-text-color, #fff);
        opacity: 0.9;
      }

      .toggle-button {
        background: none;
        border: 2px solid var(--primary-color, #0984ff);
        border-radius: 12px;
        padding: 4px 8px;
        color: var(--primary-color, #0984ff);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .toggle-button[active] {
        background: var(--primary-color, #0984ff);
        color: var(--primary-color-text, #fff);
      }

      .toggle-button:hover {
        opacity: 0.8;
      }

      .water-warning {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.2);
        border-radius: 8px;
        color: var(--warning-color, #ff9800);
        font-size: 0.9em;
      }

      .water-warning svg {
        width: 20px;
        height: 20px;
      }

      .water-level {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 16px;
        padding: 8px 12px;
        background: rgba(var(--rgb-primary-color, 9, 132, 255), 0.1);
        border-radius: 8px;
      }

      .water-level svg {
        width: 24px;
        height: 24px;
        color: var(--primary-color, #0984ff);
      }

      .water-level-text {
        color: var(--primary-text-color, #fff);
        font-size: 0.9em;
      }

      .water-level[data-state="empty"] {
        background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
      }
      
      .water-level[data-state="empty"] svg {
        color: var(--error-color, #f44336);
      }

      .image-error {
        text-align: center;
        padding: 16px;
        background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.1);
        border-radius: 8px;
        color: var(--warning-color, #ff9800);
        margin: 16px 0;
      }

      .image-container {
        width: 100%;
        margin-bottom: 16px;
        text-align: center;
      }
      .image-container img {
        max-width: 200px;
        height: auto;
        border-radius: 8px;
      }
    `}handleSliderChange(t){var i,r;const e=Number(t.target.value);this.config.entity&&!this.isTargetLoading&&this.handleTargetChange(e-((r=(i=this.pendingTargetHumidity)!=null?i:this.hass.states[this.config.entity].attributes.target_humidity)!=null?r:50))}_renderImage(){return z`<div class="device-image"></div>`}render(){var n,o,c;if(!this.config||!this.hass||!this.config.entity)return z``;const t=this.hass.states[this.config.entity];if(!t)return z`
        <ha-card>
          <div class="card-content">
            <div class="not-found">Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;const e=t.attributes.current_humidity||0,i=this.pendingTargetHumidity!==null?this.pendingTargetHumidity:t.attributes.target_humidity||50,r=t.state==="on";return z`
      <ha-card>
        <div class="card-content">
          ${this.config.show_image?this._renderImage():""}
          <div class="header">
            <div class="title">${t.attributes.friendly_name||this.config.entity}</div>
            <div class="state-text" ?inactive=${!r}>${r?"ON":"OFF"}</div>
          </div>
          
          <div class="status">
            <div class="humidity-display">
              <span class="humidity-value">${i}</span>
              <span class="humidity-unit">%</span>
            </div>
            <div class="current-humidity">${e}%</div>
          </div>

          <div class="slider-container">
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              .value=${i}
              class="slider"
              @change=${this.handleSliderChange}
              ?disabled=${!r}
            >
          </div>

          <div class="controls">
            <button 
              class="control-button"
              @click=${()=>this.handleTargetChange(-5)}
              ?disabled=${!r}
            >
              -
            </button>
            <button 
              class="control-button"
              @click=${()=>this.handleTargetChange(5)}
              ?disabled=${!r}
            >
              +
            </button>
          </div>

          <div class="water-level" data-state=${((n=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])==null?void 0:n.state)==="on"?"empty":"ok"}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
            </svg>
            <span class="water-level-text">
              ${((o=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])==null?void 0:o.state)==="on"?"Tank Empty":"Tank OK"}
            </span>
          </div>

          ${((c=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])==null?void 0:c.state)==="on"?z`
            <div class="water-warning">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
              </svg>
              Water tank needs refilling
            </div>
          `:""}

          <button 
            class="power-button"
            @click=${this.handlePowerClick}
            ?inactive=${!r}
            ?loading=${this.isLoading}
            ?disabled=${this.isLoading}
          >
            ${r?"Turn Off":"Turn On"}
          </button>
        </div>
      </ha-card>
    `}},T([B({attribute:!1})],l.MiHumidifierCard.prototype,"hass",2),T([B()],l.MiHumidifierCard.prototype,"config",2),T([B()],l.MiHumidifierCard.prototype,"isLoading",2),T([B()],l.MiHumidifierCard.prototype,"isTargetLoading",2),T([B()],l.MiHumidifierCard.prototype,"pendingTargetHumidity",2),l.MiHumidifierCard=T([Dt("ha-mi-humidifier-card")],l.MiHumidifierCard),Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})})(this.HaMiHumidifierCard=this.HaMiHumidifierCard||{});
//# sourceMappingURL=ha-mi-humidifier-card.js.map
