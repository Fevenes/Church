import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomeAbout.css';  // Create this CSS file

const HomeAbout = () => {
  return (
    <motion.section 
      className="home-about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="home-about-container">
        {/* History Summary */}
        <div className="home-about-card">
          <h3>Our History</h3>
          <p>
            Founded by Pastor Daniel Makonnen, Gospel Light Ministries began during Ethiopia's 
            communist era, sparking a revival that transformed Ethiopian Christianity through 
            powerful preaching and miraculous works.
          </p>
          <Link to="/about" className="learn-more-link">
            Read Full History →
          </Link>
        </div>

        {/* Vision Summary */}
        <div className="home-about-card">
          <h3>Our Vision</h3>
          <p>
            To spread the Gospel globally while establishing Bible schools, medical clinics, 
            and sustainable development programs that serve communities in Ethiopia and beyond.
          </p>
          <Link to="/about" className="learn-more-link">
            Explore Our Vision →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeAbout;