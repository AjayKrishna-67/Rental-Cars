import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import '../css/nav.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/Rental_cars.png'; // Adjusted path if necessary

const NavBar = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '999' }}>
      <div className="navsubheader">
        <p>
          <span>
            <FaPhoneAlt />
          </span>{' '}
          +91 9345674658
        </p>
        <p>
          <span>
            <MdEmail />
          </span>
          rental.cars@gmail.com
        </p>
      </div>

      <Navbar className="navheader" expand="lg">
        <Navbar.Brand as={Link} to="/" className="mainname">
          <span>
            <img
              src={logo}
              style={{ height: '70px', backgroundColor: '#aad6ec', marginLeft: '40px' }}
              alt="Rental Cars Logo"
            />
          </span>
          RENTAL <span className="mainname1">CAR'S</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: '50%', width: '99%' }}>
            <Nav.Link as={Link} to="/" className="texts">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="texts">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/category" className="texts">
              Category
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signup"
              style={{
                marginLeft: '50px',
                backgroundColor: '#f96d00',
                padding: '8px 20px 0px 20px',
                borderRadius: '10px',
              }}
              className="texts"
            >
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;