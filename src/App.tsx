import { Component, Show, createSignal } from "solid-js";
import {
  Avatar,
  AvatarGroup,
  Breadcrumbs,
  Button,
  Message,
  Spinner,
  Tabs,
  Tab,
  TabContainer,
  Radio,
  RadioGroup,
} from "./blocks";

import "./app.css";
import { Checkbox } from "./blocks/checkbox";

const App: Component = () => {
  const [showLastTab, setShowLastTab] = createSignal(true);
  return (
    <div class="app">
      <h1 onClick={() => document.body.classList.toggle("dark-mode")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 110 100"
          style="vertical-align: -0.1em;"
        >
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
        </svg>{" "}
        Solid Blocks
      </h1>
      <Tabs>
        <Tab>Features</Tab>
        <TabContainer>
          <ul>
            <li>Accordion/-Header/-Group</li>
            <li>Avatar/-Group</li>
            <li>Breadcrumbs</li>
            <li>Button (needs icons)</li>
            <li>Checkbox</li>
            <li>Loading Spinner</li>
            <li>Messages (needs icons)</li>
            <li>Radio/-Group</li>
            <li>Tabs/Tab/TabContainer</li>
            <li>Improved CSS: theme-ability using CSS variables, dark mode</li>
          </ul>
        </TabContainer>
        <Tab>TODO</Tab>
        <TabContainer>
          <ul>
            <li>
              More components:
              <ul>
                <li>State: Progress, Meter</li>
                <li>Orientation: Tag</li>
                <li>
                  Layout: Menu, Toast, Modal, Sidebar/Drawer, Popover, Tooltip
                </li>
                <li>
                  Form controls: input, textarea,
                  select/option, stars rating?, date picker?
                </li>
                <li>Icons</li>
              </ul>
            </li>
            <li>Documentation</li>
          </ul>
        </TabContainer>
        <Show when={showLastTab()}>
          <Tab>Concepts</Tab>
          <TabContainer>
            <h2>
              Valuable components instead of components without added value
            </h2>

            <p>
              Wrapping elements like headers, text, or images in custom
              Components is just wasteful. Components will only be provided if
              they have added value over their native elements. The added
              value may be
            </p>
            <ul>
              <li>user experience</li>
              <li>accessibility</li>
              <li>developer experience</li>
            </ul>

            <p>
              If none of these advantages can be provided, it is preferable to
              use native HTML elements or SolidJS' abilities like Portal
              effectively.
            </p>

            <h2>Components with style instead of styled components</h2>

            <p>
              Directly using CSS is frowned upon nowadays, but not rightfully
              so. Well crafted CSS will easily outperform styled components.
              It should do so with
            </p>
            <ul>
              <li>
                minimal bleeding (class prefix <code>sb-[component]</code>,
                CSS reset, basic styles)
              </li>
              <li>
                semantic class names, i.e. <code>.primary.sb-button</code>
              </li>
              <li>careful consideration of a11y</li>
              <li>components styles work in non-JS environments (SSR)</li>
              <li>responsive layout</li>
              <li>theme-able, dark mode</li>
            </ul>
          </TabContainer>
        </Show>
      </Tabs>
      <Breadcrumbs>
        <a href="">You</a> <a href="">are</a> <span>Here</span>
      </Breadcrumbs>
      <div class="flex-row">
        <Message type="success">We have messages!</Message>
        <Message type="info">Information</Message>
        <Message type="warning">Warning</Message>
        <Message type="error">Error Message</Message>
      </div>
      <div>
        <Button>Button</Button> <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="link">Link</Button> <span>Text</span> <Spinner />
      </div>
      <AvatarGroup>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>{" "}
      <Checkbox align="right" checked={showLastTab()} onclick={() => setShowLastTab((show) => !show)}>Show last tab: </Checkbox>
      <RadioGroup value="1">
        <Radio name="radio-test" value="1"> 1</Radio>
        <Radio name="radio-test" value="2"> 2</Radio>
      </RadioGroup>
    </div>
  );
};

export default App;
