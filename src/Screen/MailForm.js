import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/contact.css";

export const MailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cn7me39",
        "template_a0m415a",
        form.current,
        "wrjY5-rWxps46Oqw2"
      )
      .then(
        (result) => {
          alert("성공적으로 전송하였습니다!");
        },
        (error) => {
          alert(
            "이메일 전송에 실패하였습니다. jsh001505@naver.com으로 문의 바랍니다."
          );
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mail-form">
      <label>Name</label>
      <input type="text" name="user_name" className="mail-input" />
      <label>Email</label>
      <input type="email" name="user_email" className="mail-input" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="send-btn" />
    </form>
  );
};
