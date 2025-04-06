import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DepartmentsSection = () => {
  const departments = [
    {
      id: 1,
      title: "Choir 1",
      description: "Our main worship team for Sunday morning services",
      image: "/images/choir1.jpg",
      contact: "choir1@church.org"
    },
    {
      id: 2,
      title: "Choir 2",
      description: "Evening service worship team and special events",
      image: "/IMG_6078.jpg",
      contact: "choir2@church.org"
    },
    {
      id: 3,
      title: "Children's Teachers",
      description: "Dedicated team nurturing young believers (ages 3-14)",
      image: "/Kids.jpg",
      contact: "children@church.org"
    },
    {
      id: 4,
      title: "Deacons Board",
      description: "Spiritual leaders assisting with church operations and pastoral care",
      image: "/images/deacons.jpg",
      contact: "deacons@church.org"
    },
    {
      id: 5,
      title: "Wedding Ministry",
      description: "Pre-marital counseling and wedding ceremony coordination",
      image: "/download (2).jpg",
      contact: "weddings@church.org"
    },
    {
      id: 6,
      title: "Evangelism Team",
      description: "Spreading the Gospel through outreach and missions",
      image: "/ev.jpg",
      contact: "evangelism@church.org"
    }
  ];

  return (
    <Container fluid className="py-5 bg-light">
      <Container className="text-center mb-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display-5 fw-bold mb-3"
        >
          Ministry Departments
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lead text-muted mx-auto"
          style={{ maxWidth: '700px' }}
        >
          Join our dedicated teams serving God's purpose
        </motion.p>
      </Container>

      <Container>
        <Row className="g-4">
          {departments.map((dept, index) => (
            <Col key={dept.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-100 shadow-sm border-0 overflow-hidden">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top"
                      src={dept.image}
                      alt={dept.title}
                      className="h-100 w-100 object-fit-cover"
                      loading="lazy"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-4">{dept.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {dept.description}
                    </Card.Text>
                    <a 
                      href={`mailto:${dept.contact}`} 
                      className="d-inline-flex align-items-center text-decoration-none text-primary fw-medium"
                    >
                      Contact Team
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="ms-2"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default DepartmentsSection;