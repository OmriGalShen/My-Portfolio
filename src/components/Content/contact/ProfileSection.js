import React from "react";
import Grid from "@material-ui/core/Grid";
import profilePic from "../../assets/images/profile_pic_2.jpg";
import "./Contact.css";

const ProfileSection = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className="profile-title">Omri Gal Shenhav</h1>
      </Grid>
      <Grid item xs={12}>
        <img alt="profile" src={profilePic} className="profile-pic" />
      </Grid>
      <Grid item xs={12}>
        <p className="profile-des">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Grid>
    </Grid>
  );
};

export default ProfileSection;
