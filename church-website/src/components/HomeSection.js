import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomeSection.css';

const HomeSection = () => {
  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Welcome to Gospel Light International Church</h1>
          <h1>አዳማ ወንጌል ብርሃን ቤተክርስቲያን ስላሴ አጥቢያ</h1>
          <p>“ኑ፥ በእግዚአብሔር ብርሃን እንሂድ።”
          ኢሳይያስ 2፥5</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Join Us This Sunday
          </motion.button>
        </motion.div>
        
        {/* Enhanced Image Section */}
        <motion.div 
          className="hero-image-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/IMG_2924.jpg" 
            alt="Gospel Light International Church worship service"
            className="hero-image"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/IMG_2924.jpg'
            }}
          />
          <div className="image-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection