import React from "react";
import "./experience.css";
import UIT from "../../assets/UIT.png";
import VIA from "../../assets/via.png";
import GeicoMascot from "../../assets/geico-mascot.webp";

const Experience = () => {
  return (
    <section id="experience" className="experienceBody">
      <h4 className="pad">My Work</h4>
      <h2>Experience</h2>
      <div className="experienceContainer">
        <div className="experienceCards">
          <article className="experienceCard">
            <div className="imgSpace">
              <a href="https://www.geico.com/" target="_blank" rel="noreferrer">
                <img alt="GEICO" className="experienceImg" src={GeicoMascot} />
              </a>
            </div>
            <h4 className="pad">GEICO</h4>
            <small>Software Engineer</small>
            <ul>
              <li>
                <strong>
                  Digital Experience Framework (DXF) Team (1 year):
                </strong>{" "}
                Contributed to GEICO's one-UI initiative by developing and
                maintaining the Geico SDUI Flutter framework. This framework
                enables GEICO to create and test user experiences without having
                to redeploy the client app. I played a key role in launching the
                Emergency Roadside Assistance, Virtual Assistant, Billing and
                Account Creation GEICO experiences. These experiences are
                currently in production (web and mobile) and are used by
                millions of users daily.
              </li>
              <li>
                <strong>Underwriting Team (1 year):</strong> Developed an
                in-house data distribution tool to reduce reliance on Profisee.
                Spearheaded regression testing improvements for state-based
                underwriting changes, ensuring stability. Built an advanced
                database filter for analysts to query data between environments
                and generate reports.
              </li>
            </ul>
            <small style={{ color: "var(--color-primary)" }}>
              June 2023 - Present
            </small>
          </article>
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
              May 2022 – December 2022
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
