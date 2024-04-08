import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.png";
import { Home2 } from "./Home2";
import { Type } from "./Type";
import { Slideshow } from "../Slides";

export const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Anmol Bhattarai</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
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
        <Row>
          <Col>
            <Slideshow />
          </Col>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
};
