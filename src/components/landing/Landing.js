import React from "react";
import "./Landing.css";
import avatar from "../../assets/images/myAvatar.png";
import { SocialIcon } from "react-social-icons";

const Landing = props => {
  return (
    <div className="landing">
      <div className="banner">
        <img alt="avatar" src={avatar} className="avatar" />
        <h1 className="f1 b white">Full Stuck Web Developer</h1>
        <p className="white f3">Java | Python | Javascript | React | NodeJS</p>
        <div className="social-links">
          <SocialIcon
            url="mailto:shenhav.omri@gmail.com"
            target="_blank"
            className="social-link grow"
            style={{ height: 200, width: 200 }}
          />
          <SocialIcon
            url="https://github.com/OmriGalShen"
            target="_blank"
            className="social-link grow"
            style={{ height: 200, width: 200 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/omri-gal-shenhav-95235232/"
            target="_blank"
            className="social-link grow"
            style={{ height: 200, width: 200 }}
          />
          <SocialIcon
            network="whatsapp"
            target="_blank"
            url="https://wa.me/972543926292"
            className="social-link grow"
            style={{ height: 200, width: 200 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
