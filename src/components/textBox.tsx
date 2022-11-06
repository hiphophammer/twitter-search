import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { TextBoxProp } from "./interfaces";

const TextBox = (props: TextBoxProp) => {
  return (
    <>
      <FloatingLabel
        controlId={props.controlID ? props.controlID : ""}
        label={props.floatingLabel}
      >
        <Form.Control
          type={props.type ? props.type : "text"}
          placeholder={props.floatingLabel}
          ref={props.textBoxRef}
          disabled={props.disabled}
        />
      </FloatingLabel>
    </>
  );
};

export default TextBox;
