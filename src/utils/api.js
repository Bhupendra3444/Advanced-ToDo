const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city = "Delhi") => {
  try {
    const response = await fetch(`${WEATHER_API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return {
      temp: data.main.temp,
      condition: data.weather[0].description,
    };
  } catch (error) {
    throw error;
  }
};
