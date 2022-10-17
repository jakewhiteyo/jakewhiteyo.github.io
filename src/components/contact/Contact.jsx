import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Information</h2>
      <div className="container contactContainer">
        <div className="contactContent">
          <div className="contactCards">
            <article className="contactCard">
              <h4>Email</h4>
              <br />
              <a className="contactIcon">
                <HiOutlineMail />
              </a>
              <br />
              <small>jakewhiteyo@gmail.com</small>
              <br />
            </article>
            <article className="contactCard">
              <h4>Phone</h4>
              <br />
              <a className="contactIcon">
                <AiOutlinePhone />
              </a>
              <br />
              <small>(435) 659 9077</small>
              <br />
            </article>
            <article className="contactCard">
              <h4>City</h4>
              <br />
              <a className="contactIcon">
                <AiOutlineHome />
              </a>
              <br />
              <small>Salt Lake City, UT</small>
              <br />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
