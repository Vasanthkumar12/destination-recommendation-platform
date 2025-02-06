// Hero.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const dropdownRef = useRef(null);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setIsOpen(false);
  };

  const handleFindDestination = () => {
    if (selectedState) {
      // Add your navigation logic here
      console.log('Selected state:', selectedState);
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Destination</h1>
        <p>Personalized travel recommendations tailored to your preferences and style</p>
        
        <div className="search-container">
          <div className="custom-dropdown" ref={dropdownRef}>
            <button 
              className="dropdown-toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedState || 'Select a State'}
              <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </button>
            
            {isOpen && (
              <div className="dropdown-menu">
                {indianStates.map((state) => (
                  <div
                    key={state}
                    className={`dropdown-item ${selectedState === state ? 'selected' : ''}`}
                    onClick={() => handleStateSelect(state)}
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <button 
            className="find-destination-btn"
            onClick={handleFindDestination}
            // disabled={!selectedState}
          >
            Find Your Destination
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;