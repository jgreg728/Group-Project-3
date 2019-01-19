import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="/">Your Tour!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/form/3.2">Sign in</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">User name</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">User name</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
