import { Component, JSX, splitProps, Show } from "solid-js";

import "./radio.css";

export type RadioProps = JSX.HTMLAttributes<HTMLLabelElement> & JSX.HTMLAttributes<HTMLInputElement> & {
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
};

export const Radio: Component<RadioProps> = (props) => {
  const [inputProps, content, labelProps] = splitProps(props, [
    'accessKey', 'align', 'aria-disabled', 'autofocus', 'checked', 'class',
    'disabled', 'id', 'name', 'onchange', 'onclick', 'onkeydown', 'onkeypress',
    'onkeyup', 'oninvalid', 'required', 'value'
  ], ['align', 'children']);

  return <label class={`${content.align || "left"} sb-radio`} {...labelProps}>
    <Show when={content.align === 'right'}>{content.children}</Show>
    <input type="radio" {...inputProps} />
    <Show when={content.align !== 'right'}>{content.children}</Show>
  </label>
}

export type RadioGroupProps = JSX.HTMLAttributes<HTMLDivElement>;

export const RadioGroup: Component<RadioGroupProps> = (props) =>
  <div role="radiogroup" {...props} />;
