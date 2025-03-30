import React from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import { FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';
import './LocationsSection.css';

const LocationsSection = () => {
  const churchLocation = {
    id: 1,
    name: "Gospel Light International Church",
    address: "Adama, Ethiopia",
    serviceTimes: "Sunday: from 9AM - 1PM, Wednesday: 5:30PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1198.0811566672191!2d39.25919128555894!3d8.558771809444567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgospel%20light%20adama!5e0!3m2!1sen!2set!4v1743285573316!5m2!1sen!2set"
  };

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/cYmnvakP6o7UmJnYA', '_blank');
  };

  return (
    <section className="locations-section">
      <AnimationWrapper>
        <h2>Our Location</h2>
        <p className="section-subtitle">Find us and join our services</p>
      </AnimationWrapper>
      
      <div className="map-container">
        <iframe
          src={churchLocation.mapEmbedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Selase Gospel Light International Church Location"
        ></iframe>
      </div>
      
      <div className="location-card-container">
        <AnimationWrapper>
          <motion.div 
            className="location-card"
            whileHover={{ scale: 1.02 }}
          >
            <h3>{churchLocation.name}</h3>
            <p className="location-address">
              <FaMapMarkerAlt className="icon" /> {churchLocation.address}
            </p>
            <p className="service-times">
              <FaClock className="icon" /> {churchLocation.serviceTimes}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="location-button"
              onClick={handleGetDirections}
            >
              <FaDirections className="icon" /> Get Directions
            </motion.button>
          </motion.div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default LocationsSection;