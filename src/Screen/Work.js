import { useCallback, useState } from "react";
import "../assets/work.css";

function Work() {
  const [arccodionIdSet, setArccodionIdSet] = useState(new Set());

  const onAccodionClicked = useCallback(
    (id) => {
      const newArccodionSet = new Set([...arccodionIdSet]);
      const $projectArrow = document.querySelector("#project" + id);
      if (newArccodionSet.has(id)) {
        newArccodionSet.delete(id);
        $projectArrow.classList.remove("rotated");
      } else {
        newArccodionSet.add(id);
        $projectArrow.classList.add("rotated");
      }
      setArccodionIdSet(newArccodionSet);
    },
    [arccodionIdSet]
  );

  const workList = [
    {
      id: 1,
      company: "(주)애니챗",
      period: "22.01~22.09",
      projects: [
        {
          id: "1-1",
          name: "앱 로딩속도 개선 프로젝트📱",
          period: "22.03 ~ 22.06",
          tech_stack: ["React Native", "FCM", "Socket", "REST API", "Notifee"],
          content:
            "클라이언트 데이터 관리 방식을 변경하여 로딩 속도를 2~3초로 단축시키고, 로그인 과정에서 불필요한 API 수를 줄이는 아이디어를 제안하여 프로젝트 성과를 이끌어냈습니다. 새로운 데이터 관리 방식에 맞게 모든 기능을 다시 구현해야 했고, 이 과정에서 약 40%의 기능을 구현하였습니다. 이 프로젝트를 통해 redux에 대한 이해와 JavaScript로 데이터 처리하는 능력, 예외 처리를 고려하는 능력을 키울 수 있었습니다.",
        },
        {
          id: "1-2",
          name: "채팅 프로그램 PC버전 개발 리드🖥️",
          period: "22.06 ~ 22.09",
          tech_stack: ["Electron", "React.js", "FCM", "Socket", "REST API"],
          content:
            "기존 mobile버전 채팅 앱을 PC버전으로 개발하는 프로젝트입니다. 디자이너, 퍼블리셔와는 처음으로 함께 협업을 해볼 수 있는 기회가 되었습니다. 협업을 위해 노션을 도입하여 간트차트, 보드 등을 활용해 프로젝트 일정관리를 하였습니다. 노션을 통한 적극적인 소통과 꼼꼼한 PR 및 코드 리뷰를 PC버전 개발팀의 문화로 정착하였습니다. 이 프로젝트 덕분에 현업에서 프로젝트 설계부터 배포까지 참가할 수 있었습니다.",
        },
      ],
    },
    {
      id: 2,
      company: "NCSOFT",
      period: "22.10 ~ 23.04",
      projects: [
        {
          id: "2-1",
          name: "관계 추출 모델 관리 도구 개발",
          period: "22.10 ~ 23.02",
          tech_stack: ["Vue.js", "Next.js", "REST API"],
          content:
            "경제 서비스에 사용되는 관계 추출 모델 관리 도구를 개발하였습니다. Closed IE, Open IE 등 정보 추출 방법에 따른 관계 추출 모델을 효과적으로 관리할 수 있도록 관계 추출 결과 시각화 및 성능 평가 기능을 개발하였습니다.",
        },
        {
          id: "2-2",
          name: "클러스터링 도델 모니터링 도구 개발",
          period: "22.12 ~ 23.03",
          tech_stack: ["Vue.js", "TypeScript", "REST API"],
          content:
            "실시간 뉴스 데이터들을 클러스터링 한 결과를 모니터링하는 도구를 개발하였습니다. 무한스크롤을 활용하여 UX를 좋게 하고 대용량 데이터의 효과적인 처리를 구현하였습니다.",
        },
      ],
    },
  ];

  return (
    <section id="work">
      <h1 className="title">
        02. <span>Work</span>
      </h1>
      {workList.map((work) => (
        <div key={work.id}>
          <h2>
            {work.company} <span>{work.period}</span>
          </h2>
          {work.projects.map((project) => (
            <div className="work-block" key={project.id}>
              <div
                className="arccodion-header"
                onClick={() => onAccodionClicked(project.id)}
              >
                <h3>
                  {project.name}
                  <span className="span-date">{project.period}</span>
                  <span className="arccodion-arrow" id={"project" + project.id}>
                    v
                  </span>
                </h3>
              </div>
              {arccodionIdSet.has(project.id) ? (
                <div className="detail-block">
                  <div className="tag-wrap">
                    {project.tech_stack.map((tech) => (
                      <p className="tag" key={tech}>
                        {tech}
                      </p>
                    ))}
                  </div>
                  <p className="work-info">{project.content}</p>
                  <br />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
export default Work;
