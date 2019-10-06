import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Contact.css";

const ContactSection = () => {
  return (
    <Grid container className="info">
      <Grid item xs={12}>
        <div className="info-title">
          <h1>Contact Me</h1>
          <hr />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="info-contact">
          <div>
            <i className="fa fa-phone-square" aria-hidden="true" />
            <p>+(972) 54-3926292</p>
          </div>
          <div>
            <i className="fa fa-phone-square" aria-hidden="true" />
            <p>item 2</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
