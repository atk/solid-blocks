import { createMemo, createRenderEffect, sharedConfig, createSignal, createRoot, onCleanup, splitProps, untrack, createEffect, onMount, mergeProps, createComponent, For, Show, createContext, useContext, Switch, Match } from "solid-js";
const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Properties = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const ChildProperties = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = {
  className: "class",
  htmlFor: "for"
};
const PropAliases = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
const DelegatedEvents = new Set(["beforeinput", "click", "dblclick", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const SVGElements = new Set([
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
]);
const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function memo(fn, equals) {
  return createMemo(fn, void 0, !equals ? {
    equals
  } : void 0);
}
function reconcileArrays(parentNode, a, b) {
  let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd)
        parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart]))
          parentNode.removeChild(a[aStart]);
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd)
          map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart, sequence = 1, t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence)
              break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index)
              parentNode.insertBefore(b[bStart++], node);
          } else
            parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else
          aStart++;
      } else
        parentNode.removeChild(a[aStart++]);
    }
  }
}
const $$EVENTS = "_$DX_DELEGATE";
function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  let node = t.content.firstChild;
  if (isSVG)
    node = node.firstChild;
  return node;
}
function delegateEvents(eventNames, document2 = window.document) {
  const e = document2[$$EVENTS] || (document2[$$EVENTS] = new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function setAttribute(node, name, value) {
  if (value == null)
    node.removeAttribute(name);
  else
    node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (value == null)
    node.removeAttributeNS(namespace, name);
  else
    node.setAttributeNS(namespace, name, value);
}
function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else
      node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    node.addEventListener(name, (e) => handler[0](handler[1], e));
  } else
    node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
  let i, len;
  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key])
      continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i], classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue)
      continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev = {}) {
  const nodeStyle = node.style;
  if (value == null || typeof value === "string")
    return nodeStyle.cssText = value;
  typeof prev === "string" && (prev = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function spread(node, accessor, isSVG, skipChildren) {
  if (typeof accessor === "function") {
    createRenderEffect((current) => spreadExpression(node, accessor(), current, isSVG, skipChildren));
  } else
    spreadExpression(node, accessor, void 0, isSVG, skipChildren);
}
function insert(parent, accessor, marker, initial) {
  if (marker !== void 0 && !initial)
    initial = [];
  if (typeof accessor !== "function")
    return insertExpression(parent, accessor, initial, marker);
  createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}) {
  let isCE, isProp, isChildProp;
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren)
        insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    if (value === prevProps[prop])
      continue;
    if (prop === "style") {
      style(node, value, prevProps[prop]);
    } else if (prop === "classList") {
      classList(node, value, prevProps[prop]);
    } else if (prop === "ref") {
      value(node);
    } else if (prop.slice(0, 3) === "on:") {
      node.addEventListener(prop.slice(3), value);
    } else if (prop.slice(0, 10) === "oncapture:") {
      node.addEventListener(prop.slice(10), value, true);
    } else if (prop.slice(0, 2) === "on") {
      const name = prop.slice(2).toLowerCase();
      const delegate = DelegatedEvents.has(name);
      addEventListener(node, name, value, delegate);
      delegate && delegateEvents([name]);
    } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
      if (isCE && !isProp && !isChildProp)
        node[toPropertyName(prop)] = value;
      else
        node[PropAliases[prop] || prop] = value;
    } else {
      const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
      if (ns)
        setAttributeNS(node, ns, prop, value);
      else
        setAttribute(node, Aliases[prop] || prop, value);
    }
    prevProps[prop] = value;
  }
}
function getNextElement(template2) {
  let node, key;
  if (!sharedConfig.context || !(node = sharedConfig.registry.get(key = getHydrationKey()))) {
    return template2.cloneNode(true);
  }
  if (sharedConfig.completed)
    sharedConfig.completed.add(node);
  sharedConfig.registry.delete(key);
  return node;
}
function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i = 0, nameLen = classNames.length; i < nameLen; i++)
    node.classList.toggle(classNames[i], value);
}
function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node;
    }
  });
  while (node !== null) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== void 0 ? handler(data, e) : handler(e);
      if (e.cancelBubble)
        return;
    }
    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}
function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
  if (!skipChildren && "children" in props) {
    createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  createRenderEffect(() => assign(node, props, isSVG, true, prevProps));
  return prevProps;
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function")
    current = current();
  if (value === current)
    return current;
  const t = typeof value, multi = marker !== void 0;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number")
      value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else
        node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else
        current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (sharedConfig.context)
      return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect(() => {
      let v = value();
      while (typeof v === "function")
        v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    if (normalizeIncomingArray(array, value, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (sharedConfig.context && current && current.length)
      return current;
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi)
        return current;
    } else {
      if (Array.isArray(current)) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else
          reconcileArrays(parent, current, array);
      } else if (current == null || current === "") {
        appendNodes(parent, array);
      } else {
        reconcileArrays(parent, multi && current || [parent.firstChild], array);
      }
    }
    current = array;
  } else if (value instanceof Node) {
    if (Array.isArray(current)) {
      if (multi)
        return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else
      parent.replaceChild(value, parent.firstChild);
    current = value;
  } else
    ;
  return current;
}
function normalizeIncomingArray(normalized, array, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i], t;
    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false)
      ;
    else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item) || dynamic;
    } else if ((t = typeof item) === "string") {
      normalized.push(document.createTextNode(item));
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function")
          item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else
      normalized.push(document.createTextNode(item.toString()));
  }
  return dynamic;
}
function appendNodes(parent, array, marker) {
  for (let i = 0, len = array.length; i < len; i++)
    parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === void 0)
    return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i)
          isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
        else
          isParent && parent.removeChild(el);
      } else
        inserted = true;
    }
  } else
    parent.insertBefore(node, marker);
  return [node];
}
function getHydrationKey() {
  const hydrate = sharedConfig.context;
  return `${hydrate.id}${hydrate.count++}`;
}
const isServer = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
  return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
