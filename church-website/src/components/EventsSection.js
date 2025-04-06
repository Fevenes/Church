import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const EventsSection = ({ isHomePage = false }) => {
  const [eventImages, setEventImages] = useState({});

  const handleThumbnailClick = (eventId, newImage) => {
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

  const resetToDefaultImage = (eventId) => {
    const newState = { ...eventImages };
    delete newState[eventId];
    setEventImages(newState);
  };

  const pastEvents = [
    {
      id: 1,
      title: "Church Building",
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

    },
  ];

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
      description: "Teaching ,Worship and Preaching by Youth ",
      image: "/Monday.jpg"
    },
    {
      id: 3,
      title: "Wednesday Prayer",
      time: "Wednesdays Morning at 9:00AM and Afternoon 5:30 PM",
      description: "Midweek teaching and prayer gathering",
      image: "/IMG_6095.jpg"
    },
  ];

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
      date: "Every Week",
      description: "Bible Studies every week in different devotee houses",
      image: "/download (1).jpg",
      registerLink: "#"
    },
  ];

  const displayedPastEvents = isHomePage ? pastEvents.slice(0, 2) : pastEvents;
  const displayedUpcomingEvents = isHomePage ? upcomingEvents.slice(0, 1) : upcomingEvents;

  return (
    <Container className={`py-5 ${isHomePage ? '' : 'mt-4'}`}>
      {/* Past Events Section */}
      <section className="mb-5">
        <AnimationWrapper>
          <h2 className="text-center mb-4">Past Events Gallery</h2>
          <p className="text-center text-muted mb-4">Relive our special moments together</p>
        </AnimationWrapper>
        
        <Row className="g-4 justify-content-center">
          {displayedPastEvents.map((pastEvent, index) => (
            <Col key={`past-${pastEvent.id}`} lg={isHomePage ? 6 : 4} md={6}>
              <AnimationWrapper delay={index * 0.2}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <Card.Img 
                      variant="top"
                      src={eventImages[pastEvent.id] || pastEvent.image}
                      className="h-100 w-100 object-fit-cover"
                      onClick={() => resetToDefaultImage(pastEvent.id)}
                    />
                    <Badge pill bg="primary" className="position-absolute bottom-0 start-0 m-2">
                      {pastEvent.date}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{pastEvent.title}</Card.Title>
                    <Card.Text className="text-muted">{pastEvent.description}</Card.Text>
                    {!isHomePage && (
                      <>
                        <div className="d-flex gap-2 mt-auto mb-3">
                          {pastEvent.gallery.map((img, i) => (
                            <motion.img
                              key={i}
                              src={img}
                              alt={`${pastEvent.title} gallery ${i+1}`}
                              className={`img-thumbnail cursor-pointer ${(eventImages[pastEvent.id] || pastEvent.image) === img ? 'border-primary' : ''}`}
                              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                              onClick={() => handleThumbnailClick(pastEvent.id, img)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            />
                          ))}
                        </div>
                        {eventImages[pastEvent.id] && (
                          <Button 
                            variant="outline-primary"
                            size="sm"
                            onClick={() => resetToDefaultImage(pastEvent.id)}
                            className="mt-auto align-self-start"
                          >
                            Show Default Image
                          </Button>
                        )}
                      </>
                    )}
                  </Card.Body>
                </Card>
              </AnimationWrapper>
            </Col>
          ))}
        </Row>

        {isHomePage && (
          <div className="text-center mt-4">
            <Button as={Link} to="/events" variant="primary" className="px-4">
              View All Past Events
            </Button>
          </div>
        )}
      </section>

      {/* Regular Services Section */}
      <section className="py-4 bg-light rounded mb-5">
        <AnimationWrapper>
          <h2 className="text-center mb-4">Our Regular Services</h2>
          <p className="text-center text-muted mb-4">Join us for weekly worship</p>
        </AnimationWrapper>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={`service-${service.id}`} lg={isHomePage ? 4 : 4} md={6}>
              <AnimationWrapper delay={index * 0.2}>
                <Card className="h-100 shadow-sm border-0">
                  <div style={{ height: '180px' }}>
                    <Card.Img 
                      variant="top"
                      src={service.image}
                      className="h-100 w-100 object-fit-cover"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{service.time}</Card.Subtitle>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </AnimationWrapper>
            </Col>
          ))}
        </Row>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-4">
        <AnimationWrapper>
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <p className="text-center text-muted mb-4">Mark your calendars</p>
        </AnimationWrapper>
        
        <Row className="g-4 justify-content-center">
          {displayedUpcomingEvents.map((upcomingEvent, index) => (
            <Col key={`upcoming-${upcomingEvent.id}`} lg={isHomePage ? 6 : 4} md={6}>
              <AnimationWrapper delay={index * 0.2}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <Card.Img 
                      variant="top"
                      src={upcomingEvent.image}
                      className="h-100 w-100 object-fit-cover"
                    />
                    <Badge pill bg="primary" className="position-absolute bottom-0 start-0 m-2">
                      {upcomingEvent.date}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title>{upcomingEvent.title}</Card.Title>
                    <Card.Text className="text-muted">{upcomingEvent.description}</Card.Text>
                  </Card.Body>
                </Card>
              </AnimationWrapper>
            </Col>
          ))}
        </Row>

        {isHomePage && (
          <div className="text-center mt-4">
            <Button as={Link} to="/events" variant="primary" className="px-4">
              View All Upcoming Events
            </Button>
          </div>
        )}
      </section>
    </Container>
  );
};

export default EventsSection;