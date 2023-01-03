import { createSignal } from "solid-js";
import { Checkbox } from "./checkbox";
export const CheckboxDocs = () => {
    const [alignRight, setAlignRight] = createSignal(false);
    const [asSwitch, setAsSwitch] = createSignal(false);
    const [checked, setChecked] = createSignal(false);
    const [disabled, setDisabled] = createSignal(false);
    const [invalid, setInvalid] = createSignal(false);
    const [events, setEvents] = createSignal('');
    return <>
    <h2 id="checkbox-docs">Checkbox</h2>
    <p>The checkbox component can either be used as a normal checkbox or a switch.</p>
    <h3>Properties</h3>
    <p>It has all <a href="https://developer.mozilla.org/de/docs/Web/HTML/Element/Input/checkbox" target="_blank" rel="noopener">the properties of an input of type "checkbox"</a>, and additionally:</p>
    <pre>
        {`
CheckboxProps {
  align?: 'left' | 'right';
  switch?: boolean;
  onchange?: (checked: boolean) => void;
}`}
      </pre>
      <dl>
        <dt>align</dt>
        <dd>Whether the checkbox should be left or right from the content; default is left</dd>
        <dt>switch</dt>
        <dd>If the checkbox should be displayed as a switch instead</dd>
        <dt>setChecked</dt>
        <dd>Fills a setter with a boolean checked state</dd>
      </dl>
      <h4>Effect</h4>
      <label for="checkbox-alignment">left </label><Checkbox id="checkbox-alignment" switch setChecked={setAlignRight}> right</Checkbox>{" "}
      <Checkbox setChecked={setAsSwitch}>switch</Checkbox>{" "}
      <Checkbox setChecked={setChecked}>checked</Checkbox>{" "}
      <Checkbox setChecked={setDisabled}>disabled</Checkbox>{" "}
      <Checkbox setChecked={setInvalid}>invalid</Checkbox>
      <br /><br />
      <pre data-title="setChecked-calls" style={{ "max-height": "6em", "overflow": "auto" }}>
        {events()}
      </pre>
      <div class="example">
        <Checkbox align={alignRight() ? 'right' : 'left'} switch={asSwitch()} checked={checked()} disabled={disabled()} aria-invalid={invalid() || undefined} setChecked={(checked) => setEvents((e) => `setChecked(${checked})\n${e}`)}> Example Checkbox </Checkbox>
      </div>
    <hr />
  </>;
};
