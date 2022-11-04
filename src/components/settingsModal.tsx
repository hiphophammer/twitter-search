import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ShowModal } from './interfaces';

function SettingsModal( props:ShowModal ) {
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> { props.langObj.settingsModal.title } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`ㅇㅅ< 열심히 준비중임?!`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            { props.langObj.settingsModal.button1 }
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            { props.langObj.settingsModal.button2 }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;