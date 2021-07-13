import { Component, JSX } from "solid-js";

import "./spinner.css";

export type SpinnerProps = JSX.HTMLAttributes<HTMLProgressElement>;

export const Spinner: Component<SpinnerProps> = (props) => (
  <progress
    class={props.class ? `sb-spinner ${props.class}` : "sb-spinner"}
    aria-busy="true"
    aria-live="polite"
    {...props}
  />
);
