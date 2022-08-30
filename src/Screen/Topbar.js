import { Link } from "react-scroll";
import "../assets/topbar.css";
import RESUME from "../assets/resume.pdf";
function Topbar({ step }) {
  const onClickResume = () => {
    const link = document.createElement("a");
    link.href = RESUME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          {/* {step > 2 ? (
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
          ) : null} */}
          {step > 2 ? (
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
        {step > 3 ? (
          <button className="resume-btn" onClick={onClickResume}>
            Resume
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default Topbar;
