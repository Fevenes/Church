import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Badge, Modal, Button } from 'react-bootstrap';

const departments = [
  {
    id: 1,
    title: 'Choir 1',
    description: 'Our main choir team for services',
    image: '/choir1.jpg',
    details:
      'Choir 1 leads Sunday morning worship, Wednesday night worship, and Monday youth worship nights. They practice every Saturday.',
    members: 18,
    date: 'Started in 2017 G.C',
    contact: 'Leaders: Betselot and Bereket',
    color: '#0d6efd',
    icon: 'bi-music-note-beamed',
  },
  {
    id: 2,
    title: 'Choir 2',
    description: 'Our second choir team',
    image: '/IMG_6078.jpg',
    details:
      'Choir 2 leads Sunday morning worship and Wednesday worship. They practice every Thursday.',
    members: 14,
    date: 'Started in 2016 E.C',
    contact: 'Leader: Pastor Beneberu Ashagere',
    color: '#dc3545',
    icon: 'bi-mic-fill',
  },
  {
    id: 3,
    title: "Children's Teachers",
    description: 'Dedicated team nurturing young believers ages 3-14',
    image: '/Kids.jpg',
    details:
      'Teachers provide spiritual foundation and Bible lessons for children during Sunday school and special events.',
    members: 12,
    contact: 'Abeba Ayalew',
    color: '#fd7e14',
    icon: 'bi-stars',
  },
  {
    id: 4,
    title: 'Deacons Board',
    description: 'Spiritual leaders assisting with church operations and pastoral care',
    image: '/photo_2025-07-12_13-23-37.jpg',
    details:
      'The Deacons Board helps with church discipline, visitation, spiritual guidance, and ministry support.',
    members: 10,
    contact: 'deacons@church.org',
    color: '#198754',
    icon: 'bi-people-fill',
  },
  {
    id: 5,
    title: 'Wedding Ministry',
    description: 'Pre-marital counseling and wedding ceremony coordination',
    image: '/download (2).jpg',
    details:
      'This team prepares couples for marriage spiritually and organizes wedding ceremonies with church standards.',
    members: 6,
    contact: 'weddings@church.org',
    color: '#6f42c1',
    icon: 'bi-heart-fill',
  },
  {
    id: 6,
    title: 'Evangelism Team',
    description: 'Spreading the Gospel through outreach and missions',
    image: '/ev.jpg',
    details:
      'Responsible for street preaching, tract distribution, missions, and community outreach.',
    members: 20,
    contact: 'evangelism@church.org',
    color: '#20c997',
    icon: 'bi-megaphone-fill',
  },
];

const DepartmentsSection = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
          paddingTop: 90,
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
              backgroundColor: departments[i % departments.length].color,
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
            Ministry Departments
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, marginBottom: 0 }}>
            Join our dedicated teams serving God's purpose
          </p>
        </motion.div>
      </div>

      <Container className="py-5">
        <motion.div
          layout
          style={{
            columns: 'var(--col-count)',
            columnGap: 16,
            '--col-count': '3',
          }}
          className="departments-masonry"
        >
          <style>{`
            .departments-masonry { --col-count: 3; }
            @media (max-width: 992px) { .departments-masonry { --col-count: 2; } }
            @media (max-width: 640px) { .departments-masonry { --col-count: 1; } }
          `}</style>

          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              style={{
                breakInside: 'avoid',
                marginBottom: 16,
                cursor: 'pointer',
              }}
              onClick={() => setSelectedDept(dept)}
            >
              <motion.div
                whileHover="hover"
                style={{
                  position: 'relative',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: '0 2px 14px rgba(0,0,0,0.12)',
                  background: '#fff',
                }}
              >
                <div style={{ position: 'relative', height: index % 2 === 0 ? 280 : 240 }}>
                  <img
                    src={dept.image}
                    alt={dept.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                    }}
                  />

                  <Badge
                    style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      backgroundColor: dept.color,
                      borderRadius: 20,
                      padding: '7px 12px',
                      fontSize: 11,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                    }}
                  >
                    {dept.members} Members
                  </Badge>

                  <div
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(4px)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className={`bi ${dept.icon}`} />
                  </div>

                  <motion.div
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0.95, y: 8 }}
                    style={{
                      position: 'absolute',
                      left: 16,
                      right: 16,
                      bottom: 16,
                    }}
                  >
                    <h3
                      style={{
                        color: '#fff',
                        margin: '0 0 6px',
                        fontSize: 21,
                        fontWeight: 800,
                      }}
                    >
                      {dept.title}
                    </h3>

                    <p
                      style={{
                        color: 'rgba(255,255,255,0.82)',
                        margin: 0,
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      {dept.description}
                    </p>

                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: 10,
                        color: dept.color,
                        background: 'rgba(255,255,255,0.95)',
                        padding: '4px 10px',
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      View Details
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedDept && (
          <Modal
            show={!!selectedDept}
            onHide={() => setSelectedDept(null)}
            centered
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedDept.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img
                src={selectedDept.image}
                alt={selectedDept.title}
                style={{
                  width: '100%',
                  maxHeight: 340,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h4 style={{ fontWeight: 800 }}>{selectedDept.title}</h4>
              <p className="text-muted">{selectedDept.description}</p>

              <p>
                <strong>Details:</strong> {selectedDept.details}
              </p>

              <p>
                <strong>Members:</strong> {selectedDept.members}
              </p>

              {selectedDept.date && (
                <p>
                  <strong>Started:</strong> {selectedDept.date}
                </p>
              )}

              <p>
                <strong>Contact:</strong> {selectedDept.contact}
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setSelectedDept(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DepartmentsSection;