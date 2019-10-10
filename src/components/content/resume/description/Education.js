import React from "react";
import { Grid } from "@material-ui/core";

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <Grid container>
        <Grid item md={4}>
          <p>2018- Yet to finish</p>
        </Grid>
        <Grid item md={8}>
          <h3>Bachelor's degree in Computer Science</h3>
          <h3>Open University of Israel</h3>
          <p>
            While in mandatory service finished in honors 3 CS courses.
            <br />
            Currently taking second year courses
          </p>
          <ul>
            <li>
              <p>High academic achievement (Current average 91)</p>
            </li>
            <li>
              <p>
                Studied fully independently (partially while in active service)
              </p>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <p>2011- 2016</p>
        </Grid>
        <Grid item md={8}>
          <h3>High school diploma</h3>
          <h3>"Zafit" High School</h3>
          <ul>
            <li>
              <p>
                Finished with honors a Computer Science Major <br /> (Which
                includes the use of C#, Javascript, HTML, and CSS)
              </p>
            </li>
            <li>
              <p>
                Participated in a project called "Computer Science, Academia and
                Industry"
                <br /> by Weizmann Institute of Science, in which finished in
                honors a programming project (in C#)
              </p>
            </li>
            <li>
              <p>High academic achievements</p>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
