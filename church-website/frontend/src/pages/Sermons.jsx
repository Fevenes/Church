// pages/Sermons.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Badge, Form } from 'react-bootstrap';

const allSermons = [
  {
    id: 1,
    title: 'Walking in the Light of God',
    speaker: 'Pastor Daniel Makonnen',
    date: 'May 18, 2025',
    topic: 'Faith',
    duration: '52 min',
    description:
      "A powerful message on living according to God's word and letting His light guide our daily steps.",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b671a6a0b?auto=format&fit=crop&w=600&q=80',
    color: '#0d6efd',
  },
  {
    id: 2,
    title: 'The Power of Prayer and Fasting',
    speaker: 'Pastor Daniel Makonnen',
    date: 'May 11, 2025',
    topic: 'Prayer',
    duration: '48 min',
    description:
      'Understanding how prayer and fasting can transform our spiritual lives and bring breakthroughs.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    color: '#198754',
  },
  {
    id: 3,
    title: 'Faith Over Fear',
    speaker: 'Pastor Daniel Makonnen',
    date: 'May 4, 2025',
    topic: 'Faith',
    duration: '44 min',
    description:
      "How to stand firm in faith when life's challenges seem overwhelming. Isaiah 41:10.",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    color: '#0d6efd',
  },
  {
    id: 4,
    title: 'The Holy Spirit in Our Lives',
    speaker: 'Pastor Daniel Makonnen',
    date: 'April 27, 2025',
    topic: 'Holy Spirit',
    duration: '58 min',
    description:
      'An in-depth look at the role and gifts of the Holy Spirit for every believer.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
    color: '#6f42c1',
  },
  {
    id: 5,
    title: 'Grace and Redemption',
    speaker: 'Pastor Daniel Makonnen',
    date: 'April 20, 2025',
    topic: 'Grace',
    duration: '41 min',
    description:
      "God's grace is freely given. A message on redemption, forgiveness and new life in Christ.",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
    color: '#fd7e14',
  },
  {
    id: 6,
    title: 'Serving the Community',
    speaker: 'Pastor Daniel Makonnen',
    date: 'April 13, 2025',
    topic: 'Service',
    duration: '37 min',
    description:
      'How we as a church family are called to serve our city, our neighbours, and the world.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    color: '#dc3545',
  },
];

const topics = ['All', 'Faith', 'Prayer', 'Holy Spirit', 'Grace', 'Service'];

const topicIcons = {
  All: 'bi-grid-3x3-gap-fill',
  Faith: 'bi-stars',
  Prayer: 'bi-heart-fill',
  'Holy Spirit': 'bi-fire',
  Grace: 'bi-flower1',
  Service: 'bi-people-fill',
};

