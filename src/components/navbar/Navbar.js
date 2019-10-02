import React from "react";
import "./Navbar.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <Layout>
        <Header title="My Portfolio" scroll className="header-color">
          <Navigation>
            <Link to="/">
              <span className="f3">Home</span>
            </Link>
            <Link to="/about">
              <span className="f3">About Me</span>
            </Link>
            <Link to="/projects">
              <span className="f3">Projects</span>
            </Link>
            <Link to="/resume">
              <span className="f3">Rasume</span>
            </Link>
            <Link to="/contact">
              <span className="f3">Contact</span>
            </Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
};

export default Navbar;
