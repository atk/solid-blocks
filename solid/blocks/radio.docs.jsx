import { createSignal } from "solid-js";
import { Button } from "./button";
import { Radio, RadioGroup } from "./radio";
export const RadioDocs = () => {
    const [value, setValue] = createSignal("2");
    const [events, setEvents] = createSignal("");
    return <>
    <h2 id="radio-docs">Radio / RadioGroup</h2>
    <p>The radio component is a simple radio button. It has all the properties of a normal input with type="radio". However, wrapping it in a radio group allows an easy way to control it.</p>
    <h3>Properties</h3>
    <pre>
      {`
RadioProps {
  align?: 'left' | 'right';
  autofocus?: boolean;
  setChecked?: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  value?: string;
}
RadioGroupProps {
  setValue?: (value?: string) => void;
  value?: () => string;
}`}
    </pre>
    <Button variant="secondary" onClick={() => setValue("1")}>
      Activate first
    </Button>
    <Button variant="secondary" onClick={() => setValue("2")}>
      Activate second
    </Button>
    <pre data-title="setValue-calls" style={{ "max-height": "9em" }}>{events()}</pre>
    <div class="example">
      <RadioGroup class="flex-row" value={value} setValue={(value) => {
            setEvents(e => `setValue("${value}")\n${e}`);
            setValue(value);
        }}>
        <Radio value="1"> First</Radio>
        <Radio value="2"> Second</Radio>
        <Radio value="3" disabled> Third</Radio>
        <Radio value="4" aria-invalid="true"> Fourth</Radio>
      </RadioGroup>
    </div>
    <hr />
  </>;
};
