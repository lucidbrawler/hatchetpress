
import './App.css';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav';
import Prints from './prints';
import { HashRouter as Router, Route } from 'react-router-dom';
import image from './components/images/CCM COVER.JPG'
import Reader from './reader';
import Losthymns from './losthymns';
import threebulls from './components/images/CoffinsCasketsandmourn.gif';
import Contactform from './contactform';
import etsyreview from './components/images/reviews/Screenshot from 2022-04-23 16-11-10.png'
import etsy1 from './components/images/reviews/Screenshot from 2022-04-23 16-35-18.png'
import etsy2 from './components/images/reviews/Screenshot from 2022-04-23 16-14-31.png'
import etsy3 from './components/images/reviews/Screenshot from 2022-04-23 16-14-47.png'
import etsy4 from './components/images/reviews/Screenshot from 2022-04-23 16-15-00.png'
import etsy5 from './components/images/reviews/Screenshot from 2022-04-23 16-15-13.png'
import etsy6 from './components/images/reviews/Screenshot from 2022-04-23 16-15-26.png'
import etsy7 from './components/images/reviews/Screenshot from 2022-04-23 16-15-35.png'

function App() {

  return (

    <Router>
      <div className="App">
        <Bar />
        <Route path="/" exact component={Home} />
        <Route path="/prints" component={Prints} />
        <Route path="/reader" component={Reader} />
        <Route path="/losthymns" component={Losthymns} />
        <Route path="/contactform" component={Contactform} />
      </div>
    </Router>
  );
}
const event1 = "Sunset Stroll an arts n crafts Roller Social!"
const link1 = "https://www.instagram.com/p/ChBJqFPuYP7/"
const event2 = "Ithaca Night Bazar!"
const link2 = "https://www.eventbrite.com/e/ithaca-night-bazaar-tickets-302363706987"
const event3 = "918.22 PRINT PARTY"
const link3 = "https://www.instagram.com/p/ChSlyQJOkAK/"
const event4 = "A Trip To The Moon Art Market!"
const link4 = "https://www.instagram.com/p/ChR4jhxOLAN/"



const Home = () => (



  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Container>
      <Row>
        <Col>
          
            <Col>
              <p className="Paragraph4">
                <section>
                  <img className='Rimage' src={etsyreview} alt='' />

                </section>
                Welcome!<br/><br/> I am Kenneth Sinclair Author and Printmaker @HatchetPress
                I use linolem and woodcut block prints. "Coffin's, Caskets, and Mourn" is my first Novel.
                </p><p>
                <br/><br/>
                <p className='Paragraph3'>UPCOMING EVENTS:<br/><br/>
                <p> <strong className='event'>sep 4th: 6pm-9pm</strong>
                 <h2><a className='event' href ={link1}>{event1}</a>
                 </h2> DJ phantom and vendor market
                 <br/> @ 509 INNER HARBOR, Syracuse, NY</p><p> 
                   <strong className='event'>sept 15th: 6pm-9pm</strong>
                 <h2><a className='event' href={link2}>{event2}</a>
                 </h2> Live Music, Burlesqe show, and Vendor Market<br/> @ Steamboat Landing , Ithaca, NY</p>
                 <br/><br/>
                
                <p> <strong className='event'>sep 16th: 2pm-6pm<br></br>sept 17th: 12pm-4pm</strong>
                 <h2><a className='event' href ={link3}>{event3}</a>
                 </h2> 2 days of printmaking partying with amazing artists, various demonstrations, merch, raffles and more.  
                 <br/> @ 509 w Fayette St, Syracuse, NY</p><p> <
                   strong className='event'>oct 8th: 2pm-7pm</strong>
                 <h2><a className='event' href={link4}>{event4}</a>
                 </h2> 50+ Local artisan vendor's and Live Music!<br/> @ 100 college ave , Syracuse, NY</p>
                 
                 </p>
                
          
                
                 
                
                <br /><br /><Button href="https://www.etsy.com/Shop/HatchetPressShop" variant="primary" >Etsy Shop</Button>
              </p>
              <section>
                <img className='Rimage' src={etsy1} alt='' />
              </section>
              <section>
                <img className='Rimage' src={etsy2} alt='' />
              </section>
              <section>
                <img className='Rimage' src={etsy3} alt='' />
              </section>
              <section>
                <img className='Rimage' src={etsy4} alt='' />
              </section>
              <section>
                <img className='Rimage' src={etsy5} alt='' />
              </section>
              <section>
                <img className='Rimage' src={etsy6} alt='' />
              </section>
              <section>
                <img className='Rimage' src={etsy7} alt='' />
              </section>
            </Col>
          
        </Col>
        
        
        
        <Col>
         
            <Col>
              <header className="App-header">

             
                  <Card className="Card" >
                    <Card.Img className="Card_image" src={image} />
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
                        <img src={threebulls} remwidth={256} height={256} className="image" alt="" />
                        <p className="Paragraph3">
                          Read more! A Sample Chapter is available on Issue, or go straight to the store and buy it now!
                        </p>
                      </Card.Text>
                      <Button className="button" href="https://issuu.com/hatchetpress/docs/ccm_2_issu_sample_chapter..docx" variant="primary">Read More</Button>
                      <Button className="button" href="https://www.lulu.com/en/us/shop/kenneth-sinclair/coffins-caskets-and-mourn/paperback/product-1zk2krjq.html?page=1&pageSize=4" variant="primary">Buy Now</Button>
                    </Card.Body>
                  </Card>
              
              </header>
            </Col>
         
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
