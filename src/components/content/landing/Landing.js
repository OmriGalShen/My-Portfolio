import React from "react";
import "./Landing.css";
import avatar from "../../../assets/images/avatar_mini.png";
import { linkList } from "./myLinks";
import { Paper } from "@material-ui/core";

const myStyles = {
  paper: {
    // background: "rgba(0, 0, 0, 0.9)",
    // backgroundImage: "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)",
    // backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
    backgroundImage: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
    color: "black",
    border: "3px solid black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3em"
  }
};

const Landing = props => {
  return (
    <div className="landing">
      <Paper style={myStyles.paper}>
        <img alt="avatar" src={avatar} className="avatar-pic" />
        <h1 className="f1 title">Full Stack Developer</h1>
        <hr />
        <p className="f3">Java | Python | Javascript | React | NodeJS</p>
        <div className="social-links">
          {linkList.map((link, index) => {
            return (
              <div key={index} className="grow">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon} aria-hidden="true"></i>
                </a>
              </div>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default Landing;
