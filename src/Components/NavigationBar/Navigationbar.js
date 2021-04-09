import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
// //css
import "./Navigationbar.css";

//icons
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaBattleNet,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      light
      expand="md"
      className="my__Navavigation blue darken-3  active"
    >
      <NavbarBrand>
        <Link className="mylogo" to="/">
          <FaBattleNet className="icon" color={"#fff"} />
          ROCK-UP
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="toggle_btn" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem className="nav_item_wrapper">
            <NavLink
              className="nav_item"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link className="nav_link" to="/">
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem className="nav_item_wrapper">
            <NavLink
              className="nav_item"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link className="nav_link" to="/about-us">
                About
              </Link>
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              style={{ color: "#fff" }}
              nav
              caret
              className="nav_item"
            >
              Our Orginisation
            </DropdownToggle>
            <DropdownMenu right className="mydrown">
              <DropdownItem className="dropdown_wrapper">
                <Link
                  className="dropdown_item"
                  to="/our-team"
                  onClick={() => {
                    setIsOpen(false);
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
                    setIsOpen(false);
                  }}
                >
                  Our History
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem className="nav_item_wrapper">
            <NavLink
              className="nav_item"
              href={"#"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link className="nav_link" to="/contact-us">
                Contact
              </Link>
            </NavLink>
          </NavItem>
          <NavItem className="nav_item_wrapper">
            <NavLink
              href={"#"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link className="nav_link" to="my-account">
                Account
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <FaFacebookF color={"#FFF"} className="nav_social" />
        </NavbarText>
        <NavbarText>
          <FaYoutube color={"#FFF"} className="nav_social" />
        </NavbarText>
        <NavbarText className="nav_social">
          <FaLinkedinIn color={"#FFF"} className="nav_social" />
        </NavbarText>
        <NavbarText>
          <FaTwitter color={"#FFF"} className="nav_social" />
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Navigationbar;
