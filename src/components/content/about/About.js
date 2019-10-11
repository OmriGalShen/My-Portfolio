import React from "react";
import "./About.css";
import { Paper } from "@material-ui/core";

const myStyles = {
  paper: {
    background: "rgba(0, 0, 0, 0.7)",
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
              I was first exposed to programming at 8th grade when my friend
              showed me a c++ program he wrote, which seemed very cool to me.
              Together we wrote very simple text games, using tutorials in
              Youtube.
            </p>
            <p>
              In 10th grade, I choose to study computer science and physics. In
              the computer science class, we learned the basics of programming
              in C#. I also made a simple news site using HTML/CSS/JS and C#
              with .NET framework. I also participated in a project called
              "Computer Science, Academia and Industry" by Weizmann Institute of
              Science, in which I made a simple geometric optics simulator
              (WinForms application) using C#.
            </p>
            <p>
              In the middle of my mandatory army service, I decided I miss
              studying and I was motivated to develop myself. To so I started to
              take Computer Science courses at the Open University. I studies
              fully independently using mostly books and some videos at the
              University site.
            </p>
            <p>
              Today I study independently second-year courses but interested in
              my first job in the field. In the meanwhile, I also study using
              the internet Python, React, Node.js and more.
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default About;
