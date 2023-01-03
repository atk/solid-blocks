import { Component, JSX } from "solid-js";
import "./base.css";
import "./avatar.css";
export type AvatarProps = {
    img?: string;
    name?: string;
    fallback?: JSX.Element;
    plus?: number;
} & JSX.HTMLAttributes<HTMLDivElement>;
export declare const getInitials: (name: string) => string;
export declare const Avatar: Component<AvatarProps>;
export type AvatarBadgeProps = {
    borderColor?: string;
    background?: string;
} & JSX.HTMLAttributes<HTMLSpanElement>;
export declare const AvatarBadge: Component<AvatarBadgeProps>;
export type AvatarGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
    "data-plus"?: string;
};
export declare const AvatarGroup: Component<AvatarGroupProps>;
