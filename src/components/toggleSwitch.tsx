import Form from 'react-bootstrap/Form';
import { ToggleSwitchProp } from './interfaces';

const ToggleSwitch = ( props:ToggleSwitchProp ) => { 
  const switchClick = ( ) => {
    props.setSwitchStatus( !props.switchStatus );
  };
  
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={ props.label }
        style={ {  } }
        checked={ props.switchStatus }
        onClick={ switchClick }
        
      />
    </Form>
  );
}

export default ToggleSwitch;