import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import '../components/Header.css'

function Header( scrollToSpecificHeight ) {

// Add this script in your component or useEffect if using React
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Adjust the scroll distance as needed
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

  
  return (
    <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={'https://cdn.discordapp.com/attachments/360412196913807360/1274431572652851340/image-removebg-preview.png?ex=66c434a4&is=66c2e324&hm=2910f5dbe92acef22f916a98369b350b247100b5ab52d682c6b884de823e9dda&'}
            height="50"
            className='d-inline-block align-top'
            alt="Logo"
            id='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Add mx-auto to center the Nav */}
            <Nav.Link as={Link} to="/" id='home'>Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" id='menu'>Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact" id='contactus'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;