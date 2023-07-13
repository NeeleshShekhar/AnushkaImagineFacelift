import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactUs.css';
import Button from 'react-bootstrap/Button';
import Mayhair from '../../Assets/Mayhair1.jpg'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_89m9keg', 'template_vkuy3mp', form.current, 'jQpXLPFGOpJ-x81VO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-us-main'>
        <br/><br/>
        <Container>
            <Row>
                <Col md={6} >
                <div className='contact-us-title'>Let us turn your <span className='dream'>Dream</span> into <span className='reality'>Reality.</span></div>
                <div className='contact-us-description'>We'd Love to connect and help you build your dream. Our team will reach out in 24 hours.</div>
                <br/>

                <Container>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form-head'>Name</div>
                        <input className='text-box' type="text" name="from_name" />
                        
                        <br/>
                        <br/>
                        <br/>
                        
                        <div className='form-head'>Email</div>
                        <input className='text-box'  type="email" name="from_email" />
                        
                        <br/>
                        <br/><br/>
                        <div className='form-head'>Message</div>
                        <textarea className='text-box' name="message" />
                        <br/>
                        <br/>
                        <br/>
                        <Button className='text-box-button' type="submit" value="Send" >Submit </Button>
                    </form>
                </Container>

                </Col>
                <Col md={6}>
                <br/>
                <img className='image-firstbox' src={Mayhair}></img>   
                </Col>
            </Row>
<br/>
<br/>
            {/* <Row  className='contact-2'>
                <Col md={4} className='contact-address-main'>
                <Row className='address-title'><span className='address'>Address</span></Row>
                <span className='address-desc'>Anushka Imagine, D3-309<br/>Sail City, New Pundag, Ranchi<br/> Jharkhand -834007</span>
                </Col>

                <Col md={8}>
                    
                </Col>
            </Row> */}
        </Container>
    


    </div>
  );
};