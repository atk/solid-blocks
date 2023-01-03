import { Component, JSX } from "solid-js";
import "./base.css";
import "./tag.css";
export type TagProps = (JSX.HTMLAttributes<HTMLSpanElement> & Partial<JSX.AnchorHTMLAttributes<HTMLAnchorElement>>) & {
    plain?: boolean;
};
export declare const Tag: Component<TagProps>;
export type TagGroupProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const TagGroup: Component<TagGroupProps>;
