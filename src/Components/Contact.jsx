import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col sm={4} data-aos='fade-right'>
            <div className="photo-card bg-white d-flex justify-content-center align-items-center position-relative">
              <div className="contact-image" />
              <div className="contact-image-mobile position-absolute" />
            </div>
          </Col>
          <Col sm={8} data-aos='fade-left'>
            <div className='w-100 h-100 bg-white contact-text'>
              <p className='text-uppercase'>
                CONVALLIS POSUERE MORBI LEO URNA MOLESTIE AT ELEMENTUM EU FACILISIS. VEHICULA IPSUM A ARCU CURSUS VITAE.
              </p>
              <div className="contacts mt-4 d-flex align-items-center">
                <div className="phone-icon me-2" />
                <h2>+1 (234) 567-8910</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}
