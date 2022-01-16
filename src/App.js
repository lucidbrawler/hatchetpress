
import './App.css';
import { Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav';
import Prints from './prints';
import {HashRouter as Router,  Route } from 'react-router-dom';
import image from './components/images/CCM COVER.JPG'
import Reader from './reader';
import Losthymns from './losthymns';
import threebulls from './components/images/CoffinsCasketsandmourn.gif';
import Contactform from './contactform';

function App() {
  return (
    <Router>
    <div className="App">
    <Bar />
    <Route path="/" exact component={Home}/>
    <Route path="/prints" component={Prints}/>
    <Route path="/reader" component={Reader}/>
    <Route path="/losthymns" component={Losthymns}/>
    <Route path="/contactform" component={Contactform}/>

    </div>
    </Router>
  );
}

const Home = () =>(

  <div style={{ display:'flex', justifyContent:'center'}}>

  <header className="App-header">
  <p className="Paragraph4">
        Hatchet Press is a platform I created.
        I use it to self-publish and host my art and
        music here aswell. I am a printmaker and use linolem
        and woodcut block prints. I accept commision work hatchetpressmail@yahoo.com. Coffin's Caskets and Mourn is my first Novel.
  </p>
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
      <img src={threebulls} remwidth={256} height={256} className="image" alt=""/>
      <p className="Paragraph3">
            Read more! A Sample Chapter is available on Issue, or go straight to the store and buy it now!
      </p>
      </Card.Text>
    <Button className="button" href="https://issuu.com/hatchetpress/docs/ccm_2_issu_sample_chapter..docx" variant="primary">Read More</Button>
    <Button className="button" href="https://www.lulu.com/en/us/shop/kenneth-sinclair/coffins-caskets-and-mourn/paperback/product-1zk2krjq.html?page=1&pageSize=4" variant="primary">Buy Now</Button>
  </Card.Body>
  </Card>
  </Container>

</header>
  </div>
);

export default App;
