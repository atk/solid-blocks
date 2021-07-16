import { Component, JSX, splitProps, Show } from 'solid-js';

import "./checkbox.css";

export type CheckboxProps = Omit<JSX.HTMLAttributes<HTMLLabelElement> & JSX.HTMLAttributes<HTMLInputElement>, 'onchange'> & {
  /**
   * align the checkbox inside its label
   * can be 'left' or 'right; default is 'left'
   */
  align?: 'left' | 'right';
  autofocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onchange?: (checked: boolean) => void;
  oninvalid?: JSX.EventHandler<HTMLInputElement, Event>;
  required?: boolean;
  switch?: boolean;
  value?: string;
}

export const Checkbox: Component<CheckboxProps> = (props) => {
  const [inputProps, content, labelProps] = splitProps(props, [
    'accessKey', 'aria-disabled', 'autofocus', 'checked', 'class',
    'disabled', 'id', 'name', 'onclick', 'onkeydown', 'onkeypress',
    'onkeyup', 'oninvalid', 'required', 'value'
  ], ['align', 'children', 'onchange', 'switch']);

  let input;
  const changeHandler = () => content.onchange?.(input?.checked);

  return <label class={`${content.align || "left"} ${content.switch ? ' switch' : ''} sb-checkbox`} {...labelProps}>
    <Show when={content.align === 'right'}>{content.children}</Show>
    <input
      ref={input}
      type="checkbox"
      {...(content.switch ? {"aria-role": "switch" } : {})}
      {...inputProps}
      onchange={changeHandler}
    />
    <Show when={content.align !== 'right'}>{content.children}</Show>
  </label>
}