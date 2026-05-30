import React from 'react';
import { motion } from 'framer-motion';
import EventsSection from '../components/EventsSection';
import './Events.css';

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="events-page"
    >
      <EventsSection />
    </motion.div>
  );
};

export default Events;