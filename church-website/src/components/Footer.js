import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTelegram, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      {/* Animated Footer Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <Row className="gy-4">
            {/* Contact Section */}
            <Col md={4}>
              <h5 className="text-primary">Contact Us</h5>
              <p><FaEnvelope className="me-2" /> <a href="mailto:GLC@adama.com" className="text-light text-decoration-none">GLC@adama.com</a></p>
              <p><FaPhone className="me-2" /> <a href="tel:+251994" className="text-light text-decoration-none">+251-994445420</a></p>
              <p><FaMapMarkerAlt className="me-2" /> Gendhara Adama, Ethiopia<br/>ገንደሀራ ከቬራ ት/ቤት ገባ ብሎ</p>
            </Col>

            {/* Service Times */}
            <Col md={4}>
              <h5 className="text-primary">Service Times</h5>
              <p>Sunday: 9:00 AM - 1:00 PM</p>
              <p>Monday: 5:00 PM</p>
              <p>Wednesday: 9:00 AM & 5:30 PM</p>
            </Col>

            {/* Quick Links & Socials */}
            <Col md={4}>
              <h5 className="text-primary">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="/events" className="text-light text-decoration-none">Events</a></li>
                <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
              <div className="d-flex gap-3 mt-3">
                <a href="https://www.instagram.com/glc_sl?igsh=MWdweGQyeWNub2Y2cQ==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-light fs-4" />
                </a>
                <a href="https://t.me/+jIAuAXMKUT00NjQ0" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className="text-light fs-4" />
                </a>
                <a href="https://www.tiktok.com/@adama.g.l.c?_t=ZM-8v66nK1Otny&_r=1" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-light fs-4" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Footer Bottom */}
      <div className="text-center py-3 border-top border-secondary">
        &copy; {new Date().getFullYear()} Gospel Light International Church. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
