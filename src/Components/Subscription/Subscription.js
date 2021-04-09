import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="subscription_wrapper">
      <Container className="subcription_container">
        <Row>
          <Col>
            <InputGroup className="subscription_input_wrapper">
              <Input
                className="subscription_input"
                placeholder="Email Address"
                type="email"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText className="subscription_btn">
                  Get Started!
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subscription;
