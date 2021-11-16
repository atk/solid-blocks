import { createMemo, splitProps, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import "./base.css";
import "./textfield.css";
export const TextField = (props) => {
    const [local, fieldProps] = splitProps(props, [
        "aria-orientation",
        "classList",
        "label",
        "multiline",
        "onchange",
        "children",
    ]);
    const changeHandler = createMemo(() => (ev) => local.onchange?.(ev.target.value));
    return (<label classList={mergeProps(local.classList ?? {}, { "sb-textfield": true })} aria-orientation={props["aria-orientation"]}>
      <span class="sb-textfield-label">{local.label}</span>
      <Dynamic component={props.multiline ? 'textarea' : 'input'} onchange={changeHandler()} {...fieldProps} type={!props.multiline ? fieldProps.type ?? 'text' : undefined}/>      
      {local.children}
    </label>);
};
