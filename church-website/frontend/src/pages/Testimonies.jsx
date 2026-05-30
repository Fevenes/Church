// pages/Testimonies.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card, Form, Button, Badge, Alert } from 'react-bootstrap';
import AnimationWrapper from '../components/AnimationWrapper';

const sampleTestimonies = [
  {
    id: 1,
    name: 'Tigist M.',
    location: 'Adama, Ethiopia',
    category: 'Healing',
    date: 'March 2025',
    short: 'After months of illness and doctors giving little hope, I prayed with the church and God healed me completely.',
    full: 'After months of illness and doctors giving little hope, the prayer team at Gospel Light stood with me and my family. We prayed and fasted together. Within weeks, my test results came back clear. The doctors were amazed. God healed me completely and I returned to church to testify His goodness. I will never stop praising Him.',
    initial: 'T',
    color: '#0d6efd',
  },
  {
    id: 2,
    name: 'Dawit K.',
    location: 'Adama, Ethiopia',
    category: 'Financial Breakthrough',
    date: 'January 2025',
    short: 'I lost my job and was about to lose my home. The church prayed and within a month God opened two doors for me.',
    full: 'When I lost my job, I was ashamed and afraid. I came to Pastor Daniel and the deacons for counsel. They prayed over me, encouraged me with the Word, and the congregation even helped with rent for a month. Within 30 days, I received two job offers. God restored everything I lost and more. This church is truly a family.',
    initial: 'D',
    color: '#198754',
  },
  {
    id: 3,
    name: 'Marta A.',
    location: 'Addis Ababa, Ethiopia',
    category: 'Salvation',
    date: 'December 2024',
    short: 'My husband was not a believer for 12 years of our marriage. The church prayed for him and he gave his life to Christ.',
    full: 'For 12 years I prayed for my husband alone. I came to the Gospel Light prayer groups and the sisters prayed with me faithfully. Last December, my husband attended church with me for the first time. During the sermon he broke down and gave his life to Christ. Our home is completely transformed. What seemed impossible, God made possible.',
    initial: 'M',
    color: '#6f42c1',
  },
  {
    id: 4,
    name: 'Yonas T.',
    location: 'Adama, Ethiopia',
    category: 'Youth',
    date: 'October 2024',
    short: 'As a young person I was heading in the wrong direction. Monday youth program changed my life completely.',
    full: 'I was 19, getting into trouble and losing my future. A friend invited me to Monday youth night at Gospel Light. I came just once out of curiosity. The worship, the teaching, the love from the youth leaders — I have never felt anything like it. I gave my life to Christ that same night. I am now part of the youth leadership team myself. God turned my life around completely.',
    initial: 'Y',
    color: '#fd7e14',
  },
  {
    id: 5,
    name: 'Selamawit B.',
    location: 'Adama, Ethiopia',
    category: 'Family',
    date: 'September 2024',
    short: 'The Marriage Education seminar saved our marriage. We came on the edge of divorce and left renewed in love.',
    full: 'My husband and I attended the 3-day Marriage Education seminar at Gospel Light not sure what to expect. We had serious problems and had almost decided to separate. The teaching was so Biblical, so practical, and so full of grace. We both cried, we prayed together, and God restored the love we thought was gone. We are stronger today than the day we got married.',
    initial: 'S',
    color: '#dc3545',
  },
];

const categoryColors = {
  Healing: 'primary',
  'Financial Breakthrough': 'success',
  Salvation: 'info',
  Youth: 'warning',
  Family: 'danger',
};

const TestimonyCard = ({ testimony }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimationWrapper>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body className="p-4">
            {/* Quote mark */}
            <div className="fs-1 lh-1 mb-2" style={{ color: testimony.color, opacity: 0.25 }}>"</div>

            <p className="mb-3">
              {expanded ? testimony.full : testimony.short}
            </p>

            <button
              className="btn btn-link p-0 small text-decoration-none"
              style={{ color: testimony.color }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? '↑ Show less' : 'Read full testimony ↓'}
            </button>

            <hr className="my-3" />

            <div className="d-flex align-items-center gap-3">
              {/* Avatar */}
              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white flex-shrink-0"
                style={{ width: 44, height: 44, backgroundColor: testimony.color, fontSize: 18 }}
              >
                {testimony.initial}
              </div>
              <div>
                <div className="fw-bold">{testimony.name}</div>
                <small className="text-muted">
                  <i className="bi bi-geo-alt-fill me-1"></i>{testimony.location}
                </small>
              </div>
              <div className="ms-auto text-end">
                <Badge bg={categoryColors[testimony.category] || 'secondary'} className="d-block mb-1">
                  {testimony.category}
                </Badge>
                <small className="text-muted">{testimony.date}</small>
              </div>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </AnimationWrapper>
  );
};

