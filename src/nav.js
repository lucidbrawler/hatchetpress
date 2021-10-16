
import './App.css';
import { Link } from "react-router-dom";
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import steg from './components/images/ster reg.jpg'

function Bar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <img src={steg} remwidth={6} height={76}  className="App-logo" alt="logo" />
      <Container>
      <Navbar.Brand href="./"><p className="title">Hatchet Press</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"./"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"./prints"}>Prints</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={"./movieplayer"}>Lost Hymns</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default Bar;
