import Snowfall from "react-snowfall";
import "../assets/tooSmallScreen.css";
import Animation from "./Animation";

const TooSmallScreen = () => {
  return (
    <div className="too-small-screen">
      <div>
        <div id="oops">OOPS !</div>
        <h1>Screen is too small</h1>
      </div>
    </div>
  );
};

export default TooSmallScreen;
