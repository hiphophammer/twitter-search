import Container from 'react-bootstrap/Container';
import ConfirmButton from './confirmButton'
import ToggleSwitch from './toggleSwitch';
import Card from 'react-bootstrap/Card';
import TextBox from './textBox';
import AdvancedSearchForm from './advancedSearchForm'

import { useState, useRef } from 'react';


const MainBody = ( ) => {
  const [ advancedSearch, setAdvancedSearch ] = useState<boolean>( false );
  const basicSearchRef = useRef<HTMLInputElement>( null );

  return (
    <Container style={{
        marginTop: '40px',
        marginBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Card
          className='mainCard'
          style={{ 
            display: 'flex',
            width: '36rem',
        }}>
        <Card.Body>
          <TextBox
            disabled={ advancedSearch }
            controlID={ 'basicSearch' }
            floatingLabel={ '트위터 검색' } 
            textBoxRef={ basicSearchRef }
          />
          <ToggleSwitch 
            label={ '고급 검색' }
            switchStatus={ advancedSearch }
            setSwitchStatus={ setAdvancedSearch }
          />
          {/* Advanced Search */}
          <div style={{ display: ( advancedSearch ? 'block' : 'none' )}}>
            <AdvancedSearchForm />
          </div>
          <ConfirmButton />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MainBody;