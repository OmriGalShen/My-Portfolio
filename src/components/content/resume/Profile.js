import React from "react";
import "./Resume.css";
import avatarImage from "./assets/myAvatar.png";

const Profile = () => {
  return (
    <div className="profile">
      <img alt="avatar" src={avatarImage} className="avatar" />
      <h1 className="name-title">Omri Gal Shenhav</h1>
      <h2 className="black-80">Programmer</h2>
      <hr />
      <p>
        A highly motivated and curious individual.
        <br /> Currently taking second year courses of Computer Science
        Bachelor's degree at the Open University.
        <br />
      </p>
      <p>
        Interested in a full time / part time <br /> junior programming job.
      </p>
      <hr />
      <h4>Address</h4>
      <p>Israel, Kfar Menahem </p>
      <h4>Phone</h4>
      <p>+(972)-54-3926292</p>
      <h4>Email</h4>
      <p>shenhav.omri@gmail.com</p>
      <hr />
    </div>
  );
};
export default Profile;
