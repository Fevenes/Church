// pages/Gallery.jsx  — drop into src/pages/Gallery.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Badge, Button } from 'react-bootstrap';

/* ─── DATA ──────────────────────────────────────────────────────── */
const categories = [
  { id: 'all',       label: 'All',          icon: 'bi-grid-3x3-gap-fill' },
  { id: 'worship',   label: 'Worship',      icon: 'bi-music-note-beamed'  },
  { id: 'events',    label: 'Events',       icon: 'bi-calendar-heart'     },
  { id: 'youth',     label: 'Youth',        icon: 'bi-stars'              },
  { id: 'community', label: 'Community',    icon: 'bi-people-fill'        },
  { id: 'building',  label: 'Our Building', icon: 'bi-house-heart-fill'   },
];

const photos = [
  // Worship
  { id:  1, src: '/3L8A5447.JPG',                   cat: 'worship',   caption: 'Sunday Morning Worship',          span: 2 },
  { id:  2, src: '/IMG_2924.jpg',                   cat: 'worship',   caption: 'Congregation in Praise',          span: 1 },
  { id:  3, src: '/IMG_6095.jpg',                   cat: 'worship',   caption: 'Wednesday Prayer Service',        span: 1 },
  { id:  4, src: '/IMG_2951.jpg',                   cat: 'worship',   caption: 'Church Service',                  span: 1 },
  { id:  5, src: '/123.jpg',                        cat: 'worship',   caption: "Lord's Supper",                   span: 1 },
  // Events
  { id:  6, src: '/IMG_6083.jpg',                   cat: 'events',    caption: "New Year's Worship Night",        span: 2 },
  { id:  7, src: '/IMG_6078.jpg',                   cat: 'events',    caption: 'Worship Night',                   span: 1 },
  { id:  8, src: '/IMG_6085.jpg',                   cat: 'events',    caption: 'Worship Night Fellowship',        span: 1 },
  { id:  9, src: '/_38B4903.JPG',                   cat: 'events',    caption: 'Marriage Education Seminar',      span: 2 },
  { id: 10, src: '/_38B5258.JPG',                   cat: 'events',    caption: 'Marriage Education — Day 1',      span: 1 },
  { id: 11, src: '/_38B5214.JPG',                   cat: 'events',    caption: 'Marriage Education — Day 2',      span: 1 },
  { id: 12, src: '/_38B5250.JPG',                   cat: 'events',    caption: 'Marriage Education — Day 3',      span: 1 },
  { id: 13, src: '/_38B5340.JPG',                   cat: 'events',    caption: 'Marriage Education Closing',      span: 1 },
  { id: 14, src: '/download (1).jpg',               cat: 'events',    caption: 'Bible Study Gathering',           span: 1 },
  { id: 15, src: '/download (2).jpg',               cat: 'events',    caption: 'Church Fellowship',               span: 1 },
  // Youth
  { id: 16, src: '/Monday.jpg',                     cat: 'youth',     caption: 'Monday Youth Program',            span: 2 },
  { id: 17, src: '/Kids.jpg',                       cat: 'youth',     caption: "Children's Sunday School",        span: 1 },
  // Community
  { id: 18, src: '/ev.jpg',                         cat: 'community', caption: 'Evangelism Outreach',             span: 2 },
  { id: 19, src: '/photo_2025-07-12_13-23-37.jpg',  cat: 'community', caption: 'Deacons Board',                   span: 1 },
  { id: 20, src: '/photo_2025-07-12_13-23-44.jpg',  cat: 'community', caption: 'Church Leadership',               span: 1 },
  { id: 21, src: '/photo_2025-07-12_13-34-39.jpg',  cat: 'community', caption: 'Church Family',                   span: 1 },
  // Building
  { id: 22, src: '/IMG_20170328_104208.jpg',        cat: 'building',  caption: 'Building the Church — 2017',     span: 2 },
  { id: 23, src: '/IMG_20170328_104210.jpg',        cat: 'building',  caption: 'Construction Progress',           span: 1 },
  { id: 24, src: '/IMG_20170328_104219.jpg',        cat: 'building',  caption: 'Construction Team',               span: 1 },
  { id: 25, src: '/IMG_20170328_104234.jpg',        cat: 'building',  caption: 'Building Together in Faith',      span: 1 },
];

const catColor = {
  worship:   '#0d6efd',
  events:    '#dc3545',
  youth:     '#fd7e14',
  community: '#198754',
  building:  '#6f42c1',
};

