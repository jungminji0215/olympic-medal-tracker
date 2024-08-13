import { useState, useEffect } from "react";
import "../src/style/App.css";
import MedalForm from "./components/MedalForm.jsx";
import CountryList from "./components/CountryList.jsx";
import { getLocalStorage } from "./localStorage.js";

function App() {
  const [countries, setCountry] = useState([]);

  /**
   * TODO 고민
   * 저장소 접근하는 것이 여기로 나와있는 것이 아쉽다.
   * MedalForm, CountryList 를 품고있는 컴포넌트를 따로 만들었어야했나?
   */
  useEffect(() => {
    const localStorageCountries = getLocalStorage();
    if (localStorageCountries) {
      setCountry(JSON.parse(localStorageCountries));
    }
  }, []);

  return (
    <div className="container">
      <section>
        <h1>2024 파리 올림픽</h1>
        <MedalForm countries={countries} setCountry={setCountry} />

        {countries.length ? (
          <CountryList countries={countries} setCountry={setCountry} />
        ) : (
          "아직 추가된 국가가 없습니다. 메달을 추적하세요!"
        )}
      </section>
    </div>
  );
}

export default App;
