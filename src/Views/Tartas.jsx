import React from 'react';
import { Card } from 'react-bootstrap';
import cake11 from '../Assets/img/cake11.jpg';
import cake12 from '../Assets/img/cake12.jpg';
import cake13 from '../Assets/img/cake13.jpg';
import Logo from '../Components/Logo';

const Tartas = () => {
  return (
    <>
    <div>
    <div className="form-container">
        <h2 className='section-title'>Tartas</h2>
        <div className='cards-container'>
        <Card className='mycard'>
        <Card.Img className='mycard__img'variant="top" src={cake11} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Pies
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake12} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Kuchen
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake13} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Cheesecake
          </Card.Text>
        </Card.Body>
        </Card>
        </div>
        <Logo />

        </div>
    </div>


    </>
  )
}

export default Tartas