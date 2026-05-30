// pages/Home.jsx — Updated with LiveStreamSection added
import React from 'react';
import { motion } from 'framer-motion';
import HomeSection from '../components/HomeSection';
import HomeAbout from '../components/Homeabout';
import GetInvolvedSection from '../components/GetInvolvedSection';
import EventsSection from '../components/EventsSection';
import LiveStreamSection from '../components/LiveStreamSection'; // ✅ NEW

import './Home.css';

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
      <GetInvolvedSection />
      <LiveStreamSection />      {/* ✅ NEW — Live stream section */}
      <EventsSection isHomePage={true} />
    </motion.div>
  );
};

export default Home;