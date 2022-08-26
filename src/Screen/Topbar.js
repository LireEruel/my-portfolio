import { Link } from "react-scroll";
import "../assets/topbar.css";

function Topbar({ step }) {
  return (
    <nav>
      <div></div>
      <div className="top-menu-wrap">
        <ol>
          {step > 0 ? (
            <li key="about">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
          ) : null}
          {step > 1 ? (
            <li key="work">
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Work
              </Link>
            </li>
          ) : null}
          {step > 2 ? (
            <li key="experience">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Experience
              </Link>
            </li>
          ) : null}
          {step > 3 ? (
            <li key="contact">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
          ) : null}
        </ol>
        {step > 4 ? <button className="resume-btn">Resume</button> : null}
      </div>
    </nav>
  );
}

export default Topbar;
