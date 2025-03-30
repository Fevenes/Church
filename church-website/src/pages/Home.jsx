import React from 'react';
import { motion } from 'framer-motion';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/Homeabout';
import EventsSection from '../components/EventsSection';
import './Home.css';
import HomeAbout from '../components/Homeabout';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      <HomeSection />
      <HomeAbout />
      <EventsSection isHomePage={true} />
    </motion.div>
  );
};

export default Home;