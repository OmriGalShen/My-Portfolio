import React from "react";
import { Grid } from "@material-ui/core";

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}>
          React,
        </Grid>
        <Grid item xs={1}>
          Node.js,
        </Grid>
        <Grid item xs={1}>
          Java,
        </Grid>
        <Grid item xs={1}>
          Python,
        </Grid>
        <Grid item xs={1}>
          C#,
        </Grid>
        <Grid item xs={1}>
          Git/Github
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
