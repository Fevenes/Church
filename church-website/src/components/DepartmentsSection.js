import React from 'react';
import { motion } from 'framer-motion';
import './Departments.css';

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
      description: "Dedicated team nurturing young believers (ages 3-12)",
      image: "/images/children-teachers.jpg",
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
      image: "/images/wedding-ministry.jpg",
      contact: "weddings@church.org"
    },
    {
      id: 6,
      title: "Evangelism Team",
      description: "Spreading the Gospel through outreach and missions",
      image: "/images/evangelism.jpg",
      contact: "evangelism@church.org"
    }
  ];

  return (
    <section className="departments">
      <div className="departments-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="departments-title"
        >
          Ministry Departments
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="departments-subtitle"
        >
          Join our dedicated teams serving God's purpose
        </motion.p>
        
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="department-card"
            >
              <div className="department-image-container">
                <img 
                  src={dept.image} 
                  alt={dept.title}
                  className="department-image"
                  loading="lazy"
                />
              </div>
              <div className="department-content">
                <h3 className="department-name">{dept.title}</h3>
                <p className="department-description">{dept.description}</p>
                <a 
                  href={`mailto:${dept.contact}`} 
                  className="department-contact"
                >
                  Contact Team
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;