import { Accessor, JSX, Component } from "solid-js";
import { ButtonProps } from "./button";
import "./base.css";
import "./menu.css";
export type MenuProps = JSX.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    ontoggle?: (open?: boolean) => void;
    align?: "left" | "center" | "right";
};
export declare const Menu: Component<MenuProps>;
export type MenuButtonProps = ButtonProps;
export declare const MenuButton: Component<MenuButtonProps>;
export type MenuItemProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const MenuItem: Component<MenuItemProps>;
export type MenuItemGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
    title?: JSX.Element;
};
export declare const MenuItemGroup: Component<MenuItemGroupProps>;
export type MenuOptionsContextValue = [
    value: Accessor<string[]>,
    change: (value: string) => void,
    type?: "checkbox" | "radio"
];
export declare const MenuOptionsContext: import("solid-js").Context<MenuOptionsContextValue>;
export type MenuOptionProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onchange"> & {
    onchange?: (checked?: boolean) => void;
    value: string;
};
export declare const MenuOption: Component<MenuOptionProps>;
export type MenuOptionGroupProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onchange"> & ({
    type: "checkbox";
    onchange?: (value: string[]) => void;
    title?: JSX.Element;
    value?: string[];
} | {
    type?: "radio" | undefined;
    onchange?: (value: string) => void;
    title?: JSX.Element;
    value?: [string] | string;
});
export declare const MenuOptionGroup: (props: MenuOptionGroupProps) => JSX.Element;
