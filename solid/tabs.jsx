import { createSignal, createEffect, createMemo, mergeProps, } from "solid-js";
import { getElements, getNearestNode } from "./tools";
import "./base.css";
import "./tabs.css";
const setTabState = (tab, nr, index) => {
    const selected = nr === index;
    if (tab?.getAttribute &&
        (tab.getAttribute("aria-selected") === "true") !== selected) {
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.setAttribute("tabIndex", selected ? "-1" : "0");
    }
};
const setPanelState = (panel, nr, index) => {
    if (panel?.hasAttribute && panel.hasAttribute("hidden") === (nr === index)) {
        panel[nr === index ? "removeAttribute" : "setAttribute"]("hidden", "hidden");
    }
};
export const Tabs = (props) => {
    const [selected, setSelected] = createSignal(props.index ?? 0);
    const tabs = createMemo(() => getElements(props.children, "LI") || []);
    const panels = createMemo(() => getElements(props.children, "DIV") || []);
    createEffect(() => {
        if (tabs().length !== panels().length) {
            console.warn(`solid-blocks tabs: items count mismatch: ${tabs().length} tabs and ${panels().length}`);
        }
        const index = selected() % tabs().length;
        props.onchange?.(index);
        tabs().forEach((tab, nr) => {
            const elem = tab;
            setTabState(elem, nr, index);
        });
        panels().forEach((panel, nr) => {
            const elem = panel;
            setPanelState(elem, nr, index);
        });
    });
    const clickHandler = (ev) => {
        const tab = getNearestNode(ev.target, "LI");
        if (!tab) {
            return;
        }
        const index = Array.prototype.indexOf.call(tab.parentNode?.childNodes, tab);
        if (index !== -1) {
            setSelected(Number(index));
        }
    };
    const keyupHandler = (ev) => {
        const tab = getNearestNode(ev.target, "LI");
        const tabs = tab?.parentElement?.childNodes ?? [];
        const index = Array.prototype.indexOf.call(tabs, tab);
        if (index !== -1) {
            if (ev.key === " ") {
                setSelected(index);
            }
            else if (ev.key === "ArrowLeft" && index !== 0) {
                setSelected(index - 1);
                tabs[index - 1].focus();
            }
            else if (ev.key === "ArrowRight" && index + 1 < tabs.length) {
                setSelected(index + 1);
                tabs[index + 1].focus();
            }
        }
    };
    return (<section classList={mergeProps(props.classList ?? {}, { "sb-tabs": true })}>
      <ul role="tablist" aria-orientation={!props.vertical ? "horizontal" : "vertical"} onClick={clickHandler} onKeyUp={keyupHandler}>
        {tabs()}
      </ul>
      {panels()}
    </section>);
};
export const Tab = (props) => {
    return <li role="tab" tabindex="0" {...props}/>;
};
export const TabContainer = (props) => {
    return <div role="tabpanel" {...props}/>;
};
