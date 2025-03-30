import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';
import './AboutSection.css';

const AboutSection = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <section className="about-section">
      <AnimationWrapper>
        <h2>About Gospel Light Ministries</h2>
        <p className="subtitle">Founded by Pastor Daniel Makonnen</p>
      </AnimationWrapper>

      <div className="content-grid">
        {/* History Section */}
        <motion.div
          className="history-section"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Our History</h3>
          <div className="section-content">
            <p>
              <strong>Gospel Light Ministries (GLC)</strong> is a God-given vision to Pastor Daniel Makonnen, 
              one of Ethiopia's most respected evangelical ministers. Called at a young age, Pastor Daniel 
              courageously preached during Ethiopia's communist era, sparking a revival marked by supernatural 
              miracles that transformed Ethiopian Christianity.
            </p>

            {!showFullHistory && (
              <button 
                onClick={() => setShowFullHistory(true)} 
                className="learn-more-btn"
              >
                Read Full History ↓
              </button>
            )}

            {showFullHistory && (
              <>
                <h4>The Communist Era Revival</h4>
                <p>
                  During Ethiopia's darkest period, Pastor Daniel publicly preached Christ's healing power to 
                  tens of thousands. The miracles from this revival remain engraved in believers' and 
                  non-believers' memories alike, despite severe communist persecution.
                </p>

                <h4>Ministry in America</h4>
                <p>
                  After coming to the United States, Pastor Daniel became a spiritual father to the Ethiopian 
                  diaspora, particularly in Washington DC. His apostolic ministry continues to impact 
                  generations through his faithful service.
                </p>

                <h4>Current Growth</h4>
                <p>
                  The Gospel Light church in Addis Ababa is among Ethiopia's fastest growing congregations. 
                  GLM produces biblical resources including literature, audio, and video materials to 
                  strengthen believers worldwide.
                </p>

                <button 
                  onClick={() => setShowFullHistory(false)} 
                  className="learn-more-btn"
                >
                  Show Less ↑
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="vision-section"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Our Vision</h3>
          <div className="section-content">
            <h4>Reaching Nations</h4>
            <p>
              To spread the Gospel globally while maintaining our strong impact in Ethiopia and 
              among diaspora communities.
            </p>
            
            <h4>Ministry Goals</h4>
            <ul>
              <li>Community development and job creation</li>
              <li>Bible Schools and vocational training centers</li>
              <li>Medical clinics and HIV/AIDS prevention programs</li>
              <li>Multimedia resources for spiritual growth</li>
              <li>Sustainable development initiatives</li>
            </ul>
            
            <h4>Join Us</h4>
            <p>
              As we prepare for Christ's return, we invite you to partner in this Kingdom work. 
              Pastor Daniel's leadership and GLM's vision continue to impact generations through:
            </p>
            <ul>
              <li>Powerful preaching and teaching</li>
              <li>Published books on discipleship and the Holy Spirit</li>
              <li>Modeling spiritual integrity</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;