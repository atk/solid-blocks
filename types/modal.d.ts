import { Accessor, Component, JSX } from "solid-js";
import "./base.css";
import "./modal.css";
import { WrappedElement } from "./tools";
declare type WrappedModalContentProps = {
    open: Accessor<boolean>;
    /**
     * toggle
     *
     * if called with boolean argument, it will set the open state
     * according to the argument, otherwise toggle it
     */
    toggle: (open?: boolean | unknown) => void;
};
export declare type ModalProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> & {
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    open?: boolean;
    noPortal?: boolean;
    children: WrappedElement<WrappedModalContentProps> | JSX.Element;
};
export declare const Modal: (props: ModalProps) => JSX.Element;
export declare type ModalContentProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const ModalContent: Component<ModalContentProps>;
export declare type ModalHeaderProps = JSX.HTMLAttributes<HTMLElement>;
export declare const ModalHeader: Component<ModalHeaderProps>;
export declare type ModalBodyProps = JSX.HTMLAttributes<HTMLElement>;
export declare const ModalBody: Component<ModalBodyProps>;
export declare type ModalFooterProps = JSX.HTMLAttributes<HTMLElement>;
export declare const ModalFooter: Component<ModalFooterProps>;
export {};