const Testimonies = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', location: '', category: '', testimony: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyOsGcVe0z_XeprE_V1OUw1sPCqmRbC2SSkVlxgeGbnn5GoYTofN97ubecA_6HEpAAB/exec',
        {
          method: 'POST',
          body: JSON.stringify({ ...formData, type: 'testimony' }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', location: '', category: '', testimony: '' });
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <div
        className="text-white text-center py-5"
        style={{ background: 'linear-gradient(135deg, #dc3545 0%, #6f42c1 100%)', paddingTop: '100px' }}
      >
        <AnimationWrapper>
          <i className="bi bi-chat-quote-fill display-5 d-block mb-3"></i>
          <h1 className="display-5 fw-bold">Testimonies</h1>
          <p className="lead opacity-75">
            "They triumphed over him by the blood of the Lamb and by the word of their testimony." — Revelation 12:11
          </p>
        </AnimationWrapper>
      </div>

      <Container className="py-5">
        {/* Stats */}
        <AnimationWrapper>
          <Row className="g-3 mb-5 text-center">
            {[
              { number: '500+', label: 'Members', icon: 'bi-people-fill', color: '#0d6efd' },
              { number: '8+', label: 'Years of Ministry', icon: 'bi-calendar-heart', color: '#198754' },
              { number: '100s', label: 'Lives Changed', icon: 'bi-heart-fill', color: '#dc3545' },
              { number: '3', label: 'Locations', icon: 'bi-geo-alt-fill', color: '#fd7e14' },
            ].map((stat, i) => (
              <Col key={i} xs={6} md={3}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="py-4">
                    <i className={`bi ${stat.icon} fs-2 mb-2 d-block`} style={{ color: stat.color }}></i>
                    <div className="fs-3 fw-bold">{stat.number}</div>
                    <div className="text-muted small">{stat.label}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </AnimationWrapper>

        {/* Testimonies Grid */}
        <AnimationWrapper>
          <h3 className="fw-bold text-center mb-2">Stories of God's Faithfulness</h3>
          <p className="text-center text-muted mb-5">
            Real people. Real faith. Real transformation.
          </p>
        </AnimationWrapper>

        <Row className="g-4 mb-5">
          {sampleTestimonies.map(testimony => (
            <Col key={testimony.id} md={6}>
              <TestimonyCard testimony={testimony} />
            </Col>
          ))}
        </Row>

        {/* Share CTA */}
        <AnimationWrapper>
          <div
            className="text-center rounded-3 p-5"
            style={{ background: 'linear-gradient(135deg, #f0f7ff, #fdf0ff)' }}
          >
            <i className="bi bi-megaphone-fill fs-1 text-primary mb-3 d-block"></i>
            <h4 className="fw-bold mb-2">Has God been faithful to you?</h4>
            <p className="text-muted mb-4">
              Your testimony can inspire and encourage someone else in their faith journey.
              Share what God has done in your life.
            </p>
            <Button variant="primary" size="lg" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Hide Form' : '✍️ Share My Testimony'}
            </Button>
          </div>
        </AnimationWrapper>

        {/* Submission Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4"
            >
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4 p-md-5">
                  <h5 className="fw-bold mb-4">Share Your Testimony</h5>

                  {submitted ? (
                    <Alert variant="success" className="text-center">
                      <i className="bi bi-check-circle-fill fs-3 d-block mb-2"></i>
                      <strong>Thank you for sharing!</strong>
                      <p className="mb-0 mt-1">Your testimony has been received. God bless you! 🙏</p>
                    </Alert>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Row className="g-3 mb-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="First name or initials"
                              required
                              disabled={submitting}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              placeholder="e.g. Adama, Ethiopia"
                              disabled={submitting}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select name="category" value={formData.category} onChange={handleChange} required disabled={submitting}>
                          <option value="">Select a category...</option>
                          <option value="Healing">Healing</option>
                          <option value="Salvation">Salvation</option>
                          <option value="Financial Breakthrough">Financial Breakthrough</option>
                          <option value="Family">Family & Marriage</option>
                          <option value="Youth">Youth</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Your Testimony</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          name="testimony"
                          value={formData.testimony}
                          onChange={handleChange}
                          placeholder="Share what God has done in your life..."
                          required
                          disabled={submitting}
                        />
                      </Form.Group>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-100">
                          {submitting
                            ? <><span className="spinner-border spinner-border-sm me-2" />Submitting...</>
                            : <><i className="bi bi-send-fill me-2" />Submit Testimony</>
                          }
                        </Button>
                      </motion.div>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};

export default Testimonies;