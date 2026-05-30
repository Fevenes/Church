// pages/Donate.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import AnimationWrapper from '../components/AnimationWrapper';
import { FaHeart, FaCopy, FaCheckCircle } from 'react-icons/fa';

const bankAccounts = [
  {
    id: 1,
    bank: 'Commercial Bank of Ethiopia',
    shortName: 'CBE',
    accountName: 'Gospel Light International Church',
    accountNumber: '1000123456789',
    color: '#007bff',
    icon: 'bi-bank',
  },
  {
    id: 2,
    bank: 'Berhan International Bank',
    shortName: 'Berhan',
    accountName: 'Gospel Light Church',
    accountNumber: '2500080024630',
    color: '#198754',
    icon: 'bi-bank2',
  },
  {
    id: 3,
    bank: 'Bank of Abyssinia',
    shortName: 'BoA',
    accountName: "Gospel Light Int'l Church",
    accountNumber: '9876543210001',
    color: '#dc3545',
    icon: 'bi-building',
  },
  {
    id: 4,
    bank: 'Cooperative Bank of Oromia',
    shortName: 'Coop',
    accountName: 'Gospel Light Church',
    accountNumber: '11112222333344',
    color: '#fd7e14',
    icon: 'bi-bank',
  },
];

const givingPurposes = [
  { icon: 'bi-house-heart', label: 'Church Building', description: 'Expand and maintain our worship space' },
  { icon: 'bi-people', label: 'Community Outreach', description: 'Feed and support those in need' },
  { icon: 'bi-book', label: 'Bible School', description: 'Train the next generation of believers' },
  { icon: 'bi-heart-pulse', label: 'Medical Clinics', description: 'Provide healthcare to the community' },
];

const AccountCard = ({ account }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimationWrapper>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card className="h-100 shadow-sm border-0 overflow-hidden">
          {/* Colored top bar */}
          <div style={{ height: 6, backgroundColor: account.color }} />
          <Card.Body className="p-4">
            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: 48, height: 48, backgroundColor: account.color + '20' }}
              >
                <i className={`bi ${account.icon} fs-5`} style={{ color: account.color }}></i>
              </div>
              <div>
                <h6 className="mb-0 fw-bold">{account.bank}</h6>
                <Badge style={{ backgroundColor: account.color }} className="mt-1">{account.shortName}</Badge>
              </div>
            </div>

            <div className="mb-2">
              <small className="text-muted d-block">Account Name</small>
              <span className="fw-semibold">{account.accountName}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center p-2 rounded" style={{ backgroundColor: '#f8f9fa' }}>
              <div>
                <small className="text-muted d-block">Account Number</small>
                <span className="fw-bold fs-6 font-monospace">{account.accountNumber}</span>
              </div>
              <motion.button
                className="btn btn-sm"
                style={{ backgroundColor: copied ? '#198754' : account.color, color: '#fff', border: 'none' }}
                onClick={() => handleCopy(account.accountNumber)}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? <FaCheckCircle /> : <FaCopy />}
              </motion.button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </AnimationWrapper>
  );
};

const Donate = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Banner */}
      <div
        className="text-white text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #198754 0%, #0a3d1f 100%)',
          paddingTop: '100px',
        }}
      >
        <AnimationWrapper>
          <FaHeart size={48} className="mb-3" style={{ color: '#fff' }} />
          <h1 className="display-5 fw-bold">Give & Support</h1>
          <p className="lead opacity-75 mb-0">
            "Each of you should give what you have decided in your heart to give." — 2 Corinthians 9:7
          </p>
        </AnimationWrapper>
      </div>

      <Container className="py-5">

        {/* Why Give Section */}
        <AnimationWrapper>
          <h2 className="text-center fw-bold mb-2">Your Giving Makes a Difference</h2>
          <p className="text-center text-muted mb-5">
            Every contribution helps us serve our community, spread the Gospel, and build God's kingdom.
          </p>
        </AnimationWrapper>

        <Row className="g-3 mb-5">
          {givingPurposes.map((purpose, index) => (
            <Col key={index} xs={6} md={3}>
              <AnimationWrapper delay={index * 0.1}>
                <Card className="h-100 text-center shadow-sm border-0 p-3">
                  <Card.Body>
                    <i className={`bi ${purpose.icon} fs-1 text-primary mb-3 d-block`}></i>
                    <h6 className="fw-bold">{purpose.label}</h6>
                    <small className="text-muted">{purpose.description}</small>
                  </Card.Body>
                </Card>
              </AnimationWrapper>
            </Col>
          ))}
        </Row>

        {/* Bank Accounts */}
        <AnimationWrapper>
          <h2 className="text-center fw-bold mb-2">Bank Account Details</h2>
          <p className="text-center text-muted mb-4">
            Transfer directly to any of our church bank accounts below.
          </p>
        </AnimationWrapper>

        <Row className="g-4 mb-5">
          {bankAccounts.map(account => (
            <Col key={account.id} md={6}>
              <AccountCard account={account} />
            </Col>
          ))}
        </Row>

        {/* Telebirr Section */}
        <AnimationWrapper>
          <Card className="shadow-sm border-0 mb-5 overflow-hidden">
            <div style={{ height: 6, background: 'linear-gradient(90deg, #198754, #0d6efd)' }} />
            <Card.Body className="p-4">
              <Row className="align-items-center">
                <Col md={8}>
                  <h5 className="fw-bold mb-1">
                    <i className="bi bi-phone-fill text-success me-2"></i>
                    Give via Telebirr or CBE Birr
                  </h5>
                  <p className="text-muted mb-0">
                    Send money directly to our church phone number. Fast, easy, and available 24/7.
                  </p>
                </Col>
                <Col md={4} className="text-md-end mt-3 mt-md-0">
                  <div className="fw-bold fs-5">+251-994-445-420</div>
                  <small className="text-muted">Gospel Light International Church</small>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </AnimationWrapper>

        {/* Confirmation / Thank You CTA */}
        <AnimationWrapper>
          <div className="text-center py-4 rounded-3" style={{ backgroundColor: '#f0f7ff' }}>
            <i className="bi bi-heart-fill text-primary fs-1 mb-3 d-block"></i>
            <h5 className="fw-bold">Already gave? Thank you! 🙏</h5>
            <p className="text-muted mb-3">
              Please let us know so we can keep you updated on how your gift is being used.
            </p>
            <Button variant="primary" onClick={() => setShowConfirm(true)}>
              Confirm My Donation
            </Button>
          </div>
        </AnimationWrapper>
      </Container>

      {/* Confirmation Modal */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You for Giving!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <FaHeart size={48} className="text-primary mb-3" />
          <p className="lead mb-1">God bless you abundantly.</p>
          <p className="text-muted">
            Your generosity helps us spread the Gospel and serve the community of Adama and beyond.
          </p>
          <p className="fw-bold">"And my God will meet all your needs according to the riches of his glory in Christ Jesus." — Philippians 4:19</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowConfirm(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};

export default Donate;