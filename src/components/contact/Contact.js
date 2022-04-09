import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "./../../context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zii2dzh",
        "template_okx645i",
        formRef.current,
        "B57JeNCSPtocXziDL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img className="contact-icon" src={Phone} alt="" />
              +1 1234 556 75
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              contact@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              69 Bourbon Street, New Orleans USA
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>It is a long established</b> fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
