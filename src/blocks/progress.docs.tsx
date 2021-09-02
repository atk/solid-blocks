import { createSignal, onCleanup, onMount } from "solid-js";
import { Progress } from "./progress";

export const ProgressDocs = () => {
  const [value, setValue] = createSignal(0);
  let interval: number;
  onMount(() => {
    interval = window.setInterval(() => {
      setValue(v => (v + 1) % 101);
    }, 120);
  })
  onCleanup(() => window.clearInterval(interval));
  return <>
    <h2 id="progress-docs">Progress</h2>
    <p>The progress component shows a quantitative progress that can should only increase, unlike <a href="#meter-docs">meter</a>, which can go both ways.</p>
    <h3>Properties</h3>
    <pre>{`
ProgressProps {
  max: string | number;
  value: string | number;
}
`}</pre>
    <dl>
      <dt>max</dt>
      <dd>an optional maximum number of the value, default is <code>1</code>.</dd>
      <dt>value</dt>
      <dd>the progress value</dd>
    </dl>
    <div class="example">
      <Progress max="100" value={value()} />
    </div>
    <pre>
      {`
<Progress max="100" value={${value()}} />`}
    </pre>
    <hr/>
  </>
}