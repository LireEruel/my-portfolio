import { useEffect, useState } from "react";
import Modal from "react-modal";
import "assets/home/card.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Card({ imgUrl, title, content, contribution, stack, notionUrl }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    console.log(modalIsOpen);
  }, [modalIsOpen]);
  Modal.setAppElement("#root");
  return (
    <div className="card" onClick={openModal}>
      <img src={imgUrl} alt={`${title} title`}></img>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById("app")}
      >
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
      </Modal>
    </div>
  );
}

export default Card;
