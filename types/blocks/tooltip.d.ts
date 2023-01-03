import { Accessor, Component } from "solid-js";
import type { JSX } from "solid-js";
import "./base.css";
import "./tooltip.css";
export type TooltipTrigger = boolean | "focus" | "hover" | Accessor<boolean> | ("focus" | "hover" | Accessor<boolean>)[];
export type TooltipPosition = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";
export type TooltipProps = JSX.HTMLAttributes<HTMLSpanElement> & {
    arrow?: boolean;
    nowrap?: boolean;
    position?: TooltipPosition;
    content: JSX.Element;
    trigger?: TooltipTrigger;
};
declare module "solid-js" {
    namespace JSX {
        interface CustomCaptureEvents {
            focus: FocusEvent;
            blur: FocusEvent;
        }
    }
}
export declare const Tooltip: Component<TooltipProps>;
