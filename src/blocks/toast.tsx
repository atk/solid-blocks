import {
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
  Setter,
  splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { getElements, WrappedElement } from "./tools";

import "./toast.css";

export type WrappedToastContentProps = {
  update: Setter<JSX.Element | WrappedElement<WrappedToastContentProps>>;
  hide: () => void;
};

export type ToastProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: JSX.Element | WrappedElement<WrappedToastContentProps>;
  /**
   * the number of milliseconds until the toast should be hidden again;
   * 0 means never, undefined 5 seconds
   */
  timeout?: number;
  /** indicates where the toast should be rendered; default position will be top-right */
  position?:
    | "top"
    | "top-right"
    | "top-left"
    | "bottom"
    | "bottom-right"
    | "bottom-left";
  mount?: HTMLElement;
};

const div = document.createElement("div");

export const Toast = (props: ToastProps): JSX.Element => {
  const [local, divProps] = splitProps(props, [
    "timeout",
    "position",
    "children",
  ]);

  const mountPointId = `sb-toast-${props.position || "top-right"}`;
  if (!props.mount || !document.getElementById(mountPointId)) {
    document.body.appendChild(
      Object.assign(div.cloneNode(), { id: mountPointId })
    );
  }

  const [visible, setVisible] = createSignal(true);
  const hide = () => setVisible(false);
  const [newChildren, update] = createSignal<JSX.Element>();
  const [children, setChildren] = createSignal(
    getElements(local.children, () => true, [{ update, hide }])
  );

  onMount(
    () =>
      props.timeout !== 0 &&
      setTimeout(() => {
        setVisible(false);
      }, props.timeout ?? 5000)
  );

  createEffect(() => {
    newChildren() &&
      setChildren(getElements(newChildren(), () => true, [{ update, hide }]));
  });

  onCleanup(() => {
    const mountPoint = document.getElementById(mountPointId);
    if (mountPoint && mountPoint.childElementCount === 0) {
      document.body.removeChild(mountPoint);
    }
  });

  const mountPoint = props.mount ?? document.getElementById(mountPointId);

  return (
    <Show when={visible()}>
      <Portal mount={mountPoint}>
        <div
          {...divProps}
          class={divProps.class ? `sb-toast ${divProps.class}` : "sb-toast"}
        >
          {children()}
        </div>
      </Portal>
    </Show>
  );
};
