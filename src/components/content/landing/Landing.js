import React from "react";
import "./Landing.css";
import avatar from "../../../assets/images/avatar_mini.png";
import { linkList } from "./myLinks";

const Landing = props => {
  return (
    <div className="landing">
      <div className="banner">
        <img alt="avatar" src={avatar} className="avatar-pic" />
        <h1 className="f1 white title">Full Stack Developer</h1>
        <hr />
        <p className="white f3">Java | Python | Javascript | React | NodeJS</p>
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
      </div>
    </div>
  );
};

export default Landing;
