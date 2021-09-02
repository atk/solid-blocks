import {
  createEffect,
  createSignal,
  JSX,
  onMount,
  Show,
  Setter,
  splitProps,
  createMemo,
} from "solid-js";
import { isServer, Portal } from "solid-js/web";
import { getElements, WrappedElement } from "./tools";

import "./base.css";
import "./toast.css";

const toastPositions = [
  "top",
  "top-right",
  "top-left",
  "bottom",
  "bottom-right",
  "bottom-left",
] as const;

export type ToastPosition = typeof toastPositions[number];

// load previously created containers
const toastMountPoints = toastPositions.reduce((nodes, pos) => {
  nodes[pos] = isServer ? null : document.getElementById(`sb-toast-${pos}`);
  return nodes;
}, {} as Partial<Record<ToastPosition, HTMLElement | null>>);

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
  position?: ToastPosition;
  mount?: HTMLElement;
  onhide?: () => void;
};

const div = document.createElement("div");

const addMountPoint = (position: ToastPosition = "top-right") => {
  const mountPoint = div.cloneNode() as HTMLDivElement;
  mountPoint.id = `sb-toast-${position}`;
  toastMountPoints[position] = mountPoint;
  document.body.appendChild(mountPoint);
  return mountPoint;
};

export const Toast = (props: ToastProps): JSX.Element => {
  const [local, divProps] = splitProps(props, [
    "timeout",
    "position",
    "children",
    "mount",
    "onhide",
  ]);
  const mountPoint = createMemo(
    () =>
      local.mount ||
      toastMountPoints[local.position || "top-right"] ||
      addMountPoint(local.position)
  );

  const [visible, setVisible] = createSignal(true);
  const hide = () => setVisible(false);
  const [newChildren, update] = createSignal<JSX.Element>();
  const [children, setChildren] = createSignal(
    getElements(local.children, () => true, [{ update, hide }])
  );

  onMount(
    () =>
      props.timeout !== 0 &&
      setTimeout(() => setVisible(false), props.timeout ?? 5000)
  );

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
    } else if (visible() && container && !container?.parentNode) {
      document.body.appendChild(container);
    }
  });

  return (
    <Show when={visible()}>
      <Portal mount={mountPoint()}>
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
