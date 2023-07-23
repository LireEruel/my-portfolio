import { Link } from "react-scroll";
import "assets/home/home.css";

function Introduce({ step }) {
  return (
    <section id="home">
      {step > 6 ? <h1 className="greeting">Hello, I am </h1> : null}
      {step > 7 ? <h2 className="name">정서희.</h2> : null}
      {step > 8 ? <h2 className="job">FE Developer </h2> : null}
      {step > 9 ? (
        <div>
          <p className="subInfo">
            컴퓨터공학 전공으로 CS에 대한 기본 지식 보유
          </p>

          <p className="subInfo">
            자연어처리 연구실에서 자연어처리를 활용한 프로젝트 다수 경험
          </p>
          <p className="subInfo">
            현업에서 글로벌 채팅앱 FE 개발을 맡아 친구 추가, fcm 처리 등 주요
            기능을 개발
          </p>
          <p className="subInfo">
            사내 협업 및 버전관리 방식 제안하여 적용시킨 경험
          </p>
          <p className="subInfo">웹, 하이브리드 앱, 데스트롭 앱 개발</p>
        </div>
      ) : null}

      {step > 10 ? (
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="contact-btn">Contact me</button>
        </Link>
      ) : null}
    </section>
  );
}

export default Introduce;
