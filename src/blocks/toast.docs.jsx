import { createEffect, createSignal, Show } from "solid-js"
import { Button } from "./button";
import { Message } from "./message";
import { Select } from "./select";
import { TextField } from "./textfield";
import { Toast, ToastPosition } from "./toast";

export const ToastDocs = () => {
  const [shown, setShown] = createSignal(false);
  const [pos, setPos] = createSignal<ToastPosition>('bottom-left');
  const [timeout, setTimeout] = createSignal(0);
  const [content, setContent] = createSignal('Toast content');
  return <>
    <h2 id="toast-docs">Toast</h2>
    <p>The toast component is meant to present live messages to the user without interrupting interactions.</p>
    <h3>Properties</h3>
    <pre>
      {`
ToastProps {
  children: JSX.Element | (?) => JSX.Element
  timeout?: number
  position?: ToastPosition
  mount?: HTMLElement
  onhide?: () => void
}`}
    </pre>
    <dl>
      <dt>children</dt>
      <dd>this can be either a normal element or a function that receives <code>{"{ update: ToastProps['children'], hide: () => void }"}</code> as its argument and returns element(s)</dd>
      <dt>timeout</dt>
      <dd>milliseconds until the toast should be removed; 0 means infinitely, default is 5000 milliseconds</dd>
      <dt>position</dt>
      <dd>where the toast should be rendered, can be "top", "top-right", "top-left", "bottom", "bottom-right" or "bottom-left"; default will be "top-right", will not be used if <code>mount</code> is overriding the portal mount point</dd>
      <dt>mount</dt>
      <dd>optional, allows to override the portal mount point if you add a HTMLElement</dd>
      <dt>onhide</dt>
      <dd>convenience callback that allows to perform an operation once the toast is hidden</dd>
    </dl>
    <Select label="position" onchange={(p) => setPos(p as ToastPosition)} value={pos()}>
      <option value="top">top</option>
      <option value="top-right">top-right</option>
      <option value="top-left">top-left</option>
      <option value="bottom">bottom</option>
      <option value="bottom-right">bottom-right</option>
      <option value="bottom-left">bottom-left</option>
    </Select>{" "}
    <TextField type="number" min="0" label="timeout" onchange={(t) => setTimeout(Number(t))} value={timeout()} />{" "}
    <TextField label="content" onchange={setContent} value={content()} /><br/><br/>
    <div class="example">
      <Button onclick={() => setShown(s => !s)}>Toggle toast</Button>
      <Show when={shown()}>
        <Toast 
          position={pos()}
          timeout={timeout()}
          onhide={() => setShown(false)}
        >{({hide}) => 
          <Message type="info">
            <Button style={{float: "right"}} variant="icon" onclick={hide}>✕</Button>
            {content()}
          </Message>
        }</Toast>
      </Show></div>
      <pre>
        {`<Toast 
  position="${pos()}"
  timeout={${timeout()}}
>{({hide}) => 
  <Message type="info">
    <Button style={{float: "right"}} variant="icon" onclick={hide}>✕</Button>
    {"${content()}"}
  </Message>
}</Toast>`}
      </pre>
    <hr/>
  </>
}