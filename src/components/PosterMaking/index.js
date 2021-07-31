import React, { useEffect,useRef,useState } from "react";
import { Nav, Navbar, Badge, NavbarBrand, NavbarToggler, Collapse,  Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText , Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactGA from "react-ga";
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { withRouter } from "react-router-dom";
import smrc1 from '../../Images/smrc1.png';
import smrc2 from '../../Images/smrc1.png';
import flag from '../../Images/poster-flag.svg';
import teaching from '../../Images/prof-teaching.svg';
import rules from '../../Images/rules.svg';
import './postermaking.css'



const PosterMaking = (props) => {
   
    const [openModal, toggleModal] = useState(false);
    const instance = useRef(null);
    
    
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
         ReactGA.pageview(window.location.pathname + window.location.search);
         const scriptTag = document.createElement("script");
         scriptTag.setAttribute("src", "https://checkout.razorpay.com/v1/payment-button.js");
         scriptTag.setAttribute("data-payment_button_id", "pl_HfWSUdSA8wTUcs")
         scriptTag.setAttribute("async",true);
         instance.current.appendChild(scriptTag);
        
    },[])

    const earnNowClicked = () => {
         ReactGA.event({
             category: 'Button',
             action: 'User clicked on Earn now'
         })
     
         props.history.push(ROUTES.EARN);
     }
 
     const openForm = () =>
     {
       
        toggleModal(!openModal);
      
     }
     return (
    <div className="container subTopicContainer">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-7">
                <div className="row">
                <div className="col-12 col-md-12 col-lg-8">  
            <h5 className="poster-onoccassion">On the occassion of</h5>
            <h2 className="poster-head1">Independence Day</h2>
            </div>
            <div className="col-12 col-md-12 col-lg-4 hide-mobile">
            <img src={flag} className="poster-image-flag" alt="Marketing"/>
            </div>
            </div>
            <h1 className="poster-head-2">Poster Making competition</h1>
            <Badge className="badge-win">Win rewards upto ₹2000 </Badge>
            <Badge color="primary" style={{ backgroundColor: '#003E61', fontSize : '20px', padding:'1%', marginLeft:'2px'}}>Entry Fees: ₹10 INR </Badge>
           
            <br />
            <br /> 
            <p className="rule-body">SkilWil Presents you a poster making competition on various mathematical topics. This Poster making competion is more than a competition,because the posters you make are not merely for assessment but they will also help other students to understand  some topic in a better way and that is a very noble thing to do.</p>  
           
            
            <form  ref = {instance}>
           
            </form>
            <p className="register-check">Click here to register for the event</p>
            </div>  
            <div className="col-lg-5  col-sm-12">
            <img src={teaching} className="poster-image-head" alt="Marketing"/>
        </div>  
        </div> 
        <div className="row">
        <div className="col-lg-4 col-sm-12 ">
        <div className="container " >
        <Card className="smrc-event-card">
        <CardHeader className="poster-card">Event details</CardHeader>
        <CardBody className="poster-card-body">
          <CardTitle className="card-head-1" tag="h5">Contest</CardTitle>
          <CardText className="card-text-1">1<sup>st</sup> August to 15<sup>st</sup> August</CardText>
          <CardTitle className="card-head-1" tag="h5">Theme</CardTitle>
          <CardText className="card-text-1">Any mathematical concept</CardText>
          
          

        </CardBody>
  
      </Card>
      <br/>
      <br />
        </div>
        </div>
        <div className="col-12 col-md-12 col-lg-8 rule-main">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-8">
            <div className="rule-title">
            Rules
            </div>
            <div className="rule-body">
            <ul>
            <br /> <li>This contest is for students from grade 
It is for everyone!</li>
<br /> 
                <li>It should be either Digital poster or a    Handmade poster in Png or jpg Format.</li>
                <br /> <li>The judgement will not be based on the difficulty of topic rather will be based on how well the concept is explained and presented.</li>
                <br /> <li>All entries are to be sumitted at 
www.skilwil.com/events/postermaking.</li>
<br /> <li>No entries will be accepted after 6:00 Pm, 14th August.</li>
            
            </ul>
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 hide-mobile">
            <img src={rules} className="poster-image-rule" alt="Marketing"/>   
            </div>
        </div>
        </div>

                 
        </div>
   
   </div>

     )};

     export default withRouter(withFirebase(PosterMaking));
