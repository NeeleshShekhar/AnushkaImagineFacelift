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
        
      <div>
        <img src={teacher} width="100%" alt="Contribute" />
          <div className="myCarousel">
            <h3>Mr. Vikas Ware</h3>
            <h4>Head of Department, VESASC </h4>
            <p><i>
            Great set of questions for the contest. A platform like SkilWil will enhance the ability of the students by letting them synergize with the opportunities provided by SkilWil.
            </i></p>
          </div>
        </div>
      <div>
        <img src={girl} width="100%" alt="Contribute" />
          <div className="myCarousel">
            <h3>Nibedita Sharma</h3>
            <h4>Winner, SRMC-VESASC</h4>
            <h6>
              One of the most informative and perfectly organized seminars attended.
            </h6>
            <p><i>A thoroughly explained seminar that answered almost all relevent queries. The event was extremly organized and I would definately </i></p>
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