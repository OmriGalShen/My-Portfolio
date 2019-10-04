import React from "react";
import "./App.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Landing from "../landing/Landing";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch className="main-container">
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
