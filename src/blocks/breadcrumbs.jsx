import { Component, JSX, For } from "solid-js";

import "./base.css";
import "./breadcrumbs.css";

export type BreadcrumbsProps = JSX.HTMLAttributes<HTMLOListElement> & {
  children: JSX.Element | JSX.Element[];
};

export const Breadcrumbs: Component<BreadcrumbsProps> = (props) => (
  <nav class="sb-breadcrumbs">
    <ol {...props}>
      <For
        each={Array.isArray(props.children) ? props.children : [props.children]}
      >
        {(item) => <li>{item}</li>}
      </For>
    </ol>
  </nav>
);
