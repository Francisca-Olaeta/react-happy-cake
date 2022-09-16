import React from 'react';
import { Card } from 'react-bootstrap';
import cake14 from '../Assets/img/cake14.jpg';
import cake15 from '../Assets/img/cake15.jpg';
import cake16 from '../Assets/img/cake16.jpg';
import Logo from '../Components/Logo';

const Dulces = () => {
  return (
    <>
    <div>
    <div className="form-container">
        <h2 className='section-title'>Dulces</h2>
        <div className='cards-container'>
        <Card className='mycard'>
        <Card.Img className='mycard__img'variant="top" src={cake14} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Queques
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake15} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Cupcakes
          </Card.Text>
        </Card.Body>
        </Card>

        <Card className='mycard'>
        <Card.Img className='mycard__img' variant="top" src={cake16} />
        <Card.Body>
          <Card.Text className='mycard__title'>
            Galletas
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

export default Dulces