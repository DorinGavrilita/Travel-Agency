import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Offers = () => {
  return (
    <div className='offers'>
      <Container>
        <Row className='mx-5'>
          <h1 className='text-center text-white fw-bold mb-5'>Your brain needs a break</h1>
          <Col sm={4} className='d-flex flex-column align-items-center'>
            <div className="offer-card bg-white">
              <div className="offer-card-img1 offer-img mb-4" />
              <div className="offer-card-text">
                <h2 className='fw-bold mb-4'>Mountains</h2>
                <p className='mb-4'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <a href="#" className='text-uppercase position-'>More</a>
              </div>
            </div>
          </Col>
          <Col sm={4} className='d-flex flex-column align-items-center'>
            <div className="offer-card bg-white">
              <div className="offer-card-img2 offer-img mb-4" />
              <div className="offer-card-text">
                <h2 className='fw-bold mb-4'>Waterfalls</h2>
                <p className='mb-4'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <a href="#" className='text-uppercase position-'>More</a>
              </div>
            </div>
          </Col>
          <Col sm={4} className='d-flex flex-column align-items-center'>
            <div className="offer-card bg-white">
              <div className="offer-card-img3 offer-img mb-4" />
              <div className="offer-card-text">
                <h2 className='fw-bold mb-4'>Road Travel</h2>
                <p className='mb-4'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <a href="#" className='text-uppercase position-'>More</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}