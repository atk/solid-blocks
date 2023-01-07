import { createRenderEffect as C, untrack as Ae, sharedConfig as E, createSignal as N, createRoot as we, onCleanup as O, createEffect as w, createMemo as y, splitProps as x, onMount as Y, mergeProps as g, createComponent as v, For as Ne, Show as P, createContext as V, useContext as G, Switch as ke, Match as K, on as z, createSelector as fe, createUniqueId as Ce } from "solid-js";
const Fe = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Ee = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Fe]), Le = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Pe = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), ne = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}), Se = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), pe = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Me(t, e, n) {
  let s = n.length, o = e.length, l = s, i = 0, r = 0, c = e[o - 1].nextSibling, a = null;
  for (; i < o || r < l; ) {
    if (e[i] === n[r]) {
      i++, r++;
      continue;
    }
    for (; e[o - 1] === n[l - 1]; )
      o--, l--;
    if (o === i) {
      const u = l < s ? r ? n[r - 1].nextSibling : n[l - r] : c;
      for (; r < l; )
        t.insertBefore(n[r++], u);
    } else if (l === r)
      for (; i < o; )
        (!a || !a.has(e[i])) && e[i].remove(), i++;
    else if (e[i] === n[l - 1] && n[r] === e[o - 1]) {
      const u = e[--o].nextSibling;
      t.insertBefore(n[r++], e[i++].nextSibling), t.insertBefore(n[--l], u), e[o] = n[l];
    } else {
      if (!a) {
        a = /* @__PURE__ */ new Map();
        let d = r;
        for (; d < l; )
          a.set(n[d], d++);
      }
      const u = a.get(e[i]);
      if (u != null)
        if (r < u && u < l) {
          let d = i, _ = 1, f;
          for (; ++d < o && d < l && !((f = a.get(e[d])) == null || f !== u + _); )
            _++;
          if (_ > u - r) {
            const h = e[i];
            for (; r < u; )
              t.insertBefore(n[r++], h);
          } else
            t.replaceChild(n[r++], e[i++]);
        } else
          i++;
      else
        e[i++].remove();
    }
  }
}
const oe = "_$DX_DELEGATE";
function $(t, e, n) {
  const s = document.createElement("template");
  s.innerHTML = t;
  let o = s.content.firstChild;
  return n && (o = o.firstChild), o;
}
function U(t, e = window.document) {
  const n = e[oe] || (e[oe] = /* @__PURE__ */ new Set());
  for (let s = 0, o = t.length; s < o; s++) {
    const l = t[s];
    n.has(l) || (n.add(l), e.addEventListener(l, Oe));
  }
}
function F(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function Te(t, e, n, s) {
  s == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, s);
}
function ge(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function H(t, e, n, s) {
  if (s)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    t.addEventListener(e, n[0] = (l) => o.call(t, n[1], l));
  } else
    t.addEventListener(e, n);
}
function R(t, e, n = {}) {
  const s = Object.keys(e || {}), o = Object.keys(n);
  let l, i;
  for (l = 0, i = o.length; l < i; l++) {
    const r = o[l];
    !r || r === "undefined" || e[r] || (se(t, r, !1), delete n[r]);
  }
  for (l = 0, i = s.length; l < i; l++) {
    const r = s[l], c = !!e[r];
    !r || r === "undefined" || n[r] === c || !c || (se(t, r, !0), n[r] = c);
  }
  return n;
}
function Be(t, e, n) {
  if (!e)
    return n ? F(t, "style") : e;
  const s = t.style;
  if (typeof e == "string")
    return s.cssText = e;
  typeof n == "string" && (s.cssText = n = void 0), n || (n = {}), e || (e = {});
  let o, l;
  for (l in n)
    e[l] == null && s.removeProperty(l), delete n[l];
  for (l in e)
    o = e[l], o !== n[l] && (s.setProperty(l, o), n[l] = o);
  return n;
}
function m(t, e = {}, n, s) {
  const o = {};
  return s || C(() => o.children = B(t, e.children, o.children)), C(() => e.ref && e.ref(t)), C(() => De(t, e, n, !0, o, !0)), o;
}
function S(t, e, n) {
  return Ae(() => t(e, n));
}
function b(t, e, n, s) {
  if (n !== void 0 && !s && (s = []), typeof e != "function")
    return B(t, e, s, n);
  C((o) => B(t, e(), o, n), s);
}
function De(t, e, n, s, o = {}, l = !1) {
  e || (e = {});
  for (const i in o)
    if (!(i in e)) {
      if (i === "children")
        continue;
      o[i] = le(t, i, null, o[i], n, l);
    }
  for (const i in e) {
    if (i === "children") {
      s || B(t, e.children);
      continue;
    }
    const r = e[i];
    o[i] = le(t, i, r, o[i], n, l);
  }
}
function Ie(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}
function se(t, e, n) {
  const s = e.trim().split(/\s+/);
  for (let o = 0, l = s.length; o < l; o++)
    t.classList.toggle(s[o], n);
}
function le(t, e, n, s, o, l) {
  let i, r, c;
  if (e === "style")
    return Be(t, n, s);
  if (e === "classList")
    return R(t, n, s);
  if (n === s)
    return s;
  if (e === "ref")
    l || n(t);
  else if (e.slice(0, 3) === "on:") {
    const a = e.slice(3);
    s && t.removeEventListener(a, s), n && t.addEventListener(a, n);
  } else if (e.slice(0, 10) === "oncapture:") {
    const a = e.slice(10);
    s && t.removeEventListener(a, s, !0), n && t.addEventListener(a, n, !0);
  } else if (e.slice(0, 2) === "on") {
    const a = e.slice(2).toLowerCase(), u = Se.has(a);
    if (!u && s) {
      const d = Array.isArray(s) ? s[0] : s;
      t.removeEventListener(a, d);
    }
    (u || n) && (H(t, a, n, u), u && U([a]));
  } else if ((c = Le.has(e)) || !o && (ne[e] || (r = Ee.has(e))) || (i = t.nodeName.includes("-")))
    e === "class" || e === "className" ? ge(t, n) : i && !r && !c ? t[Ie(e)] = n : t[ne[e] || e] = n;
  else {
    const a = o && e.indexOf(":") > -1 && pe[e.split(":")[0]];
    a ? Te(t, a, e, n) : F(t, Pe[e] || e, n);
  }
  return n;
}
function Oe(t) {
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
  }), E.registry && !E.done && (E.done = !0, document.querySelectorAll("[id^=pl-]").forEach((s) => s.remove())); n; ) {
    const s = n[e];
    if (s && !n.disabled) {
      const o = n[`${e}Data`];
      if (o !== void 0 ? s.call(n, o, t) : s.call(n, t), t.cancelBubble)
        return;
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function B(t, e, n, s, o) {
  for (E.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
    n = n();
  if (e === n)
    return n;
  const l = typeof e, i = s !== void 0;
  if (t = i && n[0] && n[0].parentNode || t, l === "string" || l === "number") {
    if (E.context)
      return n;
    if (l === "number" && (e = e.toString()), i) {
      let r = n[0];
      r && r.nodeType === 3 ? r.data = e : r = document.createTextNode(e), n = T(t, n, s, r);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || l === "boolean") {
    if (E.context)
      return n;
    n = T(t, n, s);
  } else {
    if (l === "function")
      return C(() => {
        let r = e();
        for (; typeof r == "function"; )
          r = r();
        n = B(t, r, n, s);
      }), () => n;
    if (Array.isArray(e)) {
      const r = [], c = n && Array.isArray(n);
      if (X(r, e, n, o))
        return C(() => n = B(t, r, n, s, !0)), () => n;
      if (E.context) {
        if (!r.length)
          return n;
        for (let a = 0; a < r.length; a++)
          if (r[a].parentNode)
            return n = r;
      }
      if (r.length === 0) {
        if (n = T(t, n, s), i)
          return n;
      } else
        c ? n.length === 0 ? re(t, r, s) : Me(t, n, r) : (n && T(t), re(t, r));
      n = r;
    } else if (e instanceof Node) {
      if (E.context && e.parentNode)
        return n = i ? [e] : e;
      if (Array.isArray(n)) {
        if (i)
          return n = T(t, n, s, e);
        T(t, n, null, e);
      } else
        n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function X(t, e, n, s) {
  let o = !1;
  for (let l = 0, i = e.length; l < i; l++) {
    let r = e[l], c = n && n[l];
    if (r instanceof Node)
      t.push(r);
    else if (!(r == null || r === !0 || r === !1))
      if (Array.isArray(r))
        o = X(t, r, c) || o;
      else if (typeof r == "function")
        if (s) {
          for (; typeof r == "function"; )
            r = r();
          o = X(t, Array.isArray(r) ? r : [r], Array.isArray(c) ? c : [c]) || o;
        } else
          t.push(r), o = !0;
      else {
        const a = String(r);
        c && c.nodeType === 3 && c.data === a ? t.push(c) : t.push(document.createTextNode(a));
      }
  }
  return o;
}
function re(t, e, n = null) {
  for (let s = 0, o = e.length; s < o; s++)
    t.insertBefore(e[s], n);
}
function T(t, e, n, s) {
  if (n === void 0)
    return t.textContent = "";
  const o = s || document.createTextNode("");
  if (e.length) {
    let l = !1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (o !== r) {
        const c = r.parentNode === t;
        !l && !i ? c ? t.replaceChild(o, r) : t.insertBefore(o, n) : c && r.remove();
      } else
        l = !0;
    }
  } else
    t.insertBefore(o, n);
  return [o];
}
const J = !1, He = "http://www.w3.org/2000/svg";
function qe(t, e = !1) {
  return e ? document.createElementNS(He, t) : document.createElement(t);
}
function ee(t) {
  const {
    useShadow: e
  } = t, n = document.createTextNode(""), s = t.mount || document.body;
  function o() {
    if (E.context) {
      const [l, i] = N(!1);
      return queueMicrotask(() => i(!0)), () => l() && t.children;
    } else
      return () => t.children;
  }
  if (s instanceof HTMLHeadElement) {
    const [l, i] = N(!1), r = () => i(!0);
    we((c) => b(s, () => l() ? c() : o()(), null)), O(() => {
      E.context ? queueMicrotask(r) : r();
    });
  } else {
    const l = qe(t.isSVG ? "g" : "div", t.isSVG), i = e && l.attachShadow ? l.attachShadow({
      mode: "open"
    }) : l;
    Object.defineProperty(l, "_$host", {
      get() {
        return n.parentNode;
      },
      configurable: !0
    }), b(i, o()), s.appendChild(l), t.ref && t.ref(l), O(() => s.removeChild(l));
  }
  return n;
}
const je = (t) => {
  if (typeof t == "object")
    return t;
  const e = {};
  return (t || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (n, s, o) => (e[s] = o, "")), e;
}, Ve = (...t) => Object.assign({}, ...t.map(je)), ie = (t, e) => {
  if (!t)
    return;
  let n = t;
  for (; n && n.nodeName !== e; )
    n = n.parentNode;
  return n;
}, Ge = 8;
let I = 0;
const j = () => {
  const t = 1 + Math.floor(Math.random() * (Ge - (I ? 1 : 0)));
  return I = I ? t + (t === I ? 1 : 0) : t, I;
}, Ue = (t) => {
  const e = window.matchMedia(t), [n, s] = N(e.matches), o = (l) => s(l.matches);
  return e.addEventListener("change", o), O(() => e.removeEventListener("change", o)), n;
}, Re = (t, e) => e ? t ? JSON.parse(t) : void 0 : t != null ? t : void 0, ce = (t, e) => localStorage.setItem(t, typeof e == "string" ? e : JSON.stringify(e));
function Ke(t, e, n = !1) {
  localStorage.getItem(t) === null && e !== void 0 && ce(t, e);
  const [s, o] = N(Re(localStorage.getItem(t), n));
  return w(
    () => n && s() === void 0 ? localStorage.removeItem(t) : ce(t, s())
  ), [s, o];
}
const qt = (t = "COLOR_SCHEME") => {
  const e = Ue("(prefers-color-scheme: dark)"), [n, s] = Ke(t, void 0, !0), o = y(() => {
    var l;
    return (l = n()) != null ? l : e();
  });
  return w(() => {
    document.body.classList.toggle("dark-mode", o());
  }), [o, s];
}, p = (t, e, n = [], s = []) => {
  if (!!t) {
    if (Array.isArray(t))
      t.forEach((o) => p(o, e, n, s));
    else if (typeof t == "function")
      p(t.apply(null, n), e, n, s);
    else {
      const o = t;
      (!e || (typeof e == "function" ? e(o) : o.nodeName === e)) && s.push(o);
    }
    return s;
  }
}, q = (t, e) => {
  Array.isArray(e) ? e[1](e[0], t) : typeof e == "function" && e(t);
};
const We = /* @__PURE__ */ $("<details></details>"), Qe = /* @__PURE__ */ $("<summary></summary>"), Xe = /* @__PURE__ */ $("<section></section>"), jt = (t) => {
  const [e, n] = x(t, ["children", "ontoggle"]), [s, o] = N(!!t.open);
  let l;
  const i = y(() => typeof t.children == "function" ? t.children(s()) : t.children), r = () => {
    var c;
    l && (o(l.open), (c = e.ontoggle) == null || c.call(e, l.open));
  };
  return Y(() => l == null ? void 0 : l.addEventListener("toggle", r)), O(() => l == null ? void 0 : l.addEventListener("toggle", r)), (() => {
    const c = We.cloneNode(!0), a = l;
    return typeof a == "function" ? S(a, c) : l = c, m(c, g(n, {
      get classList() {
        var u;
        return g((u = t.classList) != null ? u : {}, {
          "sb-accordion": !0
        });
      },
      get open() {
        return !!t.open;
      }
    }), !1, !0), b(c, i), c;
  })();
}, Vt = (t) => (() => {
  const e = Qe.cloneNode(!0);
  return b(e, () => t.children), C((n) => {
    var s;
    return R(e, g((s = t.classList) != null ? s : {}, {
      "sb-accordion-header": !0
    }), n);
  }), e;
})(), Gt = (t) => {
  const [e, n] = x(t, ["allowMultiple", "allowToggle"]), s = y(() => (l) => {
    var c, a;
    if (!l.target)
      return;
    const i = ie(l.target, "DETAILS");
    if (!i)
      return;
    const r = (a = (c = i.parentNode) == null ? void 0 : c.querySelectorAll("details.sb-accordion[open]")) != null ? a : [];
    r.length !== 0 && (!e.allowMultiple && !i.open && Array.prototype.forEach.call(r, (u) => {
      u !== i && u.removeAttribute("open");
    }), !e.allowToggle && i.open && r.length === 1 && l.preventDefault());
  }), o = y(() => (l) => {
    const i = ie(l.target, "DETAILS");
    if (!i || !i.parentNode)
      return;
    const r = i.parentNode.querySelectorAll("details.sb-accordion"), c = Array.prototype.indexOf.call(r, i);
    if (c !== -1) {
      if (l.key === "ArrowLeft" && c !== 0) {
        const a = r[c - 1], u = a.querySelector("summary");
        u == null || u.focus(), !a.open && (u == null || u.click());
      }
      if (l.key === "ArrowRight" && c + 1 < r.length) {
        const a = r[c + 1], u = a.querySelector("summary");
        u == null || u.focus(), !a.open && (u == null || u.click());
      }
    }
  });
  return (() => {
    const l = Xe.cloneNode(!0);
    return m(l, g(n, {
      get classList() {
        var i;
        return g((i = t.classList) != null ? i : {}, {
          "sb-accordion-group": !0
        });
      },
      get onclick() {
        return s();
      },
      get onkeyup() {
        return o();
      }
    }), !1, !1), l;
  })();
};
const Je = /* @__PURE__ */ $('<div role="figure"><img><span aria-hidden="true"></span></div>'), Ze = /* @__PURE__ */ $('<div role="img"></div>'), Ye = /* @__PURE__ */ $('<div role="img" aria-label="Unknown"></div>'), ze = /* @__PURE__ */ $("<span></span>"), et = /* @__PURE__ */ $("<div></div>"), ae = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]", tt = new RegExp(`^.*?(${ae})(?:.*\\s+\\S*?(${ae}))?.*$`), nt = (t) => t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g, "").replace(tt, "$1$2").toUpperCase(), Ut = (t) => {
  const [e, n] = x(t, ["classList", "children", "img", "name", "fallback"]), s = y(() => e.name ? nt(e.name) : "");
  return e.img ? (() => {
    const o = Je.cloneNode(!0), l = o.firstChild, i = l.nextSibling;
    return m(o, g({
      get classList() {
        var r;
        return g((r = e.classList) != null ? r : {}, {
          "sb-avatar": !0
        });
      },
      get ["data-random"]() {
        return j();
      }
    }, n), !1, !0), b(i, s), b(o, () => e.children, null), C((r) => {
      const c = e.img, a = e.name;
      return c !== r._v$ && F(l, "src", r._v$ = c), a !== r._v$2 && F(l, "alt", r._v$2 = a), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })() : e.name ? (() => {
    const o = Ze.cloneNode(!0);
    return m(o, g({
      get classList() {
        var l;
        return g((l = e.classList) != null ? l : {}, {
          "sb-avatar": !0
        });
      },
      get ["aria-label"]() {
        return e.name;
      },
      get ["data-random"]() {
        return j();
      }
    }, n), !1, !0), b(o, s, null), b(o, () => e.children, null), o;
  })() : (() => {
    const o = Ye.cloneNode(!0);
    return m(o, g({
      get classList() {
        var l;
        return g((l = e.classList) != null ? l : {}, {
          "sb-avatar": !0
        });
      },
      get ["data-random"]() {
        return j();
      }
    }, n), !1, !0), b(o, () => {
      var l;
      return (l = e.fallback) != null ? l : "?";
    }, null), b(o, () => e.children, null), o;
  })();
}, Rt = (t) => {
  var o;
  const [e, n] = x(t, ["classList", "borderColor", "background", "style"]), s = Ve((o = e.style) != null ? o : {}, {
    "border-color": e.borderColor,
    background: e.background
  });
  return (() => {
    const l = ze.cloneNode(!0);
    return m(l, g({
      get classList() {
        var i;
        return g((i = e.classList) != null ? i : {}, {
          "sb-badge": !0
        });
      }
    }, n, {
      style: s
    }), !1, !1), l;
  })();
}, Kt = (t) => (() => {
  const e = et.cloneNode(!0);
  return m(e, g(t, {
    get classList() {
      var n;
      return g((n = t.classList) != null ? n : {}, {
        "sb-avatar": !0
      });
    },
    role: "group",
    get ["aria-haspopup"]() {
      return Array.isArray(t.children) && t.children.length > 3;
    }
  }), !1, !1), e;
})();
const ue = /* @__PURE__ */ $("<div></div>"), Wt = (t) => {
  const [e, n] = x(t, ["placement", "position", "mount", "portal"]), s = g(n, {
    class: `${e.placement}${e.position ? " " + e.position : ""} sb-bar ${t.class ? " " + t.class : ""}`
  });
  return e.portal === !1 ? (() => {
    const o = ue.cloneNode(!0);
    return m(o, s, !1, !1), o;
  })() : v(ee, {
    get mount() {
      return e.mount;
    },
    get children() {
      const o = ue.cloneNode(!0);
      return m(o, s, !1, !1), o;
    }
  });
};
const ot = /* @__PURE__ */ $('<nav class="sb-breadcrumbs"><ol></ol></nav>'), st = /* @__PURE__ */ $("<li></li>"), Qt = (t) => (() => {
  const e = ot.cloneNode(!0), n = e.firstChild;
  return m(n, t, !1, !0), b(n, v(Ne, {
    get each() {
      return Array.isArray(t.children) ? t.children : [t.children];
    },
    children: (s) => (() => {
      const o = st.cloneNode(!0);
      return b(o, s), o;
    })()
  })), e;
})();
const lt = /* @__PURE__ */ $("<button></button>"), rt = (t) => {
  const [e, n] = x(t, ["variant", "classList"]);
  return (() => {
    const s = lt.cloneNode(!0);
    return m(s, g(n, {
      get classList() {
        var o, l;
        return g((o = e.classList) != null ? o : {}, {
          "sb-button": !0,
          [(l = e.variant) != null ? l : "primary"]: !0
        });
      }
    }), !1, !1), s;
  })();
};
const it = /* @__PURE__ */ $('<label><input type="checkbox"></label>'), Xt = (t) => {
  const [e, n, s] = x(t, ["accessKey", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children", "onChange", "setChecked", "switch"]);
  return (() => {
    const o = it.cloneNode(!0), l = o.firstChild;
    m(o, g({
      get class() {
        return `${n.align || "left"} ${n.switch ? " switch" : ""} sb-checkbox`;
      }
    }, s), !1, !0), b(o, v(P, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), l);
    const i = t.ref;
    return typeof i == "function" ? S(i, l) : t.ref = l, m(l, g({
      get role() {
        return n.switch ? "switch" : void 0;
      }
    }, e, {
      onChange: (r) => {
        var c;
        q(r, n.onChange), (c = n.setChecked) == null || c.call(n, r.currentTarget.checked);
      }
    }), !1, !1), b(o, v(P, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), o;
  })();
};
const ct = /* @__PURE__ */ $("<p></p>"), Jt = (t) => {
  const [e, n] = x(t, ["type", "class", "inline"]), s = y(() => [...new Set(["sb-message", e.type, e.class, e.inline && "inline"].filter(Boolean))].join(" "));
  return (() => {
    const o = ct.cloneNode(!0);
    return m(o, g({
      get class() {
        return s();
      },
      get role() {
        return e.type === "error" ? "alert" : void 0;
      }
    }, n), !1, !1), o;
  })();
};
const at = /* @__PURE__ */ $('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'), Zt = (t) => (() => {
  const e = at.cloneNode(!0), n = e.firstChild, s = n.firstChild;
  return m(e, g(t, {
    role: "meter",
    get class() {
      return t.class ? `sb-meter ${t.class}` : "sb-meter";
    },
    get ["aria-valuenow"]() {
      var o;
      return (o = t.value) != null ? o : t["aria-valuenow"];
    },
    get ["aria-valuemin"]() {
      var o;
      return (o = t.min) != null ? o : t["aria-valuemin"];
    },
    get ["aria-valuemax"]() {
      var o;
      return (o = t.max) != null ? o : t["aria-valuemax"];
    }
  }), !1, !0), b(e, () => t.children, null), C((o) => {
    var r, c, a;
    const l = `0 0 ${(r = t.max) != null ? r : t["aria-valuemax"]} 10`, i = (a = (c = t.value) != null ? c : t["aria-valuenow"]) != null ? a : 0;
    return l !== o._v$ && F(n, "viewBox", o._v$ = l), i !== o._v$2 && F(s, "width", o._v$2 = i), o;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), e;
})();
const ut = /* @__PURE__ */ $('<div><div tabindex="-1" role="menu"></div></div>'), dt = /* @__PURE__ */ $('<div tabindex="0"></div>'), he = /* @__PURE__ */ $("<p></p>"), me = /* @__PURE__ */ $("<div></div>"), ft = /* @__PURE__ */ $('<div tabindex="-1" role="group"></div>'), gt = (t) => {
  let e = 0;
  return (n) => {
    const l = (n.nodeName === "BUTTON" || n.getAttribute("role") === "button") && n.getAttribute("aria-haspopup") === "menu" && e++ === 0;
    return l && (t() && n.getAttribute("aria-expanded") !== "true" ? n.setAttribute("aria-expanded", "true") : !t() && n.getAttribute("aria-expanded") === "true" && n.setAttribute("aria-expanded", "false")), l;
  };
}, ht = () => {
  let t = 0;
  return (e) => !((e.nodeName === "BUTTON" || e.getAttribute("role") === "button") && e.getAttribute("aria-haspopup") === "menu" && t++ === 0);
}, Yt = (t) => {
  const [e, n] = N(!!t.open), [s, o] = x(t, ["open", "children", "ontoggle", "align"]), l = y(() => {
    var f;
    return ((f = p(t.children, gt(e), [e()])) != null ? f : [])[0];
  }), i = y(() => {
    var f;
    return (f = p(t.children, ht(), [e()])) != null ? f : [];
  });
  let r;
  w(() => {
    var h;
    const f = e();
    (h = s.ontoggle) == null || h.call(s, f), f && i()[0].focus();
  });
  const c = (f) => {
    const h = f.target, A = h == null ? void 0 : h.getAttribute("role"), k = l();
    !f.defaultPrevented && k && (f.target === k ? n((L) => !L && k.getAttribute("aria-disabled") !== "true") : !k.contains(h) && A !== "menuitemradio" && A !== "menuitemcheckbox" && n(!1));
  };
  Y(() => !J && document.addEventListener("click", c, {
    capture: !1
  })), O(() => !J && document.removeEventListener("click", c));
  let a;
  const u = (f) => {
    var A;
    const h = f.target;
    ["menuitem", "menuitemradio", "menuitemcheckbox"].includes((A = h == null ? void 0 : h.getAttribute("role")) != null ? A : "") && (h == null ? void 0 : h.tabIndex) !== -1 && (h == null ? void 0 : h.getAttribute("aria-disabled")) !== "true" && (a = h, a == null || a.focus());
  }, d = (f) => {
    const h = r.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'), A = a ? Array.prototype.findIndex.call(h, (L) => L === a) : -1, k = A === -1 ? 1 : (h.length + f + A) % h.length;
    a = h[k], a.focus();
  }, _ = (f) => {
    var k, L, D;
    const h = f.target;
    f.key === "Escape" && e() && (n(!1), (k = l()) == null || k.focus());
    const A = h == null ? void 0 : h.getAttribute("role");
    if (f.key === " " && ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(A != null ? A : "")) {
      if (h.click(), A === "menuitemradio") {
        const M = (D = (L = h.parentNode) == null ? void 0 : L.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]')) != null ? D : [], ve = Array.prototype.indexOf.call(M, h), xe = (M.length + 1 + ve) % M.length;
        a = M[xe], a == null || a.focus();
      }
      f.preventDefault();
    }
    f.key === "ArrowDown" ? (d(1), f.preventDefault()) : f.key === "ArrowUp" && (d(-1), f.preventDefault());
  };
  return (() => {
    const f = ut.cloneNode(!0), h = f.firstChild, A = r;
    return typeof A == "function" ? S(A, f) : r = f, m(f, g(o, {
      get class() {
        return `sb-menu${o.class ? " " + o.class : ""}${s.align ? " " + s.align : ""}`;
      },
      onkeydown: _
    }), !1, !0), b(f, l, h), h.$$mouseover = u, b(h, i), C(() => h.hidden = !e()), f;
  })();
}, zt = (t) => v(rt, g(t, {
  "aria-haspopup": "menu"
})), en = (t) => (() => {
  const e = dt.cloneNode(!0);
  return m(e, g(t, {
    role: "menuitem"
  }), !1, !1), e;
})(), tn = (t) => {
  const [e, n] = x(t, ["title", "children"]);
  return (() => {
    const s = me.cloneNode(!0);
    return m(s, g(n, {
      role: "group"
    }), !1, !0), b(s, v(P, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const o = he.cloneNode(!0);
        return b(o, () => e.title), o;
      }
    }), null), b(s, () => e.children, null), s;
  })();
}, $e = V([() => [], (t) => console.warn("context default!", t)]), nn = (t) => {
  const [e, n] = x(t, ["value", "onchange"]), [s, o, l] = G($e), i = y(() => s().includes(t.value)), r = y(() => () => t["aria-disabled"] !== "true" && o(t.value)), c = y(() => (a) => {
    a.key === " " && (a.preventDefault(), t["aria-disabled"] !== "true" && o(t.value));
  });
  return w(() => {
    var a;
    (a = t.onchange) == null || a.call(t, i());
  }), (() => {
    const a = me.cloneNode(!0);
    return m(a, g({
      get ["aria-selected"]() {
        return i();
      },
      get tabIndex() {
        return (l === "checkbox" || !i()) && t["aria-disabled"] !== "true" ? "0" : "-1";
      }
    }, n, {
      role: l !== "checkbox" ? "menuitemradio" : "menuitemcheckbox",
      get onclick() {
        return r();
      },
      get onkeypress() {
        return c();
      }
    }), !1, !1), a;
  })();
}, on = (t) => {
  const [e, n] = x(t, ["title", "value", "onchange", "children", "type"]), [s, o] = N(Array.isArray(e.value) ? e.value : e.value ? [e.value] : [], {
    equals: (i, r) => i.length === r.length && i[0] === r[0]
  }), l = y(() => t.type === "checkbox" ? (i) => o((r) => r.includes(i) ? r.filter((c) => c !== i) : [...r, i]) : (i) => o((r) => r[0] === i ? r : [i]));
  return w((i) => (i !== e.value && o(Array.isArray(e.value) ? e.value : e.value ? [e.value] : []), e.value), e.value), w((i) => {
    var c, a;
    const r = s();
    return (t.type === "checkbox" ? r.length === (i == null ? void 0 : i.length) : r[0] === (i == null ? void 0 : i[0])) ? i : (t.type === "checkbox" ? (c = t.onchange) == null || c.call(t, r) : (a = t.onchange) == null || a.call(t, r[0]), r);
  }, s()), (() => {
    const i = ft.cloneNode(!0);
    return m(i, n, !1, !0), b(i, v(P, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const r = he.cloneNode(!0);
        return b(r, () => e.title), r;
      }
    }), null), b(i, v($e.Provider, {
      get value() {
        return [s, l(), e.type];
      },
      get children() {
        return e.children;
      }
    }), null), i;
  })();
};
U(["mouseover"]);
const Z = /* @__PURE__ */ $("<div></div>"), mt = /* @__PURE__ */ $("<header></header>"), $t = /* @__PURE__ */ $("<main></main>"), bt = /* @__PURE__ */ $("<footer></footer>");
let W = 0;
const sn = (t) => {
  const [e, n] = x(t, ["open", "noPortal", "children"]), [s, o] = N(e.open), l = (u) => o(typeof u == "boolean" ? u : (d) => !d), i = y(() => {
    var u;
    return (u = p(e.children, (d) => d.className.indexOf("sb-modal-content") !== -1, [{
      open: s,
      toggle: l
    }])) != null ? u : [];
  }), r = y(() => p(e.children, (u) => u.className.indexOf("sb-modal-content") === -1, [{
    open: s,
    toggle: l
  }]));
  let c;
  w(() => s() && (c == null || c.focus(), c == null ? void 0 : c.scrollIntoView())), W++, w(() => {
    if (!c)
      return;
    const u = c.querySelector(".sb-modal-header");
    u && c.setAttribute("aria-labelledby", u.id || (() => u.id = `sb-modal-header-${W}`)());
    const d = c.querySelector(".sb-modal-body");
    d && c.setAttribute("aria-describedby", d.id || (() => d.id = `sb-modal-body-${W}`)());
  });
  const a = g(n, {
    role: "dialog",
    tabIndex: -1,
    class: t.class ? `sb-modal ${t.class}` : "sb-modal",
    children: i(),
    onClick: y(() => t.closeOnClickOutside ? (u) => {
      const d = u.target;
      i().some((_) => _ == null ? void 0 : _.contains(d)) || l(!1);
    } : void 0)(),
    onkeyup: y(() => t.closeOnEsc !== !1 ? (u) => {
      console.log(u), u.key === "Escape" && !u.defaultPrevented && o(!1);
    } : void 0)()
  });
  return v(ke, {
    get children() {
      return [v(K, {
        get when() {
          return !s();
        },
        get children() {
          return r();
        }
      }), v(K, {
        get when() {
          return s() && e.noPortal;
        },
        get children() {
          return [y(r), (() => {
            const u = Z.cloneNode(!0), d = c;
            return typeof d == "function" ? S(d, u) : c = u, m(u, a, !1, !1), u;
          })()];
        }
      }), v(K, {
        get when() {
          return s() && !e.noPortal;
        },
        get children() {
          return [y(r), v(ee, {
            get mount() {
              return document.body;
            },
            get children() {
              const u = Z.cloneNode(!0), d = c;
              return typeof d == "function" ? S(d, u) : c = u, m(u, a, !1, !1), u;
            }
          })];
        }
      })];
    }
  });
}, ln = (t) => (() => {
  const e = Z.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-content ${t.class}` : "sb-modal-content";
    }
  }), !1, !1), e;
})(), rn = (t) => (() => {
  const e = mt.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-header ${t.class}` : "sb-modal-header";
    }
  }), !1, !1), e;
})(), cn = (t) => (() => {
  const e = $t.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-body ${t.class}` : "sb-modal-body";
    }
  }), !1, !1), e;
})(), an = (t) => (() => {
  const e = bt.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-footer ${t.class}` : "sb-modal-footer";
    }
  }), !1, !1), e;
})();
const yt = /* @__PURE__ */ $('<progress aria-live="polite"></progress>'), un = (t) => (() => {
  const e = yt.cloneNode(!0);
  return m(e, g({
    get ["aria-busy"]() {
      return (t == null ? void 0 : t.value) !== (t == null ? void 0 : t.max);
    }
  }, t, {
    get class() {
      return t.class ? `sb-progress ${t.class}` : "sb-progress";
    }
  }), !1, !1), e;
})();
const _t = /* @__PURE__ */ $('<label><input type="radio"></label>'), vt = /* @__PURE__ */ $('<div role="radiogroup"></div>'), be = V([]), dn = (t) => {
  const [e, n, s] = x(t, ["accessKey", "align", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onchange", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "checked", "onChange", "setChecked", "children"]), [o, l, i] = G(be);
  return (() => {
    const r = _t.cloneNode(!0), c = r.firstChild;
    m(r, g({
      get class() {
        return `${n.align || "left"} sb-radio${e.disabled ? " disabled" : ""}`;
      }
    }, s), !1, !0), b(r, v(P, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), c);
    const a = t.ref;
    return typeof a == "function" ? S(a, c) : t.ref = c, m(c, g(e, {
      get checked() {
        return i ? i(e.value || "") : n.checked;
      },
      onChange: (u) => {
        var d;
        q(u, n.onChange), (d = n.setChecked) == null || d.call(n, u.currentTarget.checked), u.currentTarget.checked && (l == null || l(t.value || ""));
      }
    }), !1, !1), b(r, v(P, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), r;
  })();
}, fn = (t) => {
  const [e, n] = x(t, ["setValue", "value", "children"]), [s, o] = N(typeof t.value == "function" ? t.value() : "");
  return w(() => o(typeof t.value == "function" ? t.value() : "")), w(z([s], ([l]) => {
    var i;
    return (i = e.setValue) == null ? void 0 : i.call(e, l);
  }, {
    defer: !0
  })), v(be.Provider, {
    get value() {
      return [s, o, fe(s)];
    },
    get children() {
      const l = vt.cloneNode(!0);
      return m(l, g(n, {
        get class() {
          return n.class ? `sb-radiogroup ${n.class}` : "sb-radiogroup";
        }
      }), !1, !0), b(l, () => e.children), l;
    }
  });
};
const xt = /* @__PURE__ */ $('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'), gn = (t) => {
  const [e, n] = x(t, ["aria-orientation", "label", "onChange", "setValue", "value"]);
  return (() => {
    const s = xt.cloneNode(!0), o = s.firstChild, l = o.nextSibling;
    return b(o, () => e.label), m(l, g(n, {
      onChange: (i) => {
        var r;
        q(i, e.onChange), (r = e.setValue) == null || r.call(e, i.currentTarget.value);
      }
    }), !1, !1), C((i) => {
      const r = !!t.disabled, c = e["aria-orientation"];
      return r !== i._v$ && s.classList.toggle("disabled", i._v$ = r), c !== i._v$2 && F(s, "aria-orientation", i._v$2 = c), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const At = /* @__PURE__ */ $('<progress aria-busy="true" aria-live="polite"></progress>'), hn = (t) => (() => {
  const e = At.cloneNode(!0);
  return m(e, g({
    get class() {
      return t.class ? `sb-spinner ${t.class}` : "sb-spinner";
    }
  }, t), !1, !1), e;
})();
const wt = /* @__PURE__ */ $("<div></div>"), Nt = /* @__PURE__ */ $('<div role="tablist"></div>'), kt = /* @__PURE__ */ $('<button role="tab" type="button"></button>'), Ct = /* @__PURE__ */ $('<div role="tabpanel"></div>'), te = V([]), mn = (t) => {
  const [e, n] = N(t.index || 0), s = fe(e), o = {
    tabs: -1,
    container: -1
  }, l = t.id || Ce();
  return w(z(e, (i) => {
    var r;
    return (r = t.setIndex) == null ? void 0 : r.call(t, i);
  }, {
    defer: !0
  })), v(te.Provider, {
    value: [e, (i) => i > o.tabs ? n(o.tabs) : i >= 0 ? n(i) : n(0), s, (i) => i ? ++o.container : ++o.tabs, l],
    get children() {
      const i = wt.cloneNode(!0);
      return b(i, () => t.children), C((r) => {
        var c;
        return R(i, g((c = t.classList) != null ? c : {}, {
          "sb-tabs": !0
        }), r);
      }), i;
    }
  });
}, $n = V(""), bn = (t) => (() => {
  const e = Nt.cloneNode(!0);
  return m(e, g(t, {
    get ["aria-orientation"]() {
      return t["aria-orientation"];
    }
  }), !1, !1), e;
})(), yn = (t) => {
  const [e, n, s, o, l] = G(te), [i, r] = N(), c = o ? o(!1) : -1, a = () => s && s(c);
  return w(z(() => s && s(c), (u) => {
    var d;
    return u && ((d = i()) == null ? void 0 : d.focus());
  }, {
    defer: !0
  })), (() => {
    const u = kt.cloneNode(!0);
    return H(u, "keydown", n && [(d, _) => _.key === "Home" ? (_.preventDefault(), _.stopPropagation(), n(0)) : _.key === "End" ? (_.preventDefault(), _.stopPropagation(), n(1 / 0)) : _.key === "ArrowLeft" ? n(d - 1) : _.key === "ArrowRight" ? n(d + 1) : 0, c], !0), H(u, "click", n && [(d) => n(d), c], !0), S(r, u), F(u, "aria-controls", `${l}-container${c}`), F(u, "id", `${l}-tab${c}`), m(u, g({
      get ["aria-selected"]() {
        return a();
      },
      get tabIndex() {
        return a() ? void 0 : -1;
      }
    }, () => a() ? {} : {
      tabIndex: -1
    }, t), !1, !1), u;
  })();
}, _n = (t) => {
  const [e, n, s, o, l] = G(te), i = o ? o(!0) : -1;
  return (() => {
    const r = Ct.cloneNode(!0);
    return F(r, "id", `${l}-container${i}`), F(r, "aria-labelledby", `${l}-tab${i}`), m(r, g({
      get tabIndex() {
        return s && s(i) ? 0 : void 0;
      },
      get hidden() {
        return !s || s(i) ? void 0 : !0;
      }
    }, t), !1, !1), r;
  })();
};
U(["click", "keydown"]);
const Ft = /* @__PURE__ */ $("<a></a>"), Et = /* @__PURE__ */ $("<span></span>"), Lt = /* @__PURE__ */ $("<div></div>"), vn = (t) => {
  const [e, n] = x(t, ["plain"]), s = g({
    "data-random": e.plain ? void 0 : j(),
    rel: t.target ? "tag noopener" : "tag"
  }, n, {
    class: t.class ? `sb-tag ${t.class}` : "sb-tag"
  });
  return v(P, {
    get when() {
      return typeof s.href == "string";
    },
    get fallback() {
      return (() => {
        const o = Et.cloneNode(!0);
        return m(o, s, !1, !1), o;
      })();
    },
    get children() {
      const o = Ft.cloneNode(!0);
      return m(o, s, !1, !1), o;
    }
  });
}, xn = (t) => (() => {
  const e = Lt.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-tag-group ${t.class}` : "sb-tag-group";
    }
  }), !1, !1), e;
})();
const Pt = /* @__PURE__ */ $("<textarea></textarea>"), St = /* @__PURE__ */ $('<label><span class="sb-textfield-label"></span></label>'), pt = /* @__PURE__ */ $("<input>"), An = (t) => {
  const [e, n] = x(t, ["aria-orientation", "classList", "label", "multiline", "onInput", "children", "setValue"]);
  return (() => {
    const s = St.cloneNode(!0), o = s.firstChild;
    return b(o, () => e.label), b(s, v(P, {
      get when() {
        return e.multiline;
      },
      get fallback() {
        return (() => {
          const l = pt.cloneNode(!0);
          return m(l, g(n, {
            onInput: (i) => {
              var r;
              q(i, e.onInput), (r = e.setValue) == null || r.call(e, i.currentTarget.value);
            }
          }), !1, !1), l;
        })();
      },
      get children() {
        const l = Pt.cloneNode(!0);
        return m(l, g(n, {
          onInput: (i) => {
            var r;
            q(i, e.onInput), (r = e.setValue) == null || r.call(e, i.currentTarget.value);
          }
        }), !1, !1), l;
      }
    }), null), b(s, () => e.children, null), C((l) => {
      var c;
      const i = g((c = e.classList) != null ? c : {}, {
        "sb-textfield": !0
      }), r = t["aria-orientation"];
      return l._v$ = R(s, i, l._v$), r !== l._v$2 && F(s, "aria-orientation", l._v$2 = r), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const Mt = /* @__PURE__ */ $("<div></div>"), Tt = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"], ye = Tt.reduce((t, e) => (t[e] = J ? null : document.getElementById(`sb-toast-${e}`), t), {}), Bt = document.createElement("div"), Dt = (t = "top-right") => {
  const e = Bt.cloneNode();
  return e.id = `sb-toast-${t}`, ye[t] = e, document.body.appendChild(e), e;
}, wn = (t) => {
  const [e, n] = x(t, ["timeout", "position", "children", "mount", "onhide"]), s = y(() => e.mount || ye[e.position || "top-right"] || Dt(e.position)), [o, l] = N(!0), i = () => l(!1), [r, c] = N(), [a, u] = N(p(e.children, () => !0, [{
    update: c,
    hide: i
  }]));
  return Y(() => {
    var d;
    return t.timeout !== 0 && setTimeout(() => l(!1), (d = t.timeout) != null ? d : 5e3);
  }), w(() => {
    r() && u(p(r(), () => !0, [{
      update: c,
      hide: i
    }]));
  }), w(() => {
    var d;
    return !o() && ((d = t.onhide) == null ? void 0 : d.call(t));
  }), w(() => {
    const d = s();
    d !== t.mount && (!o() && (d == null ? void 0 : d.childElementCount) === 0 ? document.body.removeChild(d) : o() && d && !(d != null && d.parentNode) && document.body.appendChild(d));
  }), v(P, {
    get when() {
      return o();
    },
    get children() {
      return v(ee, {
        get mount() {
          return s();
        },
        get children() {
          const d = Mt.cloneNode(!0);
          return m(d, g(n, {
            get class() {
              return n.class ? `sb-toast ${n.class}` : "sb-toast";
            }
          }), !1, !0), b(d, a), d;
        }
      });
    }
  });
};
const de = /* @__PURE__ */ $('<span tabindex="0"></span>'), It = /* @__PURE__ */ $('<span aria-haspopup="true"><span></span></span>'), Ot = (t, e) => t === void 0 ? !1 : (Array.isArray(t) ? t : [t]).reduce((n, s) => typeof s == "boolean" ? s : typeof s == "function" ? s() : n, e != null ? e : !1), Q = (t, e) => t === void 0 || t === e || Array.isArray(t) && t.includes(e), _e = (t) => {
  if (typeof t == "function")
    return _e(t());
  if (typeof t == "string")
    return (() => {
      const e = de.cloneNode(!0);
      return b(e, t), e;
    })();
  if (Array.isArray(t)) {
    const e = t.map((n) => typeof n == "function" ? n() : n);
    return e.every((n) => typeof n == "string") ? (() => {
      const n = de.cloneNode(!0);
      return b(n, e), n;
    })() : e;
  }
  return t;
}, Nn = (t) => {
  let e;
  const [n, s] = x(t, ["children", "position", "content", "trigger", "arrow", "nowrap"]), o = y(() => Q(n.trigger, "focus")), l = y(() => Q(n.trigger, "hover")), i = y(() => Q(n.trigger, "focus") ? _e(n.children) : n.children), [r, c] = N(!1);
  w(() => c(Ot(n.trigger)));
  const [a, u] = N(), d = y(() => (f) => o() && c(f.type === "focus")), _ = y(() => (f) => {
    var h;
    return l() && c(e.contains((h = f.toElement) != null ? h : f.target));
  });
  return w(() => {
    if (!r() || !(e != null && e.offsetHeight))
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
    const f = It.cloneNode(!0), h = f.firstChild;
    H(f, "mouseleave", _()), H(f, "mouseover", _(), !0);
    const A = e;
    return typeof A == "function" ? S(A, f) : e = f, f.addEventListener("focus", d(), !0), f.addEventListener("blur", d(), !0), b(f, i, h), m(h, g(s, {
      role: "tooltip",
      get hidden() {
        return !r();
      },
      get style() {
        return a();
      }
    }), !1, !0), b(h, () => n.content), C((k) => {
      var M;
      const L = r(), D = `sb-tooltip-wrapper position-${(M = n.position) != null ? M : "s"}${n.arrow === !1 ? "" : " arrow"}${n.nowrap ? " nowrap" : ""}`;
      return L !== k._v$ && F(f, "aria-expanded", k._v$ = L), D !== k._v$2 && ge(f, k._v$2 = D), k;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
};
U(["mouseover"]);
export {
  jt as Accordion,
  Gt as AccordionGroup,
  Vt as AccordionHeader,
  Ut as Avatar,
  Rt as AvatarBadge,
  Kt as AvatarGroup,
  Wt as Bar,
  Qt as Breadcrumbs,
  rt as Button,
  Xt as Checkbox,
  Yt as Menu,
  zt as MenuButton,
  en as MenuItem,
  tn as MenuItemGroup,
  nn as MenuOption,
  on as MenuOptionGroup,
  $e as MenuOptionsContext,
  Jt as Message,
  Zt as Meter,
  sn as Modal,
  cn as ModalBody,
  ln as ModalContent,
  an as ModalFooter,
  rn as ModalHeader,
  un as Progress,
  dn as Radio,
  fn as RadioGroup,
  gn as Select,
  hn as Spinner,
  yn as Tab,
  _n as TabContainer,
  bn as TabList,
  mn as Tabs,
  vn as Tag,
  xn as TagGroup,
  An as TextField,
  wn as Toast,
  Nn as Tooltip,
  Ve as composeStyles,
  Ke as createLocalStorageSignal,
  p as getElements,
  nt as getInitials,
  ie as getNearestNode,
  j as getRandom,
  Ge as maxRandom,
  be as radioContext,
  q as runEvent,
  $n as tabListContext,
  te as tabsContext,
  je as toStyleObject,
  qt as useDarkMode,
  Ue as useMediaQuery
};
//# sourceMappingURL=solid-blocks.mjs.map
