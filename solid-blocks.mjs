import { sharedConfig as k, createMemo as _, createRenderEffect as v, untrack as fe, createSignal as S, createRoot as be, onCleanup as j, splitProps as w, createEffect as C, onMount as W, mergeProps as E, createComponent as N, For as ye, Show as D, createContext as _e, useContext as Ae, Switch as xe, Match as Q } from "solid-js";
const we = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Ne = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...we]), ke = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Ee = {
  className: "class",
  htmlFor: "for"
}, te = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}, Fe = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), Ce = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), Se = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function ne(t, e) {
  return _(t, void 0, e ? void 0 : {
    equals: e
  });
}
function Le(t, e, n) {
  let s = n.length, o = e.length, r = s, i = 0, l = 0, c = e[o - 1].nextSibling, a = null;
  for (; i < o || l < r; ) {
    if (e[i] === n[l]) {
      i++, l++;
      continue;
    }
    for (; e[o - 1] === n[r - 1]; )
      o--, r--;
    if (o === i) {
      const u = r < s ? l ? n[l - 1].nextSibling : n[r - l] : c;
      for (; l < r; )
        t.insertBefore(n[l++], u);
    } else if (r === l)
      for (; i < o; )
        (!a || !a.has(e[i])) && e[i].remove(), i++;
    else if (e[i] === n[r - 1] && n[l] === e[o - 1]) {
      const u = e[--o].nextSibling;
      t.insertBefore(n[l++], e[i++].nextSibling), t.insertBefore(n[--r], u), e[o] = n[r];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let d = l;
        for (; d < r; )
          a.set(n[d], d++);
      }
      const u = a.get(e[i]);
      if (u != null)
        if (l < u && u < r) {
          let d = i, b = 1, f;
          for (; ++d < o && d < r && !((f = a.get(e[d])) == null || f !== u + b); )
            b++;
          if (b > u - l) {
            const h = e[i];
            for (; l < u; )
              t.insertBefore(n[l++], h);
          } else
            t.replaceChild(n[l++], e[i++]);
        } else
          i++;
      else
        e[i++].remove();
    }
  }
}
const oe = "_$DX_DELEGATE";
function g(t, e, n) {
  const s = document.createElement("template");
  s.innerHTML = t;
  let o = s.content.firstChild;
  return n && (o = o.firstChild), o;
}
function q(t, e = window.document) {
  const n = e[oe] || (e[oe] = /* @__PURE__ */ new Set());
  for (let s = 0, o = t.length; s < o; s++) {
    const r = t[s];
    n.has(r) || (n.add(r), e.addEventListener(r, Te));
  }
}
function A(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function Pe(t, e, n, s) {
  s == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, s);
}
function F(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function O(t, e, n, s) {
  if (s)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    t.addEventListener(e, n[0] = (r) => o.call(t, n[1], r));
  } else
    t.addEventListener(e, n);
}
function P(t, e, n = {}) {
  const s = Object.keys(e || {}), o = Object.keys(n);
  let r, i;
  for (r = 0, i = o.length; r < i; r++) {
    const l = o[r];
    !l || l === "undefined" || e[l] || (se(t, l, !1), delete n[l]);
  }
  for (r = 0, i = s.length; r < i; r++) {
    const l = s[r], c = !!e[l];
    !l || l === "undefined" || n[l] === c || !c || (se(t, l, !0), n[l] = c);
  }
  return n;
}
function z(t, e, n = {}) {
  const s = t.style, o = typeof n == "string";
  if (e == null && o || typeof e == "string")
    return s.cssText = e;
  o && (s.cssText = void 0, n = {}), e || (e = {});
  let r, i;
  for (i in n)
    e[i] == null && s.removeProperty(i), delete n[i];
  for (i in e)
    r = e[i], r !== n[i] && (s.setProperty(i, r), n[i] = r);
  return n;
}
function m(t, e, n, s) {
  typeof e == "function" ? v((o) => ie(t, e(), o, n, s)) : ie(t, e, void 0, n, s);
}
function H(t, e, n) {
  return fe(() => t(e, n));
}
function $(t, e, n, s) {
  if (n !== void 0 && !s && (s = []), typeof e != "function")
    return I(t, e, s, n);
  v((o) => I(t, e(), o, n), s);
}
function Me(t, e, n, s, o = {}, r = !1) {
  e || (e = {});
  for (const i in o)
    if (!(i in e)) {
      if (i === "children")
        continue;
      le(t, i, null, o[i], n, r);
    }
  for (const i in e) {
    if (i === "children") {
      s || I(t, e.children);
      continue;
    }
    const l = e[i];
    o[i] = le(t, i, l, o[i], n, r);
  }
}
function Be(t) {
  let e, n;
  return !k.context || !(e = k.registry.get(n = Oe())) ? t.cloneNode(!0) : (k.completed && k.completed.add(e), k.registry.delete(n), e);
}
function De(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}
function se(t, e, n) {
  const s = e.trim().split(/\s+/);
  for (let o = 0, r = s.length; o < r; o++)
    t.classList.toggle(s[o], n);
}
function le(t, e, n, s, o, r) {
  let i, l, c;
  if (e === "style")
    return z(t, n, s);
  if (e === "classList")
    return P(t, n, s);
  if (n === s)
    return s;
  if (e === "ref")
    r || n(t);
  else if (e.slice(0, 3) === "on:") {
    const a = e.slice(3);
    s && t.removeEventListener(a, s), n && t.addEventListener(a, n);
  } else if (e.slice(0, 10) === "oncapture:") {
    const a = e.slice(10);
    s && t.removeEventListener(a, s, !0), n && t.addEventListener(a, n, !0);
  } else if (e.slice(0, 2) === "on") {
    const a = e.slice(2).toLowerCase(), u = Fe.has(a);
    if (!u && s) {
      const d = Array.isArray(s) ? s[0] : s;
      t.removeEventListener(a, d);
    }
    (u || n) && (O(t, a, n, u), u && q([a]));
  } else if ((c = ke.has(e)) || !o && (te[e] || (l = Ne.has(e))) || (i = t.nodeName.includes("-")))
    e === "class" || e === "className" ? F(t, n) : i && !l && !c ? t[De(e)] = n : t[te[e] || e] = n;
  else {
    const a = o && e.indexOf(":") > -1 && Se[e.split(":")[0]];
    a ? Pe(t, a, e, n) : A(t, Ee[e] || e, n);
  }
  return n;
}
function Te(t) {
  const e = `$$${t.type}`;
  let n = t.composedPath && t.composedPath()[0] || t.target;
  for (t.target !== n && Object.defineProperty(t, "target", {
    configurable: !0,
    value: n
  }), Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return n || document;
    }
  }), k.registry && !k.done && (k.done = !0, document.querySelectorAll("[id^=pl-]").forEach((s) => s.remove())); n !== null; ) {
    const s = n[e];
    if (s && !n.disabled) {
      const o = n[`${e}Data`];
      if (o !== void 0 ? s.call(n, o, t) : s.call(n, t), t.cancelBubble)
        return;
    }
    n = n.host && n.host !== n && n.host instanceof Node ? n.host : n.parentNode;
  }
}
function ie(t, e, n = {}, s, o) {
  return e || (e = {}), !o && "children" in e && v(() => n.children = I(t, e.children, n.children)), e.ref && e.ref(t), v(() => Me(t, e, s, !0, n, !0)), n;
}
function I(t, e, n, s, o) {
  for (k.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
    n = n();
  if (e === n)
    return n;
  const r = typeof e, i = s !== void 0;
  if (t = i && n[0] && n[0].parentNode || t, r === "string" || r === "number") {
    if (k.context)
      return n;
    if (r === "number" && (e = e.toString()), i) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data = e : l = document.createTextNode(e), n = p(t, n, s, l);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || r === "boolean") {
    if (k.context)
      return n;
    n = p(t, n, s);
  } else {
    if (r === "function")
      return v(() => {
        let l = e();
        for (; typeof l == "function"; )
          l = l();
        n = I(t, l, n, s);
      }), () => n;
    if (Array.isArray(e)) {
      const l = [], c = n && Array.isArray(n);
      if (Z(l, e, n, o))
        return v(() => n = I(t, l, n, s, !0)), () => n;
      if (k.context) {
        if (!l.length)
          return n;
        for (let a = 0; a < l.length; a++)
          if (l[a].parentNode)
            return n = l;
      }
      if (l.length === 0) {
        if (n = p(t, n, s), i)
          return n;
      } else
        c ? n.length === 0 ? re(t, l, s) : Le(t, n, l) : (n && p(t), re(t, l));
      n = l;
    } else if (e instanceof Node) {
      if (k.context && e.parentNode)
        return n = i ? [e] : e;
      if (Array.isArray(n)) {
        if (i)
          return n = p(t, n, s, e);
        p(t, n, null, e);
      } else
        n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function Z(t, e, n, s) {
  let o = !1;
  for (let r = 0, i = e.length; r < i; r++) {
    let l = e[r], c = n && n[r];
    if (l instanceof Node)
      t.push(l);
    else if (!(l == null || l === !0 || l === !1))
      if (Array.isArray(l))
        o = Z(t, l, c) || o;
      else if (typeof l == "function")
        if (s) {
          for (; typeof l == "function"; )
            l = l();
          o = Z(t, Array.isArray(l) ? l : [l], Array.isArray(c) ? c : [c]) || o;
        } else
          t.push(l), o = !0;
      else {
        const a = String(l);
        c && c.nodeType === 3 && c.data === a ? t.push(c) : t.push(document.createTextNode(a));
      }
  }
  return o;
}
function re(t, e, n) {
  for (let s = 0, o = e.length; s < o; s++)
    t.insertBefore(e[s], n);
}
function p(t, e, n, s) {
  if (n === void 0)
    return t.textContent = "";
  const o = s || document.createTextNode("");
  if (e.length) {
    let r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
      const l = e[i];
      if (o !== l) {
        const c = l.parentNode === t;
        !r && !i ? c ? t.replaceChild(o, l) : t.insertBefore(o, n) : c && l.remove();
      } else
        r = !0;
    }
  } else
    t.insertBefore(o, n);
  return [o];
}
function Oe() {
  const t = k.context;
  return `${t.id}${t.count++}`;
}
const pe = !1, He = "http://www.w3.org/2000/svg";
function he(t, e = !1) {
  return e ? document.createElementNS(He, t) : document.createElement(t);
}
function ee(t) {
  const {
    useShadow: e
  } = t, n = document.createTextNode(""), s = t.mount || document.body;
  function o() {
    if (k.context) {
      const [r, i] = S(!1);
      return queueMicrotask(() => i(!0)), () => r() && t.children;
    } else
      return () => t.children;
  }
  if (s instanceof HTMLHeadElement) {
    const [r, i] = S(!1), l = () => i(!0);
    be((c) => $(s, () => r() ? c() : o()(), null)), j(() => {
      k.context ? queueMicrotask(l) : l();
    });
  } else {
    const r = he(t.isSVG ? "g" : "div", t.isSVG), i = e && r.attachShadow ? r.attachShadow({
      mode: "open"
    }) : r;
    Object.defineProperty(r, "host", {
      get() {
        return n.parentNode;
      }
    }), $(i, o()), s.appendChild(r), t.ref && t.ref(r), j(() => s.removeChild(r));
  }
  return n;
}
function Ie(t) {
  const [e, n] = w(t, ["component"]), s = _(() => e.component);
  return _(() => {
    const o = s();
    switch (typeof o) {
      case "function":
        return fe(() => o(n));
      case "string":
        const r = Ce.has(o), i = k.context ? Be() : he(o, r);
        return m(i, n, r), i;
    }
  });
}
const qe = (t) => {
  if (typeof t == "object")
    return t;
  const e = {};
  return (t || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (n, s, o) => (e[s] = o, "")), e;
}, Ge = (...t) => Object.assign({}, ...t.map(qe)), U = (t, e) => {
  if (!t)
    return;
  let n = t;
  for (; n && n.nodeName !== e; )
    n = n.parentNode;
  return n;
}, je = 8;
let G = 0;
const K = () => {
  const t = 1 + Math.floor(Math.random() * (je - (G ? 1 : 0)));
  return G = G ? t + (t === G ? 1 : 0) : t, G;
}, Re = (t) => {
  const e = window.matchMedia(t), [n, s] = S(e.matches), o = (r) => s(r.matches);
  return e.addEventListener("change", o), j(() => e.removeEventListener("change", o)), n;
}, Ke = (t, e) => e ? t ? JSON.parse(t) : void 0 : t != null ? t : void 0, ce = (t, e) => localStorage.setItem(t, typeof e == "string" ? e : JSON.stringify(e));
function Ue(t, e, n = !1) {
  localStorage.getItem(t) === null && e !== void 0 && ce(t, e);
  const [s, o] = S(Ke(localStorage.getItem(t), n));
  return C(
    () => n && s() === void 0 ? localStorage.removeItem(t) : ce(t, s())
  ), [s, o];
}
const Gt = (t = "COLOR_SCHEME") => {
  const e = Re("(prefers-color-scheme: dark)"), [n, s] = Ue(t, void 0, !0), o = _(() => {
    var r;
    return (r = n()) != null ? r : e();
  });
  return C(() => {
    document.body.classList.toggle("dark-mode", o());
  }), [o, s];
}, M = (t, e, n = [], s = []) => {
  if (!!t) {
    if (Array.isArray(t))
      t.forEach((o) => M(o, e, n, s));
    else if (typeof t == "function")
      M(t.apply(null, n), e, n, s);
    else {
      const o = t;
      (!e || (typeof e == "function" ? e(o) : o.nodeName === e)) && s.push(o);
    }
    return s;
  }
};
const We = /* @__PURE__ */ g("<details></details>"), Ve = /* @__PURE__ */ g("<summary></summary>"), Qe = /* @__PURE__ */ g("<section></section>"), jt = (t) => {
  const [e, n] = w(t, ["children", "ontoggle"]), [s, o] = S(!!t.open);
  let r;
  const i = _(() => typeof t.children == "function" ? t.children(s()) : t.children), l = () => {
    var c;
    r && (o(r.open), (c = e.ontoggle) == null || c.call(e, r.open));
  };
  return W(() => r == null ? void 0 : r.addEventListener("toggle", l)), j(() => r == null ? void 0 : r.addEventListener("toggle", l)), (() => {
    const c = We.cloneNode(!0), a = r;
    return typeof a == "function" ? H(a, c) : r = c, m(c, n, !1, !0), $(c, i), v((u) => {
      var f;
      const d = E((f = t.classList) != null ? f : {}, {
        "sb-accordion": !0
      }), b = !!t.open;
      return u._v$ = P(c, d, u._v$), b !== u._v$2 && (c.open = u._v$2 = b), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}, Rt = (t) => (() => {
  const e = Ve.cloneNode(!0);
  return $(e, () => t.children), v((n) => {
    var s;
    return P(e, E((s = t.classList) != null ? s : {}, {
      "sb-accordion-header": !0
    }), n);
  }), e;
})(), Kt = (t) => {
  const [e, n] = w(t, ["allowMultiple", "allowToggle"]), s = _(() => (r) => {
    var c, a;
    if (!r.target)
      return;
    const i = U(r.target, "DETAILS");
    if (!i)
      return;
    const l = (a = (c = i.parentNode) == null ? void 0 : c.querySelectorAll("details.sb-accordion[open]")) != null ? a : [];
    l.length !== 0 && (!e.allowMultiple && !i.open && Array.prototype.forEach.call(l, (u) => {
      u !== i && u.removeAttribute("open");
    }), !e.allowToggle && i.open && l.length === 1 && r.preventDefault());
  }), o = _(() => (r) => {
    const i = U(r.target, "DETAILS");
    if (!i || !i.parentNode)
      return;
    const l = i.parentNode.querySelectorAll("details.sb-accordion"), c = Array.prototype.indexOf.call(l, i);
    if (c !== -1) {
      if (r.key === "ArrowLeft" && c !== 0) {
        const a = l[c - 1], u = a.querySelector("summary");
        u == null || u.focus(), !a.open && (u == null || u.click());
      }
      if (r.key === "ArrowRight" && c + 1 < l.length) {
        const a = l[c + 1], u = a.querySelector("summary");
        u == null || u.focus(), !a.open && (u == null || u.click());
      }
    }
  });
  return (() => {
    const r = Qe.cloneNode(!0);
    return O(r, "keyup", o(), !0), O(r, "click", s(), !0), m(r, n, !1, !1), v((i) => {
      var l;
      return P(r, E((l = t.classList) != null ? l : {}, {
        "sb-accordion-group": !0
      }), i);
    }), r;
  })();
};
q(["click", "keyup"]);
const Xe = /* @__PURE__ */ g('<div role="figure"><img><span aria-hidden="true"></span></div>'), Je = /* @__PURE__ */ g('<div role="img"></div>'), Ze = /* @__PURE__ */ g('<div role="img" aria-label="Unknown"></div>'), Ye = /* @__PURE__ */ g("<span></span>"), ze = /* @__PURE__ */ g('<div role="group"></div>'), ae = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]", et = new RegExp(`^.*?(${ae})(?:.*\\s+\\S*?(${ae}))?.*$`), tt = (t) => t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g, "").replace(et, "$1$2").toUpperCase(), Ut = (t) => {
  const [e, n] = w(t, ["classList", "children", "img", "name", "fallback"]), s = _(() => e.name ? tt(e.name) : "");
  return e.img ? (() => {
    const o = Xe.cloneNode(!0), r = o.firstChild, i = r.nextSibling;
    return m(o, n, !1, !0), $(i, s), $(o, () => e.children, null), v((l) => {
      var b;
      const c = E((b = e.classList) != null ? b : {}, {
        "sb-avatar": !0
      }), a = K(), u = e.img, d = e.name;
      return l._v$ = P(o, c, l._v$), a !== l._v$2 && A(o, "data-random", l._v$2 = a), u !== l._v$3 && A(r, "src", l._v$3 = u), d !== l._v$4 && A(r, "alt", l._v$4 = d), l;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), o;
  })() : e.name ? (() => {
    const o = Je.cloneNode(!0);
    return m(o, n, !1, !0), $(o, s, null), $(o, () => e.children, null), v((r) => {
      var a;
      const i = E((a = e.classList) != null ? a : {}, {
        "sb-avatar": !0
      }), l = e.name, c = K();
      return r._v$5 = P(o, i, r._v$5), l !== r._v$6 && A(o, "aria-label", r._v$6 = l), c !== r._v$7 && A(o, "data-random", r._v$7 = c), r;
    }, {
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0
    }), o;
  })() : (() => {
    const o = Ze.cloneNode(!0);
    return m(o, n, !1, !0), $(o, () => {
      var r;
      return (r = e.fallback) != null ? r : "?";
    }, null), $(o, () => e.children, null), v((r) => {
      var c;
      const i = E((c = e.classList) != null ? c : {}, {
        "sb-avatar": !0
      }), l = K();
      return r._v$8 = P(o, i, r._v$8), l !== r._v$9 && A(o, "data-random", r._v$9 = l), r;
    }, {
      _v$8: void 0,
      _v$9: void 0
    }), o;
  })();
}, Wt = (t) => {
  var o;
  const [e, n] = w(t, ["classList", "borderColor", "background", "style"]), s = Ge((o = e.style) != null ? o : {}, {
    "border-color": e.borderColor,
    background: e.background
  });
  return (() => {
    const r = Ye.cloneNode(!0);
    return m(r, n, !1, !1), v((i) => {
      var a;
      const l = E((a = e.classList) != null ? a : {}, {
        "sb-badge": !0
      }), c = s;
      return i._v$10 = P(r, l, i._v$10), i._v$11 = z(r, c, i._v$11), i;
    }, {
      _v$10: void 0,
      _v$11: void 0
    }), r;
  })();
}, Vt = (t) => (() => {
  const e = ze.cloneNode(!0);
  return m(e, t, !1, !1), v((n) => {
    var r;
    const s = E((r = t.classList) != null ? r : {}, {
      "sb-avatar": !0
    }), o = Array.isArray(t.children) && t.children.length > 3;
    return n._v$12 = P(e, s, n._v$12), o !== n._v$13 && A(e, "aria-haspopup", n._v$13 = o), n;
  }, {
    _v$12: void 0,
    _v$13: void 0
  }), e;
})();
const ue = /* @__PURE__ */ g("<div></div>"), Qt = (t) => {
  const [e, n] = w(t, ["placement", "position", "mount", "portal"]), s = E(n, {
    class: `${e.placement}${e.position ? " " + e.position : ""} sb-bar ${t.class ? " " + t.class : ""}`
  });
  return e.portal === !1 ? (() => {
    const o = ue.cloneNode(!0);
    return m(o, s, !1, !1), o;
  })() : N(ee, {
    get mount() {
      return e.mount;
    },
    get children() {
      const o = ue.cloneNode(!0);
      return m(o, s, !1, !1), o;
    }
  });
};
const nt = /* @__PURE__ */ g('<nav class="sb-breadcrumbs"><ol></ol></nav>'), ot = /* @__PURE__ */ g("<li></li>"), Xt = (t) => (() => {
  const e = nt.cloneNode(!0), n = e.firstChild;
  return m(n, t, !1, !0), $(n, N(ye, {
    get each() {
      return Array.isArray(t.children) ? t.children : [t.children];
    },
    children: (s) => (() => {
      const o = ot.cloneNode(!0);
      return $(o, s), o;
    })()
  })), e;
})();
const st = /* @__PURE__ */ g("<button></button>"), lt = (t) => {
  const [e, n] = w(t, ["variant", "classList"]);
  return (() => {
    const s = st.cloneNode(!0);
    return m(s, n, !1, !1), v((o) => {
      var r, i;
      return P(s, E((r = e.classList) != null ? r : {}, {
        "sb-button": !0,
        [(i = e.variant) != null ? i : "primary"]: !0
      }), o);
    }), s;
  })();
};
const it = /* @__PURE__ */ g('<label><input type="checkbox"></label>'), Jt = (t) => {
  const [e, n, s] = w(t, ["accessKey", "aria-disabled", "autofocus", "checked", "class", "disabled", "id", "name", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children", "onchange", "switch"]), o = (r) => {
    var i, l;
    return (l = n.onchange) == null ? void 0 : l.call(n, (i = r.target) == null ? void 0 : i.checked);
  };
  return (() => {
    const r = it.cloneNode(!0), i = r.firstChild;
    return m(r, s, !1, !0), $(r, N(D, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), i), i.addEventListener("change", o), m(i, e, !1, !1), $(r, N(D, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), v((l) => {
      const c = `${n.align || "left"} ${n.switch ? " switch" : ""} sb-checkbox`, a = n.switch ? "switch" : void 0;
      return c !== l._v$ && F(r, l._v$ = c), a !== l._v$2 && A(i, "role", l._v$2 = a), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
};
const rt = /* @__PURE__ */ g("<p></p>"), Zt = (t) => {
  const [e, n] = w(t, ["type", "class", "inline"]), s = _(() => [...new Set(["sb-message", e.type, e.class, e.inline && "inline"].filter(Boolean))].join(" "));
  return (() => {
    const o = rt.cloneNode(!0);
    return m(o, n, !1, !1), v((r) => {
      const i = s(), l = e.type === "error" ? "alert" : void 0;
      return i !== r._v$ && F(o, r._v$ = i), l !== r._v$2 && A(o, "role", r._v$2 = l), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
};
const ct = /* @__PURE__ */ g('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'), Yt = (t) => (() => {
  const e = ct.cloneNode(!0), n = e.firstChild, s = n.firstChild;
  return m(e, t, !1, !0), A(
    e,
    "role",
    "meter"
  ), $(e, () => t.children, null), v((o) => {
    var d, b, f, h, x, y;
    const r = t.class ? `sb-meter ${t.class}` : "sb-meter", i = (d = t.value) != null ? d : t["aria-valuenow"], l = (b = t.min) != null ? b : t["aria-valuemin"], c = (f = t.max) != null ? f : t["aria-valuemax"], a = `0 0 ${(h = t.max) != null ? h : t["aria-valuemax"]} 10`, u = (y = (x = t.value) != null ? x : t["aria-valuenow"]) != null ? y : 0;
    return r !== o._v$ && F(e, o._v$ = r), i !== o._v$2 && A(e, "aria-valuenow", o._v$2 = i), l !== o._v$3 && A(e, "aria-valuemin", o._v$3 = l), c !== o._v$4 && A(e, "aria-valuemax", o._v$4 = c), a !== o._v$5 && A(n, "viewBox", o._v$5 = a), u !== o._v$6 && A(s, "width", o._v$6 = u), o;
  }, {
    _v$: void 0,
    _v$2: void 0,
    _v$3: void 0,
    _v$4: void 0,
    _v$5: void 0,
    _v$6: void 0
  }), e;
})();
const at = /* @__PURE__ */ g('<div><div tabindex="-1" role="menu"></div></div>'), ut = /* @__PURE__ */ g('<div tabindex="0" role="menuitem"></div>'), me = /* @__PURE__ */ g("<p></p>"), dt = /* @__PURE__ */ g('<div role="group"></div>'), ft = /* @__PURE__ */ g("<div></div>"), ht = /* @__PURE__ */ g('<div tabindex="-1" role="group"></div>'), mt = (t) => {
  let e = 0;
  return (n) => {
    const r = (n.nodeName === "BUTTON" || n.getAttribute("role") === "button") && n.getAttribute("aria-haspopup") === "menu" && e++ === 0;
    return r && (t() && n.getAttribute("aria-expanded") !== "true" ? n.setAttribute("aria-expanded", "true") : !t() && n.getAttribute("aria-expanded") === "true" && n.setAttribute("aria-expanded", "false")), r;
  };
}, gt = () => {
  let t = 0;
  return (e) => !((e.nodeName === "BUTTON" || e.getAttribute("role") === "button") && e.getAttribute("aria-haspopup") === "menu" && t++ === 0);
}, zt = (t) => {
  const [e, n] = S(!!t.open), [s, o] = w(t, ["open", "children", "ontoggle", "align"]), r = _(() => {
    var f;
    return ((f = M(t.children, mt(e), [e()])) != null ? f : [])[0];
  }), i = _(() => {
    var f;
    return (f = M(t.children, gt(), [e()])) != null ? f : [];
  });
  let l;
  C(() => {
    var h;
    const f = e();
    (h = s.ontoggle) == null || h.call(s, f), f && i()[0].focus();
  });
  const c = (f) => {
    const h = f.target, x = h == null ? void 0 : h.getAttribute("role"), y = r();
    !f.defaultPrevented && y && (f.target === y ? n((L) => !L && y.getAttribute("aria-disabled") !== "true") : !y.contains(h) && x !== "menuitemradio" && x !== "menuitemcheckbox" && n(!1));
  };
  W(() => document.addEventListener("click", c, {
    capture: !1
  })), j(() => document.removeEventListener("click", c));
  let a;
  const u = (f) => {
    var x;
    const h = f.target;
    ["menuitem", "menuitemradio", "menuitemcheckbox"].includes((x = h == null ? void 0 : h.getAttribute("role")) != null ? x : "") && (h == null ? void 0 : h.tabIndex) !== -1 && (h == null ? void 0 : h.getAttribute("aria-disabled")) !== "true" && (a = h, a == null || a.focus());
  }, d = (f) => {
    const h = l.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'), x = a ? Array.prototype.findIndex.call(h, (L) => L === a) : -1, y = x === -1 ? 1 : (h.length + f + x) % h.length;
    a = h[y], a.focus();
  }, b = (f) => {
    var y, L, B;
    const h = f.target;
    f.key === "Escape" && e() && (n(!1), (y = r()) == null || y.focus());
    const x = h == null ? void 0 : h.getAttribute("role");
    if (f.key === " " && ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(x != null ? x : "")) {
      if (h.click(), x === "menuitemradio") {
        const T = (B = (L = h.parentNode) == null ? void 0 : L.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]')) != null ? B : [], V = Array.prototype.indexOf.call(T, h), R = (T.length + 1 + V) % T.length;
        a = T[R], a == null || a.focus();
      }
      f.preventDefault();
    }
    f.key === "ArrowDown" ? (d(1), f.preventDefault()) : f.key === "ArrowUp" && (d(-1), f.preventDefault());
  };
  return (() => {
    const f = at.cloneNode(!0), h = f.firstChild;
    f.$$keydown = b;
    const x = l;
    return typeof x == "function" ? H(x, f) : l = f, m(f, o, !1, !0), $(f, r, h), h.$$mouseover = u, $(h, i), v((y) => {
      const L = `sb-menu${o.class ? " " + o.class : ""}${s.align ? " " + s.align : ""}`, B = !e();
      return L !== y._v$ && F(f, y._v$ = L), B !== y._v$2 && (h.hidden = y._v$2 = B), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
}, en = (t) => N(lt, E(t, {
  "aria-haspopup": "menu"
})), tn = (t) => (() => {
  const e = ut.cloneNode(!0);
  return m(e, t, !1, !1), e;
})(), nn = (t) => {
  const [e, n] = w(t, ["title", "children"]);
  return (() => {
    const s = dt.cloneNode(!0);
    return m(s, n, !1, !0), $(s, N(D, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const o = me.cloneNode(!0);
        return $(o, () => e.title), o;
      }
    }), null), $(s, () => e.children, null), s;
  })();
}, ge = _e([() => [], (t) => console.warn("context default!", t)]), on = (t) => {
  const [e, n] = w(t, ["value", "onchange"]), [s, o, r] = Ae(ge), i = _(() => s().includes(t.value)), l = _(() => () => t["aria-disabled"] !== "true" && o(t.value)), c = _(() => (a) => {
    a.key === " " && (a.preventDefault(), t["aria-disabled"] !== "true" && o(t.value));
  });
  return C(() => {
    var a;
    (a = t.onchange) == null || a.call(t, i());
  }), (() => {
    const a = ft.cloneNode(!0);
    return O(a, "keypress", c()), O(a, "click", l(), !0), m(a, n, !1, !1), A(a, "role", r !== "checkbox" ? "menuitemradio" : "menuitemcheckbox"), v((u) => {
      const d = i(), b = (r === "checkbox" || !i()) && t["aria-disabled"] !== "true" ? "0" : "-1";
      return d !== u._v$3 && A(a, "aria-selected", u._v$3 = d), b !== u._v$4 && A(a, "tabindex", u._v$4 = b), u;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), a;
  })();
}, sn = (t) => {
  const [e, n] = w(t, ["title", "value", "onchange", "children", "type"]), [s, o] = S(Array.isArray(e.value) ? e.value : e.value ? [e.value] : [], {
    equals: (i, l) => i.length === l.length && i[0] === l[0]
  }), r = _(() => t.type === "checkbox" ? (i) => o((l) => l.includes(i) ? l.filter((c) => c !== i) : [...l, i]) : (i) => o((l) => l[0] === i ? l : [i]));
  return C((i) => (i !== e.value && o(Array.isArray(e.value) ? e.value : e.value ? [e.value] : []), e.value), e.value), C((i) => {
    var c, a;
    const l = s();
    return (t.type === "checkbox" ? l.length === (i == null ? void 0 : i.length) : l[0] === (i == null ? void 0 : i[0])) ? i : (t.type === "checkbox" ? (c = t.onchange) == null || c.call(t, l) : (a = t.onchange) == null || a.call(t, l[0]), l);
  }, s()), (() => {
    const i = ht.cloneNode(!0);
    return m(i, n, !1, !0), $(i, N(D, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const l = me.cloneNode(!0);
        return $(l, () => e.title), l;
      }
    }), null), $(i, N(ge.Provider, {
      get value() {
        return [s, r(), e.type];
      },
      get children() {
        return e.children;
      }
    }), null), i;
  })();
};
q(["keydown", "mouseover", "click"]);
const Y = /* @__PURE__ */ g("<div></div>"), $t = /* @__PURE__ */ g("<header></header>"), vt = /* @__PURE__ */ g("<main></main>"), bt = /* @__PURE__ */ g("<footer></footer>");
let X = 0;
const ln = (t) => {
  const [e, n] = w(t, ["open", "noPortal", "children"]), [s, o] = S(e.open), r = (u) => o(typeof u == "boolean" ? u : (d) => !d), i = _(() => {
    var u;
    return (u = M(e.children, (d) => d.className.indexOf("sb-modal-content") !== -1, [{
      open: s,
      toggle: r
    }])) != null ? u : [];
  }), l = _(() => M(e.children, (u) => u.className.indexOf("sb-modal-content") === -1, [{
    open: s,
    toggle: r
  }]));
  let c;
  C(() => s() && (c == null || c.focus(), c == null ? void 0 : c.scrollIntoView())), X++, C(() => {
    if (!c)
      return;
    const u = c.querySelector(".sb-modal-header");
    u && c.setAttribute("aria-labelledby", u.id || (() => u.id = `sb-modal-header-${X}`)());
    const d = c.querySelector(".sb-modal-body");
    d && c.setAttribute("aria-describedby", d.id || (() => d.id = `sb-modal-body-${X}`)());
  });
  const a = E(n, {
    role: "dialog",
    tabIndex: -1,
    class: t.class ? `sb-modal ${t.class}` : "sb-modal",
    children: i(),
    onClick: _(() => t.closeOnClickOutside ? (u) => {
      const d = u.target;
      i().some((b) => b == null ? void 0 : b.contains(d)) || r(!1);
    } : void 0)(),
    onkeyup: _(() => t.closeOnEsc !== !1 ? (u) => {
      console.log(u), u.key === "Escape" && !u.defaultPrevented && o(!1);
    } : void 0)()
  });
  return N(xe, {
    get children() {
      return [N(Q, {
        get when() {
          return !s();
        },
        get children() {
          return l();
        }
      }), N(Q, {
        get when() {
          return s() && e.noPortal;
        },
        get children() {
          return [ne(l), (() => {
            const u = Y.cloneNode(!0), d = c;
            return typeof d == "function" ? H(d, u) : c = u, m(u, a, !1, !1), u;
          })()];
        }
      }), N(Q, {
        get when() {
          return s() && !e.noPortal;
        },
        get children() {
          return [ne(l), N(ee, {
            get mount() {
              return document.body;
            },
            get children() {
              const u = Y.cloneNode(!0), d = c;
              return typeof d == "function" ? H(d, u) : c = u, m(u, a, !1, !1), u;
            }
          })];
        }
      })];
    }
  });
}, rn = (t) => (() => {
  const e = Y.cloneNode(!0);
  return m(e, t, !1, !1), v(() => F(e, t.class ? `sb-modal-content ${t.class}` : "sb-modal-content")), e;
})(), cn = (t) => (() => {
  const e = $t.cloneNode(!0);
  return m(e, t, !1, !1), v(() => F(e, t.class ? `sb-modal-header ${t.class}` : "sb-modal-header")), e;
})(), an = (t) => (() => {
  const e = vt.cloneNode(!0);
  return m(e, t, !1, !1), v(() => F(e, t.class ? `sb-modal-body ${t.class}` : "sb-modal-body")), e;
})(), un = (t) => (() => {
  const e = bt.cloneNode(!0);
  return m(e, t, !1, !1), v(() => F(e, t.class ? `sb-modal-footer ${t.class}` : "sb-modal-footer")), e;
})();
const yt = /* @__PURE__ */ g('<progress aria-live="polite"></progress>'), dn = (t) => (() => {
  const e = yt.cloneNode(!0);
  return m(e, t, !1, !1), v((n) => {
    const s = (t == null ? void 0 : t.value) !== (t == null ? void 0 : t.max), o = t.class ? `sb-progress ${t.class}` : "sb-progress";
    return s !== n._v$ && A(e, "aria-busy", n._v$ = s), o !== n._v$2 && F(e, n._v$2 = o), n;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), e;
})();
const _t = /* @__PURE__ */ g('<label><input type="radio"></label>'), At = /* @__PURE__ */ g('<div role="radiogroup"></div>'), fn = (t) => {
  const [e, n, s] = w(t, ["accessKey", "align", "aria-disabled", "autofocus", "checked", "class", "disabled", "id", "name", "onchange", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children"]);
  return (() => {
    const o = _t.cloneNode(!0), r = o.firstChild;
    return m(o, s, !1, !0), $(o, N(D, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), r), m(r, e, !1, !1), $(o, N(D, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), v(() => F(o, `${n.align || "left"} sb-radio${e.disabled ? " disabled" : ""}`)), o;
  })();
};
let xt = 1;
const hn = (t) => {
  const [e, n] = w(t, ["onchange", "value", "children"]);
  let s;
  W(() => {
    const i = s.querySelectorAll('input[type="radio"]');
    if (Array.prototype.some.call(i, (l) => !l.hasAttribute("name"))) {
      const l = (Array.prototype.find.call(i, (c) => c.hasAttribute("name")) || {
        name: `sb-radio-group-${xt++}`
      }).name;
      Array.prototype.forEach.call(i, (c) => {
        c.setAttribute("name", l);
      });
    }
  }), C(() => {
    if (e.value) {
      const i = s.querySelectorAll('input[type="radio"]');
      Array.prototype.forEach.call(i, (l) => {
        l.checked = l.value === e.value;
      });
    }
  });
  let o = e.value;
  const r = () => {
    var l, c;
    const i = (l = s == null ? void 0 : s.querySelector('input[type="radio"]:checked')) == null ? void 0 : l.value;
    i && o !== i && ((c = e.onchange) == null || c.call(e, i), o = i);
  };
  return (() => {
    const i = At.cloneNode(!0);
    i.$$click = r, i.$$keyup = r;
    const l = s;
    return typeof l == "function" ? H(l, i) : s = i, m(i, n, !1, !0), $(i, () => e.children), v(() => F(i, n.class ? `sb-radiogroup ${n.class}` : "sb-radiogroup")), i;
  })();
};
q(["keyup", "click"]);
const wt = /* @__PURE__ */ g('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'), mn = (t) => {
  const [e, n] = w(t, ["label", "onchange", "aria-orientation"]);
  return (() => {
    const s = wt.cloneNode(!0), o = s.firstChild, r = o.nextSibling;
    return $(o, () => e.label), r.addEventListener("change", (i) => {
      var l;
      return (l = e.onchange) == null ? void 0 : l.call(e, i.target.value);
    }), m(r, n, !1, !1), v((i) => {
      const l = !!t.disabled, c = e["aria-orientation"];
      return l !== i._v$ && s.classList.toggle("disabled", i._v$ = l), c !== i._v$2 && A(s, "aria-orientation", i._v$2 = c), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const Nt = /* @__PURE__ */ g('<progress aria-busy="true" aria-live="polite"></progress>'), gn = (t) => (() => {
  const e = Nt.cloneNode(!0);
  return m(e, t, !1, !1), v(() => F(e, t.class ? `sb-spinner ${t.class}` : "sb-spinner")), e;
})();
const kt = /* @__PURE__ */ g('<section><ul role="tablist"></ul></section>'), Et = /* @__PURE__ */ g('<li role="tab" tabindex="0"></li>'), Ft = /* @__PURE__ */ g('<div role="tabpanel"></div>'), Ct = (t, e, n) => {
  const s = e === n;
  (t == null ? void 0 : t.getAttribute) && t.getAttribute("aria-selected") === "true" !== s && (t.setAttribute("aria-selected", s ? "true" : "false"), t.setAttribute("tabIndex", s ? "-1" : "0"));
}, St = (t, e, n) => {
  (t == null ? void 0 : t.hasAttribute) && t.hasAttribute("hidden") === (e === n) && t[e === n ? "removeAttribute" : "setAttribute"]("hidden", "hidden");
}, $n = (t) => {
  var l;
  const [e, n] = S((l = t.index) != null ? l : 0), s = _(() => M(t.children, "LI") || []), o = _(() => M(t.children, "DIV") || []);
  C(() => {
    var a;
    s().length !== o().length && console.warn(`solid-blocks tabs: items count mismatch: ${s().length} tabs and ${o().length}`);
    const c = e() % s().length;
    (a = t.onchange) == null || a.call(t, c), s().forEach((u, d) => {
      Ct(u, d, c);
    }), o().forEach((u, d) => {
      St(u, d, c);
    });
  });
  const r = (c) => {
    var d;
    const a = U(c.target, "LI");
    if (!a)
      return;
    const u = Array.prototype.indexOf.call((d = a.parentNode) == null ? void 0 : d.childNodes, a);
    u !== -1 && n(Number(u));
  }, i = (c) => {
    var b, f;
    const a = U(c.target, "LI"), u = (f = (b = a == null ? void 0 : a.parentElement) == null ? void 0 : b.childNodes) != null ? f : [], d = Array.prototype.indexOf.call(u, a);
    d !== -1 && (c.key === " " ? n(d) : c.key === "ArrowLeft" && d !== 0 ? (n(d - 1), u[d - 1].focus()) : c.key === "ArrowRight" && d + 1 < u.length && (n(d + 1), u[d + 1].focus()));
  };
  return (() => {
    const c = kt.cloneNode(!0), a = c.firstChild;
    return a.$$keyup = i, a.$$click = r, $(a, s), $(c, o, null), v((u) => {
      var f;
      const d = E((f = t.classList) != null ? f : {}, {
        "sb-tabs": !0
      }), b = t.vertical ? "vertical" : "horizontal";
      return u._v$ = P(c, d, u._v$), b !== u._v$2 && A(a, "aria-orientation", u._v$2 = b), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}, vn = (t) => (() => {
  const e = Et.cloneNode(!0);
  return m(e, t, !1, !1), e;
})(), bn = (t) => (() => {
  const e = Ft.cloneNode(!0);
  return m(e, t, !1, !1), e;
})();
q(["click", "keyup"]);
const Lt = /* @__PURE__ */ g("<a></a>"), Pt = /* @__PURE__ */ g("<span></span>"), Mt = /* @__PURE__ */ g("<div></div>"), yn = (t) => {
  const [e, n] = w(t, ["plain"]), s = E({
    "data-random": e.plain ? void 0 : K(),
    rel: t.target ? "tag noopener" : "tag"
  }, n, {
    class: t.class ? `sb-tag ${t.class}` : "sb-tag"
  });
  return N(D, {
    get when() {
      return typeof s.href == "string";
    },
    get fallback() {
      return (() => {
        const o = Pt.cloneNode(!0);
        return m(o, s, !1, !1), o;
      })();
    },
    get children() {
      const o = Lt.cloneNode(!0);
      return m(o, s, !1, !1), o;
    }
  });
}, _n = (t) => (() => {
  const e = Mt.cloneNode(!0);
  return m(e, t, !1, !1), v(() => F(e, t.class ? `sb-tag-group ${t.class}` : "sb-tag-group")), e;
})();
const Bt = /* @__PURE__ */ g('<label><span class="sb-textfield-label"></span></label>'), An = (t) => {
  const [e, n] = w(t, ["aria-orientation", "classList", "label", "multiline", "onchange", "children"]), s = _(() => (o) => {
    var r;
    return (r = e.onchange) == null ? void 0 : r.call(e, o.target.value);
  });
  return (() => {
    const o = Bt.cloneNode(!0), r = o.firstChild;
    return $(r, () => e.label), $(o, N(Ie, E({
      get component() {
        return t.multiline ? "textarea" : "input";
      },
      get onchange() {
        return s();
      }
    }, n, {
      get type() {
        var i;
        return t.multiline ? void 0 : (i = n.type) != null ? i : "text";
      }
    })), null), $(o, () => e.children, null), v((i) => {
      var a;
      const l = E((a = e.classList) != null ? a : {}, {
        "sb-textfield": !0
      }), c = t["aria-orientation"];
      return i._v$ = P(o, l, i._v$), c !== i._v$2 && A(o, "aria-orientation", i._v$2 = c), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
};
const Dt = /* @__PURE__ */ g("<div></div>"), Tt = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"], $e = Tt.reduce((t, e) => (t[e] = pe ? null : document.getElementById(`sb-toast-${e}`), t), {}), Ot = document.createElement("div"), pt = (t = "top-right") => {
  const e = Ot.cloneNode();
  return e.id = `sb-toast-${t}`, $e[t] = e, document.body.appendChild(e), e;
}, xn = (t) => {
  const [e, n] = w(t, ["timeout", "position", "children", "mount", "onhide"]), s = _(() => e.mount || $e[e.position || "top-right"] || pt(e.position)), [o, r] = S(!0), i = () => r(!1), [l, c] = S(), [a, u] = S(M(e.children, () => !0, [{
    update: c,
    hide: i
  }]));
  return W(() => {
    var d;
    return t.timeout !== 0 && setTimeout(() => r(!1), (d = t.timeout) != null ? d : 5e3);
  }), C(() => {
    l() && u(M(l(), () => !0, [{
      update: c,
      hide: i
    }]));
  }), C(() => {
    var d;
    return !o() && ((d = t.onhide) == null ? void 0 : d.call(t));
  }), C(() => {
    const d = s();
    d !== t.mount && (!o() && (d == null ? void 0 : d.childElementCount) === 0 ? document.body.removeChild(d) : o() && d && !(d != null && d.parentNode) && document.body.appendChild(d));
  }), N(D, {
    get when() {
      return o();
    },
    get children() {
      return N(ee, {
        get mount() {
          return s();
        },
        get children() {
          const d = Dt.cloneNode(!0);
          return m(d, n, !1, !0), $(d, a), v(() => F(d, n.class ? `sb-toast ${n.class}` : "sb-toast")), d;
        }
      });
    }
  });
};
const de = /* @__PURE__ */ g('<span tabindex="0"></span>'), Ht = /* @__PURE__ */ g('<span aria-haspopup="true"><span role="tooltip"></span></span>'), It = (t, e) => t === void 0 ? !1 : (Array.isArray(t) ? t : [t]).reduce((n, s) => typeof s == "boolean" ? s : typeof s == "function" ? s() : n, e != null ? e : !1), J = (t, e) => t === void 0 || t === e || Array.isArray(t) && t.includes(e), ve = (t) => {
  if (typeof t == "function")
    return ve(t());
  if (typeof t == "string")
    return (() => {
      const e = de.cloneNode(!0);
      return $(e, t), e;
    })();
  if (Array.isArray(t)) {
    const e = t.map((n) => typeof n == "function" ? n() : n);
    return e.every((n) => typeof n == "string") ? (() => {
      const n = de.cloneNode(!0);
      return $(n, e), n;
    })() : e;
  }
  return t;
}, wn = (t) => {
  let e;
  const [n, s] = w(t, ["children", "position", "content", "trigger", "arrow", "nowrap"]), o = _(() => J(n.trigger, "focus")), r = _(() => J(n.trigger, "hover")), i = _(() => J(n.trigger, "focus") ? ve(n.children) : n.children), [l, c] = S(!1);
  C(() => c(It(n.trigger)));
  const [a, u] = S(), d = _(() => (f) => o() && c(f.type === "focus")), b = _(() => (f) => {
    var h;
    return r() && c(e.contains((h = f.toElement) != null ? h : f.target));
  });
  return C(() => {
    if (!l() || !(e != null && e.offsetHeight))
      return {
        top: "10px"
      };
    u(n.position === "nw" ? {
      top: `${e.offsetTop}px`,
      left: `${e.offsetLeft}px`
    } : n.position === "n" ? {
      top: `${e.offsetTop}px`,
      left: `${e.offsetLeft + (e.offsetWidth >> 1)}px`
    } : n.position === "ne" ? {
      top: `${e.offsetTop}px`,
      left: `${e.offsetLeft + e.offsetWidth}px`
    } : n.position === "e" ? {
      top: `${e.offsetTop + (e.offsetHeight >> 1)}px`,
      left: `${e.offsetLeft + e.offsetWidth}px`
    } : n.position === "se" ? {
      top: `${e.offsetTop + e.offsetHeight}px`,
      left: `${e.offsetLeft + e.offsetWidth}px`
    } : n.position === "sw" ? {
      top: `${e.offsetTop + e.offsetHeight}px`,
      left: `${e.offsetLeft}px`
    } : n.position === "w" ? {
      top: `${e.offsetTop + (e.offsetHeight >> 1)}px`,
      left: `${e.offsetLeft}px`
    } : {
      top: `${e.offsetTop + e.offsetHeight}px`,
      left: `${e.offsetLeft + (e.offsetWidth >> 1)}px`
    });
  }), (() => {
    const f = Ht.cloneNode(!0), h = f.firstChild;
    O(f, "mouseleave", b()), O(f, "mouseover", b(), !0);
    const x = e;
    return typeof x == "function" ? H(x, f) : e = f, f.addEventListener("focus", d(), !0), f.addEventListener("blur", d(), !0), $(f, i, h), m(h, s, !1, !0), $(h, () => n.content), v((y) => {
      var R;
      const L = l(), B = `sb-tooltip-wrapper position-${(R = n.position) != null ? R : "s"}${n.arrow === !1 ? "" : " arrow"}${n.nowrap ? " nowrap" : ""}`, T = !l(), V = a();
      return L !== y._v$ && A(f, "aria-expanded", y._v$ = L), B !== y._v$2 && F(f, y._v$2 = B), T !== y._v$3 && (h.hidden = y._v$3 = T), y._v$4 = z(h, V, y._v$4), y;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), f;
  })();
};
q(["mouseover"]);
export {
  jt as Accordion,
  Kt as AccordionGroup,
  Rt as AccordionHeader,
  Ut as Avatar,
  Wt as AvatarBadge,
  Vt as AvatarGroup,
  Qt as Bar,
  Xt as Breadcrumbs,
  lt as Button,
  Jt as Checkbox,
  zt as Menu,
  en as MenuButton,
  tn as MenuItem,
  nn as MenuItemGroup,
  on as MenuOption,
  sn as MenuOptionGroup,
  ge as MenuOptionsContext,
  Zt as Message,
  Yt as Meter,
  ln as Modal,
  an as ModalBody,
  rn as ModalContent,
  un as ModalFooter,
  cn as ModalHeader,
  dn as Progress,
  fn as Radio,
  hn as RadioGroup,
  mn as Select,
  gn as Spinner,
  vn as Tab,
  bn as TabContainer,
  $n as Tabs,
  yn as Tag,
  _n as TagGroup,
  An as TextField,
  xn as Toast,
  wn as Tooltip,
  Ge as composeStyles,
  Ue as createLocalStorageSignal,
  M as getElements,
  tt as getInitials,
  U as getNearestNode,
  K as getRandom,
  je as maxRandom,
  qe as toStyleObject,
  Gt as useDarkMode,
  Re as useMediaQuery
};
//# sourceMappingURL=solid-blocks.mjs.map
