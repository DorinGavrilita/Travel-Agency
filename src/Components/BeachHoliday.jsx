import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../images/beach1.jpg';
import img2 from '../images/beach2.jpg';
import img3 from '../images/beach3.jpg';
import img4 from '../images/beach4.jpg';
import img5 from '../images/beach5.jpg';
import img6 from '../images/beach6.jpg';

export const BeachHoliday = () => {
  return (
    <div className='beach-holiday'>
      <Container>
        <Row>
          <h4 className='text-uppercase fw-bold text-center' data-aos='fade-top'>BEACH TOUR PACKAGES</h4>
          <div className="beach-holiday-icon mx-auto mt-2" data-aos='fade-top' />
          <h1 className='fw-bold text-center mt-3 mb-5' data-aos='fade-top'>Beach Holiday</h1>
          <Col sm={4} className='mb-4' data-aos='zoom-in'>
            <img className='img-fluid beach-img' src={img1} alt="beach-img" />
          </Col>
          <Col sm={4} className='mb-4' data-aos='zoom-in'>
            <img className='img-fluid h-100 beach-img' src={img2} alt="beach-img" />
          </Col>
          <Col sm={4} className='mb-4' data-aos='zoom-in'>
            <img className='img-fluid beach-img' src={img3} alt="beach-img" />
          </Col>
          <Col sm={4} className='mb-4' data-aos='zoom-in'>
            <img className='img-fluid beach-img' src={img4} alt="beach-img" />
          </Col>
          <Col sm={4} className='mb-4' data-aos='zoom-in'>
            <img className='img-fluid beach-img' src={img5} alt="beach-img" />
          </Col>
          <Col sm={4} className='mb-4' data-aos='zoom-in'>
            <img className='img-fluid beach-img' src={img6} alt="beach-img" />
          </Col>
        </Row>
        <div className='d-flex justify-content-center mt-4' data-aos='fade-top'>
          <button className='learn-more-button'>Learn More</button>
        </div>
      </Container>
    </div>
  )
}
