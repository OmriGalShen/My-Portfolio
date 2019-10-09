import React from "react";
import { Grid } from "@material-ui/core";

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <Grid container>
        <Grid item md={2} xs={false}></Grid>
        <Grid item md={1} xs={6}>
          React,
        </Grid>
        <Grid item md={1} xs={6}>
          Node.js,
        </Grid>
        <Grid item md={1} xs={6}>
          Java,
        </Grid>
        <Grid item md={1} xs={6}>
          Python,
        </Grid>
        <Grid item md={1} xs={6}>
          C#,
        </Grid>
        <Grid item md={1} xs={6}>
          Git/Github
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
