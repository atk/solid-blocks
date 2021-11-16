import { mergeProps, splitProps } from "solid-js";
import "./base.css";
import "./button.css";
export const Button = (props) => {
    const [local, buttonProps] = splitProps(props, ["variant", "classList"]);
    return (<button {...buttonProps} classList={mergeProps(local.classList ?? {}, {
            "sb-button": true,
            [local.variant ?? "primary"]: true,
        })}/>);
};
