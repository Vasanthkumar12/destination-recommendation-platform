// Contact.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element) => {
      element.classList.add('appear');
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info slide-in">
          <div className="info-item">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>123 Travel Street, Adventure City, AC 12345</p>
          </div>
          <div className="info-item">
            <div className="info-icon">📞</div>
            <h3>Phone Number</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <div className="info-icon">✉️</div>
            <h3>Email Address</h3>
            <p>info@destinova.com</p>
          </div>
        </div>

        <form className="contact-form slide-in" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {submitted && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;