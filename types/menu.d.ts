import { Accessor, JSX, Component } from "solid-js";
import { ButtonProps } from "./button";
import "./base.css";
import "./menu.css";
export declare type MenuProps = JSX.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    ontoggle?: (open?: boolean) => void;
    align?: "left" | "center" | "right";
};
export declare const Menu: Component<MenuProps>;
export declare type MenuButtonProps = ButtonProps;
export declare const MenuButton: Component<MenuButtonProps>;
export declare type MenuItemProps = JSX.HTMLAttributes<HTMLDivElement>;
export declare const MenuItem: Component<MenuItemProps>;
export declare type MenuItemGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
    title?: JSX.Element;
};
export declare const MenuItemGroup: Component<MenuItemGroupProps>;
export declare type MenuOptionsContextValue = [
    value: Accessor<string[]>,
    change: (value: string) => void,
    type?: "checkbox" | "radio"
];
export declare const MenuOptionsContext: import("solid-js").Context<MenuOptionsContextValue>;
export declare type MenuOptionProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onchange"> & {
    onchange?: (checked?: boolean) => void;
    value: string;
};
export declare const MenuOption: Component<MenuOptionProps>;
export declare type MenuOptionGroupProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onchange"> & ({
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
