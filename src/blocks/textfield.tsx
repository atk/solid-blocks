import { Component, JSX, splitProps, Show } from 'solid-js';

import "./textfield.css"

type TextFieldTypes = 
  | 'text'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'search'
  | 'submit'
  | 'tel'
  | 'time'
  | 'url'
  | 'week';

type TextFieldProps = {
  "aria-orientation"?: 'horizontal' | 'vertical';
  multiline?: boolean;
  label: JSX.Element;
  type?: TextFieldTypes;
  onchange?: (value?: string) => void;
} & JSX.InputHTMLAttributes<HTMLInputElement> & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextField: Component<TextFieldProps> = (props) => {
  const [local, fieldProps] = splitProps(props, ['aria-orientation', 'label', 'multiline', 'onchange', 'children']);
  let field;
  const changeHandler = () => local.onchange?.(field?.value);

  return <label class="sb-textfield" aria-orientation={local['aria-orientation']}>
    <span class="sb-textfield-label">{local.label}</span>
    <Show
      when={props.multiline}
      fallback={
        <input
          ref={field}
          onchange={changeHandler}
          {...fieldProps}
          type={(fieldProps).type ?? 'text'}
        />
      }>
      <textarea ref={field} onchange={changeHandler} {...fieldProps} />
    </Show>
    {local.children}
  </label>
};
