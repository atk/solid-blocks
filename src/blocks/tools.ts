import { JSX, createEffect, createSignal, onCleanup, createMemo, Accessor, Setter } from "solid-js";

export type WrappedElement<P> = (props: P) => JSX.Element;

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

type MediaQueryItem = 
  |'all'
  | 'print'
  | 'screen' 
  | `(${'min-' | 'max-' | ''}${
    | 'aspect-ratio'
    | 'color'
    | 'color-gamut'
    | 'color-index'
    | 'display-mode'
    | 'grid'
    | 'inverted-colors'
    | 'height'
    | 'orientation'
    | 'pointer'
    | `prefers-${'color-scheme' | 'contrast' | 'reduced-motion' | 'reduced-transparency'}`
    | 'resolution'
    | 'scan'
    | 'width'
  }: ${string})`;
type MediaQueryOperator = ' and ' | ' not ' | ' only ' | ', ';
type MediaQueryString = 
  | MediaQueryItem
  | `${MediaQueryItem}${MediaQueryOperator}${MediaQueryItem}`

export const useMediaQuery = (query: MediaQueryString): Accessor<boolean> => {
  const matcher = window.matchMedia(query);
  const [matches, setMatches] = createSignal(matcher.matches);

  const changeHandler = (ev: MediaQueryListEvent) => setMatches(ev.matches);
  matcher.addEventListener('change', changeHandler);
  onCleanup(() => matcher.removeEventListener('change', changeHandler));

  return matches
}

const parseStorage = (data, useJson) => useJson ? data ? JSON.parse(data) : undefined : data;

export function createLocalStorageSignal(key, initialValue?: string, useJson?: false): [Accessor<string>, Setter<string>];
export function createLocalStorageSignal<T extends unknown>(
  key,
  initialValue: T | undefined,
  useJson: true
): [Accessor<T>, Setter<T>];
export function createLocalStorageSignal(key, initialValue, useJson = false) {
  if (localStorage.getItem(key) === null && initialValue !== undefined) {
    localStorage.setItem(key, useJson ? JSON.stringify(initialValue) : initialValue);
  }
  const [value, setValue] = createSignal(parseStorage(localStorage.getItem(key), useJson));
  
  createEffect(() =>
    useJson && value() === undefined
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, useJson ? JSON.stringify(value()) : value())
  );
  
  return [value, setValue];
}

export const useDarkMode = (localStorageKey = "COLOR_SCHEME") => {
  const mediaQueryPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [storedPrefersDark, setStoredPrefersDark] = createLocalStorageSignal<boolean>(localStorageKey, undefined, true);
  const darkMode = createMemo(() => storedPrefersDark() ?? mediaQueryPrefersDark());

  createEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode())
  });

  return [darkMode, setStoredPrefersDark];
};

export type NodeName = string;

export const getElements = (
  children: JSX.Element | ((...args: unknown[]) => JSX.Element),
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
