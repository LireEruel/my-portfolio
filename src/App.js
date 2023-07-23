import "./App.css";
import Snowfall from "react-snowfall";
import "animate.css/animate.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TooSmallScreen from "./pages/TooSmallScreen";

function App() {
  return (
    <div className="App">
      <Snowfall />
      <div id="default-view">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div id="error-view">
        <TooSmallScreen />
      </div>
    </div>
  );
}

export default App;
