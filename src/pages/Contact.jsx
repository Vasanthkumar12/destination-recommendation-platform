import React, { useState } from "react";
import { NavBar } from "../common/NavBar";
import "../styles/Contact.css";
import email from "../assets/email.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <NavBar />
      <div className="background-animation"></div> {/* Background Animation */}
      <div className="contact-container">
        <h1 className="fade-in">Contact Us</h1>
        <p className="fade-in">Have questions? Get in touch with us!</p>

        {/* Admin Contact Information with Animation */}
        <div className="contact-info fade-in">
          <div className="info-box bounce">
            <img src= { email } alt="Email Icon" className="icon" />
            <p>Email: <a href="mailto:admin@destination.com">destinovo103@gmail.com</a></p>
          </div>
          <div className="info-box bounce">
            <img src={ phone } alt="Phone Icon" className="icon" />
            <p>Phone: <a href="tel:+1234567890">+91 8220904196</a></p>
          </div>
          <div className="info-box bounce">
            <img src={ location } alt="Location Icon" className="icon" />
            <p>Address: 123 Destination Street, Travel City</p>
          </div>
        </div>

        {/* Contact Form with Animation */}
        <form className="contact-form fade-in" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="glow-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};
