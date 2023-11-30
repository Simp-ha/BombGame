import "./App.css";
import Home from "./screens/Home";
import GameI from "./screens/GameI";
import GameII from "./screens/GameII";
import GameIII from "./screens/GameIII";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game1" element={<GameI />} />
        <Route path="/game2" element={<GameII />} />
        <Route path="/game3" element={<GameIII />} />
      </Routes>
    </div>
  );
}

export default App;
