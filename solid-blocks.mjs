import { createRenderEffect as v, untrack as de, sharedConfig as k, createSignal as S, createRoot as ve, onCleanup as j, splitProps as w, createMemo as y, createEffect as E, onMount as V, mergeProps as F, createComponent as N, For as be, Show as D, createContext as ye, useContext as _e, Switch as Ae, Match as Q } from "solid-js";
const xe = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], we = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...xe]), Ne = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), ke = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), ne = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}), Fe = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), Ce = /* @__PURE__ */ new Set([
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
]), Ee = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Se(t, e, n) {
  let l = n.length, o = e.length, s = l, r = 0, i = 0, c = e[o - 1].nextSibling, a = null;
  for (; r < o || i < s; ) {
    if (e[r] === n[i]) {
      r++, i++;
      continue;
    }
    for (; e[o - 1] === n[s - 1]; )
      o--, s--;
    if (o === r) {
      const u = s < l ? i ? n[i - 1].nextSibling : n[s - i] : c;
      for (; i < s; )
        t.insertBefore(n[i++], u);
    } else if (s === i)
      for (; r < o; )
        (!a || !a.has(e[r])) && e[r].remove(), r++;
    else if (e[r] === n[s - 1] && n[i] === e[o - 1]) {
      const u = e[--o].nextSibling;
      t.insertBefore(n[i++], e[r++].nextSibling), t.insertBefore(n[--s], u), e[o] = n[s];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let d = i;
        for (; d < s; )
          a.set(n[d], d++);
      }
      const u = a.get(e[r]);
      if (u != null)
        if (i < u && u < s) {
          let d = r, b = 1, f;
          for (; ++d < o && d < s && !((f = a.get(e[d])) == null || f !== u + b); )
            b++;
          if (b > u - i) {
            const h = e[r];
            for (; i < u; )
              t.insertBefore(n[i++], h);
          } else
            t.replaceChild(n[i++], e[r++]);
        } else
          r++;
      else
        e[r++].remove();
    }
  }
}
const oe = "_$DX_DELEGATE";
function m(t, e, n) {
  const l = document.createElement("template");
  l.innerHTML = t;
  let o = l.content.firstChild;
  return n && (o = o.firstChild), o;
}
function q(t, e = window.document) {
  const n = e[oe] || (e[oe] = /* @__PURE__ */ new Set());
  for (let l = 0, o = t.length; l < o; l++) {
    const s = t[l];
    n.has(s) || (n.add(s), e.addEventListener(s, De));
  }
}
function A(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function Le(t, e, n, l) {
  l == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, l);
}
function C(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function p(t, e, n, l) {
  if (l)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    t.addEventListener(e, n[0] = (s) => o.call(t, n[1], s));
  } else
    t.addEventListener(e, n);
}
function P(t, e, n = {}) {
  const l = Object.keys(e || {}), o = Object.keys(n);
  let s, r;
  for (s = 0, r = o.length; s < r; s++) {
    const i = o[s];
    !i || i === "undefined" || e[i] || (se(t, i, !1), delete n[i]);
  }
  for (s = 0, r = l.length; s < r; s++) {
    const i = l[s], c = !!e[i];
    !i || i === "undefined" || n[i] === c || !c || (se(t, i, !0), n[i] = c);
  }
  return n;
}
function ee(t, e, n) {
  if (!e)
    return n ? A(t, "style") : e;
  const l = t.style;
  if (typeof e == "string")
    return l.cssText = e;
  typeof n == "string" && (l.cssText = n = void 0), n || (n = {}), e || (e = {});
  let o, s;
  for (s in n)
    e[s] == null && l.removeProperty(s), delete n[s];
  for (s in e)
    o = e[s], o !== n[s] && (l.setProperty(s, o), n[s] = o);
  return n;
}
function g(t, e = {}, n, l) {
  const o = {};
  return l || v(() => o.children = I(t, e.children, o.children)), v(() => e.ref && e.ref(t)), v(() => Pe(t, e, n, !0, o, !0)), o;
}
function H(t, e, n) {
  return de(() => t(e, n));
}
function $(t, e, n, l) {
  if (n !== void 0 && !l && (l = []), typeof e != "function")
    return I(t, e, l, n);
  v((o) => I(t, e(), o, n), l);
}
function Pe(t, e, n, l, o = {}, s = !1) {
  e || (e = {});
  for (const r in o)
    if (!(r in e)) {
      if (r === "children")
        continue;
      o[r] = le(t, r, null, o[r], n, s);
    }
  for (const r in e) {
    if (r === "children") {
      l || I(t, e.children);
      continue;
    }
    const i = e[r];
    o[r] = le(t, r, i, o[r], n, s);
  }
}
function Me(t) {
  let e, n;
  return !k.context || !(e = k.registry.get(n = Te())) ? t.cloneNode(!0) : (k.completed && k.completed.add(e), k.registry.delete(n), e);
}
function Be(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}
function se(t, e, n) {
  const l = e.trim().split(/\s+/);
  for (let o = 0, s = l.length; o < s; o++)
    t.classList.toggle(l[o], n);
}
function le(t, e, n, l, o, s) {
  let r, i, c;
  if (e === "style")
    return ee(t, n, l);
  if (e === "classList")
    return P(t, n, l);
  if (n === l)
    return l;
  if (e === "ref")
    s || n(t);
  else if (e.slice(0, 3) === "on:") {
    const a = e.slice(3);
    l && t.removeEventListener(a, l), n && t.addEventListener(a, n);
  } else if (e.slice(0, 10) === "oncapture:") {
    const a = e.slice(10);
    l && t.removeEventListener(a, l, !0), n && t.addEventListener(a, n, !0);
  } else if (e.slice(0, 2) === "on") {
    const a = e.slice(2).toLowerCase(), u = Fe.has(a);
    if (!u && l) {
      const d = Array.isArray(l) ? l[0] : l;
      t.removeEventListener(a, d);
    }
    (u || n) && (p(t, a, n, u), u && q([a]));
  } else if ((c = Ne.has(e)) || !o && (ne[e] || (i = we.has(e))) || (r = t.nodeName.includes("-")))
    e === "class" || e === "className" ? C(t, n) : r && !i && !c ? t[Be(e)] = n : t[ne[e] || e] = n;
  else {
    const a = o && e.indexOf(":") > -1 && Ee[e.split(":")[0]];
    a ? Le(t, a, e, n) : A(t, ke[e] || e, n);
  }
  return n;
}
function De(t) {
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
  }), k.registry && !k.done && (k.done = !0, document.querySelectorAll("[id^=pl-]").forEach((l) => l.remove())); n !== null; ) {
    const l = n[e];
    if (l && !n.disabled) {
      const o = n[`${e}Data`];
      if (o !== void 0 ? l.call(n, o, t) : l.call(n, t), t.cancelBubble)
        return;
    }
    n = n.host && n.host !== n && n.host instanceof Node ? n.host : n.parentNode;
  }
}
function I(t, e, n, l, o) {
  for (k.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
    n = n();
  if (e === n)
    return n;
  const s = typeof e, r = l !== void 0;
  if (t = r && n[0] && n[0].parentNode || t, s === "string" || s === "number") {
    if (k.context)
      return n;
    if (s === "number" && (e = e.toString()), r) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data = e : i = document.createTextNode(e), n = O(t, n, l, i);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || s === "boolean") {
    if (k.context)
      return n;
    n = O(t, n, l);
  } else {
    if (s === "function")
      return v(() => {
        let i = e();
        for (; typeof i == "function"; )
          i = i();
        n = I(t, i, n, l);
      }), () => n;
    if (Array.isArray(e)) {
      const i = [], c = n && Array.isArray(n);
      if (Z(i, e, n, o))
        return v(() => n = I(t, i, n, l, !0)), () => n;
      if (k.context) {
        if (!i.length)
          return n;
        for (let a = 0; a < i.length; a++)
          if (i[a].parentNode)
            return n = i;
      }
      if (i.length === 0) {
        if (n = O(t, n, l), r)
          return n;
      } else
        c ? n.length === 0 ? ie(t, i, l) : Se(t, n, i) : (n && O(t), ie(t, i));
      n = i;
    } else if (e instanceof Node) {
      if (k.context && e.parentNode)
        return n = r ? [e] : e;
      if (Array.isArray(n)) {
        if (r)
          return n = O(t, n, l, e);
        O(t, n, null, e);
      } else
        n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function Z(t, e, n, l) {
  let o = !1;
  for (let s = 0, r = e.length; s < r; s++) {
    let i = e[s], c = n && n[s];
    if (i instanceof Node)
      t.push(i);
    else if (!(i == null || i === !0 || i === !1))
      if (Array.isArray(i))
        o = Z(t, i, c) || o;
      else if (typeof i == "function")
        if (l) {
          for (; typeof i == "function"; )
            i = i();
          o = Z(t, Array.isArray(i) ? i : [i], Array.isArray(c) ? c : [c]) || o;
        } else
          t.push(i), o = !0;
      else {
        const a = String(i);
        c && c.nodeType === 3 && c.data === a ? t.push(c) : t.push(document.createTextNode(a));
      }
  }
  return o;
}
function ie(t, e, n = null) {
  for (let l = 0, o = e.length; l < o; l++)
    t.insertBefore(e[l], n);
}
function O(t, e, n, l) {
  if (n === void 0)
    return t.textContent = "";
  const o = l || document.createTextNode("");
  if (e.length) {
    let s = !1;
    for (let r = e.length - 1; r >= 0; r--) {
      const i = e[r];
      if (o !== i) {
        const c = i.parentNode === t;
        !s && !r ? c ? t.replaceChild(o, i) : t.insertBefore(o, n) : c && i.remove();
      } else
        s = !0;
    }
  } else
    t.insertBefore(o, n);
  return [o];
}
function Te() {
  const t = k.context;
  return `${t.id}${t.count++}`;
}
const Y = !1, pe = "http://www.w3.org/2000/svg";
function fe(t, e = !1) {
  return e ? document.createElementNS(pe, t) : document.createElement(t);
}
function te(t) {
  const {
    useShadow: e
  } = t, n = document.createTextNode(""), l = t.mount || document.body;
  function o() {
    if (k.context) {
      const [s, r] = S(!1);
      return queueMicrotask(() => r(!0)), () => s() && t.children;
    } else
      return () => t.children;
  }
  if (l instanceof HTMLHeadElement) {
    const [s, r] = S(!1), i = () => r(!0);
    ve((c) => $(l, () => s() ? c() : o()(), null)), j(() => {
      k.context ? queueMicrotask(i) : i();
    });
  } else {
    const s = fe(t.isSVG ? "g" : "div", t.isSVG), r = e && s.attachShadow ? s.attachShadow({
      mode: "open"
    }) : s;
    Object.defineProperty(s, "host", {
      get() {
        return n.parentNode;
      },
      configurable: !0
    }), $(r, o()), l.appendChild(s), t.ref && t.ref(s), j(() => l.removeChild(s));
  }
  return n;
}
function Oe(t) {
  const [e, n] = w(t, ["component"]), l = y(() => e.component);
  return y(() => {
    const o = l();
    switch (typeof o) {
      case "function":
        return de(() => o(n));
      case "string":
        const s = Ce.has(o), r = k.context ? Me() : fe(o, s);
        return g(r, n, s), r;
    }
  });
}
const He = (t) => {
  if (typeof t == "object")
    return t;
  const e = {};
  return (t || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (n, l, o) => (e[l] = o, "")), e;
}, Ie = (...t) => Object.assign({}, ...t.map(He)), U = (t, e) => {
  if (!t)
    return;
  let n = t;
  for (; n && n.nodeName !== e; )
    n = n.parentNode;
  return n;
}, qe = 8;
let G = 0;
const K = () => {
  const t = 1 + Math.floor(Math.random() * (qe - (G ? 1 : 0)));
  return G = G ? t + (t === G ? 1 : 0) : t, G;
}, Ge = (t) => {
  const e = window.matchMedia(t), [n, l] = S(e.matches), o = (s) => l(s.matches);
  return e.addEventListener("change", o), j(() => e.removeEventListener("change", o)), n;
}, je = (t, e) => e ? t ? JSON.parse(t) : void 0 : t != null ? t : void 0, re = (t, e) => localStorage.setItem(t, typeof e == "string" ? e : JSON.stringify(e));
function Re(t, e, n = !1) {
  localStorage.getItem(t) === null && e !== void 0 && re(t, e);
  const [l, o] = S(je(localStorage.getItem(t), n));
  return E(
    () => n && l() === void 0 ? localStorage.removeItem(t) : re(t, l())
  ), [l, o];
}
const It = (t = "COLOR_SCHEME") => {
  const e = Ge("(prefers-color-scheme: dark)"), [n, l] = Re(t, void 0, !0), o = y(() => {
    var s;
    return (s = n()) != null ? s : e();
  });
  return E(() => {
    document.body.classList.toggle("dark-mode", o());
  }), [o, l];
}, M = (t, e, n = [], l = []) => {
  if (!!t) {
    if (Array.isArray(t))
      t.forEach((o) => M(o, e, n, l));
    else if (typeof t == "function")
      M(t.apply(null, n), e, n, l);
    else {
      const o = t;
      (!e || (typeof e == "function" ? e(o) : o.nodeName === e)) && l.push(o);
    }
    return l;
  }
};
const Ke = /* @__PURE__ */ m("<details></details>"), Ue = /* @__PURE__ */ m("<summary></summary>"), Ve = /* @__PURE__ */ m("<section></section>"), qt = (t) => {
  const [e, n] = w(t, ["children", "ontoggle"]), [l, o] = S(!!t.open);
  let s;
  const r = y(() => typeof t.children == "function" ? t.children(l()) : t.children), i = () => {
    var c;
    s && (o(s.open), (c = e.ontoggle) == null || c.call(e, s.open));
  };
  return V(() => s == null ? void 0 : s.addEventListener("toggle", i)), j(() => s == null ? void 0 : s.addEventListener("toggle", i)), (() => {
    const c = Ke.cloneNode(!0), a = s;
    return typeof a == "function" ? H(a, c) : s = c, g(c, n, !1, !0), $(c, r), v((u) => {
      var f;
      const d = F((f = t.classList) != null ? f : {}, {
        "sb-accordion": !0
      }), b = !!t.open;
      return u._v$ = P(c, d, u._v$), b !== u._v$2 && (c.open = u._v$2 = b), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}, Gt = (t) => (() => {
  const e = Ue.cloneNode(!0);
  return $(e, () => t.children), v((n) => {
    var l;
    return P(e, F((l = t.classList) != null ? l : {}, {
      "sb-accordion-header": !0
    }), n);
  }), e;
})(), jt = (t) => {
  const [e, n] = w(t, ["allowMultiple", "allowToggle"]), l = y(() => (s) => {
    var c, a;
    if (!s.target)
      return;
    const r = U(s.target, "DETAILS");
    if (!r)
      return;
    const i = (a = (c = r.parentNode) == null ? void 0 : c.querySelectorAll("details.sb-accordion[open]")) != null ? a : [];
    i.length !== 0 && (!e.allowMultiple && !r.open && Array.prototype.forEach.call(i, (u) => {
      u !== r && u.removeAttribute("open");
    }), !e.allowToggle && r.open && i.length === 1 && s.preventDefault());
  }), o = y(() => (s) => {
    const r = U(s.target, "DETAILS");
    if (!r || !r.parentNode)
      return;
    const i = r.parentNode.querySelectorAll("details.sb-accordion"), c = Array.prototype.indexOf.call(i, r);
    if (c !== -1) {
      if (s.key === "ArrowLeft" && c !== 0) {
        const a = i[c - 1], u = a.querySelector("summary");
        u == null || u.focus(), !a.open && (u == null || u.click());
      }
      if (s.key === "ArrowRight" && c + 1 < i.length) {
        const a = i[c + 1], u = a.querySelector("summary");
        u == null || u.focus(), !a.open && (u == null || u.click());
      }
    }
  });
  return (() => {
    const s = Ve.cloneNode(!0);
    return p(s, "keyup", o(), !0), p(s, "click", l(), !0), g(s, n, !1, !1), v((r) => {
      var i;
      return P(s, F((i = t.classList) != null ? i : {}, {
        "sb-accordion-group": !0
      }), r);
    }), s;
  })();
};
q(["click", "keyup"]);
const We = /* @__PURE__ */ m('<div role="figure"><img><span aria-hidden="true"></span></div>'), Qe = /* @__PURE__ */ m('<div role="img"></div>'), Xe = /* @__PURE__ */ m('<div role="img" aria-label="Unknown"></div>'), Je = /* @__PURE__ */ m("<span></span>"), Ze = /* @__PURE__ */ m('<div role="group"></div>'), ce = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]", Ye = new RegExp(`^.*?(${ce})(?:.*\\s+\\S*?(${ce}))?.*$`), ze = (t) => t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g, "").replace(Ye, "$1$2").toUpperCase(), Rt = (t) => {
  const [e, n] = w(t, ["classList", "children", "img", "name", "fallback"]), l = y(() => e.name ? ze(e.name) : "");
  return e.img ? (() => {
    const o = We.cloneNode(!0), s = o.firstChild, r = s.nextSibling;
    return g(o, n, !1, !0), $(r, l), $(o, () => e.children, null), v((i) => {
      var b;
      const c = F((b = e.classList) != null ? b : {}, {
        "sb-avatar": !0
      }), a = K(), u = e.img, d = e.name;
      return i._v$ = P(o, c, i._v$), a !== i._v$2 && A(o, "data-random", i._v$2 = a), u !== i._v$3 && A(s, "src", i._v$3 = u), d !== i._v$4 && A(s, "alt", i._v$4 = d), i;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), o;
  })() : e.name ? (() => {
    const o = Qe.cloneNode(!0);
    return g(o, n, !1, !0), $(o, l, null), $(o, () => e.children, null), v((s) => {
      var a;
      const r = F((a = e.classList) != null ? a : {}, {
        "sb-avatar": !0
      }), i = e.name, c = K();
      return s._v$5 = P(o, r, s._v$5), i !== s._v$6 && A(o, "aria-label", s._v$6 = i), c !== s._v$7 && A(o, "data-random", s._v$7 = c), s;
    }, {
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0
    }), o;
  })() : (() => {
    const o = Xe.cloneNode(!0);
    return g(o, n, !1, !0), $(o, () => {
      var s;
      return (s = e.fallback) != null ? s : "?";
    }, null), $(o, () => e.children, null), v((s) => {
      var c;
      const r = F((c = e.classList) != null ? c : {}, {
        "sb-avatar": !0
      }), i = K();
      return s._v$8 = P(o, r, s._v$8), i !== s._v$9 && A(o, "data-random", s._v$9 = i), s;
    }, {
      _v$8: void 0,
      _v$9: void 0
    }), o;
  })();
}, Kt = (t) => {
  var o;
  const [e, n] = w(t, ["classList", "borderColor", "background", "style"]), l = Ie((o = e.style) != null ? o : {}, {
    "border-color": e.borderColor,
    background: e.background
  });
  return (() => {
    const s = Je.cloneNode(!0);
    return g(s, n, !1, !1), v((r) => {
      var a;
      const i = F((a = e.classList) != null ? a : {}, {
        "sb-badge": !0
      }), c = l;
      return r._v$10 = P(s, i, r._v$10), r._v$11 = ee(s, c, r._v$11), r;
    }, {
      _v$10: void 0,
      _v$11: void 0
    }), s;
  })();
}, Ut = (t) => (() => {
  const e = Ze.cloneNode(!0);
  return g(e, t, !1, !1), v((n) => {
    var s;
    const l = F((s = t.classList) != null ? s : {}, {
      "sb-avatar": !0
    }), o = Array.isArray(t.children) && t.children.length > 3;
    return n._v$12 = P(e, l, n._v$12), o !== n._v$13 && A(e, "aria-haspopup", n._v$13 = o), n;
  }, {
    _v$12: void 0,
    _v$13: void 0
  }), e;
})();
const ae = /* @__PURE__ */ m("<div></div>"), Vt = (t) => {
  const [e, n] = w(t, ["placement", "position", "mount", "portal"]), l = F(n, {
    class: `${e.placement}${e.position ? " " + e.position : ""} sb-bar ${t.class ? " " + t.class : ""}`
  });
  return e.portal === !1 ? (() => {
    const o = ae.cloneNode(!0);
    return g(o, l, !1, !1), o;
  })() : N(te, {
    get mount() {
      return e.mount;
    },
    get children() {
      const o = ae.cloneNode(!0);
      return g(o, l, !1, !1), o;
    }
  });
};
const et = /* @__PURE__ */ m('<nav class="sb-breadcrumbs"><ol></ol></nav>'), tt = /* @__PURE__ */ m("<li></li>"), Wt = (t) => (() => {
  const e = et.cloneNode(!0), n = e.firstChild;
  return g(n, t, !1, !0), $(n, N(be, {
    get each() {
      return Array.isArray(t.children) ? t.children : [t.children];
    },
    children: (l) => (() => {
      const o = tt.cloneNode(!0);
      return $(o, l), o;
    })()
  })), e;
})();
const nt = /* @__PURE__ */ m("<button></button>"), ot = (t) => {
  const [e, n] = w(t, ["variant", "classList"]);
  return (() => {
    const l = nt.cloneNode(!0);
    return g(l, n, !1, !1), v((o) => {
      var s, r;
      return P(l, F((s = e.classList) != null ? s : {}, {
        "sb-button": !0,
        [(r = e.variant) != null ? r : "primary"]: !0
      }), o);
    }), l;
  })();
};
const st = /* @__PURE__ */ m('<label><input type="checkbox"></label>'), Qt = (t) => {
  const [e, n, l] = w(t, ["accessKey", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children", "onchange", "switch"]), o = (s) => {
    var r, i;
    return (i = n.onchange) == null ? void 0 : i.call(n, (r = s.target) == null ? void 0 : r.checked);
  };
  return (() => {
    const s = st.cloneNode(!0), r = s.firstChild;
    return g(s, l, !1, !0), $(s, N(D, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), r), r.addEventListener("change", o), g(r, e, !1, !1), $(s, N(D, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), v((i) => {
      const c = `${n.align || "left"} ${n.switch ? " switch" : ""} sb-checkbox`, a = n.switch ? "switch" : void 0;
      return c !== i._v$ && C(s, i._v$ = c), a !== i._v$2 && A(r, "role", i._v$2 = a), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const lt = /* @__PURE__ */ m("<p></p>"), Xt = (t) => {
  const [e, n] = w(t, ["type", "class", "inline"]), l = y(() => [...new Set(["sb-message", e.type, e.class, e.inline && "inline"].filter(Boolean))].join(" "));
  return (() => {
    const o = lt.cloneNode(!0);
    return g(o, n, !1, !1), v((s) => {
      const r = l(), i = e.type === "error" ? "alert" : void 0;
      return r !== s._v$ && C(o, s._v$ = r), i !== s._v$2 && A(o, "role", s._v$2 = i), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
};
const it = /* @__PURE__ */ m('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'), Jt = (t) => (() => {
  const e = it.cloneNode(!0), n = e.firstChild, l = n.firstChild;
  return g(e, t, !1, !0), A(
    e,
    "role",
    "meter"
  ), $(e, () => t.children, null), v((o) => {
    var d, b, f, h, x, _;
    const s = t.class ? `sb-meter ${t.class}` : "sb-meter", r = (d = t.value) != null ? d : t["aria-valuenow"], i = (b = t.min) != null ? b : t["aria-valuemin"], c = (f = t.max) != null ? f : t["aria-valuemax"], a = `0 0 ${(h = t.max) != null ? h : t["aria-valuemax"]} 10`, u = (_ = (x = t.value) != null ? x : t["aria-valuenow"]) != null ? _ : 0;
    return s !== o._v$ && C(e, o._v$ = s), r !== o._v$2 && A(e, "aria-valuenow", o._v$2 = r), i !== o._v$3 && A(e, "aria-valuemin", o._v$3 = i), c !== o._v$4 && A(e, "aria-valuemax", o._v$4 = c), a !== o._v$5 && A(n, "viewBox", o._v$5 = a), u !== o._v$6 && A(l, "width", o._v$6 = u), o;
  }, {
    _v$: void 0,
    _v$2: void 0,
    _v$3: void 0,
    _v$4: void 0,
    _v$5: void 0,
    _v$6: void 0
  }), e;
})();
const rt = /* @__PURE__ */ m('<div><div tabindex="-1" role="menu"></div></div>'), ct = /* @__PURE__ */ m('<div tabindex="0" role="menuitem"></div>'), he = /* @__PURE__ */ m("<p></p>"), at = /* @__PURE__ */ m('<div role="group"></div>'), ut = /* @__PURE__ */ m("<div></div>"), dt = /* @__PURE__ */ m('<div tabindex="-1" role="group"></div>'), ft = (t) => {
  let e = 0;
  return (n) => {
    const s = (n.nodeName === "BUTTON" || n.getAttribute("role") === "button") && n.getAttribute("aria-haspopup") === "menu" && e++ === 0;
    return s && (t() && n.getAttribute("aria-expanded") !== "true" ? n.setAttribute("aria-expanded", "true") : !t() && n.getAttribute("aria-expanded") === "true" && n.setAttribute("aria-expanded", "false")), s;
  };
}, ht = () => {
  let t = 0;
  return (e) => !((e.nodeName === "BUTTON" || e.getAttribute("role") === "button") && e.getAttribute("aria-haspopup") === "menu" && t++ === 0);
}, Zt = (t) => {
  const [e, n] = S(!!t.open), [l, o] = w(t, ["open", "children", "ontoggle", "align"]), s = y(() => {
    var f;
    return ((f = M(t.children, ft(e), [e()])) != null ? f : [])[0];
  }), r = y(() => {
    var f;
    return (f = M(t.children, ht(), [e()])) != null ? f : [];
  });
  let i;
  E(() => {
    var h;
    const f = e();
    (h = l.ontoggle) == null || h.call(l, f), f && r()[0].focus();
  });
  const c = (f) => {
    const h = f.target, x = h == null ? void 0 : h.getAttribute("role"), _ = s();
    !f.defaultPrevented && _ && (f.target === _ ? n((L) => !L && _.getAttribute("aria-disabled") !== "true") : !_.contains(h) && x !== "menuitemradio" && x !== "menuitemcheckbox" && n(!1));
  };
  V(() => !Y && document.addEventListener("click", c, {
    capture: !1
  })), j(() => !Y && document.removeEventListener("click", c));
  let a;
  const u = (f) => {
    var x;
    const h = f.target;
    ["menuitem", "menuitemradio", "menuitemcheckbox"].includes((x = h == null ? void 0 : h.getAttribute("role")) != null ? x : "") && (h == null ? void 0 : h.tabIndex) !== -1 && (h == null ? void 0 : h.getAttribute("aria-disabled")) !== "true" && (a = h, a == null || a.focus());
  }, d = (f) => {
    const h = i.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'), x = a ? Array.prototype.findIndex.call(h, (L) => L === a) : -1, _ = x === -1 ? 1 : (h.length + f + x) % h.length;
    a = h[_], a.focus();
  }, b = (f) => {
    var _, L, B;
    const h = f.target;
    f.key === "Escape" && e() && (n(!1), (_ = s()) == null || _.focus());
    const x = h == null ? void 0 : h.getAttribute("role");
    if (f.key === " " && ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(x != null ? x : "")) {
      if (h.click(), x === "menuitemradio") {
        const T = (B = (L = h.parentNode) == null ? void 0 : L.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]')) != null ? B : [], W = Array.prototype.indexOf.call(T, h), R = (T.length + 1 + W) % T.length;
        a = T[R], a == null || a.focus();
      }
      f.preventDefault();
    }
    f.key === "ArrowDown" ? (d(1), f.preventDefault()) : f.key === "ArrowUp" && (d(-1), f.preventDefault());
  };
  return (() => {
    const f = rt.cloneNode(!0), h = f.firstChild;
    f.$$keydown = b;
    const x = i;
    return typeof x == "function" ? H(x, f) : i = f, g(f, o, !1, !0), $(f, s, h), h.$$mouseover = u, $(h, r), v((_) => {
      const L = `sb-menu${o.class ? " " + o.class : ""}${l.align ? " " + l.align : ""}`, B = !e();
      return L !== _._v$ && C(f, _._v$ = L), B !== _._v$2 && (h.hidden = _._v$2 = B), _;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
}, Yt = (t) => N(ot, F(t, {
  "aria-haspopup": "menu"
})), zt = (t) => (() => {
  const e = ct.cloneNode(!0);
  return g(e, t, !1, !1), e;
})(), en = (t) => {
  const [e, n] = w(t, ["title", "children"]);
  return (() => {
    const l = at.cloneNode(!0);
    return g(l, n, !1, !0), $(l, N(D, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const o = he.cloneNode(!0);
        return $(o, () => e.title), o;
      }
    }), null), $(l, () => e.children, null), l;
  })();
}, ge = ye([() => [], (t) => console.warn("context default!", t)]), tn = (t) => {
  const [e, n] = w(t, ["value", "onchange"]), [l, o, s] = _e(ge), r = y(() => l().includes(t.value)), i = y(() => () => t["aria-disabled"] !== "true" && o(t.value)), c = y(() => (a) => {
    a.key === " " && (a.preventDefault(), t["aria-disabled"] !== "true" && o(t.value));
  });
  return E(() => {
    var a;
    (a = t.onchange) == null || a.call(t, r());
  }), (() => {
    const a = ut.cloneNode(!0);
    return p(a, "keypress", c()), p(a, "click", i(), !0), g(a, n, !1, !1), A(a, "role", s !== "checkbox" ? "menuitemradio" : "menuitemcheckbox"), v((u) => {
      const d = r(), b = (s === "checkbox" || !r()) && t["aria-disabled"] !== "true" ? "0" : "-1";
      return d !== u._v$3 && A(a, "aria-selected", u._v$3 = d), b !== u._v$4 && A(a, "tabindex", u._v$4 = b), u;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), a;
  })();
}, nn = (t) => {
  const [e, n] = w(t, ["title", "value", "onchange", "children", "type"]), [l, o] = S(Array.isArray(e.value) ? e.value : e.value ? [e.value] : [], {
    equals: (r, i) => r.length === i.length && r[0] === i[0]
  }), s = y(() => t.type === "checkbox" ? (r) => o((i) => i.includes(r) ? i.filter((c) => c !== r) : [...i, r]) : (r) => o((i) => i[0] === r ? i : [r]));
  return E((r) => (r !== e.value && o(Array.isArray(e.value) ? e.value : e.value ? [e.value] : []), e.value), e.value), E((r) => {
    var c, a;
    const i = l();
    return (t.type === "checkbox" ? i.length === (r == null ? void 0 : r.length) : i[0] === (r == null ? void 0 : r[0])) ? r : (t.type === "checkbox" ? (c = t.onchange) == null || c.call(t, i) : (a = t.onchange) == null || a.call(t, i[0]), i);
  }, l()), (() => {
    const r = dt.cloneNode(!0);
    return g(r, n, !1, !0), $(r, N(D, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const i = he.cloneNode(!0);
        return $(i, () => e.title), i;
      }
    }), null), $(r, N(ge.Provider, {
      get value() {
        return [l, s(), e.type];
      },
      get children() {
        return e.children;
      }
    }), null), r;
  })();
};
q(["keydown", "mouseover", "click"]);
const z = /* @__PURE__ */ m("<div></div>"), gt = /* @__PURE__ */ m("<header></header>"), mt = /* @__PURE__ */ m("<main></main>"), $t = /* @__PURE__ */ m("<footer></footer>");
let X = 0;
const on = (t) => {
  const [e, n] = w(t, ["open", "noPortal", "children"]), [l, o] = S(e.open), s = (u) => o(typeof u == "boolean" ? u : (d) => !d), r = y(() => {
    var u;
    return (u = M(e.children, (d) => d.className.indexOf("sb-modal-content") !== -1, [{
      open: l,
      toggle: s
    }])) != null ? u : [];
  }), i = y(() => M(e.children, (u) => u.className.indexOf("sb-modal-content") === -1, [{
    open: l,
    toggle: s
  }]));
  let c;
  E(() => l() && (c == null || c.focus(), c == null ? void 0 : c.scrollIntoView())), X++, E(() => {
    if (!c)
      return;
    const u = c.querySelector(".sb-modal-header");
    u && c.setAttribute("aria-labelledby", u.id || (() => u.id = `sb-modal-header-${X}`)());
    const d = c.querySelector(".sb-modal-body");
    d && c.setAttribute("aria-describedby", d.id || (() => d.id = `sb-modal-body-${X}`)());
  });
  const a = F(n, {
    role: "dialog",
    tabIndex: -1,
    class: t.class ? `sb-modal ${t.class}` : "sb-modal",
    children: r(),
    onClick: y(() => t.closeOnClickOutside ? (u) => {
      const d = u.target;
      r().some((b) => b == null ? void 0 : b.contains(d)) || s(!1);
    } : void 0)(),
    onkeyup: y(() => t.closeOnEsc !== !1 ? (u) => {
      console.log(u), u.key === "Escape" && !u.defaultPrevented && o(!1);
    } : void 0)()
  });
  return N(Ae, {
    get children() {
      return [N(Q, {
        get when() {
          return !l();
        },
        get children() {
          return i();
        }
      }), N(Q, {
        get when() {
          return l() && e.noPortal;
        },
        get children() {
          return [y(i), (() => {
            const u = z.cloneNode(!0), d = c;
            return typeof d == "function" ? H(d, u) : c = u, g(u, a, !1, !1), u;
          })()];
        }
      }), N(Q, {
        get when() {
          return l() && !e.noPortal;
        },
        get children() {
          return [y(i), N(te, {
            get mount() {
              return document.body;
            },
            get children() {
              const u = z.cloneNode(!0), d = c;
              return typeof d == "function" ? H(d, u) : c = u, g(u, a, !1, !1), u;
            }
          })];
        }
      })];
    }
  });
}, sn = (t) => (() => {
  const e = z.cloneNode(!0);
  return g(e, t, !1, !1), v(() => C(e, t.class ? `sb-modal-content ${t.class}` : "sb-modal-content")), e;
})(), ln = (t) => (() => {
  const e = gt.cloneNode(!0);
  return g(e, t, !1, !1), v(() => C(e, t.class ? `sb-modal-header ${t.class}` : "sb-modal-header")), e;
})(), rn = (t) => (() => {
  const e = mt.cloneNode(!0);
  return g(e, t, !1, !1), v(() => C(e, t.class ? `sb-modal-body ${t.class}` : "sb-modal-body")), e;
})(), cn = (t) => (() => {
  const e = $t.cloneNode(!0);
  return g(e, t, !1, !1), v(() => C(e, t.class ? `sb-modal-footer ${t.class}` : "sb-modal-footer")), e;
})();
const vt = /* @__PURE__ */ m('<progress aria-live="polite"></progress>'), an = (t) => (() => {
  const e = vt.cloneNode(!0);
  return g(e, t, !1, !1), v((n) => {
    const l = (t == null ? void 0 : t.value) !== (t == null ? void 0 : t.max), o = t.class ? `sb-progress ${t.class}` : "sb-progress";
    return l !== n._v$ && A(e, "aria-busy", n._v$ = l), o !== n._v$2 && C(e, n._v$2 = o), n;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), e;
})();
const bt = /* @__PURE__ */ m('<label><input type="radio"></label>'), yt = /* @__PURE__ */ m('<div role="radiogroup"></div>'), un = (t) => {
  const [e, n, l] = w(t, ["accessKey", "align", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onchange", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children"]);
  return (() => {
    const o = bt.cloneNode(!0), s = o.firstChild;
    return g(o, l, !1, !0), $(o, N(D, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), s), g(s, e, !1, !1), $(o, N(D, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), v(() => C(o, `${n.align || "left"} sb-radio${e.disabled ? " disabled" : ""}`)), o;
  })();
};
let _t = 1;
const dn = (t) => {
  const [e, n] = w(t, ["onchange", "value", "children"]);
  let l;
  V(() => {
    const r = l.querySelectorAll('input[type="radio"]');
    if (Array.prototype.some.call(r, (i) => !i.hasAttribute("name"))) {
      const i = (Array.prototype.find.call(r, (c) => c.hasAttribute("name")) || {
        name: `sb-radio-group-${_t++}`
      }).name;
      Array.prototype.forEach.call(r, (c) => {
        c.setAttribute("name", i);
      });
    }
  }), E(() => {
    if (e.value) {
      const r = l.querySelectorAll('input[type="radio"]');
      Array.prototype.forEach.call(r, (i) => {
        i.checked = i.value === e.value;
      });
    }
  });
  let o = e.value;
  const s = () => {
    var i, c;
    const r = (i = l == null ? void 0 : l.querySelector('input[type="radio"]:checked')) == null ? void 0 : i.value;
    r && o !== r && ((c = e.onchange) == null || c.call(e, r), o = r);
  };
  return (() => {
    const r = yt.cloneNode(!0);
    r.$$click = s, r.$$keyup = s;
    const i = l;
    return typeof i == "function" ? H(i, r) : l = r, g(r, n, !1, !0), $(r, () => e.children), v(() => C(r, n.class ? `sb-radiogroup ${n.class}` : "sb-radiogroup")), r;
  })();
};
q(["keyup", "click"]);
const At = /* @__PURE__ */ m('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'), fn = (t) => {
  const [e, n] = w(t, ["label", "onchange", "aria-orientation"]);
  return (() => {
    const l = At.cloneNode(!0), o = l.firstChild, s = o.nextSibling;
    return $(o, () => e.label), s.addEventListener("change", (r) => {
      var i;
      return (i = e.onchange) == null ? void 0 : i.call(e, r.target.value);
    }), g(s, n, !1, !1), v((r) => {
      const i = !!t.disabled, c = e["aria-orientation"];
      return i !== r._v$ && l.classList.toggle("disabled", r._v$ = i), c !== r._v$2 && A(l, "aria-orientation", r._v$2 = c), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
};
const xt = /* @__PURE__ */ m('<progress aria-busy="true" aria-live="polite"></progress>'), hn = (t) => (() => {
  const e = xt.cloneNode(!0);
  return g(e, t, !1, !1), v(() => C(e, t.class ? `sb-spinner ${t.class}` : "sb-spinner")), e;
})();
const wt = /* @__PURE__ */ m('<section><ul role="tablist"></ul></section>'), Nt = /* @__PURE__ */ m('<li role="tab" tabindex="0"></li>'), kt = /* @__PURE__ */ m('<div role="tabpanel"></div>'), Ft = (t, e, n) => {
  const l = e === n;
  (t == null ? void 0 : t.getAttribute) && t.getAttribute("aria-selected") === "true" !== l && (t.setAttribute("aria-selected", l ? "true" : "false"), t.setAttribute("tabIndex", l ? "-1" : "0"));
}, Ct = (t, e, n) => {
  (t == null ? void 0 : t.hasAttribute) && t.hasAttribute("hidden") === (e === n) && t[e === n ? "removeAttribute" : "setAttribute"]("hidden", "hidden");
}, gn = (t) => {
  var i;
  const [e, n] = S((i = t.index) != null ? i : 0), l = y(() => M(t.children, "LI") || []), o = y(() => M(t.children, "DIV") || []);
  E(() => {
    var a;
    l().length !== o().length && console.warn(`solid-blocks tabs: items count mismatch: ${l().length} tabs and ${o().length}`);
    const c = e() % l().length;
    (a = t.onchange) == null || a.call(t, c), l().forEach((u, d) => {
      Ft(u, d, c);
    }), o().forEach((u, d) => {
      Ct(u, d, c);
    });
  });
  const s = (c) => {
    var d;
    const a = U(c.target, "LI");
    if (!a)
      return;
    const u = Array.prototype.indexOf.call((d = a.parentNode) == null ? void 0 : d.childNodes, a);
    u !== -1 && n(Number(u));
  }, r = (c) => {
    var b, f;
    const a = U(c.target, "LI"), u = (f = (b = a == null ? void 0 : a.parentElement) == null ? void 0 : b.childNodes) != null ? f : [], d = Array.prototype.indexOf.call(u, a);
    d !== -1 && (c.key === " " ? n(d) : c.key === "ArrowLeft" && d !== 0 ? (n(d - 1), u[d - 1].focus()) : c.key === "ArrowRight" && d + 1 < u.length && (n(d + 1), u[d + 1].focus()));
  };
  return (() => {
    const c = wt.cloneNode(!0), a = c.firstChild;
    return a.$$keyup = r, a.$$click = s, $(a, l), $(c, o, null), v((u) => {
      var f;
      const d = F((f = t.classList) != null ? f : {}, {
        "sb-tabs": !0
      }), b = t.vertical ? "vertical" : "horizontal";
      return u._v$ = P(c, d, u._v$), b !== u._v$2 && A(a, "aria-orientation", u._v$2 = b), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}, mn = (t) => (() => {
  const e = Nt.cloneNode(!0);
  return g(e, t, !1, !1), e;
})(), $n = (t) => (() => {
  const e = kt.cloneNode(!0);
  return g(e, t, !1, !1), e;
})();
q(["click", "keyup"]);
const Et = /* @__PURE__ */ m("<a></a>"), St = /* @__PURE__ */ m("<span></span>"), Lt = /* @__PURE__ */ m("<div></div>"), vn = (t) => {
  const [e, n] = w(t, ["plain"]), l = F({
    "data-random": e.plain ? void 0 : K(),
    rel: t.target ? "tag noopener" : "tag"
  }, n, {
    class: t.class ? `sb-tag ${t.class}` : "sb-tag"
  });
  return N(D, {
    get when() {
      return typeof l.href == "string";
    },
    get fallback() {
      return (() => {
        const o = St.cloneNode(!0);
        return g(o, l, !1, !1), o;
      })();
    },
    get children() {
      const o = Et.cloneNode(!0);
      return g(o, l, !1, !1), o;
    }
  });
}, bn = (t) => (() => {
  const e = Lt.cloneNode(!0);
  return g(e, t, !1, !1), v(() => C(e, t.class ? `sb-tag-group ${t.class}` : "sb-tag-group")), e;
})();
const Pt = /* @__PURE__ */ m('<label><span class="sb-textfield-label"></span></label>'), yn = (t) => {
  const [e, n] = w(t, ["aria-orientation", "classList", "label", "multiline", "onchange", "children"]), l = y(() => (o) => {
    var s;
    return (s = e.onchange) == null ? void 0 : s.call(e, o.target.value);
  });
  return (() => {
    const o = Pt.cloneNode(!0), s = o.firstChild;
    return $(s, () => e.label), $(o, N(Oe, F({
      get component() {
        return t.multiline ? "textarea" : "input";
      },
      get onchange() {
        return l();
      }
    }, n, {
      get type() {
        var r;
        return t.multiline ? void 0 : (r = n.type) != null ? r : "text";
      }
    })), null), $(o, () => e.children, null), v((r) => {
      var a;
      const i = F((a = e.classList) != null ? a : {}, {
        "sb-textfield": !0
      }), c = t["aria-orientation"];
      return r._v$ = P(o, i, r._v$), c !== r._v$2 && A(o, "aria-orientation", r._v$2 = c), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
};
const Mt = /* @__PURE__ */ m("<div></div>"), Bt = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"], me = Bt.reduce((t, e) => (t[e] = Y ? null : document.getElementById(`sb-toast-${e}`), t), {}), Dt = document.createElement("div"), Tt = (t = "top-right") => {
  const e = Dt.cloneNode();
  return e.id = `sb-toast-${t}`, me[t] = e, document.body.appendChild(e), e;
}, _n = (t) => {
  const [e, n] = w(t, ["timeout", "position", "children", "mount", "onhide"]), l = y(() => e.mount || me[e.position || "top-right"] || Tt(e.position)), [o, s] = S(!0), r = () => s(!1), [i, c] = S(), [a, u] = S(M(e.children, () => !0, [{
    update: c,
    hide: r
  }]));
  return V(() => {
    var d;
    return t.timeout !== 0 && setTimeout(() => s(!1), (d = t.timeout) != null ? d : 5e3);
  }), E(() => {
    i() && u(M(i(), () => !0, [{
      update: c,
      hide: r
    }]));
  }), E(() => {
    var d;
    return !o() && ((d = t.onhide) == null ? void 0 : d.call(t));
  }), E(() => {
    const d = l();
    d !== t.mount && (!o() && (d == null ? void 0 : d.childElementCount) === 0 ? document.body.removeChild(d) : o() && d && !(d != null && d.parentNode) && document.body.appendChild(d));
  }), N(D, {
    get when() {
      return o();
    },
    get children() {
      return N(te, {
        get mount() {
          return l();
        },
        get children() {
          const d = Mt.cloneNode(!0);
          return g(d, n, !1, !0), $(d, a), v(() => C(d, n.class ? `sb-toast ${n.class}` : "sb-toast")), d;
        }
      });
    }
  });
};
const ue = /* @__PURE__ */ m('<span tabindex="0"></span>'), pt = /* @__PURE__ */ m('<span aria-haspopup="true"><span role="tooltip"></span></span>'), Ot = (t, e) => t === void 0 ? !1 : (Array.isArray(t) ? t : [t]).reduce((n, l) => typeof l == "boolean" ? l : typeof l == "function" ? l() : n, e != null ? e : !1), J = (t, e) => t === void 0 || t === e || Array.isArray(t) && t.includes(e), $e = (t) => {
  if (typeof t == "function")
    return $e(t());
  if (typeof t == "string")
    return (() => {
      const e = ue.cloneNode(!0);
      return $(e, t), e;
    })();
  if (Array.isArray(t)) {
    const e = t.map((n) => typeof n == "function" ? n() : n);
    return e.every((n) => typeof n == "string") ? (() => {
      const n = ue.cloneNode(!0);
      return $(n, e), n;
    })() : e;
  }
  return t;
}, An = (t) => {
  let e;
  const [n, l] = w(t, ["children", "position", "content", "trigger", "arrow", "nowrap"]), o = y(() => J(n.trigger, "focus")), s = y(() => J(n.trigger, "hover")), r = y(() => J(n.trigger, "focus") ? $e(n.children) : n.children), [i, c] = S(!1);
  E(() => c(Ot(n.trigger)));
  const [a, u] = S(), d = y(() => (f) => o() && c(f.type === "focus")), b = y(() => (f) => {
    var h;
    return s() && c(e.contains((h = f.toElement) != null ? h : f.target));
  });
  return E(() => {
    if (!i() || !(e != null && e.offsetHeight))
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
    const f = pt.cloneNode(!0), h = f.firstChild;
    p(f, "mouseleave", b()), p(f, "mouseover", b(), !0);
    const x = e;
    return typeof x == "function" ? H(x, f) : e = f, f.addEventListener("focus", d(), !0), f.addEventListener("blur", d(), !0), $(f, r, h), g(h, l, !1, !0), $(h, () => n.content), v((_) => {
      var R;
      const L = i(), B = `sb-tooltip-wrapper position-${(R = n.position) != null ? R : "s"}${n.arrow === !1 ? "" : " arrow"}${n.nowrap ? " nowrap" : ""}`, T = !i(), W = a();
      return L !== _._v$ && A(f, "aria-expanded", _._v$ = L), B !== _._v$2 && C(f, _._v$2 = B), T !== _._v$3 && (h.hidden = _._v$3 = T), _._v$4 = ee(h, W, _._v$4), _;
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
  qt as Accordion,
  jt as AccordionGroup,
  Gt as AccordionHeader,
  Rt as Avatar,
  Kt as AvatarBadge,
  Ut as AvatarGroup,
  Vt as Bar,
  Wt as Breadcrumbs,
  ot as Button,
  Qt as Checkbox,
  Zt as Menu,
  Yt as MenuButton,
  zt as MenuItem,
  en as MenuItemGroup,
  tn as MenuOption,
  nn as MenuOptionGroup,
  ge as MenuOptionsContext,
  Xt as Message,
  Jt as Meter,
  on as Modal,
  rn as ModalBody,
  sn as ModalContent,
  cn as ModalFooter,
  ln as ModalHeader,
  an as Progress,
  un as Radio,
  dn as RadioGroup,
  fn as Select,
  hn as Spinner,
  mn as Tab,
  $n as TabContainer,
  gn as Tabs,
  vn as Tag,
  bn as TagGroup,
  yn as TextField,
  _n as Toast,
  An as Tooltip,
  Ie as composeStyles,
  Re as createLocalStorageSignal,
  M as getElements,
  ze as getInitials,
  U as getNearestNode,
  K as getRandom,
  qe as maxRandom,
  He as toStyleObject,
  It as useDarkMode,
  Ge as useMediaQuery
};
//# sourceMappingURL=solid-blocks.mjs.map
