import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './HomeAbout.css';

const HomeAbout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`home-about py-5 ${darkMode ? 'dark-theme-bible' : 'bg-light'}`}>
      <Container className="position-relative"> {/* Added position-relative */}
        <div className={darkMode ? 'dark-overlay' : ''}> {/* Content wrapper */}
          <Row className="g-4">
            <Col md={6}>
              <Card className={`shadow-sm h-100 ${darkMode ? 'bg-dark text-white border-secondary' : 'border-0'}`}>
                <Card.Body>
                  <Card.Title className={darkMode ? 'text-info' : 'text-primary'}>Our History</Card.Title>
                  <Card.Text>
                    Founded by Pastor Daniel Makonnen, Gospel Light Ministries began during Ethiopia's 
                    communist era, sparking a revival that transformed Ethiopian Christianity through 
                    powerful preaching and miraculous works.
                  </Card.Text>
                  <Link 
                    to="/about" 
                    className={`fw-bold ${darkMode ? 'text-warning' : 'text-primary'}`}
                  >
                    Read Full History →
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className={`shadow-sm h-100 ${darkMode ? 'bg-dark text-white border-secondary' : 'border-0'}`}>
                <Card.Body>
                  <Card.Title className={darkMode ? 'text-info' : 'text-primary'}>Our Vision</Card.Title>
                  <Card.Text>
                    To spread the Gospel globally while establishing Bible schools, medical clinics, 
                    and sustainable development programs that serve communities in Ethiopia and beyond.
                  </Card.Text>
                  <Link 
                    to="/about" 
                    className={`fw-bold ${darkMode ? 'text-warning' : 'text-primary'}`}
                  >
                    Explore Our Vision →
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