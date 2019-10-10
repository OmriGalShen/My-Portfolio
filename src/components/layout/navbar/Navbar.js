import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
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
    flexGrow: 1,
    padding: 20,
    textDecoration: "none",
    color: "white",
    fontSize: "1.5em",
    fontFamily: "lobster"
  },
  menuItem: {
    fontSize: "1.5em",
    padding: "20px",
    fontFamily: "lobster"
  },
  appbar: {
    background: "#23374d",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  mainlinks: {
    fontSize: "3em"
  },
  paper: { background: "#23374d", color: "white" },
  label: {
    textTransform: "capitalize",
    fontSize: "1.2em",
    fontFamily: "Raleway"
  },
  mainLinkSelected: {
    fontWeight: "bold"
  },
  manuItemSelected: {
    background: "white",
    color: "black"
  }
}));

const linksList = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact" }
];

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

  return (
    <div className="navbar">
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            id="drawer-button"
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            id="title"
            component={Link}
            to={"/"}
          >
            My Portfolio
          </Typography>
          <div className={classes.mainlinks} id="button-list">
            {linksList.map((linkItem, index) => {
              return (
                <Button
                  classes={{ label: classes.label }}
                  key={index}
                  color="inherit"
                  component={NavLink}
                  to={linkItem.link}
                  activeClassName={classes.mainLinkSelected}
                  exact={true}
                >
                  {linkItem.name}
                </Button>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        {linksList.map((linkItem, index) => {
          return (
            <MenuItem
              key={index}
              color="inherit"
              component={NavLink}
              to={linkItem.link}
              className={classes.menuItem}
              onClick={toggleDrawer(false)}
              activeClassName={classes.manuItemSelected}
              exact={true}
            >
              {linkItem.name}
            </MenuItem>
          );
        })}
      </Drawer>
    </div>
  );
};

export default Navbar;
