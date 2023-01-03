import { splitProps, Show } from "solid-js";
import { runEvent } from "./tools";
import "./base.css";
import "./checkbox.css";
export const Checkbox = (props) => {
    const [inputProps, content, labelProps] = splitProps(props, [
        "accessKey",
        "aria-disabled",
        "aria-invalid",
        "autofocus",
        "checked",
        "class",
        "disabled",
        "id",
        "name",
        "onclick",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "oninvalid",
        "required",
        "value",
    ], ["align", "children", "onChange", "setChecked", "switch"]);
    return (<label class={`${content.align || "left"} ${content.switch ? " switch" : ""} sb-checkbox`} {...labelProps}>
      <Show when={content.align === "right"}>{content.children}</Show>
      <input ref={props.ref} type="checkbox" role={content.switch ? "switch" : undefined} {...inputProps} onChange={(ev) => {
            runEvent(ev, content.onChange);
            content.setChecked?.(ev.currentTarget.checked);
        }}/>
      <Show when={content.align !== "right"}>{content.children}</Show>
    </label>);
};
