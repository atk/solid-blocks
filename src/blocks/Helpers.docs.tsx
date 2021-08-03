export const HelpersDocs = () => <>
  <h2 id="createLocalStorageSignal-docs">createLocalStorageSignal</h2>
  <p>This helper ties a signal to localStorage.</p>
  <pre data-title="function signature">
    {`
createLocalStorageSignal(
  key: string,
  initialValue?: string,
  useJson?: false
): [Accessor<string>, Setter<string>]

createLocalStorageSignal<T>(
  key: string,
  initialValue?: T,
  useJson: true
): [Accessor<T>, Setter<T>]`}
  </pre>
  <p>If the initial value is null or undefined, it will not be set to localStorage.</p>
  <hr/>
  <h2 id="useMediaQuery-docs">useMediaQuery</h2>
  <p>This allows to react on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank" rel="noopener">media query</a> changes.</p>
  <pre data-title="function signature">
    {`useMediaQuery(query: MediaQuery) => Accessor<boolean>`}
  </pre>
  <p>For example, if you want an element to be shown only on mobile devices, you could use:</p>
  <pre>
    {`
const isMobile = useMediaQuery('(max-width: 40em)');
return <Show when={isMobile()}>Only shown in mobile</Show>`}
  </pre>
  <hr/>
</>