import { Component, JSX, createMemo, splitProps } from "solid-js";

import "./base.css";
import "./message.css";

export type MessageProps = {
  type: "success" | "info" | "warning" | "error";
  inline?: boolean;
} & JSX.HTMLAttributes<HTMLDivElement>;

export const Message: Component<MessageProps> = (props) => {
  const [messageProps, divProps] = splitProps(props, [
    "type",
    "class",
    "inline",
  ]);
  const className = createMemo(() =>
    [
      ...new Set(
        [
          "sb-message",
          messageProps.type,
          messageProps.class,
          messageProps.inline && "inline",
        ].filter(Boolean)
      ),
    ].join(" ")
  );

  return (
    <p
      class={className()}
      role={messageProps.type === "error" ? "alert" : undefined}
      {...divProps}
    />
  );
};
