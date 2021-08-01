import { Message } from "./message";

export const MessageDocs = () => {
  return (
    <>
      <h2 id="message-docs">Message</h2>
      <p>
        The message component is meant as a simple messaging container, to be
        used either standalone, or in a <a href="#toast-docs">toast</a>.
      </p>
      <h3>Properties</h3>
      <pre>
        {`
MessageProps {
  type: 'success' | 'info' | 'warning' | 'error';
}`}
      </pre>
      <div class="example flex-row" style={{ "padding-top": "1.5em" }}>
        <Message type="success">Success Message</Message>
        <Message type="info">Info Message</Message>
        <Message type="warning">Warning Message</Message>
        <Message type="error">Error Message</Message>
      </div>
      <pre>
        {`
<Message type="success">Success Message</Message>
<Message type="info">Info Message</Message>
<Message type="warning">Warning Message</Message>
<Message type="error">Error Message</Message>`}
      </pre>
      <hr />
    </>
  );
};
