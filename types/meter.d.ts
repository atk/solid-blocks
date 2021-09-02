import { Component, JSX } from "solid-js";
import "./base.css";
import "./meter.css";
export declare type MeterProps = JSX.HTMLAttributes<HTMLDivElement> & {
    min?: number | string;
    max?: number | string;
    value?: number | string;
};
export declare const Meter: Component<MeterProps>;
