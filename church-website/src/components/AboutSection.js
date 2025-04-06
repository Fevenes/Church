import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutSection = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <Container className="py-5 bg-white">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <AnimationWrapper>
            <h2 className="display-5 fw-bold">About Gospel Light Ministries</h2>
            <p className="text-muted fst-italic">Founded by Pastor Daniel Makonnen</p>
          </AnimationWrapper>
        </Col>
      </Row>

      <Row className="g-4">
        {/* History Section */}
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center fs-3 mb-4">Our History</Card.Title>
                <div className="bg-light p-4 rounded">
                  <p className="mb-3">
                    <strong>Gospel Light Ministries (GLC)</strong> is a God-given vision to Pastor Daniel Makonnen, 
                    one of Ethiopia's most respected evangelical ministers. Called at a young age, Pastor Daniel 
                    courageously preached during Ethiopia's communist era, sparking a revival marked by supernatural 
                    miracles that transformed Ethiopian Christianity.
                  </p>

                  {!showFullHistory ? (
                    <div className="text-center">
                      <Button 
                        variant="dark" 
                        onClick={() => setShowFullHistory(true)}
                        size="sm"
                      >
                        Read Full History ↓
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h5 className="mt-4">The Communist Era Revival</h5>
                      <p className="mb-3">
                        During Ethiopia's darkest period, Pastor Daniel publicly preached Christ's healing power to 
                        tens of thousands. The miracles from this revival remain engraved in believers' and 
                        non-believers' memories alike, despite severe communist persecution.
                      </p>

                      <h5>Ministry in America</h5>
                      <p className="mb-3">
                        After coming to the United States, Pastor Daniel became a spiritual father to the Ethiopian 
                        diaspora, particularly in Washington DC. His apostolic ministry continues to impact 
                        generations through his faithful service.
                      </p>

                      <h5>Current Growth</h5>
                      <p className="mb-3">
                        The Gospel Light church in Addis Ababa is among Ethiopia's fastest growing congregations. 
                        GLM produces biblical resources including literature, audio, and video materials to 
                        strengthen believers worldwide.
                      </p>

                      <div className="text-center">
                        <Button 
                          variant="dark" 
                          onClick={() => setShowFullHistory(false)}
                          size="sm"
                        >
                          Show Less ↑
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Vision Section */}
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center fs-3 mb-4">Our Vision</Card.Title>
                <div className="bg-light p-4 rounded">
                  <h5>Reaching Nations</h5>
                  <p className="mb-3">
                    To spread the Gospel globally while maintaining our strong impact in Ethiopia and 
                    among diaspora communities.
                  </p>
                  
                  <h5>Ministry Goals</h5>
                  <ul className="mb-3">
                    <li>Community development and job creation</li>
                    <li>Bible Schools and vocational training centers</li>
                    <li>Medical clinics and HIV/AIDS prevention programs</li>
                    <li>Multimedia resources for spiritual growth</li>
                    <li>Sustainable development initiatives</li>
                  </ul>
                  
                  <h5>Join Us</h5>
                  <p className="mb-3">
                    As we prepare for Christ's return, we invite you to partner in this Kingdom work. 
                    Pastor Daniel's leadership and GLM's vision continue to impact generations through:
                  </p>
                  <ul>
                    <li>Powerful preaching and teaching</li>
                    <li>Published books on discipleship and the Holy Spirit</li>
                    <li>Modeling spiritual integrity</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;