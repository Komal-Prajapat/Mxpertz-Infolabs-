import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGlobe } from 'react-icons/fa';
import './navbar.css';

const BrainyLingoNavbar = () => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Navbar.Brand href="#home">
        <FaGlobe style={{ marginRight: '10px',color:'blue' }} />
        BrainyLingo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
          <Nav.Link href="#details">Details</Nav.Link>
          <Nav.Link href="#quit">Quit</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-danger " className='signout'>Sign Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BrainyLingoNavbar;
