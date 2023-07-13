import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Aboutus.css';
import logo from '../../Assets/logo.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col md={6}>
            <Image
              src={logo}
              alt="Anushka Imagine Logo"
              className="logo"
            />
          </Col>
          <Col md={6}>
            <h1>About Us</h1>
            <p>
              Anushka Imagine is a leading interior design company specializing
              in creating stunning and functional spaces. We have a team of
              highly skilled designers who are passionate about transforming
              ordinary spaces into extraordinary environments.
            </p>
            <p>
              With years of experience in the industry, we have successfully
              completed numerous residential and commercial projects, each
              tailored to our client's unique vision and style. We believe that
              every space has the potential to inspire and reflect the
              personality of its occupants.
            </p>
            <p>
              Our goal is to create beautiful and practical designs that not
              only meet our clients' expectations but exceed them. We work
              closely with our clients to understand their needs, preferences,
              and budget, ensuring that the final result is a space they truly
              love.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;