import React from "react";
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  listText: {
    fontSize: 25,
    fontFamily: "Oxygen"
  }
}));

const ProfileSection = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className="profile-title">Omri Gal Shenhav</h1>
      </Grid>
      <Grid item xs={12}>
        <img
          alt="profile"
          src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
          className="profile-pic"
        />
      </Grid>
      <Grid item xs={12}>
        <p className="profile-des">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Grid>
    </Grid>
  );
};

const InfoSection = () => {
  const classes = useStyles();
  return (
    <Grid container className="info">
      <Grid item xs={12}>
        <div className="info-title">
          <h1>Contact Me</h1>
          <hr />
        </div>
        <div className="info-contact">
          <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <i className="fab fa-phone-squre" aria-hidden="true" />
                <p>item 1</p>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <p>item 2</p>
              </ListItem>
            </List>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const Contact = props => {
  return (
    <div className="contact">
      <Grid container className="grid">
        <Grid item xs={6}>
          <ProfileSection />
        </Grid>
        <Grid item xs={6}>
          <InfoSection />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
