import React from "react";
import "./Landing.css";
import { Grid, Cell } from "react-mdl";
import avatar from "../../assets/images/myAvatar.png";
import { SocialIcon } from "react-social-icons";

const Landing = props => {
  return (
    <div className="landing shadow-5">
      <div className="banner pa5">
        <img alt="avatar" src={avatar} className="avatar" />
        <h1 className="f1 b white">Full Stuck Web Developer</h1>
        <p className="white f3">Java | Python | Javascript | React | NodeJS</p>
        <div className="social-links">
          <SocialIcon
            url="mailto:shenhav.omri@gmail.com"
            target="_blank"
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            url="https://github.com/OmriGalShen"
            target="_blank"
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/omri-gal-shenhav-95235232/"
            target="_blank"
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            network="whatsapp"
            target="_blank"
            url="https://wa.me/972543926292"
            style={{ height: 60, width: 60 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
