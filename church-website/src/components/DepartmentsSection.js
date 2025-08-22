import React, { Children, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const DepartmentsSection = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (dept) => {
    setSelectedDept(dept);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const departments = [
    {
      id: 1,
      title: "Choir 1",
      description: "Our main choir team for services",
      images: [
        "choir1.jpg",
      ],
      details: "Choir 1 leads Sunday morning worship, wednesday night worships and also monday youth worship nights and holds practice every Saturday. Focused on praise, worship, and unity.",
      members: 18,
      date : "It start in 2017 G.C",
      contact : "There leaders are Betselot and Bereket"

    },
    {
      id: 2,
      title: "Choir 2",
      description: "They are our second choir team",
      images: [
        "/IMG_6078.jpg",
      ],
      details: "Choir 1 leads Sunday morning worship, wednesday night worships and holds practice every Thursday. Focused on praise, worship, and unity",
      members: 14,
      date: "It start in 2016 E.C",
      contact: "Our Pastor is the leader of this choir and his name is Pastor Beneberu Ashagere",
    },
    {
      id: 3,
      title: "Children's Teachers",
      description: "Dedicated team nurturing young believers (ages 3-14)",
      images: [
        "Kids.jpg",
      ],
      details: "Teachers provide spiritual foundation and Bible lessons for children during Sunday school and special events.",
      members: 12,
      contact: "Abeba Ayalew",
    },
    {
      id: 4,
      title: "Deacons Board",
      description: "Spiritual leaders assisting with church operations and pastoral care",
      images: [
        "photo_2025-07-12_13-23-37.jpg",
        "photo_2025-07-12_13-23-44.jpg",
      ],
      contact: "deacons@church.org",
      details: "The Deacons Board helps with church discipline, visitation, spiritual guidance, and ministry support.",
      members: 10
    },
    {
      id: 5,
      title: "Wedding Ministry",
      description: "Pre-marital counseling and wedding ceremony coordination",
      images: [
        "download (2).jpg",
      ],
      contact: "weddings@church.org",
      details: "This team prepares couples for marriage spiritually and organizes wedding ceremonies with church standards.",
      members: 6
    },
    {
      id: "evanglism",
      title: "Evangelism Team",
      description: "Spreading the Gospel through outreach and missions",
      images: [
        "ev.jpg",
      ],
      contact: "evangelism@church.org",
      details: "Responsible for street preaching, tract distribution, missions, and community outreach.",
      members: 20
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
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden"
                  onClick={() => handleCardClick(dept)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      src={dept.images[0]}
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
                    <span className="text-primary fw-medium">More</span>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedDept?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {/* Image gallery */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '15px',
            }}
          >
            {selectedDept?.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${selectedDept.title} image ${idx + 1}`}
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                }}
                loading="lazy"
              />
            ))}
          </div>

          <p><strong>Description:</strong> {selectedDept?.description}</p>
          <p><strong>Details:</strong> {selectedDept?.details}</p>
          <p><strong>Members:</strong> {selectedDept?.members}</p>
          <p>
            <strong>Contact:</strong>{' '}
            <a href={`mailto:${selectedDept?.contact}`}>{selectedDept?.contact}</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DepartmentsSection;
