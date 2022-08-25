import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, My name is <span className="purple">Anmol Bhattarai </span>
            originally from <span className="purple"> Chitwan, Nepal </span>
            but now residing in{" "}
            <span className="purple"> QueanBeyan NSW Australia.</span>
            <br />I have studied Master's in Technology(Software Engineering)
            from Federation University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Guitar and
              Piano
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Soccer( I am
              a Chelsea FC fan)
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
