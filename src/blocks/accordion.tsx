import { Component, createMemo, createSignal, JSX, onCleanup, onMount, splitProps } from "solid-js";
import { getNearestNode, WrappedElement } from "./tools";

import "./accordion.css";

export type AccordionProps = Omit<JSX.HTMLAttributes<HTMLDetailsElement>, 'children'> & {
  children: WrappedElement<boolean> | JSX.Element;
  open?: boolean;
  ontoggle?: (open?: boolean) => void;
};

export const Accordion: Component<AccordionProps> = (props) => {
  const [local, detailsProps] = splitProps(props, ['children', 'ontoggle']);
  const [open, setOpen] = createSignal(!!props.open)
  let detailsRef;
  const children = createMemo(() => typeof props.children === 'function'
    ? props.children(open())
    : props.children
  );

  const toggleHandler = () => {
    setOpen(detailsRef.open);
    local.ontoggle?.(detailsRef.open);
  };

  onMount(() => detailsRef?.addEventListener("toggle", toggleHandler));
  onCleanup(() => detailsRef?.addEventListener("toggle", toggleHandler));

  return (
    <details
      ref={detailsRef}
      {...detailsProps}
      class={props.class ? `sb-accordion ${props.class}` : "sb-accordion"}
      open={!!props.open}
    >
      {children()}
    </details>
  );
};

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
  const [local, divProps] = splitProps(props, ['allowMultiple', 'allowToggle']);
  const clickHandler = createMemo(() => (ev: MouseEvent) => {
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
        if (local.allowToggle || !details.open) {
          Array.prototype.forEach.call(open, (item) => {
            if (item !== details) {
              item.removeAttribute("open");
            }
          });
        }
        if (!local.allowToggle && details.open) {
          ev.preventDefault();
        }
      });
  const keyupHandler = createMemo(() => (ev: KeyboardEvent) => {
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
  });
  return (
    <section
      {...divProps}
      class={divProps.class ? `${divProps.class} sb-accordion-group` : "sb-accordion-group"}
      onclick={clickHandler()}
      onkeyup={keyupHandler()}
    />
  );
};
