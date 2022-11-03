import Form from 'react-bootstrap/Form';
import { ToggleSwitchProp } from './interfaces';

const ToggleSwitch = ( props:ToggleSwitchProp ) => { 
  const switchClick = ( ) => {
    const nextStatus = !props.switchStatus;
    props.setSwitchStatus( nextStatus );
  };
  
  return (
    <Form>
      <Form.Check 
        type="switch"
        id={ props.id ? props.id : '' }
        label={ props.label ? props.label : '' }
        onChange={ switchClick }
        checked={ props.switchStatus }
      />
    </Form>
  );
}

export default ToggleSwitch;