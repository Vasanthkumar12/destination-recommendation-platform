import { useState } from 'react';
import './style.css';
const DisplayDestination = ({ onSubmit }) => {
    const [preferences, setPreferences] = useState({
        interests: [],
        budget: 1000,
        travelStyle: '',
        activities: []
    });
    const arr = Array.from({ length: 30 });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setPreferences(prev => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter(item => item !== value)
            }));
        } else {
            setPreferences(prev => ({ ...prev, [name]: value }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(preferences);
    };
    return (
        <div className="main-container">
            <div className="questionnaire-container">
                <h2>Plan Your Perfect Trip</h2>
                <form onSubmit={handleSubmit}>
                    <label>Interests:</label>
                    <div className="checkbox-group">
                        {['Adventure', 'Relaxation', 'Culture', 'Nature', 'Food & Dining'].map((interest) => (
                            <label key={interest}>
                                <input 
                                    type="checkbox" 
                                    name="interests" 
                                    value={interest} 
                                    onChange={handleChange} 
                                />
                                {interest}
                            </label>
                        ))}
                    </div>
                    <label>Budget ($):</label>
                    <input 
                        type="range" 
                        name="budget" 
                        min="500" max="10000" step="500" 
                        value={preferences.budget} 
                        onChange={handleChange} 
                    />
                    <span>{preferences.budget}</span>
                    
                    <label>Preferred Travel Style:</label>
                    <select name="travelStyle" onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="Solo">Solo</option>
                        <option value="Family">Family</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Backpacking">Backpacking</option>
                    </select>
                    <label>Desired Activities:</label>
                    <div className="checkbox-group">
                        {['Sightseeing', 'Outdoor Activities', 'Dining', 'Shopping', 'Nightlife'].map((activity) => (
                            <label key={activity}>
                                <input 
                                    type="checkbox" 
                                    name="activities" 
                                    value={activity} 
                                    onChange={handleChange} 
                                />
                                {activity}
                            </label>
                        ))}
                    </div>
                    <button type="submit">Submit Preferences</button>
                </form>
            </div>
            <div className="destinations-container">
            {arr.map((_, index) => (
                <div key={index} className='child'>
                    <img src="https://dummyimage.com/150x150/000/fff" alt="Destination"/>
                    <h3>Name</h3>
                    <h3>Category</h3>
                    <p>Description</p>
                    <p>Budget</p>
                    <p>Rating</p>
                </div>
            ))}
            </div>
        </div>
    );
};
export default DisplayDestination;