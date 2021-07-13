import { Component, JSX, splitProps } from "solid-js";

import "./message.css";

export type MessageProps = {
  type: "success" | "info" | "warning" | "error";
} & JSX.HTMLAttributes<HTMLDivElement>;

export const Message: Component<MessageProps> = (props) => {
  const [messageProps, divProps] = splitProps(props, ["type", "class"]);
  const className = [
    ...new Set(
      ["sb-message", messageProps.type, messageProps.class].filter(Boolean)
    ),
  ].join(" ");

  return (
    <p
      class={className}
      role={messageProps.type === "error" ? "alert" : null}
      {...divProps}
    />
  );
};
