import Container from 'react-bootstrap/Container';
import ConfirmButton from './confirmButton'
import AdvancedSearchSwitch from './advancedSearchSwitch';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';


const MainBody = ( ) => {
  const [advancedSearch, setAdvancedSearch] = useState<boolean | undefined>(false);

  return (
    <Container style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Card style={{ 
          width: '30rem',
          height: '500px'
        }}>
        <Card.Body>
          <AdvancedSearchSwitch setAdvancedSearch={setAdvancedSearch}/>
          <ConfirmButton />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MainBody;