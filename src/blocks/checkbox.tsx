import { Component, JSX, splitProps, Show } from "solid-js";

import { runEvent } from "./tools";

import "./base.css";
import "./checkbox.css";

export type CheckboxProps = JSX.HTMLAttributes<HTMLInputElement> & {
  /**
   * align the checkbox inside its label
   * can be 'left' or 'right; default is 'left'
   */
  align?: "left" | "right";
  autofocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  setChecked?: (checked: boolean) => void;
  oninvalid?: JSX.EventHandler<HTMLInputElement, Event>;
  required?: boolean;
  switch?: boolean;
  value?: string;
};

export const Checkbox: Component<CheckboxProps> = (props) => {
  const [inputProps, content, labelProps] = splitProps(
    props,
    [
      "accessKey",
      "aria-disabled",
      "aria-invalid",
      "autofocus",
      "checked",
      "class",
      "disabled",
      "id",
      "name",
      "onclick",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "oninvalid",
      "required",
      "value",
    ],
    ["align", "children", "onChange", "setChecked", "switch"]
  );
  
  return (
    <label
      class={`${content.align || "left"} ${
        content.switch ? " switch" : ""
      } sb-checkbox`}
      {...labelProps as JSX.HTMLAttributes<HTMLLabelElement>}
    >
      <Show when={content.align === "right"}>{content.children}</Show>
      <input
        ref={props.ref}
        type="checkbox"
        role={content.switch ? "switch" : undefined}
        {...inputProps}
        onChange={(ev): void => {
          runEvent(ev, content.onChange);
          content.setChecked?.(ev.currentTarget.checked);
        }}
      />
      <Show when={content.align !== "right"}>{content.children}</Show>
    </label>
  );
};
