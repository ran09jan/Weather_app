import React, { useState } from 'react';
import { getSuggestedActivities } from '../data/activities';
import './Activities.css';

const Activities = ({ weatherData }) => {
  const [showAll, setShowAll] = useState(false);
  
  if (!weatherData) return null;

  const activitySuggestions = getSuggestedActivities(weatherData);
  const displayedActivities = showAll 
    ? activitySuggestions.activities 
    : activitySuggestions.activities.slice(0, 6);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const handleLinkClick = (url, event) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const generateGoogleMapsLink = (activityName, cityName) => {
    // Create search query for Google Maps
    const searchQuery = `${activityName} near ${cityName}`;
    const encodedQuery = encodeURIComponent(searchQuery);
    return `https://www.google.com/maps/search/${encodedQuery}`;
  };

  const handleGoogleMapsClick = (activityName, event) => {
    event.stopPropagation();
    const city = weatherData.location.name;
    const mapsUrl = generateGoogleMapsLink(activityName, city);
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="activities-card">
      <div className="activities-header">
        <div className="activities-title">
          <span className="activities-icon">{activitySuggestions.icon}</span>
          <h3>{activitySuggestions.title}</h3>
        </div>
        <p className="activities-subtitle">
          Perfect activities for today's weather
        </p>
      </div>

      <div className="activities-grid">
        {displayedActivities.map((activity, index) => (
          <div key={`${activity.name}-${index}`} className="activity-item">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <div className="activity-header">
                <h4 className="activity-name">{activity.name}</h4>
                <button
                  className="google-maps-btn"
                  onClick={(e) => handleGoogleMapsClick(activity.name, e)}
                  title={`Find ${activity.name} locations near ${weatherData.location.name}`}
                >
                  <span className="maps-icon">📍</span>
                  <span className="maps-text">Near Me</span>
                </button>
              </div>
              <p className="activity-description">{activity.description}</p>
              
              {activity.links && activity.links.length > 0 && (
                <div className="activity-links">
                  {activity.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      className="activity-link"
                      onClick={(e) => handleLinkClick(link.url, e)}
                      title={`Open ${link.text} in new tab`}
                    >
                      <span className="link-icon">🔗</span>
                      <span className="link-text">{link.text}</span>
                      <span className="external-icon">↗</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {activitySuggestions.activities.length > 6 && (
        <div className="activities-toggle">
          <button 
            className="toggle-button"
            onClick={handleToggleShow}
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <span className="toggle-icon">▲</span>
              </>
            ) : (
              <>
                <span>Show More Activities</span>
                <span className="toggle-icon">▼</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Activities; 