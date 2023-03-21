import "../assets/experience.css";
import Card from "./Card";
import experiences from "../assets/contents";

function Experience() {
  return (
    <section id="experience">
      <br />
      <div className="card-wrap">
        {experiences.map((experience, index) => {
          return (
            <Card
              key={index}
              imgUrl={experience.imgUrl}
              title={experience.title}
              content={experience.content}
              contribution={experience.contribution}
              stack={experience.stack}
              notionUrl={experience.notionUrl}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Experience;
