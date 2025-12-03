import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import './RecentSearches.css';

const RecentSearches = forwardRef(({ onCitySelect }, ref) => {
  const [recentCities, setRecentCities] = useState([]);
  const [clickingCity, setClickingCity] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('recentWeatherSearches');
    if (stored) {
      const storedCities = JSON.parse(stored);
      setRecentCities(storedCities);
    }
  }, []);

  const addToRecentSearches = (city) => {
    const updatedCities = [
      city,
      ...recentCities.filter(c => c.toLowerCase() !== city.toLowerCase())
    ]; // Removed the slice limit - keep all searches
    
    setRecentCities(updatedCities);
    localStorage.setItem('recentWeatherSearches', JSON.stringify(updatedCities));
  };

  const forceRefresh = () => {
    const stored = localStorage.getItem('recentWeatherSearches');
    if (stored) {
      try {
        const storedCities = JSON.parse(stored);
        setRecentCities(storedCities);
      } catch (e) {
        console.error('Error parsing localStorage during force refresh:', e);
        setRecentCities([]);
      }
    } else {
      setRecentCities([]);
    }
  };

  // Expose functions to parent component
  useImperativeHandle(ref, () => ({
    addToRecentSearches,
    forceRefresh
  }));

  const handleCityClick = async (city) => {
    if (!city || clickingCity) return;
    
    setClickingCity(city);
    
    try {
      await onCitySelect(city);
    } finally {
      setClickingCity(null);
    }
  };

  const clearRecentSearches = () => {
    setRecentCities([]);
    localStorage.removeItem('recentWeatherSearches');
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  if (recentCities.length === 0) {
    return (
      <div className="recent-searches-card">
        <div className="recent-searches-header">
          <h4>🕒 Recent Searches</h4>
          <p>Your recent city searches will appear here</p>
        </div>
        <div className="no-recent-searches">
          <span className="search-icon">🔍</span>
          <p>Start searching for cities to see them here!</p>
        </div>
      </div>
    );
  }

  // Determine how many cities to show
  const citiesToShow = showAll ? recentCities : recentCities.slice(0, 8);
  const hasMore = recentCities.length > 8;

  return (
    <div className="recent-searches-card">
      <div className="recent-searches-header">
        <div className="header-content">
          <h4>🕒 Recent Searches</h4>
          <span className="search-count">({recentCities.length} cities)</span>
        </div>
        <button 
          className="clear-button"
          onClick={clearRecentSearches}
          title="Clear all recent searches"
          disabled={clickingCity}
        >
          🗑️
        </button>
      </div>
      
      <div className={`recent-cities-list ${showAll ? 'expanded' : ''}`}>
        {citiesToShow.map((city, index) => (
          <div
            key={`${city}-${index}`}
            className={`recent-city-item ${clickingCity === city ? 'clicking' : ''} ${clickingCity && clickingCity !== city ? 'disabled' : ''}`}
            onClick={() => handleCityClick(city)}
          >
            <span className="city-icon">📍</span>
            <span className="city-name">{city}</span>
            <span className="search-index">#{index + 1}</span>
            <span className="quick-access">
              {clickingCity === city ? '⏳' : '→'}
            </span>
            <div className="click-overlay">
              <span className="click-text">Click to view weather</span>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="show-more-section">
          <button 
            className="show-more-button"
            onClick={toggleShowAll}
            disabled={clickingCity}
          >
            {showAll ? (
              <>
                <span className="button-icon">📁</span>
                <span className="button-text">Show Less</span>
                <span className="button-arrow">⬆️</span>
              </>
            ) : (
              <>
                <span className="button-icon">📂</span>
                <span className="button-text">Show All ({recentCities.length - 8} more)</span>
                <span className="button-arrow">⬇️</span>
              </>
            )}
          </button>
        </div>
      )}

      {recentCities.length > 0 && (
        <div className="search-stats">
          <span className="stats-text">
            Total searches: {recentCities.length} | 
            Latest: {recentCities[0]}
          </span>
        </div>
      )}
    </div>
  );
});

RecentSearches.displayName = 'RecentSearches';

export default RecentSearches; 