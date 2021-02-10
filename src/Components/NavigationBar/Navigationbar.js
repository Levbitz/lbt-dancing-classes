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
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";

//css
import "./Navigationbar.css";

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className="my__Navavigation ">
      <NavbarBrand href="/">
        <img
          width="200"
          src="https://levbitz.com/main-assets/img/logo.png"
          alt=""
          srcset=""
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="navbar_btn" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="nav_item">
            <NavLink>
              <Link
                className="nav_link"
                to="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem className="nav_item">
            <NavLink>
              <Link
                to="/about-us"
                className="nav_link"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </Link>
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              style={{ color: "#fff" }}
              nav
              caret
              className="nav_item   "
            >
              Our Orginisation
            </DropdownToggle>
            <DropdownMenu right className="mydrown">
              <DropdownItem className="dropdown_wrapper">
                <Link
                  className="dropdown_item"
                  to="/our-team"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  our team
                </Link>
              </DropdownItem>
              <DropdownItem className="dropdown_wrapper">
                <Link
                  className="dropdown_item"
                  to="/our-history"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Our History
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem className="nav_item">
            <NavLink>
              <Link
                className="nav_link"
                to="/contact-us"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </Link>
            </NavLink>
          </NavItem>

          <NavItem className="nav_item">
            <NavLink>
              <Link
                className="nav_link"
                to="/my-account"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Account
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigationbar;
