var bt = Object.defineProperty, _t = Object.defineProperties;
var xt = Object.getOwnPropertyDescriptors;
var Q = Object.getOwnPropertySymbols;
var wt = Object.prototype.hasOwnProperty, At = Object.prototype.propertyIsEnumerable;
var X = (r, t, e) => t in r ? bt(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, S = (r, t) => {
  for (var e in t || (t = {}))
    wt.call(t, e) && X(r, e, t[e]);
  if (Q)
    for (var e of Q(t))
      At.call(t, e) && X(r, e, t[e]);
  return r;
}, B = (r, t) => _t(r, xt(t));
var _ = (r, t, e) => new Promise((i, s) => {
  var n = (a) => {
    try {
      c(e.next(a));
    } catch (l) {
      s(l);
    }
  }, o = (a) => {
    try {
      c(e.throw(a));
    } catch (l) {
      s(l);
    }
  }, c = (a) => a.done ? i(a.value) : Promise.resolve(a.value).then(n, o);
  c((e = e.apply(r, t)).next());
});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis, Z = z.ShadowRoot && (z.ShadyCSS === void 0 || z.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, K = Symbol(), Y = /* @__PURE__ */ new WeakMap();
let ft = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== K) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Z && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Y.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Y.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Et = (r) => new ft(typeof r == "string" ? r : r + "", void 0, K), St = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, s, n) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[n + 1], r[0]);
  return new ft(e, r, K);
}, Ct = (r, t) => {
  if (Z) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = z.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, tt = Z ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return Et(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Tt, defineProperty: Pt, getOwnPropertyDescriptor: kt, getOwnPropertyNames: Ht, getOwnPropertySymbols: Ut, getPrototypeOf: Ot } = Object, m = globalThis, et = m.trustedTypes, Mt = et ? et.emptyScript : "", V = m.reactiveElementPolyfillSupport, P = (r, t) => r, D = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Mt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch (i) {
        e = null;
      }
  }
  return e;
} }, J = (r, t) => !Tt(r, t), it = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: J };
var ht, lt;
(ht = Symbol.metadata) != null || (Symbol.metadata = Symbol("metadata")), (lt = m.litPropertyMetadata) != null || (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class x extends HTMLElement {
  static addInitializer(t) {
    var e;
    this._$Ei(), ((e = this.l) != null ? e : this.l = []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = it) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Pt(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    var o;
    const { get: s, set: n } = (o = kt(this.prototype, t)) != null ? o : { get() {
      return this[e];
    }, set(c) {
      this[e] = c;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(c) {
      const a = s == null ? void 0 : s.call(this);
      n.call(this, c), this.requestUpdate(t, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    var e;
    return (e = this.elementProperties.get(t)) != null ? e : it;
  }
  static _$Ei() {
    if (this.hasOwnProperty(P("elementProperties"))) return;
    const t = Ot(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(P("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(P("properties"))) {
      const e = this.properties, i = [...Ht(e), ...Ut(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(tt(s));
    } else t !== void 0 && e.push(tt(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$EO) != null ? e : this._$EO = /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) != null ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Ct(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t, e;
    (t = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EC(t, e) {
    var n;
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const o = (((n = i.converter) == null ? void 0 : n.toAttribute) !== void 0 ? i.converter : D).toAttribute(e, i.type);
      this._$Em = t, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const o = i.getPropertyOptions(s), c = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? o.converter : D;
      this._$Em = s, this[s] = c.fromAttribute(e, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    var s;
    if (t !== void 0) {
      if (i != null || (i = this.constructor.getPropertyOptions(t)), !((s = i.hasChanged) != null ? s : J)(this[t], e)) return;
      this.P(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, i) {
    var s;
    this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$Em !== t && ((s = this._$Ej) != null ? s : this._$Ej = /* @__PURE__ */ new Set()).add(t);
  }
  _$ET() {
    return _(this, null, function* () {
      this.isUpdatePending = !0;
      try {
        yield this._$ES;
      } catch (e) {
        Promise.reject(e);
      }
      const t = this.scheduleUpdate();
      return t != null && (yield t), !this.isUpdatePending;
    });
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i, s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if ((i = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, c] of this._$Ep) this[o] = c;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [o, c] of n) c.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], c);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((n) => {
        var o;
        return (o = n.hostUpdate) == null ? void 0 : o.call(n);
      }), this.update(e)) : this._$EU();
    } catch (n) {
      throw t = !1, this._$EU(), n;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
var dt;
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[P("elementProperties")] = /* @__PURE__ */ new Map(), x[P("finalized")] = /* @__PURE__ */ new Map(), V == null || V({ ReactiveElement: x }), ((dt = m.reactiveElementVersions) != null ? dt : m.reactiveElementVersions = []).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, j = k.trustedTypes, st = j ? j.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, mt = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, yt = "?" + f, Nt = `<${yt}>`, v = document, U = () => v.createComment(""), O = (r) => r === null || typeof r != "object" && typeof r != "function", G = Array.isArray, Lt = (r) => G(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", W = `[ 	
\f\r]`, C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, ot = />/g, y = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, at = /"/g, $t = /^(?:script|style|textarea|title)$/i, Rt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), T = Rt(1), w = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ct = /* @__PURE__ */ new WeakMap(), $ = v.createTreeWalker(v, 129);
function vt(r, t) {
  if (!G(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return st !== void 0 ? st.createHTML(t) : t;
}
const zt = (r, t) => {
  const e = r.length - 1, i = [];
  let s, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = C;
  for (let c = 0; c < e; c++) {
    const a = r[c];
    let l, d, h = -1, u = 0;
    for (; u < a.length && (o.lastIndex = u, d = o.exec(a), d !== null); ) u = o.lastIndex, o === C ? d[1] === "!--" ? o = rt : d[1] !== void 0 ? o = ot : d[2] !== void 0 ? ($t.test(d[2]) && (s = RegExp("</" + d[2], "g")), o = y) : d[3] !== void 0 && (o = y) : o === y ? d[0] === ">" ? (o = s != null ? s : C, h = -1) : d[1] === void 0 ? h = -2 : (h = o.lastIndex - d[2].length, l = d[1], o = d[3] === void 0 ? y : d[3] === '"' ? at : nt) : o === at || o === nt ? o = y : o === rt || o === ot ? o = C : (o = y, s = void 0);
    const g = o === y && r[c + 1].startsWith("/>") ? " " : "";
    n += o === C ? a + Nt : h >= 0 ? (i.push(l), a.slice(0, h) + mt + a.slice(h) + f + g) : a + f + (h === -2 ? c : g);
  }
  return [vt(r, n + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class M {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let n = 0, o = 0;
    const c = t.length - 1, a = this.parts, [l, d] = zt(t, e);
    if (this.el = M.createElement(l, i), $.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = $.nextNode()) !== null && a.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(mt)) {
          const u = d[o++], g = s.getAttribute(h).split(f), R = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: n, name: R[2], strings: g, ctor: R[1] === "." ? jt : R[1] === "?" ? It : R[1] === "@" ? Bt : I }), s.removeAttribute(h);
        } else h.startsWith(f) && (a.push({ type: 6, index: n }), s.removeAttribute(h));
        if ($t.test(s.tagName)) {
          const h = s.textContent.split(f), u = h.length - 1;
          if (u > 0) {
            s.textContent = j ? j.emptyScript : "";
            for (let g = 0; g < u; g++) s.append(h[g], U()), $.nextNode(), a.push({ type: 2, index: ++n });
            s.append(h[u], U());
          }
        }
      } else if (s.nodeType === 8) if (s.data === yt) a.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = s.data.indexOf(f, h + 1)) !== -1; ) a.push({ type: 7, index: n }), h += f.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const i = v.createElement("template");
    return i.innerHTML = t, i;
  }
}
function A(r, t, e = r, i) {
  var o, c, a;
  if (t === w) return t;
  let s = i !== void 0 ? (o = e._$Co) == null ? void 0 : o[i] : e._$Cl;
  const n = O(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== n && ((c = s == null ? void 0 : s._$AO) == null || c.call(s, !1), n === void 0 ? s = void 0 : (s = new n(r), s._$AT(r, e, i)), i !== void 0 ? ((a = e._$Co) != null ? a : e._$Co = [])[i] = s : e._$Cl = s), s !== void 0 && (t = A(r, s._$AS(r, t.values), s, i)), t;
}
class Dt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var l;
    const { el: { content: e }, parts: i } = this._$AD, s = ((l = t == null ? void 0 : t.creationScope) != null ? l : v).importNode(e, !0);
    $.currentNode = s;
    let n = $.nextNode(), o = 0, c = 0, a = i[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let d;
        a.type === 2 ? d = new N(n, n.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (d = new Vt(n, this, t)), this._$AV.push(d), a = i[++c];
      }
      o !== (a == null ? void 0 : a.index) && (n = $.nextNode(), o++);
    }
    return $.currentNode = v, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class N {
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) == null ? void 0 : t._$AU) != null ? e : this._$Cv;
  }
  constructor(t, e, i, s) {
    var n;
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (n = s == null ? void 0 : s.isConnected) != null ? n : !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = A(this, t, e), O(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== w && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Lt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && O(this._$AH) ? this._$AA.nextSibling.data = t : this.T(v.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = M.createElement(vt(i.h, i.h[0]), this.options)), i);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === s) this._$AH.p(e);
    else {
      const o = new Dt(s, this), c = o.u(this.options);
      o.p(e), this.T(c), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = ct.get(t.strings);
    return e === void 0 && ct.set(t.strings, e = new M(t)), e;
  }
  k(t) {
    G(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const n of t) s === e.length ? e.push(i = new N(this.O(U()), this.O(U()), this, this.options)) : i = e[s], i._$AI(n), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class I {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = p;
  }
  _$AI(t, e = this, i, s) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = A(this, t, e, 0), o = !O(t) || t !== this._$AH && t !== w, o && (this._$AH = t);
    else {
      const c = t;
      let a, l;
      for (t = n[0], a = 0; a < n.length - 1; a++) l = A(this, c[i + a], e, a), l === w && (l = this._$AH[a]), o || (o = !O(l) || l !== this._$AH[a]), l === p ? t = p : t !== p && (t += (l != null ? l : "") + n[a + 1]), this._$AH[a] = l;
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class jt extends I {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class It extends I {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Bt extends I {
  constructor(t, e, i, s, n) {
    super(t, e, i, s, n), this.type = 5;
  }
  _$AI(t, e = this) {
    var o;
    if ((t = (o = A(this, t, e, 0)) != null ? o : p) === w) return;
    const i = this._$AH, s = t === p && i !== p || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, n = t !== p && (i === p || s);
    s && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) == null ? void 0 : e.host) != null ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Vt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    A(this, t);
  }
}
const q = k.litHtmlPolyfillSupport;
var pt;
q == null || q(M, N), ((pt = k.litHtmlVersions) != null ? pt : k.litHtmlVersions = []).push("3.2.1");
const Wt = (r, t, e) => {
  var n, o;
  const i = (n = e == null ? void 0 : e.renderBefore) != null ? n : t;
  let s = i._$litPart$;
  if (s === void 0) {
    const c = (o = e == null ? void 0 : e.renderBefore) != null ? o : null;
    i._$litPart$ = s = new N(t.insertBefore(U(), c), c, void 0, e != null ? e : {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let H = class extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, i;
    const t = super.createRenderRoot();
    return (i = (e = this.renderOptions).renderBefore) != null || (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Wt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return w;
  }
};
var ut;
H._$litElement$ = !0, H.finalized = !0, (ut = globalThis.litElementHydrateSupport) == null || ut.call(globalThis, { LitElement: H });
const F = globalThis.litElementPolyfillSupport;
F == null || F({ LitElement: H });
var gt;
((gt = globalThis.litElementVersions) != null ? gt : globalThis.litElementVersions = []).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ft = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: J }, Zt = (r = Ft, t, e) => {
  const { kind: i, metadata: s } = e;
  let n = globalThis.litPropertyMetadata.get(s);
  if (n === void 0 && globalThis.litPropertyMetadata.set(s, n = /* @__PURE__ */ new Map()), n.set(e.name, r), i === "accessor") {
    const { name: o } = e;
    return { set(c) {
      const a = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(o, a, r);
    }, init(c) {
      return c !== void 0 && this.P(o, void 0, r), c;
    } };
  }
  if (i === "setter") {
    const { name: o } = e;
    return function(c) {
      const a = this[o];
      t.call(this, c), this.requestUpdate(o, a, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function L(r) {
  return (t, e) => typeof e == "object" ? Zt(r, t, e) : ((i, s, n) => {
    const o = s.hasOwnProperty(n);
    return s.constructor.createProperty(n, o ? B(S({}, i), { wrapped: !0 }) : i), o ? Object.getOwnPropertyDescriptor(s, n) : void 0;
  })(r, t, e);
}
var Kt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, E = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Jt(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (s = (i ? o(t, e, s) : o(s)) || s);
  return i && s && Kt(t, e, s), s;
};
window.customCards = window.customCards || [];
window.customCards.push({
  type: "ha-mi-humidifier-card",
  name: "Mi Humidifier Card",
  description: "A custom card for Mi Humidifier",
  preview: !0
});
console.info(
  "%c MI-HUMIDIFIER-CARD %c Version 1.0.0 ",
  "color: white; background: #4527a0; font-weight: 700;",
  "color: #4527a0; background: white; font-weight: 700;"
);
let b = class extends H {
  constructor() {
    super(...arguments), this.isLoading = !1, this.isTargetLoading = !1, this.pendingTargetHumidity = null, this.debounceTimeout = null, this.targetDebounceTimeout = null;
  }
  static getStubConfig() {
    return {
      type: "ha-mi-humidifier-card",
      entity: "humidifier.mi_humidifier",
      show_image: !0
    };
  }
  // Required by LovelaceCard
  getCardSize() {
    return 3;
  }
  setConfig(r) {
    if (!r.entity)
      throw new Error("Please define an entity");
    this.config = S({
      show_image: !0
    }, r);
  }
  handlePowerClick() {
    return _(this, null, function* () {
      !this.config.entity || this.isLoading || (this.debounceTimeout && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(() => _(this, null, function* () {
        try {
          this.isLoading = !0;
          const t = this.hass.states[this.config.entity].state === "on" ? "off" : "on", e = t === "on" ? "turn_on" : "turn_off", i = S({}, this.hass.states[this.config.entity]);
          this.hass.states[this.config.entity] = B(S({}, i), {
            state: t
          }), this.requestUpdate(), yield this.hass.callService("humidifier", e, {
            entity_id: this.config.entity
          });
        } catch (r) {
          console.error("Failed to toggle power:", r);
        } finally {
          this.isLoading = !1, this.debounceTimeout = null;
        }
      }), 100));
    });
  }
  handleTargetChange(r) {
    return _(this, null, function* () {
      !this.config.entity || this.isTargetLoading || (this.targetDebounceTimeout && clearTimeout(this.targetDebounceTimeout), this.targetDebounceTimeout = setTimeout(() => _(this, null, function* () {
        try {
          this.isTargetLoading = !0;
          const t = this.hass.states[this.config.entity], e = this.pendingTargetHumidity !== null ? this.pendingTargetHumidity : t.attributes.target_humidity || 50, i = Math.min(80, Math.max(40, e + r));
          i !== e && (this.pendingTargetHumidity = i, this.requestUpdate(), yield this.hass.callService("humidifier", "set_humidity", {
            entity_id: this.config.entity,
            humidity: i
          }));
        } catch (t) {
          console.error("Failed to change target humidity:", t), this.pendingTargetHumidity = null, this.requestUpdate();
        } finally {
          this.isTargetLoading = !1, this.targetDebounceTimeout = null;
        }
      }), 100));
    });
  }
  static get styles() {
    return St`
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
    `;
  }
  handleSliderChange(r) {
    var e, i;
    const t = Number(r.target.value);
    this.config.entity && !this.isTargetLoading && this.handleTargetChange(t - ((i = (e = this.pendingTargetHumidity) != null ? e : this.hass.states[this.config.entity].attributes.target_humidity) != null ? i : 50));
  }
  _renderImage() {
    return T`<div class="device-image"></div>`;
  }
  render() {
    var s, n, o;
    if (!this.config || !this.hass || !this.config.entity)
      return T``;
    const r = this.hass.states[this.config.entity];
    if (!r)
      return T`
        <ha-card>
          <div class="card-content">
            <div class="not-found">Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;
    const t = r.attributes.current_humidity || 0, e = this.pendingTargetHumidity !== null ? this.pendingTargetHumidity : r.attributes.target_humidity || 50, i = r.state === "on";
    return T`
      <ha-card>
        <div class="card-content">
          ${this.config.show_image ? this._renderImage() : ""}
          <div class="header">
            <div class="title">${r.attributes.friendly_name || this.config.entity}</div>
            <div class="state-text" ?inactive=${!i}>${i ? "ON" : "OFF"}</div>
          </div>
          
          <div class="status">
            <div class="humidity-display">
              <span class="humidity-value">${e}</span>
              <span class="humidity-unit">%</span>
            </div>
            <div class="current-humidity">${t}%</div>
          </div>

          <div class="slider-container">
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              .value=${e}
              class="slider"
              @change=${this.handleSliderChange}
              ?disabled=${!i}
            >
          </div>

          <div class="controls">
            <button 
              class="control-button"
              @click=${() => this.handleTargetChange(-5)}
              ?disabled=${!i}
            >
              -
            </button>
            <button 
              class="control-button"
              @click=${() => this.handleTargetChange(5)}
              ?disabled=${!i}
            >
              +
            </button>
          </div>

          <div class="water-level" data-state=${((s = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : s.state) === "on" ? "empty" : "ok"}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
            </svg>
            <span class="water-level-text">
              ${((n = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : n.state) === "on" ? "Tank Empty" : "Tank OK"}
            </span>
          </div>

          ${((o = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : o.state) === "on" ? T`
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
            ?inactive=${!i}
            ?loading=${this.isLoading}
            ?disabled=${this.isLoading}
          >
            ${i ? "Turn Off" : "Turn On"}
          </button>
        </div>
      </ha-card>
    `;
  }
};
E([
  L({ attribute: !1 })
], b.prototype, "hass", 2);
E([
  L()
], b.prototype, "config", 2);
E([
  L()
], b.prototype, "isLoading", 2);
E([
  L()
], b.prototype, "isTargetLoading", 2);
E([
  L()
], b.prototype, "pendingTargetHumidity", 2);
b = E([
  qt("ha-mi-humidifier-card")
], b);
export {
  b as MiHumidifierCard
};
//# sourceMappingURL=ha-mi-humidifier-card.js.map
