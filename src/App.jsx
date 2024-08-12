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
        {countries
          .sort((a, b) => {
            // 먼저 goldMedal을 기준으로 정렬
            if (b.goldMedal !== a.goldMedal) {
              return b.goldMedal - a.goldMedal;
            }
            // goldMedal이 같다면 silverMedal로 정렬
            return b.silverMedal - a.silverMedal;
          })
          .map((country) => {
            return (
              <MedalListComponent
                key={country.countryName}
                country={country}
                countries={countries}
                setCountry={setCountry}
              />
            );
          })}
      </section>
    </div>
  );
}

export default App;
