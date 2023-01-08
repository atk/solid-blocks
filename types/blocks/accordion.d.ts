import type { Component, JSX } from "solid-js";
import "./base.css";
import "./accordion.css";
declare module "solid-js" {
    namespace JSX {
        interface Directives {
            closeAccordion: {};
        }
    }
}
export type _C = JSX.Directives['closeAccordion'];
export type AccordionProps = JSX.HTMLAttributes<HTMLDetailsElement> & {
    open?: boolean;
    setOpen?: (isOpen: boolean) => void;
};
export declare const Accordion: Component<AccordionProps>;
export type AccordionHeaderProps = JSX.HTMLAttributes<HTMLElement>;
export declare const AccordionHeader: Component<AccordionHeaderProps>;
export type AccordionGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
    /** opening another accordion does not close the last opened one */
    allowMultiple?: boolean;
    /** the last open accordion may be closed */
    allowToggle?: boolean;
};
export declare const AccordionGroup: Component<AccordionGroupProps>;
