import { Component, JSX, splitProps } from "solid-js";

import "./button.css";

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "link" | "icon";
};

export const Button: Component<ButtonProps> = (props) => {
  const [local, buttonProps] = splitProps(props, ["variant", "class"]);

  return (
    <button
      class={`${local.variant ?? "primary"} sb-button${local.class ? " " : ""}${
        local.class ?? ""
      }`}
      {...buttonProps}
    />
  );
};
