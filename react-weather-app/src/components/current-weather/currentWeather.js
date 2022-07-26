import "./currentWeather.css";

import React from "react";

function CurrentWeather({ selectedLocation }) {
  if (selectedLocation.id) {

    
    return (
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{selectedLocation.name}</p>
            <p className="weatherDescription">Sunny</p>
          </div>

          <img alt="weather" className="weatherIcon" src="icons/01d.png"></img>
        </div>
        <div className="bottom">
          <p className="temperature">18 C</p>
          <div className="details">
            <div className="parameterRow">
              <span className="parameterLabel">Details</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Feels like</span>
              <span className="parameterVabel">22</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Wind</span>
              <span className="parameterVabel">2 m/s</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Humidity</span>
              <span className="parameterVabel">15 %</span>
            </div>
            <div className="parameterRow">
              <span className="parameterLabel">Pressure</span>
              <span className="parameterVabel">22 hPa</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default CurrentWeather;
