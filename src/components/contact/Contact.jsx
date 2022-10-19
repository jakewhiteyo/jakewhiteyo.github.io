import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import bikeImage from "../../assets/bikeSquare.JPG";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Information</h2>
      <div className="container contactContainer">
        <div className="contactContent">
          <div className="contactCards">
            <article className="contactCard">
              <br />
              <a className="contactIcon">
                <HiOutlineMail />
              </a>
              <br />
              <small>jakewhiteyo@gmail.com</small>
              <br />
            </article>
            <article className="contactCard">
              <br />
              <a className="contactIcon">
                <AiOutlinePhone />
              </a>
              <br />
              <small>(435) 659 9077</small>
              <br />
            </article>
            <article className="contactCard">
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
        <div className="contact">
          <div className="contactImage pad">
            <img src={bikeImage} className="imgBike" alt="jake-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
