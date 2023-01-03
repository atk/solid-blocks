import { Component, JSX } from "solid-js";
import "./base.css";
import "./message.css";
export type MessageProps = {
    type: "success" | "info" | "warning" | "error";
    inline?: boolean;
} & JSX.HTMLAttributes<HTMLDivElement>;
export declare const Message: Component<MessageProps>;
