import type { Component, JSX } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { getNearestNode } from "./tools";
import "./tabs.css";

export type TabsProps = {
  children: (ReturnType<typeof Tab> | ReturnType<typeof TabContainer>)[];
  index?: number;
  vertical?: boolean;
  onChange?: (index: number) => void;
};

const setTabState = (tab: HTMLElement, nr: number, index: number) => {
  const selected = nr === index;
  if ((tab.getAttribute("aria-selected") === "true") !== selected) {
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.setAttribute("tabIndex", selected ? "-1" : "0");
  }
};

const setPanelState = (panel: HTMLElement, nr, index) => {
  if (panel.hasAttribute("hidden") === (nr === index)) {
    panel[nr === index ? "removeAttribute" : "setAttribute"](
      "hidden",
      "hidden"
    );
  }
};

export const Tabs: Component<TabsProps> = (props) => {
  const [selected, setSelected] = createSignal(props.index ?? 0);
  const [tabs, panels] = (props.children as JSX.Element[]).reduce<
    [JSX.Element[], JSX.Element[]]
  >(
    (items, item) => {
      const elem = item as HTMLLIElement | HTMLDivElement;
      if (elem.nodeName === "LI") {
        const nr = items[0].length;
        setTabState(elem, nr, props.index);
        elem.setAttribute("data-index", nr.toString());
        items[0].push(item);
      } else {
        setPanelState(elem, items[1].length, props.index);
        items[1].push(item);
      }
      return items;
    },
    [[], []]
  );

  createEffect(() => {
    const index = selected();
    props.onChange?.(index);
    tabs.forEach((tab, nr) => {
      const elem = tab as HTMLLIElement;
      setTabState(elem, nr, index);
    });
    panels.forEach((panel, nr) => {
      const elem = panel as HTMLDivElement;
      setPanelState(elem, nr, index);
    });
  });

  const clickHandler = (ev: MouseEvent) => {
    const tab = getNearestNode(ev.target, "LI") as HTMLLIElement | undefined;
    const index = tab?.getAttribute?.("data-index");
    if (index) {
      setSelected(Number(index));
    }
  };
  const keyupHandler = (ev: KeyboardEvent) => {
    const tab = getNearestNode(ev.target, "LI") as HTMLLIElement | undefined;
    const index = tab?.getAttribute?.("data-index");
    if (index) {
      const nr = Number(index);
      if (ev.key === " ") {
        setSelected(nr);
      } else if (ev.key === "ArrowLeft" && nr !== 0) {
        setSelected(nr - 1);
        (tabs[nr - 1] as HTMLLIElement).focus();
      } else if (ev.key === "ArrowRight" && nr < tabs.length) {
        setSelected(nr + 1);
        (tabs[nr + 1] as HTMLLIElement).focus();
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
        {tabs}
      </ul>
      {panels}
    </section>
  );
};

export const Tab: Component = (props) => {
  return <li role="tab" tabindex="0" {...props} />;
};

export const TabContainer: Component = (props) => {
  return <div role="tabpanel" {...props} />;
};
