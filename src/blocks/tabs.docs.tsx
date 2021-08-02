import { createSignal } from "solid-js"
import { Checkbox } from "./checkbox";
import { Tab, TabContainer, Tabs } from "./tabs";

export const TabsDocs = () => {
  const [events, setEvents] = createSignal('');
  const [vertical, setVertical] = createSignal(false);
  return <>
    <h2 id="tabs-docs">Tabs / Tab / TabContainer</h2>
    <p>The tabs component can hide content inside tab containers and make one at a time selectable via a tab. Inside the tabs component, tab and tab container elements can be mixed freely, so you can either group tab and container or have all the tabs first and then all the containers.</p>
    <p>If the number of tabs and tab containers will mismatched, a warning is emitted on the console.</p>
    <h3>Properties</h3>
    <pre>
      {`
TabsProps {
  index?: number
  vertical?: boolean
  onchange?: (index: number) => void
}`}
    </pre>
    <dl>
      <dt>index</dt>
      <dd>the number of the tab that should be opened</dd>
      <dt>vertical</dt>
      <dd>show the tabs on the left instead of the top</dd>
      <dt>onchange</dt>
      <dd>convenient handler that is called with the index of a selected tab</dd>
    </dl>
    <Checkbox onchange={() => setVertical(v => !v)}>vertical</Checkbox>
    <pre data-title="onchange-events" style={{ "max-height": "9em" }}>{events()}</pre>
    <div class="example">
      <Tabs vertical={vertical()} onchange={i => setEvents(e => `onchange(${i})\n${e}`)}>
        <Tab>First tab</Tab>
        <TabContainer>First tab container</TabContainer>
        <Tab>Second tab</Tab>
        <TabContainer>Second tab container</TabContainer>
        <Tab>Third tab</Tab>
        <TabContainer>Third tab container</TabContainer>
      </Tabs>
    </div>
    <hr/>
  </>
}
