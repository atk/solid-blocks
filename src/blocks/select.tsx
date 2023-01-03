import { Component, JSX, splitProps, Accessor } from "solid-js";

import { runEvent } from "./tools";

import "./base.css";
import "./select.css";

export type SelectProps = JSX.SelectHTMLAttributes<HTMLSelectElement> & {
  label: JSX.Element;
  setValue?: (value: string) => void;
};

export const Select: Component<SelectProps> = (props) => {
  const [local, fieldProps] = splitProps(props, [
    "aria-orientation",
    "label",
    "onChange",
    "setValue",
    "value"
  ]);
  return (
    <label
      classList={{ "sb-select": true, disabled: props.disabled }}
      aria-orientation={local["aria-orientation"]}
    >
      <span class="sb-select-label">{local.label}</span>
      <select
        {...fieldProps}
        onChange={(ev: Event & { currentTarget: HTMLSelectElement, target: Element }): void => {
          runEvent(ev, local.onChange);
          local.setValue?.(ev.currentTarget.value);
        }}
      />
    </label>
  );
};
