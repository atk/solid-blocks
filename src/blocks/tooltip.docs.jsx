import { createSignal } from "solid-js"
import { Checkbox } from "./checkbox";
import { Radio, RadioGroup } from "./radio";
import { Select } from "./select";
import { Tooltip, TooltipPosition, TooltipTrigger } from "./tooltip";

export const TooltipDocs = () => {
  const [arrow, setArrow] = createSignal(true);
  const [nowrap, setNowrap] = createSignal(false);
  const [pos, setPos] = createSignal('s');
  const triggers: [undefined, ...TooltipTrigger[]] = [undefined, true, false, ['focus'], 'hover'];
  const [trigger, setTrigger] = createSignal("0");
  return <>
    <h2 id="tooltip-docs">Tooltip</h2>
    <p>The tooltip component shows a helpful text around other components, i.e. buttons, form fields, etc.</p>
    <p>If the tooltip encapsulates plain text and should support focus, it will be wrapped in a span with tabindex=0.</p>
    <h3>Properties</h3>
    <pre>
      {`TooltipProps {
arrow?: boolean;
nowrap?: boolean;
position?: TooltipPosition;
content: JSX.Element;
trigger?: SingularOrArray<TooltipTrigger>;
      }`}
    </pre>
    <dl>
      <dt>arrow</dt>
      <dd>whether the tooltip should have an arrow pointing to the triggering element; default is <code>true</code></dd>
      <dt>nowrap</dt>
      <dd>does allow the tooltip content to wrap into multiple lines without &lt;br /&gt; tags</dd>
      <dt>position</dt>
      <dd>the position relative from the trigger element at which the tooltip is shown as shorthand compass direction; can be one of 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'; default is 's'</dd>
      <dt>content</dt>
      <dd>the content fo the tooltip</dd>
      <dt>trigger</dt>
      <dd>
        allows overwriting the trigger behavior by setting an array or a single value of
        <ul>
          <li><code>true</code> - will show the tooltip in any case</li>
          <li><code>false</code> - will never show the tooltip</li>
          <li><code>'focus'</code> - will display the tooltip if any trigger element receives the focus</li>
          <li><code>'hover'</code> - will display the tooltip if any trigger element is hovered</li>
          <li><code>() =&gt; boolean</code> - an accessor with a boolean return value can be used to manually set the display state</li>
        </ul>
      </dd>
    </dl>
    <Checkbox onchange={setArrow} checked={arrow()}>arrow</Checkbox>{" "}
    <Checkbox onchange={setNowrap} checked={nowrap()}>nowrap</Checkbox>{" "}
    <Select label="position" onchange={(p) => setPos(p as TooltipPosition)} value={pos()}>
      <option value="n">n - North</option>
      <option value="ne">ne - North east</option>
      <option value="e">e - East</option>
      <option value="se">se - South east</option>
      <option value="s">s - South</option>
      <option value="sw">sw - South west</option>
      <option value="w">w - West</option>
      <option value="nw">nw - North west</option>
    </Select>{" "}
    <RadioGroup onchange={setTrigger} value={trigger()}>
      <Radio value="0"> Default: Focus + Hover</Radio>{" "}
      <Radio value="1"> Always on</Radio>{" "}
      <Radio value="2"> Always off</Radio>{" "}
      <Radio value="3"> Focus only</Radio>{" "}
      <Radio value="4"> Hover only</Radio>
    </RadioGroup><br/><br/>
    <div class="example" style={{display: 'flex', "align-items": "center", "justify-content": "center", height: "8em"}}>
      <Tooltip
        content="Tooltip content that is slightly longer"
        arrow={arrow()}
        nowrap={nowrap()}
        position={pos() as TooltipPosition}
        trigger={triggers[+trigger()]}
      >
        trigger text
      </Tooltip>
    </div>
    <hr/>
  </>
}