import React from "react";
import { NavBar } from "../common/NavBar";
import "../styles/About.css";
import survey from "../assets/survey.jpg";
import social from "../assets/social.png";
import reviews from "../assets/reviews.png";
import recommendation from "../assets/recommendation.png";
import map from "../assets/map.png";
import itinerary from "../assets/itinerary.png";

export const About = () => {
  return (
    <div>
      <div style = {{backgroundColor: 'white',position: 'sticky', top: "0px",boxShadow: "0px 5px 15px grey"}}>
        <NavBar/>
      </div> 
      <div className="about-container">
        <div className="about-hero">
          <h1>Discover. Plan. Explore.</h1>
          <p>Your personalized travel guide to the world!</p>
        </div>

        <div className="about-content">
          <h2>Why Choose Us?</h2>
          <p>
            With countless destinations to explore, choosing the right place can be overwhelming.
            Our <span className="highlight">Destination Recommendation Platform</span> simplifies your travel planning, offering tailor-made suggestions based on your preferences.
          </p>

          <div className="features-container">
            <div className="feature">
              <img src={ survey } alt="Survey Icon" />
              <h3>User Preference Survey</h3>
              <p>Interactive questionnaires help us understand your travel style.</p>
            </div>

            <div className="feature">
              <img src= { recommendation } alt="Recommendation Icon" />
              <h3>Smart Recommendations</h3>
              <p>AI-driven insights provide destinations that match your interests.</p>
            </div>

            <div className="feature">
              <img src= { map } alt="Map Icon" />
              <h3>Interactive Destination Map</h3>
              <p>Explore recommended places with an intuitive map interface.</p>
            </div>

            <div className="feature">
              <img src= { reviews } alt="Reviews Icon" />
              <h3>Traveler Reviews & Ratings</h3>
              <p>Read real experiences from fellow travelers before making a choice.</p>
            </div>

            <div className="feature">
              <img src= { itinerary } alt="Itinerary Icon" />
              <h3>Custom Itineraries</h3>
              <p>Plan and organize your travel schedules effortlessly.</p>
            </div>

            <div className="feature">
              <img src= { social } alt="Social Share Icon" />
              <h3>Social Sharing</h3>
              <p>Share your favorite trips with friends and family.</p>
            </div>
          </div>

          <p className="cta-text">
            <span className="highlight">Join us</span> on an adventure and explore the world, one destination at a time! 🌍✈️
          </p>
        </div>
      </div>
    </div>
  );
};
