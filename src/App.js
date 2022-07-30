import "./App.css";
import Topbar from "./Screen/Topbar";
import Home from "./Home";
import Snowfall from "react-snowfall";
import About from "./Screen/About";
import { useEffect, useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step < 20) {
      setTimeout(() => setStep(step + 1), 250);
    }
    console.log(step);
  }, [step]);

  return (
    <div className="App">
      <nav className="App-bar">
        <Topbar step={step} />
      </nav>

      <div id="container">
        <Snowfall />
        <aside id="left_aside">lnb</aside>
        <aside id="right_aside">lnb</aside>
        <hr />
        <section id="contents">
          <Home step={step} />
          <About step={step} />
        </section>
        <hr />
      </div>
      <div id="footer">footer</div>
    </div>
  );
}

export default App;
