import "./App.css";
import Search from "./components/Search";

function App() {
  const handleOnSearchChange = (cityName) => {
    console.log(cityName);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
    </div>
  );
}

export default App;
