import React from "react";
import "./experience.css";
import UIT from "../../assets/UIT.png";
import RiskRecon from "../../assets/RiskRecon.png";
import VIA from "../../assets/via.png";

const Experience = () => {
  return (
    <section id="experience" className="experienceBody">
      <h4 className="pad">My Work</h4>
      <h2>Experience</h2>
      <div className="experienceContainer">
        <div className="experienceCards">
          <a
            href="https://www.viacustomers.com/"
            target="_blank"
            rel="noreferrer"
          >
            <article className="experienceCard">
              <div className="imgSpace">
                <img alt="VIA" className="experienceImg" src={VIA} />
              </div>
              <h4 className="pad">VIA Customers</h4>
              <small>Software Engineering Intern</small>
              <ul>
                <li>ayo</li>
              </ul>
            </article>
          </a>
          <a href="https://it.utah.edu/" target="_blank" rel="noreferrer">
            <article className="experienceCard">
              <div className="imgSpace">
                <img alt="UIT" className="experienceImg" src={UIT} />
              </div>
              <h4 className="pad">University of Utah UIT Office </h4>
              <small>Software Development Intern</small>
            </article>
          </a>
          <a href="https://www.riskrecon.com/" target="_blank" rel="noreferrer">
            <article className="experienceCard">
              <div className="imgBackground imgSpace">
                <img alt="RiskRecon" className="reconImg pad" src={RiskRecon} />
              </div>
              <h4 className="pad">RiskRecon</h4>
              <small>Design Intern</small>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
