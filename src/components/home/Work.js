import { useCallback, useState } from "react";
import "assets/home/work.scss";

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
          tech_stack: ["Vue.js", "TypeScript", "Ant Design Vue", "SCSS"],
          content:
            "Closed IE, Open IE 등 정보 추출 방법에 따른 관계 추출 모델을 효과적으로 관리할 수 있도록 관계 추출 결과 시각화 및 성능 평가 기능을 가진 관리도구를 개발하였습니다.모델의 결과를 효과적으로 시각화하기 위해서는 모델에 대한 이해가 선행되어야 한다 판단하였습니다.인터넷 자료를 활용하여 모델이 관계 추출 하는 방법과 필요한 이유 등을 이해한 뒤, 그 내용을 팀원분께 설명하여 정확히 이해한 것이 맞는지 확인 받았습니다. 그리고 이해한 내용을 바탕으로 UX를 설계하였습니다. 초기에는 대용량 데이터를 한번에 조회하였기에 속도가 느렸습니다. 이를 효율적으로 처리할 수 있도록 페이징 처리를 추가 하여 조회 속도를 약 80% 개선하였습니다. Vue.js와 TypeScript에 대해 모르는 상태에서 시작하였지만, 공식문서로 빠르게 학습하여 문제없이 프로젝트 진행을 할 수 있었습니다",
        },
        {
          id: "2-2",
          name: "클러스터링 모델 모니터링 도구 개발",
          period: "22.12 ~ 23.03",
          tech_stack: ["Vue.js", "TypeScript", "Ant Design Vue", "SCSS"],
          content:
            "기존에 모니터링 도구가 있었지만, 연구원들이 사용하기에 불편하여 재개발하였습니다. 먼저 기존 서비스의 UX가 좋지않은 이유를 파악하였습니다. 연구원들의 업무 방식을 분석하기 위해 업무 환경을 관찰하고, 기존 서비스에 대한 피드백을 들었습니다. 그 결과 데이터가 한 눈에 보여야 하고, 모니터링의 피로도를 낮춰야 한다는 인사이트를 얻었습니다. 이를 바탕으로 UI를 설계시 대용량 데이터가 한 눈에 보일 수 있도록 여백을 최소화하고, 한 화면에 모든 데이터가 보이도록 하였습니다. 그리고 클릭없이 많은 양을 조회할 수 있도록 페이징 처리 방식을 페이지네이션에서 무한 스크롤로 변경하였습니다. 대용량 데이터를 다루는 서비스에 무한 스크롤 방식은 성능 문제를 야기할 수 있지만, 이벤트를 최적화하고 가상 스크롤을 구현하여 성능 문제를 해결하였습니다.",
        },
      ],
    },
    {
      id: 3,
      company: "[교육] 삼성 SW 아카데미",
      period: "23.07 ~ 현재",
      projects: [
        {
          id: "3-1",
          name: "공공데이터를 활용한 EnjoyTrip 서비스",
          period: "23.11 ~ 23.11",
          tech_stack: [
            "Vue.js",
            "TypeScript",
            "REST API",
            "Stomp",
            "Ant Design Vue",
            "SCSS",
          ],
          content:
            "공공데이터를 활용한 여행 정보 서비스를 개발하였습니다. 메인 기능은 여행지 조회, 여행 계획 생성 및 공유 등이 있습니다. Stomp를 활용하여 실시간 채팅 기능도 개발하였습니다. 프로젝트가 좋은 평가를 받아, 1학기 최우수상(1등)을 수상하게 되었습니다.",
          viewUrl: "https://youtu.be/3uvj_LhYi38",
        },
      ],
    },
  ];

  return (
    <section id="work">
      <h1 className="title">
        02. <span>Experience</span>
      </h1>
      {workList.map((work, index) => (
        <div key={index} className="work-block-wrap">
          <div className="work-block" key={work.id}>
            <h2>
              {work.company} <span>{work.period}</span>
            </h2>
            {work.projects.map((project) => (
              <div className="project-block" key={project.id}>
                <div
                  className="arccodion-header"
                  onClick={() => onAccodionClicked(project.id)}
                >
                  <h3>
                    {project.name}
                    <span className="span-date">{project.period}</span>
                    <span
                      className="arccodion-arrow"
                      id={"project" + project.id}
                    >
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
                    {project.viewUrl ? (
                      <a
                        className="view-link"
                        href={project.viewUrl}
                        target="blank"
                      >
                        play Demo{" "}
                        <img
                          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Chequered%20Flag.png"
                          alt="Chequered Flag"
                          width="25"
                          height="25"
                        />
                      </a>
                    ) : null}
                    <p className="work-info">{project.content}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          {index !== workList.length - 1 && <hr />}
        </div>
      ))}
    </section>
  );
}
export default Work;
