import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const Header = () => {
  return (
    <header className='w-100 position-relative'>
      <Container>
        <Row className='mx-5 figures w-100'>
          <figure className='w-100 d-flex justify-content-end'>
            <div className="circle" />
          </figure>
          <div className="text-container">
            <h1 className='header-title text-white fw-bold'>Travel Agency</h1>
            <p className='header-text text-white mt-3'>
              Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.
            </p>
            <button className='text-uppercase'>contact us</button>
          </div>
          <figure className='w-100 d-flex justify-content-end'>
            <div className="header-image1 position-absolute" />
          </figure>
          <figure className='w-100 d-flex justify-content-center'>
            <div className="header-image2 position-absolute me-5" />
          </figure>
          <div className="blue-circle position-absolute ms-5" />
      </Row>
    </Container>
    </header >
  )
}