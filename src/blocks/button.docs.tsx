import { Button } from './button'

export const ButtonDocs = () => {
  return (
    <>
      <h2 id="button-docs">Button</h2>
      <p>
        The button component is meant as a versatile form or standalone button.
      </p>
      <div class="example">
        It comes as <Button>Primary</Button>, <Button variant="secondary">Secondary</Button>, <Button variant="link">Link</Button> and <Button variant="icon">🤗</Button> Icon button.
      </div>
      <h3>Properties</h3>
      <pre>
        {`
ButtonProps {
  variant?: 'primary' | 'secondary' | 'link' | 'icon';
}
`}
      </pre>
      <p>The default variant is primary. Otherwise, all HTML attributes applying to the button element can be used here.</p>
      <hr />
    </>
  );
};