function Portal(props) {
  const {
    useShadow
  } = props, marker = document.createTextNode(""), mount = props.mount || document.body;
  function renderPortal() {
    if (sharedConfig.context) {
      const [s, set] = createSignal(false);
      queueMicrotask(() => set(true));
      return () => s() && props.children;
    } else
      return () => props.children;
  }
  if (mount instanceof HTMLHeadElement) {
    const [clean, setClean] = createSignal(false);
    const cleanup = () => setClean(true);
    createRoot((dispose) => insert(mount, () => !clean() ? renderPortal()() : dispose(), null));
    onCleanup(() => {
      if (sharedConfig.context)
        queueMicrotask(cleanup);
      else
        cleanup();
    });
  } else {
    const container = createElement(props.isSVG ? "g" : "div", props.isSVG), renderRoot = useShadow && container.attachShadow ? container.attachShadow({
      mode: "open"
    }) : container;
    Object.defineProperty(container, "host", {
      get() {
        return marker.parentNode;
      }
    });
    insert(renderRoot, renderPortal());
    mount.appendChild(container);
    props.ref && props.ref(container);
    onCleanup(() => mount.removeChild(container));
  }
  return marker;
}
function Dynamic(props) {
  const [p, others] = splitProps(props, ["component"]);
  return createMemo(() => {
    const component = p.component;
    switch (typeof component) {
      case "function":
        return untrack(() => component(others));
      case "string":
        const isSvg = SVGElements.has(component);
        const el = sharedConfig.context ? getNextElement() : createElement(component, isSvg);
        spread(el, others, isSvg);
        return el;
    }
  });
}
const toStyleObject = (style2) => {
  if (typeof style2 === "object") {
    return style2;
  }
  const styleObject = {};
  (style2 || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (_, prop, value) => {
    styleObject[prop] = value;
    return "";
  });
  return styleObject;
};
const composeStyles = (...styles) => Object.assign({}, ...styles.map(toStyleObject));
const getNearestNode = (target, name) => {
  if (!target) {
    return;
  }
  let nearest = target;
  while (nearest && nearest.nodeName !== name) {
    nearest = nearest.parentNode;
  }
  return nearest;
};
const maxRandom = 8;
let lastItem = 0;
const getRandom = () => {
  const nextItem = 1 + Math.floor(Math.random() * (maxRandom - (lastItem ? 1 : 0)));
  lastItem = lastItem ? nextItem + (nextItem === lastItem ? 1 : 0) : nextItem;
  return lastItem;
};
const useMediaQuery = (query) => {
  const matcher = window.matchMedia(query);
  const [matches, setMatches] = createSignal(matcher.matches);
  const changeHandler = (ev) => setMatches(ev.matches);
  matcher.addEventListener("change", changeHandler);
  onCleanup(() => matcher.removeEventListener("change", changeHandler));
  return matches;
};
const parseStorage = (data, useJson) => useJson ? data ? JSON.parse(data) : void 0 : data != null ? data : void 0;
const putStorage = (key, data) => localStorage.setItem(key, typeof data === "string" ? data : JSON.stringify(data));
function createLocalStorageSignal(key, initialValue, useJson = false) {
  if (localStorage.getItem(key) === null && initialValue !== void 0) {
    putStorage(key, initialValue);
  }
  const [value, setValue] = createSignal(parseStorage(localStorage.getItem(key), useJson));
  createEffect(() => useJson && value() === void 0 ? localStorage.removeItem(key) : putStorage(key, value()));
  return [value, setValue];
}
const useDarkMode = (localStorageKey = "COLOR_SCHEME") => {
  const mediaQueryPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [storedPrefersDark, setStoredPrefersDark] = createLocalStorageSignal(localStorageKey, void 0, true);
  const darkMode = createMemo(() => {
    var _a;
    return (_a = storedPrefersDark()) != null ? _a : mediaQueryPrefersDark();
  });
  createEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode());
  });
  return [darkMode, setStoredPrefersDark];
};
const getElements = (children, filter, props = [], result = []) => {
  if (!children) {
    return;
  }
  if (Array.isArray(children)) {
    children.forEach((child) => getElements(child, filter, props, result));
  } else if (typeof children === "function") {
    getElements(children.apply(null, props), filter, props, result);
  } else {
    const node = children;
    if (!filter || (typeof filter === "function" ? filter(node) : node.nodeName === filter)) {
      result.push(node);
    }
  }
  return result;
};
var base = "";
var accordion = "";
const _tmpl$$i = template(`<details></details>`), _tmpl$2$8 = template(`<summary></summary>`), _tmpl$3$5 = template(`<section></section>`);
const Accordion = (props) => {
  const [local, detailsProps] = splitProps(props, ["children", "ontoggle"]);
  const [open, setOpen] = createSignal(!!props.open);
  let detailsRef;
  const children = createMemo(() => typeof props.children === "function" ? props.children(open()) : props.children);
  const toggleHandler = () => {
    var _a;
    if (detailsRef) {
      setOpen(detailsRef.open);
      (_a = local.ontoggle) == null ? void 0 : _a.call(local, detailsRef.open);
    }
  };
  onMount(() => detailsRef == null ? void 0 : detailsRef.addEventListener("toggle", toggleHandler));
  onCleanup(() => detailsRef == null ? void 0 : detailsRef.addEventListener("toggle", toggleHandler));
  return (() => {
    const _el$ = _tmpl$$i.cloneNode(true);
    const _ref$ = detailsRef;
    typeof _ref$ === "function" ? _ref$(_el$) : detailsRef = _el$;
    spread(_el$, detailsProps, false, true);
    insert(_el$, children);
    createRenderEffect((_p$) => {
      var _a;
      const _v$ = mergeProps((_a = props.classList) != null ? _a : {}, {
        "sb-accordion": true
      }), _v$2 = !!props.open;
      _p$._v$ = classList(_el$, _v$, _p$._v$);
      _v$2 !== _p$._v$2 && (_el$.open = _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
const AccordionHeader = (props) => (() => {
  const _el$2 = _tmpl$2$8.cloneNode(true);
  insert(_el$2, () => props.children);
  createRenderEffect((_$p) => {
    var _a;
    return classList(_el$2, mergeProps((_a = props.classList) != null ? _a : {}, {
      "sb-accordion-header": true
    }), _$p);
  });
  return _el$2;
})();
const AccordionGroup = (props) => {
  const [local, divProps] = splitProps(props, ["allowMultiple", "allowToggle"]);
  const clickHandler = createMemo(() => (ev) => {
    var _a, _b;
    if (!ev.target) {
      return;
    }
    const details = getNearestNode(ev.target, "DETAILS");
    if (!details) {
      return;
    }
    const open = (_b = (_a = details.parentNode) == null ? void 0 : _a.querySelectorAll("details.sb-accordion[open]")) != null ? _b : [];
    if (open.length === 0) {
      return;
    }
    if (!local.allowMultiple && !details.open) {
      Array.prototype.forEach.call(open, (item) => {
        if (item !== details) {
          item.removeAttribute("open");
        }
      });
    }
    if (!local.allowToggle && details.open && open.length === 1) {
      ev.preventDefault();
    }
  });
  const keyupHandler = createMemo(() => (ev) => {
    const details = getNearestNode(ev.target, "DETAILS");
    if (!details || !details.parentNode) {
      return;
    }
    const grouped = details.parentNode.querySelectorAll("details.sb-accordion");
    const index = Array.prototype.indexOf.call(grouped, details);
    if (index === -1) {
      return;
    }
    if (ev.key === "ArrowLeft" && index !== 0) {
      const detail = grouped[index - 1];
      const summary = detail.querySelector("summary");
      summary == null ? void 0 : summary.focus();
      !detail.open && (summary == null ? void 0 : summary.click());
    }
    if (ev.key === "ArrowRight" && index + 1 < grouped.length) {
      const detail = grouped[index + 1];
      const summary = detail.querySelector("summary");
      summary == null ? void 0 : summary.focus();
      !detail.open && (summary == null ? void 0 : summary.click());
    }
  });
  return (() => {
    const _el$3 = _tmpl$3$5.cloneNode(true);
    addEventListener(_el$3, "keyup", keyupHandler(), true);
    addEventListener(_el$3, "click", clickHandler(), true);
    spread(_el$3, divProps, false, false);
    createRenderEffect((_$p) => {
      var _a;
      return classList(_el$3, mergeProps((_a = props.classList) != null ? _a : {}, {
        "sb-accordion-group": true
      }), _$p);
    });
    return _el$3;
  })();
};
delegateEvents(["click", "keyup"]);
var avatar = "";
const _tmpl$$h = template(`<div role="figure"><img><span aria-hidden="true"></span></div>`), _tmpl$2$7 = template(`<div role="img"></div>`), _tmpl$3$4 = template(`<div role="img" aria-label="Unknown"></div>`), _tmpl$4$2 = template(`<span></span>`), _tmpl$5$1 = template(`<div role="group"></div>`);
const char = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]";
const initialsRegexp = new RegExp(`^.*?(${char})(?:.*\\s+\\S*?(${char}))?.*$`);
const getInitials = (name) => name.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g, "").replace(initialsRegexp, "$1$2").toUpperCase();
const Avatar = (props) => {
  const [local, divProps] = splitProps(props, ["classList", "children", "img", "name", "fallback"]);
  const initials = createMemo(() => local.name ? getInitials(local.name) : "");
  if (local.img) {
    return (() => {
      const _el$ = _tmpl$$h.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      spread(_el$, divProps, false, true);
      insert(_el$3, initials);
      insert(_el$, () => local.children, null);
      createRenderEffect((_p$) => {
        var _a;
        const _v$ = mergeProps((_a = local.classList) != null ? _a : {}, {
          "sb-avatar": true
        }), _v$2 = getRandom(), _v$3 = local.img, _v$4 = local.name;
        _p$._v$ = classList(_el$, _v$, _p$._v$);
        _v$2 !== _p$._v$2 && setAttribute(_el$, "data-random", _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && setAttribute(_el$2, "src", _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && setAttribute(_el$2, "alt", _p$._v$4 = _v$4);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      });
      return _el$;
    })();
  }
  if (local.name) {
    return (() => {
      const _el$4 = _tmpl$2$7.cloneNode(true);
      spread(_el$4, divProps, false, true);
      insert(_el$4, initials, null);
      insert(_el$4, () => local.children, null);
      createRenderEffect((_p$) => {
        var _a;
        const _v$5 = mergeProps((_a = local.classList) != null ? _a : {}, {
          "sb-avatar": true
        }), _v$6 = local.name, _v$7 = getRandom();
        _p$._v$5 = classList(_el$4, _v$5, _p$._v$5);
        _v$6 !== _p$._v$6 && setAttribute(_el$4, "aria-label", _p$._v$6 = _v$6);
        _v$7 !== _p$._v$7 && setAttribute(_el$4, "data-random", _p$._v$7 = _v$7);
        return _p$;
      }, {
        _v$5: void 0,
        _v$6: void 0,
        _v$7: void 0
      });
      return _el$4;
    })();
  }
  return (() => {
    const _el$5 = _tmpl$3$4.cloneNode(true);
    spread(_el$5, divProps, false, true);
    insert(_el$5, () => {
      var _a;
      return (_a = local.fallback) != null ? _a : "?";
    }, null);
    insert(_el$5, () => local.children, null);
    createRenderEffect((_p$) => {
      var _a;
      const _v$8 = mergeProps((_a = local.classList) != null ? _a : {}, {
        "sb-avatar": true
      }), _v$9 = getRandom();
      _p$._v$8 = classList(_el$5, _v$8, _p$._v$8);
      _v$9 !== _p$._v$9 && setAttribute(_el$5, "data-random", _p$._v$9 = _v$9);
      return _p$;
    }, {
      _v$8: void 0,
      _v$9: void 0
    });
    return _el$5;
  })();
};
const AvatarBadge = (props) => {
  var _a;
  const [local, spanProps] = splitProps(props, ["classList", "borderColor", "background", "style"]);
  const composedStyle = composeStyles((_a = local.style) != null ? _a : {}, {
    "border-color": local.borderColor,
    background: local.background
  });
  return (() => {
    const _el$6 = _tmpl$4$2.cloneNode(true);
    spread(_el$6, spanProps, false, false);
    style(_el$6, composedStyle);
    createRenderEffect((_$p) => {
      var _a2;
      return classList(_el$6, mergeProps((_a2 = local.classList) != null ? _a2 : {}, {
        "sb-badge": true
      }), _$p);
    });
    return _el$6;
  })();
};
const AvatarGroup = (props) => (() => {
  const _el$7 = _tmpl$5$1.cloneNode(true);
  spread(_el$7, props, false, false);
  createRenderEffect((_p$) => {
    var _a;
    const _v$10 = mergeProps((_a = props.classList) != null ? _a : {}, {
      "sb-badge": true
    }), _v$11 = Array.isArray(props.children) && props.children.length > 3;
    _p$._v$10 = classList(_el$7, _v$10, _p$._v$10);
    _v$11 !== _p$._v$11 && setAttribute(_el$7, "aria-haspopup", _p$._v$11 = _v$11);
    return _p$;
  }, {
    _v$10: void 0,
    _v$11: void 0
  });
  return _el$7;
})();
var bar = "";
const _tmpl$$g = template(`<div></div>`);
const Bar = (props) => {
  const [local, rest] = splitProps(props, ["placement", "position", "mount", "portal"]);
  const divProps = mergeProps(rest, {
    class: `${local.placement}${local.position ? " " + local.position : ""} sb-bar ${props.class ? " " + props.class : ""}`
  });
  return local.portal === false ? (() => {
    const _el$ = _tmpl$$g.cloneNode(true);
    spread(_el$, divProps, false, false);
    return _el$;
  })() : createComponent(Portal, {
    get mount() {
      return local.mount;
    },
    get children() {
      const _el$2 = _tmpl$$g.cloneNode(true);
      spread(_el$2, divProps, false, false);
      return _el$2;
    }
  });
};
var breadcrumbs = "";
const _tmpl$$f = template(`<nav class="sb-breadcrumbs"><ol></ol></nav>`), _tmpl$2$6 = template(`<li></li>`);
const Breadcrumbs = (props) => (() => {
  const _el$ = _tmpl$$f.cloneNode(true), _el$2 = _el$.firstChild;
  spread(_el$2, props, false, true);
  insert(_el$2, createComponent(For, {
    get each() {
      return Array.isArray(props.children) ? props.children : [props.children];
    },
    children: (item) => (() => {
      const _el$3 = _tmpl$2$6.cloneNode(true);
      insert(_el$3, item);
      return _el$3;
    })()
  }));
  return _el$;
})();
var button = "";
const _tmpl$$e = template(`<button></button>`);
const Button = (props) => {
  const [local, buttonProps] = splitProps(props, ["variant", "classList"]);
  return (() => {
    const _el$ = _tmpl$$e.cloneNode(true);
    spread(_el$, buttonProps, false, false);
    createRenderEffect((_$p) => {
      var _a, _b;
      return classList(_el$, mergeProps((_a = local.classList) != null ? _a : {}, {
        "sb-button": true,
        [(_b = local.variant) != null ? _b : "primary"]: true
      }), _$p);
    });
    return _el$;
  })();
};
var checkbox = "";
const _tmpl$$d = template(`<label><input type="checkbox"></label>`);
const Checkbox = (props) => {
  const [inputProps, content, labelProps] = splitProps(props, ["accessKey", "aria-disabled", "autofocus", "checked", "class", "disabled", "id", "name", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children", "onchange", "switch"]);
  const changeHandler = (ev) => {
    var _a, _b;
    return (_b = content.onchange) == null ? void 0 : _b.call(content, (_a = ev.target) == null ? void 0 : _a.checked);
  };
  return (() => {
    const _el$ = _tmpl$$d.cloneNode(true), _el$2 = _el$.firstChild;
    spread(_el$, labelProps, false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return content.align === "right";
      },
      get children() {
        return content.children;
      }
    }), _el$2);
    _el$2.addEventListener("change", changeHandler);
    spread(_el$2, inputProps, false, false);
    insert(_el$, createComponent(Show, {
      get when() {
        return content.align !== "right";
      },
      get children() {
        return content.children;
      }
    }), null);
    createRenderEffect((_p$) => {
      const _v$ = `${content.align || "left"} ${content.switch ? " switch" : ""} sb-checkbox`, _v$2 = content.switch ? "switch" : void 0;
      _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$2, "role", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
var message = "";
const _tmpl$$c = template(`<p></p>`);
const Message = (props) => {
  const [messageProps, divProps] = splitProps(props, ["type", "class", "inline"]);
  const className = createMemo(() => [...new Set(["sb-message", messageProps.type, messageProps.class, messageProps.inline && "inline"].filter(Boolean))].join(" "));
  return (() => {
    const _el$ = _tmpl$$c.cloneNode(true);
    spread(_el$, divProps, false, false);
    createRenderEffect((_p$) => {
      const _v$ = className(), _v$2 = messageProps.type === "error" ? "alert" : void 0;
      _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$, "role", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
var meter = "";
const _tmpl$$b = template(`<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>`);
const Meter = (props) => (() => {
  const _el$ = _tmpl$$b.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
  spread(_el$, props, false, true);
  setAttribute(_el$, "role", "meter");
  insert(_el$, () => props.children, null);
  createRenderEffect((_p$) => {
    var _a, _b, _c, _d, _e, _f;
    const _v$ = props.class ? `sb-meter ${props.class}` : "sb-meter", _v$2 = (_a = props.value) != null ? _a : props["aria-valuenow"], _v$3 = (_b = props.min) != null ? _b : props["aria-valuemin"], _v$4 = (_c = props.max) != null ? _c : props["aria-valuemax"], _v$5 = `0 0 ${(_d = props.max) != null ? _d : props["aria-valuemax"]} 10`, _v$6 = (_f = (_e = props.value) != null ? _e : props["aria-valuenow"]) != null ? _f : 0;
    _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
    _v$2 !== _p$._v$2 && setAttribute(_el$, "aria-valuenow", _p$._v$2 = _v$2);
    _v$3 !== _p$._v$3 && setAttribute(_el$, "aria-valuemin", _p$._v$3 = _v$3);
    _v$4 !== _p$._v$4 && setAttribute(_el$, "aria-valuemax", _p$._v$4 = _v$4);
    _v$5 !== _p$._v$5 && setAttribute(_el$2, "viewBox", _p$._v$5 = _v$5);
    _v$6 !== _p$._v$6 && setAttribute(_el$3, "width", _p$._v$6 = _v$6);
    return _p$;
  }, {
    _v$: void 0,
    _v$2: void 0,
    _v$3: void 0,
    _v$4: void 0,
    _v$5: void 0,
    _v$6: void 0
  });
  return _el$;
})();
var menu = "";
const _tmpl$$a = template(`<div><div tabindex="-1" role="menu"></div></div>`), _tmpl$2$5 = template(`<div tabindex="0" role="menuitem"></div>`), _tmpl$3$3 = template(`<p></p>`), _tmpl$4$1 = template(`<div role="group"></div>`), _tmpl$5 = template(`<div></div>`), _tmpl$6 = template(`<div tabindex="-1" role="group"></div>`);
const getFirstMenuButton = (open) => {
  let counter = 0;
  return (node) => {
    const isButton = node.nodeName === "BUTTON" || node.getAttribute("role") === "button";
    const isMenuButton = isButton && node.getAttribute("aria-haspopup") === "menu";
    const isFirstMenuButton = isMenuButton && counter++ === 0;
    if (isFirstMenuButton) {
      if (open() && node.getAttribute("aria-expanded") !== "true") {
        node.setAttribute("aria-expanded", "true");
      } else if (!open() && node.getAttribute("aria-expanded") === "true") {
        node.setAttribute("aria-expanded", "false");
      }
    }
    return isFirstMenuButton;
  };
};
const getMenuItems = () => {
  let counter = 0;
  return (node) => {
    const isButton = node.nodeName === "BUTTON" || node.getAttribute("role") === "button";
    const isMenuButton = isButton && node.getAttribute("aria-haspopup") === "menu";
    const isFirstMenuButton = isMenuButton && counter++ === 0;
    return !isFirstMenuButton;
  };
};
const Menu = (props) => {
  const [open, setOpen] = createSignal(!!props.open);
  const [local, divProps] = splitProps(props, ["open", "children", "ontoggle", "align"]);
  const opener = createMemo(() => {
    var _a;
    return ((_a = getElements(props.children, getFirstMenuButton(open), [open()])) != null ? _a : [])[0];
  });
  const menuItems = createMemo(() => {
    var _a;
    return (_a = getElements(props.children, getMenuItems(), [open()])) != null ? _a : [];
  });
  let menuRef;
  createEffect(() => {
    var _a;
    const visible = open();
    (_a = local.ontoggle) == null ? void 0 : _a.call(local, visible);
    if (visible) {
      menuItems()[0].focus();
    }
  });
  const clickHandler = (ev) => {
    const target = ev.target;
    const role = target == null ? void 0 : target.getAttribute("role");
    const button2 = opener();
    if (!ev.defaultPrevented && button2) {
      if (ev.target === button2) {
        setOpen((open2) => !open2 && button2.getAttribute("aria-disabled") !== "true");
      } else if (!button2.contains(target) && role !== "menuitemradio" && role !== "menuitemcheckbox") {
        setOpen(false);
      }
    }
  };
  onMount(() => document.addEventListener("click", clickHandler, {
    capture: false
  }));
  onCleanup(() => document.removeEventListener("click", clickHandler));
  let focusItem;
  const overHandler = (ev) => {
    var _a;
    const target = ev.target;
    if (["menuitem", "menuitemradio", "menuitemcheckbox"].includes((_a = target == null ? void 0 : target.getAttribute("role")) != null ? _a : "") && (target == null ? void 0 : target.tabIndex) !== -1 && (target == null ? void 0 : target.getAttribute("aria-disabled")) !== "true") {
      focusItem = target;
      focusItem == null ? void 0 : focusItem.focus();
    }
  };
  const moveFocus = (step) => {
    const menuItems2 = menuRef.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])');
    const currentPos = focusItem ? Array.prototype.findIndex.call(menuItems2, (item) => item === focusItem) : -1;
    const newPos = currentPos === -1 ? 1 : (menuItems2.length + step + currentPos) % menuItems2.length;
    focusItem = menuItems2[newPos];
    focusItem.focus();
  };
  const keyHandler = (ev) => {
    var _a, _b, _c;
    const target = ev.target;
    if (ev.key === "Escape" && open()) {
      setOpen(false);
      (_a = opener()) == null ? void 0 : _a.focus();
    }
    const role = target == null ? void 0 : target.getAttribute("role");
    if (ev.key === " " && ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(role != null ? role : "")) {
      target.click();
      if (role === "menuitemradio") {
        const radios = (_c = (_b = target.parentNode) == null ? void 0 : _b.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]')) != null ? _c : [];
        const currentPos = Array.prototype.indexOf.call(radios, target);
        const newPos = (radios.length + 1 + currentPos) % radios.length;
        focusItem = radios[newPos];
        focusItem == null ? void 0 : focusItem.focus();
      }
      ev.preventDefault();
    }
    if (ev.key === "ArrowDown") {
      moveFocus(1);
      ev.preventDefault();
    } else if (ev.key === "ArrowUp") {
      moveFocus(-1);
      ev.preventDefault();
    }
  };
  return (() => {
    const _el$ = _tmpl$$a.cloneNode(true), _el$2 = _el$.firstChild;
    _el$.$$keydown = keyHandler;
    const _ref$ = menuRef;
    typeof _ref$ === "function" ? _ref$(_el$) : menuRef = _el$;
    spread(_el$, divProps, false, true);
    insert(_el$, opener, _el$2);
    _el$2.$$mouseover = overHandler;
    insert(_el$2, menuItems);
    createRenderEffect((_p$) => {
      const _v$ = `sb-menu${divProps.class ? " " + divProps.class : ""}${local.align ? " " + local.align : ""}`, _v$2 = !open();
      _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (_el$2.hidden = _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
const MenuButton = (props) => createComponent(Button, mergeProps(props, {
  "aria-haspopup": "menu"
}));
const MenuItem = (props) => (() => {
  const _el$3 = _tmpl$2$5.cloneNode(true);
  spread(_el$3, props, false, false);
  return _el$3;
})();
const MenuItemGroup = (props) => {
  const [local, divProps] = splitProps(props, ["title", "children"]);
  return (() => {
    const _el$4 = _tmpl$4$1.cloneNode(true);
    spread(_el$4, divProps, false, true);
    insert(_el$4, createComponent(Show, {
      get when() {
        return typeof props.title === "string";
      },
      get fallback() {
        return local.title;
      },
      get children() {
        const _el$5 = _tmpl$3$3.cloneNode(true);
        insert(_el$5, () => local.title);
        return _el$5;
      }
    }), null);
    insert(_el$4, () => local.children, null);
    return _el$4;
  })();
};
const MenuOptionsContext = createContext([() => [], (value) => console.warn("context default!", value)]);
const MenuOption = (props) => {
  const [local, divProps] = splitProps(props, ["value", "onchange"]);
  const [value, change, type] = useContext(MenuOptionsContext);
  const selected = createMemo(() => value().includes(props.value));
  const clickHandler = createMemo(() => () => props["aria-disabled"] !== "true" && change(props.value));
  const keyHandler = createMemo(() => (ev) => {
    if (ev.key === " ") {
      ev.preventDefault();
      props["aria-disabled"] !== "true" && change(props.value);
    }
  });
  createEffect(() => {
    var _a;
    (_a = props.onchange) == null ? void 0 : _a.call(props, selected());
  });
  return (() => {
    const _el$6 = _tmpl$5.cloneNode(true);
    addEventListener(_el$6, "keypress", keyHandler());
    addEventListener(_el$6, "click", clickHandler(), true);
    spread(_el$6, divProps, false, false);
    setAttribute(_el$6, "role", type !== "checkbox" ? "menuitemradio" : "menuitemcheckbox");
    createRenderEffect((_p$) => {
      const _v$3 = selected(), _v$4 = (type === "checkbox" || !selected()) && props["aria-disabled"] !== "true" ? "0" : "-1";
      _v$3 !== _p$._v$3 && setAttribute(_el$6, "aria-selected", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && setAttribute(_el$6, "tabindex", _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$3: void 0,
      _v$4: void 0
    });
    return _el$6;
  })();
};
const MenuOptionGroup = (props) => {
  const [local, divProps] = splitProps(props, ["title", "value", "onchange", "children", "type"]);
  const [value, setValue] = createSignal(Array.isArray(local.value) ? local.value : local.value ? [local.value] : [], {
    equals: (prev, next) => prev.length === next.length && prev[0] === next[0]
  });
  const change = createMemo(() => props.type === "checkbox" ? (value2) => setValue((prev) => prev.includes(value2) ? prev.filter((item) => item !== value2) : [...prev, value2]) : (value2) => setValue((prev) => prev[0] === value2 ? prev : [value2]));
  createEffect((lastVal) => {
    if (lastVal !== local.value) {
      setValue(Array.isArray(local.value) ? local.value : local.value ? [local.value] : []);
    }
    return local.value;
  }, local.value);
  createEffect((lastVal) => {
    var _a, _b;
    const newVal = value();
    if (props.type === "checkbox" ? newVal.length === lastVal.length : newVal[0] === lastVal[0]) {
      return lastVal;
    }
    props.type === "checkbox" ? (_a = props.onchange) == null ? void 0 : _a.call(props, newVal) : (_b = props.onchange) == null ? void 0 : _b.call(props, newVal[0]);
    return newVal;
  }, value());
  return (() => {
    const _el$7 = _tmpl$6.cloneNode(true);
    spread(_el$7, divProps, false, true);
    insert(_el$7, createComponent(Show, {
      get when() {
        return typeof props.title === "string";
      },
      get fallback() {
        return local.title;
      },
      get children() {
        const _el$8 = _tmpl$3$3.cloneNode(true);
        insert(_el$8, () => local.title);
        return _el$8;
      }
    }), null);
    insert(_el$7, createComponent(MenuOptionsContext.Provider, {
      get value() {
        return [value, change(), local.type];
      },
      get children() {
        return local.children;
      }
    }), null);
    return _el$7;
  })();
};
delegateEvents(["keydown", "mouseover", "click"]);
var modal = "";
const _tmpl$$9 = template(`<div></div>`), _tmpl$2$4 = template(`<header></header>`), _tmpl$3$2 = template(`<main></main>`), _tmpl$4 = template(`<footer></footer>`);
let modalCount = 0;
const Modal = (props) => {
  const [local, containerProps] = splitProps(props, ["open", "noPortal", "children"]);
  const [open, setOpen] = createSignal(local.open);
  const toggle = (open2) => setOpen(typeof open2 === "boolean" ? open2 : (o) => !o);
  const modalContent = createMemo(() => {
    var _a;
    return (_a = getElements(local.children, (node) => node.className.indexOf("sb-modal-content") !== -1, [{
      open,
      toggle
    }])) != null ? _a : [];
  });
  const otherChildren = createMemo(() => getElements(local.children, (node) => node.className.indexOf("sb-modal-content") === -1, [{
    open,
    toggle
  }]));
  let modalRef;
  createEffect(() => open() && (modalRef == null ? void 0 : modalRef.focus(), modalRef == null ? void 0 : modalRef.scrollIntoView()));
  modalCount++;
  createEffect(() => {
    if (!modalRef) {
      return;
    }
    const header = modalRef.querySelector(".sb-modal-header");
    if (header) {
      modalRef.setAttribute("aria-labelledby", header.id || (() => header.id = `sb-modal-header-${modalCount}`)());
    }
    const body = modalRef.querySelector(".sb-modal-body");
    if (body) {
      modalRef.setAttribute("aria-describedby", body.id || (() => body.id = `sb-modal-body-${modalCount}`)());
    }
  });
  const divProps = mergeProps(containerProps, {
    role: "dialog",
    tabIndex: -1,
    class: props.class ? `sb-modal ${props.class}` : "sb-modal",
    children: modalContent(),
    onClick: createMemo(() => props.closeOnClickOutside ? (ev) => {
      const target = ev.target;
      if (!modalContent().some((content) => content == null ? void 0 : content.contains(target))) {
        toggle(false);
      }
    } : void 0)(),
    onkeyup: createMemo(() => props.closeOnEsc !== false ? (ev) => {
      console.log(ev);
      if (ev.key === "Escape" && !ev.defaultPrevented) {
        setOpen(false);
      }
    } : void 0)()
  });
  return createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return !open();
        },
        get children() {
          return otherChildren();
        }
      }), createComponent(Match, {
        get when() {
          return open() && local.noPortal;
        },
        get children() {
          return [memo(otherChildren), (() => {
            const _el$ = _tmpl$$9.cloneNode(true);
            const _ref$ = modalRef;
            typeof _ref$ === "function" ? _ref$(_el$) : modalRef = _el$;
            spread(_el$, divProps, false, false);
            return _el$;
          })()];
        }
      }), createComponent(Match, {
        get when() {
          return open() && !local.noPortal;
        },
        get children() {
          return [memo(otherChildren), createComponent(Portal, {
            get mount() {
              return document.body;
            },
            get children() {
              const _el$2 = _tmpl$$9.cloneNode(true);
              const _ref$2 = modalRef;
              typeof _ref$2 === "function" ? _ref$2(_el$2) : modalRef = _el$2;
              spread(_el$2, divProps, false, false);
              return _el$2;
            }
          })];
        }
      })];
    }
  });
};
const ModalContent = (props) => (() => {
  const _el$3 = _tmpl$$9.cloneNode(true);
  spread(_el$3, props, false, false);
  createRenderEffect(() => _el$3.className = props.class ? `sb-modal-content ${props.class}` : "sb-modal-content");
  return _el$3;
})();
const ModalHeader = (props) => (() => {
  const _el$4 = _tmpl$2$4.cloneNode(true);
  spread(_el$4, props, false, false);
  createRenderEffect(() => _el$4.className = props.class ? `sb-modal-header ${props.class}` : "sb-modal-header");
  return _el$4;
})();
const ModalBody = (props) => (() => {
  const _el$5 = _tmpl$3$2.cloneNode(true);
  spread(_el$5, props, false, false);
  createRenderEffect(() => _el$5.className = props.class ? `sb-modal-body ${props.class}` : "sb-modal-body");
  return _el$5;
})();
const ModalFooter = (props) => (() => {
  const _el$6 = _tmpl$4.cloneNode(true);
  spread(_el$6, props, false, false);
  createRenderEffect(() => _el$6.className = props.class ? `sb-modal-footer ${props.class}` : "sb-modal-footer");
  return _el$6;
})();
var progress = "";
const _tmpl$$8 = template(`<progress aria-live="polite"></progress>`);
const Progress = (props) => (() => {
  const _el$ = _tmpl$$8.cloneNode(true);
  spread(_el$, props, false, false);
  createRenderEffect((_p$) => {
    const _v$ = (props == null ? void 0 : props.value) !== (props == null ? void 0 : props.max), _v$2 = props.class ? `sb-progress ${props.class}` : "sb-progress";
    _v$ !== _p$._v$ && setAttribute(_el$, "aria-busy", _p$._v$ = _v$);
    _v$2 !== _p$._v$2 && (_el$.className = _p$._v$2 = _v$2);
    return _p$;
  }, {
    _v$: void 0,
    _v$2: void 0
  });
  return _el$;
})();
var radio = "";
const _tmpl$$7 = template(`<label><input type="radio"></label>`), _tmpl$2$3 = template(`<div role="radiogroup"></div>`);
const Radio = (props) => {
  const [inputProps, content, labelProps] = splitProps(props, ["accessKey", "align", "aria-disabled", "autofocus", "checked", "class", "disabled", "id", "name", "onchange", "onclick", "onkeydown", "onkeypress", "onkeyup", "oninvalid", "required", "value"], ["align", "children"]);
  return (() => {
    const _el$ = _tmpl$$7.cloneNode(true), _el$2 = _el$.firstChild;
    spread(_el$, labelProps, false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return content.align === "right";
      },
      get children() {
        return content.children;
      }
    }), _el$2);
    spread(_el$2, inputProps, false, false);
    insert(_el$, createComponent(Show, {
      get when() {
        return content.align !== "right";
      },
      get children() {
        return content.children;
      }
    }), null);
    createRenderEffect(() => _el$.className = `${content.align || "left"} sb-radio${inputProps.disabled ? " disabled" : ""}`);
    return _el$;
  })();
};
let radioGroups = 1;
const RadioGroup = (props) => {
  const [local, divProps] = splitProps(props, ["onchange", "value", "children"]);
  let group;
  onMount(() => {
    const items = group.querySelectorAll('input[type="radio"]');
    if (Array.prototype.some.call(items, (item) => !item.hasAttribute("name"))) {
      const name = (Array.prototype.find.call(items, (item) => item.hasAttribute("name")) || {
        name: `sb-radio-group-${radioGroups++}`
      }).name;
      Array.prototype.forEach.call(items, (item) => {
        item.setAttribute("name", name);
      });
    }
  });
  createEffect(() => {
    if (local.value) {
      const items = group.querySelectorAll('input[type="radio"]');
      Array.prototype.forEach.call(items, (item) => {
        item.checked = item.value === local.value;
      });
    }
  });
  let value = local.value;
  const changeHandler = () => {
    var _a, _b;
    const newValue = (_a = group == null ? void 0 : group.querySelector('input[type="radio"]:checked')) == null ? void 0 : _a.value;
    if (newValue && value !== newValue) {
      (_b = local.onchange) == null ? void 0 : _b.call(local, newValue);
      value = newValue;
    }
  };
  return (() => {
    const _el$3 = _tmpl$2$3.cloneNode(true);
    _el$3.$$click = changeHandler;
    _el$3.$$keyup = changeHandler;
    const _ref$ = group;
    typeof _ref$ === "function" ? _ref$(_el$3) : group = _el$3;
    spread(_el$3, divProps, false, true);
    insert(_el$3, () => local.children);
    createRenderEffect(() => _el$3.className = divProps.class ? `sb-radiogroup ${divProps.class}` : "sb-radiogroup");
    return _el$3;
  })();
};
delegateEvents(["keyup", "click"]);
var select = "";
const _tmpl$$6 = template(`<label class="sb-select"><span class="sb-select-label"></span><select></select></label>`);
const Select = (props) => {
  const [local, fieldProps] = splitProps(props, ["label", "onchange", "aria-orientation"]);
  return (() => {
    const _el$ = _tmpl$$6.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    insert(_el$2, () => local.label);
    _el$3.addEventListener("change", (ev) => {
      var _a;
      return (_a = local.onchange) == null ? void 0 : _a.call(local, ev.target.value);
    });
    spread(_el$3, fieldProps, false, false);
    createRenderEffect((_p$) => {
      const _v$ = props.disabled, _v$2 = local["aria-orientation"];
      _v$ !== _p$._v$ && _el$.classList.toggle("disabled", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$, "aria-orientation", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
var spinner = "";
const _tmpl$$5 = template(`<progress aria-busy="true" aria-live="polite"></progress>`);
const Spinner = (props) => (() => {
  const _el$ = _tmpl$$5.cloneNode(true);
  spread(_el$, props, false, false);
  createRenderEffect(() => _el$.className = props.class ? `sb-spinner ${props.class}` : "sb-spinner");
  return _el$;
})();
var tabs = "";
const _tmpl$$4 = template(`<section><ul role="tablist"></ul></section>`), _tmpl$2$2 = template(`<li role="tab" tabindex="0"></li>`), _tmpl$3$1 = template(`<div role="tabpanel"></div>`);
const setTabState = (tab, nr, index) => {
  const selected = nr === index;
  if ((tab == null ? void 0 : tab.getAttribute) && tab.getAttribute("aria-selected") === "true" !== selected) {
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.setAttribute("tabIndex", selected ? "-1" : "0");
  }
};
const setPanelState = (panel, nr, index) => {
  if ((panel == null ? void 0 : panel.hasAttribute) && panel.hasAttribute("hidden") === (nr === index)) {
    panel[nr === index ? "removeAttribute" : "setAttribute"]("hidden", "hidden");
  }
};
const Tabs = (props) => {
  var _a;
  const [selected, setSelected] = createSignal((_a = props.index) != null ? _a : 0);
  const tabs2 = createMemo(() => getElements(props.children, "LI") || []);
  const panels = createMemo(() => getElements(props.children, "DIV") || []);
  createEffect(() => {
    var _a2;
    if (tabs2().length !== panels().length) {
      console.warn(`solid-blocks tabs: items count mismatch: ${tabs2().length} tabs and ${panels().length}`);
    }
    const index = selected() % tabs2().length;
    (_a2 = props.onchange) == null ? void 0 : _a2.call(props, index);
    tabs2().forEach((tab, nr) => {
      const elem = tab;
      setTabState(elem, nr, index);
    });
    panels().forEach((panel, nr) => {
      const elem = panel;
      setPanelState(elem, nr, index);
    });
  });
  const clickHandler = (ev) => {
    var _a2;
    const tab = getNearestNode(ev.target, "LI");
    if (!tab) {
      return;
    }
    const index = Array.prototype.indexOf.call((_a2 = tab.parentNode) == null ? void 0 : _a2.childNodes, tab);
    if (index !== -1) {
      setSelected(Number(index));
    }
  };
  const keyupHandler = (ev) => {
    var _a2, _b;
    const tab = getNearestNode(ev.target, "LI");
    const tabs3 = (_b = (_a2 = tab == null ? void 0 : tab.parentElement) == null ? void 0 : _a2.childNodes) != null ? _b : [];
    const index = Array.prototype.indexOf.call(tabs3, tab);
    if (index !== -1) {
      if (ev.key === " ") {
        setSelected(index);
      } else if (ev.key === "ArrowLeft" && index !== 0) {
        setSelected(index - 1);
        tabs3[index - 1].focus();
      } else if (ev.key === "ArrowRight" && index + 1 < tabs3.length) {
        setSelected(index + 1);
        tabs3[index + 1].focus();
      }
    }
  };
  return (() => {
    const _el$ = _tmpl$$4.cloneNode(true), _el$2 = _el$.firstChild;
    _el$2.$$keyup = keyupHandler;
    _el$2.$$click = clickHandler;
    insert(_el$2, tabs2);
    insert(_el$, panels, null);
    createRenderEffect((_p$) => {
      var _a2;
      const _v$ = mergeProps((_a2 = props.classList) != null ? _a2 : {}, {
        "sb-tabs": true
      }), _v$2 = !props.vertical ? "horizontal" : "vertical";
      _p$._v$ = classList(_el$, _v$, _p$._v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$2, "aria-orientation", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
const Tab = (props) => {
  return (() => {
    const _el$3 = _tmpl$2$2.cloneNode(true);
    spread(_el$3, props, false, false);
    return _el$3;
  })();
};
const TabContainer = (props) => {
  return (() => {
    const _el$4 = _tmpl$3$1.cloneNode(true);
    spread(_el$4, props, false, false);
    return _el$4;
  })();
};
delegateEvents(["click", "keyup"]);
var tag = "";
const _tmpl$$3 = template(`<a></a>`), _tmpl$2$1 = template(`<span></span>`), _tmpl$3 = template(`<div></div>`);
const Tag = (props) => {
  const [local, tagProps] = splitProps(props, ["plain"]);
  const mergedProps = mergeProps({
    "data-random": local.plain ? void 0 : getRandom(),
    rel: props.target ? "tag noopener" : "tag"
  }, tagProps, {
    class: props.class ? `sb-tag ${props.class}` : "sb-tag"
  });
  return createComponent(Show, {
    get when() {
      return typeof mergedProps.href === "string";
    },
    get fallback() {
      return (() => {
        const _el$2 = _tmpl$2$1.cloneNode(true);
        spread(_el$2, mergedProps, false, false);
        return _el$2;
      })();
    },
    get children() {
      const _el$ = _tmpl$$3.cloneNode(true);
      spread(_el$, mergedProps, false, false);
      return _el$;
    }
  });
};
const TagGroup = (props) => {
  return (() => {
    const _el$3 = _tmpl$3.cloneNode(true);
    spread(_el$3, props, false, false);
    createRenderEffect(() => _el$3.className = props.class ? `sb-tag-group ${props.class}` : "sb-tag-group");
    return _el$3;
  })();
};
var textfield = "";
const _tmpl$$2 = template(`<label><span class="sb-textfield-label"></span></label>`);
const TextField = (props) => {
  const [local, fieldProps] = splitProps(props, ["aria-orientation", "classList", "label", "multiline", "onchange", "children"]);
  const changeHandler = createMemo(() => (ev) => {
    var _a;
    return (_a = local.onchange) == null ? void 0 : _a.call(local, ev.target.value);
  });
  return (() => {
    const _el$ = _tmpl$$2.cloneNode(true), _el$2 = _el$.firstChild;
    insert(_el$2, () => local.label);
    insert(_el$, createComponent(Dynamic, mergeProps({
      get component() {
        return props.multiline ? "textarea" : "input";
      },
      get onchange() {
        return changeHandler();
      }
    }, fieldProps, {
      get type() {
        var _a;
        return !props.multiline ? (_a = fieldProps.type) != null ? _a : "text" : void 0;
      }
    })), null);
    insert(_el$, () => local.children, null);
    createRenderEffect((_p$) => {
      var _a;
      const _v$ = mergeProps((_a = local.classList) != null ? _a : {}, {
        "sb-textfield": true
      }), _v$2 = props["aria-orientation"];
      _p$._v$ = classList(_el$, _v$, _p$._v$);
      _v$2 !== _p$._v$2 && setAttribute(_el$, "aria-orientation", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};
var toast = "";
const _tmpl$$1 = template(`<div></div>`);
const toastPositions = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"];
const toastMountPoints = toastPositions.reduce((nodes, pos) => {
  nodes[pos] = isServer ? null : document.getElementById(`sb-toast-${pos}`);
  return nodes;
}, {});
const div = document.createElement("div");
const addMountPoint = (position = "top-right") => {
  const mountPoint = div.cloneNode();
  mountPoint.id = `sb-toast-${position}`;
  toastMountPoints[position] = mountPoint;
  document.body.appendChild(mountPoint);
  return mountPoint;
};
const Toast = (props) => {
  const [local, divProps] = splitProps(props, ["timeout", "position", "children", "mount", "onhide"]);
  const mountPoint = createMemo(() => local.mount || toastMountPoints[local.position || "top-right"] || addMountPoint(local.position));
  const [visible, setVisible] = createSignal(true);
  const hide = () => setVisible(false);
  const [newChildren, update] = createSignal();
  const [children, setChildren] = createSignal(getElements(local.children, () => true, [{
    update,
    hide
  }]));
  onMount(() => {
    var _a;
    return props.timeout !== 0 && setTimeout(() => setVisible(false), (_a = props.timeout) != null ? _a : 5e3);
  });
  createEffect(() => {
    newChildren() && setChildren(getElements(newChildren(), () => true, [{
      update,
      hide
    }]));
  });
  createEffect(() => {
    var _a;
    return !visible() && ((_a = props.onhide) == null ? void 0 : _a.call(props));
  });
  createEffect(() => {
    const container = mountPoint();
    if (container === props.mount) {
      return;
    }
    if (!visible() && (container == null ? void 0 : container.childElementCount) === 0) {
      document.body.removeChild(container);
    } else if (visible() && container && !(container == null ? void 0 : container.parentNode)) {
      document.body.appendChild(container);
    }
  });
  return createComponent(Show, {
    get when() {
      return visible();
    },
    get children() {
      return createComponent(Portal, {
        get mount() {
          return mountPoint();
        },
        get children() {
          const _el$ = _tmpl$$1.cloneNode(true);
          spread(_el$, divProps, false, true);
          insert(_el$, children);
          createRenderEffect(() => _el$.className = divProps.class ? `sb-toast ${divProps.class}` : "sb-toast");
          return _el$;
        }
      });
    }
  });
};
var tooltip = "";
const _tmpl$ = template(`<span tabindex="0"></span>`), _tmpl$2 = template(`<span aria-haspopup="true"><span role="tooltip"></span></span>`);
const computeVisible = (trigger, initial) => trigger === void 0 ? false : (Array.isArray(trigger) ? trigger : [trigger]).reduce((visible, trigger2) => typeof trigger2 === "boolean" ? trigger2 : typeof trigger2 === "function" ? trigger2() : visible, initial != null ? initial : false);
const triggerHas = (trigger, event) => trigger === void 0 || trigger === event || Array.isArray(trigger) && trigger.includes(event);
const wrapText = (children) => {
  if (typeof children === "function") {
    return wrapText(children());
  }
  if (typeof children === "string") {
    return (() => {
      const _el$ = _tmpl$.cloneNode(true);
      insert(_el$, children);
      return _el$;
    })();
  }
  if (Array.isArray(children)) {
    const result = children.map((child) => typeof child === "function" ? child() : child);
    if (result.every((child) => typeof child === "string")) {
      return (() => {
        const _el$2 = _tmpl$.cloneNode(true);
        insert(_el$2, result);
        return _el$2;
      })();
    }
    return result;
  }
  return children;
};
const Tooltip = (props) => {
  let wrapperRef;
  const [local, spanProps] = splitProps(props, ["children", "position", "content", "trigger", "arrow", "nowrap"]);
  const useFocus = createMemo(() => triggerHas(local.trigger, "focus"));
  const useHover = createMemo(() => triggerHas(local.trigger, "hover"));
  const children = createMemo(() => triggerHas(local.trigger, "focus") ? wrapText(local.children) : local.children);
  const [visible, setVisible] = createSignal(false);
  createEffect(() => setVisible(computeVisible(local.trigger)));
  const [positionStyle, setPositionStyle] = createSignal();
  const focusHandler = createMemo(() => (ev) => useFocus() && setVisible(ev.type === "focus"));
  const hoverHandler = createMemo(() => (ev) => {
    var _a;
    return useHover() && setVisible(wrapperRef.contains((_a = ev.toElement) != null ? _a : ev.target));
  });
  createEffect(() => {
    if (!visible() || !(wrapperRef == null ? void 0 : wrapperRef.offsetHeight)) {
      return {
        top: "10px"
      };
    }
    setPositionStyle(local.position === "nw" ? {
      top: `${wrapperRef.offsetTop}px`,
      left: `${wrapperRef.offsetLeft}px`
    } : local.position === "n" ? {
      top: `${wrapperRef.offsetTop}px`,
      left: `${wrapperRef.offsetLeft + (wrapperRef.offsetWidth >> 1)}px`
    } : local.position === "ne" ? {
      top: `${wrapperRef.offsetTop}px`,
      left: `${wrapperRef.offsetLeft + wrapperRef.offsetWidth}px`
    } : local.position === "e" ? {
      top: `${wrapperRef.offsetTop + (wrapperRef.offsetHeight >> 1)}px`,
      left: `${wrapperRef.offsetLeft + wrapperRef.offsetWidth}px`
    } : local.position === "se" ? {
      top: `${wrapperRef.offsetTop + wrapperRef.offsetHeight}px`,
      left: `${wrapperRef.offsetLeft + wrapperRef.offsetWidth}px`
    } : local.position === "sw" ? {
      top: `${wrapperRef.offsetTop + wrapperRef.offsetHeight}px`,
      left: `${wrapperRef.offsetLeft}px`
    } : local.position === "w" ? {
      top: `${wrapperRef.offsetTop + (wrapperRef.offsetHeight >> 1)}px`,
      left: `${wrapperRef.offsetLeft}px`
    } : {
      top: `${wrapperRef.offsetTop + wrapperRef.offsetHeight}px`,
      left: `${wrapperRef.offsetLeft + (wrapperRef.offsetWidth >> 1)}px`
    });
  });
  return (() => {
    const _el$3 = _tmpl$2.cloneNode(true), _el$4 = _el$3.firstChild;
    addEventListener(_el$3, "mouseleave", hoverHandler());
    addEventListener(_el$3, "mouseover", hoverHandler(), true);
    const _ref$ = wrapperRef;
    typeof _ref$ === "function" ? _ref$(_el$3) : wrapperRef = _el$3;
    _el$3.addEventListener("focus", focusHandler(), true);
    _el$3.addEventListener("blur", focusHandler(), true);
    insert(_el$3, children, _el$4);
    spread(_el$4, spanProps, false, true);
    insert(_el$4, () => local.content);
    createRenderEffect((_p$) => {
      var _a;
      const _v$ = visible(), _v$2 = `sb-tooltip-wrapper position-${(_a = local.position) != null ? _a : "s"}${local.arrow === false ? "" : " arrow"}${local.nowrap ? " nowrap" : ""}`, _v$3 = !visible(), _v$4 = positionStyle();
      _v$ !== _p$._v$ && setAttribute(_el$3, "aria-expanded", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (_el$3.className = _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && (_el$4.hidden = _p$._v$3 = _v$3);
      _p$._v$4 = style(_el$4, _v$4, _p$._v$4);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    });
    return _el$3;
  })();
};
delegateEvents(["mouseover"]);
export { Accordion, AccordionGroup, AccordionHeader, Avatar, AvatarBadge, AvatarGroup, Bar, Breadcrumbs, Button, Checkbox, Menu, MenuButton, MenuItem, MenuItemGroup, MenuOption, MenuOptionGroup, MenuOptionsContext, Message, Meter, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, Radio, RadioGroup, Select, Spinner, Tab, TabContainer, Tabs, Tag, TagGroup, TextField, Toast, Tooltip, composeStyles, createLocalStorageSignal, getElements, getInitials, getNearestNode, getRandom, maxRandom, toStyleObject, useDarkMode, useMediaQuery };
//# sourceMappingURL=solid-blocks.es.js.map
