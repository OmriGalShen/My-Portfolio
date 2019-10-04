import React from "react";
import "./Footer.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    // background: "#3f51b5",
    color: "white",
    opacity: 0.8,
    background: "black"
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className="shadow-5 footer white ba bw1 b--black">
      <Paper className={classes.paper}>
        <p className="f5">Made By Omri Gal Shenhav</p>
        <p className="f5">2019</p>
      </Paper>
    </div>
  );
};

export default Footer;
