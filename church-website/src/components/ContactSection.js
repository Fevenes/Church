import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <AnimationWrapper>
        <h2>Get In Touch</h2>
      </AnimationWrapper>
      
      <div className="contact-container">
        <AnimationWrapper delay={0.2}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Adama Gendhara, Beside Vera School</p>
            <p><strong>Phone:</strong>+251-994445420</p>
            <p><strong>Email:</strong> </p>
            
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper delay={0.4}>
          <motion.form 
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="submit-button"
            >
              Send Message
            </motion.button>
          </motion.form>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default ContactSection;