import { JSX, Accessor, Setter } from "solid-js";
export declare type WrappedElement<P> = (props: P) => JSX.Element;
export declare const toStyleObject: (style: string | JSX.CSSProperties) => JSX.CSSProperties;
export declare const composeStyles: (...styles: (JSX.CSSProperties | string)[]) => any;
export declare const getNearestNode: (target: EventTarget | null | undefined, name: string) => Node | null | undefined;
export declare const maxRandom = 8;
export declare const getRandom: () => number;
declare type MediaQueryItem = 'all' | 'print' | 'screen' | `(${'min-' | 'max-' | ''}${'aspect-ratio' | 'color' | 'color-gamut' | 'color-index' | 'display-mode' | 'grid' | 'inverted-colors' | 'height' | 'orientation' | 'pointer' | `prefers-${'color-scheme' | 'contrast' | 'reduced-motion' | 'reduced-transparency'}` | 'resolution' | 'scan' | 'width'}: ${string})`;
declare type MediaQueryOperator = ' and ' | ' not ' | ' only ' | ', ';
declare type MediaQueryString = MediaQueryItem | `${MediaQueryItem}${MediaQueryOperator}${MediaQueryItem}`;
export declare const useMediaQuery: (query: MediaQueryString) => Accessor<boolean>;
export declare function createLocalStorageSignal<T extends any | string>(key: string, initialValue?: T, useJson?: boolean): [
    Accessor<T | undefined>,
    Setter<T | undefined>
];
export declare const useDarkMode: (localStorageKey?: string) => (Accessor<boolean> | Setter<boolean | undefined>)[];
export declare type NodeName = string;
export declare const getElements: (children: JSX.Element | ((...args: any[]) => JSX.Element), filter?: string | ((node: HTMLElement) => boolean) | undefined, props?: any, result?: never[]) => HTMLElement[] | undefined;
export {};
