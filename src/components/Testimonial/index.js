import React, {useEffect} from 'react';
import ReactGA from "react-ga";
import girl from '../../Images/girl.png';
import teacher from '../../Images/teacher.png';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Testimonial = (props) =>
{
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
 <div className="container">
 <br/>
 <h2 style={{fontFamily:'sans-serif',fontWeight:'5%',color:'#436553'}}>Testimonials</h2>

 <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        
      <div className="container carousel-main" >
        <img src={teacher} width="100%" alt="Contribute" />
          <div className="myCarousel">
            <h3>Mr. Vikas Ware</h3>
            <h4>Kia Motors </h4>
            <p><i>
            The interior design team at XYZ Company completely transformed my home. Their attention to detail and creative ideas made the space feel stylish and functional. I couldn't be happier with the results!</i></p>
          </div>
        </div>
      <div>
        <img src={girl} width="100%" alt="Contribute" />
          <div className="myCarousel">
            <h3>Nibedita Sharma</h3>
            <h4>Maihar Gardens</h4>
            <h6>
            Working with XYZ Company was an absolute pleasure. Their professionalism and design expertise were evident from start to finish. They created a beautiful, inviting space that reflects my personal style.
            </h6>
            <p><i>XYZ Company made our dream home a reality. Their innovative design concepts and meticulous execution turned our space into a stunning showcase. We are grateful for their talent and dedication." </i></p>
          </div>
        </div>

        <div>
        <img src={girl} width="100%" alt="Contribute" />
          <div className="myCarousel">
            <h3>Shravya</h3>
            <h4>Student, VESASC</h4>
            <h6>
            Excellent contest and a thorough prep talk is the only thing I can say about the event.
            </h6>
            <p><i>The entire talk was perfectly managed, answered each of my questions and made my understanding even better about the presented topic. </i></p>
          </div>
        </div>

        

      </Carousel>
 </div>  
    );
}

export default withRouter(Testimonial);