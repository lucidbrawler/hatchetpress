import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Container, Row, Col, Card, Form, Navbar  } from 'react-bootstrap'
import image from './components/images/images.png'
import tritop from './components/images/tri top orange set 2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import steg from './components/images/ster reg.jpg'
import hooded from './components/images/Attritioni Ascending.jpg'
import lying from './components/images/Lying Cat CP.jpg'
import carrion from './components/images/Carrion 2.jpg'
import onebull from './components/images/0220160146.jpg'
import threebulls from './components/images/three bulls.jpg'
import liz from './components/images/lizard desert cp.jpg'


function Prints() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Container fluid>
        <Row>
          <Col md>
           <img src={tritop} remwidth={556} height={356} className="image" alt="logo"/>
          </Col>
          <Col md>
           <img src={liz} remwidth={256} height={256} className="image" alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col md>
          <img src={carrion} remwidth={256} height={556} className="image" alt="logo"/>
          </Col>
          <Col md>
           <img src={hooded} remwidth={256} height={456} className="image" alt="logo"/>
          </Col>
        </Row>
        <Row>
          <Col md>
           <img src={lying} remwidth={256} height={256} className="image" alt="logo"/>
          </Col>
          <Col md>
          <img src={steg} remwidth={256} height={256} className="image" alt="logo"/>
          </Col>
        </Row>
        <Row>
          <Col md>
           <img src={onebull} remwidth={256} height={356} className="image" alt="logo"/>
          </Col>
          <Col md>
          <img src={threebulls} remwidth={256} height={256} className="image" alt="logo"/>
          </Col>
        </Row>
          <a className="App-link" href="./" target="_blank" rel="noopener noreferrer"
        >
          Back Home
        </a>
        </Container>
      </header>
    </div>
  );
}

export default Prints;
