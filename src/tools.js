import { createEffect, createSignal, onCleanup, createMemo } from "solid-js";
export const toStyleObject = (style) => {
    if (typeof style === "object") {
        return style;
    }
    const styleObject = {};
    (style || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (_, prop, value) => {
        styleObject[prop] = value;
        return "";
    });
    return styleObject;
};
export const composeStyles = (...styles) => Object.assign({}, ...styles.map(toStyleObject));
export const getNearestNode = (target, name) => {
    if (!target) {
        return;
    }
    let nearest = target;
    while (nearest && nearest.nodeName !== name) {
        nearest = nearest.parentNode;
    }
    return nearest;
};
export const maxRandom = 8;
let lastItem = 0;
export const getRandom = () => {
    const nextItem = 1 + Math.floor(Math.random() * (maxRandom - (lastItem ? 1 : 0)));
    lastItem = lastItem ? nextItem + (nextItem === lastItem ? 1 : 0) : nextItem;
    return lastItem;
};
export const useMediaQuery = (query) => {
    const matcher = window.matchMedia(query);
    const [matches, setMatches] = createSignal(matcher.matches);
    const changeHandler = (ev) => setMatches(ev.matches);
    matcher.addEventListener('change', changeHandler);
    onCleanup(() => matcher.removeEventListener('change', changeHandler));
    return matches;
};
const parseStorage = (data, useJson) => useJson ? (data ? JSON.parse(data) : undefined) : data ?? undefined;
const putStorage = (key, data) => localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
export function createLocalStorageSignal(key, initialValue, useJson = false) {
    if (localStorage.getItem(key) === null && initialValue !== undefined) {
        putStorage(key, initialValue);
    }
    const [value, setValue] = createSignal(parseStorage(localStorage.getItem(key), useJson));
    createEffect(() => useJson && value() === undefined
        ? localStorage.removeItem(key)
        : putStorage(key, value()));
    return [value, setValue];
}
export const useDarkMode = (localStorageKey = "COLOR_SCHEME") => {
    const mediaQueryPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
    const [storedPrefersDark, setStoredPrefersDark] = createLocalStorageSignal(localStorageKey, undefined, true);
    const darkMode = createMemo(() => storedPrefersDark() ?? mediaQueryPrefersDark());
    createEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode());
    });
    return [darkMode, setStoredPrefersDark];
};
export const getElements = (children, filter, 
/** if the children contains a callback, you may add an array of props */
props = [], 
/** you can add prepended results if you want */
result = []) => {
    if (!children) {
        return;
    }
    if (Array.isArray(children)) {
        children.forEach((child) => getElements(child, filter, props, result));
    }
    else if (typeof children === "function") {
        getElements(children.apply(null, props), filter, props, result);
    }
    else {
        const node = children;
        if (!filter || (typeof filter === "function" ? filter(node) : node.nodeName === filter)) {
            result.push(node);
        }
    }
    return result;
};
