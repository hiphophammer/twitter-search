import Container from 'react-bootstrap/Container';
import ConfirmButton from './confirmButton'
import ToggleSwitch from './toggleSwitch';
import Card from 'react-bootstrap/Card';
import TextBox from './textBox';

import { useState, useRef } from 'react';


const MainBody = ( ) => {
  const [ advancedSearch, setAdvancedSearch ] = useState<boolean | undefined>( true );
  const basicSearchRef = useRef<HTMLInputElement>( null );

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
          <TextBox
            controlID={ 'basicSearch' }
            floatingLabel={ '트위터 검색' } 
            textBoxRef={ basicSearchRef }
          />
          <ToggleSwitch 
            label={ '고급 검색' }
            switchStatus={ advancedSearch }
            setSwitchStatus={ setAdvancedSearch }
          />
          <ConfirmButton />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MainBody;