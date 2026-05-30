import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <section className="home-hero">
      <div className="hero-dots">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${60 + (i % 3) * 40}px`,
            }}
          />
        ))}
      </div>

      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="hero-label">Gospel Light International Church</p>

              <h1 className="hero-title">
                Welcome to Gospel Light International Church
              </h1>

              <h2 className="hero-amharic">
                አዳማ ወንጌል ብርሃን ቤተክርስቲያን ስላሴ አጥቢያ
              </h2>

              <p className="hero-verse">
                “ኑ፥ በእግዚአብሔር ብርሃን እንሂድ።” ኢሳይያስ 2፥5
              </p>

              <div className="hero-actions">
                <Button variant="primary" className="hero-btn">
                  Join Us This Sunday
                </Button>

                <Button variant="outline-light" className="hero-btn-secondary">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="hero-image-card">
                <Card.Img
                  src="/IMG_2924.jpg"
                  alt="Church worship service"
                  className="hero-img"
                />
                <div className="hero-image-overlay">
                  <span>Sunday Worship</span>
                  <p>Faith • Fellowship • Worship</p>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;