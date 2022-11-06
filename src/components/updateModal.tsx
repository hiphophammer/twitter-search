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
          현재 할 일 목록: <br />
          Sry.. nothing works as of yet. <br />
          백엔드도?? idk <br />
          트위터 OAuth 구현 Twitter OAuth implementation <br />
          데이터베이스 구현 DB imp. (probably supabase.. or firebase)<br />
          쿼리 서치 구현 Query search imp. <br />
          알림 구현 Alert imp. <br />
          <br/><br/>
          다크 모드 Dark mode (not urgent but my eyes are hurting)
          
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