import { createRenderEffect as k, untrack as Ae, sharedConfig as P, createSignal as N, createRoot as we, onCleanup as G, createEffect as w, createMemo as v, createContext as j, splitProps as x, useContext as q, onMount as Y, on as R, mergeProps as g, createComponent as _, For as Ne, Show as E, Switch as Ce, Match as K, createSelector as de, createUniqueId as ke } from "solid-js";
const Fe = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Pe = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Fe]), Le = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Ee = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), ne = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}), Se = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), Me = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Te(t, e, n) {
  let s = n.length, o = e.length, r = s, i = 0, l = 0, c = e[o - 1].nextSibling, u = null;
  for (; i < o || l < r; ) {
    if (e[i] === n[l]) {
      i++, l++;
      continue;
    }
    for (; e[o - 1] === n[r - 1]; )
      o--, r--;
    if (o === i) {
      const d = r < s ? l ? n[l - 1].nextSibling : n[r - l] : c;
      for (; l < r; )
        t.insertBefore(n[l++], d);
    } else if (r === l)
      for (; i < o; )
        (!u || !u.has(e[i])) && e[i].remove(), i++;
    else if (e[i] === n[r - 1] && n[l] === e[o - 1]) {
      const d = e[--o].nextSibling;
      t.insertBefore(n[l++], e[i++].nextSibling), t.insertBefore(n[--r], d), e[o] = n[r];
    } else {
      if (!u) {
        u = /* @__PURE__ */ new Map();
        let a = l;
        for (; a < r; )
          u.set(n[a], a++);
      }
      const d = u.get(e[i]);
      if (d != null)
        if (l < d && d < r) {
          let a = i, y = 1, f;
          for (; ++a < o && a < r && !((f = u.get(e[a])) == null || f !== d + y); )
            y++;
          if (y > d - l) {
            const m = e[i];
            for (; l < d; )
              t.insertBefore(n[l++], m);
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
function $(t, e, n) {
  const s = document.createElement("template");
  s.innerHTML = t;
  let o = s.content.firstChild;
  return n && (o = o.firstChild), o;
}
function U(t, e = window.document) {
  const n = e[oe] || (e[oe] = /* @__PURE__ */ new Set());
  for (let s = 0, o = t.length; s < o; s++) {
    const r = t[s];
    n.has(r) || (n.add(r), e.addEventListener(r, Oe));
  }
}
function F(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function Be(t, e, n, s) {
  s == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, s);
}
function fe(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function H(t, e, n, s) {
  if (s)
    Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    t.addEventListener(e, n[0] = (r) => o.call(t, n[1], r));
  } else
    t.addEventListener(e, n);
}
function z(t, e, n = {}) {
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
function pe(t, e, n) {
  if (!e)
    return n ? F(t, "style") : e;
  const s = t.style;
  if (typeof e == "string")
    return s.cssText = e;
  typeof n == "string" && (s.cssText = n = void 0), n || (n = {}), e || (e = {});
  let o, r;
  for (r in n)
    e[r] == null && s.removeProperty(r), delete n[r];
  for (r in e)
    o = e[r], o !== n[r] && (s.setProperty(r, o), n[r] = o);
  return n;
}
function h(t, e = {}, n, s) {
  const o = {};
  return s || k(() => o.children = D(t, e.children, o.children)), k(() => e.ref && e.ref(t)), k(() => De(t, e, n, !0, o, !0)), o;
}
function S(t, e, n) {
  return Ae(() => t(e, n));
}
function b(t, e, n, s) {
  if (n !== void 0 && !s && (s = []), typeof e != "function")
    return D(t, e, s, n);
  k((o) => D(t, e(), o, n), s);
}
function De(t, e, n, s, o = {}, r = !1) {
  e || (e = {});
  for (const i in o)
    if (!(i in e)) {
      if (i === "children")
        continue;
      o[i] = le(t, i, null, o[i], n, r);
    }
  for (const i in e) {
    if (i === "children") {
      s || D(t, e.children);
      continue;
    }
    const l = e[i];
    o[i] = le(t, i, l, o[i], n, r);
  }
}
function Ie(t) {
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
    return pe(t, n, s);
  if (e === "classList")
    return z(t, n, s);
  if (n === s)
    return s;
  if (e === "ref")
    r || n(t);
  else if (e.slice(0, 3) === "on:") {
    const u = e.slice(3);
    s && t.removeEventListener(u, s), n && t.addEventListener(u, n);
  } else if (e.slice(0, 10) === "oncapture:") {
    const u = e.slice(10);
    s && t.removeEventListener(u, s, !0), n && t.addEventListener(u, n, !0);
  } else if (e.slice(0, 2) === "on") {
    const u = e.slice(2).toLowerCase(), d = Se.has(u);
    if (!d && s) {
      const a = Array.isArray(s) ? s[0] : s;
      t.removeEventListener(u, a);
    }
    (d || n) && (H(t, u, n, d), d && U([u]));
  } else if ((c = Le.has(e)) || !o && (ne[e] || (l = Pe.has(e))) || (i = t.nodeName.includes("-")))
    e === "class" || e === "className" ? fe(t, n) : i && !l && !c ? t[Ie(e)] = n : t[ne[e] || e] = n;
  else {
    const u = o && e.indexOf(":") > -1 && Me[e.split(":")[0]];
    u ? Be(t, u, e, n) : F(t, Ee[e] || e, n);
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
  }), P.registry && !P.done && (P.done = !0, document.querySelectorAll("[id^=pl-]").forEach((s) => s.remove())); n; ) {
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
  for (P.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
    n = n();
  if (e === n)
    return n;
  const r = typeof e, i = s !== void 0;
  if (t = i && n[0] && n[0].parentNode || t, r === "string" || r === "number") {
    if (P.context)
      return n;
    if (r === "number" && (e = e.toString()), i) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data = e : l = document.createTextNode(e), n = p(t, n, s, l);
    } else
      n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || r === "boolean") {
    if (P.context)
      return n;
    n = p(t, n, s);
  } else {
    if (r === "function")
      return k(() => {
        let l = e();
        for (; typeof l == "function"; )
          l = l();
        n = D(t, l, n, s);
      }), () => n;
    if (Array.isArray(e)) {
      const l = [], c = n && Array.isArray(n);
      if (X(l, e, n, o))
        return k(() => n = D(t, l, n, s, !0)), () => n;
      if (P.context) {
        if (!l.length)
          return n;
        for (let u = 0; u < l.length; u++)
          if (l[u].parentNode)
            return n = l;
      }
      if (l.length === 0) {
        if (n = p(t, n, s), i)
          return n;
      } else
        c ? n.length === 0 ? re(t, l, s) : Te(t, n, l) : (n && p(t), re(t, l));
      n = l;
    } else if (e instanceof Node) {
      if (P.context && e.parentNode)
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
function X(t, e, n, s) {
  let o = !1;
  for (let r = 0, i = e.length; r < i; r++) {
    let l = e[r], c = n && n[r];
    if (l instanceof Node)
      t.push(l);
    else if (!(l == null || l === !0 || l === !1))
      if (Array.isArray(l))
        o = X(t, l, c) || o;
      else if (typeof l == "function")
        if (s) {
          for (; typeof l == "function"; )
            l = l();
          o = X(t, Array.isArray(l) ? l : [l], Array.isArray(c) ? c : [c]) || o;
        } else
          t.push(l), o = !0;
      else {
        const u = String(l);
        c && c.nodeType === 3 && c.data === u ? t.push(c) : t.push(document.createTextNode(u));
      }
  }
  return o;
}
function re(t, e, n = null) {
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
const J = !1, He = "http://www.w3.org/2000/svg";
function je(t, e = !1) {
  return e ? document.createElementNS(He, t) : document.createElement(t);
}
function ee(t) {
  const {
    useShadow: e
  } = t, n = document.createTextNode(""), s = t.mount || document.body;
  function o() {
    if (P.context) {
      const [r, i] = N(!1);
      return queueMicrotask(() => i(!0)), () => r() && t.children;
    } else
      return () => t.children;
  }
  if (s instanceof HTMLHeadElement) {
    const [r, i] = N(!1), l = () => i(!0);
    we((c) => b(s, () => r() ? c() : o()(), null)), G(() => {
      P.context ? queueMicrotask(l) : l();
    });
  } else {
    const r = je(t.isSVG ? "g" : "div", t.isSVG), i = e && r.attachShadow ? r.attachShadow({
      mode: "open"
    }) : r;
    Object.defineProperty(r, "_$host", {
      get() {
        return n.parentNode;
      },
      configurable: !0
    }), b(i, o()), s.appendChild(r), t.ref && t.ref(r), G(() => s.removeChild(r));
  }
  return n;
}
const qe = (t) => {
  if (typeof t == "object")
    return t;
  const e = {};
  return (t || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (n, s, o) => (e[s] = o, "")), e;
}, Ve = (...t) => Object.assign({}, ...t.map(qe)), jt = (t, e) => {
  if (!t)
    return;
  let n = t;
  for (; n && n.nodeName !== e; )
    n = n.parentNode;
  return n;
}, Ge = 8;
let O = 0;
const V = () => {
  const t = 1 + Math.floor(Math.random() * (Ge - (O ? 1 : 0)));
  return O = O ? t + (t === O ? 1 : 0) : t, O;
}, Re = (t) => {
  const e = window.matchMedia(t), [n, s] = N(e.matches), o = (r) => s(r.matches);
  return e.addEventListener("change", o), G(() => e.removeEventListener("change", o)), n;
}, Ue = (t, e) => e ? t ? JSON.parse(t) : void 0 : t != null ? t : void 0, ie = (t, e) => localStorage.setItem(t, typeof e == "string" ? e : JSON.stringify(e));
function Ke(t, e, n = !1) {
  localStorage.getItem(t) === null && e !== void 0 && ie(t, e);
  const [s, o] = N(Ue(localStorage.getItem(t), n));
  return w(
    () => n && s() === void 0 ? localStorage.removeItem(t) : ie(t, s())
  ), [s, o];
}
const qt = (t = "COLOR_SCHEME") => {
  const e = Re("(prefers-color-scheme: dark)"), [n, s] = Ke(t, void 0, !0), o = v(() => {
    var r;
    return (r = n()) != null ? r : e();
  });
  return w(() => {
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
}, B = (t, e) => {
  Array.isArray(e) ? e[1](e[0], t) : typeof e == "function" && e(t);
};
const We = /* @__PURE__ */ $("<details></details>"), Qe = /* @__PURE__ */ $("<summary></summary>"), Xe = /* @__PURE__ */ $("<div></div>"), ge = j([]), Vt = (t) => {
  const [e, n] = x(t, ["setOpen"]), [s, o] = N(), [r, i, l, c] = q(ge), u = i ? i() : 0;
  return r && l && c && (Y(() => {
    t.open && c(r.allowMultiple ? l() + 1 : u);
  }), w(R([l, s], ([d, a]) => {
    a && r.allowMultiple === !1 && d !== u && (a.open = !1);
  }, {
    defer: !0
  }))), (() => {
    const d = We.cloneNode(!0);
    return S(o, d, () => !0), h(d, g(n, {
      get classList() {
        var a;
        return g((a = t.classList) != null ? a : {}, {
          "sb-accordion": !0
        });
      },
      get onClick() {
        return r && l ? (a) => {
          var y;
          B(a, a.currentTarget), ((y = s()) == null ? void 0 : y.open) && !r.allowToggle && (!r.allowMultiple || l() === 1) && a.preventDefault();
        } : t.onClick;
      },
      onToggle: (a) => {
        var y;
        r && l && c && (r.allowMultiple === !0 ? c(l() + (a.currentTarget.open ? 1 : -1)) : a.currentTarget.open && c(u)), B(a, a.currentTarget), (y = e.setOpen) == null || y.call(e, a.currentTarget.open);
      },
      get open() {
        return !!t.open;
      }
    }), !1, !1), d;
  })();
}, Gt = (t) => (() => {
  const e = Qe.cloneNode(!0);
  return h(e, g(t, {
    get classList() {
      var n;
      return g((n = t.classList) != null ? n : {}, {
        "sb-accordion-header": !0
      });
    }
  }), !1, !1), e;
})(), Rt = (t) => {
  const [e, n] = x(t, ["allowMultiple", "allowToggle"]);
  let s = -1;
  const [o, r] = N(0);
  return _(ge.Provider, {
    value: [e, () => ++s, o, r],
    get children() {
      const i = Xe.cloneNode(!0);
      return h(i, g(n, {
        get classList() {
          var l;
          return g((l = t.classList) != null ? l : {}, {
            "sb-accordion-group": !0
          });
        }
      }), !1, !1), i;
    }
  });
};
const Je = /* @__PURE__ */ $('<div role="figure"><img><span aria-hidden="true"></span></div>'), Ze = /* @__PURE__ */ $('<div role="img"></div>'), Ye = /* @__PURE__ */ $('<div role="img" aria-label="Unknown"></div>'), ze = /* @__PURE__ */ $("<span></span>"), et = /* @__PURE__ */ $("<div></div>"), ce = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]", tt = new RegExp(`^.*?(${ce})(?:.*\\s+\\S*?(${ce}))?.*$`), nt = (t) => t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g, "").replace(tt, "$1$2").toUpperCase(), Ut = (t) => {
  const [e, n] = x(t, ["classList", "children", "img", "name", "fallback"]), s = v(() => e.name ? nt(e.name) : "");
  return e.img ? (() => {
    const o = Je.cloneNode(!0), r = o.firstChild, i = r.nextSibling;
    return h(o, g({
      get classList() {
        var l;
        return g((l = e.classList) != null ? l : {}, {
          "sb-avatar": !0
        });
      },
      get ["data-random"]() {
        return V();
      }
    }, n), !1, !0), b(i, s), b(o, () => e.children, null), k((l) => {
      const c = e.img, u = e.name;
      return c !== l._v$ && F(r, "src", l._v$ = c), u !== l._v$2 && F(r, "alt", l._v$2 = u), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })() : e.name ? (() => {
    const o = Ze.cloneNode(!0);
    return h(o, g({
      get classList() {
        var r;
        return g((r = e.classList) != null ? r : {}, {
          "sb-avatar": !0
        });
      },
      get ["aria-label"]() {
        return e.name;
      },
      get ["data-random"]() {
        return V();
      }
    }, n), !1, !0), b(o, s, null), b(o, () => e.children, null), o;
  })() : (() => {
    const o = Ye.cloneNode(!0);
    return h(o, g({
      get classList() {
        var r;
        return g((r = e.classList) != null ? r : {}, {
          "sb-avatar": !0
        });
      },
      get ["data-random"]() {
        return V();
      }
    }, n), !1, !0), b(o, () => {
      var r;
      return (r = e.fallback) != null ? r : "?";
    }, null), b(o, () => e.children, null), o;
  })();
}, Kt = (t) => {
  var o;
  const [e, n] = x(t, ["classList", "borderColor", "background", "style"]), s = Ve((o = e.style) != null ? o : {}, {
    "border-color": e.borderColor,
    background: e.background
  });
  return (() => {
    const r = ze.cloneNode(!0);
    return h(r, g({
      get classList() {
        var i;
        return g((i = e.classList) != null ? i : {}, {
          "sb-badge": !0
        });
      }
    }, n, {
      style: s
    }), !1, !1), r;
  })();
}, Wt = (t) => (() => {
  const e = et.cloneNode(!0);
  return h(e, g(t, {
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
const ae = /* @__PURE__ */ $("<div></div>"), Qt = (t) => {
  const [e, n] = x(t, ["placement", "position", "mount", "portal"]), s = g(n, {
    class: `${e.placement}${e.position ? " " + e.position : ""} sb-bar ${t.class ? " " + t.class : ""}`
  });
  return e.portal === !1 ? (() => {
    const o = ae.cloneNode(!0);
    return h(o, s, !1, !1), o;
  })() : _(ee, {
    get mount() {
      return e.mount;
    },
    get children() {
      const o = ae.cloneNode(!0);
      return h(o, s, !1, !1), o;
    }
  });
};
const ot = /* @__PURE__ */ $('<nav class="sb-breadcrumbs"><ol></ol></nav>'), st = /* @__PURE__ */ $("<li></li>"), Xt = (t) => (() => {
  const e = ot.cloneNode(!0), n = e.firstChild;
  return h(n, t, !1, !0), b(n, _(Ne, {
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
    return h(s, g(n, {
      get classList() {
        var o, r;
        return g((o = e.classList) != null ? o : {}, {
          "sb-button": !0,
          [(r = e.variant) != null ? r : "primary"]: !0
        });
      }
    }), !1, !1), s;
  })();
};
const it = /* @__PURE__ */ $('<label><input type="checkbox"></label>'), Jt = (t) => {
  const [e, n, s] = x(t, ["accessKey", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children", "onChange", "setChecked", "switch"]);
  return (() => {
    const o = it.cloneNode(!0), r = o.firstChild;
    h(o, g({
      get class() {
        return `${n.align || "left"} ${n.switch ? " switch" : ""} sb-checkbox`;
      }
    }, s), !1, !0), b(o, _(E, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), r);
    const i = t.ref;
    return typeof i == "function" ? S(i, r) : t.ref = r, h(r, g({
      get role() {
        return n.switch ? "switch" : void 0;
      }
    }, e, {
      onChange: (l) => {
        var c;
        B(l, n.onChange), (c = n.setChecked) == null || c.call(n, l.currentTarget.checked);
      }
    }), !1, !1), b(o, _(E, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), o;
  })();
};
const ct = /* @__PURE__ */ $("<p></p>"), Zt = (t) => {
  const [e, n] = x(t, ["type", "class", "inline"]), s = v(() => [...new Set(["sb-message", e.type, e.class, e.inline && "inline"].filter(Boolean))].join(" "));
  return (() => {
    const o = ct.cloneNode(!0);
    return h(o, g({
      get class() {
        return s();
      },
      get role() {
        return e.type === "error" ? "alert" : void 0;
      }
    }, n), !1, !1), o;
  })();
};
const at = /* @__PURE__ */ $('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'), Yt = (t) => (() => {
  const e = at.cloneNode(!0), n = e.firstChild, s = n.firstChild;
  return h(e, g(t, {
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
  }), !1, !0), b(e, () => t.children, null), k((o) => {
    var l, c, u;
    const r = `0 0 ${(l = t.max) != null ? l : t["aria-valuemax"]} 10`, i = (u = (c = t.value) != null ? c : t["aria-valuenow"]) != null ? u : 0;
    return r !== o._v$ && F(n, "viewBox", o._v$ = r), i !== o._v$2 && F(s, "width", o._v$2 = i), o;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), e;
})();
const ut = /* @__PURE__ */ $('<div><div tabindex="-1" role="menu"></div></div>'), dt = /* @__PURE__ */ $('<div tabindex="0"></div>'), me = /* @__PURE__ */ $("<p></p>"), he = /* @__PURE__ */ $("<div></div>"), ft = /* @__PURE__ */ $('<div tabindex="-1" role="group"></div>'), gt = (t) => {
  let e = 0;
  return (n) => {
    const r = (n.nodeName === "BUTTON" || n.getAttribute("role") === "button") && n.getAttribute("aria-haspopup") === "menu" && e++ === 0;
    return r && (t() && n.getAttribute("aria-expanded") !== "true" ? n.setAttribute("aria-expanded", "true") : !t() && n.getAttribute("aria-expanded") === "true" && n.setAttribute("aria-expanded", "false")), r;
  };
}, mt = () => {
  let t = 0;
  return (e) => !((e.nodeName === "BUTTON" || e.getAttribute("role") === "button") && e.getAttribute("aria-haspopup") === "menu" && t++ === 0);
}, zt = (t) => {
  const [e, n] = N(!!t.open), [s, o] = x(t, ["open", "children", "ontoggle", "align"]), r = v(() => {
    var f;
    return ((f = M(t.children, gt(e), [e()])) != null ? f : [])[0];
  }), i = v(() => {
    var f;
    return (f = M(t.children, mt(), [e()])) != null ? f : [];
  });
  let l;
  w(() => {
    var m;
    const f = e();
    (m = s.ontoggle) == null || m.call(s, f), f && i()[0].focus();
  });
  const c = (f) => {
    const m = f.target, A = m == null ? void 0 : m.getAttribute("role"), C = r();
    !f.defaultPrevented && C && (f.target === C ? n((L) => !L && C.getAttribute("aria-disabled") !== "true") : !C.contains(m) && A !== "menuitemradio" && A !== "menuitemcheckbox" && n(!1));
  };
  Y(() => !J && document.addEventListener("click", c, {
    capture: !1
  })), G(() => !J && document.removeEventListener("click", c));
  let u;
  const d = (f) => {
    var A;
    const m = f.target;
    ["menuitem", "menuitemradio", "menuitemcheckbox"].includes((A = m == null ? void 0 : m.getAttribute("role")) != null ? A : "") && (m == null ? void 0 : m.tabIndex) !== -1 && (m == null ? void 0 : m.getAttribute("aria-disabled")) !== "true" && (u = m, u == null || u.focus());
  }, a = (f) => {
    const m = l.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'), A = u ? Array.prototype.findIndex.call(m, (L) => L === u) : -1, C = A === -1 ? 1 : (m.length + f + A) % m.length;
    u = m[C], u.focus();
  }, y = (f) => {
    var C, L, I;
    const m = f.target;
    f.key === "Escape" && e() && (n(!1), (C = r()) == null || C.focus());
    const A = m == null ? void 0 : m.getAttribute("role");
    if (f.key === " " && ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(A != null ? A : "")) {
      if (m.click(), A === "menuitemradio") {
        const T = (I = (L = m.parentNode) == null ? void 0 : L.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]')) != null ? I : [], ve = Array.prototype.indexOf.call(T, m), xe = (T.length + 1 + ve) % T.length;
        u = T[xe], u == null || u.focus();
      }
      f.preventDefault();
    }
    f.key === "ArrowDown" ? (a(1), f.preventDefault()) : f.key === "ArrowUp" && (a(-1), f.preventDefault());
  };
  return (() => {
    const f = ut.cloneNode(!0), m = f.firstChild, A = l;
    return typeof A == "function" ? S(A, f) : l = f, h(f, g(o, {
      get class() {
        return `sb-menu${o.class ? " " + o.class : ""}${s.align ? " " + s.align : ""}`;
      },
      onkeydown: y
    }), !1, !0), b(f, r, m), m.$$mouseover = d, b(m, i), k(() => m.hidden = !e()), f;
  })();
}, en = (t) => _(rt, g(t, {
  "aria-haspopup": "menu"
})), tn = (t) => (() => {
  const e = dt.cloneNode(!0);
  return h(e, g(t, {
    role: "menuitem"
  }), !1, !1), e;
})(), nn = (t) => {
  const [e, n] = x(t, ["title", "children"]);
  return (() => {
    const s = he.cloneNode(!0);
    return h(s, g(n, {
      role: "group"
    }), !1, !0), b(s, _(E, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const o = me.cloneNode(!0);
        return b(o, () => e.title), o;
      }
    }), null), b(s, () => e.children, null), s;
  })();
}, $e = j([() => [], (t) => console.warn("context default!", t)]), on = (t) => {
  const [e, n] = x(t, ["value", "onchange"]), [s, o, r] = q($e), i = v(() => s().includes(t.value)), l = v(() => () => t["aria-disabled"] !== "true" && o(t.value)), c = v(() => (u) => {
    u.key === " " && (u.preventDefault(), t["aria-disabled"] !== "true" && o(t.value));
  });
  return w(() => {
    var u;
    (u = t.onchange) == null || u.call(t, i());
  }), (() => {
    const u = he.cloneNode(!0);
    return h(u, g({
      get ["aria-selected"]() {
        return i();
      },
      get tabIndex() {
        return (r === "checkbox" || !i()) && t["aria-disabled"] !== "true" ? "0" : "-1";
      }
    }, n, {
      role: r !== "checkbox" ? "menuitemradio" : "menuitemcheckbox",
      get onclick() {
        return l();
      },
      get onkeypress() {
        return c();
      }
    }), !1, !1), u;
  })();
}, sn = (t) => {
  const [e, n] = x(t, ["title", "value", "onchange", "children", "type"]), [s, o] = N(Array.isArray(e.value) ? e.value : e.value ? [e.value] : [], {
    equals: (i, l) => i.length === l.length && i[0] === l[0]
  }), r = v(() => t.type === "checkbox" ? (i) => o((l) => l.includes(i) ? l.filter((c) => c !== i) : [...l, i]) : (i) => o((l) => l[0] === i ? l : [i]));
  return w((i) => (i !== e.value && o(Array.isArray(e.value) ? e.value : e.value ? [e.value] : []), e.value), e.value), w((i) => {
    var c, u;
    const l = s();
    return (t.type === "checkbox" ? l.length === (i == null ? void 0 : i.length) : l[0] === (i == null ? void 0 : i[0])) ? i : (t.type === "checkbox" ? (c = t.onchange) == null || c.call(t, l) : (u = t.onchange) == null || u.call(t, l[0]), l);
  }, s()), (() => {
    const i = ft.cloneNode(!0);
    return h(i, n, !1, !0), b(i, _(E, {
      get when() {
        return typeof t.title == "string";
      },
      get fallback() {
        return e.title;
      },
      get children() {
        const l = me.cloneNode(!0);
        return b(l, () => e.title), l;
      }
    }), null), b(i, _($e.Provider, {
      get value() {
        return [s, r(), e.type];
      },
      get children() {
        return e.children;
      }
    }), null), i;
  })();
};
U(["mouseover"]);
const Z = /* @__PURE__ */ $("<div></div>"), ht = /* @__PURE__ */ $("<header></header>"), $t = /* @__PURE__ */ $("<main></main>"), bt = /* @__PURE__ */ $("<footer></footer>");
let W = 0;
const ln = (t) => {
  const [e, n] = x(t, ["open", "noPortal", "children"]), [s, o] = N(e.open), r = (d) => o(typeof d == "boolean" ? d : (a) => !a), i = v(() => {
    var d;
    return (d = M(e.children, (a) => a.className.indexOf("sb-modal-content") !== -1, [{
      open: s,
      toggle: r
    }])) != null ? d : [];
  }), l = v(() => M(e.children, (d) => d.className.indexOf("sb-modal-content") === -1, [{
    open: s,
    toggle: r
  }]));
  let c;
  w(() => s() && (c == null || c.focus(), c == null ? void 0 : c.scrollIntoView())), W++, w(() => {
    if (!c)
      return;
    const d = c.querySelector(".sb-modal-header");
    d && c.setAttribute("aria-labelledby", d.id || (() => d.id = `sb-modal-header-${W}`)());
    const a = c.querySelector(".sb-modal-body");
    a && c.setAttribute("aria-describedby", a.id || (() => a.id = `sb-modal-body-${W}`)());
  });
  const u = g(n, {
    role: "dialog",
    tabIndex: -1,
    class: t.class ? `sb-modal ${t.class}` : "sb-modal",
    children: i(),
    onClick: v(() => t.closeOnClickOutside ? (d) => {
      const a = d.target;
      i().some((y) => y == null ? void 0 : y.contains(a)) || r(!1);
    } : void 0)(),
    onkeyup: v(() => t.closeOnEsc !== !1 ? (d) => {
      console.log(d), d.key === "Escape" && !d.defaultPrevented && o(!1);
    } : void 0)()
  });
  return _(Ce, {
    get children() {
      return [_(K, {
        get when() {
          return !s();
        },
        get children() {
          return l();
        }
      }), _(K, {
        get when() {
          return s() && e.noPortal;
        },
        get children() {
          return [v(l), (() => {
            const d = Z.cloneNode(!0), a = c;
            return typeof a == "function" ? S(a, d) : c = d, h(d, u, !1, !1), d;
          })()];
        }
      }), _(K, {
        get when() {
          return s() && !e.noPortal;
        },
        get children() {
          return [v(l), _(ee, {
            get mount() {
              return document.body;
            },
            get children() {
              const d = Z.cloneNode(!0), a = c;
              return typeof a == "function" ? S(a, d) : c = d, h(d, u, !1, !1), d;
            }
          })];
        }
      })];
    }
  });
}, rn = (t) => (() => {
  const e = Z.cloneNode(!0);
  return h(e, g(t, {
    get class() {
      return t.class ? `sb-modal-content ${t.class}` : "sb-modal-content";
    }
  }), !1, !1), e;
})(), cn = (t) => (() => {
  const e = ht.cloneNode(!0);
  return h(e, g(t, {
    get class() {
      return t.class ? `sb-modal-header ${t.class}` : "sb-modal-header";
    }
  }), !1, !1), e;
})(), an = (t) => (() => {
  const e = $t.cloneNode(!0);
  return h(e, g(t, {
    get class() {
      return t.class ? `sb-modal-body ${t.class}` : "sb-modal-body";
    }
  }), !1, !1), e;
})(), un = (t) => (() => {
  const e = bt.cloneNode(!0);
  return h(e, g(t, {
    get class() {
      return t.class ? `sb-modal-footer ${t.class}` : "sb-modal-footer";
    }
  }), !1, !1), e;
})();
const yt = /* @__PURE__ */ $('<progress aria-live="polite"></progress>'), dn = (t) => (() => {
  const e = yt.cloneNode(!0);
  return h(e, g({
    get ["aria-busy"]() {
      return (t == null ? void 0 : t.value) !== (t == null ? void 0 : t.max);
    }
  }, t, {
    get class() {
      return t.class ? `sb-progress ${t.class}` : "sb-progress";
    }
  }), !1, !1), e;
})();
const _t = /* @__PURE__ */ $('<label><input type="radio"></label>'), vt = /* @__PURE__ */ $('<div role="radiogroup"></div>'), be = j([]), fn = (t) => {
  const [e, n, s] = x(t, ["accessKey", "align", "aria-disabled", "aria-invalid", "autofocus", "checked", "class", "disabled", "id", "name", "onchange", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "checked", "onChange", "setChecked", "children"]), [o, r, i] = q(be);
  return (() => {
    const l = _t.cloneNode(!0), c = l.firstChild;
    h(l, g({
      get class() {
        return `${n.align || "left"} sb-radio${e.disabled ? " disabled" : ""}`;
      }
    }, s), !1, !0), b(l, _(E, {
      get when() {
        return n.align === "right";
      },
      get children() {
        return n.children;
      }
    }), c);
    const u = t.ref;
    return typeof u == "function" ? S(u, c) : t.ref = c, h(c, g(e, {
      get checked() {
        return i ? i(e.value || "") : n.checked;
      },
      onChange: (d) => {
        var a;
        B(d, n.onChange), (a = n.setChecked) == null || a.call(n, d.currentTarget.checked), d.currentTarget.checked && (r == null || r(t.value || ""));
      }
    }), !1, !1), b(l, _(E, {
      get when() {
        return n.align !== "right";
      },
      get children() {
        return n.children;
      }
    }), null), l;
  })();
}, gn = (t) => {
  const [e, n] = x(t, ["setValue", "value", "children"]), [s, o] = N(typeof t.value == "function" ? t.value() : "");
  return w(() => o(typeof t.value == "function" ? t.value() : "")), w(R([s], ([r]) => {
    var i;
    return (i = e.setValue) == null ? void 0 : i.call(e, r);
  }, {
    defer: !0
  })), _(be.Provider, {
    get value() {
      return [s, o, de(s)];
    },
    get children() {
      const r = vt.cloneNode(!0);
      return h(r, g(n, {
        get class() {
          return n.class ? `sb-radiogroup ${n.class}` : "sb-radiogroup";
        }
      }), !1, !0), b(r, () => e.children), r;
    }
  });
};
const xt = /* @__PURE__ */ $('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'), mn = (t) => {
  const [e, n] = x(t, ["aria-orientation", "label", "onChange", "setValue", "value"]);
  return (() => {
    const s = xt.cloneNode(!0), o = s.firstChild, r = o.nextSibling;
    return b(o, () => e.label), h(r, g(n, {
      onChange: (i) => {
        var l;
        B(i, e.onChange), (l = e.setValue) == null || l.call(e, i.currentTarget.value);
      }
    }), !1, !1), k((i) => {
      const l = !!t.disabled, c = e["aria-orientation"];
      return l !== i._v$ && s.classList.toggle("disabled", i._v$ = l), c !== i._v$2 && F(s, "aria-orientation", i._v$2 = c), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const At = /* @__PURE__ */ $('<progress aria-busy="true" aria-live="polite"></progress>'), hn = (t) => (() => {
  const e = At.cloneNode(!0);
  return h(e, g({
    get class() {
      return t.class ? `sb-spinner ${t.class}` : "sb-spinner";
    }
  }, t), !1, !1), e;
})();
const wt = /* @__PURE__ */ $("<div></div>"), Nt = /* @__PURE__ */ $('<div role="tablist"></div>'), Ct = /* @__PURE__ */ $('<button role="tab" type="button"></button>'), kt = /* @__PURE__ */ $('<div role="tabpanel"></div>'), te = j([]), $n = (t) => {
  const [e, n] = N(t.index || 0), s = de(e), o = {
    tabs: -1,
    container: -1
  }, r = t.id || ke();
  return w(R(e, (i) => {
    var l;
    return (l = t.setIndex) == null ? void 0 : l.call(t, i);
  }, {
    defer: !0
  })), _(te.Provider, {
    value: [e, (i) => i > o.tabs ? n(o.tabs) : i >= 0 ? n(i) : n(0), s, (i) => i ? ++o.container : ++o.tabs, r],
    get children() {
      const i = wt.cloneNode(!0);
      return b(i, () => t.children), k((l) => {
        var c;
        return z(i, g((c = t.classList) != null ? c : {}, {
          "sb-tabs": !0
        }), l);
      }), i;
    }
  });
}, bn = j(""), yn = (t) => (() => {
  const e = Nt.cloneNode(!0);
  return h(e, g(t, {
    get ["aria-orientation"]() {
      return t["aria-orientation"];
    }
  }), !1, !1), e;
})(), _n = (t) => {
  const [e, n, s, o, r] = q(te), [i, l] = N(), c = o ? o(!1) : -1, u = () => s && s(c);
  return w(R(() => s && s(c), (d) => {
    var a;
    return d && ((a = i()) == null ? void 0 : a.focus());
  }, {
    defer: !0
  })), (() => {
    const d = Ct.cloneNode(!0);
    return H(d, "keydown", n && [(a, y) => y.key === "Home" ? (y.preventDefault(), y.stopPropagation(), n(0)) : y.key === "End" ? (y.preventDefault(), y.stopPropagation(), n(1 / 0)) : y.key === "ArrowLeft" ? n(a - 1) : y.key === "ArrowRight" ? n(a + 1) : 0, c], !0), H(d, "click", n && [(a) => n(a), c], !0), S(l, d), F(d, "aria-controls", `${r}-container${c}`), F(d, "id", `${r}-tab${c}`), h(d, g({
      get ["aria-selected"]() {
        return u();
      },
      get tabIndex() {
        return u() ? void 0 : -1;
      }
    }, () => u() ? {} : {
      tabIndex: -1
    }, t), !1, !1), d;
  })();
}, vn = (t) => {
  const [e, n, s, o, r] = q(te), i = o ? o(!0) : -1;
  return (() => {
    const l = kt.cloneNode(!0);
    return F(l, "id", `${r}-container${i}`), F(l, "aria-labelledby", `${r}-tab${i}`), h(l, g({
      get tabIndex() {
        return s && s(i) ? 0 : void 0;
      },
      get hidden() {
        return !s || s(i) ? void 0 : !0;
      }
    }, t), !1, !1), l;
  })();
};
U(["click", "keydown"]);
const Ft = /* @__PURE__ */ $("<a></a>"), Pt = /* @__PURE__ */ $("<span></span>"), Lt = /* @__PURE__ */ $("<div></div>"), xn = (t) => {
  const [e, n] = x(t, ["plain"]), s = g({
    "data-random": e.plain ? void 0 : V(),
    rel: t.target ? "tag noopener" : "tag"
  }, n, {
    class: t.class ? `sb-tag ${t.class}` : "sb-tag"
  });
  return _(E, {
    get when() {
      return typeof s.href == "string";
    },
    get fallback() {
      return (() => {
        const o = Pt.cloneNode(!0);
        return h(o, s, !1, !1), o;
      })();
    },
    get children() {
      const o = Ft.cloneNode(!0);
      return h(o, s, !1, !1), o;
    }
  });
}, An = (t) => (() => {
  const e = Lt.cloneNode(!0);
  return h(e, g(t, {
    get class() {
      return t.class ? `sb-tag-group ${t.class}` : "sb-tag-group";
    }
  }), !1, !1), e;
})();
const Et = /* @__PURE__ */ $("<textarea></textarea>"), St = /* @__PURE__ */ $('<label><span class="sb-textfield-label"></span></label>'), Mt = /* @__PURE__ */ $("<input>"), wn = (t) => {
  const [e, n] = x(t, ["aria-orientation", "classList", "label", "multiline", "onInput", "children", "setValue"]);
  return (() => {
    const s = St.cloneNode(!0), o = s.firstChild;
    return b(o, () => e.label), b(s, _(E, {
      get when() {
        return e.multiline;
      },
      get fallback() {
        return (() => {
          const r = Mt.cloneNode(!0);
          return h(r, g(n, {
            onInput: (i) => {
              var l;
              B(i, e.onInput), (l = e.setValue) == null || l.call(e, i.currentTarget.value);
            }
          }), !1, !1), r;
        })();
      },
      get children() {
        const r = Et.cloneNode(!0);
        return h(r, g(n, {
          onInput: (i) => {
            var l;
            B(i, e.onInput), (l = e.setValue) == null || l.call(e, i.currentTarget.value);
          }
        }), !1, !1), r;
      }
    }), null), b(s, () => e.children, null), k((r) => {
      var c;
      const i = g((c = e.classList) != null ? c : {}, {
        "sb-textfield": !0
      }), l = t["aria-orientation"];
      return r._v$ = z(s, i, r._v$), l !== r._v$2 && F(s, "aria-orientation", r._v$2 = l), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
};
const Tt = /* @__PURE__ */ $("<div></div>"), Bt = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"], ye = Bt.reduce((t, e) => (t[e] = J ? null : document.getElementById(`sb-toast-${e}`), t), {}), pt = document.createElement("div"), Dt = (t = "top-right") => {
  const e = pt.cloneNode();
  return e.id = `sb-toast-${t}`, ye[t] = e, document.body.appendChild(e), e;
}, Nn = (t) => {
  const [e, n] = x(t, ["timeout", "position", "children", "mount", "onhide"]), s = v(() => e.mount || ye[e.position || "top-right"] || Dt(e.position)), [o, r] = N(!0), i = () => r(!1), [l, c] = N(), [u, d] = N(M(e.children, () => !0, [{
    update: c,
    hide: i
  }]));
  return Y(() => {
    var a;
    return t.timeout !== 0 && setTimeout(() => r(!1), (a = t.timeout) != null ? a : 5e3);
  }), w(() => {
    l() && d(M(l(), () => !0, [{
      update: c,
      hide: i
    }]));
  }), w(() => {
    var a;
    return !o() && ((a = t.onhide) == null ? void 0 : a.call(t));
  }), w(() => {
    const a = s();
    a !== t.mount && (!o() && (a == null ? void 0 : a.childElementCount) === 0 ? document.body.removeChild(a) : o() && a && !(a != null && a.parentNode) && document.body.appendChild(a));
  }), _(E, {
    get when() {
      return o();
    },
    get children() {
      return _(ee, {
        get mount() {
          return s();
        },
        get children() {
          const a = Tt.cloneNode(!0);
          return h(a, g(n, {
            get class() {
              return n.class ? `sb-toast ${n.class}` : "sb-toast";
            }
          }), !1, !0), b(a, u), a;
        }
      });
    }
  });
};
const ue = /* @__PURE__ */ $('<span tabindex="0"></span>'), It = /* @__PURE__ */ $('<span aria-haspopup="true"><span></span></span>'), Ot = (t, e) => t === void 0 ? !1 : (Array.isArray(t) ? t : [t]).reduce((n, s) => typeof s == "boolean" ? s : typeof s == "function" ? s() : n, e != null ? e : !1), Q = (t, e) => t === void 0 || t === e || Array.isArray(t) && t.includes(e), _e = (t) => {
  if (typeof t == "function")
    return _e(t());
  if (typeof t == "string")
    return (() => {
      const e = ue.cloneNode(!0);
      return b(e, t), e;
    })();
  if (Array.isArray(t)) {
    const e = t.map((n) => typeof n == "function" ? n() : n);
    return e.every((n) => typeof n == "string") ? (() => {
      const n = ue.cloneNode(!0);
      return b(n, e), n;
    })() : e;
  }
  return t;
}, Cn = (t) => {
  let e;
  const [n, s] = x(t, ["children", "position", "content", "trigger", "arrow", "nowrap"]), o = v(() => Q(n.trigger, "focus")), r = v(() => Q(n.trigger, "hover")), i = v(() => Q(n.trigger, "focus") ? _e(n.children) : n.children), [l, c] = N(!1);
  w(() => c(Ot(n.trigger)));
  const [u, d] = N(), a = v(() => (f) => o() && c(f.type === "focus")), y = v(() => (f) => {
    var m;
    return r() && c(e.contains((m = f.toElement) != null ? m : f.target));
  });
  return w(() => {
    if (!l() || !(e != null && e.offsetHeight))
      return {
        top: "10px"
      };
    d(n.position === "nw" ? {
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
    const f = It.cloneNode(!0), m = f.firstChild;
    H(f, "mouseleave", y()), H(f, "mouseover", y(), !0);
    const A = e;
    return typeof A == "function" ? S(A, f) : e = f, f.addEventListener("focus", a(), !0), f.addEventListener("blur", a(), !0), b(f, i, m), h(m, g(s, {
      role: "tooltip",
      get hidden() {
        return !l();
      },
      get style() {
        return u();
      }
    }), !1, !0), b(m, () => n.content), k((C) => {
      var T;
      const L = l(), I = `sb-tooltip-wrapper position-${(T = n.position) != null ? T : "s"}${n.arrow === !1 ? "" : " arrow"}${n.nowrap ? " nowrap" : ""}`;
      return L !== C._v$ && F(f, "aria-expanded", C._v$ = L), I !== C._v$2 && fe(f, C._v$2 = I), C;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
};
U(["mouseover"]);
export {
  Vt as Accordion,
  Rt as AccordionGroup,
  Gt as AccordionHeader,
  Ut as Avatar,
  Kt as AvatarBadge,
  Wt as AvatarGroup,
  Qt as Bar,
  Xt as Breadcrumbs,
  rt as Button,
  Jt as Checkbox,
  zt as Menu,
  en as MenuButton,
  tn as MenuItem,
  nn as MenuItemGroup,
  on as MenuOption,
  sn as MenuOptionGroup,
  $e as MenuOptionsContext,
  Zt as Message,
  Yt as Meter,
  ln as Modal,
  an as ModalBody,
  rn as ModalContent,
  un as ModalFooter,
  cn as ModalHeader,
  dn as Progress,
  fn as Radio,
  gn as RadioGroup,
  mn as Select,
  hn as Spinner,
  _n as Tab,
  vn as TabContainer,
  yn as TabList,
  $n as Tabs,
  xn as Tag,
  An as TagGroup,
  wn as TextField,
  Nn as Toast,
  Cn as Tooltip,
  Ve as composeStyles,
  Ke as createLocalStorageSignal,
  M as getElements,
  nt as getInitials,
  jt as getNearestNode,
  V as getRandom,
  Ge as maxRandom,
  be as radioContext,
  B as runEvent,
  bn as tabListContext,
  te as tabsContext,
  qe as toStyleObject,
  qt as useDarkMode,
  Re as useMediaQuery
};
//# sourceMappingURL=solid-blocks.mjs.map
