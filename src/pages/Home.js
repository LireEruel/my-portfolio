import Topbar from "components/home/Topbar";
import "App.css";
import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Introduce from "components/home/Introduce";
import About from "components/home/About";
import Work from "components/home/Work";
import Experience from "components/home/Experience";
import Contact from "components/home/Contact";

function Home() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step < 20) {
      setTimeout(() => setStep(step + 1), 250);
    }
  }, [step]);

  return (
    <div id="defaultView">
      <nav className="App-bar">
        <Topbar step={step} />
      </nav>
      <div>
        <section id="contents">
          <Introduce step={step} className="content" />

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
  );
}

export default Home;
