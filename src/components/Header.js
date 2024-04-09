import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';
import ProfileImage from './images/ProfileImage.png';
import './css/Header.css';

function Header() {

  const linkStyles = {
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Helvetica, Arial',
  };

  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      variant="dark"
      className="header"
    >
      <Container>
      <Navbar.Brand href="#home">
          <img
            src={ProfileImage}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="avatar"
            style={{ borderRadius: '50%' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
          <Nav.Link href="#home" style={linkStyles}>
              Home
            </Nav.Link>
            <Nav.Link href="#background" style={linkStyles}>
              Experience
            </Nav.Link>
            <Nav.Link href="#project" style={linkStyles}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" style={linkStyles}>
              Contact
            </Nav.Link>
            <NavDropdown style={linkStyles} title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#review">Review</NavDropdown.Item>
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
