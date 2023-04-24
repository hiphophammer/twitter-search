import Container from "react-bootstrap/Container";
import ToggleSwitch from "./toggleSwitch";
import Card from "react-bootstrap/Card";
import TextBox from "./textBox";
import AdvancedSearchForm from "./advancedSearchForm";
import Button from "react-bootstrap/Button";

import { useState, useRef } from "react";
import { LangObj } from "./interfaces";

const MainBody = (props: LangObj) => {
  const buttonClick = () => {
    if (!basicSearchRef.current || basicSearchRef.current.value === "") {
      alert(props.langObj.alert_empty);
      return;
    }
    alert(basicSearchRef.current.value);
  };
  const [advancedSearch, setAdvancedSearch] = useState<boolean>(false);
  const basicSearchRef = useRef<HTMLInputElement>(null);

  return (
    <Container
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        className="mainCard"
        style={{
          display: "flex",
          width: "36rem",
        }}
      >
        <Card.Body>
          <TextBox
            disabled={advancedSearch}
            controlID={"basicSearch"}
            floatingLabel={props.langObj.tweeterSearch}
            textBoxRef={basicSearchRef}
          />
          <ToggleSwitch
            label={props.langObj.advancedSearch}
            switchStatus={advancedSearch}
            setSwitchStatus={setAdvancedSearch}
          />
          {/* Advanced Search */}
          <div style={{ display: advancedSearch ? "block" : "none" }}>
            <AdvancedSearchForm
              advanced={advancedSearch}
              basicRef={basicSearchRef}
              langObj={props.langObj}
            />
          </div>
          <Button
            className="confirmButton"
            onClick={buttonClick}
            style={{ display: advancedSearch ? "none" : "block" }}
          >
            {props.langObj.confirm}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MainBody;
