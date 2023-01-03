import { Component, JSX } from "solid-js";
import "./base.css";
import "./textfield.css";
export type TextFieldType = "text" | "color" | "date" | "datetime-local" | "email" | "file" | "month" | "number" | "password" | "range" | "search" | "tel" | "time" | "url" | "week";
export type SingleLineTextFieldProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
    "aria-orientation"?: "horizontal" | "vertical";
    multiline?: false;
    label: JSX.Element;
    type?: TextFieldType;
    setValue?: (value: string) => void;
};
export type MultiLineTextFieldProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    "aria-orientation"?: "horizontal" | "vertical";
    multiline: true;
    label: JSX.Element;
    setValue?: (value: string) => void;
};
export type TextFieldProps = SingleLineTextFieldProps | MultiLineTextFieldProps;
export declare const TextField: Component<TextFieldProps>;
