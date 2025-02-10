# Project Title
Destinova

## Introduction
Destinova is a smart destination recommendation platform designed to help users discover the best travel destinations based on their preferences, interests, and budget. Using advanced algorithms and real-time data, Destinova provides personalized travel suggestions, highlights must-visit attractions, and offers insights on accommodations, local experiences, and travel tips. Whether you're looking for a relaxing beach getaway, an adventurous hiking trip, or a cultural city tour, Destinova ensures a seamless and tailored travel planning experience.

## Project Type 
Fullstack

## Deployed App
Frontend: https://destinova.netlify.app/
Backend: https://destinova.netlify.app/
Database: https://states-c4c13-default-rtdb.firebaseio.com

## Directory Structure
Destinova/
│── backend/                   # Backend (Node.js, Express, MongoDB)
│   ├── config/                # Database and environment configurations
│   │   ├── db.js              # MongoDB connection setup
│   │   ├── dotenv.js          # Environment variables setup
│   ├── controllers/           # Controllers (business logic)
│   │   ├── destinationController.js  
│   │   ├── userController.js  
│   │   ├── authController.js  
│   ├── models/                # Mongoose models
│   │   ├── Destination.js  
│   │   ├── User.js  
│   ├── routes/                # Express routes
│   │   ├── destinationRoutes.js  
│   │   ├── userRoutes.js  
│   ├── middleware/            # Middleware (authentication, error handling)
│   │   ├── authMiddleware.js  
│   │   ├── errorMiddleware.js  
│   ├── utils/                 # Utility functions
│   │   ├── generateToken.js  
│   ├── server.js              # Main backend entry point
│   ├── package.json           # Backend dependencies
│
│── frontend/                  # Frontend (React.js)
│   ├── public/                # Static assets
│   │   ├── index.html  
│   │   ├── favicon.ico  
│   ├── src/                   # Source code
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.js  
│   │   │   ├── Footer.js  
│   │   ├── pages/             # Page components
│   │   │   ├── Home.js  
│   │   │   ├── DestinationDetails.js  
│   │   │   ├── SearchResults.js  
│   │   ├── hooks/             # Custom hooks
│   │   ├── context/           # Context API for state management
│   │   ├── services/          # API calls (Axios)
│   │   │   ├── destinationService.js  
│   │   ├── App.js             # Main App component
│   │   ├── index.js           # React entry point
│   │   ├── styles.css         # Global styles
│   ├── package.json           # Frontend dependencies
│
│── .env                       # Environment variables
│── .gitignore                 # Git ignore file
│── README.md                  # Documentation

## Video Walkthrough of the project

## Features
1. Personalized Destination Recommendations:
- Uses AI-driven algorithms to suggest travel destinations based on user preferences (budget, interests, weather, travel history).
- Allows users to filter recommendations by category (beach, adventure, cultural, etc.).
- Provides real-time insights on trending destinations.
2️. Interactive Destination Explorer
- Displays detailed information about destinations (weather, attractions, hotels, travel tips).
-Integrates an interactive map view for better exploration.
-Includes user-generated reviews and ratings for authentic recommendations.
3️. Smart Travel Planner
- Allows users to create and customize their travel itinerary.
- Offers budget planning with estimated costs for flights, accommodations, and activities.
- Integrates with Google Maps & APIs for route planning.

## Usage
step 1: Go to this url https://destinova.netlify.app/
step 2: Click the register to see the ideal destinations button
step 3: Provide your credentials to register and sign in with valid credentials
step 4: Then after successful signed in you can click the Go To Home link to move to the Home page 
step 5: Choose any state from the dropdown and click find ideal destinations button 
step 6: Then you can see the ideal destinations in that selected state
step 7: Then you can filter the places to usin gthe filters baced on your preferences.

## API Endpoints
GET /states - to fetch the ideal destinations in that selected state

## Technology Stack
We have been used the following tech stacks in our project
- HTML
- CSS
- JavaScript
- React
- Firebase
- Other libraries/modules

