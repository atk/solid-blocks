import { Component, JSX } from 'solid-js'

import "./meter.css";

export type MeterProps = JSX.MeterHTMLAttributes<HTMLMeterElement>;

export const Meter: Component<MeterProps> = (props) => (
  <meter 
    aria-live="polite"
    {...props}
    class={props.class ? `sb-meter ${props.class}` : 'sb-meter'}
  />
);
