import { Component, createSignal, Show } from "solid-js";
import {
  Avatar,
  AvatarGroup,
  Bar,
  Breadcrumbs,
  Button,
  Checkbox,
  Message,
  Progress,
  Spinner,
  Tabs,
  Tab,
  TabContainer,
  Tag,
  TagGroup,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemGroup,
  MenuOption,
  MenuOptionGroup,
  Meter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  Tooltip,
  TooltipPosition,
  useDarkMode,
} from "./blocks";

import "./app.css";

const App: Component = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const tooltipPositions: TooltipPosition[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
  const [tooltipPosition, setTooltipPosition] = createSignal(0)
  const [showBar, setShowBar] = createSignal(false);

  return (
    <div class="app">
      <div style={{ float: "right" }}>
        <Checkbox
          switch
          onchange={(on) => setDarkMode(on)}
          checked={darkMode()}
        >
          <Show when={darkMode()} fallback=" Dark Mode">
            {" Light Mode"}
          </Show>
        </Checkbox>{" "}
        <Menu style={{ right: 0 }}>
          <MenuButton variant="icon">☰</MenuButton>
          <MenuItem onClick={() => console.log("Item 1 selected")}>
            Item 1
          </MenuItem>
          <MenuItemGroup title="Menu item group">
            <MenuItem onClick={() => console.log("Item 2 selected")}>
              Item 2
            </MenuItem>
            <MenuItem onClick={() => console.log("Item 3 selected")}>
              Item 3
            </MenuItem>
          </MenuItemGroup>
          <MenuItem aria-disabled="true">Disabled Item</MenuItem>
          <MenuOptionGroup title="Radio options" onchange={console.log} value="item 1">
            <MenuOption value="item 1">Radio 1</MenuOption>
            <MenuOption value="item 2">Radio 2</MenuOption>
            <MenuOption value="disabled" aria-disabled="true">Disabled Radio</MenuOption>
          </MenuOptionGroup>
          <MenuOptionGroup title="Checkbox options" onchange={console.log} type="checkbox" value={["disabled"]}>
            <MenuOption value="item 1">Checkbox 1</MenuOption>
            <MenuOption value="item 2">Checkbox 2</MenuOption>
            <MenuOption value="disabled" aria-disabled="true">Disabled Checkbox</MenuOption>
          </MenuOptionGroup>
        </Menu>
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
        <Tab>Features</Tab>
        <TabContainer>
          <ul>
            <li>Accordion/-Header/-Group</li>
            <li>Avatar/-Group</li>
            <li>Breadcrumbs</li>
            <li>Button (needs icons)</li>
            <li>Checkbox</li>
            <li>Loading Spinner</li>
            <li>Menu/-Item/-ItemGroup/-Option/-OptionGroup</li>
            <li>Meter</li>
            <li>Messages (needs icons)</li>
            <li>Modal</li>
            <li>Progress</li>
            <li>Radio/-Group</li>
            <li>Select</li>
            <li>Tabs/Tab/TabContainer</li>
            <li>Tags</li>
            <li>TextField</li>
            <li>Toast</li>
            <li>Improved CSS: theme-ability using CSS variables, dark mode</li>
          </ul>
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
            <li>Documentation</li>
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
      <Breadcrumbs>
        <a href="">You</a> <a href="">are</a> <span>Here</span>
      </Breadcrumbs>
      <div class="flex-row">
        <Message type="success">We have messages!</Message>
        <Message type="info">Information</Message>
        <Message type="warning">Warning</Message>
        <Message type="error">Error Message</Message>
      </div>
      <p>
        <TextField
          label="Test"
          placeholder="test"
          aria-orientation="vertical"
        />
        <Button>Button</Button> <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="link">Link</Button> <span>Text</span> <Spinner />
      </p>
      <p>
        <AvatarGroup>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      <RadioGroup value="1">
        <Radio name="radio-test" value="1">
          {" "}
          1
        </Radio>
        <Radio name="radio-test" value="2">
          {" "}
          2
        </Radio>
      </RadioGroup>
      </p>
      <p>
        <Select label="Test Select" value="2">
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
      </p>
      <Message type="info" class={`${darkMode() ? "light" : "dark"}-mode`}>
        I can switch the theme mode and use a plain linked{" "}
        <Tag href="" plain>
          Tag
        </Tag>{" "}
        directly inside the text, a message or as part of a group:
      </Message>
      <p><TagGroup>
        <Tag>One Tag</Tag>
        <Tag>Two Tags</Tag>
        <br />
        <Tag>Red Tags, blue Tags</Tag>
      </TagGroup>{" "}
      and even more.
      </p>
      <p>Progress: <Progress value="30" max="100" /> and Meter:{" "}
      <Meter value="50" max="100" />
      </p>
      <Modal closeOnClickOutside>
        {({ toggle }) => (<>
          <Button onClick={() => toggle()}>Show Modal</Button>
          <ModalContent>
            <ModalHeader>
              Modal Header
              <Button variant="icon" onClick={toggle}>✕</Button>
            </ModalHeader>
            <ModalBody>
              <p>This is the modal's body. It can contain whatever.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggle}>OK</Button>
            </ModalFooter>
          </ModalContent>
        </>)}
      </Modal>
      <Toast position="bottom-right" timeout={0}>
        {({hide}) => <Message type="info">
          We have Toasts now <Button variant="icon" style={{ float: "right" }} onClick={hide}>✕</Button>
        </Message>}
      </Toast>
      <Toast position="bottom-right"><Message type="info">This will vanish after 5 seconds</Message></Toast>
      <Toast position="bottom-right" timeout={10000}>{({update}) => {
        setTimeout(() => update(<Message type="success">Updated! Will hide after 8 more seconds</Message>), 2000);
        return <Message type="warning">And this one updates after 2 seconds</Message>;
      }}</Toast>
      <p align="center" onClick={() => setTooltipPosition(pos => (pos + 1) % tooltipPositions.length)}>
        <Tooltip content="Tooltip-Text" position={tooltipPositions[tooltipPosition()]}>
          Tooltip-Trigger ({tooltipPositions[tooltipPosition()]})
        </Tooltip>
      </p>
      <p>
        <Button onclick={() => setShowBar(show => !show)}>Toggle Sidebar</Button>
        <Bar placement="right" position="fixed" hidden={!showBar()} overlay>
          <main>
            <h2>Sidebar</h2>
            <p style={{width: "12em"}}>I can place up to 3 containers in the sidebar. The first one will always align to the top, the last one to the bottom. If there is only one container, it will fill the whole bar</p>
          </main>
          <footer>This is the footer</footer>
        </Bar>

      </p>
    </div>
  );
};

export default App;
