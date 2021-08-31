import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Container, Row, Col, Card, Form, Navbar  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './nav';
import Prints from './prints';

function App() {
  return (
    <div className="App">
      <img src={logo} width={128} height={77} className="App-logo" alt="logo" />
      <header className="App-header">
        <Container fluid>
        <Card className="mt-3 Card" style={{color: "#000"}}>
          <Card.Img src="https://picsum.photos/300/100"/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of a react bootstrap cards
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
          <Row>
            <Col md>
            <p className="Paragraph"> Welcome to Hatchet Press, My name is Kenneth Sinclair and I'm a Writer, Printmaker, and Musican looking to interacte with and grow a authintic community.</p>
            </Col>
            <Col md>
            <p className="Paragraph"> Hey is this how you make a second coloumn</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
                <Form.Text className="text-muted">
                  Well never share youre email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Col>
            <Form>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" type="submit">Login</Button>
              </Form>
            </Col>
          </Row>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        >
          Learn React
        </a>
        </Container>
      </header>
    </div>
  );
}

export default App;
