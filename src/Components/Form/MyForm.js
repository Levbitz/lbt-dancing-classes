import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

import "./Form.css";
const MyForm = (props) => {
  return (
    <Container className="form_container">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" placeholder="email id" />
        </FormGroup>
        <FormGroup>
          <Label for="phonenumber">Phone number</Label>
          <Input type="text" name="phone number" placeholder="phone" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default MyForm;
