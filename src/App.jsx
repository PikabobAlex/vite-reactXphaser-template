import PhaserContainer from "./PhaserContainer";
import ThreeApp from "./THREEContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <PhaserContainer width={window.innerWidth} height={window.innerHeight} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhaserContainer />} />
          <Route path="/three" element={<ThreeApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
