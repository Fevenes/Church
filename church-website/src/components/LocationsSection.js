import React from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import { FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LocationsSection = () => {
  const churchLocation = {
    id: 1,
    name: "Gospel Light International Church",
    address: "Adama, Ethiopia",
    serviceTimes: "Sunday: from 9AM - 1PM, Wednesday: 5:30PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1198.0811566672191!2d39.25919128555894!3d8.558771809444567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgospel%20light%20adama!5e0!3m2!1sen!2set!4v1743285573316!5m2!1sen!2set"
  };

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/cYmnvakP6o7UmJnYA', '_blank');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <AnimationWrapper>
            <h2 className="display-5 fw-bold mb-3">Our Location</h2>
            <p className="lead text-muted">Find us and join our services</p>
          </AnimationWrapper>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
            <iframe
              src={churchLocation.mapEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Selase Gospel Light International Church Location"
            ></iframe>
          </div>
        </Col>
        
        <Col lg={4}>
          <AnimationWrapper>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-3 mb-3">{churchLocation.name}</Card.Title>
                  
                  <div className="d-flex align-items-center mb-3">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    <span>{churchLocation.address}</span>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <FaClock className="text-primary me-2" />
                    <span>{churchLocation.serviceTimes}</span>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto"
                  >
                    <Button 
                      variant="primary" 
                      onClick={handleGetDirections}
                      className="d-flex align-items-center gap-2"
                    >
                      <FaDirections /> Get Directions
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </AnimationWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default LocationsSection;