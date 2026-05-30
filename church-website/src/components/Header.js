// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const close = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar shadow-sm"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={close} className="navbar-brand">
          <div className="brand-icon">✝</div>
          <div>
            <span className="church-name">Gospel Light</span>
            <span className="church-subtitle">International Church</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Sermons', '/sermons'],
              ['Events', '/events'],
            ].map(([label, path]) => (
              <Nav.Link as={Link} to={path} onClick={close} key={path} className="nav-link-custom">
                {label}
              </Nav.Link>
            ))}

            <NavDropdown title="More" id="more-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item as={Link} to="/departments" onClick={close}>
                Departments
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery" onClick={close}>
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/testimonies" onClick={close}>
                Testimonies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/locations" onClick={close}>
                Locations
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact" onClick={close}>
                Contact
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/donate" onClick={close} className="give-link">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="give-button"
              >
                ❤️ Give
              </motion.span>
            </Nav.Link>

            <div className="theme-toggle-wrap">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;