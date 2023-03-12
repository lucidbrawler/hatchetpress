
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
import Etsyreview from './components/etsyadds/etsyreview';
import etsyreview from './components/images/reviews/Screenshot from 2022-04-23 16-11-10.png'

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
// EVENT CALANDER AND DATES
const event1 = "The Fool's Variety Show"



const link1 = "https://www.instagram.com/p/Cpn-1TUOnNl/"
const eventdate1 = "April 1st: 7pm-11pm"
const event1description = "Local Artist Showcase, Performances, and More"
const event1address =  "@ 200 S Geddes St, Syracuse, NY, United States, New York"
const event1addresslink="https://www.google.com/maps/place/The+Little+Room/@43.0456975,-76.1713244,15z/data=!4m2!3m1!1s0x0:0x20d259a020af6c54?sa=X&ved=2ahUKEwii4dHCq9f9AhV4E1kFHdgoB1oQ_BJ6BAhAEAg"

const event2 = "Sip and Shop!"

const eventdate2 = "April 16th: 11am-3pm"/*
const link2 = "https://www.eventbrite.com/e/ithaca-night-bazaar-tickets-302363706987"
const event2description = "variety of goods and art from local vendors"
const event2address = "@ Alto Cinco Syracuse, Ny"


const event3 = "918.22 PRINT PARTY"
const link3 = "https://www.instagram.com/p/ChSlyQJOkAK/"
const eventdate3 = "sep 16th: 2pm-6pm"
const event3description = "2 days of printmaking partying with amazing artists, various demonstrations, merch, raffles and more."
const event3address = "@ 509 w Fayette St, Syracuse, NY"

const event4 = "A Trip To The Moon Art Market!"
const link4 = "https://www.instagram.com/p/ChR4jhxOLAN/"
const eventdate4 = "oct 8th: 2pm-7pm"
const event4description = "50+ Local artisan vendor's and Live Music!"
const event4address = "@ 100 college ave , Syracuse, NY"
*/

const Home = () => (



  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Container>
      <Row>
        <Col>
          
            <Col>
              <p className="Paragraph4">
                <section>
                  <img className='Rimage' src={etsyreview} alt='' />
                  <section>
                  <Etsyreview />
                </section>
                </section>
                Welcome!<br/><br/> I am Kenneth Sinclair Author and Printmaker @HatchetPress
                I use linolem and woodcut block prints. "Coffin's, Caskets, and Mourn" is my first Novel.
                </p><p>
                
                <br/><br/>
                <p className='Paragraph3'>UPCOMING EVENTS:<br/><br/>
                <h1>{event1}</h1>
                {event1description}
                <p> <strong className='event'>{eventdate1}</strong>
                 <h2><a className='event' href ={link1}>{event1}</a>
                 </h2> 
                 <a className='event' href={event1addresslink}> {event1address} </a></p>
                  
                 <p>   <h2>{event2}</h2></p>
                 <strong className='event'>{eventdate2}</strong> {/* 
                 <strong className='event'>{eventdate2}</strong>
                 {event2description}<br/>{event2address} </p>
                 <br/><br/>
                
                <p> <strong className='event'>{eventdate3}<br></br>sept 17th: 12pm-4pm</strong>
                 <h2><a className='event' href ={link3}>{event3}</a>
                 </h2>{event3description} 
                 <br/> {event3address}</p><p> 
                   <strong className='event'>{eventdate4}</strong>
                 <h2><a className='event' href={link4}>{event4}</a>
                 </h2>{event4description}<br/> {event4address}</p>
                 */}
                 </p>
                
          
                
                 
                
                <br /><br /><Button href="https://www.etsy.com/Shop/HatchetPressShop" variant="primary" >Etsy Shop</Button>
              </p>
              
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
