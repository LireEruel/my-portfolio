import "../assets/experience.css";
import Card from "./Card";

function Experience() {
  return (
    <section id="experience">
      <h1 className="title">
        03. <span>Experience</span>
      </h1>
      <br />
      <Card
        imgUrl={require("../assets/profile_image.jpg")}
        title="title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </section>
  );
}
export default Experience;
