import React from "react";
import "./about.css";
import jakeSquare from "../../assets/jake-square.png";
import { FaGraduationCap } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={jakeSquare} className="imgJakeSquare" alt="jake-square" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
              <a className="aboutIcon">
                <RiComputerLine />
              </a>
              <h5>Experience</h5>
              <br />
              <small>5+ years in the industry</small>
            </article>
            <article className="aboutCard">
              <a className="aboutIcon">
                <FaGraduationCap />
              </a>
              <h5>B.S. in Computer Science</h5>
              <br />
              <small>University of Utah Class of 2023</small>
            </article>
          </div>
          <p className="pad">
            I made this website quite a long time ago, I've updated it a bit to
            contain my new resume but I should really make a new one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
