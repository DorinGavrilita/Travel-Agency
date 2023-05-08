import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import testImg from '../images/5.jpg';

export const TourCards = () => {
  return (
    <div className="tour-cards">
      <Container>
        <Row>
          <h1 className='text-center text-white fw-bold mb-5' data-aos='fade-top'>Active Tours</h1>
          <Col sm={4} className='mb-5' data-aos='flip-left'>
            <Card className='position-relative tour-card' style={{ width: '22rem' }}>
              <Card.Img className='pe-3 ps-3 pt-3' variant="top" src={testImg} />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title className='fs-3 fw-bold'>Card Title</Card.Title>
                  <span className="card-price fs-4 fw-bold">700$</span>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className='mb-5' data-aos='flip-left'>
            <Card className='position-relative tour-card' style={{ width: '22rem' }}>
              <Card.Img className='pe-3 ps-3 pt-3' variant="top" src={testImg} />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title className='fs-3 fw-bold'>Card Title</Card.Title>
                  <span className="card-price fs-4 fw-bold">700$</span>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className='mb-5' data-aos='flip-left'>
            <Card className='position-relative tour-card' style={{ width: '22rem' }}>
              <Card.Img className='pe-3 ps-3 pt-3' variant="top" src={testImg} />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title className='fs-3 fw-bold'>Card Title</Card.Title>
                  <span className="card-price fs-4 fw-bold">700$</span>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className='mb-5' data-aos='flip-left'>
            <Card className='position-relative tour-card' style={{ width: '22rem' }}>
              <Card.Img className='pe-3 ps-3 pt-3' variant="top" src={testImg} />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title className='fs-3 fw-bold'>Card Title</Card.Title>
                  <span className="card-price fs-4 fw-bold">700$</span>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className='mb-5' data-aos='flip-left'>
            <Card className='position-relative tour-card' style={{ width: '22rem' }}>
              <Card.Img className='pe-3 ps-3 pt-3' variant="top" src={testImg} />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title className='fs-3 fw-bold'>Card Title</Card.Title>
                  <span className="card-price fs-4 fw-bold">700$</span>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className='mb-5' data-aos='flip-left'>
            <Card className='position-relative tour-card' style={{ width: '22rem' }}>
              <Card.Img className='pe-3 ps-3 pt-3' variant="top" src={testImg} />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title className='fs-3 fw-bold'>Card Title</Card.Title>
                  <span className="card-price fs-4 fw-bold">700$</span>
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
