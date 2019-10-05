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
import uuid4 from "uuid/v4";

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

const getProjectsType = myList => {
  let typeList = myList.map(project => project.type);
  return Array.from(new Set(typeList));
};

const Projects = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //build the projects tabs
  const projectTyps = getProjectsType(projectList);
  let projectTabs = [];
  for (let i = 0; i < projectTyps.length; i++) {
    projectTabs.push(<Tab key={uuid4()} label={projectTyps[i]} />);
  }
  //

  //build the projects tab panels
  let projectTabPanels = [];
  for (let ind = 0; ind < projectTyps.length; ind++) {
    let currentProjects = projectList.filter(
      project => project.type === projectTyps[ind]
    );
    let currentTabPanel = (
      <TabPanel
        key={uuid4()}
        value={value}
        index={ind}
        className={classes.tabPanel}
      >
        <div className="cards">
          {currentProjects.map((cardInfo, index) => {
            return (
              <div className="card" key={uuid4()}>
                <MediaCard cardInfo={cardInfo} />
              </div>
            );
          })}
        </div>
      </TabPanel>
    );
    projectTabPanels.push(currentTabPanel);
  }
  //

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
            {projectTabs}
          </Tabs>
        </AppBar>
        {projectTabPanels}
      </div>
    </div>
  );
};

export default Projects;
