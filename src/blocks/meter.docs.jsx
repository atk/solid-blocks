import { createSignal, onCleanup, onMount } from "solid-js";
import { Meter } from "./meter";

export const MeterDocs = () => {
  const [value, setValue] = createSignal(0);
  const state = {
    interval: 0,
    counter: 0,
    current: 0,
    next: 0,
    steps: 20,
  };
  onMount(() => {
    state.interval = setInterval(() => {
      if (state.counter++ % state.steps === 0) {
        state.counter = 0;
        state.current = state.next;
        state.next = Math.floor(Math.random() * 101);
        setValue(state.current);
      } else {
        setValue(
          state.current +
            Math.floor(
              ((state.next - state.current) / state.steps) * state.counter
            )
        );
      }
    }, 100);
  });
  onCleanup(() => clearInterval(state.interval));

  return (
    <>
      <h2 id="meter-docs">Meter</h2>
      <p>
        The meter component is meant to present a numeric value that can change
        in either direction, unlike <a href="#progress-docs">progress</a>, which
        should only increase its value.
      </p>
      <h3>Properties</h3>
      <pre>
        {`
MeterProps {
  min?: number | string; // or aria-valuemin
  max?: number | string; // or aria-valuemax
  value?: number | string; // or aria-valuenow
}`}
      </pre>
      <div class="example">
        <Meter min={0} max={100} value={value()} />
      </div>
      <pre>{`<Meter min={0} max={100} value={${value()}} />`}</pre>
      <hr />
    </>
  );
};
