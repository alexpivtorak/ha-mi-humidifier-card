function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const d=window,h=d.trustedTypes,c=h?h.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},f="finalized";let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;y[f]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:y}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const $=window,_=$.trustedTypes,b=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,E=`<${w}>`,C=document,S=()=>C.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,H="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,M=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),B=new WeakMap,I=C.createTreeWalker(C,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=P;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===P?"!--"===l[1]?n=U:void 0!==l[1]?n=O:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=M):void 0!==l[3]&&(n=M):n===M?">"===l[0]?(n=null!=r?r:P,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?M:'"'===l[3]?N:L):n===N||n===L?n=M:n===U||n===O?n=P:(n=M,r=void 0);const c=n===M&&t[e+1].startsWith("/>")?" ":"";o+=n===P?i+E:d>=0?(s.push(a),i.slice(0,d)+A+i.slice(d)+x+c):i+x+(-2===d?(s.push(void 0),e):c)}return[V(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,d]=q(t,e);if(this.el=W.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(A)||e.startsWith(x)){const i=d[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+A).split(x),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?X:"@"===e[1]?Y:J})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),I.nextNode(),a.push({type:2,index:++r});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var r,o,n,a;if(e===j)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const d=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);I.currentNode=r;let o=I.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new F(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tt(o,this,t)),this._$AV.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=I.nextNode(),n++)}return I.currentNode=C,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var r;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=W.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new Z(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new W(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new F(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,s,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=K(this,s[i+n],e,n),a===j&&(a=this._$AH[n]),o||(o=!T(a)||a!==this._$AH[n]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const Q=_?_.emptyScript:"";class X extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends J{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:D)===j)return;const s=this._$AH,r=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==D&&(s===D||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const et=$.litHtmlPolyfillSupport;null==et||et(W,F),(null!==(m=$.litHtmlVersions)&&void 0!==m?m:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new F(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}rt.finalized=!0,rt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:rt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:rt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements,window.customCards=window.customCards||[],window.customCards.push({type:"ha-mi-humidifier-card",name:"Mi Humidifier Card",description:"A custom card for Mi Humidifier"});let dt=class extends rt{constructor(){super(...arguments),this.isLoading=!1,this.isTargetLoading=!1,this.pendingTargetHumidity=null,this.debounceTimeout=null,this.targetDebounceTimeout=null}static getStubConfig(){return{entity:"humidifier.deerma_jsq5_8f1b_humidifier"}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this.config=t}async handlePowerClick(){this.config.entity&&!this.isLoading&&(this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((async()=>{try{this.isLoading=!0;const t="on"===this.hass.states[this.config.entity].state?"off":"on",e="on"===t?"turn_on":"turn_off",i=Object.assign({},this.hass.states[this.config.entity]);this.hass.states[this.config.entity]=Object.assign(Object.assign({},i),{state:t}),this.requestUpdate(),await this.hass.callService("humidifier",e,{entity_id:this.config.entity})}catch(t){console.error("Failed to toggle power:",t)}finally{this.isLoading=!1,this.debounceTimeout=null}}),100))}async handleTargetChange(t){this.config.entity&&!this.isTargetLoading&&(this.targetDebounceTimeout&&clearTimeout(this.targetDebounceTimeout),this.targetDebounceTimeout=setTimeout((async()=>{try{this.isTargetLoading=!0;const e=this.hass.states[this.config.entity],i=null!==this.pendingTargetHumidity?this.pendingTargetHumidity:e.attributes.target_humidity||50,s=Math.min(80,Math.max(40,i+t));s!==i&&(this.pendingTargetHumidity=s,this.requestUpdate(),await this.hass.callService("humidifier","set_humidity",{entity_id:this.config.entity,humidity:s}))}catch(t){console.error("Failed to change target humidity:",t),this.pendingTargetHumidity=null,this.requestUpdate()}finally{this.isTargetLoading=!1,this.targetDebounceTimeout=null}}),100))}static get styles(){return n`
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
        width: 120px;
        height: auto;
        margin: 16px auto;
        display: block;
        filter: brightness(0.95);
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
    `}handleSliderChange(t){var e,i;const s=Number(t.target.value);this.config.entity&&!this.isTargetLoading&&this.handleTargetChange(s-(null!==(i=null!==(e=this.pendingTargetHumidity)&&void 0!==e?e:this.hass.states[this.config.entity].attributes.target_humidity)&&void 0!==i?i:50))}render(){var t,e,i;if(!this.config||!this.hass)return z``;const s=this.hass.states[this.config.entity];if(!s)return z`
        <ha-card>
          <div class="card-content">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const r="on"===s.state,o=s.attributes.current_humidity,n=null!==this.pendingTargetHumidity?this.pendingTargetHumidity:s.attributes.target_humidity||50;return z`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title">
              ${s.attributes.friendly_name||"Mi Humidifier"}
            </div>
            <div class="state-text" ?inactive=${!r}>
              ${r?"On":"Off"}
            </div>
          </div>

          <img 
            src="http://localhost:5000/humidifier-1.png"
            alt="Mi Humidifier" 
            class="device-image"
          >
          
          <div class="status">
            <div class="humidity-display">
              <span class="humidity-value">${n}</span>
              <span class="humidity-unit">%</span>
            </div>
            ${o?z`
              <div class="current-humidity">Current: ${o}%</div>
            `:""}
          </div>

          <div class="slider-container">
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              .value=${n}
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

          <div class="water-level" data-state=${"on"===(null===(t=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])||void 0===t?void 0:t.state)?"empty":"ok"}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
            </svg>
            <span class="water-level-text">
              ${"on"===(null===(e=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])||void 0===e?void 0:e.state)?"Tank Empty":"Tank OK"}
            </span>
          </div>

          ${"on"===(null===(i=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])||void 0===i?void 0:i.state)?z`
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
    `}};t([at({attribute:!1})],dt.prototype,"hass",void 0),t([at()],dt.prototype,"config",void 0),t([at()],dt.prototype,"isLoading",void 0),t([at()],dt.prototype,"isTargetLoading",void 0),t([at()],dt.prototype,"pendingTargetHumidity",void 0),dt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("ha-mi-humidifier-card")],dt);export{dt as MiHumidifierCard};
