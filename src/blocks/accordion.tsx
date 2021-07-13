import type { Component, JSX } from "solid-js";
import { getNearestNode } from "./tools";

import "./accordion.css";

export type AccordionProps = JSX.HTMLAttributes<HTMLDetailsElement> & {
  open?: boolean;
};

export const Accordion: Component<AccordionProps> = (props) => (
  <details
    class={props.class ? `sb-accordion ${props.class}` : "sb-accordion"}
    open={!!props.open}
  >
    {props.children}
  </details>
);

export type AccordionHeaderProps = JSX.HTMLAttributes<HTMLElement>;

export const AccordionHeader: Component<AccordionHeaderProps> = (props) => (
  <summary
    class={
      props.class ? `sb-accordion-header ${props.class}` : "sb-accordion-header"
    }
  >
    {props.children}
  </summary>
);

export type AccordionGroupProps = JSX.HTMLAttributes<HTMLElement> & {
  allowMultiple?: boolean;
  allowToggle?: boolean;
};

export const AccordionGroup: Component<AccordionGroupProps> = (props) => {
  const clickHandler = props.allowMultiple
    ? null
    : (ev: MouseEvent) => {
        const details = getNearestNode(ev.target, "DETAILS") as
          | HTMLDetailsElement
          | undefined;
        if (!details) {
          return;
        }
        const open = details.parentNode.querySelectorAll("details[open]");
        if (open.length === 0) {
          return;
        }
        if (props.allowToggle || !details.open) {
          Array.prototype.forEach.call(open, (item) => {
            if (item !== details) {
              item.removeAttribute("open");
            }
          });
        }
        if (!props.allowToggle && details.open) {
          ev.preventDefault();
        }
      };
  const keyupHandler = (ev: KeyboardEvent) => {
    const details = getNearestNode(ev.target, "DETAILS");
    if (!details) {
      return;
    }
    const grouped: NodeListOf<HTMLDetailsElement> =
      details.parentNode.querySelectorAll("details.accordion");
    const index = Array.prototype.indexOf.call(grouped, details);
    if (index === -1) {
      return;
    }
    if (ev.key === "ArrowLeft" && index !== 0) {
      const summary = grouped[index - 1].querySelector("summary");
      summary.focus();
      summary.click();
    }
    if (ev.key === "ArrowRight" && index + 1 < grouped.length) {
      const summary = grouped[index + 1].querySelector("summary");
      summary.focus();
      summary.click();
    }
  };
  return (
    <section
      class="sb-accordion-group"
      onclick={clickHandler}
      onkeyup={keyupHandler}
    >
      {props.children}
    </section>
  );
};
