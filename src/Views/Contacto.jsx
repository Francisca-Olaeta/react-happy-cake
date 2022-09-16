import React from 'react';
import { Container, Form, Button } from "react-bootstrap";


function Contacto() {
  return (
    <>
    <div>

      <Container className='form-container'>
        <h2 className='mb-4'>¿Quieres cotizar? Déjanos tus datos y te contactaremos a la brevedad:</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu teléfono" />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cuéntanos lo que buscas</Form.Label>
          <Form.Control type="text" placeholder="Ingresa descripción" />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Adjunta una referencia</Form.Label>
          <Form.Control type="file" placeholder="Adjunta un archivo de referencia" />
        </Form.Group>

        <Button variant="primary" type="submit">
        Enviar
       </Button>
     </Form>

    </Container>


    </div>
    </>
  );
}

export default Contacto;