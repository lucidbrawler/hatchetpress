
import './App.css';
import { Button,  Container, Row, Col } from 'react-bootstrap'
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
           <img src={tritop} remwidth={556} height={356} className="image" alt=""/>
          </Col>
          <Col md>
           <img src={liz} remwidth={256} height={256} className="image" alt="" />
          </Col>
        </Row>
        <Row>
          <Col md>
          <img src={carrion} remwidth={256} height={456} className="image" alt=""/>
          </Col>
          <Col md>
           <img src={hooded} remwidth={256} height={456} className="image" alt=""/>
          </Col>
        </Row>
        <Row>
          <Col md>
           <img src={lying} remwidth={256} height={256} className="image" alt=""/>
          </Col>
          <Col md>
          <img src={steg} remwidth={256} height={256} className="image" alt=""/>
          </Col>
        </Row>
        <Row>
          <Col md>
           <img src={onebull} remwidth={256} height={356} className="image" alt=""/>
          </Col>
          <Col md>
          <img src={threebulls} remwidth={256} height={256} className="image" alt=""/>
          </Col>
        </Row>

          <Button  href="https://www.etsy.com/Shop/HatchetPressShop" variant="primary" >Print Shop</Button>
        <Row>
          <a className="App-link" href="./" target="_blank" rel="noopener noreferrer"
        >
          Back Home
        </a>
        </Row>
        </Container>
      </header>
    </div>
  );
}

export default Prints;
