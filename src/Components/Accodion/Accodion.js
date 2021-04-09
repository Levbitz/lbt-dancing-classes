import React, { useState } from "react";
import { Container, Collapse, CardBody } from "reactstrap";
import { FaHashtag, FaWindowClose } from "react-icons/fa";
import "./Accodion.css";

const Example = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="accodion_container">
      <div className="accodion_header" onClick={toggle}>
        <span className="accodion_heading"> {title}</span>
        <span>
          {" "}
          {isOpen ? (
            <FaWindowClose color={"#fff"} className="accodion_icon" />
          ) : (
            <FaHashtag color={"#fff"} className="accodion_icon" />
          )}
        </span>
      </div>
      <Collapse className="accodion_content_wrapper" isOpen={isOpen}>
        <div>
          <CardBody>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </p>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </p>
          </CardBody>
        </div>
      </Collapse>
    </Container>
  );
};

export default Example;
