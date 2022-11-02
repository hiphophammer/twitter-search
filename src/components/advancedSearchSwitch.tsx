import Form from 'react-bootstrap/Form';

const AdvancedSearchSwitch = ( ) => { 
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