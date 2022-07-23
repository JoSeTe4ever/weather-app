import "./App.css";
import Search from "./components/Search";

function App() {
  const handleOnSearchChange = (data) => {
    console.log("data", data);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
    </div>
  );
}

export default App;
