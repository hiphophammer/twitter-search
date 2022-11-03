import Container from 'react-bootstrap/Container';
import ConfirmButton from './confirmButton'
import ToggleSwitch from './toggleSwitch';
import Card from 'react-bootstrap/Card';
import TextBox from './textBox';
import AdvancedSearchForm from './advancedSearchForm'

import { useState, useRef } from 'react';


const MainBody = ( ) => {
  const [ advancedSearch, setAdvancedSearch ] = useState<boolean>( false );
  const [ cardHeight, setCardHeight ] = useState<number>( 170 );
  const basicSearchRef = useRef<HTMLInputElement>( null );

  return (
    <Container style={{
        marginTop: '40px',
        marginBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Card style={{ 
          width: '36rem',
          height: `${cardHeight}px`
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
            setHeight={{
              cardHeight: cardHeight,
              setCardHeight: setCardHeight, 
              heightOffset: 2000
            }}
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