import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Tours = () => {
  return (
    <div className='tours'>
      <Container>
        <Row className='gx-5 position-relative'>
          <Col sm={6} data-aos='fade-right'>
            <div className="tours-img1" />
          </Col>
          <Col sm={6} data-aos='fade-left'>
            <div className="tours-img2" />
          </Col>
          <div className="tours-text position-absolute">
            <h1 className='text-white text-center fw-bold mt-5' data-aos='zoom-in'>Active Tours</h1>
            <p className='text-center text-white' data-aos='zoom-in'>
              Sem et tortor consequat id porta. Laoreet sit amet cursus sit amet dictum. Adipiscing elit duis tristique sollicitudin nibh sit.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  )
}
