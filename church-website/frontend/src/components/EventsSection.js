import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Badge } from 'react-bootstrap';

const eventTabs = [
  { id: 'all', label: 'All', icon: 'bi-grid-3x3-gap-fill' },
  { id: 'upcoming', label: 'Upcoming', icon: 'bi-calendar-heart' },
  { id: 'services', label: 'Regular Services', icon: 'bi-clock-fill' },
  { id: 'past', label: 'Past Events', icon: 'bi-images' },
];

const events = [
  {
    id: 1,
    type: 'upcoming',
    title: "Lord's Supper Service",
    date: 'Every Month',
    description: 'A monthly service to remember the sacrifice of our Lord Jesus Christ.',
    image: '/123.jpg',
    badge: 'Upcoming',
    color: '#dc3545',
  },
  {
    id: 2,
    type: 'upcoming',
    title: 'Bible Studies',
    date: 'Every Week',
    description: 'Weekly Bible studies held in different church members’ homes.',
    image: '/download (1).jpg',
    badge: 'Upcoming',
    color: '#dc3545',
  },
  {
    id: 3,
    type: 'services',
    title: 'Sunday Worship Service',
    date: 'Sundays • 9:00 AM - 1:00 PM',
    description: 'Main worship service with praise, prayer, teaching, and fellowship.',
    image: '/3L8A5447.JPG',
    badge: 'Service',
    color: '#0d6efd',
  },
  {
    id: 4,
    type: 'services',
    title: 'Monday Youth Program',
    date: 'Mondays • 5:30 PM',
    description: 'Youth teaching, worship, preaching, and spiritual encouragement.',
    image: '/Monday.jpg',
    badge: 'Youth',
    color: '#fd7e14',
  },
  {
    id: 5,
    type: 'services',
    title: 'Wednesday Prayer',
    date: 'Wednesdays • 9:00 AM & 5:30 PM',
    description: 'Midweek prayer gathering and teaching for spiritual growth.',
    image: '/IMG_6095.jpg',
    badge: 'Prayer',
    color: '#198754',
  },
  {
    id: 6,
    type: 'past',
    title: 'Church Building',
    date: 'April 4, 2017',
    description: 'Our church family worked together in faith to build the house of worship.',
    image: '/IMG_20170328_104208.jpg',
    badge: 'Past Event',
    color: '#6f42c1',
  },
  {
    id: 7,
    type: 'past',
    title: "New Year's Worship Night",
    date: 'September 11, 2024',
    description: 'A joyful night of worship, prayer, and thanksgiving as we welcomed the new year.',
    image: '/IMG_6083.jpg',
    badge: 'Past Event',
    color: '#6f42c1',
  },
  {
    id: 8,
    type: 'past',
    title: 'Marriage Education',
    date: 'December 28, 2024',
    description: 'A three-day teaching program focused on Christian marriage and family life.',
    image: '/_38B4903.JPG',
    badge: 'Past Event',
    color: '#6f42c1',
  },
];

const EventsSection = ({ isHomePage = false }) => {
  const [activeTab, setActiveTab] = useState(isHomePage ? 'services' : 'all');

  const filteredEvents =
    activeTab === 'all'
      ? events
      : events.filter((event) => event.type === activeTab);

  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
          paddingTop: isHomePage ? 50 : 90,
          paddingBottom: 55,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
            style={{
              position: 'absolute',
              width: 7 + i * 3,
              height: 7 + i * 3,
              borderRadius: '50%',
              backgroundColor: ['#0d6efd', '#dc3545', '#fd7e14', '#198754', '#6f42c1'][i % 5],
              left: `${10 + i * 15}%`,
              top: `${45 + (i % 3) * 28}px`,
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
            Church Events & Services
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, marginBottom: 0 }}>
            Worship, fellowship, teaching, prayer & church memories
          </p>
        </motion.div>
      </div>

      {!isHomePage && (
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
                gap: 8,
                overflowX: 'auto',
                padding: '14px 0',
                scrollbarWidth: 'none',
              }}
            >
              {eventTabs.map((tab) => {
                const count = tab.id === 'all' ? events.length : events.filter((e) => e.type === tab.id).length;
                const active = activeTab === tab.id;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
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
                    <i className={`bi ${tab.icon}`} style={{ fontSize: 13 }} />
                    {tab.label}
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
      )}

      <Container className="py-5">
        <motion.div
          layout
          style={{
            columns: 'var(--col-count)',
            columnGap: 16,
            '--col-count': '3',
          }}
          className="events-masonry"
        >
          <style>{`
            .events-masonry { --col-count: 3; }
            @media (max-width: 992px) { .events-masonry { --col-count: 2; } }
            @media (max-width: 640px) { .events-masonry { --col-count: 1; } }
          `}</style>

          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
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
                  <div style={{ position: 'relative', height: event.type === 'services' ? 240 : 280 }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    <motion.div
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0.9 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                      }}
                    >
                      <Badge
                        style={{
                          backgroundColor: event.color,
                          borderRadius: 20,
                          padding: '7px 12px',
                          fontSize: 11,
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                        }}
                      >
                        {event.badge}
                      </Badge>
                    </div>

                    <motion.div
                      variants={{ hover: { opacity: 1, y: 0 } }}
                      initial={{ opacity: 0.95, y: 8 }}
                      style={{
                        position: 'absolute',
                        left: 16,
                        right: 16,
                        bottom: 16,
                      }}
                    >
                      <p
                        style={{
                          color: event.color,
                          background: 'rgba(255,255,255,0.95)',
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: 800,
                          marginBottom: 8,
                        }}
                      >
                        {event.date}
                      </p>

                      <h3
                        style={{
                          color: '#fff',
                          margin: '0 0 6px',
                          fontSize: 21,
                          fontWeight: 800,
                        }}
                      >
                        {event.title}
                      </h3>

                      <p
                        style={{
                          color: 'rgba(255,255,255,0.82)',
                          margin: 0,
                          fontSize: 14,
                          lineHeight: 1.5,
                        }}
                      >
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </div>
  );
};

export default EventsSection;