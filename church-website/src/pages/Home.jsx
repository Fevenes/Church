import React from 'react';
import { motion } from 'framer-motion';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/Homeabout';
import GetInvolvedSection from '../components/GetInvolvedSection';
import './Home.css';
import HomeAbout from '../components/Homeabout';
import EventsSection from '../components/EventsSection';
import Blog from './Blog.jsx';


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
      <EventsSection isHomePage={true} />
      <Blog />

    </motion.div>
  );
};

export default Home;