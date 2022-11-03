import Form from 'react-bootstrap/Form';
import AdvancedSearchProp from './interfaces';

const AdvancedSearchSwitch = ( props:AdvancedSearchProp ) => { 
  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="고급 검색"
        style={{ }}
      />
    </Form>
  );
}

export default AdvancedSearchSwitch;