import { mergeProps, splitProps, Show } from "solid-js";
import { getRandom } from "./tools";
import "./base.css";
import "./tag.css";
export const Tag = (props) => {
    const [local, tagProps] = splitProps(props, ["plain"]);
    const mergedProps = mergeProps({
        "data-random": local.plain ? undefined : getRandom(),
        rel: props.target ? "tag noopener" : "tag",
    }, tagProps, { class: props.class ? `sb-tag ${props.class}` : "sb-tag" });
    return (<Show when={typeof mergedProps.href === "string"} fallback={<span {...mergedProps}/>}>
      <a {...mergedProps}/>
    </Show>);
};
export const TagGroup = (props) => {
    return (<div {...props} class={props.class ? `sb-tag-group ${props.class}` : "sb-tag-group"}/>);
};
