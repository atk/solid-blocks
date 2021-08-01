export const BarDocs = () => {
  return (
    <>
      <h2 id="bar-docs">Bar</h2>
      <p>
        The bar component is meant either as a top/bottom bar or a hidden
        sidebar for a web application. Up to three containers inside it are
        equally spaced, which is especially useful for application layouts.
      </p>
      <h3>Properties</h3>
      <pre>
        {`
BarProps {
  hidden?: boolean | 'true' | 'false';
  mount?: HTMLElement;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  position?: 'relative' | 'sticky' | 'fixed' | 'absolute';
  portal?: boolean;
}
`}
      </pre>
      <dl>
        <dt>hidden</dt>
        <dd>
          Hides the bar if <code>true</code> or <code>"true"</code>; especially
          helpful for auto-hide scenarios or side bars that are toggled by a
          button
        </dd>
        <dt>mount</dt>
        <dd>
          If portal is not <code>false</code>, you can determine the mount point
          for the portal the bar is rendered into here
        </dd>
        <dt>placement</dt>
        <dd>
          The place the bar should be visible in. If none is given, you need to
          format the bar yourself with CSS
        </dd>
        <dt>position</dt>
        <dd>
          Allows to adapt the CSS position attribute to different use cases
        </dd>
        <dt>portal</dt>
        <dd>
          If <code>false</code>, the bar is rendered at the current position and
          not through a portal
        </dd>
      </dl>
      <hr />
    </>
  );
};
