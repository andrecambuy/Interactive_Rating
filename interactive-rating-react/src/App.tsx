import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Tank from "./components/Tank";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [number, setNumber] = useState("");
  return (
    <div className="App">
      <div className="container">
        {!isActive && <Card setIsActive={setIsActive} setNumber={setNumber} />}
        {isActive && <Tank number={number} />}
      </div>
    </div>
  );
}

export default App;
