import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import {
  FaHeart,
  FaUserFriends,
  FaBullhorn,
  FaPray,
  FaHandshake,
} from "react-icons/fa";

const involvementOptions = [
  { title: "Giving", icon: <FaHeart />, link: "" },
  { title: "Outreach", icon: <FaBullhorn />, link: "#evanglism" },
  { title: "Prayer", icon: <FaPray />, link: "#" },
  { title: "Groups", icon: <FaHandshake />, link: "https://t.me/+jIAuAXMKUT00NjQ0" },
];

const GetInvolvedSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (title, link) => {
    if (title === "Giving") {
      setShowModal(true);
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <section className="get-involved py-5 text-center">
        <Container>
          <h1 className="mb-3">
            GET <b>INVOLVED</b>
          </h1>
          <p className="lead mb-5">See what God can do through you.</p>
          <Row className="g-4 justify-content-center">
            {involvementOptions.map((item, index) => (
              <Col xs={6} sm={4} md={2} key={index}>
                <Card
                  className="h-100 shadow-sm border-0 hover-effect"
                  onClick={() => handleCardClick(item.title, item.link)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body>
                    <div className="mb-3 fs-2 text-primary">{item.icon}</div>
                    <h6 className="mb-0">{item.title}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal for Giving */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        aria-labelledby="giving-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="giving-modal">Church Bank Accounts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-start">
            <h6>Commercial Bank of Ethiopia (CBE)</h6>
            <p>
              <strong>Account Name:</strong> Gospel Light International Church<br />
              <strong>Account Number:</strong> 1000123456789
            </p>
            <hr />
            <h6>Berhan International Bank</h6>
            <p>
              <strong>Account Name:</strong> Gospel Light Church<br />
              <strong>Account Number:</strong> 2500080024630
            </p>
            <hr />
            <h6>Bank of Abyssinia (BoA)</h6>
            <p>
              <strong>Account Name:</strong> Gospel Light Int’l Church<br />
              <strong>Account Number:</strong> 9876543210001
            </p>
            <hr />
            <h6>Cooperative Bank of Oromia</h6>
            <p>
              <strong>Account Name:</strong> Gospel Light Church<br />
              <strong>Account Number:</strong> 11112222333344
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GetInvolvedSection;
