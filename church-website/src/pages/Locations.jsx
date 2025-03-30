import React from 'react';
import { motion } from 'framer-motion';
import LocationsSection from '../components/LocationsSection';
import './Locations.css';

const Locations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="locations-page"
    >
      <LocationsSection />
      {/* Additional locations content can be added here */}
    </motion.div>
  );
};

export default Locations;