import React from 'react';
import './Weather.css';

const Weather = ({ data }) => {
  const {
    location: { name, country },
    current: { 
      temp_c: temp, 
      feelslike_c: feels_like, 
      humidity, 
      pressure_mb: pressure,
      wind_kph,
      vis_km: visibility,
      condition
    }
  } = data;

  const temperature = Math.round(temp);
  const feelsLike = Math.round(feels_like);
  const windSpeed = (wind_kph * 0.277778).toFixed(1); // Convert kph to m/s

  // Function to get weather icon based on condition text
  const getWeatherIcon = (conditionText) => {
    const condition = conditionText.toLowerCase();
    
    if (condition.includes('sunny') || condition.includes('clear')) {
      return '☀️';
    } else if (condition.includes('partly cloudy') || condition.includes('partly')) {
      return '⛅';
    } else if (condition.includes('cloudy') || condition.includes('overcast')) {
      return '☁️';
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
      return '🌧️';
    } else if (condition.includes('snow') || condition.includes('blizzard')) {
      return '❄️';
    } else if (condition.includes('thunder') || condition.includes('storm')) {
      return '⛈️';
    } else if (condition.includes('mist') || condition.includes('fog')) {
      return '🌫️';
    } else {
      return '🌤️';
    }
  };

  // Function to format date
  const getCurrentDate = () => {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
  };

  // Function to format time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location">
          <h2>{name}, {country}</h2>
          <p className="date">{getCurrentDate()}</p>
          <p className="time">{getCurrentTime()}</p>
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <div className="weather-icon">
            {getWeatherIcon(condition.text)}
          </div>
          <div className="temperature">
            <span className="temp-value">{temperature}</span>
            <span className="temp-unit">°C</span>
          </div>
        </div>
        
        <div className="weather-description">
          <h3>{condition.text}</h3>
          <p className="feels-like">Feels like {feelsLike}°C</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-icon">💧</div>
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">💨</div>
          <div className="detail-info">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{windSpeed} m/s</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">🌡️</div>
          <div className="detail-info">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{pressure} mb</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">👁️</div>
          <div className="detail-info">
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{visibility} km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather; 