import React from "react";
import "./Projects.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MediaCard from "./MediaCard";
import { projectList } from "./myProjects";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper
  },
  appBar: {
    // backgroundColor: theme.palette.background.paper
  },
  tabPanel: {
    background: "#1089ff"
  }
}));

const Projects = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="projects">
      <div className="tabs">
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item 4" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <div className="cards">
            {projectList.map((cardInfo, index) => {
              return (
                <div className="card" key={index}>
                  <MediaCard cardInfo={cardInfo} />
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          <div className="cards">
            {projectList.map((cardInfo, index) => {
              return (
                <div className="card" key={index}>
                  <MediaCard cardInfo={cardInfo} />
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}>
          <div className="cards">
            {projectList.map((cardInfo, index) => {
              return (
                <div className="card" key={index}>
                  <MediaCard cardInfo={cardInfo} />
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanel}>
          <div className="cards">
            {projectList.map((cardInfo, index) => {
              return (
                <div className="card" key={index}>
                  <MediaCard cardInfo={cardInfo} />
                </div>
              );
            })}
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default Projects;
