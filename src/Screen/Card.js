import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../assets/card.css";
function Card({ imgUrl, title, content }) {
  const [isFlipped, setFlip] = useState(false);

  const flipChange = (e) => {
    e.preventDefault();
    setFlip(!isFlipped);
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      className="card"
    >
      <div className="card" onMouseEnter={flipChange}>
        <img src={imgUrl}></img>
      </div>
      <div className="card" onMouseLeave={flipChange}>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
