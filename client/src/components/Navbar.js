import React from "react";
import { Link } from "react-router-dom";
import {Navbar, NavDropdown,Nav,Form,FormControl,Button} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="/">YourTour!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          

          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/form/3.2">Sign in</NavDropdown.Item>
         
          </NavDropdown>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
