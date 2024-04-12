import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards.js";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";

import AdminPanel from "../../Assets/Projects/AdminPanel.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";
import ColorGame from "../../Assets/Projects/ColorGame.png";
import List from "../../Assets/Projects/To-Do-List.png";
import Quiz from "../../Assets/Projects/Quiz.png";
import YelpCamp from "../../Assets/Projects/Yelp-Camp.png";
import imageSearch from "../../Assets/Projects/imageSearch.png";
import MovieApi from "../../Assets/Projects/MovieApi.png";

export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row>
          <Col>
            <div style={{ color: "#8c7851" }} className="mt-2 mb-5 ts-5">
              <h3 color="">My Github Contributions</h3>
              {/* github green dots  */}
              <img
                src="http://ghchart.rshah.org/anmolft9"
                alt="anmol Bhattarai's Github chart"
              />
            </div>
          </Col>
        </Row>
        {/* <h1 style={{ color: "#8c7851" }} className="project-heading">
          My Projects On Github
        </h1> */}
        <Typewriter
          options={{
            strings: [
              '<span style="color: #8c7851;">My Github Projects</span>',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AdminPanel}
              title="AdminPanel CMS"
              description="The goal of the project was to develop an admin panel for an ecommerce website. I have built this application using HTML, CSS, JAVASCRIPT, ReactJS, Redux, MonogDB and Bootstrap-React."
              link="https://github.com/anmolft9/FullStack_CMS_Setup"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Expense Tracker"
              description="The goal of the project was to develop an application that would track our expenses or income accordingly. I have built this game using HTML, CSS, JAVASCRIPT, ReactJS, Redux, MonogDB and Bootstrap-React."
              link="https://github.com/anmolft9/ExpenseTracker_Redux"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieApi}
              title="Movie Api"
              description="The goal of the project was to develop an application that would let user to categorise the movie that would be provided through api call into happy or sad genre. The Api call would also give the imdb information. I have built this application using HTML, CSS, JAVASCRIPT, ReactJS, Redux, MonogDB and Bootstrap-React."
              link="https://github.com/anmolft9/Movie_React"
              live="https://movie-react-kappa.vercel.app"
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
};
