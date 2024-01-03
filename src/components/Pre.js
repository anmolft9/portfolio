import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Preloader = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};
