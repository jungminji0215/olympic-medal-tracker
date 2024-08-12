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

        {countries.length ? (
          <MedalListComponent countries={countries} setCountry={setCountry} />
        ) : (
          "아직 추가된 국가가 없습니다. 메달을 추적하세요!"
        )}
      </section>
    </div>
  );
}

export default App;
