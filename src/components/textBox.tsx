import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { TextBoxProp } from './interfaces';

const TextBox = ( props:TextBoxProp ) => {
  return (
    <>
      <FloatingLabel controlId={( props.controlID ? props.controlID : '' )} label={ props.floatingLabel }>
        <Form.Control placeholder={ props.floatingLabel } ref={ props.textBoxRef } disabled={ props.disabled } />
      </FloatingLabel>
    </>
  );
}

export default TextBox;