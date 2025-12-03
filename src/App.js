import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import Activities from './components/Activities';
import RecentSearches from './components/RecentSearches';
import WeatherInsights from './components/WeatherInsights';
import QuickFacts from './components/QuickFacts';

// WeatherAPI configuration - moved outside component
const API_KEY = '15e273246d0a465790c61136253007';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

// Array of Gen Z-style descriptions that change on every search
const descriptions = [
  "Your weather bestie that serves you the hottest forecasts and coolest vibes worldwide! ✨🌍",
  "Spilling the tea on weather conditions globally - no cap! ☕🌦️💯",
  "Delivering weather updates that absolutely slap - periodt! 🌟⚡",
  "Your go-to source for weather intel that hits different! 🔥🌈",
  "Catching all the weather vibes so you don't have to - it's giving main character energy! 💅🌸",
  "Weather forecasts that are straight fire and never miss! 🎯🔥",
  "Bringing you weather content that's chef's kiss perfection! 👨‍🍳💋✨",
  "Your weather plug serving fresh forecasts 24/7 - we stay booked and busy! 📱⭐",
  "Weather updates so good they're lowkey addictive - you've been warned! 😍🌤️",
  "Keeping you weather-informed because we're just built different! 💪🌊",
  "Weather forecasts that understand the assignment every single time! 📝✅",
  "Your weather companion that's always serving looks and forecasts! 💃🌺",
  "Bringing you weather updates that are absolutely sending me! 😂🌩️",
  "Weather intel so accurate it's giving psychic energy! 🔮⛈️",
  "Your daily dose of weather wisdom - because we care about your fits! 👗🌞"
];

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [city, setCity] = useState('Bhubaneswar'); // Default city
  const recentSearchesRef = useRef(null);

  // Get random description - will change when weather data updates
  const [currentDescription, setCurrentDescription] = useState(() => 
    descriptions[Math.floor(Math.random() * descriptions.length)]
  );

  // Update description whenever weather data changes (new city searched)
  useEffect(() => {
    if (weatherData) {
      const newDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
      setCurrentDescription(newDescription);
    }
  }, [weatherData]);

  const fetchWeatherData = useCallback(async (cityName) => {
    if (!cityName) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(
        `${API_URL}?key=${API_KEY}&q=${cityName}&aqi=no`
      );
      setWeatherData(response.data);
      setCity(cityName);
      
      // Add to recent searches
      if (recentSearchesRef.current && recentSearchesRef.current.addToRecentSearches) {
        recentSearchesRef.current.addToRecentSearches(cityName);
      } else {
        // Fallback: directly store in localStorage
        try {
          const stored = localStorage.getItem('recentWeatherSearches');
          const existingSearches = stored ? JSON.parse(stored) : [];
          const updatedSearches = [
            cityName,
            ...existingSearches.filter(c => c.toLowerCase() !== cityName.toLowerCase())
          ];
          localStorage.setItem('recentWeatherSearches', JSON.stringify(updatedSearches));
        } catch (localStorageError) {
          console.error('Error storing to localStorage:', localStorageError);
        }
      }
      
    } catch (err) {
      console.error('Error fetching weather:', err);
      if (err.response && err.response.status === 400) {
        setError('City not found. Please try another city.');
      } else if (err.response && err.response.status === 401) {
        setError('Invalid API key. Please check your WeatherAPI key.');
      } else if (err.response && err.response.status === 403) {
        setError('API key quota exceeded. Please check your WeatherAPI plan.');
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []); // Removed problematic dependencies

  const handleSearch = async (searchCity) => {
    if (searchCity && searchCity.trim()) {
      await fetchWeatherData(searchCity.trim());
    }
  };

  const handleRecentCitySelect = async (cityName) => {
    if (cityName) {
      await fetchWeatherData(cityName);
    }
  };

  useEffect(() => {
    // Initial load
    fetchWeatherData(city);
  }, [fetchWeatherData, city]);

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>🌤️ Weather App</h1>
          <p>{currentDescription}</p>
        </header>
        
        <div className="search-section">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data for {city}...</p>
          </div>
        )}
        
        {error && (
          <div className="error">
            <p>{error}</p>
            <button 
              className="retry-button"
              onClick={() => city && fetchWeatherData(city)}
            >
              Try Again
            </button>
          </div>
        )}
        
        {weatherData && !loading && (
          <div className="main-content">
            <div className="left-panel">
              <Weather data={weatherData} />
            </div>
            
            <div className="right-panel">
              <Activities weatherData={weatherData} />
              <RecentSearches 
                ref={recentSearchesRef}
                onCitySelect={handleRecentCitySelect} 
              />
              <WeatherInsights weatherData={weatherData} />
              <QuickFacts weatherData={weatherData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 