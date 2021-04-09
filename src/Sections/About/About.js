import React from "react";
import { Row, Col } from "reactstrap";
import Slider from "../../Components/Slider/Slider";
import Stats from "../../Components/Stats/Stats";
import "./About.css";

function About() {
  return (
    <>
      <Row>
        <Col lg="6" sm="12" className="about_content">
          <div style={{ padding: 20 }}>
            <h2>About Rock Up</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda nostrum ullam repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda nostrum ullam repudiandae?
            </p>
          </div>
          <Stats />
        </Col>
        <Col lg="6" sm="12">
          <Slider />
        </Col>
      </Row>
    </>
  );
}

export default About;
