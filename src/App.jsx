import { useState } from "react";
import "../src/style/App.css";
import MedalFormComponent from "./components/MedalFormComponent.jsx";
import MedalListComponent from "./components/MedalListComponent.jsx";

function App() {
  const [countries, setCountry] = useState([]);

  return (
    <div className="container">
      <section>
        <h1>2024 파리 올림픽</h1>
        <MedalFormComponent countries={countries} setCountry={setCountry} />
        {countries.map((country) => {
          return (
            <MedalListComponent key={country.countryName} country={country} />
          );
        })}
      </section>
    </div>
  );
}

export default App;
