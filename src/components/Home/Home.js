import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.png";
import { Home2 } from "./Home2";
import { Type } from "./Type";
import { ProjectCard } from "../Projects/ProjectCards";
import AdminPanel from "../../Assets/Projects/AdminPanel.png";

// import { Slideshow } from "../Slides";

export const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 25 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Anmol Bhattarai</strong>
              </h1>

              <div
                style={{
                  marginTop: 40,
                  paddingRight: 200,
                  marginRight: -20,
                  textAlign: "right",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="rounded-left block-example border border-info border-shadow border-left-0 img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <div style={{ marginTop: 100 }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={AdminPanel}
              isBlog={false}
              title="AdminPanel CMS"
              description="The goal of the project was to develop an admin panel for an ecommerce website. I have built this application using HTML, CSS, JAVASCRIPT, ReactJS, Redux, MonogDB and Bootstrap-React."
              link="https://github.com/anmolft9/FullStack_CMS_Setup"
            />
          </Col>
        </div>
      </Container>
      <Home2 />
    </section>
  );
};
