import React from "react";
import "./Resume.css";
import { Grid } from "@material-ui/core";
import avatarImage from "./assets/myAvatar.png";

const Resume = props => {
  return (
    <div className="resume">
      <Grid container>
        <Grid item md={4} sm={6} style={{ paddingLeft: 40 }}>
          <div className="profile">
            <img alt="avatar" src={avatarImage} className="avatar" />
            <h1 className="name-title">Omri Gal Shenhav</h1>
            <h2 className="black-80">Programmer</h2>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing
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
        </Grid>
        <Grid item md={4} sm={6} className="right-col">
          Right side
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
