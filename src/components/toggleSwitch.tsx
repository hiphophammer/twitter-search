import Form from 'react-bootstrap/Form';
import { ToggleSwitchProp } from './interfaces';

const ToggleSwitch = ( props:ToggleSwitchProp ) => { 
  const switchClick = ( ) => {
    const nextStatus = !props.switchStatus;
    props.setSwitchStatus( nextStatus );
    if( props.setHeight ) {
      handleHeightOffset( nextStatus );
    }
  };

  const handleHeightOffset = ( nextStatus:boolean ) => {
    if ( nextStatus ) {
      props.setHeight?.setCardHeight( props.setHeight.cardHeight + props.setHeight.heightOffset );
    }
    else {
      props.setHeight?.setCardHeight( props.setHeight.cardHeight - props.setHeight.heightOffset );
    }
  };
  
  return (
    <Form>
      <Form.Check 
        type="switch"
        id='customSwitch'
        label={ props.label }
        onChange={ switchClick }
        checked={ props.switchStatus }
      />
    </Form>
  );
}

export default ToggleSwitch;