import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/events', name: 'Events' },
    { path: '/departments', name: 'Departments' },
    { path: '/locations', name: 'Locations' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className="custom-navbar"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="church-name">Gospel Light</span>
          <span className="church-subtitle">International Church</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.path}
                as={Link} 
                to={link.path} 
                onClick={() => setExpanded(false)}
                className="nav-link"
              >
                {link.name}
              </Nav.Link>
            ))}
            <div className="ms-3">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;