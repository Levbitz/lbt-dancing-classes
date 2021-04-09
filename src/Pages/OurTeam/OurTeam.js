import React from "react";
import { Container, Row } from "reactstrap";
import Member from "../../Components/Member/Member";
import PageTops from "../../Components/PageTops/PageTops";
import "./OurTeam.css";

function OurTeam() {
  return (
    <>
      <PageTops
        title="Our Team"
        subtitle=" Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      />

      <Container>
        <Row>
          <Member />
          <Member />
          <Member />
        </Row>
      </Container>
    </>
  );
}

export default OurTeam;
