import React from "react";
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
import ContactSection from "./ContactSection";
import ProfileSection from "./ProfileSection";
import { Paper } from "@material-ui/core";

const myStyles = {
  root: {
    textAlign: "center"
  },
  paper: {
    background: "black",
    color: "white",
    opacity: 0.9,
    border: "3px solid black"
  }
};

const Contact = props => {
  return (
    <div className="contact" style={myStyles.root}>
      <Paper style={myStyles.paper}>
        <Grid container className="grid shadow-5">
          <Grid item sm={12} md={6}>
            <ProfileSection />
          </Grid>
          <Grid item sm={12} md={6}>
            <ContactSection />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Contact;
