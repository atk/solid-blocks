import { JSX, Setter } from "solid-js";
import { WrappedElement } from "./tools";
import "./base.css";
import "./toast.css";
declare const toastPositions: readonly ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"];
export declare type ToastPosition = typeof toastPositions[number];
export declare type WrappedToastContentProps = {
    update: Setter<JSX.Element | WrappedElement<WrappedToastContentProps>>;
    hide: () => void;
};
export declare type ToastProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> & {
    children: JSX.Element | WrappedElement<WrappedToastContentProps>;
    /**
     * the number of milliseconds until the toast should be hidden again;
     * 0 means never, undefined 5 seconds
     */
    timeout?: number;
    /** indicates where the toast should be rendered; default position will be top-right */
    position?: ToastPosition;
    mount?: HTMLElement;
    onhide?: () => void;
};
export declare const Toast: (props: ToastProps) => JSX.Element;
export {};
