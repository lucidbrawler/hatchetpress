import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Container, Row, Col, Card, Form, Navbar  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bar from './nav';
import Prints from './prints';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Bar />
    <Route path="/" exact component={Home}/>
    <Route path="/prints" component={Prints}/>
    </div>
    </Router>
  );
}

const Home = () =>(
  <div>
  <img src={logo} width={128} height={77} className="App-logo" alt="logo" />
  <header className="App-header">

  <Card className="Card" style={{color: "#000"}}>
    <Card.Img src="https://picsum.photos/300/50"/>
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
  <Row className='Row'>
    <Col md>
    <p className="Paragraph"> Welcome to Hatchet Press! </p>
    </Col>
    <Col md>
    <p className="Paragraph"> Discover new possibilities weekly with our quest interface!</p>
    </Col>
  </Row>
  <Row >
    <Col md>
    <Form className='forms' md>
      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Example@email.com" />
        <Form.Text className="text-muted">
          Well never share youre email address, trust us!
        </Form.Text>
      </Form.Group>
    </Form>
  </Col>
  <Col md>
  <Form className='forms' md>
    <Form.Group controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button href="./About" className="Button" variant="primary" type="submit">Login</Button>
    </Form>
  </Col>
  </Row>
  <a className="App-link" href="./prints" target="_blank" rel="noopener noreferrer"
  >
  Prints
  </a>
</header>
  </div>
);

export default App;
