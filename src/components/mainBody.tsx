import Container from 'react-bootstrap/Container';
import ConfirmButton from './confirmButton'
import AdvancedSearchSwitch from './advancedSearchSwitch';

const MainBody = ( ) => {
  return (
    <Container>
      <AdvancedSearchSwitch />
      <ConfirmButton />
    </Container>
  );
}

export default MainBody;