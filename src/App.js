import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page4 from "./pages/Page4";
import Page3 from "./pages/Page3";
import Page2 from "./pages/Page2";
import GameBoard from "./pages/GameBoard";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<GameBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
