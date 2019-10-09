import React from "react";
import { Grid } from "@material-ui/core";

const Certifications = () => {
  return (
    <div>
      <h1>Certifications</h1>
      <Grid container>
        <Grid item xs={2}>
          <p>Open University of Israel</p>
        </Grid>
        <Grid item xs={2}>
          <p>2018</p>
        </Grid>
        <Grid item xs={8}>
          <ul>
            <li>
              <h4>Introduction to Computer Science Using Java</h4>
            </li>
            <li>
              <h4>Data Structures and Introduction to Algorithms</h4>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <p>Weizmann Institute </p>
        </Grid>
        <Grid item xs={2}>
          <p>2016 </p>
        </Grid>
        <Grid item xs={8}>
          <ul>
            <li>
              <h4>Computer Science, Academia and Industry</h4>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <p>Udemy </p>
        </Grid>
        <Grid item xs={2}>
          <p>2019 </p>
        </Grid>
        <Grid item xs={8}>
          <ul>
            <li>
              <h4>
                Complete Python Bootcamp: Go from zero to hero in Python 3
              </h4>
            </li>
            <li>
              <h4>The Complete Web Developer in 2019: Zero to Mastery</h4>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Certifications;
