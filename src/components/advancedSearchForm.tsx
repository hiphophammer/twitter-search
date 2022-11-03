import TextBox from "./textBox";
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { AdvancedSearchProp } from "./interfaces";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import ToggleSwitch from "./toggleSwitch";

const AdvancedSearchForm = ( props:AdvancedSearchProp ) => {
  // basic search is taken care in mainBody; just focus on adv. search logic here
  const buttonClick = ( ) => {
    let result:string = '';
    // 일반
    if ( wordRef1.current )
      result += wordRef1.current.value;
    // 다음 문구 그대로
    if ( wordRef2?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      result += `\"${ wordRef2?.current?.value }\"`;
    }
    // OR
    if ( wordRef3?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      result += `\(${ wordRef3?.current?.value.replaceAll( ' ', ' OR ' ) }\)`;
    }
    // 다음 단어 제외
    if ( wordRef4?.current?.value !== '' ) {
      const words = wordRef4?.current?.value.split(" ");
      if ( words !== undefined ) {
        for (const word of words) {
          if ( result !== '' ) result += ' ';
          result += `-${ word }`;
        }
      }
    }
    // 다음 해시태그
    if ( wordRef5?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      let temp:string = '';
      const words = wordRef5?.current?.value.split(" ");
      if ( words !== undefined ) {
        for (const word of words) {
          if ( temp !== '' ) temp += ' ';
          temp += `#${ word }`;
        }
      }
      result += `\(${ temp.replaceAll(' ', ' OR ') }\)`;
    }

    // 다음 계정에서 작성
    if ( accRef1?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      let temp:string = '';
      const words = accRef1?.current?.value.split(" ");
      if ( words !== undefined ) {
        for (const word of words) {
          if ( temp !== '' ) temp += ' ';
          temp += `from:${ word }`;
        }
      }
      result += `\(${ temp.replaceAll(' ', ' OR ') }\)`;
    }

    // 다음 계정으로
    if ( accRef2?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      let temp:string = '';
      const words = accRef2?.current?.value.split(" ");
      if ( words !== undefined ) {
        for (const word of words) {
          if ( temp !== '' ) temp += ' ';
          temp += `to:${ word }`;
        }
      }
      result += `\(${ temp.replaceAll(' ', ' OR ') }\)`;
    }

    // 다음 계정 멘션
    if ( accRef3?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      let temp:string = '';
      const words = accRef3?.current?.value.split(" ");
      if ( words !== undefined ) {
        for (const word of words) {
          if ( temp !== '' ) temp += ' ';
          temp += `@${ word }`;
        }
      }
      result += `\(${ temp.replaceAll(' ', ' OR ') }\)`;
    }

    if ( !linkSwitch ) {
      if ( result !== '' ) result += ' ';
      result += '-filter:links';
    }
    else if ( !linkOption ) {
      if ( result !== '' ) result += ' ';
      result += 'filter:links';
    }

    if ( !commentSwitch ) {
      if ( result !== '' ) result += ' ';
      result += '-filter:replies';
    }
    else if ( !commentOption ) {
      if ( result !== '' ) result += ' ';
      result += 'filter:replies';
    }
    
    

    alert( result );
  };

  const [ section1, setSection1 ] = useState<boolean>( true );
  const [ section2, setSection2 ] = useState<boolean>( true );
  const [ section3, setSection3 ] = useState<boolean>( true );
  const [ section4, setSection4 ] = useState<boolean>( true );
  const [ section5, setSection5 ] = useState<boolean>( true );

  const wordRef1 = useRef<HTMLInputElement>( null ); // 다음 단어 모두 포함
  const wordRef2 = useRef<HTMLInputElement>( null ); // 다음 문구 그대로 포함
  const wordRef3 = useRef<HTMLInputElement>( null ); // 다음 단어 중 하나 이상 포함
  const wordRef4 = useRef<HTMLInputElement>( null ); // 다음 단어 제외
  const wordRef5 = useRef<HTMLInputElement>( null ); // 다음 해시태그
  const wordRef6 = useRef<HTMLInputElement>( null ); // 언어

  const accRef1 = useRef<HTMLInputElement>( null ); // 다음 계정에서 작성
  const accRef2 = useRef<HTMLInputElement>( null ); // 다음 계정으로 보냄
  const accRef3 = useRef<HTMLInputElement>( null ); // 다음 계정 멘션

  const [ commentSwitch, setCommentSwitch ] = useState<boolean>( true );
  const [ commentOption, setCommentOption ] = useState<boolean>( true );

  const [ linkSwitch, setLinkSwitch ] = useState<boolean>( true );
  const [ linkOption, setLinkOption ] = useState<boolean>( true );

  const participationRef1 = useRef<HTMLInputElement>( null ); // 최소 답글 수
  const participationRef2 = useRef<HTMLInputElement>( null ); // 최소 마음에 들어요 수
  const participationRef3 = useRef<HTMLInputElement>( null ); // 최소 리트윗 수

  const beginningMonth = useRef<HTMLInputElement>( null );
  const beginningDay = useRef<HTMLInputElement>( null );
  const beginningYear = useRef<HTMLInputElement>( null );

  const endingMonth = useRef<HTMLInputElement>( null );
  const endingDay = useRef<HTMLInputElement>( null );
  const endingYear = useRef<HTMLInputElement>( null );
  
  return (
    <>
      <div style={{marginTop: '20px'}}></div>
      <div className='flexTitle'>
        <h5>단어</h5>
        <ToggleSwitch
          disabled={ true }
          switchStatus={ section1 }
          setSwitchStatus={ setSection1 }
        />
      </div>
      <div style={{display:(section1?'block':'none')}}>
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
              title="모든 언어"
              id='dropdown'
            >
            <Dropdown.Item href="#">모든 언어</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.ItemText>추가 중 ㅈㅅ; ㅎ</Dropdown.ItemText>
          </DropdownButton>
        </InputGroup>
      </div>
      <hr />
      <div className='flexTitle'>
        <h5>계정</h5>
        <ToggleSwitch 
          switchStatus={ section2 }
          setSwitchStatus={ setSection2 }
        />
      </div>
      <div style={{display:(section2?'block':'none')}}>
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
      </div>
      <hr />

      <div className='flexTitle'>
        <h5>필터</h5>
        <ToggleSwitch 
          switchStatus={ section3 }
          setSwitchStatus={ setSection3 }
        />
      </div>
      <div style={{display:(section3?'block':'none')}}>
        <div style={{marginTop: '20px'}}></div>
        <div className='filterFlex'>
          <h6 className='bold'>답글</h6>
          <ToggleSwitch
            id='filterSwitch'
            switchStatus={ commentSwitch }
            setSwitchStatus={ setCommentSwitch }
          />
        </div>
        <hr className="hrCompact" />
        <div
          className='filterDiv' 
          style={{
            display: ( commentSwitch ? 'flex' : 'none' )
        }}>
          <div className='filterDivRow'>
            <h6>
              답글 및 원본 트윗 포함
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ commentOption }
                onClick={()=>{ setCommentOption( true )}}
            />
          </div>
          <div className='filterDivRow'>
            <h6>
              답글만 보기
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ !commentOption }
                onClick={()=>{ setCommentOption( false )}}
            />
          </div>
        </div>

        <div style={{marginTop: '20px'}}></div>
        <div className='filterFlex'>
          <h6 className='bold'>링크</h6>
          <ToggleSwitch
            id='filterSwitch'
            switchStatus={ linkSwitch }
            setSwitchStatus={ setLinkSwitch }
          />
        </div>
        <hr className="hrCompact" />
        <div
          className='filterDiv' 
          style={{
            display: ( linkSwitch ? 'flex' : 'none' )
        }}>
          <div className='filterDivRow'>
            <h6>
              링크가 추가된 트윗 포함
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ linkOption }
                onClick={()=>{ setLinkOption( true )}}
            />
          </div>
          <div className='filterDivRow'>
            <h6>
              링크가 추가된 트윗만 보기
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ !linkOption }
                onClick={()=>{ setLinkOption( false )}}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className='flexTitle'>
        <h5>참여</h5>
        <ToggleSwitch 
          switchStatus={ section4 }
          setSwitchStatus={ setSection4 }
        />
      </div>
      <div style={{display:(section4?'block':'none')}}>
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
      </div>
      <hr />

      <div className='flexTitle'>
        <h5>날짜</h5>
        <ToggleSwitch 
          switchStatus={ section5 }
          setSwitchStatus={ setSection5 }
        />
      </div>
      <div style={{display:(section5?'block':'none')}}>
        <div style={{marginTop: '20px'}}></div>
        <h6>시작</h6>
        <div className='dateEntryDiv'>
          <DropdownButton
              className='date_button_month'
              title="월"
              id='dropdown_month'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button_date'
              title="일"
              id='dropdown_date'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button_year'
              title="년"
              id='dropdown_year'
            >
          </DropdownButton>
        </div>
        <div style={{marginTop: '20px'}}></div>
        <h6>끝</h6>
        <div className='dateEntryDiv'>
          <DropdownButton
              className='date_button_month'
              title="월"
              id='dropdown_month'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button_date'
              title="일"
              id='dropdown_date'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button_year'
              title="년"
              id='dropdown_year'
            >
          </DropdownButton>
        </div>
      </div>
      <hr />
      <Button
        className='confirmButton'
        onClick={ buttonClick }>
        확인
      </Button>
    </>
  );
}

export default AdvancedSearchForm;