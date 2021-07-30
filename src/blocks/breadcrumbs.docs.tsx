import { Breadcrumbs } from "./breadcrumbs";

export const BreadcrumbsDocs = () => {
  return (
    <>
      <h2 id="breadcrumbs-docs">Breadcrumbs</h2>
      <p>
        The breadcrumbs component is as a means of navigating through
        encapsulated routes of a multi-page application. It will wrap its
        children into an ordered list.
      </p>
      <pre>
        {`
<Breadcrumbs>
  <a href="/">Home</a>
  <a href="/docs">Docs</a>
  <span>Breadcrumbs</span>
</Breadcrumbs>
`}
      </pre>
      <div class="example">
        <Breadcrumbs>
          <a href="/">Home</a>
          <a href="/docs">Docs</a>
          <span>Breadcrumbs</span>
        </Breadcrumbs>
      </div>
      <hr />
    </>
  );
};
