import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import './Contact.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <ContactSection />
      {/* Additional contact content can be added here */}
    </motion.div>
  );
};

export default Contact;