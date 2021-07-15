import { Component, JSX, splitProps, onMount } from "solid-js";

import "./select.css";

export type SelectProps = JSX.SelectHTMLAttributes<HTMLSelectElement> &
  { label: JSX.Element; onchange?: (value: string) => void; };

export const Select: Component<SelectProps> = (props) => {
  const [local, fieldProps] = splitProps(props, ['label', 'onchange'])
  let field;

  return <label class="sb-select">
    <span class="sb-select-label">{local.label}</span>
    <select
      ref={field}
      {...fieldProps}
      onchange={() => local.onchange?.(field.value)}
    />
  </label>
}
