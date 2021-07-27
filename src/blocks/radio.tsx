import { Component, JSX, splitProps, Show, onMount } from "solid-js";

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

export type RadioGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
  onchange?: (value?: string) => void;
  value?: string;
};

export const RadioGroup: Component<RadioGroupProps> = (props) => {
  const [local, divProps] = splitProps(props, ['onchange', 'value', 'children']);

  let group;
  onMount(() => {
    if (local.value) {
      const items = group.querySelectorAll('input[type="radio"]');
      Array.prototype.forEach.call(items, (item) => {
        item.checked = item.value === local.value;
      });
    }
  })
  
  let value = local.value;
  const changeHandler = () => {
    const newValue = group?.querySelector('input[type="radio"]:checked')?.value
    if (value !== newValue) {
      local.onchange?.(newValue);
      value = newValue;
    }
  }

  return <div
    ref={group}
    role="radiogroup"
    onkeyup={changeHandler}
    onclick={changeHandler}
    {...divProps}
    class={divProps.class ? `sb-radiogroup ${divProps.class}` : 'sb-radiogroup'}
>
    {local.children}
  </div>;
}
