import { createEffect, createSignal, onMount, Show, splitProps, createMemo, } from "solid-js";
import { isServer, Portal } from "solid-js/web";
import { getElements } from "./tools";
import "./base.css";
import "./toast.css";
const toastPositions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
];
// load previously created containers
const toastMountPoints = toastPositions.reduce((nodes, pos) => {
    nodes[pos] = isServer ? null : document.getElementById(`sb-toast-${pos}`);
    return nodes;
}, {});
const div = document.createElement("div");
const addMountPoint = (position = "top-right") => {
    const mountPoint = div.cloneNode();
    mountPoint.id = `sb-toast-${position}`;
    toastMountPoints[position] = mountPoint;
    document.body.appendChild(mountPoint);
    return mountPoint;
};
export const Toast = (props) => {
    const [local, divProps] = splitProps(props, [
        "timeout",
        "position",
        "children",
        "mount",
        "onhide",
    ]);
    const mountPoint = createMemo(() => local.mount ||
        toastMountPoints[local.position || "top-right"] ||
        addMountPoint(local.position));
    const [visible, setVisible] = createSignal(true);
    const hide = () => setVisible(false);
    const [newChildren, update] = createSignal();
    const [children, setChildren] = createSignal(getElements(local.children, () => true, [{ update, hide }]));
    onMount(() => props.timeout !== 0 &&
        setTimeout(() => setVisible(false), props.timeout ?? 5000));
    createEffect(() => {
        newChildren() &&
            setChildren(getElements(newChildren(), () => true, [{ update, hide }]));
    });
    createEffect(() => !visible() && props.onhide?.());
    createEffect(() => {
        const container = mountPoint();
        if (container === props.mount) {
            return;
        }
        if (!visible() && container?.childElementCount === 0) {
            document.body.removeChild(container);
        }
        else if (visible() && container && !container?.parentNode) {
            document.body.appendChild(container);
        }
    });
    return (<Show when={visible()}>
      <Portal mount={mountPoint()}>
        <div {...divProps} class={divProps.class ? `sb-toast ${divProps.class}` : "sb-toast"}>
          {children()}
        </div>
      </Portal>
    </Show>);
};
