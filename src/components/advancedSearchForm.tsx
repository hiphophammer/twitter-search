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
      result += `"${ wordRef2?.current?.value }"`;
    }
    // OR
    if ( wordRef3?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      result += `(${ wordRef3?.current?.value.replaceAll( ' ', ' OR ' ) })`;
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
      result += `(${ temp.replaceAll(' ', ' OR ') })`;
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
      result += `(${ temp.replaceAll(' ', ' OR ') })`;
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
      result += `(${ temp.replaceAll(' ', ' OR ') })`;
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
      result += `(${ temp.replaceAll(' ', ' OR ') })`;
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
    
    if ( participationRef1?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      result += `min_replies:${ participationRef1?.current?.value }`;
    }

    if ( participationRef2?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      result += `min_faves:${ participationRef2?.current?.value }`;
    }

    if ( participationRef3?.current?.value !== '' ) {
      if ( result !== '' ) result += ' ';
      result += `min_retweets:${ participationRef3?.current?.value }`;
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
        <h5>{ props?.langObj?.header1 }</h5>
        <ToggleSwitch
          disabled={ true }
          switchStatus={ section1 }
          setSwitchStatus={ setSection1 }
        />
      </div>
      <div style={{display:(section1?'block':'none')}}>
        <TextBox 
          floatingLabel= { props?.langObj?.section1_label1 }
          textBoxRef={ wordRef1 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section1_desc1 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <TextBox 
          floatingLabel={ props?.langObj?.section1_label2 }
          textBoxRef={ wordRef2 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section1_desc2 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <TextBox 
          floatingLabel={ props?.langObj?.section1_label3 }
          textBoxRef={ wordRef3 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section1_desc3 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <TextBox 
          floatingLabel={ props?.langObj?.section1_label4 }
          textBoxRef={ wordRef4 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section1_desc4 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <TextBox 
          floatingLabel={ props?.langObj?.section1_label5 }
          textBoxRef={ wordRef5 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section1_desc5 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <InputGroup className="mb-3">
          <DropdownButton
              title={ props?.langObj?.section1_label6 }
              id='dropdown'
            >
            <Dropdown.Item href="#">모든 언어</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.ItemText>추가 중 ㅈㅅ; ㅎ</Dropdown.ItemText>
          </DropdownButton>
          <label htmlFor='dropdown' className='dropdownLabel'> { props?.langObj?.dropdown_lang } </label>
        </InputGroup>
      </div>
      <hr />
      <div className='flexTitle'>
        <h5>{ props?.langObj?.header2 }</h5>
        <ToggleSwitch 
          switchStatus={ section2 }
          setSwitchStatus={ setSection2 }
        />
      </div>
      <div style={{display:(section2?'block':'none')}}>
        <TextBox 
          floatingLabel={ props?.langObj?.section2_label1 }
          textBoxRef={ accRef1 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section2_desc1 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <hr />
        <TextBox 
          floatingLabel={ props?.langObj?.section2_label2 }
          textBoxRef={ accRef2 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section2_desc2 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <hr />
        <TextBox 
          floatingLabel={ props?.langObj?.section2_label3 }
          textBoxRef={ accRef3 }
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section2_desc3 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
      </div>
      <hr />

      <div className='flexTitle'>
        <h5>{ props?.langObj?.header3 }</h5>
        <ToggleSwitch 
          switchStatus={ section3 }
          setSwitchStatus={ setSection3 }
        />
      </div>
      <div style={{display:(section3?'block':'none')}}>
        <div style={{marginTop: '20px'}}></div>
        <div className='filterFlex'>
          <h6 className='bold'>{ props?.langObj?.section3_label1 }</h6>
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
              { props?.langObj?.section3_label2 }
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ commentOption }
                onChange={()=>{ setCommentOption( true )}}
            />
          </div>
          <div className='filterDivRow'>
            <h6>
              { props?.langObj?.section3_label3 }
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ !commentOption }
                onChange={()=>{ setCommentOption( false )}}
            />
          </div>
        </div>

        <div style={{marginTop: '20px'}}></div>
        <div className='filterFlex'>
          <h6 className='bold'>{ props?.langObj?.section3_label4 }</h6>
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
              { props?.langObj?.section3_label5 }
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ linkOption }
                onChange={()=>{ setLinkOption( true )}}
            />
          </div>
          <div className='filterDivRow'>
            <h6>
              { props?.langObj?.section3_label6 }
            </h6>
            <Form.Check 
                type='checkbox'
                id='default-radio'
                checked={ !linkOption }
                onChange={()=>{ setLinkOption( false )}}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className='flexTitle'>
        <h5>{ props?.langObj?.header4 }</h5>
        <ToggleSwitch 
          switchStatus={ section4 }
          setSwitchStatus={ setSection4 }
        />
      </div>
      <div style={{display:(section4?'block':'none')}}>
        <TextBox 
          floatingLabel={ props?.langObj?.section4_label1 }
          textBoxRef={ participationRef1 }
          type='number'
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section4_desc1 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <TextBox 
          floatingLabel={ props?.langObj?.section4_label2 }
          textBoxRef={ participationRef2 }
          type='number'
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section4_desc2 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
        <TextBox 
          floatingLabel={ props?.langObj?.section4_label3 }
          textBoxRef={ participationRef3 }
          type='number'
        />
        <Form.Text muted style={{marginLeft: '10px'}}>
          { props?.langObj?.section4_desc3 }
        </Form.Text>
        <div style={{marginTop: '20px'}}></div>
      </div>
      <hr />

      <div className='flexTitle'>
        <h5>{ props?.langObj?.header5 }</h5>
        <ToggleSwitch 
          switchStatus={ section5 }
          setSwitchStatus={ setSection5 }
        />
      </div>
      <div style={{display:(section5?'block':'none')}}>
        <div style={{marginTop: '20px'}}></div>
        <h6>{ props?.langObj?.section5_label1 }</h6>
        <div className='dateEntryDiv'>
          <DropdownButton
              className='date_button'
              title={ props?.langObj?.section5_label3 }
              id='dropdown_month'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button'
              title={ props?.langObj?.section5_label4 }
              id='dropdown_date'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button'
              title={ props?.langObj?.section5_label5 }
              id='dropdown_year'
            >
          </DropdownButton>
        </div>
        <div>
          <label htmlFor='dropdown_month' className='monthDropdownLabel'> { props?.langObj?.section5_label3 } </label>
          <label htmlFor='dropdown_date' className='dayDropdownLabel'> { props?.langObj?.section5_label4 } </label>
          <label htmlFor='dropdown_year' className='yearDropdownLabel'> { props?.langObj?.section5_label5 } </label>
        </div>
        <div style={{marginTop: '20px'}}></div>
        <h6>{ props?.langObj?.section5_label2 }</h6>
        <div className='dateEntryDiv'>
          <DropdownButton
              className='date_button'
              title={ props?.langObj?.section5_label3 }
              id='dropdown_month'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button'
              title={ props?.langObj?.section5_label4 }
              id='dropdown_date'
            >
          </DropdownButton>
          <DropdownButton
              className='date_button'
              title={ props?.langObj?.section5_label5 }
              id='dropdown_year'
            >
          </DropdownButton>
        </div>
        <div>
          <label htmlFor='dropdown_month' className='monthDropdownLabel'> { props?.langObj?.section5_label3 } </label>
          <label htmlFor='dropdown_date' className='dayDropdownLabel'> { props?.langObj?.section5_label4 } </label>
          <label htmlFor='dropdown_year' className='yearDropdownLabel'> { props?.langObj?.section5_label5 } </label>
        </div>
      </div>
      <hr />
      <Button
        className='confirmButton'
        onClick={ buttonClick }>
        { props?.langObj?.confirm }
      </Button>
    </>
  );
}

export default AdvancedSearchForm;