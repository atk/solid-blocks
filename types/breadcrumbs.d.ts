import { Component, JSX } from "solid-js";
import "./base.css";
import "./breadcrumbs.css";
export declare type BreadcrumbsProps = JSX.HTMLAttributes<HTMLOListElement> & {
    children: JSX.Element | JSX.Element[];
};
export declare const Breadcrumbs: Component<BreadcrumbsProps>;
