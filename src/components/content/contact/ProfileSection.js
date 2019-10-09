import React from "react";
import Grid from "@material-ui/core/Grid";
import profilePic from "./assets/profile_pic_3.png";
import "./Contact.css";

const myStyles = {
  root: {
    textAlign: "center"
  }
};

const ProfileSection = () => {
  return (
    <Grid container style={myStyles.root} className="profile-section">
      <Grid item xs={12}>
        <h1 className="profile-title">Omri Gal Shenhav</h1>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <img alt="profile" src={profilePic} className="profile-pic" />
      </Grid>
      <Grid item xs={12}>
        <p className="profile-des">
          Hello, my name is Omri Gal Shenhav. I live in Kfar Menahem, a kibbutz
          in sothern Israel. A highly motivated and curious individual.
          Currently taking second year courses of Computer Science Bachelor's
          degree at the Open University. Interested in a full time / part time
          junior programming job. Please feel free to contact me!
        </p>
      </Grid>
    </Grid>
  );
};

export default ProfileSection;
