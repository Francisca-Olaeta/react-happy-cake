import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
    <Navbar bg="primary" expand="lg" className="p-2">
        <Container className="lg-justify-content-start">
          <Link to="/" className='brand text-decoration-none'>Happy Cake 🍰</Link>
        
          <Nav>
            <Link to="/" className="link text-decoration-none ms-5">Home</Link>
            <Link to="/tortas" className="link text-decoration-none ms-5">Tortas</Link>
            <Link to="/tartas_y_pies" className="link text-decoration-none ms-5">Tartas y pies</Link>
            <Link to="/dulces" className="link text-decoration-none ms-5">Dulces</Link>
            <Link to="/contacto" className="link text-decoration-none ms-5">Contacto</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation