import "./currentWeather.css";

import React from "react";

function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Belgrade</p>
        <p className="weatherDescription">Sunny</p>
      </div>
      <img alt="weather" className="weather-icon" src=""></img>
    </div>
  );
}


export default CurrentWeather;
