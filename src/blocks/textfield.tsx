import { Component, createMemo, JSX, splitProps, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import "./base.css";
import "./textfield.css";

export type TextFieldType =
  | "text"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "number"
  | "password"
  | "range"
  | "search"
  | "tel"
  | "time"
  | "url"
  | "week";

type TextFieldProps = {
  "aria-orientation"?: "horizontal" | "vertical";
  multiline?: boolean;
  label: JSX.Element;
  type?: TextFieldType;
  onchange?: (value: string) => void;
} & Omit<
  JSX.InputHTMLAttributes<HTMLInputElement> &
    JSX.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onchange"
>;

export const TextField: Component<TextFieldProps> = (props) => {
  const [local, fieldProps] = splitProps(props, [
    "aria-orientation",
    "classList",
    "label",
    "multiline",
    "onchange",
    "children",
  ]);
  const changeHandler = createMemo(() => (ev: InputEvent) => 
    local.onchange?.((ev.target as HTMLInputElement | HTMLTextAreaElement).value));

  return (
    <label
      classList={mergeProps(local.classList ?? {}, { "sb-textfield": true })}
      aria-orientation={props["aria-orientation"]}
    >
      <span class="sb-textfield-label">{local.label}</span>
      <Dynamic
        component={props.multiline ? 'textarea' : 'input'}
        onchange={changeHandler()}
        {...fieldProps}
        type={!props.multiline ? fieldProps.type ?? 'text' : undefined}
      />      
      {local.children}
    </label>
  );
};
