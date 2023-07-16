
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
const event1 = "Art Garden and sustainability trail"
const link1 = "https://www.instagram.com/p/CttUcaZuAnf/"
const eventdate1 = "August 5th 9:30am-2:30pm"
const event1description = "Tour unique gardens with sustainable elements- local artists' work -free eco zone sourced native plant for attendees!"
const event1address =  "@ 1438  Comstock Ave, Syracuse, NY, United States, New York  13210"
const event1addresslink="https://www.google.com/maps/place/1438+Comstock+Ave,+Syracuse,+NY+13210/@43.0180214,-76.1284846,17z/data=!4m15!1m8!3m7!1s0x89d9f48106709779:0x1d726067131ee634!2s1438+Comstock+Ave,+Syracuse,+NY+13210!3b1!8m2!3d43.0180214!4d-76.1284846!16s%2Fg%2F11c26rfllt!3m5!1s0x89d9f48106709779:0x1d726067131ee634!8m2!3d43.0180214!4d-76.1284846!16s%2Fg%2F11c26rfllt?entry=ttu"

const event2 = "Wet Hot American Market II: Summer Camp!"
const link2 = "https://www.eventbrite.com/e/ithaca-night-bazaar-tickets-302363706987"
const eventdate2 = "Aug 6th: TBD"
const event2description = "variety of goods and art from local vendors"
const event2address = "@ Sharkey’s Events Center Liverpool NY 13090"
const event2addresslink="https://www.google.com/maps/place/Sharkey's+Banquets+%26+Events/@43.1218637,-76.2134163,15z/data=!4m6!3m5!1s0x89d9ee3754e1b16b:0x5e03f2f639165ba1!8m2!3d43.1218637!4d-76.2134163!16s%2Fg%2F11h0lc7bp?entry=ttu"


const event3 = " Salt City Book Arts PRINT PARTY"
const link3 = "https://www.instagram.com/p/ChSlyQJOkAK/"
const eventdate3 = "Sept 23rd"
const event3description = "Printmaking Demos! vendors! exhibition!"
const event3address = "@ Maker Space a downtown Central Library"
const event3addresslink = "https://www.google.com/maps/place/Onondaga+County+Public+Libraries:+Central+Library/@43.045845,-76.1534929,17.91z/data=!3m1!5s0x89d9f3bee8eb90c9:0x1f0390272e0376e!4m6!3m5!1s0x89d9f3befd4524d3:0x361247b12a88c269!8m2!3d43.0459585!4d-76.1517369!16s%2Fg%2F1vgx1rl2?entry=ttu"

/*
const event4 = "A Trip To The Moon Art Market!"
const link4 = "https://www.instagram.com/p/ChR4jhxOLAN/"
const eventdate4 = "oct 8th: 2pm-7pm"
const event4description = "50+ Local artisan vendor's and Live Music!"
const event4address = "@ 100 college ave , Syracuse, NY"
const event4addresslink = ""
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
                
                <h1><a className='event' href ={link1}>{event1}</a></h1>
                {event1description}
                <p> <strong className='event'>{eventdate1}</strong>
                 <a className='event' href={event1addresslink}> {event1address} </a></p>
        
                <h1><a className='event' href={link2}> {event2}</a></h1>
                   {event2description}
                   <p> <strong className='event'>{eventdate2}</strong> 
                    <a className='event' href={event2addresslink} >{event2address} </a></p>
                 <br/><br/>

                 <h1><a className='event' href ={link3}>{event3}</a></h1>
                 {event3description}
                  <p> <strong className='event'>{eventdate3}</strong>
                  <a className='event' href={event3addresslink}>{event3address}</a>
                  </p>
                 
                   {/* 
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
