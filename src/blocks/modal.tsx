import { Component, JSX, splitProps, Show, createMemo, mergeProps, onCleanup, onMount, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';

import "./modal.css";

export type ModalProps = JSX.HTMLAttributes<HTMLDivElement> & {
  noPortal?: boolean;
};

let modalCount = 0;

export const Modal: Component<ModalProps> = (props) => {
  const [local, containerProps] = splitProps(props, ['noPortal']);
  let modalRef;
  modalCount++;

  onMount(() => {
    const header = modalRef.querySelector('.sb-modal-header');
    if (header) { 
      modalRef.setAttribute(        
        'aria-labelledby',
        header.id || (() => (header.id = `sb-modal-header-${modalCount}`))()
      );
    }
    const body = modalRef.querySelector('.sb-modal-body');
    if (body) {
      modalRef.setAttribute(
        'aria-describedby', 
        body.id || (() => (body.id = `sb-modal-body-${modalCount}`))()
      );
    }
    modalRef.querySelector('.sb-modal-content')?.focus();
  });

  const divProps = mergeProps(
    containerProps,
    {
      role: 'dialog',
      tabIndex: -1,
      class: props.class ? `sb-modal ${props.class}` : "sb-modal"
    }
  );

  return <Show
    when={!local.noPortal}
    fallback={<div ref={modalRef} {...divProps} />}
  >
    <Portal mount={document.body}>
      <div ref={modalRef} {...divProps} />
    </Portal>
  </Show>
}

export type ModalContentProps = JSX.HTMLAttributes<HTMLDivElement>;

export const ModalContent: Component<ModalContentProps> = (props) =>
  <div {...props} class={props.class ? `sb-modal-content ${props.class}` : "sb-modal-content"} />;

export type ModalHeaderProps = JSX.HTMLAttributes<HTMLElement>;

export const ModalHeader: Component<ModalHeaderProps> = (props) =>
  <header {...props} class={props.class ? `sb-modal-header ${props.class}` : "sb-modal-header"} />;

export type ModalBodyProps = JSX.HTMLAttributes<HTMLElement>;

export const ModalBody: Component<ModalBodyProps> = (props) =>
  <main {...props} class={props.class ? `sb-modal-body ${props.class}` : "sb-modal-body"} />;

export type ModalFooterProps = JSX.HTMLAttributes<HTMLElement>;

export const ModalFooter: Component<ModalFooterProps> = (props) =>
  <footer {...props} class={props.class ? `sb-modal-footer ${props.class}` : "sb-modal-footer"} />;
