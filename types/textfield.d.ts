import { Component, JSX } from "solid-js";
import "./base.css";
import "./textfield.css";
export declare type TextFieldType = "text" | "color" | "date" | "datetime-local" | "email" | "file" | "month" | "number" | "password" | "range" | "search" | "tel" | "time" | "url" | "week";
declare type TextFieldProps = {
    "aria-orientation"?: "horizontal" | "vertical";
    multiline?: boolean;
    label: JSX.Element;
    type?: TextFieldType;
    onchange?: (value: string) => void;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement> & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>, "onchange">;
export declare const TextField: Component<TextFieldProps>;
export {};
