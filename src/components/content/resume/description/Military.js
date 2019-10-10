import React from "react";
import { Grid } from "@material-ui/core";

const Military = () => {
  return (
    <div>
      <h1>Military service</h1>
      <Grid container>
        <Grid item md={4}>
          <p>2016- 2019</p>
        </Grid>
        <Grid item md={8}>
          <h3>Air Force, The Maintenance Squadron</h3>
          <h3>Sufa-Avionics department (Avionics - "aviation electronics")</h3>
          <p>End of service as a First Sergeant</p>
          <ul>
            <li>
              <p> Managed teams under operational pressure</p>
            </li>
            <li>
              <p>
                Worked with high value and advance software and equipment <br />
                (in collaboration with companies such as Rafael and 8200)
              </p>
            </li>
            <li>
              <p>
                Worked with a wide variety of technological equipment such as{" "}
                <br />
                Cameras, Night vision cameras (IR), lasers, antennas and many
                more
              </p>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};
export default Military;
