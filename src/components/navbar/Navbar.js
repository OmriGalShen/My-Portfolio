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
    padding: "20px"
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

  const linksList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" }
  ];

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
          {linksList.map((linkItem, index) => {
            return (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={linkItem.link}
              >
                {linkItem.name}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
      >
        {linksList.map((linkItem, index) => {
          return (
            <MenuItem
              key={index}
              color="inherit"
              component={Link}
              to={linkItem.link}
              className={classes.menuItem}
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
