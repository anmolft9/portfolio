import "./App.css";
import React, { useState, useEffect } from "react";
import { Preloader } from "../src/components/Pre.js";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
