import "./contact.css";
import Phone from "../../img/phone.jpg";
import Email from "../../img/email.jpg";
import Address from "../../img/address.jpg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_da8l54b",
        "template_an11c0e",
        formRef.current,
        "B6Xx09ss0UgI7hu7M"
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
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +234 9068 973 430
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ucheogbonnak@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />7 Ijegun-Ikotun
              Road, Alimosho LGA, Lagos
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>I am available</b> for freelancing and full-time jobs if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className="c-col"
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
              className="c-col"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              required
              className="c-col"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              required
              className="c-col"
            />
            <button>Submit</button>
            {done && "Thank you ..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
