# Seattle Weather App

A simple, clean weather application that displays current weather conditions for Seattle, WA.

## Features

- 🌡️ Real-time temperature display
- ☁️ Current weather conditions with icons
- 💧 Humidity information
- 💨 Wind speed data
- 🔄 Manual refresh functionality
- ⚡ Loading indicators
- ❌ Graceful error handling
- 📱 Mobile-responsive design

## Setup Instructions

1. **Get an API Key**
   - Visit [OpenWeather API](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

2. **Configure the App**
   - Open `app.js`
   - Replace `YOUR_API_KEY_HERE` with your actual OpenWeather API key:
     ```javascript
     const API_KEY = 'your_actual_api_key_here';
     ```

3. **Run the App**
   - Open `index.html` in a web browser
   - Or serve it using a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

## Usage

- The weather data loads automatically when you open the app
- Click the **Refresh** button to update the weather data
- If there's an error, click **Try Again** to retry

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- OpenWeather API

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT