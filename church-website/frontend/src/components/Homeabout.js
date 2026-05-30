import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";
import "./HomeAbout.css";

const HomeAbout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`home-about-section ${darkMode ? "about-dark" : ""}`}>
      <Container>
        <div className="home-about-heading">
          <p>About Our Church</p>
          <h2>Our History & Vision</h2>
          <span>
            Discover the story, mission, and vision of Gospel Light International Church.
          </span>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
              <Card className={`home-about-card ${darkMode ? "dark-card" : ""}`}>
                <Card.Body>
                  <div className="about-icon">⛪</div>
                  <Card.Title>Our History</Card.Title>

                  <Card.Text className="d-none d-md-block">
                    Founded by Pastor Daniel Makonnen, Gospel Light Ministries began during
                    Ethiopia&apos;s communist era, sparking a revival that transformed Ethiopian
                    Christianity through powerful preaching and miraculous works.
                  </Card.Text>

                  <Card.Text className="d-block d-md-none">
                    Founded during Ethiopia’s communist era, Gospel Light sparked a national revival...
                  </Card.Text>

                  <Link to="/about" className="about-link">
                    Read More →
                  </Link>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
              <Card className={`home-about-card ${darkMode ? "dark-card" : ""}`}>
                <Card.Body>
                  <div className="about-icon">🌍</div>
                  <Card.Title>Our Vision</Card.Title>

                  <Card.Text className="d-none d-md-block">
                    To spread the Gospel globally while establishing Bible schools, medical
                    clinics, and sustainable development programs that serve communities in
                    Ethiopia and beyond.
                  </Card.Text>

                  <Card.Text className="d-block d-md-none">
                    Spreading the Gospel through schools, clinics, and development work...
                  </Card.Text>

                  <Link to="/about" className="about-link">
                    Explore More →
                  </Link>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;