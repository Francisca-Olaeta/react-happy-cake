import React from 'react';
import Logo from '../Components/Logo';
import { Card } from 'react-bootstrap';
import cake8 from '../Assets/img/cake8.jpg';
import cake9 from '../Assets/img/cake9.jpg';
import cake10 from '../Assets/img/cake10.jpg';

const Tortas = () => {
  return (
    <>
    <div className='d-flex flex-column'>
        
    <div className="form-container">
        <h2 className='section-title'>Tortas</h2>
        <div className='cards-container'>
        <Card className='mycard'>
        <Card.Img className='mycard__img'variant="top" src={cake8} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Tortas clásicas
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake9} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Tortas heladas
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake10} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Tortas decoradas
          </Card.Text>
        </Card.Body>
        </Card>
        </div>
        <Logo />

        </div>
    </div>


    </>
  );
}

export default Tortas