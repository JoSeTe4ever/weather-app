import "./currentWeather.css";

import React from "react";

function CurrentWeather({ selectedLocation }) {

  if (selectedLocation.id) {
    return (
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{selectedLocation.name}</p>
            <p className="weatherDescription">{selectedLocation.weather[0].description}</p>
          </div>

          <img alt="weather" className="weatherIcon" src={`icons/${selectedLocation.weather[0].icon}.png`}></img>
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(selectedLocation.main.temp)} °C</p>
          <div className="details">
            <div className="parameterRow">
              <span className="parameterLabel">Details</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Feels like</span>
              <span className="parameterVabel">{Math.round(selectedLocation.main.temp)} °C</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Wind</span>
              <span className="parameterVabel">{selectedLocation.wind.speed} m/s</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Humidity</span>
              <span className="parameterVabel">{selectedLocation.main.humidity} %</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Pressure</span>
              <span className="parameterVabel">{selectedLocation.main.preassure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default CurrentWeather;
