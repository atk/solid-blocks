import { Component, JSX } from "solid-js";
import { WrappedElement } from "./tools";
import "./base.css";
import "./accordion.css";
export declare type AccordionProps = Omit<JSX.HTMLAttributes<HTMLDetailsElement>, "children"> & {
    children: WrappedElement<boolean> | JSX.Element;
    open?: boolean;
    ontoggle?: (open: boolean) => void;
};
export declare const Accordion: Component<AccordionProps>;
export declare type AccordionHeaderProps = JSX.HTMLAttributes<HTMLElement>;
export declare const AccordionHeader: Component<AccordionHeaderProps>;
export declare type AccordionGroupProps = JSX.HTMLAttributes<HTMLElement> & {
    allowMultiple?: boolean;
    allowToggle?: boolean;
};
export declare const AccordionGroup: Component<AccordionGroupProps>;
