import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import KRFlag from './flags/kor.svg';
import USFlag from './flags/usa.svg';

const TopMenu = ( ) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">트위터 검색기</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">로그인</Nav.Link>
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
            <Nav.Link href="#KR">
              <img 
                alt='Korean'
                src={KRFlag}
                height='20'
                className="d-inline-block align-center"
              />{' '}
            </Nav.Link>
            <Nav.Link href="#EN_US">
              <img 
                alt='English (United States)'
                src={USFlag}
                height='20'
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