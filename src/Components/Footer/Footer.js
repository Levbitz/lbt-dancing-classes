import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaBattleNet,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="top_footer_wrapper">
        <Container>
          <Row>
            <Col xs="6" sm="3">
              <h5 className="footer_title">ROCK-UP</h5>
              <FaBattleNet className="footer_Logo" />
            </Col>
            <Col xs="6" sm="3">
              <h5 className="footer_title">Pages</h5>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
            </Col>
            <Col xs="6" sm="3">
              <h5 className="footer_title">Company</h5>
              <p>teams and Conditions</p>
              <p>Licence</p>
              <p>Privacy Policy</p>
            </Col>
            <Col xs="6" sm="3">
              <h5 className="footer_title">Good Will</h5>
              <p>Enroll</p>
              <p>Partnership</p>
              <p>Donate</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bottom_footer_wrapper">
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <FaFacebookF className="footer_icon" />

              <FaTwitter className="footer_icon" />

              <FaLinkedinIn className="footer_icon" />

              <FaYoutube className="footer_icon" />
            </Col>
            <Col xs="12" sm="6">
              <h5 className="footer_credit">
                ©2018- {year}
                <a className="footer_credit_link" href="https://levbitz.com">
                  {" "}
                  made by Levbitz
                </a>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
