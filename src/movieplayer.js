import './App.css';
import React from 'react';
import Container from'@material-ui/core/Container';
import ReactPlayer from 'react-player';


function Movies() {
  return(

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
            url="https://www.youtube.com/watch?v=TSvSI6RCloY"
            muted={true}
            playing={false}
            />
          </Container>
        </header>

  );

}



export default Movies;
