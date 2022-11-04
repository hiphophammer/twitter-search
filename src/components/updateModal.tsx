import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ShowModal } from './interfaces';

function UpdateModal( props:ShowModal ) {
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>업데이트 내역</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ㅈㅅ 아직 아무것도 되는 게 없음 ㅎ;; ㅠ <br />
          Sry.. nothing works as of yet.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;