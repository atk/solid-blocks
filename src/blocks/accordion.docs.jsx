import { createMemo, createSignal } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Accordion, AccordionGroup, AccordionHeader } from './accordion';
import { Checkbox } from './checkbox';

export const AccordionDocs = () => {
  const [exampleOpen, setExampleOpen] = createSignal(false);
  const [events, setEvents] = createSignal('');
  const [useWrappedChilds, setUseWrappedChilds] = createSignal(false);
  const [allowMultiple, setAllowMultiple] = createSignal(false);
  const [allowToggle, setAllowToggle] = createSignal(false);
  const children = createMemo(() => 
    useWrappedChilds() 
      ? (open: boolean) => <><AccordionHeader>{open ? 'Open' : 'Closed'}</AccordionHeader><p>Rest</p></>
      : <><AccordionHeader>Static header</AccordionHeader><p>static content</p></>
  );

  return <>
    <h2 id="accordion-docs">Accordion</h2>
    <p>The &lt;Accordion&gt; component is meant to present a summary and disclose details on toggle interaction.</p>
    <h3>Simple example</h3>
    <pre>
      {`
<Accordion open>
  <AccordionHeader>Header</AccordionHeader>
  <p>Arbitrary content</p>
</Accordion>`}
    </pre>
    <div class="example" style={{"min-height": "6em"}}>
      <Accordion open>
        <AccordionHeader>Header</AccordionHeader>
        <p>Arbitrary content</p>
      </Accordion>
    </div>
    <h3>Properties</h3>
    <pre>
      {`
AccordionProps {
  children: JSX.Element | ((open: boolean) => JSX.Element);
  open?: boolean;
  ontoggle?: (open?: boolean) => void;
}`}
    </pre>
    <dl>
      <dt>children</dt>
      <dd>Can either be normal children or a function that receives the open state as a boolean and returns the children</dd>
      <dt>open</dt>
      <dd>Allows to set the open state from outside. If the outside state will not differ from the internal state, it will not change anything</dd>
      <dt>ontoggle</dt>
      <dd>An optional callback that will receive changes to the open state as a boolean argument</dd>
    </dl>
    <h4>Effect</h4>
    <Checkbox onChange={() => setExampleOpen(open => !open)}> open: boolean</Checkbox>{" "}
    <Checkbox onChange={() => setUseWrappedChilds(use => !use)}> use wrapped children: (open: boolean) =&gt; ...</Checkbox>
    <pre data-title="ontoggle-calls" style={{"max-height": "6em", "overflow": "auto"}}>
      {events()}
    </pre>
    <div class="example" style={{"min-height": "6em"}}>
      <Dynamic
        children={children()}
        component={Accordion}
        open={exampleOpen()}
        ontoggle={(open: boolean) => setEvents((e) => `ontoggle(${open})\n${e}`)}
      />
    </div>
    <hr/>
    <h2 id="accordiongroup-docs">AccordionGroup</h2>
    <p>The &lt;AccordionGroup&gt; allows grouping multiple accordions to enforce certain behavior, i.e. if multiple accordions may be toggled or if the last accordion may be closed again.</p>
    <h3>Properties</h3>
    <pre>
      {`
AccordionGroupProps {
  allowMultiple?: boolean;
  allowToggle?: boolean;
}`}
    </pre>
    <dl>
      <dt>allowMultiple</dt>
      <dd>if <code>true</code>, multiple accordions can be opened at a time; the last one will remain open, except if allowToggle is set to <code>true</code>:</dd>
      <dt>allowToggle</dt>
      <dd>if <code>true</code>, the last remaining accordion can be closed even though allowMultiple is set to <code>false</code></dd>
    </dl>
    <h4>Effect</h4>
    <Checkbox checked={allowMultiple()} onchange={() => setAllowMultiple(a => !a)}> allowMultiple</Checkbox>{" "}
    <Checkbox checked={allowToggle()} onchange={() => setAllowToggle(a => !a)}> allowToggle</Checkbox><br/><br/>
    <div class="example" style={{ "min-height": "9em"}}>
      <AccordionGroup allowMultiple={allowMultiple()} allowToggle={allowToggle()}>
        <Accordion>
          <AccordionHeader><b>First Accordion</b></AccordionHeader>
          <p>Opened content of first accordion</p>
        </Accordion>
        <Accordion>
          <AccordionHeader><b>Second Accordion</b></AccordionHeader>
          <p>Opened content of second accordion</p>
        </Accordion>
        <Accordion>
          <AccordionHeader><b>Third Accordion</b></AccordionHeader>
          <p>Opened content of third accordion</p>
        </Accordion>
      </AccordionGroup>
    </div>
    <hr/>
  </>
}