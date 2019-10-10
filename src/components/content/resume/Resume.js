import React from "react";
import "./Resume.css";
import { Grid } from "@material-ui/core";
import Profile from "./Profile";
import Description from "./Description";

const Resume = props => {
  return (
    <div className="resume">
      <Grid container>
        <Grid item xs={12} md={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={9}>
          <Description />
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
