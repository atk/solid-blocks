import { Component, JSX, mergeProps, splitProps, Show } from "solid-js";

import { getRandom } from "./tools";

import "./base.css";
import "./tag.css";

export type TagProps = (JSX.HTMLAttributes<HTMLSpanElement> &
  Partial<JSX.AnchorHTMLAttributes<HTMLAnchorElement>>) & { plain?: boolean };

export const Tag: Component<TagProps> = (props) => {
  const [local, tagProps] = splitProps(props, ["plain"]);
  const mergedProps = mergeProps(
    {
      "data-random": local.plain ? undefined : getRandom(),
      rel: props.target ? "tag noopener" : "tag",
    },
    tagProps,
    { class: props.class ? `sb-tag ${props.class}` : "sb-tag" }
  );
  return (
    <Show
      when={typeof mergedProps.href === "string"}
      fallback={<span {...mergedProps} />}
    >
      <a {...mergedProps} />
    </Show>
  );
};

export type TagGroupProps = JSX.HTMLAttributes<HTMLDivElement>;

export const TagGroup: Component<TagGroupProps> = (props) => {
  return (
    <div
      {...props}
      class={props.class ? `sb-tag-group ${props.class}` : "sb-tag-group"}
    />
  );
};
