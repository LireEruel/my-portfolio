import "../assets/experience.css";
import Card from "./Card";
import experiences from "../assets/contents";

function Experience() {
  return (
    <section id="experience">
      <h1 className="title">
        03. <span>Experience</span>
      </h1>
      <br />
      {experiences.map((experience, index) => {
        return (
          <Card
            imgUrl={experience.imgUrl}
            title={experience.title}
            content={experience.content}
            contribution={experience.contribution}
            stack={experience.stack}
            notionUrl={experience.notionUrl}
          />
        );
      })}
    </section>
  );
}
export default Experience;
