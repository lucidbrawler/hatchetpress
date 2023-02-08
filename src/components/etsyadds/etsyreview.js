import React from "react";
 
import "../../App.css";

import etsy1 from '../../components/images/reviews/Screenshot from 2022-04-23 16-35-18.png'
import etsy2 from '../../components/images/reviews/Screenshot from 2022-04-23 16-14-31.png'
import etsy3 from '../../components/images/reviews/Screenshot from 2022-04-23 16-14-47.png'
import etsy4 from '../../components/images/reviews/Screenshot from 2022-04-23 16-15-00.png'
import etsy5 from '../../components/images/reviews/Screenshot from 2022-04-23 16-15-13.png'
import etsy6 from '../../components/images/reviews/Screenshot from 2022-04-23 16-15-26.png'
import etsy7 from '../../components/images/reviews/Screenshot from 2022-04-23 16-15-35.png'



function Etsyreview() {

	const images = [`${etsy1}`,`${etsy2}`,`${etsy3}`,`${etsy4}`,`${etsy5}`,`${etsy6}`, `${etsy7}`];
	const [imageIndex, setImageIndex] = React.useState(0);

	React.useEffect(() => {
	  setInterval(() => {
		setImageIndex(prev => (
		  prev === images.length - 1 ? 0 : prev + 1
		));
	  }, 2000);
	},[images.length])
	
	
    const leftArrowStyles = {
      
        zIndex:1,
        cursor: 'pointer',
    }
	return (
		<>
        
        
			<img className="Rimage"  style={leftArrowStyles} alt='base' src={images[imageIndex]} />
			
            <br/>
            
		
		</>
	);
}

export default Etsyreview;
