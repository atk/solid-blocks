import { splitProps, mergeProps } from "solid-js";
import { Show } from "solid-js/web";
import { runEvent } from "./tools";
import "./base.css";
import "./textfield.css";
export const TextField = (props) => {
    const [local, fieldProps] = splitProps(props, [
        "aria-orientation",
        "classList",
        "label",
        "multiline",
        "onInput",
        "children",
        "setValue"
    ]);
    return (<label classList={mergeProps(local.classList ?? {}, { "sb-textfield": true })} aria-orientation={props["aria-orientation"]}>
      <span class="sb-textfield-label">{local.label}</span>
      <Show when={local.multiline} fallback={<input {...fieldProps} onInput={(ev) => {
                runEvent(ev, local.onInput);
                local.setValue?.(ev.currentTarget.value);
            }}/>}>
        <textarea {...fieldProps} onInput={(ev) => {
            runEvent(ev, local.onInput);
            local.setValue?.(ev.currentTarget.value);
        }}/>
      </Show>
      {local.children}
    </label>);
};
