import React from "react";
import "./Footer.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    background: "#3f51b5",
    color: "white"
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className="shadow-5 footer white ba bw1 b--black">
      <Paper className={classes.paper}>
        <p className="f4">Made By Omri Gal Shenhav</p>
        <p className="f4">2019</p>
      </Paper>
    </div>
  );
};

export default Footer;
