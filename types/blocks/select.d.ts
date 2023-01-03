import { Component, JSX } from "solid-js";
import "./base.css";
import "./select.css";
export type SelectProps = JSX.SelectHTMLAttributes<HTMLSelectElement> & {
    label: JSX.Element;
    setValue?: (value: string) => void;
};
export declare const Select: Component<SelectProps>;
