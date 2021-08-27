import {
  Component,
  JSX,
  splitProps,
  Show,
  createEffect,
  onMount,
} from "solid-js";

import "./base.css";
import "./radio.css";

export type RadioProps = JSX.HTMLAttributes<HTMLLabelElement> &
  JSX.HTMLAttributes<HTMLInputElement> & {
    /**
     * align the checkbox inside its label
     * can be 'left' or 'right; default is 'left'
     */
    align?: "left" | "right";
    autofocus?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    oninvalid?: JSX.EventHandler<HTMLInputElement, Event>;
    required?: boolean;
    value?: string;
  };

export const Radio: Component<RadioProps> = (props) => {
  const [inputProps, content, labelProps] = splitProps(
    props,
    [
      "accessKey",
      "align",
      "aria-disabled",
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
    ],
    ["align", "children"]
  );

  return (
    <label
      class={`${content.align || "left"} sb-radio${
        inputProps.disabled ? " disabled" : ""
      }`}
      {...labelProps}
    >
      <Show when={content.align === "right"}>{content.children}</Show>
      <input type="radio" {...inputProps} />
      <Show when={content.align !== "right"}>{content.children}</Show>
    </label>
  );
};

export type RadioGroupProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "onchange"
> & {
  onchange?: (value: string) => void;
  value?: string;
};

let radioGroups = 1;

export const RadioGroup: Component<RadioGroupProps> = (props) => {
  const [local, divProps] = splitProps(props, [
    "onchange",
    "value",
    "children",
  ]);

  let group!: HTMLDivElement;
  onMount(() => {
    const items = group.querySelectorAll('input[type="radio"]');
    if (
      Array.prototype.some.call(items, (item) => !item.hasAttribute("name"))
    ) {
      const name = (
        Array.prototype.find.call(items, (item) =>
          item.hasAttribute("name")
        ) || { name: `sb-radio-group-${radioGroups++}` }
      ).name;
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
    const newValue = group?.querySelector<HTMLInputElement>('input[type="radio"]:checked')?.value;
    if (newValue && value !== newValue) {
      local.onchange?.(newValue);
      value = newValue;
    }
  };

  return (
    <div
      ref={group}
      role="radiogroup"
      onkeyup={changeHandler}
      onclick={changeHandler}
      {...divProps}
      class={
        divProps.class ? `sb-radiogroup ${divProps.class}` : "sb-radiogroup"
      }
    >
      {local.children}
    </div>
  );
};
