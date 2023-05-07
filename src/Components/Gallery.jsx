import React from 'react';
import { Container, Row, Carousel, Form } from 'react-bootstrap';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';

export const Gallery = () => {
  return (
    <div className='gallery'>
      <Container>
        <Row className='d-flex justify-content-center'>
          <h1 className='text-center fw-bold mb-5'>Summer travel is returning</h1>
          <div className="carousel">
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={img1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={img2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={img4}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={img5}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={img6}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <div className='button-container d-flex justify-content-center'>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
