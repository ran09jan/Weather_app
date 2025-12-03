# 🌤️ Weather App

A modern, responsive weather application built with React.js that provides current weather information for any city worldwide.

## Features

- 🌍 **Global Weather Data**: Get weather information for any city around the world
- 🎨 **Modern UI**: Beautiful, glassmorphism design with smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Real-time Data**: Fetches current weather data from WeatherAPI
- 🔍 **Smart Search**: Easy-to-use search functionality with autocomplete
- 📊 **Detailed Information**: Temperature, humidity, wind speed, pressure, and visibility
- 🌟 **Weather Icons**: Dynamic emoji-based weather icons
- ⏰ **Live Time & Date**: Shows current date and time
- 🎯 **Activity Suggestions**: Smart recommendations based on current weather conditions

## Demo

The app displays:
- Current temperature with "feels like" temperature
- Weather description and conditions
- Humidity, wind speed, atmospheric pressure
- Visibility information
- Dynamic weather icons based on conditions
- Beautiful gradient backgrounds
- **Smart activity suggestions** based on weather (e.g., beach day for sunny weather, cozy indoor activities for rain)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.0 or higher)
- npm (usually comes with Node.js)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get WeatherAPI Key

1. Visit [WeatherAPI](https://www.weatherapi.com/)
2. Create a free account
3. Go to your dashboard to find your API key
4. The free plan includes 1 million API calls per month

### 3. Configure API Key

1. Open `src/App.js`
2. Find the line: `const API_KEY = '15e273246d0a465790c61136253007';`
3. Replace the existing key with your actual API key from WeatherAPI

Example:
```javascript
const API_KEY = 'abcd1234efgh5678ijkl9012mnop3456';
```

### 4. Start the Development Server

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Usage

1. **Search for a City**: Type any city name in the search bar and press Enter or click the search button
2. **View Weather Data**: The app will display current weather information including:
   - Temperature and "feels like" temperature
   - Weather conditions with appropriate emoji icons
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure
   - Visibility distance
3. **Get Activity Suggestions**: Below the weather data, you'll see personalized activity recommendations based on current conditions:
   - ☀️ **Sunny**: Beach, hiking, BBQ, outdoor sports
   - 🌧️ **Rainy**: Movie marathons, baking, indoor crafts, board games
   - ❄️ **Snowy**: Skiing, ice skating, hot chocolate, cozy fireplace
   - 🌡️ **Hot/Cold**: Temperature-specific suggestions for comfort

## Technologies Used

- **React.js**: Frontend library for building user interfaces
- **Axios**: HTTP client for making API requests
- **CSS3**: Modern styling with glassmorphism effects
- **WeatherAPI**: Weather data provider
- **Google Fonts (Inter)**: Typography

## Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Weather.js
│   │   ├── Weather.css
│   │   ├── SearchBar.js
│   │   ├── SearchBar.css
│   │   ├── Activities.js
│   │   └── Activities.css
│   ├── data/
│   │   ├── cities.js
│   │   └── activities.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## Customization

### Changing Default City
To change the default city that loads when the app starts:
1. Open `src/App.js`
2. Modify the line: `const [city, setCity] = useState('Bhubaneswar');`
3. Replace `'Bhubaneswar'` with your preferred city

### Styling
The app uses CSS modules and custom properties. You can customize:
- Colors and gradients in the CSS files
- Weather icons in `src/components/Weather.js`
- Layout and spacing in the respective CSS files

## API Information

This app uses the WeatherAPI Current Weather Data API:
- **Endpoint**: `http://api.weatherapi.com/v1/current.json`
- **Parameters**: 
  - `q`: City name
  - `key`: Your API key
  - `aqi`: Air quality data (set to 'no' for basic plan)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Troubleshooting

### Common Issues

1. **"Invalid API key" or "API key quota exceeded"**
   - Make sure you've added your correct WeatherAPI key to `src/App.js`
   - Check if you've exceeded your free plan limit (1M calls/month)
   - Ensure the API key is active in your WeatherAPI dashboard

2. **"City not found"**
   - Check the spelling of the city name
   - Try searching with country name (e.g., "Paris, FR")

3. **App not loading**
   - Make sure Node.js is installed
   - Run `npm install` to install dependencies
   - Check console for error messages

## Support

If you encounter any issues or have questions, please check the troubleshooting section above or create an issue in the repository.

---

Enjoy using your weather app! 🌤️ 