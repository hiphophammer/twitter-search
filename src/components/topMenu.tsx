import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { lazy, useState, Suspense } from "react";

import SettingsModal from "./settingsModal";

import { Test } from "./api/test";

import { LangProp } from "./interfaces";

import { setKorean, setEnglish } from "../features/language/languageSlice";
import { useSelector, useDispatch } from "react-redux";

const UpdateModal = lazy(() => import("./updateModal.tsx"));

const TopMenu = (props: LangProp) => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const locale = useSelector((state) => state.language.langObj);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    setShowUpdate(!showUpdate);
  };
  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          {props.langObj.langObj?.topMenu?.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hiphophammer/twitter-search/blob/main/README.md"
            >
              {props.langObj.langObj?.topMenu?.instructions}
            </Nav.Link>
            <Nav.Link>{props.langObj.langObj?.topMenu?.login}</Nav.Link>
            <Suspense fallback={<div>Loading...</div>}>
              <Nav.Link onClick={handleUpdate}>
                {props.langObj.langObj?.topMenu?.updates}
              </Nav.Link>
            </Suspense>
            <UpdateModal show={showUpdate} setShow={setShowUpdate} />
            <Nav.Link onClick={handleSettings}>
              {props.langObj.langObj?.topMenu?.settings}
            </Nav.Link>
            <SettingsModal
              show={showSettings}
              setShow={setShowSettings}
              langObj={props.langObj.langObj}
            />
            <Nav.Link onClick={Test}>Test</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
              style={{ display: "none" }}
            >
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
            <Nav.Link
              onClick={() => {
                dispatch(setKorean());
              }}
            >
              <img
                alt="Korean"
                src="/flags/ko_kr.png"
                title="한국어/Korean"
                className="flagImage"
              />{" "}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                dispatch(setEnglish());
              }}
            >
              <img
                alt="English (United States)"
                src="/flags/en_us.png"
                title="English (US)"
                className="flagImage"
              />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
