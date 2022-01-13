import { Container } from 'react-bootstrap'
import React, { useRef, useState, useEffect } from "react"
import {
  ReactReader,
  ReactReaderStyle
} from "react-reader"

const ownStyles = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: 'tomato'
  }
}

function App() {
  const [size, setSize] = useState(100)
  const renditionRef = useRef(null)
  const changeSize = (newSize) => {
    setSize(newSize)
  }
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`)
    }
  }, [size])





  const [page, setPage] = useState('')

  const tocRef = useRef(null)
  const [location, setLocation] = useState(null)
  const locationChanged = (epubcifi) => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start
      const chapter = tocRef.current.find((item) => item.href === href)
      setPage(`Page ${displayed.page} of ${displayed.total} in chapter ${chapter ? chapter.label : 'n/a'}`)
    }


  // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
  setLocation(epubcifi)
}
useEffect(() => {
  if (renditionRef.current) {
    renditionRef.current.themes.fontSize(`${size}%`)
  }
}, [size])
  return (
    <Container fluid className="containers">
    <div >
      <div  style={{ height: "90vh" }} className="myReader">
        <ReactReader
          location={location}
          locationChanged={locationChanged}

          url="https://lucidbrawler.github.io/ebooks/The Eye of Talus - Kenneth Sinclair.epub"
          getRendition={(rendition) => {
            renditionRef.current = rendition
            renditionRef.current.themes.fontSize(`${size}%`)
          }}
          tocChanged={toc => tocRef.current = toc}
          styles={ownStyles}
        />
      </div>
      <div class="ereaderpage" style={{ position: 'relative', bottom: '2rem', right: '2rem', left: '2rem', textAlign: 'center', zIndex: 1}}>
        {page}
      </div>
      <div  style={{ position: 'relative', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
        <button onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
        <span class="ereadersize">Current size: {size}%</span>
        <button onClick={() => changeSize(Math.min(130, size + 10))}>+</button>
        </div>
    </div>
    </Container>
  )
}

export default App
