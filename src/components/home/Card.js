import Modal from "react-modal";
import "assets/home/card.scss";

function Card({ imgUrl, title, content, contribution, stack, notionUrl }) {
  return (
    <div className="card">
      <a href={notionUrl}>
        <img src={imgUrl} alt={`${title} title`}></img>
      </a>
    </div>
  );
}

export default Card;
