import React from "react";
import "./Landing.css";
import avatar from "../../assets/images/myAvatar.png";
// import { SocialIcon } from "react-social-icons";

const myLinks = [
  {
    name: "email",
    url: "mailto:shenhav.omri@gmail.com",
    icon: "fa fa-envelope-o"
  },
  {
    name: "github",
    url: "https://github.com/OmriGalShen",
    icon: "fa fa-github"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/omri-gal-shenhav-95235232/",
    icon: "fa fa-linkedin-square"
  },
  {
    name: "whatsapp",
    url: "https://wa.me/972543926292",
    icon: "fa fa-whatsapp"
  }
];

const Landing = props => {
  return (
    <div className="landing">
      <div className="banner">
        <img alt="avatar" src={avatar} className="avatar" />
        <h1 className="f1 b white title">Full Stuck Web Developer</h1>
        <p className="white f3">Java | Python | Javascript | React | NodeJS</p>
        <div className="social-links">
          {myLinks.map((link, index) => {
            return (
              <div key={index}>
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
