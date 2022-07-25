import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/search";

function App() {

  const selectedCity = {}; // a ver esto si también hace falta ponerlo en estado

  const handleOnSearchChange = (selectedCity) => {
    console.log("selectedCity" , selectedCity);
    const [latitude, longitude] = selectedCity.value.split(" ");
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather selectedCity={selectedCity}></CurrentWeather>
    </div>
  );
}

export default App;
