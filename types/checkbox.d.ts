import { Component, JSX } from "solid-js";
import "./base.css";
import "./checkbox.css";
export declare type CheckboxProps = Omit<JSX.HTMLAttributes<HTMLLabelElement> & JSX.HTMLAttributes<HTMLInputElement>, "onchange"> & {
    /**
     * align the checkbox inside its label
     * can be 'left' or 'right; default is 'left'
     */
    align?: "left" | "right";
    autofocus?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onchange?: (checked: boolean) => void;
    oninvalid?: JSX.EventHandler<HTMLInputElement, Event>;
    required?: boolean;
    switch?: boolean;
    value?: string;
};
export declare const Checkbox: Component<CheckboxProps>;
