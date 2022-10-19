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
          <article className="experienceCard">
            <div className="imgSpace">
              <a
                href="https://www.viacustomers.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="VIA" className="experienceImg" src={VIA} />
              </a>
            </div>
            <h4 className="pad">VIA Customers</h4>
            <small>Software Engineering Intern</small>
            <br />
            <ul className="pad">
              <li>
                Use Typescript in Node.js and React.js frameworks to develop a
                mobile eCommerce platform.
              </li>
              <li>
                Build and use API endpoints and webhooks to create end-to-end
                integrations with third-party applications.
              </li>
              <li>
                Transition existing code functionality to work with new
                eCommerce providers.
              </li>
              <li>
                Query PostgreSQL database with TypeORM and MySQL for various
                front-end and back-end logic.
              </li>
            </ul>
            <small style={{ color: "var(--color-primary)" }}>
              May 2022 – Present
            </small>
          </article>
          <article className="experienceCard">
            <div className="imgSpace">
              <a href="https://it.utah.edu/" target="_blank" rel="noreferrer">
                <img alt="UIT" className="experienceImg" src={UIT} />
              </a>
            </div>
            <h4 className="pad">University of Utah UIT Office </h4>
            <small>Software Development Intern</small>
            <br />
            <ul>
              <li>
                Used PHP and SQL to interface with phpMyAdmin database tables.
              </li>
              <li>
                Built back-end admin interfaces, database filters, and front-end
                displays in PHP.
              </li>
              <li>
                Developed in languages including PHP, HTML, CSS, JavaScript,
                AJAX, and SQL.
              </li>
              <li>
                Built and managed University web systems doing things like site
                migrations, content updates, page redesigns, and form building.
              </li>
            </ul>
            <small style={{ color: "var(--color-primary)" }}>
              January 2021 – April 2022
            </small>
          </article>
          <article className="experienceCard">
            <div className="imgBackground imgSpace">
              <a
                href="https://www.riskrecon.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="RiskRecon" className="reconImg pad" src={RiskRecon} />
              </a>
            </div>
            <h4 className="pad">RiskRecon</h4>
            <small>Design Intern</small>
            <ul>
              <li>
                Produced a wide range of digital graphics and imagery for the
                Riskrecon.com marketing page. This includes 3D and 2D
                illustrations, video thumbnails, and miscellaneous UX components
                for the marketing website.
              </li>
              <li>
                Designed imagery for multiple banner ad campaigns, online
                advertising, and social media heroes for company internet
                presence.
              </li>
              <li>
                Served as primary editor and creator for academy videos and
                webinars.
              </li>
              <li>
                Created company PowerPoint and InDesign templates for corporate
                usage.
              </li>
            </ul>
            <small style={{ color: "var(--color-primary)" }}>
              June 2019 - December 2020
            </small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
