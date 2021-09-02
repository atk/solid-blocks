import { Component, JSX } from "solid-js";
import "./base.css";
import "./tabs.css";
export declare type TabsProps = Omit<JSX.HTMLAttributes<HTMLElement>, 'onchange'> & {
    index?: number;
    vertical?: boolean;
    onchange?: (index?: number) => void;
};
export declare const Tabs: Component<TabsProps>;
export declare type TabProps = JSX.HTMLAttributes<HTMLLIElement>;
export declare const Tab: Component<TabProps>;
export declare type TabContainerProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const TabContainer: Component<TabContainerProps>;
