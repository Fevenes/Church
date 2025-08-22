// pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const samplePosts = [
  {
    id: 1,
    category: "Bible Verse",
    title: "Psalm 23 Reflection",
    date: "Aug 25, 2025",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: "Psalm 23 reminds us that the Lord is our shepherd and we shall not want. Trust Him in every situation. This passage gives comfort and guidance.",
  },
  {
    id: 2,
    category: "Devotional",
    title: "The Power of Prayer",
    date: "Aug 20, 2025",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    content: "Prayer strengthens our faith and helps us overcome obstacles. Make time daily for prayer and reflection. God listens.",
  },
];

const Blog = () => {
  const [translatedPosts, setTranslatedPosts] = useState([]);

  useEffect(() => {
    const translatePosts = async () => {
      const newPosts = await Promise.all(
        samplePosts.map(async (post) => {
          try {
            const resTitle = await axios.post(
              'https://libretranslate.de/translate',
              {
                q: post.title,
                source: 'en',
                target: 'am',
                format: 'text'
              },
              { headers: { 'accept': 'application/json' } }
            );

            const resContent = await axios.post(
              'https://libretranslate.de/translate',
              {
                q: post.content,
                source: 'en',
                target: 'am',
                format: 'text'
              },
              { headers: { 'accept': 'application/json' } }
            );

            return {
              ...post,
              title: resTitle.data.translatedText,
              content: resContent.data.translatedText
            };
          } catch (error) {
            console.error("Translation error:", error);
            return post; // fallback to original if translation fails
          }
        })
      );

      setTranslatedPosts(newPosts);
    };

    translatePosts();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="display-5 text-center mb-4">Devotionals</h2>
      <p className="text-center text-muted mb-5">
        Read inspiring articles, devotionals, and Bible reflections from our church.
      </p>

      <Row className="g-4">
        {(translatedPosts.length ? translatedPosts : samplePosts).map((post) => (
          <Col lg={6} md={12} key={post.id}>
            <Card
              className="h-100 text-white shadow-sm"
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: 'none',
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: '20px',
                }}
              >
                <Card.Subtitle className="mb-2 text-warning fw-bold">{post.category}</Card.Subtitle>
                <Card.Title style={{ color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                  {post.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-light">{post.date}</Card.Subtitle>
                <Card.Text style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                  {post.content}
                </Card.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
