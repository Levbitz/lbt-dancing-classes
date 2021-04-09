import React from "react";
import { CardImg, CardSubtitle, Col } from "reactstrap";

import TeamOne from "../../assets/images/team/teamone.jpeg";
import "./Member.css";

function Member() {
  return (
    <Col className="member_card" lg="4">
      <CardImg src={TeamOne} alt="Card image cap" />

      <CardSubtitle
        style={{ textAlign: "center" }}
        tag="h6"
        className="mb-0 mt-2 text-muted"
      >
        Card subtitle
      </CardSubtitle>
      <p style={{ textAlign: "center" }}>Some quick example text</p>
    </Col>
  );
}

export default Member;
