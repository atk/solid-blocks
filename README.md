# Solid-Blocks

<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 110 100">
<defs>
  <linearGradient id="a" gradient-transform="rotate(-20)">
    <stop stop-color="#3771c8" offset="0%" />
    <stop stop-color="#87aade" offset="100%" />
  </linearGradient>
  <linearGradient id="b" gradient-transform="rotate(-20)">
    <stop stop-color="#214478" offset="0%" />
    <stop stop-color="#3771c8" offset="100%" />
  </linearGradient>
</defs>
<path fill="url(#a)" d="M 0,4 H 80 L 110,54 H 30 Z" />
<path fill="url(#b)" d="M 0,46 H 80 L 110,96 H 30 Z" />
</svg>

UI building blocks for [SolidJS](https://solidjs.com)

## Core concepts

### Valuable components instead of components without added value

Wrapping elements like headers, text, or images in custom Components is just wasteful. Components will only be provided if they have added value over their native elements. The added value may be

- user experience
- accessibility
- developer experience
- performance

If none of these advantages can be provided, it is preferable to use native HTML elements or SolidJS' abilities like Portal effectively.

### Components with style instead of styled components

Directly using CSS is frowned upon nowadays, but not rightfully so. Well crafted CSS will easily outperform styled components. It should do so with

- minimal bleeding (class prefix `sb-[component]`, CSS reset, basic styles, theme variables)
- semantic class names, i.e. `.primary.sb-button`
- careful consideration of a11y
- works as much as possible in non-JS environments (SSR)
- responsive layout
- TODO: theme-able, dark mode

### Usage

```shell
yarn
yarn dev
```

To use the components

```tsx
import { Accordion, AccordionHeader } from "solid-blocks";

const MyApp = () => {
  return (
    <Accordion>
      <AccordionHeader>Accordion</AccordionHeader>
      <p>Hidden</p>
    </Accordion>
  );
};
```
