import Container from 'react-bootstrap/Container';
import ConfirmButton from './confirmButton'
import ToggleSwitch from './toggleSwitch';
import Card from 'react-bootstrap/Card';
import TextBox from './textBox';

import { useState, useRef } from 'react';


const MainBody = ( ) => {
  const [ advancedSearch, setAdvancedSearch ] = useState<boolean>( false );
  const [ cardHeight, setCardHeight ] = useState<number>( 150 );
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
              heightOffset: 150
            }}
          />
          {/* Advanced Search */}
          <div style={{ display: ( advancedSearch ? 'block' : 'none' )}}>
            ㅇㅅㅇ
          </div>
          <ConfirmButton />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MainBody;