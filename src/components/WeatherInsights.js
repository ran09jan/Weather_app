import React, { useState, useEffect } from 'react';
import './WeatherInsights.css';

const WeatherInsights = ({ weatherData }) => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    if (weatherData) {
      const generatedInsights = generateInsights(weatherData);
      setInsights(generatedInsights);
      setCurrentInsight(0);
    }
  }, [weatherData]);

  useEffect(() => {
    if (insights.length > 1) {
      const interval = setInterval(() => {
        setCurrentInsight(prev => (prev + 1) % insights.length);
      }, 5000); // Change insight every 5 seconds

      return () => clearInterval(interval);
    }
  }, [insights.length]);

  const generateInsights = (data) => {
    const { current, location } = data;
    const temp = current.temp_c;
    const humidity = current.humidity;
    const windSpeed = current.wind_kph;
    const condition = current.condition.text.toLowerCase();
    const insights = [];

    // Weather-related inspirational quotes
    const weatherQuotes = [
      {
        icon: '☀️',
        title: 'Sunshine Quote',
        text: '"Keep your face always toward the sunshine—and shadows will fall behind you." - Walt Whitman',
        type: 'quote'
      },
      {
        icon: '🌧️',
        title: 'Rain Wisdom',
        text: '"Life isn\'t about waiting for the storm to pass, it\'s about learning to dance in the rain." - Vivian Greene',
        type: 'quote'
      },
      {
        icon: '🌈',
        title: 'Rainbow Hope',
        text: '"After every storm, there is a rainbow. If you have not seen it, you have not looked." - Maya Angelou',
        type: 'quote'
      },
      {
        icon: '❄️',
        title: 'Winter Beauty',
        text: '"In the depth of winter, I finally learned that there was in me an invincible summer." - Albert Camus',
        type: 'quote'
      },
      {
        icon: '🌸',
        title: 'Spring Inspiration',
        text: '"No winter lasts forever; no spring skips its turn." - Hal Borland',
        type: 'quote'
      },
      {
        icon: '🌪️',
        title: 'Storm Strength',
        text: '"You can\'t calm the storm, so stop trying. What you can do is calm yourself. The storm will pass." - Timber Hawkeye',
        type: 'quote'
      },
      {
        icon: '🌅',
        title: 'New Day',
        text: '"Every sunrise is an invitation to brighten someone\'s day." - Richelle E. Goodrich',
        type: 'quote'
      },
      {
        icon: '💨',
        title: 'Wind Wisdom',
        text: '"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails." - William Arthur Ward',
        type: 'quote'
      },
      {
        icon: '🌺',
        title: 'Nature\'s Beauty',
        text: '"In every walk with nature, one receives far more than they seek." - John Muir',
        type: 'quote'
      },
      {
        icon: '⛅',
        title: 'Cloud Perspective',
        text: '"Try to be a rainbow in someone\'s cloud." - Maya Angelou',
        type: 'quote'
      }
    ];

    // Temperature insights
    if (temp > 30) {
      insights.push({
        icon: '🌡️',
        title: 'Hot Weather Alert',
        text: 'Stay hydrated! Drink water every 15-20 minutes when outdoors.',
        type: 'warning'
      });
    } else if (temp < 5) {
      insights.push({
        icon: '🥶',
        title: 'Cold Weather Tip',
        text: 'Layer your clothing to trap warm air and stay comfortable.',
        type: 'info'
      });
    }

    // Humidity insights
    if (humidity > 80) {
      insights.push({
        icon: '💧',
        title: 'High Humidity',
        text: 'It may feel warmer than it is. Light, breathable fabrics recommended.',
        type: 'info'
      });
    } else if (humidity < 30) {
      insights.push({
        icon: '🏜️',
        title: 'Low Humidity',
        text: 'Use moisturizer and stay hydrated. Consider a humidifier indoors.',
        type: 'tip'
      });
    }

    // Wind insights
    if (windSpeed > 20) {
      insights.push({
        icon: '💨',
        title: 'Windy Conditions',
        text: 'Secure loose items outdoors. Great day for kite flying!',
        type: 'warning'
      });
    }

    // Weather condition insights with matching quotes
    if (condition.includes('rain')) {
      insights.push({
        icon: '☔',
        title: 'Rainy Day Benefits',
        text: 'Perfect time for indoor hobbies and cozy activities!',
        type: 'positive'
      });
      // Add rain quote
      insights.push(weatherQuotes[1]);
    } else if (condition.includes('sunny') || condition.includes('clear')) {
      insights.push({
        icon: '☀️',
        title: 'Sunny Day Benefits',
        text: 'Great for vitamin D synthesis! Spend 10-15 minutes outdoors.',
        type: 'positive'
      });
      // Add sunshine quote
      insights.push(weatherQuotes[0]);
    } else if (condition.includes('cloud')) {
      insights.push(weatherQuotes[9]); // Cloud perspective quote
    } else if (condition.includes('snow')) {
      insights.push(weatherQuotes[3]); // Winter beauty quote
    }

    // Fun facts
    const funFacts = [
      {
        icon: '🌍',
        title: 'Weather Fact',
        text: `${location.name} is experiencing ${getSeasonByMonth()} season right now!`,
        type: 'fact'
      },
      {
        icon: '⚡',
        title: 'Did You Know?',
        text: 'Lightning strikes the Earth about 100 times every second!',
        type: 'fact'
      },
      {
        icon: '❄️',
        title: 'Cool Fact',
        text: 'No two snowflakes are exactly alike due to unique formation conditions.',
        type: 'fact'
      },
      {
        icon: '🌈',
        title: 'Rainbow Science',
        text: 'Rainbows always appear opposite to the sun and are perfect circles from above!',
        type: 'fact'
      },
      {
        icon: '🌪️',
        title: 'Tornado Fact',
        text: 'Tornadoes can have wind speeds of over 300 mph and can lift entire buildings!',
        type: 'fact'
      }
    ];

    // Always add at least one quote and one fact
    if (insights.length < 3) {
      // Add a random quote if we don't have enough insights
      const randomQuote = weatherQuotes[Math.floor(Math.random() * weatherQuotes.length)];
      insights.push(randomQuote);
    }

    // Add a random fun fact
    insights.push(funFacts[Math.floor(Math.random() * funFacts.length)]);

    // Add another random quote for variety
    const secondQuote = weatherQuotes[Math.floor(Math.random() * weatherQuotes.length)];
    if (!insights.some(insight => insight.text === secondQuote.text)) {
      insights.push(secondQuote);
    }

    // Ensure we always have at least one insight
    if (insights.length === 0) {
      insights.push({
        icon: '🌤️',
        title: 'Perfect Weather',
        text: 'Enjoy this beautiful day! Perfect time for outdoor activities.',
        type: 'positive'
      });
      insights.push(weatherQuotes[0]); // Add sunshine quote as default
    }

    return insights;
  };

  const getSeasonByMonth = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'Spring';
    if (month >= 5 && month <= 7) return 'Summer';
    if (month >= 8 && month <= 10) return 'Autumn';
    return 'Winter';
  };

  const handleDotClick = (index) => {
    setCurrentInsight(index);
  };

  // Show loading only if we don't have weather data
  if (!weatherData) {
    return (
      <div className="weather-insights-card">
        <div className="insights-header">
          <h4>💡 Weather Insights</h4>
        </div>
        <div className="no-insights">
          <span className="bulb-icon">💡</span>
          <p>Loading weather insights...</p>
        </div>
      </div>
    );
  }

  // If we have weatherData but no insights yet, show a temporary message
  if (insights.length === 0) {
    return (
      <div className="weather-insights-card">
        <div className="insights-header">
          <h4>💡 Weather Insights</h4>
        </div>
        <div className="insight-content positive">
          <div className="insight-icon">🌤️</div>
          <div className="insight-text">
            <h5>Perfect Weather</h5>
            <p>Enjoy this beautiful day! Perfect time for outdoor activities.</p>
          </div>
        </div>
      </div>
    );
  }

  const insight = insights[currentInsight];

  return (
    <div className="weather-insights-card">
      <div className="insights-header">
        <h4>💡 Weather Insights</h4>
        {insights.length > 1 && (
          <div className="insight-navigation">
            {insights.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentInsight ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className={`insight-content ${insight.type}`}>
        <div className="insight-icon">{insight.icon}</div>
        <div className="insight-text">
          <h5>{insight.title}</h5>
          <p>{insight.text}</p>
        </div>
      </div>

      {insights.length > 1 && (
        <div className="insight-progress">
          <div 
            className="progress-bar"
            style={{ 
              animation: `progress 5s linear infinite`,
              animationDelay: currentInsight === 0 ? '0s' : '0s'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherInsights; 