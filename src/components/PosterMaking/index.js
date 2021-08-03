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
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
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

   
 
     const toggle = () =>
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
            <h1 className="poster-head-2">Poster Making Competition</h1>
            <Badge className="badge-win">Win rewards upto ₹2000 </Badge>
            <Badge color="primary" style={{ backgroundColor: '#003E61', fontSize : '20px', padding:'1%', marginLeft:'2px'}}>Entry Fees: ₹10 INR </Badge>
           
            <br />
            <br /> 
            <p className="rule-body">SkilWil Presents you a Poster Making Competition on various mathematical topics. This poster making competition is more than a competition,because the posters you make are not merely for assessment but they will also help other students to understand some topic in a better way and that is a very noble thing to do.</p>  
           
           <div className = "payAndReward">
               <form  ref = {instance}>
          
        </form>
           <Button style = {{width : '150px',marginLeft:'20px',borderColor:'#002244',textAlign:'center',color : '#002244', fontWeight:'bold'}} color = "ouline"  className = "rewardPosterButton" onClick = {toggle} >Rewards</Button>
            <a  style = {{marginLeft : '20px'}} href="whatsapp://send?text= https://www.skilwil.com/events/postermaking SkilWil Presents you a Poster Making Competition on various mathematical topics. Win Rewards upto INR 2000. Get featured on our website and get a chance to publish your own Mathematics Course." data-action="share/whatsapp/share"><WhatsAppIcon style = {{color : '#128C7E', fontSize : '45px'}}/></a>
           </div>
         
            <p className="register-check">Click here to register for the event <br/>
           If you are facing any issues with the payment, contact us at skilwilbusiness@gmail.com. </p>
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
          <CardText className="card-text-1">Any Mathematical Concept</CardText>
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
            <br /> <li>This contest is open for all students from all grades.</li>
            <br/>
            <li>After successful registration and payment, we would be sending you a unique link on your registered email id to submit your poster. Kindly, do not share your submission link with anyone else.</li>
            <br/>
                <li>The Poster to be submitted must either be Digital or Handmade. Accepted formats are .jpg, .png and .pdf</li>
                <br/>
                <li>The final judgement will not be based on the difficulty of topic you chose for the poster but rather will be on how well the concept is explained and presented in simple words.</li>
<br /> <li>No entries will be accepted after 6:00 Pm, 14th August.</li>
<br/>
        <li><a style = {{cursor : 'pointer'}} href = "https://docs.google.com/document/u/1/d/e/2PACX-1vSwrzE2wwo1DxA3Vm-dqMWBlpIaSegZGX40xzfq_BHelH21X1zijYn4DrV7aJjuN-aUwYmcmEqOuzv8/pub" >Terms and Conditions</a></li>
            </ul>
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 hide-mobile">
            <img src={rules} className="poster-image-rule" alt="Marketing"/>   
            </div>
        </div>
        </div>
        </div>
   { openModal && <Modal isOpen={openModal} toggle={toggle}  >
        <ModalHeader  style = {{border : 'none', backgroundColor: '#8EC5FC',
backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}} toggle={toggle}>Rewards</ModalHeader>
        <ModalBody style = {{fontFamily : 'Raleway', fontWeight:'bold', backgroundColor: '#8EC5FC',
backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}} >
          <ul>
              <li>Winners of the contest can win cash-prizes upto INR 2000.</li>
              <br/>
              <li>Winners may get a chance to feature a Course or an Article on the website.</li>
              <br/>
              <li>Good posters from the contest will be displayed on our <a href = "https://www.instagram.com/skilwil">Instagram Handle</a> and on our website.</li>
                   <br/>
              <li>All registered participants will recieve a Certificate of Participation.</li>
                   <br/>
              <li>All registered participants will get a free 2-month access to Doubt Clearance via one-to-one session with our subject experts. </li>
                   <br/>
              <li>All registered participants will get a free access to SkilWil Learn Courses.</li>
          </ul>
        </ModalBody>
        <ModalFooter  style = {{border:'none', backgroundColor: '#8EC5FC',
backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'}}>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> }
   </div>
     )};

     export default withRouter(withFirebase(PosterMaking));
