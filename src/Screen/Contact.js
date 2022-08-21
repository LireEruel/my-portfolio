import { MailForm } from "./MailForm";
import "../assets/contact.css";
import { useState } from "react";

function Contact() {
  const [open, setOpen] = useState(false);

  const onClickFormButton = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const onClickGitButton = (e) => {
    e.preventDefault();
    window.open("https://github.com/LireEruel");
  };

  return (
    <section id="contact">
      <h1 className="title">
        04. <span>Contact</span>
      </h1>
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact me</h1>
          <p>새로운 시작은 언제나 설렘이 가득합니다.</p>
          <p>저와 함께 미래를 그려나갈 멋진 분들의 연락을 기다리고 있습니다.</p>
          <p>jsh001505@naver.com</p>
          <button onClick={onClickGitButton}>
            <img src={require("../assets/image/git_icon.png")} />
          </button>
          <button onClick={onClickGitButton}>
            <img src={require("../assets/image/velog_icon.png")} />
          </button>
        </div>
        {open ? null : (
          <button onClick={onClickFormButton}>get in touch</button>
        )}

        {open ? <MailForm /> : null}
      </div>
    </section>
  );
}

export default Contact;
