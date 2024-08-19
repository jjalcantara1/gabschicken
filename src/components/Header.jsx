import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import '../components/Header.css';

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>
          <img
            src={'https://cdn.discordapp.com/attachments/360412196913807360/1274431572652851340/image-removebg-preview.png?ex=66c434a4&is=66c2e324&hm=2910f5dbe92acef22f916a98369b350b247100b5ab52d682c6b884de823e9dda&'}
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" onClick={scrollToTop} id="home">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" id="menu" onClick={scrollToTop}>Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={scrollToTop} id="contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
