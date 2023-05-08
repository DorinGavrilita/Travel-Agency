import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <Container className='position-relative'>
        <div className="fill-circle position-relative" data-aos='fade-top' />
        <div className="circle-blue position-absolute" data-aos='fade-top' />
        <Row className='contact-info-container mx-auto' data-aos='fade-top'>
          <Col sm={5} data-aos='fade-right'>
            <h2 className='fw-bold mb-5'>Contact Info</h2>

            <div className="d-flex align-items-center mb-4">
              <ion-icon className='telephone' name="call-outline" />
              <h5 className='ms-1'>+1 (234) 567-8910</h5>
            </div>

            <div className="d-flex align-items-center mb-4">
              <ion-icon name="mail-outline" />
              <h5 className='ms-2'>contact@yourmail.com</h5>
            </div>

            <div className="d-flex align-items-center mb-4">
              <ion-icon name="location-outline" />
              <h5 className='ms-3'>203, Envato Labs, Behind Alis Steet, Australia</h5>
            </div>

            <div className="social-icons d-flex">
              <div className='me-3'>
                <a href="#"> <ion-icon size='large' name="logo-facebook" /></a>
              </div>
              <div className='me-3'>
                <a href="#"><ion-icon size='large' name="logo-twitter" /></a>
              </div>
              <div className='me-3'>
                <a href="#"><ion-icon size='large' name="logo-instagram" /></a>
              </div>
              <div>
                <a href="#"><ion-icon size='large' name="logo-youtube" /></a>
              </div>
            </div>
          </Col>
          <Col sm={7} data-aos='fade-left'>
            <Form>
              <Row className='mb-4'>
                <input type="text" className='contact-input' placeholder='Enter your name' />
              </Row>
              <Row className='mb-4'>
                <input type="text" className='contact-input' placeholder='Enter a valid email address' />
              </Row>
              <Row className='mb-4'>
                <textarea className='contact-input textarea' placeholder='Enter your message' />
              </Row>
            </Form>
            <Row>
              <button className='text-uppercase form-btn text-white'>Submit</button>
            </Row>
          </Col>
        </Row>
      </Container >
    </div >
  )
}
