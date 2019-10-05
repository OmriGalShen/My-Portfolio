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
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Router>
          <Grid item xs={12}>
            <div className="navbar">
              <Navbar />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="main-container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
