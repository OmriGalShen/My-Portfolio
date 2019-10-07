import React from "react";
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
import ContactSection from "./ContactSection";
import ProfileSection from "./ProfileSection";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     backgroundColor: theme.palette.background.paper
//   },
//   listText: {
//     fontSize: "9em",
//     fontFamily: "Oxygen"
//   }
// }));

const Contact = props => {
  // const styles = useStyles;
  return (
    <div className="contact">
      <Grid container className="grid shadow-5">
        <Grid item sm={12} md={6}>
          <ProfileSection />
        </Grid>
        <Grid item sm={12} md={6}>
          <ContactSection />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
