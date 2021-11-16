import { splitProps, Show } from "solid-js";
import "./base.css";
import "./checkbox.css";
export const Checkbox = (props) => {
    const [inputProps, content, labelProps] = splitProps(props, [
        "accessKey",
        "aria-disabled",
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
    ], ["align", "children", "onchange", "switch"]);
    const changeHandler = (ev) => content.onchange?.(ev.target?.checked);
    return (<label class={`${content.align || "left"} ${content.switch ? " switch" : ""} sb-checkbox`} {...labelProps}>
      <Show when={content.align === "right"}>{content.children}</Show>
      <input type="checkbox" role={content.switch ? "switch" : undefined} {...inputProps} onchange={changeHandler}/>
      <Show when={content.align !== "right"}>{content.children}</Show>
    </label>);
};
