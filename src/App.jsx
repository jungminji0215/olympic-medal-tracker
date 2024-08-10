import { useState } from "react";
import "../src/style/App.css";
import MedalFormComponent from "./components/MedalFormComponent.jsx";
import MedalListComponent from "./components/MedalListComponent.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <section>
        <h1>2024 파리 올림픽</h1>
        <MedalFormComponent />
        <MedalListComponent />
      </section>
    </div>
  );
}

export default App;
