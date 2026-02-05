// Seattle coordinates
const SEATTLE_LAT = 47.6062;
const SEATTLE_LON = -122.3321;

// OpenWeather API configuration
// Using a demo API key - in production, this should be stored securely
const API_KEY = 'YOUR_API_KEY_HERE'; // Users need to add their own API key
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${SEATTLE_LAT}&lon=${SEATTLE_LON}&units=imperial&appid=${API_KEY}`;

// Mock data for demo/testing purposes
const MOCK_DATA = {
    main: {
        temp: 52.3,
        humidity: 78
    },
    weather: [{
        description: 'partly cloudy',
        icon: '02d'
    }],
    wind: {
        speed: 8.5
    }
};

// DOM elements
const loading = document.getElementById('loading');
const weatherDisplay = document.getElementById('weatherDisplay');
const error = document.getElementById('error');
const tempElement = document.getElementById('temp');
const conditionElement = document.getElementById('condition');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const weatherIcon = document.getElementById('weatherIcon');
const errorMessage = document.getElementById('errorMessage');
const refreshBtn = document.getElementById('refreshBtn');
const retryBtn = document.getElementById('retryBtn');

// Show/hide different states
function showLoading() {
    loading.style.display = 'block';
    weatherDisplay.style.display = 'none';
    error.style.display = 'none';
}

function showWeather() {
    loading.style.display = 'none';
    weatherDisplay.style.display = 'block';
    error.style.display = 'none';
}

function showError(message) {
    loading.style.display = 'none';
    weatherDisplay.style.display = 'none';
    error.style.display = 'block';
    errorMessage.textContent = message;
}

// Fetch weather data
async function fetchWeather() {
    showLoading();
    
    // Check if API key is set
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        // Use mock data for demo when API key is not configured
        console.log('Using mock data for demo - add your API key for live data');
        setTimeout(() => {
            updateWeatherDisplay(MOCK_DATA);
            showWeather();
        }, 1000); // Simulate network delay
        return;
    }
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        updateWeatherDisplay(data);
        showWeather();
    } catch (err) {
        console.error('Error fetching weather:', err);
        showError('Unable to fetch weather data. Please try again later.');
    }
}

// Update the weather display with fetched data
function updateWeatherDisplay(data) {
    // Temperature
    tempElement.textContent = Math.round(data.main.temp);
    
    // Condition
    conditionElement.textContent = data.weather[0].description;
    
    // Humidity
    humidityElement.textContent = data.main.humidity;
    
    // Wind speed
    windElement.textContent = Math.round(data.wind.speed);
    
    // Weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}

// Event listeners
refreshBtn.addEventListener('click', fetchWeather);
retryBtn.addEventListener('click', fetchWeather);

// Initial load
fetchWeather();
