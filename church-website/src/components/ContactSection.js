import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <AnimationWrapper>
            <h2 className="display-4 fw-bold">Get In Touch</h2>
          </AnimationWrapper>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        <Col lg={5}>
          <AnimationWrapper delay={0.2}>
            <motion.div whileHover={{ y: -5 }}>
              <Card className="h-100 shadow-sm border-0 p-4">
                <Card.Body>
                  <Card.Title className="fs-3 mb-4">Contact Information</Card.Title>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-geo-alt-fill text-primary fs-5 me-3"></i>
                      <div>
                        <h5 className="mb-1">Address</h5>
                        <p className="text-muted mb-0">Adama Gendhara, Beside Vera School</p>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-telephone-fill text-primary fs-5 me-3"></i>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <p className="text-muted mb-0">+251-994445420</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="bi bi-envelope-fill text-primary fs-5 me-3"></i>
                      <div>
                        <h5 className="mb-1">Email</h5>
                        <p className="text-muted mb-0">info@example.com</p>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </AnimationWrapper>
        </Col>

        <Col lg={7}>
          <AnimationWrapper delay={0.4}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-sm border-0 p-4">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button 
                        variant="primary" 
                        type="submit" 
                        size="lg"
                        className="w-100 py-3"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </AnimationWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;