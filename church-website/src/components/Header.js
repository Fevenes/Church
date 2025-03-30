import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css'; // We'll create this CSS file next

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/events', name: 'Events' },
    { path: '/departments', name: 'Departments' },
    { path: '/locations', name: 'Locations' },
    { path: '/contact', name: 'Contact' },
    
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">Gospel Light International Church</Link>
        </motion.div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.path}
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;