import {
  createSignal,
  createEffect,
  Component,
  JSX,
  createMemo,
  mergeProps,
} from "solid-js";
import { getElements, getNearestNode } from "./tools";
import "./base.css";
import "./tabs.css";

export type TabsProps = Omit<JSX.HTMLAttributes<HTMLElement>, 'onchange'> & {
  index?: number;
  vertical?: boolean;
  onchange?: (index?: number) => void;
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

const setPanelState = (panel: HTMLElement, nr: number, index: number) => {
  if (panel?.hasAttribute && panel.hasAttribute("hidden") === (nr === index)) {
    panel[nr === index ? "removeAttribute" : "setAttribute"](
      "hidden",
      "hidden"
    );
  }
};

export const Tabs: Component<TabsProps> = (props) => {
  const [selected, setSelected] = createSignal(props.index ?? 0);
  const tabs = createMemo(() => getElements(props.children, "LI") || []);
  const panels = createMemo(() => getElements(props.children, "DIV") || []);

  createEffect(() => {
    if (tabs().length !== panels().length) {
      console.warn(
        `solid-blocks tabs: items count mismatch: ${tabs().length} tabs and ${
          panels().length
        }`
      );
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
    const index = Array.prototype.indexOf.call(tab.parentNode?.childNodes, tab);
    if (index !== -1) {
      setSelected(Number(index));
    }
  };
  const keyupHandler = (ev: KeyboardEvent) => {
    const tab = getNearestNode(ev.target, "LI") as HTMLLIElement | undefined;
    const tabs = tab?.parentElement?.childNodes ?? [];
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
    <section classList={mergeProps(props.classList ?? {}, { "sb-tabs": true })}>
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

export type TabProps = JSX.HTMLAttributes<HTMLLIElement>;

export const Tab: Component<TabProps> = (props) => {
  return <li role="tab" tabindex="0" {...props} />;
};

export type TabContainerProps = JSX.HTMLAttributes<HTMLDivElement>;

export const TabContainer: Component<TabContainerProps> = (props) => {
  return <div role="tabpanel" {...props} />;
};

type x = ReturnType<typeof TabContainer>;
