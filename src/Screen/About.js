import Animation from "./Animation";
import "../assets/about.css";

function About() {
  const tags = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React.js",
    "Restful WebServices",
    "Git",
    "Firebase",
    "Java",
    "Svelte",
  ];

  return (
    <section id="about">
      <h1 className="title">
        01. <span>About Me</span>
      </h1>
      <br />
      <div className="content">
        <div>
          <div className="inner-text">
            <p>안녕하세요. 프론트엔드 개발자 정서희입니다. </p>
            <p>
              저는 컴퓨터가 좋다는 이유 하나로 개발자의 길을 걷게 되었습니다. 😊
            </p>
            <p>
              개발 분야중에서는 관심받기 좋아하는 성격이라{" "}
              <span>프론트엔드</span>가 제일 즐겁습니다.
            </p>
            <p>
              백엔드, 다른 프론트, 퍼블리셔, 디자이너 분들과의 협업은 늘
              즐겁습니다. 야호!
            </p>
            <p>
              제 신념은 <span>"</span>
              <strong>누가 보더라도 부끄럽지 않은 코드를 작성하자.</strong>
              <span>"</span>
              입니다
            </p>
            <p>아직 배울 것이 많아 매일매일 즐거운 주니어 입니다.</p>
            <p>저는 오늘보다 내일 더 강할 것입니다. </p>
          </div>
          <div className="skill-view">
            <h2>skills</h2>
            <div className="tag-wrap">
              {tags.map((tag, index) => {
                return (
                  <p className="tag" key={index}>
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="img-wrap">
          <img src={require("../assets/image/who_am_I_logo.png")}></img>
        </div>
      </div>
      {/* <Animation /> */}
    </section>
  );
}

export default About;
