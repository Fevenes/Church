import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import './About.css';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <AboutSection showAllHistory={true} />
    </motion.div>
  );
};

export default About;