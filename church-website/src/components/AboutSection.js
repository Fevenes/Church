import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;

    const checkDarkMode = () => {
      setIsDarkMode(body.classList.contains('dark-mode'));
    };

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    checkDarkMode();

    return () => observer.disconnect();
  }, []);

  const langSuffix = i18n.language === 'am' ? '_am' : '';

  return (
    <div
      style={{
        background: isDarkMode ? '#0b1120' : '#f8f9fa',
        minHeight: '100%',
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
          paddingTop: 95,
          paddingBottom: 58,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
            style={{
              position: 'absolute',
              width: 7 + i * 3,
              height: 7 + i * 3,
              borderRadius: '50%',
              backgroundColor: ['#0d6efd', '#dc3545', '#fd7e14', '#198754', '#6f42c1'][i % 5],
              left: `${10 + i * 15}%`,
              top: `${45 + (i % 3) * 28}px`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              color: '#0d6efd',
              fontWeight: 700,
              letterSpacing: 4,
              fontSize: 12,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Gospel Light International Church
          </p>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              margin: '0 0 12px',
            }}
          >
            {t(`about.title${langSuffix}`)}
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 18,
              marginBottom: 0,
              fontStyle: 'italic',
            }}
          >
            {t(`about.subtitle${langSuffix}`)}
          </p>
        </motion.div>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          {/* History */}
          <Col lg={6}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: isDarkMode
                    ? '0 14px 35px rgba(0,0,0,0.45)'
                    : '0 14px 35px rgba(0,0,0,0.1)',
                  background: isDarkMode ? '#111827' : '#ffffff',
                }}
              >
                <Card.Body style={{ padding: 34 }}>
                  <div
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: '50%',
                      background: '#eef5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 30,
                      margin: '0 auto 18px',
                    }}
                  >
                    ⛪
                  </div>

                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: isDarkMode ? '#fff' : '#111827',
                      marginBottom: 22,
                    }}
                  >
                    {t(`about.historyTitle${langSuffix}`)}
                  </Card.Title>

                  <div
                    style={{
                      padding: 24,
                      borderRadius: 18,
                      background: isDarkMode ? '#0b1120' : '#f8f9fa',
                    }}
                  >
                    <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                      {t(`about.historyShort${langSuffix}`)}
                    </p>

                    <AnimatePresence>
                      {showFullHistory && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                            {t(`about.history.full.1${langSuffix}`)}
                          </p>
                          <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                            {t(`about.history.full.2${langSuffix}`)}
                          </p>
                          <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                            {t(`about.history.full.3${langSuffix}`)}
                          </p>
                          <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                            {t(`about.history.full.4${langSuffix}`)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="text-center mt-3">
                      <Button
                        onClick={() => setShowFullHistory(!showFullHistory)}
                        style={{
                          borderRadius: 999,
                          padding: '9px 24px',
                          fontWeight: 700,
                        }}
                      >
                        {showFullHistory
                          ? t(`about.showLess${langSuffix}`)
                          : t(`about.readMore${langSuffix}`)}
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Vision */}
          <Col lg={6}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: isDarkMode
                    ? '0 14px 35px rgba(0,0,0,0.45)'
                    : '0 14px 35px rgba(0,0,0,0.1)',
                  background: isDarkMode ? '#111827' : '#ffffff',
                }}
              >
                <Card.Body style={{ padding: 34 }}>
                  <div
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: '50%',
                      background: '#eef5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 30,
                      margin: '0 auto 18px',
                    }}
                  >
                    🌍
                  </div>

                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: isDarkMode ? '#fff' : '#111827',
                      marginBottom: 22,
                    }}
                  >
                    {t(`about.visionTitle${langSuffix}`)}
                  </Card.Title>

                  <div
                    style={{
                      padding: 24,
                      borderRadius: 18,
                      background: isDarkMode ? '#0b1120' : '#f8f9fa',
                    }}
                  >
                    <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                      {t(`about.vision.global${langSuffix}`)}
                    </p>

                    <h5 style={{ color: isDarkMode ? '#fff' : '#111827', fontWeight: 800 }}>
                      {t(`about.vision.goals${langSuffix}`)}
                    </h5>

                    <ul style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                      <li>{t(`about.vision.list1${langSuffix}`)}</li>
                      <li>{t(`about.vision.list2${langSuffix}`)}</li>
                      <li>{t(`about.vision.list3${langSuffix}`)}</li>
                      <li>{t(`about.vision.list4${langSuffix}`)}</li>
                      <li>{t(`about.vision.list5${langSuffix}`)}</li>
                    </ul>

                    <h5 style={{ color: isDarkMode ? '#fff' : '#111827', fontWeight: 800 }}>
                      {t(`about.vision.join${langSuffix}`)}
                    </h5>

                    <p style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                      {t(`about.vision.partnership${langSuffix}`)}
                    </p>

                    <ul style={{ color: isDarkMode ? '#e5e7eb' : '#374151', lineHeight: 1.8 }}>
                      <li>{t(`about.vision.point1${langSuffix}`)}</li>
                      <li>{t(`about.vision.point2${langSuffix}`)}</li>
                      <li>{t(`about.vision.point3${langSuffix}`)}</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;