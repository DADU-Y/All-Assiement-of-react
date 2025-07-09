import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import style from "./Navbar.module.css"

const HeaderNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className={`shadow-sm ${style.nav}`}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
            height="30"
            className="d-inline-block align-top"
            alt="Daraz Logo"
          />
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content">
          {/* Search Bar */}
          <Form className="d-flex mx-auto w-50">
            <FormControl
              type="search"
              placeholder="Search in Daraz"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>

          {/* Right Nav Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Signup</Nav.Link>
            <Nav.Link href="#">Orders</Nav.Link>
            <Nav.Link href="#">Cart 🛒</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
