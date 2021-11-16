import { mergeProps, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import "./base.css";
import "./bar.css";
export const Bar = (props) => {
    const [local, rest] = splitProps(props, [
        "placement",
        "position",
        "mount",
        "portal",
    ]);
    const divProps = mergeProps(rest, {
        class: `${local.placement}${local.position ? " " + local.position : ""} sb-bar ${props.class ? " " + props.class : ""}`,
    });
    return local.portal === false ? (<div {...divProps}/>) : (<Portal mount={local.mount}>
      <div {...divProps}/>
    </Portal>);
};
