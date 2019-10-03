import React, { useState } from "react";
import "./Navbar.css";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menuItem: {
    fontSize: "1.5em",
    height: "20%",
    padding: "20px",
    width: "150%"
  }
}));

const Navbar = () => {
  //def state of component
  const [openDrawer, setOpenDrawer] = useState(false);

  //get styles
  const classes = useStyles();

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const linksList = (
    <div>
      <MenuItem component={Link} to={"/"} className={classes.menuItem}>
        Home
      </MenuItem>
      <MenuItem component={Link} to={"/about"} className={classes.menuItem}>
        About Me
      </MenuItem>
      <MenuItem component={Link} to={"/projects"} className={classes.menuItem}>
        Projects
      </MenuItem>
      <MenuItem component={Link} to={"/resume"} className={classes.menuItem}>
        Resume
      </MenuItem>
      <MenuItem component={Link} to={"/contact"} className={classes.menuItem}>
        Contact
      </MenuItem>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Portfolio
          </Typography>
          <Button color="inherit" component={Link} to={"/"}>
            Home
          </Button>
          <Button color="inherit" component={Link} to={"/about"}>
            About
          </Button>
          <Button color="inherit" component={Link} to={"/projects"}>
            Project
          </Button>
          <Button color="inherit" component={Link} to={"/resume"}>
            Resume
          </Button>
          <Button color="inherit" component={Link} to={"/Contact"}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
      >
        {linksList}
      </Drawer>
    </div>
  );
};

export default Navbar;
