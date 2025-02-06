
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Destinova</h2>
      <div className="features-grid">
        <div className="feature-card">
          <i className="feature-icon">🎯</i>
          <h3>Personalized Recommendations</h3>
          <p>Get tailored destination suggestions based on your preferences and travel style.</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">💰</i>
          <h3>Budget Friendly</h3>
          <p>Find perfect destinations that match your budget and travel requirements.</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">🌟</i>
          <h3>Curated Experiences</h3>
          <p>Discover unique experiences and hidden gems at every destination.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;