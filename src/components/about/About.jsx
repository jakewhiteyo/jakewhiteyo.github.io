import React from "react";
import "./about.css";
import jakeSquare from "../../assets/jake-square.png";
import { FaGraduationCap } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me!</h2>
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
              <small>3+ years in the industry</small>
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
            Experienced and motivated. As a senior in computer science at the
            University of Utah, I’ve spent the past 3 years of my life exploring
            and expanding my passion for computer science and software
            engineering. With three different tech internships and a handful of
            projects under my belt, I’ve steadily grown my experience in
            software development by working on a wide variety of technical
            projects in various architectures and frameworks. I love engineering
            for the complex problems it introduces and the ability to improve
            other people’s lives through software. Every project feels like a
            journey and creates a unique set of challenges and roadblocks to be
            overcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
