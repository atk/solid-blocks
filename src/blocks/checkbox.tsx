import { Component, JSX, splitProps, Show, createSignal } from 'solid-js';

import "./checkbox.css";

export type CheckboxProps = JSX.HTMLAttributes<HTMLLabelElement> & JSX.HTMLAttributes<HTMLInputElement> & {
  /**
   * align the checkbox inside its label
   * can be 'left' or 'right; default is 'left'
   */
  align?: 'left' | 'right';
  autofocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  oninvalid?: JSX.EventHandler<HTMLInputElement, Event>;
  required?: boolean;
  value?: string;
}

export const Checkbox: Component<CheckboxProps> = (props) => {
  const [inputProps, content, labelProps] = splitProps(props, [
    'accessKey', 'align', 'aria-disabled', 'autofocus', 'checked', 'class',
    'disabled', 'id', 'name', 'onchange', 'onclick', 'onkeydown', 'onkeypress',
    'onkeyup', 'oninvalid', 'required', 'value'
  ], ['align', 'children']);
  const checked = createSignal(inputProps.checked)

  

  return <label class={`${content.align || "left"} sb-checkbox`} {...labelProps}>
    <Show when={content.align === 'right'}>{content.children}</Show>
    <input type="checkbox" {...inputProps} />
    <Show when={content.align !== 'right'}>{content.children}</Show>
  </label>
}