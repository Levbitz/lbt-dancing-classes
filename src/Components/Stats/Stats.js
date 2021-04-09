import React from "react";
import { IoIosPeople } from "react-icons/io";
import { GiTeacher, GiCampfire } from "react-icons/gi";

import { Col, Container, Row } from "reactstrap";
import "./Stats.css";

function Stats() {
  return (
    <Container className="stats_wrapper">
      <Row>
        <Col xs="4">
          <IoIosPeople className="stat_icon" />
          <p className="stat_num">500+</p>
          <h5 className="stat_name"> students</h5>
        </Col>
        <Col xs="4">
          <GiTeacher className="stat_icon" />
          <p className="stat_num">75</p>
          <h5 className="stat_name">instructors</h5>
        </Col>
        <Col xs="4">
          <GiCampfire className="stat_icon" />
          <p className="stat_num">23</p>
          <h5 className="stat_name">Dances</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Stats;
