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
import { Portal } from "solid-js/web";
import { getElements, WrappedElement } from "./tools";

import "./toast.css";

const toastPositions = ["top", "top-right", "top-left", "bottom", "bottom-right", "bottom-left"] as const;

export type ToastPosition = typeof toastPositions[number];

const toastMountPoints: Partial<Record<ToastPosition, HTMLElement | undefined>> = {};
// load previously created containers
toastPositions.forEach((pos) => { 
  toastMountPoints[pos] = document.getElementById(`sb-toast-${pos}`);
})

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

const addMountPoint = (position: ToastPosition = 'top-right') => {
  toastMountPoints[position] = div.cloneNode() as HTMLDivElement;
  toastMountPoints[position].id = `sb-toast-${position}`;
  document.body.appendChild(toastMountPoints[position]);
  return toastMountPoints[position];
}

export const Toast = (props: ToastProps): JSX.Element => {
  const [local, divProps] = splitProps(props, [
    "timeout",
    "position",
    "children",
    "mount",
    "onhide",
  ]);
  const mountPoint = createMemo(() =>
    local.mount ||
    toastMountPoints[local.position || 'top-right'] ||
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

  createEffect(() => !visible() && props.onhide())

  createEffect(() => {
    const container = mountPoint()
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
