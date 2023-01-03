import { splitProps } from "solid-js";
import { runEvent } from "./tools";
import "./base.css";
import "./select.css";
export const Select = (props) => {
    const [local, fieldProps] = splitProps(props, [
        "aria-orientation",
        "label",
        "onChange",
        "setValue",
        "value"
    ]);
    return (<label classList={{ "sb-select": true, disabled: props.disabled }} aria-orientation={local["aria-orientation"]}>
      <span class="sb-select-label">{local.label}</span>
      <select {...fieldProps} onChange={(ev) => {
            runEvent(ev, local.onChange);
            local.setValue?.(ev.currentTarget.value);
        }}/>
    </label>);
};
