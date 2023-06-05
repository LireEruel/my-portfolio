import "../assets/card.css";
function Card({ imgUrl, title, content, contribution, stack, notionUrl }) {
  const openWindow = (e) => {
    e.preventDefault();
    window.open(notionUrl);
  };
  return (
    <div className="card" onClick={openWindow}>
      <img src={imgUrl} alt={`${title} title`}></img>
    </div>
  );
}

export default Card;
