import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const HelpTravels = () => {
  const renderCard = (title, imgClass) => {
    return (
      <Col sm={3}>
        <div className='bg-white travel-card' data-aos='fade-top'>
          <div className={`travel-icon mx-auto mb-4 ${imgClass}`} />
          <h3 className='text-uppercase text-center fw-bold'>{title}</h3>
          <p className='text-center text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
      </Col>
    )
  }
  return (
    <div className="travel-agency w-100">
      <Container>
        <Row>
          <h2 className='text-center text-white mb-4' data-aos='fade-top'>ONLINE TRAVEL AGENCY</h2>
          <h1 className='text-center text-white subtitle mb-5' data-aos='fade-top'>We help travels</h1>
          {renderCard('travel', 'travel-icon1')}
          {renderCard('benefits', 'travel-icon2')}
          {renderCard('about us', 'travel-icon3')}
          {renderCard('awards', 'travel-icon4')}
        </Row>
      </Container>
    </div >
  )
}

