import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../assets/card.css";
function Card({ imgUrl, title, content, contribution, stack, notionUrl }) {
  const [isFlipped, setFlip] = useState(false);

  const flipChange = (e) => {
    e.preventDefault();
    setFlip(!isFlipped);
  };

  const openWindow = (e) => {
    e.preventDefault();
    window.open(notionUrl);
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      className="card"
    >
      <div className="card" onMouseEnter={flipChange} onClick={openWindow}>
        <img src={imgUrl}></img>
      </div>
      <div className="card" onMouseLeave={flipChange} onClick={openWindow}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <h5>나의 기여도</h5>
          <ul className="contribution-ul">
            {contribution.map((contri, index) => {
              return <li key={index}>{contri}</li>;
            })}
          </ul>
          <h5>기술 스택</h5>
          <ul className="stack-ul">
            {stack.map((tech, index) => {
              return <li key={index}>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
