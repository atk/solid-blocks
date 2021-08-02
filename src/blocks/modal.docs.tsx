import { Button } from "./button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./modal";

export const ModalDocs = () => {
  return (
    <>
      <h2 id="modal-docs">
        Modal / ModalContent / ModalHeader / ModalBody / ModalFooter
      </h2>
      <p>
        The modal component shows a dialog to the user that blocks all other
        interaction. Be sure to never use it if the interaction is not
        mandatory. It requires the use of the ModalContent component;
        ModalHeader, ModalBody and ModalFooter are there for convenience.
      </p>
      <h3>Properties</h3>
      <pre>{`
ModalProps {
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  open?: boolean;
  noPortal?: boolean;
  children: (({ open: boolean, toggle: (open?: boolean) => void }) => JSX.Element) | JSX.Element;
}`}</pre>
      <dl>
        <dt>closeOnClickOutside</dt>
        <dd>
          if a click outside of the modal should close it, this optional
          property must be <code>true</code>
        </dd>
        <dt>closeOnEsc</dt>
        <dd>
          if pressing the Escape button should close the modal, this optional
          property must be <code>true</code>
        </dd>
        <dt>open</dt>
        <dd>
          to control the modal from outside, you can use this boolean property
        </dd>
        <dt>noPortal</dt>
        <dd>
          if you do not want to render the modal in a portal to keep it outside
          the element flow, set this optional boolean property to{" "}
          <code>true</code>
        </dd>
        <dt>children</dt>
        <dd>
          the content of the modal; instead of normal JSX.Elements as children,
          you can also opt to use a function inside the Modal component that
          will receive an object as argument that contains the <code>open</code>{" "}
          state of the modal as boolean accessor and a <code>toggle</code>{" "}
          method that will either set the open state from a boolean or if called
          without an argument, will toggle the open state
        </dd>
      </dl>
      <div class="example" style="display: flex">
        <Modal closeOnClickOutside closeOnEsc>
          {({ open, toggle }) => (
            <>
              <Button
                aria-disabled={open()}
                style={{ margin: "auto" }}
                onclick={toggle}
              >
                Press to open
              </Button>
              <ModalContent>
                <ModalHeader>
                  Header
                  <Button
                    variant="icon"
                    onclick={toggle}
                    style={{ float: "right" }}
                  >
                    ✕
                  </Button>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Body of the Modal. You can fill it with whatever content.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button onclick={toggle}>OK</Button>
                </ModalFooter>
              </ModalContent>
            </>
          )}
        </Modal>
      </div>
      <pre>{`
<Modal closeOnClickOutside closeOnEsc>
{({ open, toggle }) => (
  <>
    <Button
      aria-disabled={open()}
      style={{ margin: "auto" }}
      onclick={toggle}
    >Press to open</Button>
    <ModalContent>
      <ModalHeader>
        Header
        <Button
          variant="icon"
          onclick={toggle}
          style={{ float: "right" }}
        >
          ✕
        </Button>
      </ModalHeader>
      <ModalBody>
        <p>
          Body of the Modal. You can fill it with whatever content.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button onclick={toggle}>OK</Button>
      </ModalFooter>
    </ModalContent>
  </>
)}
</Modal>`}</pre>
      <hr />
    </>
  );
};
