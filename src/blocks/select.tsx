import { Component, JSX, splitProps, onMount } from "solid-js";

import "./base.css";
import "./select.css";

export type SelectProps = Omit<
  JSX.SelectHTMLAttributes<HTMLSelectElement>,
  "onchange"
> & { label: JSX.Element; onchange?: (value: string) => void };

export const Select: Component<SelectProps> = (props) => {
  const [local, fieldProps] = splitProps(props, [
    "label",
    "onchange",
    "aria-orientation",
  ]);
  return (
    <label
      classList={{ "sb-select": true, disabled: props.disabled }}
      aria-orientation={local["aria-orientation"]}
    >
      <span class="sb-select-label">{local.label}</span>
      <select
        {...fieldProps}
        onchange={(ev) => local.onchange?.((ev.target as HTMLSelectElement).value)}
      />
    </label>
  );
};
