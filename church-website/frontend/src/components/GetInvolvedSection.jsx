import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
FaHeart,
FaBullhorn,
FaPray,
FaHandshake,
} from "react-icons/fa";

const involvementOptions = [
{
title: "Giving",
icon: <FaHeart />,
description: "Support the ministry",
action: "internal",
link: "/donate",
color: "#dc3545",
},
{
title: "Outreach",
icon: <FaBullhorn />,
description: "Serve the community",
action: "internal",
link: "/departments",
color: "#fd7e14",
},
{
title: "Prayer",
icon: <FaPray />,
description: "Share your needs",
action: "internal",
link: "https://t.me/+jIAuAXMKUT00NjQ0",
color: "#198754",
},
{
title: "Groups",
icon: <FaHandshake />,
description: "Join a small group",
action: "external",
link: "https://t.me/+jIAuAXMKUT00NjQ0",
color: "#0d6efd",
},
];

const GetInvolvedSection = () => {
const navigate = useNavigate();

const handleCardClick = (action, link) => {
if (action === "internal") {
navigate(link);
} else {
window.open(link, "_blank");
}
};

return (
<section
style={{
background: "#f8f9fa",
padding: "80px 0",
}}
> <Container>
<motion.div
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{
textAlign: "center",
maxWidth: "700px",
margin: "0 auto 50px",
}}
>
<p
style={{
color: "#0d6efd",
fontWeight: 800,
letterSpacing: "3px",
textTransform: "uppercase",
fontSize: "13px",
marginBottom: "10px",
}}
>
Gospel Light International Church </p>

```
      <h2
        style={{
          fontSize: "clamp(2rem,4vw,3rem)",
          fontWeight: 900,
          color: "#111827",
          marginBottom: "12px",
        }}
      >
        Get Involved
      </h2>

      <p
        style={{
          color: "#6b7280",
          fontSize: "18px",
        }}
      >
        Discover ways to serve, give, pray, and grow together as a church family.
      </p>
    </motion.div>

    <Row className="g-4 justify-content-center">
      {involvementOptions.map((item, index) => (
        <Col xs={12} sm={6} md={3} key={index}>
          <motion.div
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <Card
              onClick={() =>
                handleCardClick(item.action, item.link)
              }
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 14px 35px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Card.Body
                style={{
                  textAlign: "center",
                  padding: "35px 25px",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: `${item.color}15`,
                    color: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    margin: "0 auto 20px",
                  }}
                >
                  {item.icon}
                </div>

                <h4
                  style={{
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "20px",
                  }}
                >
                  {item.description}
                </p>

                <span
                  style={{
                    color: item.color,
                    fontWeight: 800,
                  }}
                >
                  Learn More →
                </span>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
);
};

export default GetInvolvedSection;
