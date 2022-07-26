import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/search";
import {OPEN_WEATHER_API_KEY, OPEN_WEARTHER_API_URL, OPEN_WEATHER_FORECAST_API_URL} from "./api/api";
import React, { useState } from "react";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({})
  const [selectedForecast, setSelectedForecast] = useState({})

  const handleOnSearchChange = (selectedCity) => {
    const [latitude, longitude] = selectedCity.value.split(" ");

    let currentWeatherFetch = fetch(`${OPEN_WEARTHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`).then((response => {
      return response.json().then(jsonReponse => {
        console.log("currentWeather", jsonReponse);
        setSelectedLocation(jsonReponse);
      })
    }));

    let forecastFetch = fetch(`${OPEN_WEATHER_FORECAST_API_URL}&lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`).then((response => {
      return response.json().then(jsonReponse => {
        console.log("currentForecast", jsonReponse);
        setSelectedForecast(jsonReponse);
      })
    }));


  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather selectedLocation={selectedLocation}></CurrentWeather>
    </div>
  );
}

export default App;
