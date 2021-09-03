import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Container, Row, Col, Card, Form, Navbar, Image  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bar from './nav';
import Prints from './prints';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import image from './components/images/CCM COVER.JPG'
import { Grid } from '@material-ui/core'
import steg from './components/images/ster reg.jpg'


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
  <div style={{ display:'flex', justifyContent:'center'}}>
  <header className="App-header">
  <Container className="containers">
  <Card className="Card" >
  <Card.Img className="Card_image" src={image}   />
  <Card.Body >
    <Card.Title>
      By Kenneth Sinclair
    </Card.Title>
      <Card.Text>
      <p className="Paragraph">
            A Mortician, Harold, becomes the unexpected owner to a
        key he believes came to him for a purpose. After seeing
        a ghost at his most recent funeral, Andrew, he is swept
        up in the belief that the key and boy are signs to his fate.
        While Harold struggles to find purpose in this life, Andrew
        searches for purpose in the afterlife.
      </p>
      </Card.Text>
    <Button href="https://www.lulu.com/en/us/shop/kenneth-sinclair/coffins-caskets-and-mourn/paperback/product-1zk2krjq.html?page=1&pageSize=4" variant="primary">Read More</Button>
  </Card.Body>
  </Card>
  </Container>
  <Button href="https://www.etsy.com/Shop/HatchetPressShop" variant="primary">Print Shop</Button>
</header>
  </div>
);

export default App;
