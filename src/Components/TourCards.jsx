import axios from 'axios' // Импортируем библиотеку axios для работы с API Strapi
import { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const TourCards = () => {
  const [error, setError] = useState(null)
  const [tours, setTours] = useState([]) // Создаем переменную tours с помощью useState и записываем в нее пустой массив с помощью setTours

  useEffect(() => { // Создаем эффект useEffect для получения данных с API Strapi и записи их в переменную tours
    axios
      // URL запроса "http://localhost:1337/api/tours?populate=img" указывает на маршрут API Strapi, который возвращает данные о турах и их изображениях.
      .get('http://localhost:1337/api/tours?populate=img') // Получаем данные с помощью axios из нашего API
      .then(({ data }) => setTours(data.data)) // Записываем данные в переменную tours с помощью setTours
      .catch((error) => setError(error)) // Записываем ошибку в переменную error с помощью setError
  }, [])

  if (error) {
    // Выводим ошибку в консоль 
    return <div>An error occured: {error.message}</div>
  }

  // Ответы на запросы к API Strapi получаются с использованием библиотеки Axios.

  return (
    <>
      <div className='tour-cards'>
        <Container>
          <Row>
            <h1
              className='text-center text-white fw-bold mb-5'
              data-aos='fade-top'>
              Active Tours
            </h1>
            {tours.map(
              // Проходимся по массиву tours и выводим данные в карточки с помощью map
              (
                { attributes } // Из каждого объекта тура извлекаются атрибуты (attributes). Это делается с помощью деструктуризации.
              ) => (
                <Col sm={4} className='mb-5' data-aos='flip-left'>
                  <Card // Выводим данные в карточки с помощью Card из библиотеки react-bootstrap
                    className='position-relative tour-card'
                    style={{ width: '22rem' }}>
                    <Card.Img
                      className='pe-3 ps-3 pt-3'
                      style={{ height: '270px' }}
                      variant='top'
                      src={`http://localhost:1337${attributes.img.data[0].attributes.url}`} // Выводим изображения туров с помощью атрибута img из API Strapi
                    />
                    <Card.Body>
                      <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title className='fs-3 fw-bold'>
                          {attributes.text}  {/* Выводим текст туров с помощью атрибута text из API Strapi */}
                        </Card.Title>
                        <span className='card-price fs-4 fw-bold'>
                          {attributes.price}
                        </span>
                      </div>
                      <Card.Text>{attributes.richtext}</Card.Text>
                      <button className='text-uppercase fw-bold card-btn text-white'>
                        Book Now
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </div>
    </>
  )
}
