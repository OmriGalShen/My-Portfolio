import React from "react";
import "./About.css";
import { Paper } from "@material-ui/core";

const myStyles = {
  paper: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "white",
    border: "3px solid black"
  }
};

const About = props => {
  return (
    <div className="about">
      <Paper style={myStyles.paper} className="about-panel">
        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <div className="about-description">
            <p>
              Hello, my name is Omri Gal Shenhav. I live in Kfar Menahem, a
              kibbutz in sothern Israel. I like to go to the gym and going with
              friends to the cinema or for a pizza. My family have 3 dogs which
              I help to take out for a walk on a daily basis.
            </p>
            <p>
              Hello, my name is Omri Gal Shenhav. I live in Kfar Menahem, a
              kibbutz in sothern Israel. I like to go to the gym and going with
              friends to the cinema or for a pizza. My family have 3 dogs which
              I help to take out for a walk on a daily basis.
            </p>
            <p>
              Hello, my name is Omri Gal Shenhav. I live in Kfar Menahem, a
              kibbutz in sothern Israel. I like to go to the gym and going with
              friends to the cinema or for a pizza. My family have 3 dogs which
              I help to take out for a walk on a daily basis.
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default About;
