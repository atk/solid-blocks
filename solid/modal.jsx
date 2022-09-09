import { splitProps, createEffect, createSignal, createMemo, mergeProps, Switch, Match, } from "solid-js";
import { Portal } from "solid-js/web";
import "./base.css";
import "./modal.css";
import { getElements } from "./tools";
let modalCount = 0;
export const Modal = (props) => {
    const [local, containerProps] = splitProps(props, [
        "open",
        "noPortal",
        "children",
    ]);
    const [open, setOpen] = createSignal(local.open);
    const toggle = (open) => setOpen(typeof open === "boolean" ? open : (o) => !o);
    const modalContent = createMemo(() => getElements(local.children, (node) => node.className.indexOf("sb-modal-content") !== -1, [{ open, toggle }]) ?? []);
    const otherChildren = createMemo(() => getElements(local.children, (node) => node.className.indexOf("sb-modal-content") === -1, [{ open, toggle }]));
    let modalRef;
    createEffect(() => open() && (modalRef?.focus(), modalRef?.scrollIntoView()));
    modalCount++;
    createEffect(() => {
        if (!modalRef) {
            return;
        }
        const header = modalRef.querySelector(".sb-modal-header");
        if (header) {
            modalRef.setAttribute("aria-labelledby", header.id || (() => (header.id = `sb-modal-header-${modalCount}`))());
        }
        const body = modalRef.querySelector(".sb-modal-body");
        if (body) {
            modalRef.setAttribute("aria-describedby", body.id || (() => (body.id = `sb-modal-body-${modalCount}`))());
        }
    });
    const divProps = mergeProps(containerProps, {
        role: "dialog",
        tabIndex: -1,
        class: props.class ? `sb-modal ${props.class}` : "sb-modal",
        children: modalContent(),
        onClick: createMemo(() => props.closeOnClickOutside
            ? (ev) => {
                const target = ev.target;
                if (!modalContent().some((content) => content?.contains(target))) {
                    toggle(false);
                }
            }
            : undefined)(),
        onkeyup: createMemo(() => props.closeOnEsc !== false
            ? (ev) => {
                console.log(ev);
                if (ev.key === "Escape" && !ev.defaultPrevented) {
                    setOpen(false);
                }
            }
            : undefined)(),
    });
    return (<Switch>
      <Match when={!open()}>{otherChildren()}</Match>
      <Match when={open() && local.noPortal}>
        <>
          {otherChildren()}
          <div ref={modalRef} {...divProps}/>
        </>
      </Match>
      <Match when={open() && !local.noPortal}>
        <>
          {otherChildren()}
          <Portal mount={document.body}>
            <div ref={modalRef} {...divProps}/>
          </Portal>
        </>
      </Match>
    </Switch>);
};
export const ModalContent = (props) => (<div {...props} class={props.class ? `sb-modal-content ${props.class}` : "sb-modal-content"}/>);
export const ModalHeader = (props) => (<header {...props} class={props.class ? `sb-modal-header ${props.class}` : "sb-modal-header"}/>);
export const ModalBody = (props) => (<main {...props} class={props.class ? `sb-modal-body ${props.class}` : "sb-modal-body"}/>);
export const ModalFooter = (props) => (<footer {...props} class={props.class ? `sb-modal-footer ${props.class}` : "sb-modal-footer"}/>);
