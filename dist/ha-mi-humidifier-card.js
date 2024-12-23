/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$4=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i$1.litHtmlVersions)&&void 0!==t?t:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

window.customCards = window.customCards || [];
window.customCards.push({
    type: "ha-mi-humidifier-card",
    name: "Mi Humidifier Card",
    description: "A custom card for Mi Humidifier",
});
let MiHumidifierCard = class MiHumidifierCard extends s {
    constructor() {
        super(...arguments);
        this.isLoading = false;
        this.isTargetLoading = false;
        this.pendingTargetHumidity = null;
        this.debounceTimeout = null;
        this.targetDebounceTimeout = null;
    }
    static getStubConfig() {
        return {
            entity: 'humidifier.deerma_jsq5_8f1b_humidifier',
        };
    }
    setConfig(config) {
        if (!config.entity) {
            throw new Error('Please define an entity');
        }
        this.config = config;
    }
    async handlePowerClick() {
        if (!this.config.entity || this.isLoading)
            return;
        // Clear any pending debounce
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(async () => {
            try {
                this.isLoading = true;
                const state = this.hass.states[this.config.entity];
                const newState = state.state === 'on' ? 'off' : 'on';
                const service = newState === 'on' ? 'turn_on' : 'turn_off';
                // Optimistically update the state
                const oldState = Object.assign({}, this.hass.states[this.config.entity]);
                this.hass.states[this.config.entity] = Object.assign(Object.assign({}, oldState), { state: newState });
                this.requestUpdate();
                await this.hass.callService('humidifier', service, {
                    entity_id: this.config.entity,
                });
            }
            catch (error) {
                console.error('Failed to toggle power:', error);
            }
            finally {
                this.isLoading = false;
                this.debounceTimeout = null;
            }
        }, 100); // 100ms debounce
    }
    async handleTargetChange(change) {
        if (!this.config.entity || this.isTargetLoading)
            return;
        // Clear any pending debounce
        if (this.targetDebounceTimeout) {
            clearTimeout(this.targetDebounceTimeout);
        }
        this.targetDebounceTimeout = setTimeout(async () => {
            try {
                this.isTargetLoading = true;
                const stateObj = this.hass.states[this.config.entity];
                // Get current target from either pending or state
                const currentTarget = this.pendingTargetHumidity !== null
                    ? this.pendingTargetHumidity
                    : (stateObj.attributes.target_humidity || 50);
                // Calculate new target with bounds check (40-80 range)
                const newTarget = Math.min(80, Math.max(40, currentTarget + change));
                // Only update if the value actually changed
                if (newTarget !== currentTarget) {
                    // Update pending target humidity for optimistic UI update
                    this.pendingTargetHumidity = newTarget;
                    this.requestUpdate();
                    await this.hass.callService('humidifier', 'set_humidity', {
                        entity_id: this.config.entity,
                        humidity: newTarget
                    });
                }
            }
            catch (error) {
                console.error('Failed to change target humidity:', error);
                // Reset pending target on error
                this.pendingTargetHumidity = null;
                this.requestUpdate();
            }
            finally {
                this.isTargetLoading = false;
                this.targetDebounceTimeout = null;
            }
        }, 100); // 100ms debounce
    }
    static get styles() {
        return i$2 `
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
        height: auto;
        margin: 0 auto 16px;
        display: block;
        filter: brightness(0.9) contrast(1.1);
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
    `;
    }
    handleSliderChange(e) {
        var _a, _b;
        const value = Number(e.target.value);
        if (this.config.entity && !this.isTargetLoading) {
            this.handleTargetChange(value - ((_b = (_a = this.pendingTargetHumidity) !== null && _a !== void 0 ? _a : this.hass.states[this.config.entity].attributes.target_humidity) !== null && _b !== void 0 ? _b : 50));
        }
    }
    _renderImage() {
        var _a;
        // Log current environment info
        console.log('🔍 Environment:', {
            baseUrl: window.location.origin,
            cardPath: ((_a = this.config) === null || _a === void 0 ? void 0 : _a.path) || 'unknown'
        });
        // Store tried paths in a Set to prevent loops
        const triedPaths = new Set();
        return x `
      <img 
        src="/local/ha-mi-humidifier-card/humidifier-1.png"
        alt="Mi Humidifier"
        class="device-image"
        @error=${(e) => {
            const img = e.target;
            const currentPath = img.src.split(window.location.origin)[1];
            if (triedPaths.has(currentPath)) {
                console.log('⚠️ Already tried this path, stopping to prevent loop:', currentPath);
                return;
            }
            triedPaths.add(currentPath);
            console.log('❌ Failed to load image from:', currentPath);
            // Try next path
            if (currentPath === '/local/ha-mi-humidifier-card/humidifier-1.png') {
                console.log('🔄 Trying HACS path...');
                img.src = '/hacsfiles/ha-mi-humidifier-card/humidifier-1.png';
            }
            else if (currentPath === '/hacsfiles/ha-mi-humidifier-card/humidifier-1.png') {
                console.log('🔄 Trying community path...');
                img.src = '/local/community/ha-mi-humidifier-card/humidifier-1.png';
            }
            else {
                console.log('❗ All paths tried. Please check these locations:');
                console.log('   1. config/www/ha-mi-humidifier-card/humidifier-1.png');
                console.log('   2. config/www/community/ha-mi-humidifier-card/humidifier-1.png');
                // Show a placeholder or error state
                img.style.display = 'none';
                const container = img.parentElement;
                if (container) {
                    const error = document.createElement('div');
                    error.className = 'image-error';
                    error.textContent = '⚠️ Image not found';
                    container.appendChild(error);
                }
            }
        }}
      />
    `;
    }
    render() {
        var _a, _b, _c;
        if (!this.config || !this.hass || !this.config.entity) {
            return x ``;
        }
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            return x `
        <ha-card>
          <div class="card-content">
            <div class="not-found">Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;
        }
        const currentHumidity = stateObj.attributes.current_humidity || 0;
        const targetHumidity = this.pendingTargetHumidity !== null
            ? this.pendingTargetHumidity
            : (stateObj.attributes.target_humidity || 50);
        const isOn = stateObj.state === 'on';
        return x `
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title">${stateObj.attributes.friendly_name || this.config.entity}</div>
            <div class="state-text" ?inactive=${!isOn}>${isOn ? 'ON' : 'OFF'}</div>
          </div>
          
          ${this._renderImage()}

          <div class="status">
            <div class="humidity-display">
              <span class="humidity-value">${targetHumidity}</span>
              <span class="humidity-unit">%</span>
            </div>
            <div class="current-humidity">${currentHumidity}%</div>
          </div>

          <div class="slider-container">
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              .value=${targetHumidity}
              class="slider"
              @change=${this.handleSliderChange}
              ?disabled=${!isOn}
            >
          </div>

          <div class="controls">
            <button 
              class="control-button"
              @click=${() => this.handleTargetChange(-5)}
              ?disabled=${!isOn}
            >
              -
            </button>
            <button 
              class="control-button"
              @click=${() => this.handleTargetChange(5)}
              ?disabled=${!isOn}
            >
              +
            </button>
          </div>

          <div class="water-level" data-state=${((_a = this.hass.states[`binary_sensor.${this.config.entity.split('.')[1]}_water_shortage_fault`]) === null || _a === void 0 ? void 0 : _a.state) === 'on' ? 'empty' : 'ok'}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
            </svg>
            <span class="water-level-text">
              ${((_b = this.hass.states[`binary_sensor.${this.config.entity.split('.')[1]}_water_shortage_fault`]) === null || _b === void 0 ? void 0 : _b.state) === 'on'
            ? 'Tank Empty'
            : 'Tank OK'}
            </span>
          </div>

          ${((_c = this.hass.states[`binary_sensor.${this.config.entity.split('.')[1]}_water_shortage_fault`]) === null || _c === void 0 ? void 0 : _c.state) === 'on' ? x `
            <div class="water-warning">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
              </svg>
              Water tank needs refilling
            </div>
          ` : ''}

          <button 
            class="power-button"
            @click=${this.handlePowerClick}
            ?inactive=${!isOn}
            ?loading=${this.isLoading}
            ?disabled=${this.isLoading}
          >
            ${isOn ? 'Turn Off' : 'Turn On'}
          </button>
        </div>
      </ha-card>
    `;
    }
};
__decorate([
    n$1({ attribute: false })
], MiHumidifierCard.prototype, "hass", void 0);
__decorate([
    n$1()
], MiHumidifierCard.prototype, "config", void 0);
__decorate([
    n$1()
], MiHumidifierCard.prototype, "isLoading", void 0);
__decorate([
    n$1()
], MiHumidifierCard.prototype, "isTargetLoading", void 0);
__decorate([
    n$1()
], MiHumidifierCard.prototype, "pendingTargetHumidity", void 0);
MiHumidifierCard = __decorate([
    e$1('ha-mi-humidifier-card')
], MiHumidifierCard);

export { MiHumidifierCard };
