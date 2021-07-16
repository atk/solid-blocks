import {
  createSignal,
  createEffect,
  Component,
  JSX,
  createMemo,
  For,
} from "solid-js";
import { getNearestNode } from "./tools";
import "./tabs.css";

export type TabsProps = {
  children: (ReturnType<typeof Tab> | ReturnType<typeof TabContainer> | null)[];
  index?: number;
  vertical?: boolean;
  onchange?: (index: number) => void;
};

const setTabState = (tab: HTMLElement, nr: number, index: number) => {
  const selected = nr === index;
  if (
    tab?.getAttribute &&
    (tab.getAttribute("aria-selected") === "true") !== selected
  ) {
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.setAttribute("tabIndex", selected ? "-1" : "0");
  }
};

const setPanelState = (panel: HTMLElement, nr, index) => {
  if (panel?.hasAttribute && panel.hasAttribute("hidden") === (nr === index)) {
    panel[nr === index ? "removeAttribute" : "setAttribute"](
      "hidden",
      "hidden"
    );
  }
};

type TabChild =
  | HTMLElement
  | HTMLElement[]
  | null
  | (() =>
      | HTMLElement
      | HTMLElement[]
      | null
      | (() => HTMLElement | HTMLElement[] | null));

const getElements = (
  children: TabChild,
  nodeName: string,
  result = []
): HTMLElement[] => {
  if (!children) {
    return;
  }
  if (Array.isArray(children)) {
    children.forEach((child) => getElements(child, nodeName, result));
  } else if (typeof children === "function") {
    getElements(children(), nodeName, result);
  } else if (children.nodeName === nodeName) {
    result.push(children);
  }
  return result;
};

export const Tabs: Component<TabsProps> = (props) => {
  const [selected, setSelected] = createSignal(props.index ?? 0);
  const tabs = createMemo(() => getElements(props.children as TabChild, "LI"));
  const panels = createMemo(() =>
    getElements(props.children as TabChild, "DIV")
  );

  createEffect(() => {
    if (tabs().length !== panels().length) {
      console.warn(`solid-blocks tabs: items count mismatch: ${tabs().length} tabs and ${panels().length}`);
    }
    const index = selected() % tabs().length;
    props.onchange?.(index);
    tabs().forEach((tab, nr) => {
      const elem = tab as HTMLLIElement;
      setTabState(elem, nr, index);
    });
    panels().forEach((panel, nr) => {
      const elem = panel as HTMLDivElement;
      setPanelState(elem, nr, index);
    });
  });

  const clickHandler = (ev: MouseEvent) => {
    const tab = getNearestNode(ev.target, "LI") as HTMLLIElement | undefined;
    if (!tab) {
      return;
    }
    const index = Array.prototype.indexOf.call(tab.parentNode.childNodes, tab);
    if (index !== -1) {
      setSelected(Number(index));
    }
  };
  const keyupHandler = (ev: KeyboardEvent) => {
    const tab = getNearestNode(ev.target, "LI") as HTMLLIElement | undefined;
    const tabs = tab.parentElement.childNodes;
    const index = Array.prototype.indexOf.call(tabs, tab);
    if (index !== -1) {
      if (ev.key === " ") {
        setSelected(index);
      } else if (ev.key === "ArrowLeft" && index !== 0) {
        setSelected(index - 1);
        (tabs[index - 1] as HTMLLIElement).focus();
      } else if (ev.key === "ArrowRight" && index + 1 < tabs.length) {
        setSelected(index + 1);
        (tabs[index + 1] as HTMLLIElement).focus();
      }
    }
  };

  return (
    <section class="sb-tabs">
      <ul
        role="tablist"
        aria-orientation={!props.vertical ? "horizontal" : "vertical"}
        onClick={clickHandler}
        onKeyUp={keyupHandler}
      >
        {tabs()}
      </ul>
      {panels()}
    </section>
  );
};

export const Tab: Component = (props) => {
  return <li role="tab" tabindex="0" {...props} />;
};

export const TabContainer: Component = (props) => {
  return <div role="tabpanel" {...props} />;
};
