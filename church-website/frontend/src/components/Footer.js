import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChurch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background:
          'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          style={{
            position: 'absolute',
            width: 8 + i * 2,
            height: 8 + i * 2,
            borderRadius: '50%',
            backgroundColor: ['#0d6efd', '#dc3545', '#198754', '#fd7e14'][
              i % 4
            ],
            left: `${10 + i * 15}%`,
            top: `${30 + i * 20}px`,
            opacity: 0.4,
          }}
        />
      ))}

      <Container className="py-5">
        <Row className="g-5">
          {/* Church Info */}
          <Col lg={4}>
            <div
              style={{
                width: 65,
                height: 65,
                borderRadius: '50%',
                background: 'rgba(13,110,253,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
              }}
            >
              <FaChurch size={28} color="#0d6efd" />
            </div>

            <h3
              style={{
                fontWeight: 900,
                marginBottom: 14,
              }}
            >
              Gospel Light International Church
            </h3>

            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
              }}
            >
              Bringing the light of Christ through worship,
              discipleship, evangelism, and community service.
            </p>
          </Col>

          {/* Contact */}
          <Col lg={4}>
            <h5
              style={{
                fontWeight: 800,
                marginBottom: 20,
                color: '#0d6efd',
              }}
            >
              Contact Information
            </h5>

            <div className="mb-3 d-flex align-items-start">
              <FaEnvelope className="me-3 mt-1 text-primary" />
              <a
                href="mailto:GLC@adama.com"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                }}
              >
                GLC@adama.com
              </a>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <FaPhone className="me-3 mt-1 text-success" />
              <a
                href="tel:+251994445420"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                }}
              >
                +251-994445420
              </a>
            </div>

            <div className="d-flex align-items-start">
              <FaMapMarkerAlt className="me-3 mt-1 text-danger" />
              <span style={{ color: 'rgba(255,255,255,0.75)' }}>
                Gendhara, Adama, Ethiopia
                <br />
                ገንደሀራ ከቬራ ት/ቤት ገባ ብሎ
              </span>
            </div>
          </Col>

          {/* Service Times */}
          <Col lg={4}>
            <h5
              style={{
                fontWeight: 800,
                marginBottom: 20,
                color: '#0d6efd',
              }}
            >
              Service Times
            </h5>

            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: 20,
                borderRadius: 18,
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="mb-2">
                <strong>Sunday:</strong> 9:00 AM - 1:00 PM
              </p>

              <p className="mb-2">
                <strong>Monday:</strong> 5:00 PM
              </p>

              <p className="mb-0">
                <strong>Wednesday:</strong> 9:00 AM & 5:30 PM
              </p>
            </div>

            <div className="d-flex gap-3 mt-4">
              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.instagram.com/glc_sl?igsh=MWdweGQyeWNub2Y2cQ=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  fontSize: 24,
                }}
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://t.me/+jIAuAXMKUT00NjQ0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  fontSize: 24,
                }}
              >
                <FaTelegram />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://www.tiktok.com/@adama.g.l.c?_t=ZM-8v66nK1Otny&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  fontSize: 24,
                }}
              >
                <FaTiktok />
              </motion.a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
          padding: '20px 0',
          color: 'rgba(255,255,255,0.55)',
        }}
      >
        © {new Date().getFullYear()} Gospel Light International Church.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;