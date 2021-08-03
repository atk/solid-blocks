export const ThemeDocs = () => <>
  <h2 id="theme-docs">Theme</h2>
  <p>The theme is powered by <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener">CSS variables</a>, allowing to adapt them with ease. It also uses the class names <code>dark-mode</code> and <code>light-mode</code> to allow switching between these modes - even within a container.</p>
  <h3>Dark mode</h3>
  <p>For dark/light mode, there is also a little helper function <code>useDarkMode</code>:</p>
  <pre data-title="function signature">
    {`useDarkMode(localStorageKey = "COLOR_SCHEME"): [Accessor<boolean>, Setter<boolean>]`}
  </pre>
  <p>It will first attempt to get a user setting from local storage, then from the browser settings and finally take the initial value, which defaults to <code>false</code>. If you change the browser setting, the changed setting will also take effect if it differs from the current state.</p>
  <p>Setting the mode through the setter will store the value in local storage.</p>
  <p>Finally, it will automatically set the <code>dark-mode</code> in the document.body if dark mode is set.</p>
  <h3>Color theme</h3>
  <p>The color theme consists of the following css variables:</p>
  <dl>
    <dt>--text</dt>
    <dd>textual content, background for inverted content</dd>
    <dt>--negative-text</dt>
    <dd>textual content for inverted background</dd>
    <dt>--background</dt>
    <dd>default background</dd>
    <dt>--primary</dt>
    <dd>color for action elements like buttons, check marks etc.</dd>
    <dt>--primary-text</dt>
    <dd>textual content within a primary background</dd>
    <dt>--success</dt>
    <dd>background for success messages</dd>
    <dt>--success-text</dt>
    <dd>textual content for success messages</dd>
    <dt>--info</dt>
    <dd>background for informational messages</dd>
    <dt>--info-text</dt>
    <dd>textual content for informational messages</dd>
    <dt>--warning</dt>
    <dd>background for warning messages</dd>
    <dt>--warning-text</dt>
    <dd>textual content for warning messages</dd>
    <dt>--error</dt>
    <dd>background for error messages</dd>
    <dt>--error-text</dt>
    <dd>textual content for error messages</dd>
    <dt>--random-color[1-8]</dt>
    <dd>randomly colored content, like avatars and tags</dd>
  </dl>
  <p>To use the random colors, use the getRandom() function and set its value to the <code>data-random</code> attribute to be used with a <code>[data-random="1"]</code> selector.</p>
  <h3>Stacking context</h3>
  <p>in order to unify z-index, there are some variables available to stack your components over each other:</p>
  <dl>
    <dt>--stack-hide</dt>
    <dd>hiding content with a -1 z-index</dd>
    <dt>--stack-base</dt>
    <dd>normal content should have a z-index of 0</dd>
    <dt>--stack-dropdown</dt>
    <dd>content that drops down above the regular content, e.g. menu or a hypothetical custom select component</dd>
    <dt>--stack-sticky</dt>
    <dd>a sticky header or footer</dd>
    <dt>--stack-banner</dt>
    <dd>banners above the header or below the footer</dd>
    <dt>--stack-overlay</dt>
    <dd>the overlay of modals or similar components</dd>
    <dt>--stack-modal</dt>
    <dd>modal content</dd>
    <dt>--stack-bar</dt>
    <dd>bar component content</dd>
    <dt>--stack-skip-link</dt>
    <dd>back-to-top link or similar skip links</dd>
    <dt>--stack-toast</dt>
    <dd>toast content</dd>
    <dt>--stack-tooltip</dt>
    <dd>tooltip content</dd>
  </dl>
  <h3>Other CSS variables</h3>
  <p>Apart from that, there are sizes and the icon for the breadcrumbs:</p>
  <dl>
    <dt>--border-radius</dt>
    <dd>default border radius</dd>
    <dt>--round-border</dt>
    <dd>completely round border</dd>
    <dt>--hair-line</dt>
    <dd>fine lines</dd>
    <dt>--normal-line</dt>
    <dd>solid lines</dd>
    <dt>--wide-line</dt>
    <dd>wide lines</dd>
    <dt>--breadcrumb-icon</dt>
    <dd>the default icon delimiting breadcrumbs</dd>
  </dl>
</>