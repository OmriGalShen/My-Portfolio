import React from "react";
import { Grid } from "@material-ui/core";

const Languages = () => {
  return (
    <div>
      <h1>Languages</h1>
      <Grid container>
        <Grid item xs={6}>
          <h3>Hebrew</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Native</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>English</h3>
        </Grid>
        <Grid item xs={6}>
          <h3>Excellent</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default Languages;
