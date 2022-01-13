import {useState, useEffect} from 'react';
import Player from './components/Player/Player';
import Player2 from './components/Player2/Player2';
import './App.css';
import React from 'react';
import Container from'@material-ui/core/Container';
import ReactPlayer from 'react-player';
import { Row, Col } from 'react-bootstrap'

function App() {


  const [songs] = useState([
    {
      title: "Of Conviction",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_of-conviction.mp3"
    },
    {
      title: "Drowning in Gasoline",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_drowning-in-gasoline.mp3"
    },
    {
      title: "Christmas Eve",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_christmas-eve.mp3"
    },
    {
      title: "The Edge of a Blade",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_the-edge-of-a-blade.mp3"
    },
    {
      title: "I'm Calling on the Devil",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_i-m-calling-on-the-devil.mp3"
    },
    {
      title: "The Blood on my Teeth",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_the-blood-on-my-teeth.mp3"
    },
    {
      title: "Gravedigger",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_grave-digger.mp3"
    },
    {
      title: "You Were Always Going to Die",
      artist: "Lost Hymns",
      img_src: "./images/LostHymns.jpg",
      src: "./music/losthymns_you-were-always-going-to-die.mp3"
    }

  ]);

const [verse] = useState([
    {
      title: "Toy Soldiers and Guns",
      artist: "The Wasted",
      img_src: "./images/LostHymns.jpg",
      src: "./The Wasted/Track-1.mp3"
    },

    {
      title: "Crimson December",
      artist: "The Wasted",
      img_src: "./images/LostHymns.jpg",
      src: "./The Wasted/Track-2.mp3"
    },
    {
      title: "Bones",
      artist: "The Wasted",
      img_src: "./images/LostHymns.jpg",
      src: "./The Wasted/Track 3.mp3"
    },
    {
      title: "Gravestone-Dreams",
      artist: "The Wasted",
      img_src: "./images/LostHymns.jpg",
      src: "./The Wasted/Track 4.mp3"
    },
    {
      title: "Doctor",
      artist: "The Wasted",
      img_src: "./images/LostHymns.jpg",
      src: "./The Wasted/Track-5.mp3"
    },
    {
      title: "Pints",
      artist: "The Wasted",
      img_src: "./images/LostHymns.jpg",
      src: "./The Wasted/Track-6.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [currentSongIndex2, setCurrentSongIndex2] = useState(0);
  const [nextSongIndex2, setNextSongIndex2] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  useEffect(() => {
    setNextSongIndex2(() => {
      if (currentSongIndex2 + 1 > verse.length - 1) {
        return 0;
      } else {
        return currentSongIndex2 + 1;
      }
    });
  }, [currentSongIndex2]);



  return (
    <div style={{ display:'', justifyContent:'center'}} className="">
      <header className="">
      <Container className="">
        <Row className="">
          <Col className="">
            <p className="Paragraph5">This is a player for all my old albums
              I have on reverbnation. I started playing music when I was 15 years old, in Bradenton FL, I had a band called "The Wasted". Ever since we stopped playing I have always kept
              an avid intrest in creating new songs as Lost Hymns. All these songs are being made available for download at reverbnation.</p>
          </Col>
        </Row>
        <Row >
          <Col>
            <Player
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
              />
            </Col>
            <Col>
              <Player2
                currentSongIndex={currentSongIndex2}
                setCurrentSongIndex={setCurrentSongIndex2}
                nextSongIndex={nextSongIndex2}
                songs={verse}
                />
          </Col>
        </Row>
        </Container>
      </header>
      <header style={{ justifyContent:'center'}} className="App-header">
        <Container className="containersm" maxWidth="sm">
          <ReactPlayer className="ReactPlayer"
          url="https://www.youtube.com/watch?v=6n0-1ZuYZLg"
          muted={false}
          playing={true}
          />
        </Container>
        <Container style={{ justifyContent:'center'}} className="containersm" maxWidth="sm">
          <ReactPlayer className="ReactPlayer"
          url="https://youtu.be/O2_vRoFPAuk"
          muted={false}
          playing={false}
          />
        </Container>
        <Container style={{ justifyContent:'center'}} className="containersm" maxWidth="sm">
          <ReactPlayer className="ReactPlayer"
          url="https://www.youtube.com/watch?v=TSvSI6RCloY"
          muted={false}
          playing={false}
          />
        </Container>
      </header>
    </div>
  );
}

export default App;
