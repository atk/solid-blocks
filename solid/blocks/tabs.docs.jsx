import { createSignal } from "solid-js";
import { Checkbox } from "./checkbox";
import { Tab, TabList, TabContainer, Tabs } from "./tabs";
export const TabsDocs = () => {
    const [events, setEvents] = createSignal('');
    const [vertical, setVertical] = createSignal(false);
    return <>
    <h2 id="tabs-docs">Tabs / Tab / TabContainer</h2>
    <p>The tabs component can hide content inside tab containers and make one at a time selectable via a tab. Inside the tabs component, tab and tab container elements can be mixed freely, so you can either group tab and container or have all the tabs first and then all the containers.</p>
    <p>If the number of tabs and tab containers will mismatched, a warning is emitted on the console.</p>
    <h3>Structure and Properties</h3>
    <pre>
      {`
<Tabs>
  <TabList>
    <Tab>…</Tab>
    ⋮
  </TabList>
  <TabContainer>…</TabContainer>
  ⋮
</Tabs>

TabsProps {
  index?: number
  setIndex?: (index: number) => void
}
TabsListProps {
  aria-orientation?: "horizontal" | "vertical"
}`}
    </pre>
    <dl>
      <dt>index</dt>
      <dd>the number of the tab that should be opened</dd>
      <dt>setIndex</dt>
      <dd>convenient handler that is called with the index of a selected tab</dd>
      <dt>aria-orientation</dt>
      <dd>if "vertical", show the tabs on the left instead of the top</dd>
    </dl>
    <Checkbox setChecked={setVertical}>vertical</Checkbox>
    <pre data-title="setIndex-calls" style={{ "max-height": "9em" }}>{events()}</pre>
    <div class="example">
      <Tabs setIndex={i => setEvents(e => `setIndex(${i})\n${e}`)}>
        <TabList aria-orientation={vertical() ? "vertical" : undefined}>
          <Tab>First tab</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab>
        </TabList>
        <TabContainer>First tab container</TabContainer>
        <TabContainer>Second tab container</TabContainer>
        <TabContainer>Third tab container</TabContainer>
      </Tabs>
    </div>
    <hr />
  </>;
};
