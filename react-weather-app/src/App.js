import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/search";
import {OPEN_WEATHER_API_KEY, OPEN_WEARTHER_API_URL} from "./api/api";

function App() {

  const selectedCity = {}; // a ver esto si también hace falta ponerlo en estado

  const handleOnSearchChange = (selectedCity) => {
    console.log("selectedCity" , selectedCity);
    const [latitude, longitude] = selectedCity.value.split(" ");

    let currentWeatherFetch = fetch(`${OPEN_WEARTHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`).then((response => {
      console.log("response", response);
      debugger
    }))

  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather selectedCity={selectedCity}></CurrentWeather>
    </div>
  );
}

export default App;
