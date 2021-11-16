import {
  Accessor,
  Component,
  createEffect,
  createMemo,
  createSignal,
  splitProps,
} from "solid-js";
import type { JSX } from "solid-js";
import "./base.css";
import "./tooltip.css";

export type TooltipTrigger =
  | boolean
  | "focus"
  | "hover"
  | Accessor<boolean>
  | ("focus" | "hover" | Accessor<boolean>)[];

export type TooltipPosition = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

export type TooltipProps = JSX.HTMLAttributes<HTMLSpanElement> & {
  arrow?: boolean;
  nowrap?: boolean;
  position?: TooltipPosition;
  content: JSX.Element;
  trigger?: TooltipTrigger;
};

declare module "solid-js" {
  namespace JSX {
    interface CustomCaptureEvents {
      focus: FocusEvent;
      blur: FocusEvent;
    }
  }
}

const computeVisible = (
  trigger: TooltipTrigger | undefined,
  initial?: boolean
): boolean =>
  trigger === undefined
    ? false
    : (Array.isArray(trigger) ? trigger : [trigger]).reduce<boolean>(
        (visible: boolean, trigger: TooltipTrigger) =>
          typeof trigger === "boolean"
            ? trigger
            : typeof trigger === "function"
            ? trigger()
            : visible,
        initial ?? false
      );

const triggerHas = (
  trigger: TooltipProps["trigger"] | undefined,
  event: "focus" | "hover"
) =>
  trigger === undefined ||
  trigger === event ||
  (Array.isArray(trigger) && trigger.includes(event));

const wrapText = (children: JSX.Element): JSX.Element => {
  if (typeof children === "function") {
    return wrapText(children());
  }
  if (typeof children === "string") {
    return (<span tabIndex="0">{children}</span>);
  }
  if (Array.isArray(children)) {
    const result = children.map((child) =>
      typeof child === "function" ? child() : child
    );
    if (result.every((child) => typeof child === "string")) {
      return (<span tabIndex="0">{result}</span>);
    }
    return result;
  }
  return children;
};

export const Tooltip: Component<TooltipProps> = (props) => {
  let wrapperRef!: HTMLSpanElement;

  const [local, spanProps] = splitProps(props, [
    "children",
    "position",
    "content",
    "trigger",
    "arrow",
    "nowrap",
  ]);
  const useFocus = createMemo(() => triggerHas(local.trigger, "focus"));
  const useHover = createMemo(() => triggerHas(local.trigger, "hover"));
  const children = createMemo(() =>
    triggerHas(local.trigger, "focus")
      ? wrapText(local.children)
      : local.children
  );
  const [visible, setVisible] = createSignal(false);
  createEffect(() => setVisible(computeVisible(local.trigger)));

  const [positionStyle, setPositionStyle] = createSignal<JSX.CSSProperties>();

  const focusHandler = createMemo(
    () => (ev: FocusEvent) => useFocus() && setVisible(ev.type === "focus")
  );
  const hoverHandler = createMemo(
    () => (ev: MouseEvent & { toElement?: HTMLElement }) =>
      useHover() && setVisible(wrapperRef.contains((ev.toElement ?? ev.target) as Node | null))
  );

  createEffect(() => {
    if (!visible() || !wrapperRef?.offsetHeight) {
      return { top: "10px" };
    }
    setPositionStyle(
      local.position === "nw"
        ? {
            top: `${wrapperRef.offsetTop}px`,
            left: `${wrapperRef.offsetLeft}px`,
          }
        : local.position === "n"
        ? {
            top: `${wrapperRef.offsetTop}px`,
            left: `${wrapperRef.offsetLeft + (wrapperRef.offsetWidth >> 1)}px`,
          }
        : local.position === "ne"
        ? {
            top: `${wrapperRef.offsetTop}px`,
            left: `${wrapperRef.offsetLeft + wrapperRef.offsetWidth}px`,
          }
        : local.position === "e"
        ? {
            top: `${wrapperRef.offsetTop + (wrapperRef.offsetHeight >> 1)}px`,
            left: `${wrapperRef.offsetLeft + wrapperRef.offsetWidth}px`,
          }
        : local.position === "se"
        ? {
            top: `${wrapperRef.offsetTop + wrapperRef.offsetHeight}px`,
            left: `${wrapperRef.offsetLeft + wrapperRef.offsetWidth}px`,
          }
        : local.position === "sw"
        ? {
            top: `${wrapperRef.offsetTop + wrapperRef.offsetHeight}px`,
            left: `${wrapperRef.offsetLeft}px`,
          }
        : local.position === "w"
        ? {
            top: `${wrapperRef.offsetTop + (wrapperRef.offsetHeight >> 1)}px`,
            left: `${wrapperRef.offsetLeft}px`,
          }
        : /* s is default */ {
            top: `${wrapperRef.offsetTop + wrapperRef.offsetHeight}px`,
            left: `${wrapperRef.offsetLeft + (wrapperRef.offsetWidth >> 1)}px`,
          }
    );
  });

  return (
    <span
      ref={wrapperRef}
      aria-haspopup="true"
      aria-expanded={visible()}
      class={`sb-tooltip-wrapper position-${local.position ?? "s"}${
        local.arrow === false ? "" : " arrow"
      }${local.nowrap ? " nowrap" : ""}`}
      oncapture:focus={focusHandler()}
      oncapture:blur={focusHandler()}
      onmouseover={hoverHandler()}
      onmouseleave={hoverHandler()}
    >
      {children()}
      <span
        {...spanProps}
        role="tooltip"
        hidden={!visible()}
        style={positionStyle()}
      >
        {local.content}
      </span>
    </span>
  );
};
