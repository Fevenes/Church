import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTelegram, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="footer-content"
      >
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@faithcommunity.org">GLC@adama.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+251994">+251-994445420</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Gendhara Adama, Ethiopia <br></br>ገንደሀራ ከቬራ ት/ቤት ገባ ብሎ</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Service Times</h3>
          <p>Sunday: from 9:00 AM to 1:00 PM </p>
          <p>Monday: 5:00 PM</p>
          <p>Wednesday: 9:00 AM and 5:30 PM</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          
          <div className="social-icons">
            <a href="https://www.instagram.com/glc_sl?igsh=MWdweGQyeWNub2Y2cQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://t.me/+jIAuAXMKUT00NjQ0" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@adama.g.l.c?_t=ZM-8v66nK1Otny&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>
      </motion.div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Gospel Light International Church. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;