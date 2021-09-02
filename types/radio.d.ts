import { Component, JSX } from "solid-js";
import "./base.css";
import "./radio.css";
export declare type RadioProps = JSX.HTMLAttributes<HTMLLabelElement> & JSX.HTMLAttributes<HTMLInputElement> & {
    /**
     * align the checkbox inside its label
     * can be 'left' or 'right; default is 'left'
     */
    align?: "left" | "right";
    autofocus?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    oninvalid?: JSX.EventHandler<HTMLInputElement, Event>;
    required?: boolean;
    value?: string;
};
export declare const Radio: Component<RadioProps>;
export declare type RadioGroupProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onchange"> & {
    onchange?: (value: string) => void;
    value?: string;
};
export declare const RadioGroup: Component<RadioGroupProps>;
