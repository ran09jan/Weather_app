import React from 'react';
import './QuickFacts.css';

const QuickFacts = ({ weatherData }) => {
  if (!weatherData) return null;

  const { current, location } = weatherData;

  const getAirQualityStatus = (temp, humidity) => {
    if (humidity < 30) return { status: 'Dry', color: '#ff7675', icon: '🏜️' };
    if (humidity > 70) return { status: 'Humid', color: '#74b9ff', icon: '💧' };
    return { status: 'Comfortable', color: '#00b894', icon: '🌿' };
  };

  const getWindStatus = (windSpeed) => {
    if (windSpeed < 5) return { status: 'Calm', color: '#00b894', icon: '🍃' };
    if (windSpeed < 15) return { status: 'Light Breeze', color: '#74b9ff', icon: '💨' };
    if (windSpeed < 25) return { status: 'Moderate', color: '#fdcb6e', icon: '🌬️' };
    return { status: 'Strong', color: '#ff7675', icon: '💨' };
  };

  const getComfortLevel = (temp, humidity) => {
    const heatIndex = temp + (humidity / 100) * (temp - 14.4);
    if (heatIndex < 18) return { level: 'Cool', color: '#74b9ff', icon: '❄️' };
    if (heatIndex > 32) return { level: 'Hot', color: '#ff7675', icon: '🔥' };
    return { level: 'Comfortable', color: '#00b894', icon: '👌' };
  };

  const getSunInfo = () => {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour >= 6 && hour < 10) {
      return { time: 'Morning', icon: '🌅', message: 'Good morning! Perfect time for outdoor activities.' };
    } else if (hour >= 10 && hour < 17) {
      return { time: 'Daytime', icon: '☀️', message: 'Peak daylight hours. Stay hydrated!' };
    } else if (hour >= 17 && hour < 20) {
      return { time: 'Evening', icon: '🌇', message: 'Beautiful evening time for a walk.' };
    } else {
      return { time: 'Night', icon: '🌙', message: 'Peaceful night. Stay warm and cozy!' };
    }
  };

  const airQuality = getAirQualityStatus(current.temp_c, current.humidity);
  const windStatus = getWindStatus(current.wind_kph);
  const comfort = getComfortLevel(current.temp_c, current.humidity);
  const sunInfo = getSunInfo();

  const facts = [
    {
      label: 'Air Quality',
      value: airQuality.status,
      icon: airQuality.icon,
      color: airQuality.color,
      detail: `${current.humidity}% humidity`
    },
    {
      label: 'Wind Status',
      value: windStatus.status,
      icon: windStatus.icon,
      color: windStatus.color,
      detail: `${current.wind_kph} km/h`
    },
    {
      label: 'Comfort Level',
      value: comfort.level,
      icon: comfort.icon,
      color: comfort.color,
      detail: `Feels like ${Math.round(current.feelslike_c)}°C`
    },
    {
      label: 'Day Period',
      value: sunInfo.time,
      icon: sunInfo.icon,
      color: '#fdcb6e',
      detail: sunInfo.message
    }
  ];

  return (
    <div className="quick-facts-card">
      <div className="facts-header">
        <h4>⚡ Quick Facts</h4>
        <span className="location-tag">{location.name}</span>
      </div>
      
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div key={index} className="fact-item" style={{ '--accent-color': fact.color }}>
            <div className="fact-icon">{fact.icon}</div>
            <div className="fact-content">
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
              <div className="fact-detail">{fact.detail}</div>
            </div>
            <div className="fact-accent"></div>
          </div>
        ))}
      </div>

      <div className="weather-summary">
        <div className="summary-icon">🌤️</div>
        <div className="summary-text">
          <h5>Today's Summary</h5>
          <p>
            {current.condition.text} with {Math.round(current.temp_c)}°C. 
            {current.wind_kph > 15 ? ' Windy conditions.' : ' Light winds.'}
            {current.humidity > 70 ? ' High humidity.' : current.humidity < 30 ? ' Low humidity.' : ' Comfortable humidity.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts; 