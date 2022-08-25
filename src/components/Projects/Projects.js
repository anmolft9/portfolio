import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminPanel from "../../Assets/Projects/AdminPanel.png";
import ColorGame from "../../Assets/Projects/ColorGame.png";
import List from "../../Assets/Projects/To-Do-List.png";
import Quiz from "../../Assets/Projects/Quiz.png";
import YelpCamp from "../../Assets/Projects/Yelp-Camp.png";
import imageSearch from "../../Assets/Projects/imageSearch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AdminPanel}
              isBlog={false}
              title="AdminPanel CMS"
              description="The goal of the project was to develop an admin panel for an ecommerce website. I have built this game using HTML, CSS, JAVASCRIPT, ReactJS, Redux, MonogDB and Bootstrap-React."
              link="https://github.com/anmolft9/FullStack_CMS_Setup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ColorGame}
              isBlog={false}
              title="Color Game"
              description="This is a game in which the user has to click on the right color based on the RGB numbers. I have built this game using HTML, CSS and Vanilla Javascript."
              link="https://github.com/anmolft9/Color-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Quiz"
              description="It is a simple QUIZ built using HTML, CSS and Vanilla Javascript that has multiple questions and also has a timer."
              link="https://github.com/anmolft9/JS-Quiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={List}
              isBlog={false}
              title="A simple To Do List"
              description="This is a ToDo list concept that allows user to insert and delete eveything they want to do or can be used for any other purposes."
              link="https://github.com/anmolft9/ToDo-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YelpCamp}
              isBlog={false}
              title="Yelp Camp"
              description="This is a webapp I have developed that could allow a user to post and advertise their campsites. I have built this project using HTML, CSS, JAVASCRIPT, NodeJS, Express, MongoDB and few other tools"
              link="https://github.com/anmolft9/YelpCamp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageSearch}
              isBlog={false}
              title="lookforImage"
              description="It is a simple image searching app that I have developed using React JAVASCRIPT, CSS, Semantic UI and API from unsplash"
              link="https://github.com/anmolft9/lookforImage/tree/master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
