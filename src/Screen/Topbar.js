import { Link } from "react-scroll";
import "../assets/topbar.css";

function Topbar({ step }) {
  console.log(step);
  const listItem = [
    <li>
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
    </li>,
    <li>
      <a>Experience</a>
    </li>,
    <li>
      <a>Work</a>
    </li>,
    <li>
      <a>Contact</a>
    </li>,
  ];

  const renderListItem = () => {
    return listItem.slice(0, step);
  };

  return (
    <nav>
      <div></div>
      <div className="top-menu-wrap">
        <ol>{renderListItem()}</ol>
        {step > 4 ? <button className="resume-btn">Resume</button> : null}
      </div>
    </nav>
  );
}

export default Topbar;
