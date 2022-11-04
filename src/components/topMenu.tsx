import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

import KRFlag from './flags/kor.svg';
import USFlag from './flags/usa.svg';
import { LangProp } from './interfaces';

const TopMenu = ( props:LangProp ) => {
  const [ langObj, setLangObj ] = useState( require( './locale/ko_kr.json' ) );
  const refreshLang = ( ) => {
    if ( props.langObj.lang.toLowerCase() === 'ko_kr' ) {
      setLangObj( require( './locale/ko_kr.json' ) );
    }
    else {
      setLangObj( require( './locale/en_us.json' ) );
    }
  };
  useEffect( refreshLang, [props.langObj.lang] );

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{ langObj.topMenu.title }</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>{ langObj.topMenu.login }</Nav.Link>
            <Nav.Link>{ langObj.topMenu.settings }</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" style={{display:'none'}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={ ()=>{ props.langObj.setLang('ko_kr'); } }>
              <img 
                alt='Korean'
                src={KRFlag}
                height='20'
                title='한국어/Korean'
                className="d-inline-block align-center"
              />{' '}
            </Nav.Link>
            <Nav.Link onClick={ ()=>{ props.langObj.setLang('en_us'); } }>
              <img 
                alt='English (United States)'
                src={USFlag}
                height='20'
                title='English (US)'
                className="d-inline-block align-center"
              />{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopMenu;