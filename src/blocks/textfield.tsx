import { Component, JSX, splitProps, mergeProps } from "solid-js";
import { Show } from "solid-js/web";
import { runEvent } from "./tools";

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

export const TextField: Component<TextFieldProps> = (props) => {
  const [local, fieldProps] = splitProps(props, [
    "aria-orientation",
    "classList",
    "label",
    "multiline",
    "onInput",
    "children",
    "setValue"
  ]);

  return (
    <label
      classList={mergeProps(local.classList ?? {}, { "sb-textfield": true })}
      aria-orientation={props["aria-orientation"]}
    >
      <span class="sb-textfield-label">{local.label}</span>
      <Show when={local.multiline} fallback={
        <input
          {...fieldProps as JSX.HTMLAttributes<HTMLInputElement>}
          onInput={(ev) => {
            runEvent(ev, local.onInput);
            local.setValue?.(ev.currentTarget.value);
          }}
        />
      }>
        <textarea
          {...fieldProps as JSX.HTMLAttributes<HTMLTextAreaElement>}
          onInput={(ev) => {
            runEvent(ev, local.onInput);
            local.setValue?.(ev.currentTarget.value); 
          }}
        />
      </Show>
      {local.children}
    </label>
  );
};
