import { Component, JSX } from "solid-js";

import "./base.css";
import "./meter.css";

export type MeterProps = JSX.HTMLAttributes<HTMLDivElement> & {
  min?: number | string;
  max?: number | string;
  value?: number | string;
};

export const Meter: Component<MeterProps> = (props) => (
  <div
    {...props}
    role={
      "meter" as MeterProps["role"] /* https://github.com/ryansolid/dom-expressions/pull/79 */
    }
    class={props.class ? `sb-meter ${props.class}` : "sb-meter"}
    aria-valuenow={props.value ?? props["aria-valuenow"]}
    aria-valuemin={props.min ?? props["aria-valuemin"]}
    aria-valuemax={props.max ?? props["aria-valuemax"]}
  >
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${props.max ?? props["aria-valuemax"]} 10`}
    >
      <rect
        x="0"
        y="0"
        height="10"
        width={props.value ?? props["aria-valuenow"] ?? 0}
      />
    </svg>
    {props.children}
  </div>
);
