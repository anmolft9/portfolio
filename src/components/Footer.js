import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="footer">
      <div md="4" className="d-flex justify-content-center">
        <h3>Developed by Anmol Bhattarai</h3>
      </div>
    </Container>
  );
};
