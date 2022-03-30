import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/home">SISPEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/panel">Panel</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }

export default NavBar;