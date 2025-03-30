import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import { Link } from 'react-router-dom';
import './EventsSection.css';

const EventsSection = ({ isHomePage = false }) => {
  // State to track the main image for each past event
  const [eventImages, setEventImages] = useState({});

  // Function to update the main image when a thumbnail is clicked
  const handleThumbnailClick = (eventId, newImage) => {
    // If clicking the same image that's already selected, reset to default
    if (eventImages[eventId] === newImage) {
      const newState = { ...eventImages };
      delete newState[eventId];
      setEventImages(newState);
    } else {
      setEventImages(prev => ({
        ...prev,
        [eventId]: newImage
      }));
    }
  };

  // Function to reset to default image
  const resetToDefaultImage = (eventId) => {
    const newState = { ...eventImages };
    delete newState[eventId];
    setEventImages(newState);
  };

  // Past events with images
  const pastEvents = [
    {
      id: 1,
      title: "When the Church is Building",
      date: "April 4, 2017",
      description: "Our devotees working together to build the church",
      image: "/IMG_20170328_104208.jpg",
      gallery: ["/IMG_20170328_104210.jpg", "/IMG_20170328_104219.jpg", "/IMG_20170328_104234.jpg"]
    },
    {
      id: 2,
      title: "New Year's Worship Night",
      date: "September 11, 2024",
      description: "Worship night to bring in the new year",
      image: "/IMG_6083.jpg",
      gallery: ["/IMG_6078.jpg", "/IMG_6085.jpg", "/IMG_2951.jpg"]
    },
    {
      id: 3,
      title: "Marriage Education",
      date: "December 28, 2024",
      description: "Marriage Education for 3 days",
      image: "/_38B4903.JPG",
      gallery: ["/_38B5258.JPG", "/_38B5214.JPG", "/_38B5250.JPG"]  
    }
  ];

  // Regular service times
  const services = [
    {
      id: 1,
      title: "Sunday Service",
      time: "Sundays from 9:00 AM - 1:00 PM",
      description: "Main worship service with worship and teaching",
      image: "/3L8A5447.JPG"
    },
    {
      id: 2,
      title: "Monday Youth Programs",
      time: "Mondays at 5:30 PM",
      description: "Youth programs",
      image: "/Monday.jpg"
    },
    {
      id: 3,
      title: "Wednesday Prayer",
      time: "Wednesdays Morning at 9:00AM and Afternoon 5:30 PM",
      description: "Midweek teaching and prayer gathering",
      image: "/IMG_6095.jpg"
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Lord's Supper Service",
      date: "Every Month",
      description: "Every month we have the Lord's Supper Service",
      image: "/123.jpg",
    },
    {
      id: 2,
      title: "Bible Studies",
      date: "Every Day",
      description: "Bible Studies in different devotee houses",
      image: "/download (1).jpg",
      registerLink: "#"
    }
  ];

  // For home page - show limited items
  const displayedPastEvents = isHomePage ? pastEvents.slice(0, 2) : pastEvents;
  const displayedUpcomingEvents = isHomePage ? upcomingEvents.slice(0, 1) : upcomingEvents;

  return (
    <section className={`events-page ${isHomePage ? 'home-page' : ''}`}>
      {/* Past Events Section */}
      <div className="past-events-section">
        <AnimationWrapper>
          <h2>Past Events Gallery</h2>
          <p className="section-subtitle">Relive our special moments together</p>
        </AnimationWrapper>
        
        <div className="events-grid">
          {displayedPastEvents.map((pastEvent, index) => (
            <AnimationWrapper key={`past-${pastEvent.id}`} delay={index * 0.2}>
              <motion.div 
                className="event-card"
                whileHover={{ y: -5 }}
              >
                <div className="event-image-container">
                  <motion.img 
                    src={eventImages[pastEvent.id] || pastEvent.image} 
                    alt={pastEvent.title}
                    className="event-image"
                    onClick={() => resetToDefaultImage(pastEvent.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  />
                  <div className="date-badge">{pastEvent.date}</div>
                </div>
                <div className="event-content">
                  <h3>{pastEvent.title}</h3>
                  <p className="event-description">{pastEvent.description}</p>
                  {!isHomePage && (
                    <>
                      <div className="event-gallery">
                        {pastEvent.gallery.map((img, i) => (
                          <motion.img 
                            key={i} 
                            src={img} 
                            alt={`${pastEvent.title} gallery ${i+1}`}
                            className={`gallery-thumbnail ${
                              (eventImages[pastEvent.id] || pastEvent.image) === img ? 'active' : ''
                            }`}
                            onClick={() => handleThumbnailClick(pastEvent.id, img)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          />
                        ))}
                      </div>
                      {eventImages[pastEvent.id] && (
                        <motion.button
                          className="reset-button"
                          onClick={() => resetToDefaultImage(pastEvent.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Show Default Image
                        </motion.button>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        {isHomePage && (
          <div className="view-all-container">
            <Link to="/events" className="view-all-button">
              View All Past Events
            </Link>
          </div>
        )}
      </div>

      {/* Regular Services Section */}
      <div className="services-section">
        <AnimationWrapper>
          <h2>Our Regular Services</h2>
          <p className="section-subtitle">Join us for weekly worship</p>
        </AnimationWrapper>
        
        <div className={`services-grid ${!isHomePage ? 'side-by-side' : ''}`}>
          {services.map((service, index) => (
            <AnimationWrapper key={`service-${service.id}`} delay={index * 0.2}>
              <motion.div 
                className="service-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p className="service-time">{service.time}</p>
                  <p className="service-description">{service.description}</p>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="upcoming-events-section">
        <AnimationWrapper>
          <h2>Upcoming Events</h2>
          <p className="section-subtitle">Mark your calendars</p>
        </AnimationWrapper>
        
        <div className="events-grid">
          {displayedUpcomingEvents.map((upcomingEvent, index) => (
            <AnimationWrapper key={`upcoming-${upcomingEvent.id}`} delay={index * 0.2}>
              <motion.div 
                className="event-card"
                whileHover={{ y: -5 }}
              >
                <div className="event-image-container">
                  <img 
                    src={upcomingEvent.image} 
                    alt={upcomingEvent.title}
                    className="event-image"
                  />
                  <div className="date-badge">{upcomingEvent.date}</div>
                </div>
                <div className="event-content">
                  <h3>{upcomingEvent.title}</h3>
                  <p className="event-description">{upcomingEvent.description}</p>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        {isHomePage && (
          <div className="view-all-container">
            <Link to="/events" className="view-all-button">
              View All Upcoming Events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;