const VideoModal = ({ sermon, onClose }) => {
  if (!sermon) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.96)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 900,
          background: '#111827',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
        }}
      >
        <div
          style={{
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <h5 style={{ color: '#fff', margin: 0, fontWeight: 800 }}>
              {sermon.title}
            </h5>
            <small style={{ color: 'rgba(255,255,255,0.55)' }}>
              {sermon.speaker}
            </small>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={sermon.videoUrl}
            title={sermon.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Sermons = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSermon, setActiveSermon] = useState(null);

  const filtered = allSermons.filter((sermon) => {
    const matchesTopic = selectedTopic === 'All' || sermon.topic === selectedTopic;
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.topic.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTopic && matchesSearch;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <div
        style={{
          background:
            'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
          paddingTop: 110,
          paddingBottom: 64,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              position: 'absolute',
              width: 6 + i * 3,
              height: 6 + i * 3,
              borderRadius: '50%',
              backgroundColor: ['#0d6efd', '#dc3545', '#fd7e14', '#198754', '#6f42c1'][
                i % 5
              ],
              left: `${10 + i * 15}%`,
              top: `${60 + (i % 3) * 20}px`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              color: '#0d6efd',
              fontWeight: 700,
              letterSpacing: 4,
              fontSize: 12,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Gospel Light International Church
          </p>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              margin: '0 0 12px',
            }}
          >
            Sermons & Teachings
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 18,
              marginBottom: 0,
            }}
          >
            Be fed by the Word of God — anytime, anywhere.
          </p>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          background: '#f8f9fa',
          borderBottom: '1px solid #e9ecef',
          position: 'sticky',
          top: 64,
          zIndex: 100,
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              gap: 10,
              overflowX: 'auto',
              padding: '14px 0',
              scrollbarWidth: 'none',
              alignItems: 'center',
            }}
          >
            {topics.map((topic) => {
              const count =
                topic === 'All'
                  ? allSermons.length
                  : allSermons.filter((s) => s.topic === topic).length;

              const active = selectedTopic === topic;

              return (
                <motion.button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 18px',
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 14,
                    background: active ? '#0d6efd' : '#fff',
                    color: active ? '#fff' : '#495057',
                    boxShadow: active
                      ? '0 4px 16px rgba(13,110,253,0.3)'
                      : '0 1px 4px rgba(0,0,0,0.08)',
                  }}
                >
                  <i className={`bi ${topicIcons[topic]}`} style={{ fontSize: 13 }} />
                  {topic}
                  <span
                    style={{
                      padding: '1px 7px',
                      borderRadius: 99,
                      fontSize: 11,
                      background: active ? 'rgba(255,255,255,0.25)' : '#e9ecef',
                      color: active ? '#fff' : '#6c757d',
                    }}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </Container>
      </div>

      <Container className="py-5">
        {/* Search */}
        <div
          style={{
            maxWidth: 620,
            margin: '0 auto 34px',
          }}
        >
          <Form.Control
            type="text"
            placeholder="Search sermons, speaker, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="lg"
            style={{
              borderRadius: 999,
              padding: '13px 22px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          />
        </div>

        <p className="text-muted mb-4 text-center">
          Showing {filtered.length} sermon{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Masonry Sermon Cards */}
        <motion.div
          layout
          style={{
            columns: 'var(--col-count)',
            columnGap: 16,
            '--col-count': '3',
          }}
          className="sermons-masonry"
        >
          <style>{`
            .sermons-masonry { --col-count: 3; }
            @media (max-width: 992px) { .sermons-masonry { --col-count: 2; } }
            @media (max-width: 640px) { .sermons-masonry { --col-count: 1; } }
          `}</style>

          <AnimatePresence>
            {filtered.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                style={{
                  breakInside: 'avoid',
                  marginBottom: 16,
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onClick={() => setActiveSermon(sermon)}
              >
                <motion.div
                  whileHover="hover"
                  style={{
                    position: 'relative',
                    borderRadius: 14,
                    overflow: 'hidden',
                    boxShadow: '0 2px 14px rgba(0,0,0,0.12)',
                    background: '#fff',
                  }}
                >
                  <div style={{ position: 'relative', height: index % 2 === 0 ? 290 : 250 }}>
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
                      }}
                    />

                    <Badge
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        backgroundColor: sermon.color,
                        borderRadius: 20,
                        padding: '7px 12px',
                        fontSize: 11,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                      }}
                    >
                      {sermon.topic}
                    </Badge>

                    <Badge
                      style={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        borderRadius: 20,
                        padding: '7px 12px',
                        fontSize: 11,
                      }}
                    >
                      {sermon.duration}
                    </Badge>

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      style={{
                        position: 'absolute',
                        top: '42%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 58,
                        height: 58,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 28,
                      }}
                    >
                      <i className="bi bi-play-fill" />
                    </motion.div>

                    <div
                      style={{
                        position: 'absolute',
                        left: 16,
                        right: 16,
                        bottom: 16,
                      }}
                    >
                      <p
                        style={{
                          color: sermon.color,
                          background: 'rgba(255,255,255,0.95)',
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: 800,
                          marginBottom: 8,
                        }}
                      >
                        {sermon.date}
                      </p>

                      <h3
                        style={{
                          color: '#fff',
                          margin: '0 0 6px',
                          fontSize: 21,
                          fontWeight: 800,
                        }}
                      >
                        {sermon.title}
                      </h3>

                      <p
                        style={{
                          color: 'rgba(255,255,255,0.82)',
                          margin: 0,
                          fontSize: 14,
                          lineHeight: 1.5,
                        }}
                      >
                        {sermon.description}
                      </p>

                      <small
                        style={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.7)',
                          marginTop: 8,
                        }}
                      >
                        <i className="bi bi-person-fill me-1"></i>
                        {sermon.speaker}
                      </small>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-5 text-muted">
            <i className="bi bi-camera-video fs-1 d-block mb-3"></i>
            <p>No sermons found. Try a different search or topic.</p>
          </div>
        )}
      </Container>

      <AnimatePresence>
        {activeSermon && (
          <VideoModal sermon={activeSermon} onClose={() => setActiveSermon(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sermons;