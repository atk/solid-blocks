import { Component, Show } from "solid-js";
import {
  Bar,
  Checkbox,
  Tabs,
  Tab,
  TabContainer,
  Tooltip,
  useDarkMode,
  Button,
} from "./blocks";

import "./app.css";
import { AccordionDocs } from "./blocks/accordion.docs";
import { AvatarDocs } from "./blocks/avatar.docs";
import { BarDocs } from "./blocks/bar.docs";
import { BreadcrumbsDocs } from "./blocks/breadcrumbs.docs";
import { ButtonDocs } from "./blocks/button.docs";
import { CheckboxDocs } from "./blocks/checkbox.docs";
import { MenuDocs } from "./blocks/menu.docs";
import { MessageDocs } from "./blocks/message.docs";
import { MeterDocs } from "./blocks/meter.docs";
import { ModalDocs } from "./blocks/modal.docs";
import { ProgressDocs } from "./blocks/progress.docs";
import { RadioDocs } from "./blocks/radio.docs";
import { SelectDocs } from "./blocks/select.docs";
import { SpinnerDocs } from "./blocks/spinner.docs";
import { TabsDocs } from "./blocks/tabs.docs";
import { TextfieldDocs } from "./blocks/textfield.docs";
import { ToastDocs } from "./blocks/toast.docs";
import { TooltipDocs } from "./blocks/tooltip.docs";
import { HelpersDocs } from "./blocks/Helpers.docs";
import { ThemeDocs } from "./blocks/theme.docs";
import { TagDocs } from "./blocks/tag.docs";

const App: Component = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div class="app" id="top">
      <Bar position="sticky" placement="top" portal={false}>
        <div style={{ flex: "1 1 50%", width: "auto" }}>
          <h1 style={{ "white-space": "nowrap", margin: "0" }}>
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
        </div>
        <div style={{ flex: "1 1 50%", width: "auto" }}>
          <Button
            variant="icon"
            onClick={() =>
              window.open("https://github.com/atk/solid-blocks", "_blank")
            }
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
            >
              <title>GitHub</title>
              <path
                fill="#555"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </Button>
          <Checkbox
            switch
            onchange={(on) => setDarkMode(on)}
            checked={darkMode()}
            style={{ "white-space": "nowrap" }}
          >
            <Show when={darkMode()} fallback=" Dark Mode">
              {" Light Mode"}
            </Show>
          </Checkbox>
        </div>
      </Bar>
      <Tabs>
        <Tab>Documentation</Tab>
        <TabContainer>
          <span class="to-top-wrapper">
            <Tooltip content="Back to top" position="n" nowrap>
              <a role="button" class="to-top icon sb-button" href="#top">
                ⇧
              </a>
            </Tooltip>
          </span>
          <ul>
            <li>
              <a href="#accordion-docs">Accordion</a>
            </li>
            <li>
              <a href="#accordiongroup-docs">AccordionGroup</a>
            </li>
            <li>
              <a href="#avatar-docs">Avatar</a>
            </li>
            <li>
              <a href="#avatarbadge-docs">AvatarBadge</a>
            </li>
            <li>
              <a href="#avatargroup-docs">AvatarGroup</a>
            </li>
            <li>
              <a href="#bar-docs">Bar</a>
            </li>
            <li>
              <a href="#breadcrumbs-docs">Breadcrumbs</a>
            </li>
            <li>
              <a href="#button-docs">Button</a>
            </li>
            <li>
              <a href="#checkbox-docs">Checkbox</a>
            </li>
            <li>
              <a href="#menu-docs">
                Menu / MenuItem / MenuItemGroup / MenuOption / MenuOptionGroup
              </a>
            </li>
            <li>
              <a href="#message-docs">Message</a>
            </li>
            <li>
              <a href="#meter-docs">Meter</a>
            </li>
            <li>
              <a href="#modal-docs">
                Modal / ModalContent / ModalHeader / ModalContent / ModalFooter
              </a>
            </li>
            <li>
              <a href="#progress-docs">Progress</a>
            </li>
            <li>
              <a href="#radio-docs">Radio / RadioGroup</a>
            </li>
            <li>
              <a href="#select-docs">Select</a>
            </li>
            <li>
              <a href="#spinner-docs">Spinner</a>
            </li>
            <li>
              <a href="#tabs-docs">Tabs / Tab / TabContainer</a>
            </li>
            <li>
              <a href="#tag-docs">Tag / TagGroup</a>
            </li>
            <li>
              <a href="#textfield-docs">Textfield</a>
            </li>
            <li>
              <a href="#toast-docs">Toast</a>
            </li>
            <li>
              <a href="#tooltip-docs">Tooltip</a>
            </li>
            <li>
              <a href="#createLocalStorageSignal-docs">
                createLocalStorageSignal
              </a>
            </li>
            <li>
              <a href="#useMediaQuery-docs">useMediaQuery</a>
            </li>
            <li>
              <a href="#theme-docs">Theme</a>
            </li>
          </ul>
          <AccordionDocs />
          <AvatarDocs />
          <BarDocs />
          <BreadcrumbsDocs />
          <ButtonDocs />
          <CheckboxDocs />
          <MenuDocs />
          <MessageDocs />
          <MeterDocs />
          <ModalDocs />
          <ProgressDocs />
          <RadioDocs />
          <SelectDocs />
          <SpinnerDocs />
          <TabsDocs />
          <TagDocs />
          <TextfieldDocs />
          <ToastDocs />
          <TooltipDocs />
          <HelpersDocs />
          <ThemeDocs />
        </TabContainer>
        <Tab>TODO</Tab>
        <TabContainer>
          <ul>
            <li>SSR support</li>
            <li>
              Styles
              <ul>
                <li>extend + improve theme</li>
                <li>basic spacing, sizes and typography</li>
              </ul>
            </li>
            <li>
              More components:
              <ul>
                <li>Icons / Logo</li>
                <li>Round(Icon)Button</li>
              </ul>
            </li>
            <li>Release + publish official package</li>
          </ul>
        </TabContainer>
        <Tab>Concepts</Tab>
        <TabContainer>
          <h2 style={{ "margin-top": "0.5em" }}>
            Valuable components instead of components without added value
          </h2>
          <p>
            Wrapping elements like headers, text, or images in custom Components
            is just wasteful. Components will only be provided if they have
            added value over their native elements. The added value may be
          </p>
          <ul>
            <li>user experience</li>
            <li>accessibility</li>
            <li>developer experience</li>
          </ul>
          <p>
            If none of these advantages can be provided, it is preferable to use
            native HTML elements or SolidJS' abilities like Portal effectively.
          </p>
          <h2>Components with style instead of styled components</h2>
          <p>
            Directly using CSS is frowned upon nowadays, but not rightfully so.
            Well crafted CSS will easily outperform styled components. It should
            do so with
          </p>
          <ul>
            <li>
              minimal bleeding (class prefix <code>sb-[component]</code>, CSS
              reset, basic styles)
            </li>
            <li>
              semantic class names, i.e. <code>.primary.sb-button</code>
            </li>
            <li>careful consideration of a11y</li>
            <li>components styles work in non-JS environments (SSR)</li>
            <li>responsive layout</li>
            <li>theme-able, dark mode, inline mode switch possible</li>
          </ul>
        </TabContainer>
      </Tabs>
    </div>
  );
};

export default App;
