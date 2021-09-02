import { Component, JSX } from "solid-js";
import "./base.css";
import "./bar.css";
export declare type BarProps = JSX.HTMLAttributes<HTMLDivElement> & {
    mount?: HTMLElement;
    placement?: "top" | "right" | "bottom" | "left";
    position?: Omit<JSX.CSSProperties["position"], "static">;
    portal?: boolean;
};
export declare const Bar: Component<BarProps>;
