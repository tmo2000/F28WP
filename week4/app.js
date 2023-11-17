
const apiKey = 'Yf9f065ae45af56e99443d356740f7397'; 
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

// Step 3: Add an event listener to the button
searchButton.addEventListener('click', function () {
    // Step 4: Get the value of the input field
    const city = cityInput.value.trim();

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    // Step 5: Make an HTTP request to OpenWeatherMap API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Step 7: Parse data and update weather info div
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const windSpeed = data.wind.speed;

            weatherInfo.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Description: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            // Step 6: Error handling
            console.error('Error:', error);
            weatherInfo.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        });
});