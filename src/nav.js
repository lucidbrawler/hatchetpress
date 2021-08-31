import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Bar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="https://lucidbrawler.github.io/hatchetpress/">Hatchet Press</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"https://lucidbrawler.github.io/hatchetpress/"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"./prints"}>Prints</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Quests</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">The Vibe</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something to do</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default Bar;
