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

  const accRef1 = useRef<HTMLInputElement>( null ); // 다음 계정에서 작성
  const accRef2 = useRef<HTMLInputElement>( null ); // 다음 계정으로 보냄
  const accRef3 = useRef<HTMLInputElement>( null ); // 다음 계정 멘션

  const participationRef1 = useRef<HTMLInputElement>( null ); // 최소 답글 수
  const participationRef2 = useRef<HTMLInputElement>( null ); // 최소 마음에 들어요 수
  const participationRef3 = useRef<HTMLInputElement>( null ); // 최소 리트윗 수


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
            className='w-100'
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
      <TextBox 
        floatingLabel="다음 계정에서 작성"
        textBoxRef={ accRef1 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: @Twitter · @Twitter에서 보냄
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <hr />
      <TextBox 
        floatingLabel="다음 계정으로 보냄"
        textBoxRef={ accRef2 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: @Twitter · @Twitter에 답글로 보냄
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <hr />
      <TextBox 
        floatingLabel="다음 계정 멘션"
        textBoxRef={ accRef3 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: @SFBART @Caltrain · @SFBART 님을 멘션하거나 @Caltrain 님을 멘션함
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <hr />
      <h5>필터</h5>
      <hr />
      <h5>참여</h5>
      <TextBox 
        floatingLabel="최소 답글 수"
        textBoxRef={ participationRef1 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 280 · 답글이 최소 280개 이상인 트윗
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <TextBox 
        floatingLabel="최소 마음에 들어요 수"
        textBoxRef={ participationRef2 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 280 · 마음에 들어요 수가 최소 280회 이상인 트윗
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <TextBox 
        floatingLabel="최소 리트윗 수"
        textBoxRef={ participationRef3 }
      />
      <Form.Text muted style={{marginLeft: '10px'}}>
        예: 280 · 리트윗이 최소 280회 이상인 트윗
      </Form.Text>
      <div style={{marginTop: '20px'}}></div>
      <hr />
      <h5>날짜</h5>
    </>
  );
}

export default AdvancedSearchForm;