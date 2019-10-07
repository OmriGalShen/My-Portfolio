import React from "react";
import { Grid } from "@material-ui/core";

const Education = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <p>
            {props.startYear}- {props.endYear}
          </p>
        </Grid>
        <Grid ites xs={8}>
          <h3 style={{ marginTop: "0px" }}>{props.schoolName}</h3>
          <p>{props.schoolDescription}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
