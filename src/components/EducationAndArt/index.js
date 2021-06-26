import React, {useEffect} from 'react';
import ReactGA from "react-ga";
import educard from '../../Images/educard.svg';
import artcard from '../../Images/artcard.svg';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const EducationAndArt = (props) =>
{
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const educationSectionClicked = () =>
    {
        ReactGA.event({
            category: 'Education Card',
            action: 'User clicked on Education Card!'
        })

        props.history.push(ROUTES.EARN);
    }
    return (
 <>
 <br/>
     <div className="container">
         <div className="row justify-content-md-center ">
             <div className="col-lg-5 col-sm-12 info-cards">
                 <div className="info-cards-heading">
                     <h2>Education</h2>
                 </div>
                 <img src={educard} width="100%" alt="Contribute" />
                    <div class="overlay" onClick={educationSectionClicked}>
                     <div class="text">SkilWil provides a platform which exposes an individual to brainstroming contests which enables them to explore, asses and deepen their depth of knowledge.
                     </div>
                 </div></div>
             <div className="col-lg-5 col-sm-12 info-cards">
                 <div className="info-cards-heading">
                     <h2>ART</h2>
                 </div>
                 <img src={artcard} width="100%" alt="Contribute" />
                 <div class="overlay">
                     <div class="text">'Creativity is Intelligence having fun' hence, SkilWil provides you the perfect platform to showcase the artist within you.
                     </div>
                 </div>
             </div>
         </div></div>
 </>   
    );
}

export default withRouter(EducationAndArt);