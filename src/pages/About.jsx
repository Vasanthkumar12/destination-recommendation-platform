// About.jsx
import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('appear');
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Destinova</h1>
        <p>Your Journey Begins Here</p>
      </div>

      <section className="about-mission fade-in">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>At Destinova, we believe every journey tells a story. Our mission is to help you discover destinations that match your dreams, making travel planning an exciting adventure rather than a daunting task.</p>
        </div>
      </section>

      <section className="about-features">
        <div className="feature-box fade-in">
          <div className="feature-icon">🎯</div>
          <h3>Smart Matching</h3>
          <p>Our intelligent system matches you with destinations that fit your preferences perfectly.</p>
        </div>
        <div className="feature-box fade-in">
          <div className="feature-icon">🌟</div>
          <h3>Expert Insights</h3>
          <p>Get recommendations from travel experts and discover hidden gems.</p>
        </div>
        <div className="feature-box fade-in">
          <div className="feature-icon">💡</div>
          <h3>Easy Planning</h3>
          <p>Simple and intuitive tools to plan your perfect trip.</p>
        </div>
      </section>

      <section className="about-numbers fade-in">
        <div className="number-box">
          <h3>50,000+</h3>
          <p>Happy Travelers</p>
        </div>
        <div className="number-box">
          <h3>1,000+</h3>
          <p>Destinations</p>
        </div>
        <div className="number-box">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </section>

      <section className="about-team fade-in">
        <h2>Our Team</h2>
        <p>We're a passionate group of travelers and tech enthusiasts dedicated to making your travel dreams come true. Our diverse team brings together expertise in travel, technology, and customer service.</p>
      </section>
    </div>
  );
};

export default About;