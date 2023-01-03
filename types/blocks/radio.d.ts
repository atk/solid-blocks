import { Accessor, Component, JSX, Setter } from "solid-js";
import "./base.css";
import "./radio.css";
export declare const radioContext: import("solid-js").Context<[] | [Accessor<string>, Setter<string>, (value: string) => boolean]>;
export type RadioProps = JSX.HTMLAttributes<HTMLInputElement> & {
    /**
     * align the checkbox inside its label
     * can be 'left' or 'right; default is 'left'
     */
    align?: "left" | "right";
    autofocus?: boolean;
    checked?: boolean;
    setChecked?: (checked?: boolean) => void;
    disabled?: boolean;
    name?: string;
    onInvalid?: JSX.EventHandler<HTMLInputElement, Event>;
    required?: boolean;
    value?: string;
};
export declare const Radio: Component<RadioProps>;
export type RadioGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
    setValue?: (value: string) => void;
    value?: Accessor<string>;
};
export declare const RadioGroup: Component<RadioGroupProps>;
