import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Container, Row, Col, Card, Form, Navbar  } from 'react-bootstrap'
import image from './components/images/images.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Prints() {
  return (
    <div className="App">
      <img src={logo} width={128} height={77} className="App-logo" alt="logo" />
      <header className="App-header">
        <Container fluid>
        <Row>
          <Col md>
           <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
          <Col md>
           <img src={image} width={256} height={256} className="image" alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col md>
          <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
          <Col md>
           <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
        </Row>
        <Row>
          <Col md>
           <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
          <Col md>
          <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
        </Row>
        <Row>
          <Col md>
           <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
          <Col md>
          <img src={image} width={256} height={256} className="image" alt="logo"/>
          </Col>
        </Row>
          <a className="App-link" href="/" target="_blank" rel="noopener noreferrer"
        >
          Back Home
        </a>
        </Container>
      </header>
    </div>
  );
}

export default Prints;
