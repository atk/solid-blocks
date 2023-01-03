import { createSelector, createSignal, on, splitProps, Show, createContext, createEffect, useContext } from "solid-js";
import { runEvent } from "./tools";
import "./base.css";
import "./radio.css";
export const radioContext = createContext([]);
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
    ], ["align", "checked", "onChange", "setChecked", "children"]);
    const [_value, setValue, isValueActive] = useContext(radioContext);
    return (<label class={`${content.align || "left"} sb-radio${inputProps.disabled ? " disabled" : ""}`} {...labelProps}>
      <Show when={content.align === "right"}>{content.children}</Show>
      <input type="radio" ref={props.ref} {...inputProps} checked={isValueActive ? isValueActive(inputProps.value || "") : content.checked} onChange={(ev) => {
            runEvent(ev, content.onChange);
            content.setChecked?.(ev.currentTarget.checked);
            if (ev.currentTarget.checked) {
                setValue?.(props.value || "");
            }
        }}/>
      <Show when={content.align !== "right"}>{content.children}</Show>
    </label>);
};
export const RadioGroup = (props) => {
    const [local, divProps] = splitProps(props, [
        "setValue",
        "value",
        "children",
    ]);
    const [value, setValue] = createSignal(typeof props.value === 'function' ? props.value() : "");
    createEffect(() => setValue(typeof props.value === 'function' ? props.value() : ""));
    createEffect(on([value], ([value]) => local.setValue?.(value), { defer: true }));
    return (<radioContext.Provider value={[value, setValue, createSelector(value)]}>
      <div role="radiogroup" {...divProps} class={divProps.class ? `sb-radiogroup ${divProps.class}` : "sb-radiogroup"}>
        {local.children}
      </div>
    </radioContext.Provider>);
};
