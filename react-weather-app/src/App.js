import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/search";
import {
  OPEN_WEATHER_API_KEY,
  OPEN_WEARTHER_API_URL,
  OPEN_WEATHER_FORECAST_API_URL,
} from "./api/api";
import React, { useState } from "react";

function App() {
  const [selectedLocationWeather, setSelectedLocationWeather] = useState({});
  const [selectedForecast, setSelectedForecast] = useState({});

  const handleOnSearchChange = (selectedCity) => {
    const [latitude, longitude] = selectedCity.value.split(" ");


    let currentWeatherFetch = fetch(
      `${OPEN_WEARTHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    let forecastFetch = fetch(
      `${OPEN_WEATHER_FORECAST_API_URL}&lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (results) => {
      const weatherResponse = await results[0].json();
      const forecastResponse = await results[1].json();

      setSelectedLocationWeather(weatherResponse);
      setSelectedForecast(forecastResponse);
    });
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather selectedLocation={selectedLocationWeather}></CurrentWeather>
    </div>
  );
}

export default App;
