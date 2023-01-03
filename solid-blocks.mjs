import { createRenderEffect as C, untrack as _e, sharedConfig as F, createSignal as k, createRoot as ve, onCleanup as I, createEffect as w, createMemo as y, splitProps as A, onMount as Z, mergeProps as g, createComponent as v, For as Ae, Show as P, createContext as ce, useContext as ae, Switch as xe, Match as U, on as we, createSelector as Ne } from "solid-js";
const ke = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Ce = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...ke]), Fe = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Ee = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), z = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}), Le = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), Se = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Pe(t, e, n) {
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
const ee = "_$DX_DELEGATE";
function $(t, e, n) {
  const s = document.createElement("template");
  s.innerHTML = t;
  let o = s.content.firstChild;
  return n && (o = o.firstChild), o;
}
function V(t, e = window.document) {
  const n = e[ee] || (e[ee] = /* @__PURE__ */ new Set());
  for (let s = 0, o = t.length; s < o; s++) {
    const l = t[s];
    n.has(l) || (n.add(l), e.addEventListener(l, pe));
  }
}
function E(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function Me(t, e, n, s) {
  s == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, s);
}
function ue(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function W(t, e, n, s) {
  if (s)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    t.addEventListener(e, n[0] = (l) => o.call(t, n[1], l));
  } else
    t.addEventListener(e, n);
}
function G(t, e, n = {}) {
  const s = Object.keys(e || {}), o = Object.keys(n);
  let l, i;
  for (l = 0, i = o.length; l < i; l++) {
    const r = o[l];
    !r || r === "undefined" || e[r] || (te(t, r, !1), delete n[r]);
  }
  for (l = 0, i = s.length; l < i; l++) {
    const r = s[l], c = !!e[r];
    !r || r === "undefined" || n[r] === c || !c || (te(t, r, !0), n[r] = c);
  }
  return n;
}
function Te(t, e, n) {
  if (!e)
    return n ? E(t, "style") : e;
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
  return s || C(() => o.children = D(t, e.children, o.children)), C(() => e.ref && e.ref(t)), C(() => Be(t, e, n, !0, o, !0)), o;
}
function T(t, e, n) {
  return _e(() => t(e, n));
}
function b(t, e, n, s) {
  if (n !== void 0 && !s && (s = []), typeof e != "function")
    return D(t, e, s, n);
  C((o) => D(t, e(), o, n), s);
}
function Be(t, e, n, s, o = {}, l = !1) {
  e || (e = {});
  for (const i in o)
    if (!(i in e)) {
      if (i === "children")
        continue;
      o[i] = ne(t, i, null, o[i], n, l);
    }
  for (const i in e) {
    if (i === "children") {
      s || D(t, e.children);
      continue;
    }
    const r = e[i];
    o[i] = ne(t, i, r, o[i], n, l);
  }
}
function De(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}
function te(t, e, n) {
  const s = e.trim().split(/\s+/);
  for (let o = 0, l = s.length; o < l; o++)
    t.classList.toggle(s[o], n);
}
function ne(t, e, n, s, o, l) {
  let i, r, c;
  if (e === "style")
    return Te(t, n, s);
  if (e === "classList")
    return G(t, n, s);
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
    const a = e.slice(2).toLowerCase(), u = Le.has(a);
    if (!u && s) {
      const d = Array.isArray(s) ? s[0] : s;
      t.removeEventListener(a, d);
    }
    (u || n) && (W(t, a, n, u), u && V([a]));
  } else if ((c = Fe.has(e)) || !o && (z[e] || (r = Ce.has(e))) || (i = t.nodeName.includes("-")))
    e === "class" || e === "className" ? ue(t, n) : i && !r && !c ? t[De(e)] = n : t[z[e] || e] = n;
  else {
    const a = o && e.indexOf(":") > -1 && Se[e.split(":")[0]];
    a ? Me(t, a, e, n) : E(t, Ee[e] || e, n);
  }
  return n;
}
function pe(t) {
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
  }), F.registry && !F.done && (F.done = !0, document.querySelectorAll("[id^=pl-]").forEach((s) => s.remove())); n; ) {
    const s = n[e];
    if (s && !n.disabled) {
      const o = n[`${e}Data`];
      if (o !== void 0 ? s.call(n, o, t) : s.call(n, t), t.cancelBubble)
        return;
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function D(t, e, n, s, o) {
  for (F.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
    n = n();
  if (e === n)
    return n;
  const l = typeof e, i = s !== void 0;
  if (t = i && n[0] && n[0].parentNode || t, l === "string" || l === "number") {
    if (F.context)
      return n;
    if (l === "number" && (e = e.toString()), i) {
      let r = n[0];
      r && r.nodeType === 3 ? r.data = e : r = document.createTextNode(e), n = B(t, n, s, r);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || l === "boolean") {
    if (F.context)
      return n;
    n = B(t, n, s);
  } else {
    if (l === "function")
      return C(() => {
        let r = e();
        for (; typeof r == "function"; )
          r = r();
        n = D(t, r, n, s);
      }), () => n;
    if (Array.isArray(e)) {
      const r = [], c = n && Array.isArray(n);
      if (Q(r, e, n, o))
        return C(() => n = D(t, r, n, s, !0)), () => n;
      if (F.context) {
        if (!r.length)
          return n;
        for (let a = 0; a < r.length; a++)
          if (r[a].parentNode)
            return n = r;
      }
      if (r.length === 0) {
        if (n = B(t, n, s), i)
          return n;
      } else
        c ? n.length === 0 ? oe(t, r, s) : Pe(t, n, r) : (n && B(t), oe(t, r));
      n = r;
    } else if (e instanceof Node) {
      if (F.context && e.parentNode)
        return n = i ? [e] : e;
      if (Array.isArray(n)) {
        if (i)
          return n = B(t, n, s, e);
        B(t, n, null, e);
      } else
        n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function Q(t, e, n, s) {
  let o = !1;
  for (let l = 0, i = e.length; l < i; l++) {
    let r = e[l], c = n && n[l];
    if (r instanceof Node)
      t.push(r);
    else if (!(r == null || r === !0 || r === !1))
      if (Array.isArray(r))
        o = Q(t, r, c) || o;
      else if (typeof r == "function")
        if (s) {
          for (; typeof r == "function"; )
            r = r();
          o = Q(t, Array.isArray(r) ? r : [r], Array.isArray(c) ? c : [c]) || o;
        } else
          t.push(r), o = !0;
      else {
        const a = String(r);
        c && c.nodeType === 3 && c.data === a ? t.push(c) : t.push(document.createTextNode(a));
      }
  }
  return o;
}
function oe(t, e, n = null) {
  for (let s = 0, o = e.length; s < o; s++)
    t.insertBefore(e[s], n);
}
function B(t, e, n, s) {
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
const X = !1, Oe = "http://www.w3.org/2000/svg";
function Ie(t, e = !1) {
  return e ? document.createElementNS(Oe, t) : document.createElement(t);
}
function Y(t) {
  const {
    useShadow: e
  } = t, n = document.createTextNode(""), s = t.mount || document.body;
  function o() {
    if (F.context) {
      const [l, i] = k(!1);
      return queueMicrotask(() => i(!0)), () => l() && t.children;
    } else
      return () => t.children;
  }
  if (s instanceof HTMLHeadElement) {
    const [l, i] = k(!1), r = () => i(!0);
    ve((c) => b(s, () => l() ? c() : o()(), null)), I(() => {
      F.context ? queueMicrotask(r) : r();
    });
  } else {
    const l = Ie(t.isSVG ? "g" : "div", t.isSVG), i = e && l.attachShadow ? l.attachShadow({
      mode: "open"
    }) : l;
    Object.defineProperty(l, "_$host", {
      get() {
        return n.parentNode;
      },
      configurable: !0
    }), b(i, o()), s.appendChild(l), t.ref && t.ref(l), I(() => s.removeChild(l));
  }
  return n;
}
const He = (t) => {
  if (typeof t == "object")
    return t;
  const e = {};
  return (t || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (n, s, o) => (e[s] = o, "")), e;
}, qe = (...t) => Object.assign({}, ...t.map(He)), j = (t, e) => {
  if (!t)
    return;
  let n = t;
  for (; n && n.nodeName !== e; )
    n = n.parentNode;
  return n;
}, je = 8;
let O = 0;
const q = () => {
  const t = 1 + Math.floor(Math.random() * (je - (O ? 1 : 0)));
  return O = O ? t + (t === O ? 1 : 0) : t, O;
}, Ve = (t) => {
  const e = window.matchMedia(t), [n, s] = k(e.matches), o = (l) => s(l.matches);
  return e.addEventListener("change", o), I(() => e.removeEventListener("change", o)), n;
}, Ge = (t, e) => e ? t ? JSON.parse(t) : void 0 : t != null ? t : void 0, se = (t, e) => localStorage.setItem(t, typeof e == "string" ? e : JSON.stringify(e));
function Ue(t, e, n = !1) {
  localStorage.getItem(t) === null && e !== void 0 && se(t, e);
  const [s, o] = k(Ge(localStorage.getItem(t), n));
  return w(
    () => n && s() === void 0 ? localStorage.removeItem(t) : se(t, s())
  ), [s, o];
}
const Ht = (t = "COLOR_SCHEME") => {
  const e = Ve("(prefers-color-scheme: dark)"), [n, s] = Ue(t, void 0, !0), o = y(() => {
    var l;
    return (l = n()) != null ? l : e();
  });
  return w(() => {
    document.body.classList.toggle("dark-mode", o());
  }), [o, s];
}, L = (t, e, n = [], s = []) => {
  if (!!t) {
    if (Array.isArray(t))
      t.forEach((o) => L(o, e, n, s));
    else if (typeof t == "function")
      L(t.apply(null, n), e, n, s);
    else {
      const o = t;
      (!e || (typeof e == "function" ? e(o) : o.nodeName === e)) && s.push(o);
    }
    return s;
  }
}, H = (t, e) => {
  Array.isArray(e) ? e[1](e[0], t) : typeof e == "function" && e(t);
};
const Ke = /* @__PURE__ */ $("<details></details>"), Re = /* @__PURE__ */ $("<summary></summary>"), We = /* @__PURE__ */ $("<section></section>"), qt = (t) => {
  const [e, n] = A(t, ["children", "ontoggle"]), [s, o] = k(!!t.open);
  let l;
  const i = y(() => typeof t.children == "function" ? t.children(s()) : t.children), r = () => {
    var c;
    l && (o(l.open), (c = e.ontoggle) == null || c.call(e, l.open));
  };
  return Z(() => l == null ? void 0 : l.addEventListener("toggle", r)), I(() => l == null ? void 0 : l.addEventListener("toggle", r)), (() => {
    const c = Ke.cloneNode(!0), a = l;
    return typeof a == "function" ? T(a, c) : l = c, m(c, g(n, {
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
}, jt = (t) => (() => {
  const e = Re.cloneNode(!0);
  return b(e, () => t.children), C((n) => {
    var s;
    return G(e, g((s = t.classList) != null ? s : {}, {
      "sb-accordion-header": !0
    }), n);
  }), e;
})(), Vt = (t) => {
  const [e, n] = A(t, ["allowMultiple", "allowToggle"]), s = y(() => (l) => {
    var c, a;
    if (!l.target)
      return;
    const i = j(l.target, "DETAILS");
    if (!i)
      return;
    const r = (a = (c = i.parentNode) == null ? void 0 : c.querySelectorAll("details.sb-accordion[open]")) != null ? a : [];
    r.length !== 0 && (!e.allowMultiple && !i.open && Array.prototype.forEach.call(r, (u) => {
      u !== i && u.removeAttribute("open");
    }), !e.allowToggle && i.open && r.length === 1 && l.preventDefault());
  }), o = y(() => (l) => {
    const i = j(l.target, "DETAILS");
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
    const l = We.cloneNode(!0);
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
const Qe = /* @__PURE__ */ $('<div role="figure"><img><span aria-hidden="true"></span></div>'), Xe = /* @__PURE__ */ $('<div role="img"></div>'), Je = /* @__PURE__ */ $('<div role="img" aria-label="Unknown"></div>'), Ze = /* @__PURE__ */ $("<span></span>"), Ye = /* @__PURE__ */ $("<div></div>"), le = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]", ze = new RegExp(`^.*?(${le})(?:.*\\s+\\S*?(${le}))?.*$`), et = (t) => t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g, "").replace(ze, "$1$2").toUpperCase(), Gt = (t) => {
  const [e, n] = A(t, ["classList", "children", "img", "name", "fallback"]), s = y(() => e.name ? et(e.name) : "");
  return e.img ? (() => {
    const o = Qe.cloneNode(!0), l = o.firstChild, i = l.nextSibling;
    return m(o, g({
      get classList() {
        var r;
        return g((r = e.classList) != null ? r : {}, {
          "sb-avatar": !0
        });
      },
      get ["data-random"]() {
        return q();
      }
    }, n), !1, !0), b(i, s), b(o, () => e.children, null), C((r) => {
      const c = e.img, a = e.name;
      return c !== r._v$ && E(l, "src", r._v$ = c), a !== r._v$2 && E(l, "alt", r._v$2 = a), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })() : e.name ? (() => {
    const o = Xe.cloneNode(!0);
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
        return q();
      }
    }, n), !1, !0), b(o, s, null), b(o, () => e.children, null), o;
  })() : (() => {
    const o = Je.cloneNode(!0);
    return m(o, g({
      get classList() {
        var l;
        return g((l = e.classList) != null ? l : {}, {
          "sb-avatar": !0
        });
      },
      get ["data-random"]() {
        return q();
      }
    }, n), !1, !0), b(o, () => {
      var l;
      return (l = e.fallback) != null ? l : "?";
    }, null), b(o, () => e.children, null), o;
  })();
}, Ut = (t) => {
  var o;
  const [e, n] = A(t, ["classList", "borderColor", "background", "style"]), s = qe((o = e.style) != null ? o : {}, {
    "border-color": e.borderColor,
    background: e.background
  });
  return (() => {
    const l = Ze.cloneNode(!0);
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
  const e = Ye.cloneNode(!0);
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
const re = /* @__PURE__ */ $("<div></div>"), Rt = (t) => {
  const [e, n] = A(t, ["placement", "position", "mount", "portal"]), s = g(n, {
    class: `${e.placement}${e.position ? " " + e.position : ""} sb-bar ${t.class ? " " + t.class : ""}`
  });
  return e.portal === !1 ? (() => {
    const o = re.cloneNode(!0);
    return m(o, s, !1, !1), o;
  })() : v(Y, {
    get mount() {
      return e.mount;
    },
    get children() {
      const o = re.cloneNode(!0);
      return m(o, s, !1, !1), o;
    }
  });
};
const tt = /* @__PURE__ */ $('<nav class="sb-breadcrumbs"><ol></ol></nav>'), nt = /* @__PURE__ */ $("<li></li>"), Wt = (t) => (() => {
  const e = tt.cloneNode(!0), n = e.firstChild;
  return m(n, t, !1, !0), b(n, v(Ae, {
    get each() {
      return Array.isArray(t.children) ? t.children : [t.children];
    },
    children: (s) => (() => {
      const o = nt.cloneNode(!0);
      return b(o, s), o;
    })()
  })), e;
})();
const ot = /* @__PURE__ */ $("<button></button>"), st = (t) => {
  const [e, n] = A(t, ["variant", "classList"]);
  return (() => {
    const s = ot.cloneNode(!0);
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
const lt = /* @__PURE__ */ $('<label><input type="checkbox"></label>'), Qt = (t) => {
  const [e, n, s] = A(t, ["accessKey", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children", "onChange", "setChecked", "switch"]);
  return (() => {
    const o = lt.cloneNode(!0), l = o.firstChild;
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
    return typeof i == "function" ? T(i, l) : t.ref = l, m(l, g({
      get role() {
        return n.switch ? "switch" : void 0;
      }
    }, e, {
      onChange: (r) => {
        var c;
        H(r, n.onChange), (c = n.setChecked) == null || c.call(n, r.currentTarget.checked);
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
const rt = /* @__PURE__ */ $("<p></p>"), Xt = (t) => {
  const [e, n] = A(t, ["type", "class", "inline"]), s = y(() => [...new Set(["sb-message", e.type, e.class, e.inline && "inline"].filter(Boolean))].join(" "));
  return (() => {
    const o = rt.cloneNode(!0);
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
const it = /* @__PURE__ */ $('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'), Jt = (t) => (() => {
  const e = it.cloneNode(!0), n = e.firstChild, s = n.firstChild;
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
    return l !== o._v$ && E(n, "viewBox", o._v$ = l), i !== o._v$2 && E(s, "width", o._v$2 = i), o;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), e;
})();
const ct = /* @__PURE__ */ $('<div><div tabindex="-1" role="menu"></div></div>'), at = /* @__PURE__ */ $('<div tabindex="0"></div>'), de = /* @__PURE__ */ $("<p></p>"), fe = /* @__PURE__ */ $("<div></div>"), ut = /* @__PURE__ */ $('<div tabindex="-1" role="group"></div>'), dt = (t) => {
  let e = 0;
  return (n) => {
    const l = (n.nodeName === "BUTTON" || n.getAttribute("role") === "button") && n.getAttribute("aria-haspopup") === "menu" && e++ === 0;
    return l && (t() && n.getAttribute("aria-expanded") !== "true" ? n.setAttribute("aria-expanded", "true") : !t() && n.getAttribute("aria-expanded") === "true" && n.setAttribute("aria-expanded", "false")), l;
  };
}, ft = () => {
  let t = 0;
  return (e) => !((e.nodeName === "BUTTON" || e.getAttribute("role") === "button") && e.getAttribute("aria-haspopup") === "menu" && t++ === 0);
}, Zt = (t) => {
  const [e, n] = k(!!t.open), [s, o] = A(t, ["open", "children", "ontoggle", "align"]), l = y(() => {
    var f;
    return ((f = L(t.children, dt(e), [e()])) != null ? f : [])[0];
  }), i = y(() => {
    var f;
    return (f = L(t.children, ft(), [e()])) != null ? f : [];
  });
  let r;
  w(() => {
    var h;
    const f = e();
    (h = s.ontoggle) == null || h.call(s, f), f && i()[0].focus();
  });
  const c = (f) => {
    const h = f.target, x = h == null ? void 0 : h.getAttribute("role"), N = l();
    !f.defaultPrevented && N && (f.target === N ? n((S) => !S && N.getAttribute("aria-disabled") !== "true") : !N.contains(h) && x !== "menuitemradio" && x !== "menuitemcheckbox" && n(!1));
  };
  Z(() => !X && document.addEventListener("click", c, {
    capture: !1
  })), I(() => !X && document.removeEventListener("click", c));
  let a;
  const u = (f) => {
    var x;
    const h = f.target;
    ["menuitem", "menuitemradio", "menuitemcheckbox"].includes((x = h == null ? void 0 : h.getAttribute("role")) != null ? x : "") && (h == null ? void 0 : h.tabIndex) !== -1 && (h == null ? void 0 : h.getAttribute("aria-disabled")) !== "true" && (a = h, a == null || a.focus());
  }, d = (f) => {
    const h = r.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'), x = a ? Array.prototype.findIndex.call(h, (S) => S === a) : -1, N = x === -1 ? 1 : (h.length + f + x) % h.length;
    a = h[N], a.focus();
  }, _ = (f) => {
    var N, S, p;
    const h = f.target;
    f.key === "Escape" && e() && (n(!1), (N = l()) == null || N.focus());
    const x = h == null ? void 0 : h.getAttribute("role");
    if (f.key === " " && ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(x != null ? x : "")) {
      if (h.click(), x === "menuitemradio") {
        const M = (p = (S = h.parentNode) == null ? void 0 : S.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]')) != null ? p : [], be = Array.prototype.indexOf.call(M, h), ye = (M.length + 1 + be) % M.length;
        a = M[ye], a == null || a.focus();
      }
      f.preventDefault();
    }
    f.key === "ArrowDown" ? (d(1), f.preventDefault()) : f.key === "ArrowUp" && (d(-1), f.preventDefault());
  };
  return (() => {
    const f = ct.cloneNode(!0), h = f.firstChild, x = r;
    return typeof x == "function" ? T(x, f) : r = f, m(f, g(o, {
      get class() {
        return `sb-menu${o.class ? " " + o.class : ""}${s.align ? " " + s.align : ""}`;
      },
      onkeydown: _
    }), !1, !0), b(f, l, h), h.$$mouseover = u, b(h, i), C(() => h.hidden = !e()), f;
  })();
}, Yt = (t) => v(st, g(t, {
  "aria-haspopup": "menu"
})), zt = (t) => (() => {
  const e = at.cloneNode(!0);
  return m(e, g(t, {
    role: "menuitem"
  }), !1, !1), e;
})(), en = (t) => {
  const [e, n] = A(t, ["title", "children"]);
  return (() => {
    const s = fe.cloneNode(!0);
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
        const o = de.cloneNode(!0);
        return b(o, () => e.title), o;
      }
    }), null), b(s, () => e.children, null), s;
  })();
}, ge = ce([() => [], (t) => console.warn("context default!", t)]), tn = (t) => {
  const [e, n] = A(t, ["value", "onchange"]), [s, o, l] = ae(ge), i = y(() => s().includes(t.value)), r = y(() => () => t["aria-disabled"] !== "true" && o(t.value)), c = y(() => (a) => {
    a.key === " " && (a.preventDefault(), t["aria-disabled"] !== "true" && o(t.value));
  });
  return w(() => {
    var a;
    (a = t.onchange) == null || a.call(t, i());
  }), (() => {
    const a = fe.cloneNode(!0);
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
}, nn = (t) => {
  const [e, n] = A(t, ["title", "value", "onchange", "children", "type"]), [s, o] = k(Array.isArray(e.value) ? e.value : e.value ? [e.value] : [], {
    equals: (i, r) => i.length === r.length && i[0] === r[0]
  }), l = y(() => t.type === "checkbox" ? (i) => o((r) => r.includes(i) ? r.filter((c) => c !== i) : [...r, i]) : (i) => o((r) => r[0] === i ? r : [i]));
  return w((i) => (i !== e.value && o(Array.isArray(e.value) ? e.value : e.value ? [e.value] : []), e.value), e.value), w((i) => {
    var c, a;
    const r = s();
    return (t.type === "checkbox" ? r.length === (i == null ? void 0 : i.length) : r[0] === (i == null ? void 0 : i[0])) ? i : (t.type === "checkbox" ? (c = t.onchange) == null || c.call(t, r) : (a = t.onchange) == null || a.call(t, r[0]), r);
  }, s()), (() => {
    const i = ut.cloneNode(!0);
    return m(i, n, !1, !0), b(i, v(P, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const r = de.cloneNode(!0);
        return b(r, () => e.title), r;
      }
    }), null), b(i, v(ge.Provider, {
      get value() {
        return [s, l(), e.type];
      },
      get children() {
        return e.children;
      }
    }), null), i;
  })();
};
V(["mouseover"]);
const J = /* @__PURE__ */ $("<div></div>"), gt = /* @__PURE__ */ $("<header></header>"), ht = /* @__PURE__ */ $("<main></main>"), mt = /* @__PURE__ */ $("<footer></footer>");
let K = 0;
const on = (t) => {
  const [e, n] = A(t, ["open", "noPortal", "children"]), [s, o] = k(e.open), l = (u) => o(typeof u == "boolean" ? u : (d) => !d), i = y(() => {
    var u;
    return (u = L(e.children, (d) => d.className.indexOf("sb-modal-content") !== -1, [{
      open: s,
      toggle: l
    }])) != null ? u : [];
  }), r = y(() => L(e.children, (u) => u.className.indexOf("sb-modal-content") === -1, [{
    open: s,
    toggle: l
  }]));
  let c;
  w(() => s() && (c == null || c.focus(), c == null ? void 0 : c.scrollIntoView())), K++, w(() => {
    if (!c)
      return;
    const u = c.querySelector(".sb-modal-header");
    u && c.setAttribute("aria-labelledby", u.id || (() => u.id = `sb-modal-header-${K}`)());
    const d = c.querySelector(".sb-modal-body");
    d && c.setAttribute("aria-describedby", d.id || (() => d.id = `sb-modal-body-${K}`)());
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
  return v(xe, {
    get children() {
      return [v(U, {
        get when() {
          return !s();
        },
        get children() {
          return r();
        }
      }), v(U, {
        get when() {
          return s() && e.noPortal;
        },
        get children() {
          return [y(r), (() => {
            const u = J.cloneNode(!0), d = c;
            return typeof d == "function" ? T(d, u) : c = u, m(u, a, !1, !1), u;
          })()];
        }
      }), v(U, {
        get when() {
          return s() && !e.noPortal;
        },
        get children() {
          return [y(r), v(Y, {
            get mount() {
              return document.body;
            },
            get children() {
              const u = J.cloneNode(!0), d = c;
              return typeof d == "function" ? T(d, u) : c = u, m(u, a, !1, !1), u;
            }
          })];
        }
      })];
    }
  });
}, sn = (t) => (() => {
  const e = J.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-content ${t.class}` : "sb-modal-content";
    }
  }), !1, !1), e;
})(), ln = (t) => (() => {
  const e = gt.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-header ${t.class}` : "sb-modal-header";
    }
  }), !1, !1), e;
})(), rn = (t) => (() => {
  const e = ht.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-body ${t.class}` : "sb-modal-body";
    }
  }), !1, !1), e;
})(), cn = (t) => (() => {
  const e = mt.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-modal-footer ${t.class}` : "sb-modal-footer";
    }
  }), !1, !1), e;
})();
const $t = /* @__PURE__ */ $('<progress aria-live="polite"></progress>'), an = (t) => (() => {
  const e = $t.cloneNode(!0);
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
const bt = /* @__PURE__ */ $('<label><input type="radio"></label>'), yt = /* @__PURE__ */ $('<div role="radiogroup"></div>'), he = ce([]), un = (t) => {
  const [e, n, s] = A(t, ["accessKey", "align", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onchange", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "checked", "onChange", "setChecked", "children"]), [o, l, i] = ae(he);
  return (() => {
    const r = bt.cloneNode(!0), c = r.firstChild;
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
    return typeof a == "function" ? T(a, c) : t.ref = c, m(c, g(e, {
      get checked() {
        return i ? i(e.value || "") : n.checked;
      },
      onChange: (u) => {
        var d;
        H(u, n.onChange), (d = n.setChecked) == null || d.call(n, u.currentTarget.checked), u.currentTarget.checked && (l == null || l(t.value || ""));
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
}, dn = (t) => {
  const [e, n] = A(t, ["setValue", "value", "children"]), [s, o] = k(typeof t.value == "function" ? t.value() : "");
  return w(() => o(typeof t.value == "function" ? t.value() : "")), w(we([s], ([l]) => {
    var i;
    return (i = e.setValue) == null ? void 0 : i.call(e, l);
  }, {
    defer: !0
  })), v(he.Provider, {
    get value() {
      return [s, o, Ne(s)];
    },
    get children() {
      const l = yt.cloneNode(!0);
      return m(l, g(n, {
        get class() {
          return n.class ? `sb-radiogroup ${n.class}` : "sb-radiogroup";
        }
      }), !1, !0), b(l, () => e.children), l;
    }
  });
};
const _t = /* @__PURE__ */ $('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'), fn = (t) => {
  const [e, n] = A(t, ["aria-orientation", "label", "onChange", "setValue", "value"]);
  return (() => {
    const s = _t.cloneNode(!0), o = s.firstChild, l = o.nextSibling;
    return b(o, () => e.label), m(l, g(n, {
      onChange: (i) => {
        var r;
        H(i, e.onChange), (r = e.setValue) == null || r.call(e, i.currentTarget.value);
      }
    }), !1, !1), C((i) => {
      const r = !!t.disabled, c = e["aria-orientation"];
      return r !== i._v$ && s.classList.toggle("disabled", i._v$ = r), c !== i._v$2 && E(s, "aria-orientation", i._v$2 = c), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const vt = /* @__PURE__ */ $('<progress aria-busy="true" aria-live="polite"></progress>'), gn = (t) => (() => {
  const e = vt.cloneNode(!0);
  return m(e, g({
    get class() {
      return t.class ? `sb-spinner ${t.class}` : "sb-spinner";
    }
  }, t), !1, !1), e;
})();
const At = /* @__PURE__ */ $('<section><ul role="tablist"></ul></section>'), xt = /* @__PURE__ */ $('<li role="tab" tabindex="0"></li>'), wt = /* @__PURE__ */ $('<div role="tabpanel"></div>'), Nt = (t, e, n) => {
  const s = e === n;
  (t == null ? void 0 : t.getAttribute) && t.getAttribute("aria-selected") === "true" !== s && (t.setAttribute("aria-selected", s ? "true" : "false"), t.setAttribute("tabIndex", s ? "-1" : "0"));
}, kt = (t, e, n) => {
  (t == null ? void 0 : t.hasAttribute) && t.hasAttribute("hidden") === (e === n) && t[e === n ? "removeAttribute" : "setAttribute"]("hidden", "hidden");
}, hn = (t) => {
  var r;
  const [e, n] = k((r = t.index) != null ? r : 0), s = y(() => L(t.children, "LI") || []), o = y(() => L(t.children, "DIV") || []);
  w(() => {
    var a;
    s().length !== o().length && console.warn(`solid-blocks tabs: items count mismatch: ${s().length} tabs and ${o().length}`);
    const c = e() % s().length;
    (a = t.onchange) == null || a.call(t, c), s().forEach((u, d) => {
      Nt(u, d, c);
    }), o().forEach((u, d) => {
      kt(u, d, c);
    });
  });
  const l = (c) => {
    var d;
    const a = j(c.target, "LI");
    if (!a)
      return;
    const u = Array.prototype.indexOf.call((d = a.parentNode) == null ? void 0 : d.childNodes, a);
    u !== -1 && n(Number(u));
  }, i = (c) => {
    var _, f;
    const a = j(c.target, "LI"), u = (f = (_ = a == null ? void 0 : a.parentElement) == null ? void 0 : _.childNodes) != null ? f : [], d = Array.prototype.indexOf.call(u, a);
    d !== -1 && (c.key === " " ? n(d) : c.key === "ArrowLeft" && d !== 0 ? (n(d - 1), u[d - 1].focus()) : c.key === "ArrowRight" && d + 1 < u.length && (n(d + 1), u[d + 1].focus()));
  };
  return (() => {
    const c = At.cloneNode(!0), a = c.firstChild;
    return a.$$keyup = i, a.$$click = l, b(a, s), b(c, o, null), C((u) => {
      var f;
      const d = g((f = t.classList) != null ? f : {}, {
        "sb-tabs": !0
      }), _ = t.vertical ? "vertical" : "horizontal";
      return u._v$ = G(c, d, u._v$), _ !== u._v$2 && E(a, "aria-orientation", u._v$2 = _), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}, mn = (t) => (() => {
  const e = xt.cloneNode(!0);
  return m(e, t, !1, !1), e;
})(), $n = (t) => (() => {
  const e = wt.cloneNode(!0);
  return m(e, t, !1, !1), e;
})();
V(["click", "keyup"]);
const Ct = /* @__PURE__ */ $("<a></a>"), Ft = /* @__PURE__ */ $("<span></span>"), Et = /* @__PURE__ */ $("<div></div>"), bn = (t) => {
  const [e, n] = A(t, ["plain"]), s = g({
    "data-random": e.plain ? void 0 : q(),
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
        const o = Ft.cloneNode(!0);
        return m(o, s, !1, !1), o;
      })();
    },
    get children() {
      const o = Ct.cloneNode(!0);
      return m(o, s, !1, !1), o;
    }
  });
}, yn = (t) => (() => {
  const e = Et.cloneNode(!0);
  return m(e, g(t, {
    get class() {
      return t.class ? `sb-tag-group ${t.class}` : "sb-tag-group";
    }
  }), !1, !1), e;
})();
const Lt = /* @__PURE__ */ $("<textarea></textarea>"), St = /* @__PURE__ */ $('<label><span class="sb-textfield-label"></span></label>'), Pt = /* @__PURE__ */ $("<input>"), _n = (t) => {
  const [e, n] = A(t, ["aria-orientation", "classList", "label", "multiline", "onInput", "children", "setValue"]);
  return (() => {
    const s = St.cloneNode(!0), o = s.firstChild;
    return b(o, () => e.label), b(s, v(P, {
      get when() {
        return e.multiline;
      },
      get fallback() {
        return (() => {
          const l = Pt.cloneNode(!0);
          return m(l, g(n, {
            onInput: (i) => {
              var r;
              H(i, e.onInput), (r = e.setValue) == null || r.call(e, i.currentTarget.value);
            }
          }), !1, !1), l;
        })();
      },
      get children() {
        const l = Lt.cloneNode(!0);
        return m(l, g(n, {
          onInput: (i) => {
            var r;
            H(i, e.onInput), (r = e.setValue) == null || r.call(e, i.currentTarget.value);
          }
        }), !1, !1), l;
      }
    }), null), b(s, () => e.children, null), C((l) => {
      var c;
      const i = g((c = e.classList) != null ? c : {}, {
        "sb-textfield": !0
      }), r = t["aria-orientation"];
      return l._v$ = G(s, i, l._v$), r !== l._v$2 && E(s, "aria-orientation", l._v$2 = r), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const Mt = /* @__PURE__ */ $("<div></div>"), Tt = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"], me = Tt.reduce((t, e) => (t[e] = X ? null : document.getElementById(`sb-toast-${e}`), t), {}), Bt = document.createElement("div"), Dt = (t = "top-right") => {
  const e = Bt.cloneNode();
  return e.id = `sb-toast-${t}`, me[t] = e, document.body.appendChild(e), e;
}, vn = (t) => {
  const [e, n] = A(t, ["timeout", "position", "children", "mount", "onhide"]), s = y(() => e.mount || me[e.position || "top-right"] || Dt(e.position)), [o, l] = k(!0), i = () => l(!1), [r, c] = k(), [a, u] = k(L(e.children, () => !0, [{
    update: c,
    hide: i
  }]));
  return Z(() => {
    var d;
    return t.timeout !== 0 && setTimeout(() => l(!1), (d = t.timeout) != null ? d : 5e3);
  }), w(() => {
    r() && u(L(r(), () => !0, [{
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
      return v(Y, {
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
const ie = /* @__PURE__ */ $('<span tabindex="0"></span>'), pt = /* @__PURE__ */ $('<span aria-haspopup="true"><span></span></span>'), Ot = (t, e) => t === void 0 ? !1 : (Array.isArray(t) ? t : [t]).reduce((n, s) => typeof s == "boolean" ? s : typeof s == "function" ? s() : n, e != null ? e : !1), R = (t, e) => t === void 0 || t === e || Array.isArray(t) && t.includes(e), $e = (t) => {
  if (typeof t == "function")
    return $e(t());
  if (typeof t == "string")
    return (() => {
      const e = ie.cloneNode(!0);
      return b(e, t), e;
    })();
  if (Array.isArray(t)) {
    const e = t.map((n) => typeof n == "function" ? n() : n);
    return e.every((n) => typeof n == "string") ? (() => {
      const n = ie.cloneNode(!0);
      return b(n, e), n;
    })() : e;
  }
  return t;
}, An = (t) => {
  let e;
  const [n, s] = A(t, ["children", "position", "content", "trigger", "arrow", "nowrap"]), o = y(() => R(n.trigger, "focus")), l = y(() => R(n.trigger, "hover")), i = y(() => R(n.trigger, "focus") ? $e(n.children) : n.children), [r, c] = k(!1);
  w(() => c(Ot(n.trigger)));
  const [a, u] = k(), d = y(() => (f) => o() && c(f.type === "focus")), _ = y(() => (f) => {
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
    const f = pt.cloneNode(!0), h = f.firstChild;
    W(f, "mouseleave", _()), W(f, "mouseover", _(), !0);
    const x = e;
    return typeof x == "function" ? T(x, f) : e = f, f.addEventListener("focus", d(), !0), f.addEventListener("blur", d(), !0), b(f, i, h), m(h, g(s, {
      role: "tooltip",
      get hidden() {
        return !r();
      },
      get style() {
        return a();
      }
    }), !1, !0), b(h, () => n.content), C((N) => {
      var M;
      const S = r(), p = `sb-tooltip-wrapper position-${(M = n.position) != null ? M : "s"}${n.arrow === !1 ? "" : " arrow"}${n.nowrap ? " nowrap" : ""}`;
      return S !== N._v$ && E(f, "aria-expanded", N._v$ = S), p !== N._v$2 && ue(f, N._v$2 = p), N;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
};
V(["mouseover"]);
export {
  qt as Accordion,
  Vt as AccordionGroup,
  jt as AccordionHeader,
  Gt as Avatar,
  Ut as AvatarBadge,
  Kt as AvatarGroup,
  Rt as Bar,
  Wt as Breadcrumbs,
  st as Button,
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
  gn as Spinner,
  mn as Tab,
  $n as TabContainer,
  hn as Tabs,
  bn as Tag,
  yn as TagGroup,
  _n as TextField,
  vn as Toast,
  An as Tooltip,
  qe as composeStyles,
  Ue as createLocalStorageSignal,
  L as getElements,
  et as getInitials,
  j as getNearestNode,
  q as getRandom,
  je as maxRandom,
  he as radioContext,
  H as runEvent,
  He as toStyleObject,
  Ht as useDarkMode,
  Ve as useMediaQuery
};
//# sourceMappingURL=solid-blocks.mjs.map
