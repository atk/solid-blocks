import { JSX, createEffect, createSignal, onCleanup, createMemo, onMount } from "solid-js";

export const toStyleObject = (style: string | JSX.CSSProperties) => {
  if (typeof style === "object") {
    return style;
  }
  const styleObject: JSX.CSSProperties = {};
  (style || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (_, prop, value) => {
    styleObject[prop] = value;
    return "";
  });
  return styleObject;
};

export const composeStyles = (...styles) =>
  Object.assign({}, ...styles.map(toStyleObject));

export const getNearestNode = (
  target: EventTarget,
  name: string
): Node | undefined => {
  let nearest = target as Node;
  while (nearest && nearest.nodeName !== name) {
    nearest = nearest.parentNode;
  }
  return nearest;
};

export const maxRandom = 8;
let lastItem = 0;
export const getRandom = () => {
  const nextItem =
    1 + Math.floor(Math.random() * (maxRandom - (lastItem ? 1 : 0)));
  lastItem = lastItem ? nextItem + (nextItem === lastItem ? 1 : 0) : nextItem;
  return lastItem;
};

export const useDarkMode = (
  localStorageKey = "COLOR_SCHEME",
  initial = false
) => {
  const mediaQueryPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  const localStoragePrefersDark = /^(true|false)$/.test(
    window.localStorage.getItem(localStorageKey)
  )
    ? RegExp.$1 === "true"
    : null;
  const darkModeSignal = createSignal(
    (localStoragePrefersDark ?? mediaQueryPrefersDark.matches) || initial
  );

  const colorSchemeChangeHandler = (ev: MediaQueryListEvent) => {
    darkModeSignal[1](ev.matches);
  };
  mediaQueryPrefersDark.addEventListener("change", colorSchemeChangeHandler);
  onCleanup(() => {
    mediaQueryPrefersDark.removeEventListener(
      "change",
      colorSchemeChangeHandler
    );
  });

  createEffect(() => {
    const darkMode = darkModeSignal[0]();
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem(localStorageKey, darkMode.toString());
  });

  return darkModeSignal;
};

export type NodeName = string;

export const getElements = (
  children: JSX.Element,
  filter: NodeName | ((node: HTMLElement) => boolean),
  /** if the children contains a callback, you may add an array of props */
  props: any = [],
  /** you can add prepended results if you want */
  result = []
): HTMLElement[] => {
  if (!children) {
    return;
  }
  if (Array.isArray(children)) {
    children.forEach((child) => getElements(child, filter, props, result));
  } else if (typeof children === "function") {
    getElements(children.apply(null, props), filter, props, result);
  } else if (!filter) {
    result.push(children);
  } else {
    const node = children as HTMLElement;
    if (
      typeof filter === "function" ? filter(node) : node.nodeName === filter
    ) {
      result.push(children);
    }
  }
  return result;
};
