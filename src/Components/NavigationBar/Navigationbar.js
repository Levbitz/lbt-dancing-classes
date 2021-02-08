import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";

//css
import "./Navigationbar.css";

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className="navbar_wrapper">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} className="navbar_btn" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="nav_item">
            <Link className="nav_link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem className="nav_item">
            <Link to="/about-us">About</Link>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="nav_item">
              Our Orginisation
            </DropdownToggle>
            <DropdownMenu right className="mydrown">
              <DropdownItem>
                <Link to="/our-team">our team</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/our-history">Our History</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem className="nav_item">
            <Link to="/contact-us">Contact</Link>
          </NavItem>

          <NavItem className="nav_item">
            <Link to="/my-account">Account</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigationbar;
