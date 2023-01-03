import { Accessor, Component, JSX } from "solid-js";
import "./base.css";
import "./modal.css";
import { WrappedElement } from "./tools";
export type WrappedModalContentProps = {
    open: Accessor<boolean>;
    /**
     * toggle
     *
     * if called with boolean argument, it will set the open state
     * according to the argument, otherwise toggle it
     */
    toggle: (open?: boolean | unknown) => void;
};
export type ModalProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> & {
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    open?: boolean;
    noPortal?: boolean;
    children: WrappedElement<WrappedModalContentProps> | JSX.Element;
};
export declare const Modal: (props: ModalProps) => JSX.Element;
export type ModalContentProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const ModalContent: Component<ModalContentProps>;
export type ModalHeaderProps = JSX.HTMLAttributes<HTMLElement>;
export declare const ModalHeader: Component<ModalHeaderProps>;
export type ModalBodyProps = JSX.HTMLAttributes<HTMLElement>;
export declare const ModalBody: Component<ModalBodyProps>;
export type ModalFooterProps = JSX.HTMLAttributes<HTMLElement>;
export declare const ModalFooter: Component<ModalFooterProps>;
