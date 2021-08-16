import { Component, JSX } from "solid-js";

import "./base.css";
import "./progress.css";

export type ProgressProps = JSX.ProgressHTMLAttributes<HTMLProgressElement>;

export const Progress: Component<ProgressProps> = (props) => (
  <progress
    aria-busy={props?.value !== props?.max}
    aria-live="polite"
    {...props}
    class={props.class ? `sb-progress ${props.class}` : "sb-progress"}
  />
);
