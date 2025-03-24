import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
const Header = () => {
  return (
   <>
    <Navbar expand="lg" bg="dark" variant="dark" className="px-3 py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./logo.pn"
            alt="Axis Bank Logo"
            height="40"
            className="d-inline-block align-top"
            style={{color : "white"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center">
            <Nav.Link as={Link} to="home" className="mx-3 text-uppercase fw-bold text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="about" className="mx-3 text-uppercase fw-bold text-light">About Us</Nav.Link>
            <Nav.Link as={Link} to="contact" className="mx-3 text-uppercase fw-bold text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-2">
          <Button variant="outline-light" className="fw-bold px-4" as={Link} to = "login">Login</Button>
          <Button variant="light" className="fw-bold px-4 text-dark" as={Link} to = "registration">Create Account</Button>
        </div>
      </Container>
    </Navbar>
   
   
   </>
  )
}

export default Header