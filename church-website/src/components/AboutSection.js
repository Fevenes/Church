import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode by checking body class
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      setIsDarkMode(body.classList.contains('dark-mode'));
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    // Initial check
    setIsDarkMode(body.classList.contains('dark-mode'));

    return () => observer.disconnect();
  }, []);

  // Language suffix helper
  const langSuffix = i18n.language === 'am' ? '_am' : '';

  // Conditional text classes
  const textColorClass = isDarkMode ? 'text-light' : 'text-dark';
  const bgColorClass = isDarkMode ? 'bg-dark' : 'bg-light';

  return (
    <Container className={`py-5 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h2 className={`display-5 fw-bold ${textColorClass}`}>{t(`about.title${langSuffix}`)}</h2>
          <p className={`fst-italic ${textColorClass}`}>{t(`about.subtitle${langSuffix}`)}</p>
        </Col>
      </Row>

      <Row className="g-4">
        {/* History Card */}
        <Col lg={6}>
          <Card className={`h-100 border-0 shadow-sm ${isDarkMode ? 'bg-secondary' : ''}`}>
            <Card.Body>
              <Card.Title className={`text-center fs-3 mb-4 ${textColorClass}`}>{t(`about.historyTitle${langSuffix}`)}</Card.Title>
              <div className={`p-4 rounded ${bgColorClass}`}>
                <p className={`${textColorClass} mb-3`}>{t(`about.historyShort${langSuffix}`)}</p>

                {!showFullHistory ? (
                  <div className="text-center">
                    <Button variant={isDarkMode ? 'light' : 'dark'} onClick={() => setShowFullHistory(true)} size="sm">
                      {t(`about.readMore${langSuffix}`)}
                    </Button>
                  </div>
                ) : (
                  <>
                    <p className={textColorClass}>{t(`about.history.full.1${langSuffix}`)}</p>
                    <p className={textColorClass}>{t(`about.history.full.2${langSuffix}`)}</p>
                    <p className={textColorClass}>{t(`about.history.full.3${langSuffix}`)}</p>
                    <p className={textColorClass}>{t(`about.history.full.4${langSuffix}`)}</p>
                    <div className="text-center">
                      <Button variant={isDarkMode ? 'light' : 'dark'} onClick={() => setShowFullHistory(false)} size="sm">
                        {t(`about.showLess${langSuffix}`)}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Vision Card */}
        <Col lg={6}>
          <Card className={`h-100 border-0 shadow-sm ${isDarkMode ? 'bg-secondary' : ''}`}>
            <Card.Body>
              <Card.Title className={`text-center fs-3 mb-4 ${textColorClass}`}>{t(`about.visionTitle${langSuffix}`)}</Card.Title>
              <div className={`p-4 rounded ${bgColorClass}`}>
                <p className={textColorClass}>{t(`about.vision.global${langSuffix}`)}</p>

                <h5 className={textColorClass}>{t(`about.vision.goals${langSuffix}`)}</h5>
                <ul className={textColorClass}>
                  <li>{t(`about.vision.list1${langSuffix}`)}</li>
                  <li>{t(`about.vision.list2${langSuffix}`)}</li>
                  <li>{t(`about.vision.list3${langSuffix}`)}</li>
                  <li>{t(`about.vision.list4${langSuffix}`)}</li>
                  <li>{t(`about.vision.list5${langSuffix}`)}</li>
                </ul>

                <h5 className={textColorClass}>{t(`about.vision.join${langSuffix}`)}</h5>
                <p className={textColorClass}>{t(`about.vision.partnership${langSuffix}`)}</p>

                <ul className={textColorClass}>
                  <li>{t(`about.vision.point1${langSuffix}`)}</li>
                  <li>{t(`about.vision.point2${langSuffix}`)}</li>
                  <li>{t(`about.vision.point3${langSuffix}`)}</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
