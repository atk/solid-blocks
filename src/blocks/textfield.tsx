import { Component, JSX, splitProps, Show, mergeProps } from "solid-js";

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
  onchange?: (value?: string) => void;
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
  let field;
  const changeHandler = () => local.onchange?.(field?.value);

  return (
    <label
      classList={mergeProps(local.classList ?? {}, { "sb-textfield": true })}
      aria-orientation={props["aria-orientation"]}
    >
      <span class="sb-textfield-label">{local.label}</span>
      <Show
        when={props.multiline}
        fallback={
          <input
            ref={field}
            onchange={changeHandler}
            {...fieldProps}
            type={fieldProps.type ?? "text"}
          />
        }
      >
        <textarea ref={field} onchange={changeHandler} {...fieldProps} />
      </Show>
      {local.children}
    </label>
  );
};
