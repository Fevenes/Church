import React from 'react';
import { motion } from 'framer-motion';
import DepartmentsSection from '../components/DepartmentsSection';
//import './Departments.css';

const Departments = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="departments-page"
    >
      <DepartmentsSection />
      {/* Additional departments content can be added here */}
    </motion.div>
  );
};

export default Departments;