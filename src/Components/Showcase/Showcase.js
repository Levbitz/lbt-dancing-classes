import React from "react";
//import ImgOne from "../../assets/images/showcase/hometwo.svg";
import ImgOne from "../../assets/images/desk/deskone.png";
import { Container, Row, Col, Button } from "reactstrap";
import "./Showcase.css";

function Showcase({ className, style, fluid, title, highLight }) {
  return (
    <div className="showcase_wrapper">
      <Container fluid={fluid}>
        <Row style={{ justifyContent: "space-between" }} className={className}>
          <Col lg="7" sm="12">
            <p className="showcase_intro">{highLight}</p>
            <h1 className="showcase_title">{title}</h1>
            <div className="underline"></div>
            <p className="showcase_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, omnis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, omnis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum, omnis?
            </p>

            <Button className="btn" size="lg">
              Enroll Now
            </Button>
          </Col>

          <Col lg="4" sm="12">
            <img style={style} src={ImgOne} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Showcase;
