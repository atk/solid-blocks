import { createSignal } from "solid-js"
import { Checkbox } from "./checkbox";
import { Select } from "./select";

export const SelectDocs = () => {
  const [vertical, setVertical] = createSignal(false);
  const [events, setEvents] = createSignal('');
  return <>
    <h2 id="select-docs">Select</h2>
    <p>The select component is a form select component. Since it hides its content most of the time, it should be used sparingly; consider using a radio group instead. It takes normal &lt;option&gt; tags as child elements.</p>
    <h3>Properties</h3>
    <pre>
      {`
SelectProps {
  aria-orientation?: 'horizontal' | 'vertical'
  label: JSX.Element
  onchange?: (value: string) => void
  value?: string
}`}
    </pre>
    <dl>
      <dt>aria-orientation</dt>
      <dd>if set to 'vertical', the label will be above the select field instead of to its left</dd>
      <dt>label</dt>
      <dd>the description of the select field</dd>
      <dt>onchange</dt>
      <dd>a convenience handler for changes that will receive the value of the selected option tag</dd>
    </dl>
    <Checkbox onchange={setVertical}>aria-orientation="vertical"</Checkbox>
    <pre data-title="onchange-events">{events()}</pre>
    <div class="example">
      <Select
        label="framework"
        aria-orientation={vertical() ? 'vertical' : 'horizontal'}
        onchange={(value) => setEvents(e => `onchange("${value}")\n${e}`)}
      >
        <option value="solid">SolidJS</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
      </Select>
    </div>
    <hr/>
  </>
}