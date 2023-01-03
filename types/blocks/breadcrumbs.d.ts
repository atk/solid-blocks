import { Component, JSX } from "solid-js";
import "./base.css";
import "./breadcrumbs.css";
export type BreadcrumbsProps = JSX.HTMLAttributes<HTMLOListElement> & {
    children: JSX.Element | JSX.Element[];
};
export declare const Breadcrumbs: Component<BreadcrumbsProps>;
