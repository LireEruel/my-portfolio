import "./App.css";
import Topbar from "./Screen/Topbar";
import Home from "./Home";
import Snowfall from "react-snowfall";
import About from "./Screen/About";
import { useEffect, useState } from "react";
import Experience from "./Screen/Experience";
import Work from "./Screen/Work";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Contact from "./Screen/Contact";
import TooSmallScreen from "./Screen/TooSmallScreen";
import Animation from "./Screen/Animation";

function App() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step < 20) {
      setTimeout(() => setStep(step + 1), 250);
    }
  }, [step]);

  return (
    <div className="App">
      <Snowfall />
      <div id="default-view">
        <nav className="App-bar">
          <Topbar step={step} />
        </nav>
        <div>
          <section id="contents">
            <Home step={step} className="content" />

            <AnimationOnScroll className="content" animateIn="animate__fadeIn">
              {step > 11 ? <About step={step} /> : null}
            </AnimationOnScroll>
            <AnimationOnScroll className="content" animateIn="animate__fadeIn">
              {step > 12 ? <Work step={step} /> : null}
            </AnimationOnScroll>
            <AnimationOnScroll className="content" animateIn="animate__fadeIn">
              {step > 13 ? <Experience step={step} /> : null}
            </AnimationOnScroll>
            <AnimationOnScroll className="content" animateIn="animate__fadeIn">
              {step > 14 ? <Contact step={step} /> : null}
            </AnimationOnScroll>
          </section>
        </div>
      </div>
      <div id="error-view">
        <TooSmallScreen />
      </div>
    </div>
  );
}

export default App;
