import React from "react";
import "./Resume.css";
import { Grid } from "@material-ui/core";
import Profile from "./Profile";
import Description from "./Description";

const Resume = props => {
  return (
    <div className="resume">
      <Grid container>
        <Grid item md={6} sm={6} style={{ paddingLeft: 40 }}>
          <Profile />
        </Grid>
        <Grid item md={6} sm={6} className="description">
          <Description />
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
