import { Component, JSX } from "solid-js";
import "./base.css";
import "./select.css";
export declare type SelectProps = Omit<JSX.SelectHTMLAttributes<HTMLSelectElement>, "onchange"> & {
    label: JSX.Element;
    onchange?: (value: string) => void;
};
export declare const Select: Component<SelectProps>;
