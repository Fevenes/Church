import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import './HomeSection.css';

const HomeSection = () => {
  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Welcome to Gospel Light International Church</h1>
            <p className="fs-3">አዳማ ወንጌል ብርሃን ቤተክርስቲያን ስላሴ አጥቢያ</p>
            <p className="lead text-muted">"ኑ፥ በእግዚአብሔር ብርሃን እንሂድ።" ኢሳይያስ 2፥5</p>
            <Button 
              variant="primary" 
              className="px-4 py-2 cta-button"
            >
              Join Us This Sunday
            </Button>
          </Col>

          <Col md={6} className="text-center">
            <Card className="hero-image shadow-lg border-0 rounded-3 overflow-hidden mx-auto">
              <Card.Img 
                variant="top"
                src="/IMG_2924.jpg"
                alt="Church worship service"
                className="img-fluid"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;