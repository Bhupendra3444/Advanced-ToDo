import React, { useEffect, useState } from "react";
import { fetchWeather } from "../utils/api";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather("Delhi").then(setWeather);
  }, []);

  return (
    <div>
      {weather ? (
        <p>Current Weather: {weather.weather[0].description}</p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Dashboard;
