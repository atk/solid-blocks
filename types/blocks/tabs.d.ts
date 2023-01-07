import { Component, JSX } from "solid-js";
import "./base.css";
import "./tabs.css";
export type TabsProps = Omit<JSX.HTMLAttributes<HTMLElement>, 'onchange'> & {
    index?: number;
    setIndex?: (index?: number) => void;
};
export declare const tabsContext: import("solid-js").Context<[] | [index: () => number, setIndex: (index: number) => void, isActive: (index: number) => boolean, getIndex: (isContainer: boolean) => number, id: string]>;
export declare const Tabs: Component<TabsProps>;
export type TabListProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const tabListContext: import("solid-js").Context<string>;
export declare const TabList: Component<TabListProps>;
export type TabProps = JSX.HTMLAttributes<HTMLButtonElement>;
export declare const Tab: Component<TabProps>;
export type TabContainerProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const TabContainer: Component<TabContainerProps>;
