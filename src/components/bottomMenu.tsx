import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const BottomMenu = ( ) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <p style={{
                color:'white',
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)' 
              }}>
                ⓒ 2022 Hiphophammer
              </p>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link 
              href="https://github.com/hiphophammer" 
              target="_blank" 
              rel="noopener noreferrer">
                GitHub
            </Nav.Link>
            <Nav.Link 
              href="https://www.linkedin.com/in/jw-oh/" 
              target="_blank" 
              rel="noopener noreferrer">
                LinkedIn
            </Nav.Link>
            <Nav.Link 
              href="https://hiphophammer.github.io/jw.github.io/" 
              target="_blank" 
              rel="noopener noreferrer">
                Website
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BottomMenu;