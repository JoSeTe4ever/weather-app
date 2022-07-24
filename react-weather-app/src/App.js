import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/search";

function App() {
  const handleOnSearchChange = (cityName) => {
    console.log(cityName);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
