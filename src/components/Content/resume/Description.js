import React from "react";
import "./Resume.css";
import { Grid } from "@material-ui/core";

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <Grid container>
        <Grid item xs={4}>
          <p>2012- 2013</p>
        </Grid>
        <Grid item xs={8}>
          <h3 style={{ marginTop: "0px" }}>Zafit</h3>
          <p>Very cool brother</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <p>2012- 2013</p>
        </Grid>
        <Grid item xs={8}>
          <h3 style={{ marginTop: "0px" }}>Zafit</h3>
          <p>Very cool brother</p>
        </Grid>
      </Grid>
    </div>
  );
};

const Certifications = () => {
  return <div>Certifications</div>;
};
const Skills = () => {
  return <div>Skills</div>;
};
const Military = () => {
  return <div>Military </div>;
};
const Languages = () => {
  return <div>Languages </div>;
};

const Description = () => {
  return (
    <div>
      <Education />
      <Military />
      <Certifications />
      <Skills />
      <Languages />
    </div>
  );
};
export default Description;
