import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const TourCards = () => {
  const [error, setError] = useState(null);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/tours?populate=img")
      .then(({ data }) => setTours(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <div className="tour-cards">
        <Container>
          <Row>
            <h1 className='text-center text-white fw-bold mb-5' data-aos='fade-top'>Active Tours</h1>
            {tours.map(({ attributes }) => (
              <Col sm={4} className='mb-5' data-aos='flip-left'>
                <Card className='position-relative tour-card' style={{ width: '22rem'}}>
                  <Card.Img className='pe-3 ps-3 pt-3' style={{ height: '270px' }} variant="top" src={`http://localhost:1337${attributes.img.data[0].attributes.url}`} />
                  <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Card.Title className='fs-3 fw-bold'>{attributes.text}</Card.Title>
                      <span className="card-price fs-4 fw-bold">{attributes.price}</span>
                    </div>
                    <Card.Text>
                      {attributes.richtext}
                    </Card.Text>
                    <button className='text-uppercase fw-bold card-btn text-white'>Book Now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
