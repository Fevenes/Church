import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const contactItems = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Address',
      text: 'Adama Gendhara, Beside Vera School',
      color: '#0d6efd',
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Phone',
      text: '+251-994445420',
      color: '#198754',
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      text: 'info@example.com',
      color: '#dc3545',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyOsGcVe0z_XeprE_V1OUw1sPCqmRbC2SSkVlxgeGbnn5GoYTofN97ubecA_6HEpAAB/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const result = await response.json().catch(() => null);

      if (result?.status === 'success' || !result) {
        alert('Thank you! We received your message.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to submit. Please try again later.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error submitting form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: '#f8f9fa' }}>
      {/* Hero */}
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
            Contact Us
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 18,
              marginBottom: 0,
            }}
          >
            We&apos;d love to hear from you and pray with you.
          </p>
        </motion.div>
      </div>

      <Container className="py-5">
        {/* Contact Info Cards */}
        <Row className="g-4 mb-5">
          {contactItems.map((item, index) => (
            <Col key={item.title} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="h-100 border-0"
                  style={{
                    borderRadius: 22,
                    boxShadow: '0 14px 35px rgba(0,0,0,0.1)',
                  }}
                >
                  <Card.Body style={{ padding: 30, textAlign: 'center' }}>
                    <div
                      style={{
                        width: 62,
                        height: 62,
                        borderRadius: '50%',
                        background: `${item.color}15`,
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 26,
                        margin: '0 auto 18px',
                      }}
                    >
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <h4 style={{ fontWeight: 800, color: '#111827' }}>
                      {item.title}
                    </h4>

                    <p style={{ color: '#6b7280', margin: 0 }}>
                      {item.text}
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Main Contact Area */}
        <Row className="g-4 align-items-stretch">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: '100%' }}
            >
              <Card
                className="h-100 border-0 overflow-hidden"
                style={{
                  borderRadius: 26,
                  boxShadow: '0 18px 45px rgba(0,0,0,0.12)',
                }}
              >
                <div style={{ position: 'relative', height: '100%', minHeight: 430 }}>
                  <img
                    src="/IMG_2924.jpg"
                    alt="Church worship"
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 430,
                      objectFit: 'cover',
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.2), transparent)',
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      left: 24,
                      right: 24,
                      bottom: 24,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        background: '#0d6efd',
                        color: '#fff',
                        padding: '6px 14px',
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        marginBottom: 12,
                      }}
                    >
                      Visit Us
                    </span>

                    <h3
                      style={{
                        color: '#fff',
                        fontWeight: 900,
                        marginBottom: 8,
                      }}
                    >
                      Come Worship With Us
                    </h3>

                    <p
                      style={{
                        color: 'rgba(255,255,255,0.78)',
                        margin: 0,
                        lineHeight: 1.7,
                      }}
                    >
                      Join our church family for worship, prayer, teaching, and fellowship.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className="border-0"
                style={{
                  borderRadius: 26,
                  boxShadow: '0 18px 45px rgba(0,0,0,0.12)',
                }}
              >
                <Card.Body style={{ padding: 36 }}>
                  <div style={{ marginBottom: 26 }}>
                    <p
                      style={{
                        color: '#0d6efd',
                        fontWeight: 800,
                        letterSpacing: 3,
                        fontSize: 12,
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      Send Message
                    </p>

                    <h2
                      style={{
                        fontWeight: 900,
                        color: '#111827',
                        marginBottom: 8,
                      }}
                    >
                      Get In Touch
                    </h2>

                    <p style={{ color: '#6b7280', margin: 0 }}>
                      Fill out the form below and we will get back to you.
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 700 }}>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        size="lg"
                        disabled={submitting}
                        placeholder="Your name"
                        style={{
                          borderRadius: 14,
                          border: '1px solid #e5e7eb',
                          padding: '13px 16px',
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 700 }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        size="lg"
                        disabled={submitting}
                        placeholder="Your email address"
                        style={{
                          borderRadius: 14,
                          border: '1px solid #e5e7eb',
                          padding: '13px 16px',
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label style={{ fontWeight: 700 }}>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        size="lg"
                        disabled={submitting}
                        placeholder="Write your message..."
                        style={{
                          borderRadius: 14,
                          border: '1px solid #e5e7eb',
                          padding: '13px 16px',
                          resize: 'none',
                        }}
                      />
                    </Form.Group>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        style={{
                          borderRadius: 999,
                          padding: '12px 34px',
                          fontWeight: 800,
                          boxShadow: '0 10px 24px rgba(13,110,253,0.25)',
                        }}
                      >
                        {submitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2"></i>
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;