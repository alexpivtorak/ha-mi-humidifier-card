var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d, _e, _f;
const t$2 = globalThis, e$2 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$1 = Symbol(), o$3 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$3.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$3.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$1), i$3 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$3(o2, t2, s$1);
}, S$1 = (s2, o2) => {
  if (e$2) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$2.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: r$3, getOwnPropertyNames: h$1, getOwnPropertySymbols: o$2, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s2) => !i$2(t2, s2), y$1 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 };
(_a = Symbol.metadata) != null ? _a : Symbol.metadata = Symbol("metadata"), (_b = a$1.litPropertyMetadata) != null ? _b : a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap();
class b extends HTMLElement {
  static addInitializer(t2) {
    var _a2;
    this._$Ei(), ((_a2 = this.l) != null ? _a2 : this.l = []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = y$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), r3 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== r3 && e$1(this.prototype, t2, r3);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    var _a2;
    const { get: e2, set: h2 } = (_a2 = r$3(this.prototype, t2)) != null ? _a2 : { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get() {
      return e2 == null ? void 0 : e2.call(this);
    }, set(s3) {
      const r3 = e2 == null ? void 0 : e2.call(this);
      h2.call(this, s3), this.requestUpdate(t2, r3, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    var _a2;
    return (_a2 = this.elementProperties.get(t2)) != null ? _a2 : y$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...h$1(t3), ...o$2(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a2, _b3;
    ((_a2 = this._$EO) != null ? _a2 : this._$EO = /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_b3 = t2.hostConnected) == null ? void 0 : _b3.call(t2));
  }
  removeController(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    var _a2;
    const t2 = (_a2 = this.shadowRoot) != null ? _a2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a2, _b3;
    (_a2 = this.renderRoot) != null ? _a2 : this.renderRoot = this.createRenderRoot(), this.enableUpdating(true), (_b3 = this._$EO) == null ? void 0 : _b3.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$EC(t2, s2) {
    var _a2;
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const r3 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == r3 ? this.removeAttribute(e2) : this.setAttribute(e2, r3), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a2;
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), r3 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u$1;
      this._$Em = e2, this[e2] = r3.fromAttribute(s2, t3.type), this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2) {
    var _a2;
    if (void 0 !== t2) {
      if (i2 != null ? i2 : i2 = this.constructor.getPropertyOptions(t2), !((_a2 = i2.hasChanged) != null ? _a2 : f$1)(this[t2], s2)) return;
      this.P(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t2, s2, i2) {
    var _a2;
    this._$AL.has(t2) || this._$AL.set(t2, s2), true === i2.reflect && this._$Em !== t2 && ((_a2 = this._$Ej) != null ? _a2 : this._$Ej = /* @__PURE__ */ new Set()).add(t2);
  }
  _$ET() {
    return __async(this, null, function* () {
      this.isUpdatePending = true;
      try {
        yield this._$ES;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && (yield t2), !this.isUpdatePending;
    });
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2, _b3;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if ((_a2 = this.renderRoot) != null ? _a2 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) true !== i2.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i2);
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_b3 = this._$EO) == null ? void 0 : _b3.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (s3) {
      throw t2 = false, this._$EU(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
      var _a3;
      return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t3) => this._$EC(t3, this[t3]))), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d$1("elementProperties")] = /* @__PURE__ */ new Map(), b[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: b }), ((_c = a$1.reactiveElementVersions) != null ? _c : a$1.reactiveElementVersions = []).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, i$1 = t$1.trustedTypes, s = i$1 ? i$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$1 = "?" + h, n$1 = `<${o$1}>`, r$2 = document, l = () => r$2.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), x = y(1), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r$2.createTreeWalker(r$2, 129);
function P(t2, i2) {
  if (!a(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s ? s.createHTML(i2) : i2;
}
const V = (t2, i2) => {
  const s2 = t2.length - 1, o2 = [];
  let r3, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = f;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d2 = -1, y2 = 0;
    for (; y2 < s3.length && (c2.lastIndex = y2, u2 = c2.exec(s3), null !== u2); ) y2 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r3 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r3 != null ? r3 : f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r3 = void 0);
    const x2 = c2 === m && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === f ? s3 + n$1 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i3 : x2);
  }
  return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), o2];
};
class N {
  constructor({ strings: t2, _$litType$: s2 }, n3) {
    let r3;
    this.parts = [];
    let c2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = V(t2, s2);
    if (this.el = N.createElement(f2, n3), C.currentNode = this.el.content, 2 === s2 || 3 === s2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r3 = C.nextNode()) && d2.length < u2; ) {
      if (1 === r3.nodeType) {
        if (r3.hasAttributes()) for (const t3 of r3.getAttributeNames()) if (t3.endsWith(e)) {
          const i2 = v2[a2++], s3 = r3.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i2);
          d2.push({ type: 1, index: c2, name: e2[2], strings: s3, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r3.removeAttribute(t3);
        } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r3.removeAttribute(t3));
        if ($.test(r3.tagName)) {
          const t3 = r3.textContent.split(h), s3 = t3.length - 1;
          if (s3 > 0) {
            r3.textContent = i$1 ? i$1.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++) r3.append(t3[i2], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
            r3.append(t3[s3], l());
          }
        }
      } else if (8 === r3.nodeType) if (r3.data === o$1) d2.push({ type: 2, index: c2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r3.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
      }
      c2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = r$2.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S(t2, i2, s2 = t2, e2) {
  var _a2, _b2, _c2;
  if (i2 === T) return i2;
  let h2 = void 0 !== e2 ? (_a2 = s2._$Co) == null ? void 0 : _a2[e2] : s2._$Cl;
  const o2 = c(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b2 = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b2.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? ((_c2 = s2._$Co) != null ? _c2 : s2._$Co = [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = S(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
class M {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var _a2;
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = ((_a2 = t2 == null ? void 0 : t2.creationScope) != null ? _a2 : r$2).importNode(i2, true);
    C.currentNode = e2;
    let h2 = C.nextNode(), o2 = 0, n3 = 0, l2 = s2[0];
    for (; void 0 !== l2; ) {
      if (o2 === l2.index) {
        let i3;
        2 === l2.type ? i3 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i3 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i3 = new z(h2, this, t2)), this._$AV.push(i3), l2 = s2[++n3];
      }
      o2 !== (l2 == null ? void 0 : l2.index) && (h2 = C.nextNode(), o2++);
    }
    return C.currentNode = r$2, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class R {
  get _$AU() {
    var _a2, _b2;
    return (_b2 = (_a2 = this._$AM) == null ? void 0 : _a2._$AU) != null ? _b2 : this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    var _a2;
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = (_a2 = e2 == null ? void 0 : e2.isConnected) != null ? _a2 : true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = S(this, t2, i2), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r$2.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a2;
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e2) this._$AH.p(i2);
    else {
      const t3 = new M(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = A.get(t2.strings);
    return void 0 === i2 && A.set(t2.strings, i2 = new N(t2)), i2;
  }
  k(t2) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new R(this.O(l()), this.O(l()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
  }
}
class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = S(this, t2, i2, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r3;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r3 = S(this, e3[s2 + n3], i2, n3), r3 === T && (r3 = this._$AH[n3]), o2 || (o2 = !c(r3) || r3 !== this._$AH[n3]), r3 === E ? t2 = E : t2 !== E && (t2 += (r3 != null ? r3 : "") + h2[n3 + 1]), this._$AH[n3] = r3;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === E ? void 0 : t2;
  }
}
class I extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
  }
}
class L extends k {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var _a2;
    if ((t2 = (_a2 = S(this, t2, i2, 0)) != null ? _a2 : E) === T) return;
    const s2 = this._$AH, e2 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a2, _b2;
    "function" == typeof this._$AH ? this._$AH.call((_b2 = (_a2 = this.options) == null ? void 0 : _a2.host) != null ? _b2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
}
const j = t$1.litHtmlPolyfillSupport;
j == null ? void 0 : j(N, R), ((_d = t$1.litHtmlVersions) != null ? _d : t$1.litHtmlVersions = []).push("3.2.1");
const B = (t2, i2, s2) => {
  var _a2, _b2;
  const e2 = (_a2 = s2 == null ? void 0 : s2.renderBefore) != null ? _a2 : i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (_b2 = s2 == null ? void 0 : s2.renderBefore) != null ? _b2 : null;
    e2._$litPart$ = h2 = new R(i2.insertBefore(l(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let r$1 = class r extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a2, _b2;
    const t2 = super.createRenderRoot();
    return (_b2 = (_a2 = this.renderOptions).renderBefore) != null ? _b2 : _a2.renderBefore = t2.firstChild, t2;
  }
  update(t2) {
    const s2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B(s2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return T;
  }
};
r$1._$litElement$ = true, r$1["finalized"] = true, (_e = globalThis.litElementHydrateSupport) == null ? void 0 : _e.call(globalThis, { LitElement: r$1 });
const i = globalThis.litElementPolyfillSupport;
i == null ? void 0 : i({ LitElement: r$1 });
((_f = globalThis.litElementVersions) != null ? _f : globalThis.litElementVersions = []).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r2 = (t2 = o, e2, r3) => {
  const { kind: n3, metadata: i2 } = r3;
  let s2 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = /* @__PURE__ */ new Map()), s2.set(r3.name, t2), "accessor" === n3) {
    const { name: o2 } = r3;
    return { set(r4) {
      const n4 = e2.get.call(this);
      e2.set.call(this, r4), this.requestUpdate(o2, n4, t2);
    }, init(e3) {
      return void 0 !== e3 && this.P(o2, void 0, t2), e3;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r3;
    return function(r4) {
      const n4 = this[o2];
      e2.call(this, r4), this.requestUpdate(o2, n4, t2);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n2(t2) {
  return (e2, o2) => "object" == typeof o2 ? r2(t2, e2, o2) : ((t3, e3, o3) => {
    const r3 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, r3 ? __spreadProps(__spreadValues({}, t3), { wrapped: true }) : t3), r3 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp2(target, key, result);
  return result;
};
if (!window.customElements.get("ha-mi-humidifier-card")) {
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "ha-mi-humidifier-card",
    name: "Mi Humidifier Card",
    description: "A custom card for Mi Humidifier"
  });
  let MiHumidifierCard = class extends r$1 {
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
        type: "custom:ha-mi-humidifier-card",
        entity: "humidifier.deerma_jsq5_8f1b_humidifier"
      };
    }
    setConfig(config) {
      if (!config.entity) {
        throw new Error("Please define an entity");
      }
      this.config = config;
    }
    handlePowerClick() {
      return __async(this, null, function* () {
        if (!this.config.entity || this.isLoading) return;
        if (this.debounceTimeout) {
          clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => __async(this, null, function* () {
          try {
            this.isLoading = true;
            const state = this.hass.states[this.config.entity];
            const newState = state.state === "on" ? "off" : "on";
            const service = newState === "on" ? "turn_on" : "turn_off";
            const oldState = __spreadValues({}, this.hass.states[this.config.entity]);
            this.hass.states[this.config.entity] = __spreadProps(__spreadValues({}, oldState), {
              state: newState
            });
            this.requestUpdate();
            yield this.hass.callService("humidifier", service, {
              entity_id: this.config.entity
            });
          } catch (error) {
            console.error("Failed to toggle power:", error);
          } finally {
            this.isLoading = false;
            this.debounceTimeout = null;
          }
        }), 100);
      });
    }
    handleTargetChange(change) {
      return __async(this, null, function* () {
        if (!this.config.entity || this.isTargetLoading) return;
        if (this.targetDebounceTimeout) {
          clearTimeout(this.targetDebounceTimeout);
        }
        this.targetDebounceTimeout = setTimeout(() => __async(this, null, function* () {
          try {
            this.isTargetLoading = true;
            const stateObj = this.hass.states[this.config.entity];
            const currentTarget = this.pendingTargetHumidity !== null ? this.pendingTargetHumidity : stateObj.attributes.target_humidity || 50;
            const newTarget = Math.min(80, Math.max(40, currentTarget + change));
            if (newTarget !== currentTarget) {
              this.pendingTargetHumidity = newTarget;
              this.requestUpdate();
              yield this.hass.callService("humidifier", "set_humidity", {
                entity_id: this.config.entity,
                humidity: newTarget
              });
            }
          } catch (error) {
            console.error("Failed to change target humidity:", error);
            this.pendingTargetHumidity = null;
            this.requestUpdate();
          } finally {
            this.isTargetLoading = false;
            this.targetDebounceTimeout = null;
          }
        }), 100);
      });
    }
    static get styles() {
      return i$3`
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
    handleSliderChange(e2) {
      var _a2, _b2;
      const value = Number(e2.target.value);
      if (this.config.entity && !this.isTargetLoading) {
        this.handleTargetChange(value - ((_b2 = (_a2 = this.pendingTargetHumidity) != null ? _a2 : this.hass.states[this.config.entity].attributes.target_humidity) != null ? _b2 : 50));
      }
    }
    _renderImage() {
      return x`
        <img 
          src="./images/humidifier-1.png"
          alt="Mi Humidifier"
          class="device-image"
          @error=${(e2) => {
        const img = e2.target;
        console.log("❌ Failed to load image. Please check:");
        console.log("   /config/www/community/ha-mi-humidifier-card/images/humidifier-1.png");
        console.log("Current src:", img.src);
        if (img.src.includes("/images/")) {
          console.log("🔄 Trying root path...");
          img.src = "./humidifier-1.png";
        } else {
          img.style.display = "none";
          const container = img.parentElement;
          if (container) {
            const error = document.createElement("div");
            error.className = "image-error";
            error.textContent = "⚠️ Image not found";
            container.appendChild(error);
          }
        }
      }}
        />
      `;
    }
    render() {
      var _a2, _b2, _c2;
      if (!this.config || !this.hass || !this.config.entity) {
        return x``;
      }
      const stateObj = this.hass.states[this.config.entity];
      if (!stateObj) {
        return x`
          <ha-card>
            <div class="card-content">
              <div class="not-found">Entity not found: ${this.config.entity}</div>
            </div>
          </ha-card>
        `;
      }
      const currentHumidity = stateObj.attributes.current_humidity || 0;
      const targetHumidity = this.pendingTargetHumidity !== null ? this.pendingTargetHumidity : stateObj.attributes.target_humidity || 50;
      const isOn = stateObj.state === "on";
      return x`
        <ha-card>
          <div class="card-content">
            <div class="header">
              <div class="title">${stateObj.attributes.friendly_name || this.config.entity}</div>
              <div class="state-text" ?inactive=${!isOn}>${isOn ? "ON" : "OFF"}</div>
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

            <div class="water-level" data-state=${((_a2 = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : _a2.state) === "on" ? "empty" : "ok"}>
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
              </svg>
              <span class="water-level-text">
                ${((_b2 = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : _b2.state) === "on" ? "Tank Empty" : "Tank OK"}
              </span>
            </div>

            ${((_c2 = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : _c2.state) === "on" ? x`
              <div class="water-warning">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
                </svg>
                Water tank needs refilling
              </div>
            ` : ""}

            <button 
              class="power-button"
              @click=${this.handlePowerClick}
              ?inactive=${!isOn}
              ?loading=${this.isLoading}
              ?disabled=${this.isLoading}
            >
              ${isOn ? "Turn Off" : "Turn On"}
            </button>
          </div>
        </ha-card>
      `;
    }
  };
  __decorateClass([
    n2({ attribute: false })
  ], MiHumidifierCard.prototype, "hass", 2);
  __decorateClass([
    n2()
  ], MiHumidifierCard.prototype, "config", 2);
  __decorateClass([
    n2()
  ], MiHumidifierCard.prototype, "isLoading", 2);
  __decorateClass([
    n2()
  ], MiHumidifierCard.prototype, "isTargetLoading", 2);
  __decorateClass([
    n2()
  ], MiHumidifierCard.prototype, "pendingTargetHumidity", 2);
  MiHumidifierCard = __decorateClass([
    t("ha-mi-humidifier-card")
  ], MiHumidifierCard);
}
//# sourceMappingURL=ha-mi-humidifier-card.js.map
