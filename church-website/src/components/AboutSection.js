import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const [showFullHistory, setShowFullHistory] = useState(false);

  // Helper to get correct keys depending on language (English / Amharic)
  const langSuffix = i18n.language === 'am' ? '_am' : '';

  return (
    <Container className="py-5 bg-white">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h2 className="display-5 fw-bold">{t(`about.title${langSuffix}`)}</h2>
          <p className="text-muted fst-italic">{t(`about.subtitle${langSuffix}`)}</p>
        </Col>
      </Row>

      <Row className="g-4">
        {/* History Card */}
        <Col lg={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center fs-3 mb-4">{t(`about.historyTitle${langSuffix}`)}</Card.Title>
              <div className="bg-light p-4 rounded">
                <p className="mb-3">{t(`about.historyShort${langSuffix}`)}</p>

                {!showFullHistory ? (
                  <div className="text-center">
                    <Button variant="dark" onClick={() => setShowFullHistory(true)} size="sm">
                      {t(`about.readMore${langSuffix}`)}
                    </Button>
                  </div>
                ) : (
                  <>
                    <p>{t(`about.history.full.1${langSuffix}`)}</p>
                    <p>{t(`about.history.full.2${langSuffix}`)}</p>
                    <p>{t(`about.history.full.3${langSuffix}`)}</p>
                    <p>{t(`about.history.full.4${langSuffix}`)}</p>
                    <div className="text-center">
                      <Button variant="dark" onClick={() => setShowFullHistory(false)} size="sm">
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
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center fs-3 mb-4">{t(`about.visionTitle${langSuffix}`)}</Card.Title>
              <div className="bg-light p-4 rounded">
                <p>{t(`about.vision.global${langSuffix}`)}</p>

                <h5>{t(`about.vision.goals${langSuffix}`)}</h5>
                <ul>
                  <li>{t(`about.vision.list1${langSuffix}`)}</li>
                  <li>{t(`about.vision.list2${langSuffix}`)}</li>
                  <li>{t(`about.vision.list3${langSuffix}`)}</li>
                  <li>{t(`about.vision.list4${langSuffix}`)}</li>
                  <li>{t(`about.vision.list5${langSuffix}`)}</li>
                </ul>

                <h5>{t(`about.vision.join${langSuffix}`)}</h5>
                <p>{t(`about.vision.partnership${langSuffix}`)}</p>

                <ul>
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
