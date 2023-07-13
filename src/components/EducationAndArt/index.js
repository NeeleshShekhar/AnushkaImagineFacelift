import React, {useEffect} from 'react';
import ReactGA from "react-ga";
import educard from '../../Images/house.jpg';
import artcard from '../../Images/com.jpg';
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
 <div>
 <br/>
     <div className="container">
         <div className="row justify-content-md-center " >
             <div className="col-lg-5 col-sm-12 info-cards" >
                 <div className="info-cards-heading">
                     <h2>Interior</h2>
                 </div>
                 <img src={educard} width="100%" alt="Contribute" className='eduimage'/>
                    <div class="overlay" onClick={educationSectionClicked}>
                     <div class="text">Anushka Imagine is a leading interior design company specializing in creating stunning and functional spaces. We have a team of highly skilled designers who are passionate about transforming ordinary spaces into extraordinary environments.
                     </div>
                 </div></div>
             <div className="col-lg-5 col-sm-12 info-cards">
                 <div className="info-cards-heading">
                     <h2>Commercial Designs</h2>
                 </div>
                 <img src={artcard} width="100%" alt="Contribute" className='eduimage' />
                 <div class="overlay">
                     <div class="text">Our goal is to create beautiful and practical designs that not only meet our clients' expectations but exceed them. We work closely with our clients to understand their needs, preferences, and budget, ensuring that the final result is a space they truly love.
                     </div>
                 </div>
             </div>
         </div></div>
 </div>   
    );
}

export default withRouter(EducationAndArt);