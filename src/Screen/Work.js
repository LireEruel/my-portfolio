import "../assets/work.css";

function Work() {
  return (
    <section id="work">
      <h1 className="title">
        02. <span>Work</span>
      </h1>
      <h2>
        (주)애니챗 <span>22.01~</span>
      </h2>
      <div className="work-block">
        <h3>
          신규 서비스 개발 리드 <span className="span-date">22.06 ~</span>
        </h3>
        <p className="work-info">
          기존 mobile버전 채팅 앱을 PC버전으로 개발하는 프로젝트입니다.
          디자이너, 퍼블리셔와는 처음으로 함께 협업을 해볼 수 있는 기회가
          되었습니다. 협업을 위해 노션을 도입하여 간트차트, 보드 등을 활용해
          프로젝트 일정관리를 하였습니다. 노션을 통한 적극적인 소통과 꼼꼼한 PR
          및 코드 리뷰를 PC버전 개발팀의 문화로 정착하였습니다. 이 프로젝트
          덕분에 현업에서 프로젝트 설계부터 배포까지 참가할 수 있었습니다.
        </p>
        <br />

        <p>
          <span>사용 기술</span> : Electron, React js
        </p>
        <p>
          <span>플랫폼</span> : Desctop App 🖥️
        </p>
        <p>
          <span>주요 기능 </span>: fcm, socket, Rest api 를 활용한 채팅 시스템
        </p>
        <p>
          <span>기여도</span> : 일부 퍼블리싱을 제외한 프론트엔드 일체
        </p>
        <br />
      </div>
      <div className="work-block">
        <h3>
          앱 로딩속도 개선 프로젝트{" "}
          <span className="span-date"> 22.03 ~ 22.06</span>
        </h3>
        <p className="work-info">
          클라이언트 데이터 관리를 localstorage, sqlite, redux를 사용하던
          방식에서 redux persist store로 변경하고 로그인 과정에서 사용하는 수를
          대폭 줄였습니다. 그 결과 평균 15초에서 17초 정도 걸리는 로딩속도를
          2~3초로 단축시킬 수 있었습니다. 해결 방법을 찾는 과정 중 기존에 로그인
          과정에 사용되는 불필요한 api의 수를 줄일 수 있도록 아이디어를 내어
          기여하였습니다. 또한 로딩 속도 개선 과정에서 새로운 데이터 관리 방식에
          맞게 모든 기능을 다시 구현해야 했습니다. 이 과정에서 약 40%의 기능을
          구현하였습니다. 이 프로젝트를 통해 redux에 익숙해졌으며 js로 데이터
          처리 하는 능력과 예외 처리를 생각하는 능력을 키울 수 있었습니다.
        </p>
        <br />

        <p>
          <span>사용 기술</span> : React native
        </p>
        <p>
          <span>플랫폼</span> : Android, IOS
        </p>
        <p>
          <span>주요 기능 </span>: fcm, notifee를 활용한 채팅 시스템
        </p>
        <p>
          <span>기여도</span> : 다시 구현한 클라이언트 기능 중 40%
        </p>
        <br />
      </div>
      <div className="work-block">
        <h3>
          앱 고도화 및 개발팀 협업 문화 정착
          <span className="span-date"> 22.01 ~ 22.02</span>
        </h3>
        <p className="work-info">
          알림시 진동 선택 기능, 폰트 크기 설정 기능 등 기존 앱 추가 개발 사항을
          주도적으로 개발하였습니다. 그 과정에서 채팅 및 zip파일로 버전관리 및
          소통을 하는 팀에게 git 과 노션을 제안하여 협업 문화를 정착시켰습니다.
        </p>
        <br />
        <p>
          <span>사용 기술</span> : React native
        </p>
        <p>
          <span>플랫폼</span> : Android
        </p>
        <p>
          <span>주요 기능 </span>: fcm, notifee를 활용한 채팅 시스템
        </p>
        <p>
          <span>기여도</span> : 추가 개발 사항 중 프론트엔드 영역 90%
        </p>
        <br />
      </div>
    </section>
  );
}
export default Work;
