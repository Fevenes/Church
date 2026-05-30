// components/LiveStreamSection.jsx
// Add this to your Home page: <LiveStreamSection />
// Also works as a standalone section anywhere

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import AnimationWrapper from './AnimationWrapper';

// ✅ REPLACE THESE with your actual YouTube Channel ID and video IDs
const YOUTUBE_CHANNEL_ID = 'UCxxxxxxxxxxxxxxxxxxxxxx'; // e.g. UCabc123...
const LIVE_STREAM_EMBED = 'https://www.youtube.com/embed/live_stream?channel=' + YOUTUBE_CHANNEL_ID + '&autoplay=1';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@YourChannelName'; // replace with your YouTube channel URL

const recentSermons = [
  {
    id: 1,
    title: 'Walking in the Light of God',
    date: 'May 18, 2025',
    videoId: 'dQw4w9WgXcQ', // replace with real YouTube video ID
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b671a6a0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'The Power of Prayer and Fasting',
    date: 'May 11, 2025',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Faith Over Fear',
    date: 'May 4, 2025',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

const serviceTimes = [
  { day: 'Sunday', time: '9:00 AM – 1:00 PM', label: 'Main Worship Service' },
  { day: 'Monday', time: '5:30 PM', label: 'Youth Program' },
  { day: 'Wednesday', time: '9:00 AM & 5:30 PM', label: 'Prayer & Teaching' },
];

const LiveStreamSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-5" style={{ backgroundColor: '#0a0a1a' }}>
      <Container>
        {/* Header */}
        <AnimationWrapper>
          <div className="text-center mb-5">
            <Badge bg="danger" className="mb-3 px-3 py-2 fs-6">
              <i className="bi bi-record-circle-fill me-2"></i>LIVE
            </Badge>
            <h2 className="display-5 fw-bold text-white">Watch Us Live</h2>
            <p className="text-secondary lead">
              Can't make it in person? Join our Sunday service from anywhere in the world.
            </p>
          </div>
        </AnimationWrapper>

        <Row className="g-4">
          {/* Main Live Stream Player */}
          <Col lg={8}>
            <AnimationWrapper delay={0.1}>
              <Card className="border-0 shadow overflow-hidden" style={{ backgroundColor: '#111' }}>
                {/* Live indicator bar */}
                <div
                  className="d-flex justify-content-between align-items-center px-3 py-2"
                  style={{ backgroundColor: '#1a1a2e' }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <motion.span
                      className="rounded-circle"
                      style={{ width: 10, height: 10, backgroundColor: '#dc3545', display: 'inline-block' }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    <span className="text-white small fw-bold">GOSPEL LIGHT INTERNATIONAL CHURCH</span>
                  </div>
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-light"
                  >
                    <i className="bi bi-youtube me-1 text-danger"></i>Subscribe
                  </a>
                </div>

                {/* Embed */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={activeVideo
                      ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1`
                      : LIVE_STREAM_EMBED}
                    title="Gospel Light Live Stream"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  />
                </div>

                {/* Under player */}
                <div className="px-3 py-3" style={{ backgroundColor: '#1a1a2e' }}>
                  <p className="text-secondary small mb-0">
                    <i className="bi bi-info-circle me-1"></i>
                    If the live stream isn't active, you'll see the most recent video.
                    Services air every <strong className="text-white">Sunday at 9:00 AM (EAT)</strong>.
                  </p>
                </div>
              </Card>
            </AnimationWrapper>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            {/* Service Times */}
            <AnimationWrapper delay={0.2}>
              <Card className="border-0 mb-4 shadow-sm" style={{ backgroundColor: '#111827' }}>
                <Card.Body className="p-3">
                  <h6 className="text-white fw-bold mb-3">
                    <i className="bi bi-clock-fill text-primary me-2"></i>Service Times (EAT)
                  </h6>
                  {serviceTimes.map((s, i) => (
                    <div key={i} className="d-flex justify-content-between align-items-start mb-2 pb-2 border-bottom border-secondary">
                      <div>
                        <div className="text-white small fw-semibold">{s.day}</div>
                        <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{s.label}</div>
                      </div>
                      <Badge bg="primary" className="align-self-start">{s.time}</Badge>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </AnimationWrapper>

            {/* Recent Videos */}
            <AnimationWrapper delay={0.3}>
              <Card className="border-0 shadow-sm" style={{ backgroundColor: '#111827' }}>
                <Card.Body className="p-3">
                  <h6 className="text-white fw-bold mb-3">
                    <i className="bi bi-collection-play-fill text-primary me-2"></i>Recent Sermons
                  </h6>
                  {recentSermons.map((sermon) => (
                    <motion.div
                      key={sermon.id}
                      className="d-flex align-items-center gap-2 mb-3 cursor-pointer"
                      whileHover={{ x: 4 }}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setActiveVideo(sermon.videoId)}
                    >
                      <div className="position-relative flex-shrink-0" style={{ width: 72, height: 48 }}>
                        <img
                          src={sermon.thumbnail}
                          alt={sermon.title}
                          className="rounded"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                          className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle"
                          style={{ width: 24, height: 24, backgroundColor: 'rgba(13,110,253,0.9)' }}
                        >
                          <i className="bi bi-play-fill text-white" style={{ fontSize: 10 }}></i>
                        </div>
                      </div>
                      <div>
                        <div className="text-white small lh-sm">{sermon.title}</div>
                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>{sermon.date}</div>
                      </div>
                    </motion.div>
                  ))}

                  <Button
                    variant="outline-light"
                    size="sm"
                    className="w-100 mt-2"
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                  >
                    <i className="bi bi-youtube me-2 text-danger"></i>View All on YouTube
                  </Button>
                </Card.Body>
              </Card>
            </AnimationWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LiveStreamSection;