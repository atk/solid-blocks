import { Component, JSX } from "solid-js";
import "./base.css";
import "./button.css";
export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "link" | "icon";
};
export declare const Button: Component<ButtonProps>;
