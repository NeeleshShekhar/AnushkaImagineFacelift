import React, { useEffect,useRef,useState } from "react";
import { Nav, Navbar, Badge, NavbarBrand, NavbarToggler, Collapse,  Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText , Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactGA from "react-ga";
import * as ROUTES from '../../constants/routes';
import smrc1 from '../../Images/smrc1.png';
import smrc2 from '../../Images/smrc1.png';
import ram from '../../Images/ram.png';
import { LaptopWindowsTwoTone } from "@material-ui/icons";
import { ReactTypeformEmbed } from 'react-typeform-embed';


const SMRC = (props) => {
   
   const [openModal, toggleModal] = useState(false);
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
      
    }, [])

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
    <div className = "smrc">
         <br / >
         <div className="container ">
        <div className="row">
        <div className="col-lg-7 col-sm-12">
       <h1 className="smrc-head1">SMRC</h1>
        <h2 style={{color:"#064c5f"}}>Skilwil Mathematics Reward Contest </h2>
        <div className="smrc-content">A splendid hour long Mathematics contest, organized by the department of Mathematics, VESASC, which tests your aptitude and reward you with exciting prizes and internship oppurtunities.   
        <Badge color="primary" style={{ backgroundColor: '#003E61', fontSize : '20px', padding:'1%', marginLeft:'2px'}}>1 hour</Badge>
        </div>
        <br />
        <div className="button-smrc">
        
       
         <a > <Button disabled className = "Register-smrchome"  onClick={openForm} style={{ cursor: 'pointer' }}>
                    Attempt Contest
        </Button>
        </a>
         <p  style = {{paddingTop : '2%', fontSize:'15px', fontFamily:'Gothic'}}>The contest has ended ! </p>
        </div></div>
      <br/>
        <div className="col-lg-5  col-sm-12">
        <img src={smrc1} className="imagetop" alt="Marketing"/>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-4 col-sm-12 ">
        <div className="container " >
        <Card className="smrc-event-card">
        <CardHeader className="smrc-card-head">Event details</CardHeader>
        <CardBody className="smrc-card-body">
          <CardTitle tag="h5">Date:</CardTitle>
          <CardText>3<sup>rd</sup> July, 2021</CardText>
          <CardTitle tag="h5">Quiz Time</CardTitle>
          <CardText>3:00 PM</CardText>
          <CardTitle tag="h5">Prep TalkTime</CardTitle>
          <CardText>4:00 PM</CardText>
          
          <a  href="https://docs.google.com/forms/d/e/1FAIpQLScnbl6zGfoUPCTIexdjc5r_xzJRsiCET37RWHSS4nWiEB55Ug/viewform?usp=sf_link" target="_blank"><Button disabled className = "Register-smrchome"  style={{marginLeft:"2px"}}> The event has ended. </Button>
          </a>

        </CardBody>
  
      </Card>
        </div>
        </div>
        <div className="col-lg-8 col-sm-12">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="event-card">
              <div className="event-smrc-head" >Prep Talk <Badge color="primary" style={{ backgroundColor: '#003E61', fontSize : '20px', padding:'1%', marginLeft:'2px'}}> 1 Hour </Badge></div>
              <div className="event-smrc-name" >Sagar Ramchandani</div>
              <div className="event-smrc-namedesc">Student of University of Cologne, Germany </div>
              <div className="event-smrc-namedesc">Alumini, VESASC Mumbai </div>
                <br/>
              <div className="event-smrc-desc">Building your portfolio for admission in college outside India  </div>
             
              </div>
              <br />
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src={ram} className="smrc-photo" alt="Sagar Ramchandani"/>
            </div>
        </div>
        </div>
     

                 
        </div>
      </div>
        <br/>
        <Modal style={{ backgroundColor: '#88C0EB' }} className="modal-container modal-fullscreen" isOpen={openModal} toggle={openForm}>
                <ModalHeader style={{ backgroundColor: '#88C0EB', border: 'none' }}>Welcome ! All the best.</ModalHeader>
                <ModalBody style={{ backgroundColor: '#88C0EB' }}>
                  
            <ReactTypeformEmbed
                    popup = {false}
                    autoOpen={true}
                    url="https://ap05itjz22p.typeform.com/to/Iy6x2QoU#hidden1=xxxxx"
                    autoClose = {true}
                />
                </ModalBody>
                <ModalFooter style={{ backgroundColor: '#88C0EB', border: 'none', paddingRight: '30px' }}>
                    <Button color="primary" href="https://forms.gle/x54pCrPRHPQwy18x8">Contact Us</Button>{' '}
                    <Button color="secondary" onClick={openForm}>Leave</Button>
                </ModalFooter>
         </Modal>
   </div>
 
    );
}

export default SMRC;