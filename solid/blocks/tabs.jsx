import { createContext, createEffect, createSignal, createSelector, createUniqueId, mergeProps, on, useContext } from "solid-js";
import "./base.css";
import "./tabs.css";
export const tabsContext = createContext([]);
export const Tabs = (props) => {
    const [index, setIndex] = createSignal(props.index || 0);
    const isActive = createSelector(index);
    const indices = { tabs: -1, container: -1 };
    const id = props.id || createUniqueId();
    createEffect(on(index, (index) => props.setIndex?.(index), { defer: true }));
    return (<tabsContext.Provider value={[
            index,
            (index) => index > indices.tabs
                ? setIndex(indices.tabs)
                : index >= 0
                    ? setIndex(index)
                    : setIndex(0),
            isActive,
            (isContainer) => isContainer ? ++indices.container : ++indices.tabs,
            id
        ]}>
      <div classList={mergeProps(props.classList ?? {}, { "sb-tabs": true })}>
        {props.children}
      </div>
    </tabsContext.Provider>);
};
export const tabListContext = createContext('');
export const TabList = (props) => (<div role="tablist" {...props} aria-orientation={props["aria-orientation"]}/>);
export const Tab = (props) => {
    const [_index, setIndex, isActive, getIndex, id] = useContext(tabsContext);
    const [ref, setRef] = createSignal();
    const index = getIndex ? getIndex(false) : -1;
    const active = () => isActive && isActive(index);
    createEffect(on(() => isActive && isActive(index), (active) => active && ref()?.focus(), { defer: true }));
    return <button ref={setRef} role="tab" type="button" aria-selected={active()} tabIndex={!active() ? -1 : undefined} aria-controls={`${id}-container${index}`} id={`${id}-tab${index}`} onClick={setIndex && [(index) => setIndex(index), index]} onKeyDown={setIndex && [(index, ev) => ev.key === "Home"
                ? (ev.preventDefault(), ev.stopPropagation(), setIndex(0))
                : ev.key === "End"
                    ? (ev.preventDefault(), ev.stopPropagation(), setIndex(Infinity))
                    : ev.key === "ArrowLeft"
                        ? setIndex(index - 1)
                        : ev.key === "ArrowRight"
                            ? setIndex(index + 1)
                            : 0, index]} {...(active() ? {} : { tabIndex: -1 })} {...props}/>;
};
export const TabContainer = (props) => {
    const [_index, _setIndex, isActive, getIndex, id] = useContext(tabsContext);
    const index = getIndex ? getIndex(true) : -1;
    return <div role="tabpanel" id={`${id}-container${index}`} aria-labelledby={`${id}-tab${index}`} tabIndex={isActive && isActive(index) ? 0 : undefined} hidden={!isActive || isActive(index) ? undefined : true} {...props}/>;
};
