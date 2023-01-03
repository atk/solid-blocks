import { createMemo, createSignal, mergeProps, onCleanup, onMount, splitProps, } from "solid-js";
import { getNearestNode } from "./tools";
import "./base.css";
import "./accordion.css";
export const Accordion = (props) => {
    const [local, detailsProps] = splitProps(props, ["children", "ontoggle"]);
    const [open, setOpen] = createSignal(!!props.open);
    let detailsRef;
    const children = createMemo(() => typeof props.children === "function"
        ? props.children(open())
        : props.children);
    const toggleHandler = () => {
        if (detailsRef) {
            setOpen(detailsRef.open);
            local.ontoggle?.(detailsRef.open);
        }
    };
    onMount(() => detailsRef?.addEventListener("toggle", toggleHandler));
    onCleanup(() => detailsRef?.addEventListener("toggle", toggleHandler));
    return (<details ref={detailsRef} {...detailsProps} classList={mergeProps(props.classList ?? {}, { "sb-accordion": true })} open={!!props.open}>
      {children()}
    </details>);
};
export const AccordionHeader = (props) => (<summary classList={mergeProps(props.classList ?? {}, {
        "sb-accordion-header": true,
    })}>
    {props.children}
  </summary>);
export const AccordionGroup = (props) => {
    const [local, divProps] = splitProps(props, ["allowMultiple", "allowToggle"]);
    const clickHandler = createMemo(() => (ev) => {
        if (!ev.target) {
            return;
        }
        const details = getNearestNode(ev.target, "DETAILS");
        if (!details) {
            return;
        }
        const open = details.parentNode?.querySelectorAll("details.sb-accordion[open]") ?? [];
        if (open.length === 0) {
            return;
        }
        if (!local.allowMultiple && !details.open) {
            Array.prototype.forEach.call(open, (item) => {
                if (item !== details) {
                    item.removeAttribute("open");
                }
            });
        }
        if (!local.allowToggle && details.open && open.length === 1) {
            ev.preventDefault();
        }
    });
    const keyupHandler = createMemo(() => (ev) => {
        const details = getNearestNode(ev.target, "DETAILS");
        if (!details || !details.parentNode) {
            return;
        }
        const grouped = details.parentNode.querySelectorAll("details.sb-accordion");
        const index = Array.prototype.indexOf.call(grouped, details);
        if (index === -1) {
            return;
        }
        if (ev.key === "ArrowLeft" && index !== 0) {
            const detail = grouped[index - 1];
            const summary = detail.querySelector("summary");
            summary?.focus();
            !detail.open && summary?.click();
        }
        if (ev.key === "ArrowRight" && index + 1 < grouped.length) {
            const detail = grouped[index + 1];
            const summary = detail.querySelector("summary");
            summary?.focus();
            !detail.open && summary?.click();
        }
    });
    return (<section {...divProps} classList={mergeProps(props.classList ?? {}, {
            "sb-accordion-group": true,
        })} onclick={clickHandler()} onkeyup={keyupHandler()}/>);
};
