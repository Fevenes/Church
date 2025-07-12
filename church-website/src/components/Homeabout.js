import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './HomeAbout.css';

const HomeAbout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`home-about py-5 ${darkMode ? 'dark-theme-bible' : 'bg-light'}`}>
      <Container className="position-relative">
        <div className={darkMode ? 'dark-overlay' : ''}>
          <Row className="g-4">
            {/* Our History Card */}
            <Col md={6}>
              <Card className={`shadow-sm h-100 ${darkMode ? 'bg-dark text-white border-secondary' : 'border-0'}`}>
                <Card.Body>
                  <Card.Title className={darkMode ? 'text-info' : 'text-primary'}>
                    Our History
                  </Card.Title>

                  {/* Full Text for PC */}
                  <Card.Text className="d-none d-md-block">
                    Founded by Pastor Daniel Makonnen, Gospel Light Ministries began during Ethiopia's 
                    communist era, sparking a revival that transformed Ethiopian Christianity through 
                    powerful preaching and miraculous works.
                  </Card.Text>

                  {/* Short Text for Mobile */}
                  <Card.Text className="d-block d-md-none">
                    Founded during Ethiopia’s communist era, Gospel Light sparked a national revival...
                  </Card.Text>

                  <Link 
                    to="/about" 
                    className={`fw-bold ${darkMode ? 'text-warning' : 'text-primary'}`}
                  >
                    Read More →
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Our Vision Card */}
            <Col md={6}>
              <Card className={`shadow-sm h-100 ${darkMode ? 'bg-dark text-white border-secondary' : 'border-0'}`}>
                <Card.Body>
                  <Card.Title className={darkMode ? 'text-info' : 'text-primary'}>
                    Our Vision
                  </Card.Title>

                  {/* Full Text for PC */}
                  <Card.Text className="d-none d-md-block">
                    To spread the Gospel globally while establishing Bible schools, medical clinics, 
                    and sustainable development programs that serve communities in Ethiopia and beyond.
                  </Card.Text>

                  {/* Short Text for Mobile */}
                  <Card.Text className="d-block d-md-none">
                    Spreading the Gospel through schools, clinics, and development work...
                  </Card.Text>

                  <Link 
                    to="/about" 
                    className={`fw-bold ${darkMode ? 'text-warning' : 'text-primary'}`}
                  >
                    Explore More →
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
