import { createSignal } from "solid-js";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemGroup,
  MenuOption,
  MenuOptionGroup,
  MenuProps,
} from "./menu";
import { Radio, RadioGroup } from "./radio";

export const MenuDocs = () => {
  const [align, setAlign] = createSignal('center');
  const [events, setEvents] = createSignal("");
  return (
    <>
      <h2 id="menu-docs">
        Menu / MenuButton / MenuItem / MenuItemGroup / MenuOption / MenuOptionGroup
      </h2>
      <p>
        The menu component is a versatile menu for pages and web applications.
        It features items, groups, options and option groups. It does not
        feature sub menus, because they are rather inaccessible.
      </p>
      <p>
        MenuItems can be used directly in the menu or inside a MenuItemGroup;
        MenuOptions can only be used inside a MenuOptionGroup.
      </p>
      <h3>Properties</h3>
      <pre>
        {`
MenuProps {
  open?: boolean;
  ontoggle?: (open?: boolean) => void;
  align?: 'left' | 'center' | 'right';
}
MenuButtonProps extends ButtonProps;
MenuItemProps extends JSX.Element;
MenuItemGroupProps {
  title?: JSX.Element;
}
MenuOptionsProps {
  value?: string;
  onchange?: (checked?: boolean) => void;
}
MenuOptionsGroupProps {
  type?: 'radio' | 'checkbox';
  title?: JSX.Element;
  value?: string;
  onchange?: (value?: string | string[]) => void;
}`}
      </pre>
      <dl>
        <dt>MenuProps.open</dt>
        <dd>if the menu is open</dd>
        <dt>MenuProps.ontoggle</dt>
        <dd>
          an optional callback that will receive the open state as argument when
          it toggles
        </dd>
        <dt>MenuProps.align</dt>
        <dd>how the menu should be aligned to the button: 'left', 'center' or 'right'. Default is 'left'.</dd>
        <dt>MenuItemGroupProps.title</dt>
        <dd>
          An optional title of the menu item group; plain text will be wrapped
        </dd>
        <dt>MenuOptionProps.value</dt>
        <dd>
          The value that will be collected in the onchange handler of the
          MenuOptionGroup
        </dd>
        <dt>MenuOptionProps.onchange</dt>
        <dd>
          A change handler for an individual option that will receive the toggle
          state of the option as an argument; just there for convenience reasons
          - consider using the MenuOptionGroup's handler instead
        </dd>
        <dt>MenuOptionGroupProps.type</dt>
        <dd>either "radio" or "checkbox"; default is "radio"</dd>
        <dt>MenuOptionGroupProps.title</dt>
        <dd>Same as MenuItemGroupProps.title, just for the option group</dd>
        <dt>MenuOptionGroupProps.value</dt>
        <dd>
          the preset value of the option group, which can be a string for a
          single selected checkbox or radio button and an array of strings for
          multiple selected checkboxes
        </dd>
      </dl>
      <RadioGroup onchange={setAlign} value={align()}>
        <Radio value="left"> left</Radio>
        <Radio value="center"> center</Radio>
        <Radio value="right"> right</Radio>
      </RadioGroup>
      <pre
        data-title="onchange-calls"
        style={{ "max-height": "6em", overflow: "auto" }}
      >
        {events()}
      </pre>
      <div class="example" style={{ "text-align": align() }}>
        <Menu align={align() as MenuProps['align']}>
          <MenuButton variant="icon">☰</MenuButton>
          <MenuItem>Item outside MenuItemGroup</MenuItem>
          <hr />
          <MenuItem>Item after a &lt;hr/&gt;</MenuItem>
          <MenuItemGroup>
            <MenuItem>inside a MenuItemGroup</MenuItem>
            <MenuItem>without a title</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Another MenuItemGroup">
            <MenuItem>with a title</MenuItem>
          </MenuItemGroup>
          <MenuOptionGroup
            title="MenuOptionGroup type=radio"
            onchange={(value) =>
              setEvents((e) => `radio: onchange(${value})\n${e}`)
            }
          >
            <MenuOption value="first">First radio option</MenuOption>
            <MenuOption value="second">Second radio option</MenuOption>
          </MenuOptionGroup>
          <MenuOptionGroup
            title="MenuOptionGroup type=checkbox"
            type="checkbox"
            onchange={(value) =>
              setEvents(
                (e) => `checkbox: onchange([${value.join(", ")}])\n${e}`
              )
            }
          >
            <MenuOption value="first">First checkbox option</MenuOption>
            <MenuOption value="second">Second checkbox option</MenuOption>
          </MenuOptionGroup>
        </Menu>
      </div>
      <pre>
        {`
<Menu align="${align()}">
  <MenuButton variant="icon">☰</MenuButton>
  <MenuItem>Item outside MenuItemGroup</MenuItem>
  <hr />
  <MenuItem>Item after a &lt;hr/&gt;</MenuItem>
  <MenuItemGroup>
    <MenuItem>inside a MenuItemGroup</MenuItem>
    <MenuItem>without a title</MenuItem>
  </MenuItemGroup>
  <MenuItemGroup title="Another MenuItemGroup">
    <MenuItem>with a title</MenuItem>
  </MenuItemGroup>
  <MenuOptionGroup
    title="MenuOptionGroup type=radio"
    onchange={(value) =>  {/*…*/}}
  >
    <MenuOption value="first">First radio option</MenuOption>
    <MenuOption value="second">Second radio option</MenuOption>
  </MenuOptionGroup>
  <MenuOptionGroup
    title="MenuOptionGroup type=checkbox"
    type="checkbox"
    onchange={(value) => {/*…*/}}
  >
    <MenuOption value="first">First checkbox option</MenuOption>
    <MenuOption value="second">Second checkbox option</MenuOption>
  </MenuOptionGroup>
</Menu>`}
      </pre>
      <hr />
    </>
  );
};
