import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/iconos/android-chrome transparent-512x512.png';
import CartWidget from '../cartwidget/cartwidget'; 

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="index.html">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          Bourdeaux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="pages/cervezas.html">Cervezas</Nav.Link>
            <Nav.Link href="pages/gastronomia.html">Gastronomia</Nav.Link>
            <Nav.Link href="pages/locales.html">Locales</Nav.Link>
            <Nav.Link href="pages/contacto.html">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
