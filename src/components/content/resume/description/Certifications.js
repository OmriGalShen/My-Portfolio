import React from "react";
import { Grid } from "@material-ui/core";

const Certifications = () => {
  return (
    <div>
      <h1>Certifications</h1>
      <Grid container>
        <Grid item md={2} xs={6}>
          <p>Open University of Israel</p>
        </Grid>
        <Grid item md={2} xs={6}>
          <p className="tr">2018</p>
        </Grid>
        <Grid item md={8} xs={12}>
          <ul>
            <li>
              <p>Introduction to Computer Science Using Java</p>
            </li>
            <li>
              <p>Data Structures and Introduction to Algorithms</p>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2} xs={6}>
          <p>Weizmann Institute </p>
        </Grid>
        <Grid item md={2} xs={6}>
          <p className="tr">2016 </p>
        </Grid>
        <Grid item md={8} xs={12}>
          <ul>
            <li>
              <p>Computer Science, Academia and Industry</p>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2} xs={6}>
          <p>Udemy </p>
        </Grid>
        <Grid item md={2} xs={6}>
          <p className="tr">2019 </p>
        </Grid>
        <Grid item md={8} xs={12}>
          <ul>
            <li>
              <p>Complete Python Bootcamp: Go from zero to hero in Python 3</p>
            </li>
            <li>
              <p>The Complete Web Developer in 2019: Zero to Mastery</p>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Certifications;
