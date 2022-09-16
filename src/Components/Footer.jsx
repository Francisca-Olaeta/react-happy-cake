import React from 'react';
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <div>
        <Navbar bg="light" sticky="bottom">
            <Container className='d-flex flex-column justify-content-center p-5'>
            <Navbar.Brand>Pastelería Happy Cake ©</Navbar.Brand>
            <p>www.happycake.cl</p>
            <p>Todas las fotos fueron sacadas de unsplash.com</p>
            </Container>
        </Navbar>
    </div>
    </>
  )
}

export default Footer