/* ─── LIGHTBOX ───────────────────────────────────────────────────── */
const Lightbox = ({ items, index, onClose, setIndex }) => {
  const photo = items[index];

  const prev = useCallback(() => setIndex(i => (i - 1 + items.length) % items.length), [items.length, setIndex]);
  const next = useCallback(() => setIndex(i => (i + 1) % items.length), [items.length, setIndex]);

  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.96)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <span style={{ color: '#fff', fontWeight: 600, letterSpacing: 1, fontSize: 13 }}>
          {index + 1} <span style={{ opacity: 0.4 }}>/ {items.length}</span>
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
            width: 40, height: 40, color: '#fff', fontSize: 20, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >×</button>
      </div>

      {/* Prev / Next */}
      {[{ dir: 'prev', fn: prev, style: { left: 16 } }, { dir: 'next', fn: next, style: { right: 16 } }].map(btn => (
        <button
          key={btn.dir}
          onClick={e => { e.stopPropagation(); btn.fn(); }}
          style={{
            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
            ...btn.style,
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50%', width: 52, height: 52, color: '#fff',
            fontSize: 24, cursor: 'pointer', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          {btn.dir === 'prev' ? '‹' : '›'}
        </button>
      ))}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: '88vw', maxHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            style={{
              maxWidth: '100%', maxHeight: '72vh',
              objectFit: 'contain', borderRadius: 10,
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Bottom caption */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '24px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <p style={{ color: '#fff', margin: 0, fontWeight: 500, fontSize: 16 }}>{photo.caption}</p>
        <span
          style={{
            display: 'inline-block', marginTop: 6,
            padding: '2px 12px', borderRadius: 20,
            backgroundColor: catColor[photo.cat] + 'cc',
            color: '#fff', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1,
          }}
        >
          {photo.cat}
        </span>
      </div>

      {/* Thumbnail strip */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute', bottom: 72,
          display: 'flex', gap: 6, overflowX: 'auto',
          padding: '0 24px', maxWidth: '90vw',
        }}
      >
        {items.map((p, i) => (
          <motion.img
            key={p.id}
            src={p.src}
            alt={p.caption}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.1 }}
            style={{
              width: 52, height: 38, objectFit: 'cover', borderRadius: 5,
              cursor: 'pointer', flexShrink: 0,
              border: i === index ? `2px solid ${catColor[p.cat]}` : '2px solid transparent',
              opacity: i === index ? 1 : 0.5,
              transition: 'opacity 0.2s',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ─── MAIN PAGE ───────────────────────────────────────────────────── */
const Gallery = () => {
  const [activeCat, setActiveCat]     = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeCat === 'all' ? photos : photos.filter(p => p.cat === activeCat);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a1a 0%, #111827 60%, #1a0a2e 100%)',
        paddingTop: 110, paddingBottom: 64, textAlign: 'center',
      }}>
        {/* Floating decorative dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
            style={{
              position: 'absolute',
              width: 6 + i * 3, height: 6 + i * 3, borderRadius: '50%',
              backgroundColor: Object.values(catColor)[i % 5],
              left: `${10 + i * 15}%`, top: `${60 + (i % 3) * 20}px`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ color: '#0d6efd', fontWeight: 700, letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
            Gospel Light International Church
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 12px' }}>
            Our Photo Gallery
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, marginBottom: 0 }}>
            {photos.length} moments of faith, fellowship & love
          </p>
        </motion.div>
      </div>

      {/* ── Category Pills ── */}
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #e9ecef', position: 'sticky', top: 64, zIndex: 100 }}>
        <Container>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '14px 0', scrollbarWidth: 'none' }}>
            {categories.map(cat => {
              const count = cat.id === 'all' ? photos.length : photos.filter(p => p.cat === cat.id).length;
              const active = activeCat === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 18px', borderRadius: 999, border: 'none', cursor: 'pointer',
                    fontWeight: 600, fontSize: 14, transition: 'all 0.2s',
                    background: active ? '#0d6efd' : '#fff',
                    color: active ? '#fff' : '#495057',
                    boxShadow: active ? '0 4px 16px rgba(13,110,253,0.3)' : '0 1px 4px rgba(0,0,0,0.08)',
                  }}
                >
                  <i className={`bi ${cat.icon}`} style={{ fontSize: 13 }} />
                  {cat.label}
                  <span style={{
                    padding: '1px 7px', borderRadius: 99, fontSize: 11,
                    background: active ? 'rgba(255,255,255,0.25)' : '#e9ecef',
                    color: active ? '#fff' : '#6c757d',
                  }}>
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── Masonry Grid ── */}
      <Container className="py-5">
        <motion.div
          layout
          style={{
            columns: 'var(--col-count)',
            columnGap: 14,
            '--col-count': '4',
          }}
          className="gallery-columns"
        >
          <style>{`
            .gallery-columns { --col-count: 4; }
            @media (max-width: 992px) { .gallery-columns { --col-count: 3; } }
            @media (max-width: 640px) { .gallery-columns { --col-count: 2; } }
          `}</style>

          <AnimatePresence>
            {filtered.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3, delay: idx * 0.025 }}
                style={{ breakInside: 'avoid', marginBottom: 14, cursor: 'pointer', position: 'relative' }}
                onClick={() => setLightboxIdx(idx)}
              >
                <motion.div
                  whileHover="hover"
                  style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                  />

                  {/* Hover overlay */}
                  <motion.div
                    variants={{
                      hover: { opacity: 1 },
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: 14,
                    }}
                  >
                    {/* Zoom icon */}
                    <motion.div
                      variants={{ hover: { opacity: 1, y: 0 } }}
                      initial={{ opacity: 0, y: -10 }}
                      style={{
                        position: 'absolute', top: 12, right: 12,
                        width: 34, height: 34, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontSize: 15,
                      }}
                    >
                      <i className="bi bi-zoom-in" />
                    </motion.div>

                    <motion.div
                      variants={{ hover: { opacity: 1, y: 0 } }}
                      initial={{ opacity: 0, y: 8 }}
                      transition={{ delay: 0.05 }}
                    >
                      <span style={{
                        display: 'inline-block', marginBottom: 4,
                        padding: '2px 8px', borderRadius: 20,
                        fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
                        backgroundColor: catColor[photo.cat],
                        color: '#fff',
                      }}>
                        {photo.cat}
                      </span>
                      <p style={{ color: '#fff', margin: 0, fontWeight: 600, fontSize: 13, lineHeight: 1.3 }}>
                        {photo.caption}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-5 text-muted">
            <i className="bi bi-images fs-1 d-block mb-3 opacity-25"></i>
            <p>No photos in this category yet.</p>
          </div>
        )}
      </Container>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            setIndex={setLightboxIdx}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;