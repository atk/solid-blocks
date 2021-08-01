import { Component, Show } from "solid-js";
import {
  Checkbox,
  Tabs,
  Tab,
  TabContainer,
  Tooltip,
  useDarkMode,
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

const App: Component = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div class="app" id="top">
      <div style={{ float: "right" }}>
        <Checkbox
          switch
          onchange={(on) => setDarkMode(on)}
          checked={darkMode()}
        >
          <Show when={darkMode()} fallback=" Dark Mode">
            {" Light Mode"}
          </Show>
        </Checkbox>
      </div>
      <h1>
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
                Menu/MenuItem/MenuItemGroup/MenuOption/MenuOptionGroup
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
                Modal/ModalContent/ModalHeader/ModalContent/ModalFooter
              </a>
            </li>
            <li>
              <a href="#progress-docs">Progress</a>
            </li>
            <li>
              <a href="#radio-docs">Radio/RadioGroup</a>
            </li>
            <li>
              <a href="#select-docs">Select</a>
            </li>
            <li>
              <a href="#spinner-docs">Spinner</a>
            </li>
            <li>
              <a href="#tabs-docs">Tabs/Tab/TabContainer</a>
            </li>
            <li>
              <a href="#tag-docs">Tags/TagGroup</a>
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
          <TextfieldDocs />
          <ToastDocs />
          <TooltipDocs />
        </TabContainer>
        <Tab>TODO</Tab>
        <TabContainer>
          <ul>
            <li>
              More components:
              <ul>
                <li>Icons</li>
              </ul>
            </li>
            <li>Documentation (WIP)</li>
          </ul>
        </TabContainer>
        <Tab>Concepts</Tab>
        <TabContainer>
          <h2>Valuable components instead of components without added value</h2>
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
