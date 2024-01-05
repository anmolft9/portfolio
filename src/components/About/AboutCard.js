import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Aboutcard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings! I'm <span>Anmol Bhattarai</span>, a Software/Web
            Developer based in Melbourne, VIC, Australia. I hold a {""}
            <span>Master's Degree in Technology</span> from Federation
            University.
            <br />
            <br />
            Key Highlights:
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>{" "}
              <span>Expertise:</span> Software Engineering with a focus on
              coding and innovative solutions.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>{" "}
              <span>Musical Skills:</span> Proficient in guitar and piano
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>{" "}
              <span>Sports Enthusiast:</span> Passionate Chelsea FC fan
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              <span>Traveler:</span> Enthusiastic about exploring diverse
              cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
