import PhaserContainer from "./PhaserContainer";
import ThreeContainer from "./THREEContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhaserContainer />} />
          <Route path="/three" element={<ThreeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
