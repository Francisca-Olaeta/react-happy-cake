import React from 'react';
import { Container } from "react-bootstrap";
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../Components/Logo';
import cake1 from '../Assets/img/cake1.jpg';
import cake2 from '../Assets/img/cake2.jpg';
import cake3 from '../Assets/img/cake3.jpg';
import cake4 from '../Assets/img/cake4.jpg';
import cake5 from '../Assets/img/cake5.jpg';
import cake6 from '../Assets/img/cake6.jpg';

const Home = () => {
  return (
    <>
    <div>
        <Container fluid className='main'>

{/* --------------------------------------Hero---------------------------------------------- */}
            <div className='hero'>
              <Logo p='Bienvenido a' />


          <Carousel className='carrusel'>
              <Carousel.Item>
                <img
                className="carrusel__img d-block w-100"
                src={cake1}
                alt="First slide"
                />
             </Carousel.Item>

              <Carousel.Item>
               <img
                className="carrusel__img d-block w-100"
                src={cake3}
                alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
              className="carrusel__img d-block w-100"
               src={cake5}
               alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            </div>
{/* --------------------------------------Sección productos---------------------------------------------- */}
        <div className="section">
        <h2 className='section-title'>Nuestros productos</h2>
        <div className='cards-container'>
        <Card className='mycard'>
        <Card.Img className='mycard__img'variant="top" src={cake2} />
        <Card.Body>
          <Card.Text className='mycard__title'>
          <Link to="/tortas" className="link text-info text-decoration-none">
          Tortas
          </Link>
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake4} />
        <Card.Body>
          <Card.Text className='mycard__title'>
          <Link to="/tartas_y_pies" className="link text-info text-decoration-none">
          Tartas y pies
          </Link>
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake6} />
        <Card.Body>
          <Card.Text className='mycard__title'>
          <Link to="/dulces" className="link text-info text-decoration-none">
          Dulces
          </Link>
          </Card.Text>
        </Card.Body>
        </Card>
        </div>

        </div>

        </Container>
    </div>
    </>
  )
}

export default Home