import "./assets/home.css"

function Home({step}) {

    return (
        <section id="main">
            {
                step >0 ?<h1>Hello, I am </h1> : null
            }
            
            <h2 className="name">정서희.</h2>
            <h2 className="job">FE Developer </h2>
            <p>컴퓨터공학 전공으로 CS에 대한 기본 지식 보유</p>
            <p> 자연어처리 연구실에서 자연어처리를 활용한 프로젝트 다수 경험</p>
            <p>현업에서 글로벌 채팅앱 FE 개발을 맡아 친구 추가, fcm 처리 등 주요 기능을 개발, electron + react js로 pc 버전 앱 기능 개발 </p>
            <p>사내 협업 및 버전관리 방식 제안하여 적용시킨 경험</p>
            <p>fcm 처리 및 android, ios 하이브리드 개발 경험</p>
            <button className="contact-btn">Contact me</button>
        </section>
    )

}

export default Home