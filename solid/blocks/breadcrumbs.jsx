import { For } from "solid-js";
import "./base.css";
import "./breadcrumbs.css";
export const Breadcrumbs = (props) => (<nav class="sb-breadcrumbs">
    <ol {...props}>
      <For each={Array.isArray(props.children) ? props.children : [props.children]}>
        {(item) => <li>{item}</li>}
      </For>
    </ol>
  </nav>);
