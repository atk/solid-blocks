import { createSignal } from "solid-js"
import { Checkbox } from "./checkbox"
import { Select } from "./select";
import { TextField, TextFieldType } from "./textfield";

export const TextfieldDocs = () => {
  const [vertical, setVertical] = createSignal(false);
  const [multiline, setMultiline] = createSignal(false);
  const [value, setValue] = createSignal('');
  const [type, setType] = createSignal('text');
  const [events, setEvents] = createSignal('');
  return <>
    <h2 id="textfield-docs">Textfield</h2>
    <p>The textfield component is a simple text field form control.</p>
    <h3>Properties</h3>
    <p>In addition to most every property available to &lt;input&gt; fields, it has the following properties:</p>
    <pre>
      {`
TextfieldProps {
  aria-orientation?: 'horizontal' | 'vertical'
  multiline?: boolean
  label: JSX.Element
  type?: TextFieldType
  onchange?: (value?: string) => void
}`}
    </pre>
    <dl>
      <dt>aria-orientation</dt>
      <dd>if set to vertical, the label will be shown on the left of the field</dd>
      <dt>multiline</dt>
      <dd>if set to <code>true</code> the text field will be a textarea</dd>
      <dt>label</dt>
      <dd>the description of the field</dd>
      <dt>type</dt>
      <dd>on of 'text', 'color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'range', 'search', 'submit', 'tel', 'time', 'url', 'week'; default is 'text'; see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types" target="_blank" rel="noopener">&lt;input&gt; types</a> for reference; only available if multiline is not <code>true</code></dd>
      <dt>onchange</dt>
      <dd>convenience handler to receive the value whenever it changes</dd>
    </dl>
    <Checkbox onclick={() => setVertical(v => !v)}> aria-orientation="vertical"</Checkbox>{" "}
    <Checkbox onclick={() => setMultiline(m => !m)}> multiline</Checkbox>{" "}
    <Select onchange={setType} value={type()} label="type">
      <option value="text">text</option>
      <option value="color">color</option>
      <option value="date">date</option>
      <option value="datetime-local">datetime-local</option>
      <option value="email">email</option>
      <option value="file">file</option>
      <option value="month">month</option>
      <option value="number">number</option>
      <option value="password">password</option>
      <option value="range">range</option>
      <option value="search">search</option>
      <option value="tel">tel</option>
      <option value="time">time</option>
      <option value="url">url</option>
      <option value="week">week</option>
    </Select>
    <pre data-title="onchange-events" style={{"max-height": "9em"}}>{events()}</pre>
    <div class="example">
      <TextField
        aria-orientation={vertical() ? 'vertical' : undefined}
        multiline={multiline()}
        type={multiline() ? undefined : type() as TextFieldType}
        label="Textfield"
        onchange={(v) => {
          setValue(v);
          setEvents(e => `onchange("${v}")\n${e}`);
        }}
        value={value()}
      />
    </div>
    <hr/>
  </>
}