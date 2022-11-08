import { splitProps, Show, createEffect, onMount, } from "solid-js";
import "./base.css";
import "./radio.css";
export const Radio = (props) => {
    const [inputProps, content, labelProps] = splitProps(props, [
        "accessKey",
        "align",
        "aria-disabled",
        "aria-invalid",
        "autofocus",
        "checked",
        "class",
        "disabled",
        "id",
        "name",
        "onchange",
        "onclick",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "oninvalid",
        "required",
        "value",
    ], ["align", "children"]);
    return (<label class={`${content.align || "left"} sb-radio${inputProps.disabled ? " disabled" : ""}`} {...labelProps}>
      <Show when={content.align === "right"}>{content.children}</Show>
      <input type="radio" {...inputProps}/>
      <Show when={content.align !== "right"}>{content.children}</Show>
    </label>);
};
let radioGroups = 1;
export const RadioGroup = (props) => {
    const [local, divProps] = splitProps(props, [
        "onchange",
        "value",
        "children",
    ]);
    let group;
    onMount(() => {
        const items = group.querySelectorAll('input[type="radio"]');
        if (Array.prototype.some.call(items, (item) => !item.hasAttribute("name"))) {
            const name = (Array.prototype.find.call(items, (item) => item.hasAttribute("name")) || { name: `sb-radio-group-${radioGroups++}` }).name;
            Array.prototype.forEach.call(items, (item) => {
                item.setAttribute("name", name);
            });
        }
    });
    createEffect(() => {
        if (local.value) {
            const items = group.querySelectorAll('input[type="radio"]');
            Array.prototype.forEach.call(items, (item) => {
                item.checked = item.value === local.value;
            });
        }
    });
    let value = local.value;
    const changeHandler = () => {
        const newValue = group?.querySelector('input[type="radio"]:checked')?.value;
        if (newValue && value !== newValue) {
            local.onchange?.(newValue);
            value = newValue;
        }
    };
    return (<div ref={group} role="radiogroup" onkeyup={changeHandler} onclick={changeHandler} {...divProps} class={divProps.class ? `sb-radiogroup ${divProps.class}` : "sb-radiogroup"}>
      {local.children}
    </div>);
};
