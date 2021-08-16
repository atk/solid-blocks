import { Component, JSX, mergeProps, splitProps } from "solid-js";
import { Portal } from "solid-js/web";

import "./base.css";
import "./bar.css";

export type BarProps = JSX.HTMLAttributes<HTMLDivElement> & {
  mount?: HTMLElement;
  placement?: "top" | "right" | "bottom" | "left";
  position?: Omit<JSX.CSSProperties["position"], "static">;
  portal?: boolean;
};

export const Bar: Component<BarProps> = (props) => {
  const [local, rest] = splitProps(props, [
    "placement",
    "position",
    "mount",
    "portal",
  ]);
  const divProps = mergeProps(rest, {
    class: `${local.placement}${
      local.position ? " " + local.position : ""
    } sb-bar ${props.class ? " " + props.class : ""}`,
  });
  return local.portal === false ? (
    <div {...divProps} />
  ) : (
    <Portal mount={local.mount}>
      <div {...divProps} />
    </Portal>
  );
};
