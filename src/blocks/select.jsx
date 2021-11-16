import { splitProps } from "solid-js";
import "./base.css";
import "./select.css";
export const Select = (props) => {
    const [local, fieldProps] = splitProps(props, [
        "label",
        "onchange",
        "aria-orientation",
    ]);
    return (<label classList={{ "sb-select": true, disabled: props.disabled }} aria-orientation={local["aria-orientation"]}>
      <span class="sb-select-label">{local.label}</span>
      <select {...fieldProps} onchange={(ev) => local.onchange?.(ev.target.value)}/>
    </label>);
};
