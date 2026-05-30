import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaDirections, FaChurch } from 'react-icons/fa';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LocationsSection = () => {
  const churchLocation = {
    name: 'Gospel Light International Church',
    address: 'Adama, Ethiopia',
    serviceTimes: 'Sunday: 9:00 AM - 1:00 PM, Wednesday: 5:30 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1198.0811566672191!2d39.25919128555894!3d8.558771809444567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgospel%20light%20adama!5e0!3m2!1sen!2set!4v1743285573316!5m2!1sen!2set',
  };

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/cYmnvakP6o7UmJnYA', '_blank');
  };

  return (
    <div style={{ background: '#f8f9fa' }}>
      <div
        style={{
          background:
            'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
          paddingTop: 100,
          paddingBottom: 70,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              position: 'absolute',
              width: 7 + i * 3,
              height: 7 + i * 3,
              borderRadius: '50%',
              backgroundColor: ['#0d6efd', '#dc3545', '#fd7e14', '#198754', '#6f42c1'][
                i % 5
              ],
              left: `${10 + i * 15}%`,
              top: `${50 + (i % 3) * 28}px`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              color: '#0d6efd',
              fontWeight: 700,
              letterSpacing: 4,
              fontSize: 12,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Gospel Light International Church
          </p>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              margin: '0 0 12px',
            }}
          >
            Our Location
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 18,
              marginBottom: 0,
            }}
          >
            Find us and join our worship services.
          </p>
        </motion.div>
      </div>

      <Container className="py-5">
        <Row className="g-4 align-items-stretch">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: '100%' }}
            >
              <div
                style={{
                  height: '100%',
                  minHeight: 430,
                  borderRadius: 26,
                  overflow: 'hidden',
                  boxShadow: '0 18px 45px rgba(0,0,0,0.14)',
                  border: '8px solid #ffffff',
                  background: '#ffffff',
                }}
              >
                <iframe
                  src={churchLocation.mapEmbedUrl}
                  style={{
                    border: 0,
                    width: '100%',
                    height: '100%',
                    minHeight: 430,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gospel Light International Church Location"
                ></iframe>
              </div>
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              style={{ height: '100%' }}
            >
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: 26,
                  overflow: 'hidden',
                  boxShadow: '0 18px 45px rgba(0,0,0,0.12)',
                }}
              >
                <Card.Body
                  style={{
                    padding: 34,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: '#0d6efd15',
                      color: '#0d6efd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 32,
                      marginBottom: 20,
                    }}
                  >
                    <FaChurch />
                  </div>

                  <h3
                    style={{
                      fontWeight: 900,
                      color: '#111827',
                      marginBottom: 24,
                    }}
                  >
                    {churchLocation.name}
                  </h3>

                  <div className="d-flex align-items-start mb-4">
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: '#0d6efd15',
                        color: '#0d6efd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 14,
                        flexShrink: 0,
                      }}
                    >
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <h6 style={{ fontWeight: 800, marginBottom: 4 }}>Address</h6>
                      <p style={{ color: '#6b7280', margin: 0 }}>
                        {churchLocation.address}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: '#19875415',
                        color: '#198754',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 14,
                        flexShrink: 0,
                      }}
                    >
                      <FaClock />
                    </div>

                    <div>
                      <h6 style={{ fontWeight: 800, marginBottom: 4 }}>Service Times</h6>
                      <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.7 }}>
                        {churchLocation.serviceTimes}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto"
                  >
                    <Button
                      variant="primary"
                      onClick={handleGetDirections}
                      className="d-flex align-items-center justify-content-center gap-2 w-100"
                      style={{
                        borderRadius: 999,
                        padding: '12px 26px',
                        fontWeight: 800,
                        boxShadow: '0 10px 24px rgba(13,110,253,0.25)',
                      }}
                    >
                      <FaDirections /> Get Directions
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LocationsSection;