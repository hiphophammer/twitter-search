import TextBox from "./textBox";
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import ToggleSwitch from "./toggleSwitch";

const AdvancedSearchForm = ( ) => {
  const wordRef1 = useRef<HTMLInputElement>( null ); // 다음 단어 모두 포함
  const wordRef2 = useRef<HTMLInputElement>( null ); // 다음 문구 그대로 포함
  const wordRef3 = useRef<HTMLInputElement>( null ); // 다음 단어 중 하나 이상 포함
  const wordRef4 = useRef<HTMLInputElement>( null ); // 다음 단어 제외
  const wordRef5 = useRef<HTMLInputElement>( null ); // 다음 해시태그
  const wordRef6 = useRef<HTMLInputElement>( null ); // 언어

  const [ word, setWord ] = useState<boolean>( false );
  
  return (
    <>
      <div style={{marginTop: '20px'}}></div>
      <h5>단어</h5>
      {/* <ToggleSwitch 
        label={ '' }
        switchStatus={ word }
        setSwitchStatus={ setWord }
      /> */}
      <TextBox 
        floatingLabel="다음 단어 모두 포함"
        textBoxRef={ wordRef1 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 무슨 일 · '무슨'과 '일' 모두 포함
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <TextBox 
        floatingLabel="다음 문구 그대로 포함"
        textBoxRef={ wordRef2 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 깜짝 할인 · '깜짝 할인'이라는 문구를 그대로 포함
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <TextBox 
        floatingLabel="다음 단어 중 하나 이상 포함"
        textBoxRef={ wordRef3 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 고양이 개 · '고양이' 또는 '개' 또는 둘 다 포함
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <TextBox 
        floatingLabel="다음 단어 제외"
        textBoxRef={ wordRef4 }
      />
      
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 고양이 개 · '고양이'를 포함하지 않고 '개'를 포함하지 않음
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <TextBox 
        floatingLabel="다음 해시태그"
        textBoxRef={ wordRef5 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        Example: #추억공유 · 해시태그 #추억공유 포함
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <InputGroup className="mb-3">
        <DropdownButton
            variant="outline-dark"
            menuVariant="dark"
            title="모든 언어"
            key={'모든 언어'}
            id='dropdown'
          >
          <Dropdown.Item href="#">모든 언어</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.ItemText>추가 중 ㅈㅅ; ㅎ</Dropdown.ItemText>
        </DropdownButton>
      </InputGroup>
      <hr />
      <h5>계정</h5>
      <hr />
      <h5>필터</h5>
      <hr />
      <h5>참여</h5>
      <hr />
      <h5>날짜</h5>
    </>
  );
}

export default AdvancedSearchForm;